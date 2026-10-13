import { Box, Container, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'

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
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.87-.24-1.46-1.49-1.46H16.6V4.43c-.3-.04-1.34-.13-2.55-.13-2.52 0-4.25 1.54-4.26 4.37v2.33H7.3v3h2.5V21h3.7z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'secondary.main',
        py: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: { xs: 2.5, md: 4 },
            mb: { xs: 2.5, md: 3.5 },
          }}
        >
          <Box>
            <Typography
              component="p"
              sx={{
                fontFamily: (theme) => theme.typography.h4.fontFamily,
                fontSize: { xs: '1.45rem', md: '1.7rem' },
                fontWeight: 400,
                color: 'secondary.main',
                mb: 0.5,
                letterSpacing: '0.02em',
              }}
            >
              TikiMaya Store
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: '0.9375rem',
                color: 'secondary.main',
                fontStyle: 'italic',
              }}
            >
              Hay algo por descubrir.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: 'secondary.main',
              '& a': {
                color: 'inherit',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 48,
                minHeight: 48,
                borderRadius: 1,
                transition: 'color 0.2s ease, transform 0.2s ease',
                '&:hover': {
                  color: 'accent.main',
                  transform: 'translateY(-2px)',
                },
                '&:focus-visible': {
                  outline: '2px solid',
                  outlineColor: 'accent.main',
                  outlineOffset: 3,
                },
              },
            }}
          >
            <a
              aria-label="TikiMaya Store en Instagram"
              href={INSTAGRAM_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              aria-label="TikiMaya Store en Facebook"
              href={FACEBOOK_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookIcon size={20} />
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: '1px solid',
            borderColor: (theme) => alpha(theme.palette.secondary.main, 0.3),
            pt: 2.5,
          }}
        >
          <Typography
            component="p"
            sx={{
              fontSize: '0.875rem',
              lineHeight: 1.7,
              color: 'secondary.main',
              fontWeight: 400,
              textAlign: { xs: 'left', md: 'center' },
            }}
          >
            © 2026 TikiMaya Store. Todos los derechos reservados.
            <Box component="span" aria-hidden="true" sx={{ px: 0.75, color: (theme) => alpha(theme.palette.secondary.main, 0.65) }}>
              ·
            </Box>
            Landing desarrollada por{' '}
            <Box
              component="a"
              href="https://bytecodelatam.com/"
              rel="noopener noreferrer"
              target="_blank"
              sx={{
                color: 'accent.main',
                fontWeight: 500,
                textDecoration: 'underline',
                textUnderlineOffset: '0.2em',
                '&:hover': { color: 'secondary.main', textDecorationThickness: '2px' },
                '&:focus-visible': { outline: '2px solid', outlineColor: 'accent.main', outlineOffset: 3, borderRadius: 1 },
              }}
            >
              byteCode
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
