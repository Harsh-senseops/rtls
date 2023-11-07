import {
  ButtonGroupContext_default,
  ToggleButtonGroupContext_default
} from "./chunk-S67YB5OM.js";
import {
  FormControlContext_default,
  INVERTED_COLORS_ATTR,
  StyledInputEndDecorator,
  StyledInputHtml,
  StyledInputRoot,
  StyledInputStartDecorator
} from "./chunk-BMXJFFAZ.js";
import {
  Popper,
  useAutocomplete,
  useButton
} from "./chunk-6L6ILJPJ.js";
import {
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-Z4UOSQWM.js";
import {
  capitalize,
  chainPropTypes,
  clsx_default,
  composeClasses,
  generateUtilityClass2 as generateUtilityClass,
  generateUtilityClasses2 as generateUtilityClasses,
  integerPropType_default,
  isMuiElement,
  require_jsx_runtime,
  useForkRef,
  useId
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

// node_modules/@mui/joy/Autocomplete/Autocomplete.js
var React26 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());

// node_modules/@mui/joy/internal/svg-icons/Close.js
var React3 = __toESM(require_react());

// node_modules/@mui/joy/utils/createSvgIcon.js
var React2 = __toESM(require_react());

// node_modules/@mui/joy/SvgIcon/SvgIcon.js
var import_prop_types = __toESM(require_prop_types());
var React = __toESM(require_react());

// node_modules/@mui/joy/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorInherit", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "fontSizeInherit", "fontSizeXs", "fontSizeSm", "fontSizeMd", "fontSizeLg", "fontSizeXl", "fontSizeXl2", "fontSizeXl3", "fontSizeXl4", "sizeSm", "sizeMd", "sizeLg"]);
var svgIconClasses_default = svgIconClasses;

// node_modules/@mui/joy/SvgIcon/SvgIcon.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox", "size", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    color,
    size,
    fontSize
  } = ownerState;
  const slots = {
    root: ["root", color && color !== "inherit" && `color${capitalize(color)}`, size && `size${capitalize(size)}`, fontSize && `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, {});
};
var sizeMap = {
  sm: "xl",
  md: "xl2",
  lg: "xl3"
};
var SvgIconRoot = styled_default("svg", {
  name: "JoySvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$palette;
  return _extends({}, ownerState.instanceSize && {
    "--Icon-fontSize": theme.vars.fontSize[sizeMap[ownerState.instanceSize]]
  }, ownerState.instanceFontSize && ownerState.instanceFontSize !== "inherit" && {
    "--Icon-fontSize": theme.vars.fontSize[ownerState.instanceFontSize]
  }, {
    userSelect: "none",
    margin: "var(--Icon-margin)",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize[sizeMap[ownerState.size]] || "unset"})`
  }, ownerState.fontSize && ownerState.fontSize !== "inherit" && {
    fontSize: `var(--Icon-fontSize, ${theme.fontSize[ownerState.fontSize]})`
  }, !ownerState.htmlColor && _extends({
    color: `var(--Icon-color, ${theme.vars.palette.text.icon})`
  }, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && theme.vars.palette[ownerState.color] && {
    color: `rgba(${(_theme$vars$palette = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / 1)`
  }));
});
var SvgIcon = React.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySvgIcon"
  });
  const {
    children,
    className,
    color,
    component = "svg",
    fontSize,
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24",
    size = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const hasSvgAsChild = React.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color,
    component,
    size,
    instanceSize: inProps.size,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
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
    elementType: SvgIconRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      color: htmlColor,
      focusable: false
    }, titleAccess && {
      role: "img"
    }, !titleAccess && {
      "aria-hidden": true
    }, !inheritViewBox && {
      viewBox
    }, hasSvgAsChild && children.props)
  });
  return (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? (0, import_jsx_runtime.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "inherit", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The theme's fontSize applied to the icon that will override the `size` prop.
   * Use this prop when you want to use a specific font-size from the theme.
   */
  fontSize: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "lg", "md", "sm", "xl", "xl2", "xl3", "xl4", "xs"]), import_prop_types.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types.default.string,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types.default.string
} : void 0;
var SvgIcon_default = SvgIcon;

// node_modules/@mui/joy/utils/createSvgIcon.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime3.jsx)(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React2.memo(React2.forwardRef(Component));
}

// node_modules/@mui/joy/internal/svg-icons/Close.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Close_default = createSvgIcon((0, import_jsx_runtime4.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");

// node_modules/@mui/joy/internal/svg-icons/ArrowDropDown.js
var React4 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var ArrowDropDown_default = createSvgIcon((0, import_jsx_runtime5.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");

// node_modules/@mui/joy/styles/variantColorInheritance.js
var React5 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var VariantColorContext = React5.createContext(void 0);
function getChildVariantAndColor(parentVariant, parentColor) {
  let childColor = parentColor;
  let childVariant = parentVariant;
  if (parentVariant === "outlined") {
    childColor = "neutral";
    childVariant = "plain";
  }
  if (parentVariant === "plain") {
    childColor = "neutral";
  }
  return {
    variant: childVariant,
    color: childColor
  };
}
function useVariantColor(instanceVariant, instanceColor, alwaysInheritColor = false) {
  const value = React5.useContext(VariantColorContext);
  const [variant, color] = typeof value === "string" ? value.split(":") : [];
  const result = getChildVariantAndColor(variant || void 0, color || void 0);
  result.variant = instanceVariant || result.variant;
  result.color = instanceColor || (alwaysInheritColor ? color : result.color);
  return result;
}
function VariantColorProvider({
  children,
  color,
  variant
}) {
  return (0, import_jsx_runtime6.jsx)(VariantColorContext.Provider, {
    value: `${variant || ""}:${color || ""}`,
    children
  });
}

// node_modules/@mui/joy/IconButton/IconButton.js
var React6 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/joy/IconButton/iconButtonClasses.js
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
var iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "focusVisible", "disabled", "sizeSm", "sizeMd", "sizeLg"]);
var iconButtonClasses_default = iconButtonClasses;

