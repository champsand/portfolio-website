import Image from "next/image";
import styles from "./About.module.css";

type AboutArtifactProps = {
  index: string;
  label: string;
  caption: string;
  variant: "workspace" | "notes";
  image?: { src: string; alt: string };
};

// Supply a real image with a meaningful alt and update its caption when available.
export default function AboutArtifact({ index, label, caption, variant, image }: AboutArtifactProps) {
  return (
    <figure className={`${styles.artifact} ${styles[variant]}`}>
      <div className={styles.artifactVisual}>
        {image ? (
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 1099px) 50vw, 480px" className={styles.image} />
        ) : (
          <>
            <div className={styles.geometry} aria-hidden="true"><span /><span /><span /></div>
            <div className={styles.slotLabel}><span className="eyebrow">Personal artifact / {index}</span><p>{label}</p><span className={styles.reserved}>Reserved for a real {variant === "workspace" ? "photograph" : "notebook page"}</span></div>
          </>
        )}
      </div>
      <figcaption><span>{index} / {label}</span><span>{caption}</span></figcaption>
    </figure>
  );
}
