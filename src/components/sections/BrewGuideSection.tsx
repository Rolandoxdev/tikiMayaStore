import { Box, Container, Typography } from '@mui/material'
import { Flame, Ruler, Sparkles, Timer } from 'lucide-react'

const brewSteps = [
  {
    number: '01',
    title: 'MIDE',
    description: 'Usa la cantidad recomendada para tu mezcla.',
    Icon: Ruler,
  },
  {
    number: '02',
    title: 'PREPARA',
    description: 'Agrega agua caliente a la temperatura indicada.',
    Icon: Flame,
  },
  {
    number: '03',
    title: 'INFUSIONA',
    description: 'Dale el tiempo recomendado para liberar sus aromas y sabores.',
    Icon: Timer,
  },
  {
    number: '04',
    title: 'DESCUBRE',
    description: 'Pruébalo primero solo. Después experimenta con miel, hielo o nuevas formas de disfrutarlo.',
    Icon: Sparkles,
  },
]

export function BrewGuideSection() {
  return (
    <Box
      component="section"
      id="brew-guide"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 8 }, maxWidth: '55ch' }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 400,
              color: 'primary.main',
              mb: 2,
            }}
          >
            Conoce, prepara, disfruta.
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: { xs: '0.9375rem', md: '1.0625rem' },
              lineHeight: 1.8,
              color: 'primary.main',
              opacity: 0.8,
            }}
          >
            Una pequeña guía para que disfrutes tu té.
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
            gap: { xs: 5, md: 3 },
          }}
        >
          <Box
            aria-hidden
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '32px',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              backgroundColor: 'primary.main',
              opacity: 0.2,
            }}
          />

          {brewSteps.map(({ number, title, description, Icon }) => (
            <Box
              key={number}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                alignItems: { xs: 'flex-start', md: 'flex-start' },
                gap: { xs: 3, md: 2 },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: { xs: 48, md: 'auto' },
                  height: { xs: 48, md: 64 },
                  backgroundColor: { xs: 'transparent', md: 'background.default' },
                  flexShrink: 0,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 400,
                    color: 'primary.main',
                    lineHeight: 1,
                    opacity: 0.35,
                  }}
                >
                  {number}
                </Typography>
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    backgroundColor: 'background.default',
                  }}
                >
                  <Icon size={20} strokeWidth={1.25} style={{ color: 'currentColor' }} />
                </Box>
              </Box>

              <Box>
                <Typography
                  component="h3"
                  sx={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: { xs: '1.25rem', md: '1.375rem' },
                    fontWeight: 400,
                    color: 'primary.main',
                    letterSpacing: '0.05em',
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
                    <Icon
                      size={18}
                      strokeWidth={1.25}
                      style={{ color: 'currentColor' }}
                    />
                  </Box>
                  {title}
                </Typography>

                <Typography
                  component="p"
                  sx={{
                    fontSize: '0.875rem',
                    lineHeight: 1.7,
                    color: 'primary.main',
                    opacity: 0.8,
                    maxWidth: { xs: 'none', md: '28ch' },
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}