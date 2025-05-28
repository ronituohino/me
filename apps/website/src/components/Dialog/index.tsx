import { createEffect, type JSXElement } from "solid-js";

import styles from "./Dialog.module.css";
import { IconButton } from "@components/IconButton";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: JSXElement;
  hideFrame?: boolean;
};

export function Dialog(props: Props) {
  let dialog: HTMLDialogElement | undefined;
  let content: HTMLDivElement | undefined;

  createEffect(() => {
    if (!dialog) {
      return;
    }
    if (props.open) {
      dialog.showModal();
    }
  });

  const cancelDialog = (e: Event) => {
    e.preventDefault();
    props.setOpen(false);
  };

  return (
    <>
      <dialog
        ref={dialog}
        onClick={(e) => {
          // Close dialog when clicking outside of it
          if (!content || (e.clientX === 0 && e.clientY === 0)) {
            return;
          }

          const rect = content.getBoundingClientRect();
          const isInDialog =
            rect.top <= e.clientY &&
            e.clientY <= rect.top + rect.height &&
            rect.left <= e.clientX &&
            e.clientX <= rect.left + rect.width;

          if (!isInDialog) {
            props.setOpen(false);
          }
        }}
        onAnimationEnd={() => {
          if (dialog && !props.open) {
            dialog.close();
          }
        }}
        class={styles.dialog}
        data-open={props.open}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            cancelDialog(e);
          }
        }}
        onCancel={(e) => {
          cancelDialog(e);
        }}
      >
        <IconButton
          ariaLabel="Close dialog"
          button={{
            onClick: () => {
              if (dialog) {
                props.setOpen(false);
              }
            },
            class: styles.close,
          }}
          icon={{ icon: "close" }}
        />

        <div class={styles.content} ref={content} data-frame={!props.hideFrame}>
          {props.children}
        </div>
      </dialog>
    </>
  );
}
