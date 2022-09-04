import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectContext from "../../context/ProjectContext";

function LoginPage() {
  const { userdata, logUser } = useContext(ProjectContext);
  const [usernameTyped, setUsernameTyped] = useState("");
  const [passwordTyped, setPasswordTyped] = useState("");
  const [credentialsCorrect, setCredentialsCorrect] = useState(false);
  const [message, setMessage] = useState("")

  useEffect(() => {
    checkCredentials();
  });
  const handleLogin = () => {
    logUser(usernameTyped);
  };
  const incorrectLogin = () => {
    setMessage("Nieprawidłowe dane logowania")
  }
  const checkCredentials = () => {
    let userDatabase = userdata;
    let userLogged = userDatabase.find(
      (user) => user.email === usernameTyped && user.password === passwordTyped
    );
    if (userLogged) {
      setCredentialsCorrect(true);
    } else {
      setCredentialsCorrect(false);
    }
  };
  const handleUsername = (event) => {
    setUsernameTyped(event.currentTarget.value);
    if (message) {
      setMessage(null)
    }

  };
  const handlePassword = (event) => {
    setPasswordTyped(event.currentTarget.value);
    if (message) {
      setMessage(null)
    }
  };

  return (
    <div className="login">
      <h2>Zaloguj się by zobaczyć listę projektów</h2>
      <form>
        <label>
          <p>Nazwa użytkownika (e-mail)</p>
          <input type="text" onChange={handleUsername} />
        </label>
        <label>
          <p>Hasło</p>
          <input type="password" onChange={handlePassword} />
        </label>
        <div>
          {message}
        </div>
        <div>
          {credentialsCorrect ? (
            <Link className="link" to="/projectList" onClick={handleLogin}>
              Log in
            </Link>
          ) : (
            <Link className="link" to="/" onClick={incorrectLogin}>
              Log in
            </Link>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
