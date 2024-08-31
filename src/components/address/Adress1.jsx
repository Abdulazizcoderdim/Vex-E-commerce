import { Link } from 'react-router-dom';
import './Address.css';

const Address1 = () => {
  return (
    <div className="shop">
      <div className="shop__container">
        <h1>Dashboard</h1>
        <div className="shop__link">
          <Link to="/">Home</Link>/ <Link to="/address">my account</Link>
        </div>
      </div>
    </div>
  );
};

export default Address1;
