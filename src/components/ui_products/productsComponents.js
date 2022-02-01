import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { Link } from "react-router-dom";

const ProductsComponents = () => {
	const products = useSelector((state) => state.allProducts.products);

	return (
		<div className="div">
			{products.map(({ id, image, category, title, price }) => (
				<Link to={`/product/${id}`}>
					<div className="product">
						<div className="prodcut__inside-div">
							<div className="div-img">
								<img src={image} alt={category} className="img" />
							</div>
							<div className="div-title">
								<p className="title">{title.replace(title.slice(25), "...")}</p>
								<p className="price">$ {price}</p>
								<p className="category">{category}</p>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default ProductsComponents;
