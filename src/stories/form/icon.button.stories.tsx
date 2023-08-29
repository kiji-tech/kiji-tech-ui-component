import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../..";

const meta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
  args: {
    icon: "",
    alt: "alt",
    onClick: () => {},
    outline: false,
    radius: false,
    color: "main",
  },
  argTypes: {
    icon: { control: { type: "text" } },
    alt: { control: { type: "text" } },
    outline: { control: { type: "boolean" } },
    radius: { control: { type: "boolean" } },
    color: {
      control: { type: "inline-radio" },
      options: ["main", "base", "clear"],
    },
  },
  render: (args) => {
    return (
      <div style={{ height: "100px", width: "100px" }}>
        <IconButton
          icon={args.icon}
          alt={args.alt}
          outline={args.outline}
          radius={args.radius}
          color={args.color}
          onClick={() => {}}
        />
      </div>
    );
  },
};

export const story: StoryObj = {
  args: {},
};
export default meta;
