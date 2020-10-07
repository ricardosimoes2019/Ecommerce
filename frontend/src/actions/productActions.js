import axios from 'axios';
const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS, PRODUCT_DETAILS_FAIL} = require("../constants/productConstants")

const listProducts = () => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}

const detailsProduct = (productId) => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId});
        const {data} = await axios.get("/api/product/" + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCESS, payload: data });
    }catch(error){
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
    }
}

export { listProducts, detailsProduct}