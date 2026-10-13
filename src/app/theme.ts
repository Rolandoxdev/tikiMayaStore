import { alpha, createTheme } from '@mui/material/styles'

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
      light: '#456A67',
      dark: '#173638',
      contrastText: '#E8E2D2',
    },
    secondary: {
      main: '#E8E2D2',
      light: '#F2EEE4',
      dark: '#D8D0BD',
      contrastText: '#234B4D',
    },
    background: {
      default: '#E8E2D2',
      paper: '#E8E2D2',
    },
    accent: {
      main: '#FBBF49',
      dark: '#E5A92E',
      contrastText: '#234B4D',
    },
    divider: alpha('#234B4D', 0.16),
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: '"Avenir Next", Avenir, "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '-0.055em',
    },
    h2: {
      fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '-0.045em',
    },
    h3: {
      fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
      fontWeight: 400,
      letterSpacing: '-0.035em',
    },
    h4: {
      fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 400,
          minHeight: 48,
          borderRadius: 999,
          paddingInline: 24,
          letterSpacing: '0.01em',
          transition: 'background-color 180ms ease, color 180ms ease, transform 180ms ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
  },
})
