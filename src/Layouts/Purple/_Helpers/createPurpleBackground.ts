import { purpleLayoutColor } from "../_Constants/purpleLayoutColor";

export const createPurpleBackground = () => {
  return {
    background: `radial-gradient(${purpleLayoutColor} 15%, transparent 16%) 0 0,
    radial-gradient(${purpleLayoutColor} 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px`,
    backgroundSize: "16px 16px",
  };
};
