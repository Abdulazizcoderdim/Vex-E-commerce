import { Link } from 'react-router-dom';
import './CartPage.css'


const CartPage = () => {
    return (
        <div className='cartpage__container'>
            <div className="cartpage__modal">
                <ul className='cartpage__line'>
                    <li>Item Name</li>
                    <li>Item Price</li>
                    <li>Action</li>
                </ul>
                <ul>
                    <li><img width={"100px"} height={"140px"} src="../../../public/shop/cart/cart-1.jpg" alt="" /></li>
                    <li>Sunglass</li>
                    <li className='cartpage__li1'>$200.00</li>
                    <li className='cartpage__li1 cartpage__remove'>Remove</li>
                </ul>
                <ul>
                    <li><img width={"100px"} height={"140px"} src="../../../public/shop/cart/cart-2.jpg" alt="" /></li>
                    <li>Airspace</li>
                    <li className='cartpage__li1'>$200.00</li>
                    <li className='cartpage__li1 cartpage__remove'>Remove</li>
                </ul>
                <ul className='cartPage__end'>
                    <li><img width={"100px"} height={"140px"} src="../../../public/shop/cart/cart-3.jpg" alt="" /></li>
                    <li>Bingo</li>
                    <li className='cartpage__li1'>$200.00</li>
                    <li className='cartpage__li1 cartpage__remove'>Remove</li>
                </ul>
                 
                <button><Link to="/checkout" style={{color: "#fff", textDecoration: "none"}} >CHECKOUT</Link></button>
                 
            </div>
        </div>
    );
};

export default CartPage;