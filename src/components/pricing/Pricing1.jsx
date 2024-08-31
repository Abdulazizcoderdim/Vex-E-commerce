import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing1 = () => {
  return (
    <div className="shop">
      <div className="shop__container">
        <h1>Pricing Table</h1>
        <div className="shop__link">
          <Link to="/">Home</Link>/ <Link to="/pricing">pricing</Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing1;
