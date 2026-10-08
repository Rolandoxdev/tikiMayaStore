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
        minHeight: {
          xs: 'min(820px, max(680px, 100svh))',
          md: 'min(820px, max(680px, 86svh))',
        },
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
            xs: `linear-gradient(180deg, ${alpha(theme.palette.secondary.main, 0.62)} 0%, ${alpha(theme.palette.secondary.main, 0.48)} 42%, ${alpha(theme.palette.secondary.main, 0.1)} 76%, ${alpha(theme.palette.primary.dark, 0.14)} 100%)`,
            md: `linear-gradient(90deg, ${alpha(theme.palette.secondary.main, 0.66)} 0%, ${alpha(theme.palette.secondary.main, 0.44)} 34%, ${alpha(theme.palette.secondary.main, 0.14)} 63%, transparent 82%)`,
          },
        })}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', width: '100%', py: { xs: '120px 96px', md: '100px 72px' } }}>
        <Box sx={{ maxWidth: { xs: 520, md: 660 } }}>
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
              opacity: 0.9,
              mb: { xs: 4, md: 5 },
              maxWidth: '34ch',
            }}
          >
            Tés, infusiones y pequeños rituales para disfrutar y compartir.
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            <Button component="a" href="#products" variant="contained" color="primary">
              Descubrir productos
            </Button>

            <Button component="a" href="#kits" variant="outlined" color="primary">
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
          fontSize: '0.62rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'secondary.light',
          textShadow: `0 1px 10px ${alpha(theme.palette.primary.dark, 0.5)}`,
        })}
      >
        Mezclas para cada momento
      </Typography>
    </Box>
  )
}
