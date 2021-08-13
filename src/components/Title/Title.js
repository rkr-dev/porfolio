import React from 'react';
import * as styles from './Title.module.css';

export const Title = ({ title, styleClass }) => {
  return (
    <div
      className={
        styleClass === "about" ? styles.AboutSectionTitle : styles.SectionTitle
      }
    >
      <h2>{title || "title"}</h2>
      <div
        className={
          styleClass === "about" ? styles.AboutUnderline : styles.underline
        }
      ></div>
    </div>
  )
}
