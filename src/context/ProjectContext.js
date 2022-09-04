import { createContext, useState } from "react";
const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [userdata, setUserdata] = useState([
    {
      id: "A",
      name: "Adam",
      surname: "Administrator",
      password: "pass123",
      age: 32,
      sex: "mężczyzna",
      email: "user123@mail.com",
      phoneNumber: 123456789,
    },
    {
      id: "T",
      name: "Tomek",
      surname: "Testowy",
      password: "pass456",
      age: 23,
      sex: "mężczyzna",
      email: "user456@mail.com",
      phoneNumber: 456123789,
    },
    {
      id: "E",
      name: "Ewa",
      surname: "Eksperymentalna",
      password: "pass789",
      age: 22,
      sex: "kobieta",
      email: "user789@mail.com",
      phoneNumber: 789123456,
    },
  ]);
  const [loggedUser, setLoggedUser] = useState({});
  const [temporaryUser, setTemporaryUser] = useState();
  const [temporaryProject, setTemporaryProject] = useState();
  const [selectedProject, setSelectedProject] = useState();

  const getUserdata = (userdata) => {
    setUserdata(userdata);
  };
  const logUser = (username) => {
    let userLoggedIn = userdata.find((user) => user.email === username);
    setLoggedUser(userLoggedIn);
  };
  const initializeEditUser = (user) => {
    setTemporaryUser(user);
  };
  const editUser = (value) => {
    setTemporaryUser((editedUser) => ({
      ...editedUser,
      ...value,
    }));
  };
  const changeUserdata = () => {
    let temps = userdata;
    temps.map((user) => {
      if (user.id === temporaryUser.id) {
        user.name = temporaryUser.name;
        user.surname = temporaryUser.surname;
        user.password = temporaryUser.password;
        user.age = temporaryUser.age;
        user.sex = temporaryUser.sex;
        user.email = temporaryUser.email;
        user.phoneNumber = temporaryUser.phoneNumber;
      }
    });
    setUserdata(temps);
    setLoggedUser(userdata.find((user) => user.id === loggedUser.id));
  };
  const addTempProject = (project) => {
    setTemporaryProject(project);
  };
  const deleteTempProject = () => {
    setTemporaryProject(null);
  };
  const addSelectedProject = (project) => {
    setSelectedProject(project);
  };
  const deleteSelectedProject = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectContext.Provider
      value={{
        userdata,
        getUserdata,
        temporaryUser,
        initializeEditUser,
        editUser,
        changeUserdata,
        loggedUser,
        logUser,
        temporaryProject,
        addTempProject,
        deleteTempProject,
        selectedProject,
        addSelectedProject,
        deleteSelectedProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
export default ProjectContext;
