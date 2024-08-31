import { Link } from 'react-router-dom';
import './BlogRightPage.css';

const BlogRightPage1 = () => {
  return (
    <div className="blogpage__container">
      <div className="blogpage__pages">
        <div className="blogpage__right">
          <img
            width={'700px'}
            height={'320px'}
            src="/blog/blog-post-1.jpg"
            alt=""
          />
          <div className="blogright__text">
            <h3>How To Wear Brigth Shoes</h3>
            <div className="blogrigth__icons">
              <span>20, MART 2017</span>
              <span>POSTED BY ADMIN</span>
              <span>LIFSTYLE TRAVEL FASHION</span>
              <span>4 COMMENTS</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              nam amet ipsam culpa, voluptatem obcaecati minima veniam tenetur
              impedit dolorem placeat. Cumque veritatis laborum esse vitae neque
              excepturi, minus dolorem.
            </p>
            <button>
              <Link
                to="/shop"
                style={{ color: 'rgb(180, 180, 180)', textDecoration: 'none' }}
              >
                CONTINUI READING
              </Link>
            </button>
          </div>
          <img
            width={'700px'}
            height={'320px'}
            src="/blog/blog-post-2.jpg"
            alt=""
          />
          <div className="blogright__text">
            <h3>How To Wear Brigth Shoes</h3>
            <div className="blogrigth__icons">
              <span>20, MART 2017</span>
              <span>POSTED BY ADMIN</span>
              <span>LIFSTYLE TRAVEL FASHION</span>
              <span>4 COMMENTS</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              nam amet ipsam culpa, voluptatem obcaecati minima veniam tenetur
              impedit dolorem placeat. Cumque veritatis laborum esse vitae neque
              excepturi, minus dolorem.
            </p>
            <button>
              <Link
                to="/shop"
                style={{ color: 'rgb(180, 180, 180)', textDecoration: 'none' }}
              >
                CONTINUI READING
              </Link>
            </button>
          </div>
          <img
            width={'700px'}
            height={'320px'}
            src="/blog/blog-post-3.jpg"
            alt=""
          />
          <div className="blogright__text">
            <h3>How To Wear Brigth Shoes</h3>
            <div className="blogrigth__icons">
              <span>20, MART 2017</span>
              <span>POSTED BY ADMIN</span>
              <span>LIFSTYLE TRAVEL FASHION</span>
              <span>4 COMMENTS</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              nam amet ipsam culpa, voluptatem obcaecati minima veniam tenetur
              impedit dolorem placeat. Cumque veritatis laborum esse vitae neque
              excepturi, minus dolorem.
            </p>
            <button>
              <Link
                to="/shop"
                style={{ color: 'rgb(180, 180, 180)', textDecoration: 'none' }}
              >
                CONTINUI READING
              </Link>
            </button>
          </div>
          <div className="blogright__text">
            <h3>How To Wear Brigth Shoes</h3>
            <div className="blogrigth__icons">
              <span>20, MART 2017</span>
              <span>POSTED BY ADMIN</span>
              <span>LIFSTYLE TRAVEL FASHION</span>
              <span>4 COMMENTS</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              nam amet ipsam culpa, voluptatem obcaecati minima veniam tenetur
              impedit dolorem placeat. Cumque veritatis laborum esse vitae neque
              excepturi, minus dolorem.
            </p>
            <button>
              <Link
                to="/shop"
                style={{ color: 'rgb(180, 180, 180)', textDecoration: 'none' }}
              >
                CONTINUI READING
              </Link>
            </button>
          </div>
        </div>

        <div className="blogpage__left">
          <div className="blogpage__input">
            <h6>GET NOTIFIED UPDATES</h6>
            <input type="text" placeholder="Your Email Address" />
            <input
              className="blogpage__btn"
              type="submit"
              placeholder="SUBMIT"
            />
          </div>

          <div className="blogpage__text">
            <h5>LATEST POSTS</h5>

            <div className="blogpage__modal">
              <img
                height={'70px'}
                width={'90px'}
                src="/blog/post-thumb.jpg"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet . Nemo, aliquid.</p>
            </div>
            <div className="blogpage__modal">
              <img
                height={'70px'}
                width={'90px'}
                src="/blog/post-thumb-2.jpg"
                alt=""
              />
              <p>Lorem ipsum dolor sit elit. Nemo, aliquid.</p>
            </div>
            <div className="blogpage__modal">
              <img
                height={'70px'}
                width={'90px'}
                src="/blog/post-thumb-3.jpg"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet . Nemo, aliquid.</p>
            </div>
            <div className="blogpage__modal">
              <img
                height={'70px'}
                width={'90px'}
                src="/blog/post-thumb-4.jpg"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet . Nemo, aliquid.</p>
            </div>
            <div className="blogpage__modal">
              <img
                height={'70px'}
                width={'90px'}
                src="/blog/post-thumb-5.jpg"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet. Nemo, aliquid.</p>
            </div>
            <div className="blogpage__modal">
              <img
                height={'70px'}
                width={'90px'}
                src="/blog/post-thumb-6.jpg"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet. Nemo, aliquid.</p>
            </div>
            <div className="blogpage__modal">
              <img
                height={'70px'}
                width={'90px'}
                src="/blog/post-thumb-7.jpg"
                alt=""
              />
              <p>Lorem ipsum dolor sit amet. Nemo, aliquid.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRightPage1;
