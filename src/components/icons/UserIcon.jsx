import { FaUserFriends as UsersIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
function UserIcon() {
  return (
    <>
      <div className="userConfig">
        <h3>Ustawienia Użytkowników</h3>
        <Link to="/userConfig">
          <UsersIcon size={50} />
        </Link>
      </div>

    </>
  );
}

export default UserIcon;
