import { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "..";

const meta: Meta<typeof Breadcrumb> = {
  tags: ["autodocs"],
  //   argTypes: [{}],
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Basic: Story = {
  render: () => {
    return (
      <>
        <div>ホーム</div>
        <Breadcrumb links={[{ url: "/", label: "ホーム" }]} />
        <br />
        <div>プロフィール</div>
        <Breadcrumb
          links={[
            { url: "/", label: "ホーム" },
            { url: "/profile", label: "プロフィール" },
          ]}
        />
      </>
    );
  },
};
