import logo from "../assets/img/leaves.png";
import { InputSearch } from "./InputSearch";
import { FaHamburger } from "react-icons/fa";
import { CartModal } from "./CartModal";
import SelectLanguage from "./SelectLanguage";
import { ButtonDropdown } from "./ButtonDropdown";
import { NavbarModal } from "./NavbarModal";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function Navbar() {
  const [email, setEmail] = useState("");
  const location = useLocation();
  useEffect(() => {
    let rawEmail = localStorage.getItem("email");
    if (rawEmail) {
      setEmail(JSON.parse(rawEmail));
    }
  }, [email]);

  if (
    location.pathname === "/signup" ||
    location.pathname === "/page-not-found" ||
    location.pathname === "/create"
  ) {
    return null;
  }

  const logout = () => {
    axios.post("https://metafarm.me/api/logout").then(() => {
      localStorage.removeItem("email");
      setEmail((prevstate) => {
        return "";
      });
    });
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
            width="50px"
            height="50px"
          ></img>
        </a>
        <InputSearch />
      </div>
      <div className="navbar-links">
        <a className="text-button" href="/about">
          The project
        </a>
        <a className="text-button" href="/marketPlace">
          MarketPlace
        </a>
        <ButtonDropdown
          type="navbar-dropdown text-button"
          text="Top Collection"
          dropdownElement={[
            "Bored Ape Yacht Club",
            "Otherdeed for Otherside",
            "Doodles",
            "Azuki",
            "CLONE X - X TAKASHI MURAKAMI",
          ]}
        />
        <a className="text-button" href="/create">
          Create
        </a>{" "}
        |
        {!email && (
          <>
            <a className="text-button" href="/signup">
              Sign in
            </a>
            <a href="/signup">
              <button className="register">Sign up</button>
            </a>
          </>
        )}
        {email && (
          <>
            <a className="text-button" href="/">
              {email}
            </a>
            <button className="register" onClick={logout}>
              Logout
            </button>
          </>
        )}{" "}
        |
        <SelectLanguage />
        <CartModal />
      </div>
      <NavbarModal />
    </div>
  );
}
