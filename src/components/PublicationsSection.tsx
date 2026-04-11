import { motion } from "framer-motion";
import { FileText, ExternalLink, Clock, FileCode, BookOpen, Presentation } from "lucide-react";

const transition = { duration: 0.5, ease: [0.2, 0, 0, 1] as const };

const publications = [
  // Recent peer-reviewed articles
  { year: "2024", title: "Bioaccumulation and genotoxic effect of heavy metal pollution in marine sponges from the Niger Delta", journal: "Marine Pollution Bulletin, 211, 117386", authors: "Chidugu-Ogborigbo, R.U.*, Nkopuyo, U.S., Nikolas, J.H., Barker, J.", link: "https://www.sciencedirect.com/science/article/pii/S0025326X24013638" },
  { year: "2024", title: "An anodic stripping voltammetric approach for total mercury determination in sea sponges from the Niger Delta region of Nigeria", journal: "Marine Pollution Bulletin, 208, 117008", authors: "Sunday, N.U., Honeychurch, K.C., Newton, L., Chidugu-Ogborigbo, R.U.*", link: "https://pubmed.ncbi.nlm.nih.gov/39299188/" },
  { year: "2023", title: "Amylase Production from Marine Sponge Hymeniacidon perlevis: Potential Sustainability Benefits", journal: "PLOS ONE", authors: "Nnaji, P.T., Morse, H.R., Adukwu, E., Chidugu-Ogborigbo, R.U.*", link: "https://doi.org/10.1371/journal.pone.0294931" },
  { year: "2022", title: "Sponge–Microbial Symbiosis and Marine Extremozymes: Current Issues and Prospects", journal: "Sustainability, 14, 6984", authors: "Nnaji, P.T., Morse, H.R., Adukwu, E., Chidugu-Ogborigbo, R.U.*", link: "https://doi.org/10.3390/su14126984" },
  { year: "2020", title: "Aluminium-induced DNA damage and Oxidative Stress in Cultures of the Marine Sponge Hymeniacidon perlevis", journal: "Journal of Marine Science, 2(1)", authors: "Akpiri, R.U.*, Hodges, N.J., Konya, R.S.", link: "https://doi.org/10.30564/jms.v2i1.1070" },
  { year: "2017", title: "Development of cultures of the marine sponge Hymeniacidon perleve for genotoxicity assessment using the alkaline comet assay", journal: "Environmental Toxicology and Chemistry, 36(12)", authors: "Akpiri, R.U.*, Konya, R.S., Hodges, N.J.", link: "https://doi.org/10.1002/etc.3907" },
  { year: "2017", title: "Surface water characteristics and trace metals level of the Bonny/New Calabar River Estuary, Niger Delta, Nigeria", journal: "Applied Water Science, 7", authors: "Onojake, M.C., Sikoki, F.D., Omokheyeke, O., Akpiri, R.U.*", link: "https://doi.org/10.1007/s13201-015-0306-y" },
  { year: "2016", title: "Anti-Inflammatory Effect of Pleurotus ostreatus (Oyster Mushroom) Aqueous Extracts on Rattus norvegicus (Albino Rats)", journal: "Greener Journal of Biological Sciences, 6(3), 061-067", authors: "Zitte, L.F.*, Konya, R.S., Akpiri, R.U.", link: "https://doi.org/10.15580/GJBS.2016.3.051816091" },
  { year: "2015", title: "Bioaccumulation of heavy metals in two matrices of the Bonny/New Calabar River Estuary in Niger Delta, Nigeria", journal: "Ocean Science Journal, 50(2), 203-208", authors: "Onojake, M.C., Sikoki, F.D., Babatunde, B.B., Akpiri, R.U., Akpuloma, D., Omokheyeke, O.", link: "https://doi.org/10.1007/s12601-015-0016-2" },
  { year: "2015", title: "Heavy metal profiles in various matrices of the Bonny/New Calabar River Estuary, Niger Delta, Nigeria", journal: "Global Journal of Environmental Sciences, 12(1), 1", authors: "Babatunde, B., Sikoki, F., Onojake, M., Akpiri, R., Akpuloma, D.", link: "https://doi.org/10.4314/gjes.v12i1.1" },
  { year: "2014", title: "Congenital Malaria Among Inborn and Outborn Babies At A Tertiary Care Hospital In Port Harcourt, Rivers State, South-South Nigeria", journal: "Journal of Natural Sciences Research", authors: "Akpiri, R.U.*, Agi, P.I.", link: "https://iiste.org/Journals/index.php/JNSR/article/view/11484" },
  { year: "2014", title: "Influence of gravidity (parity) on placental parasitaemia in University of Port Harcourt Teaching Hospital, Rivers State Nigeria", journal: "International Journal of Biomedical Research", authors: "Akpiri, R.U.*, Agi, P.I.", link: "https://uwe-repository.worktribe.com/output/5254123" },
  { year: "2013", title: "The effect of aqueous extract of Euphorbia drupifera on the physiology of wistar rat", journal: "International Journal of Pharmacological Research, 3(2), 23-26", authors: "Akpiri, R., Roseline, K.S., Abigail, J.", link: "https://doi.org/10.7439/ijpr.v3i2.48" },
  { year: "2013", title: "The Use of Personal Protective Equipment (PPE) among Workers of Five Refuse Disposal Companies within Port Harcourt Metropolis, Rivers State, Nigeria", journal: "Asian Journal of Applied Sciences", authors: "Konya, R.S., Akpiri, R.U.*, Orji, N.P.", link: "https://www.ajouronline.com/index.php/AJAS/article/view/562" },
  { year: "2009", title: "Prevalence and sensitivity of Eosinophiluria in the diagnosis of urinary schistosomiasis among secondary school students in Zaria, Nigeria", journal: "Best Journal, 6(2), 85-88", authors: "Gadzma, I.M.K., Akpiri, R.F." },
];

