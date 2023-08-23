/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './SideBar.css';
import {motion} from 'framer-motion';



function SideBar({ onDataUpdate }) {

  const [childInput, setChildInput] = useState('account');

  const sendDataToParent = (s) => {
    setChildInput(s);
    onDataUpdate(s); 
  };

  useEffect(() => {}, [childInput]);

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
          <div className="sidebar-item"  onClick={()=>sendDataToParent("account")} >
            <div className="sidebar-item-icon">👤</div>
            <div className="sidebar-item-text">Account</div>
          </div>
          <div className="sidebar-item" onClick={()=>sendDataToParent("orders")}>
            <div className="sidebar-item-icon">📦</div>
            <div className="sidebar-item-text" >Orders</div>
          </div>
          <div className="sidebar-item" onClick={()=>sendDataToParent("settings")}>
            <div className="sidebar-item-icon">⚙️</div>
            <div className="sidebar-item-text" >Settings</div>
          </div>
          <div className="sidebar-item" onClick={()=>sendDataToParent("feedback")}>
            <div className="sidebar-item-icon">ℹ️</div>
            <div className="sidebar-item-text" >Feedback</div>
          </div>
        </motion.div>
      );
}

export default SideBar;
