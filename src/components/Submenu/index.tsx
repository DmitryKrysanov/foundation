import React from 'react';
import {
  Column,
  NavbarSubmenu,
  SubmenuText,
  SubmenuTitle,
} from './SubmenuElements';

const Submenu = (props: any) => {
  return (
    <>
      <NavbarSubmenu isSubmenuOpen={props.isSubmenuOpen}>
        <Column>
          <SubmenuTitle>Acquire Users</SubmenuTitle>
          <SubmenuText>Work with the tools and services you use.</SubmenuText>
          <SubmenuTitle>Engage Customers</SubmenuTitle>
          <SubmenuText>
            Get started with our simple snippet of JavaScript.
          </SubmenuText>
        </Column>
        <Column>
          <SubmenuTitle>Book Appointments</SubmenuTitle>
          <SubmenuText>
            We offer measures like 2FA to ensure the safety.
          </SubmenuText>
          <SubmenuTitle>Generate Leads</SubmenuTitle>
          <SubmenuText>
            Become a better designer by learning this courses.
          </SubmenuText>
        </Column>
      </NavbarSubmenu>
    </>
  );
};

export default Submenu;
