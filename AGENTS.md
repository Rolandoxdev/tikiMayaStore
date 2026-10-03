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

## Product Scope

- The first version is a storefront/catalogue that uses WhatsApp as the consultation and ordering channel.
- This is not yet a complete ecommerce application.

## Change Control

- Explain any significant architectural change before introducing it.
- Avoid files, abstractions, or layers that do not have a real need.
- Run `yarn lint` and `yarn build` after important changes.
- Do not create commits automatically. Commits are controlled by the project owner.
