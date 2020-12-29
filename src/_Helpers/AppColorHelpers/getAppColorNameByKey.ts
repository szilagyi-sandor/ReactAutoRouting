import { AppColors } from "_Interfaces/AppColors";

export const getAppColorNameByKey = (key: keyof AppColors) => {
  switch (key) {
    case "admin":
      return "Admin layout color";

    case "app":
      return "App layout color";

    case "dev":
      return "Dev layout color";

    case "page":
      return "Page color";

    case "purple":
      return "Purple layout color";

    case "site":
      return "Site layout color";

    default:
      const check: never = key;
      return "Unknown";
  }
};
