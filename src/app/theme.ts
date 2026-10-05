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
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: '#E8E2D2',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
        },
      },
    },
  },
})
