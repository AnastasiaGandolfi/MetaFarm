import logo from "../assets/img/leaves.png";
import { InputSearch } from "./InputSearch";
import { NavbarDropdownButton } from "./NavbarDropdownButton";
import {CartModal} from "./CartModal";
import SelectLanguage from "./SelectLanguage";

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
        <NavbarDropdownButton
          type="navbar-dropdown text-button"
          text="Top Collection"
          elements={[
            "Bored Ape Yacht Club",
            "Otherdeed for Otherside",
            "Doodles",
            "Azuki",
            "CLONE X - X TAKASHI MURAKAMI",
          ]}
        />
        <a className="text-button" href="/create">Create</a> |
        <a className="text-button" href="/login">Accedi</a>
        <button className="register">Registrati</button> |
        <SelectLanguage/>
        <CartModal/>
      </div>
    </div>
  );
}
