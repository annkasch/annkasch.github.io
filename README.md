# Ann-Kathrin Schuetz portfolio site

This folder is a static, GitHub Pages–ready portfolio. It contains a home page, an About page, a project index, two research project pages, and an essay on scientific machine learning.

## Pages

- `/` — portfolio home
- `/about/` — About
- `/projects/` — project categories and links
- `/projects/katrin/` — KATRIN project
- `/projects/black-hole-binaries/` — gravitational-wave astrophysics project
- `/projects/scientific-ml/` — ML in scientific pipelines, scientific validity, and HPC bottlenecks

The home page contains the introduction and research themes, with Projects available in the main navigation. Research project cards and the scientific ML essay are listed together on `/projects/`.

## Publish on GitHub Pages

The Pages address follows the repository owner's current GitHub username. For the `annkasch` account, create a public repository named `annkasch.github.io` to publish at `https://annkasch.github.io/`. A repository with another name, such as `portfolio`, publishes at `https://annkasch.github.io/portfolio/`.

Copy the contents of this folder into the repository root (so `index.html` is directly at the top level). In GitHub, open **Settings → Pages** and choose **Deploy from a branch**, branch `main`, folder `/(root)`.

The address `https://aschuetz.github.io/` is the user-site address for an account named `aschuetz`; a repository created under `annkasch` cannot claim that address just by using `aschuetz.github.io` as its repository name.

Both project pages are self-contained folders with their own CSS and scripts. The portfolio home, About, and Projects pages share the root `style.css`.

The scientific ML essay, “The hidden work behind AI for science,” opens by comparing common product ML workflows with scientific ML across data origin, sample structure, success criteria, and computing cost. Climate, materials, astronomy, and particle physics provide examples; CERN’s data comparison from slide 20 illustrates one facility’s scale. The essay then explains four I/O mechanisms: streaming TB–PB datasets, hierarchical/chunked access, small-file metadata pressure, and correlated sampling. It continues through data generation, simulation-state memory, CPU preparation, collective communication, GPU memory, and scientific validation. It extends the shared stylesheet with its own styles, a cubic grid-memory explorer, and a small Amdahl’s-law explorer, with no external dependencies. The article, default memory calculation, and a worked timing example remain readable without JavaScript. All page assets are local; external further-reading links require a network connection. The essay is adapted from the supplied ML workflow slides (19–24), with expanded discussion and links to NERSC, PyTorch, and simulation-based inference references. The source PDF is not bundled with the public page. All memory, allocation, and timing examples are explicitly illustrative and are not NERSC benchmarks; the stellar-population scenario is conceptual rather than a claim about measured research results.

The local asset `projects/scientific-ml/assets/cern-data-comparison-sqream-2022.png` is the original 1024 × 538 RGB image embedded in slide 20 (PDF image object 16), credited by the presentation to SQREAM (2022); its logo and full graphic are preserved. The caption treats it as a historical comparison, not a verified current ranking or a measure of retained ML data. The separate one-exabyte cumulative archive fact cites CERN’s 17 December 2025 announcement. The four-stage batch path and all prose diagrams are HTML/CSS, not additional measured results.
