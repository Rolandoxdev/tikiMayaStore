import { Box, Container, Typography } from '@mui/material'
import { kits } from '../../data/kits'
import { KitCard } from '../kits/KitCard'
import { createWhatsAppLink } from '../../utils/whatsapp'
import { whatsappConfig } from '../../features/whatsapp/config'

export function KitSection() {
  const whatsappHref = createWhatsAppLink({
    phoneNumber: whatsappConfig.phoneNumber,
    message: whatsappConfig.defaultMessage,
  })

  return (
    <Box
      component="section"
      id="kits"
      sx={{
        py: { xs: 9, md: 15 },
        backgroundColor: 'secondary.light',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 0.8fr' },
            alignItems: 'end',
            gap: { xs: 2, md: 8 },
            mb: { xs: 5, md: 8 },
          }}
        >
          <Box>
            <Typography component="p" sx={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.62, mb: 2 }}>
              Para compartir
            </Typography>
            <Typography component="h2" sx={{ fontFamily: (theme) => theme.typography.h2.fontFamily, fontSize: { xs: '2.7rem', md: '4rem' }, lineHeight: 1.02, letterSpacing: '-0.05em', color: 'primary.main' }}>
              Descubre nuestros kits
            </Typography>
          </Box>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: '0.9rem', md: '0.98rem' },
              lineHeight: 1.85,
              color: 'primary.main',
              opacity: 0.76,
              maxWidth: '48ch',
            }}
          >
            Una selección pensada para regalar, compartir o convertir la preparación del
            té en un pequeño ritual.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' }, columnGap: { md: 2 }, rowGap: 3 }}>
          {kits.map((kit, index) => (
            <KitCard key={kit.id} index={index} kit={kit} whatsappHref={whatsappHref} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
