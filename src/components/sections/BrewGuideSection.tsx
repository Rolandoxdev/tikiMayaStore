import { Box, Container, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Coffee, Leaf, Thermometer, Timer } from 'lucide-react'

const brewSteps = [
  {
    number: '01',
    title: 'MIDE',
    description: 'Usa la cantidad recomendada para tu mezcla.',
    Icon: Leaf,
  },
  {
    number: '02',
    title: 'PREPARA',
    description: 'Agrega agua caliente a la temperatura indicada.',
    Icon: Thermometer,
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
    Icon: Coffee,
  },
]

export function BrewGuideSection() {
  return (
    <Box component="section" id="brew-guide" sx={{ py: { xs: 8, md: 13 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: 'primary.main',
            color: 'secondary.main',
            px: { xs: 3, sm: 5, md: 8 },
            py: { xs: 5, md: 8 },
            borderRadius: { xs: 2, md: 3 },
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              mb: { xs: 5, md: 8 },
            }}
          >
            <Box>
              <Typography component="p" sx={{ color: 'accent.main', fontSize: '0.64rem', letterSpacing: '0.19em', textTransform: 'uppercase', mb: 2 }}>
                El ritual del té
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontFamily: (theme) => theme.typography.h2.fontFamily,
                  fontSize: { xs: '2.65rem', md: '4.15rem' },
                  letterSpacing: '-0.055em',
                  lineHeight: 0.98,
                  fontWeight: 400,
                }}
              >
                Conoce, prepara, disfruta.
              </Typography>
              <Typography
                component="p"
                sx={{ fontSize: { xs: '0.9rem', md: '0.98rem' }, lineHeight: 1.85, opacity: 0.78, maxWidth: '38ch', mt: { xs: 2, md: 2.5 }, pb: 0.5 }}
              >
                Una pequeña guía para que disfrutes tu té.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }, columnGap: { sm: 4, lg: 5 }, rowGap: { xs: 0, sm: 4 } }}>
            {brewSteps.map(({ number, title, description, Icon }) => (
              <Box
                component="article"
                key={number}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '44px 1fr', sm: '1fr' },
                  columnGap: 2,
                  py: { xs: 2.5, sm: 0 },
                  borderTop: { xs: '1px solid', sm: 0 },
                  borderColor: (theme) => alpha(theme.palette.secondary.main, 0.2),
                }}
              >
                <Box sx={{ gridRow: { xs: 'span 2', sm: 'auto' }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', mb: { sm: 3 }, color: 'accent.main' }}>
                  <Typography component="span" sx={{ fontFamily: (theme) => theme.typography.h3.fontFamily, color: 'secondary.main', opacity: 0.55, fontSize: { xs: '1.8rem', sm: '2.7rem' }, lineHeight: 1 }}>
                    {number}
                  </Typography>
                  <Icon size={26} strokeWidth={1.25} />
                </Box>
                <Box>
                  <Typography component="h3" sx={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', mb: 1.2 }}>
                    {title}
                  </Typography>
                  <Typography component="p" sx={{ fontSize: '0.83rem', lineHeight: 1.75, opacity: 0.78 }}>
                    {description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
