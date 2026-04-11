import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const undergraduateCourses = [
  { title: "Biological Sciences Degree", courses: ["Skills for Biosciences (Foundation, 50 students)", "Biology in Practice (Foundation, 100 students)", "Life on Earth (Year 1, 180 students)", "Wildlife Ecology (Year 2, 120 students)", "Marine Ecosystem (Year 3, 100 students)", "Environmental and Field Technique (Year 3, 20 students)", "Hydrology to Oceanography (Year 3, 25 students)"] },
  { title: "Biomedical Science", courses: ["Epidemiology and Public Health (Year 3, 20 students)", "Infection and Disease (Year 3, 180 students)"] },
  { title: "Integrated Wildlife Conservation (IWC)", courses: ["12 third year modules in collaboration with Bristol Zoo", "Programme Leader", "Professional Work Skills (module leader)"], highlight: true },
  { title: "Science Communication", courses: ["Investigation and Communicating Science (Year 1)", "Scientific Frontier (Year 3)"] },
  { title: "Forensic Science", courses: ["Environmental Forensics (Year 3)"] },
];

const postgraduateCourses = [
  { title: "MSc Science Communication", students: "15" },
  { title: "MSc Conservation Science", students: "25" },
  { title: "MSc Environmental Consultancy", students: "5" },
  { title: "MRes", students: "Variable" },
];

const pastoralRoles = [
  "Personal science Tutor/Academic Adviser (Levels 0, 1, 2, 3)",
  "Overseas Placement Tutor",
];

const previousTeaching = [
  { institution: "Coventry University College", role: "Associate Tutor", details: "8 hours daily teaching on chemistry modules (Foundations, Fundamentals, Organic, Analytical & Environmental Chemistry)" },
  { institution: "University of Port Harcourt, Nigeria", role: "Lecturer", details: "Biology of lower invertebrates (200 students), Pathophysiology (15 students), Development & Reproductive Biology (15 students), Environmental & Animal Physiology (20 students)" },
  { institution: "Birmingham International Academy", role: "Teaching Assistant & Lab Demonstrator", details: "Academic writing support, reference management, laboratory report organization, practical demonstrations" },
];

const TeachingCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-card p-6 rounded-[12px] card-shadow">
    <h3 className="text-lg font-display font-semibold text-foreground mb-4">{title}</h3>
    {children}
  </div>
);

const TeachingSection = () => {
  return (
    <section id="teaching" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">Teaching & Education</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
            Teaching experience & courses
          </h2>
          <p className="mt-3 text-muted-foreground font-body max-w-2xl">
            Dr. Chidugu-Ogborigbo has extensive teaching experience across multiple institutions, teaching diverse student cohorts from foundation level to postgraduate, with expertise in diverse pedagogical approaches and 100% student satisfaction ratings.
          </p>
        </motion.div>

        {/* Current Teaching at UWE Bristol */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen size={20} className="text-primary" />
            <h3 className="text-2xl font-display font-semibold text-foreground">Current Teaching at UWE Bristol</h3>
          </div>

          {/* Undergraduate */}
          <div className="mb-6">
            <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-secondary" />
              Undergraduate Programmes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {undergraduateCourses.map((programme, i) => (
                <motion.div
                  key={programme.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.05 }}
                  className={programme.highlight ? "md:col-span-2" : ""}
                >
                  <TeachingCard title={programme.title}>
                    <ul className="space-y-2">
                      {programme.courses.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </TeachingCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Postgraduate */}
          <div className="mb-6">
            <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <GraduationCap size={18} className="text-secondary" />
              Postgraduate Programmes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {postgraduateCourses.map((programme, i) => (
                <motion.div
                  key={programme.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.05 }}
                >
                  <TeachingCard title={programme.title}>
                    <p className="font-body text-sm text-muted-foreground">
                      <span className="font-ui font-semibold text-foreground">{programme.students}</span> students
                    </p>
                  </TeachingCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pastoral Roles */}
          <div>
            <h4 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users size={18} className="text-secondary" />
              Pastoral & Supervisory Roles
            </h4>
            <div className="bg-card p-6 rounded-[12px] card-shadow">
              <ul className="space-y-2">
                {pastoralRoles.map((role, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Teaching Expertise */}
        <div className="mt-12">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-6">Teaching Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-[12px] card-shadow">
              <h4 className="font-display font-semibold text-foreground mb-3">Pedagogical Approaches</h4>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li>✓ Diverse teaching styles (flipped, blended learning, questioning)</li>
                <li>✓ Module lead with 100% student satisfaction rating</li>
                <li>✓ Student-centered activities (Jigsaw technique)</li>
                <li>✓ Visual learning environments (Moodle, Canvas)</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-[12px] card-shadow">
              <h4 className="font-display font-semibold text-foreground mb-3">Course Development</h4>
              <ul className="space-y-2 font-body text-sm text-muted-foreground">
                <li>✓ Designing teaching/learning materials</li>
                <li>✓ Formative and summative assessments</li>
                <li>✓ Personal tutoring and pastoral care</li>
                <li>✓ Academic writing and research supervision</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Previous Teaching */}
        <div className="mt-12">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-6">Previous Teaching Experience</h3>
          <div className="space-y-4">
            {previousTeaching.map((exp, i) => (
              <motion.div
                key={exp.institution}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
                className="bg-card p-6 rounded-[12px] card-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{exp.institution}</h4>
                    <p className="font-ui text-sm text-secondary mt-1">{exp.role}</p>
                    <p className="font-body text-sm text-muted-foreground mt-2">{exp.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
