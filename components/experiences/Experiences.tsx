import { education, experience } from "@/types/main";
import { useState, useMemo } from "react";
import { ViewAll } from "../projects/Projects";
import SectionWrapper from "../SectionWrapper";
import ExperienceCard from "./ExperienceCard";

interface Props {
  experienceData: experience[];
  educationData: education[];
}

const Experiences = ({ experienceData, educationData }: Props) => {
  const [show, setShow] = useState<"Experience" | "Education">("Experience");
  const [viewAll, setViewAll] = useState(false);

  // Dynamically choose data based on the current tab
  const displayedData = useMemo(() => {
    const data = show === "Experience" ? experienceData : educationData;
    return viewAll ? data : data.slice(0, 2);
  }, [show, viewAll, experienceData, educationData]);

  return (
    <SectionWrapper id="experience" className="min-h-screen">
      <h2 className="text-4xl text-center font-extrabold">Experience</h2>

      {/* Tabs for toggling between Experience and Education */}
      <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
        {["Experience", "Education"].map((tab) => (
          <button
            key={tab}
            onClick={() => setShow(tab as "Experience" | "Education")}
            className={`font-bold py-2 px-4 rounded-md transition-colors ${
              show === tab
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900 text-black dark:text-white"
            }`}
            aria-label={`Switch to ${tab} section`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {displayedData.map((item, index) => (
            <ExperienceCard
              key={index}
              {...item} // Ensure ExperienceCard accepts all necessary props
              index={index}
              duration={`${item.startDate} - ${item.endDate}`}
            />
          ))}
        </div>
      </div>

      {/* View All Button */}
      {(show === "Experience" ? experienceData : educationData).length > 2 && (
        <ViewAll
          scrollTo="experience"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Experiences;
