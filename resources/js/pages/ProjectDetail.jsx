import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjects, getUiUx } from "../services/api";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [uiux, setUiux] = useState([]);

  useEffect(() => {
    getProjects().then(res => {
      const found = res.data.find(p => p.slug === slug);
      setProject(found);
      if (found && found.category === "UI/UX") {
        getUiUx(found.id).then(res => setUiux(res.data));
      }
    });
  }, [slug]);

  if (!project) return <div className="pt-24 text-light">Loading...</div>;

  return (
    <div className="min-h-screen bg-section text-light pt-24 px-4">
      <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
      <img src={project.thumbnail ? `/storage/${project.thumbnail}` : "/default.png"} alt={project.title} className="rounded-xl mb-4 w-full max-w-lg" />
      <p className="mb-4">{project.description}</p>
      <div className="mb-4">
        <span className="font-bold">Tech Stack:</span> {project.tech_stack?.join(", ")}
      </div>
      {project.category === "UI/UX" && (
        <div>
          <h3 className="text-2xl font-bold mb-2">UI/UX Details</h3>
          {uiux.map(item => (
            <div key={item.id} className="mb-4 p-4 bg-slate-700 rounded-xl">
              <h4 className="font-bold">{item.type.replace("_", " ").toUpperCase()}</h4>
              {item.file_path && <img src={`/storage/${item.file_path}`} alt={item.title} className="my-2 rounded" />}
              <div>{item.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 