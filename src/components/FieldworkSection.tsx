import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] };

const projects = [
  {
    title: "Boreal Carbon Flux Network",
    location: "Northern Finland & Sweden",
    period: "2018 – Present",
    description: "A multi-site eddy covariance network quantifying net ecosystem exchange across a gradient of boreal forest types, from pristine old-growth to recently harvested stands.",
    status: "Active",
  },
  {
    title: "Temperate Wetland Restoration Monitoring",
    location: "Great Lakes Region, USA",
    period: "2020 – Present",
    description: "Tracking macroinvertebrate recolonization, water quality parameters, and vegetation recovery at 8 restored wetland sites over a 10-year horizon.",
    status: "Active",
  },
  {
    title: "Sub-Arctic Peatland Decomposition Study",
    location: "Abisko, Sweden",
    period: "2015 – 2024",
    description: "A completed long-term study measuring organic matter decomposition rates, methane emissions, and permafrost thaw dynamics across warming scenarios.",
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
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
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
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground font-ui sm:text-right flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 sm:justify-end">
                    <MapPin size={14} />
                    {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 sm:justify-end">
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
