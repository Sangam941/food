import {  useEffect, useState } from "react";
import { CartContextProvider } from "./CartContextProvider";



const CartContext = ({ children }) => {
  const [allCartItems, setAllCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (menuItem, quantity = 1) => {
    // ,menuItem = {
    //     id:1,
    //     name,
    //     category,
    //     desc,
    //     image,
    // quanity
    //
    // }

    const newItem = { ...menuItem, quantity };
    setAllCartItems([...allCartItems, newItem]);
  };

  const increseQuantity = (id) => {
    const updatedQuanitiy = allCartItems.map((item) => {
      // item = {id, name, desc, price, image, quantity=1}
      if (item.id == id) {
        let qty = item.quantity + 1;

        return { ...item, quantity: qty };
      } else {
        return item;
      }
    });

    console.log("updated item", updatedQuanitiy);
    setAllCartItems(updatedQuanitiy);
  };

  const decreaseQuantity = (id) => {
    const updatedQuanitiy = allCartItems.map((item) => {
      // item = {id, name, desc, price, image, quantity=1}
      if (item.id == id) {
        if (item.quantity > 0) {
          let qty = item.quantity - 1;

          return { ...item, quantity: qty };
        }
      } else {
        return item;
      }
    });

    console.log("updated item", updatedQuanitiy);
    setAllCartItems(updatedQuanitiy);
  };

  const deliveryCharge = 100;

  useEffect(() => {
    const subTotalAmount = () => {
      const data = allCartItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
      }, 0);

      setSubTotal(data);
    };

    subTotalAmount();

    // total amount
    const total = () => {
      const data = deliveryCharge + subTotal;

      setTotalAmount(data);
    };

    total();
  }, [increseQuantity, decreaseQuantity]);

  const deleteCart = (id) => {
    const data = allCartItems.filter((item) => {
      return item.id !== id;
    });

    setAllCartItems(data);
  };

  return (
    <CartContextProvider.Provider
      value={{
        addToCart,
        allCartItems,
        increseQuantity,
        decreaseQuantity,
        deleteCart,
        totalAmount,
        subTotal,
        deliveryCharge,
      }}
    >
      {children}
    </CartContextProvider.Provider>
  );
};

export default CartContext;
