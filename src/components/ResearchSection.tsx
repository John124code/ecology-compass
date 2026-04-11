import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Calendar, FileText, ArrowRight } from "lucide-react";

// Research area images from Unsplash
const terrestrialImg = "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80"; // Microscope/cells
const aquaticImg = "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=80"; // Underwater marine life
const wildlifeImg = "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=80"; // Colorful coral/sponge
const humanEnvImg = "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1200&q=80"; // Industrial pollution

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const areas = [
  {
    title: "Ecogenotoxicology & Marine Biomonitoring",
    description: "Deploying sea sponges as model organisms to investigate genotoxicity mechanisms of aquatic pollutants, focusing on bioaccumulation of heavy metals, PAHs, organochlorines, and oil spill chemicals.",
    image: aquaticImg,
    alt: "Marine sponge in aquatic environment",
    fullDetails: {
      overview: "This research program investigates the biological effects of environmental contaminants at the molecular level, with a particular focus on marine organisms. Dr. Chidugu-Ogborigbo pioneered the use of sea sponges as biomonitoring organisms, discovering a new species (Amorphinopsis kalibiama) in the Niger Delta region and developing novel assay techniques for cryopreserved sponge cells.",
      objectives: [
        "Identify sensitive biomarkers for biomonitoring and chemical risk assessments in aquatic ecosystems",
        "Investigate molecular, biochemical, and cellular responses of aquatic organisms to pollutants",
        "Develop and validate genotoxicity assays using marine sponge models",
        "Assess bioaccumulation patterns of heavy metals and organic pollutants in Niger Delta ecosystems"
      ],
      methods: "We employ cutting-edge molecular techniques including the alkaline comet assay and H2DCF-DA assay with cryopreserved sponge cells—methodologies established for the first time by our lab. Our research combines field sampling from polluted and reference sites, laboratory exposure studies, and advanced biochemical analyses to understand contaminant effects at the cellular level.",
      team: ["Dr. Rachael Chidugu-Ogborigbo", "Dr. Silas Fagbero", "Mr. Sunday Nkopuyo"],
      duration: "2014 – Present",
      publications: 15
    }
  },
  {
    title: "Marine Natural Products for Drug Discovery",
    description: "Exploring the therapeutic potential of newly discovered sea sponge species (A. kalibiama) against Type II diabetes and cancer through novel extremozymes and bioactive compounds.",
    image: wildlifeImg,
    alt: "Marine sponge research",
    fullDetails: {
      overview: "Marine organisms produce unique bioactive compounds with significant pharmaceutical potential. Our research focuses on characterizing novel compounds from the newly discovered sponge species Amorphinopsis kalibiama, investigating their therapeutic applications in treating metabolic diseases and cancer.",
      objectives: [
        "Isolate and characterize novel bioactive compounds from marine sponges",
        "Evaluate therapeutic efficacy of marine natural products against Type II diabetes",
        "Investigate anticancer properties of sponge-derived compounds",
        "Discover and characterize novel extremozymes for biotechnological applications"
      ],
      methods: "Our approach integrates marine biodiscovery with pharmacological screening. We conduct bioassay-guided fractionation to isolate active compounds, employ cell culture models to test biological activity, and use molecular techniques to identify and clone genes encoding novel enzymes. This work bridges marine ecology, chemistry, and pharmaceutical sciences.",
      team: ["Dr. Rachael Chidugu-Ogborigbo", "Dr. Ibidapo William", "Dr. Jude Ihugba"],
      duration: "2016 – Present",
      publications: 8
    }
  },
  {
    title: "Environmental Justice & Advocacy",
    description: "Advancing environmental justice through scientific research on pollution impacts in underserved communities, with particular focus on the Niger Delta region's environmental challenges.",
    image: humanEnvImg,
    alt: "Environmental research in Niger Delta",
    fullDetails: {
      overview: "Environmental contamination disproportionately affects marginalized communities worldwide. Our environmental justice research documents pollution impacts in the Niger Delta and other vulnerable regions, producing scientific evidence to support policy reform and community advocacy efforts.",
      objectives: [
        "Document environmental contamination patterns in underserved communities",
        "Assess health and ecological impacts of industrial pollution in the Niger Delta",
        "Provide scientific evidence to support environmental policy reform",
        "Empower local communities through participatory research approaches"
      ],
      methods: "We combine rigorous environmental sampling and analysis with community-engaged research approaches. Our work includes water and sediment quality monitoring, ecological impact assessments, and biomarker studies in exposed populations. We collaborate closely with local communities and advocacy organizations to ensure research findings inform policy and remediation efforts.",
      team: ["Dr. Rachael Chidugu-Ogborigbo", "Mr. Praise Nnaji"],
      duration: "2015 – Present",
      publications: 6
    }
  },
  {
    title: "Cellular Toxicology & Chemical Safety",
    description: "Investigating cellular and molecular mechanisms of toxicity for chemical risk assessment, including CYP gene cloning in sea sponges as biomarkers of environmental contamination.",
    image: terrestrialImg,
    alt: "Cellular toxicology research",
    fullDetails: {
      overview: "Understanding how chemicals affect biological systems at the cellular level is fundamental to protecting both human and environmental health. Our cellular toxicology research develops sensitive biomarkers and investigates mechanisms of toxic action, contributing to improved chemical safety assessments.",
      objectives: [
        "Clone and characterize CYP genes in sea sponges as biomarkers of pollution exposure",
        "Elucidate molecular mechanisms underlying chemical toxicity",
        "Develop cell-based assays for chemical hazard identification",
        "Support risk assessment frameworks with mechanistic toxicity data"
      ],
      methods: "We use a combination of molecular biology, biochemistry, and cell biology techniques. Key approaches include gene cloning and expression analysis, cellular stress response assays, and mechanistic studies using in vitro models. Our biomarker development work integrates field observations with laboratory validation to ensure environmental relevance.",
      team: ["Dr. Rachael Chidugu-Ogborigbo", "Dr. Silas Fagbero", "Dr. Ibidapo William"],
      duration: "2017 – Present",
      publications: 7
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm overflow-hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={transition}
        className="bg-card rounded-[16px] w-full max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden card-shadow"
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

  const handleOpenModal = (area: ResearchArea) => {
    setSelectedArea(area);
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.documentElement.style.width = "100%";
  };

  const handleCloseModal = () => {
    setSelectedArea(null);
    document.body.style.overflow = "unset";
    document.body.style.overflowX = "unset";
    document.documentElement.style.overflow = "unset";
    document.documentElement.style.overflowX = "unset";
    document.documentElement.style.width = "auto";
  };

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
              onClick={() => handleOpenModal(area)}
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
          <ResearchModal area={selectedArea} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResearchSection;
