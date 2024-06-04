import React, { useState } from "react";
import "./joinpage.css";
import Landing from "../../components/Landing/landing";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import Loading from "../../components/Modals/loadingmodal/loading";
import Error from "../../components/Modals/errors/errors";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { join } from "../../api";

export default function JoinPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const [checked, setChecked] = useState(false);
  const [load, setLoading] = useState(false);
  const [myerr, setMyErr] = useState(false);
  const [valid, setValid] = useState(false);
  const [error, setError] = useState({});
  // user informations
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    profilePicture: "",
    firstName: "",
    lastName: "",
    year: "",
    program: "",
    following: {},
    followers: {},
    savedArticles: [],
    isAdmin: false,
    confirmPassword: "",
    agreeToTerms: checked,
  });

  const nameRegex = /^.{1,14}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{5,20}$/;
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // if the type of the event is a checkbox, then the value should be checked or else the value remains the value of the form input
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    if (name === "username") {
      error.name = !nameRegex.test(newValue)
        ? "Username should be less than 15"
        : "";

      !nameRegex.test(newValue) ? setValid(false) : setValid(true);
    } else if (name === "email") {
      error.email = !emailRegex.test(newValue) ? "Invalid Email" : "";

      !emailRegex.test(newValue) ? setValid(false) : setValid(true);
    } else if (name === "password") {
      error.password = !passwordRegex.test(newValue)
        ? "Between 5 and 20 char's, have numbers and special char's"
        : "";

      !passwordRegex.test(newValue) ? setValid(false) : setValid(true);
    } else if (name === "confirmPassword") {
      error.passwordConfirm = !(formData.password === newValue)
        ? "password mismach"
        : "";

      setValid(formData.password === newValue);
    } else if (name === "agreeToTerms") {
      error.terms = !checked ? "Please resolve terms and conditions" : "";

      !checked ? setChecked(false) : setChecked(true);
    }
  };

  //destructing formData to get the actuall needed field to store in my database 
  const { confirmPassword, agreeToTerms, ...actData } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        if (valid && checked) {
          await join(actData);
          setLoading(false);
        }
      }
     catch (error) {
      setLoading(false);
      setMyErr(true);
      console.log("error adding document to firestore", error)
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
        err_message={
          "User already exist... please trying with new credentials"
        }
      />
    );
  }

  return (
    <section className="joinpage">
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
          <h1>Join ScholarScribe</h1>
          <form id="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="label-name">
                USERNAME
              </label>
              <input
                type="text"
                id="name"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="input-field"
              />
              <span className="join_err">{error.name}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label-name">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
              />
              <span className="join_err">{error.email}</span>
            </div>
            <div className="form-group">
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
              <span className="join_err">{error.password}</span>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="label-name">
                CONFIRM PASSWORD
              </label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                {formData.confirmPassword && ( // Only display the button if there is text in the confirm password input
                  <button
                    type="button"
                    className="password-visibility-button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                )}
              </div>
              <span className="join_err">{error.passwordConfirm}</span>
            </div>
            <div>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  name="agreeToTerms"
                  onChange={handleChange}
                  className="checkbox-input"
                />
                <div className="custom-checkbox"></div>
                <p>
                  By signing up i agree to the <span>Terms and Conditions</span>
                </p>
              </label>
              <span className="join_err">{error.terms}</span>
            </div>
            <div className="form-group">
              <div className="twi-buttons">
                <button type="submit" className="signup-button hvr-wobble-skew">
                  Sign up
                </button>
                <p>or</p>
                <Link to="/loginpage">
                  <button className="login-button hvr-buzz">Log in</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
