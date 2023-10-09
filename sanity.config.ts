import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: "Farol Discover",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
