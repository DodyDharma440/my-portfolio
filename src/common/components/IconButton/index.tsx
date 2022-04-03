import styled from "styled-components";
import { Button } from "common/components";

const IconButton = styled(Button)`
  padding: ${(p) => p.theme.spacing[p.size || "sm"]};
`;

IconButton.defaultProps = {
  color: "primary",
  variant: "filled",
};

export default IconButton;
