import { Icon } from "@components/Icon";
import type { IconProps } from "@components/Icon";

import styles from "./IconButton.module.css";

type IconButtonProps = {
  icon: IconProps;
  button: {
    onClick: () => void;
    class?: string;
  };
  disabled?: boolean;
};

export function IconButton(props: IconButtonProps) {
  return (
    <button
      onClick={() => props.button.onClick()}
      class={styles.button + " " + props.button.class}
      data-disabled={props.disabled ?? "false"}
    >
      <Icon {...props.icon} class={styles.icon} disabled={props.disabled} />
    </button>
  );
}
