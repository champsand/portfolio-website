interface NarrativeSection {
  paragraphs: string[];
  emphasis?: string;
}

interface HabitFlowStory {
  focus: string;
  overview: NarrativeSection;
  problem: NarrativeSection;
  role: string;
  contributions: { title: string; description: string }[];
  userFlow: string[];
  checkIn: string;
  challenge: NarrativeSection;
  solution: NarrativeSection;
  result: NarrativeSection;
  learned: NarrativeSection;
  nextSteps: { title: string; description: string }[];
}

export const habitFlowStory: HabitFlowStory = {
  focus: "Full-Stack · Product Thinking · Applied AI",
  overview: {
    paragraphs: [
      "Habit Flow is a full-stack habit tracking application built around a simple idea which is, progress does not need to depend on being perfect every day.",
      "Instead of treating a broken daily streak as a failure, the application focuses on weekly goals, consistent reflection, and understanding how habits develop over time.",
      "Users can create habits, set weekly targets, log their activity, complete daily check-ins, record mood and energy, leave notes, review their progress, and receive AI-generated weekly insights.",
    ],
  },
  problem: {
    paragraphs: [
      "Many habit trackers revolve around daily streaks. They can be motivating, but missing one day can make previous progress feel as if it has been reset.",
      "We wanted to explore a different approach, instead of requiring perfect daily completion, what if users could work toward a goal across an entire week?",
      "That question became the foundation of Habit Flow.",
    ],
    emphasis: "What if progress was measured across a week instead of requiring perfection every day?",
  },
  role: "I led a five-member team and contributed across the product, including UI design, frontend and backend development, database design, authentication, validation, testing, and AI integration.",
  contributions: [
    { title: "Product & UI", description: "Helped shape the application flow and interface." },
    { title: "Frontend", description: "Contributed to the Next.js / React application." },
    { title: "Backend", description: "Contributed to the Express API and application logic." },
    { title: "Data", description: "Contributed to PostgreSQL / Prisma database design." },
    { title: "System behavior", description: "Authentication, validation, and testing." },
    { title: "Applied AI", description: "Gemini-powered weekly insight integration." },
  ],
  userFlow: ["Create good or bad habits", "Define weekly goals", "Log activities", "Complete a daily check-in", "Record mood and energy", "Leave notes", "Review weekly progress", "Receive AI-generated weekly insights"],
  checkIn: "A daily check-in gives users room to record whether a habit was completed, along with mood, energy, and notes. The purpose is not only to record successful days because unsuccessful days can also become useful data for weekly reflection.",
  challenge: {
    paragraphs: [
      "Moving away from completion streaks created an unexpected problem.",
      "If the product no longer rewarded users for completing a habit every single day, what would encourage someone to open the application on a day when they had failed?",
      "That matters because unsuccessful days are still valuable.",
      "If a user planned to complete ten push-ups but did none, simply disappearing from the application would remove useful information from their weekly reflection.",
    ],
    emphasis: "How do we encourage users to keep showing up without making perfection the goal?",
  },
  solution: {
    paragraphs: [
      "We initially wanted to move away from streaks entirely. Eventually, we realized that the problem was not necessarily the existence of a streak, but rather it was the behavior the streak rewarded.",
      "So we changed what counted.",
      "Instead of rewarding perfect habit completion, the activity streak rewards the user for returning to the application and honestly logging their day.",
      "A user can miss a habit and still maintain their activity streak as long as they show up and record what happened.",
    ],
    emphasis: "The streak rewards reflection, not perfection.",
  },
  result: {
    paragraphs: [
      "During informal testing with several users, this approach appeared to make it easier to continue tracking after a missed goal.",
      "Instead of feeling that one unsuccessful day erased previous progress, users could return, record what happened, and continue building a useful weekly picture of their habits.",
    ],
  },
  learned: {
    paragraphs: [
      "This project taught me that solving a problem does not always mean removing an existing idea entirely.",
      "Sometimes an existing solution contains something useful, but it is being applied to the wrong behavior.",
      "We originally wanted to move away from streaks, but eventually realized that streaks could still be useful if we changed what they represented. Instead of rewarding perfect habit completion, we used them to reward consistent reflection.",
      "It taught me to question not only whether a solution works, but also what behavior that solution is actually encouraging.",
    ],
  },
  nextSteps: [
    { title: "Web-first experience", description: "Habit Flow currently exists as a web application. A dedicated mobile experience would better match the quick, daily nature of habit logging." },
    { title: "Notifications", description: "Mobile notifications could make daily check-ins and reminders easier to integrate into a user's routine." },
    { title: "Long-term analytics", description: "Future versions could explore richer historical analytics across longer periods instead of focusing primarily on weekly progress." },
    { title: "Personalized insights", description: "AI-generated insights could become more useful with deeper historical context and more personalized patterns over time." },
  ],
};
