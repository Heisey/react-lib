
import * as SB from '@storybook/react'

import * as Button from '.'

type ButtonType = typeof Button.Component

const meta = {
  title: 'Example/Button',
  component: Button.Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies SB.Meta<ButtonType>

export default meta;
type Story = SB.StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Primary Button"
    // primary: true,
    // label: 'Button',
  },
};