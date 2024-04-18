import { Button, Card, CardActionArea, CardContent, CardMedia, Paper, Rating, Tooltip, Typography } from "@mui/material";
import './ProductCard.css'

export const ProductCard = ({ product, addToCart,allProducts }) => {
    return (
        <Paper className="paper">
            <div className="product-card">
                <div className="img-container">
                    <img className="product-image" src={product.image} />
                </div>
                <div className="product-details">
                    <div>
                        <div className="category">{product.category}</div>
                        <div className="title">
                            <Tooltip title={product.title}>
                                <div>{product.title.substr(0, 50)}{product.title.length > 50 && `...`}</div>
                            </Tooltip>
                        </div>
                    </div>
                    <div>
                        <div className="rating">
                            <Rating size="small" readOnly name="half-rating" defaultValue={product.rating.rate || 0} precision={0.1} />
                        </div>
                        <div className="price">₹{product.price}</div>
                        <Button className="add-btn" size="small" variant="contained" onClick={() => addToCart(product)}>Add</Button>
                    </div>
                </div>
            </div>
        </Paper>
    );
};

export default ProductCard;