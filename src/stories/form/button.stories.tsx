import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../..";

const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  args: {
    label: "Button.",
    color: "color-main",
    radius: true,
    outline: false,
    disabled: false,
    onClick: () => {},
  },
  argTypes: {
    color: {
      control: {
        type: "inline-radio",
      },
      options: ["main", "accent", "clear"],
    },
    label: {
      control: {
        type: "text",
      },
    },
    outline: {
      control: {
        type: "boolean",
      },
    },
    radius: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  render: (args) => {
    return (
      <div style={{ width: "160px" }}>
        <Button
          label={args.label}
          onClick={() => args.onClick()}
          color={args.color || "color-main"}
          radius={args.radius || false}
          disabled={args.disabled || false}
          outline={args.outline || false}
        />
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Main: Story = {
  args: {
    label: "Main",
  },
};

export const Accent: Story = {
  args: {
    label: "Accent",
    color: "color-accent",
  },
};
