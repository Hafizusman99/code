// import "./App.css";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [btnlogout, setbtnlogout] = useState(false);
  // function getEmail(emailData) {
  //   setEmail(emailData);
  //   return emailData;
  // }
  // function getPass(passData) {
  //   setPassword(passData);
  //   return passData;
  // }
  const MySwal = withReactContent(Swal);

  const handleValidation = (event) => {
    let formIsValid = true;
    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password) {
      formIsValid = false;
      setpasswordError("length must be min 8 Chracters and Max 22 Chracters");
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    setbtnlogout(false);
    MySwal.fire({
      width: "20em",
      icon: "success",
      title: "Logout",
      // text: error.response.data.explaination
    });
  };
  const loginSubmit = (e) => {
    let err = handleValidation();
    if (err) {
      e.preventDefault();
      axios
        .post("https://test.zyax.se/access", {
          email: email,
          password: password,
        })
        .then(function (response) {
          if (response.data.accessToken) {
            localStorage.setItem(
              "accessToken",
              JSON.stringify(response.data.accessToken)
            );
            setEmail("");
            setPassword("");
            setbtnlogout(true);
            MySwal.fire({
              width: "20em",
              icon: "success",
              title: "Success",
              text: "Login Successfully",
            });
          }
        })
        .catch(function (error) {
          setbtnlogout(false);
          setEmail("");
          setPassword("");
          MySwal.fire({
            width: "20em",
            icon: "error",
            title: error.response.data.error,
            text: error.response.data.explaination,
          });
        });
    }
  };
  /**
   * btnlogout, loginSubmit, emailError, passwordError, setEmail, setPassword
   */
  return (
    <div className="App">
      <section className="ftco-section">
        {btnlogout === true ? (
          <button
            type="button"
            style={{ float: "right", marginRight: `5%` }}
            className="btn btn-primary"
            onClick={logout}
          >
            Logout
          </button>
        ) : null}
        <Login
          btnlogout={btnlogout}
          loginSubmit={loginSubmit}
          emailError={emailError}
          passwordError={passwordError}
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          password={password}
          // getEmail={getEmail}
          // getPass={getPass}
        />
      </section>
    </div>
  );
}

export default App;
