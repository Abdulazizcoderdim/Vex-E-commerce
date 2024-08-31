import { Link } from 'react-router-dom';
import './OrderPage.css';

const OrderPage = () => {
  return (
    <div className="orderPage">
      <div className="orderPage__btn">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/orders" className="orderPage__active">
          Orders
        </Link>
        <Link to="/address">Address</Link>
        <Link to="/profileDetail">Profile Details</Link>
      </div>

      <div className="orderPage__container">
        <div className="orderPage__modal">
          <ul className="orderPage__title">
            <li>Order ID</li>
            <li>Date</li>
            <li>Items</li>
            <li>Total Price</li>
            <li>Status</li>
          </ul>

          <ul className="orderPage__text">
            <li>#451231</li>
            <li>Mar 25,2006</li>
            <li>2</li>
            <li>$99.00</li>
            <li className="premeccing">Premeccing</li>
            <li>
              <button>Viev</button>
            </li>
          </ul>

          <ul className="orderPage__text">
            <li>#451231</li>
            <li>Mar 25,2006</li>
            <li>2</li>
            <li>$99.00</li>
            <li className="premeccing2">Premeccing</li>
            <li>
              <button>Viev</button>
            </li>
          </ul>

          <ul className="orderPage__text">
            <li>#451231</li>
            <li>Mar 25,2006</li>
            <li>2</li>
            <li>$99.00</li>
            <li className="premeccing3">Premeccing</li>
            <li>
              <button>Viev</button>
            </li>
          </ul>

          <ul className="orderPage__text">
            <li>#451231</li>
            <li>Mar 25,2006</li>
            <li>2</li>
            <li>$99.00</li>
            <li className="premeccing4">Premeccing</li>
            <li>
              <button>Viev</button>
            </li>
          </ul>

          <ul className="end">
            <li>#451231</li>
            <li>Mar 25,2006</li>
            <li>2</li>
            <li>$99.00</li>
            <li className="premeccing5">Premeccing</li>
            <li>
              <button>Viev</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
