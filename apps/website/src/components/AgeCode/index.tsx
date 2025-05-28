import { Link } from "@components/Link";
import { Dialog } from "@components/Dialog";
import { createSignal } from "solid-js";
import { IconButton } from "@components/IconButton";

import styles from "./AgeCode.module.css";

const AGE_PUBLIC_KEY =
  "age1uguwhdrla2ae2uvvty5zlvg4nnjr86rf50a5rw63fn99dagsj3xs9cgq2n";

export function AgeCode() {
  const [open, setOpen] = createSignal(false);

  let codeRef: HTMLTextAreaElement | undefined;

  return (
    <>
      <IconButton
        ariaLabel="Open encryption key dialog"
        icon={{ icon: "key" }}
        button={{
          onClick: () => {
            setOpen(true);
          },
        }}
      />
      <Dialog open={open()} setOpen={setOpen}>
        <div class={styles.wrapper}>
          To send me secure mail, please use{" "}
          <Link href="https://github.com/FiloSottile/age">age</Link> with the
          following public key
          <div
            class={styles.codeContainer}
            onClick={() => {
              codeRef?.select();
            }}
          >
            <textarea ref={codeRef} class={styles.code} rows={1}>
              {AGE_PUBLIC_KEY}
            </textarea>
          </div>
          <Link href={`https://age-online.com/?r=${AGE_PUBLIC_KEY}`}>
            This tool
          </Link>{" "}
          is handy for quick encryption.
        </div>
      </Dialog>
    </>
  );
}
