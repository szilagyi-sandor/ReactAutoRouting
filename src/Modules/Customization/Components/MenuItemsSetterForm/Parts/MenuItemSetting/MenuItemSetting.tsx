import React, { useState } from "react";

import "./MenuItemSetting.scss";

import { handledAuthTypes } from "Modules/Routing/ReactAutoRouting/_Constants/handledAuthTypes";
import { HandledAuthTypes } from "Modules/Routing/ReactAutoRouting/_Interfaces/Auth/HandledAuthTypes";
import { MenuItemSettingProps } from "./interfaces";
import { roles } from "Modules/Auth/_Constants/roles";
import { EnumItem } from "_Interfaces/EnumItem";

export default function MenuItemSetting({
  item,
  onChange,
  onDelete,
  inputIdPrefix,
  defaultOpen,
}: MenuItemSettingProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="menuItemSetting">
      <div className="btnWrapper">
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"}
        </button>

        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>

      <div className="inputWrapper">
        <label htmlFor={`${inputIdPrefix}Text`}>Text</label>
        <input
          type="text"
          id={`${inputIdPrefix}Text`}
          value={item.text}
          onChange={(e) => onChange({ ...item, text: e.target.value })}
        />
      </div>

      {open && (
        <>
          <div className="inputWrapper">
            <label htmlFor={`${inputIdPrefix}Url`}>Url</label>
            <input
              type="text"
              id={`${inputIdPrefix}Url`}
              value={item.url}
              onChange={(e) => onChange({ ...item, url: e.target.value })}
            />
          </div>

          <div className="inputWrapper select">
            <label htmlFor={`${inputIdPrefix}AuthRuleType`}>
              Auth rule type
            </label>

            <select
              id={`${inputIdPrefix}AuthRuleType`}
              value={item.authRule ? item.authRule.type : 0}
              onChange={(e) => {
                const value = +e.target.value;
                if (value > 3) {
                  console.log("handledAuthType not supported");
                }

                onChange({
                  ...item,
                  authRule:
                    value === 0
                      ? undefined
                      : value === handledAuthTypes.requiredLevel
                      ? { type: value, level: 0 }
                      : value === handledAuthTypes.acceptedRoles ||
                        value === handledAuthTypes.excludedRoles
                      ? { type: value, roles: [] }
                      : undefined,
                });
              }}
            >
              <option value={0}>None</option>

              {Object.keys(handledAuthTypes).map((key) => {
                const typeId = handledAuthTypes[key as keyof HandledAuthTypes];
                return (
                  <option key={key} value={typeId}>
                    {key}
                  </option>
                );
              })}
            </select>
          </div>

          {item.authRule &&
            item.authRule.type === handledAuthTypes.requiredLevel && (
              <div className="inputWrapper select">
                <label htmlFor={`${inputIdPrefix}Level`}>Level</label>

                <select
                  id={`${inputIdPrefix}Level`}
                  value={item.authRule.level}
                  onChange={(e) => {
                    const value = +e.target.value;

                    onChange({
                      ...item,
                      authRule: {
                        type: handledAuthTypes.requiredLevel,
                        level: value,
                      },
                    });
                  }}
                >
                  {Object.keys(roles).map((key) => {
                    const role = (roles as Record<string, EnumItem>)[key];
                    return (
                      <option key={key} value={role.id}>
                        {role.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}

          {item.authRule &&
            (item.authRule.type === handledAuthTypes.acceptedRoles ||
              item.authRule.type === handledAuthTypes.excludedRoles) && (
              <div className="inputWrapper">
                <h4>Roles</h4>

                {Object.keys(roles).map((key) => {
                  const role = (roles as Record<string, EnumItem>)[key];
                  const inputId = `${inputIdPrefix}Role${role.id}`;

                  const authRule =
                    item.authRule &&
                    (item.authRule.type === 3 || item.authRule.type === 2)
                      ? item.authRule
                      : undefined;

                  if (authRule) {
                    const checked = authRule.roles.includes(role.id);

                    return (
                      <div key={key} className="inputWrapper checkbox">
                        <label htmlFor={inputId}>
                          <input
                            type="checkbox"
                            name={`${inputIdPrefix}Roles`}
                            id={inputId}
                            value={role.id}
                            checked={checked}
                            onChange={(e) => {
                              const value = +e.target.value;

                              if (checked) {
                                onChange({
                                  ...item,
                                  authRule: {
                                    ...authRule,
                                    roles: authRule.roles.filter(
                                      (r) => r !== value
                                    ),
                                  },
                                });
                                return;
                              }

                              onChange({
                                ...item,
                                authRule: {
                                  ...authRule,
                                  roles: [...authRule.roles, value],
                                },
                              });
                            }}
                          />
                          {role.name}
                        </label>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            )}
        </>
      )}
    </div>
  );
}
