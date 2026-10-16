import { Box, IconButton, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState, type TouchEvent } from 'react'
import type { Kit } from '../../types/kit.ts'
import { WhatsAppCta } from '../../features/whatsapp/WhatsAppCta'
import kitSaboresOpen from '../../assets/images/Kit-1-abierto.jpg'
import kitRitualOpen from '../../assets/images/kitRitualDelAltiplano.jpg'
import infusorEsfera from '../../assets/images/infusor_esfera.jpg'
import spoonLeaf from '../../assets/images/cuchara_hojas.jpg'
import spoonHoney from '../../assets/images/paletaMiel.jpg'
import teaGlass from '../../assets/images/teteraVidrio.jpg'
import infusorHearth from '../../assets/images/infusorCorazon.jpg'
import cacaoEspeciado from '../../assets/images/infusionCacaoEspeciadoJar.jpg'
import kitCeremoniaMan from '../../assets/images/kitCeremoniaDelBosqueHombre.jpg'
import kitCeremoniaWoman from '../../assets/images/kitCeremoniaDelBosqueMujer.jpg'
import botellaVidrioInfusor from '../../assets/images/botella-vidrio-infusor.avif'
import teaInfusions from '../../assets/images/infusiones.jpg'

const kitPhotos: Record<string, string[]> = {
  'sabores-por-descubrir': [kitSaboresOpen, infusorEsfera, spoonLeaf, spoonHoney, cacaoEspeciado],
  'ritual-del-altiplano': [kitRitualOpen, teaGlass, infusorHearth, spoonHoney, teaInfusions],
  'ceremonia-del-bosque': [kitCeremoniaMan, botellaVidrioInfusor, kitCeremoniaWoman, infusorHearth, spoonHoney, teaInfusions],
}

interface KitCardProps {
  kit: Kit
  index: number
  whatsappHref: string | null
  variant?: 'tile' | 'editorial'
}

