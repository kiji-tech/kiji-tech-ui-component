import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "..";

const meta: Meta = {
  tags: ["autodocs"],
  component: Modal,
  args: {
    title: "モーダルタイトル",
    children: "モーダルエレメント",
    buttons: [
      { color: "clear", label: "キャンセル", onClick: () => {}, radius: true },
      { color: "main", label: "OK", onClick: () => {}, radius: true },
    ],
  },
  argTypes: {
    title: { control: { type: "text" } },
    children: { control: { type: "text" }, description: "モーダル内要素" },
    buttons: {},
  },
  render: (args) => {
    return (
      <div style={{ height: "300px" }}>
        <Modal
          title={args.title}
          children={<>{args.children}</>}
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
