import { createEffect, createSignal } from "solid-js";
import { Icon } from "@components/Icon";

import styles from "./Slideshow.module.css";

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
      <button
        onClick={() => {
          const previousIndex = currentIndex() - 1;
          if (previousIndex >= 0) {
            setCurrentIndex(previousIndex);
          }
        }}
        class={styles.previous}
        data-disabled={leftArrowDisabled()}
      >
        <Icon
          icon="l_arrow"
          disabled={leftArrowDisabled()}
          class={styles.arrow}
        />
      </button>
      <img
        src={props.images[currentIndex()].src}
        alt={props.images[currentIndex()].alt}
        width={props.images[currentIndex()].width}
        height={props.images[currentIndex()].height}
        class={styles.image}
      />
      <button
        onClick={() => {
          const nextIndex = currentIndex() + 1;
          if (nextIndex < props.images.length) {
            setCurrentIndex(nextIndex);
          }
        }}
        class={styles.next}
        data-disabled={rightArrowDisabled()}
      >
        <Icon
          icon="r_arrow"
          disabled={rightArrowDisabled()}
          class={styles.arrow}
        />
      </button>
    </>
  );
}
