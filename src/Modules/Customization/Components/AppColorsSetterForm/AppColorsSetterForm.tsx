import React, { useState } from "react";

import "./AppColorsSetterForm.scss";

import { AppColors } from "_Interfaces/AppColors";
import { AppColorsSetterFormProps } from "./interfaces";
import { getAppColorNameByKey } from "Modules/Customization/_Helpers/AppColorHelpers/getAppColorNameByKey";

export default function AppColorsSetterForm({
  appColors,
  setAppColors,
}: AppColorsSetterFormProps) {
  let bounce: NodeJS.Timeout | undefined;

  // RerenderCounter helps when the inputs need to be rerendered to show the
  // correct colors.
  const [rerenderCounter, setRerenderCounter] = useState(0);

  return (
    <form
      className="appColorsSetterForm"
      onSubmit={(e) => {
        e.preventDefault();
        setAppColors(undefined);
        setRerenderCounter(rerenderCounter + 1);
      }}
    >
      {Object.keys(appColors).map((key) => {
        const color = appColors[key as keyof AppColors];

        return (
          <div key={key} className="inputWrapper">
            <label htmlFor="key">
              {getAppColorNameByKey(key as keyof AppColors)}
            </label>

            <input
              key={rerenderCounter}
              type="color"
              id="key"
              defaultValue={color}
              onChange={(e) => {
                if (bounce) {
                  clearTimeout(bounce);
                }

                bounce = setTimeout(
                  () => setAppColors({ ...appColors, [key]: e.target.value }),
                  400
                );
              }}
            />
          </div>
        );
      })}

      <div className="btnWrapper">
        <button type="submit">Set defaults</button>
      </div>
    </form>
  );
}
