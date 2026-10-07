import { Button } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { MessageCircle } from 'lucide-react'

interface WhatsAppCtaProps {
  href: string | null
  label?: string
  sx?: SxProps<Theme>
}

export function WhatsAppCta({ href, label = 'Consultar por WhatsApp', sx }: WhatsAppCtaProps) {
  if (!href) {
    return null
  }

  return (
    <Button
      component="a"
      href={href}
      rel="noopener noreferrer"
      startIcon={<MessageCircle size={18} />}
      target="_blank"
      variant="contained"
      sx={sx}
    >
      {label}
    </Button>
  )
}
