import Labs from "@/components/journey/labs/Labs";
import Learning from "@/components/journey/learning/Learning";
import LeetCode from "@/components/journey/leetCode/LeetCode";
import Projects from "@/components/journey/projects/Projects";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const tabList = ["Learning", "Projects", "Labs", "LeetCode"];

const Journey = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  const getTabIndexFromHash = (h: string) => {
    const tabName = h.replace("#", "");
    const index = tabList.findIndex((t) => t === tabName);
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
    <div className="flex">
      <div className="w-1/7">
        <div className="flex flex-col w-[90%]">
          {tabList.map((tab, index) => (
            <Link
              to={`/journey/#${tab}`}
              key={index}
              className={`px-3 py-4 font-display text-xl hover:bg-primary ${
                index === activeTab ? "bg-primary" : ""
              }`}
            >
              {tab}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-6/7 font-body p-4 border-l border-primary">
        {getMainContent(activeTab)}
      </div>
    </div>
  );
};

export default Journey;
