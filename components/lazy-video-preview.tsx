'use client';

import { useEffect, useRef, useState } from 'react';

type LazyVideoPreviewProps = {
  src: string;
  poster: string;
  alt: string;
  emphasis?: boolean;
};

export function LazyVideoPreview({ src, poster, alt, emphasis = false }: LazyVideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) videoRef.current?.play().catch(() => undefined);
  }, [isPlaying]);

  return <div className={`inline-video${emphasis ? ' inline-video-emphasis' : ''}`}>
    {isPlaying ? <video ref={videoRef} controls playsInline preload="none" poster={poster} src={src} aria-label={alt} /> : <button type="button" className="video-poster" onClick={() => setIsPlaying(true)} aria-label={`播放${alt}`}><img src={poster} alt={alt} loading="lazy" /><span className="inline-play" aria-hidden="true">▶</span></button>}
  </div>;
}
