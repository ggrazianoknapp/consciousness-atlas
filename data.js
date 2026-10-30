// Consciousness Atlas — data
// Every characterisation below paraphrases one of the five sources listed in SOURCES. Where a
// source names a theory but does not say what it implies for AI, the entry says so.

const SOURCES = {
  fau:    { key:"fau",    short:"FAU",    label:"Schneider, Sahner, Kuhn, Bailey & Schwitzgebel (2025)", title:"Is AI Conscious? A Primer on the Myths and Confusions Driving the Debate", kind:"White paper, Center for the Future of AI, Mind and Society, FAU. v1.0." },
  saad:   { key:"saad",   short:"S&M",    label:"Saad & Mogensen (forthcoming)", title:"Digital Minds: Issues in the Philosophy of Mind and Cognitive Science", kind:"Philosophy Compass." },
  seth:   { key:"seth",   short:"Seth",   label:"Seth (2026)", title:"The Mythology of Conscious AI", kind:"Noema Magazine; 2025 Berggruen Prize essay." },
  butlin: { key:"butlin", short:"Butlin", label:"Butlin, Long et al. (2023)", title:"Consciousness in Artificial Intelligence: Insights from the Science of Consciousness", kind:"Report, arXiv:2308.08708." },
  cdm:    { key:"cdm",    short:"CDM",    label:"Cambridge Digital Minds", title:"Unit 2 Glossary", kind:"Course glossary (CC BY-NC-ND)." },
  schiavo:{ key:"schiavo",short:"Schiavo",label:"Schiavo (2025)", title:"Mental (State) Breakdown: Consciousness in AI explained, part 1 — Global Workspace Theory", kind:"Substack, guest post for Asterisk Magazine. Eleos AI Research.", url:"https://larissaschiavo.substack.com/p/consciousness-in-ai-explained-global" }
};
const SOURCE_ORDER = ["fau","saad","seth","butlin","cdm","schiavo"];

const REALITY = {
  phys:    { key:"phys",    label:"Physicalist monism",     short:"Physicalist",     desc:"One fundamental ingredient, and it is physical. Experiences are, or fully depend on, physical states." },
  nonphys: { key:"nonphys", label:"Non-physicalist monism", short:"Non-physicalist", desc:"One fundamental ingredient, but it is mental, experiential, or information-like rather than physical." },
  dual:    { key:"dual",    label:"Dualism",                short:"Dualist",         desc:"Two fundamental ingredients: the physical and something non-physical." },
  neutral: { key:"neutral", label:"Mechanism-level & cross-cutting", short:"Neutral", desc:"Scientific theories of which processes go with consciousness, and hypotheses about its basis (substrate, function). Mostly silent on what reality is made of." }
};

const VERDICT = {
  yes:     { key:"yes",     label:"Yes, in principle",                    short:"Yes, in principle", color:"var(--v-yes)" },
  depends: { key:"depends", label:"It depends",                           short:"It depends",        color:"var(--v-depends)" },
  no:      { key:"no",      label:"No — not in a digital system (or not at all)", short:"No",        color:"var(--v-no)" },
  silent:  { key:"silent",  label:"Sources do not say",                   short:"Not stated",        color:"var(--v-silent)" }
};

