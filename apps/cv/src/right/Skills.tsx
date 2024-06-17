import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul className={styles.skillList}>
        <li>
          Fullstack web development with modern technologies and practices.
        </li>
        <li>Teamwork and project management in small development teams.</li>
        <li>Creative problem solving with a keen eye for the details.</li>
      </ul>
    </section>
  );
}
