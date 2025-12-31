# Berkvens & Meijndershagen Advies

## Overview

This is a Dutch-language website for a mortgage and financial advisory company ("Hypotheek & Financieel Adviesbedrijf"). The application provides information about mortgage services, financial planning, and insurance advice for Dutch consumers. Key features include:

- **Hypotheekadvies** (6 subpages): eerste huis kopen, volgend huis kopen, hypotheek oversluiten, verbouwen, scheiden, ondernemers
- **Financieel Advies** (6 subpages): aanvullend pensioen, eerder stoppen met werken, sparen voor later, mee-/tegenvaller, wijzigingen in situatie, overlijden
- Insurance advisory services
- Contact forms and company information
- Interactive service sliders and modal components
- Navigation with dropdown submenus for both advice categories

The site targets Dutch homebuyers and individuals seeking financial guidance, with SEO-optimized content in Dutch. Tagline: "Wij maken van cijfers kansen".

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for Replit environment
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style variant) built on Radix UI primitives
- **State Management**: TanStack React Query for server state

**Design Pattern**: Component-based architecture with pages in `client/src/pages/`, reusable components in `client/src/components/`, and UI primitives in `client/src/components/ui/`.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Server Entry**: `server/index.ts` handles both API routes and serves the Vite-built frontend
- **API Structure**: RESTful routes prefixed with `/api` (defined in `server/routes.ts`)
- **Storage Layer**: Abstract interface pattern (`IStorage`) with in-memory implementation (`MemStorage`) - designed to swap to database later

### Database Configuration
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Connection**: Uses `@neondatabase/serverless` for Neon PostgreSQL
- **Migrations**: Drizzle Kit with output to `./migrations`

Currently the storage uses in-memory implementation but is configured for PostgreSQL via `DATABASE_URL` environment variable.

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

### Design System
The project follows specific design guidelines (see `design_guidelines.md`):
- Typography: Inter/Poppins fonts
- Consistent spacing units (4, 6, 8, 12, 16, 20, 24)
- Interactive slider components showing 3 cards
- Professional financial services aesthetic inspired by Dutch banks (ING, ABN AMRO)

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless PostgreSQL via `@neondatabase/serverless`
- **Session Storage**: `connect-pg-simple` for PostgreSQL session management

### UI/Component Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, accordion, tabs, etc.)
- **Embla Carousel**: For service sliders/carousels
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Form & Validation
- **React Hook Form**: Form management with `@hookform/resolvers`
- **Zod**: Schema validation (integrated with Drizzle via `drizzle-zod`)

### Build & Development
- **Replit Plugins**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`
- **esbuild**: Server bundling for production

### Fonts
- Google Fonts: DM Sans, Geist Mono, Fira Code, Architects Daughter (loaded via CDN in `index.html`)