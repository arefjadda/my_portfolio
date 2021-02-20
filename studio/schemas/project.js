export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "tools",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { value: "Personal", title: "Personal" },
          { value: "School", title: "School" },
          { value: "Online", title: "Online Course / Certificate" },
          { value: "Client", title: "Client" },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "gitlink",
      type: "url",
    },
    {
      name: "postlink",
      type: "url",
    },
  ],
  orderings: [
    {
      title: "Date",
      name: "endDate",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
};
