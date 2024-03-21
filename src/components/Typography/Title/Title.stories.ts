
import * as SB from '@storybook/react'

import * as Title from '.'

type ComponentType = typeof Title.Component

const meta = {
  title: 'Typography/Title',
  component: Title.Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies SB.Meta<ComponentType>

export default meta

type Story = SB.StoryObj<typeof meta>

export const Paragraph: Story = {
  args: {
    children: 'Primary Text'
  }
};

export const Span: Story = {
  args: {
    children: 'Primary Title'
  }
};