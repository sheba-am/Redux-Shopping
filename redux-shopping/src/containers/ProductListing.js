import React, { useEffect } from "react";
import axios  from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setProducts}    from "../redux/actions/productActions"
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
        const products = useSelector((state) => state); // after creating state we can access them in components in this file an no need for using props
        const dispatch = useDispatch();

        const fetchProducts = async () => {
            const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err);
            });
            dispatch(setProducts(response.data)) // dispatch the data recieved from api
        };

            useEffect(() => {
                fetchProducts();
            }
        );

        console.log(products)

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;