import styled from "styled-components";
import { IconType, IconTypeProps } from "common/types/common";

export type IconContainerProps = {
  size?: number;
  color?: string;
};

const IconContainer = styled.div<IconContainerProps>`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  color: ${(p) => p.color || "inherit"};
`;

IconContainer.defaultProps = {
  size: 16,
};

export type IconProps = {
  icon: IconType;
} & IconContainerProps;

const Icon: React.FC<IconProps> = ({ icon, size, color }) => {
  const HeroIcon = icon as React.ElementType<IconTypeProps>;

  return (
    <IconContainer size={size} color={color}>
      <HeroIcon />
    </IconContainer>
  );
};

export default Icon;
