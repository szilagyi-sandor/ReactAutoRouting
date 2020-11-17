import { NavItem } from "../_Interfaces/NavItem";

export interface HorizontalNavbarProps {
  items: NavItem[];

  navbarBrand?: {
    text: string;
    url: string;
  };
}
