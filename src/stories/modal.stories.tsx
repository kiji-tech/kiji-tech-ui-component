import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../";

const meta: Meta = {
  title: "Modal",
  args: {
    title: "",
    message: "",
    buttons: [
      { color: "clear", label: "キャンセル", onClick: () => {}, radius: true },
      { color: "main", label: "OK", onClick: () => {}, radius: true },
    ],
  },
  argTypes: {
    title: { control: { type: "text" } },
    message: { control: { type: "text" } },
  },
  render: (args) => {
    return (
      <>
        <Modal
          title={args.title}
          message={args.message}
          buttons={args.buttons}
        />
      </>
    );
  },
};
export const story: StoryObj = {
  args: {},
};
export default meta;
