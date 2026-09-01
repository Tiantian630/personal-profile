'use client';

import { useState } from 'react';

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};

export function ImageWithFallback({ src, alt, label, className = '' }: ImageWithFallbackProps) {
  const [isMissing, setIsMissing] = useState(false);

  if (isMissing) {
    return <div className={`image-placeholder ${className}`}><span>{label}</span><small>{src.replace(/^\//, '')}</small></div>;
  }

  return <div className={`local-image ${className}`}><img src={src} alt={alt} loading="lazy" onError={() => setIsMissing(true)} /></div>;
}
