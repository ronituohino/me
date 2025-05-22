import { createEffect, createSignal, type ResolvedChildren } from "solid-js";

import styles from "./Dialog.module.css";
import { Icon } from "@components/Icon";

type Props = {
  button?: ResolvedChildren;
  children: ResolvedChildren;
  frame?: boolean;
  contain?: boolean;
};

export function Dialog({
  button,
  children,
  frame = true,
  contain = false,
}: Props) {
  const [open, setOpen] = createSignal(false);
  let dialog: HTMLDialogElement | undefined;
  let content: HTMLDivElement | undefined;

  const resize = () => {
    if (!dialog || !content) {
      return;
    }
    if (!open()) {
      return;
    }

    const rect = content.getBoundingClientRect();
    const diff =
      window.innerHeight -
      rect.height -
      2 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 2rem
    if (diff > 0) {
      dialog.style.setProperty("--top", `${diff / 2}px`);
    } else {
      dialog.style.setProperty("--top", `0px`);
    }
  };

  createEffect(() => {
    addEventListener("resize", resize);
    return () => {
      removeEventListener("resize", resize);
    };
  });

  return (
    <>
      <button
        onClick={() => {
          if (!dialog) {
            return;
          }
          setOpen(true);
          dialog.show();
          resize();
        }}
        class={styles.button}
      >
        {button}
      </button>
      <dialog
        // @ts-ignore
        closedby="any"
        ref={dialog}
        onClick={(e) => {
          // Close dialog when clicking outside of it
          if (!content) {
            return;
          }

          const rect = content.getBoundingClientRect();
          const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;

          if (!isInDialog) {
            setOpen(false);
          }
        }}
        onCancel={(e) => {
          // Esc key
          e.preventDefault();
          setOpen(false);
        }}
        onAnimationEnd={(e) => {
          if (dialog && !open()) {
            dialog.close();
          }
        }}
        class={styles.dialog}
        data-open={open()}
      >
        <button
          onClick={() => {
            if (dialog) {
              setOpen(false);
            }
          }}
          class={styles.close}
        >
          <Icon icon="cross" />
        </button>
        <div
          class={styles.content}
          ref={content}
          data-frame={frame}
          data-contain={contain}
        >
          {children}
        </div>
      </dialog>
    </>
  );
}
