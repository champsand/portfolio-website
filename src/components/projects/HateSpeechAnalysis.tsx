import { ArrowDown } from "lucide-react";

export default function HateSpeechAnalysis() {
  return <figure aria-label="Two separate analysis layers" className="rounded-sm border border-line bg-surface p-5 text-sm leading-6 sm:p-8">
    <div className="text-center">
      <p className="font-medium text-foreground">Indonesian Text</p>
      <ArrowDown className="mx-auto my-3 text-secondary" size={18} aria-hidden="true" />
      <p className="font-medium text-foreground">Preprocessing</p>
      <p className="mt-2 text-xs">Cleanup · normalization · slang · stopwords</p>
    </div>
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      <div className="border-t border-accent/40 pt-5">
        <p className="font-mono text-xs text-accent">01 / CONTEXTUAL MODEL</p>
        <h3 className="mt-3 text-base font-medium text-foreground">Fine-tuned IndoBERT</h3>
        <ArrowDown className="my-3" size={18} aria-hidden="true" />
        <p>Safe / Non-toxic probability</p>
        <p>Toxic / Hate-speech risk probability</p>
      </div>
      <div className="border-t border-line pt-5">
        <p className="font-mono text-xs text-secondary">02 / LEXICON MATCHING</p>
        <h3 className="mt-3 text-base font-medium text-foreground">Abusive-language lexicon</h3>
        <ArrowDown className="my-3" size={18} aria-hidden="true" />
        <p>Matched words and short phrases</p>
        <p className="mt-2 text-xs">Separate evidence, not a second classifier.</p>
      </div>
    </div>
    <div className="mt-6 border-t border-line pt-5 text-center">
      <ArrowDown className="mx-auto mb-3" size={18} aria-hidden="true" />
      <p className="font-medium text-foreground">Result UI</p>
      <p className="mt-1">Contextual probabilities + matched expressions</p>
    </div>
    <figcaption className="mt-6 border-t border-line pt-4 text-xs leading-6">After preprocessing, two separate analysis paths feed the same interface. The model provides binary contextual information; lexicon matching supplies language-level evidence.</figcaption>
  </figure>;
}

