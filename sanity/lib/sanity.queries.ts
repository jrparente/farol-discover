import { groq } from "next-sanity";

export const getHomepageQuery = groq`*[_type == "homepage" && language == $language]`;
export const getNavigationQuery = groq`*[_type == "settingsNavigation" && language == $language]`;
