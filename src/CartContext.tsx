import { createContext, useState } from "react";

type Cart = {
  name: string;
  link: string;
  collection: string;
  price: number;
};
const CartContext = createContext({
  items: [] as Cart[],
  flag: false as boolean,
  totalPrice: 0 as number,
  aviableButton: () => {},
  addToCart: (
    name: string,
    link: string,
    collection: string,
    price: number
  ) => {},
  removeToCart: (cartArray: Array<Cart>, nftName: string, price: number) => {},
});
const cartArray: Array<Cart> = JSON.parse(
  localStorage.getItem("items") || "[]"
);
console.log(cartArray);
export function CartProvider({ children }: { children: JSX.Element }) {
  const [items, setItems] = useState(cartArray);
  const [flag, setFlag] = useState(false);
  const [totalPrice, setTotal] = useState(0);
  const addToCart = (
    name: string,
    link: string,
    collection: string,
    price: number
  ) => {
    setItems((cartArray) => [...cartArray, { name, link, collection, price }]);
    setFlag(true);
    setTotal(totalPrice + price);
  };

  const removeToCart = (
    cartArray: Array<Cart>,
    nftName: string,
    price: number
  ) => {
    const nextCartItems = cartArray.filter(
      (cartItem) => cartItem.name !== nftName
    );
    setItems(nextCartItems);
    setFlag(false);
    setTotal(totalPrice - price);
  };
  const aviableButton = (): string => {
    if (!flag) {
      return "css-aeet0h-available";
    } else {
      return "css-aeet0h-not-available";
    }
  };
  return (
    <CartContext.Provider
      value={{
        items,
        flag,
        totalPrice,
        aviableButton,
        addToCart,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
