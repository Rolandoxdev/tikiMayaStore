import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary']
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#234B4D',
    },
    secondary: {
      main: '#E8E2D2',
    },
    background: {
      default: '#E8E2D2',
      paper: '#E8E2D2',
    },
    accent: {
      main: '#FBBF49',
    },
  },
})
