import type { WhatsAppLinkOptions } from '../types/whatsapp.ts'

export function createWhatsAppLink({ phoneNumber, message }: WhatsAppLinkOptions): string | null {
  const normalizedPhoneNumber = phoneNumber?.replace(/\D/g, '')

  if (!normalizedPhoneNumber) {
    return null
  }

  const query = message ? `?text=${encodeURIComponent(message)}` : ''

  return `https://wa.me/${normalizedPhoneNumber}${query}`
}
