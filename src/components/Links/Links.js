import React from 'react';
import { Link } from 'gatsby';
import { links } from '../../constants/links'
import cx from 'classnames';
import * as styles from './Links.module.css'


const tempLinks = links.map(({ id, text, url }) => (
    <li key={ id}>
        <Link to={url}>{ text}</Link>
    </li>
))


export default ({ styleClass }) => {
    const { NavLinks, SidebarLinks } = styles;
    return (
        <ul className={cx(styleClass === 'navLinks' ? NavLinks : SidebarLinks)}>
            {tempLinks}
        </ul>
    )
} 