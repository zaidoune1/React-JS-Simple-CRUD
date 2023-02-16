import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Add() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const navagate = useNavigate();

    const postProduct = (event) => {

        event.preventDefault()

        fetch("http://localhost:9000/products", {

            method: "POST",

            headers : {

                'Content-Type' : 'application/json',
            },

            body: JSON.stringify({
                title,
                price
            })
        }).then((res) => res.json())
        .then((data) =>{
            navagate('/Products');
        });
    };

    return(
        <div className="form">

            <form onSubmit={postProduct}>
                    <div className="mb-3">
                        <label htmlFor="productTitle" className="form-label">PRODUCT TITLE</label>
                        <input type="text" className="form-control" id="productTitle" placeholder="product title" aria-describedby="productTitle"
                        onChange={(e) => {(setTitle(e.target.value))}}
                        />                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">PRODUCT PRICE</label>
                        <input type="number" className="form-control" id="productPrice" placeholder="product Price" aria-describedby="product Price"
                        onChange={(e) => {setPrice(e.target.value)}}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    )
}

export default Add;