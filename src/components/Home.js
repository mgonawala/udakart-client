

import React,{useEffect, useState} from 'react';
import "./Home.css";
import Axios from 'axios';
import Card from "./Card";


export default function Home({isAuthenticated}){


  const [products, setProducts] = useState([]);

  useEffect(() => {
    onLoad()
  }, [])

  function onLoad() {
    setProducts([{
      "id":"1",
      "name":"Bottle",
      "quantity":23,
      "unitPrice": 20
    },
      {
        "id":"1",
        "name":"Bottle",
        "quantity":23,
        "unitPrice": 20
      },
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
        <div className={"card-deck"}>

          {products.map( product =>
            <Card name={product.name} unitPrice={product.unitPrice}/>
          )}
        </div>
    );
  }
  return(
    <div className="Home">
      {isAuthenticated? renderProducts(): renderHome()}
    </div>
  );
}