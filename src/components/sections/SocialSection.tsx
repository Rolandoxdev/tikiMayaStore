import { Box, Button, Container, Typography } from '@mui/material'
import { ArrowUpRight } from 'lucide-react'

const INSTAGRAM_URL = 'https://instagram.com/tikimayastore'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594489862752'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
        width="18"
        x="3"
        y="3"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.2" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87.24-1.46 1.49-1.46H16.6V4.43c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.25 4.37v2.33H7.3v3h2.5V21h3.7z" />
    </svg>
  )
}

export function SocialSection() {
  return (
    <Box
      component="section"
      id="social"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              component="p"
              sx={{
                color: 'primary.main',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                mb: 2,
                opacity: 0.7,
              }}
            >
              Síguenos
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 400,
                color: 'primary.main',
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Sigue descubriendo
            </Typography>

            <Typography
              component="p"
              sx={{
                fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                lineHeight: 1.8,
                color: 'primary.main',
                opacity: 0.8,
                mb: 4,
                maxWidth: '52ch',
              }}
            >
              Nuevas mezclas, preparaciones, kits y novedades de TikiMaya Store.
              Acompáñanos mientras seguimos descubriendo qué viene después.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
              }}
            >
              <Button
                component="a"
                href={INSTAGRAM_URL}
                rel="noopener noreferrer"
                startIcon={<InstagramIcon size={18} />}
                target="_blank"
                variant="contained"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'secondary.main',
                  fontWeight: 400,
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.02em',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Seguir en Instagram
              </Button>

              <Button
                component="a"
                href={FACEBOOK_URL}
                rel="noopener noreferrer"
                startIcon={<FacebookIcon size={18} />}
                target="_blank"
                variant="outlined"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  fontWeight: 400,
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '0.9375rem',
                  letterSpacing: '0.02em',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(35, 75, 77, 0.04)',
                  },
                }}
              >
                Ver Facebook
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 280,
                aspectRatio: '1 / 1',
                backgroundColor: 'secondary.main',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: 'rgba(35, 75, 77, 0.12)',
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 12,
                  borderRadius: '50%',
                  border: '1px dashed',
                  borderColor: 'rgba(35, 75, 77, 0.15)',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    color: 'primary.main',
                    opacity: 0.7,
                  }}
                >
                  <InstagramIcon size={28} />
                  <FacebookIcon size={28} />
                </Box>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    color: 'primary.main',
                    opacity: 0.6,
                  }}
                >
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                  <Typography
                    component="span"
                    sx={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                    }}
                  >
                    @tikimayastore
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}