import { groq } from "next-sanity";

export const getHomepageQuery = groq`*[_type == "homepage" && language == $language]`;
export const getProgramsQuery = groq`*[_type == "program" && language == $language]`;
