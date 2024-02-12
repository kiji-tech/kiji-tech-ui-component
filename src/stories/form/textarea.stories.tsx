import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../..";
import { ThemeProvider } from "../../providers/theme";

const meta: Meta = {
  tags: ["autodocs"],
  component: Textarea,
  args: {
    theme: "theme1",
    id: "",
    name: "",
    label: "ラベル",
    value: "",
    length: 255,
    height: 100,
    required: false,
    disabled: false,
    radius: false,
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
    id: {
      control: { type: "text" },
      description: "テキストエリアのID",
      table: {
        type: { summary: "string" },
      },
    },
    name: {
      control: { type: "text" },
      description: "テキストエリアのname",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      control: { type: "text" },
      description: "テキストエリアのラベル",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: { type: "text" },
      description: "テキストエリアの値",
      table: {
        type: { summary: "string" },
      },
    },
    length: {
      control: { type: "number" },
      description: "テキストエリアの最長の長さ",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "255" },
      },
    },
    height: {
      control: { type: "number" },
      description: "テキストエリアの高さ(px)",
      table: {
        type: { summary: "number" },
        defaultValue: 100,
      },
    },
    required: {
      control: { type: "boolean" },
      description: "必須フラグ",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "非活性フラグ",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    radius: {
      control: { type: "boolean" },
      description: "角丸",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    onChange: {
      description: "テキストエリア 変更イベント",
      table: {
        type: { summary: "Function" },
      },
    },
  },
  render: (args) => {
    return (
      <ThemeProvider theme={{ theme: args.theme }}>
        <div style={{ width: "400px", height: args.height }}>
          <Textarea
            id={args.id}
            label={args.label}
            value={args.value}
            length={args.length}
            required={args.required}
            disabled={args.disabled}
            radius={args.radius}
            onChange={() => {}}
          />
        </div>
      </ThemeProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {},
};
