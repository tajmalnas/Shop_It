import Navbar from "../../components/LandingPageComponents/Navbar"
import './ProductDesignPage.css'
const ProductDesignPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="product-design-page">
            <div className="product-design-upper">
                <section className="product-design-upper-left">
                    <img src="https://media.istockphoto.com/id/675403536/photo/canon-5d-mark-iv.jpg?s=612x612&w=0&k=20&c=r7TMFyKN9B6Telc6gXPmgYcfqWBF7eQVs0wwh54lyrc="></img>
                </section>
                <section className="product-design-upper-right">
                    <h2 className="hh">product name</h2>
                    <p className="pp">⭐⭐⭐⭐</p>
                    <h3>3000</h3>
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
                            <p>10</p>
                            <button>-</button>
                        </div>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </section>
            </div>
            <div className="product-design-lower">

            </div>
        </div>
    </div>
  )
}

export default ProductDesignPage