import { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../context/ProjectContext";
import Project from "./Project";

function Projects({ projData }) {
  const { loggedUser } = useContext(ProjectContext);


  if (!projData || projData.length === 0) {
    return <h2>Lista projektów jest pusta</h2>;
  }
  return (
    <>
      <Link className="link" to="/">Wyloguj</Link>
      <h2>Projekty użytkownika {loggedUser.name}:</h2>
      <div className="project-list">
        {projData
          .filter((project) => project.teamMembers.includes(loggedUser.id))
          .map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </div>
    </>
  );
}

export default Projects;
