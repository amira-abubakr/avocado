import React from "react";
import { Button, Stack } from "react-bootstrap";
import categoriesData from "../data/categoriesData.json";
import FormatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CartItem = ({ id, quantity}) => {
 const recipe = categoriesData
  .flatMap(category => category.recipes) // يجيب كل الوصفات في Array واحدة
  .find(r => r.id === id);
  const {removeFromCart} = useShoppingCart();
  
  return (
    <div className="cart-item-wrapper">
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center cart-item-stack">
        <div className="cart-item-image-container">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="cart-item-image"
          />
          {quantity > 1 && (
            <span className="quantity-badge">{quantity}</span>
          )}
        </div>
        
        <div className="me-auto cart-item-details">
          <h6 className="item-name">{recipe.name}</h6>
          <div className="item-price">
            {FormatCurrency(recipe.price)}
          </div>
        </div>
        
        <div className="total-price">
          {FormatCurrency(recipe.price * quantity)}
        </div>

        <Button 
          variant="outline-danger" 
          size="sm" 
          onClick={() => removeFromCart(id)}
          className="remove-btn"
        >
          &times;
        </Button>
      </Stack>

      <style jsx>{`
        .cart-item-wrapper {
          background: white;
          border-radius: 16px;
          padding: 1rem;
          margin-bottom: 0.75rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cart-item-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #10b981, #059669);
        }

        .cart-item-wrapper:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
        }

        .cart-item-stack {
          position: relative;
          z-index: 2;
        }

        .cart-item-image-container {
          position: relative;
          flex-shrink: 0;
        }

        .cart-item-image {
          width: 80px !important;
          height: 80px !important;
          object-fit: cover !important;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .cart-item-image:hover {
          transform: scale(1.05);
        }

        .quantity-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
        }

        .cart-item-details {
          min-width: 0;
        }

        .item-name {
          color: #1f2937;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .item-price {
          color: #10b981;
          font-weight: 500;
          font-size: 0.9rem;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          display: inline-block;
        }

        .total-price {
          color: #1f2937;
          font-weight: bold;
          font-size: 1.1rem;
          text-align: right;
        }

        .remove-btn {
          width: 36px !important;
          height: 36px !important;
          border-radius: 10px !important;
          border: none !important;
          background: linear-gradient(135deg, #ef4444, #dc2626) !important;
          color: white !important;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem !important;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.2);
        }

        .remove-btn:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c) !important;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3) !important;
        }

        .remove-btn:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2) !important;
        }

        @media (max-width: 576px) {
          .cart-item-wrapper {
            padding: 0.75rem;
          }
          
          .cart-item-image {
            width: 60px !important;
            height: 60px !important;
          }
          
          .item-name {
            font-size: 0.9rem;
          }
          
          .total-price {
            font-size: 1rem;
          }
          
          .remove-btn {
            width: 32px !important;
            height: 32px !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CartItem;