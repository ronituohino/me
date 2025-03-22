import { createEffect } from "solid-js";
import { drawSprite, loadImage, disableSmoothing } from "./aseprite";

import styles from "./Background.module.css";

const BACKGROUND_SIZE = 256;

function renderBackground(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  let ratioX = Math.floor(canvas.width / BACKGROUND_SIZE);
  let ratioY = Math.floor(canvas.height / BACKGROUND_SIZE);

  let ratio = Math.max(ratioX, ratioY);
  if (ratioX < 2 || ratioY < 2) {
    ratio = 2;
  }
  if (ratioX > 4) {
    ratio = 4;
  }

  const scale = ratio + 1;

  disableSmoothing(context);
  drawSprite({
    context,
    image: "senja-min",
    frame: 0,
    position: {
      x: ratioX > 4 ? (canvas.width - BACKGROUND_SIZE * scale) / 2 : 0,
      y: 0,
    },
    scale: ratio + 1,
  });
}

export function Background() {
  let canvas: undefined | HTMLCanvasElement;

  createEffect(async () => {
    if (!canvas) {
      return;
    }
    await loadImage({
      name: "senja-min",
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
