import { Box, Container, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { createWhatsAppLink } from '../../utils/whatsapp'
import { WhatsAppCta } from '../../features/whatsapp/WhatsAppCta'
import { whatsappConfig } from '../../features/whatsapp/config'

export function FinalCtaSection() {
  const whatsappHref = createWhatsAppLink({
    phoneNumber: whatsappConfig.phoneNumber,
    message: whatsappConfig.defaultMessage,
  })

  return (
    <Box component="section" id="final-cta" sx={{ py: { xs: 5, md: 8 }, backgroundColor: 'secondary.light' }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            overflow: 'hidden',
            backgroundColor: 'primary.main',
            color: 'secondary.main',
            px: { xs: 3, sm: 5, md: 9 },
            py: { xs: 6, md: 9 },
            borderRadius: { xs: 2, md: 3 },
          }}
        >
          <Box aria-hidden sx={{ position: 'absolute', width: { xs: 220, md: 360 }, aspectRatio: '1', borderRadius: '50%', border: '1px solid', borderColor: (theme) => alpha(theme.palette.accent.main, 0.2), right: { xs: -120, md: '24%' }, top: { xs: -100, md: -185 } }} />
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography component="p" sx={{ color: 'accent.main', fontSize: '0.64rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', mb: 2.5 }}>
              TikiMaya Store
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: (theme) => theme.typography.h2.fontFamily,
                fontSize: { xs: '3.2rem', sm: '4.2rem', md: '5.6rem' },
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.065em',
                color: 'secondary.main',
                maxWidth: '10ch',
                mb: 3,
              }}
            >
              Hay algo por descubrir.
            </Typography>
            <Typography component="p" sx={{ fontSize: { xs: '0.94rem', md: '1rem' }, lineHeight: 1.85, color: 'secondary.main', opacity: 0.8, maxWidth: '53ch' }}>
              Descubre nuevas mezclas, prepara tu taza a tu manera y encuentra tu próximo favorito.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
            <WhatsAppCta
              href={whatsappHref}
              sx={{
                backgroundColor: 'accent.main',
                color: 'primary.main',
                whiteSpace: 'nowrap',
                '&:hover': { backgroundColor: 'accent.dark' },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
