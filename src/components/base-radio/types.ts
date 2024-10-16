export type BaseRadioGroupProps = {
  groupName: string;
  data: option[];
  selected: string;
  changeHandler: (value: string) => void;
};

export type option = {
  id: string;
  name: string;
  role: string;
  hasIcon?: boolean;
};

export type RadioProps = {
  groupName: string;
  name: string;
  value: string;
  id: string;
  selected: string;
  onChange: (value: string) => void;
  iconName?: "allIcon" | undefined;
  role: string;
};
