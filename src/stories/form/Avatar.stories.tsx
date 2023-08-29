import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../..";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  args: {
    id: "id",
    shape: "circle",
    size: "md",
  },
  argTypes: {
    id: { control: { type: "text" } },
    imgUrl: { control: { type: "text" } },
    link: { control: { type: "text" } },
    shape: {
      control: { type: "inline-radio" },
      options: ["square", "circle", "rectangle"],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
  render: (args) => {
    return (
      <Avatar
        id={args.id}
        imgUrl={args.imgUrl}
        link={args.link}
        shape={args.shape}
        size={args.size}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Circle: Story = {
  args: { shape: "circle" },
};

export const Rectangle: Story = {
  args: { shape: "rectangle" },
};
