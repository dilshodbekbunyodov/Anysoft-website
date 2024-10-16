import { FC, ReactNode } from "react";

type BaseButtonProps = {
  children: ReactNode | string | number;
  className?: string;
  onClick?: () => void;
};

export const BaseButton: FC<BaseButtonProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` w-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
