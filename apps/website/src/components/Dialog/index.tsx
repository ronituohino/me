import { createEffect, createSignal, type ResolvedChildren } from "solid-js";

import styles from "./Dialog.module.css";
import { Icon } from "@components/Icon";

type Props = {
  button?: ResolvedChildren;
  children: ResolvedChildren;
  frame?: boolean;
  contain?: boolean;
};

export function Dialog(props: Props) {
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

    const twoRem =
      2 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 2rem

    const diffX = window.innerWidth - rect.width - twoRem;
    const diffY = window.innerHeight - rect.height - twoRem;

    let overflow = false;

    if (diffY > 0) {
      dialog.style.setProperty("--top", `${diffY / 2}px`);
    } else {
      overflow = true;
      dialog.style.setProperty("--top", `0px`);
    }
    if (diffX > 0) {
      dialog.style.setProperty("--right", `${diffX / 2}px`);
    } else {
      overflow = true;
      dialog.style.setProperty("--right", `${diffX}px`);
    }

    if (overflow) {
      dialog.style.setProperty("overflow", "scroll");
    } else {
      dialog.style.setProperty("overflow", "hidden");
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
        {props.button}
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
          <Icon icon="close" />
        </button>
        <div
          class={styles.content}
          ref={content}
          data-frame={props.frame ?? true}
          data-contain={props.contain ?? false}
        >
          {props.children}
        </div>
      </dialog>
    </>
  );
}
