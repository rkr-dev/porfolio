import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { Blog,Title } from '../../components';
import * as styles from './Blogs.module.css';

export const Blogs = ({blogs,title,showLink}) => {
  return (
    <section className="section">
        <Title title={title}/>
        <div className={cx('sectionCenter', styles.blogsCenter)}>
            {blogs.map(({node}) => (
                <Blog key={node.id} {...node}/>
            ))}
        </div>
        {showLink && <Link to="/blog" className={cx('btn', 'centerBtn')}>blog</Link>}
    </section>
  );
};
