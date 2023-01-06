import React from "react";

function Login({
  btnlogout,
  loginSubmit,
  emailError,
  passwordError,
  setEmail,
  setPassword,
}) {
  // const [email, setEmail] = useState(null);
  // const [password, setPassword] = useState(null);
  // function handleEmailChange(e) {
  //   e.preventDefault();
  //   props.getEmail(e.target.value);
  //   setEmail(e.target.value);
  // }
  // function handlePasswordChange(e) {
  //   e.preventDefault();
  //   props.getPass(e.target.value);
  //   setPassword(e.target.value);
  // }
  return (
    <div data-testid="login-comp" className="container fluid">
      {btnlogout === true ? (
        <>
          <div className="row col-md-6 text-center mb-4">
            <h2 className="heading-section">Welcome</h2>
          </div>
        </>
      ) : null}
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-4">
          <h2 className="heading-section">Login</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-5">
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <label htmlFor="EmailInput">Email address</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
              </small>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-3">
                <button type="submit" className="btn btn-success loginbtn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
