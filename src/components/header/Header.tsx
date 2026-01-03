import { Link, useLocation } from "react-router";

const Header = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Journey", path: "/journey" },
    { name: "Why", path: "/why" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary flex items-center justify-center font-display font-bold text-primary-foreground transform transition-transform group-hover:rotate-12">
            E
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            Engineering<span className="text-primary">Journey</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-sm uppercase tracking-widest transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
