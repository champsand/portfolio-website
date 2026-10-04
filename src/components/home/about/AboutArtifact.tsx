import Image from "next/image";
import styles from "./About.module.css";

type AboutArtifactProps = {
  index: string;
  label: string;
  caption?: string;
  variant: "team" | "principles";
  image?: { src: string; alt: string };
};

export default function AboutArtifact({ index, label, caption, variant, image }: AboutArtifactProps) {
  return (
    <figure className={`${styles.artifact} ${styles[variant]}`}>
      <p className={styles.artifactIndex}>Personal artifact / {index}</p>
      <div className={styles.artifactVisual}>
        {image ? (
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 600px) calc(100vw - 72px), (max-width: 1099px) 48vw, 460px" loading="lazy" className={styles.image} />
        ) : (
          <ol className={styles.principleList}>
            {["Plan", "Listen", "Adjust"].map((principle, position) => (
              <li key={principle}><span aria-hidden="true">{String(position + 1).padStart(2, "0")}</span>{principle}</li>
            ))}
          </ol>
        )}
      </div>
      <figcaption><span>{label}</span>{caption && <span>{caption}</span>}</figcaption>
    </figure>
  );
}
