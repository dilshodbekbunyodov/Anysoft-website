import { BaseRadio } from "./BaseRadio";
import { BaseRadioGroupProps } from "./types";

export const BaseRadioGroup = ({
  data,
  selected,
  changeHandler,
  groupName,
}: BaseRadioGroupProps) => {
  return (
    <div className=" flex flex-wrap gap-x-4 lg:gap-x-0 xl:space-x-6">
      {data.map((item) => (
        <BaseRadio
          key={item.id}
          name={item.name}
          id={item.id}
          groupName={groupName}
          value={item.name}
          selected={selected}
          onChange={changeHandler}
          iconName={item.hasIcon ? "allIcon" : undefined}
          role={item.role}
        />
      ))}
    </div>
  );
};
