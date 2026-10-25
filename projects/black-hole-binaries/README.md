# Digging in spacetime

Open `index.html` in a browser. This is an unpublished, standalone website draft for Ann-Kathrin Schuetz. No build step, server, external fonts, or libraries are required. The Hubble and detector photographs, article, equations, stellar-binary video, waveform audio, and linked research PDFs are local and work offline. The black-hole merger video and its preview stream remotely and require internet access, as do external source links.

## Current design

The page opens with a full-width Hubble photograph of R136 and the Tarantula Nebula, with the title and field name overlaid on the desktop cover. On small screens the photograph leads into the title on a dark background, preserving space for the cluster. A visible caption provides the NASA credit and source.

The original gravitational-wave paleontology and dinosaur/fossil introduction follows the cover. The body uses a continuous reading column on a warm background, headings above the prose, and a sticky text contents rail on desktop. This replaces the earlier two-column chapter headings, boxed media panels, timescale dashboard, and process cards. The orbiting-star video is restored beside the first chapter’s heading on desktop and stacked below it on smaller screens. The GW150914 model waveform and audio are restored in “Reading the remnants,” using the paper palette without boxed media panels. The earlier black-hole merger video is restored before the waveform/audio. The LIGO–Virgo explanation follows “Listen to the chirp.” The user-supplied stellar-evolution illustration has been removed; the massive-star prose again uses the full reading column. The earlier COMPAS schematic, dashboard, and research plots remain absent.

The five short chapters keep massive stars as the scientific subject: their influence, their remnants, forward population models, the physics simulated by COMPAS, and faster predictions with RESOLVE. Both native MathML equations and their definitions are preserved verbatim from the preceding draft. RESOLVE predicts formation efficiency, rather than full trajectories or merger-property and delay distributions. The post-forward-model discussion remains compact.

## Hubble photograph

