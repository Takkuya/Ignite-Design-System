import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  // título da página do story
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: <Text>Testando o elemento</Text>,
  },
  // Quando recebemos alguma propriedade que é algum componente React ou alguma coisa mais complexa é melhor
  // não permitir que o usuário controle essas informações
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
