import { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../..";

const meta: Meta = {
  tags: ["autodocs"],
  component: Textarea,
  args: {
    id: "",
    label: "ラベル",
    value: "",
    length: 255,
    required: false,
    disabled: false,
  },
  argTypes: {
    id: {
      control: { type: "text" },
      description: "テキストエリアのID",
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
    onChange: {
      description: "テキストエリア 変更イベント",
      table: {
        type: { summary: "Function" },
      },
    },
  },
  render: (args) => {
    return (
      <div style={{ width: "400px" }}>
        <Textarea
          id={args.id}
          label={args.label}
          value={args.value}
          length={args.length}
          required={args.required}
          disabled={args.disabled}
          onChange={() => {}}
        />
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Basic: Story = {
  args: {},
};
