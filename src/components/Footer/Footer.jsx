import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h2>About Us</h2>
              <p>
              This web app is made to provide flawless shopping experience to the users.It is a one stop solution for all your shopping needs.It provides you with the best deals and offers from all the major e-commerce websites like Amazon,Flipkart,Myntra etc.
              </p>
            </div>

            <div className="footer-section">
              <h2>Links</h2>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/taj-malnas-37091122a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/search/top/?q=Tajuddin%20Malnas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/taj-malnas-37091122a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/taj_malnas/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h2>Contact Us</h2>
              <p>Email: tajjuddin.malnas21@pccoepune.org</p>
              <p>Phone: 7796327571</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright @Taj_Malnas
          </p>
        </div>
      </footer>
  )
}

export default Footer