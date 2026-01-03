import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const Why = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-body selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
          Why this <span className="text-primary">exists</span>
        </h1>
        <div className="space-y-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
          <p>
            Most engineering portfolios show{" "}
            <span className="text-foreground italic">what</span> was built.
            <br />
            Very few show <span className="text-foreground italic">how</span> an
            engineer actually learns, thinks, and grows.
          </p>
          <p className="text-foreground font-display font-medium">
            This site exists to make that process visible.
          </p>
        </div>
      </header>

      <div className="space-y-20">
        {/* The Gap */}
        <section>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 border-b border-primary/20 pb-4">
            The gap I kept noticing
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">
                As engineers, we spend years building understanding around:
              </p>
              <ul className="grid grid-cols-1 gap-2 text-foreground font-display text-lg">
                {[
                  "runtimes",
                  "networking",
                  "performance",
                  "architecture",
                  "failure modes",
                  "tradeoffs",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg">
                But that learning usually happens{" "}
                <span className="text-foreground">privately</span>,{" "}
                <span className="text-foreground">non-linearly</span>, and
                through{" "}
                <span className="text-foreground">
                  trial, error, and repetition
                </span>
                .
              </p>
              <div className="p-6 bg-primary/5 border-l-2 border-primary italic text-muted-foreground">
                When we present ourselves publicly, all of that gets compressed
                into a résumé, a few finished projects, or a GitHub profile
                without context.
              </div>
              <p className="text-xl font-display text-primary">
                What’s lost is the most important part of engineering: the
                thinking process behind the work.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-primary/5 -mx-6 px-6 py-12 md:px-12 md:rounded-lg">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
            My approach to learning engineering
          </h2>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              I believe real engineering skill comes from:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Understanding fundamentals, not memorizing APIs",
                "Validating knowledge through practice, not assumptions",
                "Seeing systems fail, not just work",
                "Producing artifacts, not consuming tutorials",
                "Being able to explain tradeoffs clearly",
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 border border-primary/20 bg-background/50"
                >
                  <span className="text-primary font-display font-bold">
                    0{i + 1}
                  </span>
                  <p className="font-display text-lg">{point}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted-foreground border-t border-primary/10 pt-8">
              For me, learning is only complete when it results in a{" "}
              <span className="text-foreground">concrete understanding</span>,{" "}
              <span className="text-foreground">practical validation</span>, and{" "}
              <span className="text-foreground">something I can explain</span>{" "}
              to another engineer.
            </p>
          </div>
        </section>

        {/* What this site is */}
        <section className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 border-b border-primary/20 pb-4">
              What this site is
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              This is my public engineering learning system. It is a read-only
              view into:
            </p>
            <ul className="space-y-4 text-lg">
              {[
                "what I’m learning",
                "how I validate each topic",
                "what I’ve practiced",
                "what I’ve built",
                "what I can explain clearly",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center text-foreground font-display"
                >
                  <span className="text-primary mr-3">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-primary/10">
              <p className="font-display text-xl text-primary font-bold">
                Progress is explicit.
              </p>
              <p className="text-muted-foreground">
                Incomplete work is visible by design.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 border-b border-primary/20 pb-4">
              How to read this site
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Topics are broken into{" "}
                <span className="text-foreground">atomic learning units</span>.
                Each unit includes:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• what I’m trying to understand</li>
                <li>• how I validate that understanding</li>
                <li>• practice tasks I’ve completed</li>
                <li>• artifacts like notes, repos, or experiments</li>
                <li>• a blog post written to clarify my thinking</li>
              </ul>
              <div className="p-4 border border-primary/30 bg-primary/5 text-sm">
                <p className="font-bold text-primary mb-1 uppercase tracking-wider">
                  The Completion Standard
                </p>
                If a topic is marked complete, it means I can explain it
                clearly, apply it intentionally, and reason about its tradeoffs.
              </div>
            </div>
          </div>
        </section>

        {/* What this site is not */}
        <section className="border-2 border-primary p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 font-display text-8xl font-bold select-none pointer-events-none">
            NOT
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
            What this site is <span className="text-primary">not</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <ul className="space-y-4">
              {[
                "a résumé",
                "a brag sheet",
                "a collection of polished demos only",
                "a “learn X in 30 days” challenge",
              ].map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground line-through decoration-primary/50"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              For a curated view of finished work, my portfolio exists
              separately.
              <br />
              <br />
              <span className="text-foreground font-display font-bold text-xl">
                This site shows the work behind the work.
              </span>
            </p>
          </div>
        </section>

        {/* Who this is for & How this evolves */}
        <section className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold uppercase tracking-widest text-primary">
              Who this is for
            </h3>
            <p className="text-muted-foreground">
              This site is useful if you care about{" "}
              <span className="text-foreground">
                fundamentals over frameworks
              </span>
              , want to understand how{" "}
              <span className="text-foreground">
                systems behave under stress
              </span>
              , and value{" "}
              <span className="text-foreground">clarity of thinking</span> over
              surface-level familiarity.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold uppercase tracking-widest text-primary">
              How this evolves
            </h3>
            <p className="text-muted-foreground">
              This is a living system. Over time, topics will progress at
              different speeds, understanding will deepen, and focus areas will
              shift.
              <span className="block mt-2 italic">
                I’d rather show real progress over time than a static snapshot
                of success.
              </span>
            </p>
          </div>
        </section>

        {/* Closing */}
        <footer className="pt-20 pb-12 text-center border-t border-primary/20">
          <p className="text-2xl md:text-3xl font-display font-bold mb-6">
            Engineering isn’t just about writing code.
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            It’s about building mental models, making tradeoffs, and learning
            from real systems.
          </p>
          <p className="text-primary font-display text-xl font-bold tracking-tight uppercase">
            This site is how I choose to do that <br className="md:hidden" /> —
            openly and deliberately.
          </p>

          <div className="mt-16">
            <Link
              to="/journey"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-display text-xl hover:opacity-90 transition-all"
            >
              See the journey in action
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Why;
