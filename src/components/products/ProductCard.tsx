import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import type { Product } from '../../types/product.ts'
import { WhatsAppCta } from '../../features/whatsapp/WhatsAppCta'
import atardecerImage from '../../assets/images/infusionAtardecerCarmesi.png'
import brumaImage from '../../assets/images/infusionBrumaDelAltiplano.png'
import cacaoImage from '../../assets/images/infusionCacaoEspeciado.png'

const productPhotos: Record<string, { src: string; objectPosition: string }> = {
  'atardecer-carmesi': { src: atardecerImage, objectPosition: 'center 20%' },
  'bruma-del-altiplano': { src: brumaImage, objectPosition: 'center 40%' },
  'cacao-especiado': { src: cacaoImage, objectPosition: 'center 20%' },
}

interface ProductCardProps {
  product: Product
  index: number
  whatsappHref: string | null
  variant?: 'editorial' | 'grid'
}

export function ProductCard({ product, index, whatsappHref, variant = 'editorial' }: ProductCardProps) {
  const reverse = index % 2 === 1
  const isGrid = variant === 'grid'
  const showWhatsApp = Boolean(whatsappHref) && product.available !== false
  const photo = productPhotos[product.slug]
  const imageSrc = product.image || product.images?.[0] || photo?.src

  return (
    <Box
      component="article"
      sx={{
        ...(isGrid
          ? {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              p: { xs: 2.5, md: 3.5 },
              borderColor: 'primary.main',
              transition: 'background-color 220ms ease, transform 220ms ease',
              '&:hover': {
                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.04),
                transform: { md: 'translateY(-4px)' },
              },
            }
          : {
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
              direction: { md: reverse ? 'rtl' : 'ltr' },
              alignItems: 'center',
              gap: { xs: 3, md: 9 },
              py: { xs: 4, md: 7 },
              '&:last-of-type': { borderBottom: 0 },
              '& > *': { direction: 'ltr' },
            }),
        borderColor: isGrid ? 'primary.main' : 'divider',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          aspectRatio: isGrid ? '5 / 4' : { xs: '1.25 / 1', md: '1.12 / 1' },
          overflow: 'hidden',
          backgroundColor: (theme) =>
            [
              theme.palette.secondary.light,
              alpha(theme.palette.primary.main, 0.09),
              alpha(theme.palette.accent.main, 0.22),
            ][index % 3],
          borderRadius: isGrid ? 3 : index % 2 === 0 ? '48% 48% 4px 4px' : '4px 48% 4px 48%',
        }}
      >
        {imageSrc && (
          <Box
            component="img"
            src={imageSrc}
            alt={product.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: photo?.objectPosition ?? 'center center',
            }}
          />
        )}
      </Box>

      <Box
        sx={
          isGrid
            ? { display: 'flex', flexDirection: 'column', flexGrow: 1, minWidth: 0, pt: 3 }
            : { py: { md: 2 }, direction: 'ltr' }
        }
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 2,
            color: 'primary.main',
          }}
        >
          <Typography component="span" sx={{ fontSize: '0.65rem', letterSpacing: '0.18em', opacity: 0.55 }}>
            {String(index + 1).padStart(2, '0')}
          </Typography>
          <Box sx={{ width: 28, height: 1, backgroundColor: 'accent.dark' }} />
          <Typography
            component="p"
            sx={{ fontSize: '0.65rem', letterSpacing: '0.13em', textTransform: 'uppercase', opacity: 0.72 }}
          >
            {product.type}
          </Typography>
        </Box>

        <Typography
          component="h3"
          sx={{
            fontFamily: (theme) => theme.typography.h2.fontFamily,
            fontSize: isGrid ? { xs: '2rem', md: '2.25rem' } : { xs: '2.35rem', md: '3.4rem' },
            letterSpacing: '-0.05em',
            lineHeight: 1.04,
            color: 'primary.main',
            mb: 2,
          }}
        >
          {product.name}
        </Typography>

        {product.profile && (
          <Typography
            component="p"
            sx={{
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              lineHeight: 1.6,
              textTransform: 'uppercase',
              color: 'primary.light',
              mb: 2.5,
            }}
          >
            {product.profile}
          </Typography>
        )}

        {product.caracter && (
          <Typography
            component="p"
            sx={{
              fontFamily: (theme) => theme.typography.h5.fontFamily,
              fontSize: '1.12rem',
              lineHeight: 1.65,
              fontStyle: 'italic',
              color: 'primary.main',
              mt: 2,
              maxWidth: '48ch',
            }}
          >
            {product.caracter}
          </Typography>
        )}

        {product.ingredients && product.ingredients.length > 0 && (
          <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid', borderColor: 'divider', maxWidth: '48ch' }}>
            <Typography component="span" sx={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', opacity: 0.58 }}>
              Ingredientes
            </Typography>
            <Typography component="p" sx={{ fontSize: '0.78rem', lineHeight: 1.7, mt: 0.75, opacity: 0.78 }}>
              {product.ingredients.join(' · ')}
            </Typography>
          </Box>
        )}

        {product.price !== undefined && (
          <Typography component="p" sx={{ fontSize: '1rem', mt: 2 }}>
            {product.currency
              ? new Intl.NumberFormat('es-GT', { style: 'currency', currency: product.currency }).format(product.price)
              : product.price}
          </Typography>
        )}

        {product.available !== undefined && (
          <Typography component="p" sx={{ fontSize: '0.78rem', mt: 1, opacity: 0.7 }}>
            {product.available ? 'Disponible' : 'No disponible'}
          </Typography>
        )}

        {showWhatsApp && <Box sx={{ mt: isGrid ? 'auto' : 3, pt: isGrid ? 3 : 0 }}><WhatsAppCta href={whatsappHref} /></Box>}
      </Box>
    </Box>
  )
}
