import { Box } from '@mui/material'
import { SiteHeader } from './components/layout/SiteHeader'
import { SiteFooter } from './components/layout/SiteFooter'
import { HeroSection } from './components/sections/HeroSection'
import { IntroSection } from './components/sections/IntroSection'
import { ProductSection } from './components/sections/ProductSection'
import { KitSection } from './components/sections/KitSection'
import { BrewGuideSection } from './components/sections/BrewGuideSection'
import { SocialSection } from './components/sections/SocialSection'
import { HowToBuySection } from './components/sections/HowToBuySection'

function App() {
  return (
    <Box>
      <SiteHeader />
      <HeroSection />
      <IntroSection />
      <KitSection />
      <ProductSection />
      <BrewGuideSection />
      <HowToBuySection />
      <SocialSection />
      <SiteFooter />
    </Box>
  )
}

export default App
