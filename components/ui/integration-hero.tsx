"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { brands, type Brand } from "@/lib/brands";
import { ActionLink, Arrow, headingStyles } from "../ui";

function BrandRow({ items, reverse = false }: { items: Brand[]; reverse?: boolean }) {
  const slider = useRef<HTMLDivElement>(null);
  const interaction = useRef({ active: false, paused: false, lastX: 0, resumeAt: 0 });

  useEffect(() => {
    const element = slider.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    let position = 0;
    let distance = 0;
    const measure = () => {
      distance = element.querySelector<HTMLElement>(".brand-marquee-group")?.offsetWidth ?? 0;
      position = distance;
      element.scrollLeft = position;
    };
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    measure();
    const tick = (time: number) => {
      const delta = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      const state = interaction.current;
      if (state.active || state.paused || time < state.resumeAt || reduced.matches) {
        position = element.scrollLeft;
      } else if (distance > 0) {
        position += delta * (reverse ? -0.035 : 0.035);
        if (position >= distance * 2) position -= distance;
        if (position < distance) position += distance;
        element.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [reverse]);

  return <div ref={slider} className="brand-marquee-row" tabIndex={0} role="region" aria-label="Brand logos. Swipe, drag, or use left and right arrow keys to scroll." data-lenis-prevent
    onMouseEnter={() => { interaction.current.paused = true; }}
    onMouseLeave={() => { interaction.current.paused = false; }}
    onFocus={() => { interaction.current.paused = true; }}
    onBlur={() => { interaction.current.paused = false; }}
    onTouchStart={() => { interaction.current.active = true; }}
    onTouchEnd={() => { interaction.current.active = false; interaction.current.resumeAt = performance.now() + 2500; }}
    onTouchCancel={() => { interaction.current.active = false; interaction.current.resumeAt = performance.now() + 2500; }}
    onWheel={() => { interaction.current.resumeAt = performance.now() + 2500; }}
    onKeyDown={event => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      event.currentTarget.scrollLeft += event.key === "ArrowRight" ? 180 : -180;
      interaction.current.resumeAt = performance.now() + 2500;
    }}
    onPointerDown={event => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      event.preventDefault();
      interaction.current.active = true;
      interaction.current.lastX = event.clientX;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = "true";
    }}
    onPointerMove={event => {
      if (event.pointerType !== "mouse" || !interaction.current.active) return;
      event.currentTarget.scrollLeft += interaction.current.lastX - event.clientX;
      interaction.current.lastX = event.clientX;
    }}
    onLostPointerCapture={event => {
      interaction.current.active = false;
      interaction.current.resumeAt = performance.now() + 2500;
      event.currentTarget.dataset.dragging = "false";
    }}
    onPointerUp={event => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    }}>
    <div className="brand-marquee-track" data-reverse={reverse}>
      {[0, 1, 2].map(copy => <ul key={copy} aria-hidden={copy !== 1 ? true : undefined} className="brand-marquee-group">
        {items.map(brand => <li key={brand.name} className="brand-wordmark-card">
          <span className="brand-logo-badge" data-dark={brand.darkBadge} data-has-logo={Boolean(brand.logo)}>
            {brand.logo ? <Image src={brand.logo} alt={`${brand.name} logo`} width={100} height={80} draggable={false} className="brand-logo-image" unoptimized /> : <span className="brand-wordmark-name font-heading">{brand.name}</span>}
          </span>
          <span className="brand-caption">{brand.name}</span>
        </li>)}
      </ul>)}
    </div>
  </div>;
}

export default function IntegrationHero() {
  const rowSize = Math.ceil(brands.length / 3);
  const rows = Array.from({ length: 3 }, (_, index) => brands.slice(index * rowSize, (index + 1) * rowSize));

  return <section id="brands" aria-labelledby="brands-heading" className="relative overflow-hidden border-y border-line bg-background py-[65px] min-[751px]:py-[85px] min-[1101px]:py-[115px]">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(#fac90326_1px,transparent_1px)] [background-size:24px_24px]" />
    <div className="relative mx-auto max-w-[850px] px-6 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-2 text-[10px] tracking-[1.5px] text-brand"><span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />OUR BRANDS</span>
      <h2 id="brands-heading" className={`${headingStyles} mt-6`}>Different brands.<br /><span className="text-brand">Shared creative energy.</span></h2>
      <p className="mx-auto mt-6 max-w-[460px] text-sm leading-[1.9] text-muted">The brands we work with. The stories we bring to life.</p>
      <ActionLink href="/work" className="mt-8 inline-flex items-center gap-5 rounded-lg border border-brand bg-brand px-6 py-3 text-xs text-black hover:bg-black hover:text-brand focus-visible:bg-black focus-visible:text-brand">Explore Our Work <Arrow className="text-lg" /></ActionLink>
    </div>
    <div className="brand-carousel relative mx-auto mt-12 max-w-[1280px] min-[751px]:mt-16" role="region" aria-label="Brands we work with">
      {rows.map((items, index) => <BrandRow key={index} items={items} reverse={index === 1} />)}
    </div>
  </section>;
}

