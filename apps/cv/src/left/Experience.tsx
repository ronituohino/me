import { Detail } from "../components/Detail";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <div className={styles.experience}>
        <Detail
          title="Junior Developer"
          place="Nelonen Media"
          time="5/2022 - present"
        >
          <ul>
            <li>
              Developed <a href="https://ruutu.fi">ruutu.fi</a> &{" "}
              <a href="https://supla.fi">supla.fi</a> websites partly alongside
              school and during multiple summers.
            </li>
            <li>Collaborated with senior developers to rewrite both sites.</li>
            <li>Created a client-side analytics integration independently.</li>
            <li>Added new features and fixed existing ones.</li>
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
        <Detail title="Software Tester" place="Testlio" time="1/2019">
          <ul>
            <li>
              Localized apps, reported bugs, and completed technical analysis.
            </li>
          </ul>
        </Detail>
        <Detail
          title="Game Developer"
          place="Ben Willes Games"
          time="4/2018 - 1/2019"
        >
          <ul>
            <li>Created a prototype with the Unity game engine.</li>
            <li>
              Programmed preproduction sofware: an asset manager and a landscape
              generator.
            </li>
          </ul>
        </Detail>
      </div>
    </section>
  );
}
