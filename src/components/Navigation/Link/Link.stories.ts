
import * as SB from '@storybook/react'

import * as Link from '.'

type ComponentType = typeof Link.Component

const meta = {
  title: 'Navigation/Link',
  component: Link.Component,
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
    
  },
};