import { Box, Container, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
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
    <Box component="section" id="how-to-buy" sx={{ py: { xs: 9, md: 15 }, backgroundColor: 'secondary.light' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.7fr 1.3fr' }, gap: { xs: 5, md: 12 }, alignItems: 'start' }}>
          <Box sx={{ position: { md: 'sticky' }, top: { md: 130 } }}>
            <Typography component="p" sx={{ color: 'primary.main', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.62, mb: 2 }}>
              Tu pedido, paso a paso
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: (theme) => theme.typography.h2.fontFamily,
                fontSize: { xs: '3rem', md: '4.5rem' },
                fontWeight: 400,
                letterSpacing: '-0.055em',
                lineHeight: 0.98,
                color: 'primary.main',
                maxWidth: '8ch',
                mb: 4,
              }}
            >
              Así de sencillo
              <Box component="span" sx={{ color: 'accent.dark' }}>.</Box>
            </Typography>
            <WhatsAppCta
              href={whatsappHref}
              sx={{
                backgroundColor: 'primary.main',
                color: 'secondary.main',
                '&:hover': { backgroundColor: 'primary.dark' },
              }}
            />
          </Box>

          <Box>
            {howToBuySteps.map(({ number, title, description, Icon }) => (
              <Box
                component="article"
                key={number}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '52px 1fr', sm: '72px 1fr 36px' },
                  gap: { xs: 2, sm: 3 },
                  alignItems: 'start',
                  py: { xs: 3, md: 4 },
                  borderTop: '1px solid',
                  borderColor: 'divider',
                  '&:last-child': { borderBottom: '1px solid', borderColor: 'divider' },
                }}
              >
                <Typography component="span" sx={{ fontFamily: (theme) => theme.typography.h3.fontFamily, fontSize: { xs: '1.8rem', md: '2.3rem' }, lineHeight: 1, color: 'primary.light' }}>
                  {number}
                </Typography>
                <Box>
                  <Typography component="h3" sx={{ fontSize: '0.72rem', letterSpacing: '0.16em', fontWeight: 500, mb: 1.2 }}>
                    {title}
                  </Typography>
                  <Typography component="p" sx={{ fontSize: { xs: '0.9rem', md: '0.97rem' }, lineHeight: 1.8, maxWidth: '54ch', opacity: 0.8 }}>
                    {description}
                  </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center', color: (theme) => alpha(theme.palette.primary.main, 0.7), pt: 0.25 }}>
                  <Icon size={20} strokeWidth={1.2} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
