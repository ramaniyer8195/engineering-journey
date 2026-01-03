import Labs from "@/components/journey/labs/Labs";
import Learning from "@/components/journey/learning/Learning";
import LeetCode from "@/components/journey/leetCode/LeetCode";
import Projects from "@/components/journey/projects/Projects";
import {
  BookOpen,
  Code,
  FlaskConical,
  GraduationCap,
  ArrowLeft,
} from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const tabList = [
  { name: "Learning", icon: GraduationCap },
  { name: "Projects", icon: Code },
  { name: "Labs", icon: FlaskConical },
  { name: "LeetCode", icon: BookOpen },
];

const Journey = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  const getTabIndexFromHash = (h: string) => {
    const tabName = h.replace("#", "");
    const index = tabList.findIndex((t) => t.name === tabName);
    return index !== -1 ? index : 0;
  };

  const activeTab = getTabIndexFromHash(hash);

  useEffect(() => {
    if (!hash) {
      navigate("/journey/#Learning", { replace: true });
    }
  }, [hash, navigate]);

  const getMainContent = (tab: number) => {
    switch (tab) {
      case 0:
        return <Learning />;
      case 1:
        return <Projects />;
      case 2:
        return <Labs />;
      case 3:
        return <LeetCode />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 font-body selection:bg-primary selection:text-primary-foreground">
      {/* Navigation & Hero */}
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight">
          The Engineering <span className="text-primary">Journey</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          An interactive log of my technical evolution—from fundamental mental
          models to production-ready systems.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12 min-h-[60vh]">
        {/* Sidebar Navigation */}
        <aside className="md:w-64 lg:w-72 shrink-0">
          <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 no-scrollbar sticky top-8">
            {tabList.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = index === activeTab;
              return (
                <Link
                  to={`/journey/#${tab.name}`}
                  key={tab.name}
                  className={`flex items-center gap-3 px-4 py-3 font-display text-lg whitespace-nowrap transition-all border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-primary/5 text-muted-foreground border-primary/10 hover:border-primary/30 hover:bg-primary/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-primary-foreground" : "text-primary"
                    }`}
                  />
                  {tab.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 border-t md:border-t-0 md:border-l border-primary/20 pt-8 md:pt-0 md:pl-8 lg:pl-12">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {getMainContent(activeTab)}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Journey;
