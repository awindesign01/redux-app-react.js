import ActionType from "../constants/action_types";

export const setProducts = (data) => {
	return {
		type: ActionType.SET_PRODUCTS,
		payload: data,
	};
};

export const selectedProducts = (product) => {
	return {
		type: ActionType.SELECTED_PRODUCTS,
		payload: product,
	};
};
