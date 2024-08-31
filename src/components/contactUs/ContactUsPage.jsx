import { BiWorld } from 'react-icons/bi';
import { IoIosHome, IoIosPhonePortrait } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import './ContactUsPage.css';

import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { TiSocialFacebook, TiSocialGooglePlus } from 'react-icons/ti';

const ContactUsPage = () => {
  return (
    <div className="contact__container">
      <div className="contact__left">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="text" placeholder="Subject" />
        <textarea
          placeholder="Message"
          className="contact__textarea"
        ></textarea>
        <input className="contact__btn" type="submit" placeholder="SUBMIT" />
      </div>

      <div className="contact__right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
          width="600"
          height="300"
          style={{ border: '0' }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>

        <span>
          <IoIosHome /> Khaja, Bayzid, Chittagang, Bangladesh
        </span>
        <span>
          <IoIosPhonePortrait /> Khaja, Bayzid, Chittagang, Bangladesh
        </span>
        <span>
          <BiWorld /> Khaja, Bayzid, Chittagang, Bangladesh
        </span>
        <span>
          <MdEmail /> Khaja, Bayzid, Chittagang, Bangladesh
        </span>

        <dir className="contact__icons">
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <TiSocialGooglePlus />
          </a>
          <a href="#">
            <FaTelegramPlane />
          </a>
          <a href="#">
            <IoLogoWhatsapp />
          </a>
        </dir>
      </div>
    </div>
  );
};

export default ContactUsPage;
