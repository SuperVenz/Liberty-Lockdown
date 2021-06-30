export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      title: "Social Handles",
      name: "social",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "socialMediaInfo", description: "Social Media Links" }],
        },
      ],
    },
  ],
};
