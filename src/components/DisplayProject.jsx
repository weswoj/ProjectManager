import { useContext } from "react";
import ProjectContext from "../context/ProjectContext";

function DisplayProject({ project, fromProp }) {
  const { userdata } = useContext(ProjectContext)
  return (
    <>
      <table className="project-table">
        <tbody>
          <tr>
            <th>Nazwa Projektu</th>
            <th>Data rozpoczęcia</th>
            <th>Data zakończenia</th>
            {project.status ? <th>Status projektu</th> : console.log()}
            {project.aboutText ? <th>Opis projektu</th> : console.log()}
            <th>Członkowie Projektu</th>
            {fromProp === "details" ?
              <th>
                Autor Projektu
              </th> : console.log()}
          </tr>
          <tr>
            <td>{project.nameText}</td>
            <td>{project.startDate}</td>
            <td>{project.deadline}</td>
            {project.status ? <td>{project.status}</td> : console.log()}
            {project.aboutText ? <td>{project.aboutText}</td> : console.log()}
            <td>
              <table>
                <tbody>
                  <tr>
                    {project.teamMembers.find((member) => member === "T") ? (
                      <td>{userdata.find((member) => member.id === "T").name}</td>
                    ) : (
                      console.log()
                    )}
                    {project.teamMembers.find((member) => member === "E") ? (
                      <td>{userdata.find((member) => member.id === "E").name}</td>
                    ) : (
                      console.log()
                    )}
                  </tr>

                </tbody>
              </table>
            </td>
            {fromProp === "details" ?
              <td>
                {userdata.find((member) => member.id === project.createdByUserId).name + " " + userdata.find((member) => member.id === project.createdByUserId).surname}
              </td> : console.log()}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DisplayProject;
