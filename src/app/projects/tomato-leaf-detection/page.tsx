import { pageMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectImage from "@/components/projects/ProjectImage";
import ProjectSection from "@/components/projects/ProjectSection";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import { ContributionDetails, Limitations } from "@/components/projects/StoryDetails";
import ModelMetrics from "@/components/projects/ModelMetrics";
import { projects } from "@/data/projects";
import TomatoValidation from "@/components/projects/TomatoValidation";
import { tomatoLeafStory as story } from "@/data/case-studies/tomato-leaf";

const project = projects.find((item) => item.slug === "tomato-leaf-detection")!;
export const metadata = pageMetadata(project.title, "A case study about tomato-leaf disease classification, edge-case testing, and pre-classification input validation.", project.caseStudyHref!);

export default function TomatoLeafPage() {
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <ProjectHero project={project} focus={story.focus} />
      <Container className="pb-16 md:pb-24">
        <ProjectImage src={project.image} width={1919} height={1027}
          alt="Tomato Leaf Disease Detection interface showing an uploaded leaf and Healthy, Early Blight, and Late Blight prediction probabilities."
          caption="An uploaded leaf and the classifier’s three supported health conditions." />
      </Container>
      <ProjectSection id="overview" number="01" title="Overview" {...story.overview} />
      <ProjectSection id="scope" number="02" title="Starting Too Broad" {...story.problem}>
        <dl className="divide-y divide-line text-base">
          {[
            ["Corn", "Long and narrow leaves"],
            ["Papaya", "Broad, highly lobed / hand-like structure"],
            ["Tomato", "Another distinct leaf geometry"],
          ].map(([name, description]) => <div key={name} className="grid gap-1 py-4 sm:grid-cols-[100px_1fr] sm:gap-5">
            <dt className="font-medium text-foreground">{name}</dt><dd>{description}</dd>
          </div>)}
        </dl>
      </ProjectSection>
      <ProjectSection id="role" number="03" title="My Role" paragraphs={[story.role]}>
        <ContributionDetails items={story.contributions} />
      </ProjectSection>
      <ProjectSection id="how-it-works" number="04" title="How It Works">
        <TomatoValidation />
      </ProjectSection>
      <ProjectSection id="challenge" number="05" title="The Challenge" {...story.challenge} />
      <ProjectSection id="validation" number="06" title="The Validation Approach" {...story.solution}>
        <h3 className="pt-3 text-xl font-medium text-foreground">Looking beyond green pixels</h3>
        <ul className="list-disc space-y-2 pl-5 text-base">
          <li>Plant-like / green color regions</li>
          <li>The largest connected plant-like region</li>
          <li>Texture</li>
          <li>Edge density</li>
          <li>ORB keypoints / local visual features</li>
        </ul>
        <div className="grid gap-6 pt-4 sm:grid-cols-2">
          <div className="border-t border-accent/40 pt-5">
            <h3 className="font-mono text-xs text-accent">EXPECTED INPUT</h3>
            <p className="mt-3 text-lg font-medium text-foreground">Tomato leaf</p>
            <ol className="mt-3 space-y-2 text-sm leading-6"><li>1. Validation passes</li><li>2. Disease classification</li></ol>
          </div>
          <div className="border-t border-line pt-5">
            <h3 className="font-mono text-xs text-secondary">INVALID INPUT</h3>
            <p className="mt-3 text-lg font-medium text-foreground">Smooth green object</p>
            <ol className="mt-3 space-y-2 text-sm leading-6"><li>1. Validation fails</li><li>2. Prediction rejected</li></ol>
          </div>
        </div>
        <p className="text-sm leading-7">This comparison illustrates the intended behavior, not a guaranteed outcome for every image. Green color alone is insufficient, and the heuristic checks can still make mistakes.</p>
      </ProjectSection>
      <ProjectSection id="classification" number="07" title="Classification">
        <p>After validation, feature extraction uses HOG and ORB / Bag-of-Visual-Words TF-IDF. Classical machine-learning approaches were evaluated for classification into Healthy, Early Blight, or Late Blight.</p>
        <ModelMetrics metrics={project.metrics!} caption="Documented classification comparison · approximate results" />
        <p className="text-sm leading-7">These project evaluation results do not establish real-world diagnostic reliability. The application uses Python and a Streamlit interface, with SVM and ensemble approaches explored during experimentation.</p>
      </ProjectSection>
      <ProjectSection id="learned" number="08" title="What I Learned" {...story.learned} />
      <ProjectSection id="limitations" number="09" title="Limitations"><Limitations items={story.limitations} /></ProjectSection>
      <ProjectNavigation project={project} />
    </main>
    <Footer />
  </>;
}

