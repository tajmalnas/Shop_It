import Input from "../UI/Input"
import BestDeals from "../components/LandingPageComponents/BestDeals/BestDeals"
import CategoryDisplay from "../components/LandingPageComponents/CategoryShower/CategoryDisplay"
import ChooseBrand from "../components/LandingPageComponents/ChooseBrand/ChooseBrand"
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
      <BestDeals/>
      <ChooseBrand/>
    </>
  )
}

export default LandingPage