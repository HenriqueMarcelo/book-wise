import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webjit-font-smoothing': 'antialiased',
    backgroundColor: '$gray800',
    color: '$gray100',
    overflowX: 'hidden',
  },

  'body, input, textarea, button': {
    fontFamily: '$default',
    fontWeight: 400,
  },
})
