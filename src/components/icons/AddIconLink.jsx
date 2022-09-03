import { CgAddR as PlusIcon } from "react-icons/cg";
import { Link } from "react-router-dom";

function AddIconLink() {
  return (
    <>
      <Link to="/addForm">
        <PlusIcon size={30} />
      </Link>
    </>
  );
}

export default AddIconLink;
