import { Link } from 'react-router-dom';
import '../order/OrderPage.css';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <div className="orderPage__btn">
        <Link to="/dashboard" className="orderPage__active">
          Dashboard
        </Link>
        <Link to="/orders">Orders</Link>
        <Link to="/address">Address</Link>
        <Link to="/profileDetail">Profile Details</Link>
      </div>

      <div className="dashboard__modal">
        <div className="dashboard__container">
          <div className="dashboard__author">
            <img
              width={'130px'}
              height={'130px'}
              src="/avater.jpg"
              alt=""
            />
            <div className="dashboard__text">
              <h5>Welcome Adam Smith</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                eum doloremque quisquam blanditiis recusandae maiores cupiditate
                iusto error perferendis expedita.
              </p>
            </div>
          </div>
          <div className="dashboard__text">
            <h5>Total Orders</h5>
            <div className="orderPage__modal">
              <ul className="orderPage__title">
                <li>Order ID</li>
                <li>Date</li>
                <li>Items</li>
                <li>Total Price</li>
              </ul>

              <ul className="orderPage__text">
                <li>#451231</li>
                <li>Mar 25,2006</li>
                <li>2</li>
                <li>$99.00</li>
              </ul>

              <ul className="orderPage__text">
                <li>#451231</li>
                <li>Mar 25,2006</li>
                <li>2</li>
                <li>$99.00</li>
              </ul>

              <ul className="orderPage__text">
                <li>#451231</li>
                <li>Mar 25,2006</li>
                <li>2</li>
                <li>$99.00</li>
              </ul>

              <ul className="orderPage__text">
                <li>#451231</li>
                <li>Mar 25,2006</li>
                <li>2</li>
                <li>$99.00</li>
              </ul>

              <ul className="end">
                <li>#451231</li>
                <li>Mar 25,2006</li>
                <li>2</li>
                <li>$99.00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
