import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
export function CartModal() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <div>
      <button
        style={{ background: "transparent", color:"white" }}
        className="shoppingCart"
        onClick={toggleModal}
      >
        <FaShoppingCart size={20} />
      </button>
      <div className={show ? "cart-modal-show" : "cart-modal"}>
        <div className="cart-modal-title">
          <h3>Carrello(0)</h3>
          <button onClick={toggleModal}>X</button>
        </div>
        <div className="cart-modal-content">
          <FaShoppingCart size={60} />
          <h4>Carrello vuoto</h4>
          <p>Non sai da dove iniziare?</p>
          <button onClick={toggleModal}>Esplora il marketplace</button>
        </div>
      </div>
    </div>
  );
}
