import React from 'react';
import cx from 'classnames';
import SocialLinks from '../Socials/Socials';
import Links from '../Links/Links';
import { FaTimes } from 'react-icons/fa';
import * as styles from './Sidebar.module.css';

const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <aside className={cx(styles.Sidebar, isOpen ? styles.ShowSidebar:'')}>
          <button className={styles.CloseBtn} onClick={toggleSidebar}>
              <FaTimes />
          </button>
          <div className={styles.SideContainer}>
              <Links styleClass={`${isOpen ? 'sidebarLinks':''}`}/>
              <SocialLinks styleClass={`${isOpen ? 'sidebarIcons':''}`}/>
          </div>

    </aside>
  );
};

export default Sidebar;
