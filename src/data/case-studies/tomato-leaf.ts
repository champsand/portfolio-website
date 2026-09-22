import type { MLStory } from "./types";

export const tomatoLeafStory: MLStory = {
  focus: "Computer Vision · Validation · Robustness",
  overview: { paragraphs: [
    "The project is a computer vision application for classifying tomato leaves as Healthy, Early Blight, or Late Blight.",
    "Beyond the disease classifier itself, we also explored an important application-level problem: what happens when the user uploads an image that should never have been classified at all?",
  ] },
  problem: { paragraphs: [
    "Our initial idea was broader: detect diseases across different types of plant leaves.",
    "That quickly created a scope problem.",
    "Different species can have dramatically different leaf shapes, structures, and visual characteristics. Features that make sense for one species may behave very differently for another.",
    "After reviewing the available data and discussing the scope with our lecturer, we narrowed the project to tomato leaves, where the dataset was larger and more stable for experimentation.",
  ] },
  role: "I worked in a seven-member team and focused primarily on the final validation stage, edge-case testing, and evaluating how the application behaved when users uploaded images that were not actually leaves.",
  contributions: [
    { title: "Input Validation", description: "Explored ways to reject invalid uploads." },
    { title: "Edge Cases", description: "Intentionally tested unexpected images." },
    { title: "Evaluation", description: "Examined system behavior outside the ideal dataset." },
    { title: "Application Robustness", description: "Focused on what happens before classification." },
  ],
  challenge: { paragraphs: [
    "A classifier is designed to choose between the classes it knows.",
    "That becomes a problem when the input does not belong to any of those classes.",
    "If a user uploads something like a green door, refrigerator, wall, or another smooth green object, a disease classifier may still attempt to label it Healthy, Early Blight, or Late Blight.",
    "The model producing a confident answer does not mean that answer makes sense.",
  ], emphasis: "What should the system do when it should not make a prediction at all?" },
  solution: { paragraphs: [
    "We added a validation stage before disease classification.",
    "Instead of treating green pixels alone as proof that an image contained a leaf, the system also examines structural and local visual characteristics.",
    "The goal is not to prove that an image is definitely a tomato leaf. The goal is to reject obvious inputs that should never reach the disease classifier.",
  ] },
  learned: { paragraphs: [
    "This project changed the way I think about evaluating machine-learning systems.",
    "A model can perform well when every test input looks exactly like the training data, while still behaving poorly in a real application where users can provide almost anything.",
    "I learned that testing should include not only: 'Can the model correctly classify what it knows?' but also:",
  ], emphasis: "Can the system recognize when it should not make a prediction at all?" },
  limitations: [
    { title: "Tomato Scope", description: "The classifier is trained for tomato leaves and only supports the health conditions included in the project." },
    { title: "Heuristic Validation", description: "The pre-classification validation stage is heuristic rather than a universal leaf detector." },
    { title: "Difficult Conditions", description: "Lighting, background, image quality, and unusual visual characteristics can still affect validation." },
    { title: "Species Verification", description: "A non-tomato leaf may still appear sufficiently leaf-like to pass the validation stage. Passing validation does not prove that an image is specifically a tomato leaf." },
  ],
};

