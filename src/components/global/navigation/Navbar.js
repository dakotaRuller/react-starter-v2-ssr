//Node Modules
import React from 'react';
import Link from 'next/link';

//Styled Components
import StyledNavbar from '@/styled-components/global/navigation/StyledNavbar';

//Components
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className={'navigation-links'}>
        <Link href='/'><a>Home</a></Link>
        <Link href='/technologies'><a>Technologies</a></Link>
      </div>
      <ThemeSwitcher />
    </StyledNavbar>
  );
};

export default Navbar;
