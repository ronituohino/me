import styles from "./Technologies.module.css";

export function Technologies() {
  return (
    <section>
      <h2>Technologies</h2>

      <ul className={styles.tech}>
        <li>
          <h3>Programming Languages</h3>
          <p>JavaScript, TypeScript, HTML, CSS, Python, Rust, GraphQL</p>
        </li>

        <li>
          <h3>Libraries & Frameworks</h3>
          <p>React, Vite, Next, Node, Express</p>
        </li>

        <li>
          <h3>Databases</h3>
          <p>PostgreSQL, MongoDB, SQLite</p>
        </li>

        <li>
          <h3>Testing Utilities</h3>
          <p>Jest, Cypress, Playwright, Storybook, Chromatic</p>
        </li>

        <li>
          <h3>Tools & Platforms</h3>
          <p>Git, GitHub, GHA, Docker, AWS, GCP</p>
        </li>
      </ul>
    </section>
  );
}
