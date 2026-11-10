# BuildGuard AI — Fresh Railway Deployment

This repository contains two independent services. Upload the CONTENTS of this ZIP to the ROOT of one GitHub repository (do not upload the ZIP itself and do not place everything inside an extra wrapper folder).

## Expected GitHub root
- backend/
  - app/
  - Dockerfile
  - requirements.txt
  - railway.toml
- frontend/
  - src/
  - package.json
  - Dockerfile
  - railway.toml

## Railway setup
Create TWO services from the same GitHub repository:
1. Backend service: Settings → Build → Root Directory = /backend. Dockerfile builder should use backend/Dockerfile (relative to the root directory). Generate a public domain. Health endpoint: /api/health.
2. Frontend service: Settings → Build → Root Directory = /frontend. Generate a public domain. Set build variable VITE_API_BASE_URL to the backend public URL, including https:// and without a trailing slash, then redeploy.

Backend variables to set before production: SECRET_KEY to a long random value; FRONTEND_URL to the frontend public URL; DEMO_MODE=true for demo testing. Add real Jenkins/Claude/SMTP credentials only if needed.

Do not commit real secrets or .env files. The .env.example file is a template only.
