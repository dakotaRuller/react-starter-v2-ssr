//Node Modules
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

//Styled Components
import StyledNavbar from '@/styled-components/global/navigation/StyledNavbar';

//Components
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const setMobileNav = () => {
    //This could be viewed as a hack but this is the only way I could figure out how to make the z-index
    //work with the positioning of the navbar and the styled links
    const styledLinks = document.querySelectorAll('.styled-link');
    if (!showMobileNav) {
      styledLinks.forEach((i) => {
        i.style.zIndex = '-1';
      });
    } else {
      styledLinks.forEach((i) => {
        i.style.zIndex = '0';
      });
    }
    setShowMobileNav(!showMobileNav);
  };

  return (
    <StyledNavbar showMobileNav={showMobileNav}>
      <div
        className={`nav-toggle${showMobileNav ? ' active' : ''}`}
        onClick={() => setMobileNav()}
      >
        <div className={'top'} />
        <div className={'middle'} />
        <div className={'bottom'} />
      </div>
      <div className={`navigation-links${showMobileNav ? ' active' : ''}`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/technologies">
          <a>Technologies</a>
        </Link>
      </div>
      <ThemeSwitcher />
    </StyledNavbar>
  );
};

export default Navbar;
