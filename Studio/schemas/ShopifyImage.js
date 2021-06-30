export default {
  title: "Shopify Image",
  name: "shopifyImage",
  type: "object",
  fields: [
    {
      title: "Picture",
      name: "shopifyPicture",
      type: "image",
    },
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      type: "string",
    },
    {
      title: "Button",
      name: "shopifyButton",
      description: "Button text",
      type: "string",
    },
    {
      title: "URL",
      name: "shopifyURL",
      type: "url",
      description: "URL too shopify store product page",
    },
  ],
};
