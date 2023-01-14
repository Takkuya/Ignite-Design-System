import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

export type AvatarProps = ComponentProps<typeof AvatarImage>

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      {/* demorar 0.6 segundos para mostrar o fallback mesmo que a imagem não tenha carregado */}
      {/* isso para ele não mostrar o fallback no começo */}
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.diplayName = 'Avatar'
