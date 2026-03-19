import styles from "./Competences.module.css";

export function Competences() {
  return (
    <section>
      <h2>Competences</h2>
      <p className={styles.tech}>
        Fullstack Development, Scalable Systems, CI/CD, Accessibility,
        Test-Driven Development, TypeScript, JavaScript, HTML, CSS, Python,
        Rust, Go, Bash, React, Vite, Astro, Next.js, SolidJS, Node.js, Tauri,
        Express, Postgres, MongoDB, InfluxDB, ClickHouse, GraphQL, RabbitMQ,
        Grafana, Jest, Playwright, Storybook, Chromatic, Git, GitHub, GHA,
        Docker, Kubernetes, AWS, GCP, Copilot, Claude
      </p>
    </section>
  );
}
