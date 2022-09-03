import { useContext, useEffect, useState } from "react";
import ProjectContext from "../context/ProjectContext";

function UserEdit({ user }) {
  const { temporaryUser, editUser, initializeEditUser } =
    useContext(ProjectContext);
  useEffect(() => {
    if (!temporaryUser) {
      initializeEditUser(user);
    }
  });
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [password, setPassword] = useState(user.password);
  const [age, setAge] = useState(user.age);
  const [sex, setSex] = useState(user.sex);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhone] = useState(user.phoneNumber);

  const handleName = (e) => {
    let Value = { name: e.currentTarget.value };
    editUser(Value)
    setName(e.currentTarget.value);
  };
  const handleSurname = (e) => {
    let Value = { surname: e.currentTarget.value };
    editUser(Value)
    setSurname(e.currentTarget.value);
  };
  const handlePassword = (e) => {
    let Value = { password: e.currentTarget.value };
    editUser(Value)
    setPassword(e.currentTarget.value);
  };
  const handleAge = (e) => {
    let Value = { age: e.currentTarget.value };
    editUser(Value)
    setAge(e.currentTarget.value);
  };
  const handleSex = (e) => {
    let Value = { sex: e.currentTarget.value };
    editUser(Value)
    setSex(e.currentTarget.value);
  };
  const handleEmail = (e) => {
    let Value = { email: e.currentTarget.value };
    editUser(Value)
    setEmail(e.currentTarget.value);
  };
  const handlePhone = (e) => {
    let Value = { phoneNumber: e.currentTarget.value };
    editUser(Value)
    setPhone(e.currentTarget.value);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th colSpan={2}>Dane użytkownika {user.name}</th>
          </tr>
          <tr>
            <td>imię:</td>
            <td>
              <input type="text" onChange={handleName} value={name}></input>
            </td>
          </tr>
          <tr>
            <td>nazwisko:</td>
            <td>
              <input
                type="text"
                onChange={handleSurname}
                value={surname}
              ></input>
            </td>
          </tr>
          <tr>
            <td>hasło: </td>
            <td>
              <input
                type="text"
                onChange={handlePassword}
                value={password}
              ></input>
            </td>
          </tr>
          <tr>
            <td>wiek:</td>
            <td>
              <input type="text" onChange={handleAge} value={age}></input>
            </td>
          </tr>
          <tr>
            <td>płeć:</td>
            <td>
              <input type="text" onChange={handleSex} value={sex}></input>
            </td>
          </tr>
          <tr>
            <td>email:</td>
            <td>
              <input type="text" onChange={handleEmail} value={email}></input>
            </td>
          </tr>
          <tr>
            <td>numer telefonu:</td>
            <td>
              <input
                type="text"
                onChange={handlePhone}
                value={phoneNumber}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default UserEdit;
