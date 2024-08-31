import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App';

const Signin = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h3>AVIATO</h3>
        <h3>WELCOME BACK</h3>

        <div className="login__inputs">
          <input type="text" placeholder="First Email" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </div>

        <button>SIGNIN</button>

        <span>
          Already have a account ?<Link to="/login">Login</Link>
        </span>
        <p>Forgot Your Password?</p>
      </div>
    </div>
  );
};

export default Signin;
