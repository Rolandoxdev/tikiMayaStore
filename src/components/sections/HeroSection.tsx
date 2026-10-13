import { Box, Button, Container, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import heroImage from '../../assets/images/heroSection_TikiMayaStore.jpg'

export function HeroSection() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        minHeight: '100svh',
      }}
    >
      <Box
        component="img"
        src={heroImage}
        alt="Taza de té en infusión junto a hierbas y especias"
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: { xs: '43% center', sm: '50% center', md: 'center center' },
          zIndex: -2,
        }}
      />

      <Box
        aria-hidden
        sx={(theme) => ({
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          background: {
            xs: `linear-gradient(180deg, ${alpha(theme.palette.primary.dark, 0.74)} 0%, ${alpha(theme.palette.primary.dark, 0.72)} 100%)`,
            md: `linear-gradient(90deg, ${alpha(theme.palette.primary.dark, 0.36)} 0%, ${alpha(theme.palette.primary.dark, 0.52)} 46%, ${alpha(theme.palette.primary.dark, 0.28)} 78%, ${alpha(theme.palette.primary.dark, 0.36)} 100%)`,
          },
        })}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', width: '100%', py: { xs: '120px 96px', md: '100px 72px' } }}>
        <Box sx={{ maxWidth: { xs: 520, md: 660 } }}>
          <Typography
            component="p"
            sx={{
              color: 'common.white',
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
                backgroundColor: 'accent.main',
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
              color: 'common.white',
              mb: { xs: 3, md: 4 },
              maxWidth: '9ch',
            }}
          >
            Hay algo <Box component="span" sx={{ color: 'accent.main', fontStyle: 'italic' }}>por descubrir.</Box>
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: { xs: '1rem', md: '1.08rem' },
              lineHeight: 1.8,
              color: 'common.white',
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
              sx={{
                backgroundColor: 'accent.main',
                color: 'primary.main',
                '&:hover': { backgroundColor: 'accent.dark' },
                '&:focus-visible': { outline: '2px solid', outlineColor: 'common.white', outlineOffset: 3 },
                '&:active': { backgroundColor: 'accent.dark' },
              }}
            >
              Descubrir productos
            </Button>

            <Button
              component="a"
              href="#kits"
              variant="outlined"
              color="primary"
              sx={(theme) => ({
                color: 'common.white',
                borderColor: alpha(theme.palette.common.white, 0.8),
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.dark, 0.28),
                  borderColor: 'common.white',
                },
                '&:focus-visible': { outline: '2px solid', outlineColor: 'common.white', outlineOffset: 3 },
                '&:active': { backgroundColor: alpha(theme.palette.primary.dark, 0.44) },
              })}
            >
              Ver kits
            </Button>
          </Box>
        </Box>
      </Container>

      <Typography
        component="p"
        sx={(theme) => ({
          position: 'absolute',
          right: { xs: 20, md: 32 },
          bottom: { xs: 20, md: 28 },
          zIndex: 1,
          fontSize: '0.68rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'common.white',
          textShadow: `0 1px 10px ${alpha(theme.palette.primary.dark, 0.5)}`,
        })}
      >
        Mezclas para cada momento
      </Typography>
    </Box>
  )
}
