//Node Moudules
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
        <Link href={'/'}>Home</Link>
        <Link href={'/page-two'}>Page Two</Link>
      </div>
      <ThemeSwitcher />
    </StyledNavbar>
  );
};

export default Navbar;
