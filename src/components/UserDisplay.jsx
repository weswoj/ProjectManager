
function UserDisplay({user}) {
    return (
        <>
          <table>
            <tbody>
              <tr>
                <th colSpan={2}>Dane użytkownika {user.name}</th>
              </tr>
              <tr>
                <td>imię:</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>nazwisko:</td>
                <td>{user.surname}</td>
              </tr>
              <tr>
                <td>hasło: </td>
                <td>{user.password}</td>
              </tr>
              <tr>
                <td>wiek:</td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td>płeć:</td>
                <td>{user.sex}</td>
              </tr>
              <tr>
                <td>email:</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>numer telefonu:</td>
                <td>{user.phoneNumber}</td>
              </tr>
            </tbody>
          </table>    
          </>
    )
}

export default UserDisplay