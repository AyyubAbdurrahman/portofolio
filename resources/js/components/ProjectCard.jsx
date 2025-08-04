import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="bg-slate-800 rounded-2xl shadow-md hover:scale-105 transition p-4">
        <img src={project.thumbnail ? `/storage/${project.thumbnail}` : "/default.png"} alt={project.title} className="rounded-xl mb-3 w-full h-40 object-cover" />
        <h3 className="text-xl font-bold">{project.title}</h3>
        <span className="text-accent">{project.category}</span>
        <p className="mt-2 text-sm">{project.description.substring(0, 80)}...</p>
      </div>
    </Link>
  );
} 