import { Link } from "react-router-dom";
import { useContext } from "react";
import DisplayProject from "../DisplayProject";
import ProjectContext from "../../context/ProjectContext";

function DeleteProjectPage({ handleDelete }) {
  const { selectedProject } = useContext(ProjectContext)
  const deleteProject = () => {
    handleDelete(selectedProject.id)
  }
  return (
    <>
      <h2>Wybrany Projekt:</h2>
      <DisplayProject project={selectedProject} />
      <h3>Czy na pewno chcesz usunąć ten projekt?</h3>
      <Link className="link" to="/projectList">Anuluj</Link>
      <Link className="link" to="/projectList" onClick={deleteProject}>Usuń</Link>
    </>
  );
}

export default DeleteProjectPage;
