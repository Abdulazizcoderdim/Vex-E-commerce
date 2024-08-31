import { Link } from 'react-router-dom';
import './Shop.css';


const Shop = () => {
    return (
        <div className='shop'>
            <div className='shop__container'>
                <h1>Shop</h1>
                <div className='shop__link'>
                   <Link to="/">Home</Link>
                   / <Link to="/shop">Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default Shop;