import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

// Usamos um h2 pois só podemos ter 1 h1 por página
export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = ComponentProps<typeof Heading> & {
  // para ele receber os elementos customizados
  as?: ElementType
}

Heading.displayName = 'Heading'
