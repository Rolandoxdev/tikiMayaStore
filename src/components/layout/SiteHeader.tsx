import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logoTikiMayaStore from './../../assets/logoTikiMayaStore.svg'

const navItems = [
  { label: 'Productos', href: '#products' },
  { label: 'Kits', href: '#kits' },
  { label: 'Cómo comprar', href: '#how-to-buy' },
  { label: 'Contacto', href: '#social' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        TikiMaya Store
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem disablePadding key={item.label}>
            <ListItemButton
              component="a"
              href={item.href}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar
      component="header"
      position="sticky"
      sx={(theme) => ({
        backgroundColor: alpha(theme.palette.background.default, 0.86),
        color: 'primary.main',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(14px)',
        marginBottom: { xs: '-68px', md: '-84px' },
      })}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 84 }, gap: 4 }}>
          <Box
            component="a"
            href="#"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box
              component="img"
              src={logoTikiMayaStore}
              alt="TikiMaya Store logo"
              sx={{
                height: { xs: 36, md: 42 },
                width: 'auto',
                display: 'block',
              }}
            />
          </Box>

          {isMobile ? (
            <IconButton
              aria-label="Abrir menú"
              onClick={handleDrawerToggle}
              sx={{ color: 'inherit' }}
            >
              <Menu size={24} />
            </IconButton>
          ) : (
            <Box component="nav" aria-label="Navegación principal" sx={{ display: 'flex', gap: { md: 1, lg: 2 } }}>
              {navItems.map((item) => (
                <Button
                  component="a"
                  href={item.href}
                  key={item.label}
                  sx={{
                    color: 'primary.main',
                    fontSize: '0.78rem',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      '&::after': { transform: 'scaleX(1)' },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 8,
                      left: 16,
                      right: 16,
                      height: 1,
                      backgroundColor: 'currentColor',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 180ms ease',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        ModalProps={{ keepMounted: true }}
        onClose={handleDrawerToggle}
        open={mobileOpen}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.default',
            width: { xs: 'min(86vw, 360px)', sm: 360 },
            borderLeft: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'primary.main' }}>
            <X size={24} />
          </IconButton>
        </Box>
        {drawer}
      </Drawer>
    </AppBar>
  )
}
