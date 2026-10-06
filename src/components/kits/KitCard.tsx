import { Box, Typography } from '@mui/material'
import { Gift } from 'lucide-react'
import type { Kit } from '../../types/kit.ts'
import { WhatsAppCta } from '../../features/whatsapp/WhatsAppCta'

interface KitCardProps {
  kit: Kit
  whatsappHref?: string | null
}

export function KitCard({ kit, whatsappHref }: KitCardProps) {
  const showWhatsApp = whatsappHref && kit.available !== false

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
            top: '12%',
            right: '12%',
            width: '30%',
            height: '45%',
            backgroundColor: 'rgba(35, 75, 77, 0.1)',
            borderRadius: '40% 60% 50% 50%',
            transform: 'rotate(12deg)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '12%',
            left: '10%',
            width: '35%',
            height: '50%',
            backgroundColor: 'rgba(251, 191, 73, 0.2)',
            borderRadius: '50% 40% 60% 50%',
            transform: 'rotate(-15deg)',
          }}
        />
        <Gift
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
        {kit.type && (
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
            {kit.type}
          </Typography>
        )}

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
          {kit.name}
        </Typography>

        {kit.description && (
          <Typography
            component="p"
            sx={{
              color: 'primary.main',
              fontSize: '0.875rem',
              lineHeight: 1.7,
              mb: 3,
              opacity: 0.85,
            }}
          >
            {kit.description}
          </Typography>
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