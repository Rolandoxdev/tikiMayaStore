import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Gift, Sparkles } from 'lucide-react'
import type { Kit } from '../../types/kit.ts'
import { WhatsAppCta } from '../../features/whatsapp/WhatsAppCta'

interface KitCardProps {
  kit: Kit
  index: number
  whatsappHref: string | null
  variant?: 'tile' | 'editorial'
}

export function KitCard({ kit, index, whatsappHref, variant = 'tile' }: KitCardProps) {
  const isEditorial = variant === 'editorial'
  const reverse = index % 2 === 1
  const showWhatsApp = Boolean(whatsappHref) && kit.available !== false

  return (
    <Box
      component="article"
      sx={{
        ...(isEditorial
          ? {
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
              direction: { md: reverse ? 'rtl' : 'ltr' },
              alignItems: 'center',
              gap: { xs: 3, md: 9 },
              py: { xs: 4, md: 7 },
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:last-of-type': { borderBottom: 0 },
              '& > *': { direction: 'ltr' },
            }
          : {
              minHeight: { md: 420 },
              display: 'flex',
              flexDirection: 'column',
              p: { xs: 2.5, md: 3.5 },
              borderTop: '1px solid',
              borderColor: 'primary.main',
              transition: 'background-color 220ms ease, transform 220ms ease',
              '&:hover': {
                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.04),
                transform: { md: 'translateY(-4px)' },
              },
            }),
      }}
    >
      <Box
        sx={{
          position: 'relative',
          ...(isEditorial
            ? {
                aspectRatio: { xs: '1.25 / 1', md: '1.12 / 1' },
                overflow: 'hidden',
                backgroundColor: index % 2 === 0 ? 'secondary.light' : 'secondary.dark',
                borderRadius: index % 2 === 0 ? '48% 48% 4px 4px' : '4px 48% 4px 48%',
              }
            : {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: { xs: 136, md: 164 },
                mb: { xs: 3, md: 4 },
                overflow: 'hidden',
                backgroundColor: index % 2 === 0 ? 'secondary.light' : 'secondary.dark',
                borderRadius: index === 1 ? '50% 50% 4px 4px' : '4px',
              }),
        }}
      >
        {kit.image || kit.images?.[0] ? (
          <Box
            component="img"
            src={kit.image ?? kit.images?.[0]}
            alt={kit.name}
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <>
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                width: 124,
                height: 124,
                right: -22,
                top: -36,
                border: '1px solid',
                borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                borderRadius: '50%',
              }}
            />
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                width: 88,
                height: 88,
                right: -4,
                top: -18,
                border: '1px solid',
                borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                borderRadius: '50%',
              }}
            />
            <Typography
              component="span"
              sx={{
                position: 'relative',
                zIndex: 1,
                pl: { xs: 2.5, md: 3 },
                color: 'primary.main',
                fontFamily: (theme) => theme.typography.h2.fontFamily,
                fontSize: { xs: '4.5rem', md: '5.5rem' },
                lineHeight: 1,
                opacity: 0.22,
                letterSpacing: '-0.07em',
              }}
            >
              0{index + 1}
            </Typography>
            <Box sx={{ position: 'relative', zIndex: 1, mr: { xs: 3, md: 4 }, color: 'primary.main' }}>
              {index === 2 ? <Sparkles size={44} strokeWidth={0.8} /> : <Gift size={44} strokeWidth={0.8} />}
            </Box>
          </>
        )}
      </Box>

      <Box
        sx={
          isEditorial
            ? { display: 'flex', flexDirection: 'column', py: { md: 2 }, direction: 'ltr' }
            : { display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: 0 }
        }
      >
        <Typography
          component="p"
          sx={{
            color: 'primary.main',
            fontSize: '0.62rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            opacity: 0.62,
            mb: 1.5,
          }}
        >
          {kit.type}
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontFamily: (theme) => isEditorial ? theme.typography.h2.fontFamily : theme.typography.h3.fontFamily,
            fontSize: isEditorial ? { xs: '2.35rem', md: '3.4rem' } : { xs: '2rem', md: '2.4rem' },
            fontWeight: 400,
            color: 'primary.main',
            lineHeight: isEditorial ? 1.04 : 1.05,
            letterSpacing: isEditorial ? '-0.05em' : '-0.045em',
            mb: 2,
          }}
        >
          {kit.name}
        </Typography>
        {kit.description && (
          <Typography component="p" sx={{ color: 'text.primary', fontSize: '0.86rem', lineHeight: 1.8, opacity: 0.8, mb: 3 }}>
            {kit.description}
          </Typography>
        )}

        {kit.price !== undefined && (
          <Typography component="p" sx={{ fontSize: '0.95rem', mb: 2 }}>
            {kit.currency
              ? new Intl.NumberFormat('es-GT', { style: 'currency', currency: kit.currency }).format(kit.price)
              : kit.price}
          </Typography>
        )}
        {kit.available !== undefined && (
          <Typography component="p" sx={{ fontSize: '0.75rem', opacity: 0.7, mb: 2 }}>
            {kit.available ? 'Disponible' : 'No disponible'}
          </Typography>
        )}

        <Box sx={{ mt: 'auto', pt: 2 }}>
          {showWhatsApp && <WhatsAppCta href={whatsappHref} />}
        </Box>
      </Box>
    </Box>
  )
}
