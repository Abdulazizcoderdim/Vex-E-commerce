import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosCall, IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Logo from '/logo.png';
import './Sidebar.css';

const Sidebar = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="sidebar">
      <header>
        <p className="sidebar__number">
          <span>
            <IoIosCall />
          </span>{' '}
          <p>0120-12123-121123</p>
        </p>
        <Link to="/" className="sidebar__logo">
          <Link to="/">
            <img src={Logo} alt="Logo photo" />
          </Link>
        </Link>

        <div className="sidebar__nav">
          <div id="cart" className="sidebar__cart">
            <p>
              <FaShoppingCart />
            </p>{' '}
            <span className="span1" onClick={() => setOpenCart(prev => !prev)}>
              Cart
            </span>
            {openCart && (
              <div className="cart__modal">
                <div className="cart__top">
                  <img
                    width={'60px'}
                    height={'100px'}
                    src="/shop/cart/cart-1.jpg"
                    alt=""
                  />
                  <div className="cart__container">
                    <div className="cart__text1">
                      <h5>lorem ipsum</h5>
                      <span>1*1200</span>
                      <p>$200</p>
                    </div>
                    <span
                      className="cart__btn"
                      onClick={() => setOpenCart(false)}
                    >
                      ✖
                    </span>
                  </div>
                </div>
                <div className="cart__top line">
                  <img
                    width={'60px'}
                    height={'100px'}
                    src="/shop/cart/cart-2.jpg"
                    alt=""
                  />
                  <div className="cart__container">
                    <div>
                      <h5>lorem ipsum</h5>
                      <span>1*1200</span>
                      <p>$200</p>
                    </div>
                    <span
                      className="cart__btn"
                      onClick={() => setOpenCart(false)}
                    >
                      ✖
                    </span>
                  </div>
                </div>

                <div className="cartmodal__down">
                  <span>Total</span>
                  <p>$1920.00</p>
                </div>

                <div className="cartmodal__down-btns">
                  <Link to="/cart">
                    <button>VIEW CART</button>
                  </Link>
                  <Link to="/checkout">
                    <button>CHECKOUT</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="sidebar__search">
            <span>
              <IoIosSearch />
            </span>
            <input type="text" placeholder="Search" />
          </div>
          <div className="sidebar__languages">
            <span>en</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Sidebar;
