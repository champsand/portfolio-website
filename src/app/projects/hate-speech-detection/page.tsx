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
import HateSpeechAnalysis from "@/components/projects/HateSpeechAnalysis";
import ExternalLink from "@/components/ui/ExternalLink";
import { hateSpeechStory as story } from "@/data/case-studies/hate-speech";

const project = projects.find((item) => item.slug === "hate-speech-detection")!;
export const metadata = pageMetadata(project.title, "A case study about an Indonesian NLP project combining contextual hate-speech classification with separate abusive-language detection.", project.caseStudyHref!);

export default function HateSpeechPage() {
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <ProjectHero project={project} focus={story.focus} />
      <Container className="pb-16 md:pb-24">
        <ProjectImage src={project.image} width={1912} height={1074}
          alt="Indonesian Hate Speech Detector interface showing text analysis results and model probabilities."
          caption="The interface presents contextual predictions alongside supporting language-level information." />
      </Container>
      <ProjectSection id="overview" number="01" title="Overview" {...story.overview} />
      <ProjectSection id="problem" number="02" title="The Problem" {...story.problem} />
      <ProjectSection id="role" number="03" title="My Role" paragraphs={[story.role]}>
        <ContributionDetails items={story.contributions} />
      </ProjectSection>
      <ProjectSection id="how-it-works" number="04" title="How It Works">
        <HateSpeechAnalysis />
        <p>Preprocessing includes lowercasing and cleanup, URL and mention handling, common character normalization, slang normalization, and stopword handling.</p>
        <p>The current deployed detector primarily uses fine-tuned IndoBERT. The abusive-language lexicon independently checks processed terms and short phrases.</p>
        <p className="text-sm leading-7">Built in Python with a Streamlit interface. Resources include an Indonesian text dataset, a slang normalization dictionary, and an abusive-language lexicon.</p>
        {project.repositoryUrl && <ExternalLink href={project.repositoryUrl} className="text-link">Hugging Face repository</ExternalLink>}
      </ProjectSection>
      <ProjectSection id="challenge" number="05" title="The Challenge" {...story.challenge} />
      <ProjectSection id="solution" number="06" title="The Solution" {...story.solution}>
        <dl className="grid gap-6 pt-3 sm:grid-cols-2">
          <div className="border-t border-accent/40 pt-5">
            <dt className="font-mono text-xs text-accent">MODEL RESULT</dt>
            <dd className="mt-3 text-base leading-7"><span className="block text-foreground">Overall context</span>Safe / Toxic probability</dd>
          </div>
          <div className="border-t border-line pt-5">
            <dt className="font-mono text-xs text-secondary">LEXICON RESULT</dt>
            <dd className="mt-3 text-base leading-7"><span className="block text-foreground">Specific expressions</span>Flagged abusive terms</dd>
          </div>
          <div className="border-t border-line pt-5 sm:col-span-2">
            <dt className="font-mono text-xs text-foreground">COMBINED INTERFACE</dt>
            <dd className="mt-3 text-base leading-7">Shows both pieces of information, preserving the distinction between contextual prediction and specific expressions.</dd>
          </div>
        </dl>
        <p>The interface may show an “Abusive / Profane” state when the model does not strongly predict hate speech but lexicon matches are present. This is a presentation of two analysis layers, not a third model class.</p>
      </ProjectSection>
      <ProjectSection id="experimentation" number="07" title="Model Experimentation">
        <p>We compared IndoBERT, Logistic Regression, SVM, and Naive Bayes. IndoBERT provided the strongest documented accuracy among these experiments.</p>
        <ModelMetrics metrics={project.metrics!} caption="Documented model comparison · accuracy" />
        <p className="text-sm leading-7">The additional models were used for comparison and experimentation. The live prediction is primarily from IndoBERT, not an ensemble of all four models.</p>
      </ProjectSection>
      <ProjectSection id="learned" number="08" title="What I Learned" {...story.learned} />
      <ProjectSection id="limitations" number="09" title="Limitations"><Limitations items={story.limitations} /></ProjectSection>
      <ProjectNavigation project={project} />
    </main>
    <Footer />
  </>;
}

