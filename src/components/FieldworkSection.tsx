import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const projects = [
  {
    title: "Niger Delta Marine Sponge Biodiversity Assessment",
    location: "Niger Delta, Nigeria",
    period: "2014 – Present",
    description: "Comprehensive survey of marine sponge species in the Niger Delta region. This pioneering research led to the discovery of a new sponge species, Amorphinopsis kalibiama, in the oil-rich coastal waters. The project investigates bioaccumulation patterns of heavy metals (mercury, cadmium, lead), polycyclic aromatic hydrocarbons (PAHs), and organochlorine compounds in sponge populations across polluted and reference sites.",
    highlights: ["Discovery of new species A. kalibiama", "Heavy metal bioaccumulation studies", "PAH contamination mapping"],
    status: "Active",
  },
  {
    title: "Genotoxicity Biomonitoring Program",
    location: "Niger Delta & Reference Sites",
    period: "2016 – Present",
    description: "Long-term monitoring program using sea sponges as sentinel organisms to assess genotoxic effects of aquatic pollutants. Pioneered the use of the alkaline comet assay and H2DCF-DA (oxidative stress) assay with cryopreserved sponge cells—methodologies established for the first time by this research group. The program compares DNA damage levels between polluted Niger Delta sites and clean reference locations.",
    highlights: ["Novel cryopreserved cell assay protocols", "Alkaline comet assay development", "Long-term environmental monitoring"],
    status: "Active",
  },
  {
    title: "Marine Natural Products Drug Discovery",
    location: "UWE Bristol Laboratory & Niger Delta",
    period: "2017 – Present",
    description: "Exploration of therapeutic potential from the newly discovered sponge species A. kalibiama. Research focuses on isolating and characterizing novel bioactive compounds with applications against Type II diabetes and cancer. The project also investigates marine extremozymes from sponge-microbial symbiosis for biotechnological applications in sustainable industrial processes.",
    highlights: ["Anti-diabetic compound screening", "Anticancer bioactivity research", "Marine extremozyme discovery"],
    status: "Active",
  },
  {
    title: "Environmental Justice & Community Engagement",
    location: "Niger Delta Communities",
    period: "2015 – 2023",
    description: "Community-engaged research documenting pollution impacts on underserved Niger Delta communities affected by decades of oil exploration. The project provided scientific evidence supporting environmental policy reform and remediation efforts, combining rigorous environmental sampling with participatory research approaches to empower local stakeholders.",
    highlights: ["Community participatory research", "Policy advocacy support", "Environmental remediation evidence"],
    status: "Completed",
  },
];

const FieldworkSection = () => {
  return (
    <section id="fieldwork" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">Fieldwork & Projects</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight max-w-2xl">
            Ongoing and completed field studies
          </h2>
        </motion.div>

        <div className="mt-12 space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.1 }}
              className="bg-card rounded-[12px] card-shadow p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-sm font-ui text-xs font-medium ${
                      project.status === "Active"
                        ? "bg-primary/10 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 font-body text-muted-foreground leading-relaxed text-wrap-pretty">{project.description}</p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted font-ui text-xs text-foreground"
                        >
                          <CheckCircle size={12} className="text-primary" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground font-ui lg:text-right flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 lg:justify-end">
                    <MapPin size={14} />
                    {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 lg:justify-end">
                    <Calendar size={14} />
                    {project.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldworkSection;