const inPressPublications = [
  { title: "Application of the comet assay to detect cadmium chloride-induced DNA strand breaks in cultures of the marine sponge Hymeniacidon perleve", journal: "Mutagenesis", authors: "Chidugu-Ogborigbo, R.U.*, Nikolas, J.H." },
  { title: "Modern Lifestyles, Environmental Stressors, and the Rising Tide of Reproductive Dysfunction and Birth Defects", journal: "Reproductive Sciences", authors: "Fagbenro, O.S., Olaleye, E.D., Chidugu-Ogborigbo, R.U., Bakare, A.A." },
];

const preprints = [
  { title: "Integrative Taxonomy of Amorphinopsis (Halichondriidae, Suberitida, Demospongiae): A new Tropical West African species and an Amphi-Atlantic species Pair", authors: "Chidugu-Ogborigbo, R.U., et al.", status: "Under review" },
];

const bookContributions = [
  { year: "2014", title: "Congenital Malaria Study in University of Port Harcourt, Nigeria", publisher: "LAP LAMBERT Academic Publishing", authors: "Akpiri, R.U.", link: "https://www.lap-publishing.com/" },
];

const conferencePresentations = [
  { year: "2024", title: "Bioaccumulation and genotoxic effect of heavy metal pollution in Marine sponges of the Niger Delta region of Nigeria", conference: "54th Annual Meeting of UKEMS", location: "UK", type: "Poster" },
  { year: "2024", title: "From field to function: characterizing amylase production from the temperate sea sponge Hymeniacidon perlevis", conference: "54th Annual Meeting of UKEMS", location: "UK", type: "Poster" },
  { year: "2023", title: "The effect of cadmium chloride on DNA integrity of the marine sponge Hymeniacidon perlevis", conference: "SETAC Europe", location: "Dublin, Ireland", type: "Poster" },
  { year: "2022", title: "The effect of Cadmium Chloride on DNA integrity of the marine sponge Hymeniacidon perlevis", conference: "UKEMS Open Meeting", location: "UK", type: "Poster" },
  { year: "2022", title: "Biomarkers of toxicology: A study of Polycyclic Aromatic Hydrocarbons in Sponges from the Niger Delta region of Nigeria", conference: "Society of Toxicology Annual Meeting", location: "USA", type: "Poster" },
  { year: "2020", title: "Biomarkers of environmental contamination in the Niger Delta estuary", conference: "Society of Toxicology Annual Meeting", location: "USA", type: "Poster" },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
        >
          <p className="font-ui text-xs uppercase tracking-[0.12em] text-secondary mb-3">Publications</p>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-tight tracking-tight">
            Peer-reviewed publications
          </h2>
          <p className="mt-3 text-muted-foreground font-body max-w-2xl">
            {publications.length} peer-reviewed articles with {inPressPublications.length} currently in press. For a complete list, visit her <a href="https://scholar.google.com/citations?user=lHiaMmQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Scholar profile</a>.
          </p>
        </motion.div>

        {/* In Press Section */}
        {inPressPublications.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} className="text-primary" />
              <h3 className="text-lg font-display font-semibold text-foreground">In Press</h3>
            </div>
            <div className="space-y-3">
              {inPressPublications.map((pub, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.05 }}
                  className="bg-primary/5 border border-primary/20 rounded-lg p-4"
                >
                  <h4 className="text-base font-display font-medium text-foreground">{pub.title}</h4>
                  <p className="text-sm text-muted-foreground font-body italic mt-1">
                    {pub.journal}. {pub.authors}.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Preprints Section */}
        {preprints.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <FileCode size={18} className="text-primary" />
              <h3 className="text-lg font-display font-semibold text-foreground">Preprints</h3>
            </div>
            <div className="space-y-3">
              {preprints.map((pub, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.05 }}
                  className="bg-secondary/10 border border-secondary/20 rounded-lg p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-display font-medium text-foreground">{pub.title}</h4>
                      <p className="text-sm text-muted-foreground font-body italic mt-1">{pub.authors}</p>
                    </div>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-secondary/20 font-ui text-xs text-secondary whitespace-nowrap">
                      {pub.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Book Contributions Section */}
        {bookContributions.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={18} className="text-primary" />
              <h3 className="text-lg font-display font-semibold text-foreground">Book Contributions</h3>
            </div>
            <div className="space-y-3">
              {bookContributions.map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.05 }}
                  className="group flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 px-4 -mx-4 rounded-lg hover:bg-muted/40 transition-colors"
                >
                  <div className="max-w-3xl">
                    <span className="font-ui text-xs uppercase tracking-widest text-muted-foreground">{book.year}</span>
                    <h4 className="text-base font-display font-medium text-foreground mt-1">{book.title}</h4>
                    <p className="text-sm text-muted-foreground font-body italic mt-1">
                      {book.publisher}. {book.authors}.
                    </p>
                  </div>
                  {book.link && (
                    <div className="mt-3 sm:mt-0 sm:ml-8 flex-shrink-0">
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-ui text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink size={14} />
                        View
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Conference Presentations Section */}
        {conferencePresentations.length > 0 && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-4">
              <Presentation size={18} className="text-primary" />
              <h3 className="text-lg font-display font-semibold text-foreground">Conference Presentations</h3>
            </div>
            <div className="space-y-3">
              {conferencePresentations.map((pres, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: i * 0.03 }}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 px-4 -mx-4 rounded-lg hover:bg-muted/40 transition-colors"
                >
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-2">
                      <span className="font-ui text-xs uppercase tracking-widest text-muted-foreground">{pres.year}</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary/10 font-ui text-xs text-primary">
                        {pres.type}
                      </span>
                    </div>
                    <h4 className="text-base font-display font-medium text-foreground mt-1">{pres.title}</h4>
                    <p className="text-sm text-muted-foreground font-body mt-1">
                      {pres.conference} &middot; {pres.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Published Articles */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={18} className="text-primary" />
            <h3 className="text-lg font-display font-semibold text-foreground">Published Articles</h3>
          </div>
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: i * 0.03 }}
              className="group flex flex-col sm:flex-row sm:items-start sm:justify-between py-5 publication-border transition-colors hover:bg-muted/40 px-4 -mx-4 rounded-sm"
            >
              <div className="max-w-3xl">
                <span className="font-ui text-xs uppercase tracking-widest text-muted-foreground">{pub.year}</span>
                <h4 className="text-base font-display font-medium text-foreground mt-1">{pub.title}</h4>
                <p className="text-sm text-muted-foreground font-body italic mt-1">
                  {pub.journal}. {pub.authors}.
                </p>
              </div>
              {pub.link && (
                <div className="mt-3 sm:mt-0 sm:ml-8 flex-shrink-0">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-ui text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={14} />
                    View
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
