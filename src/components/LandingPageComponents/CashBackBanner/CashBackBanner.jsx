import './CashBackBanner.css'
import { motion } from "framer-motion"
const CashBackBanner = () => {
  return (
    <div className='container1'>
        <motion.div className='cashback-banner'animate={{rotate: [0, 90,180, 360],borderRadius:['10%','20%','30%','40%','50%','40%','30%','20%','10%']}} whileHover={{rotate: [0, 90,180, 360],borderRadius:['10%','20%','30%','40%','50%']}}>
            <div className='cashback-banner-head'>
                Get 10% Cashback On $200
            </div>
            <div className='cashback-banner-description'>
                Shopping is bit a relaxing hobby for me.Which is sometimes troubles my bank balance
            </div>
            <button className='cashback-banner-btn'>
                Learn More
            </button>
        </motion.div>
        <motion.div className='cashback-banner' animate={{rotate: [0, 90,180, 360],borderRadius:['10%','20%','30%','40%','50%','40%','30%','20%','10%']}} whileHover={{rotate: [0, 90,180, 360],borderRadius:['10%','20%','30%','40%','50%']}}>
            <div className='cashback-banner-head'>
                Get 10% Cashback On $200
            </div>
            <div className='cashback-banner-description'>
                Shopping is bit a relaxing hobby for me.Which is sometimes troubles my bank balance
            </div>
            <button className='cashback-banner-btn'>
                Learn More
            </button>
        </motion.div>
    </div>
  )
}

export default CashBackBanner