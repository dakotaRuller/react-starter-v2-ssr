//Node Modules
import React, { useState } from 'react';
import Link from 'next/link';

//Styled Components
import StyledNavbar from '@/styled-components/global/navigation/StyledNavbar';

//Components
import ThemeSwitcher from './ThemeSwitcher';

//Scripts
import { appLinks } from '@/src/scripts/constants';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const setMobileNav = () => {
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
        <Link href={appLinks.home}>
          <a>Home</a>
        </Link>
        <Link href={appLinks.technologies}>
          <a>Technologies</a>
        </Link>
      </div>
      <ThemeSwitcher />
    </StyledNavbar>
  );
};

export default Navbar;
