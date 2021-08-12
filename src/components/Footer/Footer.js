import React from 'react';
import * as styles from './Footer.module.css';
import  SocialLinks  from '../Socials/Socials';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div>
        <SocialLinks styleClass="footerLinks"></SocialLinks>
        <h4>
          Copyright &copy; {new Date().getFullYear()}
          <span>RK</span> All rights reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
