import { useContext } from "react"
import { Link } from "react-router-dom"
import ProjectContext from "../../context/ProjectContext"
import UserDisplay from "../UserDisplay"

function UserConfigConfirm() {
  const {loggedUser, temporaryUser, changeUserdata} = useContext(ProjectContext)
  return (
    <>
    <h2>Dane użytkownika przed edycją</h2>
    <UserDisplay user={loggedUser} />
    <h2>Dane użytkownika po wprowadzeniu zmian</h2>
    <UserDisplay user = {temporaryUser} />

    <Link to="/projectList">Anuluj</Link>
    <Link to="/userConfig">Powrót</Link>
    <Link to="/projectList" onClick={changeUserdata}>Wykonaj</Link>
    </>
  )
}

export default UserConfigConfirm