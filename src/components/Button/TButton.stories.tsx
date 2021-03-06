import React from 'react'
import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from './index'

export default {
  title: 'UI/TButton',
  component: Button,
  args: {
    children: 'Label'
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
