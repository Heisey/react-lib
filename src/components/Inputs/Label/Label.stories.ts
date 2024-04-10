
import * as SB from '@storybook/react'

import * as Text from 'components/Inputs/Text'

import * as Label from '.'

type ComponentType = typeof Label.Component

const meta = {
  title: 'Inputs/Label',
  component: Label.Component,
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
    required: true,
    input: Text.Component.call({}, {})
  },
};
