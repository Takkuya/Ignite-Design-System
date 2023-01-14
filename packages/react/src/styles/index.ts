// configuração do stitches
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@takkuya-ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  // forma de mapear propriedades do CSS para algum tipo de token
  // fazendo com que a height e a width também utilize dos valores de space
  themeMap: { ...defaultThemeMap, height: 'space', width: 'space' },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
