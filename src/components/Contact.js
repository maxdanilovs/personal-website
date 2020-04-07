import React from 'react';
import '../style/contact.scss';
import Background from '../images/contact_background.jpg';

function Contact() {
  return (
    <div className="contact page" id="contact">
    <div className="contact-background" style={{backgroundImage: `url(${Background})`}}>
      <h1 className="page-header">CONTACT</h1>
    </div>
      <div className="container contact-main">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <p className="phone"><i className="fa fa-mobile"></i>07449-367318</p>
            <p className="email"><i className="fa fa-envelope"></i>maxdanilovsdev@gmail.com</p>
            <p className="address"><i className="fa fa-map-marker"></i>United Kingdom</p>
          </div>
          <div className="col-xs-12 col-lg-6">
            <div className="logo-and-social">
                <div className="social">
                  <ul>
                    <li>
                      <a href="https://twitter.com/Max29064849" target="blank">
                      <i className="fa fa-twitter"></i>Twitter</a>
                    </li>
                    <li>
                      <a href="https://github.com/maxdanilovs" target="blank">
                      <i className="fa fa-github"></i>GitHub</a>
                    </li>
                    <li>
                      <a href="https://wa.me/447448367318" target="blank">
                      <i className="fa fa-whatsapp"></i>Whatsapp</a>
                    </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Max Danilovs © 2019</p>
      </div>
    </div>
  )
}

export default Contact;
