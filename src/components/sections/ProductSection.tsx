import { Box, Container, Typography } from '@mui/material'
import { products } from '../../data/products'
import { ProductCard } from '../products/ProductCard'
import { createWhatsAppLink } from '../../utils/whatsapp'
import { whatsappConfig } from '../../features/whatsapp/config'

export function ProductSection() {
  const whatsappHref = createWhatsAppLink({
    phoneNumber: whatsappConfig.phoneNumber,
    message: whatsappConfig.defaultMessage,
  })

  return (
    <Box
      component="section"
      id="products"
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
            <Typography
              component="p"
              sx={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.62, mb: 2 }}
            >
              La colección · 01—03
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: (theme) => theme.typography.h2.fontFamily,
                fontSize: { xs: '2.7rem', md: '4rem' },
                fontWeight: 400,
                color: 'primary.main',
                mb: 0,
                lineHeight: 1.02,
                letterSpacing: '-0.05em',
              }}
            >
              Nuestras infusiones
            </Typography>
          </Box>

          <Typography
            component="p"
            sx={{
              fontSize: { xs: '0.9rem', md: '0.98rem' },
              lineHeight: 1.85,
              color: 'primary.main',
              opacity: 0.76,
              maxWidth: '56ch',
              pb: { md: 0.5 },
            }}
          >
            Tres mezclas, tres formas de descubrir el té. Desde una infusión frutal de
            intenso color rubí hasta una mezcla herbal fresca y un té negro donde el
            cacao toma el protagonismo.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' }, columnGap: { md: 2 }, rowGap: 3 }}>
          {products.map((product, index) => (
            <ProductCard key={product.id} index={index} product={product} whatsappHref={whatsappHref} variant="grid" />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
