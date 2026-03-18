const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-display text-sm font-semibold text-foreground">Mercer Ecology Lab</p>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Department of Environmental Sciences · University Campus
            </p>
          </div>
          <p className="font-ui text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mercer Ecology Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
