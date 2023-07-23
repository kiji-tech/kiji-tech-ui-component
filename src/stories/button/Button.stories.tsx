import React from 'react';
import { Button } from '../../';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;


// === Stories ====

export const Main: Story = {
    render: () => <Button label="main" onClick={() => { }} color="main" />,
}

export const Base: Story = {
    render: () => <Button label="base" onClick={() => { }} color="base" />
}