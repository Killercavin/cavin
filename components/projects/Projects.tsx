import { project } from "@/types/main";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-scroll";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";

interface Props {
  projectsData: project[];
}

const Projects = ({ projectsData }: Props) => {
  // Derived state for reversed projects
  const projects = useMemo(() => [...projectsData].reverse(), [projectsData]);

  // Get unique categories
  const categories = useMemo(() => Array.from(new Set(projects.map((s) => s.category))), [projects]);

  // State for selected category and filtered projects
  const [category, setCategory] = useState<string>(categories[0] || "");
  const [filteredProjects, setFilteredProjects] = useState<project[]>(projects);
  const [viewAll, setViewAll] = useState(false);

  const filterProjects = useCallback((cat: string) => {
    setViewAll(false);
    setCategory(cat);
    setFilteredProjects(
      projects.filter((p) => p.category.toLowerCase() === cat.toLowerCase())
    );
  }, [projects]);

  useEffect(() => {
    if (categories.includes("MERN Stack")) {
      filterProjects("MERN Stack");
    } else {
      filterProjects(categories[0] || "");
    }
  }, [categories, filterProjects]);

  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 min-h-screen">
      <h2 className="text-4xl text-center font-extrabold">Projects</h2>

      {/* Category Filters */}
      <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
        {categories.map((c, i) => (
          <span
            key={i}
            onClick={() => filterProjects(c)}
            role="button"
            aria-label={`Filter projects by ${c}`}
            className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md cursor-pointer transition-all font-bold ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 hover:dark:bg-grey-900"
            }`}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Project Grid */}
      <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {filteredProjects
          .slice(0, viewAll ? filteredProjects.length : 6)
          .map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
      </div>

      {/* View All Button */}
      {filteredProjects.length > 6 && (
        <ViewAll
          scrollTo="projects"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Projects;

type MouseEventHandler = () => void;

export const ViewAll = ({
  handleClick,
  title,
  scrollTo,
}: {
  handleClick: MouseEventHandler;
  title: string;
  scrollTo: string;
}) => (
  <>
    <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
    <div className="text-center -translate-y-24">
      {title === "View All" ? (
        <button
          onClick={handleClick}
          className="bg-violet-600 text-white px-4 py-1.5 rounded-md hover:shadow-xl transition-all animate-bounce"
        >
          {title}
        </button>
      ) : (
        <Link
          to={scrollTo}
          className="bg-violet-600 text-white px-4 py-1.5 rounded-md hover:shadow-xl transition-all cursor-pointer"
          offset={-60}
          smooth={true}
          duration={500}
          onClick={handleClick}
        >
          {title}
        </Link>
      )}
    </div>
  </>
);
import { useCallback } from "react";
// Remove the incorrect useCallback implementation

