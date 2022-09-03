import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import DisplayProject from "../DisplayProject";
import ProjectContext from "../../context/ProjectContext";

function ConfirmEditPage({ handleEdit }) {

  const { addTempProject, deleteTempProject, selectedProject } =
    useContext(ProjectContext);
  const project = useLocation().state[1];
  const returnProject = () => {
    handleEdit(project)
    deleteTempProject()
  };
  const addTemporary = () => {
    addTempProject(project);
  };
  return (
    <>
      <h2>Projekt przed edycją:</h2>
      <DisplayProject project={selectedProject} />
      <h2>Projekt po edycji:</h2>
      <DisplayProject project={project} />
      <h3>Czy na pewno chcesz wprowadzić te zmiany?</h3>
      <Link to="/projectList" onClick={deleteTempProject}>
        Anuluj
      </Link>
      <Link to="/editProject" onClick={addTemporary}>
        Powrót
      </Link>
      <Link to="/projectList" onClick={returnProject}>
        Zatwierdź
      </Link>
    </>
  );
}

export default ConfirmEditPage;
