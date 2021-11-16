import { DefaultTheme } from 'styled-components'

const baseTheme: DefaultTheme = {
  borderRadius: '5px',
  containerWidth: 'min(75rem,100%)', // 1200px
  colors: {
    text: {
      base: '#252525',
      gray: '#aaaaaa',
      contrast: '#eeeeee',
    },
    primary: {
      base: '#4aaeff',
      hover: '#0070cc',
    },
  },
}

export default baseTheme
