import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
          This is my public <br className="hidden md:block" />
          <span className="text-primary">engineering learning system.</span>
        </h1>
        <p className="text-xl md:text-2xl font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          I'm documenting how I learn web engineering fundamentals —{" "}
          <span className="text-foreground/80">
            from runtime and networking to performance, architecture, and
            production tradeoffs
          </span>{" "}
          — openly, deliberately, and in real time.
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          to="/journey"
          className="group flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-display text-xl hover:opacity-90 transition-all"
        >
          Explore the learning progress
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          to="/why"
          className="px-8 py-3 border border-primary font-display text-xl hover:bg-primary/10 transition-all"
        >
          Why this exists
        </Link>
      </div>

      {/* Micro-copy */}
      <div>
        <p className="text-sm font-body text-muted-foreground/40 tracking-[0.2em] uppercase">
          Read-only. Data-driven. Evidence over claims.
        </p>
      </div>
    </div>
  );
};

export default Home;
