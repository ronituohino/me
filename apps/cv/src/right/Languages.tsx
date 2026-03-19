import styles from "./Languages.module.css";

export function Languages() {
  return (
    <section>
      <h2>Languages</h2>
      <ol className={styles.languageList}>
        <li>
          Finnish <span className={styles.languageLevel}>- native</span>
        </li>
        <li>
          English <span className={styles.languageLevel}>- C2</span>
        </li>
        <li>
          Chinese <span className={styles.languageLevel}>- A1</span>
        </li>
      </ol>
    </section>
  );
}
