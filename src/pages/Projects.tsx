import Card from '../components/Card'
import projects from '../data/projets/projects.json'

const Projects = () => {
    if (projects.length === 0) {
        return (
            <div className="text-center py-8">
                <h1 className="text-2xl font-semibold text-gray-800">No Projects Available</h1>
                <p className="text-gray-600">It looks like there are no projects at the moment.</p>
            </div>
        )
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project: { name: string; url: string; desc: string }) => (
                    <Card
                        key={project.name}  // Ensure each Card has a unique key
                        name={project.name}
                        url={project.url}
                        desc={project.desc}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects
