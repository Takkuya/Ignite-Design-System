import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@takkuya-ignite-ui/react'

export default {
  // título da página do story
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/takkuya.png',
    alt: 'Gabriel Takuya',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
