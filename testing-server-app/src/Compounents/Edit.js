    import React, { useEffect, useState } from 'react'
    import { useNavigate, useParams } from 'react-router'


    const Edit = () => {



        const [editingTitle, setEdittingTitle] = useState("")
        const [editingNumber, setEdittingNumber] = useState("")

        const navigate = useNavigate();

        const {editPrice} = useParams()
        const {editTitle} = useParams()
        const {editId} = useParams();


        const fetchEdit = 'http://localhost:9000/products';


        const handeSubmit = (e) => {

            e.preventDefault()

            fetch(`${fetchEdit}/${editId}`, {
                method: "PUT",

                headers : {

                    'Content-Type' : 'application/json',
                },

                body: JSON.stringify({
                    title : !editingTitle ? editPrice : editingTitle,
                    price : !editingNumber ? editTitle : editingNumber,
                })
                
            }).then((respense) => respense.json())
            .then((data) => {

                navigate('/products')
            })
        }

        console.log(editPrice)
        console.log(editTitle)

    return (
        <>
            <form className='form' onSubmit={handeSubmit}>
                    <div className="mb-3">
                        <label htmlFor="productTitle" className="form-label">PRODUCT TITLE</label>
                        <input defaultValue={editPrice} type="text" className="form-control" id="productTitle" placeholder="product title" aria-describedby="productTitle"
                        onChange={(e) => {
                            setEdittingTitle(e.target.value)
                        }}
                        />                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="productPrice" className="form-label">PRODUCT PRICE</label>
                        <input defaultValue={editTitle} type="text" maxLength={5} className="form-control" id="productPrice" placeholder="product Price" aria-describedby="product Price"
                        onChange={(e) => {
                            setEdittingNumber(e.target.value)
                        }}
                        />
                    </div>
                
                    <button onClick={() => {
                    }} type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    )
    }

    export default Edit

