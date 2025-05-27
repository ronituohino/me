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

  return (
    <>
      <IconButton
        icon={{ icon: "ruler" }}
        button={{
          onClick: () => {
            setOpen(true);
          },
        }}
      />
      <Dialog open={open()} setOpen={setOpen} frame={false} contain>
        <>
          <IconButton
            icon={{ icon: "l_arrow" }}
            button={{
              onClick: () => {
                const previousIndex = currentIndex() - 1;
                if (previousIndex >= 0) {
                  setCurrentIndex(previousIndex);
                }
              },
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
          />

          <IconButton
            icon={{ icon: "r_arrow" }}
            button={{
              onClick: () => {
                const nextIndex = currentIndex() + 1;
                if (nextIndex < props.images.length) {
                  setCurrentIndex(nextIndex);
                }
              },
              class: styles.next,
            }}
            disabled={rightArrowDisabled()}
          />
        </>
      </Dialog>
    </>
  );
}
