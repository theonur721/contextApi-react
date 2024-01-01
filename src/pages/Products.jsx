import Cart from "../components/Cart";

const Products = ()=> {
    const products = [
        {
            id: 1,
            name: "pantolon",
            image: "https://picsum.photos/200",
            price: 150
        },
        {
            id: 2,
            name: "gömlek",
            image: "https://picsum.photos/201",
            price: 80
        },
        {
            id: 3,
            name: "şort",
            image: "https://picsum.photos/202",
            price: 60
        },
        {
            id: 4,
            name: "tişört",
            image: "https://picsum.photos/203",
            price: 40
        },
        {
            id: 5,
            name: "ceket",
            image: "https://picsum.photos/204",
            price: 120
        },
        {
            id: 6,
            name: "ayakkabı",
            image: "https://picsum.photos/205",
            price: 200
        },
        {
            id: 7,
            name: "şapka",
            image: "https://picsum.photos/206",
            price: 25
        },
        {
            id: 8,
            name: "elbise",
            image: "https://picsum.photos/207",
            price: 180
        },
        {
            id: 9,
            name: "kazak",
            image: "https://picsum.photos/208",
            price: 90
        },
        {
            id: 10,
            name: "çanta",
            image: "https://picsum.photos/209",
            price: 70
        }
    ]

    return (
        <div className="container d-flex flex-wrap justify-content-between gap-5 p-4">
            {products.map((product)=>(
                <Cart {...product} />
            ))}
        </div>
    );
};


export default Products;