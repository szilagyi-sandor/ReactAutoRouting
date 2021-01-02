import { roles } from "Modules/Auth/_Constants/roles";
import { messageTypes } from "Modules/Customization/_Constants/messageTypes";
import { handledAuthTypes } from "Modules/Routing/ReactAutoRouting/_Constants/handledAuthTypes";
import { HandledAuthTypes } from "Modules/Routing/ReactAutoRouting/_Interfaces/Auth/HandledAuthTypes";
import { lazyLayouts } from "Modules/Routing/_Constants/lazyLayouts";
import { lazyPages } from "Modules/Routing/_Constants/lazyPages";
import { EnumItem } from "_Interfaces/EnumItem";
import { deepMapNestedObject } from "../../../Routing/ReactAutoRouting/_Helpers/Generic/deepMapNestedObject";

export const validateCustomRouteInput = (
  input: any
): { result: boolean; messages: Array<{ text: string; type: number }> } => {
  const messages: Array<{ text: string; type: number }> = [];

  if (typeof input !== "object" || Array.isArray(input)) {
    messages.push({
      text: "The input is not an object",
      type: messageTypes.error.id,
    });

    return {
      result: false,
      messages,
    };
  }

  let result = true;

  const validAuthTypeIds = Object.keys(handledAuthTypes).map(
    (key) => handledAuthTypes[key as keyof HandledAuthTypes]
  );

  const validRoleIds = Object.keys(roles).map(
    (key) => (roles as Record<string, EnumItem>)[key].id
  );

  const validAttributes = [
    "Component",
    "paths",
    "documentTitle",
    "authRule",
    "parentsInfo",
    "childrenInfo",
    "children",
  ];

  Object.keys(input).forEach((key) => {
    const inputItem = input[key];

    if (typeof inputItem !== "object" || Array.isArray(inputItem)) {
      messages.push({
        text: `Invalid route object. Key: ${key}.`,
        type: messageTypes.error.id,
      });

      result = false;
    } else {
      deepMapNestedObject(input, (item: any, selector, indexes) => {
        const selectorString = selector.join(", ");
        const indexesString = indexes.join(", ");

        // Checking if there's a Component attribute witha  valid string value.
        if (!item.Component || typeof item.Component !== "string") {
          messages.push({
            text: `All items must have a Component property with a string value. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
            type: messageTypes.error.id,
          });

          result = false;
        } else {
          if (item.children) {
            if (!Object.keys(lazyLayouts).includes(item.Component)) {
              messages.push({
                text: `Invalid Component value. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
                type: messageTypes.error.id,
              });

              result = false;
            }
          } else {
            if (!Object.keys(lazyPages).includes(item.Component)) {
              messages.push({
                text: `Invalid Component value. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
                type: messageTypes.error.id,
              });

              result = false;
            }
          }
        }

        // Checking children.
        if (item.children && typeof item.children !== "object") {
          messages.push({
            text: `Invalid children value. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
            type: messageTypes.error.id,
          });

          result = false;
        }

        // Checking Paths.
        if (item.paths && !Array.isArray(item.paths)) {
          messages.push({
            text: `Invalid paths value. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
            type: messageTypes.error.id,
          });

          result = false;
        }

        if (
          !item.paths ||
          (Array.isArray(item.paths) && item.paths.length === 0)
        ) {
          messages.push({
            text: `Paths value is empty, item will be filtered out. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
            type: messageTypes.warning.id,
          });
        }

        // Checking documentTitle.
        if (item.documentTitle && typeof item.documentTitle !== "string") {
          messages.push({
            text: `Invalid documentTitle value. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
            type: messageTypes.error.id,
          });

          result = false;
        }

        // Checking authRule.
        if (item.authRule) {
          if (
            typeof item.authRule !== "object" ||
            !item.authRule.type ||
            !validAuthTypeIds.includes(item.authRule.type)
          ) {
            // Invalid in authRule in general.
            messages.push({
              text: `Invalid authRule value. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
              type: messageTypes.error.id,
            });

            result = false;
          } else {
            // Checking requiredLevel authRule.
            if (
              item.authRule.type === handledAuthTypes.requiredLevel &&
              (!item.authRule.level ||
                !Number.isSafeInteger(item.authRule.level) ||
                !validRoleIds.includes(item.authRule.level))
            ) {
              messages.push({
                text: `Invalid authRule value. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
                type: messageTypes.error.id,
              });

              result = false;
            }

            if (
              item.authRule.type === handledAuthTypes.acceptedRoles ||
              item.authRule.type === handledAuthTypes.excludedRoles
            ) {
              // Checking acceptedRoles authRule and excludedRoles authRule.
              if (!item.authRule.roles || !Array.isArray(item.authRule.roles)) {
                messages.push({
                  text: `Invalid authRule value. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
                  type: messageTypes.error.id,
                });

                result = false;
              }

              if (item.authRule.roles && Array.isArray(item.authRule.roles)) {
                item.authRule.roles.forEach((r: any, i: number) => {
                  if (!Number.isSafeInteger(r) || !validRoleIds.includes(r)) {
                    messages.push({
                      text: `Invalid authRule roles values at place ${i}. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
                      type: messageTypes.error.id,
                    });

                    result = false;
                  }
                });
              }
            }
          }
        }

        // Handling parentsInfo and childrenInfo
        if (item.parentsInfo || item.childrenInfo) {
          messages.push({
            text: `The attributes "parentsInfo" and  "childrenInfo" must be empty. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
            type: messageTypes.error.id,
          });

          result = false;
        }

        const additinalAttributes = Object.keys(item).filter(
          (a) => !validAttributes.includes(a)
        );

        if (additinalAttributes.length > 0) {
          messages.push({
            text: `Found the following additional attributes: ${additinalAttributes.join(
              ", "
            )}. Item selectors: ${selectorString}. Indexes: ${indexesString}.`,
            type: messageTypes.warning.id,
          });
        }
      });
    }
  });

  return {
    result,
    messages,
  };
};
