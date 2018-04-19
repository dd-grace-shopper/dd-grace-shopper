import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = props => {
  return (
    <footer>
      <span className="footer-col">
        <h3>Contact Us!</h3>
        <h4>Placeholder Email</h4>
        <h4>1-800-FAKE-NUMBA</h4>
      </span>
      <span className="footer-col">
        <h3>More Info</h3>
        <h4>About Us</h4>
        <h4>Our Story</h4>
      </span>
      <span className="footer-col">
        <h3>Want to help with our site?</h3>
        <h4>Reach out to us at...</h4>
        <h4>obviouslyfakeemail@bootleg.com</h4>
      </span>
      <img
        className="small-img footer-col"
        src="https://thewinewankers.files.wordpress.com/2014/01/a-funny-cat-glass-wine-bottle.jpg?w=540&h=405"
      />
    </footer>
  );
};
export default Footer;
