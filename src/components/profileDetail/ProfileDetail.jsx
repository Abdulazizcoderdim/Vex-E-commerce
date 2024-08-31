import { Link } from 'react-router-dom';
import './ProfileDetail.css';

const ProfileDetail1 = () => {
  return (
    <div className="shop">
      <div className="shop__container">
        <h1>Dashboard</h1>
        <div className="shop__link">
          <Link to="/">Home</Link>/ <Link to="/profileDetail">my account</Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail1;
