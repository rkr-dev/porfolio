import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'
import logo from '../../assets/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Links } from '../../components'
import * as styles from './Navbar.module.css'

export const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className={cx(styles.Navbar)}>
      <div className={styles.NavCenter}>
        <div className={styles.NavHeader}>
          <Link to='/'>
            <img
              src={logo}
              alt='logo'
              style={{
                width: '50px',
                height: '50px',
                border: '3px solid hsl(209, 61%, 16%)',
              }}
            />
          </Link>
          <button
            type='button'
            className={styles.ToggleBtn}
            onClick={toggleSidebar}
          >
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <Links styleClass='navLinks'></Links>
      </div>
    </nav>
  )
}
