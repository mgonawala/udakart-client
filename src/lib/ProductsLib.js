import Axios from 'axios';
import {ProductItem} from '../model/ModelItems';
const GET_API = 'http://localhost:8082/api/v0/products';

export async function getAllProducts() {
    try{
        const result = await Axios({
            method: 'get',
            url:GET_API,
            headers: {
                'Accept':'application/json',
            }
        });
        console.log('Get Products:', result.data);
        let products = [];
        if(result.data.items.length > 0){

            products = result.data.items.map( item => {
                        let product = {};
                        product.id = item.id;
                        product.name = item.name;
                        // TODO change imageUrl property
                        //product.imageUrl = item.imageUrl,
                        product.imageUrl = 'https://i.picsum.photos/id/836/200/300.jpg';
                        product.unitPrice = item.unitPrice;
                        product.quantity = item.quantity;
                        return product
                }
            );

            return products;
        }
    }
    catch (e) {
        console.log('Error occurred:',e);
        return [];
    }
}


