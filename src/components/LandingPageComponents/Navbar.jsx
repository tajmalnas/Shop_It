import Input from "../../UI/Input";
import "./Navbar.css";
import 'primeicons/primeicons.css';
const Navbar = () => {
  return (
    <div className="wrapper" >
        <div className="navbar">
            <div className="shop-it">
                <img className="shop-it-img" src="/assets/pngwing.com.png" ></img>
                <span className="shop-it-text">
                    shop-It
                </span>
                
            </div>
            <div className="tabs">
                <div className="categories">
                    Catagories 
                </div>
                <div className="different-section" >
                    <div style={{paddingRight:"1rem"}}>Deals</div>
                    <div style={{paddingRight:"1rem"}}>Whats New</div>
                    <div style={{paddingRight:"1rem"}}>Delivery</div>
                </div>
            </div>
            <div className="search" >
                <Input className="search-bar" name={"nav"}/>
            </div>
            <div className="acc-and-cart">
                <div className="account" style={{paddingRight:".7rem"}}>
                    <i className="pi pi-user" style={{paddingRight:".1rem"}}></i>
                    Account
                </div>
                <div className="cart" >
                <i className="pi pi-shopping-cart" style={{paddingRight:".1rem"}}></i>
                    Cart
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar