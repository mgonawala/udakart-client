

import React,{useEffect, useState} from 'react';
import "./Home.css";
import Axios from 'axios';
import Card from "./Card";
import {useAppContext} from "../lib/contextLib";

export default function Home({isAuthenticated}){


  const [products, setProducts] = useState([]);
  const {cartItems, setCartItems} = useAppContext();

  useEffect(() => {
    onLoad()
  }, [])

  function onLoad() {
    setProducts([{
      "id":"1",
      "name":"Bottle",
      "quantity":23,
      "unitPrice": 20,
      "imageUrl":'https://i.picsum.photos/id/836/200/300.jpg'
    },
      {
        "id":"2",
        "name":"Bottle",
        "quantity":23,
        "unitPrice": 20,
        "imageUrl":'https://i.picsum.photos/id/836/200/300.jpg'
      },
      {
        "id":"3",
        "name":"Bottle",
        "quantity":23,
        "unitPrice": 20,
        "imageUrl":'https://i.picsum.photos/id/836/200/300.jpg'
      },
      {
        "id":"4",
        "name":"Bottle",
        "quantity":23,
        "unitPrice": 200,
        "imageUrl":'https://i.picsum.photos/id/836/200/300.jpg'
      }
    ]);
  }

  function renderHome(){
    return (
        <div className="lander">
          <h1> Udakart Shopping App</h1>
          <p> A simple clone of E-commerce website</p>
        </div>

    );
  }

  function renderProducts() {
    return(
        <div className={"container products"}>
        <div className={"row"}>

          {products.map( product =>
            <Card id={ product.id} name={product.name} unitPrice={product.unitPrice} key={product.id} imageUrl={product.imageUrl}
            addToCart={addToCart}/>
          )}
        </div>
        </div>
    );
  }

  async function addToCart({id,name,unitPrice, imageUrl}) {
    let array = [...cartItems];
    let item = array.filter( cart => cart.id == id);
    if( item.length !== 0){
      let oldItems = array.filter(cart => cart.id !== id);
      let newItems = array.filter( cart => cart.id == id).map( cart=> ( {
             name: cart.name,
            id: cart.id,
            quantity: cart.quantity + 1,
            unitPrice: cart.unitPrice,
          imageUrl: cart.imageUrl
      }));
      await setCartItems(oldItems.concat(newItems));
    }
    else{
      item = {
        name: name,
        id: id,
        unitPrice: unitPrice,
        quantity: 1,
        imageUrl: imageUrl
      };
      await setCartItems(cartItems.concat(item));
    }
  }
  return(
    <div className="Home">
      {isAuthenticated? renderProducts(): renderHome()}
    </div>
  );
}
