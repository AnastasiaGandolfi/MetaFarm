import logo from "../assets/img/leaves.png";
import { InputSearch } from "./InputSearch";
import { FaHamburger } from "react-icons/fa";
import {CartModal} from "./CartModal";
import SelectLanguage from "./SelectLanguage";
import { ButtonDropdown } from "./ButtonDropdown";
import { NavbarModal } from "./NavbarModal";

export function Navbar() {


  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img className="logo" src={logo} alt="logo" width="50px" height="50px"></img>
        <InputSearch />
      </div>
      <div className="navbar-links">
        <a className="text-button" href="/marketPlace">MarketPlace</a>
        <a className="text-button" href="/drop">Drop</a>
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
        <a className="text-button" href="/create">Create</a> |
        <a className="text-button" href="/login">Sign in</a>
        <button className="register">Sign up</button> |
        <SelectLanguage/>
        <CartModal/>
      </div>
        <NavbarModal/>
    </div>
  );
}
