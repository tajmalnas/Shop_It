import Input from "../UI/Input"
import CategoryDisplay from "../components/LandingPageComponents/CategoryShower/CategoryDisplay"
import HeroBanner from "../components/LandingPageComponents/Hero/HeroBanner"
import Navbar from "../components/LandingPageComponents/Navbar"
import "./LandingPage.css"
const LandingPage = () => {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <div className="searchBar">
        <Input name={"main"}/>
      </div>
      <CategoryDisplay/>
    </>
  )
}

export default LandingPage