import { Box } from '@mui/material'
import { SiteHeader } from './components/layout/SiteHeader'
import { HeroSection } from './components/sections/HeroSection'
import { IntroSection } from './components/sections/IntroSection'

function App() {
  return (
    <Box>
      <SiteHeader />
      <HeroSection />
      <IntroSection />
    </Box>
  )
}

export default App
