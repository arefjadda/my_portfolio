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
          { value: "personal", title: "Personal" },
          { value: "school", title: "School" },
          { value: "online", title: "Online Course / Certificate" },
          { value: "client", title: "Client" },
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
};
