"use client";

import { useEffect, useRef, type VideoHTMLAttributes } from "react";

export function AutoplayVideo(props: VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let started = false;
    let disposed = false;
    video.defaultMuted = true;
    video.muted = true;
    const play = () => {
      if (disposed || started || document.visibilityState === "hidden") return;
      void video.play().then(() => { started = true; }).catch(() => {
        // Browser power-saving or autoplay policy can require a user gesture.
        // Leave native controls available and retry when interaction is allowed.
      });
    };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) play();
    });
    observer.observe(video);
    video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", play);
    document.addEventListener("pointerdown", play);
    document.addEventListener("keydown", play);
    play();
    return () => {
      disposed = true;
      observer.disconnect();
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", play);
      document.removeEventListener("pointerdown", play);
      document.removeEventListener("keydown", play);
    };
  }, [props.src]);

  return <video {...props} ref={ref} autoPlay muted loop playsInline controls preload="metadata" />;
}
