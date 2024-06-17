import { ReactNode } from "react";

import styles from "./Detail.module.css";

export type DetailProps = {
  place: string;
  time: string;
  title: string;
  wrapTitle?: boolean;
  children?: ReactNode;
};

export function Detail({
  place,
  time,
  title,
  wrapTitle,
  children,
}: DetailProps) {
  return (
    <div>
      {wrapTitle ? (
        <h3>
          <div>
            <span className={styles.title}>{title}</span>
            <br />
            <span className={styles.place}>{place}</span>
          </div>

          <span className={styles.time}>{time}</span>
        </h3>
      ) : (
        <h3>
          <div>
            <span className={styles.title}>{title} · </span>
            <span className={styles.place}>{place}</span>
          </div>

          <span className={styles.time}>{time}</span>
        </h3>
      )}

      <div className={styles.description}>{children}</div>
    </div>
  );
}
