// Theories of consciousness as presented in:
// Schneider, Sahner, Kuhn, Bailey & Schwitzgebel (2025), "Is AI Conscious? A Primer on the
// Myths and Confusions Driving the Debate", white paper, Center for the Future of AI, Mind and
// Society (FAU). Version 1.0. All characterisations below paraphrase that paper; where the paper
// does not say what a view implies for AI, the entry says so rather than guessing.

const REALITY = {
  phys:    { key: "phys",    label: "Physicalist monism",     short: "Physicalist",  desc: "One fundamental ingredient, and it is physical. Mental states fully depend on physical states." },
  nonphys: { key: "nonphys", label: "Non-physicalist monism", short: "Non-physicalist", desc: "One fundamental ingredient, but it is mental, experiential, or information-like rather than physical." },
  dual:    { key: "dual",    label: "Dualism",                short: "Dualist",      desc: "Two fundamental ingredients: the physical and something non-physical." },
  neutral: { key: "neutral", label: "Mechanism-level (metaphysically neutral)", short: "Neutral", desc: "Scientific theories about which processes go with consciousness. They are mostly silent on what reality is made of, so the paper discusses them outside its monism/dualism tree." }
};

const VERDICT = {
  no:      { key: "no",      label: "No — not in a non-biological system (or not at all)", short: "No", color: "var(--v-no)" },
  depends: { key: "depends", label: "It depends", short: "It depends", color: "var(--v-depends)" },
  yes:     { key: "yes",     label: "Yes, in principle", short: "Yes, in principle", color: "var(--v-yes)" },
  silent:  { key: "silent",  label: "The paper does not say", short: "Paper silent", color: "var(--v-silent)" }
};

