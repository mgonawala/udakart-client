import React from "react";
import {useAppContext} from "../lib/contextLib";



export default function CartTotal(){

    const {cartItems} = useAppContext();

    function totalPrice(){
        return cartItems.reduce((total, item)=> total + (item.unitPrice * item.quantity),0);
    }
    return(
        <div className={"col"} style={{"marginBottom": 10}}>
            <div className={"container "}>
            <div className={"row float-right"}>
                <div className={"col-md-7"}>
                    <h3> Total: {totalPrice()}</h3>
                </div>
                <div className={"col-md-5"}>
                    <button type={"submit"} className={"btn btn-primary"}> Checkout </button>
                </div>
            </div>
            </div>
        </div>
    );
}
