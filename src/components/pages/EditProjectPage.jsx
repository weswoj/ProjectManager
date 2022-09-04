import { useState, useContext } from "react";
import DisplayProject from "../DisplayProject";
import ProjectForm from "../ProjectForm";
import ProjectContext from "../../context/ProjectContext";

function EditProjectPage() {
  const { temporaryProject, selectedProject } = useContext(ProjectContext);
  const [project, setProject] = useState(() => {
    if (temporaryProject) {
      return temporaryProject;
    } else {
      return selectedProject;
    }
  });
  return (
    <>
      <div>
        <h2>Edytujesz projekt:</h2>
        <DisplayProject project={selectedProject} />
      </div>
      <div>
        <h3> Formularz do Edycji: </h3>
        <ProjectForm fromProp="edit" previousProject={project} />
      </div>
    </>
  );
}

export default EditProjectPage;
