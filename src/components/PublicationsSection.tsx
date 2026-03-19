import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const publications = [
  { year: "2025", title: "Nitrogen cycling in sub-arctic peatlands: A 10-year longitudinal study.", journal: "Journal of Ecology, Vol 42", authors: "Mercer, A., Chen, L., Okafor, D." },
  { year: "2025", title: "Quantifying the buffering capacity of old-growth forests against extreme precipitation events.", journal: "Global Change Biology, Vol 31", authors: "Vasquez, R., Mercer, A., Johansson, K." },
  { year: "2024", title: "Riparian corridor connectivity and its influence on freshwater macroinvertebrate assemblages.", journal: "Freshwater Biology, Vol 69", authors: "Okafor, D., Patel, S., Mercer, A." },
  { year: "2024", title: "Soil microbial diversity as a predictor of above-ground vegetation resilience.", journal: "Ecology Letters, Vol 27", authors: "Chen, L., Mercer, A." },
  { year: "2023", title: "Landscape-level assessment of habitat fragmentation effects on ungulate movement corridors.", journal: "Conservation Biology, Vol 37", authors: "Johansson, K., Vasquez, R." },
  { year: "2023", title: "Carbon flux variability in temperate deciduous forests: Implications for national inventories.", journal: "Nature Sustainability, Vol 6", authors: "Mercer, A., Chen, L., Okafor, D., Patel, S." },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">Publications</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
            Selected publications
          </h2>
          <p className="mt-3 text-muted-foreground font-body max-w-2xl">
            A curated selection from our 160+ peer-reviewed papers. For a complete list, visit our institutional repository.
          </p>
        </motion.div>

        <div className="mt-12">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.05 }}
              className="group flex flex-col sm:flex-row sm:items-start sm:justify-between py-5 publication-border transition-colors hover:bg-muted/40 px-4 -mx-4 rounded-sm cursor-default"
            >
              <div className="max-w-3xl">
                <span className="font-ui text-xs uppercase tracking-widest text-muted-foreground">{pub.year}</span>
                <h4 className="text-base font-display font-medium text-foreground mt-1">{pub.title}</h4>
                <p className="text-sm text-muted-foreground font-body italic mt-1">
                  {pub.journal}. {pub.authors}.
                </p>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-8 flex-shrink-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1.5 font-ui text-sm font-medium text-primary">
                  <FileText size={14} />
                  PDF
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
