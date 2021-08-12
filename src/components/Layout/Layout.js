import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import * as styles from './Layout.module.css';

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(open => !open);
    }

    return (
        <div style={{minHeight:'100vh',position:'relative'}}>
            <Navbar toggleSidebar={ toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggleSidebar={ toggleSidebar}/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout;