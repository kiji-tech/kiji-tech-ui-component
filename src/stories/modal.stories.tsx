import { Meta, StoryObj } from "@storybook/react";
import { Modal, Text } from "..";
import { ThemeProvider } from "../providers/theme";

const meta: Meta = {
  tags: ["autodocs"],
  component: Modal,
  args: {
    theme: "theme1",
    title: "モーダルタイトル",
    children: (
      <div style={{ width: "100%", height: "100px" }}>
        <Text text="モーダルコンテンツ" />
      </div>
    ),
    buttons: [
      { label: "キャンセル", onClick: () => {}, radius: true },
      { label: "OK", onClick: () => {}, radius: true },
    ],
    isView: true,
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
    title: { control: { type: "text" } },
    children: { control: { type: "text" }, description: "モーダル内要素" },
    buttons: {},
    isView: { control: { type: "boolean" } },
  },
  render: (args) => {
    return (
      <ThemeProvider theme={{ theme: args.theme }}>
        <div style={{ height: "300px" }}>
          <Modal
            title={args.title}
            children={<>{args.children}</>}
            buttons={args.buttons}
            isView={args.isView}
          />
        </div>
      </ThemeProvider>
    );
  },
};
export default meta;
type Story = StoryObj<typeof Modal>;
export const Basic: Story = {
  args: {},
};
