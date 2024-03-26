
import * as SB from '@storybook/react'

import * as Text from '.'

type ComponentType = typeof Text.Component

const meta = {
  title: 'Inputs/Text',
  component: Text.Component,
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
