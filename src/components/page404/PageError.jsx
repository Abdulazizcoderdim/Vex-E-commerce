import { Link } from 'react-router-dom';
import './PageError.css';

const PageError = () => {
  return (
    <div className="error">
      <h1>AVIATO</h1>
      <p>404</p>
      <h3>PAGE NOT FOUND</h3>
      <button>
        <Link to="/">← GO HOME</Link>
      </button>
      <h6>2018 Themefisher All rights reserved</h6>
    </div>
  );
};

export default PageError;
