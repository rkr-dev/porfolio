import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import { useStaticQuery, graphql } from 'gatsby'
import { getSrc } from 'gatsby-plugin-image'
import { Socials, Quotes } from '../../components'
import Typed from 'typed.js'
import * as styles from './Hero.module.css'

export const query = graphql`
  {
    file: allFile(filter: { name: { eq: "hero-img" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
const options = {
  strings: ["I'm Rinil <span>Kunhiraman</span>"],
  typeSpeed: 200,
  showCursor: false,
}
export const NameTyper = () => {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, options)
    return () => {
      typed.current.destroy()
    }
  }, [])
  return (
    <div
      aria-label='Rinil Kunhiraman'
      className={styles.TypeWrap}
      ref={el}
    ></div>
  )
}

export const Hero = () => {
  const data = useStaticQuery(query)
  const imageUrl = getSrc(data.file.edges[0].node)

  return (
    <header
      className={styles.Hero}
      style={{
        background: `url(${imageUrl}) no-repeat center center/cover`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div className={cx('sectionCenter', styles.HeroCenter)}>
        <article className={styles.HeroInfo}>
          <div>
            <div className={cx('underline', styles.HeroLeft)}></div>
            <NameTyper />
            <h3>Web Developer</h3>
            <Link to='/about' className={cx('btn', styles.AbtBtn)}>
              Learn More
            </Link>
          </div>
          <Socials />
          <Quotes />
        </article>
      </div>
    </header>
  )
}