// Fields: reality, verdict (the theory's own implication for AI consciousness, as the sources
// report it), summary (one neutral description), takes (per-source paraphrase), proponents.
const THEORIES = [
  // ───────────── Physicalist monism ─────────────
  {
    id:"physicalism", name:"Physicalism (generic)", reality:"phys", verdict:"depends",
    summary:"Experiences are identical with, or fully depend on, physical states — neural activations, computational states, or other physical configurations.",
    takes:{
      fau:"Consciousness is entirely physical. Some versions reject AI consciousness (biological naturalism); many physicalists have not weighed in — conscious AI may be conceivable while it stays unclear whether the laws of nature allow it or whether humans will find the techniques. Transhumanist physicalists are more optimistic; others insist on embodiment or brain-likeness.",
      saad:"Whether physicalism is true is largely orthogonal to AI consciousness: what matters is the basis of consciousness, not its nature, and even non-physical consciousness could have a basis realisable by digital computers (Chalmers 1996). Physicalism has been argued to support deflationism — no deep divide between conscious and unconscious states — which may make 'how similar are AI states to human conscious states?' a better question than 'is it conscious?'."
    },
    proponents:["Many; see Papineau, Lee, Pautz, Carruthers, Birch for the deflationary line (via S&M)"]
  },
  {
    id:"identity-theory", name:"Identity theory", reality:"phys", verdict:"depends",
    summary:"Experiences are identical with non-functional physical states (e.g. specific kinds of brain state), not with functional roles.",
    takes:{
      saad:"Often assumed to rule out AI consciousness, but it does not: brains and AI systems share some non-functional physical properties (baryonic matter, electrical signalling), and the theory is compatible with humans and AIs having different experiences identical with different physical states."
    },
    proponents:["Gozzano & Hill (2012) (via S&M)"]
  },
  {
    id:"deflationism", name:"Deflationism", reality:"phys", verdict:"depends",
    summary:"There is no deep metaphysical divide between conscious and unconscious states; consciousness is a shallow, graded or conventional category.",
    takes:{
      saad:"Motivated by physicalism. If true, it may be more illuminating to map the ways AI states resemble and differ from human conscious states than to classify systems as conscious or not — or even to deprioritise consciousness-framed questions altogether. Analogous deflationism applies to belief and desire."
    },
    proponents:["Papineau (2003)", "G. Lee (2013, 2019)", "Cutter (2017)", "Pautz (2017)", "Carruthers (2019)", "Birch (2022)", "Kammerer (2022)", "Saad & Bradley (forthcoming)"]
  },
  {
    id:"functionalism", name:"Functionalism (general)", reality:"phys", verdict:"depends",
    summary:"Mental states, including conscious ones, are fixed by functional organisation — the causal relations among inputs, internal states and outputs — rather than by what the system is made of.",
    takes:{
      cdm:"Consciousness depends on what a system does, not what it is made of; systems with the same functional organisation have the same experiences whatever their substrate (Putnam 1975).",
      saad:"Friendly to AI consciousness but does not entail it: functionalism is compatible with a functional basis realisable only in non-artificial systems (Godfrey-Smith, Cao, Thagard), or only in neuromorphic hardware. Arguments against it: strange realizers, inverted spectra, causal exclusion.",
      seth:"Functionalism-in-general is a liberal position — functional organisation can include continuous dynamics, metabolism, embodiment — and should not be conflated with the much more specific computational functionalism. Dynamical, 4E and enactive approaches remain functionalist in this broad sense.",
      fau:"Functionalism need not involve computation. Leading functionalists — Fodor, Kim, Block — declined to extend it to phenomenal consciousness."
    },
    proponents:["Putnam (1967/1975)", "Lewis (1980)", "Block (1978) — critic", "Levin (2023)"]
  },
  {
    id:"comp-functionalism", name:"Computational functionalism", reality:"phys", verdict:"yes",
    summary:"The functional features that matter for consciousness are computational: running the right computations is necessary and sufficient, whatever the substrate.",
    takes:{
      cdm:"Running the relevant computations is necessary and sufficient for consciousness, independent of substrate (Putnam 1988; Shagrir 2010). Views differ on what counts as computation.",
      butlin:"Adopted as the working assumption. It entails AI consciousness is possible in principle and makes the internal workings of AI systems relevant. Combined with neuroscientific theories it yields indicator properties; the evidence suggests that, if computational functionalism is true, conscious AI could realistically be built in the near term — though no 2023 system was a strong candidate.",
      seth:"A very strong, usually unexamined assumption, and probably false for standard digital computers. Four arguments: brains are not computers (no software/hardware split; generative entrenchment; continuous time); there are other games in town (analogue, neuromorphic, dynamical, non-Turing processes); life matters; and simulation is not instantiation.",
      fau:"Those who also hold functionalism as a basis for consciousness support AI consciousness in principle, though they may doubt it can be built. Functionalism's popularity does not transfer to functionalism about consciousness. Digital computation may be insufficient; the brain uses analog computation too.",
      saad:"Even computational functionalism does not entail that real-world AI systems are conscious: hardware constraints and what it takes to realise a computation limit which computations a given system implements.",
      schiavo:"Presented as a premise many experts accept; if it holds, scientific theories of consciousness transfer to AI systems and architectures can be examined 'under the hood' instead of trusting self-reports."
    },
    proponents:["Putnam", "Schneider (2011)", "Butlin, Long et al. (2023) — as assumption", "Seth — critic", "Block, Kim, Fodor — sceptics"]
  },
  {
    id:"substrate", name:"Substrate independence & multiple realizability", reality:"neutral", verdict:"yes",
    summary:"Hypotheses about the basis of consciousness: that the same mental states can occur in many physical substrates (multiple realizability), including non-neural ones (substrate independence), or at least non-carbon ones (substrate flexibility).",
    takes:{
      cdm:"Substrate independence: the same kinds of mental state can occur across a wide range of substrates (Seth 2025). Substrate flexibility is the weaker claim that conscious states are not necessarily tied to carbon-based biology (Kirkpatrick 2022).",
      saad:"Functionalism, multiple realizability and substrate independence are friendly to AI consciousness but none entails it; conversely AI consciousness does not require any of them — consciousness could be realisable in a narrow class of substrates that happens to include silicon alongside neural wetware (Bostrom 2003; Bickle 2020).",
      seth:"Turing computation is substrate-flexible by design, but that is a property of a human engineering convention, not of brains, where what they do cannot be separated from what they are. The further one gets from 'Turing world', the less substrate-flexible the relevant processes become."
    },
    proponents:["Bostrom (2003)", "Bickle (2020)", "Kirkpatrick (2022)", "Seth (2025) — critic"]
  },
  {
    id:"neuromorphic", name:"Brain-like-substrate views", reality:"phys", verdict:"depends",
    summary:"Consciousness has a functional basis that conventional digital computers cannot realise, but hardware that physically resembles biological neural networks (neuromorphic, analogue, biological) might.",
    takes:{
      saad:"An important nearby view to functionalism: the basis of consciousness might be realisable in neuromorphic computers that bear greater physical resemblance to neural networks, even if not in conventional ones (Tononi & Koch 2015; Godfrey-Smith 2024; Shiller 2024).",
      seth:"Neuromorphic computation, 'mortal computation', analogue devices and synthetic biology are all more tied to their material basis than digital computation; these, rather than LLMs, are where artificial consciousness might emerge — and cerebral organoids are the bigger worry.",
      fau:"Neuromorphic chips, organoid-based bio-computers and brain emulations are the less visible but equally pressing cases; an LLM run on neuromorphic hardware raises the question whether some instantiations of a model could be conscious while others are not."
    },
    proponents:["Tononi & Koch (2015)", "Godfrey-Smith (2024)", "Shiller (2024)", "Seth", "Schneider"]
  },
  {
    id:"iit", name:"Integrated Information Theory", reality:"phys", verdict:"depends",
    summary:"Consciousness is identical to integrated information (Φ) in a system's intrinsic cause–effect structure; it depends on physical architecture, not on the algorithm run.",
    takes:{
      butlin:"Excluded from the report because the standard construal is incompatible with computational functionalism: a system running the same algorithm as a brain would not be conscious if its components were the wrong kind, and proponents hold that digital computers are unlikely to be conscious whatever they run (Albantakis & Tononi 2021). 'Weak IIT' (integration measures as correlates of global states) is noted but yields no AI indicators yet.",
      fau:"Grouped with informational theories. Tononi et al. (2016) stressed that feedforward systems and systems running on GPUs are not conscious.",
      saad:"Cited (Tononi & Koch 2015) as an example of a view on which consciousness might be realised in neuromorphic but not conventional hardware."
    },
    proponents:["Tononi, Boly, Massimini & Koch (2016)", "Oizumi et al. (2014)", "Albantakis & Tononi (2021)"]
  },
  {
    id:"informational", name:"Information-as-fundamental & simulation theory", reality:"phys", verdict:"yes",
    summary:"Information is reality's basic ingredient and consciousness is informational; the simulation hypothesis is a species of this view.",
    takes:{
      fau:"Artificial consciousness is in principle possible but depends on the version. If we are in a simulation, we are ourselves conscious AIs — but it does not follow that everything in a simulation is conscious; LLMs may not be.",
      seth:"Bostrom's simulation argument takes as a given that a computer running a suitable program would be conscious. If that assumption fails, our being conscious rules out our being in a simulation. 'Everything is computation' makes computational functionalism trivially true and tells us nothing about conscious AI."
    },
    proponents:["Bostrom (2003) — simulation hypothesis"]
  },
  {
    id:"bio-naturalism", name:"Biological naturalism", reality:"phys", verdict:"no",
    summary:"Properties of life are necessary (though perhaps not sufficient) for consciousness; it cannot arise in a non-biological substrate.",
    takes:{
      seth:"Life probably matters. Predictive processing ties perception and selfhood to the regulation of the body; that regulation reaches down into metabolism and autopoiesis; and the process is continuous and non-algorithmic, inseparable from its material basis. No knock-down argument exists, and it is a minority view — but every agreed case of consciousness is alive. Artificial consciousness via synthetic biology or organoids is not ruled out.",
      fau:"Deeply skeptical of AI consciousness; a biological yet artificial form might still be created. One of the two firm exceptions to the general neutrality of theories about AI.",
      saad:"Cited as the biological-naturalist rival to substrate independence (Seth 2024)."
    },
    proponents:["Searle (1980, 2017)", "Seth (2021, 2024, 2026)"]
  },
  {
    id:"eliminativism", name:"Eliminativism / Illusionism", reality:"phys", verdict:"no",
    summary:"Phenomenal consciousness does not exist (strong illusionism / eliminativism), or exists but lacks the properties introspection attributes to it (weak illusionism).",
    takes:{
      cdm:"Introduced by Frankish (2016) building on Dennett. Strong illusionists deny consciousness exists; weak illusionists deny it has key properties it seems to have. Both face the illusion problem: explaining why we represent our states as having properties they lack. Contrasts with phenomenal realism (Nagel, Chalmers).",
      fau:"Since consciousness does not exist, AI consciousness is not possible — in the sense that it is not possible for anything.",
      saad:"Listed among the sources of philosophical progress on consciousness in recent decades (Chalmers 2018)."
    },
    proponents:["P. S. Churchland (1986)", "Dennett", "Frankish (2016)"]
  },
  {
    id:"weak-emergentism", name:"Weak physical emergentism", reality:"phys", verdict:"yes",
    summary:"Consciousness is a higher-level property that supervenes on physical processes, as weather emerges from molecules; nothing beyond physical complexity is required.",
    takes:{
      fau:"Possible in principle, but only if artificial systems replicate the right kinds of organisational complexity underlying experience in humans and animals. A naturalistic path to AI consciousness needing no dualism."
    },
    proponents:["Chalmers (2008/2011) on weak vs strong emergence"]
  },
  {
    id:"mysterianism", name:"Mysterianism", reality:"phys", verdict:"no",
    summary:"The human mind is cognitively closed to the nature of consciousness.",
    takes:{
      fau:"Hard to see how humans could create conscious entities if they cannot understand consciousness; perhaps by reverse-engineering biology while staying perplexed. A mysterian could also be agnostic about physicalism."
    },
    proponents:["McGinn (1989)"]
  },

  // ───────────── Non-physicalist monism ─────────────
  {
    id:"idealism", name:"Idealism", reality:"nonphys", verdict:"yes",
    summary:"Mental phenomena are the sole ingredient of reality; the physical is derivative.",
    takes:{ fau:"In principle, yes: if reality consists of experience, AIs might be built that reach the complexity of macroconscious systems." },
    proponents:["Pearce & Goldschmidt (2018)"]
  },
  {
    id:"panpsychism", name:"Panpsychism", reality:"nonphys", verdict:"yes",
    summary:"Mentality is a fundamental ingredient of the universe; everything has at least micro-experience.",
    takes:{
      fau:"In principle yes, but unclear whether buildable: the combination problem asks how technology could harness micro-experiences into unified macro-minds. Panpsychism does not entail AI consciousness in the relevant sense — GPT might be conscious in a basic panpsychist way while attributing macroconsciousness to it would be a major error. Variants: Strawson's physicalist panpsychism; panprotopsychism (Chalmers 2013)."
    },
    proponents:["Strawson (2017)", "Chalmers (2013)"]
  },
  {
    id:"russellian", name:"Russellian monism", reality:"nonphys", verdict:"silent",
    summary:"Physics describes structure and dynamics; the intrinsic nature underlying physical structure is (proto)phenomenal.",
    takes:{ saad:"Mentioned, with dualist views and tracking theories, as part of the space of views beyond functionalism and identity theory (see Saad, forthcoming). Not developed for AI in the paper." },
    proponents:["Saad (forthcoming) for references"]
  },
  {
    id:"quantum", name:"Quantum theories of consciousness", reality:"nonphys", verdict:"yes",
    summary:"Quantum phenomena play a necessary, perhaps sufficient, role in consciousness beyond their generic role in all matter.",
    takes:{ fau:"In principle yes: if quantum features are constitutive, quantum computers could make this the lead category for AI consciousness. Can be physicalist or not; filed here because the named versions lean on panpsychism." },
    proponents:["Hameroff (2022)", "Schneider & Bailey (2025) — 'superpsychism'", "Beck & Eccles (1992)"]
  },

  // ───────────── Dualism ─────────────
  {
    id:"substance-dualism", name:"Substance dualism", reality:"dual", verdict:"depends",
    summary:"Two distinct substances, physical and non-physical. Emergent dualisms let physical complexity generate non-physical substances by psychophysical law.",
    takes:{
      fau:"It depends: a separate non-physical substance may seem to bar AI consciousness, unless the AI is correlated with one the way the brain is. Even theistic dualism need not deny a science could build a conscious substrate.",
      saad:"Dualist theories are compatible with digital minds, since what matters is the physical basis that gives rise to consciousness, which may include states realisable by computers (Chalmers 1996; Cutter 2025)."
    },
    proponents:["Descartes (1641)", "Lowe (1992)", "Foerst (2004)"]
  },
  {
    id:"property-dualism", name:"Property dualism", reality:"dual", verdict:"depends",
    summary:"All substances are physical, but consciousness is a fundamental non-physical property, possibly emergent at higher levels.",
    takes:{
      fau:"Amenable to AI consciousness insofar as non-physical consciousness properties can be instantiated by artificial systems.",
      saad:"As with substance dualism: compatible with digital minds; the question is the basis, not the nature, of consciousness."
    },
    proponents:["Chalmers (1996)"]
  },

  // ───────────── Mechanism-level theories ─────────────
  {
    id:"gwt", name:"Global Workspace Theory", reality:"neutral", verdict:"yes",
    summary:"Many specialised modules run in parallel; a limited-capacity workspace selects content and broadcasts it to all modules. Conscious contents are the broadcast ones.",
    takes:{
      butlin:"Indicators GWT-1 to GWT-4: parallel modules; a limited-capacity workspace with a bottleneck and selective attention; global broadcast; state-dependent attention enabling the workspace to query modules in sequence. Transformer LLMs and the Perceiver architecture are assessed: not strong candidates, though workspace-like architectures have been built deliberately.",
      fau:"Used to illustrate that intelligence and consciousness come apart: why would an advanced AI need a slow serial workspace, and would a workspace correlate with consciousness in a non-biological system? Perhaps the biological implementation matters (Schneider 2019). Does not require self-consciousness.",
      saad:"One of the theories from which Butlin et al. derive indicators. A global-workspace-like structure has recently been reported inside LLMs (Gurnee et al. 2026).",
      schiavo:"An explainer of the 'leading theory': modules in parallel, a limited workspace, all-or-nothing 'ignition' into global broadcast, and the four Butlin indicators. GWT has been implemented in AI agents (a 2024 Frontiers paper), so it is no longer hypothetical; the question is scale and implementation. A reader analysis argues standard LLMs do not clearly meet the indicators — the residual stream is a weak workspace, attention heads and mixture-of-experts only loosely match modules."
    },
    proponents:["Baars (1997, 2008)", "Dehaene & Changeux (2011)", "Dehaene (2014)", "Shanahan & Baars (2005)", "Bengio (2017)", "Juliani et al. (2022)"]
  },
  {
    id:"hot", name:"Higher-order theories (incl. PRM, HOSS)", reality:"neutral", verdict:"yes",
    summary:"A state is conscious only if the subject is aware of being in it, via a higher-order representation. Computational versions: perceptual reality monitoring (Lau) — a mechanism separating reliable perceptual signal from noise — and higher-order state space theory (Fleming).",
    takes:{
      butlin:"Indicators HOT-1 to HOT-4: generative or noisy perception modules; metacognitive monitoring distinguishing reliable representations from noise; agency guided by a general belief-formation and action-selection system that updates on that monitoring; sparse, smooth coding generating a quality space. Agency is explicitly required by PRM. Grouped with GWT as 'global' theories, but HOTs deny that workspace broadcast suffices.",
      fau:"Consciousness always involves representation of one's own mental states; the theories distinguish explicit from implicit background self-awareness. Named as a competitor to GWT and IIT; implications for AI not stated.",
      saad:"Listed among recent sources of philosophical progress (Carruthers & Gennaro 2023)."
    },
    proponents:["Rosenthal (2005)", "Brown (2015, 2025)", "Lau (2019, 2022)", "Fleming (2020)", "Cleeremans et al. (2020)"]
  },
  {
    id:"ast", name:"Attention Schema Theory", reality:"neutral", verdict:"yes",
    summary:"The brain builds a simplified model of its own attention, as it builds a body schema. Conscious experience depends on the contents of that attention schema, which also explains why consciousness seems mysterious.",
    takes:{
      butlin:"Indicator AST-1: a predictive model representing and enabling control over the current state of attention. A kind of higher-order theory, but aimed at the meta-problem — explaining what we believe and say about consciousness — so it can be read either as explaining consciousness away or as stating its conditions. Attention-schema-like models have been built in AI systems that use attention."
    },
    proponents:["Graziano (2019)", "Webb & Graziano (2015)"]
  },
  {
    id:"pp", name:"Predictive processing", reality:"neutral", verdict:"depends",
    summary:"Cognition is hierarchical prediction-error minimisation by a generative model; perception is controlled hallucination; action is active inference.",
    takes:{
      butlin:"A framework for consciousness rather than a theory of it (Seth & Hohwy 2021). Included as indicator PP-1: input modules using predictive coding, widely regarded as a plausible necessary condition. PP has been used to develop both GWT and HOT.",
      seth:"The route from predictive processing to biological naturalism: perceptual best-guessing underlies experiences of world and self; its primary duty is regulating the body; that regulation reaches into metabolism and autopoiesis via the free-energy principle; and the whole process is continuous and non-algorithmic. Hence life, not information processing, may be what matters."
    },
    proponents:["Friston (2010)", "Hohwy (2013, 2022)", "Clark (2019)", "Seth (2021)", "Deane (2021)"]
  },
  {
    id:"rpt", name:"Recurrent processing / local recurrence theory", reality:"neutral", verdict:"depends",
    summary:"A feedforward sweep through visual areas is unconscious; recurrent (feedback) processing within sensory areas generates conscious, organised percepts. No prefrontal involvement or attention is required.",
    takes:{
      butlin:"Indicators RPT-1 and RPT-2: input modules using algorithmic recurrence and generating organised, integrated perceptual representations. Two readings are set aside: a biological one (a specific neural mechanism is required, so AI cannot be conscious) and a vision-only one (few implications for AI). RPT-1 is already met by existing systems.",
      fau:"Does not appear to require self-consciousness, even minimally (Lamme 2010).",
      saad:"One of the theories Butlin et al. draw indicators from (Lamme 2006)."
    },
    proponents:["Lamme (2006, 2010, 2020)", "Zeki & Bartels (1998)", "Malach (2021)"]
  },
  {
    id:"midbrain", name:"Midbrain theory", reality:"neutral", verdict:"depends",
    summary:"The cortex is not necessary: midbrain and basal ganglia activity constituting an integrated, needs-weighted model of the agent in its environment suffices for experience.",
    takes:{
      butlin:"Functionally, consciousness depends on integrated spatiotemporal modelling for action selection, especially distinguishing self-caused motion. Supports the agency and embodiment indicators rather than yielding its own. Explicitly requires agency.",
      fau:"Cited (with Ginsburg & Jablonka) for the view that many insects are conscious and that a minimal self — distinguishing one's body from the environment — may be required."
    },
    proponents:["Merker (2005, 2007)", "Klein & Barron (2016)"]
  },
  {
    id:"ual", name:"Unlimited associative learning", reality:"neutral", verdict:"depends",
    summary:"Open-ended associative learning — compound and novel stimuli, second-order and trace conditioning, flexible revaluation — is an evolutionary transition marker whose hallmarks are jointly sufficient for consciousness in organisms.",
    takes:{
      butlin:"Its hallmarks (global accessibility, selective attention, integration over time, embodiment and agency, self-other registration, flexible valuation, binding, intentionality) overlap the report's indicators. UAL itself is not adopted as an indicator: AI systems might achieve it by different architectures while lacking the hallmarks, and it is a behavioural marker for organisms rather than a mechanism.",
      fau:"Cited for insect consciousness and the minimal-self requirement."
    },
    proponents:["Ginsburg & Jablonka (2019)", "Birch, Ginsburg & Jablonka (2020)"]
  },
  {
    id:"embodied", name:"Embodied, enactive & agency-based views", reality:"neutral", verdict:"depends",
    summary:"Consciousness is bound up with being a living, acting body coupled to an environment; 4E (embodied, embedded, enactive, extended) and dynamical approaches reject a purely algorithmic account of mind.",
    takes:{
      butlin:"Agency and embodiment are reconstrued as computational indicators: AE-1, learning from feedback and selecting outputs to pursue goals, especially with competing goals; AE-2, modelling output–input contingencies and using the model in perception or control. Hurley (1998) and Evans (1982) argue agency is necessary. Case studies: DeepMind's Adaptive Agent, a virtual-rodent controller, PaLM-E.",
      seth:"Dynamical systems theory and 4E cognitive science (van Gelder's steam governor) reject the idea that mind can be exhaustively accounted for algorithmically; the aspects of brain function needed for consciousness may depend on such non-computational processes. These views remain functionalist in the broad sense.",
      fau:"Embodied and enactive theories often privilege life and environmental interaction, so some theorists make being alive a prerequisite; the paper adds it is not obvious why metabolism or reproduction should be required. 'It is hard to feel a knot in your stomach without a stomach.'"
    },
    proponents:["Thompson (2007)", "Hurley (1998)", "O'Regan & Noë (2001)", "van Gelder (via Seth)", "Clark & Chalmers (1998) — extended mind"]
  },
  {
    id:"self-rep", name:"Self-representational views", reality:"neutral", verdict:"silent",
    summary:"Every conscious experience includes at least peripheral awareness of oneself as undergoing it.",
    takes:{ fau:"Named in the consciousness-vs-self-consciousness discussion; not addressed for AI." },
    proponents:["Brentano (1874/1973)", "Kriegel (2009)"]
  }
];

