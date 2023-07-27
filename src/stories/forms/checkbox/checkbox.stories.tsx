import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./checkbox";


const meta: Meta<typeof Checkbox> = {
    title: "Checkbox"
    , component: Checkbox
    , args: {
        id: "checkbox"
        , label: "チェックボックス"
        , value: false
        , required: false
        , disabled: false
    }
    , argTypes: {
        id: { control: { type: "text" } },
        label: { control: { type: "text" } },
        value: { control: { type: "boolean" } },
        required: { control: { type: "boolean" } },
        disabled: { control: { type: "boolean" } },
    }
    , render: (args) => {
        return (
            <Checkbox
                id={args.id}
                label={args.label}
                value={args.value}
                required={args.required}
                disabled={args.disabled}
                onChange={() => { }}
            />
        );
    }
    ,
}

export const story: StoryObj = {
    args: { id: 'checkbox01', label: 'ラベル', value: false, required: false, disabled: false }
}
export default meta;