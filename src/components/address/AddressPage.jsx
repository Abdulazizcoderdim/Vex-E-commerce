import './AddressPage.css'
import '../order/OrderPage.css'
import { Link } from 'react-router-dom';

const AddressPage = () => {
    return (
        <div className='address'>
             <div className='orderPage__btn'>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/orders">Orders</Link>
                  <Link to="/address" className='orderPage__active'>Address</Link>
                  <Link to="/profileDetail">Profile Details</Link>
            </div> 

            <div className='address__modal'>
                  <div className='address__first'>
                     <h5>Company</h5>
                     <span>Nokia</span>
                     <span>Samsung</span>
                     <span>Matorolla</span>
                  </div>
                  <div className='address__first'>
                     <h5>Name</h5>
                     <span>Adam Smith</span>
                     <span>Adam Smith</span>
                     <span>Adma Smith</span>
                  </div>
                  <div className='address__first'>
                     <h5>Address</h5>
                     <span>9/4 C Babor Road, Mohammad Pur, Dhaka</span>
                     <span>9/4 C Babor Road, Mohammad Pur, Dhaka</span>
                     <span>9/4 C Babor Road, Mohammad Pur, Dhaka</span>
                  </div>
                  <div className='address__first'>
                     <h5>Country</h5>
                     <span>Bangladesh</span>
                     <span>Bangladesh</span>
                     <span>Bangladesh</span>
                  </div>
                  <div className='address__first'>
                     <h5>Phone</h5>
                     <span>+884 1212 4358 1293</span>
                     <span>+884 1212 4358 1293</span>
                     <span>+884 1212 4358 1293</span>
                  </div>
                  <div className='address__first'>
                      <div className='address__btns'>
                        <a href="#"></a>
                        <a href="#"></a>
                        <a href="#"></a>
                      </div>
                      <div className='address__btns'>
                        <a href="#">✖</a>
                        <a href="#">✖</a>
                        <a href="#">✖</a>
                      </div>
                  </div>
            </div>
        </div>
    );
};

export default AddressPage;