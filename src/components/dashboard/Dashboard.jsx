import { Link } from 'react-router-dom';
import './Dashboard.css';


const Dashboard1 = () => {
    return (
        <div className='shop'>
            <div className='shop__container'>
                <h1>Dashboard</h1>
                <div className='shop__link'>
                   <Link to="/">Home</Link>
                   / <Link to="/dashboard">contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard1;