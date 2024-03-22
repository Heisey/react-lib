
import * as SB from '@storybook/react'

import * as Text from '.'

type ComponentType = typeof Text.Component

const meta = {
  title: 'Typography/Text',
  component: Text.Component,
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
    as: 'span',
    children: 'Primary Title'
  }
};

export const Dark: Story = {
  args: {
    children: 'Dark',
    theme: 'DARK'
  }
}

export const Light: Story = {
  args: {
    children: 'Light',
    theme: 'LIGHT'
  }
}

export const Danger: Story = {
  args: {
    children: 'Danger',
    theme: 'DANGER'
  }
}