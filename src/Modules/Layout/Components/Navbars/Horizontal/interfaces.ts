import { NavItem } from "../_Interfaces/NavItem";

export interface HorizontalNavbarProps {
  items: NavItem[];
  color: string;
  navbarBrand?: {
    text: string;
    url: string;
  };
  userInfo?: {
    imgUrl?: string;
    text: string;
  };
  onLogout?: () => void;
}
