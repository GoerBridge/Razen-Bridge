import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  width: 100%;
  /* height: 100% */
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 42px;
    ${({ theme }) => theme.mediaQueries.md} {
      display: none;
    }
  }
  .desktop-icon {
    width: 100%;
    max-width: 150px;
    display: none;
    ${({ theme }) => theme.mediaQueries.md} {
      display: block;
      max-width: 300px;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<any> = ({ href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" />
      <LogoWithTextIcon className="desktop-icon" />
    </>
  );

  return (
    <Flex width="100%" height="100%" mr="6px">
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
