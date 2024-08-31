import '../App';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='login'>
            <div className="login__container">
                <h3>AVIATO</h3>
                <h3>WELCOME BACK</h3>

                <div className='login__inputs'>
                    <input type="text" placeholder='Email'/>  
                    <input type="text" placeholder='Password'/>  
                </div>

                <button>LOGIN</button>

                <span>New in this site? <Link to="/sigin">Create New Account</Link></span>
            </div>
        </div>
    );
};

export default Login;