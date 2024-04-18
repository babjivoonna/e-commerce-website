import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

export const Products = ({ allProducts, addToCart }) => {
    return (
        <div>{allProducts ? 
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {allProducts.map((product, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <ProductCard addToCart={addToCart} product={product} />
                    </Grid>
                ))}
            </Grid>
       : "Loading..."}</div>
    );
};

export default Products;