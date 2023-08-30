import { Meta, StoryObj } from "@storybook/react";
import { Pager } from "..";

const meta: Meta = {
  tags: ["autodocs"],
  component: Pager,
  args: { num: 1, max: 10, onClick: () => {} },
  argTypes: {
    num: {
      control: { type: "number" },
      description:
        "今選択しているページ｡<br />｢1 <= num <= max｣ の範囲で指定する｡",
    },
    max: { control: { type: "number" } },
    onClick: {},
  },
  render: (args) => {
    return (
      <>
        <Pager num={args.num} max={args.max} onClick={() => {}} />
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Pager>;

export const Basic: Story = {
  args: {},
};
