import { NavItem } from "../_Interfaces/NavItem";

export interface VerticalNavbarProps {
  items: NavItem[];
  color: string;
  navbarBrand?: {
    text: string;
    url: string;
  };
}
