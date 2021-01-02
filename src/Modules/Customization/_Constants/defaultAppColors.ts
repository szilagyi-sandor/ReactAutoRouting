import { AppColors } from "_Interfaces/AppColors";
import { adminLayoutColor } from "Layouts/Admin/_Constants/adminLayoutColor";
import { devLayoutColor } from "Layouts/Dev/_Constants/devLayoutColor";
import { purpleLayoutColor } from "Layouts/Purple/_Constants/purpleLayoutColor";
import { siteLayoutColor } from "Layouts/Site/_Constants/siteLayoutColor";
import { pageColor } from "Pages/_Constants/pageColor";
import { appLayoutColor } from "_Constants/appLayoutColor";

export const defaultAppColors: AppColors = {
  app: appLayoutColor,
  page: pageColor,
  admin: adminLayoutColor,
  dev: devLayoutColor,
  purple: purpleLayoutColor,
  site: siteLayoutColor,
};
