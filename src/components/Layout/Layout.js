import React, { useState } from 'react'
import { Navbar, Sidebar, Footer } from '../../components'
import * as styles from './Layout.module.css'

export const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen((open) => !open)
  }

  return (
    <div className={styles.Layout}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </div>
  )
}
