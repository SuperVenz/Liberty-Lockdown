export default {
  name: "mainImage",
  title: "Main image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      validation: (Rule) => Rule.required(),
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
