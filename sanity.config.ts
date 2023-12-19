import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { structure } from "./sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

if (!projectId || !dataset || !apiVersion) {
  throw new Error("Sanity environment variables are missing");
}

const config = defineConfig({
  projectId,
  dataset,
  title: "Farol Discover",
  apiVersion,
  basePath: "/admin",
  plugins: [deskTool({ structure })],
  schema: { types: schemas },
});

export default config;
