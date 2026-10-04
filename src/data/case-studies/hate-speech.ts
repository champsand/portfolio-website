import type { MLStory } from "./types";

export const hateSpeechStory: MLStory = {
  focus: "NLP · Classification · Information Design",
  overview: { paragraphs: [
    "I helped shape a team project for screening Indonesian text. One distinction became central: a sentence can contain a harsh or profane word without necessarily being hate speech.",
    "We show two signals for the same input: IndoBERT's overall risk prediction and separate lexicon matches for abusive language. Keeping them visible gives someone reviewing the text more to work with than a single label.",
  ] },
  problem: { paragraphs: [
    "We wanted to help with the repetitive part of reviewing text: identifying entries that may deserve a closer look.",
    "Before choosing how to show results, we had to be clear about what they meant. Hate speech, toxicity, and abusive language overlap, but collapsing them into one answer would suggest a certainty the system doesn't have.",
  ], emphasis: "An abusive word does not automatically make the entire sentence hate speech." },
  role: "I helped shape the idea, searched for and selected the dataset, and worked on model training, experimentation, and evaluation. I also gave feedback on how predictions and matched expressions should appear in the interface. The detector and interface were team work; I didn't build every part myself.",
  contributions: [
    { title: "Idea & Scope", description: "I helped define the screening problem and the project direction." },
    { title: "Data", description: "I searched for and selected the Indonesian text dataset." },
    { title: "Modeling", description: "I worked on training, experiments, and evaluation." },
    { title: "Interface Feedback", description: "I gave feedback on explaining probabilities alongside matched expressions." },
  ],
  challenge: { paragraphs: [
    "During the project, I became more concerned with how someone would read the output. A sentence the model assigns low risk can still contain a word worth reviewing.",
    "A single 'hate / not hate' answer would hide that distinction. At the same time, highlighting a word can't explain its meaning in every context. We needed to show the signals without pretending either was a final moderation decision.",
  ], emphasis: "One input. Two signals. Context still matters." },
  solution: { paragraphs: [
    "We kept the model and lexicon outputs separate. Fine-tuned IndoBERT returns probabilities for Safe / Non-toxic and Toxic / Hate-speech risk; lexicon matching checks processed words and short phrases independently.",
    "The interface can therefore show low predicted risk alongside flagged expressions. My feedback focused on making that difference readable, so the person reviewing the text could see what each result actually came from.",
  ] },
  learned: { paragraphs: [
    "I started by thinking mostly about model performance. Working on the results made me ask a different question: what will someone think this label allows them to conclude?",
    "Now I look more carefully at the gap between a prediction and an explanation. An accuracy score helps compare experiments; it doesn't settle the meaning of an individual sentence. Showing probabilities and matched terms helps a reviewer inspect the output, while leaving room to disagree with it.",
  ] },
  limitations: [
    { title: "Language Scope", description: "We worked primarily with Indonesian text. These experiments don't establish performance across other languages." },
    { title: "Context", description: "Sarcasm, implicit meaning, and changing slang can lead to mistakes. A sentence's meaning may depend on context outside the input." },
    { title: "Lexicon Matching", description: "A match tells us that an expression is in the lexicon. It can miss newer terms and cannot determine intent or prove hate speech." },
    { title: "Human Judgment", description: "The model can be wrong. This is assistance for initial screening; someone still needs to review the text and make the moderation decision." },
  ],
};

