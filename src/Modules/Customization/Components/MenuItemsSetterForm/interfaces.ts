import { CustomMenuItems } from "Modules/Customization/_Interfaces/CustomMenuItems";

export interface MenuItemsSetterFormProps {
  menuItems: CustomMenuItems;
  setMenuItems: (appColors: CustomMenuItems | undefined) => void;
}
