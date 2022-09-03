import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../context/ProjectContext";
function ProjectForm({ previousProject, header, fromProp }) {
  const { temporaryProject, userdata, loggedUser, deleteTempProject } = useContext(ProjectContext);
  const [nameText, setNameText] = useState(() => {
    if (previousProject) {
      return previousProject.nameText;
    } else {
      return "";
    }
  });
  const [aboutText, setAboutText] = useState(() => {
    if (previousProject) {
      return previousProject.aboutText;
    } else {
      return "";
    }
  });
  const [startDate, setStartDate] = useState(() => {
    if (previousProject) {
      return previousProject.startDate;
    } else {
      return "";
    }
  });
  const [deadline, setDeadline] = useState(() => {
    if (previousProject) {
      return previousProject.deadline;
    } else {
      return "";
    }
  });
  const [status, setStatus] = useState(() => {
    if (previousProject && fromProp === "edit") {
      return previousProject.status;
    } else {
      return "";
    }
  });
  const [teamMembers, setTeamMembers] = useState(() => {
    if (previousProject) {
      return previousProject.teamMembers
    } else {
      return ["A"]
    }
  });
  const [createdBy, setCreatedBy] = useState(() => {
    if (previousProject && fromProp === "edit") {
      return previousProject.createdByUserId;
    } else {
      return loggedUser.id;
    }
  });
  const [project, setProject] = useState(() => {
    if (temporaryProject) {
      return temporaryProject;
    } else if (previousProject) {
      return previousProject;
    } else {
      return {};
    }
  });
  const [checkPassed, setCheckPassed] = useState(false);
  const [message, setMessage] = useState("");
  const [linkVal] = useState(() => {
    if (previousProject && fromProp === "edit") {
      return "/confirmEdit";
    } else {
      return "/addProject";
    }
  });

  useEffect(() => {
    checkSubmit();
    handleUpdateMembers();
    handleUpdateCreator();
  });

  const handleNameChange = (e) => {
    let Value = { nameText: e.currentTarget.value };
    setProject((project) => ({
      ...project,
      ...Value,
    }));
    setNameText(e.currentTarget.value);
  };
  const handleAboutChange = (e) => {
    let Value = { aboutText: e.currentTarget.value };
    setProject((project) => ({
      ...project,
      ...Value,
    }));
    setAboutText(e.currentTarget.value);
  };
  const handleStartDate = (e) => {
    let Value = { startDate: e.currentTarget.value };
    setProject((project) => ({
      ...project,
      ...Value,
    }));
    setStartDate(e.currentTarget.value);
  };
  const handleEndDate = (e) => {
    let Value = { deadline: e.currentTarget.value };
    setProject((project) => ({
      ...project,
      ...Value,
    }));
    setDeadline(e.currentTarget.value);
  };
  const handleStatus = (e) => {
    let Value = { status: e.currentTarget.value };
    setProject((project) => ({
      ...project,
      ...Value,
    }));
    setStatus(e.currentTarget.value);
  };
  const handleTeamMembers = (e) => {
    if (e.target.checked) {
      if (!teamMembers.includes(e.target.value)) {
        setTeamMembers([e.target.value, ...teamMembers]);
      }
    } else {
      if (teamMembers.includes(e.target.value)) {
        setTeamMembers(
          teamMembers.filter((member) => member !== e.target.value)
        );
      }
    }
  };
  const handleUpdateMembers = () => {
    if (project.teamMembers !== teamMembers) {
      let Value = { teamMembers: teamMembers };
      setProject((project) => ({
        ...project,
        ...Value,
      }));
    }
  };
  const handleUpdateCreator = () => {
    if (!project.createdByUserId) {
      let Value = { createdByUserId: createdBy };
      setProject((project) => ({
        ...project,
        ...Value,
      }));
    }
  };
  const checkSubmit = () => {
    if (nameText === "") {
      setMessage("Nazwa projektu nie może być pusta");
    } else if (nameText !== "" && nameText.trim().length < 8) {
      setMessage("Nazwa projektu powinna zawierać minimum 8 znaków");
    } else if (aboutText.trim().length < 10) {
      setMessage("Opis projektu powinien składać się przynajmniej z 10 znaków");
    } else if (!startDate) {
      setMessage("Proszę wybrać datę startu projektu");
    } else if (!deadline) {
      setMessage("Proszę wybrać datę zakończenia projektu");
    } else if (deadline < startDate) {
      setMessage(
        "Data zakończenia projektu nie może być zaplanowana przed datą rozpoczęcia projektu"
      );
    } else {
      setMessage(null);
      setCheckPassed(true);
    }
    const deleteTempProject = () => {
      deleteTempProject()
    }
  };
  return (
    <>
      <form>
        <h2>{header}</h2>
        <div>
          <table className="form-table">
            <tbody>
              <tr>
                <td>Nazwa Projektu (min. 8 znaków)</td>
                <td>
                  <input
                    onChange={handleNameChange}
                    type="text"
                    placeholder="Nowy Projekt"
                    value={nameText}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Opis Projektu</td>
                <td>
                  <input
                    onChange={handleAboutChange}
                    type="text"
                    placeholder="Projekt dla płatności internetowych"
                    value={aboutText}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Data Rozpoczęcia Projektu</td>
                <td>
                  <input
                    onChange={handleStartDate}
                    type="date"
                    value={startDate}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Data Zakończenia Projektu</td>
                <td>
                  <input
                    onChange={handleEndDate}
                    type="date"
                    value={deadline}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>Członkowie Projektu</td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          {userdata.find((member) => member.id === "T").name}
                        </td>
                        <td>
                          <input
                            onChange={handleTeamMembers}
                            type="checkbox"
                            defaultChecked={teamMembers.includes("T")}
                            value={"T"}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {userdata.find((member) => member.id === "E").name}
                        </td>
                        <td>
                          <input
                            onChange={handleTeamMembers}
                            type="checkbox"
                            defaultChecked={teamMembers.includes("E")}
                            value={"E"}
                          ></input>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              {fromProp === "edit" ? (
                <>
                  <tr>
                    <td> Nowy Status </td>
                    <td>
                      <input
                        onChange={handleStatus}
                        type="text"
                        value={status}
                      ></input>
                    </td>
                  </tr>
                </>
              ) : (
                console.log()
              )}

              <tr>
                <td>
                  <Link to="/projectList" onClick={deleteTempProject}>Anuluj</Link>
                </td>
                <td>
                  {checkPassed ? (
                    <Link to={linkVal} state={[previousProject, project]}>
                      Dalej
                    </Link>
                  ) : (
                    <>
                      <a>Dalej</a>
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <div>{message}</div>
        </div>
      </form>
    </>
  );
}

export default ProjectForm;