// Concepts, distinctions and methods — the vocabulary the sources use to keep the debate honest.
const DISTINCTIONS = [
  { title:"Phenomenal vs access consciousness", src:["cdm","saad","fau"], body:"Phenomenal: there is something it is like. Access: contents available for report, reasoning and control, not necessarily experienced. Widely thought closely related; debated whether ontologically distinct (Block 1995). Some argue access consciousness may suffice for moral status (Levy 2024)." },
  { title:"Intelligence vs consciousness", src:["fau","seth"], body:"Intelligence is about doing — achieving goals by flexible means; consciousness is about being. They co-occur in humans but need not in general; blindsight and implicit learning show intelligence without consciousness. Expecting consciousness to 'emerge at AGI' is human exceptionalism at work (Seth)." },
  { title:"Phenomenal realism vs illusionism", src:["cdm"], body:"Realism: consciousness is real and introspection at least partly reveals its nature (Nagel, Chalmers). Illusionism: introspection systematically misrepresents it — strong versions deny consciousness exists, weak versions deny it has the properties it seems to have." },
  { title:"Functionalism vs computational functionalism", src:["seth","fau","cdm"], body:"Functionalism-in-general lets any functional organisation count, including continuous dynamics and metabolism. Computational functionalism says the relevant organisation is computational, usually Turing-style. Conflating them lends the specific claim the plausibility of the liberal one." },
  { title:"Substrate independence vs substrate flexibility", src:["cdm","seth","saad"], body:"Independence: the same mental states can occur in any suitable substrate. Flexibility: not tied to carbon, but not realisable in anything — you cannot build a computer from cheese (Seth). Neither entails that actual AI systems are conscious (S&M)." },
  { title:"Functional (FC) vs phenomenal (PC) consciousness; FFC; SCAIs", src:["fau"], body:"FC is what consciousness does (workspace, attention, reportability). Features of FC (FFC) are already present in LLMs. Seemingly conscious AIs (SCAIs) show FFC without PC — the authors suspect today's LLMs are such. Conflating FC and PC risks admitting AI zombies." },
  { title:"Sentience vs sapience; Vulcans", src:["fau"], body:"Sentience: valenced experience that grounds welfare concern. Sapience: higher cognition. A sapient AI might have no sentience; 'Vulcans' have qualia without valence." },
  { title:"The gaming problem", src:["saad"], body:"LLMs are trained on human text and tuned to be conversational, and both models and developers have incentives to satisfy whatever criteria we use. Behaviour that would ordinarily justify attributing consciousness is therefore weak evidence — a case of Goodhart's law (Dung 2023; Birch 2024)." },
  { title:"Theory-neutral, theory-heavy, theory-balanced", src:["saad","butlin"], body:"Neutral: ordinary (behavioural) criteria — undermined by gaming and missing background similarities. Heavy: defer to one theory — but which? Balanced: weight many theories' verdicts, e.g. a credal approach (Chalmers 2023; Birch 2024). Butlin et al. call their indicator method theory-heavy; S&M read it as theory-balanced." },
  { title:"The within-between problem", src:["saad"], body:"Scientific theories explain the difference between conscious and unconscious processing within humans, not which background factors — present in both but absent in AI — might also be necessary. Like expecting sparks to light kindling in a vacuum (Goldstein & Kirk-Giannini 2024)." },
  { title:"Gradual replacement arguments", src:["saad","seth","butlin"], body:"Replace neurons one by one with functional silicon equivalents; consciousness should survive, else cognition and experience dissociate implausibly (Chalmers 1996). Seth: the argument fails at the first step, since no silicon part can perfectly replace a metabolically entangled neuron. S&M: even if it works, it says nothing about systems with different functional organisation, such as LLMs." },
  { title:"Simulation is not instantiation", src:["seth"], body:"A simulated storm wets nothing. A computational simulation of X brings X into being only if X is itself computational — so brain emulation yields consciousness only if computational functionalism already holds." },
  { title:"The hard problem vs the problem of AI consciousness", src:["fau","saad"], body:"The hard problem asks why physical processing is accompanied by experience, assuming it is. The AI problem asks whether a differently-made system has experience at all. S&M: progress on the AI question does not require solving the hard problem, as astronomy progressed without knowing why stars form." },
  { title:"The human benchmark problem", src:["fau","seth"], body:"We lack a settled theory even for humans, so the human case is an incomplete, possibly misleading benchmark. Biases — anthropocentrism, human exceptionalism, anthropomorphism, exponential-curve thinking, techno-rapture — push toward over-attribution (Seth); alien forms may be missed (FAU)." },
  { title:"Indicator properties", src:["butlin","schiavo"], body:"Computationally specified properties each held necessary by some theory, some subsets jointly sufficient. More indicators → higher credence. Weighted by similarity of function, strength of evidence for the theory, and credence in computational functionalism. No 2023 system was a strong candidate; no obvious technical barrier to building systems that satisfy them. Schiavo: think risk factors for heart disease, not a smoke alarm; the report leaves them unweighted, and weighting work is under way." },
  { title:"Self-reports vs architecture", src:["schiavo","fau","saad"], body:"Model statements about their own experience are unreliable evidence either way (training on human text; gaming). Look at architecture and computational properties instead — contrastive analysis in neuroscience compares conscious and unconscious processing; the indicator method does the analogue for AI." },
  { title:"Life vs consciousness", src:["fau","seth"], body:"On NASA's definition (self-sustaining chemical system capable of Darwinian evolution) AI is not alive; conceptually, consciousness without life is possible (FAU). Seth: every agreed conscious thing is alive, and the explanatory thread from prediction-error minimisation to autopoiesis suggests life is what 'breathes fire into the equations'." },
  { title:"Panpsychism ≠ AI macroconsciousness", src:["fau"], body:"Panpsychism grants micro-experience to everything; the AI question concerns macroconsciousness. GPT could be conscious in the trivial panpsychist sense without that mattering." },
  { title:"Consciousness vs self-consciousness", src:["fau"], body:"Some theories (HOT, Brentano/Kriegel) tie consciousness to self-representation; others (GWT, RPT) do not require any self-awareness, even minimal." },
  { title:"Individuation of digital minds", src:["saad"], body:"If AI systems have mental states, who bears them, and for how long? Psychological and bodily continuity, coupled in humans, can dissociate across model instances, datacentres, forks and weight updates; whole-number counting of minds may not fit (Schwitzgebel & Nelson 2025)." },
  { title:"What (not) to do", src:["seth","fau","butlin"], body:"Seth: nobody should deliberately set out to create conscious AI, and conscious-seeming AI is a nearer, distinct danger. FAU: develop a theory-agnostic panel of tests; Birch's 'centrism' takes both misattribution and alien consciousness seriously. Butlin et al.: fund the science; urgently consider the moral and social risks." }
];
