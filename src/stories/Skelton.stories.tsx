import { Meta, StoryObj } from "@storybook/react";
import { SkeltonCard, SkeltonList } from "..";

const meta: Meta = {
  tags: ["autodocs"],
  title: "Skelton",
  args: {},
  argTypes: {},
};

export default meta;

export const Card: StoryObj = {
  render: () => {
    return (
      <>
        <SkeltonCard />
      </>
    );
  },
};

export const List: StoryObj = {
  render: () => {
    return (
      <>
        <SkeltonList />
      </>
    );
  },
};
