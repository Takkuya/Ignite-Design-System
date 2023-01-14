import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@takkuya-ignite-ui/react'

export default {
  // título da página do story
  title: 'Typography/Heading',
  component: Heading,

  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, repellat. Possimus modi voluptatum impedit unde assumenda labore quas eaque nesciunt molestias! Nulla architecto consequuntur debitis eos adipisci ab provident? Doloribus.',
  },

  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    // muda a tag p pra uma tag strong
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
