import { Link } from 'react-router-dom';
import './Faq.css';

const Faq1 = () => {
  return (
    <div className="shop">
      <div className="shop__container">
        <h1>Frenquently Asked Question</h1>
        <div className="shop__link">
          <Link to="/">Home</Link>/ <Link to="/faq">f.a.q</Link>
        </div>
      </div>
    </div>
  );
};

export default Faq1;
