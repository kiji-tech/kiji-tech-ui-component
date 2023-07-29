import { Meta, StoryObj } from "@storybook/react";
import { SkeltonCard } from "./skelton";

const meta: Meta = {
    title: "SkeltonCard",
    component: SkeltonCard,
    render: () => {
        return (
            <div style={{ width: '240px' }}>
                <SkeltonCard />
            </div>
        );
    }
}

export const story: StoryObj = {};
export default meta;