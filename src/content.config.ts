import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    location: z.string().default("Remote"),
    tools: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    problem: z.string(),
    actions: z.array(z.string()),
    results: z.array(z.string()),
    tools: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certifications" }),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    year: z.string(),
    link: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  experience,
  "case-studies": caseStudies,
  certifications,
};

