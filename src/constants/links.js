import React from 'react'
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa'

export const links = [
  { id: 1, text: 'home', url: '/' },
  { id: 2, text: 'about', url: '/about' },
  { id: 3, text: 'projects', url: '/projects' },
  { id: 4, text: 'blog', url: '/blog' },
  { id: 5, text: 'contact', url: '/contact' },
]

export const socials = [
  {
    id: 1,
    icon: <FaFacebook className='socialIcon'></FaFacebook>,
    url: 'https://www.facebook.com/rinilkunhiramanfb',
    name: 'Facebook',
  },
  {
    id: 2,
    icon: <FaLinkedin className='socialIcon'></FaLinkedin>,
    url: 'https://www.linkedin.com/in/reactjsdev/',
    name: 'LinkedIn',
  },
  {
    id: 3,
    icon: <FaInstagram className='socialIcon'></FaInstagram>,
    url: 'https://www.instagram.com/rinilkunhiraman',
    name: 'Instagram',
  },
  {
    id: 4,
    icon: <FaStackOverflow className='socialIcon'></FaStackOverflow>,
    url: 'https://stackoverflow.com/users/13587536/rkr-dev',
    name: 'StackOverflow',
  },
  {
    id: 5,
    icon: <FaTwitter className='socialIcon'></FaTwitter>,
    url: 'https://www.twitter.com/rinilkunhiraman',
    name: 'Twitter',
  },
]