- Source: [NASA, Star Cluster R136](https://science.nasa.gov/asset/hubble/star-cluster-r136-2/), released March 17, 2016.
- Credit: **NASA, ESA, and P. Crowther (University of Sheffield)**.
- The photograph shows R136 in the Tarantula Nebula, Large Magellanic Cloud. R136 is a cluster containing some of the most massive known stars, including R136a1. The page does not identify a particular visible point as R136a1.
- `assets/r136-hubble.jpg`: original NASA 2420 × 2400 JPEG.
- `assets/r136-hubble-web.jpg`: locally resized to 2000 × 1983, JPEG quality 80, approximately 1.3 MB. Used by the page. Responsive cropping and a dark gradient support the title; the photograph itself is not retouched.

## Physics references and scope

- [NASA, Stars](https://science.nasa.gov/universe/stars/): accessible background on stellar evolution and the short lifetimes of massive stars.
- [Kroupa (2001)](https://doi.org/10.1046/j.1365-8711.2001.04022.x), with the [Kroupa (2002) review](https://www.ucolick.org/~woosley/ay220-15/papers/kroupa.pdf): stellar birth-mass distributions. The opening avoids treating a massive-star fraction as universal.
- [Kobayashi, Karakas & Lugaro (2020), The Origin of Elements from Carbon to Uranium](https://doi.org/10.3847/1538-4357/abae65): context for the origin of oxygen in massive stars. The abstract and an author-institution summary were reviewed; the full paper was not reviewed for this revision.
- [Abbott et al. (2016), Observation of Gravitational Waves from a Binary Black Hole Merger](https://doi.org/10.1103/PhysRevLett.116.061102): the chirp, component-mass information, and cosmological redshift. The discovery paper was read through its [arXiv PDF](https://arxiv.org/pdf/1602.03837), particularly page 3 (zero-indexed page 2). The source/detector-frame distinction is explicit.
- [Peters (1964), Gravitational Radiation and the Motion of Two Point Masses](https://doi.org/10.1103/PhysRev.136.B1224): leading circular-orbit inspiral time. This is an approximation for point masses evolving by gravitational radiation, not a waveform model for the strong-field merger. The general eccentric formulation was cross-checked in Section IV.4 of the COMPAS methods paper.
- [Team COMPAS: Riley et al. (2022), Rapid Stellar and Binary Population Synthesis with COMPAS](https://doi.org/10.3847/1538-4365/ac416c), [accessible preprint](https://arxiv.org/html/2109.10352v2): wind prescriptions, common-envelope evolution, gravitational radiation, mass normalization, and cosmic integration (Sections III.5, IV.2.4, IV.4, VI.3–VI.4).
- [Mandel & Broekgaarden (2022), Rates of compact object coalescences](https://doi.org/10.1007/s41114-021-00034-3): physical context for population predictions, cosmic merger rates, and observational selection.
- [Boesky, Broekgaarden & Berger (2024), The Binary Black Hole Merger Rate Deviates from the Cosmic Star Formation Rate: A Tug of War between Metallicity and Delay Times](https://doi.org/10.3847/1538-4357/ad7fe4), [accessible preprint](https://arxiv.org/html/2405.01623v1): the earlier study requested by the user. Its methods, metallicity and delay-time results, and caveats were read through the arXiv HTML. The published abstract was cross-checked through the NSF repository's indexed record; the publisher PDF and full NSF PDF could not be retrieved in this environment. No paper figure is displayed. Exact enhancement factors are omitted. Qualitative results are presented as conditional predictions of isolated-binary models.
- [Boesky, Broekgaarden & Berger (2024), Investigating the Cosmological Rate of Compact Object Mergers from Isolated Massive Binary Stars](https://doi.org/10.3847/1538-4357/ad7fe3), [accessible preprint](https://arxiv.org/html/2405.01630v1): companion population dataset, initial populations, variations in binary prescriptions, and cosmic-integration workflow.

The visible cosmic-rate equation is a mass-integrated convolution over birth metallicity and delay. ψ gives the stellar mass formed per comoving volume, time, and metallicity; η is the yield of mergers per represented total stellar mass; p_d is a normalized delay-time density. The initial population distributions and stellar-physics parameters are specified for each model. Detector selection and cosmological time dilation enter comparison with detections. The page does not claim that RESOLVE currently supplies the full mass-and-delay-dependent population.

Both retained equations use native MathML with descriptive accessibility labels and horizontal scroll containment on small screens. The inspiral and worked-example calculations from earlier revisions are archived in the backups.

## Archived stellar-evolution illustrations

The user-supplied stellar-evolution image and its caption have been removed from the page, along with the illustration-specific source note. The prose fills the reading column again. All supplied originals and previous adaptations remain in `assets/` as archival files. The website’s cream background and other media are unchanged. The previous draft is backed up in `../output/black-hole-outreach-website-v23-before-removing-illustration.zip`.

## LIGO and Virgo

A compact illustrated explanation in “Reading the remnants” introduces LIGO’s Hanford/Livingston sites and 4-km arms, Virgo’s site near Pisa and 3-km arms, laser interferometry, and the role of a geographically separated network. It follows the model waveform/audio, before the transition to population studies.

Sources: [Virgo’s detector explanation](https://www.virgo-gw.eu/science/detector/), [the LIGO–Virgo GW170814 science summary](https://ligo.org/science-summaries/gw170814/), and [LIGO’s Hanford image caption](https://www.ligo.caltech.edu/image/ligo20150731f).

`assets/ligo-hanford.jpg` is LIGO’s 1500 × 1000 aerial photograph (image ID `ligo20150731f`, May 2, 2008), downloaded from the official image page and JPEG-recompressed at quality 80 without cropping or retouching. Credit: **Caltech/MIT/LIGO Lab**. [LIGO’s image-use policy](https://www.ligo.caltech.edu/page/image-use-policy) permits reuse with credit unless otherwise noted. The live policy page returned a server error; the indexed official policy text was reviewed. The image is local and loads lazily.

The user-selected [LIGO interferometer animation](https://youtu.be/tQ_teIUb3tE) is added below this explanation. Served over HTTP(S), it uses a responsive, lazy-loaded YouTube privacy-enhanced embed with no autoplay. Direct `file:` previews and browsers without JavaScript show a clickable YouTube thumbnail instead, avoiding YouTube’s missing-HTTP-referrer restrictions on local files. A visible YouTube link remains available in all cases. The video and thumbnail require internet access. The clip is hosted by YouTube and is not downloaded or re-licensed. The linked video page did not expose its metadata to the web tool; no unverified creator name or exact video title is asserted. External-player controls are independent of the native video/audio pause behavior.

## Black-hole merger video

The sequence in “Reading the remnants” is now: introductory prose → merger visualization → “Listen to the chirp” and audio → LIGO and Virgo → transition to population studies.

The restored [Two Black Holes Merge into One](https://www.youtube.com/watch?v=I_88S8DWbcU) visualization is credited to SXS / LIGO Lab Caltech–MIT and streamed unchanged from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Two_Black_Holes_Merge_into_One.webm), under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). The remote poster is a resized frame from the same work. It visualizes a numerical-relativity calculation consistent with GW150914, including gravitational lensing of background stars, and is slowed by approximately a factor of 100. It is not telescope footage. Video and audio have independent timing and do not autoplay; starting one pauses the others. The caption includes a YouTube alternative and states the internet requirement.

## Restored media

- `assets/massive-binary-stars.mp4` and its PNG poster are unchanged from the preceding drafts: an 11.85-second silent illustration of two massive stars orbiting, transcoded from the supplied Berkeley Keynote. It does not show a complete evolutionary history or establish that the orbit is shrinking. The original creator/reuse license of the embedded talk clip has not yet been identified. This remains an unpublished draft.
- The waveform SVG preserves all 3,440 samples of the [GWOSC Figure 2 numerical-relativity model projected onto LIGO Hanford](https://gwosc.org/GW150914data/P150914/fig2-unfiltered-waveform-H.txt), under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The curve is a model consistent with GW150914, rather than measured detector strain. The axis uses elapsed time from the first sample and strain in units of 10⁻²¹.
- `assets/gw150914-model-original.wav` and `assets/gw150914-model-shifted.wav` are the existing 16-bit mono files at 16,384 Hz. Each contains three 3,440-sample chirps with 2,458 leading silent samples and 9,011 silent samples after each chirp, totalling 2.429871 seconds. Each chirp is normalized to 0.65 peak amplitude and faded over its first/last 80 samples. The raised-frequency option translates frequencies upward by 400 Hz, preserving duration; see [GWOSC’s explanation](https://gwosc.org/audio/).
- The original waveform data JS remains a provenance asset and is not executed. The SVG, video, and audio bytes are unchanged from version 14. The waveform is recolored through CSS to fit the current design.
- Native video/audio controls work without JavaScript. JavaScript reveals the frequency selector, synchronizes a cursor with the audio repeats, and pauses other media when one starts. Reduced-motion preferences disable the cursor. Nothing autoplays. Without JavaScript, the raised-frequency audio plays and a direct original-frequency link remains available.

## Sources and archival assets

`assets/resolve-paper.pdf` and `assets/berkeley-talk.pdf` are the supplied preprint and Berkeley AstroChat talk. The footer also links to the user's suggested *Cosmic Fossils* podcast and Floor Broekgaarden's presentation. The latter presentation's contents were unavailable through the earlier tools; the page does not claim to reproduce it. Detailed provenance for media from earlier drafts is preserved in the README inside the version-14 backup. The selected star clip, waveform/audio, and remote merger visualization are displayed again; other archived media remain unused.

## Implementation and verification

`script.js` updates reading progress and enhances the restored media controls. All content, navigation, equations, and native media controls remain available without JavaScript. CSS includes mobile layouts, keyboard focus, reduced-motion, and print styles.

Static checks validate HTML and MathML nesting, MathML operator arity, unique IDs, links and local resources, accessible image and equation descriptions, five narrative chapters, exact restoration of the waveform and local media, unchanged science paragraphs and equations, compact ending, retained assets, JavaScript syntax and media events, WAV durations, and ZIP integrity. Browser visual inspection is unavailable because the browser URL policy blocks local previews; responsive rendering and MathML appearance have not been visually confirmed.

The draft before replacing the edited portrait diagram is backed up in `../output/black-hole-outreach-website-v22-before-replacement-illustration.zip`. The original cream design before background matching is backed up in `../output/black-hole-outreach-website-v20-before-background-match.zip`; the intervening dark website is retained in `../output/black-hole-outreach-website-v21-dark-background.zip`. The version before adding this illustration is backed up in `../output/black-hole-outreach-website-v19-before-stellar-illustration.zip`. The version before adding the LIGO video is backed up in `../output/black-hole-outreach-website-v18-before-ligo-video.zip`. The draft before moving the detectors and restoring the merger video is backed up in `../output/black-hole-outreach-website-v17-before-merger-and-reorder.zip`. The draft before adding the detectors is backed up in `../output/black-hole-outreach-website-v16-before-detectors.zip`. The current package is `../output/black-hole-outreach-website.zip`. The photo-led version approved by the user is preserved in `../output/black-hole-outreach-website-v15-r136-photo-led.zip`. The version before the redesign is preserved in `../output/black-hole-outreach-website-v14-before-r136-redesign.zip`; earlier backups remain in `../output`. The site has not been published.
