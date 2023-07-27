import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./avatar";


const meta: Meta<typeof Avatar> = {
    title: "Avatar"
    , component: Avatar
    , args: {
        id: "id"
        , name: "name"
        , sponsor: "sponsor"
        , shape: "circle"
    },
    argTypes: {
        imgUrl: { control: { type: "text" } },
        name: { control: { type: "text" } },
        id: { control: { type: "text" } },
        sponsor: { control: { type: "text" } },
        link: { control: { type: "text" } },
        shape: { control: { type: "inline-radio" }, options: ['square', 'circle', 'rectangle'] },
        size: { control: { type: "inline-radio" }, options: ['xs', 'sm', 'md', 'lg'] },
    }, render: (args) => {
        return <Avatar
            id={args.id}
            name={args.name}
            imgUrl={args.imgUrl}
            sponsor={args.sponsor}
            link={args.link}
            shape={args.shape}
            size={args.size}
        />
    },
}

export const story: StoryObj = {
    args: {}
}


export default meta;