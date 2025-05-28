import { Dialog } from "@components/Dialog";
import { IconButton } from "@components/IconButton";
import { createSignal } from "solid-js";
import { Link } from "@components/Link";
import type { ProjectSchema } from "@content/config";

import styles from "./Projects.module.css";

type ProjectsProps = {
  projects: ProjectSchema[];
};

export function Projects(props: ProjectsProps) {
  const [open, setOpen] = createSignal(false);

  return (
    <>
      <IconButton
        ariaLabel="Open projects list"
        icon={{ icon: "ruler" }}
        button={{
          onClick: () => {
            setOpen(true);
          },
        }}
      />
      <Dialog open={open()} setOpen={setOpen}>
        <div class={styles.wrapper}>
          <table>
            <thead>
              <tr>
                <th class={styles.yearHeader}>Year</th>
                <th>Project</th>
                <th class={styles.orgHeader}>Made at</th>
                <th class={styles.techHeader}>Built with</th>
              </tr>
            </thead>
            <tbody>
              {props.projects.map((project) => (
                <tr>
                  <td class={styles.year}>{project.year}</td>
                  <td class={styles.proj}>
                    <Link href={project.links[0]}>{project.title}</Link>
                    {project.show === "featured" ? (
                      <span class={styles.projStar}>★</span>
                    ) : null}
                  </td>
                  <td class={styles.org}>{project.organization}</td>
                  <td class={styles.tech}>{project.technologies.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Dialog>
    </>
  );
}
