import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

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
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Base")
          .items([
            S.listItem()
              .title("Page: Home")
              .child(
                S.document().schemaType("homepage").documentId("homepage")
              ),
            S.listItem()
              .title("Page: About Us")
              .child(S.document().schemaType("aboutUs").documentId("aboutUs")),
            ...S.documentTypeListItems().filter((listItem) => {
              const id = listItem.getId();
              return id ? !["homepage", "aboutUs"].includes(id) : false;
            }),
          ]),
    }),
  ],
  schema: { types: schemas },
});

export default config;
