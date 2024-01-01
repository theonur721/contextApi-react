import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SepetContext } from "../context/SepetContext";

const Header = ()=> {
    const navigate = useNavigate();
    const {items} = useContext(SepetContext);

    const total = items.reduce( (total,i)=> total + i.amount, 0);

    return (
        <header className="navbar bg-dark text-light p-3">

            <Link to={"/"} >
            <h1 className="text-light">Context</h1>
            </Link>

            <div onClick={()=> navigate("/sepet")} className="fs-3 d-flex gap-3 align-items-center">
            <i class="bi bi-cart4"></i>
            <span className="badge bg-danger">{total}</span>
            </div>

        </header>
    );
};


export default Header;