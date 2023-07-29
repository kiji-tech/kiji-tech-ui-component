import { Meta, StoryObj } from "@storybook/react";
import Selector from "./selector";


const meta: Meta<typeof Selector> = {
    title: "Selector"
    , component: Selector
    , args: {
        id: ''
        , label: 'Label'
        , selected: ''
        , required: false
        , options: []
        , onChange: () => { }
    }
    , argTypes: {
        id: { control: { type: "text" } },
        label: { control: { type: "text" } },
        required: { control: { type: "boolean" } },
        selected: { control: { type: "inline-radio" }, options: ['1', '2', '3'] },
    }
    , render: (args) => {
        return (<div style={{ width: "200px" }}>
            <Selector
                id={args.id}
                label={args.label}
                required={args.required}
                selected={args.selected}
                options={args.options}
                onChange={() => { }}
            />
        </div>);
    }
}

export const story: StoryObj = {
    args: { id: '', selected: '', options: [{ label: 'セレクト1', value: '1' }, { label: 'セレクト2', value: '2' }, { label: 'セレクト3', value: '3' }] }
}
export default meta;