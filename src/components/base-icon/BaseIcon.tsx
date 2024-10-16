import { icons } from "../icons/icons";

interface IconProps {
  name: keyof typeof icons;
  viewBox?: string;
  className?: string;
}

export const BaseIcon = ({
  viewBox = "0 0 26 26",
  className = "w-5 h-5",
  name,
}: IconProps) => {
  return (
    <>
      <svg
        className={className}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{ __html: icons[name] }}
        fill={name.includes("Outline") ? "none" : "currentColor"}
        stroke={name.includes("Outline") ? "currentColor" : "none"}
      ></svg>
    </>
  );
};
