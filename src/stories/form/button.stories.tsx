import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../..";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Button.",
    color: "color-main",
    type: "button",
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
      options: ["color-main", "color-accent", "color-clear"],
      description: "ボタンの色を指定する",
      table: {
        type: { summary: "color-main | color-accent | color-clear" },
        defaultValue: { summary: "main" },
      },
    },
    label: {
      control: {
        type: "text",
      },
      description: "ボタンのラベル",
      table: {
        type: { summary: "string" },
      },
    },
    type: {
      control: {
        type: "inline-radio",
      },
      description: "ボタンの種類",
      options: ["button", "submit"],
      table: {
        type: { summary: "button | submit | undefined" },
      },
    },
    outline: {
      control: {
        type: "boolean",
      },
      description: "ボタンのアウトライン",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    radius: {
      control: {
        type: "boolean",
      },
      description: "ボタンの角",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
      description: "非活性フラグ",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClick: {
      description: "ボタンのクリックイベント",
      table: {
        type: { summary: "Function" },
      },
    },
  },
  render: (args) => {
    return (
      <div style={{ width: "160px" }}>
        <Button
          label={args.label}
          type={args.type}
          onClick={() => {}}
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

export const Clear: Story = {
  args: {
    label: "Accent",
    color: "color-clear",
    outline: true,
  },
};
