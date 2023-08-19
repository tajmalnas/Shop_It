import './SideBar.css';
import {motion} from 'framer-motion';
function SideBar() {
    return (
        <motion.div
          initial={{ x: -1000 }} 
          animate={{
            x: 0,
            transitionEnd: {
              x: 0,
            },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            loop: Infinity, 
            repeatDelay: 2, 
          }}
          className="sidebar"
          style={{ willChange: "transform" }} // Hardware acceleration
        >
          <div className="sidebar-item">
            <div className="sidebar-item-icon">👤</div>
            <div className="sidebar-item-text">Account</div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-item-icon">📦</div>
            <div className="sidebar-item-text">Orders</div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-item-icon">⚙️</div>
            <div className="sidebar-item-text">Settings</div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-item-icon">ℹ️</div>
            <div className="sidebar-item-text">About</div>
          </div>
        </motion.div>
      );
}

export default SideBar;
