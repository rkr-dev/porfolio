import React from 'react';
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaStackOverflow,
  FaTwitterSquare,
} from 'react-icons/fa';

export const links = [
  { id: 1, text: 'home', url: '/' },
  { id: 2, text: 'about', url: '/about' },
  { id: 3, text: 'projects', url: '/projects' },
  { id: 4, text: 'blog', url: '/blog' },
  { id: 5, text: 'contact', url: '/contact' },
];

export const socials = [
  {
    id: 1,
    icon: <FaFacebookSquare className="socialIcon"></FaFacebookSquare>,
    url: 'https://www.facebook.com/rinilkunhiramanfb',
    name:'Facebook'
  },
  {
    id: 2,
    icon: <FaLinkedin className="socialIcon"></FaLinkedin>,
    url: 'https://www.linkedin.com/in/reactjsdev/',
    name:'LinkedIn'
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="socialIcon"></FaInstagramSquare>,
    url: 'https://www.instagram.com/rinilkunhiraman',
    name:'Instagram'
  },
  {
    id: 4,
    icon: <FaStackOverflow className="socialIcon"></FaStackOverflow>,
    url: 'https://stackoverflow.com/users/13587536/rkr-dev',
    name:'StackOverflow'
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="socialIcon"></FaTwitterSquare>,
    url: 'https://www.twitter.com/rinilkunhiraman',
    name:'Twitter'
  },
];
