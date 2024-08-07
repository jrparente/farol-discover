const languages = [
  { id: "en", title: "English", locale: "en-US", isDefault: true },
  { id: "de", title: "German", locale: "de-DE" },
  { id: "pt", title: "Portuguese", locale: "pt-PT" },
];

const i18n = {
  languages,
  base: languages.find((item) => item.isDefault).id,
};

const googleTranslateLanguages = languages.map(({ id, title }) => ({
  id,
  title,
}));

export { languages, i18n, googleTranslateLanguages };
