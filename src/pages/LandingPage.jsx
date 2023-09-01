import Input from "../UI/Input"
import BestDeals from "../components/LandingPageComponents/BestDeals/BestDeals"
import CashBack5 from "../components/LandingPageComponents/CashBack5/CashBack5"
import CashBackBanner from "../components/LandingPageComponents/CashBackBanner/CashBackBanner"
import CategoryDisplay from "../components/LandingPageComponents/CategoryShower/CategoryDisplay"
import ChooseBrand from "../components/LandingPageComponents/ChooseBrand/ChooseBrand"
import HeroBanner from "../components/LandingPageComponents/Hero/HeroBanner"
import TodaysDeals from "../components/LandingPageComponents/TodaysDeals/TodaysDeals"
import "./LandingPage.css"
import SimpleReactFooter from "simple-react-footer";
import { useState, useEffect } from 'react';
import SearchResults from "../UI/SearchResultsBox/SearchResults"
import { AnimatePresence, motion } from "framer-motion";
const LandingPage = () => {

  const [searchValue, setSearchValue] = useState('');

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
          link: "/"
        },
        {
          name: "Careers",
          link: "/"
        },
        {
          name: "Contact",
          link: "/"
        },
        {
          name: "Admin",
          link: "/"
        }
      ]
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/"
        },
        {
          name: "Terms",
          link: "/"
        }
      ]
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/"
        },
        {
          name: "Culture",
          link: "/"
        }
      ]
    }
  ];
  return (
    <>
    <AnimatePresence>
    <motion.div initial={{opacity:0 }} animate={{opacity:1}} transition={{duration:1}} exit={{opacity:0}}>
      <HeroBanner />
      <div className="searchBar">
        <Input name={"main"} setSearchValue={setSearchValue} />
        <SearchResults name = {""} inputValue={searchValue} />
      </div>
      <CategoryDisplay id="category-display-section" />
      <BestDeals id="deals-section" />
      <ChooseBrand />
      <CashBackBanner />
      <TodaysDeals />
      <CashBack5 />
      { windowWidth>490 && <SimpleReactFooter
        id="footer"
        description={description}
        title={title}
        columns={columns}
        linkedin="taj-malnas-37091122a/"
        facebook="search/top/?q=Tajuddin%20Malnas"
        twitter="taj-malnas-37091122a/"
        instagram="taj_malnas"
        youtube="null"
        pinterest="tajmalnas"
        copyright="Taj Malnas"
        iconColor="black"
        backgroundColor="skyblue"
        fontColor="black"
        copyrightColor="grey"
      >
      </SimpleReactFooter>
      }
      </motion.div>
      </AnimatePresence>
    </>
  )
}

export default LandingPage