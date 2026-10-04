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
      "I already used habit trackers. What bothered me was how one missed day could make a week of effort feel undone. I wanted a tracker that left room for good days, bad days, and returning after either.",
      "Our five-member team built Habit Flow around weekly goals and reflection. Users log activity, record mood and energy, leave notes, and review the week with Gemini-generated insights based on their habit and reflection data.",
    ],
  },
  problem: {
    paragraphs: [
      "A daily completion streak was a poor fit for how I thought about consistency. Missing a goal mattered, but it shouldn't make the rest of the week disappear.",
      "We chose weekly targets so progress could accumulate across different days. That changed the product question from whether someone had been perfect today to whether they were still making room for the habit.",
    ],
    emphasis: "A missed day should still belong in the week's story.",
  },
  role: "As Software Engineering Project Lead, I led our five-member team and contributed across UI design, frontend, backend, database design, authentication, validation, testing, and Gemini integration. I helped organize the work, but the product was a shared effort. We used Scrum to adapt during development rather than treating our first plan as final.",
  contributions: [
    { title: "Product & UI", description: "I helped turn the weekly-goal idea into the application flow and interface." },
    { title: "Frontend", description: "I contributed to the Next.js / React interface in TypeScript." },
    { title: "Backend", description: "I worked on the Node.js / Express API and application logic." },
    { title: "Data", description: "I contributed to database design with PostgreSQL and Prisma." },
    { title: "System behavior", description: "My work included JWT authentication, validation, and testing." },
    { title: "Applied AI", description: "I helped integrate Gemini for feedback on the week's habit and reflection data." },
  ],
  userFlow: ["Create good or bad habits", "Define weekly goals", "Log activities", "Complete a daily check-in", "Record mood and energy", "Leave notes", "Review weekly progress", "Receive AI-generated weekly insights"],
  checkIn: "We made room for more than a completion mark. Mood, energy, and notes help users remember what happened around a habit. A missed goal can then inform the weekly reflection instead of becoming a blank day.",
  challenge: {
    paragraphs: [
      "Moving away from completion streaks left us with another problem: why open the tracker on a day when you haven't met your goal?",
      "I didn't want logging to become something people did only when they had good news. If someone planned ten push-ups and did none, that was still useful context. Leaving the day blank would hide it from the weekly reflection.",
    ],
    emphasis: "What would make an unsuccessful day worth logging?",
  },
  solution: {
    paragraphs: [
      "We first planned to remove streaks entirely. As we developed the product, we realized that a streak could still serve a purpose if we changed what counted.",
      "We kept an activity streak for returning and logging honestly. Missing a habit goal no longer had to break it. The weekly target measures habit progress; the activity streak recognizes the act of checking in.",
    ],
    emphasis: "The streak rewards reflection, not perfection.",
  },
  result: {
    paragraphs: [
      "Informal testing with several users suggested that the activity streak made returning after a missed goal feel easier. That was encouraging feedback, rather than a measured improvement in long-term habits.",
      "The working application brought together weekly targets, logging, reflection, and weekly insights. For me, the meaningful result was making the original idea concrete: users could miss a goal and still record a day worth looking back on.",
    ],
  },
  learned: {
    paragraphs: [
      "I now ask what behavior a feature rewards before deciding whether to keep it. The streak wasn't automatically the problem; rewarding only perfect completion was.",
      "I also learned that planning and changing direction belong together. A clear initial idea helped us make decisions, while Scrum gave us room to revise them during development. Leading the project meant keeping that reason visible while making space for the team's input.",
    ],
  },
  nextSteps: [
    { title: "Web-first experience", description: "We built a web application. I'd like to explore a dedicated mobile experience for quick daily logging." },
    { title: "Notifications", description: "Mobile reminders are a possible next step, with care around when a reminder helps rather than becomes another distraction." },
    { title: "Long-term analytics", description: "The current view centers on a week. A longer history could help users notice patterns across several weeks." },
    { title: "Personalized insights", description: "I'd like to explore whether more historical context makes weekly feedback more useful. That remains future work." },
  ],
};
