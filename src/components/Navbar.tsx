import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  
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
          {t("navbar.project")}
        </a>
        <a className="text-button" href="/marketPlace">
          {t("navbar.marketplace")}
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
          {t("navbar.create")}
        </a>{" "}
        |
        {!email && (
          <>
            <a className="text-button" href="/signup">
              {t("navbar.signIn")}
            </a>
            <a href="/signup">
              <button className="register">{t("navbar.signUp")}</button>
            </a>
          </>
        )}
        {email && (
          <>
            <a className="text-button" href="/">
              {email}
            </a>
            <button className="register" onClick={logout}>
              {t("navbar.logout")}
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
