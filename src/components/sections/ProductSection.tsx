import { Box, Container, Grid, Typography } from '@mui/material'
import { products } from '../../data/products'
import { ProductCard } from '../products/ProductCard'

export function ProductSection() {
  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 400,
              color: 'primary.main',
              mb: 2.5,
              lineHeight: 1.2,
            }}
          >
            Descubre nuestras mezclas
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: { xs: '0.9375rem', md: '1.0625rem' },
              lineHeight: 1.8,
              color: 'primary.main',
              opacity: 0.8,
              maxWidth: '55ch',
            }}
          >
            Tres mezclas, tres formas de descubrir el té. Desde una infusión frutal de
            intenso color rubí hasta una mezcla herbal fresca y un té negro donde el
            cacao toma el protagonismo.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {products.map((product) => (
            <Grid key={product.id} size={{ xs: 12, md: 4 }}>
              <ProductCard product={product} whatsappHref={null} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
