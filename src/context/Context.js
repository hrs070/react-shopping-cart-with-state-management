import React, { createContext } from 'react';

export const CartContext = createContext();

export default function Context({ children }) {
    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}