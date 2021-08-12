import React from 'react';
import cx from 'classnames';
import { FaTimes } from 'react-icons/fa';
import {Links,Socials} from '../../components';
import * as styles from './Sidebar.module.css';

export const Sidebar = ({isOpen, toggleSidebar}) => {
  return (
    <aside className={cx(styles.Sidebar, isOpen ? styles.ShowSidebar:'')}>
          <button className={styles.CloseBtn} onClick={toggleSidebar}>
              <FaTimes />
          </button>
          <div className={styles.SideContainer ? styles.SideContainer : ''}>
              <Links styleClass={`${isOpen ? 'sidebarLinks':''}`}/>
              <Socials styleClass={`${isOpen ? 'sidebarIcons':''}`}/>
          </div>

    </aside>
  );
};
