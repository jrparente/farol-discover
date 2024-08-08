import { i18n } from "@/i18n.config";
import {
  FileText,
  FlagIcon,
  Footprints,
  HomeIcon,
  Info,
  PanelBottom,
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
          S.list()
            .title("Page Versions")
            .items([
              ...i18n.languages.map((language: any) =>
                S.listItem()
                  .title(`Pages (${language.id.toLocaleUpperCase()})`)
                  .schemaType("page")
                  .icon(FileText)
                  .child(
                    S.documentList()
                      .apiVersion("v2023-12-18")
                      .id(language.id)
                      .title(`${language.title} Pages`)
                      .schemaType("page")
                      .filter('_type == "page" && language == $language')
                      .params({ type: "page", language: language.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem("page", {
                          _type: "page",
                          language: language.id,
                        }),
                      ])
                      .canHandleIntent((intentName: any, params: any) => {
                        // TODO: Handle **existing** documents (like search results when clicked)
                        // to return `true` on the correct language list!
                        if (intentName === "edit") {
                          // return params?.language === language.id
                          return false;
                        }

                        // Not an initial value template
                        if (!params.template) {
                          return true;
                        }

                        // Template name structure example: "lesson-en"
                        const languageValue = params?.template
                          ?.split(`-`)
                          .pop();

                        return languageValue === language.id;
                      })
                  )
              ),
            ])
        ),

      S.divider(),

      // S.listItem()
      //   .title("Programs")
      //   .icon(Footprints)
      //   .child(
      //     S.documentTypeList("program")
      //       .apiVersion("v2023-12-18")
      //       .title("Programs")
      //       .menuItems(S.documentTypeList("program").getMenuItems())
      //       .filter('_type == "program"')
      //   ),

      S.listItem()
        .title("Tours and Programs")
        .icon(Footprints)
        .child(
          S.list()
            .title("Program Versions")
            .items([
              ...i18n.languages.map((language: any) =>
                S.listItem()
                  .title(`Programs (${language.id.toLocaleUpperCase()})`)
                  .schemaType("program")
                  .icon(FileText)
                  .child(
                    S.documentList()
                      .apiVersion("v2023-12-18")
                      .id(language.id)
                      .title(`${language.title} Programs`)
                      .schemaType("program")
                      .filter('_type == "program" && language == $language')
                      .params({ type: "program", language: language.id })
                      .initialValueTemplates([
                        S.initialValueTemplateItem("program", {
                          _type: "program",
                          language: language.id,
                        }),
                      ])
                      .canHandleIntent((intentName: any, params: any) => {
                        // TODO: Handle **existing** documents (like search results when clicked)
                        // to return `true` on the correct language list!
                        if (intentName === "edit") {
                          // return params?.language === language.id
                          return false;
                        }

                        // Not an initial value template
                        if (!params.template) {
                          return true;
                        }

                        // Template name structure example: "lesson-en"
                        const languageValue = params?.template
                          ?.split(`-`)
                          .pop();

                        return languageValue === language.id;
                      })
                  )
              ),
            ])
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
                .title("Company Information")
                .icon(Info)
                .child(
                  S.document()
                    .title("Company Information")
                    .schemaType("settingsCompanyInfo")
                    .documentId("settingsCompanyInfo")
                ),

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
                .title("Footer")
                .icon(PanelBottom)
                .child(
                  S.document()
                    .title("Footer")
                    .schemaType("settingsFooter")
                    .documentId("settingsFooter")
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
