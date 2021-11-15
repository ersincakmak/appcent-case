import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      primary: {
        base: string
        hover: string
      }

      text: {
        base: string
        gray: string
        contrast: string
      }
    }
  }
}
