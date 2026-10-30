# Consciousness Atlas

A mobile-first map of theories of consciousness and what each implies for AI, drawn from six sources:

- Schneider, Sahner, Kuhn, Bailey & Schwitzgebel (2025), *Is AI Conscious? A Primer on the Myths and Confusions Driving the Debate* (FAU white paper)
- Saad & Mogensen (forthcoming, *Philosophy Compass*), *Digital Minds: Issues in the Philosophy of Mind and Cognitive Science*
- Seth (2026), *The Mythology of Conscious AI* (Noema)
- Butlin, Long et al. (2023), *Consciousness in Artificial Intelligence: Insights from the Science of Consciousness* (arXiv:2308.08708)
- Cambridge Digital Minds, Unit 2 Glossary
- Schiavo (2025), *Consciousness in AI explained, part 1: Global Workspace Theory* (Substack / Asterisk)

Live site: https://ggrazianoknapp.github.io/consciousness-atlas/

## What it shows

- **Map** — each theory on a grid: rows are the theory's verdict on AI consciousness as the sources report it (yes in principle / it depends / no / not stated); columns are its view of reality (physicalist monism / non-physicalist monism / dualism / mechanism-level & cross-cutting). Filter by source to see which theories each text covers.
- **Taxonomy** — monism → physicalist vs non-physicalist; dualism; mechanism-level theories.
- **Distinctions** — the concepts, methods and traps (functional vs phenomenal, gaming problem, within-between problem, indicator properties, simulation ≠ instantiation…), tagged by source.
- Tap any theory for a card with a neutral summary, then each source's own take and what it implies for AI.

Everything is paraphrased. Where a source names a theory but does not say what it implies for AI, the card says so.

## Structure

- `index.html` — the whole site (markup, styles, script).
- `data.js` — sources, theories (with per-source `takes`) and distinctions as plain JS objects. Edit this to add a source, a theory, or a correction.

No build step. Open `index.html` locally or serve the folder.

## Deep links

`#t/<id>` opens a theory directly, e.g. `#t/panpsychism`. `#tree`, `#distinctions`, `#about` open those views.
