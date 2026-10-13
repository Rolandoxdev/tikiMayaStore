import { Box, Button, Container, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { ArrowLeftRight, ArrowUpRight } from 'lucide-react'
import infusorCilindroImage from '../../assets/images/accessories/infusorCilindro.jpeg'
import teteraInfusorImage from '../../assets/images/accessories/teteraInfusor.webp'
import infusorBolaImage from '../../assets/images/accessories/InfusordeTeBola.webp'
import infusorGordoImage from '../../assets/images/accessories/infusorGordo.webp'

const INSTAGRAM_URL = 'https://instagram.com/tikimayastore'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594489862752'
const galleryImages = [
  { src: infusorCilindroImage, alt: 'Infusor cilíndrico de vidrio con té en preparación' },
  { src: teteraInfusorImage, alt: 'Tetera de vidrio con infusor metálico', objectPosition: 'right center' },
  { src: infusorBolaImage, alt: 'Infusor de té tipo bola dentro de una taza' },
  { src: infusorGordoImage, alt: 'Infusor de té de figura redondeada dentro de una taza' },
]

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
      <rect height="18" rx="5" stroke="currentColor" strokeWidth="1.6" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.2" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg aria-hidden="true" fill="currentColor" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.49-1.46H16.6V4.43c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.37v2.33H7.3v3h2.5V21h3.7z" />
    </svg>
  )
}

export function SocialSection() {
  return (
    <Box component="section" id="social" sx={{ py: { xs: 9, md: 15 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: { xs: 4, md: 6 } }}>
          <Typography component="p" sx={{ color: 'primary.main', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.62, mb: { xs: 4, md: 6 } }}>
            Fuera de la tienda
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 12 }, alignItems: 'center' }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: (theme) => theme.typography.h2.fontFamily,
                fontSize: { xs: '3.3rem', sm: '4rem', md: '5.6rem' },
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.065em',
                color: 'primary.main',
                maxWidth: '8ch',
              }}
            >
              Sigue descubriendo
              <Box component="span" sx={{ color: 'accent.dark' }}>.</Box>
            </Typography>

            <Box>
              <Typography component="p" sx={{ fontSize: { xs: '0.95rem', md: '1.02rem' }, lineHeight: 1.85, color: 'primary.main', opacity: 0.8, maxWidth: '48ch' }}>
                Nuevas mezclas, preparaciones, kits y novedades de TikiMaya Store. Acompáñanos mientras seguimos descubriendo qué viene después.
              </Typography>
            </Box>
          </Box>

          <Box
            role="list"
            aria-label="Galería visual de redes sociales"
            tabIndex={0}
            sx={{
              display: 'flex',
              width: '100%',
              maxWidth: '100%',
              minWidth: 0,
              gap: { xs: 2, md: 3 },
              mt: { xs: 5, md: 7 },
              pb: 1,
              overflowX: 'auto',
              overflowY: 'hidden',
              overscrollBehaviorX: 'contain',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'thin',
              '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.light', outlineOffset: 2 },
              '&::-webkit-scrollbar': { height: 4 },
              '&::-webkit-scrollbar-thumb': { backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.24), borderRadius: 4 },
              '&::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
            }}
          >
            {galleryImages.map((image, index) => (
              <Box
                key={index}
                role="listitem"
                sx={{
                  flex: { xs: '0 0 min(74vw, 286px)', sm: '0 0 min(38vw, 280px)', md: '0 0 min(24vw, 300px)' },
                  minWidth: 0,
                  aspectRatio: '4 / 5',
                  overflow: 'hidden',
                  borderRadius: { xs: 2, md: 3 },
                  scrollSnapAlign: 'start',
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: image.objectPosition ?? 'center' }}
                />
              </Box>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', xl: 'none' }, alignItems: 'center', gap: 1, mt: 1.5, color: 'primary.main', opacity: 0.58 }}>
            <Typography component="span" sx={{ fontSize: '0.66rem', letterSpacing: '0.08em' }}>
              Desliza para explorar
            </Typography>
            <ArrowLeftRight size={16} strokeWidth={1.5} />
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: { xs: 3, md: 5 } }}>
            <Button
              component="a"
              href={INSTAGRAM_URL}
              rel="noopener noreferrer"
              target="_blank"
              variant="contained"
              color="primary"
              startIcon={<InstagramIcon size={18} />}
              endIcon={<ArrowUpRight size={15} />}
            >
              Seguir en Instagram
            </Button>
            <Button
              component="a"
              href={FACEBOOK_URL}
              rel="noopener noreferrer"
              target="_blank"
              variant="text"
              color="primary"
              startIcon={<FacebookIcon size={18} />}
              endIcon={<ArrowUpRight size={15} />}
              sx={{ borderBottom: '1px solid', borderColor: (theme) => alpha(theme.palette.primary.main, 0.4), borderRadius: 0, px: 1.5 }}
            >
              Ver en Facebook
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
