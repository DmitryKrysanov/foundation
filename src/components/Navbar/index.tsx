import React, {useState} from 'react';
import logo from '../../assets/icons/ic_logo.svg';
import arrowDown from '../../assets/icons/ic_arrow_down.svg';
import menu from '../../assets/icons/ic_menu.svg';
import close from '../../assets/icons/ic_close.svg';
import {
  LogoIcon,
  LogoTextContainer,
  LogoTextDescription,
  LogoTextTitle,
  MenuList,
  MenuListItem,
  MenuListItemDropdown,
  NavbarContainer,
  NavbarInner,
  NavbarLogo,
  NavbarMenu,
  NavbarMobileBtn,
} from './NavbarElements';
import Submenu from '../Submenu';

interface IProps {
  isSidebarOpen: boolean;
  sidebarToggle: () => void;
}

const Navbar = (props: IProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuToggle = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <NavbarContainer>
      <div className="wrapper">
        <NavbarInner>
          <NavbarLogo>
            <LogoIcon>
              <img src={logo} alt="logo" />
            </LogoIcon>
            <LogoTextContainer>
              <LogoTextTitle>Foundation</LogoTextTitle>
              <LogoTextDescription>
                Startup landing template
              </LogoTextDescription>
            </LogoTextContainer>
          </NavbarLogo>
          <NavbarMobileBtn onClick={props.sidebarToggle}>
            {props.isSidebarOpen ? (
              <img src={close} alt="close" />
            ) : (
              <img src={menu} alt="menu" />
            )}
          </NavbarMobileBtn>
          <NavbarMenu>
            <MenuList>
              <MenuListItem>Home</MenuListItem>
              <MenuListItem>Stories</MenuListItem>
              <MenuListItemDropdown
                onMouseEnter={submenuToggle}
                onMouseLeave={submenuToggle}
              >
                Library
                <img src={arrowDown} alt="submenu" />
                <Submenu isSubmenuOpen={isSubmenuOpen} />
              </MenuListItemDropdown>
              <MenuListItem>
                <a className="btn btn--primary" href="/">
                  Get Started
                </a>
              </MenuListItem>
            </MenuList>
          </NavbarMenu>
        </NavbarInner>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
