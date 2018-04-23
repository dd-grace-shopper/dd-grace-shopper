import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <footer className="footer ui segment">
      <div className="footer-col">
        <h3>Contact Us!</h3>
        <h4 className="footer-info">Placeholder Email</h4>
        <h4 className="footer-info">1-800-FAKE-NUMBA</h4>
      </div>
      <div className="footer-col">
        <h3>More Info</h3>
        <h4 className="footer-info">About Us</h4>
        <h4 className="footer-info">Our Story</h4>
      </div>
      <div className="footer-col">
        <h3>Want to help with our site?</h3>
        <h4 className="footer-info">Reach out to us at...</h4>
        <h4 className="footer-info">obviouslyfakeemail@bootleg.com</h4>
      </div>
      <img
        className="small-img"
        src="https://thewinewankers.files.wordpress.com/2014/01/a-funny-cat-glass-wine-bottle.jpg?w=540&h=405"
      />
    </footer>
  );
};
export default Footer;
