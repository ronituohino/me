import { Detail } from "../components/Detail";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <div className={styles.experience}>
        <Detail title="Consultant" place="Netlight" time="3/2026 - present" />
        <Detail
          title="Junior Developer"
          place="Nelonen Media"
          time="5/2022 - 1/2026"
        >
          <ul>
            <li>
              Developed a state-of-the-art video stream monitoring and
              observability system.
            </li>
            <li>
              Rewrote and developed <a href="https://ruutu.fi">ruutu.fi</a> &{" "}
              <a href="https://supla.fi">supla.fi</a>.
            </li>
            <li>Implemented profiles for the Ruutu web client.</li>
            <li>Fixed numerous issues related to accessibility.</li>
          </ul>
        </Detail>
        <Detail
          title="Conscript"
          place="Finnish Defence Forces"
          time="6/2020 - 6/2021"
        >
          <ul>
            <li>Gained leadership experience.</li>
          </ul>
        </Detail>
        <Detail
          title="Game Developer"
          place="Ben Willes Games"
          time="4/2018 - 1/2019"
        >
          <ul>
            <li>
              Created preproduction sofware and a game prototype with the Unity
              engine.
            </li>
          </ul>
        </Detail>
      </div>
    </section>
  );
}
