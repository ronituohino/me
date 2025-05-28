const MAP = {
  linkedin: {
    initial: [0, 0],
    hover: [0, 1],
  },
  github: {
    initial: [1, 0],
    hover: [1, 1],
  },
  email: {
    initial: [2, 0],
    hover: [2, 1],
  },
  cv: {
    initial: [3, 0],
    hover: [3, 1],
  },
  ruler: {
    initial: [4, 0],
    hover: [4, 1],
  },
  note: {
    initial: [0, 2],
    hover: [0, 3],
  },
  key: {
    initial: [1, 2],
    hover: [1, 3],
  },
  r_arrow: {
    initial: [2, 2],
    hover: [2, 3],
  },
  l_arrow: {
    initial: [3, 2],
    hover: [3, 3],
  },
  close: {
    initial: [4, 2],
    hover: [4, 3],
  },
  clipboard: {
    initial: [5, 2],
    hover: [5, 3],
  },
  window: {
    initial: [5, 0],
    hover: [5, 1],
  },
} as const;

export type IconProps = {
  icon: keyof typeof MAP;
  small?: boolean;
  disabled?: boolean;
  class?: string;
};

const ICON_SIZE = 48; // Size of each icon in the sprite sheet
const SMALL_OFFSET = 6;

import styles from "./Icon.module.css";

export function Icon(props: IconProps) {
  return (
    <span
      class={styles.icon + " " + props.class}
      style={`--bg: url("/icons.png") -${
        MAP[props.icon].initial[0] * ICON_SIZE +
        (props.small ? SMALL_OFFSET : 0)
      }px -${
        MAP[props.icon].initial[1] * ICON_SIZE +
        (props.small ? SMALL_OFFSET : 0)
      }px;
      --bg-hover: url("/icons.png") -${
        MAP[props.icon].hover[0] * ICON_SIZE + (props.small ? SMALL_OFFSET : 0)
      }px -${
        MAP[props.icon].hover[1] * ICON_SIZE + (props.small ? SMALL_OFFSET : 0)
      }px;`}
      data-small={props.small}
      data-disabled={props.disabled ?? false}
    ></span>
  );
}
