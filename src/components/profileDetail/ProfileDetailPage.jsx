import { Link } from 'react-router-dom';
import './ProfileDetailPage.css'


const ProfileDetailPage = () => {
    return (
        <div className='profileDetail'>
            <div className='orderPage__btn'>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/orders" >Orders</Link>
                  <Link to="/address">Address</Link>
                  <Link to="/profileDetail" className='orderPage__active'>Profile Details</Link>
            </div> 

            <div className="orderPage__modal">
                <div className='orderPage__avatar'>
                    <img src="../../../public/avater.jpg" alt="" />
                    <h6>CHANGE IMAGE</h6> 
                </div> 
                <div className='orderPage__container'>
                    
                       
                <ul>
                    <li className='orderPage__li'>Full Name:</li>
                    <li className='orderPage__li2'>Johanna Doe</li>
                </ul>
                <ul>
                    <li className='orderPage__li'>Country:</li>
                    <li className='orderPage__li2'>USA</li>
                </ul>
                <ul>
                    <li className='orderPage__li'>Email:</li>
                    <li className='orderPage__li2'>mail@gmail.com</li>
                </ul>
                <ul>
                    <li className='orderPage__li'>Phone:</li>
                    <li className='orderPage__li2'>+881234567</li>
                </ul>
                <ul>
                    <li className='orderPage__li'>Date of Birth:</li>
                    <li className='orderPage__li2'>Dec, 22, 1991</li>
                </ul>
                </div>
            </div> 
        </div>
    );
};

export default ProfileDetailPage;