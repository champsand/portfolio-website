import Container from "@/components/layout/Container";
export default function HabitFlowDemo() {
  return <section aria-labelledby="demo-heading" className="border-t border-line py-16 md:py-20">
    <Container>
      <p className="eyebrow text-accent">In use</p>
      <h2 id="demo-heading" className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">Product Demo</h2>
      <p id="demo-description" className="mb-8 mt-4 max-w-2xl text-base leading-8 text-secondary">A short look at Habit Flow in use, review weekly habit progress, open Daily Check-in, select mood and energy, and save the reflection. This 26 second demonstration has no audio.</p>
      <video controls playsInline preload="metadata" width={1280} height={630} poster="/images/projects/habit-flow-demo-poster.jpg" aria-label="Habit Flow product demo" aria-describedby="demo-description" className="h-auto w-full rounded-sm border border-line bg-surface">
        <source src="/media/habit-flow-demo.mp4" type="video/mp4" />
        Your browser cannot play this video. <a href="/media/habit-flow-demo.mp4">Open the Habit Flow demo</a>.
      </video>
    </Container>
  </section>;
}

