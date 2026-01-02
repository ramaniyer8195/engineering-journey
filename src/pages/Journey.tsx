import Learning from "@/components/journey/learning/Learning";
import Projects from "@/components/journey/projects/Projects";
import { useState } from "react";
import { Link } from "react-router";

const tabList = ["Learning", "Projects", "Labs", "LeetCode"];

const Journey = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getMainContent = (tab: number) => {
    switch (tab) {
      case 0:
        return <Learning />;
      case 1:
        return <Projects />;
      case 2:
        return <h2>Labs</h2>;
      case 3:
        return <h2>LeetCode</h2>;
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
              onClick={() => setActiveTab(index)}
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
