import React from 'react';
import {MenuItem, SidebarContainer, SidebarMenu} from './SidebarElements';

interface IProps {
  isSidebarOpen: boolean;
  sidebarToggle: () => void;
}

const Sidebar = (props: IProps) => {
  return (
    <>
      <SidebarContainer isSidebarOpen={props.isSidebarOpen}>
        <SidebarMenu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Stories</MenuItem>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
