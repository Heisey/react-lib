
import * as SB from '@storybook/react'

import * as Core from 'core'

import * as Button from '.'

type ComponentType = typeof Button.Component

const meta = {
  title: 'Buttons/Button',
  component: Button.Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies SB.Meta<ComponentType>

export default meta;

type Story = SB.StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Primary Button",
    buttontheme: Core.keys.buttonThemes.PRIMARY
  },
};

export const Secondary: Story = {
  args: {
    children: "Warning Button",
    buttontheme: Core.keys.buttonThemes.SECONDARY
  },
};

export const Warning: Story = {
  args: {
    children: "Warning Button",
    buttontheme: Core.keys.buttonThemes.WARNING
  },
};