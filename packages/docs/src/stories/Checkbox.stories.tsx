import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@takkuya-ignite-ui/react'

export default {
  // título da página do story
  title: 'Form/Checkbox',
  component: Checkbox,
  // uma forma de customizar a view que mostra os componentes
  // Story => basicamente uma função que renderiza o meu input (nesse caso)
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size={'sm'}>Accept Terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