const THEORIES = [
  // ───────────── Physicalist monism ─────────────
  {
    id: "physicalism",
    name: "Physicalism (generic)",
    reality: "phys", verdict: "depends",
    buildable: "unclear",
    tree: ["Monism", "Physicalist monism"],
    summary: "Consciousness is entirely physical. Mental states fully depend on physical states. The influential neuroscience version says consciousness is a phenomenon of brains and nervous systems.",
    ai: "Mixed. Some versions (biological naturalism) reject AI consciousness. Many physicalists have not weighed in: conscious AI may be conceivable, but it is unclear whether the laws of nature allow it to be built, or whether humans will find the techniques. Transhumanist physicalists are more optimistic. Some insist on embodiment, or say today's systems are nowhere near brain-like enough.",
    proponents: ["Many; 'materialism' is an older name some physicalists reject"],
    notes: "The paper treats this as the parent of computational functionalism, informational theories, biological naturalism, eliminativism, weak emergentism and (loosely) mysterianism.",
    section: "III"
  },
  {
    id: "comp-functionalism",
    name: "Computational functionalism",
    reality: "phys", verdict: "yes",
    buildable: "skeptical-in-practice",
    tree: ["Monism", "Physicalist monism"],
    summary: "Computational organisation is what matters for having a mind. Mental states are fixed by the computational role they play in the larger system, where the computation is digital.",
    ai: "Those who also hold functionalism as a basis for consciousness tend to support AI consciousness in principle, though they may doubt it could actually be built. The paper warns that functionalism's general popularity does not transfer to functionalism about consciousness: Fodor stayed non-committal, Kim rejected it for consciousness, Block raised influential objections (access vs phenomenal consciousness).",
    proponents: ["Putnam (1967)", "Schneider (2011)", "Kim (2005)", "Block (1978) — critic"],
    notes: "The paper splits 'functionalism as a basis for consciousness' into (1) weak computational functionalism — the processes behind consciousness can be mimicked in machines — and (2) the much more controversial claim that phenomenal consciousness is achieved that way. Footnote: digital computation may be insufficient; the brain uses both digital and analog computation.",
    section: "II, III"
  },
  {
    id: "informational",
    name: "Informational theories (incl. IIT, simulation theory)",
    reality: "phys", verdict: "yes",
    buildable: "skeptical-in-practice",
    tree: ["Monism", "Physicalist monism"],
    summary: "Information is reality's basic ingredient, more fundamental than matter, energy or spacetime, and consciousness is informational. Integrated Information Theory (IIT) is one example; the view that we are all in a computer simulation is another.",
    ai: "In principle possible, but it depends on the version. Tononi et al. (2016) stressed that feedforward systems and systems running on GPUs are not conscious. If we are in a simulation, we are ourselves conscious AIs — but it does not follow that everything in a simulation is conscious; that could require a certain level of complexity, so LLMs may not qualify.",
    proponents: ["Tononi, Boly, Massimini & Koch (2016)", "Tononi & Koch (2014, 2015)"],
    notes: "The paper places this under physicalist monism while noting information is treated as more fundamental than matter — it sits near the border with non-physicalist monism.",
    section: "III"
  },
  {
    id: "bio-naturalism",
    name: "Biological naturalism",
    reality: "phys", verdict: "no",
    buildable: "only-if-biological",
    tree: ["Monism", "Physicalist monism"],
    summary: "Consciousness is an intrinsically biological phenomenon and cannot be developed in a non-biological substrate.",
    ai: "Deeply skeptical of AI consciousness. A biological yet artificial form of consciousness might still be created (e.g. organoid-based or synthetic biological brains). Biological naturalists may grant that bio-computers have some consciousness, at least in the biological component.",
    proponents: ["Searle (1980, 2017)", "Seth (2021)"],
    notes: "One of the two 'important exceptions' the paper names to the general neutrality of theories about AI: biological naturalists reject it, computational functionalists are optimistic.",
    section: "II, III"
  },
  {
    id: "eliminativism",
    name: "Eliminativism / Illusionism",
    reality: "phys", verdict: "no",
    buildable: "n/a",
    tree: ["Monism", "Physicalist monism"],
    summary: "Traditional eliminativists claimed mental states, including consciousness, do not really exist, because our categories fail to match natural phenomena. Dennett argued nothing meets a precise definition of 'qualia'. Illusionism is the version that says consciousness is an illusion.",
    ai: "Since consciousness does not exist, AI consciousness is not possible — in the same sense that it is not possible for anything.",
    proponents: ["P. S. Churchland (1986)", "Dennett, 'Quining Qualia'", "Frankish (2016)"],
    notes: "Kuhn's landscape lists eliminative/illusionist views as one of twelve subcategories of materialism.",
    section: "III"
  },
  {
    id: "weak-emergentism",
    name: "Weak physical emergentism",
    reality: "phys", verdict: "yes",
    buildable: "needs-right-complexity",
    tree: ["Monism", "Physicalist monism"],
    summary: "Consciousness is a higher-level property that supervenes on underlying physical processes, the way weather emerges from molecules or flocking from individual birds. No ingredient beyond physical complexity is needed, though the scale and type of complexity required are unknown.",
    ai: "Possible in principle, but only if artificial systems replicate the right kinds of organisational complexity that underlie experience in humans and animals. The paper calls this a naturalistic path to AI consciousness that needs no dualism.",
    proponents: ["Chalmers (2008/2011) on strong vs weak emergence"],
    notes: "",
    section: "III"
  },
  {
    id: "mysterianism",
    name: "Mysterianism",
    reality: "phys", verdict: "no",
    buildable: "maybe-by-reverse-engineering",
    tree: ["Monism", "Physicalist monism"],
    summary: "The human brain is unable to understand the nature of consciousness, largely because our cognitive abilities were shaped by our evolutionary history as hunter-gatherers.",
    ai: "Hard to see how humans could create conscious entities if they cannot understand consciousness. Perhaps they could reverse-engineer it by building biologically based AI while staying perplexed about the mechanism.",
    proponents: ["McGinn (1989)"],
    notes: "The paper notes a mysterian could instead be agnostic about physicalism, holding that even physicalism's truth is beyond us. It files the view under physicalist monism for simplicity.",
    section: "III"
  },

  // ───────────── Non-physicalist monism ─────────────
  {
    id: "idealism",
    name: "Idealism",
    reality: "nonphys", verdict: "yes",
    buildable: "unclear",
    tree: ["Monism", "Non-physicalist monism"],
    summary: "Mental phenomena are the sole ingredient of reality; everything that seems physical is ultimately made of non-physical ingredients.",
    ai: "In principle, yes. If reality just consists of conscious experience, perhaps AIs can be built that reach the level of complexity of macroconscious systems.",
    proponents: ["Pearce & Goldschmidt (2018)"],
    notes: "",
    section: "III"
  },
  {
    id: "panpsychism",
    name: "Panpsychism",
    reality: "nonphys", verdict: "yes",
    buildable: "unclear",
    tree: ["Monism", "Non-physicalist monism"],
    summary: "Fundamental physics has phenomenal properties; mentality is a basic ingredient of the universe. Everything has at least a small level of experience (microconsciousness); brains have a more complex form (macroconsciousness).",
    ai: "In principle, yes, but unclear whether it could be built. The combination problem looms: how could technology harness micro-experiences into unified macro-minds? The paper separately warns against the myth that panpsychism entails AI consciousness — GPT could be conscious in a basic panpsychist sense while attributing macroconsciousness to it would be a major error.",
    proponents: ["Strawson (2017) — a physicalist variant", "Chalmers (2013) — panprotopsychism"],
    notes: "Three caveats in the paper: Strawson's panpsychism counts itself physicalist; some dualist views make only some particles experiential; panprotopsychism posits quasi-experiential ingredients.",
    section: "II, III"
  },
  {
    id: "quantum",
    name: "Quantum theories of consciousness",
    reality: "nonphys", verdict: "yes",
    buildable: "quantum-hardware",
    tree: ["Monism", "Non-physicalist monism"],
    summary: "Quantum phenomena play a necessary, perhaps sufficient, role in consciousness beyond their generic role in all matter — via microtubules, or via patterns of decoherence toward 'basins of attraction' that affect mental states directly.",
    ai: "In principle, yes. If quantum features are constitutive of consciousness, quantum computers could make this the lead category for AI consciousness; perhaps even some of today's non-quantum computers have quantum properties that enable it.",
    proponents: ["Hameroff (2022)", "Schneider & Bailey (2025) — 'superpsychism'", "Beck & Eccles (1992)"],
    notes: "These views can be physicalist or non-physicalist. The paper files them under non-physicalist monism because both Hameroff and superpsychism appeal to panpsychism.",
    section: "III"
  },

  // ───────────── Dualism ─────────────
  {
    id: "substance-dualism",
    name: "Substance dualism",
    reality: "dual", verdict: "depends",
    buildable: "unclear",
    tree: ["Dualism"],
    summary: "Reality consists of two radically distinct substances: the physical realm and a separate non-physical substance. 'Emergent dualisms' hold that physical phenomena ground emergent substances, with psychophysical laws generating consciousness from certain kinds of complexity.",
    ai: "It depends. A radically separate non-physical substance may seem to bar AI consciousness, unless the AI is itself correlated with a non-physical substance the way the body/brain is. Even theistic substance dualism need not deny that science could build a conscious substrate — a soul might correlate with it.",
    proponents: ["Descartes (1641)", "Lowe (1992) — emergent dualism", "Foerst (2004) — theistic view"],
    notes: "",
    section: "III"
  },
  {
    id: "property-dualism",
    name: "Property dualism",
    reality: "dual", verdict: "depends",
    buildable: "unclear",
    tree: ["Dualism"],
    summary: "All substances are physical, but reality contains both physical and non-physical features. Consciousness is a fundamental non-physical feature alongside physical properties. Emergent property dualism: consciousness is an emergent higher-level property instantiated by physical substances.",
    ai: "It depends. Amenable to AI consciousness insofar as non-physical consciousness properties can be instantiated by artificial systems.",
    proponents: ["Chalmers (1996/1998)"],
    notes: "",
    section: "III"
  },

  // ───────────── Mechanism-level theories mentioned elsewhere in the paper ─────────────
  {
    id: "gwt",
    name: "Global Workspace Theory",
    reality: "neutral", verdict: "depends",
    buildable: "functional-version-exists",
    tree: ["Mechanism-level theories"],
    summary: "Consciousness is correlated with an integrative, serial and slow central workspace where attention and working memory are focused for deliberative reasoning, broad searches and all-things-considered judgements.",
    ai: "Some AI models are deliberately built to emulate a global workspace (Bengio 2017; Blum & Blum 2022; Juliani et al. 2022). But the paper asks why an advanced AI would need a slow serial workspace at all, and whether a workspace would correlate with consciousness in a non-biological system — perhaps the biological implementation matters (Schneider 2019). Does not require self-consciousness.",
    proponents: ["Baars (2008)", "Dehaene (2014)", "Shanahan & Baars (2005)"],
    notes: "Used in the paper mainly to illustrate the intelligence-vs-consciousness distinction and the FC/PC distinction.",
    section: "II"
  },
  {
    id: "hot",
    name: "Higher-Order theories",
    reality: "neutral", verdict: "silent",
    buildable: "n/a",
    tree: ["Mechanism-level theories"],
    summary: "Consciousness always involves representation of one's own mental states. These theories distinguish explicit, thematised self-consciousness from an implicit, ongoing background awareness of one's own states.",
    ai: "The paper names HOT as a competitor to GWT and IIT but does not state what it implies for AI.",
    proponents: ["Rosenthal (2005)", "Brown (2025)"],
    notes: "Discussed in the consciousness-vs-self-consciousness section.",
    section: "II"
  },
  {
    id: "self-rep",
    name: "Self-representational / peripheral self-awareness views",
    reality: "neutral", verdict: "silent",
    buildable: "n/a",
    tree: ["Mechanism-level theories"],
    summary: "Conscious experience always entails at least peripheral awareness of oneself as undergoing that experience.",
    ai: "Not addressed for AI in the paper.",
    proponents: ["Brentano (1874/1973)", "Kriegel (2009)"],
    notes: "",
    section: "II"
  },
  {
    id: "minimal-self",
    name: "Minimal-self theories of animal consciousness",
    reality: "neutral", verdict: "silent",
    buildable: "n/a",
    tree: ["Mechanism-level theories"],
    summary: "Many insects have conscious experiences, and consciousness may require a minimal self: the ability to distinguish one's own body from the environment.",
    ai: "Not addressed for AI in the paper.",
    proponents: ["Merker (2007)", "Ginsburg & Jablonka (2019)"],
    notes: "",
    section: "II"
  },
  {
    id: "local-recurrence",
    name: "Local Recurrence Theory",
    reality: "neutral", verdict: "silent",
    buildable: "n/a",
    tree: ["Mechanism-level theories"],
    summary: "Consciousness goes with recurrent (feedback) processing in sensory areas; it does not appear to require self-consciousness even in a minimal sense.",
    ai: "Not addressed for AI in the paper.",
    proponents: ["Lamme (2010)"],
    notes: "",
    section: "II"
  },
  {
    id: "embodied-enactive",
    name: "Embodied & enactive theories",
    reality: "neutral", verdict: "no",
    buildable: "only-if-living",
    tree: ["Mechanism-level theories"],
    summary: "Consciousness is bound up with life, the body and its interaction with the environment. Sensory modalities and bodily engagement supply the content of experience — it is hard to feel a knot in your stomach without a stomach.",
    ai: "These theories often privilege life and environmental interaction, so some theorists say being a form of life is a prerequisite for AI consciousness. The paper adds that it is not obvious why reproduction, metabolism or self-maintenance should be required.",
    proponents: ["Thompson (2007)", "Merleau-Ponty (via Zebrowski 2010)", "O'Regan & Noë (2001)"],
    notes: "",
    section: "I, II"
  },
  {
    id: "extended-mind",
    name: "Extended mind",
    reality: "neutral", verdict: "silent",
    buildable: "n/a",
    tree: ["Mechanism-level theories"],
    summary: "Mind, and perhaps consciousness, can extend beyond the biological brain and nervous system.",
    ai: "Mentioned only as one of the open disagreements about where consciousness can be located.",
    proponents: ["Clark & Chalmers (1998)", "Kuhn (2024)"],
    notes: "",
    section: "I"
  }
];

