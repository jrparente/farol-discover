const settingsCompanyInfo = {
  name: "settingsCompanyInfo",
  title: "Company Information",
  type: "document",
  fields: [
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "companyAddress",
      title: "Company Address",
      type: "string",
    },
    {
      name: "companyCity",
      title: "Company City",
      type: "string",
    },
    {
      name: "companyZip",
      title: "Company Zip",
      type: "string",
    },
    {
      name: "companyPhone",
      title: "Company Phone",
      type: "string",
    },
    {
      name: "companyEmail",
      title: "Company Email",
      type: "string",
    },
    {
      name: "companyLogo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "licenceNumbers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "licenceName", type: "string" },
            { name: "licenceNumber", type: "string" },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Company Information",
      };
    },
  },
};

export default settingsCompanyInfo;
