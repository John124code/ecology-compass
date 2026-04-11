import { Mail, Phone, MapPin, Linkedin, ExternalLink, Download } from "lucide-react";
import { pdf } from "@react-pdf/renderer";
import { CVDocument } from "@/utils/cv-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadCV = async () => {
    const blob = await pdf(<CVDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Dr_Rachael_Chidugu-Ogborigbo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const quickLinks = [
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "People", href: "#people" },
    { label: "Teaching", href: "#teaching" },
    { label: "Fieldwork", href: "#fieldwork" },
    { label: "Collaborators", href: "#collaborators" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rachael-ununuma-chidugu-ogborigbo-b7131770/",
      icon: Linkedin,
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=lHiaMmQAAAAJ&hl=en",
      icon: ExternalLink,
    },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">About</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Dr. Rachael Chidugu-Ogborigbo is a Senior Lecturer in Biological Sciences specializing in ecogenotoxicology and marine natural products.
            </p>
            <p className="font-ui text-xs text-muted-foreground mt-2">UWE Bristol · HAS - Applied Sciences</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-ui text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:Rachael.Chidugu-Ogborigbo@uwe.ac.uk"
                className="flex items-start gap-2 font-ui text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                <span>Rachael.Chidugu-Ogborigbo@uwe.ac.uk</span>
              </a>
              <a
                href="tel:+441173281078"
                className="flex items-start gap-2 font-ui text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={14} className="mt-0.5 flex-shrink-0" />
                <span>+44 117 328 1078</span>
              </a>
              <div className="flex items-start gap-2 font-ui text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>UWE Bristol<br />Frenchay Campus<br />Bristol, UK</span>
              </div>
            </div>
          </div>

          {/* Social & Resources */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Connect</h3>
            <div className="space-y-3 mb-6">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-ui text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={14} />
                    {link.label}
                  </a>
                );
              })}
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 font-ui text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <Download size={14} />
                Download CV
              </button>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="font-ui text-xs text-muted-foreground">
                <strong>Affiliation:</strong><br />
                University of the West of England (UWE Bristol)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-ui text-xs text-muted-foreground">
            © {currentYear} Dr. Rachael Chidugu-Ogborigbo. All rights reserved.
          </p>
          <p className="font-ui text-xs text-muted-foreground">
            Built with Vite + React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
