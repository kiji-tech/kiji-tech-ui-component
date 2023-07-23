import { Button } from '../';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;


// === Stories ====

export const Primary: Story = {
    render: () => <Button label="Button" color="primary" size="md" />,
};

export const Clear: Story = {
    render: () => <Button label="Clear" color="clear" size="md" />,
};
