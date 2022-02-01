import { combineReducers } from "redux";
import { selectedProductReducer } from "./productReducer";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
	allProducts: productReducer,
	product: selectedProductReducer,
});

export default reducers;
