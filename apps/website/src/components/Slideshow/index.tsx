import { createEffect, createSignal } from "solid-js";
import { IconButton } from "@components/IconButton";
import { Dialog } from "@components/Dialog";

import book from "./book.webp";
import writing from "./writing.webp";

const IMAGES = [book, writing];
const IMAGE_ALTS = [
  "Top book Ørnfjord with rock climbers in the background",
  "Open book with the text 'Hiton siisti mesta!' from Satu, Roni, Antton, and Perttu",
];

import styles from "./Slideshow.module.css";

export function Slideshow() {
  const [open, setOpen] = createSignal(false);
  const [currentIndex, setCurrentIndex] = createSignal(0);
  const [leftArrowDisabled, setLeftArrowDisabled] = createSignal(false);
  const [rightArrowDisabled, setRightArrowDisabled] = createSignal(false);

  createEffect(() => {
    if (currentIndex() === 0) {
      setLeftArrowDisabled(true);
    } else {
      setLeftArrowDisabled(false);
    }
    if (currentIndex() === IMAGES.length - 1) {
      setRightArrowDisabled(true);
    } else {
      setRightArrowDisabled(false);
    }
  });

  const nextImage = () => {
    const nextIndex = currentIndex() + 1;
    if (nextIndex < IMAGES.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const previousImage = () => {
    const previousIndex = currentIndex() - 1;
    if (previousIndex >= 0) {
      setCurrentIndex(previousIndex);
    }
  };

  return (
    <>
      <IconButton
        ariaLabel="Open picture collection"
        icon={{ icon: "note" }}
        button={{
          onClick: () => {
            setOpen(true);
          },
        }}
      />
      <div
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            previousImage();
          } else if (e.key === "ArrowRight") {
            nextImage();
          }
        }}
      >
        <Dialog open={open()} setOpen={setOpen} hideFrame>
          <div class={styles.wrapper}>
            <IconButton
              ariaLabel="Show previous image"
              icon={{ icon: "l_arrow" }}
              button={{
                onClick: previousImage,
                class: styles.previous,
              }}
              disabled={leftArrowDisabled()}
            />

            <img
              src={IMAGES[currentIndex()].src}
              alt={IMAGE_ALTS[currentIndex()]}
              width={IMAGES[currentIndex()].width}
              height={IMAGES[currentIndex()].height}
              class={styles.image}
              aria-live="polite"
            />

            <IconButton
              ariaLabel="Show next image"
              icon={{ icon: "r_arrow" }}
              button={{
                onClick: nextImage,
                class: styles.next,
              }}
              disabled={rightArrowDisabled()}
            />
          </div>
        </Dialog>
      </div>
    </>
  );
}
