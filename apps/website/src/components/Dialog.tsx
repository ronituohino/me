import type { ResolvedChildren } from "solid-js";

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
          if (dialog) {
            dialog.showModal();
          }
        }}
      >
        {button}
      </button>
      <dialog ref={dialog}>
        <button
          onClick={() => {
            if (dialog) {
              dialog.close();
            }
          }}
        >
          close
        </button>
        {children}
      </dialog>
    </>
  );
}
