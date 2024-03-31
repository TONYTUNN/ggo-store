import React, { createContext, useState } from "react";
import all_product from '../component/Assets/all_product';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
      cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const [cartIterms,setCartItems] = useState(getDefaultCart());
    
    // console.log(cartIterms);
    const addToCart = ( itemId ) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartIterms);
    }
    // 
    const removeCart = ( itemId ) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    //   
    const getTotalCart = () => {
        let totalAmount = 0;
        for (const item in cartIterms) {
            if (cartIterms[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartIterms[item];
                }
            }
        }
        return totalAmount;
    };
    // 
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartIterms){
            if(cartIterms[item]>0){
                totalItem += cartIterms[item];
            }
        }
        return totalItem;
    }
    // 
    const contextValue = { getTotalCart ,all_product,cartIterms,addToCart,removeCart, getTotalCartItems};

    return ( 
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;