# SNR Automation - Replit Project Guide

## Overview

SNR Automation is a modern full-stack web application showcasing a futuristic, AI-powered digital marketing and personal branding startup. The application features an animated, interactive website with orbital UI components, smooth scroll animations, and a comprehensive service showcase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for complex animations and micro-interactions
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **Session Storage**: In-memory storage with plans for PostgreSQL integration

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon Database (PostgreSQL-compatible serverless database)
- **Schema**: Type-safe schema definitions in shared directory
- **Migrations**: Managed through drizzle-kit

## Key Components

### UI Components
The application uses a comprehensive set of Radix UI components wrapped with custom styling:
- Navigation menus, dialogs, popovers, and form controls
- Data display components (tables, cards, charts)
- Interactive elements (buttons, toggles, sliders)
- Layout components (sidebar, resizable panels, tabs)

### Page Structure
- **Home Page**: Multi-section landing page with hero, services, divisions, case studies, philosophy, and contact sections
- **Component Architecture**: Modular design with reusable components for each section
- **Animation System**: Scroll-triggered animations and hover effects throughout

### Core Features
1. **Hero Section**: Animated SNR logo, particle effects, and call-to-action buttons
2. **Orbital Tools**: Interactive circular animation showcasing technology stack
3. **Service Divisions**: Four main business divisions with hover animations
4. **Case Studies**: Success story showcases with before/after metrics
5. **Philosophy Section**: Brand values and approach explanation
6. **Contact Form**: Multi-step contact form with location selection
7. **Robot Tour**: Interactive guided tour feature

## Data Flow

### Client-Side Data Management
- **Query Client**: TanStack Query handles API requests with caching
- **Form State**: React Hook Form manages form validation and submission
- **Component State**: Local React state for UI interactions and animations
- **Toast Notifications**: Custom toast system for user feedback

### API Architecture
- **Route Structure**: RESTful API endpoints under `/api` prefix
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Comprehensive request/response logging
- **Type Safety**: Shared TypeScript interfaces between client and server

### Database Integration
- **Schema Definition**: Centralized schema in `shared/schema.ts`
- **Type Generation**: Automatic TypeScript types from Drizzle schema
- **Migration System**: Database migrations managed through drizzle-kit
- **Connection**: Neon Database serverless PostgreSQL connection

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Vite build tooling with TypeScript support
- Wouter for routing
- TanStack Query for data fetching

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Framer Motion for animations
- Lucide React for icons
- Custom fonts (Playfair Display, Inter) via Google Fonts

### Backend Dependencies
- Express.js web framework
- Drizzle ORM with PostgreSQL adapter
- Neon Database serverless driver
- Session management with connect-pg-simple
- Development tools (tsx, esbuild)

### Development Tools
- TypeScript for type safety
- ESLint and Prettier for code quality
- Replit-specific plugins for development experience
- PostCSS for CSS processing

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite dev server with HMR for frontend
- **API Server**: Express server with automatic restarts via tsx
- **Database**: Development connection to Neon Database
- **Environment**: Replit-optimized development setup

### Production Build
- **Frontend**: Vite production build with optimizations
- **Backend**: esbuild bundling for Node.js deployment
- **Assets**: Static file serving through Express
- **Database**: Production PostgreSQL connection via DATABASE_URL

### Configuration Management
- **Environment Variables**: DATABASE_URL for database connection
- **Build Scripts**: Separate development and production commands
- **Type Checking**: Standalone TypeScript checking
- **Database Operations**: Push schema changes via drizzle-kit

### Scalability Considerations
- **Static Assets**: Optimized through Vite's build process
- **Database**: Serverless PostgreSQL for automatic scaling
- **Session Storage**: Ready to migrate from in-memory to database-backed sessions
- **API Design**: RESTful structure ready for horizontal scaling