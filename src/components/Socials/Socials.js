import React from 'react';
import cx from 'classnames';
import { socials } from '../../constants/links';
import * as styles from './Socials.module.css';

const links = socials.map(({ id, icon, url, name }) => {
  return (
    <li key={id}>
      <a href={url} className={cx(styles.SocialLink,name)}>
        {icon}
      </a>
    </li>
  );
});

export const Socials = ({ styleClass }) => {
  const { FooterLinks, SidebarIcons } = styles;

  return (
    <ul
      className={cx(
        styles.SocialLinks,
        styleClass === 'footerLinks' ? FooterLinks : SidebarIcons
      )}>
      {links}
    </ul>
  );
};
