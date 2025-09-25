import React from 'react'
import FormatCurrency from './FormatCurrency'
import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'

const CategoryItem = ({ id, name, image, calories, price }) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    
    const quantity = getItemQuantity(id);
    
    return (
        <div>
            <Card 
                style={{
                    border: 'none',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    background: 'white',
                    position: 'relative'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                }}
            >
                {/* Top gradient line */}
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #10b981, #059669, #047857)',
                        zIndex: 2
                    }}
                />
                
                <Card.Img
                    variant="top"
                    src={image}
                    style={{ 
                        objectFit: "cover", 
                        height: "220px",
                        transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                />
                
                <Card.Body 
                    className="d-flex flex-column" 
                    style={{
                        background: 'linear-gradient(135deg, #092E22 0%, #064e3b 100%)',
                        color: "white",
                        padding: '1.5rem',
                        position: 'relative',
                        minHeight: '180px',
                        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                                         radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.1) 0%, transparent 50%)`
                    }}
                >
                    <Card.Title className="mb-2">
                        <span 
                            className="fs-5"
                            style={{
                                color: '#1e845bff',
                                fontWeight: '700',
                                fontSize: '1.2rem',
                                lineHeight: '1.3',
                                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            {name}
                        </span>
                    </Card.Title>
                    
                    <div className='d-flex justify-content-between align-items-center mt-auto' style={{gap:"0.5rem"}}>
                        <div>
                            <Card.Text 
                                className="fs-5"
                                style={{
                                    color: '#1e845bff',
                                    fontWeight: '700',
                                    fontSize: '1.3rem',
                                    marginBottom: '0.5rem',
                                    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                {FormatCurrency(price)}
                            </Card.Text>
                            <Card.Text 
                                className="text-light"
                                style={{
                                    color: '#d1fae5',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    opacity: '0.9'
                                }}
                            >
                                Calories: {calories}
                            </Card.Text>
                        </div>
                        
                        <div>
                            {quantity === 0 ? (
                                <button 
                                    className="p-2 rounded out-line-light"  
                                    onClick={() => increaseCartQuantity(id)}
                                    style={{
                                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                        border: 'none',
                                        color: 'white',
                                        fontWeight: '600',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '12px',
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                                    }}
                                >
                                    Add To Cart
                                </button>
                            ) : (
                                <div className="d-flex flex-column align-items-center" style={{gap:"0.75rem"}}>
                                    <div className="mt-auto d-flex align-items-center" style={{gap:"0.75rem"}}>
                                        <button 
                                            className='bg-transparent border px-2 text-light' 
                                            onClick={() => decreaseCartQuantity(id)}
                                            style={{
                                               background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                                                color: 'white',
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: '700',
                                                transition: 'all 0.3s ease',
                                                backdropFilter: 'blur(10px)',
                                                cursor: 'pointer'
                                            }}
                                            onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                                    }}
                                        >
                                            -
                                        </button>
                                        
                                        <span 
                                            className="fs-"
                                            style={{
                                                color: '#31815cff',
                                                fontWeight: '600',
                                                fontSize: '0.9rem',
                                                whiteSpace: 'nowrap',
                                                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                                            }}
                                        >
                                            {quantity} in the cart
                                        </span>
                                        
                                        <button 
                                            className='bg-transparent border px-2 text-light' 
                                            onClick={() => increaseCartQuantity(id)}
                                            style={{
                                                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                                                color: 'white',
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: '700',
                                                transition: 'all 0.3s ease',
                                                backdropFilter: 'blur(10px)',
                                                cursor: 'pointer'
                                            }}
                                              onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                                    }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CategoryItem