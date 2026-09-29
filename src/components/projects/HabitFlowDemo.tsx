export default function HabitFlowDemo() {
  return <section id="demo" aria-labelledby="demo-heading" className="case-demo">
    <div className="case-shell">
      <div className="case-demo-intro"><div><p className="eyebrow case-accent">PRODUCT / IN USE</p><h2 id="demo-heading">Every day adds context.</h2></div><p id="demo-description">A short look at Habit Flow in use, review weekly habit progress, open Daily Check-in, select mood and energy, and save the reflection. This 26 second demonstration has no audio.</p></div>
      <figure><video controls playsInline preload="none" width={1280} height={630} poster="/images/projects/habit-flow-demo-poster.jpg" aria-label="Habit Flow product demo" aria-describedby="demo-description">
        <source src="/media/habit-flow-demo.mp4" type="video/mp4" />
        Your browser cannot play this video. <a href="/media/habit-flow-demo.mp4">Open the Habit Flow demo</a>.
      </video><figcaption>RECORDED WALKTHROUGH / DAILY CHECK-IN & REFLECTION · 00:26 · NO AUDIO</figcaption></figure>
    </div>
  </section>;
}
