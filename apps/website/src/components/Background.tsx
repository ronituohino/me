import { createEffect } from "solid-js";
import { drawSprite, loadImage, disableSmoothing } from "./aseprite";

import styles from "./Background.module.css";

const BACKGROUND_WIDTH = 320;
const BACKGROUND_HEIGHT = 180;

function renderBackground(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  let ratioX = Math.floor(canvas.width / BACKGROUND_WIDTH);
  let ratioY = Math.floor(canvas.height / BACKGROUND_HEIGHT);

  let ratio = Math.max(ratioX, ratioY);
  if (ratio < 1) {
    ratio = 1;
  }

  const scale = ratio + 1;
  document.body.style.fontSize = `${scale * 10}px`;

  disableSmoothing(context);
  drawSprite({
    context,
    image: "senja",
    frame: 0,
    position: {
      x: 0,
      y: 0,
    },
    scale,
  });
}

export function Background() {
  let canvas: undefined | HTMLCanvasElement;

  createEffect(async () => {
    if (!canvas) {
      return;
    }
    await loadImage({
      name: "senja",
      basePath: "/senja",
    });

    renderBackground(canvas);
    window.addEventListener("resize", () => {
      renderBackground(canvas);
    });
  });

  return (
    <canvas ref={canvas} width={1920} height={954} class={styles.canvas} />
  );
}
