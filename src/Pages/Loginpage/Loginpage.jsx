import React, { useState } from "react";
import "./Loginpage.css";
import Landing from "../../components/Landing/landing";
import { GiCancel } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/users";
import Loading from "../../components/Modals/loadingmodal/loading";
import Error from "../../components/Modals/errors/errors";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { UserLogin } from "../../api";

export default function Loginpage() {
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();
  const [errorMessage, setErrMessage] = useState("");
  const [error, setError] = useState({});
  const [valid, setValid] = useState(false);
  const [load, setLoading] = useState(false);
  const [myerr, setMyErr] = useState(false);

  const [formData, setFormData] = useState({
    userEmail: "",
    password: "",
  });
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{5,20}$/;
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (name === "userEmail") {
      error.name = !emailRegex.test(value)
        ? "userEmail is invalid"
        : "";

      !emailRegex.test(value) ? setValid(false) : setValid(true);
    } else if (name === "password") {
      error.password = !passwordRegex.test(value)
        ? "Between 5 and 20 char's, have numbers and special char's"
        : "";

      !passwordRegex.test(value) ? setValid(false) : setValid(true);
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // setLoading(false);
    try {
      const res = await UserLogin(formData);
      setLoading(false);
      // getting the users id from the response and distpatching it as a current state id
      const userId = res._tokenResponse.localId;
      dispatch(login(userId));
      window.location.href = "/dashboard"
    } catch (error) {
      setLoading(false);
      setMyErr(true);
      setErrMessage("Invalid email or password, please check!");
    }
  };

  if (load) {
    return <Loading />;
  } else if (myerr) {
    return (
      <Error
        handleErrorClick={() => {
          setMyErr(false);
        }}
        err_message={errorMessage}
      />
    );
  }

  return (
    <section className="loginpage">
      <div className="outer">
        <Landing />
      </div>
      <div className="inner">
        <div className="join">
          <Link to="/" className="join_link">
            <button className="cancel-button">
              <GiCancel className="icon" />
            </button>
          </Link>
          <h1>Welcome back !</h1>
          <p className="paragraph">Sign in to your account</p>
          <form id="form-container">
            <div className="form-group">
              <label htmlFor="name" className="label-name">
                userEmail
              </label>
              <input
                type="text"
                id="name"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required
                className="input-field"
              />
              <span className="login_err">{error.name}</span>
            </div>
            <div className="form-group-pass">
              <label htmlFor="password" className="label-name">
                PASSWORD
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                {formData.password && ( // Only display the button if there is text in the password input
                  <button
                    type="button"
                    className="password-visibility-button"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                )}
              </div>
              <span className="login_err">{error.password}</span>
              {/* <button className="forgot-button">Forgot Password ?</button> */}
            </div>
            <div className="form-group">
              <div className="twi-buttons">
                <button
                  className="loginbutton hvr-wobble-skew"
                  onClick={HandleSubmit}
                >
                  Log in
                </button>
              </div>
              <div className="div-account">
                <p>Don't have an account yet ?</p>
                <Link to="/joinpage">
                  <button className="login-button hvr-buzz">Sign up</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
