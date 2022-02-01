import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../../redux/actions/productsActions";

const ProductDetails = () => {
	const product = useSelector((state) => state.product);
	const { category, image, price, title, rating, description } = product;
	const { productsId } = useParams();
	const dispatch = useDispatch();

	const fetchProductsDetails = () => {
		axios
			.get(`https://fakestoreapi.com/products/${productsId}`)
			.then((res) => dispatch(selectedProducts(res.data)))
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		if (productsId && productsId !== "") fetchProductsDetails();
	}, [productsId]);

	return (
		<div
			style={{
				margin: "0 auto",
				width: "80vw",
				height: "80vh",
				backgroundColor: "#fff",
				display: "flex",
			}}
		>
			<div style={{ width: "50%", height: "100%", display: "grid", placeItems: "center" }}>
				<img src={image} alt={category} style={{ width: "80%" }} />
			</div>
			<div style={{ width: "50%", height: "100%" }}>
				<h1>{title}</h1>
				<p>{category}</p>
				<h4>{description}</h4>
				<p>
					rate: {rating.rate} count: {rating.count}
				</p>
				<h4 style={{color: "#ff2351"}}>$ {price}</h4>
				<button>shop</button>
			</div>
		</div>
	);
};

export default ProductDetails;
