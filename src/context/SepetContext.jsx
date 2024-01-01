import { createContext, useState } from "react";


export const SepetContext = createContext();

export function SepetProvider({children}) {
    const [items,setItems] = useState([]);

    const addToCart = (product)=> {
        const foundItem = items.find((item)=> item.id === product.id);

        if(foundItem) {
            foundItem.amount++;
        } else {
            setItems([...items,product]);
        }        
    };

    const deleteFromCart = (product) => {
        const foundItem = items.find((item)=> item.id === product.id);

        if(foundItem.amount > 1) {
           const cloneItems = [...items];
           product.amount--;

           const index = cloneItems.findIndex((i)=> i.id === product.id);

           cloneItems[index] = product;
           
           setItems(cloneItems);

        } else {
            const filtredArr = items.filter((item)=> item.id !== product.id);

            setItems(filtredArr);
        }
    };

    return (
        <SepetContext.Provider value={{items, addToCart, deleteFromCart}}>
            {children}
        </SepetContext.Provider>
    );
}