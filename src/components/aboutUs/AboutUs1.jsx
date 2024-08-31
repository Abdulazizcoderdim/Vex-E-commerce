import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs1 = () => {
  return (
    <div className="shop">
      <div className="shop__container">
        <h1>About Us</h1>
        <div className="shop__link">
          <Link to="/">Home</Link>/ <Link to="/aboutUs">about us</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
