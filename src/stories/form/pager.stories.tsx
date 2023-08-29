import { Meta, StoryObj } from "@storybook/react";
import { Pager } from "../..";

const meta: Meta = {
  title: "Pager",
  args: { num: 1, max: 10, onClick: () => {} },
  argTypes: {
    num: { control: { type: "number" } },
    max: { control: { type: "number" } },
  },
  render: (args) => {
    return (
      <>
        <Pager num={args.num} max={args.max} onClick={() => {}} />
      </>
    );
  },
};

export const story: StoryObj = {
  args: {},
};
export default meta;
