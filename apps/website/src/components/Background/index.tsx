import { createEffect, createSignal } from "solid-js";
import { drawSprite, loadImage, disableSmoothing } from "./aseprite";

import styles from "./Background.module.css";

const BACKGROUND_WIDTH = 320;
const BACKGROUND_HEIGHT = 180;

function calculateScale(width: number, height: number) {
  let ratioX = Math.floor(width / BACKGROUND_WIDTH);
  let ratioY = Math.floor(height / BACKGROUND_HEIGHT);

  let ratio = Math.max(ratioX, ratioY);
  if (ratio < 1) {
    ratio = 1;
  }

  return ratio + 1;
}

function renderBackground(
  canvas: HTMLCanvasElement,
  scale: number,
  mousePos?: number[]
) {
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  let x = 0;
  let y = 0;

  if (mousePos) {
    x =
      (mousePos[0] / canvas.width) *
      ((BACKGROUND_WIDTH * scale) % canvas.width) *
      -1;

    y =
      (mousePos[1] / canvas.height) *
      ((BACKGROUND_HEIGHT * scale) % canvas.height) *
      -1;
  }

  disableSmoothing(context);
  drawSprite({
    context,
    image: "senja",
    frame: 0,
    position: {
      x,
      y,
    },
    scale,
  });
}

export function Background() {
  let canvas: undefined | HTMLCanvasElement;
  const [scale, setScale] = createSignal(1);

  // Desktop
  const [mousePos, setMousePos] = createSignal([60, 600]);

  createEffect(async () => {
    if (!canvas) {
      return;
    }
    await loadImage({
      name: "senja",
      basePath: "/senja",
    });

    function resize() {
      if (!canvas) {
        return;
      }
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setScale(calculateScale(canvas.width, canvas.height));
      renderBackground(canvas, scale(), mousePos());
    }

    resize();
    window.addEventListener("resize", () => {
      resize();
    });

    window.addEventListener("pointermove", (e) => {
      if (e.pointerType === "mouse") {
        setMousePos([e.clientX, e.clientY]);
        renderBackground(canvas, scale(), mousePos());
      }
      // No support for mobile devies
    });
  });

  return (
    <canvas ref={canvas} width={1920} height={954} class={styles.canvas} />
  );
}
