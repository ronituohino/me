import { createSignal, type ResolvedChildren } from "solid-js";

import styles from "./Dialog.module.css";
import { Icon } from "@components/Icon";

type Props = {
  button?: ResolvedChildren;
  children: ResolvedChildren;
  fullscreen?: boolean;
};

export function Dialog({ button, children, fullscreen = false }: Props) {
  const [open, setOpen] = createSignal(false);
  let dialog: HTMLDialogElement | undefined;

  return (
    <>
      <button
        onClick={() => {
          if (!dialog) {
            return;
          }
          setOpen(true);
          dialog.show();
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
          if (!dialog) {
            return;
          }

          const rect = dialog.getBoundingClientRect();
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
        data-fullscreen={fullscreen}
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
        <div class={styles.content}>{children}</div>
      </dialog>
    </>
  );
}
