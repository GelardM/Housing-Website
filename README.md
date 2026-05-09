# CHP Homes

Full-stack Next.js + Prisma housing platform with a marketing frontend, dynamic listing availability, booking workflow, and RBAC dashboards for CTO and Owners.

## Features delivered

- Marketing homepage with image carousel and primary CTA to `Available Homes`
- Global top navigation with `Home`, `About`, `Contact`, and `Available Homes`
- Universal `Back` and `Home` controls in the global header for sub-pages
- Animated floating category cards for:
  - Bedsitter
  - 1-Bedroom
  - 2-Bedroom
  - 3-Bedroom
- Dynamic listings by category with thumbnail + live `Vacant/Occupied` status via SSE realtime stream
- Detail page gallery view for each property
- Conditional booking logic:
  - `Vacant` -> show booking form
  - `Occupied` -> booking disabled
- Booking lead capture form collects Name, Phone, ID Number
- WhatsApp integration helper to notify CTO on new booking
- Role-based backend logic (CTO vs Owner):
  - CTO can edit global About + metadata content
  - CTO can override listing availability globally
  - Owner can CRUD only their own listings
- Owner can upload listing images directly from dashboard (`/api/uploads`)
  - Owner sees only own occupancy ratio and listing records (UID silo)
- CTO and owners get visual category distribution analytics bars

## Stack

- Next.js App Router (TypeScript)
- Tailwind CSS
- Prisma ORM + SQLite
- JWT cookie auth
- Zod payload validation

## Setup

1. Install Node.js 18+
2. Install dependencies:
   - `npm install`
3. Copy env file:
   - `copy .env.example .env`
4. Generate Prisma client:
   - `npm run prisma:generate`
5. Create DB + migrate:
   - `npm run prisma:migrate -- --name init`
6. Seed demo data:
   - `npm run prisma:seed`
7. Start app:
   - `npm run dev`

## Local development workflow

- Pull latest changes: `git pull`
- Create a feature branch: `git checkout -b feature/your-feature`
- Stage changes: `git add .`
- Commit: `git commit -m "<message>"`
- Push the branch: `git push -u origin feature/your-feature`
- Create a GitLab merge request into `main`

## GitLab CI/CD

This repository includes a `.gitlab-ci.yml` pipeline that:

- installs dependencies with `npm ci`
- runs `npm run lint` as the test stage
- builds the Next.js app with `npm run build`
- deploys from `main` using Vercel when `VERCEL_TOKEN` is configured

Recommended GitLab project variables:

- `VERCEL_TOKEN` — Vercel deploy token

## Demo logins

Password for all seeded users: `password123`

- CTO: `cto@communityhousing.com`
- Owner 1: `owner1@communityhousing.com`
- Owner 2: `owner2@communityhousing.com`

Access login page at: `/portal`

## WhatsApp configuration

Set these in `.env`:

- `WHATSAPP_API_URL`
- `WHATSAPP_TOKEN`
- `WHATSAPP_TO`

If missing, the app logs the message payload in server logs instead of failing booking creation.

## Troubleshooting

### Common Issues

- **Back Button Not Working**: The Back button now uses browser history navigation (`router.back()`). If it doesn't work as expected, ensure you're navigating from a sub-page.

- **Image Performance Warnings**: All `Image` components now include the `sizes` prop to optimize loading. If you see LCP warnings, add `loading="eager"` for above-the-fold images.

- **Database Connection**: Ensure `prisma migrate dev` and `prisma seed` are run. The DB is SQLite at `prisma/dev.db`.

- **Linting Errors**: If `npm run lint` fails, try `npx next lint` directly. The project uses Next.js ESLint config.

- **Deployment**: For GitLab CI/CD, set `VERCEL_TOKEN` in project variables to enable automatic deployment.

### Recent Fixes

- Fixed Back button navigation to use `router.back()` instead of pushing to home.
- Added `sizes` prop to `Image` components in `ListingCard.tsx` and `HeroCarousel.tsx`.
- Updated site name to "CHP Homes" across all components and data.
