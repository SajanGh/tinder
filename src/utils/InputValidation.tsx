export const nameValidation = {
  name: "name",
  label: "name",
  multiType: false,
  type: "text",
  id: "name",
  placeholder: "write your name",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};
