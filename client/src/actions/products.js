import axios from 'axios';
import { FETCH_PRODUCTS } from './types';

export const fetchProducts = (productName) => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/api/products', {
            name: productName,
        });
        dispatch({
            type: FETCH_PRODUCTS,
            payload: res.data.name,
        });
    } catch (error) {
        console.log(JSON.stringify(error.message));
    }
};