import { Icon } from "@components/Icon";

import styles from "./AgeCode.module.css";

type Props = {
  code: string;
};

export function AgeCode(props: Props) {
  let codeRef: HTMLTextAreaElement | undefined;

  return (
    <div
      class={styles.container}
      onClick={() => {
        codeRef?.select();
      }}
    >
      <textarea ref={codeRef} class={styles.code} rows={1}>
        {props.code}
      </textarea>
    </div>
  );
}
