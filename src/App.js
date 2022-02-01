import "./App.css";
import Header from "./components/layout/header";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./components/ui_products/productListing";
import ProductDetails from "./components/ui_products/productDetails";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<ProductListing />} />
				<Route index path="/product/:productsId" element={<ProductDetails />} />
				<Route>404 Not Found</Route>
			</Routes>
		</div>
	);
}

export default App;
