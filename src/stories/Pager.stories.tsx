import { Meta, StoryObj } from "@storybook/react";
import { Pager } from "..";
import { ThemeProvider } from "../providers/theme";

const meta: Meta = {
  tags: ["autodocs"],
  component: Pager,
  args: {
    theme: "theme1",
    num: 1,
    max: 10,
    onClick: () => {},
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
      <ThemeProvider theme={{ theme: args.theme }}>
        <Pager num={args.num} max={args.max} onClick={() => {}} />
      </ThemeProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Pager>;

export const Basic: Story = {
  args: {},
};
