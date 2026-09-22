export interface NarrativeSection {
  paragraphs: string[];
  emphasis?: string;
}
export interface StoryDetail { title: string; description: string }
export interface MLStory {
  focus: string;
  overview: NarrativeSection;
  problem: NarrativeSection;
  role: string;
  contributions: StoryDetail[];
  challenge: NarrativeSection;
  solution: NarrativeSection;
  learned: NarrativeSection;
  limitations: StoryDetail[];
}

