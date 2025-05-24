import { Icon } from "@components/Icon";

import styles from "./AgeCode.module.css";

type Props = {
  code: string;
};

export function AgeCode(props: Props) {
  return (
    <div class={styles.root}>
      <code class={styles.code}>{props.code}</code>
      <button
        class={styles.copy}
        onClick={() => {
          navigator.clipboard.writeText(props.code);
        }}
      >
        <Icon icon="clipboard" small />
      </button>
    </div>
  );
}