// Conceptual distinctions from Section II — the "myths and confusions" the paper is about.
const DISTINCTIONS = [
  { title: "Intelligence vs consciousness", body: "An AI could be highly intelligent — perceiving, learning, reasoning — and still be an AI zombie. Neuroscientists generally agree intelligence can run without consciousness (blindsight, implicit learning)." },
  { title: "Sentience vs sapience", body: "Sentience: the capacity for subjective, often valenced, experience. Sapience: higher cognition (reasoning, planning). They co-occur in humans but can come apart; a sapient AI might have no sentience, and a simple system might have worm-like sentience without sapience." },
  { title: "Functional (FC) vs phenomenal (PC) consciousness", body: "FC is what consciousness does — working memory, attention, reportability, decision-making. PC is the felt quality. Conflating them risks admitting AI zombies as conscious. FC may be neither necessary nor sufficient for PC." },
  { title: "Features of functional consciousness (FFC)", body: "Having one or a few consciousness-like computational features, or producing convincing talk about feelings. LLMs already show FFC. Because they are trained on human data, their consciousness reports are not evidence for or against PC." },
  { title: "Seemingly conscious AIs (SCAIs)", body: "AIs that behave as if conscious but lack PC. The authors suspect today's LLMs are zombies of this kind, but reject the claim that the question is not worth discussing. Birch's 'centrism': take both misattribution and genuinely alien AI consciousness seriously." },
  { title: "Computational functionalism ≠ functionalism about consciousness", body: "Functionalism's popularity among cognitive scientists does not extend to the claim that phenomenal consciousness is achieved computationally. Leading functionalists (Fodor, Kim, Block) declined to make that step." },
  { title: "AI agency vs philosophical agency", body: "'Agential' in AI safety means acting autonomously without oversight. It does not entail beliefs, desires, free will or intentional action. Claims that AI agency grounds intrinsic moral value may rest on this conflation." },
  { title: "Consciousness vs self-consciousness", body: "PC is there being something it is like to be you; self-consciousness is awareness of yourself as a self. Some theories (HOT, Brentano/Kriegel) link them; others (GWT, Local Recurrence) do not require any self-awareness." },
  { title: "Life vs consciousness", body: "On NASA's definition (a self-sustaining chemical system capable of Darwinian evolution), AI is not alive. Life and consciousness are conceptually distinct — a brain emulation could be conscious without being alive — though some theories make life a prerequisite." },
  { title: "Panpsychism does not entail AI consciousness", body: "Panpsychism grants microconsciousness to everything. The AI question is about macroconsciousness. GPT might be conscious in the basic panpsychist sense; attributing macroconsciousness to it could be a major error." },
  { title: "The human benchmark problem", body: "Science has not settled how consciousness arises even in humans, so the human case is an incomplete and possibly misleading benchmark for AI. We risk both over-attribution (anthropomorphism) and under-attribution (missing alien forms)." },
  { title: "Case-by-case analysis", body: "A 'yes' to the problem of AI consciousness does not mean all AIs are conscious. Chatbots, organoid-based bio-computers, neuromorphic chips and brain emulations are different cases and may need different tests." }
];
