import {
  useInput
} from "./chunk-WQMNLJEZ.js";
import {
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-Z4UOSQWM.js";
import {
  capitalize,
  composeClasses,
  createGetCssVar,
  generateUtilityClass2 as generateUtilityClass,
  generateUtilityClasses2 as generateUtilityClasses,
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

// node_modules/@mui/joy/Input/inputClasses.js
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
var inputClasses = generateUtilityClasses("MuiInput", ["root", "input", "formControl", "focused", "disabled", "error", "adornedStart", "adornedEnd", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "fullWidth", "startDecorator", "endDecorator"]);
var inputClasses_default = inputClasses;

// node_modules/@mui/joy/Input/Input.js
var React3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/Input/useForwardedInput.js
var React2 = __toESM(require_react());

// node_modules/@mui/joy/FormControl/FormControlContext.js
var React = __toESM(require_react());
var FormControlContext = React.createContext(void 0);
var FormControlContext_default = FormControlContext;

// node_modules/@mui/joy/Input/useForwardedInput.js
var _excluded = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "error", "id", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "type", "value"];
function useForwardedInput(props, classes) {
  const formControl = React2.useContext(FormControlContext_default);
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled: disabledProp,
    error: errorProp,
    id,
    name,
    onClick,
    onChange,
    onKeyDown,
    onKeyUp,
    onFocus,
    onBlur,
    placeholder,
    readOnly,
    required,
    type,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    getRootProps,
    getInputProps,
    focused,
    error,
    disabled
  } = useInput({
    disabled: disabledProp != null ? disabledProp : formControl == null ? void 0 : formControl.disabled,
    defaultValue,
    error: errorProp,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required: required != null ? required : formControl == null ? void 0 : formControl.required,
    value
  });
  const rootStateClasses = {
    [classes.disabled]: disabled,
    [classes.error]: error,
    [classes.focused]: focused,
    [classes.formControl]: Boolean(formControl),
    [className]: className
  };
  const inputStateClasses = {
    [classes.disabled]: disabled
  };
  const propsToForward = {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    autoComplete,
    autoFocus,
    disabled,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type
  };
  return _extends({
    formControl,
    propsToForward,
    rootStateClasses,
    inputStateClasses,
    getRootProps,
    getInputProps,
    focused,
    error,
    disabled
  }, other);
}

