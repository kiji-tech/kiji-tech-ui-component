import { Meta, StoryObj } from "@storybook/react";
import { Selector } from "../..";

const meta: Meta<typeof Selector> = {
  tags: ["autodocs"],
  component: Selector,
  args: {
    id: "",
    label: "Label",
    selected: "",
    required: false,
    options: [],
    onChange: () => {},
  },
  argTypes: {
    id: {
      control: { type: "text" },
      description: "セレクターのID",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      control: { type: "text" },
      description: "セレクタのラベル",
      table: {
        type: { summary: "string" },
      },
    },
    required: {
      control: { type: "boolean" },
      description: "必須ラベル",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    selected: {
      control: { type: "inline-radio" },
      options: ["1", "2", "3"],
      description: "選択しているもののキー",
      table: {
        type: { summary: "string | number" },
      },
    },
    options: {
      description: "選択項目リスト",
      table: {
        type: { summary: "SelectorOption" },
      },
    },
    onChange: {
      description: "変更イベント",
      table: {
        type: { summary: "Function" },
      },
    },
  },
  render: (args) => {
    return (
      <div style={{ width: "200px" }}>
        <Selector
          id={args.id}
          label={args.label}
          required={args.required}
          selected={args.selected}
          options={args.options}
          onChange={() => {}}
        />
      </div>
    );
  },
};
export default meta;
type Story = StoryObj<typeof Selector>;

export const story: Story = {
  args: {
    id: "",
    selected: "",
    options: [
      { label: "セレクト1", value: "1" },
      { label: "セレクト2", value: "2" },
      { label: "セレクト3", value: "3" },
    ],
  },
};
