import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { cart, removeFromCart, clearCart } = useCart();
    const itemCount = cart.reduce((acc, item) => acc  + item.quantity, 0);
    const total = cart.reduce((acc, item) => acc  + item.price * item.quantity, 0).toFixed(2);
    return (
        <>
        <header className='bg-white shadow-md p-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-blue-600'>Product Catalog</h1>
            <div className='relative'>
                <button className='cursor-pointer'
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    <FaShoppingCart className='text-2xl text-gray-700' />
                    {itemCount > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
                            {itemCount}
                        </span>
                    )}
                </button>
                {showDropdown && (
                    <div className='absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50'>
                        <div className='p-4'>
                            <h2 className='text-lg font-semibold mb-4'>Cart Items</h2>
                            {cart.length === 0 ? (
                                <p className='text-gray-500'>Your cart is empty.</p>
                            ) : (
                                <ul>
                                    {cart.map((item) => (
                                        <li key={item.id} className='mb-2 flex justify-between'>
                                            <span>{item.name} x {item.quantity}</span>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className='text-red-500 text-sm hover:underline'
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <hr className='my-4' />
                            <p className='font-semibold text-lg mb-2'>Cart Summary</p>
                            <p>Total Items: {itemCount}</p>
                            <p>Total Price: ${total}</p>
                            {cart.length > 0 && (
                                <div className='absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50'>
                                    <div className='p-4'>
                                        <button
                                            onClick={clearCart}
                                            className='mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600'
                                        >
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
        </>
    );
};

export default Header;