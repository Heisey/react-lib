
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
    children: "Primary",
    buttontheme: Core.keys.buttonThemes.PRIMARY,
    variant: Core.keys.buttonVaraints.SOLID
  },
};

export const OutlinePrimary: Story = {
  args: {
    children: " Outline Primary",
    buttontheme: Core.keys.buttonThemes.PRIMARY,
    variant: Core.keys.buttonVaraints.OUTLINE
  },
};

export const TextPrimary: Story = {
  args: {
    children: "Text Primary",
    buttontheme: Core.keys.buttonThemes.PRIMARY,
    variant: Core.keys.buttonVaraints.TEXT
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

export const Danger: Story = {
  args: {
    children: "Warning Button",
    buttontheme: Core.keys.buttonThemes.DANGER
  },
};

export const OutlineDanger: Story = {
  args: {
    children: 'Outline Danger Button',
    buttontheme: Core.keys.buttonThemes.DANGER,
    variant: Core.keys.buttonVaraints.OUTLINE
  }
}
export const TextDanger: Story = {
  args: {
    children: 'Text Danger Button',
    buttontheme: Core.keys.buttonThemes.DANGER,
    variant: Core.keys.buttonVaraints.TEXT
  }
}