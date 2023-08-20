// import LoginForm from '../../Forms/LoginForm/LoginForm'
// import OrderSection from '../../Sections/OrdersSection/OrderSection'
import FeedbackForm from '../../Forms/FeedbackForm/FeedbackForm'
// import Setting from '../../Sections/SettingSection/Setting'
import SideBar from '../../UI/SideBar/SideBar'
// import AccountCard from '../../components/AccountCard/AccountCard'
import Navbar from '../../components/LandingPageComponents/Navbar'
import './AccountPage.css'

const AccountPage = () => {
  return (
    <>
    <Navbar/>
    <hr/>
    {/* <div className='account-page'>
        <LoginForm/>
    </div> */}
    <div className='account-page'>
    <SideBar/>
    {/* <Setting/> */}
    {/* <OrderSection/> */}
    {/* <AccountCard/> */}
    <FeedbackForm/>
    </div>
    </>
  )
}

export default AccountPage