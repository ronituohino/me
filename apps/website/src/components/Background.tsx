import { createEffect } from "solid-js";
import { drawSprite, loadImage, disableSmoothing, images } from "./aseprite";

import styles from "./Background.module.css";

export function Background() {
  let canvas: undefined | HTMLCanvasElement;

  createEffect(async () => {
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    await loadImage({
      name: "senja-min",
      basePath: "/senja",
    });
    disableSmoothing(context);
    drawSprite({
      context,
      image: "senja-min",
      frame: 0,
      position: { x: 0, y: 0 },
      scale: 4,
    });
  });

  return (
    <canvas ref={canvas} width={1200} height={1200} class={styles.canvas} />
  );
}
