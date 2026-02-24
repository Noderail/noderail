# NodeRail v0.1 — Deployment Guide

This folder contains the complete NodeRail v0.1 documentation site, built with [Docsify](https://docsify.js.org/). It is ready to deploy via **Firebase Hosting** or **GitHub Pages** — no build step required.

---

## Folder Structure

```
noderail_docs/
├── docs/                        ← The entire site lives here
│   ├── index.html               ← Docsify entry point
│   ├── _sidebar.md              ← Navigation sidebar
│   ├── _coverpage.md            ← Cover/landing page
│   ├── README.md                ← Homepage content
│   ├── how.md                   ← How NodeRail works
│   ├── rules.md                 ← Platform rules
│   ├── access.md                ← Request Access page
│   ├── templates.md             ← Templates overview
│   ├── template-field-constitution.md
│   ├── template-framework-node.md
│   ├── template-measurement-node.md
│   ├── template-project-node.md
│   ├── CNAME                    ← noderail.org (for GitHub Pages)
│   ├── .nojekyll                ← Disables Jekyll on GitHub Pages
│   └── hcs/                     ← Founder Field: Human Capacity Science
│       ├── README.md            ← HCS overview
│       ├── primer.md
│       ├── maxims.md
│       ├── construct_map.md
│       └── ethics.md
├── firebase.json                ← Firebase Hosting config
├── .firebaserc                  ← Firebase project ID (noderail)
└── DEPLOY.md                    ← This file
```

---

## Option A: Deploy via Firebase Hosting

### Prerequisites
- Node.js installed
- Firebase CLI: `npm install -g firebase-tools`
- Logged in: `firebase login`

### Steps

```bash
# 1. Navigate to the project root
cd noderail_docs

# 2. Deploy to Firebase
firebase deploy --only hosting
```

Your site will be live at the Firebase-assigned URL. To connect `noderail.org`:

1. Go to Firebase Console → Hosting → Add custom domain
2. Enter `noderail.org`
3. Follow the DNS verification steps (add the TXT and A records to your domain registrar)

---

## Option B: Deploy via GitHub Pages

### Steps

1. Create a new GitHub repository (e.g., `noderail-site` or `noderail.github.io`)
2. Copy the contents of the `docs/` folder into the repository root (or keep the `docs/` folder structure)
3. Go to **Settings → Pages**
4. Set source to: **Deploy from branch → main → /docs**
5. GitHub Pages will serve the site. The `CNAME` file will automatically configure `noderail.org` as the custom domain.

> Make sure your domain registrar has a CNAME record pointing `noderail.org` to `<your-username>.github.io`.

---

## Preview Locally

To preview the site locally before deploying:

```bash
# Install docsify-cli globally
npm install -g docsify-cli

# Serve from the docs folder
docsify serve docs
```

Then open `http://localhost:3000` in your browser.

---

## What to Do Next (v0.1 Launch Checklist)

- [ ] Deploy the site (Firebase or GitHub Pages)
- [ ] Connect `noderail.org` DNS
- [ ] Add your Request Access form link in `docs/access.md`
- [ ] Fill in the HCS Primer (`docs/hcs/primer.md`) with the full primer content
- [ ] Publish first Framework Node under HCS
- [ ] Share on LinkedIn and research communities
- [ ] Add GitHub Issue templates for node submissions (from `nodeforge_v0_1` zip)
