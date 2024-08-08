import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Homepage, Page, Program, Testimonial } from "./types/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { i18n } from "@/i18n.config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-09";

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
};

export const client = createClient(clientConfig);

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

export function getLocaleFromLanguage(language: string) {
  const lang = i18n.languages.find((lang) => lang.id === language);
  return lang ? lang.locale : language;
}

export function getLanguageFromLocale(locale: string) {
  const lang = i18n.languages.find((lang) => lang.locale === locale);
  return lang ? lang.id : locale;
}

export async function fetchDocumentSlug(ref: any) {
  const response = await client.getDocument(ref._ref);

  if (response && response.slug && response.language) {
    const locale = getLocaleFromLanguage(response.language);
    return `/${locale}/${response.slug.current}`;
  } else {
    return "/";
  }
}

export async function getNavigation({ language }: { language: string }) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "settingsNavigation" && language == $language]
    `,
    { language },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getFooter({ language }: { language: string }) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "settingsFooter" && language == $language]
    `,
    { language },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getSocialMedia() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "settingsSocialMedia"]
    `,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getPrograms({ language }: { language: string }) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "program" && language == $language]
    `,
    { language },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "testimonials"]{
      _id,
      _createdAt,
      name,
      message,
      location,
      date,
      "tour": tour->{
        name,
        "slug": slug.current
      },
      "avatar": avatar.asset->url
    }`,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
    _id,
    _createdAt,
    pageName,
    pageHeading,
    pageTagline,
    "slug": slug.current,
    content,
    "pageBuilder": pageBuilder[]
  }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      pageHeading,
      pageTagline,
      seo,
      "slug": slug.current,
      content,
      "pageBuilder": pageBuilder[]
    }`,
    { slug },
    {
      next: {
        revalidate: 60,
      },
    }
  );
}
