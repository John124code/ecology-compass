import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const faculty = [
  {
    name: "Dr. Rachael Chidugu-Ogborigbo",
    role: "Principal Investigator",
    focus: "Ecogenotoxicology, marine natural products, environmental justice",
    linkedin: "https://www.linkedin.com/in/rachael-ununuma-chidugu-ogborigbo-b7131770/"
  },
];

const postdocs = [
  { name: "Dr. Silas Fagbero", role: "Postdoctoral Fellow", focus: "Marine biomonitoring, cellular toxicology" },
  { name: "Dr. Ibidapo William", role: "Senior Research Fellow", focus: "Drug discovery, pharmacological screening", status: "Previous" },
  { name: "Dr. Jude Ihugba", role: "Research Associate", focus: "Molecular biology, CYP gene cloning" },
];

const phdStudents = [
  { name: "Mr. Sunday Nkopuyo", role: "PhD Student", focus: "Genotoxicity assessment, Niger Delta pollution", status: "Completed" },
  { name: "Mr. Praise Nnaji", role: "PhD Student", focus: "Marine extremozymes, sustainability", status: "Completed" },
];

const mscStudents = [
  { name: "Miss Tounbra Ghomorai", role: "MSc Student" },
  { name: "Mr. James Phelps", role: "MSc Forensic Science" },
  { name: "Miss Holland Howard", role: "MSc Student" },
  { name: "Miss Dana Hammoud", role: "MSc Student" },
  { name: "Miss Agata Rogulska", role: "MSc Student" },
  { name: "Miss Eleanor Corbett", role: "MSc Student" },
];

const bscStudents = [
  { name: "Miss Selina Ghebremeskel", role: "BSc Student" },
  { name: "Miss Samantha Wing Sam Tse", role: "BSc Student" },
  { name: "Mr. Mozes Pajar", role: "BSc Student" },
  { name: "Miss Iyesha Cambridge", role: "BSc Student" },
  { name: "Mr. Callum Ovens", role: "BSc Student" },
  { name: "Mr. Samuel Green", role: "BSc Student" },
  { name: "Mr. Miguel Ferreira-Lima", role: "BSc Student" },
];

interface PersonProps {
  name: string;
  role: string;
  focus?: string;
  status?: string;
  linkedin?: string;
  large?: boolean;
}

const PersonCard = ({ name, role, focus, status, linkedin, large = false }: PersonProps) => (
  <div className={`bg-card p-6 rounded-[12px] card-shadow h-full ${large ? "" : ""}`}>
    <div className="flex items-start justify-between">
      <div className={`${large ? "w-20 h-20" : "w-14 h-14"} rounded-lg bg-muted flex items-center justify-center`}>
        <span className={`font-display font-semibold text-muted-foreground ${large ? "text-xl" : "text-lg"}`}>
          {name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
        </span>
      </div>
      {status && (
        <span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary/20 font-ui text-xs text-secondary">
          {status}
        </span>
      )}
    </div>
    <h4 className="font-display font-semibold text-foreground mt-4">{name}</h4>
    <p className="font-ui text-sm text-secondary mt-0.5">{role}</p>
    {focus && <p className="font-body text-sm text-muted-foreground mt-2">{focus}</p>}
    {linkedin && (
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 mt-3 font-ui text-sm text-primary hover:text-primary/80 transition-colors"
      >
        <Linkedin size={14} />
        LinkedIn
      </a>
    )}
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
            Current & previous lab members
          </h2>
        </motion.div>

        {/* Principal Investigator */}
        <div className="mt-12">
          <h3 className="font-display font-semibold text-lg text-foreground mb-4">Principal Investigator</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>

        {/* Post Docs / Research Associates */}
        <div className="mt-12">
          <h3 className="font-display font-semibold text-lg text-foreground mb-4">Post Docs & Research Associates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {postdocs.map((person, i) => (
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

        {/* PhD Students */}
        <div className="mt-12">
          <h3 className="font-display font-semibold text-lg text-foreground mb-4">PhD Students</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {phdStudents.map((person, i) => (
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

        {/* MSc Students */}
        <div className="mt-12">
          <h3 className="font-display font-semibold text-lg text-foreground mb-4">MSc Students</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mscStudents.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.03 }}
              >
                <PersonCard {...person} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* BSc Students */}
        <div className="mt-12">
          <h3 className="font-display font-semibold text-lg text-foreground mb-4">BSc Students</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bscStudents.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.03 }}
              >
                <PersonCard {...person} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
