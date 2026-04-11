import { motion } from "framer-motion";

// Marine sponge close-up
const fieldworkImage = "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80";

const transition = { duration: 0.6, ease: [0.2, 0, 0, 1] as const };

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
          >
            <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
              Pioneering research in ecogenotoxicology and marine natural products
            </h2>
            <div className="mt-6 space-y-4 font-body text-muted-foreground leading-relaxed text-wrap-pretty">
              <p>
                Dr. Rachael Chidugu-Ogborigbo is a Senior Lecturer in Biological Sciences at UWE Bristol, specializing in ecogenotoxicology—the biological effects of environmental contaminants at the molecular level. Her groundbreaking research investigates molecular, biochemical, and cellular responses of aquatic organisms to inorganic and organic pollutants.
              </p>
              <p>
                With a PhD in Environmental Toxicology from the University of Birmingham, Dr. Chidugu-Ogborigbo has made significant contributions to environmental science, including the discovery of a new sponge species, <em>Amorphinopsis kalibiama</em>, in the Niger Delta region of Nigeria. She developed and established for the first time the amenability of the alkaline comet assay and H2DCF-DA assay with cryopreserved sponge cells.
              </p>
              <p>
                Her research focuses on identifying sensitive biomarkers for biomonitoring and chemical risk assessments, exploring the therapeutic potential of marine natural products against Type II diabetes and cancer, and advancing environmental justice through scientific advocacy. She is committed to deploying sea sponges as model organisms for investigating genotoxicity mechanisms of aquatic pollutants.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden image-outline">
              <img
                src={fieldworkImage}
                alt="Colorful marine sponges in their natural habitat"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
