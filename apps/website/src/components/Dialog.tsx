import type { ResolvedChildren } from "solid-js";

import styles from "./Dialog.module.css";

export function Dialog({
  button,
  children,
}: {
  button: ResolvedChildren;
  children: ResolvedChildren;
}) {
  let dialog: HTMLDialogElement | undefined;

  return (
    <>
      <button
        onClick={() => {
          if (!dialog) {
            return;
          }

          dialog.showModal();
        }}
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
            dialog.close();
          }
        }}
        class={styles.dialog}
      >
        <button
          onClick={() => {
            if (dialog) {
              dialog.close();
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
