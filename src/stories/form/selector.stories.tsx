import { Meta, StoryObj } from "@storybook/react";
import { Selector } from "../..";
import { ThemeProvider } from "../../providers/theme";

const meta: Meta = {
  tags: ["autodocs"],
  component: Selector,
  args: {
    theme: "theme1",
    id: "",
    label: "Label",
    selected: "",
    required: false,
    radius: false,
    options: [],
    onChange: () => {},
  },
  argTypes: {
    theme: {
      control: { type: "inline-radio" },
      description: "テーマ",
      options: ["theme1", "theme2"],
      table: {
        type: { summary: "theme1 | theme2" },
      },
    },
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
    radius: {
      control: { type: "boolean" },
      description: "角丸",
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
      <ThemeProvider theme={{ theme: args.theme }}>
        <div style={{ width: "200px" }}>
          <Selector
            id={args.id}
            label={args.label}
            required={args.required}
            selected={args.selected}
            radius={args.radius}
            options={args.options}
            onChange={() => {}}
          />
        </div>
      </ThemeProvider>
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
