import { createSignal } from "solid-js";

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

export function Slideshow({ images }: Props) {
  const [currentIndex, setCurrentIndex] = createSignal(0);

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
        data-disabled={currentIndex() === 0}
      >
        prev
      </button>
      <img
        src={images[currentIndex()].src}
        alt={images[currentIndex()].alt}
        width={images[currentIndex()].width}
        height={images[currentIndex()].height}
        class={styles.image}
      />
      <button
        onClick={() => {
          const nextIndex = currentIndex() + 1;
          if (nextIndex < images.length) {
            setCurrentIndex(nextIndex);
          }
        }}
        class={styles.next}
        data-disabled={currentIndex() === images.length - 1}
      >
        next
      </button>
    </>
  );
}
