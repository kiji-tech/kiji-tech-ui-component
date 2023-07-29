import { Meta, StoryObj } from "@storybook/react";
import Modal from "./modal";

const meta: Meta = {
    title: "Modal",
    args: {
        title: ""
        , message: ""
        , buttons: [{ color: 'clear', label: 'Clear', onClick: () => { }, radius: true }, { color: 'main', label: 'Main', onClick: () => { }, radius: true }]
    },
    argTypes: {
        title: { control: { type: "text" } },
        message: { control: { type: "text" } },
    },
    render: (args) => {
        return (<>
            <Modal title={args.title} message={args.message} buttons={args.buttons} />
        </>)
    }
}
export const story: StoryObj = {
    args: {}
};
export default meta;