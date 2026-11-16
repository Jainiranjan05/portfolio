# Jai Niranjan — Portfolio

Responsive Next.js portfolio built from the supplied source archive.

## Run locally
Requirements: Node.js 20.9+ and npm.
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production check
```bash
npm run build
npm run start
```

## Deploy publicly with Vercel
1. Create a GitHub repository and upload the **contents** of this folder (not the ZIP itself).
2. Sign in at https://vercel.com with GitHub and choose **Add New → Project**.
3. Import the repository; Vercel should detect Next.js automatically.
4. Keep Framework Preset `Next.js`, Build Command `npm run build`, Output Directory default, and Install Command `npm install`. No environment variables are required for the first deployment.
5. Select **Deploy**. Vercel will provide a public `*.vercel.app` URL.
6. Optional: set `NEXT_PUBLIC_SITE_URL` to that final URL under Project → Settings → Environment Variables, then redeploy. It powers canonical and social metadata.
7. Optional custom domain: Project → Settings → Domains, then follow Vercel's DNS instructions.

Every push to the connected production branch triggers a new deployment. Other branches and pull requests receive preview deployments.

## Notes
- Portrait and resume are served from `public/`.
- Conference metrics are labelled as reported in the supplied presentation, not independently validated clinical results.
