import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  background: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  display: 'flex',
  // semelhante ao center, mas ele alinha horizontalmente com base no texto
  alignItems: 'baseline',

  // quando eu tiver dentro desse container com um input com focus
  // quando o input estiver com focus
  /* também poderia usar outra alternativa
    '&:focus-within
  */
  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  // quando eu tiver um input que está desabilitado
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: '$regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
