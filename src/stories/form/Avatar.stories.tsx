import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../..";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
  args: {
    id: "id",
    imgUrl: "",
    link: "",
    shape: "circle",
    size: "md",
  },
  argTypes: {
    id: {
      control: { type: "text" },
      description: "",
      table: {
        type: { summary: "string" },
      },
    },
    imgUrl: {
      control: { type: "text" },
      description: "画像のURL",
      table: {
        type: { summary: "string" },
      },
    },
    link: {
      control: { type: "text" },
      description: "クリックした際のリンク.",
      table: {
        type: { summary: "string" },
      },
    },
    shape: {
      control: { type: "inline-radio" },
      options: ["square", "circle", "rectangle"],
      description: "アバター形",
      table: {
        type: { summary: "square | cicle | rectangle" },
        defaultValue: { summary: "cicle" },
      },
    },
    size: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg"],
      description: "アバターのサイズ",
      table: {
        type: { summary: "xs | sm | md | lg" },
        defaultValue: { summary: "md" },
      },
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