// node_modules/@mui/joy/colorInversion/colorInversionUtils.js
var createPrefixVar = (cssVarPrefix) => {
  return (cssVar) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ""}${cssVar.replace(/^--/, "")}`;
};
var INVERTED_COLORS_ATTR = "data-skip-inverted-colors";
var INVERTED_COLORS_SELECTOR = `& :not([${INVERTED_COLORS_ATTR}], [${INVERTED_COLORS_ATTR}] *)`;
var skipInvertedColors = (theme) => {
  var _theme$colorSchemes$l, _theme$colorSchemes$l2, _theme$colorSchemes$l3, _theme$colorSchemes$l4, _theme$colorSchemes$l5, _theme$colorSchemes$l6, _theme$colorSchemes$l7, _theme$colorSchemes$l8, _theme$colorSchemes$l9, _theme$colorSchemes$l10, _theme$colorSchemes$l11, _theme$colorSchemes$d, _theme$colorSchemes$d2, _theme$colorSchemes$d3, _theme$colorSchemes$d4, _theme$colorSchemes$d5, _theme$colorSchemes$d6, _theme$colorSchemes$d7, _theme$colorSchemes$d8, _theme$colorSchemes$d9, _theme$colorSchemes$d10, _theme$colorSchemes$d11;
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  return {
    "--variant-plainColor": "var(--variant-plainColor) !important",
    "--variant-plainHoverColor": "var(--variant-plainHoverColor) !important",
    "--variant-plainHoverBg": "var(--variant-plainHoverBg) !important",
    "--variant-plainActiveBg": "var(--variant-plainActiveBg) !important",
    "--variant-plainDisabledColor": "var(--variant-plainDisabledColor) !important",
    "--variant-outlinedColor": "var(--variant-outlinedColor) !important",
    "--variant-outlinedBorder": "var(--variant-outlinedBorder) !important",
    "--variant-outlinedHoverColor": "var(--variant-outlinedHoverColor) !important",
    "--variant-outlinedHoverBorder": "var(--variant-outlinedHoverBorder) !important",
    "--variant-outlinedHoverBg": "var(--variant-outlinedHoverBg) !important",
    "--variant-outlinedActiveBg": "var(--variant-outlinedActiveBg) !important",
    "--variant-outlinedDisabledColor": "var(--variant-outlinedDisabledColor) !important",
    "--variant-outlinedDisabledBorder": "var(--variant-outlinedDisabledBorder) !important",
    "--variant-softColor": "var(--variant-softColor) !important",
    "--variant-softHoverColor": "var(--variant-softHoverColor) !important",
    "--variant-softBg": "var(--variant-softBg) !important",
    "--variant-softHoverBg": "var(--variant-softHoverBg) !important",
    "--variant-softActiveBg": "var(--variant-softActiveBg) !important",
    "--variant-softActiveColor": "var(--variant-softActiveColor) !important",
    "--variant-softDisabledColor": "var(--variant-softDisabledColor) !important",
    "--variant-softDisabledBg": "var(--variant-softDisabledBg) !important",
    "--variant-solidColor": "var(--variant-solidColor) !important",
    "--variant-solidBg": "var(--variant-solidBg) !important",
    "--variant-solidHoverBg": "var(--variant-solidHoverBg) !important",
    "--variant-solidActiveBg": "var(--variant-solidActiveBg) !important",
    "--variant-solidDisabledColor": "var(--variant-solidDisabledColor) !important",
    "--variant-solidDisabledBg": "var(--variant-solidDisabledBg) !important",
    "--Badge-ringColor": "var(--Badge-ringColor) !important",
    colorScheme: "unset",
    [theme.getColorSchemeSelector("light")]: {
      [prefixVar("--palette-focusVisible")]: `${(_theme$colorSchemes$l = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l.palette.focusVisible} !important`,
      [prefixVar("--palette-background-body")]: `${(_theme$colorSchemes$l2 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l2.palette.background.body} !important`,
      [prefixVar("--palette-background-surface")]: `${(_theme$colorSchemes$l3 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l3.palette.background.surface} !important`,
      [prefixVar("--palette-background-popup")]: `${(_theme$colorSchemes$l4 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l4.palette.background.popup} !important`,
      [prefixVar("--palette-background-level1")]: `${(_theme$colorSchemes$l5 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l5.palette.background.level1} !important`,
      [prefixVar("--palette-background-level2")]: `${(_theme$colorSchemes$l6 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l6.palette.background.level2} !important`,
      [prefixVar("--palette-background-level3")]: `${(_theme$colorSchemes$l7 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l7.palette.background.level3} !important`,
      [prefixVar("--palette-text-primary")]: `${(_theme$colorSchemes$l8 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l8.palette.text.primary} !important`,
      [prefixVar("--palette-text-secondary")]: `${(_theme$colorSchemes$l9 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l9.palette.text.secondary} !important`,
      [prefixVar("--palette-text-tertiary")]: `${(_theme$colorSchemes$l10 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l10.palette.text.tertiary} !important`,
      [prefixVar("--palette-divider")]: `${(_theme$colorSchemes$l11 = theme.colorSchemes.light) == null ? void 0 : _theme$colorSchemes$l11.palette.divider} !important`
    },
    [theme.getColorSchemeSelector("dark")]: {
      [prefixVar("--palette-focusVisible")]: `${(_theme$colorSchemes$d = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d.palette.focusVisible} !important`,
      [prefixVar("--palette-background-body")]: `${(_theme$colorSchemes$d2 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d2.palette.background.body} !important`,
      [prefixVar("--palette-background-surface")]: `${(_theme$colorSchemes$d3 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d3.palette.background.surface} !important`,
      [prefixVar("--palette-background-popup")]: `${(_theme$colorSchemes$d4 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d4.palette.background.popup} !important`,
      [prefixVar("--palette-background-level1")]: `${(_theme$colorSchemes$d5 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d5.palette.background.level1} !important`,
      [prefixVar("--palette-background-level2")]: `${(_theme$colorSchemes$d6 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d6.palette.background.level2} !important`,
      [prefixVar("--palette-background-level3")]: `${(_theme$colorSchemes$d7 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d7.palette.background.level3} !important`,
      [prefixVar("--palette-text-primary")]: `${(_theme$colorSchemes$d8 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d8.palette.text.primary} !important`,
      [prefixVar("--palette-text-secondary")]: `${(_theme$colorSchemes$d9 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d9.palette.text.secondary} !important`,
      [prefixVar("--palette-text-tertiary")]: `${(_theme$colorSchemes$d10 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d10.palette.text.tertiary} !important`,
      [prefixVar("--palette-divider")]: `${(_theme$colorSchemes$d11 = theme.colorSchemes.dark) == null ? void 0 : _theme$colorSchemes$d11.palette.divider} !important`
    }
  };
};
function isStyledThemeProp(props) {
  return props.theme !== void 0;
}
var applySolidInversion = (color) => (themeProp) => {
  const theme = isStyledThemeProp(themeProp) ? themeProp.theme : themeProp;
  const getCssVarDefault = createGetCssVar(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const getCssVar = (cssVar) => {
    const tokens = cssVar.split("-");
    return getCssVarDefault(cssVar, theme.palette[tokens[1]][tokens[2]]);
  };
  return {
    [INVERTED_COLORS_SELECTOR]: {
      "--Badge-ringColor": getCssVar(`palette-${color}-solidBg`),
      "--Icon-color": "currentColor",
      [`${theme.getColorSchemeSelector("light")}, ${theme.getColorSchemeSelector("dark")}`]: {
        colorScheme: "dark",
        [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-200`),
        [prefixVar("--palette-background-body")]: "rgba(0 0 0 / 0.1)",
        [prefixVar("--palette-background-surface")]: "rgba(0 0 0 / 0.06)",
        [prefixVar("--palette-background-popup")]: getCssVar(`palette-${color}-700`),
        [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.2)`,
        [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.36)`,
        [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.6)`,
        [prefixVar("--palette-text-primary")]: getCssVar(`palette-common-white`),
        [prefixVar("--palette-text-secondary")]: getCssVar(`palette-${color}-200`),
        [prefixVar("--palette-text-tertiary")]: getCssVar(`palette-${color}-300`),
        [prefixVar("--palette-text-icon")]: getCssVar(`palette-${color}-200`),
        [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
        "--variant-plainColor": getCssVar(`palette-${color}-50`),
        "--variant-plainHoverColor": `#fff`,
        "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
        "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
        "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-outlinedColor": getCssVar(`palette-${color}-50`),
        "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.5)`,
        "--variant-outlinedHoverColor": `#fff`,
        "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-300`),
        "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.12)`,
        "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.32)`,
        "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-outlinedDisabledBorder": `rgba(255 255 255 / 0.2)`,
        "--variant-softColor": getCssVar(`palette-common-white`),
        "--variant-softHoverColor": getCssVar(`palette-common-white`),
        "--variant-softBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.24)`,
        "--variant-softHoverBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.36)`,
        "--variant-softActiveBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.16)`,
        "--variant-softActiveColor": `#fff`,
        "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`,
        "--variant-solidColor": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "500"}`),
        "--variant-solidBg": getCssVar(`palette-common-white`),
        "--variant-solidHoverBg": getCssVar(`palette-common-white`),
        "--variant-solidActiveBg": getCssVar(`palette-${color}-100`),
        "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.1)`
      }
    },
    [`&, & [${INVERTED_COLORS_ATTR}]`]: skipInvertedColors(theme)
  };
};
var applySoftInversion = (color) => (themeProp) => {
  const {
    theme = themeProp
  } = themeProp;
  const getCssVarDefault = createGetCssVar(theme.cssVarPrefix);
  const prefixVar = createPrefixVar(theme.cssVarPrefix);
  const getCssVar = (cssVar) => {
    const tokens = cssVar.split("-");
    return getCssVarDefault(cssVar, theme.palette[tokens[1]][tokens[2]]);
  };
  return {
    [INVERTED_COLORS_SELECTOR]: {
      "--Badge-ringColor": getCssVar(`palette-${color}-softBg`),
      "--Icon-color": "currentColor",
      [theme.getColorSchemeSelector("dark")]: {
        [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-300`),
        [prefixVar("--palette-background-body")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
        [prefixVar("--palette-background-surface")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
        [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
        [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
        [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        [prefixVar("--palette-text-primary")]: getCssVar(`palette-${color}-100`),
        [prefixVar("--palette-text-secondary")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.72)`,
        [prefixVar("--palette-text-tertiary")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
        [prefixVar("--palette-text-icon")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.6)`,
        [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.2)`,
        "--variant-plainColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
        "--variant-plainHoverColor": getCssVar(`palette-${color}-50`),
        "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
        "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-outlinedColor": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 1)`,
        "--variant-outlinedHoverColor": getCssVar(`palette-${color}-50`),
        "--variant-outlinedBg": "initial",
        "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-600`),
        "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.16)`,
        "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-outlinedDisabledBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
        "--variant-softColor": getCssVar(`palette-${color}-200`),
        "--variant-softBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
        "--variant-softHoverColor": "#fff",
        "--variant-softHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-softActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
        "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-solidColor": "#fff",
        "--variant-solidBg": getCssVar(`palette-${color}-500`),
        "--variant-solidHoverColor": "#fff",
        "--variant-solidHoverBg": getCssVar(`palette-${color}-600`),
        "--variant-solidActiveBg": getCssVar(`palette-${color}-600`),
        "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.72)`,
        "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`
      },
      // `light` (default color scheme) should come last in case that `theme.getColorSchemeSelector()` return the same value
      [theme.getColorSchemeSelector("light")]: {
        [prefixVar("--palette-focusVisible")]: getCssVar(`palette-${color}-500`),
        [prefixVar("--palette-background-body")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.1)`,
        [prefixVar("--palette-background-surface")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
        [prefixVar("--palette-background-level1")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.2)`,
        [prefixVar("--palette-background-level2")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        [prefixVar("--palette-background-level3")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.48)`,
        [prefixVar("--palette-text-primary")]: getCssVar(`palette-${color}-700`),
        [prefixVar("--palette-text-secondary")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
        [prefixVar("--palette-text-tertiary")]: `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.68)`,
        [prefixVar("--palette-text-icon")]: getCssVar(`palette-${color}-500`),
        [prefixVar("--palette-divider")]: `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.32)`,
        "--variant-plainColor": `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 0.8)`,
        "--variant-plainHoverColor": `rgba(${getCssVar(`palette-${color}-darkChannel`)} / 1)`,
        "--variant-plainHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-plainActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
        "--variant-plainDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-outlinedColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 1)`,
        "--variant-outlinedBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverColor": getCssVar(`palette-${color}-600`),
        "--variant-outlinedHoverBorder": getCssVar(`palette-${color}-300`),
        "--variant-outlinedHoverBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-outlinedActiveBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.24)`,
        "--variant-outlinedDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-outlinedDisabledBorder": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.12)`,
        "--variant-softColor": getCssVar(`palette-${color}-600`),
        "--variant-softBg": `rgba(${getCssVar(`palette-${color}-lightChannel`)} / 0.8)`,
        "--variant-softHoverColor": getCssVar(`palette-${color}-700`),
        "--variant-softHoverBg": getCssVar(`palette-${color}-200`),
        "--variant-softActiveBg": getCssVar(`palette-${color}-300`),
        "--variant-softDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-softDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`,
        "--variant-solidColor": getCssVar("palette-common-white"),
        "--variant-solidBg": getCssVar(`palette-${color}-${color === "neutral" ? "700" : "500"}`),
        "--variant-solidHoverColor": getCssVar("palette-common-white"),
        "--variant-solidHoverBg": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "600"}`),
        "--variant-solidActiveBg": getCssVar(`palette-${color}-${color === "neutral" ? "600" : "600"}`),
        "--variant-solidDisabledColor": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.6)`,
        "--variant-solidDisabledBg": `rgba(${getCssVar(`palette-${color}-mainChannel`)} / 0.08)`
      }
    },
    [`&, & [${INVERTED_COLORS_ATTR}]`]: skipInvertedColors(theme)
  };
};

// node_modules/@mui/joy/Input/Input.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["propsToForward", "rootStateClasses", "inputStateClasses", "getRootProps", "getInputProps", "formControl", "focused", "error", "disabled", "fullWidth", "size", "color", "variant", "startDecorator", "endDecorator", "component", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    disabled,
    fullWidth,
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", fullWidth && "fullWidth", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    input: ["input"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getInputUtilityClass, {});
};
var StyledInputRoot = styled_default("div")(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$vars$palette, _theme$vars$palette2, _variantStyle$backgro, _theme$variants2, _theme$variants3;
  const variantStyle = (_theme$variants = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants[ownerState.color];
  return [_extends({
    "--Input-radius": theme.vars.radius.sm,
    "--Input-gap": "0.5rem",
    "--Input-placeholderColor": "inherit",
    "--Input-placeholderOpacity": 0.64,
    "--Input-decoratorColor": theme.vars.palette.text.icon,
    "--Input-focused": "0",
    "--Input-focusedThickness": theme.vars.focus.thickness,
    "--Input-focusedHighlight": (_theme$vars$palette = theme.vars.palette[ownerState.color === "neutral" ? "primary" : ownerState.color]) == null ? void 0 : _theme$vars$palette[500],
    [`&:not([${INVERTED_COLORS_ATTR}])`]: _extends({}, ownerState.instanceColor && {
      "--_Input-focusedHighlight": (_theme$vars$palette2 = theme.vars.palette[ownerState.instanceColor === "neutral" ? "primary" : ownerState.instanceColor]) == null ? void 0 : _theme$vars$palette2[500]
    }, {
      "--Input-focusedHighlight": `var(--_Input-focusedHighlight, ${theme.vars.palette.focusVisible})`
    })
  }, ownerState.size === "sm" && {
    "--Input-minHeight": "2rem",
    "--Input-paddingInline": "0.5rem",
    "--Input-decoratorChildHeight": "min(1.5rem, var(--Input-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl
  }, ownerState.size === "md" && {
    "--Input-minHeight": "2.25rem",
    "--Input-paddingInline": "0.75rem",
    "--Input-decoratorChildHeight": "min(1.75rem, var(--Input-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, ownerState.size === "lg" && {
    "--Input-minHeight": "2.75rem",
    "--Input-paddingInline": "1rem",
    "--Input-gap": "0.75rem",
    "--Input-decoratorChildHeight": "min(2.25rem, var(--Input-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--Input-decoratorChildOffset": "min(calc(var(--Input-paddingInline) - (var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2), var(--Input-paddingInline))",
    "--_Input-paddingBlock": "max((var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2, 0px)",
    "--Input-decoratorChildRadius": "max(var(--Input-radius) - var(--variant-borderWidth, 0px) - var(--_Input-paddingBlock), min(var(--_Input-paddingBlock) + var(--variant-borderWidth, 0px), var(--Input-radius) / 2))",
    "--Button-minHeight": "var(--Input-decoratorChildHeight)",
    "--Button-paddingBlock": "0px",
    // to ensure that the height of the button is equal to --Button-minHeight
    "--IconButton-size": "var(--Input-decoratorChildHeight)",
    "--Button-radius": "var(--Input-decoratorChildRadius)",
    "--IconButton-radius": "var(--Input-decoratorChildRadius)",
    boxSizing: "border-box"
  }, ownerState.variant !== "plain" && {
    boxShadow: theme.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Input-minHeight)"
  }, ownerState.fullWidth && {
    width: "100%"
  }, {
    cursor: "text",
    position: "relative",
    display: "flex",
    paddingInline: `var(--Input-paddingInline)`,
    borderRadius: "var(--Input-radius)"
  }, theme.typography[`body-${ownerState.size}`], variantStyle, {
    backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface,
    "&:before": {
      boxSizing: "border-box",
      content: '""',
      display: "block",
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: "inherit",
      margin: "calc(var(--variant-borderWidth, 0px) * -1)",
      // for outlined variant
      boxShadow: `var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)`
    }
  }), {
    "&:hover": _extends({}, (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color], {
      backgroundColor: null
      // it is not common to change background on hover for Input
    }),
    [`&.${inputClasses_default.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color],
    "&:focus-within::before": {
      "--Input-focused": "1"
    }
  }];
});
var StyledInputHtml = styled_default("input")(({
  ownerState
}) => ({
  border: "none",
  // remove the native input width
  minWidth: 0,
  // remove the native input width
  outline: 0,
  // remove the native input outline
  padding: 0,
  // remove the native input padding
  flex: 1,
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textOverflow: "ellipsis",
  "&:-webkit-autofill": _extends({
    paddingInline: "var(--Input-paddingInline)"
  }, !ownerState.startDecorator && {
    marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineStart: "var(--Input-paddingInline)",
    borderTopLeftRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomLeftRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"
  }, !ownerState.endDecorator && {
    marginInlineEnd: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineEnd: "var(--Input-paddingInline)",
    borderTopRightRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomRightRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"
  }),
  "&::-webkit-input-placeholder": {
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&::-moz-placeholder": {
    // Firefox 19+
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&:-ms-input-placeholder": {
    // IE11
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&::-ms-input-placeholder": {
    // Edge
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  }
}));
var StyledInputStartDecorator = styled_default("div")({
  "--Button-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Input-paddingInline) / -4)",
  display: "inherit",
  alignItems: "center",
  paddingBlock: "var(--unstable_InputPaddingBlock)",
  // for wrapping Autocomplete's tags
  flexWrap: "wrap",
  // for wrapping Autocomplete's tags
  marginInlineEnd: "var(--Input-gap)",
  color: "var(--Input-decoratorColor)",
  cursor: "initial"
});
var StyledInputEndDecorator = styled_default("div")({
  "--Button-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
  "--IconButton-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
  "--Icon-margin": "0 calc(var(--Input-paddingInline) / -4) 0 0",
  display: "inherit",
  alignItems: "center",
  marginInlineStart: "var(--Input-gap)",
  color: "var(--Input-decoratorColor)",
  cursor: "initial"
});
var InputRoot = styled_default(StyledInputRoot, {
  name: "JoyInput",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var InputInput = styled_default(StyledInputHtml, {
  name: "JoyInput",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input
})({});
var InputStartDecorator = styled_default(StyledInputStartDecorator, {
  name: "JoyInput",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({});
var InputEndDecorator = styled_default(StyledInputEndDecorator, {
  name: "JoyInput",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({});
var Input = React3.forwardRef(function Input2(inProps, ref) {
  var _ref, _inProps$error, _ref2, _inProps$size, _inProps$color, _formControl$color;
  const props = useThemeProps({
    props: inProps,
    name: "JoyInput"
  });
  const _useForwardedInput = useForwardedInput(props, inputClasses_default), {
    propsToForward,
    rootStateClasses,
    inputStateClasses,
    getRootProps,
    getInputProps,
    formControl,
    focused,
    error: errorProp = false,
    disabled,
    fullWidth = false,
    size: sizeProp = "md",
    color: colorProp = "neutral",
    variant = "outlined",
    startDecorator,
    endDecorator,
    component,
    slots = {},
    slotProps = {}
  } = _useForwardedInput, other = _objectWithoutPropertiesLoose(_useForwardedInput, _excluded2);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React3.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const error = (_ref = (_inProps$error = inProps.error) != null ? _inProps$error : formControl == null ? void 0 : formControl.error) != null ? _ref : errorProp;
  const size = (_ref2 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref2 : sizeProp;
  const color = (_inProps$color = inProps.color) != null ? _inProps$color : error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
  const ownerState = _extends({
    instanceColor: error ? "danger" : inProps.color
  }, props, {
    fullWidth,
    color,
    disabled,
    error,
    focused,
    size,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: [classes.root, rootStateClasses],
    elementType: InputRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ownerState
  });
  const [SlotInput, inputProps] = useSlot("input", _extends({}, formControl && {
    additionalProps: {
      id: formControl.htmlFor,
      "aria-describedby": formControl["aria-describedby"]
    }
  }, {
    className: [classes.input, inputStateClasses],
    elementType: InputInput,
    getSlotProps: getInputProps,
    internalForwardedProps: propsToForward,
    externalForwardedProps,
    ownerState
  }));
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: InputStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: InputEndDecorator,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [startDecorator && (0, import_jsx_runtime.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
      children: startDecorator
    })), (0, import_jsx_runtime.jsx)(SlotInput, _extends({}, inputProps)), endDecorator && (0, import_jsx_runtime.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
      children: endDecorator
    }))]
  }));
});
true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  autoComplete: import_prop_types.default.string,
  /**
   * @ignore
   */
  autoFocus: import_prop_types.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * @ignore
   */
  defaultValue: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.string), import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * @ignore
   */
  disabled: import_prop_types.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endDecorator: import_prop_types.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   * @default false
   */
  error: import_prop_types.default.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types.default.string,
  /**
   * @ignore
   */
  name: import_prop_types.default.string,
  /**
   * @ignore
   */
  onChange: import_prop_types.default.func,
  /**
   * @ignore
   */
  placeholder: import_prop_types.default.string,
  /**
   * @ignore
   */
  readOnly: import_prop_types.default.bool,
  /**
   * @ignore
   */
  required: import_prop_types.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
  /**
   * Leading adornment for this input.
   */
  startDecorator: import_prop_types.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * @ignore
   */
  value: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.string), import_prop_types.default.number, import_prop_types.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var Input_default = Input;

export {
  INVERTED_COLORS_ATTR,
  applySolidInversion,
  applySoftInversion,
  getInputUtilityClass,
  inputClasses_default,
  FormControlContext_default,
  useForwardedInput,
  StyledInputRoot,
  StyledInputHtml,
  StyledInputStartDecorator,
  StyledInputEndDecorator,
  Input_default
};
//# sourceMappingURL=chunk-BMXJFFAZ.js.map