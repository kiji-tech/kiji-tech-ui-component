import { Meta, StoryObj } from "@storybook/react";
import { SkeltonList } from "./skelton";

const meta: Meta = {
    title: "SkeltonList",
    component: SkeltonList,
    render: () => {
        return (
            <div style={{ width: '240px' }}>
                <SkeltonList />
            </div>
        );
    }
}

export const story: StoryObj = {};
export default meta;