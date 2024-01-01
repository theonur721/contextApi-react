import { useContext } from "react";
import { SepetContext } from "../context/SepetContext";

const Cart = ({id, name, image, price})=> {
    const {addToCart} = useContext(SepetContext);

    return (
        <div className="card">
            <img src={image} />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h4>{name}</h4>
                    <p>{price}</p>
                </div>

                <button className="btn btn-outline-dark" 
                onClick={()=>
                addToCart({id,name,image,price,amount:1,})}>SEPETE EKLE</button>
            </div>
        </div>
    )
}


export default Cart;