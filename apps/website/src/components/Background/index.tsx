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
  mousePos?: number[],
  panningPos?: number[]
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
  } else if (panningPos) {
    x = panningPos[0];
    y = panningPos[1];
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
  const [mousePos, setMousePos] = createSignal([0, 0]);

  // Mobile
  const [prevTouch, setPrevTouch] = createSignal<number[] | undefined>(
    undefined
  );
  const [panningPos, setPanningPos] = createSignal([0, 0]);

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
      renderBackground(canvas, scale());
    }

    resize();
    window.addEventListener("resize", () => {
      resize();
    });

    window.addEventListener("pointermove", (e) => {
      if (e.pointerType === "mouse") {
        setMousePos([e.clientX, e.clientY]);
        renderBackground(canvas, scale(), mousePos(), undefined);
      } else {
        const prev = prevTouch();
        if (prev) {
          const movement = [e.clientX - prev[0], e.clientY - prev[1]];
          const newPos = [
            panningPos()[0] + movement[0],
            panningPos()[1] + movement[1],
          ];

          // Panning limits
          if (newPos[0] > 0) {
            newPos[0] = 0;
          }
          if (newPos[1] > 0) {
            newPos[1] = 0;
          }
          const minX = ((BACKGROUND_WIDTH * scale()) % canvas.width) * -1;
          if (newPos[0] < ((BACKGROUND_WIDTH * scale()) % canvas.width) * -1) {
            newPos[0] = minX;
          }
          const minY = ((BACKGROUND_HEIGHT * scale()) % canvas.height) * -1;
          if (
            newPos[1] <
            ((BACKGROUND_HEIGHT * scale()) % canvas.height) * -1
          ) {
            newPos[1] = minY;
          }

          setPanningPos([newPos[0], newPos[1]]);
        }

        renderBackground(canvas, scale(), undefined, panningPos());
        setPrevTouch([e.clientX, e.clientY]);
      }
    });

    window.addEventListener("pointercancel", () => {
      setPrevTouch(undefined);
    });
    window.addEventListener("pointerleave", () => {
      setPrevTouch(undefined);
    });
    window.addEventListener("pointerup", () => {
      setPrevTouch(undefined);
    });
  });

  return (
    <canvas ref={canvas} width={1920} height={954} class={styles.canvas} />
  );
}
