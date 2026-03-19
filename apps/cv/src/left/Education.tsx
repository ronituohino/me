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
            <li>
              Wrote <a href="http://hdl.handle.net/10138/603762">thesis</a> on
              video stream monitoring and observability.
            </li>
            <li>
              Programmed a{" "}
              <a href="https://github.com/ronituohino/swap">search engine</a> on
              a software architecture course.
            </li>
            <li>
              Built a{" "}
              <a href="https://github.com/ronituohino/p2p-chat">P2P chat app</a>{" "}
              on a distributed systems course.
            </li>
            <li>
              Completed{" "}
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
            <li>Wrote thesis on video streaming using cloud computing.</li>
          </ul>
        </Detail>
      </div>
    </section>
  );
}
