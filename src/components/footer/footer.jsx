import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__icon'>
             <a href="www.facebook.com" style={{color: "black"}}><FaFacebookF /></a> 
             <a href="https://www.facebook.com" style={{color: "black"}}><FaInstagramSquare /></a> 
             <a href="" style={{color: "black"}}><FaTwitter /></a>
             <a href="" style={{color: "black"}}><FaTelegram /></a>
            </div>

            <div className='footer__page'>
                  <a href="#">CONTACT</a>
                  <a href="#">SHOP</a>
                  <a href="#">PRICING</a>
                  <a href="#">PRIVACY POLICY</a>
            </div>

            <div className='footer__text'>
                 <p>Copyright @2023, Designed & Developed by <span>Themefisher</span></p>
            </div>
        </div>
    );
};

export default Footer;