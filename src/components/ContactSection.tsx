import { motion } from  "framer-motion";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
          >
            <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
              Get in touch
            </h2>
            <div className="mt-6 space-y-4 font-body text-muted-foreground leading-relaxed text-wrap-pretty">
              <p>
                I welcome inquiries from prospective PhD candidates, postdoctoral fellows, and visiting researchers with backgrounds in toxicology, marine biology, environmental science, or related fields.
              </p>
              <p>
                For collaboration opportunities or general inquiries, please reach out via email or connect on LinkedIn.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-ui text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:Rachael.Chidugu-Ogborigbo@uwe.ac.uk" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    Rachael.Chidugu-Ogborigbo@uwe.ac.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-ui text-sm font-medium text-foreground">Phone</p>
                  <a href="tel:+441173281078" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    +44 117 328 1078
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-ui text-sm font-medium text-foreground">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/rachael-ununuma-chidugu-ogborigbo-b7131770/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-ui text-sm font-medium text-foreground">Address</p>
                  <p className="font-body text-sm text-muted-foreground">
                    HAS - Applied Sciences<br />
                    UWE Bristol<br />
                    Frenchay Campus, Coldharbour Lane<br />
                    Bristol, BS16 1QY, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.15 }}
          >
            <div className="bg-card rounded-[12px] card-shadow p-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">Send a message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-ui text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 rounded-sm bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block font-ui text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2.5 rounded-sm bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors"
                    placeholder="you@institution.edu"
                  />
                </div>
                <div>
                  <label className="block font-ui text-sm font-medium text-foreground mb-1.5">Interest</label>
                  <select className="w-full px-4 py-2.5 rounded-sm bg-background border border-border font-ui text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors">
                    <option>PhD Position</option>
                    <option>Postdoctoral Fellowship</option>
                    <option>Visiting Researcher</option>
                    <option>Collaboration Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block font-ui text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-sm bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-primary transition-colors resize-none"
                    placeholder="Briefly describe your background and interest..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-sm bg-primary text-primary-foreground font-ui text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
