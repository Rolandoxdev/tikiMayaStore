import { Button } from '@mui/material'
import { MessageCircle } from 'lucide-react'

interface WhatsAppCtaProps {
  href: string | null
  label?: string
}

export function WhatsAppCta({ href, label = 'Consultar por WhatsApp' }: WhatsAppCtaProps) {
  if (!href) {
    return null
  }

  return (
    <Button
      component="a"
      href={href}
      rel="noreferrer"
      startIcon={<MessageCircle size={18} />}
      target="_blank"
      variant="contained"
    >
      {label}
    </Button>
  )
}
