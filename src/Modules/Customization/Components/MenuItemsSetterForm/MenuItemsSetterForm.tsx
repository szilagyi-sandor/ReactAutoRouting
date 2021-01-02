import React, { useState } from "react";

import "./MenuItemsSetterForm.scss";

import { MenuItemsSetterFormProps } from "./interfaces";
import MenuItemSetting from "./Parts/MenuItemSetting/MenuItemSetting";
import { NavItem } from "Modules/Layout/Components/Navbars/_Interfaces/NavItem";
import { defaultMenuItems } from "Modules/Customization/_Constants/defaultMenuItems";

export default function MenuItemsSetterForm({
  menuItems,
  setMenuItems,
}: MenuItemsSetterFormProps) {
  // The default interface is extended so the newly added items are
  // automatically opened.
  const [customMenuItems, setCustomMenuItems] = useState<{
    admin: Array<NavItem & { defaultOpen?: boolean }>;
    site: Array<NavItem & { defaultOpen?: boolean }>;
  }>(menuItems);

  return (
    <form
      className="menuItemsSetterForm"
      onSubmit={(e) => {
        e.preventDefault();
        setMenuItems(customMenuItems);
      }}
    >
      <div className="colsWrapper">
        <div className="siteMenuItems">
          <h3>Site menu items</h3>

          {customMenuItems.site.map((item, idx) => (
            <MenuItemSetting
              key={idx}
              item={item}
              inputIdPrefix={idx}
              defaultOpen={item.defaultOpen}
              onChange={(mItem) =>
                setCustomMenuItems({
                  ...customMenuItems,
                  site: customMenuItems.site.map((cItem, cIdx) => {
                    if (cIdx === idx) {
                      return mItem;
                    }

                    return cItem;
                  }),
                })
              }
              onDelete={() =>
                setCustomMenuItems({
                  ...customMenuItems,
                  site: customMenuItems.site.filter((_, cIdx) => cIdx !== idx),
                })
              }
            />
          ))}

          <div className="btnWrapper">
            <button
              onClick={() => {
                setCustomMenuItems({
                  ...customMenuItems,
                  site: [
                    ...customMenuItems.site,
                    { text: "", url: "/", defaultOpen: true },
                  ],
                });
              }}
            >
              Add site menu item
            </button>
          </div>
        </div>

        <div className="adminMenuItems">
          <h3>Adminmenu items</h3>

          {customMenuItems.admin.map((item, idx) => (
            <MenuItemSetting
              key={idx}
              item={item}
              inputIdPrefix={idx}
              defaultOpen={item.defaultOpen}
              onChange={(mItem) =>
                setCustomMenuItems({
                  ...customMenuItems,
                  admin: customMenuItems.admin.map((cItem, cIdx) => {
                    if (cIdx === idx) {
                      return mItem;
                    }

                    return cItem;
                  }),
                })
              }
              onDelete={() =>
                setCustomMenuItems({
                  ...customMenuItems,
                  admin: customMenuItems.admin.filter(
                    (_, cIdx) => cIdx !== idx
                  ),
                })
              }
            />
          ))}

          <div className="btnWrapper">
            <button
              onClick={() => {
                setCustomMenuItems({
                  ...customMenuItems,
                  admin: [
                    ...customMenuItems.admin,
                    { text: "", url: "/", defaultOpen: true },
                  ],
                });
              }}
            >
              Add admin menu item
            </button>
          </div>
        </div>
      </div>

      <div className="btnWrapper">
        <button type="submit">Save</button>

        <button
          type="button"
          onClick={() => {
            setMenuItems(undefined);
            setCustomMenuItems(defaultMenuItems);
          }}
        >
          Set defaults
        </button>
      </div>
    </form>
  );
}
