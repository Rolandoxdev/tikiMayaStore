import { Box, Typography } from '@mui/material'
import { Coffee } from 'lucide-react'
import type { Product } from '../../types/product.ts'
import { WhatsAppCta } from '../../features/whatsapp/WhatsAppCta'

interface ProductCardProps {
  product: Product
  whatsappHref?: string | null
}

export function ProductCard({ product, whatsappHref }: ProductCardProps) {
  const showWhatsApp = whatsappHref && product.available !== false

  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: { xs: 200, md: 240 },
          backgroundColor: 'primary.main',
          opacity: 0.08,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: '35%',
            height: '50%',
            backgroundColor: 'rgba(35, 75, 77, 0.1)',
            borderRadius: '50% 40% 60% 50%',
            transform: 'rotate(-20deg)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            right: '15%',
            width: '30%',
            height: '45%',
            backgroundColor: 'rgba(251, 191, 73, 0.2)',
            borderRadius: '60% 40% 50% 60%',
            transform: 'rotate(15deg)',
          }}
        />
        <Coffee
          size={48}
          strokeWidth={1}
          style={{
            color: 'rgba(35, 75, 77, 0.25)',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </Box>

      <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography
          component="p"
          sx={{
            color: 'primary.main',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            mb: 1,
            opacity: 0.7,
          }}
        >
          {product.type}
        </Typography>

        <Typography
          component="h3"
          sx={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: { xs: '1.375rem', md: '1.5rem' },
            fontWeight: 400,
            color: 'primary.main',
            mb: 1.5,
            lineHeight: 1.25,
          }}
        >
          {product.name}
        </Typography>

        {product.profile && (
          <Typography
            component="p"
            sx={{
              color: 'primary.main',
              fontSize: '0.8125rem',
              fontWeight: 400,
              letterSpacing: '0.04em',
              mb: 2,
              opacity: 0.75,
            }}
          >
            {product.profile}
          </Typography>
        )}

        {product.description && (
          <Typography
            component="p"
            sx={{
              color: 'primary.main',
              fontSize: '0.875rem',
              lineHeight: 1.7,
              mb: 2,
              opacity: 0.85,
            }}
          >
            {product.description}
          </Typography>
        )}

        {product.caracter && (
          <Typography
            component="p"
            sx={{
              color: 'primary.main',
              fontSize: '0.8125rem',
              lineHeight: 1.7,
              mb: 2,
              fontStyle: 'italic',
              opacity: 0.8,
            }}
          >
            {product.caracter}
          </Typography>
        )}

        {product.ingredients && product.ingredients.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography
              component="p"
              sx={{
                color: 'primary.main',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 0.75,
                opacity: 0.6,
              }}
            >
              Ingredientes
            </Typography>
            <Typography
              component="p"
              sx={{
                color: 'primary.main',
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                opacity: 0.75,
              }}
            >
              {product.ingredients.join(' · ')}
            </Typography>
          </Box>
        )}

        <Box sx={{ mt: 'auto', pt: 2 }}>
          {showWhatsApp ? (
            <WhatsAppCta href={whatsappHref!} label="Consultar por WhatsApp" />
          ) : (
            <Typography
              component="p"
              sx={{
                color: 'primary.main',
                fontSize: '0.8125rem',
                fontStyle: 'italic',
                opacity: 0.5,
              }}
            >
              Próximamente disponible
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}
