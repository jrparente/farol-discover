import { Footprints, HomeIcon, Presentation, Users2 } from "lucide-react";
import { StructureResolver } from "sanity/desk";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Content")
    .items([
      S.listItem()
        .title("Homepage")
        .icon(HomeIcon)
        .child(S.document().schemaType("homepage").documentId("homepage")),

      S.listItem()
        .title("Page: About Us")
        .icon(Users2)
        .child(S.document().schemaType("aboutUs").documentId("aboutUs")),

      S.listItem()
        .title("Website Pages")
        .icon(Presentation)
        .child(
          S.documentTypeList("page")
            .apiVersion("v2023-12-18")
            .title("Custom Page")
            .menuItems(S.documentTypeList("page").getMenuItems())
            .filter('_type == "page"')
        ),

      S.divider(),

      S.listItem()
        .title("Programs")
        .icon(Footprints)
        .child(
          S.documentTypeList("program")
            .apiVersion("v2023-12-18")
            .title("Programs")
            .menuItems(S.documentTypeList("program").getMenuItems())
            .filter('_type == "program"')
        ),

      //   S.listItem()
      //     .title("Testimonials")
      //     .icon(Stars)
      //     .child(
      //       S.documentTypeList("testimonials")
      //         .apiVersion("v2023-12-18")
      //         .title("Testimonials")
      //         .menuItems(S.documentTypeList("testimonials").getMenuItems())
      //         .filter('_type == "testimonials"')
      //     ),

      ...S.documentTypeListItems().filter((listItem: any) => {
        const id = listItem.getId();
        return id
          ? !["homepage", "aboutUs", "page", "program"].includes(id)
          : false;
      }),
    ]);
