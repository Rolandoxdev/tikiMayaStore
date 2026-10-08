import { Box, Button, Container, Typography } from '@mui/material'
import { ArrowDownRight } from 'lucide-react'
import introImage from '../../assets/images/introSection_TikiMayaStore.jpg'

export function IntroSection() {
  return (
    <Box
      component="section"
      id="intro"
      sx={{
        py: { xs: 9, md: 15 },
        backgroundColor: 'secondary.light',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
            gap: { xs: 5, md: 12 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ order: { xs: 2, md: 1 }, maxWidth: 620 }}>
            <Box
              component="img"
              src={introImage}
              alt="Dos personas comparten tazas de té en una mesa"
              sx={{
                display: 'block',
                width: '100%',
                height: { xs: 300, md: 460 },
                objectFit: 'cover',
                objectPosition: 'center center',
                borderRadius: { xs: 40, md: 60 },
              }}
            />
          </Box>

          <Box sx={{ order: { xs: 1, md: 2 }, py: { md: 5 } }}>
            <Typography
              component="p"
              sx={{
                color: 'primary.main',
                fontSize: '0.66rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                mb: 3,
                opacity: 0.68,
              }}
            >
              Una invitación a explorar
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: (theme) => theme.typography.h2.fontFamily,
                fontSize: { xs: '2.55rem', md: '3.8rem' },
                fontWeight: 400,
                lineHeight: 1.04,
                color: 'primary.main',
                letterSpacing: '-0.05em',
                mb: 4,
                maxWidth: '11ch',
              }}
            >
              Una selección para descubrir
            </Typography>

            <Typography
              component="p"
              sx={{
                fontSize: { xs: '0.96rem', md: '1.04rem' },
                lineHeight: 1.9,
                color: 'primary.main',
                opacity: 0.82,
                mb: 5,
                maxWidth: '47ch',
              }}
            >
              TikiMaya Store reúne productos pensados para despertar curiosidad, disfrutar
              nuevos sabores y compartir buenos momentos. Comenzamos con tés, infusiones
              y kits que convierten una mezcla en algo más que una taza.
            </Typography>

            <Button
              component="a"
              href="#products"
              variant="text"
              color="primary"
              endIcon={<ArrowDownRight size={18} />}
              sx={{ px: 0, borderRadius: 0, borderBottom: '1px solid', borderColor: 'primary.main' }}
            >
              Conocer la colección
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
