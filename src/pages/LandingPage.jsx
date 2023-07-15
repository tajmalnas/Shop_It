import Input from "../UI/Input"
import BestDeals from "../components/LandingPageComponents/BestDeals/BestDeals"
import CashBack5 from "../components/LandingPageComponents/CashBack5/CashBack5"
import CashBackBanner from "../components/LandingPageComponents/CashBackBanner/CashBackBanner"
import CategoryDisplay from "../components/LandingPageComponents/CategoryShower/CategoryDisplay"
import ChooseBrand from "../components/LandingPageComponents/ChooseBrand/ChooseBrand"
import HeroBanner from "../components/LandingPageComponents/Hero/HeroBanner"
import Navbar from "../components/LandingPageComponents/Navbar"
import TodaysDeals from "../components/LandingPageComponents/TodaysDeals/TodaysDeals"
import "./LandingPage.css"
import SimpleReactFooter from "simple-react-footer";
import { useState, useEffect } from 'react';
const LandingPage = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const description = "This web app is made to provide flawless shopping experience to the users.It is a one stop solution for all your shopping needs.It provides you with the best deals and offers from all the major e-commerce websites like Amazon,Flipkart,Myntra etc.";
  const title = "Shop-It";
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Careers",
          link: "/careers"
        },
        {
          name: "Contact",
          link: "/contact"
        },
        {
          name: "Admin",
          link: "/admin"
        }
      ]
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy"
        },
        {
          name: "Terms",
          link: "/terms"
        }
      ]
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations"
        },
        {
          name: "Culture",
          link: "/culture"
        }
      ]
    }
  ];
  return (
    <>
      <Navbar />
      <HeroBanner />
      <div className="searchBar">
        <Input name={"main"} />
      </div>
      <CategoryDisplay />
      <BestDeals />
      <ChooseBrand />
      <CashBackBanner />
      <TodaysDeals />
      <CashBack5 />
      { windowWidth>490 && <SimpleReactFooter
        id="footer"
        description={description}
        title={title}
        columns={columns}
        linkedin="fluffy_cat_on_linkedin"
        facebook="fluffy_cat_on_fb"
        twitter="fluffy_cat_on_twitter"
        instagram="fluffy_cat_live"
        youtube="UCFt6TSF464J8K82xeA?"
        pinterest="fluffy_cats_collections"
        copyright="Taj Malnas"
        iconColor="black"
        backgroundColor="skyblue"
        fontColor="black"
        copyrightColor="grey"
      >
       
      </SimpleReactFooter>
      }
    </>
  )
}

export default LandingPage