import { forwardRef } from "react";
import styled from "styled-components";
import { CogIcon } from "@heroicons/react/outline";
import { Stack, Container, Icon, IconButton } from "common/components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const InnerNavbar = styled.div`
  padding: ${(p) => p.theme.spacing.lg} ${(p) => p.theme.spacing.xl};
  backdrop-filter: blur(5px);
`;

const StyledLink = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  color: ${(p) => p.theme.colors.text.primary};
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 2.5px;
    bottom: -${(p) => p.theme.spacing.xs};
    left: 0;
    width: 0%;
    background-color: ${(p) => p.theme.colors.primary.main};
    transition: width 0.2s;
    border-radius: 2px;
  }
  &:hover:after {
    width: 100%;
  }
`;

const DesktopLinks = styled(Stack)`
  display: none;
  @media ${(p) => p.theme.breakpoints.down.lg} {
    display: flex;
  }
`;

const Navbar = forwardRef<HTMLElement>((props, ref) => {
  return (
    <NavbarContainer ref={ref}>
      <InnerNavbar>
        <Container size="xl">
          <Stack justify="space-between">
            <h1>Dodi Aditya</h1>
            <DesktopLinks spacing="lg">
              <StyledLink href="#home">Home</StyledLink>
              <StyledLink href="#about">About</StyledLink>
              <StyledLink href="#education">Education</StyledLink>
              <StyledLink href="#skills">Skills</StyledLink>
              <StyledLink href="#experience">Experience</StyledLink>
              <StyledLink href="#projects">Projects</StyledLink>
              <StyledLink href="#contact">Contact</StyledLink>
              <IconButton size="xs">
                <Icon size={18} icon={CogIcon} />
              </IconButton>
            </DesktopLinks>
          </Stack>
        </Container>
      </InnerNavbar>
    </NavbarContainer>
  );
});

export default Navbar;
