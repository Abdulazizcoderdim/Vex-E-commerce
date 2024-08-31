import { Link } from 'react-router-dom';
import './CheckOut.css';


const CheckOut = () => {
    return (
        <div className='shop'>
            <div className='shop__container'>
                <h1>Checkout</h1>
                <div className='shop__link'>
                   <Link to="/">Home</Link>
                   / <Link to="/checkout">checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;