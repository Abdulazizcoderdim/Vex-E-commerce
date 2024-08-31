import { Link } from 'react-router-dom';
import './Order.css';


const Order = () => {
    return (
        <div className='shop'>
            <div className='shop__container'>
                <h1>Shop</h1>
                <div className='shop__link'>
                   <Link to="/">Home</Link>
                   / <Link to="/orders">my account</Link>
                </div>
            </div>
        </div>
    );
};

export default Order;