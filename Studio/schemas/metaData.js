export default {
  name: "metaData",
  title: "MetaData Config",
  type: "document",
  fields: [
    {
      title: "Logo",
      name: "logo",
      description: "Companys Logo",
      type: "mainImage",
    },
    {
      // in the future turn this into a object and attatch it as a seo component for pages
      title: "Keywords",
      name: "keywords",
      type: "array",
      of: [{ type: "keywords" }],
      description: "Add or remove keywords for your site",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      description:
        "Summarize Page Content ( Warning: Will Show Up Under Google Search Results)",
      validation: (Rule) => Rule.min(0).max(160),
    },
    {
      // in the future turn this into a object and attatch it as a seo component for pages
      title: "Social Media Info",
      name: "socialMedia",
      type: "array",
      of: [{ type: "socialMediaInfo" }],
      description: "insert links and favcon to display on site",
    },
  ],
};
