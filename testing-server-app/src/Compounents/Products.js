import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./ProductsStyle.css";
import Swal from 'sweetalert2'

function Products() {

    const apiUrl = "http://localhost:9000/products";

    const [allProducts, setProducts] = useState([]);

    const getAllProducts = () => {

        fetch(apiUrl).then((respense) => ((respense.json())))
        .then((getAllData) => {
            setProducts(getAllData);

        })
    }


    const fetchDelete = (idProduct) => {

        Swal.fire({
            title: `Are you shure do you want delete this product ${idProduct.title} ? `,
            showCancelButton: true
        }).then((data) => {
            if(data.isConfirmed) {

                fetch(`${apiUrl}/${idProduct.id}`, {
                    method : "DELETE"
                }).then((respenses) =>((respenses.json()))) 
                    .then((data) => {
                        getAllProducts(); 
                    })
            }
        })
    }

    useEffect(() => {

        getAllProducts();

    },[]);
    return(
        <>
        <div className="bloc__container">

            <h1 className="title-card"> Update your card  </h1>

            <table className="table">
    <thead>
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Title</th>
        <th scope="col">Price </th>
        <th scope="col">Operation</th>
        </tr>
    </thead>

    {
        allProducts.map((e) => {

            return(
                
                <tbody key={e.id}>
                    <tr>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.price}$</td>
                    <td>
                        <Link to="/products/add"  type="button" className="btn btn-success btn-sm">Create</Link>
                        <Link to={`/products/${e.id}`} className="btn btn-info btn-sm">Read</Link>
                        <Link to={`/Products/Edit/${e.title}/${e.price}/${e.id}`} className="btn btn-primary btn-sm">Update</Link>
                        <button className="btn btn-danger btn-sm" onClick={() => {
                        fetchDelete(e);
                        }}>Delete</button>
                    </td>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                    <td></td>
                    </tr>
                </tbody>
            )
        })
    }

    </table>












        
        </div>
        </>

    )
}

export default Products;