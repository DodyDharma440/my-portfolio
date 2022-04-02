import { forwardRef } from "react";
import styled from "styled-components";
import { useDisclosure } from "@mantine/hooks";
import { CogIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import { Stack, Container, Icon, IconButton } from "common/components";
import { ThemeSettings } from "modules/layout/components";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const InnerNavbar = styled.div`
  padding: ${(p) => p.theme.spacing.lg} ${(p) => p.theme.spacing.sm};
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

const MobileMenu = styled(Stack)`
  @media ${(p) => p.theme.breakpoints.down.lg} {
    display: none;
  }
`;

const Logo = styled.h1`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    background: ${(p) => p.theme.colors.primary.main};
    width: 25px;
    height: 25px;
    right: -10px;
    border-radius: 6px;
    transform: rotate(55deg);
    z-index: -1;
  }
`;

const Navbar = forwardRef<HTMLElement>((props, ref) => {
  const [isThemeSettingsOpen, themeSettingsHandlers] = useDisclosure(false);

  return (
    <>
      <NavbarContainer ref={ref}>
        <InnerNavbar>
          <Container size="xl">
            <Stack justify="space-between">
              <Logo>Dodi Aditya</Logo>
              <DesktopLinks spacing="lg">
                <StyledLink href="#home">Home</StyledLink>
                <StyledLink href="#about">About</StyledLink>
                <StyledLink href="#education">Education</StyledLink>
                <StyledLink href="#skills">Skills</StyledLink>
                <StyledLink href="#experience">Experience</StyledLink>
                <StyledLink href="#projects">Projects</StyledLink>
                <StyledLink href="#contact">Contact</StyledLink>
                <IconButton size="xs" onClick={themeSettingsHandlers.open}>
                  <Icon size={18} icon={CogIcon} />
                </IconButton>
              </DesktopLinks>
              <MobileMenu>
                <IconButton size="xs" onClick={themeSettingsHandlers.open}>
                  <Icon size={18} icon={CogIcon} />
                </IconButton>
                <IconButton
                  size="xs"
                  onClick={themeSettingsHandlers.open}
                  color="transparent"
                >
                  <Icon size={18} icon={MenuAlt3Icon} />
                </IconButton>
              </MobileMenu>
            </Stack>
          </Container>
        </InnerNavbar>
      </NavbarContainer>
      <ThemeSettings
        isOpen={isThemeSettingsOpen}
        onClose={themeSettingsHandlers.close}
      />
    </>
  );
});

export default Navbar;
