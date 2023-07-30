import { Button } from '../../../';
import { Meta, StoryObj } from '@storybook/react';

const btnStyle = {
    width: "160px",
    margin: "16px",
}


const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
    args: {
        label: 'Button.'
        , color: "color-main"
        , onClick: () => { }
    },
    argTypes: {
        color: {
            control: {
                type: "inline-radio",
            },
            options: ["color-main", "color-accent", "color-clear"],
        },
        label: {
            control: {
                type: "text",
            }
        },
        outline: {
            control: {
                type: "boolean",
            },
        },
        radius: {
            control: {
                type: "boolean"
            }
        }
    },
    render: (args) => {
        return (<div style={btnStyle}>
            <Button label={args.label} onClick={() => { }} color={args.color} outline={args.outline} radius={args.radius} />
        </div>);
    }
};

export const story: StoryObj = {
    args: { label: "Button", onClick: () => { }, radius: true, outline: false }
}
export default meta;