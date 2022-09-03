import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";
import UserDisplay from "../UserDisplay";
import UserEdit from "../UserEdit";

function UserConfig() {
  const { loggedUser } = useContext(ProjectContext);
  const [editTriggered, setEditTriggered] = useState(false);
  const handleEdit = (e) => {
    e.preventDefault();
    setEditTriggered(!editTriggered);
  };
  return (
    <>
      {editTriggered ? (
        <UserEdit user={loggedUser} />
      ) : (
        <UserDisplay user={loggedUser} />
      )}
      <div>
        <button onClick={handleEdit}>
          {editTriggered ? "Powrót" : "Edytuj Dane"}
        </button>
      </div>
      <div>
        {editTriggered ? (
          <Link to="/userConfigConfirm">Dalej</Link>
        ) : (
          console.log()
        )}
      </div>
      {!editTriggered ? <Link to="/projectList">Powrót</Link> : console.log()}
    </>
  );
}

export default UserConfig;
