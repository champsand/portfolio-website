import type { MLStory } from "./types";

export const tomatoLeafStory: MLStory = {
  focus: "Computer Vision · Validation · Robustness",
  overview: { paragraphs: [
    "Our seven-member team built an application that classifies tomato leaves as Healthy, Early Blight, or Late Blight. My contribution centered on what happens before that prediction.",
    "I tested non-leaf images and worked on the final validation behavior. A classifier can return a confident disease label for an unrelated green object; I wanted to help the application reject those uploads before they reached it.",
  ] },
  problem: { paragraphs: [
    "We initially considered diseases across several plant species. Differences in leaf shape and structure made that scope difficult to handle with the available data.",
    "After reviewing the data and discussing it with our lecturer, the team narrowed classification to tomato leaves. That gave us a clearer input domain, but an upload field still lets someone submit an image outside it.",
  ] },
  role: "Within the seven-member team, I focused on final input-validation behavior, edge-case testing, evaluating non-leaf uploads, and improving invalid-image rejection. The classifier was the team's work; my main contribution was testing and improving the boundary around its inputs.",
  contributions: [
    { title: "Input Validation", description: "I contributed to the final checks used to reject unsuitable uploads." },
    { title: "Edge Cases", description: "I deliberately tested non-leaf images, including unrelated green objects." },
    { title: "Evaluation", description: "I examined how the application behaved beyond expected leaf inputs." },
    { title: "Invalid-image Rejection", description: "I helped improve the behavior that stops an upload before classification." },
  ],
  challenge: { paragraphs: [
    "The disease classifier chooses between the classes it knows. A green door, refrigerator, or wall doesn't belong to any of them, yet it can still receive a disease label.",
    "Testing those images made the problem concrete for me. Improving classification on tomato leaves wouldn't, by itself, tell the application when to stop. We needed a check before prediction.",
  ], emphasis: "What should the system do when it should not make a prediction at all?" },
  solution: { paragraphs: [
    "The team placed heuristic validation before the classifier. I worked on its final behavior and tested edge cases to help improve invalid-image rejection.",
    "Color alone wasn't enough. The checks also examine plant-like region size, texture, edge density, and ORB keypoints. Together, they help reject obvious unsuitable images, while still leaving cases the heuristics can get wrong.",
    "I treat passing validation as permission to continue through this pipeline, not proof that an image is a tomato leaf.",
  ] },
  learned: { paragraphs: [
    "Testing non-leaf images changed what I look for in a machine-learning application. I had to consider whether the input belonged in the system before judging the answer it returned.",
    "The validation checks are imperfect, but working on them taught me to test the boundary as deliberately as the expected path. I now want to know what happens when an upload should never receive a prediction.",
  ], emphasis: "Sometimes the useful result is refusing to predict." },
  limitations: [
    { title: "Tomato Scope", description: "The team limited classification to tomato leaves and three classes: Healthy, Early Blight, and Late Blight." },
    { title: "Heuristic Validation", description: "These checks can reject obvious invalid inputs, but aren't a universal leaf detector and can make mistakes." },
    { title: "Difficult Conditions", description: "Unusual lighting, backgrounds, or image quality can affect both validation and classification." },
    { title: "Species Verification", description: "Other leaves can pass the gate. Passing validation does not verify that an image contains a tomato leaf." },
  ],
};

