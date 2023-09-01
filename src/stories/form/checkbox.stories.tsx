import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../..";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    id: "checkbox",
    label: "チェックボックス",
    checked: false,
    required: false,
    disabled: false,
  },
  argTypes: {
    id: {
      control: { type: "text" },
      description: "チェックボックスのID",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      control: { type: "text" },
      description: "チェックボックスのラベル",
      table: {
        type: { summary: "string" },
      },
    },
    checked: {
      control: { type: "boolean" },
      description: "チェックボックのチェック状態",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
  },
  render: (args) => {
    return (
      <Checkbox
        id={args.id}
        label={args.label}
        checked={args.checked}
        required={args.required}
        disabled={args.disabled}
        onChange={() => {}}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;
export const Basic: Story = {
  args: {
    id: "checkbox01",
    label: "ラベル",
    checked: false,
    required: false,
    disabled: false,
  },
};
export const NonLabel: Story = {
  args: {
    id: "checkbox02",
    label: "",
    checked: false,
    required: false,
    disabled: false,
  },
};
