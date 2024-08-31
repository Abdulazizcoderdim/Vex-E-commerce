import { Link } from 'react-router-dom';
import './PricingPage.css';


const PricingPage = () => {
    return (
        <div className='pricing'>
            <div className="pricing__container">
                <div className="pricing__modal">
                      <div className='pricing__top'>
                           <h5>BASIC</h5>
                           <span>$99</span> 
                           <p>Perfect for single freelancers who <br />work by themselves</p>
                      </div>
                      <div className="pricing__bottom">
                        <span>1GB Disk Space</span>
                        <span>10 Email Account</span>
                        <span>Script Installer</span>
                        <span>1GB Storage</span>
                        <span>10 Ran Down</span>
                        <span>24/7 Tech Support</span>
                      </div>
                      <button><Link style={{color: 'white', textDecoration: "none"}} to="/sigin">SIGNUP</Link></button>

                </div>


                <div className="pricing__modal">
                      <div className='pricing__top'>
                           <h5>BASIC</h5>
                           <span>$99</span> 
                           <p>Perfect for single freelancers who <br />work by themselves</p>
                      </div>
                      <div className="pricing__bottom">
                        <span>1GB Disk Space</span>
                        <span>10 Email Account</span>
                        <span>Script Installer</span>
                        <span>1GB Storage</span>
                        <span>10 Ran Down</span>
                        <span>24/7 Tech Support</span>
                      </div>
                      <button><Link style={{color: 'white', textDecoration: "none"}} to="/sigin">SIGNUP</Link></button>

                      
                </div>

                
                <div className="pricing__modal">
                      <div className='pricing__top'>
                           <h5>BASIC</h5>
                           <span>$99</span> 
                           <p>Perfect for single freelancers who <br />work by themselves</p>
                      </div>
                      <div className="pricing__bottom">
                        <span>1GB Disk Space</span>
                        <span>10 Email Account</span>
                        <span>Script Installer</span>
                        <span>1GB Storage</span>
                        <span>10 Ran Down</span>
                        <span>24/7 Tech Support</span>
                      </div>
                      <button><Link style={{color: 'white', textDecoration: "none"}} to="/sigin">SIGNUP</Link></button>

                </div>
               
            </div>
        </div>
    );
};

export default PricingPage;