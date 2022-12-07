export interface UnkownObject {
  [key: string]: any;
}

export interface IMenu {
  to?: string;
  component?: React.ElementType;
  icon?: JSX.Element;
  label: string;
  target?: string;
  subLabel?: string;
  menu?: IMenu[];
}

export type MenuType = (IMenu[] | string)[];
