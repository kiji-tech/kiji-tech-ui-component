import { Meta, StoryObj } from "@storybook/react";
import { List, ListRow, ListColumn } from "../components/list/list";

const meta: Meta = {
  tags: ["autodocs"],
  component: List,
  argTypes: {},
  render: (args) => {
    return (
      <List>
        <ListRow>
          <ListColumn isHeader>Column1-1</ListColumn>
          <ListColumn isHeader>Column1-2</ListColumn>
        </ListRow>
        <ListRow>
          <ListColumn>Column2-1</ListColumn>
          <ListColumn>Column2-2</ListColumn>
        </ListRow>
      </List>
    );
  },
};

export default meta;
type Story = StoryObj<typeof List>;
export const Basic: Story = {
  args: {},
};
