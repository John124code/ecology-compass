import { motion } from "framer-motion";
import { Award, TrendingUp } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const grants = [
  {
    year: "2014-2017",
    title: "Commonwealth Scholarship Commission UK Studentship",
    amount: "£100,000",
    role: "Recipient",
    funder: "DFID via Commonwealth Scholarship Commission UK"
  },
  {
    year: "2018-2021",
    title: "UKEMS Small Grant for Early Career Research",
    amount: "£10,000",
    role: "Principal Investigator",
    funder: "UK Environmental Mutagen Society"
  },
  {
    year: "2021-2024",
    title: "UWE Bristol Partnership PhD Funding",
    amount: "£41,923",
    role: "Principal Investigator / Director of Studies",
    funder: "UWE Bristol"
  },
];

const awards = [
  { year: "2025", title: "Appreciation Plaque for Guest Speaker", organization: "CBAS Conference" },
  { year: "2017", title: "BTS Travel Grant and Bursary", organization: "British Toxicology Society Annual Congress" },
  { year: "2016", title: "Best Poster Award", organization: "EEMGS Copenhagen" },
  { year: "2014-2017", title: "Discovery of New Marine Sponge Species (Amorphinopsis kalibiama)", organization: "Research Achievement" },
];

const GrantsAwardsSection = () => {
  return (
    <section id="grants" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">Funding & Recognition</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
            Grants and Awards
          </h2>
        </motion.div>

        {/* Grants Section */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={20} className="text-primary" />
            <h3 className="text-xl font-display font-semibold text-foreground">Research Grants</h3>
          </div>
          <div className="space-y-4">
            {grants.map((grant, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
                className="bg-card p-6 rounded-[12px] card-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-ui text-xs uppercase tracking-widest text-muted-foreground">
                        {grant.year}
                      </span>
                      <span className="text-lg font-display font-semibold text-primary">
                        {grant.amount}
                      </span>
                    </div>
                    <h4 className="text-base font-display font-medium text-foreground">{grant.title}</h4>
                    <p className="text-sm text-muted-foreground font-body mt-1">
                      {grant.funder} · {grant.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Award size={20} className="text-primary" />
            <h3 className="text-xl font-display font-semibold text-foreground">Awards & Honors</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: i * 0.08 }}
                className="bg-card p-5 rounded-[12px] card-shadow"
              >
                <span className="font-ui text-xs uppercase tracking-widest text-muted-foreground">
                  {award.year}
                </span>
                <h4 className="text-base font-display font-medium text-foreground mt-2">{award.title}</h4>
                <p className="text-sm text-muted-foreground font-body mt-1">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Total Funding Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-12 p-8 bg-primary/5 rounded-[12px] border border-primary/20"
        >
          <div className="text-center">
            <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-2">Total Research Funding</p>
            <p className="text-4xl font-display font-semibold text-foreground">£151,923</p>
            <p className="text-sm text-muted-foreground font-body mt-2">Secured across multiple competitive funding streams</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrantsAwardsSection;
