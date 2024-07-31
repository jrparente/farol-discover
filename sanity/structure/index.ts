import {
  FlagIcon,
  Footprints,
  HomeIcon,
  Presentation,
  Settings2Icon,
  Stars,
  ThumbsUp,
} from "lucide-react";

export const structure = (S: any) =>
  S.list()
    .title("Website Content")
    .items([
      S.listItem()
        .title("Homepage")
        .icon(HomeIcon)
        .child(S.document().schemaType("homepage").documentId("homepage")),

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

      S.listItem()
        .title("Testimonials")
        .icon(Stars)
        .child(
          S.documentTypeList("testimonials")
            .apiVersion("v2023-12-18")
            .title("Testimonials")
            .menuItems(S.documentTypeList("testimonials").getMenuItems())
            .filter('_type == "testimonials"')
        ),

      S.divider(),

      S.listItem()
        .title("Website Settings")
        .icon(Settings2Icon)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Languages")
                .icon(FlagIcon)
                .child(
                  S.document()
                    .title("Languages")
                    .schemaType("settingsLanguages")
                    .documentId("languages")
                ),

              S.listItem()
                .title("Navigation")
                .icon(Footprints)
                .child(
                  S.document()
                    .title("Navigation")
                    .schemaType("settingsNavigation")
                    .documentId("settingsNavigation")
                ),

              S.listItem()
                .title("Social Media Links")
                .icon(ThumbsUp)
                .child(
                  S.document()
                    .title("Social Media Links")
                    .schemaType("settingsSocialMedia")
                    .documentId("socialMedia")
                ),
            ])
        ),
    ]);
