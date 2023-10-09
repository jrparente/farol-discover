import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "8zvmg0eh",
  dataset: "production",
  title: "Farol Discover",
  apiVersion: "2023-10-09",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
