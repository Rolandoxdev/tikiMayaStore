import { Box, Button, Container, Typography } from '@mui/material'
import { EditorialVisual } from '../visuals/EditorialVisual'

export function HeroSection() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ order: { xs: 1, md: 1 } }}>
            <Typography
              component="p"
              sx={{
                color: 'primary.main',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              TikiMaya Store
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 400,
                lineHeight: 1.15,
                color: 'primary.main',
                mb: 3,
              }}
            >
              Hay algo por descubrir.
            </Typography>

            <Typography
              component="p"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.7,
                color: 'primary.main',
                opacity: 0.75,
                mb: 4,
                maxWidth: '40ch',
              }}
            >
              Tés, infusiones y pequeños rituales para disfrutar y compartir.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
              <Button
                component="a"
                href="#products"
                variant="contained"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'secondary.main',
                  fontWeight: 400,
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.02em',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Descubrir productos
              </Button>

              <Button
                component="a"
                href="#kits"
                variant="outlined"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  fontWeight: 400,
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.02em',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(35, 75, 77, 0.04)',
                  },
                }}
              >
                Ver kits
              </Button>
            </Box>
          </Box>

          <Box sx={{ order: { xs: 2, md: 2 } }}>
            <EditorialVisual height={{ xs: 300, md: 440 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
