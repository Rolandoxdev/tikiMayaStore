import { Box, Button, Container, Typography } from '@mui/material'
import { EditorialVisual } from '../visuals/EditorialVisual'

export function HeroSection() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        pt: { xs: 5, md: 8 },
        pb: { xs: 9, md: 14 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.94fr 1.06fr' },
            gap: { xs: 5, md: 9 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ order: { xs: 1, md: 1 }, py: { md: 4 } }}>
            <Typography
              component="p"
              sx={{
                color: 'primary.main',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                mb: { xs: 3, md: 4 },
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                '&::before': {
                  content: '""',
                  width: 32,
                  height: 1,
                  backgroundColor: 'accent.dark',
                },
              }}
            >
              Tés, infusiones, pequeños rituales
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontFamily: (theme) => theme.typography.h1.fontFamily,
                fontSize: { xs: 'clamp(3.35rem, 15vw, 5rem)', md: 'clamp(5rem, 7vw, 7.8rem)' },
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: '-0.065em',
                color: 'primary.main',
                mb: { xs: 3, md: 4 },
                maxWidth: '9ch',
              }}
            >
              Hay algo <Box component="span" sx={{ color: 'primary.light', fontStyle: 'italic' }}>por descubrir.</Box>
            </Typography>

            <Typography
              component="p"
              sx={{
                fontSize: { xs: '1rem', md: '1.08rem' },
                lineHeight: 1.8,
                color: 'primary.main',
                opacity: 0.82,
                mb: { xs: 4, md: 5 },
                maxWidth: '34ch',
              }}
            >
              Tés, infusiones y pequeños rituales para disfrutar y compartir.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Button
                component="a"
                href="#products"
                variant="contained"
                color="primary"
              >
                Descubrir productos
              </Button>

              <Button
                component="a"
                href="#kits"
                variant="outlined"
                color="primary"
              >
                Ver kits
              </Button>
            </Box>
          </Box>

          <Box sx={{ order: { xs: 2, md: 2 }, position: 'relative' }}>
            <EditorialVisual height={{ xs: 320, md: 590 }} variant="hero" />
            <Typography
              component="p"
              sx={{
                position: 'absolute',
                right: { xs: 0, md: 12 },
                bottom: { xs: -28, md: -34 },
                fontSize: '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'primary.main',
                opacity: 0.65,
              }}
            >
              Mezclas para cada momento
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
