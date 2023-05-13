import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectLanguage from "../components/SelectLanguage";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/img/logo-nobg.png";
import { FaExclamationCircle } from "react-icons/fa";
import "animate.css";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => fetch(url).then((result) => result.json());

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showText, setShowText] = useState(true);
  const [loggedin, setLoggedin] = useState(false);
  const [signedup, setSignedup] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      let missingRequirements = "";
      if (!/(?=.*\d)/.test(password)) missingRequirements += "number, ";
      if (!/(?=.*[a-z])/.test(password))
        missingRequirements += "lowercase letter, ";
      if (!/(?=.*[A-Z])/.test(password))
        missingRequirements += "uppercase letter, ";
      if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(password))
        missingRequirements += " and a special character, ";
      if (missingRequirements.length > 0) {
        missingRequirements = missingRequirements.slice(0, -2);
        setPasswordError(
          <div className="password-error">
            <FaExclamationCircle /> Password invalid: a password must have at
            least 8 characters (both upper and lower case), 1{" "}
            {missingRequirements}
          </div>
        );
        return false;
      } else {
        setPasswordError("");
        return true;
      }
    } else {
      setPasswordError("");
      return true;
    }
  };

  const validateEmail = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const login = () => {
      setError("");
    if (validatePassword() && validateEmail()) {
      axios
        .post("https://metafarm.me/api/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (!response.data.error) {
            setLoggedin(true);
            localStorage.setItem("email", JSON.stringify(email));
            setTimeout(() => {
              window.location.assign("/marketplace");
            }, 3000);
          } else {
            setError(response.data.error);
          }
        });
    }
  };

  const register = () => {
    setError("");
    if (validatePassword() && validateEmail()) {
      axios
        .post("https://metafarm.me/api/signup", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (!response.data.error) {
            setSignedup(true);
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }else{
            console.log(response.data.error);
            setError(response.data.error);
          }
        });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="footer-links">
        <a href="#">Help</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
      <nav className="hide-navbar">
        <Link to="/">Back</Link>
      </nav>
      <img
        src={logo}
        alt="Logo"
        className="logo"
        style={{
          position: "absolute",
          top: "0px",
          left: "20px",
          width: 200,
          height: 120,
        }}
      />

      <div className="right-section">
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <h1 className="title-right animate__animated  animate__slideInDown">
          A highly-curated platform for creating, collecting and trading unique
          NFTs
        </h1>
        <svg
          className="icon-svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill="#FFF"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.25 3C8.25 2.58579 8.58579 2.25 9 2.25C9.41421 2.25 9.75 2.58579 9.75 3V3.75H14.25V3C14.25 2.58579 14.5858 2.25 15 2.25C15.4142 2.25 15.75 2.58579 15.75 3V3.75H16C18.7614 3.75 21 5.98858 21 8.75V16.75C21 19.5114 18.7614 21.75 16 21.75H8C5.23858 21.75 3 19.5114 3 16.75V8.75C3 5.98858 5.23858 3.75 8 3.75H8.25V3ZM14.25 5.25V6C14.25 6.41421 14.5858 6.75 15 6.75C15.4142 6.75 15.75 6.41421 15.75 6V5.25769C17.8427 5.38673 19.5 7.12482 19.5 9.25V10.5H4.5V9.25C4.5 7.12482 6.15732 5.38673 8.25 5.25769V6C8.25 6.41421 8.58579 6.75 9 6.75C9.41421 6.75 9.75 6.41421 9.75 6V5.25H14.25ZM13.018 13.9822C13.018 14.5443 12.5623 15 12.0002 15C11.438 15 10.9823 14.5443 10.9823 13.9822C10.9823 13.42 11.438 12.9643 12.0002 12.9643C12.5623 12.9643 13.018 13.42 13.018 13.9822ZM15.8567 15C16.4189 15 16.8746 14.5443 16.8746 13.9822C16.8746 13.42 16.4189 12.9643 15.8567 12.9643C15.2946 12.9643 14.8389 13.42 14.8389 13.9822C14.8389 14.5443 15.2946 15 15.8567 15ZM9.16072 13.9822C9.16072 14.5443 8.70501 15 8.14286 15C7.58071 15 7.125 14.5443 7.125 13.9822C7.125 13.42 7.58071 12.9643 8.14286 12.9643C8.70501 12.9643 9.16072 13.42 9.16072 13.9822ZM12.0002 18.7499C12.5623 18.7499 13.018 18.2942 13.018 17.7321C13.018 17.1699 12.5623 16.7142 12.0002 16.7142C11.438 16.7142 10.9823 17.1699 10.9823 17.7321C10.9823 18.2942 11.438 18.7499 12.0002 18.7499ZM16.8746 17.7321C16.8746 18.2942 16.4189 18.7499 15.8567 18.7499C15.2946 18.7499 14.8389 18.2942 14.8389 17.7321C14.8389 17.1699 15.2946 16.7142 15.8567 16.7142C16.4189 16.7142 16.8746 17.1699 16.8746 17.7321ZM8.14286 18.7499C8.705 18.7499 9.16071 18.2942 9.16071 17.7321C9.16071 17.1699 8.705 16.7142 8.14286 16.7142C7.58071 16.7142 7.125 17.1699 7.125 17.7321C7.125 18.2942 7.58071 18.7499 8.14286 18.7499Z"
          ></path>
          <defs>
            <linearGradient
              id="paint_drop_linear"
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1199FA"></stop>
              <stop offset="1" stop-color="#11D0FA"></stop>
            </linearGradient>
          </defs>
        </svg>
        <h2 className="subtitle-right animate__animated animate__fadeInLeft">
          {" "}
          Drops{" "}
        </h2>
        <p className="text-right animate__animated animate__slideInRight">
          {" "}
          Purchase NFTs that are directly sold by top Creators
        </p>
        <svg
          className="icon-svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 12C2 6.48 6.47 2 12 2C17.52 2 22 6.48 22 12C22 17.53 17.52 22 12 22C6.47 22 2 17.53 2 12ZM10.7082 9.55925C10.18 9.76239 9.76259 10.1798 9.55944 10.708L8.03457 14.6727C7.72352 15.4814 8.51815 16.2761 9.32689 15.965L13.2916 14.4401C13.8198 14.237 14.2372 13.8196 14.4403 13.2914L15.9652 9.3267C16.2763 8.51796 15.4816 7.72332 14.6729 8.03438L10.7082 9.55925Z"
            fill="#FFF"
          ></path>
          <defs>
            <linearGradient
              id="paint_discover_linear"
              x1="2"
              y1="12"
              x2="22"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1199FA"></stop>
              <stop offset="1" stop-color="#11D0FA"></stop>
            </linearGradient>
          </defs>
        </svg>
        <h2 className="subtitle-right animate__animated animate__fadeInLeft">
          {" "}
          Marketplace{" "}
        </h2>
        <p className="text-right animate__animated animate__slideInRight">
          {" "}
          Bid on and auction off rare digital collectibles
        </p>
        <svg
          className="icon-svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.00006 1L7.50006 0L7.00006 1L6.00006 1.125L6.83406 1.833L6.50006 3L7.50006 2.334L8.50006 3L8.16606 1.833L9.00006 1.125L8.00006 1ZM16.3341 11.666L15.5001 10L14.6661 11.666L13.0001 11.875L14.3891 13.056L13.8341 15L15.5001 13.889L17.1661 15L16.6111 13.056L18.0001 11.875L16.3341 11.666ZM3.66706 3.333L3.00006 2L2.33306 3.333L1.00006 3.5L2.11106 4.444L1.66706 6L3.00006 5.111L4.33306 6L3.88906 4.444L5.00006 3.5L3.66706 3.333ZM0.414062 14C0.414062 14.534 0.622062 15.036 1.00006 15.414L2.58606 17C2.96406 17.378 3.46606 17.586 4.00006 17.586C4.53406 17.586 5.03606 17.378 5.41406 17L17.0001 5.414C17.3781 5.036 17.5861 4.534 17.5861 4C17.5861 3.466 17.3781 2.964 17.0001 2.586L15.4141 1C14.6581 0.244 13.3421 0.244 12.5861 1L1.00006 12.586C0.622062 12.964 0.414062 13.466 0.414062 14ZM14.0001 2.414L15.5861 4L12.0001 7.586L10.4141 6L14.0001 2.414Z"
            fill="#FFF"
          ></path>
          <defs>
            <linearGradient
              id="paint_create_linear"
              x1="0.500008"
              y1="10"
              x2="19.5"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1199FA"></stop>
              <stop offset="1" stop-color="#11D0FA"></stop>
            </linearGradient>
          </defs>
        </svg>
        <h2 className="subtitle-right animate__animated animate__fadeInLeft">
          {" "}
          Create{" "}
        </h2>
        <p className="text-right animate__animated animate__slideInRight">
          {" "}
          Mint your own creations into NFTs
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 6C1.5 4.34315 2.84315 3 4.5 3H9.48713C10.8441 3 11.9906 3.90091 12.3612 5.13723C11.662 5.2925 11.0157 5.69721 10.5678 6.32682L4.70522 14.5689C3.74486 15.919 4.06083 17.7921 5.41097 18.7524L5.91995 19.1145H4.5C2.84315 19.1145 1.5 17.7713 1.5 16.1145V6ZM17.2471 5.62124C15.897 4.66088 14.024 4.97686 13.0636 6.327L7.20098 14.5691C6.24062 15.9192 6.5566 17.7922 7.90673 18.7526L11.9706 21.6433C13.3208 22.6036 15.1938 22.2877 16.1542 20.9375L22.0168 12.6955C22.9772 11.3453 22.6612 9.47229 21.3111 8.51193L17.2471 5.62124Z"
            fill="#FFF"
          ></path>
          <defs>
            <linearGradient
              id="paint_create_linear"
              x1="0.500008"
              y1="10"
              x2="19.5"
              y2="10"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1199FA"></stop>
              <stop offset="1" stop-color="#11D0FA"></stop>
            </linearGradient>
          </defs>
        </svg>
        <h2 className="subtitle-right animate__animated animate__fadeInLeft">
          {" "}
          My NFTs{" "}
        </h2>
        <p className="text-right animate__animated animate__slideInRight">
          {" "}
          A digital gallery to showcase your collection
        </p>
      </div>

      <div className="form">
        {!loggedin && !signedup && (
          <>
            <h1 className="title-login">Sign Up or Log In to metafarm.com</h1>
            <h2 className="subtitle-login">
              Enter your email and password manually
            </h2>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              {passwordError && (
                <div className="password-input-container">{passwordError}</div>
              )}
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                  className="password-eye-icon"
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <button
                onClick={login}
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "1px solid white",
                }}
              >
                Log In
              </button>
              <button
                onClick={register}
                type="submit"
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </div>
            <div className="forget">Forgot your password?</div>
            <div className="next">
              {" "}
              By clicking Next, I hereby acknowledge that I agree to the{" "}
              <a href="#">metafarm.com NFT Disclaimer</a> and I've read the{" "}
              <a href="#">Privacy Notice</a>
            </div>
          </>
        )}
        {loggedin && (
          <>
            <h1 className="title-login">Welcome back {email}!</h1>
            <h2 className="subtitle-login">
              You will be redirected to our beautiful marketplace in a bit
            </h2>
          </>
        )}
        {signedup && (
          <>
            <h1 className="title-login">
              Thank you {email.split("@")[0]} for becoming an important part of
              our community
            </h1>
            <h2 className="subtitle-login">
              You will be redirected to our login page in few seconds
            </h2>
          </>
        )}

        {error && (
          <>
            <h2 className="subtitle-login" style={{color:"red"}}>
              {error}
            </h2>
          </>
        )}
      </div>

      <div className="select-language-container">
        <SelectLanguage />
      </div>
    </div>
  );
}

export default Login;
