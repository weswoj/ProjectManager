import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";
import DisplayProject from "../DisplayProject";

function AddProjectPage({ handleAdd }) {
  const { addTempProject, deleteTempProject } = useContext(ProjectContext)
  const newProject = useLocation().state
  const returnProject = () => {
    handleAdd(newProject[1])
    deleteTempProject()
  }
  const addTemporary = () => {
    addTempProject(newProject[1])
  }
  return (
    <>
      <h2>Nowy Projekt:</h2>
      <DisplayProject project={newProject[1]} />
      <h3>Czy na pewno chcesz dodać ten projekt?</h3>
      <Link to="/projectList">Anuluj</Link>
      <Link to="/addForm" onClick={addTemporary}>Powrót</Link>
      <Link to="/projectList" onClick={returnProject}>Zatwierdź</Link>
    </>
  );
}

export default AddProjectPage;
