import { Education } from "./left/Education";
import { Experience } from "./left/Experience";
import { Info } from "./top/Info";
import { Profile } from "./top/Profile";
import { Skills } from "./right/Skills";
import { Technologies } from "./right/Technologies";

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
          <Technologies />
        </div>
      </main>
    </>
  );
}
