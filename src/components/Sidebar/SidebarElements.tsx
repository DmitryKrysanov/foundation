import styled from 'styled-components';

export const SidebarContainer = styled.aside<{isSidebarOpen: boolean}>`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 200px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  -webkit-box-shadow: 0px 30px 45px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 30px 45px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 30px 45px 0px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isSidebarOpen ? '100%' : '0')};
  top: ${(isOpen) => (isOpen.isSidebarOpen ? '64px' : '-100%')};
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  padding: 16px 0;
`;
