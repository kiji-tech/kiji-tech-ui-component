import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "..";

const meta: Meta = {
  title: "Badge",
  args: {
    text: "Badge",
    color: "main",
    size: "md",
  },
  argTypes: {
    text: { control: { type: "text" } },
    color: {
      control: { type: "inline-radio" },
      options: [
        "color-main",
        "color-accent",
        "color-clear",
        "color-win",
        "color-lose",
        "color-abort",
        "color-new",
      ],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
  render: (args) => {
    return <Badge text={args.text} color={args.color} size={args.size} />;
  },
};
export const story: StoryObj = {
  args: {},
};
export default meta;
