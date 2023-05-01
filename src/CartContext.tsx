import { createContext, useState } from "react";

type Cart = {
  name: string;
  link: string;
  collection: string;
  serialNumber: number;
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
    serialNumber: number,
    price: number
  ) => {},
  removeToCart: (
    cartArray: Array<Cart>,
    nftSerialNumber: number,
    price: number
  ) => {},
});
const cartArray: Array<Cart> = [];
export function CartProvider({ children }: { children: JSX.Element }) {
  const [items, setItems] = useState(cartArray);
  const [flag, setFlag] = useState(false);
  const [totalPrice, setTotal] = useState(0);
  const addToCart = (
    name: string,
    link: string,
    collection: string,
    serialNumber: number,
    price: number
  ) => {
    setItems((cartArray) => [
      ...cartArray,
      { name, link, collection, serialNumber, price },
    ]);
    setFlag(true);
    setTotal(totalPrice + price);
  };

  const removeToCart = (
    cartArray: Array<Cart>,
    nftSerialNumber: number,
    price: number
  ) => {
    const nextCartItems = cartArray.filter(
      (cartItem) => cartItem.serialNumber !== nftSerialNumber
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
