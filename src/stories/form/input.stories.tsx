import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../..";

const meta: Meta = {
  component: Input,
  tags: ["autodocs"],
  args: {
    type: "text",
    id: "id",
    name: "name",
    label: "Label",
    value: "",
    required: false,
    placeholder: "Placeholder",
    pattern: "",
    patternDetail: "",
    min: 0,
    max: 50,
    message: "",
    disabled: false,
    onChange: (value: string | number) => {},
  },
  argTypes: {
    type: {
      control: { type: "inline-radio" },
      options: ["email", "search", "password", "number", "text"],
      description: "入力フォームの種別",
      table: {
        type: { summary: "email | search | password | number | text" },
        defaultValue: { summary: "text" },
      },
    },
    id: {
      control: { type: "text" },
      description: "入力フォームのID",
      table: {
        type: { summary: "string" },
      },
    },
    name: {
      control: { type: "text" },
      description: "入力フォームのName",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      control: { type: "text" },
      description: "入力フォームのラベル",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: { type: "text" },
      description: "入力フォームの値",
      table: {
        type: { summary: "string | number" },
      },
    },
    required: {
      control: { type: "boolean" },
      description: "必須フラグ",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "入力フォルダーのプレースホルダー",
      table: {
        type: { summary: "string" },
      },
    },
    pattern: {
      control: { type: "text" },
      description: "入力規制､パターン",
      table: {
        type: { summary: "string | RegExp" },
      },
    },
    patternDetail: {
      control: { type: "text" },
    },
    min: {
      control: { type: "number" },
      description: "入力下限数",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      control: { type: "number" },
      description: "入力上限数",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "255" },
      },
    },
    message: {
      control: { type: "text" },
      description: "エラーなどのメッセージを表示する",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "非活性フラグ",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      description: "入力フォーム 変更イベント",
      table: {
        type: { summary: "Function" },
      },
    },
  },
  render: (args) => {
    return (
      <div style={{ width: "400px" }}>
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
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {},
};

export const required: Story = {
  args: {
    required: true,
  },
};

export const Message: Story = {
  args: {
    message: "3文字以上入力してください｡",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    value: "password",
  },
};
