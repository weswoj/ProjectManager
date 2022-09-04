import { Link } from "react-router-dom";
import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";
function Project({ project }) {
  const { addSelectedProject } = useContext(ProjectContext);
  const getClickedId = () => {
    addSelectedProject(project);
  };
  return (
    <>
      <table className="project-table">
        <tbody>
          <tr>
            <th>Nazwa Projektu</th>
            <th>Data rozpoczęcia</th>
            <th>Data zakończenia</th>
            <th>Status projektu</th>
            <th>Operacje</th>
          </tr>
          <tr>
            <td>{project.nameText}</td>
            <td>{project.startDate}</td>
            <td>{project.deadline}</td>
            <td>{project.status}</td>
            <td>
              <table className="project-subtable">
                <tbody>
                  <tr>
                    <td>
                      <Link className="link" to="/editProject" onClick={getClickedId}>
                        Edycja
                      </Link>
                    </td>
                    <td>
                      <Link className="link" to="/addComment" onClick={getClickedId}>
                        Dodaj komentarz
                      </Link>
                    </td>
                    <td>
                      <Link className="link" to="/projectDetails" onClick={getClickedId}>
                        Szczegóły Projektu
                      </Link>
                    </td>
                    <td>
                      <Link className="link" to="/deleteProject" onClick={getClickedId}>
                        Usuń
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Project;
