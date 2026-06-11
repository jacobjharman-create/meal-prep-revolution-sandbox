# Meal Prep Revolution Sandbox

Source of truth:
- GitHub repo source: this repository, `main` branch (after `git push`)
- Current brand signals:
  - Live WordPress: https://mealpreprev.com/
  - Live ordering/catalog: https://ordermealpreprevolution.square.site/
  - Benchmark reference: https://www.factor75.com/

Editable surface:
- This repository (durable source) and the Hostinger Git deployment surface.

Generated output:
- Static HTML/CSS/JS snapshot package for the Hostinger sandbox.

Live destination:
- Meal Prep Revolution Hostinger sandbox: https://beige-cattle-772158.hostingersite.com/
- Existing live WordPress/Square properties remain untouched.

Manual sink path:
- Update this repo in PR/commit form, then deploy through the Hostinger Git deployment connected to `main`.

Publish trigger:
- Hostinger Git deployment from `main` to `public_html`.

Disconnect trigger:
- Any divergence between Hostinger live sandbox and this GitHub repo, or explicit project closure.

Rollback source:
- This repo commit history plus the source snapshot in `jacobjharman-create/prometheus-design-studios-ai-studio/public/clients/meal-prep-revolution`.

Verification:
- Verify source snapshot file hashes against local render.
- Verify Hostinger sandbox live URL on mobile and desktop.
