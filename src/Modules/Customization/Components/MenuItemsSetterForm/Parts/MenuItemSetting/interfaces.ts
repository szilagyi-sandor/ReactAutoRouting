import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";

export interface MenuItemSettingProps {
  item: NavItem;
  inputIdPrefix: string | number;
  defaultOpen?: boolean;
  onChange: (item: NavItem) => void;
  onDelete: () => void;
}
