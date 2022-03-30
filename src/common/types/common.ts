export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type IconTypeProps = React.ComponentProps<"svg">;

export type IconType = (props: IconTypeProps) => JSX.Element;
