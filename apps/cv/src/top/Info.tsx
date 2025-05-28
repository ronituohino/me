import styles from "./Info.module.css";

export function Info() {
  return (
    <section className={styles.info}>
      {!import.meta.env.VITE_HIDE && (
        <>
          {import.meta.env.VITE_ADDRESS && (
            <>
              <span>{import.meta.env.VITE_ADDRESS}</span>
            </>
          )}
          {import.meta.env.VITE_PHONE && (
            <>
              <span>{import.meta.env.VITE_PHONE}</span>
            </>
          )}
        </>
      )}

      <a href="mailto:rt@ronituohino.com">rt@ronituohino.com</a>
      <a href="https://www.github.com/ronituohino">github.com/ronituohino</a>
      <a href="https://www.linkedin.com/in/ronituohino/">in/ronituohino</a>
      <a href="https://ronituohino.com">ronituohino.com</a>
    </section>
  );
}
