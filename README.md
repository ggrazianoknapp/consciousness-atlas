# Consciousness Atlas

A mobile-first map of the theories of consciousness discussed in

> Schneider, S., Sahner, D., Kuhn, R. L., Bailey, M., & Schwitzgebel, E. (2025). *Is AI Conscious? A Primer on the Myths and Confusions Driving the Debate.* White Paper, Center for the Future of AI, Mind and Society, Florida Atlantic University. Version 1.0.

Live site: https://ggrazianoknapp.github.io/consciousness-atlas/

## What it shows

- **Map** — each theory placed on a grid: rows are the theory's verdict on AI consciousness as the paper reports it (yes in principle / it depends / no / paper silent); columns are its view of reality (physicalist monism / non-physicalist monism / dualism / mechanism-level theories that are metaphysically neutral).
- **Taxonomy** — the paper's own tree: monism → physicalist vs non-physicalist; dualism; plus the mechanism-level theories.
- **Distinctions** — Section II of the paper: the conceptual confusions (functional vs phenomenal consciousness, sentience vs sapience, SCAIs, etc.).
- Tap any theory for a card with the view, its stated implications for AI, named proponents, and caveats.

Everything is paraphrased from the paper. Where the paper names a theory but does not say what it implies for AI, the card says so.

## Structure

- `index.html` — the whole site (markup, styles, script).
- `data.js` — the theories and distinctions as plain JS objects. Edit this to add or correct an entry.

No build step. Open `index.html` locally or serve the folder.

## Deep links

`#t/<id>` opens a theory directly, e.g. `#t/panpsychism`. `#tree`, `#distinctions`, `#about` open those views.
