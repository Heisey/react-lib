
import * as SB from '@storybook/react'

import * as Modal from '.'

type ComponentType = typeof Modal.Component

const meta = {
  title: 'Layout/Modal',
  component: Modal.Component,
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
    open: true,
    onClose: () => { console.log('puppies close') }
  },
};