import logo from "../assets/img/leaves.png";
import { InputSearch } from "./InputSearch";
import { FaHamburger } from "react-icons/fa";
import { CartModal } from "./CartModal";
import SelectLanguage from "./SelectLanguage";
import { ButtonDropdown } from "./ButtonDropdown";
import { NavbarModal } from "./NavbarModal";
import { useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  if (
    location.pathname === "/signup" ||
    location.pathname === "/page-not-found" ||
    location.pathname === "/create"
  ) {
    return null;
  }

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img
          className="logo"
          src={logo}
          alt="logo"
          width="50px"
          height="50px"
        ></img>
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
        <a className="text-button" href="/signup">
          Sign in
        </a>
        <a href="/signup"><button className="register">Sign up</button></a> |
        <SelectLanguage />
        <CartModal />
      </div>
      <NavbarModal />
    </div>
  );
}
