import { motion } from "framer-motion";
import fieldworkImage from "@/assets/fieldwork-soil.jpg";

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
            <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">About the Lab</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
              Understanding ecosystems from the ground up
            </h2>
            <div className="mt-6 space-y-4 font-body text-muted-foreground leading-relaxed text-wrap-pretty">
              <p>
                The Mercer Ecology Lab is a university-affiliated research group dedicated to understanding the structure, function, and resilience of ecosystems under environmental change. Our work spans terrestrial and aquatic systems, with a focus on biodiversity dynamics, carbon cycling, and conservation biology.
              </p>
              <p>
                Founded in 2008, we combine long-term field monitoring with advanced analytical methods to produce data that informs both scientific understanding and environmental policy. Our team of faculty, postdoctoral researchers, and graduate students operates across 12 longitudinal field sites in temperate and sub-arctic regions.
              </p>
              <p>
                We are committed to open science, interdisciplinary collaboration, and training the next generation of ecological researchers.
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
                alt="Researcher examining soil samples in the field"
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
