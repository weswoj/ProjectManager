import { FaUserFriends as UsersIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
function UserIcon() {
  return (
    <>
      <Link to="/userConfig">
        <UsersIcon size={30} />
      </Link>
    </>
  );
}

export default UserIcon;
