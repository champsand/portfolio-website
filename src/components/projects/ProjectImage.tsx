import Image from "next/image";

interface ProjectImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export default function ProjectImage({ src, alt, width, height, caption }: ProjectImageProps) {
  return (
    <figure>
      <Image src={src} alt={alt} width={width} height={height}
        sizes="(min-width: 1276px) 1180px, (min-width: 1024px) calc(100vw - 96px), (min-width: 768px) calc(100vw - 80px), calc(100vw - 48px)"
        className="h-auto w-full rounded-sm border border-line" />
      {caption && <figcaption className="mt-4 font-mono text-xs leading-6 text-secondary">{caption}</figcaption>}
    </figure>
  );
}
