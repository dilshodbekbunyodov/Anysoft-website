import { BaseIcon } from "../base-icon/BaseIcon";
import { RadioProps } from "./types";

export const BaseRadio = ({
  name,
  id,
  groupName,
  value,
  selected,
  onChange,
  iconName,
  role,
}: RadioProps) => {
  const isSelected: boolean = selected === role;
  return (
    <>
      <label
        className={`my-4 flex cursor-pointer items-center space-x-2 border px-6 py-2 text-sm hover:border-red-500 lg:py-4 lg:text-base xl:my-0 ${
          isSelected
            ? "border-red-500 text-red-500"
            : "border-gray-400 text-white"
        }`}
        htmlFor={id}
      >
        {iconName ? (
          <BaseIcon
            name={iconName}
            viewBox="0 0 32 32"
            className={`h-8 w-8 ${isSelected ? "text-red-500" : "text-white"}`}
          />
        ) : null}
        <span>{name}</span>
      </label>
      <input
        type="radio"
        id={id}
        name={groupName}
        style={{ opacity: 0, position: "fixed" }}
        value={value}
        onChange={(e) => onChange(role)}
      />
    </>
  );
};
