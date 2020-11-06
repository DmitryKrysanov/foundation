import styled from 'styled-components';

export const NavbarSubmenu = styled.div<{isSubmenuOpen: boolean}>`
  width: 600px;
  -webkit-box-shadow: 0px 30px 45px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 30px 45px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 30px 45px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: ${(props) => (props.isSubmenuOpen ? 'flex' : 'none')};
  justify-content: space-between;
  position: absolute;
  top: 20px;
  right: 0;
  z-index: 2;
  background-color: #fff;
  padding: 30px;
`;

export const SubmenuTitle = styled.h5`
  &:hover {
    color: #009b4d;
  }
`;

export const SubmenuText = styled.p`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Column = styled.div`
  width: 50%;
  padding-right: 30px;
  margin-bottom: 8px;
`;
