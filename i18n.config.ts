const languages = [
  { id: "en", title: "English", locale: "en-US", isDefault: true },
  { id: "de", title: "Deutsch", locale: "de-DE" },
  { id: "pt", title: "Português", locale: "pt-PT" },
];

const defaultLanguage = languages.find((item) => item.isDefault);

const i18n = {
  languages,
  base: defaultLanguage ? defaultLanguage.id : "en", // Provide a fallback value
};

const googleTranslateLanguages = languages.map(({ id, title }) => ({
  id,
  title,
}));

export { languages, i18n, googleTranslateLanguages };
