import {
  TypographyInheritContext
} from "./chunk-4N5P5QO6.js";
import {
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-Z4UOSQWM.js";
import {
  capitalize,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  isMuiElement,
  require_jsx_runtime
} from "./chunk-TY2NYQZJ.js";
import {
  require_prop_types
} from "./chunk-P3WVVHHB.js";
import {
  _extends,
  _objectWithoutPropertiesLoose
} from "./chunk-MYPTBXCV.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/joy/Breadcrumbs/Breadcrumbs.js
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/Breadcrumbs/breadcrumbsClasses.js
function getBreadcrumbsUtilityClass(slot) {
  return generateUtilityClass("MuiBreadcrumbs", slot);
}
var breadcrumbsClasses = generateUtilityClasses("MuiBreadcrumbs", ["root", "ol", "li", "separator", "sizeSm", "sizeMd", "sizeLg"]);
var breadcrumbsClasses_default = breadcrumbsClasses;

// node_modules/@mui/joy/Breadcrumbs/Breadcrumbs.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "size", "separator", "component", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    size
  } = ownerState;
  const slots = {
    root: ["root", size && `size${capitalize(size)}`],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  };
  return composeClasses(slots, getBreadcrumbsUtilityClass, {});
};
var BreadcrumbsRoot = styled_default("nav", {
  name: "JoyBreadcrumbs",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({}, ownerState.size === "sm" && {
  "--Icon-fontSize": theme.vars.fontSize.lg,
  gap: "var(--Breadcrumbs-gap, 0.25rem)",
  padding: "0.5rem"
}, ownerState.size === "md" && {
  "--Icon-fontSize": theme.vars.fontSize.xl,
  gap: "var(--Breadcrumbs-gap, 0.375rem)",
  padding: "0.75rem"
}, ownerState.size === "lg" && {
  "--Icon-fontSize": theme.vars.fontSize.xl2,
  gap: "var(--Breadcrumbs-gap, 0.5rem)",
  padding: "1rem"
}, theme.typography[`body-${ownerState.size}`]));
var BreadcrumbsOl = styled_default("ol", {
  name: "JoyBreadcrumbs",
  slot: "Ol",
  overridesResolver: (props, styles) => styles.ol
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "inherit",
  // reset user-agent style
  padding: 0,
  margin: 0,
  listStyle: "none"
});
var BreadcrumbsLi = styled_default("li", {
  name: "JoyBreadcrumbs",
  slot: "Li",
  overridesResolver: (props, styles) => styles.li
})({
  display: "flex",
  alignItems: "center"
});
var BreadcrumbsSeparator = styled_default("li", {
  name: "JoyBreadcrumbs",
  slot: "Separator",
  overridesResolver: (props, styles) => styles.separator
})({
  display: "flex",
  userSelect: "none"
});
var Breadcrumbs = React.forwardRef(function Breadcrumbs2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyBreadcrumbs"
  });
  const {
    children,
    className,
    size = "md",
    separator = "/",
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    separator,
    size
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: BreadcrumbsRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotOl, olProps] = useSlot("ol", {
    className: classes.ol,
    elementType: BreadcrumbsOl,
    externalForwardedProps,
    ownerState
  });
  const [SlotLi, liProps] = useSlot("li", {
    className: classes.li,
    elementType: BreadcrumbsLi,
    externalForwardedProps,
    ownerState
  });
  const [SlotSeparator, separatorProps] = useSlot("separator", {
    additionalProps: {
      "aria-hidden": true
    },
    className: classes.separator,
    elementType: BreadcrumbsSeparator,
    externalForwardedProps,
    ownerState
  });
  const allItems = React.Children.toArray(children).filter((child) => {
    return React.isValidElement(child);
  }).map((child, index) => {
    var _child$props$componen;
    return (0, import_jsx_runtime.jsx)(SlotLi, _extends({}, liProps, {
      children: isMuiElement(child, ["Typography"]) ? React.cloneElement(child, {
        component: (_child$props$componen = child.props.component) != null ? _child$props$componen : "span"
      }) : child
    }), `child-${index}`);
  });
  return (0, import_jsx_runtime.jsx)(TypographyInheritContext.Provider, {
    value: true,
    children: (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
      children: (0, import_jsx_runtime.jsx)(SlotOl, _extends({}, olProps, {
        children: allItems.reduce((acc, current, index) => {
          if (index < allItems.length - 1) {
            acc = acc.concat(current, (0, import_jsx_runtime.jsx)(SlotSeparator, _extends({}, separatorProps, {
              children: separator
            }), `separator-${index}`));
          } else {
            acc.push(current);
          }
          return acc;
        }, [])
      }))
    }))
  });
});
true ? Breadcrumbs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * Custom separator node.
   * @default '/'
   */
  separator: import_prop_types.default.node,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    li: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    ol: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    separator: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    li: import_prop_types.default.elementType,
    ol: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType,
    separator: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var Breadcrumbs_default = Breadcrumbs;

export {
  getBreadcrumbsUtilityClass,
  breadcrumbsClasses_default,
  Breadcrumbs_default
};
//# sourceMappingURL=chunk-WE2FYR5Y.js.map