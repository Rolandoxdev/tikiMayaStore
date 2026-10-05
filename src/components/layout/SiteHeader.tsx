import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logoTikiMayaStore from './../../assets/logoTikiMayaStore.svg'

const navItems = [
  { label: 'Productos', href: '#products' },
  { label: 'Kits', href: '#kits' },
  { label: 'Cómo comprar', href: '#how-to-buy' },
  { label: 'Contacto', href: '#contact' },
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
      sx={{
        backgroundColor: 'background.default',
        color: 'primary.main',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'rgba(35, 75, 77, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
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
                height: 42,
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
            <Box sx={{ display: 'flex', gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  component="a"
                  href={item.href}
                  key={item.label}
                  sx={{
                    color: 'primary.main',
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    letterSpacing: '0.03em',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
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
            width: 240,
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
