import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@takkuya-ignite-ui/react'

export default {
  // título da página do story
  title: 'Typography/Text',
  component: Text,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, repellat. Possimus modi voluptatum impedit unde assumenda labore quas eaque nesciunt molestias! Nulla architecto consequuntur debitis eos adipisci ab provident? Doloribus.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    // muda a tag p pra uma tag strong
    as: 'strong',
  },
}
