import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const collaborators = [
  {
    name: "Dr. Nikolas J Hodges",
    institution: "School of Biosciences, University of Birmingham",
    location: "Birmingham, UK",
    region: "UK",
    focus: "Marine sponge biology, genotoxicity assessment",
  },
  {
    name: "Professor Richard Luxton",
    institution: "Institute Bio-sensing Technology, University of the West of England",
    location: "Bristol, UK",
    region: "UK",
    focus: "Bio-sensing technologies, environmental monitoring",
  },
  {
    name: "Professor RWM Van Soest",
    institution: "Naturalis Biodiversity Center",
    location: "Leiden, Netherlands",
    region: "Europe",
    focus: "Sponge systematics, taxonomic expertise",
  },
  {
    name: "Dr. Eduardo Hajdu",
    institution: "Department of Invertebrates, National Museum, Federal University of Rio de Janeiro",
    location: "Rio de Janeiro, Brazil",
    region: "South America",
    focus: "Marine invertebrate research, sponge expertise",
  },
  {
    name: "Dr Dirk Erpenbeck",
    institution: "Department of Earth & Environmental Sciences, Ludwig-Maximilians-University Munich",
    location: "Munich, Germany",
    region: "Europe",
    focus: "Palaeontology, geobiology, sponge evolution",
  },
  {
    name: "Francis Okoroigbo",
    institution: "Independent Researcher",
    location: "Gothenburg, Sweden",
    region: "Europe",
    focus: "Environmental research and sustainability",
  },
];

const organizations = [
  { name: "Africa Project Development Centre", location: "Abuja, Nigeria", focus: "Development and environmental projects" },
  { name: "Gas Alert for Sustainable Initiative (GASIN)", location: "Nigeria", focus: "Environmental advocacy and sustainability" },
  { name: "National Coalition on Gas Flaring and Oil Spills in the Niger Delta (NACGOND)", location: "Niger Delta, Nigeria", focus: "Environmental justice and policy advocacy" },
  { name: "The University of Abuja", location: "Nigeria", focus: "Academic research partnerships" },
  { name: "The University of Port Harcourt", location: "Nigeria", focus: "Academic research partnerships" },
];

const CollaboratorCard = ({ collaborator }: { collaborator: (typeof collaborators)[0] }) => (
  <div className="bg-card p-6 rounded-[12px] card-shadow">
    <div className="flex items-start justify-between gap-3 mb-3">
      <div>
        <h4 className="font-display font-semibold text-foreground">{collaborator.name}</h4>
        <p className="font-ui text-sm text-secondary mt-0.5">{collaborator.institution}</p>
      </div>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 font-ui text-xs text-primary whitespace-nowrap">
        {collaborator.region}
      </span>
    </div>
    <p className="flex items-center gap-1.5 font-ui text-xs text-muted-foreground mb-2">
      <MapPin size={12} />
      {collaborator.location}
    </p>
    <p className="font-body text-sm text-muted-foreground">{collaborator.focus}</p>
  </div>
);

const OrganizationCard = ({ org }: { org: (typeof organizations)[0] }) => (
  <div className="bg-card p-6 rounded-[12px] card-shadow">
    <h4 className="font-display font-semibold text-foreground">{org.name}</h4>
    <p className="flex items-center gap-1.5 font-ui text-sm text-secondary mt-2">
      <MapPin size={14} />
      {org.location}
    </p>
    <p className="font-body text-sm text-muted-foreground mt-2">{org.focus}</p>
  </div>
);

const CollaboratorsSection = () => {
  const ukCollaborators = collaborators.filter((c) => c.region === "UK");
  const internationalCollaborators = collaborators.filter((c) => c.region !== "UK");

  return (
    <section id="collaborators" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">Network & Partnerships</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
            International collaborators & networks
          </h2>
          <p className="mt-3 text-muted-foreground font-body max-w-2xl">
            Dr. Chidugu-Ogborigbo collaborates with leading researchers and organizations across multiple continents, fostering international research partnerships and advancing environmental science globally.
          </p>
        </motion.div>

        {/* UK Collaborators */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Users size={20} className="text-primary" />
            <h3 className="text-2xl font-display font-semibold text-foreground">UK Research Collaborators</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ukCollaborators.map((collaborator, i) => (
              <motion.div
                key={collaborator.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
              >
                <CollaboratorCard collaborator={collaborator} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* International Collaborators */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Users size={20} className="text-primary" />
            <h3 className="text-2xl font-display font-semibold text-foreground">International Research Collaborators</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internationalCollaborators.map((collaborator, i) => (
              <motion.div
                key={collaborator.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
              >
                <CollaboratorCard collaborator={collaborator} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <Users size={20} className="text-primary" />
            <h3 className="text-2xl font-display font-semibold text-foreground">Organizational Partnerships</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {organizations.map((org, i) => (
              <motion.div
                key={org.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
              >
                <OrganizationCard org={org} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Reach Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-12 p-8 bg-primary/5 rounded-[12px] border border-primary/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl font-display font-semibold text-foreground">6</p>
              <p className="font-ui text-sm text-secondary mt-2">Individual Collaborators</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-semibold text-foreground">5</p>
              <p className="font-ui text-sm text-secondary mt-2">Institutional Partners</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display font-semibold text-foreground">5</p>
              <p className="font-ui text-sm text-secondary mt-2">Countries Represented</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
