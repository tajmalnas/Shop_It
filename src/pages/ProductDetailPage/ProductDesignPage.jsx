import Navbar from "../../components/LandingPageComponents/Navbar"
import './ProductDesignPage.css'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import ProductDetailsDetail from "../../components/ProductDetailComponents/ProductDetailsDetail/ProductDetailsDetail";
import RatingAndReview from "../../components/ProductDetailComponents/RatingAndReview/RatingAndReview";
import ProductDisscussion from "../../components/ProductDetailComponents/ProductDiscussion/ProductDisscussion";
import { useSelector } from "react-redux";



const ProductDesignPage = () => {


    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const productDetail = useSelector((state)=>(state.productDetail.value));

    const tabOptions = [
        { label: "Details", component: <ProductDetailsDetail description = {productDetail.description} /> },
        { label: "Rating and Reviews", component: <RatingAndReview /> },
        { label: "Discussion", component: <ProductDisscussion /> },
    ];

  return (
    <div>
        <Navbar/>
        <hr/>
        <div className="product-design-page">
            <div className="product-design-upper">
                <section className="product-design-upper-left">
                    <img src={productDetail.img}></img>
                </section>
                <section className="product-design-upper-right">
                    <h2 className="hh">{productDetail.name}</h2>
                    <p className="pp">⭐⭐⭐⭐</p>
                    <h3>${productDetail.price}</h3>
                    <hr/>
                    <h4>Size</h4>
                    <div className="sizes">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                    </div>
                    <hr/>
                    <h4>Quantity</h4>
                    <div className="quantity">
                        <div className="button-div">
                            <button>+</button>
                            <p>1</p>
                            <button>-</button>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                        <button className="buy-now">Buy Now</button>
                    </div>
                </section>
            </div>
            <div className="product-design-lower">
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        {tabOptions.map((tab, index) => (
                            <Tab key={index} label={tab.label} />
                        ))}
                    </Tabs>
                </Box>
            </div>
            <div className="lower-tab-info">
                {tabOptions[value].component}
            </div>
        </div>
    </div>
  )
}

export default ProductDesignPage