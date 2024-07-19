import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";
import { structure } from "./sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

if (!projectId || !dataset || !apiVersion) {
  throw new Error("Sanity environment variables are missing");
}

const allPlugins = [structureTool({ structure })];

const config = defineConfig({
  projectId,
  dataset,
  title: "Farol Discover",
  apiVersion,
  basePath: "/admin",
  plugins: isDev ? [...allPlugins, visionTool()] : allPlugins,
  schema: schemas,
});

export default config;
