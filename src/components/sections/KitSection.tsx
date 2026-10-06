import { Box, Container, Grid, Typography } from '@mui/material'
import { kits } from '../../data/kits'
import { KitCard } from '../kits/KitCard'

export function KitSection() {
  return (
    <Box
      component="section"
      id="kits"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 400,
              color: 'primary.main',
              mb: 2.5,
              lineHeight: 1.2,
            }}
          >
            Descubre nuestros kits
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: { xs: '0.9375rem', md: '1.0625rem' },
              lineHeight: 1.8,
              color: 'primary.main',
              opacity: 0.8,
              maxWidth: '55ch',
            }}
          >
            Una selección pensada para regalar, compartir o convertir la preparación del
            té en un pequeño ritual.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {kits.map((kit) => (
            <Grid key={kit.id} size={{ xs: 12, md: 4 }}>
              <KitCard kit={kit} whatsappHref={null} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}