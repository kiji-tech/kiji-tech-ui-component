import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../..";
import { ThemeProvider } from "../../providers/theme";

const meta: Meta = {
  component: Button,
  tags: ["autodocs"],
  args: {
    theme: "theme1",
    label: "Button.",
    type: "button",
    radius: true,
    outline: false,
    disabled: false,
    onClick: () => {},
  },
  argTypes: {
    theme: {
      control: { type: "inline-radio" },
      description: "テーマ",
      options: ["theme1", "theme2"],
      table: {
        type: { summary: "theme1 | theme2" },
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
      <ThemeProvider theme={{ theme: args.theme }}>
        <div style={{ width: "160px" }}>
          <Button
            label={args.label}
            type={args.type}
            onClick={() => {}}
            radius={args.radius || false}
            disabled={args.disabled || false}
            outline={args.outline || false}
          />
        </div>
      </ThemeProvider>
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