export function KitCard({ kit, index, whatsappHref, variant = 'tile' }: KitCardProps) {
  const isEditorial = variant === 'editorial'
  const reverse = index % 2 === 1
  const showWhatsApp = Boolean(whatsappHref) && kit.available !== false
  const configuredImages = [kit.image, ...(kit.images ?? [])].filter((image): image is string => Boolean(image))
  const galleryImages = [...new Set(configuredImages.length > 0 ? configuredImages : kitPhotos[kit.slug] ?? [])].slice(0, 7)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const currentImage = galleryImages[activeImageIndex]

  const moveImage = (direction: -1 | 1) => {
    setActiveImageIndex((currentIndex) => Math.max(0, Math.min(galleryImages.length - 1, currentIndex + direction)))
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current
    touchStart.current = null

    if (!start || galleryImages.length < 2) {
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - start.x
    const deltaY = touch.clientY - start.y

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return
    }

    moveImage(deltaX < 0 ? 1 : -1)
  }

  return (
    <Box
      component="article"
      sx={{
        ...(isEditorial
          ? {
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
              direction: { md: reverse ? 'rtl' : 'ltr' },
              alignItems: 'center',
              gap: { xs: 3, md: 9 },
              py: { xs: 4, md: 7 },
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:last-of-type': { borderBottom: 0 },
              '& > *': { direction: 'ltr' },
            }
          : {
              minHeight: { md: 420 },
              display: 'flex',
              flexDirection: 'column',
              p: { xs: 2.5, md: 3.5 },
              borderTop: '1px solid',
              borderColor: 'primary.main',
              transition: 'background-color 220ms ease, transform 220ms ease',
              '&:hover': {
                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.04),
                transform: { md: 'translateY(-4px)' },
              },
            }),
      }}
    >
      <Box sx={{ minWidth: 0, mb: isEditorial ? 0 : { xs: 3, md: 4 } }}>
        <Box
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => { touchStart.current = null }}
          sx={{
            position: 'relative',
            ...(isEditorial
              ? {
                  aspectRatio: { xs: '1.25 / 1', md: '1.12 / 1' },
                  overflow: 'hidden',
                  backgroundColor: index % 2 === 0 ? 'secondary.light' : 'secondary.dark',
                  borderRadius: '24px',
                }
              : {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: { xs: 136, md: 164 },
                  overflow: 'hidden',
                  backgroundColor: index % 2 === 0 ? 'secondary.light' : 'secondary.dark',
                  borderRadius: '24px',
                }),
            touchAction: galleryImages.length > 1 ? 'pan-y' : 'auto',
          }}
        >
          {currentImage && (
            <Box
              component="img"
              src={currentImage}
              alt={`${kit.name}, imagen ${activeImageIndex + 1} de ${galleryImages.length}`}
              sx={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          )}

          {galleryImages.length > 0 && (
            <>
              <IconButton
                aria-label={`Imagen anterior de ${kit.name}`}
                disabled={activeImageIndex === 0}
                onClick={() => moveImage(-1)}
                sx={(theme) => ({
                  position: 'absolute',
                  left: { xs: 1, sm: 1.5 },
                  top: '50%',
                  zIndex: 1,
                  width: 44,
                  height: 44,
                  color: 'common.white',
                  backgroundColor: alpha(theme.palette.primary.dark, 0.78),
                  transform: 'translateY(-50%)',
                  '&:hover': { backgroundColor: 'primary.main', transform: 'translateY(-50%)' },
                  '&:focus-visible': { outline: '2px solid', outlineColor: 'accent.main', outlineOffset: 2 },
                  '&.Mui-disabled': {
                    color: alpha(theme.palette.common.white, 0.55),
                    backgroundColor: alpha(theme.palette.primary.dark, 0.48),
                  },
                })}
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </IconButton>
              <IconButton
                aria-label={`Imagen siguiente de ${kit.name}`}
                disabled={activeImageIndex >= galleryImages.length - 1}
                onClick={() => moveImage(1)}
                sx={(theme) => ({
                  position: 'absolute',
                  right: { xs: 1, sm: 1.5 },
                  top: '50%',
                  zIndex: 1,
                  width: 44,
                  height: 44,
                  color: 'common.white',
                  backgroundColor: alpha(theme.palette.primary.dark, 0.78),
                  transform: 'translateY(-50%)',
                  '&:hover': { backgroundColor: 'primary.main', transform: 'translateY(-50%)' },
                  '&:focus-visible': { outline: '2px solid', outlineColor: 'accent.main', outlineOffset: 2 },
                  '&.Mui-disabled': {
                    color: alpha(theme.palette.common.white, 0.55),
                    backgroundColor: alpha(theme.palette.primary.dark, 0.48),
                  },
                })}
              >
                <ChevronRight size={20} aria-hidden="true" />
              </IconButton>
              <Typography
                component="span"
                aria-live="polite"
                sx={(theme) => ({
                  position: 'absolute',
                  right: 1.5,
                  bottom: 1.5,
                  zIndex: 1,
                  px: 1.25,
                  py: 0.5,
                  borderRadius: 999,
                  backgroundColor: alpha(theme.palette.primary.dark, 0.82),
                  color: 'common.white',
                  fontSize: '0.72rem',
                  lineHeight: 1.4,
                  pointerEvents: 'none',
                })}
              >
                {activeImageIndex + 1} / {galleryImages.length}
              </Typography>
            </>
          )}
        </Box>

        {galleryImages.length > 0 && (
          <Box
            role="group"
            aria-label={`Miniaturas de ${kit.name}`}
            sx={{ display: 'flex', gap: 1, mt: 1.25, maxWidth: '100%', overflowX: 'auto', pb: 0.5 }}
          >
            {galleryImages.map((image, imageIndex) => (
              <IconButton
                key={`${kit.slug}-${imageIndex}`}
                aria-label={`Mostrar imagen ${imageIndex + 1} de ${galleryImages.length} de ${kit.name}`}
                aria-pressed={activeImageIndex === imageIndex}
                onClick={() => setActiveImageIndex(imageIndex)}
                sx={{
                  flex: '0 0 auto',
                  width: { xs: 44, sm: 48 },
                  height: { xs: 44, sm: 48 },
                  p: 0,
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor: activeImageIndex === imageIndex ? 'accent.main' : 'divider',
                  borderRadius: 1,
                  '&:focus-visible': { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: 2 },
                }}
              >
                <Box component="img" src={image} alt="" aria-hidden="true" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </IconButton>
            ))}
          </Box>
        )}
      </Box>

      <Box
        sx={
          isEditorial
            ? { display: 'flex', flexDirection: 'column', py: { md: 2 }, direction: 'ltr' }
            : { display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: 0 }
        }
      >
        <Typography
          component="p"
          sx={{
            color: 'primary.main',
            fontSize: '0.62rem',
            fontWeight: 500,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            opacity: 0.62,
            mb: 1.5,
          }}
        >
          {kit.type}
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontFamily: (theme) => isEditorial ? theme.typography.h2.fontFamily : theme.typography.h3.fontFamily,
            fontSize: isEditorial ? { xs: '2.35rem', md: '3.4rem' } : { xs: '2rem', md: '2.4rem' },
            fontWeight: 400,
            color: 'primary.main',
            lineHeight: isEditorial ? 1.04 : 1.05,
            letterSpacing: isEditorial ? '-0.05em' : '-0.045em',
            mb: 2,
          }}
        >
          {kit.name}
        </Typography>
        {kit.description && (
          <Typography component="p" sx={{ color: 'text.primary', fontSize: '0.86rem', lineHeight: 1.8, opacity: 0.8, mb: 3 }}>
            {kit.description}
          </Typography>
        )}
        {kit.contents && kit.contents.length > 0 && (
          <Box component="section" aria-label={`Contenido de ${kit.name}`} sx={{ mb: 3 }}>
            <Typography
              component="h4"
              sx={{
                color: 'primary.main',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              Contenido del kit
            </Typography>
            <Box
              component="ul"
              sx={{
                m: 0,
                pl: 2.25,
                color: 'text.primary',
                '& li': { pl: 0.5, mb: 0.5, fontSize: '0.82rem', lineHeight: 1.7, opacity: 0.8 },
                '& li::marker': { color: 'accent.main' },
                '& li:last-child': { mb: 0 },
              }}
            >
              {kit.contents.map((item) => (
                <Box component="li" key={item}>
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {kit.price !== undefined && (
          <Typography component="p" sx={{ fontSize: '0.95rem', mb: 2 }}>
            {kit.currency
              ? new Intl.NumberFormat('es-GT', { style: 'currency', currency: kit.currency }).format(kit.price)
              : kit.price}
          </Typography>
        )}
        {kit.available !== undefined && (
          <Typography component="p" sx={{ fontSize: '0.75rem', opacity: 0.7, mb: 2 }}>
            {kit.available ? 'Disponible' : 'No disponible'}
          </Typography>
        )}

        <Box sx={{ mt: 'auto', pt: 2 }}>
          {showWhatsApp && <WhatsAppCta href={whatsappHref} />}
        </Box>
      </Box>
    </Box>
  )
}
