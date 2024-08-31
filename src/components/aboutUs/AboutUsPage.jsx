import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUsPage.css';

const AboutUsPage = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs__first">
        <img width={'600px'} height={'380px'} src="/about.jpg" alt="" />
        <div className="aboutUs__text">
          <h3>About Our Shop</h3>
          <p>
            Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Doloremque, magnam! consectetur adipisicing elit.
            Impedit, voluptatem?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quod
            necessitatibus pariatur molestiae neque quas aperiam natus, vitae
            eligendi consequuntur tempora impedit, officiis maxime quos esse
            repellat nobis. Perspiciatis, soluta!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque
            ea explicabo magnam dicta id odit suscipit repudiandae modi,
            repellat blanditiis ad, nisi, molestiae hic? Enim corrupti ut
            architecto qui eum amet illo esse. Error?
          </p>
          <button>DOWNLOAD COMPANY PROFILE</button>
        </div>
      </div>
      <div className="aboutUs__imgs">
        <img src="/about/awards-logo.png" alt="" />
        <img src="/about/awards-logo.png" alt="" />
        <img src="/about/awards-logo.png" alt="" />
        <img src="/about/awards-logo.png" alt="" />
      </div>
      <div className="aboutUs__team">
        <h5>TEAM MEMBERS</h5>
        <div className="team__photos">
          <div className="teamphoto">
            <img
              width={'170px'}
              height={'170px'}
              src="/team/team-1.jpg"
              alt=""
            />
            <span>Jonathan Andrew</span>
            <p>Founder</p>
          </div>
          <div className="teamphoto">
            <img
              width={'170px'}
              height={'170px'}
              src="/team/team-2.jpg"
              alt=""
            />
            <span>Adipisci Valid</span>
            <p>Developer</p>
          </div>
          <div className="teamphoto">
            <img
              width={'170px'}
              height={'170px'}
              src="/team/team-3.jpg"
              alt=""
            />
            <span>John Fexit</span>
            <p>Shop Meneger</p>
          </div>
          <div className="teamphoto">
            <img
              width={'170px'}
              height={'170px'}
              src="/team/team-1.jpg"
              alt=""
            />
            <span>John Fexid</span>
            <p>Shop Meneger</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
