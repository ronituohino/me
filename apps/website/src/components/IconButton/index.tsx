import { Icon } from "@components/Icon";
import type { IconProps } from "@components/Icon";

import styles from "./IconButton.module.css";

type IconButtonProps = {
  icon: IconProps;
  ariaLabel: string;
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
      disabled={props.disabled}
      aria-label={props.ariaLabel}
    >
      <Icon {...props.icon} class={styles.icon} disabled={props.disabled} />
    </button>
  );
}
