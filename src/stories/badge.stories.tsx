import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "..";
import { ThemeProvider } from "../providers/theme";

const meta: Meta = {
  tags: ["autodocs"],
  component: Badge,
  args: {
    text: "Badge",
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
    text: { control: { type: "text" } },
    size: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
  render: (args) => {
    return (
      <ThemeProvider theme={{ theme: args.theme }}>
        <Badge children={<span>{args.text}</span>} size={args.size} />
      </ThemeProvider>
    );
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;
export const Basic: Story = {
  args: {},
};
