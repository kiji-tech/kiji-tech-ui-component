import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";

const meta: Meta = {
    title: "Input"
    , args: {
        type: 'text',
        id: 'id',
        label: 'Label',
        value: '',
        required: false,
        placeholder: 'Placeholder',
        pattern: '',
        patternDetail: '',
        min: 0,
        max: 50,
        message: '',
        onChange: (value: string | number) => { },
        disabled: false
    }
    , argTypes: {
        type: { control: { type: "inline-radio" }, options: ['email', 'search', 'password', 'number', 'text'] },
        id: { control: { type: "text" } },
        label: { control: { type: "text" } },
        value: { control: { type: "text" } },
        required: { control: { type: "boolean" } },
        placeholder: { control: { type: "text" } },
        pattern: { control: { type: "text" } },
        patternDetail: { control: { type: "text" } },
        min: { control: { type: "number" } },
        max: { control: { type: "number" } },
        message: { control: { type: "text" } },
        disabled: { control: { type: "boolean" } },
    }
    , render: (args) => {
        return (
            <div>
                <Input
                    type={args.type}
                    id={args.id}
                    label={args.label}
                    value={args.value}
                    required={args.required}
                    placeholder={args.placeholder}
                    pattern={args.pattern}
                    patternDetail={args.patternDetail}
                    min={args.min}
                    max={args.max}
                    message={args.message}
                    onChange={args.onChange}
                    disabled={args.disabled}
                />
            </div>
        );
    }
}

export const story: StoryObj = {
    args: {}
}
export default meta;