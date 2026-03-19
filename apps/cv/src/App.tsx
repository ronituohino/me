import { Education } from "./left/Education";
import { Experience } from "./left/Experience";
import { Info } from "./top/Info";
import { Profile } from "./top/Profile";
import { Skills } from "./right/Skills";
import { Competences } from "./right/Competences";
import { Languages } from "./right/Languages";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <main>
        <Profile />
        <Info />
        <div className={styles.left}>
          <Experience />
          <Education />
        </div>
        <div className={styles.right}>
          <Skills />
          <Competences />
          <Languages />
        </div>
      </main>
    </>
  );
}
