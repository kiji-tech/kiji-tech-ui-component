import { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
    component: Breadcrumb
}

export default meta;
type Story = StoryObj<typeof Breadcrumb>;


export const Link1: Story = {
    render: () => {
        return (<>
            <div>ホーム</div>
            <Breadcrumb links={[{ 'url': '/', 'label': 'ホーム' }]} />
            <br />
            <div>プロフィール</div>
            <Breadcrumb links={[{ 'url': '/', 'label': 'ホーム' }, { 'url': '/profile', 'label': 'プロフィール' }]} />
        </>);
    }
}
