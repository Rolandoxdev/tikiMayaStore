import { Box, Container, Typography } from '@mui/material'
import { MessageCircle, MousePointerClick, Package } from 'lucide-react'
import { createWhatsAppLink } from '../../utils/whatsapp'
import { WhatsAppCta } from '../../features/whatsapp/WhatsAppCta'
import { whatsappConfig } from '../../features/whatsapp/config'

const howToBuySteps = [
  {
    number: '01',
    title: 'ELIGE',
    description: 'Selecciona la mezcla o kit que quieres descubrir.',
    Icon: MousePointerClick,
  },
  {
    number: '02',
    title: 'ESCRÍBENOS',
    description: 'Contáctanos por WhatsApp para consultar disponibilidad y realizar tu pedido.',
    Icon: MessageCircle,
  },
  {
    number: '03',
    title: 'RECIBE',
    description: 'Coordinamos contigo la entrega o el envío.',
    Icon: Package,
  },
]

export function HowToBuySection() {
  const whatsappHref = createWhatsAppLink({
    phoneNumber: whatsappConfig.phoneNumber,
    message: whatsappConfig.defaultMessage,
  })

  return (
    <Box
      component="section"
      id="how-to-buy"
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
            Así de sencillo
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 5, md: 4 },
            mb: { xs: 6, md: 8 },
          }}
        >
          <Box
            aria-hidden
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '32px',
              left: '16.66%',
              right: '16.66%',
              height: '1px',
              backgroundColor: 'primary.main',
              opacity: 0.2,
            }}
          />

          {howToBuySteps.map(({ number, title, description, Icon }) => (
            <Box
              key={number}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' },
                alignItems: 'flex-start',
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
                    <Icon size={18} strokeWidth={1.25} style={{ color: 'currentColor' }} />
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
                    maxWidth: { xs: 'none', md: '30ch' },
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <WhatsAppCta href={whatsappHref} label="Consultar por WhatsApp" />
      </Container>
    </Box>
  )
}