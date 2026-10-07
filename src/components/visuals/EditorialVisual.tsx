import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Leaf } from 'lucide-react'

interface EditorialVisualProps {
  height?: { xs: number; md: number }
  variant?: 'hero' | 'intro'
}

export function EditorialVisual({
  height = { xs: 320, md: 480 },
  variant = 'hero',
}: EditorialVisualProps) {
  const isHero = variant === 'hero'

  return (
    <Box
      aria-label="Composición abstracta de hojas y formas inspirada en el ritual del té"
      role="img"
      sx={{
        width: '100%',
        height,
        minHeight: { xs: 280, md: 420 },
        position: 'relative',
        overflow: 'hidden',
        isolation: 'isolate',
        backgroundColor: isHero ? 'primary.main' : 'secondary.main',
        borderRadius: { xs: 40, md: 80 },
        clipPath: isHero
          ? { xs: 'inset(0 round 40px)', md: 'inset(0 round 120px 16px 120px 16px)' }
          : 'inset(0 round 50% 50% 12px 12px)',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: { xs: '78%', md: '82%' },
          aspectRatio: '1',
          top: isHero ? '8%' : '5%',
          left: isHero ? '19%' : '10%',
          borderRadius: '50%',
          border: '1px solid',
          borderColor: (theme) => alpha(theme.palette.secondary.main, isHero ? 0.24 : 0.34),
          transform: 'rotate(-24deg)',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: { xs: '68%', md: '72%' },
          aspectRatio: '1',
          top: isHero ? '15%' : '12%',
          left: isHero ? '25%' : '16%',
          borderRadius: '50%',
          border: '1px solid',
          borderColor: (theme) => alpha(theme.palette.accent.main, 0.72),
          transform: 'rotate(18deg)',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: { xs: 180, md: 270 },
          height: { xs: 230, md: 340 },
          left: { xs: '-10%', md: '-4%' },
          bottom: { xs: '-18%', md: '-20%' },
          borderRadius: '50%',
          backgroundColor: 'accent.main',
          opacity: 0.95,
          transform: 'rotate(38deg)',
          zIndex: -1,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: { xs: 210, md: 310 },
          height: { xs: 280, md: 410 },
          right: { xs: '-16%', md: '-10%' },
          top: { xs: '-20%', md: '-25%' },
          borderRadius: '50%',
          backgroundColor: isHero ? 'secondary.main' : 'primary.main',
          opacity: isHero ? 0.13 : 0.08,
          transform: 'rotate(-32deg)',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '36%', md: '38%' },
          top: { xs: '27%', md: '24%' },
          color: isHero ? 'secondary.main' : 'primary.main',
          transform: 'rotate(-28deg)',
          opacity: isHero ? 0.88 : 0.76,
        }}
      >
        <Leaf size={128} strokeWidth={0.7} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 24, md: 36 },
          bottom: { xs: 24, md: 36 },
          color: isHero ? 'secondary.main' : 'primary.main',
        }}
      >
        <Typography
          component="p"
          sx={{
            fontSize: '0.62rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            opacity: 0.8,
          }}
        >
          Tés · infusiones
        </Typography>
        <Typography
          component="p"
          sx={{
            fontFamily: (theme) => theme.typography.h3.fontFamily,
            fontSize: { xs: '1.5rem', md: '2rem' },
            lineHeight: 1,
            mt: 0.75,
          }}
        >
          pequeños rituales
        </Typography>
      </Box>
      <Typography
        component="span"
        sx={{
          position: 'absolute',
          right: { xs: 20, md: 32 },
          top: { xs: 20, md: 32 },
          fontSize: '0.62rem',
          letterSpacing: '0.18em',
          color: isHero ? 'secondary.main' : 'primary.main',
          writingMode: 'vertical-rl',
          opacity: 0.7,
        }}
      >
        TIKIMAYA STORE
      </Typography>
    </Box>
  )
}
