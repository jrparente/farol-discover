const settingsFooter = {
  name: "settingsFooter",
  type: "document",
  title: "Footer Settings",
  fields: [
    {
      name: "companyDescription",
      type: "text",
    },
    {
      name: "footerMenu",
      type: "navigation",
    },
    { name: "licenseNumbersTitle", type: "string" },
    {
      name: "allRightsReserved",
      type: "string",
    },
    {
      name: "language",
      type: "string",
      readOnly: true,
    },
  ],
};

export default settingsFooter;
