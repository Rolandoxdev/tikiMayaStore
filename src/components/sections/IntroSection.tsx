import { Box, Button, Container, Typography } from '@mui/material'
import { EditorialVisual } from '../visuals/EditorialVisual'

export function IntroSection() {
  return (
    <Box
      component="section"
      id="intro"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <EditorialVisual height={{ xs: 260, md: 360 }} />
          </Box>

          <Box sx={{ order: { xs: 1, md: 2 } }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 400,
                lineHeight: 1.2,
                color: 'primary.main',
                mb: 3,
              }}
            >
              Una selección para descubrir
            </Typography>

            <Typography
              component="p"
              sx={{
                fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                lineHeight: 1.8,
                color: 'primary.main',
                opacity: 0.8,
                mb: 4,
              }}
            >
              TikiMaya Store reúne productos pensados para despertar curiosidad, disfrutar
              nuevos sabores y compartir buenos momentos. Comenzamos con tés, infusiones
              y kits que convierten una mezcla en algo más que una taza.
            </Typography>

            <Button
              component="a"
              href="#products"
              variant="contained"
              sx={{
                backgroundColor: 'accent.main',
                color: 'primary.main',
                fontWeight: 500,
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '0.9375rem',
                letterSpacing: '0.02em',
                '&:hover': {
                  backgroundColor: 'rgba(251, 191, 73, 0.85)',
                },
              }}
            >
              Conocer la colección
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