// node_modules/@mui/joy/IconButton/IconButton.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded2 = ["children", "action", "component", "color", "disabled", "variant", "size", "slots", "slotProps"];
var useUtilityClasses2 = (ownerState) => {
  const {
    color,
    disabled,
    focusVisible,
    focusVisibleClassName,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getIconButtonUtilityClass, {});
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
var StyledIconButton = styled_default("button")(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2, _theme$variants3, _theme$variants4;
  return [_extends({
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon
  }, ownerState.instanceSize && {
    "--IconButton-size": {
      sm: "2rem",
      md: "2.25rem",
      lg: "2.75rem"
    }[ownerState.instanceSize]
  }, ownerState.size === "sm" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2rem) / 1.6)",
    // 1.25rem by default
    "--CircularProgress-size": "20px",
    "--CircularProgress-thickness": "2px",
    minWidth: "var(--IconButton-size, 2rem)",
    // use min-width instead of height to make the button resilient to its content
    minHeight: "var(--IconButton-size, 2rem)",
    // use min-height instead of height to make the button resilient to its content
    fontSize: theme.vars.fontSize.sm,
    paddingInline: "2px"
    // add a gap, in case the content is long, e.g. multiple icons
  }, ownerState.size === "md" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2.25rem) / 1.5)",
    // 1.5rem by default
    "--CircularProgress-size": "20px",
    "--CircularProgress-thickness": "2px",
    minWidth: "var(--IconButton-size, 2.25rem)",
    minHeight: "var(--IconButton-size, 2.25rem)",
    fontSize: theme.vars.fontSize.md,
    paddingInline: "0.25rem"
  }, ownerState.size === "lg" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2.75rem) / 1.571)",
    // 1.75rem by default
    "--CircularProgress-size": "28px",
    "--CircularProgress-thickness": "4px",
    minWidth: "var(--IconButton-size, 2.75rem)",
    minHeight: "var(--IconButton-size, 2.75rem)",
    fontSize: theme.vars.fontSize.lg,
    paddingInline: "0.375rem"
  }, {
    WebkitTapHighlightColor: "transparent",
    paddingBlock: 0,
    fontFamily: theme.vars.fontFamily.body,
    fontWeight: theme.vars.fontWeight.md,
    margin: `var(--IconButton-margin)`,
    // to be controlled by other components, e.g. Input
    borderRadius: `var(--IconButton-radius, ${theme.vars.radius.sm})`,
    // to be controlled by other components, e.g. Input
    border: "none",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [theme.focus.selector]: _extends({
      "--Icon-color": "currentColor"
    }, theme.focus.default)
  }), _extends({}, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
    "&:hover": {
      "@media (hover: hover)": _extends({
        "--Icon-color": "currentColor"
      }, (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color])
    },
    '&:active, &[aria-pressed="true"]': _extends({
      "--Icon-color": "currentColor"
    }, (_theme$variants3 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants3[ownerState.color]),
    "&:disabled": (_theme$variants4 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants4[ownerState.color]
  })];
});
var IconButtonRoot = styled_default(StyledIconButton, {
  name: "JoyIconButton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var IconButton = React6.forwardRef(function IconButton2(inProps, ref) {
  var _inProps$disabled;
  const props = useThemeProps({
    props: inProps,
    name: "JoyIconButton"
  });
  const {
    children,
    action,
    component = "button",
    color: colorProp = "neutral",
    disabled: disabledProp,
    variant: variantProp = "plain",
    size: sizeProp = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const buttonGroup = React6.useContext(ButtonGroupContext_default);
  const toggleButtonGroup = React6.useContext(ToggleButtonGroupContext_default);
  const variant = inProps.variant || buttonGroup.variant || variantProp;
  const size = inProps.size || buttonGroup.size || sizeProp;
  const color = inProps.color || buttonGroup.color || colorProp;
  const disabled = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : buttonGroup.disabled || disabledProp;
  const buttonRef = React6.useRef(null);
  const handleRef = useForkRef(buttonRef, ref);
  const {
    focusVisible,
    setFocusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    disabled,
    rootRef: handleRef
  }));
  React6.useImperativeHandle(action, () => ({
    focusVisible: () => {
      var _buttonRef$current;
      setFocusVisible(true);
      (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    component,
    color,
    disabled,
    variant,
    size,
    focusVisible,
    instanceSize: inProps.size
  });
  const classes = useUtilityClasses2(ownerState);
  const handleClick = (event) => {
    var _onClick;
    let onClick = props.onClick;
    if (typeof slotProps.root === "function") {
      onClick = slotProps.root(ownerState).onClick;
    } else if (slotProps.root) {
      onClick = slotProps.root.onClick;
    }
    (_onClick = onClick) == null || _onClick(event);
    if (toggleButtonGroup) {
      var _toggleButtonGroup$on;
      (_toggleButtonGroup$on = toggleButtonGroup.onClick) == null || _toggleButtonGroup$on.call(toggleButtonGroup, event, props.value);
    }
  };
  let ariaPressed = props["aria-pressed"];
  if (typeof slotProps.root === "function") {
    ariaPressed = slotProps.root(ownerState)["aria-pressed"];
  } else if (slotProps.root) {
    ariaPressed = slotProps.root["aria-pressed"];
  }
  if (toggleButtonGroup != null && toggleButtonGroup.value) {
    if (Array.isArray(toggleButtonGroup.value)) {
      ariaPressed = toggleButtonGroup.value.indexOf(props.value) !== -1;
    } else {
      ariaPressed = toggleButtonGroup.value === props.value;
    }
  }
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: IconButtonRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      onClick: handleClick,
      "aria-pressed": ariaPressed
    }
  });
  return (0, import_jsx_runtime7.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? IconButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.shape({
    current: import_prop_types2.default.shape({
      focusVisible: import_prop_types2.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types2.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types2.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types2.default.string,
  /**
   * @ignore
   */
  onClick: import_prop_types2.default.func,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["sm", "md", "lg"]), import_prop_types2.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    root: import_prop_types2.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types2.default.number,
  /**
   * @ignore
   */
  value: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.string), import_prop_types2.default.number, import_prop_types2.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types2.default.string])
} : void 0;
IconButton.muiName = "IconButton";
var IconButton_default = IconButton;

// node_modules/@mui/joy/Chip/Chip.js
var React8 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/joy/styles/styleUtils.js
var resolveSxValue = ({
  theme,
  ownerState
}, keys) => {
  let sxObject = {};
  function resolveSx(sxProp) {
    if (typeof sxProp === "function") {
      const result = sxProp(theme);
      resolveSx(result);
    } else if (Array.isArray(sxProp)) {
      sxProp.forEach((sxItem) => {
        if (typeof sxItem !== "boolean") {
          resolveSx(sxItem);
        }
      });
    } else if (typeof sxProp === "object") {
      sxObject = _extends({}, sxObject, sxProp);
    }
  }
  if (ownerState.sx) {
    resolveSx(ownerState.sx);
    keys.forEach((key) => {
      const value = sxObject[key];
      if (typeof value === "string" || typeof value === "number") {
        if (key === "borderRadius") {
          if (typeof value === "number") {
            sxObject[key] = `${value}px`;
          } else {
            var _theme$vars;
            sxObject[key] = ((_theme$vars = theme.vars) == null ? void 0 : _theme$vars.radius[value]) || value;
          }
        } else if (["p", "padding", "m", "margin"].indexOf(key) !== -1 && typeof value === "number") {
          sxObject[key] = theme.spacing(value);
        } else {
          sxObject[key] = value;
        }
      } else if (typeof value === "function") {
        sxObject[key] = value(theme);
      } else {
        sxObject[key] = void 0;
      }
    });
  }
  return sxObject;
};

// node_modules/@mui/joy/Chip/chipClasses.js
function getChipUtilityClass(slot) {
  return generateUtilityClass("MuiChip", slot);
}
var chipClasses = generateUtilityClasses("MuiChip", ["root", "clickable", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "disabled", "endDecorator", "focusVisible", "label", "labelSm", "labelMd", "labelLg", "sizeSm", "sizeMd", "sizeLg", "startDecorator", "variantPlain", "variantSolid", "variantSoft", "variantOutlined"]);
var chipClasses_default = chipClasses;

// node_modules/@mui/joy/Chip/ChipContext.js
var React7 = __toESM(require_react());
var ChipColorContext = React7.createContext({
  disabled: void 0,
  variant: void 0,
  color: void 0
});
var ChipContext_default = ChipColorContext;

// node_modules/@mui/joy/Chip/Chip.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded3 = ["children", "className", "color", "onClick", "disabled", "size", "variant", "startDecorator", "endDecorator", "component", "slots", "slotProps"];
var useUtilityClasses3 = (ownerState) => {
  const {
    disabled,
    size,
    color,
    clickable,
    variant,
    focusVisible
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", color && `color${capitalize(color)}`, size && `size${capitalize(size)}`, variant && `variant${capitalize(variant)}`, clickable && "clickable"],
    action: ["action", disabled && "disabled", focusVisible && "focusVisible"],
    label: ["label", size && `label${capitalize(size)}`],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getChipUtilityClass, {});
};
var ChipRoot = styled_default("div", {
  name: "JoyChip",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2, _theme$variants3;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  const {
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["borderRadius"]);
  return [_extends({
    // for controlling chip delete margin offset
    "--Chip-decoratorChildOffset": "min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))",
    "--Chip-decoratorChildRadius": "max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))",
    "--Chip-deleteRadius": "var(--Chip-decoratorChildRadius)",
    "--Chip-deleteSize": "var(--Chip-decoratorChildHeight)",
    "--Avatar-radius": "var(--Chip-decoratorChildRadius)",
    "--Avatar-size": "var(--Chip-decoratorChildHeight)",
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": "currentColor",
    "--unstable_actionRadius": "var(--_Chip-radius)"
  }, ownerState.size === "sm" && {
    "--Chip-paddingInline": "0.375rem",
    "--Chip-decoratorChildHeight": "calc(var(--_Chip-minHeight) - 2 * var(--variant-borderWidth))",
    "--Icon-fontSize": theme.vars.fontSize.sm,
    "--_Chip-minHeight": "var(--Chip-minHeight, 1.25rem)",
    // 20px
    gap: "3px"
  }, ownerState.size === "md" && {
    "--Chip-paddingInline": "0.5rem",
    "--Chip-decoratorChildHeight": "calc(var(--_Chip-minHeight) - 0.25rem - 2 * var(--variant-borderWidth))",
    "--Icon-fontSize": theme.vars.fontSize.md,
    "--_Chip-minHeight": "var(--Chip-minHeight, 1.5rem)",
    // 26px
    gap: "0.25rem"
  }, ownerState.size === "lg" && {
    "--Chip-paddingInline": "0.75rem",
    "--Chip-decoratorChildHeight": "calc(var(--_Chip-minHeight) - 0.375rem - 2 * var(--variant-borderWidth))",
    "--Icon-fontSize": theme.vars.fontSize.lg,
    "--_Chip-minHeight": "var(--Chip-minHeight, 1.75rem)",
    // 28px
    gap: "0.375rem"
  }, {
    "--_Chip-radius": "var(--Chip-radius, 1.5rem)",
    "--_Chip-paddingBlock": "max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)",
    minHeight: "var(--_Chip-minHeight)",
    maxWidth: "max-content",
    // to prevent Chip from stretching to full width when used with flexbox
    paddingInline: "var(--Chip-paddingInline)",
    borderRadius: "var(--_Chip-radius)",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    textDecoration: "none",
    verticalAlign: "middle",
    boxSizing: "border-box"
  }, theme.typography[`body-${{
    sm: "xs",
    md: "sm",
    lg: "md"
  }[ownerState.size]}`], {
    fontWeight: theme.vars.fontWeight.md,
    [`&.${chipClasses_default.disabled}`]: {
      color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
    }
  }), ...!ownerState.clickable ? [_extends({
    backgroundColor: theme.vars.palette.background.surface
  }, variantStyle, {
    [`&.${chipClasses_default.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color]
  })] : [{
    "--variant-borderWidth": "0px",
    color: variantStyle == null ? void 0 : variantStyle.color
  }], borderRadius !== void 0 && {
    "--_Chip-radius": borderRadius
  }];
});
var ChipLabel = styled_default("span", {
  name: "JoyChip",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label
})(({
  ownerState
}) => _extends({
  display: "inline-block",
  overflow: "hidden",
  textOverflow: "ellipsis",
  order: 1,
  minInlineSize: 0,
  flexGrow: 1
}, ownerState.clickable && {
  zIndex: 1,
  pointerEvents: "none"
}));
var ChipAction = styled_default("button", {
  name: "JoyChip",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})(({
  theme,
  ownerState
}) => {
  var _theme$variants4, _theme$variants5, _theme$variants6, _theme$variants7;
  return [{
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    position: "absolute",
    zIndex: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    // To fix Firefox issue (https://github.com/mui/material-ui/issues/36877)
    border: "none",
    cursor: "pointer",
    padding: "initial",
    margin: "initial",
    backgroundColor: "initial",
    textDecoration: "none",
    borderRadius: "inherit",
    [theme.focus.selector]: theme.focus.default
  }, _extends({
    backgroundColor: theme.vars.palette.background.surface
  }, (_theme$variants4 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants4[ownerState.color]), {
    "&:hover": {
      "@media (hover: hover)": (_theme$variants5 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants5[ownerState.color]
    }
  }, {
    "&:active": (_theme$variants6 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants6[ownerState.color]
  }, {
    [`&.${chipClasses_default.disabled}`]: (_theme$variants7 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants7[ownerState.color]
  }];
});
var ChipStartDecorator = styled_default("span", {
  name: "JoyChip",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  "--Avatar-marginInlineStart": "calc(var(--Chip-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 calc(-1 * var(--Chip-paddingInline) / 3) 0 calc(var(--Chip-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Chip-paddingInline) / -4)",
  display: "inherit",
  // set zIndex to 1 with order to stay on top of other controls, e.g. Checkbox, Radio
  order: 0,
  zIndex: 1,
  pointerEvents: "none"
});
var ChipEndDecorator = styled_default("span", {
  name: "JoyChip",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  "--IconButton-margin": "0 calc(var(--Chip-decoratorChildOffset) * -1) 0 calc(-1 * var(--Chip-paddingInline) / 3)",
  "--Icon-margin": "0 calc(var(--Chip-paddingInline) / -4) 0 0",
  display: "inherit",
  // set zIndex to 1 with order to stay on top of other controls, e.g. Checkbox, Radio
  order: 2,
  zIndex: 1,
  pointerEvents: "none"
});
var Chip = React8.forwardRef(function Chip2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyChip"
  });
  const {
    children,
    className,
    color = "neutral",
    onClick,
    disabled = false,
    size = "md",
    variant = "soft",
    startDecorator,
    endDecorator,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const clickable = !!onClick || !!slotProps.action;
  const ownerState = _extends({}, props, {
    disabled,
    size,
    color,
    variant,
    clickable,
    focusVisible: false
  });
  const resolvedActionProps = typeof slotProps.action === "function" ? slotProps.action(ownerState) : slotProps.action;
  const actionRef = React8.useRef(null);
  const {
    focusVisible,
    getRootProps
  } = useButton(_extends({}, resolvedActionProps, {
    disabled,
    rootRef: actionRef
  }));
  ownerState.focusVisible = focusVisible;
  const classes = useUtilityClasses3(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ChipRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotLabel, labelProps] = useSlot("label", {
    className: classes.label,
    elementType: ChipLabel,
    externalForwardedProps,
    ownerState
  });
  const id = useId(labelProps.id);
  const [SlotAction, actionProps] = useSlot("action", {
    className: classes.action,
    elementType: ChipAction,
    externalForwardedProps,
    ownerState,
    getSlotProps: getRootProps,
    additionalProps: {
      "aria-labelledby": id,
      as: resolvedActionProps == null ? void 0 : resolvedActionProps.component,
      onClick
    }
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: ChipStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: ChipEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const chipContextValue = React8.useMemo(() => ({
    disabled
  }), [disabled]);
  return (0, import_jsx_runtime8.jsx)(ChipContext_default.Provider, {
    value: chipContextValue,
    children: (0, import_jsx_runtime8.jsx)(VariantColorProvider, {
      variant,
      color,
      children: (0, import_jsx_runtime9.jsxs)(SlotRoot, _extends({}, rootProps, {
        children: [clickable && (0, import_jsx_runtime8.jsx)(SlotAction, _extends({}, actionProps)), (0, import_jsx_runtime8.jsx)(SlotLabel, _extends({}, labelProps, {
          id,
          children
        })), startDecorator && (0, import_jsx_runtime8.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
          children: startDecorator
        })), endDecorator && (0, import_jsx_runtime8.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
          children: endDecorator
        }))]
      }))
    })
  });
});
true ? Chip.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types3.default.node,
  /**
   * @ignore
   */
  className: import_prop_types3.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types3.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types3.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types3.default.bool,
  /**
   * Element placed after the children.
   */
  endDecorator: import_prop_types3.default.node,
  /**
   * Element action click handler.
   */
  onClick: import_prop_types3.default.func,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["lg", "md", "sm"]), import_prop_types3.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types3.default.shape({
    action: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]),
    endDecorator: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]),
    label: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]),
    root: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]),
    startDecorator: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types3.default.shape({
    action: import_prop_types3.default.elementType,
    endDecorator: import_prop_types3.default.elementType,
    label: import_prop_types3.default.elementType,
    root: import_prop_types3.default.elementType,
    startDecorator: import_prop_types3.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: import_prop_types3.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types3.default.string])
} : void 0;
var Chip_default = Chip;

// node_modules/@mui/joy/ChipDelete/ChipDelete.js
var React10 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@mui/joy/internal/svg-icons/Cancel.js
var React9 = __toESM(require_react());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var Cancel_default = createSvgIcon((0, import_jsx_runtime10.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Cancel");

// node_modules/@mui/joy/ChipDelete/chipDeleteClasses.js
function getChipDeleteUtilityClass(slot) {
  return generateUtilityClass("MuiChipDelete", slot);
}
var chipDeleteClasses = generateUtilityClasses("MuiChipDelete", ["root", "disabled", "focusVisible", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSolid", "variantSoft", "variantOutlined"]);
var chipDeleteClasses_default = chipDeleteClasses;

// node_modules/@mui/joy/ChipDelete/ChipDelete.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _Cancel;
var _excluded4 = ["children", "variant", "color", "disabled", "onKeyDown", "onDelete", "onClick", "component", "slots", "slotProps"];
var _excluded22 = ["onDelete"];
var useUtilityClasses4 = (ownerState) => {
  const {
    focusVisible,
    variant,
    color,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getChipDeleteUtilityClass, {});
};
var ChipDeleteRoot = styled_default(StyledIconButton, {
  name: "JoyChipDelete",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  "--IconButton-size": "var(--Chip-deleteSize, 2rem)",
  "--Icon-fontSize": "calc(var(--IconButton-size, 2rem) / 1.3)",
  minWidth: "var(--IconButton-size, 2rem)",
  // use min-width instead of height to make the button resilient to its content
  minHeight: "var(--IconButton-size, 2rem)",
  // use min-height instead of height to make the button resilient to its content
  fontSize: theme.vars.fontSize.sm,
  paddingInline: "2px",
  // add a gap, in case the content is long, e.g. multiple icons
  pointerEvents: "visible",
  // force the ChipDelete to be hoverable because the decorator can have pointerEvents 'none'
  borderRadius: "var(--Chip-deleteRadius, 50%)",
  zIndex: 1,
  // overflow above sibling button or anchor
  padding: 0
  // reset user agent stylesheet
}));
var ChipDelete = React10.forwardRef(function ChipDelete2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyChipDelete"
  });
  const {
    children,
    variant: variantProp = "plain",
    color: colorProp = "neutral",
    disabled: disabledProp,
    onKeyDown,
    onDelete,
    onClick,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const chipContext = React10.useContext(ChipContext_default);
  const {
    variant = variantProp,
    color: inheritedColor = colorProp
  } = useVariantColor(inProps.variant, inProps.color, true);
  const color = inProps.color || inheritedColor;
  const disabled = disabledProp != null ? disabledProp : chipContext.disabled;
  const buttonRef = React10.useRef(null);
  const handleRef = useForkRef(buttonRef, ref);
  const {
    focusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    disabled,
    rootRef: handleRef
  }));
  const ownerState = _extends({}, props, {
    disabled,
    variant,
    color,
    focusVisible
  });
  const classes = useUtilityClasses4(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const handleClickDelete = (event) => {
    if (!disabled && onDelete) {
      onDelete(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const handleKeyDelete = (event) => {
    if (["Backspace", "Enter", "Delete"].includes(event.key)) {
      event.preventDefault();
      if (!disabled && onDelete) {
        onDelete(event);
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    elementType: ChipDeleteRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      onKeyDown: handleKeyDelete,
      onClick: handleClickDelete
    },
    className: classes.root
  });
  const restOfRootProps = _objectWithoutPropertiesLoose(rootProps, _excluded22);
  return (0, import_jsx_runtime11.jsx)(SlotRoot, _extends({}, restOfRootProps, {
    children: children != null ? children : _Cancel || (_Cancel = (0, import_jsx_runtime11.jsx)(Cancel_default, {}))
  }));
});
true ? ChipDelete.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If provided, it will replace the default icon.
   */
  children: import_prop_types4.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types4.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types4.default.elementType,
  /**
   * If `true`, the component is disabled.
   * If `undefined`, the value inherits from the parent chip via a React context.
   */
  disabled: import_prop_types4.default.bool,
  /**
   * @ignore
   */
  onClick: import_prop_types4.default.func,
  /**
   * Callback fired when the component is not disabled and either:
   * - `Backspace`, `Enter` or `Delete` is pressed.
   * - The component is clicked.
   */
  onDelete: import_prop_types4.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types4.default.func,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types4.default.shape({
    root: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types4.default.shape({
    root: import_prop_types4.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types4.default.oneOfType([import_prop_types4.default.arrayOf(import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object, import_prop_types4.default.bool])), import_prop_types4.default.func, import_prop_types4.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types4.default.oneOfType([import_prop_types4.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types4.default.string])
} : void 0;
var ChipDelete_default = ChipDelete;

// node_modules/@mui/joy/List/List.js
var React18 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/joy/List/listClasses.js
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
var listClasses = generateUtilityClasses("MuiList", ["root", "nesting", "scoped", "sizeSm", "sizeMd", "sizeLg", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "horizontal", "vertical"]);
var listClasses_default = listClasses;

// node_modules/@mui/joy/List/NestedListContext.js
var React11 = __toESM(require_react());
var NestedListContext = React11.createContext(false);
var NestedListContext_default = NestedListContext;

// node_modules/@mui/joy/List/ComponentListContext.js
var React12 = __toESM(require_react());
var ComponentListContext = React12.createContext(void 0);
var ComponentListContext_default = ComponentListContext;

// node_modules/@mui/joy/List/GroupListContext.js
var React13 = __toESM(require_react());
var GroupListContext = React13.createContext(void 0);
var GroupListContext_default = GroupListContext;

// node_modules/@mui/joy/List/ListProvider.js
var React16 = __toESM(require_react());

// node_modules/@mui/joy/List/RowListContext.js
var React14 = __toESM(require_react());
var RowListContext = React14.createContext(false);
var RowListContext_default = RowListContext;

// node_modules/@mui/joy/List/WrapListContext.js
var React15 = __toESM(require_react());
var WrapListContext = React15.createContext(false);
var WrapListContext_default = WrapListContext;

// node_modules/@mui/joy/List/ListProvider.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var scopedVariables = {
  "--NestedList-marginRight": "0px",
  "--NestedList-marginLeft": "0px",
  "--NestedListItem-paddingLeft": "var(--ListItem-paddingX)",
  // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
  "--ListItemButton-marginBlock": "0px",
  "--ListItemButton-marginInline": "0px",
  "--ListItem-marginBlock": "0px",
  "--ListItem-marginInline": "0px"
};
function ListProvider(props) {
  const {
    children,
    nested,
    row = false,
    wrap = false
  } = props;
  const baseProviders = (0, import_jsx_runtime12.jsx)(RowListContext_default.Provider, {
    value: row,
    children: (0, import_jsx_runtime12.jsx)(WrapListContext_default.Provider, {
      value: wrap,
      children: React16.Children.map(children, (child, index) => React16.isValidElement(child) ? React16.cloneElement(child, _extends({}, index === 0 && {
        "data-first-child": ""
      }, index === React16.Children.count(children) - 1 && {
        "data-last-child": ""
      })) : child)
    })
  });
  if (nested === void 0) {
    return baseProviders;
  }
  return (0, import_jsx_runtime12.jsx)(NestedListContext_default.Provider, {
    value: nested,
    children: baseProviders
  });
}
var ListProvider_default = ListProvider;

// node_modules/@mui/joy/RadioGroup/RadioGroupContext.js
var React17 = __toESM(require_react());
var RadioGroupContext = React17.createContext(void 0);
if (true) {
  RadioGroupContext.displayName = "RadioGroupContext";
}
var RadioGroupContext_default = RadioGroupContext;

// node_modules/@mui/joy/List/List.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded5 = ["component", "className", "children", "size", "orientation", "wrap", "variant", "color", "role", "slots", "slotProps"];
var useUtilityClasses5 = (ownerState) => {
  const {
    variant,
    color,
    size,
    nesting,
    orientation,
    instanceSize
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, !instanceSize && !nesting && size && `size${capitalize(size)}`, instanceSize && `size${capitalize(instanceSize)}`, nesting && "nesting"]
  };
  return composeClasses(slots, getListUtilityClass, {});
};
var StyledList = styled_default("ul")(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const {
    p,
    padding,
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["p", "padding", "borderRadius"]);
  function applySizeVars(size) {
    if (size === "sm") {
      return {
        "--ListDivider-gap": "0.25rem",
        "--ListItem-minHeight": "2rem",
        "--ListItem-paddingY": "3px",
        "--ListItem-paddingX": ownerState.marker ? "3px" : "0.5rem",
        "--ListItem-gap": "0.5rem",
        "--ListItemDecorator-size": ownerState.orientation === "horizontal" ? "1.5rem" : "2rem",
        "--Icon-fontSize": theme.vars.fontSize.lg
      };
    }
    if (size === "md") {
      return {
        "--ListDivider-gap": "0.375rem",
        "--ListItem-minHeight": "2.25rem",
        "--ListItem-paddingY": "0.25rem",
        "--ListItem-paddingX": ownerState.marker ? "0.25rem" : "0.75rem",
        "--ListItem-gap": "0.625rem",
        "--ListItemDecorator-size": ownerState.orientation === "horizontal" ? "1.75rem" : "2.5rem",
        "--Icon-fontSize": theme.vars.fontSize.xl
      };
    }
    if (size === "lg") {
      return {
        "--ListDivider-gap": "0.5rem",
        "--ListItem-minHeight": "2.75rem",
        "--ListItem-paddingY": "0.375rem",
        "--ListItem-paddingX": ownerState.marker ? "0.5rem" : "1rem",
        "--ListItem-gap": "0.75rem",
        "--ListItemDecorator-size": ownerState.orientation === "horizontal" ? "2.25rem" : "3rem",
        "--Icon-fontSize": theme.vars.fontSize.xl2
      };
    }
    return {};
  }
  return [ownerState.nesting && _extends({}, applySizeVars(ownerState.instanceSize), {
    "--ListItem-paddingRight": "var(--ListItem-paddingX)",
    "--ListItem-paddingLeft": "var(--NestedListItem-paddingLeft)",
    // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
    "--ListItemButton-marginBlock": "0px",
    "--ListItemButton-marginInline": "0px",
    "--ListItem-marginBlock": "0px",
    "--ListItem-marginInline": "0px",
    padding: 0
  }, ownerState.marker && {
    paddingInlineStart: "calc(3ch - var(--_List-markerDeduct, 0px))"
    // the width of the marker
  }, {
    marginInlineStart: "var(--NestedList-marginLeft)",
    marginInlineEnd: "var(--NestedList-marginRight)",
    marginBlockStart: "var(--List-gap)",
    marginBlockEnd: "initial"
    // reset user agent stylesheet.
  }), !ownerState.nesting && _extends({}, applySizeVars(ownerState.size), {
    "--List-gap": "0px",
    "--List-nestedInsetStart": "0px",
    "--ListItem-paddingLeft": "var(--ListItem-paddingX)",
    "--ListItem-paddingRight": "var(--ListItem-paddingX)"
  }, ownerState.marker && {
    "--_List-markerDeduct": "1ch"
  }, {
    // Automatic radius adjustment kicks in only if '--List-padding' and '--List-radius' are provided.
    "--unstable_List-childRadius": "calc(max(var(--List-radius) - var(--List-padding), min(var(--List-padding) / 2, var(--List-radius) / 2)) - var(--variant-borderWidth, 0px))",
    "--ListItem-radius": "var(--unstable_List-childRadius)",
    // by default, The ListItem & ListItemButton use automatic radius adjustment based on the parent List.
    "--ListItem-startActionTranslateX": "calc(0.5 * var(--ListItem-paddingLeft))",
    "--ListItem-endActionTranslateX": "calc(-0.5 * var(--ListItem-paddingRight))",
    margin: "initial"
  }, theme.typography[`body-${ownerState.size}`], ownerState.orientation === "horizontal" ? _extends({}, ownerState.wrap ? {
    padding: "var(--List-padding)",
    // Fallback is not needed for row-wrap List
    marginInlineStart: "calc(-1 * var(--List-gap))",
    marginBlockStart: "calc(-1 * var(--List-gap))"
  } : {
    paddingInline: "var(--List-padding, var(--ListDivider-gap))",
    paddingBlock: "var(--List-padding)"
  }) : {
    paddingBlock: "var(--List-padding, var(--ListDivider-gap))",
    paddingInline: "var(--List-padding)"
  }, ownerState.marker && {
    paddingInlineStart: "3ch"
    // the width of the marker
  }), _extends({
    boxSizing: "border-box",
    borderRadius: "var(--List-radius)",
    listStyle: "none",
    display: "flex",
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, ownerState.wrap && {
    flexWrap: "wrap"
  }, ownerState.marker && {
    "--_List-markerDisplay": "list-item",
    "--_List-markerType": ownerState.marker,
    lineHeight: "calc(var(--ListItem-minHeight) - 2 * var(--ListItem-paddingY))"
  }, {
    flexGrow: 1,
    position: "relative"
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
    "--unstable_List-borderWidth": "var(--variant-borderWidth, 0px)"
  }, borderRadius !== void 0 && {
    "--List-radius": borderRadius
  }, p !== void 0 && {
    "--List-padding": p
  }, padding !== void 0 && {
    "--List-padding": padding
  })];
});
var ListRoot = styled_default(StyledList, {
  name: "JoyList",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var List = React18.forwardRef(function List2(inProps, ref) {
  var _inProps$size;
  const nesting = React18.useContext(NestedListContext_default);
  const group = React18.useContext(GroupListContext_default);
  const radioGroupContext = React18.useContext(RadioGroupContext_default);
  const props = useThemeProps({
    props: inProps,
    name: "JoyList"
  });
  const {
    component,
    className,
    children,
    size: sizeProp,
    orientation = "vertical",
    wrap = false,
    variant = "plain",
    color = "neutral",
    role: roleProp,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const size = sizeProp || ((_inProps$size = inProps.size) != null ? _inProps$size : "md");
  let role;
  if (group) {
    role = "group";
  }
  if (radioGroupContext) {
    role = "presentation";
  }
  if (roleProp) {
    role = roleProp;
  }
  const ownerState = _extends({}, props, {
    instanceSize: inProps.size,
    size,
    nesting,
    orientation,
    wrap,
    variant,
    color,
    role
  });
  const classes = useUtilityClasses5(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      role,
      "aria-labelledby": typeof nesting === "string" ? nesting : void 0
    }
  });
  return (0, import_jsx_runtime13.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime13.jsx)(ComponentListContext_default.Provider, {
      value: `${typeof component === "string" ? component : ""}:${role || ""}`,
      children: (0, import_jsx_runtime13.jsx)(ListProvider_default, {
        row: orientation === "horizontal",
        wrap,
        children
      })
    })
  }));
});
true ? List.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types5.default.node,
  /**
   * @ignore
   */
  className: import_prop_types5.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types5.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types5.default.elementType,
  /**
   * The marker (such as a disc, character, or custom counter style) of the list items.
   * When this prop is specified, the List Item changes the CSS display to `list-item` in order to apply the marker.
   *
   * To see all available options, check out the [MDN list-style-type page](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type).
   */
  marker: import_prop_types5.default.string,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types5.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types5.default.string,
  /**
   * The size of the component (affect other nested list* components).
   * @default 'md'
   */
  size: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["sm", "md", "lg"]), import_prop_types5.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types5.default.shape({
    root: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types5.default.shape({
    root: import_prop_types5.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types5.default.string]),
  /**
   * Only for horizontal list.
   * If `true`, the list sets the flex-wrap to "wrap" and adjust margin to have gap-like behavior (will move to `gap` in the future).
   *
   * @default false
   */
  wrap: import_prop_types5.default.bool
} : void 0;
var List_default = List;

// node_modules/@mui/joy/ListSubheader/ListSubheader.js
var React20 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/joy/ListSubheader/listSubheaderClasses.js
function getListSubheaderUtilityClass(slot) {
  return generateUtilityClass("MuiListSubheader", slot);
}
var listSubheaderClasses = generateUtilityClasses("MuiListSubheader", ["root", "sticky", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]);
var listSubheaderClasses_default = listSubheaderClasses;

// node_modules/@mui/joy/ListSubheader/ListSubheaderContext.js
var React19 = __toESM(require_react());
var ListSubheaderDispatch = React19.createContext(void 0);
var ListSubheaderContext_default = ListSubheaderDispatch;

// node_modules/@mui/joy/ListSubheader/ListSubheader.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded6 = ["component", "className", "children", "id", "sticky", "variant", "color", "slots", "slotProps"];
var useUtilityClasses6 = (ownerState) => {
  const {
    variant,
    color,
    sticky
  } = ownerState;
  const slots = {
    root: ["root", sticky && "sticky", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`]
  };
  return composeClasses(slots, getListSubheaderUtilityClass, {});
};
var ListSubheaderRoot = styled_default("div", {
  name: "JoyListSubheader",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$palette, _theme$variants;
  return _extends({
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    marginInline: "var(--ListItem-marginInline)",
    paddingBlock: "var(--ListItem-paddingY)",
    paddingInlineStart: "var(--ListItem-paddingLeft)",
    paddingInlineEnd: "var(--ListItem-paddingRight)",
    minBlockSize: "var(--ListItem-minHeight)"
  }, theme.typography["body-xs"], {
    fontSize: "max(0.75em, 0.625rem)",
    textTransform: "uppercase",
    letterSpacing: "0.1em"
  }, ownerState.sticky && {
    position: "sticky",
    top: "var(--ListItem-stickyTop, 0px)",
    // integration with Menu and Select.
    zIndex: 1,
    background: "var(--ListItem-stickyBackground)"
  }, {
    color: ownerState.color ? `var(--_Link-color, rgba(${(_theme$vars$palette = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / 1))` : theme.vars.palette.text.tertiary
  }, ownerState.instanceColor && {
    [`&:not([${INVERTED_COLORS_ATTR}])`]: {
      "--_Link-color": theme.vars.palette.text.secondary
    }
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var ListSubheader = React20.forwardRef(function ListSubheader2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyListSubheader"
  });
  const {
    component,
    className,
    children,
    id: idOverride,
    sticky = false,
    variant,
    color,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const id = useId(idOverride);
  const setSubheaderId = React20.useContext(ListSubheaderContext_default);
  React20.useEffect(() => {
    if (setSubheaderId) {
      setSubheaderId(id || "");
    }
  }, [setSubheaderId, id]);
  const ownerState = _extends({
    instanceColor: inProps.color
  }, props, {
    id,
    sticky,
    variant,
    color: variant ? color != null ? color : "neutral" : color
  });
  const classes = useUtilityClasses6(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListSubheaderRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      id
    }
  });
  return (0, import_jsx_runtime14.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? ListSubheader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types6.default.node,
  /**
   * @ignore
   */
  className: import_prop_types6.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types6.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types6.default.elementType,
  /**
   * @ignore
   */
  id: import_prop_types6.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types6.default.shape({
    root: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types6.default.shape({
    root: import_prop_types6.default.elementType
  }),
  /**
   * If `true`, the component has sticky position (with top = 0).
   * @default false
   */
  sticky: import_prop_types6.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   */
  variant: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types6.default.string])
} : void 0;
var ListSubheader_default = ListSubheader;

// node_modules/@mui/joy/ListItem/ListItem.js
var React21 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());

// node_modules/@mui/joy/ListItem/listItemClasses.js
function getListItemUtilityClass(slot) {
  return generateUtilityClass("MuiListItem", slot);
}
var listItemClasses = generateUtilityClasses("MuiListItem", ["root", "startAction", "endAction", "nested", "nesting", "sticky", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]);
var listItemClasses_default = listItemClasses;

// node_modules/@mui/joy/ListItem/ListItem.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var _excluded7 = ["component", "className", "children", "nested", "sticky", "variant", "color", "startAction", "endAction", "role", "slots", "slotProps"];
var useUtilityClasses7 = (ownerState) => {
  const {
    sticky,
    nested,
    nesting,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", nested && "nested", nesting && "nesting", sticky && "sticky", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`],
    startAction: ["startAction"],
    endAction: ["endAction"]
  };
  return composeClasses(slots, getListItemUtilityClass, {});
};
var StyledListItem = styled_default("li")(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  return [
    !ownerState.nested && {
      // add negative margin to ListItemButton equal to this ListItem padding
      "--ListItemButton-marginInline": `calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))`,
      "--ListItemButton-marginBlock": "calc(-1 * var(--ListItem-paddingY))",
      alignItems: "center",
      gap: "var(--ListItem-gap)",
      marginInline: "var(--ListItem-marginInline)"
    },
    ownerState.nested && {
      // add negative margin to NestedList equal to this ListItem padding
      "--NestedList-marginRight": "calc(-1 * var(--ListItem-paddingRight))",
      "--NestedList-marginLeft": "calc(-1 * var(--ListItem-paddingLeft))",
      "--NestedListItem-paddingLeft": `calc(var(--ListItem-paddingLeft) + var(--List-nestedInsetStart))`,
      // add negative margin to ListItem, ListItemButton to make them start from the edge.
      "--ListItemButton-marginBlock": "0px",
      "--ListItemButton-marginInline": "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
      "--ListItem-marginInline": "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
      flexDirection: "column"
    },
    // Base styles
    _extends({
      // Integration with control elements, e.g. Checkbox, Radio.
      "--unstable_actionRadius": "calc(var(--ListItem-radius) - var(--variant-borderWidth, 0px))"
    }, ownerState.startAction && {
      "--unstable_startActionWidth": "2rem"
      // to add sufficient padding-left on ListItemButton
    }, ownerState.endAction && {
      "--unstable_endActionWidth": "2.5rem"
      // to add sufficient padding-right on ListItemButton
    }, {
      boxSizing: "border-box",
      borderRadius: "var(--ListItem-radius)",
      display: "var(--_ListItem-display)",
      "&:not([hidden])": {
        "--_ListItem-display": "var(--_List-markerDisplay, flex)"
      },
      flex: "none",
      // prevent children from shrinking when the List's height is limited.
      listStyleType: "var(--_List-markerType, disc)",
      position: "relative",
      paddingBlockStart: ownerState.nested ? 0 : "var(--ListItem-paddingY)",
      paddingBlockEnd: ownerState.nested ? 0 : "var(--ListItem-paddingY)",
      paddingInlineStart: "var(--ListItem-paddingLeft)",
      paddingInlineEnd: "var(--ListItem-paddingRight)"
    }, ownerState["data-first-child"] === void 0 && _extends({}, ownerState.row ? {
      marginInlineStart: "var(--List-gap)"
    } : {
      marginBlockStart: "var(--List-gap)"
    }), ownerState.row && ownerState.wrap && {
      marginInlineStart: "var(--List-gap)",
      marginBlockStart: "var(--List-gap)"
    }, {
      minBlockSize: "var(--ListItem-minHeight)"
    }, ownerState.sticky && {
      // sticky in list item can be found in grouped options
      position: "sticky",
      top: "var(--ListItem-stickyTop, 0px)",
      // integration with Menu and Select.
      zIndex: 1,
      background: `var(--ListItem-stickyBackground, ${theme.vars.palette.background.body})`
    }, {
      [`.${listItemClasses_default.nested} > &`]: {
        "--_ListItem-display": "flex"
      }
    }),
    (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]
  ];
});
var ListItemRoot = styled_default(StyledListItem, {
  name: "JoyListItem",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var ListItemStartAction = styled_default("div", {
  name: "JoyListItem",
  slot: "StartAction",
  overridesResolver: (props, styles) => styles.startAction
})(({
  ownerState
}) => ({
  display: "inherit",
  position: "absolute",
  top: ownerState.nested ? "calc(var(--ListItem-minHeight) / 2)" : "50%",
  left: 0,
  transform: "translate(var(--ListItem-startActionTranslateX), -50%)",
  zIndex: 1
  // to stay on top of ListItemButton (default `position: relative`).
}));
var ListItemEndAction = styled_default("div", {
  name: "JoyListItem",
  slot: "StartAction",
  overridesResolver: (props, styles) => styles.startAction
})(({
  ownerState
}) => ({
  display: "inherit",
  position: "absolute",
  top: ownerState.nested ? "calc(var(--ListItem-minHeight) / 2)" : "50%",
  right: 0,
  transform: "translate(var(--ListItem-endActionTranslateX), -50%)"
}));
var ListItem = React21.forwardRef(function ListItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyListItem"
  });
  const group = React21.useContext(GroupListContext_default);
  const listComponent = React21.useContext(ComponentListContext_default);
  const row = React21.useContext(RowListContext_default);
  const wrap = React21.useContext(WrapListContext_default);
  const nesting = React21.useContext(NestedListContext_default);
  const {
    component: componentProp,
    className,
    children,
    nested = false,
    sticky = false,
    variant = "plain",
    color = "neutral",
    startAction,
    endAction,
    role: roleProp,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const [subheaderId, setSubheaderId] = React21.useState("");
  const [listElement, listRole] = (listComponent == null ? void 0 : listComponent.split(":")) || ["", ""];
  const component = componentProp || (listElement && !listElement.match(/^(ul|ol|menu)$/) ? "div" : void 0);
  let role = group === "menu" ? "none" : void 0;
  if (listComponent) {
    role = {
      menu: "none",
      menubar: "none",
      group: "presentation"
    }[listRole];
  }
  if (roleProp) {
    role = roleProp;
  }
  const ownerState = _extends({}, props, {
    sticky,
    startAction,
    endAction,
    row,
    wrap,
    variant,
    color,
    nesting,
    nested,
    component,
    role
  });
  const classes = useUtilityClasses7(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    additionalProps: {
      role
    },
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListItemRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartAction, startActionProps] = useSlot("startAction", {
    className: classes.startAction,
    elementType: ListItemStartAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndAction, endActionProps] = useSlot("endAction", {
    className: classes.endAction,
    elementType: ListItemEndAction,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime15.jsx)(ListSubheaderContext_default.Provider, {
    value: setSubheaderId,
    children: (0, import_jsx_runtime15.jsx)(NestedListContext_default.Provider, {
      value: nested ? subheaderId || true : false,
      children: (0, import_jsx_runtime16.jsxs)(SlotRoot, _extends({}, rootProps, {
        children: [startAction && (0, import_jsx_runtime15.jsx)(SlotStartAction, _extends({}, startActionProps, {
          children: startAction
        })), React21.Children.map(children, (child, index) => React21.isValidElement(child) ? React21.cloneElement(child, _extends({}, index === 0 && {
          "data-first-child": ""
        }, isMuiElement(child, ["ListItem"]) && {
          // The ListItem of ListItem should not be 'li'
          component: child.props.component || "div"
        })) : child), endAction && (0, import_jsx_runtime15.jsx)(SlotEndAction, _extends({}, endActionProps, {
          children: endAction
        }))]
      }))
    })
  });
});
true ? ListItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types7.default.node,
  /**
   * @ignore
   */
  className: import_prop_types7.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types7.default.oneOfType([import_prop_types7.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types7.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types7.default.elementType,
  /**
   * The element to display at the end of ListItem.
   */
  endAction: import_prop_types7.default.node,
  /**
   * If `true`, the component can contain NestedList.
   * @default false
   */
  nested: import_prop_types7.default.bool,
  /**
   * @ignore
   */
  role: import_prop_types7.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types7.default.shape({
    endAction: import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object]),
    root: import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object]),
    startAction: import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types7.default.shape({
    endAction: import_prop_types7.default.elementType,
    root: import_prop_types7.default.elementType,
    startAction: import_prop_types7.default.elementType
  }),
  /**
   * The element to display at the start of ListItem.
   */
  startAction: import_prop_types7.default.node,
  /**
   * If `true`, the component has sticky position (with top = 0).
   * @default false
   */
  sticky: import_prop_types7.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types7.default.oneOfType([import_prop_types7.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types7.default.string])
} : void 0;
ListItem.muiName = "ListItem";
var ListItem_default = ListItem;

// node_modules/@mui/joy/Autocomplete/autocompleteClasses.js
function getAutocompleteUtilityClass(slot) {
  return generateUtilityClass("MuiAutocomplete", slot);
}
var autocompleteClasses = generateUtilityClasses("MuiAutocomplete", ["root", "wrapper", "input", "startDecorator", "endDecorator", "formControl", "focused", "disabled", "error", "multiple", "limitTag", "hasPopupIcon", "hasClearIcon", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "listbox", "option", "loading", "noOptions", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var autocompleteClasses_default = autocompleteClasses;

// node_modules/@mui/joy/AutocompleteListbox/AutocompleteListbox.js
var React22 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/joy/AutocompleteListbox/autocompleteListboxClasses.js
function getAutocompleteListboxUtilityClass(slot) {
  return generateUtilityClass("MuiAutocompleteListbox", slot);
}
var autocompleteListboxClasses = generateUtilityClasses("MuiAutocompleteListbox", ["root", "sizeSm", "sizeMd", "sizeLg", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var autocompleteListboxClasses_default = autocompleteListboxClasses;

// node_modules/@mui/joy/AutocompleteListbox/AutocompleteListbox.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded8 = ["anchorEl", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "TransitionProps"];
var _excluded23 = ["children", "className", "component", "color", "variant", "size", "slots", "slotProps"];
var useUtilityClasses8 = (ownerState) => {
  const {
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getAutocompleteListboxUtilityClass, {});
};
var excludePopperProps = (_ref) => {
  let other = _objectWithoutPropertiesLoose(_ref, _excluded8);
  return other;
};
var StyledAutocompleteListbox = styled_default(StyledList)(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  return _extends({
    "--focus-outline-offset": `calc(${theme.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    "--ListItem-stickyBackground": (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.popup,
    "--ListItem-stickyTop": "calc(var(--List-padding, var(--ListDivider-gap)) * -1)"
  }, scopedVariables, {
    boxShadow: theme.shadow.md,
    borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`
  }, !(variantStyle != null && variantStyle.backgroundColor) && {
    backgroundColor: theme.vars.palette.background.popup
  }, {
    zIndex: theme.vars.zIndex.popup,
    overflow: "auto",
    maxHeight: "40vh",
    position: "relative",
    // to make sure that the listbox is positioned for grouped options to work.
    "&:empty": {
      visibility: "hidden"
    },
    [`& .${listItemClasses_default.nested}, & .${listItemClasses_default.nested} .${listClasses_default.root}`]: {
      // For grouped options autocomplete:
      // Force the position to make the scroll into view logic works because the `element.offsetTop` should reference to the listbox, not the grouped list.
      // See the implementation of the `useAutocomplete` line:370
      //
      // Resource: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
      position: "initial"
    }
  });
});
var AutocompleteListboxRoot = styled_default(StyledAutocompleteListbox, {
  name: "JoyAutocompleteListbox",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var AutocompleteListbox = React22.forwardRef(function AutocompleteListbox2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAutocompleteListbox"
  });
  const {
    children,
    className,
    component,
    color = "neutral",
    variant = "outlined",
    size = "md",
    slots = {},
    slotProps = {}
  } = props, otherProps = _objectWithoutPropertiesLoose(props, _excluded23);
  const ownerState = _extends({}, props, {
    size,
    color,
    variant,
    nesting: false,
    row: false,
    wrap: false
  });
  const other = excludePopperProps(otherProps);
  const classes = useUtilityClasses8(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: AutocompleteListboxRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      role: "listbox"
    }
  });
  return (0, import_jsx_runtime17.jsx)(VariantColorProvider, {
    variant,
    color,
    children: (0, import_jsx_runtime17.jsx)(SlotRoot, _extends({}, rootProps, {
      children
    }))
  });
});
true ? AutocompleteListbox.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types8.default.node,
  /**
   * @ignore
   */
  className: import_prop_types8.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types8.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types8.default.elementType,
  /**
   * The size of the component (affect other nested list* components).
   * @default 'md'
   */
  size: import_prop_types8.default.oneOf(["sm", "md", "lg"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types8.default.shape({
    root: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types8.default.shape({
    root: import_prop_types8.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["contained", "light", "outlined", "text"]), import_prop_types8.default.string])
} : void 0;
var AutocompleteListbox_default = AutocompleteListbox;

// node_modules/@mui/joy/AutocompleteOption/AutocompleteOption.js
var React25 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/joy/ListItemButton/ListItemButton.js
var React24 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/joy/ListItemButton/listItemButtonClasses.js
function getListItemButtonUtilityClass(slot) {
  return generateUtilityClass("MuiListItemButton", slot);
}
var listItemButtonClasses = generateUtilityClasses("MuiListItemButton", ["root", "horizontal", "vertical", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "focusVisible", "disabled", "selected", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]);
var listItemButtonClasses_default = listItemButtonClasses;

// node_modules/@mui/joy/ListItemButton/ListItemButtonOrientationContext.js
var React23 = __toESM(require_react());
var ListItemButtonOrientationContext = React23.createContext("horizontal");
var ListItemButtonOrientationContext_default = ListItemButtonOrientationContext;

// node_modules/@mui/joy/ListItemButton/ListItemButton.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded9 = ["children", "className", "action", "component", "orientation", "role", "selected", "color", "variant", "slots", "slotProps"];
var useUtilityClasses9 = (ownerState) => {
  const {
    color,
    disabled,
    focusVisible,
    focusVisibleClassName,
    selected,
    variant
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", color && `color${capitalize(color)}`, selected && "selected", variant && `variant${capitalize(variant)}`]
  };
  const composedClasses = composeClasses(slots, getListItemButtonUtilityClass, {});
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
var StyledListItemButton = styled_default("div")(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2, _theme$variants3, _theme$variants4, _theme$variants5, _theme$variants6;
  return _extends({
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    WebkitTapHighlightColor: "transparent",
    boxSizing: "border-box",
    position: "relative",
    font: "inherit",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    // always stretch itself to fill the parent (List|ListItem)
    gap: "var(--ListItem-gap)"
  }, ownerState.orientation === "vertical" && {
    flexDirection: "column",
    justifyContent: "center"
  }, {
    textAlign: "initial",
    textDecoration: "initial",
    // reset native anchor tag
    backgroundColor: "initial",
    // reset button background
    cursor: "pointer",
    // In some cases, ListItemButton is a child of ListItem so the margin needs to be controlled by the ListItem. The value is negative to account for the ListItem's padding
    marginInline: "var(--ListItemButton-marginInline)",
    marginBlock: "var(--ListItemButton-marginBlock)"
  }, ownerState["data-first-child"] === void 0 && {
    marginInlineStart: ownerState.row ? "var(--List-gap)" : void 0,
    marginBlockStart: ownerState.row ? void 0 : "var(--List-gap)"
  }, {
    // account for the border width, so that all of the ListItemButtons content aligned horizontally
    paddingBlock: "calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px))",
    // account for the border width, so that all of the ListItemButtons content aligned vertically
    paddingInlineStart: "calc(var(--ListItem-paddingLeft) + var(--ListItem-startActionWidth, var(--unstable_startActionWidth, 0px)))",
    // --internal variable makes it possible to customize the actionWidth from the top List
    paddingInlineEnd: "calc(var(--ListItem-paddingRight) + var(--ListItem-endActionWidth, var(--unstable_endActionWidth, 0px)))",
    // --internal variable makes it possible to customize the actionWidth from the top List
    minBlockSize: "var(--ListItem-minHeight)",
    border: "1px solid transparent",
    // use `transparent` as a placeholder to prevent the button from jumping when switching to `outlined` variant
    borderRadius: "var(--ListItem-radius)",
    flex: "var(--unstable_ListItem-flex, none)",
    // prevent children from shrinking when the List's height is limited.
    fontSize: "inherit",
    // prevent user agent style when component="button"
    lineHeight: "inherit",
    // prevent user agent style when component="button"
    minInlineSize: 0,
    [theme.focus.selector]: _extends({}, theme.focus.default, {
      zIndex: 1
      // to be above of the next element. For example, the first Tab item should be above the second so that the outline is above the second Tab.
    })
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
    "&:active": (_theme$variants2 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants2[ownerState.color],
    [`.${listItemClasses_default.root} > &`]: {
      "--unstable_ListItem-flex": "1 0 0%"
      // grow to fill the available space of ListItem
    },
    [`&.${listItemButtonClasses_default.selected}`]: _extends({}, (_theme$variants3 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants3[ownerState.color], {
      "--Icon-color": "currentColor"
    }),
    [`&:not(.${listItemButtonClasses_default.selected}, [aria-selected="true"])`]: {
      "&:hover": (_theme$variants4 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants4[ownerState.color],
      "&:active": (_theme$variants5 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants5[ownerState.color]
    },
    [`&.${listItemButtonClasses_default.disabled}`]: _extends({}, (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color])
  });
});
var ListItemButtonRoot = styled_default(StyledListItemButton, {
  name: "JoyListItemButton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => _extends({}, !ownerState.row && {
  [`&.${listItemButtonClasses_default.selected}`]: {
    fontWeight: theme.vars.fontWeight.md
  }
}));
var ListItemButton = React24.forwardRef(function ListItemButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyListItemButton"
  });
  const row = React24.useContext(RowListContext_default);
  const {
    children,
    className,
    action,
    component = "div",
    orientation = "horizontal",
    role,
    selected = false,
    color = "neutral",
    variant = "plain",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const buttonRef = React24.useRef(null);
  const handleRef = useForkRef(buttonRef, ref);
  const {
    focusVisible,
    setFocusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    rootRef: handleRef
  }));
  React24.useImperativeHandle(action, () => ({
    focusVisible: () => {
      var _buttonRef$current;
      setFocusVisible(true);
      (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    component,
    color,
    focusVisible,
    orientation,
    row,
    selected,
    variant
  });
  const classes = useUtilityClasses9(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListItemButtonRoot,
    externalForwardedProps,
    ownerState,
    getSlotProps: getRootProps
  });
  return (0, import_jsx_runtime18.jsx)(ListItemButtonOrientationContext_default.Provider, {
    value: orientation,
    children: (0, import_jsx_runtime18.jsx)(SlotRoot, _extends({}, rootProps, {
      role: role != null ? role : rootProps.role,
      children
    }))
  });
});
true ? ListItemButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.shape({
    current: import_prop_types9.default.shape({
      focusVisible: import_prop_types9.default.func.isRequired
    })
  })]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: import_prop_types9.default.bool,
  /**
   * The content of the component.
   */
  children: import_prop_types9.default.node,
  /**
   * @ignore
   */
  className: import_prop_types9.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types9.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types9.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types9.default.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types9.default.string,
  /**
   * The content direction flow.
   * @default 'horizontal'
   */
  orientation: import_prop_types9.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types9.default.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: import_prop_types9.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types9.default.shape({
    root: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types9.default.shape({
    root: import_prop_types9.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types9.default.number,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types9.default.string])
} : void 0;
var ListItemButton_default = ListItemButton;

// node_modules/@mui/joy/AutocompleteOption/autocompleteOptionClasses.js
function getAutocompleteOptionUtilityClass(slot) {
  return generateUtilityClass("MuiAutocompleteOption", slot);
}
var autocompleteOptionClasses = generateUtilityClasses("MuiAutocompleteOption", ["root", "focused", "focusVisible", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]);
var autocompleteOptionClasses_default = autocompleteOptionClasses;

// node_modules/@mui/joy/AutocompleteOption/AutocompleteOption.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded10 = ["children", "component", "color", "variant", "className", "slots", "slotProps"];
var useUtilityClasses10 = (ownerState) => {
  const {
    color,
    variant
  } = ownerState;
  const slots = {
    root: ["root", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`]
  };
  return composeClasses(slots, getAutocompleteOptionUtilityClass, {});
};
var StyledAutocompleteOption = styled_default(StyledListItemButton)(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2;
  return {
    '&[aria-disabled="true"]': (_theme$variants = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants[ownerState.color],
    '&[aria-selected="true"]': _extends({}, (_theme$variants2 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants2[ownerState.color], {
      fontWeight: theme.vars.fontWeight.md
    })
  };
});
var AutocompleteOptionRoot = styled_default(StyledAutocompleteOption, {
  name: "JoyAutocompleteOption",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var AutocompleteOption = React25.forwardRef(function AutocompleteOption2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAutocompleteOption"
  });
  const {
    children,
    component = "li",
    color: colorProp = "neutral",
    variant: variantProp = "plain",
    className,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const {
    variant = variantProp,
    color = colorProp
  } = useVariantColor(inProps.variant, inProps.color);
  const ownerState = _extends({}, props, {
    component,
    color,
    variant
  });
  const classes = useUtilityClasses10(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: AutocompleteOptionRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      role: "option"
    }
  });
  return (0, import_jsx_runtime19.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? AutocompleteOption.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types10.default.node,
  /**
   * @ignore
   */
  className: import_prop_types10.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types10.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types10.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types10.default.shape({
    root: import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types10.default.shape({
    root: import_prop_types10.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["contained", "light", "outlined", "text"]), import_prop_types10.default.string])
} : void 0;
var AutocompleteOption_default = AutocompleteOption;

// node_modules/@mui/joy/Autocomplete/Autocomplete.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var _ClearIcon;
var _ArrowDropDownIcon;
var _excluded11 = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "clearOnBlur", "clearOnEscape", "defaultValue", "disableCloseOnSelect", "disabledItemsFocusable", "disableListWrap", "filterSelectedOptions", "handleHomeEndKeys", "includeInputInList", "openOnFocus", "selectOnFocus"];
var _excluded24 = ["aria-describedby", "aria-label", "aria-labelledby", "autoFocus", "clearIcon", "clearText", "closeText", "disableClearable", "disabled", "endDecorator", "error", "filterOptions", "forcePopupIcon", "freeSolo", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "id", "inputValue", "limitTags", "loading", "loadingText", "multiple", "name", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openText", "options", "placeholder", "popupIcon", "readOnly", "renderGroup", "renderOption", "renderTags", "required", "type", "startDecorator", "size", "color", "variant", "value", "component", "slots", "slotProps"];
var _excluded32 = ["onDelete"];
var _excluded42 = ["onBlur", "onFocus", "onMouseDown"];
var defaultIsActiveElementInListbox = (listboxRef) => listboxRef.current !== null && listboxRef.current.contains(document.activeElement);
var defaultGetOptionLabel = (option) => {
  var _option$label;
  return (_option$label = option.label) != null ? _option$label : option;
};
var defaultLimitTagsText = (more) => `+${more}`;
var defaultRenderGroup = (params) => (0, import_jsx_runtime21.jsxs)(ListItem_default, {
  nested: true,
  children: [(0, import_jsx_runtime20.jsx)(ListSubheader_default, {
    sticky: true,
    children: params.group
  }), (0, import_jsx_runtime20.jsx)(List_default, {
    children: params.children
  })]
}, params.key);
var useUtilityClasses11 = (ownerState) => {
  const {
    disabled,
    focused,
    hasClearIcon,
    hasPopupIcon,
    popupOpen,
    variant,
    color,
    size,
    multiple
  } = ownerState;
  const slots = {
    root: ["root", focused && "focused", hasClearIcon && "hasClearIcon", hasPopupIcon && "hasPopupIcon", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    wrapper: ["wrapper", multiple && "multiple"],
    input: ["input"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", popupOpen && "popupIndicatorOpen", disabled && "disabled"],
    listbox: ["listbox"],
    option: ["option"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    limitTag: ["limitTag"]
  };
  return composeClasses(slots, getAutocompleteUtilityClass, {});
};
var AutocompleteRoot = styled_default(StyledInputRoot, {
  name: "JoyAutocomplete",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => _extends({}, ownerState.size === "sm" && {
  "--Autocomplete-wrapperGap": "3px"
}, ownerState.size === "md" && {
  "--Autocomplete-wrapperGap": "3px"
}, ownerState.size === "lg" && {
  "--Autocomplete-wrapperGap": "4px"
}, {
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${autocompleteClasses_default.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, ownerState.multiple && !ownerState.startDecorator && {
  paddingInlineStart: 0
}));
var AutocompleteWrapper = styled_default("div", {
  name: "JoyAutocomplete",
  slot: "Wrapper",
  overridesResolver: (props, styles) => styles.wrapper
})(({
  ownerState
}) => ({
  flex: 1,
  // stretch to fill the root slot
  minWidth: 0,
  // won't push end decorator out of the autocomplete
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "var(--Autocomplete-wrapperGap)",
  [`&.${autocompleteClasses_default.multiple}`]: _extends({
    paddingBlock: "var(--Autocomplete-wrapperGap)"
  }, !ownerState.startDecorator && {
    paddingInlineStart: "var(--Autocomplete-wrapperGap)"
  }, !ownerState.endDecorator && {
    paddingInlineEnd: "var(--Autocomplete-wrapperGap)"
  })
}));
var AutocompleteInput = styled_default(StyledInputHtml, {
  name: "JoyAutocomplete",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input
})(({
  ownerState
}) => _extends({
  minWidth: 30,
  minHeight: "var(--Chip-minHeight)"
}, ownerState.multiple && {
  marginInlineStart: "calc(var(--Autocomplete-wrapperGap) * 2.5)"
}));
var AutocompleteStartDecorator = styled_default(StyledInputStartDecorator, {
  name: "JoyAutocomplete",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({});
var AutocompleteEndDecorator = styled_default(StyledInputEndDecorator, {
  name: "JoyAutocomplete",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})(({
  ownerState
}) => _extends({}, (ownerState.hasClearIcon || ownerState.hasPopupIcon) && {
  "--Button-margin": "0px",
  "--IconButton-margin": "0px",
  "--Icon-margin": "0px"
}));
var AutocompleteClearIndicator = styled_default(StyledIconButton, {
  name: "JoyAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (props, styles) => styles.clearIndicator
})(({
  ownerState
}) => _extends({
  alignSelf: "center"
}, !ownerState.hasPopupIcon && {
  marginInlineEnd: "calc(var(--Input-decoratorChildOffset) * -1)"
}, {
  marginInlineStart: "calc(var(--_Input-paddingBlock) / 2)",
  visibility: ownerState.focused ? "visible" : "hidden"
}));
var AutocompletePopupIndicator = styled_default(StyledIconButton, {
  name: "JoyAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: (props, styles) => styles.popupIndicator
})({
  alignSelf: "center",
  marginInlineStart: "calc(var(--_Input-paddingBlock) / 2)",
  marginInlineEnd: "calc(var(--Input-decoratorChildOffset) * -1)",
  [`&.${autocompleteClasses_default.popupIndicatorOpen}`]: {
    transform: "rotate(180deg)",
    "--Icon-color": "currentColor"
  }
});
var AutocompleteListbox3 = styled_default(StyledAutocompleteListbox, {
  name: "JoyAutocomplete",
  slot: "Listbox",
  overridesResolver: (props, styles) => styles.listbox
})(({
  theme
}) => ({
  // `unstable_popup-zIndex` is a private variable that lets other component, e.g. Modal, to override the z-index so that the listbox can be displayed above the Modal.
  zIndex: `var(--unstable_popup-zIndex, ${theme.vars.zIndex.popup})`
}));
var AutocompleteOption3 = styled_default(StyledAutocompleteOption, {
  name: "JoyAutocomplete",
  slot: "Option",
  overridesResolver: (props, styles) => styles.option
})({});
var AutocompleteLoading = styled_default(ListItem_default, {
  name: "JoyAutocomplete",
  slot: "Loading",
  overridesResolver: (props, styles) => styles.loading
})(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary
}));
var AutocompleteNoOptions = styled_default(ListItem_default, {
  name: "JoyAutocomplete",
  slot: "NoOptions",
  overridesResolver: (props, styles) => styles.noOptions
})(({
  theme
}) => ({
  color: (theme.vars || theme).palette.text.secondary
}));
var AutocompleteLimitTag = styled_default("div", {
  name: "JoyAutocomplete",
  slot: "NoOptions",
  overridesResolver: (props, styles) => styles.noOptions
})({
  marginInlineStart: "calc(var(--Input-paddingInline) / 2)",
  marginBlockStart: "var(--_Input-paddingBlock)"
});
var excludeUseAutocompleteParams = (_ref) => {
  let other = _objectWithoutPropertiesLoose(_ref, _excluded11);
  return other;
};
var Autocomplete = React26.forwardRef(function Autocomplete2(inProps, ref) {
  var _ref2, _inProps$error, _ref3, _inProps$size, _inProps$color, _formControl$color, _ref4;
  const props = useThemeProps({
    props: inProps,
    name: "JoyAutocomplete"
  });
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoFocus,
    clearIcon = _ClearIcon || (_ClearIcon = (0, import_jsx_runtime20.jsx)(Close_default, {
      fontSize: "md"
    })),
    clearText = "Clear",
    closeText = "Close",
    disableClearable = false,
    disabled: disabledProp,
    endDecorator,
    error: errorProp = false,
    forcePopupIcon = "auto",
    freeSolo = false,
    getLimitTagsText = defaultLimitTagsText,
    getOptionLabel = defaultGetOptionLabel,
    groupBy,
    id,
    limitTags = -1,
    loading = false,
    loadingText = "Loading…",
    multiple = false,
    name,
    noOptionsText = "No options",
    openText = "Open",
    placeholder,
    popupIcon = _ArrowDropDownIcon || (_ArrowDropDownIcon = (0, import_jsx_runtime20.jsx)(ArrowDropDown_default, {})),
    readOnly = false,
    renderGroup = defaultRenderGroup,
    renderOption: renderOptionProp,
    renderTags,
    required,
    type,
    startDecorator,
    size: sizeProp = "md",
    color: colorProp = "neutral",
    variant = "outlined",
    component,
    slots = {},
    slotProps = {}
  } = props, otherProps = _objectWithoutPropertiesLoose(props, _excluded24);
  const other = excludeUseAutocompleteParams(otherProps);
  const formControl = React26.useContext(FormControlContext_default);
  const error = (_ref2 = (_inProps$error = inProps.error) != null ? _inProps$error : formControl == null ? void 0 : formControl.error) != null ? _ref2 : errorProp;
  const size = (_ref3 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref3 : sizeProp;
  const color = (_inProps$color = inProps.color) != null ? _inProps$color : error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
  const disabled = (_ref4 = disabledProp != null ? disabledProp : formControl == null ? void 0 : formControl.disabled) != null ? _ref4 : false;
  const {
    getRootProps,
    getInputProps,
    getPopupIndicatorProps,
    getClearProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    value,
    dirty,
    popupOpen,
    focused,
    focusedTag,
    anchorEl,
    setAnchorEl,
    inputValue,
    groupedOptions
  } = useAutocomplete(_extends({}, props, {
    id: id != null ? id : formControl == null ? void 0 : formControl.htmlFor,
    componentName: "Autocomplete",
    unstable_classNamePrefix: "Mui",
    unstable_isActiveElementInListbox: defaultIsActiveElementInListbox
  }));
  const {
    onMouseDown: handleInputMouseDown
  } = getInputProps();
  const {
    onClick: handleRootOnClick
  } = getRootProps();
  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;
  const hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  const ownerState = _extends({
    instanceColor: inProps.color
  }, props, {
    value,
    disabled,
    focused,
    getOptionLabel,
    hasOptions: !!groupedOptions.length,
    hasClearIcon,
    hasPopupIcon,
    inputFocused: focusedTag === -1,
    popupOpen,
    size,
    color,
    variant
  });
  const classes = useUtilityClasses11(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  let selectedOptions;
  if (multiple && value.length > 0) {
    const getCustomizedTagProps = (params) => {
      const _getTagProps = getTagProps(params), {
        onDelete
      } = _getTagProps, tagProps = _objectWithoutPropertiesLoose(_getTagProps, _excluded32);
      return _extends({
        disabled,
        size,
        onClick: onDelete
      }, tagProps);
    };
    if (renderTags) {
      selectedOptions = renderTags(value, getCustomizedTagProps, ownerState);
    } else {
      selectedOptions = value.map((option, index) => {
        return (0, import_jsx_runtime20.jsx)(Chip_default, {
          size,
          variant: "soft",
          color: "neutral",
          endDecorator: (0, import_jsx_runtime20.jsx)(ChipDelete_default, _extends({}, getCustomizedTagProps({
            index
          }))),
          children: getOptionLabel(option)
        }, index);
      });
    }
  }
  const rootRef = useForkRef(ref, setAnchorEl);
  const rootStateClasses = {
    [autocompleteClasses_default.disabled]: disabled,
    [autocompleteClasses_default.error]: error,
    [autocompleteClasses_default.focused]: focused,
    [autocompleteClasses_default.formControl]: Boolean(formControl)
  };
  const [SlotRoot, rootProps] = useSlot("root", {
    ref: rootRef,
    className: [classes.root, rootStateClasses],
    elementType: AutocompleteRoot,
    externalForwardedProps,
    ownerState,
    getSlotProps: getRootProps,
    additionalProps: {
      onClick: (event) => {
        if (handleRootOnClick) {
          handleRootOnClick(event);
        }
        if (event.currentTarget === event.target && handleInputMouseDown) {
          handleInputMouseDown(event);
        }
      }
    }
  });
  const [SlotWrapper, wrapperProps] = useSlot("wrapper", {
    className: classes.wrapper,
    elementType: AutocompleteWrapper,
    externalForwardedProps,
    ownerState
  });
  const inputStateClasses = {
    [autocompleteClasses_default.disabled]: disabled
  };
  const [SlotInput, inputProps] = useSlot("input", {
    className: [classes.input, inputStateClasses],
    elementType: AutocompleteInput,
    getSlotProps: (handlers) => {
      const _getInputProps = getInputProps(), {
        onBlur,
        onFocus,
        onMouseDown
      } = _getInputProps, inputSlotProps = _objectWithoutPropertiesLoose(_getInputProps, _excluded42);
      return _extends({}, inputSlotProps, {
        onBlur: (event) => {
          var _handlers$onBlur;
          onBlur == null || onBlur(event);
          (_handlers$onBlur = handlers.onBlur) == null || _handlers$onBlur.call(handlers, event);
        },
        onFocus: (event) => {
          var _handlers$onFocus;
          onFocus == null || onFocus(event);
          (_handlers$onFocus = handlers.onFocus) == null || _handlers$onFocus.call(handlers, event);
        },
        onMouseDown: (event) => {
          var _handlers$onMouseDown;
          onMouseDown == null || onMouseDown(event);
          (_handlers$onMouseDown = handlers.onMouseDown) == null || _handlers$onMouseDown.call(handlers, event);
        }
      });
    },
    externalForwardedProps,
    ownerState,
    additionalProps: {
      autoFocus,
      placeholder,
      name,
      readOnly,
      disabled,
      required: required != null ? required : formControl == null ? void 0 : formControl.required,
      type,
      "aria-invalid": error || void 0,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-describedby": ariaDescribedby != null ? ariaDescribedby : formControl == null ? void 0 : formControl["aria-describedby"]
    }
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: AutocompleteStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: AutocompleteEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotClearIndicator, clearIndicatorProps] = useSlot("clearIndicator", {
    className: classes.clearIndicator,
    elementType: AutocompleteClearIndicator,
    getSlotProps: getClearProps,
    externalForwardedProps,
    ownerState,
    getSlotOwnerState: (mergedProps) => ({
      size: mergedProps.size || size,
      variant: mergedProps.variant || getChildVariantAndColor(variant, color).variant || "plain",
      color: mergedProps.color || getChildVariantAndColor(variant, color).color || "neutral",
      disableColorInversion: !!inProps.color
    }),
    additionalProps: {
      "aria-label": clearText,
      title: clearText
    }
  });
  const [SlotPopupIndicator, popupIndicatorProps] = useSlot("popupIndicator", {
    className: classes.popupIndicator,
    elementType: AutocompletePopupIndicator,
    getSlotProps: getPopupIndicatorProps,
    externalForwardedProps,
    ownerState,
    getSlotOwnerState: (mergedProps) => ({
      size: mergedProps.size || size,
      variant: mergedProps.variant || getChildVariantAndColor(variant, color).variant || "plain",
      color: mergedProps.color || getChildVariantAndColor(variant, color).color || "neutral",
      disableColorInversion: !!inProps.color
    }),
    additionalProps: {
      disabled,
      "aria-label": popupOpen ? closeText : openText,
      title: popupOpen ? closeText : openText,
      type: "button"
    }
  });
  const [SlotListbox, listboxProps] = useSlot("listbox", {
    className: classes.listbox,
    elementType: AutocompleteListbox3,
    getSlotProps: getListboxProps,
    externalForwardedProps,
    ownerState,
    getSlotOwnerState: (mergedProps) => ({
      size: mergedProps.size || size,
      variant: mergedProps.variant || variant,
      color: mergedProps.color || color,
      disableColorInversion: !mergedProps.disablePortal
    }),
    additionalProps: {
      anchorEl,
      open: popupOpen,
      style: anchorEl ? {
        width: anchorEl.clientWidth
      } : {}
    }
  });
  const [SlotLoading, loadingProps] = useSlot("loading", {
    className: classes.loading,
    elementType: AutocompleteLoading,
    externalForwardedProps,
    ownerState
  });
  const [SlotNoOptions, noOptionsProps] = useSlot("noOptions", {
    className: classes.noOptions,
    elementType: AutocompleteNoOptions,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      role: "presentation",
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }
  });
  const [SlotLimitTag, limitTagProps] = useSlot("limitTag", {
    className: classes.limitTag,
    elementType: AutocompleteLimitTag,
    externalForwardedProps,
    ownerState
  });
  if (limitTags > -1 && Array.isArray(selectedOptions)) {
    const more = selectedOptions.length - limitTags;
    if (!focused && more > 0) {
      selectedOptions = selectedOptions.splice(0, limitTags);
      selectedOptions.push((0, import_jsx_runtime20.jsx)(SlotLimitTag, _extends({}, limitTagProps, {
        children: getLimitTagsText(more)
      }), selectedOptions.length));
    }
  }
  const [SlotOption, baseOptionProps] = useSlot("option", {
    className: classes.option,
    elementType: AutocompleteOption3,
    externalForwardedProps,
    ownerState,
    getSlotOwnerState: (mergedProps) => ({
      variant: mergedProps.variant || getChildVariantAndColor(variant, color).variant || "plain",
      color: mergedProps.color || getChildVariantAndColor(variant, color).color || "neutral",
      disableColorInversion: !listboxProps.disablePortal
    }),
    additionalProps: {
      as: "li"
    }
  });
  const defaultRenderOption = (optionProps, option) => (0, import_jsx_runtime20.jsx)(SlotOption, _extends({}, optionProps, {
    children: getOptionLabel(option)
  }));
  const renderOption = renderOptionProp || defaultRenderOption;
  const renderListOption = (option, index) => {
    const optionProps = getOptionProps({
      option,
      index
    });
    return renderOption(_extends({}, baseOptionProps, optionProps), option, {
      // `aria-selected` prop will always by boolean, see useAutocomplete hook.
      selected: !!optionProps["aria-selected"],
      inputValue,
      ownerState
    });
  };
  const modifiers = React26.useMemo(() => [{
    name: "offset",
    options: {
      offset: [0, 4]
    }
  }, ...listboxProps.modifiers || []], [listboxProps.modifiers]);
  let popup = null;
  if (anchorEl) {
    var _props$slots;
    popup = (0, import_jsx_runtime20.jsx)(VariantColorProvider, {
      variant,
      color,
      children: (0, import_jsx_runtime20.jsx)(ListProvider_default, {
        nested: true,
        children: (0, import_jsx_runtime21.jsxs)(SlotListbox, _extends({}, listboxProps, {
          className: clsx_default(listboxProps.className),
          modifiers
        }, !((_props$slots = props.slots) != null && _props$slots.listbox) && {
          as: Popper,
          slots: {
            root: listboxProps.as || "ul"
          }
        }, {
          children: [groupedOptions.map((option, index) => {
            if (groupBy) {
              const typedOption = option;
              return renderGroup({
                key: String(typedOption.key),
                group: typedOption.group,
                children: typedOption.options.map((option2, index2) => renderListOption(option2, typedOption.index + index2))
              });
            }
            return renderListOption(option, index);
          }), loading && groupedOptions.length === 0 ? (0, import_jsx_runtime20.jsx)(SlotLoading, _extends({}, loadingProps, {
            children: loadingText
          })) : null, groupedOptions.length === 0 && !freeSolo && !loading ? (0, import_jsx_runtime20.jsx)(SlotNoOptions, _extends({}, noOptionsProps, {
            children: noOptionsText
          })) : null]
        }))
      })
    });
  }
  return (0, import_jsx_runtime21.jsxs)(React26.Fragment, {
    children: [(0, import_jsx_runtime21.jsxs)(SlotRoot, _extends({}, rootProps, {
      children: [startDecorator && (0, import_jsx_runtime20.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
        children: startDecorator
      })), (0, import_jsx_runtime21.jsxs)(SlotWrapper, _extends({}, wrapperProps, {
        children: [selectedOptions, (0, import_jsx_runtime20.jsx)(SlotInput, _extends({}, inputProps))]
      })), endDecorator && (0, import_jsx_runtime20.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
        children: endDecorator
      })), hasClearIcon ? (0, import_jsx_runtime20.jsx)(SlotClearIndicator, _extends({}, clearIndicatorProps, {
        children: clearIcon
      })) : null, hasPopupIcon ? (0, import_jsx_runtime20.jsx)(SlotPopupIndicator, _extends({}, popupIndicatorProps, {
        children: popupIcon
      })) : null]
    })), popup]
  });
});
true ? Autocomplete.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  "aria-describedby": import_prop_types11.default.string,
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  "aria-label": import_prop_types11.default.string,
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  "aria-labelledby": import_prop_types11.default.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: import_prop_types11.default.bool,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="md" />
   */
  clearIcon: import_prop_types11.default.node,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: import_prop_types11.default.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: import_prop_types11.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types11.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: chainPropTypes(import_prop_types11.default.any, (props) => {
    if (props.multiple && props.defaultValue !== void 0 && !Array.isArray(props.defaultValue)) {
      return new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${props.defaultValue} was provided.`].join("\n"));
    }
    return null;
  }),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: import_prop_types11.default.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types11.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endDecorator: import_prop_types11.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   * @default false
   */
  error: import_prop_types11.default.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: import_prop_types11.default.func,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["auto"]), import_prop_types11.default.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: import_prop_types11.default.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {string | number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more: string | number) => `+${more}`
   */
  getLimitTagsText: import_prop_types11.default.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: import_prop_types11.default.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: import_prop_types11.default.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: import_prop_types11.default.func,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: import_prop_types11.default.string,
  /**
   * The input value.
   */
  inputValue: import_prop_types11.default.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: import_prop_types11.default.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: integerPropType_default,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: import_prop_types11.default.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: import_prop_types11.default.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: import_prop_types11.default.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: import_prop_types11.default.string,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: import_prop_types11.default.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: import_prop_types11.default.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: import_prop_types11.default.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: import_prop_types11.default.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: import_prop_types11.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types11.default.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: import_prop_types11.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types11.default.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: import_prop_types11.default.string,
  /**
   * Array of options.
   */
  options: import_prop_types11.default.array.isRequired,
  /**
   * The input placeholder
   */
  placeholder: import_prop_types11.default.string,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: import_prop_types11.default.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: import_prop_types11.default.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: import_prop_types11.default.func,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {T} option The option to render.
   * @param {object} state The state of the component.
   * @returns {ReactNode}
   */
  renderOption: import_prop_types11.default.func,
  /**
   * Render the selected value.
   *
   * @param {T[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: import_prop_types11.default.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: import_prop_types11.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["sm", "md", "lg"]), import_prop_types11.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types11.default.shape({
    clearIndicator: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    endDecorator: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    input: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    limitTag: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    listbox: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    loading: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    noOptions: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    option: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    popupIndicator: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    root: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    startDecorator: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
    wrapper: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types11.default.shape({
    clearIndicator: import_prop_types11.default.elementType,
    endDecorator: import_prop_types11.default.elementType,
    input: import_prop_types11.default.elementType,
    limitTag: import_prop_types11.default.elementType,
    listbox: import_prop_types11.default.elementType,
    loading: import_prop_types11.default.elementType,
    noOptions: import_prop_types11.default.elementType,
    option: import_prop_types11.default.elementType,
    popupIndicator: import_prop_types11.default.elementType,
    root: import_prop_types11.default.elementType,
    startDecorator: import_prop_types11.default.elementType,
    wrapper: import_prop_types11.default.elementType
  }),
  /**
   * Leading adornment for this input.
   */
  startDecorator: import_prop_types11.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: import_prop_types11.default.string,
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: chainPropTypes(import_prop_types11.default.any, (props) => {
    if (props.multiple && props.value !== void 0 && !Array.isArray(props.value)) {
      return new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${props.value} was provided.`].join("\n"));
    }
    return null;
  }),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types11.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var Autocomplete_default = Autocomplete;

export {
  getListItemUtilityClass,
  listItemClasses_default,
  RowListContext_default,
  ComponentListContext_default,
  GroupListContext_default,
  StyledListItem,
  ListItem_default,
  scopedVariables,
  ListProvider_default,
  resolveSxValue,
  getListUtilityClass,
  listClasses_default,
  RadioGroupContext_default,
  StyledList,
  List_default,
  getListItemButtonUtilityClass,
  listItemButtonClasses_default,
  ListItemButtonOrientationContext_default,
  StyledListItemButton,
  ListItemButton_default,
  getSvgIconUtilityClass,
  svgIconClasses_default,
  SvgIcon_default,
  createSvgIcon,
  Close_default,
  useVariantColor,
  VariantColorProvider,
  getIconButtonUtilityClass,
  iconButtonClasses_default,
  StyledIconButton,
  IconButton_default,
  getChipUtilityClass,
  chipClasses_default,
  Chip_default,
  getChipDeleteUtilityClass,
  chipDeleteClasses_default,
  ChipDelete_default,
  getListSubheaderUtilityClass,
  listSubheaderClasses_default,
  ListSubheader_default,
  getAutocompleteUtilityClass,
  autocompleteClasses_default,
  getAutocompleteListboxUtilityClass,
  autocompleteListboxClasses_default,
  AutocompleteListbox_default,
  getAutocompleteOptionUtilityClass,
  autocompleteOptionClasses_default,
  AutocompleteOption_default,
  Autocomplete_default
};
//# sourceMappingURL=chunk-UEZTN77O.js.map
