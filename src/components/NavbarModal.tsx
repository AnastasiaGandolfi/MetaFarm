import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { ButtonDropdown } from "./ButtonDropdown";
import { CartModal } from "./CartModal";
import SelectLanguage from "./SelectLanguage";

export function NavbarModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <div className="navbar-hamburger">
      <button
        style={{ background: "transparent", color: "white" }}
        className="shoppingCart"
        onClick={toggleModal}
      >
        <h1>≡ </h1>
      </button>
      <div className={show ? "cart-modal-show" : "cart-modal"}>
        <div className="cart-modal-title">
          <h3>MetaFarm</h3>
          <button onClick={toggleModal}>X</button>
        </div>
        <div className="cart-modal-content" style={{ marginTop: "-200px" }}>
          <div className="navbar-responsive">
            <a className="text-button" href="/marketPlace">
              MarketPlace
            </a>

            <a className="text-button" href="/drop">
              Drop
            </a>
            <a className="text-button" href="/create">
              Create
            </a>{" "}
            <div style={{borderTop:"1px solid #7AE19C", width: "100%", height: "1px"}}></div>

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

            <div style={{ display: "flex", alignItems:"center", gap:"30px" }}>
              <a className="text-button" href="/login">
                Sign in 
              </a>
              |
              <button className="register">Sign up</button>
            </div>

            <SelectLanguage />
            <CartModal />
          </div>
        </div>
      </div>
    </div>
  );
}
