import { Box, Container, Typography } from '@mui/material'
import { createWhatsAppLink } from '../../utils/whatsapp'
import { WhatsAppCta } from '../../features/whatsapp/WhatsAppCta'
import { whatsappConfig } from '../../features/whatsapp/config'

export function FinalCtaSection() {
  const whatsappHref = createWhatsAppLink({
    phoneNumber: whatsappConfig.phoneNumber,
    message: whatsappConfig.defaultMessage,
  })

  return (
    <Box
      component="section"
      id="final-cta"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: 'primary.main',
        color: 'secondary.main',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '40%',
          height: '70%',
          backgroundColor: 'rgba(251, 191, 73, 0.08)',
          borderRadius: '50% 40% 60% 50%',
          transform: 'rotate(-15deg)',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: '-15%',
          right: '-8%',
          width: '45%',
          height: '80%',
          backgroundColor: 'rgba(251, 191, 73, 0.05)',
          borderRadius: '60% 40% 50% 60%',
          transform: 'rotate(20deg)',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              mb: 3,
              opacity: 0.6,
              color: 'accent.main',
            }}
          >
            TikiMaya Store
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
              fontWeight: 400,
              lineHeight: 1.15,
              color: 'secondary.main',
              mb: 3,
              maxWidth: '16ch',
            }}
          >
            Hay algo por descubrir.
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: { xs: '0.9375rem', md: '1.0625rem' },
              lineHeight: 1.8,
              color: 'secondary.main',
              opacity: 0.85,
              mb: 5,
              maxWidth: '52ch',
            }}
          >
            Descubre nuevas mezclas, prepara tu taza a tu manera y encuentra tu próximo
            favorito.
          </Typography>

          <WhatsAppCta href={whatsappHref} label="Consultar por WhatsApp" />
        </Box>
      </Container>
    </Box>
  )
}