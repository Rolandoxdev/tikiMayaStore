import { Box } from '@mui/material'
import { SiteHeader } from './components/layout/SiteHeader'
import { HeroSection } from './components/sections/HeroSection'
import { IntroSection } from './components/sections/IntroSection'
import { ProductSection } from './components/sections/ProductSection'
import { KitSection } from './components/sections/KitSection'
import { BrewGuideSection } from './components/sections/BrewGuideSection'
import { SocialSection } from './components/sections/SocialSection'

function App() {
  return (
    <Box>
      <SiteHeader />
      <HeroSection />
      <IntroSection />
      <ProductSection />
      <KitSection />
      <BrewGuideSection />
      <SocialSection />
    </Box>
  )
}

export default App
