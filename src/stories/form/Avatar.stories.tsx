import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../..";
import { ThemeProvider } from "../../providers/theme";

const meta: Meta = {
  tags: ["autodocs"],
  component: Avatar,
  args: {
    id: "id",
    imgUrl: "",
    link: "",
    shape: "circle",
    size: "md",
    theme: "theme1",
  },
  argTypes: {
    theme: {
      control: { type: "inline-radio" },
      description: "テーマ",
      options: ["theme1", "theme2"],
      table: {
        type: { summary: "theme1 | theme2" },
      },
    },
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
      <ThemeProvider theme={{ theme: args.theme }}>
        <Avatar
          id={args.id}
          imgUrl={args.imgUrl}
          link={args.link}
          shape={args.shape}
          size={args.size}
        />
      </ThemeProvider>
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
