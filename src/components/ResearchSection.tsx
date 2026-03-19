import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Calendar, FileText, ArrowRight } from "lucide-react";
import terrestrialImg from "@/assets/research-terrestrial.jpg";
import aquaticImg from "@/assets/research-aquatic.jpg";
import wildlifeImg from "@/assets/research-wildlife.jpg";
import humanEnvImg from "@/assets/research-human-env.jpg";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const areas = [
  {
    title: "Terrestrial Carbon Sequestration",
    description: "Quantifying carbon storage and flux across temperate and boreal forest ecosystems using eddy covariance towers and soil respiration chambers.",
    image: terrestrialImg,
    alt: "Moss-covered forest floor with ferns",
    fullDetails: {
      overview: "Our terrestrial carbon research program investigates how forests capture and store atmospheric carbon dioxide, contributing to climate change mitigation. We employ cutting-edge measurement technologies to quantify carbon fluxes at multiple scales, from individual soil plots to entire forest landscapes.",
      objectives: [
        "Measure net ecosystem carbon exchange across different forest types and age classes",
        "Understand how climate variability affects seasonal and annual carbon budgets",
        "Develop improved models for predicting forest carbon sequestration under future climate scenarios",
        "Assess the impact of forest management practices on long-term carbon storage"
      ],
      methods: "We operate a network of eddy covariance flux towers that continuously measure CO₂, water vapor, and energy exchange between forests and the atmosphere. Complementing these tower measurements, we conduct intensive soil respiration campaigns using automated chamber systems, and perform regular forest inventory surveys to track biomass changes.",
      team: ["Dr. Adrienne Mercer", "Dr. Lin Chen", "Renata Vasquez"],
      duration: "2016 – Present",
      publications: 28
    }
  },
  {
    title: "Aquatic Ecosystem Dynamics",
    description: "Investigating nutrient cycling, primary productivity, and hydrological connectivity in freshwater wetlands and riparian systems.",
    image: aquaticImg,
    alt: "Wetland lake with reeds",
    fullDetails: {
      overview: "Freshwater ecosystems are critical for biodiversity, water quality, and carbon cycling, yet they remain among the most threatened habitats globally. Our aquatic research focuses on understanding the ecological processes that maintain healthy wetland and stream ecosystems.",
      objectives: [
        "Quantify nutrient spiraling and retention in stream and wetland networks",
        "Assess how hydrological connectivity influences aquatic biodiversity patterns",
        "Monitor water quality changes in response to land-use and climate pressures",
        "Evaluate the effectiveness of wetland restoration for ecosystem service recovery"
      ],
      methods: "We combine high-frequency water quality sensors, stable isotope tracers, and biodiversity surveys to understand nutrient and energy flow through aquatic food webs. Our team conducts seasonal sampling campaigns across a gradient of wetland conditions, from degraded agricultural ditches to pristine reference sites.",
      team: ["Dr. Daniel Okafor", "Dr. Adrienne Mercer", "Sanjay Patel"],
      duration: "2018 – Present",
      publications: 19
    }
  },
  {
    title: "Wildlife Conservation Ecology",
    description: "Assessing population viability, habitat connectivity, and human–wildlife conflict across fragmented landscapes.",
    image: wildlifeImg,
    alt: "Deer in grassland meadow",
    fullDetails: {
      overview: "As landscapes become increasingly fragmented by human development, wildlife populations face growing challenges to their long-term survival. Our conservation ecology research addresses the pressing need to understand how animals persist in human-dominated landscapes.",
      objectives: [
        "Model population viability for key indicator species under different management scenarios",
        "Map habitat connectivity corridors essential for wildlife movement",
        "Develop practical strategies for reducing human–wildlife conflict",
        "Assess the effectiveness of protected area networks for biodiversity conservation"
      ],
      methods: "We use GPS telemetry, camera trap networks, and genetic sampling to track wildlife movements and population dynamics. These field data feed into spatially-explicit population models that help predict how species will respond to future landscape changes. We also work closely with local communities to understand and address human–wildlife conflict situations.",
      team: ["Dr. Karin Johansson", "Renata Vasquez", "James Okwu"],
      duration: "2017 – Present",
      publications: 24
    }
  },
  {
    title: "Human–Environment Interactions",
    description: "Examining land-use change, agricultural intensification, and their cascading effects on biodiversity and ecosystem services.",
    image: humanEnvImg,
    alt: "Agricultural landscape meeting forest edge",
    fullDetails: {
      overview: "Human activities have transformed over 70% of Earth's ice-free land surface, with profound consequences for ecological systems. Our research examines the complex feedbacks between human land use decisions and environmental outcomes, seeking pathways toward more sustainable landscapes.",
      objectives: [
        "Document rates and patterns of land-use change across study regions",
        "Quantify how agricultural intensification affects pollinator communities and crop yields",
        "Map ecosystem service provision across land-use gradients",
        "Identify leverage points for improving sustainability in working landscapes"
      ],
      methods: "We integrate satellite remote sensing with ground-based ecological surveys to track landscape change and its consequences. Our pollinator research combines pan traps, transect surveys, and experimental plots to understand how farming practices affect wild bee communities. We use participatory mapping approaches to incorporate local knowledge into our analyses.",
      team: ["Dr. Adrienne Mercer", "Mia Thornton", "Dr. Lin Chen"],
      duration: "2019 – Present",
      publications: 15
    }
  },
];

