import styles from "./Profile.module.css";

// 250 - 280 characters of text
export function Profile() {
  return (
    <header>
      <h1 className={styles.title}>Roni Tuohino</h1>
      <p>
        Finnish software engineer always seeking new opportunities. Passionate
        learner who thrives on collaboration. Also loves rock climbing.
      </p>
    </header>
  );
}
