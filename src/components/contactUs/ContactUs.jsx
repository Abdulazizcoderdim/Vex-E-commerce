import { Link } from 'react-router-dom';
import './ContactUs.css';

const ContactUs1 = () => {
  return (
    <div className="shop">
      <div className="shop__container">
        <h1>Checkout</h1>
        <div className="shop__link">
          <Link to="/">Home</Link>/ <Link to="/contactus">contact</Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs1;
