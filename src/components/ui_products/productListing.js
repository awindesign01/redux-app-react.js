import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsComponents from "./productsComponents";
import axios from "axios";
import { setProducts } from "../../redux/actions/productsActions";

const ProductListing = () => {
	const products = useSelector((state) => state);
	const dispath = useDispatch();

	const fetchProducts = async () => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => dispath(setProducts(res.data)))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div style={{ display: "felx", justifyContent: "space-around", alignItems: "center" }}>
			<ProductsComponents />
		</div>
	);
};

export default ProductListing;
