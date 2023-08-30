import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "..";

const meta: Meta = {
  tags: ["autodocs"],
  component: Modal,
  args: {
    title: "モーダルタイトル",
    message: "モーダルメッセージ",
    buttons: [
      { color: "clear", label: "キャンセル", onClick: () => {}, radius: true },
      { color: "main", label: "OK", onClick: () => {}, radius: true },
    ],
  },
  argTypes: {
    title: { control: { type: "text" } },
    message: { control: { type: "text" } },
    buttons: {},
  },
  render: (args) => {
    return (
      <div style={{ height: "300px" }}>
        <Modal
          title={args.title}
          message={args.message}
          buttons={args.buttons}
        />
      </div>
    );
  },
};
export default meta;
type Story = StoryObj<typeof Modal>;
export const Basic: Story = {
  args: {},
};
