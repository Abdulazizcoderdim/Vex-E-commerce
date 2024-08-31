import { Link } from 'react-router-dom';
import './Blog.css';


const Blog = () => {
    return (
        <div className='shop'>
            <div className='shop__container'>
                <h1>Shop</h1>
                <div className='shop__link'>
                   <Link to="/">Home</Link>
                   / <Link to="/blogleftpage">blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;