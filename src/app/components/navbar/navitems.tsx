import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive/index";
import menuStyle from "./menuStyle.js";

const ListContainer = styled.ul`
  ${tw`
flex
list-none
`};
`;

const Navitem = styled.li`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
  `};
`;

const Navitemmobile = styled.li`
  ${tw`
text-white
text-xl
mb-3
focus:text-white
`};
`;

export function Navitems() {
  const ismobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (ismobile)
    return (
      <Menu right styles={menuStyle}>
        <ListContainer>
          <Navitemmobile>
            <a href="#">Home</a>
          </Navitemmobile>
          <Navitemmobile>
            <a href="#">Cars</a>
          </Navitemmobile>
          <Navitemmobile>
            <a href="#">Services</a>
          </Navitemmobile>
          <Navitemmobile>
            <a href="#">Contact</a>
          </Navitemmobile>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <Navitem>
        <a href="#">Home</a>
      </Navitem>
      <Navitem>
        <a href="#">Cars</a>
      </Navitem>
      <Navitem>
        <a href="#">Services</a>
      </Navitem>
      <Navitem>
        <a href="#">Contact</a>
      </Navitem>
    </ListContainer>
  );
}
