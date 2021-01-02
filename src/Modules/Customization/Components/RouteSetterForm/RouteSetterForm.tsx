import React, { useState } from "react";

import "./RouteSetterForm.scss";

import { messageTypes } from "Modules/Customization/_Constants/messageTypes";
import { getCustomRoutes } from "Modules/Customization/_Helpers/CustomRouteHelpers/getCustomRoutes";
import { validateCustomRouteInput } from "Modules/Customization/_Helpers/CustomRouteHelpers/validateCustomRouteInput";
import { getEnumObjById } from "_Helpers/EnumHelpers/getEnumObjById";
import { RouteSetterFormProps } from "./interfaces";
import { roles } from "Modules/Auth/_Constants/roles";
import { EnumItem } from "_Interfaces/EnumItem";
import { lazyPages } from "Modules/Routing/_Constants/lazyPages";
import { lazyLayouts } from "Modules/Routing/_Constants/lazyLayouts";
import { exampleCustomRoutes } from "Modules/Customization/_Constants/exampleCustomRoutes";

// TODO: Add a better way to handle creating the JSON
export default function RouteSetterForm({ setRoutes }: RouteSetterFormProps) {
  const [customRoute, setCustomRoute] = useState(
    getCustomRoutes() ? JSON.stringify(getCustomRoutes(), null, 2) : ""
  );

  const [messages, setMessages] = useState<
    Array<{ text: string; type: number }>
  >([]);

  const possibleRolesString = Object.keys(roles)
    .map((key) => (roles as Record<string, EnumItem>)[key].id)
    .join(" | ");

  const possiblePagesString = Object.keys(lazyPages)
    .map((key) => `"${key}"`)
    .join(", ");

  const possibleLayoutsString = Object.keys(lazyLayouts)
    .map((key) => `"${key}"`)
    .join(", ");

  return (
    <form
      className="routeSetterForm"
      onSubmit={(e) => {
        e.preventDefault();

        let value: any;
        try {
          value = JSON.parse(customRoute);
        } catch (error) {
          setMessages([
            { text: "Not a valid JSON.", type: messageTypes.error.id },
          ]);
          return;
        }

        const validation = validateCustomRouteInput(value);

        if (!validation.result) {
          setMessages(validation.messages);
          return;
        }

        setRoutes(value);
      }}
    >
      <div className="instructions">
        <p>You can create your own routes in JSON format below.</p>

        <p>A route has the follwing structure:</p>

        <pre>
          {JSON.stringify(
            {
              Component: "string",
              documentTitle: "string | undefined",
              paths: "string[]",
              authRule: `{type: 1; level: ${possibleRolesString}; } | {type: 2 | 3; roles: Array<${possibleRolesString}>; }`,
              children: "Route",
            },
            null,
            2
          )}
        </pre>

        <p>Component can have the following values:</p>

        <ul>
          <li>With children: {possibleLayoutsString}.</li>
          <li>Without children: {possiblePagesString}.</li>
        </ul>

        <p>
          *If a key to a Route is "_restricted" it means, in case of invalid
          authRule it will be rendered. If A route has no "_restricted" sibling,
          it will go the the first parent that has one.
        </p>

        <p>Roles are the following: </p>

        <ul>
          <li>0 - Anonymous (not logged in)</li>
          <li>1 - Logged in user</li>
          <li>2 - Admin</li>
          <li>3 - Super admin</li>
        </ul>

        <p>Meaning of type in authRule: </p>

        <ul>
          <li>1 - Required level</li>
          <li>2 - Accepted roles</li>
          <li>3 - Excluded roles</li>
        </ul>

        <button
          type="button"
          onClick={() =>
            setCustomRoute(JSON.stringify(exampleCustomRoutes, null, 2))
          }
        >
          Add example route to the input
        </button>
      </div>

      <div className="inputWrapper">
        <label htmlFor="customRoute">Custom route</label>
        <textarea
          value={customRoute}
          name="customRoute"
          id="customRoute"
          rows={20}
          onChange={(e) => {
            setMessages([]);
            setCustomRoute(e.target.value);
          }}
        />
      </div>

      {messages.length > 0 && (
        <div className="messagesWrapper">
          {messages.map((m, i) => {
            const className =
              m.type === messageTypes.error.id
                ? "error"
                : m.type === messageTypes.warning.id
                ? "warning"
                : m.type === messageTypes.success.id
                ? "success"
                : "";

            const messageType = getEnumObjById(messageTypes, m.type);
            return (
              <p className={className} key={i}>
                {`${
                  messageType ? messageType.name : messageTypes.unknown.name
                }: ${m.text} `}
              </p>
            );
          })}
        </div>
      )}
      <div className="btnWrapper">
        <button type="submit">Save</button>

        <button
          type="button"
          onClick={() => {
            let value: any;
            try {
              value = JSON.parse(customRoute);
            } catch (error) {
              setMessages([
                { text: "Not a valid JSON.", type: messageTypes.error.id },
              ]);
              return;
            }

            const validation = validateCustomRouteInput(value);

            setMessages([
              ...validation.messages,
              ...(validation.result
                ? [
                    {
                      text: "The custom route is valid.",
                      type: messageTypes.success.id,
                    },
                  ]
                : []),
            ]);
          }}
        >
          Validate
        </button>

        <button
          type="button"
          onClick={() => {
            setRoutes(undefined);
          }}
        >
          Delete
        </button>
      </div>
    </form>
  );
}
