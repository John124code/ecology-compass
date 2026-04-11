import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const news = [
  {
    date: "Mar 2025",
    category: "Conference",
    title: "Lab research featured at Minoritised Life Science Futures Forum",
    summary: "Sea sponges as novel biomonitoring tools in the Niger Delta research presented at major diversity in science conference in Birmingham.",
    details: "Dr. Chidugu-Ogborigbo and research team presented their groundbreaking work on using sea sponges as sentinel organisms for environmental biomonitoring at the prestigious Minoritised Life Science Futures Forum. The presentation highlighted the genotoxicity assessment methodologies developed by the lab and their application to monitoring pollution in the Niger Delta region.",
  },
  {
    date: "Feb 2025",
    category: "Award",
    title: "Recognition as Guest Speaker at CBAS Conference 2025",
    summary: "Dr. Chidugu-Ogborigbo received appreciation plaque for contributions as key speaker at Centre for Biological Sciences Conference.",
    details: "In recognition of her contributions and expertise, Dr. Rachael Chidugu-Ogborigbo was honored with an appreciation plaque at the 2025 Centre for Biological Sciences (CBAS) Conference. Her keynote address focused on marine natural products discovery and their therapeutic applications against chronic diseases.",
  },
  {
    date: "Jan 2025",
    category: "Publication",
    title: "New publication on heavy metal bioaccumulation in marine sponges",
    summary: "Latest research on bioaccumulation and genotoxic effects of heavy metal pollution in Niger Delta sponges published in Marine Pollution Bulletin.",
    details: "The research team published their latest findings on bioaccumulation and genotoxic effects of heavy metal pollution in marine sponges from the Niger Delta in Marine Pollution Bulletin (2024, Vol. 211, 117386). The study documents mercury, cadmium, and lead bioaccumulation patterns across polluted and reference sites, providing critical data for environmental risk assessment.",
  },
  {
    date: "Jul 2024",
    category: "Award",
    title: "UKEMS Dr Eleanor Wilde Memorial Award for postgraduate research",
    summary: "Research team recognized for excellence in environmental mutagenesis research at UKEMS Annual Meeting in Bath.",
    details: "The research team's postgraduate work on 'Sea Sponges Reveal Pollution in the Niger Delta: A Genotoxicity Study' was recognized with the prestigious Dr Eleanor Wilde Memorial Award from the United Kingdom Environmental Mutagenesis Society (UKEMS) at their annual meeting in Bath. This award recognizes outstanding contributions to environmental mutagenesis research.",
  },
];

const NewsModal = ({ item, onClose }: { item: any; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
        className="bg-card rounded-[16px] w-full max-w-2xl card-shadow p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-ui text-xs uppercase tracking-widest text-muted-foreground">{item.date}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="font-ui text-xs uppercase tracking-widest text-secondary">{item.category}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-background/90 hover:bg-background text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <h2 className="text-xl md:text-2xl font-display font-semibold text-foreground leading-tight mb-4">{item.title}</h2>
        <p className="font-body text-muted-foreground leading-relaxed mb-4">{item.details}</p>

        <div className="bg-muted/30 border border-border rounded-lg p-4">
          <p className="font-body text-sm text-muted-foreground">{item.summary}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const handleOpenModal = (item: any) => {
    setSelectedNews(item);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = "unset";
  };
  return (
    <section id="news" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">News & Updates</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
            Latest from the lab
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group bg-card p-6 rounded-[12px] card-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-ui text-xs uppercase tracking-widest text-muted-foreground">{item.date}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="font-ui text-xs uppercase tracking-widest text-secondary">{item.category}</span>
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">{item.summary}</p>
              <button
                onClick={() => handleOpenModal(item)}
                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <span className="inline-flex items-center gap-1 font-ui text-sm font-medium text-primary hover:text-primary/80">
                  Read more <ArrowUpRight size={14} />
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedNews && (
            <NewsModal item={selectedNews} onClose={handleCloseModal} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NewsSection;
