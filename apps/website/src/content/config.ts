import { z, defineCollection } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  organization: z.string(),
  year: z.number(),
  description: z.string(),
  technologies: z.array(z.string()),
  links: z.array(z.string().url()),
  show: z.enum(["hidden", "front", "featured"]),
});

export type ProjectSchema = z.infer<typeof projectSchema>;

const projectsCollection = defineCollection({
  type: "data",
  schema: projectSchema,
});

export const collections = {
  projects: projectsCollection,
};
