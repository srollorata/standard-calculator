import { IconButton } from ".";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    property1: {
      options: ["clear-default", "clear-hover", "clear-click"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "clear-default",
    className: {},
  },
};
