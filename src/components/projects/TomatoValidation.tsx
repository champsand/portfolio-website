import { ArrowDown, CornerDownRight } from "lucide-react";

export default function TomatoValidation() {
  return <figure aria-label="Validation before disease classification" className="rounded-sm border border-line bg-surface p-5 text-sm leading-6 sm:p-8">
    <p className="font-medium text-foreground">User Upload</p>
    <ArrowDown className="my-4" size={18} aria-hidden="true" />
    <div className="border-l-2 border-accent pl-5">
      <p className="font-mono text-xs text-accent">PRE-CLASSIFICATION GATE</p>
      <h3 className="mt-2 text-lg font-medium text-foreground">Leaf Validation</h3>
      <p className="mt-2">Does the image appear sufficiently leaf-like?</p>
    </div>
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      <div className="border-t border-line pt-5">
        <p className="flex items-center gap-2 font-mono text-xs text-secondary"><CornerDownRight size={16} aria-hidden="true" />NO / REJECT</p>
        <p className="mt-3 font-medium text-foreground">Reject Input</p>
        <p className="mt-2">Stop here. No disease prediction.</p>
      </div>
      <div className="border-t border-accent/40 pt-5">
        <p className="flex items-center gap-2 font-mono text-xs text-accent"><ArrowDown size={16} aria-hidden="true" />YES / CONTINUE</p>
        <p className="mt-3 font-medium text-foreground">Feature Extraction</p>
        <p className="mt-1 text-xs">HOG + ORB / Bag-of-Visual-Words TF-IDF</p>
        <ArrowDown className="my-3" size={18} aria-hidden="true" />
        <p className="font-medium text-foreground">Disease Classifier</p>
        <ArrowDown className="my-3" size={18} aria-hidden="true" />
        <ul className="space-y-1"><li>Healthy</li><li>Early Blight</li><li>Late Blight</li></ul>
      </div>
    </div>
    <figcaption className="mt-6 border-t border-line pt-4 text-xs leading-6">Rejected uploads never reach disease classification. Passing this heuristic gate does not verify that the image is specifically a tomato leaf.</figcaption>
  </figure>;
}

