import React from 'react';
import './style/Footers.css';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Footers() {
  return (
    <div className='footer'>
      <div className='container-footer'>
        <div className="header-footer">โรงแรม ไซเบอร์วิสตา</div>
        <div className='image-footer'>
          <a href="/room1" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={`${process.env.PUBLIC_URL}/image/footer1.jpg`} alt="Room 1" />
          </a>
          <a href="/room2" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={`${process.env.PUBLIC_URL}/image/footer2.jpg`} alt="Room 2" />
          </a>
          <a href="/room3" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={`${process.env.PUBLIC_URL}/image/footer3.jpg`} alt="Room 3" />
          </a>
          <a href="/room4" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={`${process.env.PUBLIC_URL}/image/footer4.jpg`} alt="Room 4" />
          </a>
          <a href="/room5" target="_blank" rel="noopener noreferrer">
            <img className='logo' src={`${process.env.PUBLIC_URL}/image/footer5.jpg`} alt="Room 5" />
          </a>
        </div>

        <div className="footerr">
          <div className="contact-info">
            <img className='logo-hotel' src={`${process.env.PUBLIC_URL}/image/logoo.png`} alt="logo" />
            <div>มหาวิทยาลัยศรีนครินทรวิโรฒ 63 หมู่ 7</div>
            <div>ต.องครักษ์ อ.องครักษ์ จ.นครนายก</div>
            <div>📞 0XX-XXX-XXXX</div>
            <div>📧 CyberVistaHotel@gmail.com</div>
          </div>
          <div className="links">
            <a href="/">HOME</a>
            <a href="/hotel">HOTEL</a>
            <a href="/cafe">CAFÉ</a>
            <a href="/club">CLUBE</a>
            <a href="/spa">SPA</a>
            <a href="/fitness-center">FITNESS CENTER</a>
          </div>
          <div className="links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/accessibility">Accessibility</a>
            <a href="/faqs">FAQs</a>
            <a href="/contact-us">Contact Us</a>
          </div>
          <div className="social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ width: '40px', height: '40px', color: '#E4405F' }} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} style={{ width: '40px', height: '40px', color: '#4267B2' }} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faX} style={{ width: '40px', height: '40px', color: '#1DA1F2' }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} style={{ width: '40px', height: '40px', color: '#FF0000' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footers;
