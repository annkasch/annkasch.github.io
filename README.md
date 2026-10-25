# Ann-Kathrin Schuetz portfolio site

This folder is a static, GitHub Pages–ready portfolio. It contains a home page, an About page, a project index, and two project pages.

## Pages

- `/` — portfolio home
- `/about/` — About
- `/projects/` — project categories and links
- `/projects/katrin/` — KATRIN project
- `/projects/black-hole-binaries/` — gravitational-wave astrophysics project

## Publish on GitHub Pages

The Pages address follows the repository owner's current GitHub username. For the `annkasch` account, create a public repository named `annkasch.github.io` to publish at `https://annkasch.github.io/`. A repository with another name, such as `portfolio`, publishes at `https://annkasch.github.io/portfolio/`.

Copy the contents of this folder into the repository root (so `index.html` is directly at the top level). In GitHub, open **Settings → Pages** and choose **Deploy from a branch**, branch `main`, folder `/(root)`.

The address `https://aschuetz.github.io/` is the user-site address for an account named `aschuetz`; a repository created under `annkasch` cannot claim that address just by using `aschuetz.github.io` as its repository name.

Both project pages are self-contained folders with their own CSS and scripts. The portfolio home, About, and Projects pages share the root `style.css`.
