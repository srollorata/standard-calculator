import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    property1: {
      options: [
        "primary-default",
        "danger-disable",
        "primary-click",
        "click",
        "default",
        "danger-click",
        "operation-hover",
        "operation-default",
        "operation-disable",
        "primary-hover",
        "operation-click",
        "disabled",
        "hover",
        "primary-disable",
        "danger-default",
        "danger-hover",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "primary-default",
    className: {},
    divClassName: {},
    text: "Button",
  },
};
