export default {
  name: "event",
  type: "document",
  title: "Event",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "datetime",
      title: "Date & Time",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
  ],
};
