import { CgAddR as PlusIcon } from "react-icons/cg";
import { Link } from "react-router-dom";

function AddIconLink() {
  return (
    <>
      <div className="addProject">
        <h3>Dodaj Nowy Projekt</h3>
        <Link to="/addForm">
          <PlusIcon size={50} />
        </Link>
      </div>

    </>
  );
}

export default AddIconLink;
