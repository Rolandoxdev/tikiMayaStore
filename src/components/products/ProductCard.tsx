import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Coffee, Leaf } from 'lucide-react'
import type { Product } from '../../types/product.ts'
import { WhatsAppCta } from '../../features/whatsapp/WhatsAppCta'

interface ProductCardProps {
  product: Product
  index: number
  whatsappHref: string | null
}

export function ProductCard({ product, index, whatsappHref }: ProductCardProps) {
  const reverse = index % 2 === 1
  const showWhatsApp = Boolean(whatsappHref) && product.available !== false

  return (
    <Box
      component="article"
      sx={{
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
      }}
    >
      <Box
        sx={{
          position: 'relative',
          aspectRatio: { xs: '1.25 / 1', md: '1.12 / 1' },
          overflow: 'hidden',
          backgroundColor: (theme) =>
            [
              theme.palette.secondary.light,
              alpha(theme.palette.primary.main, 0.09),
              alpha(theme.palette.accent.main, 0.22),
            ][index % 3],
          borderRadius: index % 2 === 0 ? '48% 48% 4px 4px' : '4px 48% 4px 48%',
        }}
      >
        {product.image || product.images?.[0] ? (
          <Box
            component="img"
            src={product.image ?? product.images?.[0]}
            alt={product.name}
            sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <>
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                width: '68%',
                aspectRatio: '1',
                top: '10%',
                left: '16%',
                border: '1px solid',
                borderColor: (theme) => alpha(theme.palette.primary.main, 0.32),
                borderRadius: '50%',
              }}
            />
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                width: '51%',
                aspectRatio: '1',
                top: '19%',
                left: '24%',
                border: '1px solid',
                borderColor: (theme) => alpha(theme.palette.primary.main, 0.22),
                borderRadius: '50%',
                transform: `rotate(${index * 18}deg) scaleX(${index % 2 ? 0.7 : 1})`,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'grid',
                placeItems: 'center',
                color: 'primary.main',
              }}
            >
              <Coffee size={70} strokeWidth={0.8} />
              <Leaf
                size={34}
                strokeWidth={1}
                style={{ position: 'absolute', transform: 'translate(38px, -42px) rotate(24deg)' }}
              />
            </Box>
            <Typography
              component="span"
              sx={{
                position: 'absolute',
                right: 18,
                bottom: 16,
                color: 'primary.main',
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                opacity: 0.7,
              }}
            >
              Mezcla {String(index + 1).padStart(2, '0')}
            </Typography>
          </>
        )}
      </Box>

      <Box sx={{ py: { md: 2 }, direction: 'ltr' }}>
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
            fontSize: { xs: '2.35rem', md: '3.4rem' },
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

        {product.description && (
          <Typography component="p" sx={{ fontSize: '0.94rem', lineHeight: 1.85, color: 'text.primary', maxWidth: '50ch' }}>
            {product.description}
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

        {showWhatsApp && <Box sx={{ mt: 3 }}><WhatsAppCta href={whatsappHref} /></Box>}
      </Box>
    </Box>
  )
}
