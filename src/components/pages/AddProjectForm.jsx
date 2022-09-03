import { useState } from "react";
import { useContext } from "react";
import ProjectContext from "../../context/ProjectContext";
import ProjectForm from "../ProjectForm";

function AddProjectForm() {

  const { temporaryProject } = useContext(ProjectContext)
  const [project] = useState(() => {
    if (temporaryProject) {
      return temporaryProject;
    }
  })

  return (
    <>
      <ProjectForm header="Wprowadź dane nowego projektu" fromProp="add" previousProject={project} />
    </>
  );
}

export default AddProjectForm;
