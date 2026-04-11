import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { pdf } from "@react-pdf/renderer";
import { CVDocument } from "@/utils/cv-data";

// Marine research underwater scene
const heroImage = "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=2000&q=80";

const transition = { duration: 0.8, ease: [0.2, 0, 0, 1] as const };

const HeroSection = () => {
  const handleDownloadCV = async () => {
    const blob = await pdf(<CVDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Dr_Rachael_Chidugu-Ogborigbo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-[85vh] flex items-end pb-12 pt-24 md:pb-24 md:pt-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Underwater marine research environment"
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
            UWE Bristol · HAS - Applied Sciences
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-primary-foreground leading-[1.1] tracking-tight">
            Dr. Rachael Chidugu-Ogborigbo
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 font-body leading-relaxed max-w-2xl text-wrap-pretty">
            Senior Lecturer in Biological Sciences specializing in ecogenotoxicology, marine natural products, and the biological effects of environmental contaminants at the molecular level.
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#research"
              className="inline-flex items-center px-6 py-3 rounded-sm bg-primary-foreground text-foreground font-ui text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
            >
              View Research
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-sm border border-primary-foreground/30 text-primary-foreground font-ui text-sm font-medium hover:border-primary-foreground/60 transition-colors"
            >
              Get in Touch
            </a>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-primary-foreground/30 text-primary-foreground font-ui text-sm font-medium hover:border-primary-foreground/60 transition-colors"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-12 text-primary-foreground/70">
            <div>
              <span className="block text-xl sm:text-2xl font-display font-semibold text-primary-foreground">£151K+</span>
              <span className="text-[10px] sm:text-xs font-ui uppercase tracking-wide">Research Funding</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-display font-semibold text-primary-foreground">15</span>
              <span className="text-[10px] sm:text-xs font-ui uppercase tracking-wide">Peer-reviewed articles</span>
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-display font-semibold text-primary-foreground">1</span>
              <span className="text-[10px] sm:text-xs font-ui uppercase tracking-wide">New species discovered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
