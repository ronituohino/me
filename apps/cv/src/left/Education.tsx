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
        >
          <ul>
            <li>Writing thesis on video stream monitoring.</li>
            <li>
              Built a{" "}
              <a href="https://github.com/ronituohino/swap">search engine</a> on
              a software architecture course.
            </li>
            <li>
              Built a peer-to-peer chat application on a distributed systems
              course.
            </li>
            <li>
              Survived{" "}
              <a href="https://ppc.cs.aalto.fi/">
                programming parallel computers
              </a>{" "}
              course.
            </li>
          </ul>
        </Detail>
        <Detail
          title="BSc Computer Science"
          place="University of Helsinki"
          time="6/2021 - 6/2024"
          wrapTitle
        >
          <ul>
            <li>
              Wrote thesis on video streaming using cloud computing (Finnish).
            </li>
            <li>
              Completed a famous{" "}
              <a href="https://fullstackopen.com/en/">web development course</a>{" "}
              including all parts and a project.
            </li>
          </ul>
        </Detail>
      </div>
    </section>
  );
}
