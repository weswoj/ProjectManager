import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";
import DisplayComments from "../DisplayComments";
import DisplayProject from "../DisplayProject";



function ProjectDetailsPage({ handleAddComment }) {
  const { selectedProject } = useContext(ProjectContext);
  if (selectedProject.hasOwnProperty('comments')) {
    selectedProject.comments.sort((a, b) => b.time[1] - a.time[1]).sort((a, b) => b.time[0] - a.time[0])
    selectedProject.comments.sort((a, b) => b.date[2] - a.date[2]).sort((a, b) => b.date[1] - a.date[1]).sort((a, b) => b.date[0] - a.date[0])
  }


  return (
    <>
      <div>
        <h3> Szczegóły Projektu</h3>
        <DisplayProject project={selectedProject} fromProp="details" />
      </div>
      <div>
        <h3>Komentarze do Projektu</h3>
        {selectedProject.hasOwnProperty('comments') ?
          selectedProject.comments.map((comment) => (
            <DisplayComments key={comment.id} comment={comment} />
          )) : <h4>Projekt nie ma jeszcze komentarzy</h4>}

      </div>
      <div>
        <Link to="/projectList">Powrót</Link>
      </div>
    </>
  );
}

export default ProjectDetailsPage;
