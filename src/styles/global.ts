import { globalCss, keyframes } from './stitches.config'

const spin = keyframes({
  '100%': { transform: 'rotate(360deg)' },
})

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

  '.loading': {
    animation: `${spin} 1.5s linear infinite`,
    margin: '1rem auto',
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
})
