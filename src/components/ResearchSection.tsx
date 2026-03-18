import { motion } from "framer-motion";
import terrestrialImg from "@/assets/research-terrestrial.jpg";
import aquaticImg from "@/assets/research-aquatic.jpg";
import wildlifeImg from "@/assets/research-wildlife.jpg";
import humanEnvImg from "@/assets/research-human-env.jpg";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] };

const areas = [
  {
    title: "Terrestrial Carbon Sequestration",
    description: "Quantifying carbon storage and flux across temperate and boreal forest ecosystems using eddy covariance towers and soil respiration chambers.",
    image: terrestrialImg,
    alt: "Moss-covered forest floor with ferns",
  },
  {
    title: "Aquatic Ecosystem Dynamics",
    description: "Investigating nutrient cycling, primary productivity, and hydrological connectivity in freshwater wetlands and riparian systems.",
    image: aquaticImg,
    alt: "Wetland lake with reeds",
  },
  {
    title: "Wildlife Conservation Ecology",
    description: "Assessing population viability, habitat connectivity, and human–wildlife conflict across fragmented landscapes.",
    image: wildlifeImg,
    alt: "Deer in grassland meadow",
  },
  {
    title: "Human–Environment Interactions",
    description: "Examining land-use change, agricultural intensification, and their cascading effects on biodiversity and ecosystem services.",
    image: humanEnvImg,
    alt: "Agricultural landscape meeting forest edge",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">Research Areas</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight max-w-2xl">
            Core research themes spanning multiple scales and systems
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...transition, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card p-6 rounded-[12px] card-shadow cursor-default"
            >
              <div className="rounded-lg overflow-hidden image-outline">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="aspect-video w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ transitionTimingFunction: "cubic-bezier(0.2, 0, 0, 1)" }}
                />
              </div>
              <h3 className="mt-6 text-xl font-display font-semibold text-foreground">{area.title}</h3>
              <p className="mt-2 text-muted-foreground font-body leading-relaxed text-wrap-pretty">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
