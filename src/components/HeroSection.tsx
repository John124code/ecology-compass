import { motion } from "framer-motion";
import heroImage from "@/assets/hero-forest.jpg";

const transition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-end pb-24 pt-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Aerial view of a forest research site at dawn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-primary-foreground/70 mb-4">
            Department of Environmental Sciences · Est. 2008
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-primary-foreground leading-[1.1] tracking-tight">
            Quantifying ecosystem resilience in the Anthropocene
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed max-w-2xl text-wrap-pretty">
            We investigate the mechanisms that sustain biodiversity, carbon cycling, and ecological function across terrestrial and aquatic systems under global change.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#research"
              className="inline-flex items-center px-6 py-3 rounded-sm bg-primary-foreground text-foreground font-ui text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              Our Research
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-sm border border-primary-foreground/30 text-primary-foreground font-ui text-sm font-medium hover:border-primary-foreground/60 transition-colors"
            >
              Join the Lab
            </a>
          </div>
          <div className="mt-12 flex gap-12 text-primary-foreground/70">
            <div>
              <span className="block text-2xl font-display font-semibold text-primary-foreground">4,200+</span>
              <span className="text-xs font-ui uppercase tracking-wide">Hectares monitored</span>
            </div>
            <div>
              <span className="block text-2xl font-display font-semibold text-primary-foreground">12</span>
              <span className="text-xs font-ui uppercase tracking-wide">Longitudinal sites</span>
            </div>
            <div>
              <span className="block text-2xl font-display font-semibold text-primary-foreground">160+</span>
              <span className="text-xs font-ui uppercase tracking-wide">Publications</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
