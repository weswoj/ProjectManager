import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// Components
import Header from "./components/Header";
import Projects from "./components/ProjectsList";
// Icons
import AddIconLink from "./components/icons/AddIconLink";
import UserIcon from "./components/icons/UserIcon";
// Pages
import AddProjectForm from "./components/pages/AddProjectForm";
import DeleteProjectPage from "./components/pages/DeleteProjectPage";
import AddProjectPage from "./components/pages/AddProjectPage";
import EditProjectPage from "./components/pages/EditProjectPage";
import UserConfig from "./components/pages/UserConfig";
import UserConfigConfirm from "./components/pages/UserConfigConfirm";
import ConfirmEditPage from "./components/pages/ConfirmEditPage";
import LoginPage from "./components/pages/LoginPage";
import ProjectDetailsPage from "./components/pages/ProjectDetailsPage";
import AddCommentPage from "./components/pages/AddCommentPage";
import TestPage from "./components/pages/TestPage";
// Databases
import { ProjectProvider } from "./context/ProjectContext";
function App() {
  const [projData, setProjData] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects();
      setProjData(projectsFromServer);
    };

    getProjects();
  }, []);
  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/projects");
    const data = await res.json();
    return data;
  };

  const addProject = (newProject) => {
    newProject.status = "NOWY";
    newProject.id = uuidv4();
    setProjData([newProject, ...projData]);
  };
  const editProject = (edited) => {
    let temps = projData;
    temps.map((project) => {
      if (project.id === edited.id) {
        project.nameText = edited.nameText;
        project.aboutText = edited.aboutText;
        project.startDate = edited.startDate;
        project.deadline = edited.deadline;
        project.status = edited.status;
        project.teamMembers = edited.teamMembers;
        project.comments = edited.comments;
      }
    });
    setProjData(temps);
  };

  const deleteProject = (id) => {
    setProjData(projData.filter((item) => item.id !== id));
  };
  return (
    <ProjectProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <LoginPage />
              </>
            }
          ></Route>
          <Route path="/userConfig" element={<UserConfig />}></Route>
          <Route
            path="/userConfigConfirm"
            element={<UserConfigConfirm />}
          ></Route>
          <Route
            path="/projectList"
            element={
              <>
                <UserIcon />
                <AddIconLink />
                <Projects projData={projData} />
              </>
            }
          ></Route>
          <Route path="/addForm" element={<AddProjectForm />}></Route>
          <Route
            path="/deleteProject"
            element={<DeleteProjectPage handleDelete={deleteProject} />}
          ></Route>
          <Route
            path="/addProject"
            element={<AddProjectPage handleAdd={addProject} />}
          ></Route>
          <Route path="/editProject" element={<EditProjectPage />}></Route>
          <Route
            path="/confirmEdit"
            element={<ConfirmEditPage handleEdit={editProject} />}
          ></Route>
          <Route
            path="/projectDetails"
            element={<ProjectDetailsPage />}
          ></Route>
          <Route
            path="/addComment"
            element={<AddCommentPage handleAddComment={editProject} />}
          ></Route>
          <Route path="/testGET" element={<TestPage />}></Route>
          <Route path="/testPOST" element={<TestPage />}></Route>
        </Routes>
      </Router>
    </ProjectProvider>
  );
}

export default App;
