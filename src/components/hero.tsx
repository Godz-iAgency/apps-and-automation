import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroAnimation } from "@/components/hero-animation";
import { discoveryCallUrl } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">AI-powered apps · Custom builds</p>
          <h1 id="hero-heading" className="hero-headline">We build AI-powered apps, custom automations, and subscription-based digital products.</h1>
          <p className="hero-description">Across health, finance, education, and music.</p>
          <div className="hero-actions">
            <a href={discoveryCallUrl} className="button button-accent" target="_blank" rel="noopener noreferrer">Book a Free Call <ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            <a href="#work" className="hero-contact">Our Apps <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <HeroAnimation />
      </div>
    </section>
  );
}
