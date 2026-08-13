# Expanded Website Redesign Checklist

- [x] Audit the current single-page structure and map the new routes.
- [x] Define the mobile-first navigation and responsive breakpoint behavior.
- [x] Add an English Home page with Indian workshop positioning and stronger service entry points.
- [x] Add a detailed Services overview page.
- [x] Add individual service detail pages for washing, cleaning, polishing/detailing, and mechanical work.
- [x] Add an About / Workshop page with the confirmed brand story and service standards.
- [x] Add a Visit / Contact page with the confirmed phone number, address, call action, and directions action.
- [x] Prepare Indian automotive visual assets with cars, pickups, workshop bays, detailing tools, and local service context.
- [x] Add floating route-line, gold particle, water-droplet, and tool-inspired animations without hurting readability or performance.
- [x] Preserve the content guardrails: no invented reviews, ratings, prices, hours, years, certifications, or availability claims.
- [x] Test every route on mobile and desktop, including menu behavior, phone links, directions link, and reduced-motion support.
- [x] Run TypeScript check and production build.
- [ ] Save a new checkpoint and deliver the expanded version.

## GitHub Delivery

- [x] Verify `sainisun/Car-detailings-` exists and inspect its default branch.
- [x] Confirm the local project has the expected website files and no accidental generated build output requiring removal.
- [x] Commit the completed website to the target repository.
- [x] Push the commit to the repository’s default branch.
- [x] Verify the pushed commit and repository URL.

## Vercel Deployment Troubleshooting

- [ ] Inspect the Vercel project and latest deployment settings.
- [ ] Confirm the repository root, build command, output directory, and framework preset.
- [ ] Add or correct Vercel configuration so the deployed entry point serves the built React app rather than `server/index.ts`.
- [ ] Run the local Vercel-compatible build and validate the output.
- [ ] Push the deployment fix to GitHub.
- [ ] Verify the Vercel deployment and record any dashboard redeploy action required.

## Enhancement Round

- [x] Add local SEO metadata, structured service/location copy, and a crawlable sitemap/robots setup.
- [x] Add Google Maps location rendering for the confirmed workshop address.
- [x] Add WhatsApp appointment booking with a prefilled enquiry message and a direct call path.
- [x] Add mobile-first booking UI and richer floating interactions with reduced-motion support.
- [x] Generate authentic Indian local car-detailing visuals and replace generic image panels.
- [x] Add a transparent Meet the Founder section without inventing an unconfirmed founder name or biography.
- [x] Add or strengthen the About page content and route navigation.
- [x] Test SEO output, map rendering, WhatsApp link, call link, and responsive routes.
