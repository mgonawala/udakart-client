import React from 'react';
import {useAppContext} from "../lib/contextLib";
import "./ShoppingCart.css"

export default function ShoppingCart() {

    const {cartItems, setCartItems} = useAppContext();

    function tableRows(){
        return(
            cartItems.map( (item,index) => (
                <tr key={item.id} className={"h-25"}>
                    <th scope="row">{index+1}</th>
                    <td className="w-25">
                        <img src={item.imageUrl}
                             className="img-fluid img-thumbnail" alt="Product"/>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.unitPrice * item.quantity}</td>
                    <td>
                        <a href="#" className="btn btn-info btn-lg">
                            <i className="fas fa-edit"></i>
                        </a>
                    </td>
                    <td><a href="#" className="btn btn-danger btn-lg">
                        <i className="fas fa-trash"></i>
                    </a></td>
                </tr>
            ))
        );
    }
    return(
        <div className={"container table-container"} >
            <div className={"row"}>
                <div className={"col-md"}>
                    <table className={"table table-bordered rounded"}>
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total Price</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
