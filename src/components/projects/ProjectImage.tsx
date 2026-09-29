import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  eager?: boolean;
}

export default function ProjectImage({ src, alt, width, height, caption, eager = false }: ProjectImageProps) {
  return (
    <figure className="case-image">
      <Image src={src} alt={alt} width={width} height={height}
        loading={eager ? "eager" : "lazy"}
        sizes={eager ? "(min-width: 1100px) 55vw, calc(100vw - 48px)" : "(min-width: 1600px) 1360px, (min-width: 768px) 85vw, calc(100vw - 48px)"}
        className="h-auto w-full rounded-sm border border-line" />
      <figcaption className="case-image-caption">
        {caption && <span>{caption}</span>}
        <a href={src} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`Open full-size image: ${alt} (opens in a new tab)`}>Full-size image <span aria-hidden="true">↗</span></a>
      </figcaption>
    </figure>
  );
}
