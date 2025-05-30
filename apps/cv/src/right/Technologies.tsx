import styles from "./Technologies.module.css";

export function Technologies() {
  return (
    <section>
      <h2>Technologies</h2>
      <ul className={styles.tech}>
        <li>
          <h3>Programming Languages</h3>
          <p>TypeScript, JavaScript, HTML, CSS, Python, Rust, Go, Bash</p>
        </li>
        <li>
          <h3>Libraries & Frameworks</h3>
          <p>React, Vite, Astro, Next.js, SolidJS, Node.js, Express</p>
        </li>
        <li>
          <h3>Databases</h3>
          <p>Postgres, MongoDB, InfluxDB</p>
        </li>
        <li>
          <h3>Testing Utilities</h3>
          <p>Jest, Playwright, Storybook, Chromatic</p>
        </li>
        <li>
          <h3>Tools & Platforms</h3>
          <p>Git, GitHub, GHA, Docker, Kubernetes, AWS, GCP</p>
        </li>
        <li>
          <p>... just to name a few ...</p>
        </li>
      </ul>
    </section>
  );
}
