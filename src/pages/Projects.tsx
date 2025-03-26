import Card from '../components/Card';
import projectsData from '../data/projects/projects.json';

interface Project {
  name: string;
  url: string;
  desc: string;
  image: string;
  alt: string;
}

const Projects = () => {
  const projects: Project[] = projectsData;

  if (projects.length === 0) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          No Projects Available
        </h1>
        <p className="text-gray-600">
          It looks like there are no projects at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.name}
            name={project.name}
            url={project.url}
            desc={project.desc}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;