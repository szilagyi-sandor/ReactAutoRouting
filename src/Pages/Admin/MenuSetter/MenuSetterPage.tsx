import React from "react";

import "./MenuSetterPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import { Container } from "reactstrap";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";
import { DrilledRouteProps } from "_Interfaces/DrilledRouteProps";
import MenuItemsSetterForm from "Modules/Customization/Components/MenuItemsSetterForm/MenuItemsSetterForm";
import { setMenuItemsToLocalStorage } from "Modules/Customization/_Helpers/CustomMenuItems/setMenuItemsToLocalStorage";
import { defaultMenuItems } from "Modules/Customization/_Constants/defaultMenuItems";
import { deleteMenuItemsFromLocalStorage } from "Modules/Customization/_Helpers/CustomMenuItems/deleteMenuItemsFromLocalStorage";

export default function MenuSetterPage({ drilledProps }: PageProps) {
  const _pageColor: string =
    drilledProps && drilledProps.appColors && drilledProps.appColors.page
      ? drilledProps.appColors.page
      : pageColor;

  const setMenuItems: DrilledRouteProps["setMenuItems"] | undefined =
    drilledProps && drilledProps.setMenuItems;

  const menuItems: DrilledRouteProps["menuItems"] | undefined =
    drilledProps && drilledProps.menuItems;

  return (
    <section
      className="menuSetterPage"
      style={{ border: `4px solid ${_pageColor}` }}
    >
      <header>
        <Container fluid>
          <h2>Menu setter page</h2>
        </Container>
      </header>

      <div className="content">
        <Container fluid>
          {setMenuItems && menuItems && (
            <MenuItemsSetterForm
              menuItems={menuItems}
              setMenuItems={(menuItems) => {
                if (menuItems) {
                  setMenuItems(menuItems);
                  setMenuItemsToLocalStorage(menuItems);
                  return;
                }

                setMenuItems(defaultMenuItems);
                deleteMenuItemsFromLocalStorage();
              }}
            />
          )}
        </Container>
      </div>
    </section>
  );
}
