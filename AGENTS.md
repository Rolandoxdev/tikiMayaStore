# TikiMaya Store

## Project Standards

- This project uses React, TypeScript, and Vite.
- Use Yarn for package management and scripts. Never use npm.
- Build UI and components with MUI.
- Use Lucide React for icons.
- Follow a mobile-first approach.
- Keep the architecture simple and avoid overengineering.
- Do not add dependencies without first justifying the need.
- Do not use Redux, RTK Query, React Router, Axios, a backend, an API, a database, authentication, payments, or checkout unless a real need is established.
- Separate data from presentation.
- Keep products and kits as separate domains.
- Keep WhatsApp logic separate from visual components.
- Use strict TypeScript.
- Use English for variable, function, component, type, and file names.
- Use Spanish for user-visible content.
- Do not invent prices, availability, payment methods, shipping coverage, phone numbers, social media, ingredients, formulations, or other commercial information.
- Do not invent ingredient percentages or make unverified medical or nutritional claims.
- Centralize visual identity through the MUI theme.

## Visual Identity

- Primary color: `#234B4D`
- Secondary/background color: `#E8E2D2`
- Accent color: `#FBBF49`

## Visual Direction

TikiMaya Store follows a **botanical editorial** direction: contemporary, warm, natural, sophisticated, and artisanal without being rustic — modern without feeling technological. The visual language draws from nature, tea culture, and the spirit of discovery.

### Character

- Editorial — inspired by printed matter, magazines, and botanical notebooks
- Botanical — natural forms, organic shapes, and references to the plant world
- Warm — grounded in the cream and deep green palette, never cold or sterile
- Sophisticated — restrained, considered, and intentionally composed
- Artisanal — human, crafted, and authentic
- Discoverable — inviting exploration rather than efficiency

### Composition

- Avoid repeating the same section pattern across the page
- Reduce reliance on generic card grids
- Use different visual rhythms between sections
- Use asymmetric layouts when they add purpose
- Use whitespace deliberately to create breath and hierarchy
- Prioritize editorial hierarchy over typical ecommerce patterns

### Surfaces

- The existing palette remains the foundation: `#234B4D`, `#E8E2D2`, `#FBBF49`
- Alternation between cream and deep green surfaces may be used to create rhythm
- Do not turn the page into a sequence of colored blocks without purpose

### Photography

- Product and experience photography should be the protagonist when available
- Do not download external images automatically
- Do not invent photographs
- Components should be prepared to receive real assets

### Abstract Visuals

- Abstract compositions are secondary editorial resources
- They should not permanently replace photographs when real photography exists
- They serve as compositional anchors and breathing space in editorial layouts

### Typography

- Maintain a clear editorial hierarchy
- Use serif or editorial system fonts for headlines and brand elements where appropriate
- Use readable body text for content
- Avoid excessive typographic styles

### Products and Kits

- Products and kits do not need to share the same visual pattern
- Products may be presented as an editorial sequence
- Kits may receive a more open or experiential treatment
- Avoid automatically returning to a generic ecommerce grid

### Responsive

- Design is considered as its own experience on mobile and desktop
- Do not assume mobile is simply a reduced version of desktop

## Product Scope

- The first version is a storefront/catalogue that uses WhatsApp as the consultation and ordering channel.
- This is not yet a complete ecommerce application.

## Change Control

- Explain any significant architectural change before introducing it.
- Avoid files, abstractions, or layers that do not have a real need.
- Run `yarn lint` and `yarn build` after important changes.
- Do not create commits automatically. Commits are controlled by the project owner.
