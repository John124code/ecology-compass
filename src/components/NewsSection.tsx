import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] };

const news = [
  {
    date: "Feb 2026",
    category: "Grant",
    title: "Lab awarded €2.1M ERC Consolidator Grant for boreal carbon research",
    summary: "The five-year grant will fund expanded monitoring infrastructure and two new postdoctoral positions.",
  },
  {
    date: "Jan 2026",
    category: "Publication",
    title: "New paper in Global Change Biology on forest buffering capacity",
    summary: "Vasquez et al. show that old-growth forests absorb 40% more rainfall extremes than secondary forests.",
  },
  {
    date: "Nov 2025",
    category: "Conference",
    title: "Lab presents 4 posters at ESA Annual Meeting in Portland",
    summary: "Topics spanning peatland decomposition, pollinator networks, and carbon flux variability.",
  },
  {
    date: "Sep 2025",
    category: "Fieldwork",
    title: "Autumn sampling campaign begins at Great Lakes wetland sites",
    summary: "Team deploys for 3-week monitoring rotation across 8 restored wetland sites.",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">News & Updates</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
            Latest from the lab
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group bg-card p-6 rounded-[12px] card-shadow cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="font-ui text-xs uppercase tracking-widest text-muted-foreground">{item.date}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="font-ui text-xs uppercase tracking-widest text-secondary">{item.category}</span>
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-body text-muted-foreground leading-relaxed">{item.summary}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1 font-ui text-sm font-medium text-primary">
                  Read more <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
