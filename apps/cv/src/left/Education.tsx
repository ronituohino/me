import { Detail } from "../components/Detail";
import styles from "./Education.module.css";

export function Education() {
  return (
    <section>
      <h2>Education</h2>
      <div className={styles.education}>
        <Detail
          title="MSc Computer Science"
          place="University of Helsinki"
          time="6/2024 - present"
          wrapTitle
        />
        <Detail
          title="BSc Computer Science"
          place="University of Helsinki"
          time="6/2021 - 6/2024"
          wrapTitle
        >
          <ul className={styles.courses}>
            <li>
              Completed{" "}
              <a href="https://fullstackopen.com/en/">web development course</a>
              .
            </li>
            <li>
              Wrote thesis on video streaming using cloud computing (Finnish).
            </li>
          </ul>
        </Detail>
      </div>
    </section>
  );
}
