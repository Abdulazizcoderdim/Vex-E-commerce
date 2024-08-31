import { Link } from 'react-router-dom';
import './Cart.css';


const Cart1 = () => {
    return (
        <div className='shop'>
            <div className='shop__container'>
                <h1>Cart</h1>
                <div className='shop__link'>
                   <Link to="/">Home</Link>
                   / <Link to="/cart">cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart1;