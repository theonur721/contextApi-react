import { useContext } from "react";
import { SepetContext } from "../context/SepetContext";

const Checkout = ()=> {
    const {items, deleteFromCart} = useContext(SepetContext);

    const total = items.reduce((total, item)=> total + item.price * item.amount, 0);

    return (
        <div className="d-grid gap-5 p-4">
            <h1>Ürünlerin Toplamı Fiyatı 
                <span className="text-success p-3">{total}</span> TL'dir</h1>

            {items.map((item)=> (
                <div className="d-flex border shadow p-3 justify-content-between align-items-center h-50">
                    <img className="h-100 rounded" src={item.image} />
                    <h1>{item.name}</h1>
                    <h1 className="text-success">{item.price * item.amount}TL</h1>
                    <p>Miktar:{item.amount}</p>

                    <button className="button bg-danger text-light"
                    onClick={()=>deleteFromCart(item)}>
                        {item.amount > 1 ? "Azalt" : "Kaldır"}</button>
                </div>
            ))}
        </div>
    );
};


export default Checkout;