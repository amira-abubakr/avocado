import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
import categoriesData from "../data/categoriesData.json";
import CartItem from "./CartItem";
 
const ShoppingCart = ({isOpen}) => {
  const { cartItems,closeCart } = useShoppingCart();
  
  return (
    <div>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end" style={{background: "linear-gradient(135deg, #f8fffe 0%, #ecfdf5 50%, #f0fdf4 100%)"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold text-success">Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      <Stack gap={3}>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="ms-auto fw-bold fs-5">
          Total{" "}
          {FormatCurrency(
            cartItems.reduce((total, cartItem) => {
               const recipe = categoriesData
    .flatMap(category => category.recipes) // بيجمع كل الريسيبيز في array واحد
    .find(r => r.id === cartItem.id);
              return total + (recipe?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default ShoppingCart;
