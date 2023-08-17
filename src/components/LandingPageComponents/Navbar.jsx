import Input from "../../UI/Input";
import { Link,useNavigate } from "react-router-dom";
import "./Navbar.css";
import 'primeicons/primeicons.css';



const Navbar = () => {
    const navigate = useNavigate();
    const dealsSection = () => {
        navigate("/");
        window.scrollTo({
            top: window.innerHeight*3,
            behavior: 'smooth'
          });
    }
    const forYouSection = () => {
        navigate("/");
        window.scrollTo({
            top: window.innerHeight*1.3,
            behavior: 'smooth'
          });
    }
  return (
    <div className="wrapper" >
        <div className="navbar">
            <div className="shop-it">
                <img className="shop-it-img" src="/assets/pngwing.com.png" ></img>
                <Link to="/"><span className="shop-it-text">
                    shop-It
                </span>
                </Link>
                
            </div>
            <div className="tabs">
                <Link to = "/product-listing"><div className="categories">
                    Catagories 
                </div>
                </Link>
                <div className="different-section" >
                    <div style={{paddingRight:"1rem"}} onClick={dealsSection}>Deals</div>
                    <div style={{paddingRight:"1rem"}} onClick={forYouSection}>Whats New</div>
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
                <Link to="/cart"><div className="cart" >
               <i className="pi pi-shopping-cart" style={{paddingRight:".1rem"}}></i>
                    Cart
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar