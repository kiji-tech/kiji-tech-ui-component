import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/text/text";

const meta: Meta = {
  tags: ["autodocs"],
  component: Text,
  args: {
    text: "Text",
    size: "md",
    weight: "bold",
  },
  argTypes: {
    text: { control: { type: "text" } },
    size: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    weight: { control: { type: "inline-radio" }, options: [null, "bold"] },
  },
  render: (args) => {
    return <Text size={args.size} weight={args.weight} text={args.text} />;
  },
};

export default meta;
type Story = StoryObj<typeof Text>;
export const Basic: Story = {
  args: {},
};
