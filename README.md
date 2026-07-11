# Anton & Tongyu — Wedding Website

Simple static info page for the wedding on 3 October 2026. No build step,
no dependencies — just HTML/CSS/JS, ready for GitHub Pages.

## Publish it on GitHub Pages

1. Create a new **public** repo on GitHub (e.g. `anton-tongyu-wedding`).
2. Push this folder to it:
   ```
   git init
   git add .
   git commit -m "Wedding website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch**, pick
   `main` and `/ (root)`, save.
4. After a minute the site is live at:
   `https://<your-username>.github.io/<repo-name>/`

## Adding a custom domain later (optional)

Buying a domain does **not** require any code changes. Whenever you decide:

1. Buy the domain from any registrar (OVH, Gandi, Namecheap, etc.).
2. Add a file named `CNAME` (no extension) at the repo root containing just
   your domain, e.g. `antonettongyu.com`.
3. At your registrar, add the DNS records GitHub asks for (see
   [GitHub's custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
4. Re-check "Enforce HTTPS" in the Pages settings once DNS has propagated.

You can do this before or after sharing the default `github.io` link — the
site itself doesn't change either way.

## Things you still need to fill in before sharing the link

Search the code for `PLACEHOLDER` / `À COMPLÉTER` comments — everything below
is intentionally left blank for you to fill in directly in `index.html`:

- **RSVP**: create a Google Form, then replace the RSVP button's `href`
  (search for `REPLACE_WITH_YOUR_FORM_LINK`).
- **Cagnotte**: create your collection on [OnParticipe](https://www.onparticipe.fr/)
  (0% mandatory commission, GDPR/France-hosted), then replace the Cagnotte
  button's `href` (search for `REPLACE_WITH_YOUR_CAGNOTTE_LINK`).
- **Contact email/phone**: replace `REPLACE_WITH_YOUR_EMAIL@example.com` in
  the footer.
- **Photos**: drop images into `images/` and swap the placeholder boxes —
  see `images/README.txt` for details.
- **Schedule times** (cocktail / dinner / party), **dress code** wording,
  and **hotel/parking** info: replace the `[À COMPLÉTER]` / `[待补充]` /
  `[Уточняется]` placeholders in the Programme, Dress code, and Travel
  sections.

## Still worth deciding (not in the code yet)

- Kids / plus-one policy — worth a line near RSVP if it matters to you.
- A wedding hashtag, if you want one for guest photos on social media.

## Local preview

Just open `index.html` in a browser — no server needed. The language
switcher (FR / 中文 / RU) and "Add to calendar" button both work directly
from the local file.
