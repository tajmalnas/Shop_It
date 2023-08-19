import LoginForm from '../../Forms/LoginForm/LoginForm'
import Navbar from '../../components/LandingPageComponents/Navbar'
import './AccountPage.css'

const AccountPage = () => {
  return (
    <>
    <Navbar/>
    <hr/>
    <div className='account-page'>
        <LoginForm/>
    </div>
    </>
  )
}

export default AccountPage