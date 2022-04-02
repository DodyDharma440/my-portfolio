import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Navbar } from "modules/layout/components";

export const Content = styled.div`
  flex: 1;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Layout = () => {
  return (
    <Root>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </Root>
  );
};

export default Layout;
