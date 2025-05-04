import { createSignal, type ResolvedChildren } from "solid-js";

import styles from "./Dialog.module.css";

export function Dialog({
  button,
  children,
}: {
  button?: ResolvedChildren;
  children: ResolvedChildren;
}) {
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
          dialog.showModal();
        }}
        class={styles.button}
      >
        {button}
      </button>
      <dialog
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
      >
        <button
          onClick={() => {
            if (dialog) {
              setOpen(false);
            }
          }}
          class={styles.close}
        >
          close
        </button>
        {children}
      </dialog>
    </>
  );
}
