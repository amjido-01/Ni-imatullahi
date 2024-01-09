import profile from '@/assets/profile.png';
import resume from '@/assets/resume.png';
import graphics from '@/assets/graphics.png';
import works from '@/assets/Works.png' ;
import home from '@/assets/home.png';
export const linksData = [
  {
    id: 0,
    pageUrl: '/',
    imgSrc: home,
    children: 'Home',
  },
  {
    id: 1,
    pageUrl: '/works',
    imgSrc: works,
    children: 'Works',
  },
  {
    id: 2,
    pageUrl: '/about',
    imgSrc: profile,
    children: 'About',
  },
  {
    id: 3,
    pageUrl: '/graphics',
    imgSrc: graphics,
    children: 'Graphics',
  },
  {
    id: 4,
    pageUrl: '/cv',
    imgSrc: resume,
    children: 'Cv',
  },
]