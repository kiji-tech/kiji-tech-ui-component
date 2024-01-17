import { Meta, StoryObj } from "@storybook/react";
import { Button, Modal } from "..";

const meta: Meta = {
  tags: ["autodocs"],
  component: Modal,
  args: {
    title: "モーダルタイトル",
    children: (
      <div style={{ width: "100px" }}>
        <Button label="モーダルコンテンツ" onClick={() => {}} />
      </div>
    ),
    buttons: [
      { color: "clear", label: "キャンセル", onClick: () => {}, radius: true },
      { color: "main", label: "OK", onClick: () => {}, radius: true },
    ],
    isView: true,
  },
  argTypes: {
    title: { control: { type: "text" } },
    children: { control: { type: "text" }, description: "モーダル内要素" },
    buttons: {},
    isView: { control: { type: "boolean" } },
  },
  render: (args) => {
    return (
      <div style={{ height: "300px" }}>
        <Modal
          title={args.title}
          children={<>{args.children}</>}
          buttons={args.buttons}
          isView={args.isView}
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
