export default {
  name: "index",
  title: "Index",
  type: "document",
  fields: [
    {
      title: "Hero Title",
      name: "heroTitle",
      type: "string",
      description: "title for hero banner",
    },
    {
      title: "Hero Text",
      name: "heroText",
      type: "text",
      description: "subtext for hero banner",
    },
    {
      title: "Hero CTA",
      name: "heroCTA",
      type: "string",
      description: "call to action button text",
    },
    {
      title: "Hero URL",
      name: "heroButtonUrl",
      type: "url",
      description: "call to action button destination",
    },
    {
      title: "Hero Video Title",
      name: "heroVideoString",
      type: "string",
      description: "insert the title above the hero video",
    },
    {
      title: "Hero Video",
      name: "heroVideoUrl",
      type: "url",
      description: "insert url for video",
    },

    {
      title: "Video Recap Header",
      name: "videoHeader",
      type: "string",
      description: "Title for video rewind section",
    },
    {
      title: "Featured Video CTA",
      name: "featuredCTA",
      type: "string",
      description: "call to action button text",
    },
    {
      title: "Prev Video",
      name: "videoURL",
      type: "url",
      description: "url for featured video",
    },
    {
      title: "Store Header",
      name: "storeHeader",
      type: "string",
      description: "Title for merch section",
    },
    {
      title: "Shopify Product",
      name: "shopifyFeature",
      description: "Feature shopify store items",
      type: "array",
      of: [{ type: "shopifyImage" }],
    },
    {
      title: "Shopify CTA",
      name: "shopifyCTA",
      type: "string",
      description: "Text for button that links too your shopify store",
    },
    {
      title: "Shopify URL",
      name: "shopifyURL",
      type: "url",
      description: "URL for button that links too your shopify store",
    },
    {
      title: "Form Title",
      name: "formTitle",
      type: "string",
      description: "Title above Form",
    },

    {
      title: "Form Picture",
      name: "formPicture",
      type: "mainImage",
      description: "Image Under Form",
    },
    {
      title: "Background Images",
      name: "backgroundImages",
      description: "background for hero,featured section respectively",
      type: "array",
      of: [{ type: "mainImage" }],
    },
  ],
};
