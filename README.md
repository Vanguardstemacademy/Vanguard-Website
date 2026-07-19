# Vanguard STEM Academy — Website

The marketing/informational site for Vanguard STEM Academy. It is a **static
site** (plain HTML/CSS/JS, no build step, no framework) served by **Vercel**.
The one piece of "logic" is `vercel.json`, which maps clean public URLs to the
HTML files on disk.

> **Read the [Gotchas](#-gotchas-read-before-you-touch-routing-or-assets) section before editing `vercel.json` or moving assets.** Two of those points already took the live site down once.

---

## Quick facts

| | |
|---|---|
| **Hosting** | Vercel (auto-deploys on every push to `main`) |
| **Live URL** | https://vanguard-phi-ten.vercel.app |
| **Build step** | None. Files are served as-is. |
| **Routing** | `vercel.json` (`cleanUrls` + `rewrites` + `redirects`) |
| **Nav** | One Web Component: `assets/js/nav-component.js` |
| **Deploy** | `git push origin main` → Vercel builds & deploys |

---

## Repository structure

```
vanguard/
├── index.html            # Entry point, served at "/" (stays at root)
├── vercel.json           # ALL URL routing lives here
├── README.md
│
├── pages/                # Main content pages
│   ├── home.html         academy.html    impact.html
│   ├── programs.html     leadership.html get-involved.html
│   ├── apply.html        portal.html     legal.html
│
├── forms/                # Form pages (inquiry / registration / application)
│   ├── careers.html                  consultation.html
│   ├── engineering-design.html       executive-leadership.html
│   ├── international-consulting.html  premium-program-inquiry.html   (was formA)
│   ├── icp-consultation-request.html (was formB)
│   ├── get-involved-inquiry.html     icp-registration.html
│
├── assets/
│   ├── css/nav.css               # Nav + shared styles (loaded by every page)
│   ├── js/nav-component.js       # <vanguard-nav> Web Component (loaded by every page)
│   ├── images/                   # Photos & graphics
│   ├── video/                    # .mp4 files
│   ├── docs/                     # PDFs
│   ├── logos/                    # Partner/company logos (svg/webp)
│   └── leadership/               # Headshots (+ leadership/firesidechat/)
│
└── partials/             # Unused HTML fragments kept for reference only.
                          # NOT linked, NOT deployed as pages. Safe to ignore.
```

**Do not put page/form HTML at the repo root** (except `index.html`). They live in
`pages/` and `forms/` and are exposed at clean URLs by `vercel.json`.

---

## How URLs work (the important part)

Public URLs are **decoupled from file paths**. A visitor never sees `.html`, a
folder name, or a `#anchor`. `vercel.json` translates the pretty URL to a file.

### Page URL → file map

| Public URL | File |
|---|---|
| `/` | `index.html` |
| `/home` | `pages/home.html` |
| `/the-leadership-team` | `pages/leadership.html` |
| `/programs` | `pages/programs.html` |
| `/the-academy` | `pages/academy.html` |
| `/our-impact` | `pages/impact.html` |
| `/get-involved` | `pages/get-involved.html` |
| `/apply` | `pages/apply.html` |
| `/portal` | `pages/portal.html` |
| `/legal` | `pages/legal.html` |

### Form URL → file map

| Public URL | File |
|---|---|
| `/form-careers` | `forms/careers.html` |
| `/form-consultation` | `forms/consultation.html` |
| `/form-engineering-design` | `forms/engineering-design.html` |
| `/form-executive-leadership` | `forms/executive-leadership.html` |
| `/form-international-consulting` | `forms/international-consulting.html` |
| `/formA` | `forms/premium-program-inquiry.html` |
| `/formB` | `forms/icp-consultation-request.html` |
| `/get-involved-form` | `forms/get-involved-inquiry.html` |
| `/icp-registration` | `forms/icp-registration.html` |

Forms receive context via query strings, e.g. `/form-careers?role=Mentor` — these
pass straight through the rewrite.

### Section routes (deep links into a page, no `#`)

Some pages have on-page sections reachable by a **2-segment path** whose last
segment equals the target element's `id`:

- `/programs/{coaching,bi,mentorship,workforce,ai,future}`
- `/the-academy/{overview,experiences,cohorts,cohorts-stevens}`
- `/our-impact/{motion,recognition,network,metrics,graduation,stories,testimonials}`
- `/get-involved/{partner,sponsor,volunteer,inquire}`
- `/home/{path-h}`

On load, `nav-component.js` reads the last path segment and scrolls to the element
with that `id`. Clicking a section link on the **same** page smooth-scrolls without
a reload (via `history.pushState`). Cross-page section links do a normal navigation
and then scroll on load.

### Redirects

`vercel.json` redirects legacy `/*.html` URLs and the old `/leadership`,
`/academy`, `/impact` forms to the current clean slugs, so old bookmarks/links
never 404.

---

## The navigation component

The entire top nav, mobile menu, and search overlay are rendered by **one file**:
`assets/js/nav-component.js`, exposed as the custom element `<vanguard-nav>`.

Every page just includes:

```html
<vanguard-nav></vanguard-nav>
...
<link rel="stylesheet" href="assets/css/nav.css">
<script src="assets/js/nav-component.js"></script>
```

**To change any nav link, label, dropdown, or the section-scroll behavior, edit
`nav-component.js` only** — do not edit nav markup in individual pages (there
isn't any; it's all injected by the component).

---

## Common tasks

### Add a new page
1. Create `pages/my-page.html`. Include the nav (`<vanguard-nav></vanguard-nav>`,
   the `nav.css` link, and the `nav-component.js` script — copy the `<head>`/nav
   includes from an existing page).
2. Reference assets with the `assets/...` prefix (see asset rules below).
3. In `vercel.json` → `rewrites`, add:
   ```json
   { "source": "/my-page", "destination": "/pages/my-page" }
   ```
   ⚠️ **Destination is extensionless** (`/pages/my-page`, *not* `/pages/my-page.html`).
4. Link to it from other pages / the nav using the clean URL: `href="/my-page"`.
5. (Optional) If it has section deep-links, add
   `{ "source": "/my-page/:section", "destination": "/pages/my-page" }` and give the
   sections `id`s matching the segment.

### Add a new form
Same as a page but under `forms/`, and add the rewrite
`{ "source": "/my-form", "destination": "/forms/my-form" }`.

### Add or reference an asset
- Put it in the right folder: `assets/images`, `assets/video`, `assets/docs`, etc.
- Reference it **with the `assets/` prefix**, e.g.
  `<img src="assets/images/photo.jpg">` or `url('assets/images/bg.png')`.
- This prefix is required so assets resolve correctly on 2-segment section URLs
  (see Gotchas).

### Rename or move a file
Because URLs come from `vercel.json`, you can move/rename a file freely — just
update its `rewrite` `destination`. You usually do **not** need to touch any
`href` (links use clean URLs, not file paths).

---

## Local development

⚠️ **Opening files with `file://` or a plain static server will NOT reflect the
real routing** (clean URLs, rewrites, section routes). Those only exist on Vercel.

- To preview routing accurately: install the Vercel CLI and run `vercel dev`, or
  push to a branch and use the **Vercel preview deployment**.
- For quick visual/content edits, opening the file directly is fine, but remember
  clean URLs won't work locally.

---

## Deployment

1. Commit your change.
2. `git push origin main`.
3. Vercel auto-builds and deploys (usually well under a minute).
4. **Verify on the live URL** — especially after editing `vercel.json`. A fast check:
   ```bash
   for u in / /home /programs /programs/mentorship /the-leadership-team /form-careers; do
     echo "$u -> $(curl -s -o /dev/null -w '%{http_code}' -L https://vanguard-phi-ten.vercel.app$u)"
   done
   ```
   All should print `200`.

---

## 🔴 Gotchas (read before you touch routing or assets)

1. **Rewrite destinations must be extensionless.**
   With `cleanUrls: true`, Vercel turns every `.html` path into a 308 *redirect*.
   Rewrites do **not** follow redirects, so a rewrite to `/pages/home.html`
   resolves to a redirect (not content) and returns **404**. Always point rewrites
   at `/pages/home` (no `.html`). *This exact mistake took the whole site down once.*

2. **All asset references must start with `assets/`.**
   Relative URLs resolve against the **browser's URL**, not the file's location. On a
   2-segment section URL like `/programs/mentorship`, a bare `assets/x.png` would
   resolve to `/programs/assets/x.png`. The rule
   `{ "source": "/:page/assets/:path*", "destination": "/assets/:path*" }` in
   `vercel.json` catches that and remaps it to `/assets/x.png`. Keep every asset
   under `assets/` so this rule applies. Don't reference assets by bare filename.

3. **Internal links use clean URLs, never file paths.**
   Write `href="/programs"`, never `href="pages/programs.html"`. Links must not
   depend on where a file physically lives.

4. **Edit the nav in one place.** All nav links/markup live in
   `assets/js/nav-component.js`. Pages contain only `<vanguard-nav></vanguard-nav>`.

5. **Always verify on the live deploy after a `vercel.json` change.** Routing can't
   be validated locally with `file://` or a basic static server — only Vercel's
   engine runs `vercel.json`. Curl the routes (see Deployment) before you call it done.

6. **`index.html` stays at the repo root.** It's the `/` entry point. Everything
   else lives in `pages/` or `forms/`.

7. **`partials/` is dead weight for reference only.** Those fragments aren't linked
   or deployed as routes. Don't assume editing them changes anything on the site.
