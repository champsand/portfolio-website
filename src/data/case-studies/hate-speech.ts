import type { MLStory } from "./types";

export const hateSpeechStory: MLStory = {
  focus: "NLP · Classification · Information Design",
  overview: { paragraphs: [
    "The project explores how natural-language processing can assist with reviewing Indonesian text for potentially hateful or abusive content.",
    "Instead of presenting a single unexplained label, the application combines contextual model probabilities with separate abusive-term detection so users can see both the overall prediction and supporting language-level information.",
  ] },
  problem: { paragraphs: [
    "Reviewing hundreds or thousands of text entries manually can be slow and repetitive.",
    "We wanted to explore whether NLP could help perform an initial screening of Indonesian text while still presenting enough context for someone to understand the result.",
    "But that introduced another question: What exactly should the system call 'hate speech'?",
    "Hate speech, toxicity, and abusive language can overlap but do not always mean the same thing. A harsh word may be abusive without the entire sentence necessarily being classified as hate speech.",
  ], emphasis: "An abusive word does not automatically make the entire sentence hate speech." },
  role: "I helped shape the original project idea, searched for and selected the dataset, worked on model training and experimentation, and provided feedback on how the prediction results should be presented in the interface.",
  contributions: [
    { title: "Idea & Scope", description: "Helped shape the project direction." },
    { title: "Data", description: "Searched for and selected the Indonesian dataset." },
    { title: "Modeling", description: "Participated in model training and experimentation." },
    { title: "Interface Feedback", description: "Contributed feedback on how predictions and supporting information should be communicated." },
  ],
  challenge: { paragraphs: [
    "The difficult part was not only making a classifier return a prediction.",
    "The harder question was how that prediction should be interpreted.",
    "A word can be offensive or profane without the entire statement necessarily functioning as hate speech.",
    "For example, an Indonesian expression may contain a harsh word that has multiple possible meanings depending on context.",
    "If the application collapsed everything into a single 'hate / not hate' label, useful information would be lost.",
  ], emphasis: "How do we show both the overall context and the language that may still deserve attention?" },
  solution: { paragraphs: [
    "We separated the result into two layers.",
    "The first layer is the model's contextual prediction: the probability that the overall text is Safe / Non-toxic or Toxic.",
    "The second layer surfaces abusive or profane expressions matched through the abusive-language lexicon.",
    "This means the application can communicate that a sentence is not strongly predicted as hate speech while still showing that it contains language someone may want to review.",
  ] },
  learned: { paragraphs: [
    "This project taught me that building a classification model is only part of the problem. The way a prediction is defined and communicated is equally important.",
    "Initially, concepts such as hate speech, toxicity, and abusive language seemed easy to group together. Working on the project made me realize that they represent different levels of meaning and should not always be treated as the same label.",
    "It also taught me that machine-learning outputs need context. A probability, a class label, and supporting information can communicate much more responsibly than a single binary answer.",
  ] },
  limitations: [
    { title: "Language Scope", description: "The system is primarily designed around Indonesian-language text and should not be treated as a general multilingual moderation model." },
    { title: "Context", description: "Language meaning depends heavily on context. Sarcasm, implicit meaning, and changing slang remain difficult for automated classifiers." },
    { title: "Lexicon Matching", description: "An abusive-term match only shows that a word or phrase appeared in the lexicon. It does not by itself prove that the entire sentence is hate speech." },
    { title: "Human Judgment", description: "The output should be treated as supporting information rather than a perfect automated moderation decision." },
  ],
};

