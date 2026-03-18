import { motion } from "framer-motion";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] };

const faculty = [
  { name: "Dr. Adrienne Mercer", role: "Principal Investigator", focus: "Ecosystem resilience, carbon cycling" },
  { name: "Dr. Lin Chen", role: "Associate Researcher", focus: "Soil biogeochemistry, microbial ecology" },
];

const team = [
  { name: "Dr. Daniel Okafor", role: "Postdoctoral Fellow", focus: "Aquatic ecosystem dynamics" },
  { name: "Renata Vasquez", role: "PhD Candidate", focus: "Forest hydrology" },
  { name: "Dr. Karin Johansson", role: "Research Associate", focus: "Wildlife conservation ecology" },
  { name: "Sanjay Patel", role: "PhD Candidate", focus: "Landscape ecology, GIS" },
  { name: "Mia Thornton", role: "MSc Student", focus: "Pollinator networks" },
  { name: "James Okwu", role: "Lab Manager", focus: "Field operations, data infrastructure" },
];

const PersonCard = ({ name, role, focus, large = false }: { name: string; role: string; focus: string; large?: boolean }) => (
  <div className={`bg-card p-6 rounded-[12px] card-shadow ${large ? "" : ""}`}>
    <div className={`${large ? "w-20 h-20" : "w-14 h-14"} rounded-lg bg-muted flex items-center justify-center mb-4`}>
      <span className="font-display font-semibold text-muted-foreground text-lg">
        {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
      </span>
    </div>
    <h4 className="font-display font-semibold text-foreground">{name}</h4>
    <p className="font-ui text-sm text-secondary mt-0.5">{role}</p>
    <p className="font-body text-sm text-muted-foreground mt-2">{focus}</p>
  </div>
);

const PeopleSection = () => {
  return (
    <section id="people" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">People</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
            Lab members
          </h2>
        </motion.div>

        {/* Faculty */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faculty.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.1 }}
            >
              <PersonCard {...person} large />
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.05 }}
            >
              <PersonCard {...person} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