interface ResearchArea {
  title: string;
  description: string;
  image: string;
  alt: string;
  fullDetails: {
    overview: string;
    objectives: string[];
    methods: string;
    team: string[];
    duration: string;
    publications: number;
  };
}

const ResearchModal = ({ area, onClose }: { area: ResearchArea; onClose: () => void }) => {
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
        transition={transition}
        className="bg-card rounded-[16px] w-full max-w-3xl max-h-[90vh] overflow-y-auto card-shadow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative">
          <img
            src={area.image}
            alt={area.alt}
            className="w-full aspect-[21/9] object-cover rounded-t-[16px]"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/90 hover:bg-background text-foreground transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-2">Research Area</p>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground leading-tight">
            {area.title}
          </h2>

          {/* Meta info */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              {area.fullDetails.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} />
              {area.fullDetails.team.length} researchers
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FileText size={14} />
              {area.fullDetails.publications} publications
            </span>
          </div>

          {/* Overview */}
          <div className="mt-6">
            <h3 className="font-display font-semibold text-foreground mb-2">Overview</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              {area.fullDetails.overview}
            </p>
          </div>

          {/* Objectives */}
          <div className="mt-6">
            <h3 className="font-display font-semibold text-foreground mb-3">Research Objectives</h3>
            <ul className="space-y-2">
              {area.fullDetails.objectives.map((objective, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-muted-foreground">
                  <ArrowRight size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methods */}
          <div className="mt-6">
            <h3 className="font-display font-semibold text-foreground mb-2">Methods</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              {area.fullDetails.methods}
            </p>
          </div>

          {/* Team */}
          <div className="mt-6">
            <h3 className="font-display font-semibold text-foreground mb-3">Research Team</h3>
            <div className="flex flex-wrap gap-2">
              {area.fullDetails.team.map((member) => (
                <span
                  key={member}
                  className="inline-block px-3 py-1.5 rounded-full bg-muted font-ui text-sm text-foreground"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ResearchSection = () => {
  const [selectedArea, setSelectedArea] = useState<ResearchArea | null>(null);

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
              onClick={() => setSelectedArea(area)}
              className="group bg-card p-6 rounded-[12px] card-shadow cursor-pointer"
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
              <p className="mt-4 inline-flex items-center gap-1 font-ui text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={14} />
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArea && (
          <ResearchModal area={selectedArea} onClose={() => setSelectedArea(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResearchSection;
