import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductId() {

    const apiUrlSingalProduct = 'http://localhost:9000/products';

    const {idProduct} = useParams();

    const [singalProduct, setSingalProduct] = useState([]);

    const getSingalProduct = () => {

        fetch(`${apiUrlSingalProduct}/${idProduct}`).then((res) => ((res.json())))
        .then((TryByOneProduct) => {
            setSingalProduct(TryByOneProduct);
        })

    }

    useEffect(() => {
        getSingalProduct();
    },[]);

    return(
        <>
            {
                    
                        <div className="card">
                        <img src= {singalProduct.image} className="card-img-top" alt={singalProduct.title}/>
                        <h1 className="card-title">{singalProduct.title}</h1>
                        <div className="card-body">
                            <h4 className="card-text">{singalProduct.description}</h4>
                            <h4 className="card-text">{singalProduct.price}</h4>
                        </div>
                        </div>
                    
            }


        </>

    )
}

export default ProductId;