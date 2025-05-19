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
  star: {
    initial: [0, 2],
    hover: [0, 2],
  },
  student: {
    initial: [1, 2],
    hover: [1, 2],
  },
  company: {
    initial: [2, 2],
    hover: [0, 1],
  },
  test: {
    initial: [3, 2],
    hover: [0, 1],
  },
  note: {
    initial: [0, 3],
    hover: [1, 3],
  },
  key: {
    initial: [2, 3],
    hover: [3, 3],
  },
  measure: {
    initial: [4, 0],
    hover: [4, 1],
  },
  window: {
    initial: [5, 0],
    hover: [5, 1],
  },
  r_arrow: {
    initial: [4, 2],
    hover: [5, 2],
  },
  l_arrow: {
    initial: [4, 3],
    hover: [5, 3],
  },
  cross: {
    initial: [0, 4],
    hover: [1, 4],
  },
  dialog_bg: {
    initial: [2, 4],
    hover: [2, 4],
  },
  dialog_border: {
    initial: [2, 4],
    hover: [1, 4],
  },
  dialog_corner: {
    initial: [0, 4],
    hover: [1, 4],
  },
} as const;

type Props = {
  icon: keyof typeof MAP;
  className?: string;
};

import styles from "./Icon.module.css";

export function Icon({ icon, className }: Props) {
  return (
    <span
      class={styles.icon + " " + className}
      style={`--bg: url("/icons.png") -${MAP[icon].initial[0] * 48}px -${
        MAP[icon].initial[1] * 48
      }px;
      --bg-hover: url("/icons.png") -${MAP[icon].hover[0] * 48}px -${
        MAP[icon].hover[1] * 48
      }px;`}
    ></span>
  );
}
