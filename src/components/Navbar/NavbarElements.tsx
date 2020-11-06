import styled from 'styled-components';

export const NavbarContainer = styled.header`
  width: 100%;
  padding-top: 15px;
  position: fixed;
  z-index: 100;
  top: 0;

  @media screen and (max-width: 768px) {
    padding-top: 0;
    background-color: #fff;
    -webkit-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const NavbarInner = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.div`
  @media screen and (max-width: 768px) {
    img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const LogoTextContainer = styled.div`
  h6 {
    margin-bottom: 8px;
  }
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

export const LogoTextTitle = styled.h6``;

export const LogoTextDescription = styled.p`
  opacity: 0.5;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarMenu = styled.nav`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const MenuListItem = styled.li`
  width: 110px;
  &:last-child {
    width: auto;
  }
  &:hover {
    font-weight: 700;
  }
`;

export const MenuListItemDropdown = styled.li`
  width: 110px;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    right: 40px;
  }
  &:hover {
    font-weight: 700;
  }
`;

export const NavbarMobileBtn = styled.button`
  height: 100%;
  width: 58px;
  border-style: none;
  background: none;
  display: none;
  border-left: 1px solid #d9d9d9;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
