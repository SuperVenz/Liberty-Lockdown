export default {
  name: "socialMediaInfo",
  title: "Social Media Info",
  type: "object",
  fields: [
    {
      title: "text",
      name: "text",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      description: "url tag too your social media page",
    },
    {
      name: "favcon",
      title: "Favcon",
      type: "mainImage",
      description: "url tag too your social media page",
    },
  ],
};
