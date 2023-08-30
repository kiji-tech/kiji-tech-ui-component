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
    disabled: false,
  },
  argTypes: {
    id: { control: { type: "text" } },
    label: { control: { type: "text" } },
    value: { control: { type: "text" } },
    length: { control: { type: "number" } },
    disabled: { control: { type: "boolean" } },
  },
  render: (args) => {
    return (
      <div style={{ width: "400px" }}>
        <Textarea
          id={args.id}
          label={args.label}
          value={args.value}
          length={args.length}
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
