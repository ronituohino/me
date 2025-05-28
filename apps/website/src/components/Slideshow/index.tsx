import { createEffect, createSignal } from "solid-js";
import { Icon } from "@components/Icon";

import styles from "./Slideshow.module.css";
import { IconButton } from "@components/IconButton";
import { Dialog } from "@components/Dialog";

type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  images: Image[];
};

export function Slideshow(props: Props) {
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
    if (currentIndex() === props.images.length - 1) {
      setRightArrowDisabled(true);
    } else {
      setRightArrowDisabled(false);
    }
  });

  const nextImage = () => {
    const nextIndex = currentIndex() + 1;
    if (nextIndex < props.images.length) {
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
              src={props.images[currentIndex()].src}
              alt={props.images[currentIndex()].alt}
              width={props.images[currentIndex()].width}
              height={props.images[currentIndex()].height}
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
