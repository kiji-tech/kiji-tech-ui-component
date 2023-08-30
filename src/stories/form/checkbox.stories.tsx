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
    id: { control: { type: "text" } },
    label: { control: { type: "text" } },
    checked: { control: { type: "boolean" } },
    required: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
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
