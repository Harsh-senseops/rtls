"use client";
import {
  AutocompleteListbox_default,
  AutocompleteOption_default,
  Autocomplete_default,
  ChipDelete_default,
  Chip_default,
  Close_default,
  ComponentListContext_default,
  GroupListContext_default,
  IconButton_default,
  ListItemButtonOrientationContext_default,
  ListItemButton_default,
  ListItem_default,
  ListProvider_default,
  ListSubheader_default,
  List_default,
  RadioGroupContext_default,
  RowListContext_default,
  StyledIconButton,
  StyledList,
  StyledListItem,
  StyledListItemButton,
  SvgIcon_default,
  VariantColorProvider,
  autocompleteClasses_default,
  autocompleteListboxClasses_default,
  autocompleteOptionClasses_default,
  chipClasses_default,
  chipDeleteClasses_default,
  createSvgIcon,
  getAutocompleteListboxUtilityClass,
  getAutocompleteOptionUtilityClass,
  getAutocompleteUtilityClass,
  getChipDeleteUtilityClass,
  getChipUtilityClass,
  getIconButtonUtilityClass,
  getListItemButtonUtilityClass,
  getListItemUtilityClass,
  getListSubheaderUtilityClass,
  getListUtilityClass,
  getSvgIconUtilityClass,
  iconButtonClasses_default,
  listClasses_default,
  listItemButtonClasses_default,
  listItemClasses_default,
  listSubheaderClasses_default,
  resolveSxValue,
  scopedVariables,
  svgIconClasses_default,
  useVariantColor
} from "./chunk-UEZTN77O.js";
import {
  Box_default
} from "./chunk-N3WSRZ75.js";
import {
  Button_default,
  CircularProgress_default,
  buttonClasses_default,
  circularProgressClasses_default,
  getButtonStyles,
  getButtonUtilityClass,
  getCircularProgressUtilityClass
} from "./chunk-XL6PLXUR.js";
import {
  ButtonGroupContext_default,
  ToggleButtonGroupContext_default
} from "./chunk-S67YB5OM.js";
import "./chunk-QUORQGCT.js";
import {
  FormControlContext_default,
  Input_default,
  applySoftInversion,
  applySolidInversion,
  getInputUtilityClass,
  inputClasses_default,
  useForwardedInput
} from "./chunk-BMXJFFAZ.js";
import {
  Breadcrumbs_default,
  breadcrumbsClasses_default,
  getBreadcrumbsUtilityClass
} from "./chunk-WE2FYR5Y.js";
import {
  CssVarsProvider,
  ThemeProvider,
  getInitColorSchemeScript,
  useColorScheme,
  useTheme
} from "./chunk-F2X67MIP.js";
import {
  Link_default,
  getLinkUtilityClass,
  linkClasses_default
} from "./chunk-WNM5AWV6.js";
import {
  ClickAwayListener,
  Dropdown,
  FocusTrap,
  ListActionTypes,
  ListContext,
  MenuProvider,
  Popper,
  Portal,
  SelectProvider,
  TabsListProvider,
  TabsProvider,
  TextareaAutosize,
  createFilterOptions,
  useButton,
  useMenu,
  useMenuButton,
  useMenuItem,
  useMenuItemContextStabilizer,
  useModal,
  useOption,
  useOptionContextStabilizer,
  useSelect,
  useSlider,
  useSnackbar,
  useSwitch,
  useTab,
  useTabPanel,
  useTabs,
  useTabsContext,
  useTabsList,
  valueToPercent
} from "./chunk-6L6ILJPJ.js";
import "./chunk-OTY6O57J.js";
import "./chunk-WQMNLJEZ.js";
import "./chunk-XBSOS2R6.js";
import {
  TypographyInheritContext,
  TypographyNestedContext,
  Typography_default,
  getTypographyUtilityClass,
  typographyClasses_default
} from "./chunk-4N5P5QO6.js";
import {
  isHostComponent,
  styled_default,
  useSlot,
  useSlotProps,
  useThemeProps
} from "./chunk-Z4UOSQWM.js";
import {
  GlobalStyles_default,
  HTMLElementType,
  StyledEngineProvider,
  capitalize,
  clsx_default,
  colors_default,
  composeClasses,
  createContainer,
  createGetCssVar2 as createGetCssVar,
  createGrid,
  createStack,
  css,
  defaultTheme_default,
  elementAcceptingRef_default,
  extendTheme,
  generateUtilityClass,
  generateUtilityClass2,
  generateUtilityClasses,
  generateUtilityClasses2,
  getPath,
  identifier_default,
  isMuiElement,
  keyframes,
  refType_default,
  require_jsx_runtime,
  shouldSkipGeneratingVar,
  traverseBreakpoints,
  useControlled,
  useEventCallback_default,
  useForkRef,
  useId,
  useIsFocusVisible,
  usePreviousProps_default
} from "./chunk-TY2NYQZJ.js";
import {
  require_prop_types
} from "./chunk-P3WVVHHB.js";
import {
  _extends,
  _objectWithoutPropertiesLoose
} from "./chunk-MYPTBXCV.js";
import "./chunk-KEE3L4NC.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/joy/GlobalStyles/GlobalStyles.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function GlobalStyles(props) {
  return (0, import_jsx_runtime.jsx)(GlobalStyles_default, _extends({}, props, {
    defaultTheme: defaultTheme_default,
    themeId: identifier_default
  }));
}
var GlobalStyles_default2 = GlobalStyles;

// node_modules/@mui/joy/Accordion/Accordion.js
var React3 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/joy/Accordion/accordionClasses.js
function getAccordionUtilityClass(slot) {
  return generateUtilityClass2("MuiAccordion", slot);
}
var accordionClasses = generateUtilityClasses2("MuiAccordion", ["root", "expanded", "disabled"]);
var accordionClasses_default = accordionClasses;

// node_modules/@mui/joy/Accordion/AccordionContext.js
var React2 = __toESM(require_react());
var AccordionContext = React2.createContext({});
if (true) {
  AccordionContext.displayName = "AccordionContext";
}
var AccordionContext_default = AccordionContext;

// node_modules/@mui/joy/AccordionDetails/accordionDetailsClasses.js
function getAccordionDetailsUtilityClass(slot) {
  return generateUtilityClass2("MuiAccordionDetails", slot);
}
var accordionDetailsClasses = generateUtilityClasses2("MuiAccordionDetails", ["root", "content", "expanded"]);
var accordionDetailsClasses_default = accordionDetailsClasses;

// node_modules/@mui/joy/Accordion/Accordion.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["accordionId", "component", "color", "children", "defaultExpanded", "disabled", "expanded", "onChange", "variant", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    variant,
    color,
    expanded,
    disabled
  } = ownerState;
  const slots = {
    root: ["root", expanded && "expanded", disabled && "disabled", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`]
  };
  return composeClasses(slots, getAccordionUtilityClass, {});
};
var AccordionRoot = styled_default(StyledListItem, {
  name: "JoyAccordion",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  borderBottom: "var(--Accordion-borderBottom)",
  "&[data-first-child]": {
    "--ListItem-radius": "var(--unstable_List-childRadius) var(--unstable_List-childRadius) 0 0"
  },
  "&[data-last-child]": {
    "--ListItem-radius": "0 0 var(--unstable_List-childRadius) var(--unstable_List-childRadius)",
    '& [aria-expanded="true"]': {
      "--ListItem-radius": "0"
    },
    [`& .${accordionDetailsClasses_default.root}`]: {
      "--AccordionDetails-radius": "0 0 var(--unstable_List-childRadius) var(--unstable_List-childRadius)"
    }
  },
  "&:not([data-first-child]):not([data-last-child])": {
    "--ListItem-radius": "0"
  }
});
var Accordion = React3.forwardRef(function Accordion2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAccordion"
  });
  const {
    accordionId: idOverride,
    component = "div",
    color = "neutral",
    children,
    defaultExpanded = false,
    disabled = false,
    expanded: expandedProp,
    onChange,
    variant = "plain",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const accordionId = useId(idOverride);
  const [expanded, setExpandedState] = useControlled({
    controlled: expandedProp,
    default: defaultExpanded,
    name: "Accordion",
    state: "expanded"
  });
  const handleChange = React3.useCallback((event) => {
    setExpandedState(!expanded);
    if (onChange) {
      onChange(event, !expanded);
    }
  }, [expanded, onChange, setExpandedState]);
  const contextValue = React3.useMemo(() => ({
    accordionId,
    expanded,
    disabled,
    toggle: handleChange
  }), [accordionId, expanded, disabled, handleChange]);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    color,
    variant,
    expanded,
    disabled,
    nested: true
    // for the ListItem styles
  });
  const classes = useUtilityClasses(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: AccordionRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime2.jsx)(AccordionContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime2.jsx)(SlotRoot, _extends({}, rootProps, {
      children: React3.Children.map(children, (child, index) => React3.isValidElement(child) && index === 0 ? React3.cloneElement(child, {
        // @ts-ignore: to let ListItem knows when to apply margin(Inline|Block)Start
        "data-first-child": ""
      }) : child)
    }))
  });
});
true ? Accordion.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The id to be used in the AccordionDetails which is controlled by the AccordionSummary.
   * If not provided, the id is autogenerated.
   */
  accordionId: import_prop_types.default.string,
  /**
   * Used to render icon or text elements inside the Accordion if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, expands the accordion by default.
   * @default false
   */
  defaultExpanded: import_prop_types.default.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded: import_prop_types.default.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange: import_prop_types.default.func,
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
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var Accordion_default = Accordion;

// node_modules/@mui/joy/AccordionDetails/AccordionDetails.js
var React4 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded2 = ["component", "children", "color", "variant", "slots", "slotProps"];
var useUtilityClasses2 = (ownerState) => {
  const {
    expanded
  } = ownerState;
  const slots = {
    root: ["root", expanded && "expanded"],
    content: ["content", expanded && "expanded"]
  };
  return composeClasses(slots, getAccordionDetailsUtilityClass, {});
};
var AccordionDetailsRoot = styled_default("div", {
  name: "JoyAccordionDetails",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants;
  return _extends({
    overflow: "hidden",
    borderRadius: "var(--AccordionDetails-radius)",
    display: "grid",
    gridTemplateRows: "1fr",
    marginInline: "calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",
    transition: "var(--AccordionDetails-transition)"
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
    [`&:not(.${accordionDetailsClasses_default.expanded})`]: {
      gridTemplateRows: "0fr"
    }
  });
});
var AccordionDetailsContent = styled_default("div", {
  name: "JoyAccordionDetails",
  slot: "Content",
  overridesResolver: (props, styles) => styles.root
})({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  // required for user-provided transition to work
  // Need to apply padding to content rather than root because the overflow.
  // Otherwise, the focus ring of the children can be cut off.
  paddingInlineStart: "var(--ListItem-paddingLeft)",
  paddingInlineEnd: "var(--ListItem-paddingRight)",
  paddingBlockStart: "calc(var(--ListItem-paddingY) / 2)",
  paddingBlockEnd: "calc(2.5 * var(--ListItem-paddingY))",
  transition: "var(--AccordionDetails-transition)",
  [`&:not(.${accordionDetailsClasses_default.expanded})`]: {
    paddingBlock: 0
  }
});
var AccordionDetails = React4.forwardRef(function AccordionDetails2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAccordionDetails"
  });
  const {
    component = "div",
    children,
    color = "neutral",
    variant = "plain",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const {
    accordionId,
    expanded = false
  } = React4.useContext(AccordionContext_default);
  const rootRef = React4.useRef(null);
  const handleRef = useForkRef(rootRef, ref);
  React4.useEffect(() => {
    if (rootRef.current) {
      const elements = rootRef.current.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
      elements.forEach((elm) => {
        if (expanded) {
          const prevTabIndex = elm.getAttribute("data-prev-tabindex");
          const currentTabIndex = elm.getAttribute("tabindex");
          if (currentTabIndex && prevTabIndex) {
            elm.setAttribute("tabindex", prevTabIndex);
            elm.removeAttribute("data-prev-tabindex");
          }
          if (!prevTabIndex && !currentTabIndex) {
            elm.removeAttribute("tabindex");
          }
        } else {
          elm.setAttribute("data-prev-tabindex", elm.getAttribute("tabindex") || "");
          elm.setAttribute("tabindex", "-1");
        }
      });
    }
  }, [expanded]);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    color,
    variant,
    expanded,
    nesting: true
    // for the List styles
  });
  const classes = useUtilityClasses2(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref: handleRef,
    className: classes.root,
    elementType: AccordionDetailsRoot,
    externalForwardedProps,
    additionalProps: {
      id: `${accordionId}-details`,
      "aria-labelledby": `${accordionId}-summary`,
      role: "region",
      hidden: expanded ? void 0 : true
    },
    ownerState
  });
  const [SlotContent, contentProps] = useSlot("content", {
    className: classes.content,
    elementType: AccordionDetailsContent,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime3.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime3.jsx)(SlotContent, _extends({}, contentProps, {
      children
    }))
  }));
});
true ? AccordionDetails.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the AccordionDetails if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types2.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types2.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    content: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    content: import_prop_types2.default.elementType,
    root: import_prop_types2.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types2.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var AccordionDetails_default = AccordionDetails;

// node_modules/@mui/joy/AccordionGroup/AccordionGroup.js
var React5 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/joy/AccordionGroup/accordionGroupClasses.js
function getAccordionGroupUtilityClass(slot) {
  return generateUtilityClass2("MuiAccordionGroup", slot);
}
var accordionGroupClasses = generateUtilityClasses2("MuiAccordionGroup", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg"]);
var accordionGroupClasses_default = accordionGroupClasses;

// node_modules/@mui/joy/AccordionGroup/AccordionGroup.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded3 = ["component", "color", "children", "disableDivider", "variant", "transition", "size", "slots", "slotProps"];
var useUtilityClasses3 = (ownerState) => {
  const {
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getAccordionGroupUtilityClass, {});
};
var AccordionGroupRoot = styled_default(StyledList, {
  name: "JoyAccordionGroup",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  let transition = {};
  if (ownerState.transition) {
    if (typeof ownerState.transition === "string") {
      transition = {
        "--AccordionDetails-transition": `grid-template-rows ${ownerState.transition}, padding-block ${ownerState.transition}`
      };
    }
    if (typeof ownerState.transition === "object") {
      transition = {
        "--AccordionDetails-transition": `grid-template-rows ${ownerState.transition.initial}, padding-block ${ownerState.transition.initial}`,
        [`& .${accordionDetailsClasses_default.root}.${accordionDetailsClasses_default.expanded}`]: {
          "--AccordionDetails-transition": `grid-template-rows ${ownerState.transition.expanded}, padding-block ${ownerState.transition.expanded}`
        }
      };
    }
  }
  return _extends({
    "--List-padding": "0px",
    "--ListDivider-gap": "0px"
  }, transition, !ownerState.disableDivider && {
    [`& .${accordionClasses_default.root}:not([data-last-child])`]: {
      "--Accordion-borderBottom": `1px solid ${theme.vars.palette.divider}`
    }
  });
});
var AccordionGroup = React5.forwardRef(function AccordionGroup2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAccordionGroup"
  });
  const {
    component = "div",
    color = "neutral",
    children,
    disableDivider = false,
    variant = "plain",
    transition = "0.2s ease",
    size = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    color,
    disableDivider,
    variant,
    transition,
    size
  });
  const classes = useUtilityClasses3(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: AccordionGroupRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime4.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime4.jsx)(ListProvider_default, {
      children
    })
  }));
});
true ? AccordionGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the AccordionGroup if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types3.default.node,
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
   * If `true`, the divider between accordions will be hidden.
   * @default false
   */
  disableDivider: import_prop_types3.default.bool,
  /**
   * The size of the component (affect other nested list* components).
   * @default 'md'
   */
  size: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["sm", "md", "lg"]), import_prop_types3.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types3.default.shape({
    root: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types3.default.shape({
    root: import_prop_types3.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The CSS transition for the Accordion details.
   * @default '0.2s ease'
   */
  transition: import_prop_types3.default.oneOfType([import_prop_types3.default.shape({
    expanded: import_prop_types3.default.string.isRequired,
    initial: import_prop_types3.default.string.isRequired
  }), import_prop_types3.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types3.default.oneOfType([import_prop_types3.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types3.default.string])
} : void 0;
var AccordionGroup_default = AccordionGroup;

// node_modules/@mui/joy/AccordionSummary/AccordionSummary.js
var React7 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());

// node_modules/@mui/joy/AccordionSummary/accordionSummaryClasses.js
function getAccordionSummaryUtilityClass(slot) {
  return generateUtilityClass2("MuiAccordionSummary", slot);
}
var accordionSummaryClasses = generateUtilityClasses2("MuiAccordionSummary", ["root", "button", "indicator", "disabled", "expanded"]);
var accordionSummaryClasses_default = accordionSummaryClasses;

// node_modules/@mui/joy/internal/svg-icons/KeyboardArrowDown.js
var React6 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var KeyboardArrowDown_default = createSvgIcon((0, import_jsx_runtime5.jsx)("path", {
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}), "KeyboardArrowDown");

// node_modules/@mui/joy/AccordionSummary/AccordionSummary.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _KeyboardArrowDown;
var _excluded4 = ["component", "color", "children", "indicator", "variant", "slots", "slotProps"];
var useUtilityClasses4 = (ownerState) => {
  const {
    disabled,
    expanded
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", expanded && "expanded"],
    button: ["button", disabled && "disabled", expanded && "expanded"],
    indicator: ["indicator", disabled && "disabled", expanded && "expanded"]
  };
  return composeClasses(slots, getAccordionSummaryUtilityClass, {});
};
var AccordionSummaryRoot = styled_default(StyledListItem, {
  name: "JoyAccordionSummary",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  fontWeight: theme.vars.fontWeight.md,
  gap: "calc(var(--ListItem-paddingX, 0.75rem) + 0.25rem)",
  [`&.${accordionSummaryClasses_default.expanded}`]: {
    "--Icon-color": "currentColor"
  }
}));
var AccordionSummaryButton = styled_default(StyledListItemButton, {
  name: "JoyAccordionSummary",
  slot: "Button",
  overridesResolver: (props, styles) => styles.button
})({
  gap: "inherit",
  fontWeight: "inherit",
  justifyContent: "space-between",
  font: "inherit",
  "&:focus-visible": {
    zIndex: 1
    // to make the focus ring appear above the next Accordion.
  },
  [`.${accordionSummaryClasses_default.root} &`]: {
    "--unstable_ListItem-flex": "1 0 0%"
    // grow to fill the available space of ListItem
  }
});
var AccordionSummaryIndicator = styled_default("span", {
  name: "JoyAccordionSummary",
  slot: "Indicator",
  overridesResolver: (props, styles) => styles.indicator
})({
  display: "inline-flex",
  [`&.${accordionSummaryClasses_default.expanded}`]: {
    transform: "rotate(180deg)"
  }
});
var AccordionSummary = React7.forwardRef(function AccordionSummary2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAccordionSummary"
  });
  const {
    component = "div",
    color = "neutral",
    children,
    indicator = _KeyboardArrowDown || (_KeyboardArrowDown = (0, import_jsx_runtime6.jsx)(KeyboardArrowDown_default, {})),
    variant = "plain",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const {
    accordionId,
    disabled = false,
    expanded = false,
    toggle
  } = React7.useContext(AccordionContext_default);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    color,
    disabled,
    expanded,
    variant
  });
  const handleClick = (event) => {
    if (toggle) {
      toggle(event);
    }
    if (typeof slotProps.button === "function") {
      var _slotProps$button, _slotProps$button$onC;
      (_slotProps$button = slotProps.button(ownerState)) == null || (_slotProps$button$onC = _slotProps$button.onClick) == null || _slotProps$button$onC.call(_slotProps$button, event);
    } else {
      var _slotProps$button2, _slotProps$button2$on;
      (_slotProps$button2 = slotProps.button) == null || (_slotProps$button2$on = _slotProps$button2.onClick) == null || _slotProps$button2$on.call(_slotProps$button2, event);
    }
  };
  const classes = useUtilityClasses4(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: AccordionSummaryRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotButton, buttonProps] = useSlot("button", {
    ref,
    className: classes.button,
    elementType: AccordionSummaryButton,
    externalForwardedProps,
    additionalProps: {
      component: "button",
      id: `${accordionId}-summary`,
      "aria-expanded": expanded ? "true" : "false",
      "aria-controls": `${accordionId}-details`,
      disabled,
      type: "button",
      onClick: handleClick
    },
    ownerState
  });
  const [SlotIndicator, indicatorProps] = useSlot("indicator", {
    ref,
    className: classes.indicator,
    elementType: AccordionSummaryIndicator,
    externalForwardedProps,
    ownerState
  });
  return (
    // Root and Button slots are required based on [WAI-ARIA Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/)
    (0, import_jsx_runtime6.jsx)(SlotRoot, _extends({}, rootProps, {
      children: (0, import_jsx_runtime7.jsxs)(SlotButton, _extends({}, buttonProps, {
        children: [children, indicator && (0, import_jsx_runtime6.jsx)(SlotIndicator, _extends({}, indicatorProps, {
          children: indicator
        }))]
      }))
    }))
  );
});
true ? AccordionSummary.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the AccordionSummary if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types4.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types4.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types4.default.elementType,
  /**
   * The indicator element to display.
   * @default <KeyboardArrowDown />
   */
  indicator: import_prop_types4.default.node,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types4.default.shape({
    button: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object]),
    indicator: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object]),
    root: import_prop_types4.default.oneOfType([import_prop_types4.default.func, import_prop_types4.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types4.default.shape({
    button: import_prop_types4.default.elementType,
    indicator: import_prop_types4.default.elementType,
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
  variant: import_prop_types4.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var AccordionSummary_default = AccordionSummary;

// node_modules/@mui/joy/Alert/Alert.js
var React8 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/joy/Alert/alertClasses.js
function getAlertUtilityClass(slot) {
  return generateUtilityClass2("MuiAlert", slot);
}
var alertClasses = generateUtilityClasses2("MuiAlert", ["root", "startDecorator", "endDecorator", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var alertClasses_default = alertClasses;

// node_modules/@mui/joy/Alert/Alert.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded5 = ["children", "className", "color", "invertedColors", "role", "variant", "size", "startDecorator", "endDecorator", "component", "slots", "slotProps"];
var useUtilityClasses5 = (ownerState) => {
  const {
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", size && `size${capitalize(size)}`, color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getAlertUtilityClass, {});
};
var AlertRoot = styled_default("div", {
  name: "JoyAlert",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
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
  return [_extends({
    "--Alert-radius": theme.vars.radius.sm,
    "--Alert-decoratorChildRadius": "max((var(--Alert-radius) - var(--variant-borderWidth, 0px)) - var(--Alert-padding), min(var(--Alert-padding) + var(--variant-borderWidth, 0px), var(--Alert-radius) / 2))",
    "--Button-minHeight": "var(--Alert-decoratorChildHeight)",
    "--IconButton-size": "var(--Alert-decoratorChildHeight)",
    "--Button-radius": "var(--Alert-decoratorChildRadius)",
    "--IconButton-radius": "var(--Alert-decoratorChildRadius)",
    "--Icon-color": "currentColor"
  }, ownerState.size === "sm" && {
    "--Alert-padding": "0.5rem",
    "--Alert-decoratorChildHeight": "1.5rem",
    "--Icon-fontSize": theme.vars.fontSize.xl,
    gap: "0.5rem"
  }, ownerState.size === "md" && {
    "--Alert-padding": "0.75rem",
    "--Alert-decoratorChildHeight": "2rem",
    "--Icon-fontSize": theme.vars.fontSize.xl,
    gap: "0.625rem"
  }, ownerState.size === "lg" && {
    "--Alert-padding": "1rem",
    "--Alert-decoratorChildHeight": "2.375rem",
    "--Icon-fontSize": theme.vars.fontSize.xl2,
    gap: "0.875rem"
  }, {
    backgroundColor: theme.vars.palette.background.surface,
    display: "flex",
    position: "relative",
    alignItems: "center",
    padding: `var(--Alert-padding)`,
    borderRadius: "var(--Alert-radius)"
  }, theme.typography[`body-${{
    sm: "xs",
    md: "sm",
    lg: "md"
  }[ownerState.size]}`], {
    fontWeight: theme.vars.fontWeight.md
  }, ownerState.variant === "solid" && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === "soft" && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]), p !== void 0 && {
    "--Alert-padding": p
  }, padding !== void 0 && {
    "--Alert-padding": padding
  }, borderRadius !== void 0 && {
    "--Alert-radius": borderRadius
  }];
});
var AlertStartDecorator = styled_default("span", {
  name: "JoyAlert",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  display: "inherit",
  flex: "none"
});
var AlertEndDecorator = styled_default("span", {
  name: "JoyAlert",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  display: "inherit",
  flex: "none",
  marginLeft: "auto"
});
var Alert = React8.forwardRef(function Alert2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAlert"
  });
  const {
    children,
    className,
    color = "neutral",
    invertedColors = false,
    role = "alert",
    variant = "soft",
    size = "md",
    startDecorator,
    endDecorator,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = _extends({}, props, {
    color,
    invertedColors,
    variant,
    size
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
    elementType: AlertRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      role
    }
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: AlertStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: AlertEndDecorator,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime9.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [startDecorator && (0, import_jsx_runtime8.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
      children: startDecorator
    })), children, endDecorator && (0, import_jsx_runtime8.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
      children: endDecorator
    }))]
  }));
});
true ? Alert.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
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
   * Element placed after the children.
   */
  endDecorator: import_prop_types5.default.node,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types5.default.bool,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: import_prop_types5.default.string,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["sm", "md", "lg"]), import_prop_types5.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types5.default.shape({
    endDecorator: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object]),
    root: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object]),
    startDecorator: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types5.default.shape({
    endDecorator: import_prop_types5.default.elementType,
    root: import_prop_types5.default.elementType,
    startDecorator: import_prop_types5.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: import_prop_types5.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types5.default.oneOfType([import_prop_types5.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types5.default.string])
} : void 0;
var Alert_default = Alert;

// node_modules/@mui/joy/AspectRatio/AspectRatio.js
var React9 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/joy/AspectRatio/aspectRatioClasses.js
function getAspectRatioUtilityClass(slot) {
  return generateUtilityClass2("MuiAspectRatio", slot);
}
var aspectRatioClasses = generateUtilityClasses2("MuiAspectRatio", ["root", "content", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var aspectRatioClasses_default = aspectRatioClasses;

// node_modules/@mui/joy/AspectRatio/AspectRatio.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded6 = ["children", "ratio", "minHeight", "maxHeight", "objectFit", "color", "variant", "component", "flex", "slots", "slotProps"];
var useUtilityClasses6 = (ownerState) => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root"],
    content: ["content", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getAspectRatioUtilityClass, {});
};
var AspectRatioRoot = styled_default("div", {
  name: "JoyAspectRatio",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  const minHeight = typeof ownerState.minHeight === "number" ? `${ownerState.minHeight}px` : ownerState.minHeight;
  const maxHeight = typeof ownerState.maxHeight === "number" ? `${ownerState.maxHeight}px` : ownerState.maxHeight;
  return {
    // a context variable for any child component
    "--AspectRatio-paddingBottom": `clamp(var(--AspectRatio-minHeight), calc(100% / (${ownerState.ratio})), var(--AspectRatio-maxHeight))`,
    "--AspectRatio-maxHeight": maxHeight || "9999px",
    "--AspectRatio-minHeight": minHeight || "0px",
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    borderRadius: "var(--AspectRatio-radius)",
    display: ownerState.flex ? "flex" : "block",
    flex: ownerState.flex ? 1 : "initial",
    flexDirection: "column",
    margin: "var(--AspectRatio-margin)"
  };
});
var AspectRatioContent = styled_default("div", {
  name: "JoyAspectRatio",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  return _extends({
    flex: 1,
    position: "relative",
    borderRadius: "inherit",
    height: 0,
    paddingBottom: "calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",
    overflow: "hidden",
    transition: "inherit",
    // makes it easy to add transition to the content
    // use data-attribute instead of :first-child to support zero config SSR (emotion)
    // use nested selector for integrating with nextjs image `fill` layout (spans are inserted on top of the img)
    "& [data-first-child]": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: ownerState.objectFit,
      margin: 0,
      padding: 0,
      "& > img": {
        // support art-direction that uses <picture><img /></picture>
        width: "100%",
        height: "100%",
        objectFit: ownerState.objectFit
      }
    }
  }, theme.typography["body-md"], (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var AspectRatio = React9.forwardRef(function AspectRatio2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAspectRatio"
  });
  const {
    children,
    ratio = "16 / 9",
    minHeight,
    maxHeight,
    objectFit = "cover",
    color = "neutral",
    variant = "soft",
    component,
    flex = false,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const ownerState = _extends({}, props, {
    flex,
    minHeight,
    maxHeight,
    objectFit,
    ratio,
    color,
    variant
  });
  const classes = useUtilityClasses6(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: AspectRatioRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotContent, contentProps] = useSlot("content", {
    className: classes.content,
    elementType: AspectRatioContent,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime10.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime10.jsx)(SlotContent, _extends({}, contentProps, {
      children: React9.Children.map(children, (child, index) => index === 0 && React9.isValidElement(child) ? React9.cloneElement(child, {
        "data-first-child": ""
      }) : child)
    }))
  }));
});
true ? AspectRatio.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the AspectRatio if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types6.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types6.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types6.default.elementType,
  /**
   * By default, the AspectRatio will maintain the aspect ratio of its content.
   * Set this prop to `true` when the container is a flex row and you want the AspectRatio to fill the height of its container.
   * @default false
   */
  flex: import_prop_types6.default.bool,
  /**
   * The maximum calculated height of the element (not the CSS height).
   */
  maxHeight: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]),
  /**
   * The minimum calculated height of the element (not the CSS height).
   */
  minHeight: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]),
  /**
   * The CSS object-fit value of the first-child.
   * @default 'cover'
   */
  objectFit: import_prop_types6.default.oneOf(["-moz-initial", "contain", "cover", "fill", "inherit", "initial", "none", "revert-layer", "revert", "scale-down", "unset"]),
  /**
   * The aspect-ratio of the element. The current implementation uses padding instead of the CSS aspect-ratio due to browser support.
   * https://caniuse.com/?search=aspect-ratio
   * @default '16 / 9'
   */
  ratio: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types6.default.shape({
    content: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object]),
    root: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types6.default.shape({
    content: import_prop_types6.default.elementType,
    root: import_prop_types6.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types6.default.oneOfType([import_prop_types6.default.arrayOf(import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.object, import_prop_types6.default.bool])), import_prop_types6.default.func, import_prop_types6.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types6.default.oneOfType([import_prop_types6.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types6.default.string])
} : void 0;
var AspectRatio_default = AspectRatio;

// node_modules/@mui/joy/Avatar/Avatar.js
var React12 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/@mui/joy/internal/svg-icons/Person.js
var React10 = __toESM(require_react());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var Person_default = createSvgIcon((0, import_jsx_runtime11.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");

// node_modules/@mui/joy/Avatar/avatarClasses.js
function getAvatarUtilityClass(slot) {
  return generateUtilityClass2("MuiAvatar", slot);
}
var avatarClasses = generateUtilityClasses2("MuiAvatar", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "fallback", "sizeSm", "sizeMd", "sizeLg", "img", "variantOutlined", "variantSoft", "variantSolid"]);
var avatarClasses_default = avatarClasses;

// node_modules/@mui/joy/AvatarGroup/AvatarGroup.js
var React11 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());

// node_modules/@mui/joy/AvatarGroup/avatarGroupClasses.js
function getAvatarGroupUtilityClass(slot) {
  return generateUtilityClass2("MuiAvatarGroup", slot);
}
var avatarGroupClasses = generateUtilityClasses2("MuiAvatarGroup", ["root"]);
var avatarGroupClasses_default = avatarGroupClasses;

// node_modules/@mui/joy/AvatarGroup/AvatarGroup.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded7 = ["className", "color", "component", "size", "variant", "children", "slots", "slotProps"];
var AvatarGroupContext = React11.createContext(void 0);
var useUtilityClasses7 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getAvatarGroupUtilityClass, {});
};
var AvatarGroupGroupRoot = styled_default("div", {
  name: "JoyAvatarGroup",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => _extends({}, ownerState.size === "sm" && {
  "--AvatarGroup-gap": "-0.375rem",
  "--Avatar-ringSize": "2px"
}, ownerState.size === "md" && {
  "--AvatarGroup-gap": "-0.5rem",
  "--Avatar-ringSize": "2px"
}, ownerState.size === "lg" && {
  "--AvatarGroup-gap": "-0.625rem",
  "--Avatar-ringSize": "4px"
}, {
  "--Avatar-ring": `0 0 0 var(--Avatar-ringSize) var(--Avatar-ringColor, ${theme.vars.palette.background.surface})`,
  "--Avatar-marginInlineStart": "var(--AvatarGroup-gap)",
  display: "flex",
  marginInlineStart: "calc(-1 * var(--AvatarGroup-gap))"
}));
var AvatarGroup = React11.forwardRef(function AvatarGroup2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAvatarGroup"
  });
  const {
    className,
    color,
    component = "div",
    size = "md",
    variant,
    children,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const ownerState = React11.useMemo(() => _extends({}, props, {
    color,
    component,
    size,
    variant
  }), [color, component, props, size, variant]);
  const classes = useUtilityClasses7();
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: AvatarGroupGroupRoot,
    externalForwardedProps: _extends({}, other, {
      component,
      slots,
      slotProps
    }),
    ownerState
  });
  return (0, import_jsx_runtime12.jsx)(AvatarGroupContext.Provider, {
    value: ownerState,
    children: (0, import_jsx_runtime12.jsx)(SlotRoot, _extends({}, rootProps, {
      children
    }))
  });
});
true ? AvatarGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the AvatarGroup if `src` is not set.
   * This can be an element, or just a string.
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
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types7.default.oneOfType([import_prop_types7.default.oneOf(["lg", "md", "sm"]), import_prop_types7.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types7.default.shape({
    root: import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types7.default.shape({
    root: import_prop_types7.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types7.default.oneOfType([import_prop_types7.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types7.default.string])
} : void 0;
var AvatarGroup_default = AvatarGroup;

// node_modules/@mui/joy/Avatar/Avatar.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded8 = ["alt", "color", "size", "variant", "src", "srcSet", "children", "component", "slots", "slotProps"];
var useUtilityClasses8 = (ownerState) => {
  const {
    size,
    variant,
    color,
    src,
    srcSet
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    img: [(src || srcSet) && "img"],
    fallback: ["fallback"]
  };
  return composeClasses(slots, getAvatarUtilityClass, {});
};
var AvatarRoot = styled_default("div", {
  name: "JoyAvatar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  return _extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon
  }, theme.typography[`title-${ownerState.size}`], ownerState.size === "sm" && {
    width: `var(--Avatar-size, 2rem)`,
    height: `var(--Avatar-size, 2rem)`,
    fontSize: `calc(var(--Avatar-size, 2rem) * 0.4375)`
    // default as 14px
  }, ownerState.size === "md" && {
    width: `var(--Avatar-size, 2.5rem)`,
    height: `var(--Avatar-size, 2.5rem)`,
    fontSize: `calc(var(--Avatar-size, 2.5rem) * 0.4)`
    // default as 16px
  }, ownerState.size === "lg" && {
    width: `var(--Avatar-size, 3rem)`,
    height: `var(--Avatar-size, 3rem)`,
    fontSize: `calc(var(--Avatar-size, 3rem) * 0.375)`
    // default as 18px
  }, {
    marginInlineStart: "var(--Avatar-marginInlineStart)",
    boxShadow: `var(--Avatar-ring)`,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    lineHeight: 1,
    overflow: "hidden",
    borderRadius: "var(--Avatar-radius, 50%)",
    userSelect: "none"
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var AvatarImg = styled_default("img", {
  name: "JoyAvatar",
  slot: "Img",
  overridesResolver: (props, styles) => styles.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image. The property isn't supported by IE11.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
});
var AvatarFallback = styled_default(Person_default, {
  name: "JoyAvatar",
  slot: "Fallback",
  overridesResolver: (props, styles) => styles.fallback
})({
  width: "64%",
  height: "64%"
});
function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}) {
  const [loaded, setLoaded] = React12.useState(false);
  React12.useEffect(() => {
    if (!src && !srcSet) {
      return void 0;
    }
    setLoaded(false);
    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded("loaded");
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded("error");
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    if (src) {
      image.src = src;
    }
    if (srcSet) {
      image.srcset = srcSet;
    }
    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);
  return loaded;
}
var Avatar = React12.forwardRef(function Avatar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyAvatar"
  });
  const groupContext = React12.useContext(AvatarGroupContext);
  const {
    alt,
    color: colorProp = "neutral",
    size: sizeProp = "md",
    variant: variantProp = "soft",
    src,
    srcSet,
    children: childrenProp,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  const variant = inProps.variant || (groupContext == null ? void 0 : groupContext.variant) || variantProp;
  const color = inProps.color || (groupContext == null ? void 0 : groupContext.color) || colorProp;
  const size = inProps.size || (groupContext == null ? void 0 : groupContext.size) || sizeProp;
  let children = null;
  const ownerState = _extends({}, props, {
    color,
    size,
    variant,
    grouped: !!groupContext
  });
  const classes = useUtilityClasses8(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: AvatarRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotImg, imageProps] = useSlot("img", {
    additionalProps: {
      alt,
      src,
      srcSet
    },
    className: classes.img,
    elementType: AvatarImg,
    externalForwardedProps,
    ownerState
  });
  const [SlotFallback, fallbackProps] = useSlot("fallback", {
    className: classes.fallback,
    elementType: AvatarFallback,
    externalForwardedProps,
    ownerState
  });
  const loaded = useLoaded(_extends({}, imageProps, {
    src,
    srcSet
  }));
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== "error";
  if (hasImgNotFailing) {
    children = (0, import_jsx_runtime13.jsx)(SlotImg, _extends({}, imageProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (alt) {
    children = alt[0];
  } else {
    children = (0, import_jsx_runtime13.jsx)(SlotFallback, _extends({}, fallbackProps));
  }
  return (0, import_jsx_runtime13.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? Avatar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: import_prop_types8.default.string,
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types8.default.node,
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
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["lg", "md", "sm"]), import_prop_types8.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types8.default.shape({
    fallback: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object]),
    img: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object]),
    root: import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types8.default.shape({
    fallback: import_prop_types8.default.elementType,
    img: import_prop_types8.default.elementType,
    root: import_prop_types8.default.elementType
  }),
  /**
   * The `src` attribute for the `img` element.
   */
  src: import_prop_types8.default.string,
  /**
   * The `srcSet` attribute for the `img` element.
   * Use this attribute for responsive image display.
   */
  srcSet: import_prop_types8.default.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types8.default.oneOfType([import_prop_types8.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types8.default.string])
} : void 0;
var Avatar_default = Avatar;

// node_modules/@mui/joy/Badge/Badge.js
var React13 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/joy/Badge/badgeClasses.js
function getBadgeUtilityClass(slot) {
  return generateUtilityClass2("MuiBadge", slot);
}
var badgeClasses = generateUtilityClasses2("MuiBadge", ["root", "badge", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "colorContext", "invisible", "locationInside", "locationOutside", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var badgeClasses_default = badgeClasses;

// node_modules/@mui/joy/Badge/Badge.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded9 = ["anchorOrigin", "badgeInset", "children", "size", "color", "invisible", "max", "badgeContent", "showZero", "variant", "component", "slots", "slotProps"];
var useUtilityClasses9 = (ownerState) => {
  const {
    color,
    variant,
    size,
    anchorOrigin,
    invisible
  } = ownerState;
  const slots = {
    root: ["root"],
    badge: ["badge", invisible && "invisible", anchorOrigin && `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getBadgeUtilityClass, {});
};
var BadgeRoot = styled_default("span", {
  name: "JoyBadge",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({}, ownerState.size === "sm" && _extends({
  "--Badge-minHeight": "0.5rem"
}, ownerState.badgeContent && {
  "--Badge-minHeight": "1rem"
}, {
  "--Badge-paddingX": "0.25rem"
}), ownerState.size === "md" && _extends({
  "--Badge-minHeight": "0.75rem"
}, ownerState.badgeContent && {
  "--Badge-minHeight": "1.25rem"
}, {
  "--Badge-paddingX": "0.375rem"
}), ownerState.size === "lg" && _extends({
  "--Badge-minHeight": "1rem"
}, ownerState.badgeContent && {
  "--Badge-minHeight": "1.5rem"
}, {
  "--Badge-paddingX": "0.5rem"
}), {
  "--Badge-ringSize": "2px",
  "--Badge-ring": `0 0 0 var(--Badge-ringSize) var(--Badge-ringColor, ${theme.vars.palette.background.surface})`,
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}));
var BadgeBadge = styled_default("span", {
  name: "JoyBadge",
  slot: "Badge",
  overridesResolver: (props, styles) => styles.badge
})(({
  theme,
  ownerState
}) => {
  var _ownerState$anchorOri, _ownerState$anchorOri2, _ownerState$anchorOri3, _ownerState$anchorOri4, _typography$lineHeigh, _theme$variants;
  const inset = {
    top: ownerState.badgeInset,
    left: ownerState.badgeInset,
    bottom: ownerState.badgeInset,
    right: ownerState.badgeInset
  };
  if (typeof ownerState.badgeInset === "string") {
    const insetValues = ownerState.badgeInset.split(" ");
    if (insetValues.length > 1) {
      inset.top = insetValues[0];
      inset.right = insetValues[1];
      if (insetValues.length === 2) {
        inset.bottom = insetValues[0];
        inset.left = insetValues[1];
      }
      if (insetValues.length === 3) {
        inset.left = insetValues[1];
        inset.bottom = insetValues[2];
      }
      if (insetValues.length === 4) {
        inset.bottom = insetValues[2];
        inset.left = insetValues[3];
      }
    }
  }
  const translateY = ((_ownerState$anchorOri = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri.vertical) === "top" ? "translateY(-50%)" : "translateY(50%)";
  const translateX = ((_ownerState$anchorOri2 = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri2.horizontal) === "left" ? "translateX(-50%)" : "translateX(50%)";
  const transformOriginY = ((_ownerState$anchorOri3 = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri3.vertical) === "top" ? "0%" : "100%";
  const transformOriginX = ((_ownerState$anchorOri4 = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri4.horizontal) === "left" ? "0%" : "100%";
  const typography = theme.typography[`body-${{
    sm: "xs",
    md: "sm",
    lg: "md"
  }[ownerState.size]}`];
  return _extends({
    "--Icon-color": "currentColor",
    "--Icon-fontSize": `calc(1em * ${(_typography$lineHeigh = typography.lineHeight) != null ? _typography$lineHeigh : "1"})`,
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    boxSizing: "border-box",
    boxShadow: "var(--Badge-ring)",
    lineHeight: 1,
    padding: "0 calc(var(--Badge-paddingX) - var(--variant-borderWidth, 0px))",
    minHeight: "var(--Badge-minHeight)",
    minWidth: "var(--Badge-minHeight)",
    borderRadius: "var(--Badge-radius, var(--Badge-minHeight))",
    zIndex: theme.vars.zIndex.badge,
    backgroundColor: theme.vars.palette.background.surface,
    [ownerState.anchorOrigin.vertical]: inset[ownerState.anchorOrigin.vertical],
    [ownerState.anchorOrigin.horizontal]: inset[ownerState.anchorOrigin.horizontal],
    transform: `scale(1) ${translateX} ${translateY}`,
    transformOrigin: `${transformOriginX} ${transformOriginY}`,
    [`&.${badgeClasses_default.invisible}`]: {
      transform: `scale(0) ${translateX} ${translateY}`
    }
  }, typography, {
    fontWeight: theme.vars.fontWeight.md
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var Badge = React13.forwardRef(function Badge2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyBadge"
  });
  const {
    anchorOrigin: anchorOriginProp = {
      vertical: "top",
      horizontal: "right"
    },
    badgeInset: badgeInsetProp = 0,
    children,
    size: sizeProp = "md",
    color: colorProp = "primary",
    invisible: invisibleProp = false,
    max = 99,
    badgeContent: badgeContentProp = "",
    showZero = false,
    variant: variantProp = "solid",
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const prevProps = usePreviousProps_default({
    anchorOrigin: anchorOriginProp,
    size: sizeProp,
    badgeInset: badgeInsetProp,
    color: colorProp,
    variant: variantProp
  });
  let invisible = invisibleProp;
  if (invisibleProp === false && (badgeContentProp === 0 && !showZero || badgeContentProp == null)) {
    invisible = true;
  }
  const {
    color = colorProp,
    size = sizeProp,
    anchorOrigin = anchorOriginProp,
    variant = variantProp,
    badgeInset = badgeInsetProp
  } = invisible ? prevProps : props;
  const ownerState = _extends({}, props, {
    anchorOrigin,
    badgeInset,
    variant,
    invisible,
    color,
    size
  });
  const classes = useUtilityClasses9(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  let displayValue = badgeContentProp && Number(badgeContentProp) > max ? `${max}+` : badgeContentProp;
  if (invisible && badgeContentProp === 0) {
    displayValue = "";
  }
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: BadgeRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotBadge, badgeProps] = useSlot("badge", {
    className: classes.badge,
    elementType: BadgeBadge,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime15.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [children, (0, import_jsx_runtime14.jsx)(SlotBadge, _extends({}, badgeProps, {
      children: displayValue
    }))]
  }));
});
true ? Badge.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin: import_prop_types9.default.shape({
    horizontal: import_prop_types9.default.oneOf(["left", "right"]).isRequired,
    vertical: import_prop_types9.default.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The content rendered within the badge.
   * @default ''
   */
  badgeContent: import_prop_types9.default.node,
  /**
   * The inset of the badge. Support shorthand syntax as described in https://developer.mozilla.org/en-US/docs/Web/CSS/inset.
   * @default 0
   */
  badgeInset: import_prop_types9.default.oneOfType([import_prop_types9.default.number, import_prop_types9.default.string]),
  /**
   * The badge will be added relative to this node.
   */
  children: import_prop_types9.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types9.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types9.default.elementType,
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: import_prop_types9.default.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: import_prop_types9.default.number,
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: import_prop_types9.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["sm", "md", "lg"]), import_prop_types9.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types9.default.shape({
    badge: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object]),
    root: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types9.default.shape({
    badge: import_prop_types9.default.elementType,
    root: import_prop_types9.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types9.default.oneOfType([import_prop_types9.default.arrayOf(import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.object, import_prop_types9.default.bool])), import_prop_types9.default.func, import_prop_types9.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'solid'
   */
  variant: import_prop_types9.default.oneOfType([import_prop_types9.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types9.default.string])
} : void 0;
var Badge_default = Badge;

// node_modules/@mui/joy/ButtonGroup/ButtonGroup.js
var React14 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());

// node_modules/@mui/joy/ButtonGroup/buttonGroupClasses.js
function getButtonGroupUtilityClass(slot) {
  return generateUtilityClass2("MuiButtonGroup", slot);
}
var buttonGroupClasses = generateUtilityClasses2("MuiButtonGroup", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
var buttonGroupClasses_default = buttonGroupClasses;

// node_modules/@mui/joy/ButtonGroup/ButtonGroup.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var _excluded10 = ["buttonFlex", "className", "component", "disabled", "size", "color", "variant", "children", "orientation", "slots", "slotProps", "spacing"];
var useUtilityClasses10 = (ownerState) => {
  const {
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getButtonGroupUtilityClass, {});
};
var StyledButtonGroup = styled_default("div")(({
  theme,
  ownerState
}) => {
  var _theme$variants$outli, _theme$variants$outli2, _theme$variants$outli3;
  const {
    borderRadius: radius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["borderRadius"]);
  const firstChildRadius = ownerState.orientation === "vertical" ? "var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius)" : "var(--ButtonGroup-radius) var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius)";
  const lastChildRadius = ownerState.orientation === "vertical" ? "var(--unstable_childRadius) var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius)" : "var(--unstable_childRadius) var(--ButtonGroup-radius) var(--ButtonGroup-radius) var(--unstable_childRadius)";
  const margin = ownerState.orientation === "vertical" ? "calc(var(--ButtonGroup-separatorSize) * -1) 0 0 0" : "0 0 0 calc(var(--ButtonGroup-separatorSize) * -1)";
  const styles = {};
  traverseBreakpoints(theme.breakpoints, ownerState.spacing, (appendStyle, value) => {
    if (value !== null) {
      var _theme$spacing;
      appendStyle(styles, {
        // the buttons should be connected if the value is more than 0
        "--ButtonGroup-connected": value.toString().match(/^0(?!\.)/) ? "1" : "0",
        gap: typeof value === "string" ? value : (_theme$spacing = theme.spacing) == null ? void 0 : _theme$spacing.call(theme, value)
      });
    }
  });
  const outlinedStyle = (_theme$variants$outli = theme.variants.outlined) == null ? void 0 : _theme$variants$outli[ownerState.color];
  const outlinedDisabledStyle = (_theme$variants$outli2 = theme.variants.outlinedDisabled) == null ? void 0 : _theme$variants$outli2[ownerState.color];
  const outlinedHoverStyle = (_theme$variants$outli3 = theme.variants.outlinedHover) == null ? void 0 : _theme$variants$outli3[ownerState.color];
  return [_extends({
    "--ButtonGroup-separatorSize": ownerState.variant === "outlined" ? "1px" : "calc(var(--ButtonGroup-connected) * 1px)",
    "--ButtonGroup-separatorColor": outlinedStyle == null ? void 0 : outlinedStyle.borderColor,
    "--ButtonGroup-radius": theme.vars.radius.sm,
    "--Divider-inset": "0.5rem",
    "--unstable_childRadius": "calc((1 - var(--ButtonGroup-connected)) * var(--ButtonGroup-radius) - var(--variant-borderWidth, 0px))"
  }, styles, {
    display: "flex",
    borderRadius: "var(--ButtonGroup-radius)",
    flexDirection: ownerState.orientation === "vertical" ? "column" : "row",
    // first Button or IconButton
    [`& > [data-first-child]`]: _extends({
      "--Button-radius": firstChildRadius,
      "--IconButton-radius": firstChildRadius
    }, ownerState.orientation === "horizontal" && {
      borderRight: "var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"
    }, ownerState.orientation === "vertical" && {
      borderBottom: "var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"
    }),
    // middle Buttons or IconButtons
    [`& > :not([data-first-child]):not([data-last-child]):not(:only-child)`]: _extends({
      "--Button-radius": "var(--unstable_childRadius)",
      "--IconButton-radius": "var(--unstable_childRadius)",
      borderRadius: "var(--unstable_childRadius)"
    }, ownerState.orientation === "horizontal" && {
      borderLeft: "var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)",
      borderRight: "var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"
    }, ownerState.orientation === "vertical" && {
      borderTop: "var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)",
      borderBottom: "var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"
    }),
    // last Button or IconButton
    [`& > [data-last-child]`]: _extends({
      "--Button-radius": lastChildRadius,
      "--IconButton-radius": lastChildRadius
    }, ownerState.orientation === "horizontal" && {
      borderLeft: "var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"
    }, ownerState.orientation === "vertical" && {
      borderTop: "var(--ButtonGroup-separatorSize) solid var(--ButtonGroup-separatorColor)"
    }),
    // single Button or IconButton
    [`& > :only-child`]: {
      "--Button-radius": "var(--ButtonGroup-radius)",
      "--IconButton-radius": "var(--ButtonGroup-radius)"
    },
    [`& > :not([data-first-child]):not(:only-child)`]: {
      "--Button-margin": margin,
      "--IconButton-margin": margin
    },
    [`& .${buttonClasses_default.root}, & .${iconButtonClasses_default.root}`]: _extends({
      "&:not(:disabled)": {
        zIndex: 1
        // to make borders appear above disabled buttons.
      },
      "&:disabled": {
        "--ButtonGroup-separatorColor": outlinedDisabledStyle == null ? void 0 : outlinedDisabledStyle.borderColor
      }
    }, ownerState.variant === "outlined" && {
      "&:hover": {
        "--ButtonGroup-separatorColor": outlinedHoverStyle == null ? void 0 : outlinedHoverStyle.borderColor
      }
    }, {
      [`&:hover, ${theme.focus.selector}`]: {
        zIndex: 2
        // to make borders appear above sibling.
      }
    })
  }, ownerState.buttonFlex && {
    [`& > *:not(.${iconButtonClasses_default.root})`]: {
      flex: ownerState.buttonFlex
    },
    [`& > :not(button) > .${buttonClasses_default.root}`]: {
      width: "100%"
      // for button to fill its wrapper.
    }
  }), radius !== void 0 && {
    "--ButtonGroup-radius": radius
  }];
});
var ButtonGroupRoot = styled_default(StyledButtonGroup, {
  name: "JoyButtonGroup",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var ButtonGroup = React14.forwardRef(function ButtonGroup2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyButtonGroup"
  });
  const {
    buttonFlex,
    className,
    component = "div",
    disabled = false,
    size = "md",
    color = "neutral",
    variant = "outlined",
    children,
    orientation = "horizontal",
    slots = {},
    slotProps = {},
    spacing = 0
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const ownerState = _extends({}, props, {
    buttonFlex,
    color,
    component,
    orientation,
    spacing,
    size,
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
    elementType: ButtonGroupRoot,
    externalForwardedProps,
    additionalProps: {
      role: "group"
    },
    ownerState
  });
  const buttonGroupContext = React14.useMemo(() => ({
    variant,
    color,
    size,
    disabled
  }), [variant, color, size, disabled]);
  return (0, import_jsx_runtime16.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime16.jsx)(ButtonGroupContext_default.Provider, {
      value: buttonGroupContext,
      children: React14.Children.map(children, (child, index) => {
        if (!React14.isValidElement(child)) {
          return child;
        }
        const extraProps = {};
        if (isMuiElement(child, ["Divider"])) {
          extraProps.inset = "inset" in child.props ? child.props.inset : "context";
          const dividerOrientation = orientation === "vertical" ? "horizontal" : "vertical";
          extraProps.orientation = "orientation" in child.props ? child.props.orientation : dividerOrientation;
          extraProps.role = "presentation";
          extraProps.component = "span";
        }
        if (React14.Children.count(children) > 1) {
          if (index === 0) {
            extraProps["data-first-child"] = "";
          }
          if (index === React14.Children.count(children) - 1) {
            extraProps["data-last-child"] = "";
          }
        }
        return React14.cloneElement(child, extraProps);
      })
    })
  }));
});
true ? ButtonGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The flex value of the button.
   * @example buttonFlex={1} will set flex: '1 1 auto' on each button (stretch the button to equally fill the available space).
   */
  buttonFlex: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
  /**
   * Used to render icon or text elements inside the ButtonGroup if `src` is not set.
   * This can be an element, or just a string.
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
   * If `true`, all the buttons will be disabled.
   * @default false
   */
  disabled: import_prop_types10.default.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types10.default.oneOf(["horizontal", "vertical"]),
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["lg", "md", "sm"]), import_prop_types10.default.string]),
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
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string])), import_prop_types10.default.number, import_prop_types10.default.shape({
    lg: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
    md: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
    sm: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
    xl: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string]),
    xs: import_prop_types10.default.oneOfType([import_prop_types10.default.number, import_prop_types10.default.string])
  }), import_prop_types10.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types10.default.oneOfType([import_prop_types10.default.arrayOf(import_prop_types10.default.oneOfType([import_prop_types10.default.func, import_prop_types10.default.object, import_prop_types10.default.bool])), import_prop_types10.default.func, import_prop_types10.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types10.default.oneOfType([import_prop_types10.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types10.default.string])
} : void 0;
var ButtonGroup_default = ButtonGroup;

// node_modules/@mui/joy/Card/Card.js
var React15 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());

// node_modules/@mui/joy/Card/cardClasses.js
function getCardUtilityClass(slot) {
  return generateUtilityClass2("MuiCard", slot);
}
var cardClasses = generateUtilityClasses2("MuiCard", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
var cardClasses_default = cardClasses;

// node_modules/@mui/joy/Card/Card.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var _excluded11 = ["className", "color", "component", "invertedColors", "size", "variant", "children", "orientation", "slots", "slotProps"];
var useUtilityClasses11 = (ownerState) => {
  const {
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getCardUtilityClass, {});
};
var StyledCardRoot = styled_default("div")(({
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
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    // a context variable for any child component
    "--Card-childRadius": "max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))",
    // AspectRatio integration
    "--AspectRatio-radius": "var(--Card-childRadius)",
    // Link integration
    "--unstable_actionMargin": "calc(-1 * var(--variant-borderWidth, 0px))",
    // Link, Radio, Checkbox integration
    "--unstable_actionRadius": "var(--Card-radius)",
    // CardCover integration
    "--CardCover-radius": "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
    // CardOverflow integration
    "--CardOverflow-offset": `calc(-1 * var(--Card-padding))`,
    "--CardOverflow-radius": "calc(var(--Card-radius) - var(--variant-borderWidth, 0px))",
    // Divider integration
    "--Divider-inset": "calc(-1 * var(--Card-padding))"
  }, ownerState.size === "sm" && {
    "--Card-radius": theme.vars.radius.sm,
    "--Card-padding": "0.625rem",
    gap: "0.5rem"
  }, ownerState.size === "md" && {
    "--Card-radius": theme.vars.radius.md,
    "--Card-padding": "1rem",
    gap: "0.75rem 1rem"
  }, ownerState.size === "lg" && {
    "--Card-radius": theme.vars.radius.lg,
    "--Card-padding": "1.5rem",
    gap: "1rem 1.5rem"
  }, {
    padding: "var(--Card-padding)",
    borderRadius: "var(--Card-radius)",
    backgroundColor: theme.vars.palette.background.surface,
    position: "relative",
    display: "flex",
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, theme.typography[`body-${ownerState.size}`], ownerState.variant === "solid" && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === "soft" && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]), p !== void 0 && {
    "--Card-padding": p
  }, padding !== void 0 && {
    "--Card-padding": padding
  }, borderRadius !== void 0 && {
    "--Card-radius": borderRadius
  }];
});
var CardRoot = styled_default(StyledCardRoot, {
  name: "JoyCard",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var Card = React15.forwardRef(function Card2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCard"
  });
  const {
    className,
    color = "neutral",
    component = "div",
    invertedColors = false,
    size = "md",
    variant = "outlined",
    children,
    orientation = "vertical",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const ownerState = _extends({}, props, {
    color,
    component,
    orientation,
    size,
    variant,
    invertedColors
  });
  const classes = useUtilityClasses11(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CardRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime17.jsx)(SlotRoot, _extends({}, rootProps, {
    children: React15.Children.map(children, (child, index) => {
      if (!React15.isValidElement(child)) {
        return child;
      }
      const extraProps = {};
      if (isMuiElement(child, ["Divider"])) {
        extraProps.inset = "inset" in child.props ? child.props.inset : "context";
        const dividerOrientation = orientation === "vertical" ? "horizontal" : "vertical";
        extraProps.orientation = "orientation" in child.props ? child.props.orientation : dividerOrientation;
      }
      if (index === 0) {
        extraProps["data-first-child"] = "";
      }
      if (index === React15.Children.count(children) - 1) {
        extraProps["data-last-child"] = "";
      }
      return React15.cloneElement(child, extraProps);
    })
  }));
});
true ? Card.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the Card if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types11.default.node,
  /**
   * @ignore
   */
  className: import_prop_types11.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types11.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types11.default.elementType,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types11.default.bool,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types11.default.oneOf(["horizontal", "vertical"]),
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["lg", "md", "sm"]), import_prop_types11.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types11.default.shape({
    root: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types11.default.shape({
    root: import_prop_types11.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types11.default.oneOfType([import_prop_types11.default.arrayOf(import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object, import_prop_types11.default.bool])), import_prop_types11.default.func, import_prop_types11.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types11.default.oneOfType([import_prop_types11.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types11.default.string])
} : void 0;
var Card_default = Card;

// node_modules/@mui/joy/CardActions/CardActions.js
var React16 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@mui/joy/CardActions/cardActionsClasses.js
function getCardActionsUtilityClass(slot) {
  return generateUtilityClass2("MuiCardActions", slot);
}
var cardActionsClasses = generateUtilityClasses2("MuiCardActions", ["root"]);
var cardActionsClasses_default = cardActionsClasses;

// node_modules/@mui/joy/CardOverflow/cardOverflowClasses.js
function getCardOverflowUtilityClass(slot) {
  return generateUtilityClass2("MuiCardOverflow", slot);
}
var aspectRatioClasses2 = generateUtilityClasses2("MuiCardOverflow", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var cardOverflowClasses_default = aspectRatioClasses2;

// node_modules/@mui/joy/Divider/dividerClasses.js
function getDividerUtilityClass(slot) {
  return generateUtilityClass2("MuiDivider", slot);
}
var dividerClasses = generateUtilityClasses2("MuiDivider", ["root", "horizontal", "vertical", "insetContext", "insetNone"]);
var dividerClasses_default = dividerClasses;

// node_modules/@mui/joy/CardActions/CardActions.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var _excluded12 = ["className", "component", "children", "buttonFlex", "orientation", "slots", "slotProps"];
var useUtilityClasses12 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardActionsUtilityClass, {});
};
var StyledCardActionsRoot = styled_default("div")(({
  ownerState
}) => {
  var _ownerState$orientati;
  return _extends({
    "--Button-radius": "var(--Card-childRadius)",
    "--IconButton-radius": "var(--Card-childRadius)",
    display: "flex"
  }, ((_ownerState$orientati = ownerState.orientation) == null ? void 0 : _ownerState$orientati.startsWith("horizontal")) && {
    alignItems: "center"
    // it is common to have children aligned center in horizontal orientation, but not vertically.
  }, {
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, ownerState.orientation === "horizontal-reverse" && {
    flexDirection: "row-reverse"
  }, {
    zIndex: 1,
    // render above Link's overlay
    gap: "calc(0.625 * var(--Card-padding))",
    padding: "var(--unstable_padding)",
    "--unstable_padding": "calc(0.75 * var(--Card-padding)) 0 0 0",
    [`.${cardOverflowClasses_default.root} > &`]: {
      "--unstable_padding": "calc(0.75 * var(--Card-padding)) 0 var(--Card-padding)"
    },
    [`.${cardClasses_default.root} > .${dividerClasses_default.root} + &`]: {
      "--unstable_padding": "0"
    }
  }, ownerState.buttonFlex ? {
    [`& > :not(.${iconButtonClasses_default.root})`]: {
      flex: ownerState.buttonFlex
    },
    [`& > :not(button) > .${buttonClasses_default.root}`]: {
      width: "100%"
      // for button to fill its wrapper.
    }
  } : {
    [`& > .${buttonClasses_default.root}:only-child`]: {
      flex: "auto"
    }
  });
});
var CardActionsRoot = styled_default(StyledCardActionsRoot, {
  name: "JoyCardActions",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var CardActions = React16.forwardRef(function CardActions2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCardActions"
  });
  const {
    className,
    component = "div",
    children,
    buttonFlex,
    orientation = "horizontal",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    buttonFlex,
    orientation
  });
  const classes = useUtilityClasses12();
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CardActionsRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime18.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? CardActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The CSS `flex` for the Button and its wrapper.
   */
  buttonFlex: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]),
  /**
   * Used to render icon or text elements inside the CardActions if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types12.default.node,
  /**
   * @ignore
   */
  className: import_prop_types12.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types12.default.elementType,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types12.default.oneOf(["horizontal-reverse", "horizontal", "vertical"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types12.default.shape({
    root: import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types12.default.shape({
    root: import_prop_types12.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types12.default.oneOfType([import_prop_types12.default.arrayOf(import_prop_types12.default.oneOfType([import_prop_types12.default.func, import_prop_types12.default.object, import_prop_types12.default.bool])), import_prop_types12.default.func, import_prop_types12.default.object])
} : void 0;
var CardActions_default = CardActions;

// node_modules/@mui/joy/CardContent/CardContent.js
var React17 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/joy/CardContent/cardContentClasses.js
function getCardContentUtilityClass(slot) {
  return generateUtilityClass2("MuiCardContent", slot);
}
var cardClasses2 = generateUtilityClasses2("MuiCardContent", ["root"]);
var cardContentClasses_default = cardClasses2;

// node_modules/@mui/joy/CardContent/CardContent.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var _excluded13 = ["className", "component", "children", "orientation", "slots", "slotProps"];
var useUtilityClasses13 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardContentUtilityClass, {});
};
var StyledCardContentRoot = styled_default("div")(({
  ownerState
}) => ({
  display: "flex",
  flexDirection: ownerState.orientation === "horizontal" ? "row" : "column",
  flex: 9999,
  // fill the available space in the Card and also shrink if needed
  zIndex: 1,
  columnGap: "var(--Card-padding)",
  rowGap: "max(2px, calc(0.1875 * var(--Card-padding)))",
  padding: "var(--unstable_padding)",
  [`.${cardOverflowClasses_default.root} > &`]: {
    "--unstable_padding": "calc(var(--Card-padding) * 0.75) 0px"
  }
}));
var CardContentRoot = styled_default(StyledCardContentRoot, {
  name: "JoyCardContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var CardContent = React17.forwardRef(function CardContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCardContent"
  });
  const {
    className,
    component = "div",
    children,
    orientation = "vertical",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    orientation
  });
  const classes = useUtilityClasses13();
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CardContentRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime19.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? CardContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the CardContent if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types13.default.node,
  /**
   * @ignore
   */
  className: import_prop_types13.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types13.default.elementType,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types13.default.oneOf(["horizontal", "vertical"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types13.default.shape({
    root: import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types13.default.shape({
    root: import_prop_types13.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types13.default.oneOfType([import_prop_types13.default.arrayOf(import_prop_types13.default.oneOfType([import_prop_types13.default.func, import_prop_types13.default.object, import_prop_types13.default.bool])), import_prop_types13.default.func, import_prop_types13.default.object])
} : void 0;
var CardContent_default = CardContent;

// node_modules/@mui/joy/CardCover/CardCover.js
var React18 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());

// node_modules/@mui/joy/CardCover/cardCoverClasses.js
function getCardCoverUtilityClass(slot) {
  return generateUtilityClass2("MuiCardCover", slot);
}
var cardCoverClasses = generateUtilityClasses2("MuiCardCover", ["root"]);
var cardCoverClasses_default = cardCoverClasses;

// node_modules/@mui/joy/CardCover/CardCover.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var _excluded14 = ["className", "component", "children", "slots", "slotProps"];
var useUtilityClasses14 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardCoverUtilityClass, {});
};
var CardCoverRoot = styled_default("div", {
  name: "JoyCardCover",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  position: "absolute",
  zIndex: 0,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "var(--CardCover-radius)",
  // use data-attribute instead of :first-child to support zero config SSR (emotion)
  // use nested selector for integrating with nextjs image `fill` layout (spans are inserted on top of the img)
  "& [data-first-child]": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    boxSizing: "border-box",
    borderRadius: "var(--CardCover-radius)",
    margin: 0,
    padding: 0,
    "& > img": {
      // support art-direction that uses <picture><img /></picture>
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }
});
var CardCover = React18.forwardRef(function CardCover2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCardCover"
  });
  const {
    className,
    component = "div",
    children,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded14);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses14();
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CardCoverRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime20.jsx)(SlotRoot, _extends({}, rootProps, {
    children: React18.Children.map(children, (child, index) => index === 0 && React18.isValidElement(child) ? React18.cloneElement(child, {
      "data-first-child": ""
    }) : child)
  }));
});
true ? CardCover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the CardCover if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types14.default.node,
  /**
   * @ignore
   */
  className: import_prop_types14.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types14.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types14.default.shape({
    root: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types14.default.shape({
    root: import_prop_types14.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types14.default.oneOfType([import_prop_types14.default.arrayOf(import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object, import_prop_types14.default.bool])), import_prop_types14.default.func, import_prop_types14.default.object])
} : void 0;
var CardCover_default = CardCover;

// node_modules/@mui/joy/CardOverflow/CardOverflow.js
var React19 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// node_modules/@mui/joy/ModalDialog/modalDialogClasses.js
function getModalDialogUtilityClass(slot) {
  return generateUtilityClass2("MuiModalDialog", slot);
}
var modalDialogClasses = generateUtilityClasses2("MuiModalDialog", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "layoutCenter", "layoutFullscreen"]);
var modalDialogClasses_default = modalDialogClasses;

// node_modules/@mui/joy/CardOverflow/CardOverflow.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var _excluded15 = ["className", "component", "children", "color", "variant", "slots", "slotProps"];
var useUtilityClasses15 = (ownerState) => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getCardOverflowUtilityClass, {});
};
var CardOverflowRoot = styled_default("div", {
  name: "JoyCardOverflow",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const childRadius = "calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))";
  return _extends({
    alignSelf: "stretch",
    // prevent shrinking if parent's align-items is not initial
    position: "relative",
    display: "flex",
    flexDirection: "var(--_CardOverflow-flexDirection)",
    margin: "var(--_CardOverflow-margin)",
    borderRadius: "var(--_CardOverflow-radius)",
    padding: "var(--_CardOverflow-padding)",
    [`.${cardClasses_default.vertical} &, .${cardClasses_default.horizontal} .${cardClasses_default.vertical} &, .${modalDialogClasses_default.root} &`]: {
      "--_CardOverflow-flexDirection": "column",
      // required to make AspectRatio works
      "--AspectRatio-margin": "0 calc(-1 * var(--Card-padding))",
      "--_CardOverflow-margin": "0 var(--CardOverflow-offset)",
      "--_CardOverflow-padding": "0 var(--Card-padding)",
      "&[data-first-child]": {
        "--AspectRatio-radius": `${childRadius} ${childRadius} 0 0`,
        "--_CardOverflow-radius": "var(--CardOverflow-radius) var(--CardOverflow-radius) 0 0",
        "--_CardOverflow-margin": "var(--CardOverflow-offset) var(--CardOverflow-offset) 0"
      },
      "&[data-last-child]": {
        "--AspectRatio-radius": `0 0 ${childRadius} ${childRadius}`,
        "--_CardOverflow-radius": "0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)",
        "--_CardOverflow-margin": "0 var(--CardOverflow-offset) var(--CardOverflow-offset)"
      },
      "&[data-last-child][data-first-child]": {
        "--AspectRatio-radius": childRadius,
        "--_CardOverflow-margin": "var(--CardOverflow-offset)"
      },
      [`& > .${buttonClasses_default.root}:only-child`]: {
        zIndex: 1,
        // prevent button from being covered Link overlay. This can be improved in the future with :has() selector
        width: "calc(100% + -2 * var(--CardOverflow-offset))",
        "--Button-margin": "0 var(--CardOverflow-offset)",
        "--Button-radius": "0 0 var(--CardOverflow-radius) var(--CardOverflow-radius)"
      }
    },
    [`.${cardClasses_default.horizontal} &, .${cardClasses_default.vertical} .${cardClasses_default.horizontal} &`]: {
      "--_CardOverflow-flexDirection": "row",
      "--AspectRatio-margin": "calc(-1 * var(--Card-padding)) 0px",
      "--_CardOverflow-margin": "var(--CardOverflow-offset) 0px",
      "--_CardOverflow-padding": "var(--Card-padding) 0px",
      "&[data-first-child]": {
        "--AspectRatio-radius": `${childRadius} 0 0 ${childRadius}`,
        "--_CardOverflow-radius": "var(--CardOverflow-radius) 0 0 var(--CardOverflow-radius)",
        "--_CardOverflow-margin": "var(--CardOverflow-offset) 0px var(--CardOverflow-offset) var(--CardOverflow-offset)"
      },
      "&[data-last-child]": {
        "--AspectRatio-radius": `0 ${childRadius} ${childRadius} 0`,
        "--_CardOverflow-radius": "0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0",
        "--_CardOverflow-margin": "var(--CardOverflow-offset) var(--CardOverflow-offset) var(--CardOverflow-offset) 0px"
      },
      "&[data-last-child][data-first-child]": {
        "--AspectRatio-radius": childRadius,
        "--_CardOverflow-margin": "var(--CardOverflow-offset)"
      },
      [`& > .${buttonClasses_default.root}:only-child`]: {
        height: "calc(100% + -2 * var(--CardOverflow-offset))",
        "--Button-margin": "var(--CardOverflow-offset) 0",
        "--Button-radius": "0 var(--CardOverflow-radius) var(--CardOverflow-radius) 0"
      }
    }
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var CardOverflow = React19.forwardRef(function CardOverflow2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyCardOverflow"
  });
  const {
    className,
    component = "div",
    children,
    color = "neutral",
    variant = "plain",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const ownerState = _extends({}, props, {
    component,
    color,
    variant
  });
  const classes = useUtilityClasses15(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: CardOverflowRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime21.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? CardOverflow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the CardOverflow if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types15.default.node,
  /**
   * @ignore
   */
  className: import_prop_types15.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types15.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types15.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types15.default.shape({
    root: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types15.default.shape({
    root: import_prop_types15.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types15.default.string])
} : void 0;
CardOverflow.muiName = "CardOverflow";
var CardOverflow_default = CardOverflow;

// node_modules/@mui/joy/Checkbox/Checkbox.js
var React22 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());

// node_modules/@mui/joy/Checkbox/checkboxClasses.js
function getCheckboxUtilityClass(slot) {
  return generateUtilityClass2("MuiCheckbox", slot);
}
var checkboxClasses = generateUtilityClasses2("MuiCheckbox", ["root", "checkbox", "action", "input", "label", "checked", "disabled", "focusVisible", "indeterminate", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid"]);
var checkboxClasses_default = checkboxClasses;

// node_modules/@mui/joy/internal/svg-icons/Check.js
var React20 = __toESM(require_react());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var Check_default = createSvgIcon((0, import_jsx_runtime22.jsx)("path", {
  d: "M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"
}), "Check");

// node_modules/@mui/joy/internal/svg-icons/HorizontalRule.js
var React21 = __toESM(require_react());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var HorizontalRule_default = createSvgIcon((0, import_jsx_runtime23.jsx)("path", {
  d: "M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z"
}), "HorizontalRule");

// node_modules/@mui/joy/Checkbox/Checkbox.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var _excluded16 = ["checked", "uncheckedIcon", "checkedIcon", "label", "defaultChecked", "disabled", "disableIcon", "overlay", "id", "indeterminate", "indeterminateIcon", "name", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "value", "color", "variant", "size", "component", "slots", "slotProps"];
var useUtilityClasses16 = (ownerState) => {
  const {
    checked,
    disabled,
    disableIcon,
    focusVisible,
    color,
    variant,
    size,
    indeterminate
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    checkbox: [
      "checkbox",
      checked && "checked",
      indeterminate && "indeterminate",
      disabled && "disabled"
      // disabled class is necessary for displaying global variant
    ],
    action: [
      "action",
      checked && "checked",
      disableIcon && disabled && "disabled",
      // add disabled class to action element for displaying global variant
      focusVisible && "focusVisible"
    ],
    input: ["input"],
    label: ["label"]
  };
  return composeClasses(slots, getCheckboxUtilityClass, {});
};
var CheckboxRoot = styled_default("span", {
  name: "JoyCheckbox",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants$plain, _theme$variants, _theme$variants2;
  return _extends({
    "--Icon-fontSize": "var(--Checkbox-size)"
  }, ownerState.size === "sm" && {
    "--Checkbox-size": "1rem",
    "& ~ *": {
      "--FormHelperText-margin": "0 0 0 1.5rem"
    },
    fontSize: theme.vars.fontSize.sm,
    gap: "var(--Checkbox-gap, 0.5rem)"
  }, ownerState.size === "md" && {
    "--Checkbox-size": "1.25rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.25rem 0 0 1.875rem"
    },
    fontSize: theme.vars.fontSize.md,
    gap: "var(--Checkbox-gap, 0.625rem)"
  }, ownerState.size === "lg" && {
    "--Checkbox-size": "1.5rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.375rem 0 0 2.25rem"
    },
    fontSize: theme.vars.fontSize.lg,
    gap: "var(--Checkbox-gap, 0.75rem)"
  }, {
    position: ownerState.overlay ? "initial" : "relative",
    display: "inline-flex",
    fontFamily: theme.vars.fontFamily.body,
    lineHeight: "var(--Checkbox-size)",
    color: theme.vars.palette.text.primary,
    [`&.${checkboxClasses_default.disabled}`]: {
      color: (_theme$variants$plain = theme.variants.plainDisabled) == null || (_theme$variants$plain = _theme$variants$plain[ownerState.color]) == null ? void 0 : _theme$variants$plain.color
    }
  }, ownerState.disableIcon && {
    color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color,
    [`&.${checkboxClasses_default.disabled}`]: {
      color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
    }
  });
});
var CheckboxCheckbox = styled_default("span", {
  name: "JoyCheckbox",
  slot: "Checkbox",
  overridesResolver: (props, styles) => styles.checkbox
})(({
  theme,
  ownerState
}) => {
  var _theme$variants3, _variantStyle$backgro, _theme$variants4, _theme$variants5, _theme$variants6;
  const variantStyle = (_theme$variants3 = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants3[ownerState.color];
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    boxSizing: "border-box",
    borderRadius: `min(${theme.vars.radius.sm}, 0.25rem)`,
    width: "var(--Checkbox-size)",
    height: "var(--Checkbox-size)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0
  }, ownerState.disableIcon && {
    display: "contents"
  }, {
    [`&.${checkboxClasses_default.checked}, &.${checkboxClasses_default.indeterminate}`]: {
      "--Icon-color": "currentColor"
    }
  }), ...!ownerState.disableIcon ? [_extends({}, variantStyle, {
    backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface
  }), {
    "&:hover": {
      "@media (hover: hover)": (_theme$variants4 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants4[ownerState.color]
    }
  }, {
    "&:active": (_theme$variants5 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants5[ownerState.color]
  }, {
    [`&.${checkboxClasses_default.disabled}`]: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color]
  }] : []];
});
var CheckboxAction = styled_default("span", {
  name: "JoyCheckbox",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})(({
  theme,
  ownerState
}) => {
  var _theme$variants7, _theme$variants8, _theme$variants9, _theme$variants10;
  return [{
    borderRadius: `var(--Checkbox-actionRadius, ${ownerState.overlay ? "var(--unstable_actionRadius, inherit)" : "inherit"})`,
    textAlign: "left",
    // prevent text-align inheritance
    position: "absolute",
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    // clickable on the border and focus outline does not move when checked/unchecked
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    zIndex: 1,
    // The action element usually cover the area of nearest positioned parent
    [theme.focus.selector]: theme.focus.default
  }, ...ownerState.disableIcon ? [(_theme$variants7 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants7[ownerState.color], {
    "&:hover": (_theme$variants8 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants8[ownerState.color]
  }, {
    "&:active": (_theme$variants9 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants9[ownerState.color]
  }, {
    [`&.${checkboxClasses_default.disabled}`]: (_theme$variants10 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants10[ownerState.color]
  }] : []];
});
var CheckboxInput = styled_default("input", {
  name: "JoyCheckbox",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input
})(() => ({
  margin: 0,
  opacity: 0,
  position: "absolute",
  width: "100%",
  height: "100%",
  cursor: "pointer"
}));
var CheckboxLabel = styled_default("label", {
  name: "JoyCheckbox",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label
})(({
  ownerState
}) => _extends({
  flex: 1,
  minWidth: 0
}, ownerState.disableIcon && {
  zIndex: 1,
  // label should stay on top of the action.
  pointerEvents: "none"
  // makes hover ineffect.
}));
var defaultCheckedIcon = (0, import_jsx_runtime24.jsx)(Check_default, {});
var defaultIndeterminateIcon = (0, import_jsx_runtime24.jsx)(HorizontalRule_default, {});
var Checkbox = React22.forwardRef(function Checkbox2(inProps, ref) {
  var _ref, _inProps$disabled, _ref2, _inProps$size, _formControl$color;
  const props = useThemeProps({
    props: inProps,
    name: "JoyCheckbox"
  });
  const {
    checked: checkedProp,
    uncheckedIcon,
    checkedIcon = defaultCheckedIcon,
    label,
    defaultChecked,
    disabled: disabledExternalProp,
    disableIcon = false,
    overlay,
    id: idOverride,
    indeterminate = false,
    indeterminateIcon = defaultIndeterminateIcon,
    name,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required,
    value,
    color: colorProp,
    variant: variantProp,
    size: sizeProp = "md",
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const formControl = React22.useContext(FormControlContext_default);
  const disabledProp = (_ref = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref : disabledExternalProp;
  const size = (_ref2 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref2 : sizeProp;
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React22.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const id = useId(idOverride != null ? idOverride : formControl == null ? void 0 : formControl.htmlFor);
  const useCheckboxProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible
  } = useSwitch(useCheckboxProps);
  const isCheckboxActive = checked || indeterminate;
  const activeVariant = variantProp || "solid";
  const inactiveVariant = variantProp || "outlined";
  const variant = isCheckboxActive ? activeVariant : inactiveVariant;
  const color = inProps.color || (formControl != null && formControl.error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp);
  const activeColor = color || "primary";
  const inactiveColor = color || "neutral";
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    disableIcon,
    overlay,
    focusVisible,
    color: isCheckboxActive ? activeColor : inactiveColor,
    variant,
    size
  });
  const classes = useUtilityClasses16(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: CheckboxRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotCheckbox, checkboxProps] = useSlot("checkbox", {
    className: classes.checkbox,
    elementType: CheckboxCheckbox,
    externalForwardedProps,
    ownerState
  });
  const [SlotAction, actionProps] = useSlot("action", {
    className: classes.action,
    elementType: CheckboxAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotInput, inputProps] = useSlot("input", {
    additionalProps: _extends({
      id,
      name,
      value,
      readOnly,
      required: required != null ? required : formControl == null ? void 0 : formControl.required,
      "aria-describedby": formControl == null ? void 0 : formControl["aria-describedby"]
    }, indeterminate && {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked#values
      "aria-checked": "mixed"
    }),
    className: classes.input,
    elementType: CheckboxInput,
    externalForwardedProps,
    getSlotProps: getInputProps,
    ownerState
  });
  const [SlotLabel, labelProps] = useSlot("label", {
    additionalProps: {
      htmlFor: id
    },
    className: classes.label,
    elementType: CheckboxLabel,
    externalForwardedProps,
    ownerState
  });
  let icon = uncheckedIcon;
  if (disableIcon) {
    icon = null;
  } else if (indeterminate) {
    icon = indeterminateIcon;
  } else if (checked) {
    icon = checkedIcon;
  }
  return (0, import_jsx_runtime25.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime25.jsxs)(SlotCheckbox, _extends({}, checkboxProps, {
      children: [(0, import_jsx_runtime24.jsx)(SlotAction, _extends({}, actionProps, {
        children: (0, import_jsx_runtime24.jsx)(SlotInput, _extends({}, inputProps))
      })), icon]
    })), label && (0, import_jsx_runtime24.jsx)(TypographyNestedContext.Provider, {
      value: true,
      children: (0, import_jsx_runtime24.jsx)(SlotLabel, _extends({}, labelProps, {
        children: label
      }))
    })]
  }));
});
true ? Checkbox.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types16.default.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckIcon />
   */
  checkedIcon: import_prop_types16.default.node,
  /**
   * @ignore
   */
  children: import_prop_types16.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types16.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types16.default.oneOfType([import_prop_types16.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types16.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types16.default.elementType,
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types16.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types16.default.bool,
  /**
   * If `true`, the checked icon is removed and the selected variant is applied on the `action` element instead.
   * @default false
   */
  disableIcon: import_prop_types16.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types16.default.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: import_prop_types16.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateIcon />
   */
  indeterminateIcon: import_prop_types16.default.node,
  /**
   * The label element next to the checkbox.
   */
  label: import_prop_types16.default.node,
  /**
   * The `name` attribute of the input.
   */
  name: import_prop_types16.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types16.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types16.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types16.default.func,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types16.default.func,
  /**
   * If `true`, the root element's position is set to initial which allows the action area to fill the nearest positioned parent.
   * This prop is useful for composing Checkbox with ListItem component.
   * @default false
   */
  overlay: import_prop_types16.default.bool,
  /**
   * If `true`, the component is read only.
   */
  readOnly: import_prop_types16.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types16.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types16.default.oneOf(["sm", "md", "lg"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types16.default.shape({
    action: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    checkbox: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    input: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    label: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object]),
    root: import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types16.default.shape({
    action: import_prop_types16.default.elementType,
    checkbox: import_prop_types16.default.elementType,
    input: import_prop_types16.default.elementType,
    label: import_prop_types16.default.elementType,
    root: import_prop_types16.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.oneOfType([import_prop_types16.default.func, import_prop_types16.default.object, import_prop_types16.default.bool])), import_prop_types16.default.func, import_prop_types16.default.object]),
  /**
   * The icon when `checked` is false.
   */
  uncheckedIcon: import_prop_types16.default.node,
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: import_prop_types16.default.oneOfType([import_prop_types16.default.arrayOf(import_prop_types16.default.string), import_prop_types16.default.number, import_prop_types16.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'solid'
   */
  variant: import_prop_types16.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var Checkbox_default = Checkbox;

// node_modules/@mui/joy/Container/Container.js
var import_prop_types17 = __toESM(require_prop_types());
var Container = createContainer({
  createStyledComponent: styled_default("div", {
    name: "JoyContainer",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "JoyContainer"
  })
});
true ? Container.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types17.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types17.default.elementType,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: import_prop_types17.default.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: import_prop_types17.default.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: import_prop_types17.default.oneOfType([import_prop_types17.default.oneOf(["xs", "sm", "md", "lg", "xl", false]), import_prop_types17.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types17.default.oneOfType([import_prop_types17.default.arrayOf(import_prop_types17.default.oneOfType([import_prop_types17.default.func, import_prop_types17.default.object, import_prop_types17.default.bool])), import_prop_types17.default.func, import_prop_types17.default.object])
} : void 0;
var Container_default = Container;

// node_modules/@mui/joy/Container/containerClasses.js
function getContainerUtilityClass(slot) {
  return generateUtilityClass2("MuiContainer", slot);
}
var containerClasses = generateUtilityClasses2("MuiContainer", ["root", "disableGutters", "fixed", "maxWidthXs", "maxWidthSm", "maxWidthMd", "maxWidthLg", "maxWidthXl"]);
var containerClasses_default = containerClasses;

// node_modules/@mui/joy/CssBaseline/CssBaseline.js
var React23 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
function CssBaseline(props) {
  const {
    children,
    disableColorScheme = false
  } = props;
  return (0, import_jsx_runtime27.jsxs)(React23.Fragment, {
    children: [(0, import_jsx_runtime26.jsx)(GlobalStyles_default2, {
      styles: (theme) => {
        var _components$JoyTypogr, _components;
        const colorSchemeStyles = {};
        if (!disableColorScheme) {
          Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
            var _scheme$palette;
            colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/, "")] = {
              colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
            };
          });
        }
        const defaultTypographyLevel = (_components$JoyTypogr = (_components = theme.components) == null || (_components = _components.JoyTypography) == null || (_components = _components.defaultProps) == null ? void 0 : _components.level) != null ? _components$JoyTypogr : "body-md";
        return _extends({
          html: {
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            // Change from `box-sizing: content-box` so that `width`
            // is not affected by `padding` or `border`.
            boxSizing: "border-box",
            // Fix font resize problem in iOS
            WebkitTextSizeAdjust: "100%"
          },
          "*, *::before, *::after": {
            boxSizing: "inherit"
          },
          "strong, b": {
            fontWeight: theme.vars.fontWeight.lg
          },
          body: _extends({
            margin: 0,
            // Remove the margin in all browsers.
            color: theme.vars.palette.text.primary,
            fontFamily: theme.vars.fontFamily.body
          }, theme.typography[defaultTypographyLevel], {
            backgroundColor: theme.vars.palette.background.body,
            "@media print": {
              // Save printer ink.
              backgroundColor: theme.vars.palette.common.white
            },
            // Add support for document.body.requestFullScreen().
            // Other elements, if background transparent, are not supported.
            "&::backdrop": {
              backgroundColor: theme.vars.palette.background.backdrop
            }
          })
        }, colorSchemeStyles);
      },
      defaultTheme: defaultTheme_default
    }), children]
  });
}
true ? CssBaseline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: import_prop_types18.default.node,
  /**
   * Disable `color-scheme` CSS property.
   *
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  disableColorScheme: import_prop_types18.default.bool
} : void 0;
var CssBaseline_default = CssBaseline;

// node_modules/@mui/joy/DialogActions/DialogActions.js
var React24 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());

// node_modules/@mui/joy/DialogActions/dialogActionsClasses.js
function getDialogActionsUtilityClass(slot) {
  return generateUtilityClass2("MuiDialogActions", slot);
}
var dialogActionsClasses = generateUtilityClasses2("MuiDialogActions", ["root"]);
var dialogActionsClasses_default = dialogActionsClasses;

// node_modules/@mui/joy/DialogActions/DialogActions.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var _excluded17 = ["component", "children", "buttonFlex", "orientation", "slots", "slotProps"];
var useUtilityClasses17 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDialogActionsUtilityClass, {});
};
var DialogActionsRoot = styled_default(StyledCardActionsRoot, {
  name: "JoyDialogActions",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var DialogActions = React24.forwardRef(function DialogActions2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyDialogActions"
  });
  const {
    component = "div",
    children,
    buttonFlex,
    orientation = "horizontal-reverse",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    buttonFlex,
    orientation
  });
  const classes = useUtilityClasses17();
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: DialogActionsRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime28.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? DialogActions.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The CSS `flex` for the Button and its wrapper.
   */
  buttonFlex: import_prop_types19.default.oneOfType([import_prop_types19.default.number, import_prop_types19.default.string]),
  /**
   * Used to render icon or text elements inside the DialogActions if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types19.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types19.default.elementType,
  /**
   * The component orientation.
   * @default 'horizontal-reverse'
   */
  orientation: import_prop_types19.default.oneOf(["horizontal-reverse", "horizontal", "vertical"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types19.default.shape({
    root: import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types19.default.shape({
    root: import_prop_types19.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types19.default.oneOfType([import_prop_types19.default.arrayOf(import_prop_types19.default.oneOfType([import_prop_types19.default.func, import_prop_types19.default.object, import_prop_types19.default.bool])), import_prop_types19.default.func, import_prop_types19.default.object])
} : void 0;
var DialogActions_default = DialogActions;

// node_modules/@mui/joy/DialogContent/DialogContent.js
var React26 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());

// node_modules/@mui/joy/DialogContent/dialogContentClasses.js
function getDialogContentUtilityClass(slot) {
  return generateUtilityClass2("MuiDialogContent", slot);
}
var dialogContentClasses = generateUtilityClasses2("MuiDialogContent", ["root"]);
var dialogContentClasses_default = dialogContentClasses;

// node_modules/@mui/joy/ModalDialog/ModalDialogVariantColorContext.js
var React25 = __toESM(require_react());
var ModalDialogVariantColorContext = React25.createContext(void 0);
var ModalDialogVariantColorContext_default = ModalDialogVariantColorContext;

// node_modules/@mui/joy/DialogTitle/dialogTitleClasses.js
function getDialogTitleUtilityClass(slot) {
  return generateUtilityClass2("MuiDialogTitle", slot);
}
var dialogTitleClasses = generateUtilityClasses2("MuiDialogTitle", ["root", "h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var dialogTitleClasses_default = dialogTitleClasses;

// node_modules/@mui/joy/DialogContent/DialogContent.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var _excluded18 = ["component", "children", "orientation", "slots", "slotProps"];
var useUtilityClasses18 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getDialogContentUtilityClass, {});
};
var DialogContentRoot = styled_default(StyledCardContentRoot, {
  name: "JoyDialogContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  color: `var(--DialogContent-color, ${theme.vars.palette.text.tertiary})`,
  overflow: "auto",
  margin: "var(--unstable_DialogContent-margin)",
  [`.${modalDialogClasses_default.root} > .${dialogTitleClasses_default.root} + &`]: {
    "--unstable_DialogContent-margin": "-0.375em 0 0 0"
  }
}));
var DialogContent = React26.forwardRef(function DialogContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyDialogContent"
  });
  const context = React26.useContext(ModalDialogVariantColorContext_default);
  const {
    component = "div",
    children,
    orientation = "vertical",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded18);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    orientation
  });
  const classes = useUtilityClasses18();
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: DialogContentRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      id: context == null ? void 0 : context.describedBy
    }
  });
  return (0, import_jsx_runtime29.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? DialogContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the CardContent if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types20.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types20.default.elementType,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types20.default.oneOf(["horizontal", "vertical"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types20.default.shape({
    root: import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types20.default.shape({
    root: import_prop_types20.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types20.default.oneOfType([import_prop_types20.default.arrayOf(import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object, import_prop_types20.default.bool])), import_prop_types20.default.func, import_prop_types20.default.object])
} : void 0;
var DialogContent_default = DialogContent;

// node_modules/@mui/joy/DialogTitle/DialogTitle.js
var React28 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());

// node_modules/@mui/joy/ModalDialog/ModalDialogSizeContext.js
var React27 = __toESM(require_react());
var ModalDialogSizeContext = React27.createContext(void 0);
var ModalDialogSizeContext_default = ModalDialogSizeContext;

// node_modules/@mui/joy/DialogTitle/DialogTitle.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var _excluded19 = ["component", "children", "variant", "color", "level", "slots", "slotProps"];
var useUtilityClasses19 = (ownerState) => {
  const {
    level,
    color,
    variant
  } = ownerState;
  const slots = {
    root: ["root", level, color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`]
  };
  return composeClasses(slots, getDialogTitleUtilityClass, {});
};
var DialogTitleRoot = styled_default("h2", {
  name: "JoyDialogTitle",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$typography, _theme$variants$owner;
  const lineHeight = ownerState.level !== "inherit" ? (_theme$typography = theme.typography[ownerState.level]) == null ? void 0 : _theme$typography.lineHeight : "1";
  return _extends({
    "--Icon-fontSize": `calc(1em * ${lineHeight})`
  }, ownerState.color && {
    "--Icon-color": "currentColor"
  }, {
    display: "flex",
    gap: "clamp(4px, 0.375em, 0.75rem)",
    margin: "var(--unstable_DialogTitle-margin, 0px)"
  }, ownerState.level && ownerState.level !== "inherit" && theme.typography[ownerState.level], {
    color: "inherit"
  }, ownerState.variant && _extends({
    borderRadius: theme.vars.radius.xs,
    paddingBlock: "min(0.1em, 4px)",
    paddingInline: "0.25em"
  }, (_theme$variants$owner = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants$owner[ownerState.color]), {
    [`.${cardOverflowClasses_default.root} > &`]: {
      "--unstable_DialogTitle-margin": "var(--Card-padding) 0"
    }
  });
});
var sizeToLevel = {
  sm: "title-md",
  md: "title-lg",
  lg: "h4"
};
var DialogTitle = React28.forwardRef(function DialogTitle2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyDialogTitle"
  });
  const size = React28.useContext(ModalDialogSizeContext_default);
  const context = React28.useContext(ModalDialogVariantColorContext_default);
  const {
    component = "h2",
    children,
    variant,
    color: colorProp,
    level = sizeToLevel[size || "md"],
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
  const color = inProps.color || (variant ? colorProp != null ? colorProp : "neutral" : colorProp);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const ownerState = _extends({}, props, {
    component,
    color,
    variant,
    level
  });
  const classes = useUtilityClasses19(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: DialogTitleRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      id: context == null ? void 0 : context.labelledBy
    }
  });
  return (0, import_jsx_runtime30.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? DialogTitle.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the DialogTitle if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types21.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types21.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types21.default.elementType,
  /**
   * Applies the theme typography styles.
   * @default { sm: 'title-md', md: 'title-lg', lg: 'h4' }
   */
  level: import_prop_types21.default.oneOf(["body-lg", "body-md", "body-sm", "body-xs", "h1", "h2", "h3", "h4", "inherit", "title-lg", "title-md", "title-sm"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types21.default.shape({
    root: import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types21.default.shape({
    root: import_prop_types21.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object, import_prop_types21.default.bool])), import_prop_types21.default.func, import_prop_types21.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   */
  variant: import_prop_types21.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var DialogTitle_default = DialogTitle;

// node_modules/@mui/joy/Divider/Divider.js
var React29 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var _excluded20 = ["className", "children", "component", "inset", "orientation", "role", "slots", "slotProps"];
var useUtilityClasses20 = (ownerState) => {
  const {
    orientation,
    inset
  } = ownerState;
  const slots = {
    root: ["root", orientation, inset && `inset${capitalize(inset)}`]
  };
  return composeClasses(slots, getDividerUtilityClass, {});
};
var DividerRoot = styled_default("hr", {
  name: "JoyDivider",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({
  "--Divider-thickness": "1px",
  "--Divider-lineColor": theme.vars.palette.divider
}, ownerState.inset === "none" && {
  "--_Divider-inset": "0px"
}, ownerState.inset === "context" && {
  "--_Divider-inset": "var(--Divider-inset, 0px)"
}, {
  margin: "initial",
  // reset margin for `hr` tag
  marginInline: ownerState.orientation === "vertical" ? "initial" : "var(--_Divider-inset)",
  marginBlock: ownerState.orientation === "vertical" ? "var(--_Divider-inset)" : "initial",
  position: "relative",
  alignSelf: "stretch",
  flexShrink: 0
}, ownerState.children ? _extends({
  "--Divider-gap": theme.spacing(1),
  "--Divider-childPosition": "50%",
  display: "flex",
  flexDirection: ownerState.orientation === "vertical" ? "column" : "row",
  alignItems: "center",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0
}, theme.typography["body-sm"], {
  "&::before, &::after": {
    position: "relative",
    inlineSize: ownerState.orientation === "vertical" ? "var(--Divider-thickness)" : "initial",
    blockSize: ownerState.orientation === "vertical" ? "initial" : "var(--Divider-thickness)",
    backgroundColor: "var(--Divider-lineColor)",
    // use logical size + background is better than border because they work with gradient.
    content: '""'
  },
  "&::before": {
    marginInlineEnd: ownerState.orientation === "vertical" ? "initial" : "min(var(--Divider-childPosition) * 999, var(--Divider-gap))",
    marginBlockEnd: ownerState.orientation === "vertical" ? "min(var(--Divider-childPosition) * 999, var(--Divider-gap))" : "initial",
    flexBasis: "var(--Divider-childPosition)"
  },
  "&::after": {
    marginInlineStart: ownerState.orientation === "vertical" ? "initial" : "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))",
    marginBlockStart: ownerState.orientation === "vertical" ? "min((100% - var(--Divider-childPosition)) * 999, var(--Divider-gap))" : "initial",
    flexBasis: "calc(100% - var(--Divider-childPosition))"
  }
}) : {
  border: "none",
  // reset the border for `hr` tag
  listStyle: "none",
  backgroundColor: "var(--Divider-lineColor)",
  // use logical size + background is better than border because they work with gradient.
  inlineSize: ownerState.orientation === "vertical" ? "var(--Divider-thickness)" : "initial",
  blockSize: ownerState.orientation === "vertical" ? "initial" : "var(--Divider-thickness)"
}));
var Divider = React29.forwardRef(function Divider2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyDivider"
  });
  const {
    className,
    children,
    component = children !== void 0 && children !== null ? "div" : "hr",
    inset,
    orientation = "horizontal",
    role = component !== "hr" ? "separator" : void 0,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const ownerState = _extends({}, props, {
    inset,
    role,
    orientation,
    component
  });
  const classes = useUtilityClasses20(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: DividerRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      as: component,
      role
    }, role === "separator" && orientation === "vertical" && {
      // The implicit aria-orientation of separator is 'horizontal'
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role
      "aria-orientation": "vertical"
    })
  });
  return (0, import_jsx_runtime31.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? Divider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types22.default.node,
  /**
   * @ignore
   */
  className: import_prop_types22.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types22.default.elementType,
  /**
   * Class name applied to the divider to shrink or stretch the line based on the orientation.
   */
  inset: import_prop_types22.default.oneOfType([import_prop_types22.default.oneOf(["none", "context"]), import_prop_types22.default.string]),
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types22.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types22.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types22.default.shape({
    root: import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types22.default.shape({
    root: import_prop_types22.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types22.default.oneOfType([import_prop_types22.default.arrayOf(import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object, import_prop_types22.default.bool])), import_prop_types22.default.func, import_prop_types22.default.object])
} : void 0;
Divider.muiName = "Divider";
var Divider_default = Divider;

// node_modules/@mui/joy/Drawer/Drawer.js
var React32 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());

// node_modules/@mui/joy/Modal/Modal.js
var React31 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());

// node_modules/@mui/joy/Modal/modalClasses.js
function getModalUtilityClass(slot) {
  return generateUtilityClass2("MuiModal", slot);
}
var modalClasses = generateUtilityClasses2("MuiModal", ["root", "hidden", "backdrop"]);
var modalClasses_default = modalClasses;

// node_modules/@mui/joy/Modal/CloseModalContext.js
var React30 = __toESM(require_react());
var CloseModalContext = React30.createContext(void 0);
var CloseModalContext_default = CloseModalContext;

// node_modules/@mui/joy/Modal/Modal.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var _excluded21 = ["children", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onClose", "onKeyDown", "open", "component", "slots", "slotProps"];
var useUtilityClasses21 = (ownerState) => {
  const {
    open
  } = ownerState;
  const slots = {
    root: ["root", !open && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass, {});
};
var StyledModalRoot = styled_default("div")(({
  ownerState,
  theme
}) => _extends({
  "--unstable_popup-zIndex": `calc(${theme.vars.zIndex.modal} + 1)`,
  '& ~ [role="listbox"]': {
    // target all the listbox (Autocomplete, Menu, Select, etc.) that uses portal
    "--unstable_popup-zIndex": `calc(${theme.vars.zIndex.modal} + 1)`
  },
  position: "fixed",
  zIndex: theme.vars.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && {
  visibility: "hidden"
}));
var ModalRoot = styled_default(StyledModalRoot, {
  name: "JoyModal",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var StyledModalBackdrop = styled_default("div")(({
  theme
}) => ({
  zIndex: -1,
  position: "fixed",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: theme.vars.palette.background.backdrop,
  WebkitTapHighlightColor: "transparent",
  backdropFilter: "blur(8px)"
}));
var ModalBackdrop = styled_default(StyledModalBackdrop, {
  name: "JoyModal",
  slot: "Backdrop",
  overridesResolver: (props, styles) => styles.backdrop
})({});
var Modal = React31.forwardRef(function Modal2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyModal"
  });
  const {
    children,
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onClose,
    open,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const ownerState = _extends({}, props, {
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const {
    getRootProps,
    getBackdropProps,
    rootRef,
    portalRef,
    isTopModal
  } = useModal(_extends({}, ownerState, {
    rootRef: ref
  }));
  const classes = useUtilityClasses21(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref: rootRef,
    className: classes.root,
    elementType: ModalRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState
  });
  const [SlotBackdrop, backdropProps] = useSlot("backdrop", {
    className: classes.backdrop,
    elementType: ModalBackdrop,
    externalForwardedProps,
    getSlotProps: getBackdropProps,
    ownerState
  });
  if (!keepMounted && !open) {
    return null;
  }
  return (0, import_jsx_runtime32.jsx)(CloseModalContext_default.Provider, {
    value: onClose,
    children: (0, import_jsx_runtime32.jsx)(Portal, {
      ref: portalRef,
      container,
      disablePortal,
      children: (0, import_jsx_runtime33.jsxs)(SlotRoot, _extends({}, rootProps, {
        children: [!hideBackdrop ? (0, import_jsx_runtime32.jsx)(SlotBackdrop, _extends({}, backdropProps)) : null, (0, import_jsx_runtime32.jsx)(FocusTrap, {
          disableEnforceFocus,
          disableAutoFocus,
          disableRestoreFocus,
          isEnabled: isTopModal,
          open,
          children: React31.Children.only(children) && React31.cloneElement(children, _extends({}, children.props.tabIndex === void 0 && {
            tabIndex: -1
          }))
        })]
      }))
    })
  });
});
true ? Modal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: elementAcceptingRef_default.isRequired,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types23.default.elementType,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types23.default.oneOfType([HTMLElementType, import_prop_types23.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types23.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types23.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types23.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types23.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types23.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types23.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types23.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: import_prop_types23.default.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"closeClick"`.
   */
  onClose: import_prop_types23.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types23.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types23.default.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types23.default.shape({
    backdrop: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object]),
    root: import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types23.default.shape({
    backdrop: import_prop_types23.default.elementType,
    root: import_prop_types23.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object, import_prop_types23.default.bool])), import_prop_types23.default.func, import_prop_types23.default.object])
} : void 0;
var Modal_default = Modal;

// node_modules/@mui/joy/Drawer/drawerClasses.js
function getDrawerUtilityClass(slot) {
  return generateUtilityClass2("MuiDrawer", slot);
}
var drawerClasses = generateUtilityClasses2("MuiDrawer", ["root", "hidden", "backdrop", "content", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg"]);
var drawerClasses_default = drawerClasses;

// node_modules/@mui/joy/Drawer/Drawer.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var _excluded22 = ["children", "anchor", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "color", "variant", "invertedColors", "size", "onClose", "onKeyDown", "open", "component", "slots", "slotProps"];
var useUtilityClasses22 = (ownerState) => {
  const {
    open,
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", !open && "hidden", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    backdrop: ["backdrop"],
    content: ["content"]
  };
  return composeClasses(slots, getDrawerUtilityClass, {});
};
var DrawerRoot = styled_default(StyledModalRoot, {
  name: "JoyDrawer",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => _extends({
  "--Drawer-transitionDuration": "0.3s",
  "--Drawer-transitionFunction": "ease",
  "--ModalClose-radius": "max((var(--Drawer-contentRadius) - var(--variant-borderWidth, 0px)) - var(--ModalClose-inset), min(var(--ModalClose-inset) / 2, (var(--Drawer-contentRadius) - var(--variant-borderWidth, 0px)) / 2))"
}, ownerState.size === "sm" && {
  "--ModalClose-inset": "0.5rem",
  "--Drawer-verticalSize": "clamp(350px, 30%, 100%)",
  "--Drawer-horizontalSize": "clamp(256px, 20%, 100%)",
  "--Drawer-titleMargin": "0.625rem 0.75rem calc(0.625rem / 2)"
}, ownerState.size === "md" && {
  "--ModalClose-inset": "0.5rem",
  "--Drawer-verticalSize": "clamp(400px, 45%, 100%)",
  "--Drawer-horizontalSize": "clamp(300px, 30%, 100%)",
  "--Drawer-titleMargin": "0.75rem 0.75rem calc(0.75rem / 2)"
}, ownerState.size === "lg" && {
  "--ModalClose-inset": "0.75rem",
  "--Drawer-verticalSize": "clamp(500px, 60%, 100%)",
  "--Drawer-horizontalSize": "clamp(440px, 60%, 100%)",
  "--Drawer-titleMargin": "1rem 1rem calc(1rem / 2)"
}, {
  transitionProperty: "visibility",
  transitionDelay: ownerState.open ? "0s" : "var(--Drawer-transitionDuration)"
}, !ownerState.open && {
  visibility: "hidden"
}));
var DrawerBackdrop = styled_default(StyledModalBackdrop, {
  name: "JoyDrawer",
  slot: "Backdrop",
  overridesResolver: (props, styles) => styles.backdrop
})(({
  ownerState
}) => ({
  opacity: ownerState.open ? 1 : 0,
  transition: "opacity var(--Drawer-transitionDuration) ease-in-out"
}));
var DrawerContent = styled_default("div", {
  name: "JoyDrawer",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  return _extends({}, theme.typography[`body-${ownerState.size}`], {
    boxShadow: theme.shadow.md,
    backgroundColor: theme.vars.palette.background.surface,
    outline: 0,
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    boxSizing: "border-box",
    overflow: "auto"
  }, ownerState.anchor === "left" && {
    top: 0,
    left: 0,
    transform: ownerState.open ? "translateX(0)" : "translateX(-100%)"
  }, ownerState.anchor === "right" && {
    top: 0,
    right: 0,
    transform: ownerState.open ? "translateX(0)" : "translateX(100%)"
  }, ownerState.anchor === "top" && {
    top: 0,
    transform: ownerState.open ? "translateY(0)" : "translateY(-100%)"
  }, ownerState.anchor === "bottom" && {
    bottom: 0,
    transform: ownerState.open ? "translateY(0)" : "translateY(100%)"
  }, {
    height: ownerState.anchor.match(/(left|right)/) ? "100%" : "min(100vh, var(--Drawer-verticalSize))",
    width: ownerState.anchor.match(/(top|bottom)/) ? "100vw" : "min(100vw, var(--Drawer-horizontalSize))",
    transition: "transform var(--Drawer-transitionDuration) var(--Drawer-transitionFunction)"
  }, ownerState.variant === "solid" && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === "soft" && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
    [`& > .${dialogTitleClasses_default.root}`]: {
      "--unstable_DialogTitle-margin": "var(--Drawer-titleMargin)"
    }
  });
});
var Drawer = React32.forwardRef(function Drawer2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyDrawer"
  });
  const {
    children,
    anchor = "left",
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    color = "neutral",
    variant = "plain",
    invertedColors = false,
    size = "md",
    onClose,
    open,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded22);
  const ownerState = _extends({}, props, {
    anchor,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    invertedColors,
    color,
    variant,
    size
  });
  const {
    getRootProps,
    getBackdropProps,
    rootRef,
    portalRef,
    isTopModal
  } = useModal(_extends({}, ownerState, {
    rootRef: ref,
    children: null
  }));
  const classes = useUtilityClasses22(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const labelledBy = useId();
  const describedBy = useId();
  const contextValue = React32.useMemo(() => ({
    variant,
    color,
    labelledBy,
    describedBy
  }), [color, variant, labelledBy, describedBy]);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref: rootRef,
    className: classes.root,
    elementType: DrawerRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState
  });
  const [SlotBackdrop, backdropProps] = useSlot("backdrop", {
    className: classes.backdrop,
    elementType: DrawerBackdrop,
    externalForwardedProps,
    getSlotProps: getBackdropProps,
    ownerState
  });
  const [SlotContent, contentProps] = useSlot("content", {
    className: classes.content,
    elementType: DrawerContent,
    additionalProps: {
      tabIndex: -1,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": labelledBy,
      "aria-describedby": describedBy
    },
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime34.jsx)(CloseModalContext_default.Provider, {
    value: onClose,
    children: (0, import_jsx_runtime34.jsx)(ModalDialogSizeContext_default.Provider, {
      value: size,
      children: (0, import_jsx_runtime34.jsx)(ModalDialogVariantColorContext_default.Provider, {
        value: contextValue,
        children: (0, import_jsx_runtime34.jsx)(Portal, {
          ref: portalRef,
          container,
          disablePortal,
          children: (0, import_jsx_runtime35.jsxs)(SlotRoot, _extends({}, rootProps, {
            children: [!hideBackdrop ? (0, import_jsx_runtime34.jsx)(SlotBackdrop, _extends({}, backdropProps)) : null, (0, import_jsx_runtime34.jsx)(FocusTrap, {
              disableEnforceFocus,
              disableAutoFocus,
              disableRestoreFocus,
              isEnabled: isTopModal,
              open,
              children: (0, import_jsx_runtime34.jsx)(SlotContent, _extends({}, contentProps, {
                children
              }))
            })]
          }))
        })
      })
    })
  });
});
true ? Drawer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: import_prop_types24.default.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  children: import_prop_types24.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types24.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types24.default.elementType,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types24.default.oneOfType([HTMLElementType, import_prop_types24.default.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: import_prop_types24.default.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: import_prop_types24.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: import_prop_types24.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types24.default.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: import_prop_types24.default.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: import_prop_types24.default.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: import_prop_types24.default.bool,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types24.default.bool,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"closeClick"`.
   */
  onClose: import_prop_types24.default.func,
  /**
   * @ignore
   */
  onKeyDown: import_prop_types24.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types24.default.bool.isRequired,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types24.default.oneOf(["sm", "md", "lg"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types24.default.shape({
    backdrop: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    content: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object]),
    root: import_prop_types24.default.oneOfType([import_prop_types24.default.func, import_prop_types24.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types24.default.shape({
    backdrop: import_prop_types24.default.elementType,
    content: import_prop_types24.default.elementType,
    root: import_prop_types24.default.elementType
  }),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types24.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var Drawer_default = Drawer;

// node_modules/@mui/joy/FormControl/FormControl.js
var React33 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());

// node_modules/@mui/joy/FormControl/formControlClasses.js
function getFormControlUtilityClass(slot) {
  return generateUtilityClass2("MuiFormControl", slot);
}
var formControlClasses = generateUtilityClasses2("MuiFormControl", ["root", "error", "disabled", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
var formControlClasses_default = formControlClasses;

// node_modules/@mui/joy/Switch/switchClasses.js
function getSwitchUtilityClass(slot) {
  return generateUtilityClass2("MuiSwitch", slot);
}
var switchClasses = generateUtilityClasses2("MuiSwitch", ["root", "checked", "disabled", "action", "input", "thumb", "track", "focusVisible", "readOnly", "colorPrimary", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid", "startDecorator", "endDecorator"]);
var switchClasses_default = switchClasses;

// node_modules/@mui/joy/FormControl/FormControl.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var _excluded23 = ["id", "className", "component", "disabled", "required", "error", "color", "size", "orientation", "slots", "slotProps"];
var useUtilityClasses23 = (ownerState) => {
  const {
    disabled,
    error,
    size,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation, disabled && "disabled", error && "error", color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getFormControlUtilityClass, {});
};
var FormControlRoot = styled_default("div", {
  name: "JoyFormControl",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$palette$o, _theme$variants$plain, _theme$variants$plain2;
  return _extends({
    "--unstable_RadioGroup-margin": "0.5rem 0",
    "--FormLabel-alignSelf": ownerState.orientation === "horizontal" ? "align-items" : "flex-start",
    "--FormLabel-asteriskColor": theme.vars.palette.danger[500]
  }, ownerState.size === "sm" && {
    "--FormLabel-fontSize": theme.vars.fontSize.xs,
    "--FormLabel-lineHeight": theme.vars.lineHeight.xl,
    "--FormLabel-margin": ownerState.orientation === "horizontal" ? "0 0.5rem 0 0" : "0 0 0.25rem 0",
    "--FormHelperText-fontSize": theme.vars.fontSize.xs,
    "--FormHelperText-lineHeight": theme.vars.lineHeight.xl
  }, ownerState.size === "md" && {
    "--FormLabel-fontSize": theme.vars.fontSize.sm,
    "--FormLabel-lineHeight": theme.vars.lineHeight.sm,
    "--FormLabel-margin": ownerState.orientation === "horizontal" ? "0 0.75rem 0 0" : "0 0 0.375rem 0",
    "--FormHelperText-fontSize": theme.vars.fontSize.sm,
    "--FormHelperText-lineHeight": theme.vars.lineHeight.sm
  }, ownerState.size === "lg" && {
    "--FormLabel-fontSize": theme.vars.fontSize.md,
    "--FormLabel-lineHeight": theme.vars.lineHeight.md,
    "--FormLabel-margin": ownerState.orientation === "horizontal" ? "0 1rem 0 0" : "0 0 0.5rem 0",
    "--FormHelperText-fontSize": theme.vars.fontSize.sm,
    "--FormHelperText-lineHeight": theme.vars.lineHeight.sm
  }, ownerState.color && {
    "--FormHelperText-color": (_theme$vars$palette$o = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette$o[500]
  }, {
    "--FormHelperText-margin": "0.375rem 0 0 0",
    [`&.${formControlClasses_default.error}`]: {
      "--FormHelperText-color": theme.vars.palette.danger[500]
    },
    [`&.${formControlClasses_default.disabled}`]: {
      "--FormLabel-color": (_theme$variants$plain = theme.variants.plainDisabled) == null || (_theme$variants$plain = _theme$variants$plain[ownerState.color || "neutral"]) == null ? void 0 : _theme$variants$plain.color,
      "--FormHelperText-color": (_theme$variants$plain2 = theme.variants.plainDisabled) == null || (_theme$variants$plain2 = _theme$variants$plain2[ownerState.color || "neutral"]) == null ? void 0 : _theme$variants$plain2.color
    },
    display: "flex",
    position: "relative",
    // for keeping the control action area, e.g. Switch
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column"
  }, ownerState.orientation === "horizontal" && {
    [`& > label ~ .${switchClasses_default.root}`]: {
      "--unstable_Switch-margin": "0 0 0 auto"
    }
  });
});
var FormControl = React33.forwardRef(function FormControl2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyFormControl"
  });
  const {
    id: idOverride,
    className,
    component = "div",
    disabled = false,
    required = false,
    error = false,
    color,
    size = "md",
    orientation = "vertical",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded23);
  const id = useId(idOverride);
  const [helperText, setHelperText] = React33.useState(null);
  const ownerState = _extends({}, props, {
    id,
    component,
    color,
    disabled,
    error,
    required,
    size,
    orientation
  });
  let registerEffect;
  if (true) {
    const registeredInput = React33.useRef(false);
    registerEffect = () => {
      if (registeredInput.current) {
        console.error(["Joy: A FormControl can contain only one control component (Autocomplete | Input | Textarea | Select | RadioGroup)", "You should not mix those components inside a single FormControl instance"].join("\n"));
      }
      registeredInput.current = true;
      return () => {
        registeredInput.current = false;
      };
    };
  }
  const classes = useUtilityClasses23(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: FormControlRoot,
    externalForwardedProps: _extends({}, other, {
      component,
      slots,
      slotProps
    }),
    ownerState
  });
  const formControlContextValue = React33.useMemo(() => ({
    disabled,
    required,
    error,
    color,
    size,
    htmlFor: id,
    labelId: `${id}-label`,
    "aria-describedby": helperText ? `${id}-helper-text` : void 0,
    setHelperText,
    registerEffect
  }), [color, disabled, error, helperText, id, registerEffect, required, size]);
  return (0, import_jsx_runtime36.jsx)(FormControlContext_default.Provider, {
    value: formControlContextValue,
    children: (0, import_jsx_runtime36.jsx)(SlotRoot, _extends({}, rootProps))
  });
});
true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types25.default.node,
  /**
   * @ignore
   */
  className: import_prop_types25.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: import_prop_types25.default.oneOfType([import_prop_types25.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types25.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types25.default.elementType,
  /**
   * If `true`, the children are in disabled state.
   * @default false
   */
  disabled: import_prop_types25.default.bool,
  /**
   * If `true`, the children will indicate an error.
   * @default false
   */
  error: import_prop_types25.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types25.default.string,
  /**
   * The content direction flow.
   * @default 'vertical'
   */
  orientation: import_prop_types25.default.oneOf(["horizontal", "vertical"]),
  /**
   * If `true`, the user must specify a value for the input before the owning form can be submitted.
   * If `true`, the asterisk appears on the FormLabel.
   * @default false
   */
  required: import_prop_types25.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types25.default.oneOfType([import_prop_types25.default.oneOf(["sm", "md", "lg"]), import_prop_types25.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types25.default.shape({
    root: import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types25.default.shape({
    root: import_prop_types25.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types25.default.oneOfType([import_prop_types25.default.arrayOf(import_prop_types25.default.oneOfType([import_prop_types25.default.func, import_prop_types25.default.object, import_prop_types25.default.bool])), import_prop_types25.default.func, import_prop_types25.default.object])
} : void 0;
var FormControl_default = FormControl;

// node_modules/@mui/joy/FormHelperText/FormHelperText.js
var React34 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());

// node_modules/@mui/joy/FormHelperText/formHelperTextClasses.js
function getFormHelperTextUtilityClass(slot) {
  return generateUtilityClass2("MuiFormHelperText", slot);
}
var formHelperTextClasses = generateUtilityClasses2("MuiFormHelperText", ["root"]);
var formHelperTextClasses_default = formHelperTextClasses;

// node_modules/@mui/joy/FormLabel/formLabelClasses.js
function getFormLabelUtilityClass(slot) {
  return generateUtilityClass2("MuiFormLabel", slot);
}
var formLabelClasses = generateUtilityClasses2("MuiFormLabel", ["root", "asterisk"]);
var formLabelClasses_default = formLabelClasses;

// node_modules/@mui/joy/FormHelperText/FormHelperText.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var _excluded24 = ["children", "component", "slots", "slotProps"];
var useUtilityClasses24 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getFormHelperTextUtilityClass, {});
};
var FormHelperTextRoot = styled_default("div", {
  name: "JoyFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  "--Icon-fontSize": "calc(var(--FormHelperText-lineHeight) * 1em)",
  display: "flex",
  alignItems: "center",
  gap: "2px",
  fontFamily: theme.vars.fontFamily.body,
  fontSize: `var(--FormHelperText-fontSize, ${theme.vars.fontSize.sm})`,
  lineHeight: `var(--FormHelperText-lineHeight, ${theme.vars.lineHeight.sm})`,
  color: `var(--FormHelperText-color, ${theme.vars.palette.text.tertiary})`,
  margin: "var(--FormHelperText-margin, 0px)",
  [`.${formLabelClasses_default.root} + &`]: {
    "--FormHelperText-margin": "0px"
    // remove the margin if the helper text is next to the form label.
  },
  [`.${formControlClasses_default.error} &`]: {
    "--Icon-color": "currentColor"
  }
}));
var FormHelperText = React34.forwardRef(function FormHelperText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyFormHelperText"
  });
  const {
    children,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded24);
  const rootRef = React34.useRef(null);
  const handleRef = useForkRef(rootRef, ref);
  const formControl = React34.useContext(FormControlContext_default);
  const setHelperText = formControl == null ? void 0 : formControl.setHelperText;
  React34.useEffect(() => {
    setHelperText == null || setHelperText(rootRef.current);
    return () => {
      setHelperText == null || setHelperText(null);
    };
  }, [setHelperText]);
  const classes = useUtilityClasses24();
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref: handleRef,
    elementType: FormHelperTextRoot,
    externalForwardedProps,
    ownerState: props,
    additionalProps: {
      as: component,
      id: formControl == null ? void 0 : formControl["aria-describedby"]
    },
    className: classes.root
  });
  return (0, import_jsx_runtime37.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types26.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types26.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types26.default.shape({
    root: import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types26.default.shape({
    root: import_prop_types26.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types26.default.oneOfType([import_prop_types26.default.arrayOf(import_prop_types26.default.oneOfType([import_prop_types26.default.func, import_prop_types26.default.object, import_prop_types26.default.bool])), import_prop_types26.default.func, import_prop_types26.default.object])
} : void 0;
var FormHelperText_default = FormHelperText;

// node_modules/@mui/joy/FormLabel/FormLabel.js
var React35 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var _excluded25 = ["children", "component", "slots", "slotProps"];
var useUtilityClasses25 = () => {
  const slots = {
    root: ["root"],
    asterisk: ["asterisk"]
  };
  return composeClasses(slots, getFormLabelUtilityClass, {});
};
var FormLabelRoot = styled_default("label", {
  name: "JoyFormLabel",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  "--Icon-fontSize": "calc(var(--FormLabel-lineHeight) * 1em)",
  WebkitTapHighlightColor: "transparent",
  alignSelf: "var(--FormLabel-alignSelf)",
  // to not fill the block space. It seems like a bug when clicking on empty space (within the label area), even though it is not.
  display: "flex",
  gap: "2px",
  alignItems: "center",
  flexWrap: "wrap",
  userSelect: "none",
  fontFamily: theme.vars.fontFamily.body,
  fontSize: `var(--FormLabel-fontSize, ${theme.vars.fontSize.sm})`,
  fontWeight: theme.vars.fontWeight.md,
  lineHeight: `var(--FormLabel-lineHeight, ${theme.vars.lineHeight.sm})`,
  color: `var(--FormLabel-color, ${theme.vars.palette.text.primary})`,
  margin: "var(--FormLabel-margin, 0px)"
}));
var AsteriskComponent = styled_default("span", {
  name: "JoyFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles) => styles.asterisk
})({
  color: "var(--FormLabel-asteriskColor)"
});
var FormLabel = React35.forwardRef(function FormLabel2(inProps, ref) {
  var _ref, _inProps$required;
  const props = useThemeProps({
    props: inProps,
    name: "JoyFormLabel"
  });
  const {
    children,
    component = "label",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded25);
  const formControl = React35.useContext(FormControlContext_default);
  const required = (_ref = (_inProps$required = inProps.required) != null ? _inProps$required : formControl == null ? void 0 : formControl.required) != null ? _ref : false;
  const ownerState = _extends({}, props, {
    required
  });
  const classes = useUtilityClasses25();
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    additionalProps: {
      htmlFor: formControl == null ? void 0 : formControl.htmlFor,
      id: formControl == null ? void 0 : formControl.labelId
    },
    ref,
    className: classes.root,
    elementType: FormLabelRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotAsterisk, asteriskProps] = useSlot("asterisk", {
    additionalProps: {
      "aria-hidden": true
    },
    className: classes.asterisk,
    elementType: AsteriskComponent,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime38.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [children, required && (0, import_jsx_runtime38.jsxs)(SlotAsterisk, _extends({}, asteriskProps, {
      children: [" ", "*"]
    }))]
  }));
});
true ? FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types27.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types27.default.elementType,
  /**
   * The asterisk is added if required=`true`
   */
  required: import_prop_types27.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types27.default.shape({
    asterisk: import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object]),
    root: import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types27.default.shape({
    asterisk: import_prop_types27.default.elementType,
    root: import_prop_types27.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types27.default.oneOfType([import_prop_types27.default.arrayOf(import_prop_types27.default.oneOfType([import_prop_types27.default.func, import_prop_types27.default.object, import_prop_types27.default.bool])), import_prop_types27.default.func, import_prop_types27.default.object])
} : void 0;
var FormLabel_default = FormLabel;

// node_modules/@mui/joy/Grid/Grid.js
var import_prop_types28 = __toESM(require_prop_types());
var Grid = createGrid({
  createStyledComponent: styled_default("div", {
    name: "JoyGrid",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "JoyGrid"
  })
});
true ? Grid.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types28.default.node,
  /**
   * @ignore
   */
  sx: import_prop_types28.default.oneOfType([import_prop_types28.default.arrayOf(import_prop_types28.default.oneOfType([import_prop_types28.default.func, import_prop_types28.default.object, import_prop_types28.default.bool])), import_prop_types28.default.func, import_prop_types28.default.object])
} : void 0;
var Grid_default = Grid;

// node_modules/@mui/joy/Grid/gridClasses.js
function getGridUtilityClass(slot) {
  return generateUtilityClass("MuiGrid", slot);
}
var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
var WRAPS = ["nowrap", "wrap-reverse", "wrap"];
var GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var gridClasses = generateUtilityClasses("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...SPACINGS.map((spacing) => `spacing-xs-${spacing}`),
  // direction values
  ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
  // wrap values
  ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
  // grid sizes for all breakpoints
  ...GRID_SIZES.map((size) => `grid-xs-${size}`),
  ...GRID_SIZES.map((size) => `grid-sm-${size}`),
  ...GRID_SIZES.map((size) => `grid-md-${size}`),
  ...GRID_SIZES.map((size) => `grid-lg-${size}`),
  ...GRID_SIZES.map((size) => `grid-xl-${size}`)
]);
var gridClasses_default = gridClasses;

// node_modules/@mui/joy/LinearProgress/LinearProgress.js
var React36 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());

// node_modules/@mui/joy/LinearProgress/linearProgressClasses.js
function getLinearProgressUtilityClass(slot) {
  return generateUtilityClass2("MuiLinearProgress", slot);
}
var linearProgressClasses = generateUtilityClasses2("MuiLinearProgress", ["root", "determinate", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var linearProgressClasses_default = linearProgressClasses;

// node_modules/@mui/joy/LinearProgress/LinearProgress.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var _excluded26 = ["children", "className", "component", "color", "size", "variant", "thickness", "determinate", "value", "style", "slots", "slotProps"];
var _ = (t) => t;
var _t;
var _t2;
var progressKeyframe = keyframes(_t || (_t = _`
  0% {
    left: var(--_LinearProgress-progressInset);
    width: var(--LinearProgress-progressMinWidth);
  }

  25% {
    width: var(--LinearProgress-progressMaxWidth);
  }

  50% {
    left: var(--_LinearProgress-progressLeft);
    width: var(--LinearProgress-progressMinWidth);
  }

  75% {
    width: var(--LinearProgress-progressMaxWidth);
  }

  100% {
    left: var(--_LinearProgress-progressInset);
    width: var(--LinearProgress-progressMinWidth);
  }
`));
var useUtilityClasses26 = (ownerState) => {
  const {
    determinate,
    color,
    variant,
    size
  } = ownerState;
  const slots = {
    root: ["root", determinate && "determinate", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getLinearProgressUtilityClass, {});
};
var LinearProgressRoot = styled_default("div", {
  name: "JoyLinearProgress",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants, _theme$variants$solid, _theme$variants$softH, _theme$variants$solid2;
  return _extends({
    // public variables
    "--LinearProgress-radius": "var(--LinearProgress-thickness)",
    "--LinearProgress-progressThickness": "var(--LinearProgress-thickness)",
    "--LinearProgress-progressRadius": "max(var(--LinearProgress-radius) - var(--_LinearProgress-padding), min(var(--_LinearProgress-padding) / 2, var(--LinearProgress-radius) / 2))"
  }, ownerState.size === "sm" && {
    "--LinearProgress-thickness": "4px"
  }, ownerState.size === "md" && {
    "--LinearProgress-thickness": "6px"
  }, ownerState.size === "lg" && {
    "--LinearProgress-thickness": "8px"
  }, ownerState.thickness && {
    "--LinearProgress-thickness": `${ownerState.thickness}px`
  }, !ownerState.determinate && {
    "--LinearProgress-progressMinWidth": "calc(var(--LinearProgress-percent) * 1% / 2)",
    "--LinearProgress-progressMaxWidth": "calc(var(--LinearProgress-percent) * 1%)",
    "--_LinearProgress-progressLeft": "calc(100% - var(--LinearProgress-progressMinWidth) - var(--_LinearProgress-progressInset))",
    "--_LinearProgress-progressInset": "calc(var(--LinearProgress-thickness) / 2 - var(--LinearProgress-progressThickness) / 2)"
  }, {
    minBlockSize: "var(--LinearProgress-thickness)",
    boxSizing: "border-box",
    borderRadius: "var(--LinearProgress-radius)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: "var(--_LinearProgress-padding)",
    position: "relative"
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color], {
    "--_LinearProgress-padding": "max((var(--LinearProgress-thickness) - 2 * var(--variant-borderWidth, 0px) - var(--LinearProgress-progressThickness)) / 2, 0px)",
    "&::before": {
      content: '""',
      display: "block",
      boxSizing: "inherit",
      blockSize: "var(--LinearProgress-progressThickness)",
      borderRadius: "var(--LinearProgress-progressRadius)",
      backgroundColor: "currentColor",
      color: "inherit",
      position: "absolute"
      // required to make `left` animation works.
    }
  }, ownerState.variant === "soft" && {
    backgroundColor: theme.variants.soft.neutral.backgroundColor,
    color: (_theme$variants$solid = theme.variants.solid) == null ? void 0 : _theme$variants$solid[ownerState.color].backgroundColor
  }, ownerState.variant === "solid" && {
    backgroundColor: (_theme$variants$softH = theme.variants.softHover) == null ? void 0 : _theme$variants$softH[ownerState.color].backgroundColor,
    color: (_theme$variants$solid2 = theme.variants.solid) == null ? void 0 : _theme$variants$solid2[ownerState.color].backgroundColor
  });
}, ({
  ownerState
}) => ownerState.determinate ? {
  "&::before": {
    left: "var(--_LinearProgress-padding)",
    inlineSize: "calc(var(--LinearProgress-percent) * 1% - 2 * var(--_LinearProgress-padding))"
  }
} : css(_t2 || (_t2 = _`
          &::before {
            animation: ${0}
              var(--LinearProgress-circulation, 2.5s ease-in-out 0s infinite normal none running);
          }
        `), progressKeyframe), ({
  ownerState,
  theme
}) => {
  const {
    borderRadius,
    height
  } = resolveSxValue({
    theme,
    ownerState
  }, ["borderRadius", "height"]);
  return _extends({}, borderRadius !== void 0 && {
    "--LinearProgress-radius": borderRadius
  }, height !== void 0 && {
    "--LinearProgress-thickness": height
  });
});
var LinearProgress = React36.forwardRef(function LinearProgress2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyLinearProgress"
  });
  const {
    children,
    className,
    component,
    color = "primary",
    size = "md",
    variant = "soft",
    thickness,
    determinate = false,
    value = determinate ? 0 : 25,
    // `25` is the 1/4 of the bar.
    style,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded26);
  const ownerState = _extends({}, props, {
    component,
    color,
    size,
    variant,
    thickness,
    value,
    determinate,
    instanceSize: inProps.size
  });
  const classes = useUtilityClasses26(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: LinearProgressRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      as: component,
      role: "progressbar",
      style: _extends({}, {
        "--LinearProgress-percent": value
      }, style)
    }, typeof value === "number" && determinate && {
      "aria-valuenow": Math.round(value)
    })
  });
  return (0, import_jsx_runtime39.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? LinearProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types29.default.node,
  /**
   * @ignore
   */
  className: import_prop_types29.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: import_prop_types29.default.oneOfType([import_prop_types29.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types29.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types29.default.elementType,
  /**
   * The boolean to select a variant.
   * Use indeterminate when there is no progress value.
   * @default false
   */
  determinate: import_prop_types29.default.bool,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types29.default.oneOfType([import_prop_types29.default.oneOf(["sm", "md", "lg"]), import_prop_types29.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types29.default.shape({
    root: import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types29.default.shape({
    root: import_prop_types29.default.elementType
  }),
  /**
   * @ignore
   */
  style: import_prop_types29.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types29.default.oneOfType([import_prop_types29.default.arrayOf(import_prop_types29.default.oneOfType([import_prop_types29.default.func, import_prop_types29.default.object, import_prop_types29.default.bool])), import_prop_types29.default.func, import_prop_types29.default.object]),
  /**
   * The thickness of the bar.
   */
  thickness: import_prop_types29.default.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   *
   * @default determinate ? 0 : 25
   */
  value: import_prop_types29.default.number,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'soft'
   */
  variant: import_prop_types29.default.oneOfType([import_prop_types29.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types29.default.string])
} : void 0;
var LinearProgress_default = LinearProgress;

// node_modules/@mui/joy/ListDivider/ListDivider.js
var React37 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());

// node_modules/@mui/joy/ListDivider/listDividerClasses.js
function getListDividerUtilityClass(slot) {
  return generateUtilityClass2("MuiListDivider", slot);
}
var listDividerClasses = generateUtilityClasses2("MuiListDivider", ["root", "insetGutter", "insetStartDecorator", "insetStartContent", "horizontal", "vertical"]);
var listDividerClasses_default = listDividerClasses;

// node_modules/@mui/joy/ListDivider/ListDivider.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var _excluded27 = ["component", "role", "className", "children", "inset", "orientation", "slots", "slotProps"];
var useUtilityClasses27 = (ownerState) => {
  const {
    orientation,
    inset
  } = ownerState;
  const slots = {
    root: [
      "root",
      orientation,
      // `insetContext` class is already produced by Divider
      inset && inset !== "context" && `inset${capitalize(inset)}`
    ]
  };
  return composeClasses(slots, getListDividerUtilityClass, {});
};
var ListDividerRoot = styled_default(DividerRoot, {
  name: "JoyListDivider",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => _extends({}, ownerState.inset === "context" && {
  "--Divider-inset": "calc(-1 * var(--List-padding))"
}, ownerState.row && _extends({
  marginInline: "var(--ListDivider-gap)"
}, ownerState.inset === "gutter" && {
  marginBlock: "var(--ListItem-paddingY)"
}, ownerState["data-first-child"] === void 0 && {
  // combine --List-gap and --ListDivider-gap to replicate flexbox gap behavior
  marginInlineStart: "calc(var(--List-gap) + var(--ListDivider-gap))"
}), !ownerState.row && _extends({}, ownerState["data-first-child"] === void 0 && {
  // combine --List-gap and --ListDivider-gap to replicate flexbox gap behavior
  marginBlockStart: "calc(var(--List-gap) + var(--ListDivider-gap))"
}, {
  marginBlockEnd: "var(--ListDivider-gap)"
}, ownerState.inset === "gutter" && {
  marginInlineStart: "var(--ListItem-paddingLeft)",
  marginInlineEnd: "var(--ListItem-paddingRight)"
}, ownerState.inset === "startDecorator" && {
  marginInlineStart: "var(--ListItem-paddingLeft)"
}, ownerState.inset === "startContent" && {
  marginInlineStart: "calc(var(--ListItem-paddingLeft) + var(--ListItemDecorator-size))"
})));
var ListDivider = React37.forwardRef(function ListDivider2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyListDivider"
  });
  const row = React37.useContext(RowListContext_default);
  const listComponent = React37.useContext(ComponentListContext_default);
  const {
    component: componentProp,
    role: roleProp,
    className,
    children,
    inset = "context",
    orientation: orientationProp,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded27);
  const [listElement] = (listComponent == null ? void 0 : listComponent.split(":")) || ["", ""];
  const component = componentProp || (listElement && !listElement.match(/^(ul|ol|menu)$/) ? "div" : "li");
  const role = roleProp || (component === "li" ? "separator" : void 0);
  const orientation = orientationProp || (row ? "vertical" : "horizontal");
  const ownerState = _extends({}, props, {
    inset,
    row,
    orientation,
    component,
    role
  });
  const classes = useUtilityClasses27(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListDividerRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      as: component,
      role
    }, role === "separator" && orientation === "vertical" && {
      // The implicit aria-orientation of separator is 'horizontal'
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role
      "aria-orientation": "vertical"
    })
  });
  return (0, import_jsx_runtime40.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? ListDivider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types30.default.node,
  /**
   * @ignore
   */
  className: import_prop_types30.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types30.default.elementType,
  /**
   * The empty space on the side(s) of the divider in a vertical list.
   *
   * For horizontal list (the nearest parent List has `row` prop set to `true`), only `inset="gutter"` affects the list divider.
   * @default 'context'
   */
  inset: import_prop_types30.default.oneOfType([import_prop_types30.default.oneOf(["context", "gutter", "startDecorator", "startContent"]), import_prop_types30.default.string]),
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types30.default.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: import_prop_types30.default.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types30.default.shape({
    root: import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types30.default.shape({
    root: import_prop_types30.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types30.default.oneOfType([import_prop_types30.default.arrayOf(import_prop_types30.default.oneOfType([import_prop_types30.default.func, import_prop_types30.default.object, import_prop_types30.default.bool])), import_prop_types30.default.func, import_prop_types30.default.object])
} : void 0;
var ListDivider_default = ListDivider;

// node_modules/@mui/joy/ListItemContent/ListItemContent.js
var React38 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());

// node_modules/@mui/joy/ListItemContent/listItemContentClasses.js
function getListItemContentUtilityClass(slot) {
  return generateUtilityClass2("MuiListItemContent", slot);
}
var listItemContentClasses = generateUtilityClasses2("MuiListItemContent", ["root"]);
var listItemContentClasses_default = listItemContentClasses;

// node_modules/@mui/joy/ListItemContent/ListItemContent.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var _excluded28 = ["component", "className", "children", "slots", "slotProps"];
var useUtilityClasses28 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getListItemContentUtilityClass, {});
};
var ListItemContentRoot = styled_default("div", {
  name: "JoyListItemContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  flex: "1 1 auto",
  minWidth: 0
});
var ListItemContent = React38.forwardRef(function ListItemContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyListItemContent"
  });
  const {
    component,
    className,
    children,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  const ownerState = _extends({}, props);
  const classes = useUtilityClasses28();
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListItemContentRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime41.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? ListItemContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types31.default.node,
  /**
   * @ignore
   */
  className: import_prop_types31.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types31.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types31.default.shape({
    root: import_prop_types31.default.oneOfType([import_prop_types31.default.func, import_prop_types31.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types31.default.shape({
    root: import_prop_types31.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types31.default.oneOfType([import_prop_types31.default.arrayOf(import_prop_types31.default.oneOfType([import_prop_types31.default.func, import_prop_types31.default.object, import_prop_types31.default.bool])), import_prop_types31.default.func, import_prop_types31.default.object])
} : void 0;
var ListItemContent_default = ListItemContent;

// node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js
var React39 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());

// node_modules/@mui/joy/ListItemDecorator/listItemDecoratorClasses.js
function getListItemDecoratorUtilityClass(slot) {
  return generateUtilityClass2("MuiListItemDecorator", slot);
}
var listItemDecoratorClasses = generateUtilityClasses2("MuiListItemDecorator", ["root"]);
var listItemDecoratorClasses_default = listItemDecoratorClasses;

// node_modules/@mui/joy/ListItemDecorator/ListItemDecorator.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var _excluded29 = ["component", "className", "children", "slots", "slotProps"];
var useUtilityClasses29 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getListItemDecoratorUtilityClass, {});
};
var ListItemDecoratorRoot = styled_default("span", {
  name: "JoyListItemDecorator",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => _extends({
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: `var(--unstable_ListItemDecorator-alignItems, ${ownerState.parentOrientation === "horizontal" ? "center" : "initial"})`
}, ownerState.parentOrientation === "horizontal" ? {
  minInlineSize: "var(--ListItemDecorator-size)",
  marginInlineEnd: "calc(-1 * var(--ListItem-gap))"
} : {
  minBlockSize: "var(--ListItemDecorator-size)",
  justifyContent: "center",
  marginBlockEnd: "calc(-1 * var(--ListItem-gap))"
}));
var ListItemDecorator = React39.forwardRef(function ListItemDecorator2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyListItemDecorator"
  });
  const {
    component,
    className,
    children,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded29);
  const parentOrientation = React39.useContext(ListItemButtonOrientationContext_default);
  const ownerState = _extends({
    parentOrientation
  }, props);
  const classes = useUtilityClasses29();
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ListItemDecoratorRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime42.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? ListItemDecorator.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types32.default.node,
  /**
   * @ignore
   */
  className: import_prop_types32.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types32.default.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types32.default.shape({
    root: import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types32.default.shape({
    root: import_prop_types32.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types32.default.oneOfType([import_prop_types32.default.arrayOf(import_prop_types32.default.oneOfType([import_prop_types32.default.func, import_prop_types32.default.object, import_prop_types32.default.bool])), import_prop_types32.default.func, import_prop_types32.default.object])
} : void 0;
var ListItemDecorator_default = ListItemDecorator;

// node_modules/@mui/joy/Menu/Menu.js
var React40 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());

// node_modules/@mui/joy/Menu/menuClasses.js
function getMenuUtilityClass(slot) {
  return generateUtilityClass2("MuiMenu", slot);
}
var menuClasses = generateUtilityClasses2("MuiMenu", ["root", "listbox", "expanded", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg"]);
var menuClasses_default = menuClasses;

// node_modules/@mui/joy/Menu/Menu.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var _excluded30 = ["actions", "children", "color", "component", "disablePortal", "keepMounted", "id", "invertedColors", "onItemsChange", "modifiers", "variant", "size", "slots", "slotProps"];
var useUtilityClasses30 = (ownerState) => {
  const {
    open,
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", open && "expanded", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    listbox: ["listbox"]
  };
  return composeClasses(slots, getMenuUtilityClass, {});
};
var MenuRoot = styled_default(StyledList, {
  name: "JoyMenu",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  return [_extends({
    "--focus-outline-offset": `calc(${theme.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    "--ListItem-stickyBackground": (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.popup,
    "--ListItem-stickyTop": "calc(var(--List-padding, var(--ListDivider-gap)) * -1)"
  }, scopedVariables, {
    borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`,
    boxShadow: theme.shadow.md,
    overflow: "auto",
    // `unstable_popup-zIndex` is a private variable that lets other component, e.g. Modal, to override the z-index so that the listbox can be displayed above the Modal.
    zIndex: `var(--unstable_popup-zIndex, ${theme.vars.zIndex.popup})`
  }, !(variantStyle != null && variantStyle.backgroundColor) && {
    backgroundColor: theme.vars.palette.background.popup
  }, ownerState.variant === "solid" && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === "soft" && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants2 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants2[ownerState.color])];
});
var Menu = React40.forwardRef(function Menu2(inProps, ref) {
  var _props$slots;
  const props = useThemeProps({
    props: inProps,
    name: "JoyMenu"
  });
  const {
    actions,
    children,
    color = "neutral",
    component,
    disablePortal = false,
    keepMounted = false,
    id,
    invertedColors = false,
    onItemsChange,
    modifiers: modifiersProp,
    variant = "outlined",
    size = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded30);
  const {
    contextValue,
    getListboxProps,
    dispatch,
    open,
    triggerElement
  } = useMenu({
    onItemsChange,
    id,
    listboxRef: ref
  });
  React40.useImperativeHandle(actions, () => ({
    dispatch,
    resetHighlight: () => dispatch({
      type: ListActionTypes.resetHighlight,
      event: null
    })
  }), [dispatch]);
  const ownerState = _extends({}, props, {
    disablePortal,
    invertedColors,
    color,
    variant,
    size,
    open,
    nesting: false,
    row: false
  });
  const classes = useUtilityClasses30(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const modifiers = React40.useMemo(() => [{
    name: "offset",
    options: {
      offset: [0, 4]
    }
  }, ...modifiersProp || []], [modifiersProp]);
  const rootProps = useSlotProps({
    elementType: MenuRoot,
    getSlotProps: getListboxProps,
    externalForwardedProps,
    externalSlotProps: {},
    ownerState,
    additionalProps: {
      anchorEl: triggerElement,
      open: open && triggerElement !== null,
      disablePortal,
      keepMounted,
      modifiers
    },
    className: classes.root
  });
  return (0, import_jsx_runtime43.jsx)(MenuRoot, _extends({}, rootProps, !((_props$slots = props.slots) != null && _props$slots.root) && {
    as: Popper,
    slots: {
      root: component || "ul"
    }
  }, {
    children: (0, import_jsx_runtime43.jsx)(MenuProvider, {
      value: contextValue,
      children: (0, import_jsx_runtime43.jsx)(VariantColorProvider, {
        variant: invertedColors ? void 0 : variant,
        color,
        children: (0, import_jsx_runtime43.jsx)(GroupListContext_default.Provider, {
          value: "menu",
          children: (0, import_jsx_runtime43.jsx)(ListProvider_default, {
            nested: true,
            children
          })
        })
      })
    })
  }));
});
true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref with imperative actions.
   * It allows to select the first or last menu item.
   */
  actions: refType_default,
  /**
   * @ignore
   */
  children: import_prop_types33.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types33.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types33.default.elementType,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types33.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types33.default.string,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types33.default.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types33.default.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types33.default.arrayOf(import_prop_types33.default.shape({
    data: import_prop_types33.default.object,
    effect: import_prop_types33.default.func,
    enabled: import_prop_types33.default.bool,
    fn: import_prop_types33.default.func,
    name: import_prop_types33.default.any,
    options: import_prop_types33.default.object,
    phase: import_prop_types33.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types33.default.arrayOf(import_prop_types33.default.string),
    requiresIfExists: import_prop_types33.default.arrayOf(import_prop_types33.default.string)
  })),
  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onClose: import_prop_types33.default.func,
  /**
   * Function called when the items displayed in the menu change.
   */
  onItemsChange: import_prop_types33.default.func,
  /**
   * Controls whether the menu is displayed.
   * @default false
   */
  open: import_prop_types33.default.bool,
  /**
   * The size of the component (affect other nested list* components because the `Menu` inherits `List`).
   * @default 'md'
   */
  size: import_prop_types33.default.oneOfType([import_prop_types33.default.oneOf(["sm", "md", "lg"]), import_prop_types33.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types33.default.shape({
    root: import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types33.default.shape({
    root: import_prop_types33.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types33.default.oneOfType([import_prop_types33.default.arrayOf(import_prop_types33.default.oneOfType([import_prop_types33.default.func, import_prop_types33.default.object, import_prop_types33.default.bool])), import_prop_types33.default.func, import_prop_types33.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types33.default.oneOfType([import_prop_types33.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types33.default.string])
} : void 0;
var Menu_default = Menu;

// node_modules/@mui/joy/MenuButton/MenuButton.js
var React41 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());

// node_modules/@mui/joy/MenuButton/menuButtonClasses.js
function getMenuButtonUtilityClass(slot) {
  return generateUtilityClass2("MuiMenuButton", slot);
}
var menuButtonClasses = generateUtilityClasses2("MuiMenuButton", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorInfo", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "disabled", "sizeSm", "sizeMd", "sizeLg", "fullWidth", "startDecorator", "endDecorator", "loading", "loadingIndicatorCenter"]);
var menuButtonClasses_default = menuButtonClasses;

// node_modules/@mui/joy/MenuButton/MenuButton.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var _excluded31 = ["children", "color", "component", "disabled", "endDecorator", "loading", "loadingPosition", "loadingIndicator", "size", "slotProps", "slots", "startDecorator", "variant"];
var useUtilityClasses31 = (ownerState) => {
  const {
    color,
    disabled,
    fullWidth,
    size,
    variant,
    loading
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", fullWidth && "fullWidth", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`, loading && "loading"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"],
    loadingIndicatorCenter: ["loadingIndicatorCenter"]
  };
  return composeClasses(slots, getMenuButtonUtilityClass, {});
};
var MenuButtonRoot = styled_default("button", {
  name: "JoyMenuButton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(getButtonStyles);
var MenuButtonStartDecorator = styled_default("span", {
  name: "JoyMenuButton",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  "--Icon-margin": "0 0 0 calc(var(--Button-gap) / -2)",
  "--CircularProgress-margin": "0 0 0 calc(var(--Button-gap) / -2)",
  display: "inherit",
  marginRight: "var(--Button-gap)"
});
var MenuButtonEndDecorator = styled_default("span", {
  name: "JoyMenuButton",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  "--Icon-margin": "0 calc(var(--Button-gap) / -2) 0 0",
  "--CircularProgress-margin": "0 calc(var(--Button-gap) / -2) 0 0",
  display: "inherit",
  marginLeft: "var(--Button-gap)"
});
var MenuButtonLoadingCenter = styled_default("span", {
  name: "JoyMenuButton",
  slot: "LoadingCenter",
  overridesResolver: (props, styles) => styles.loadingIndicatorCenter
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2;
  return _extends({
    display: "inherit",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color
  }, ownerState.disabled && {
    color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
  });
});
var MenuButton = React41.forwardRef(function MenuButton2(inProps, forwardedRef) {
  var _inProps$disabled;
  const props = useThemeProps({
    props: inProps,
    name: "JoyMenuButton"
  });
  const {
    children,
    color = "neutral",
    component,
    disabled: disabledProp = false,
    endDecorator,
    loading = false,
    loadingPosition = "center",
    loadingIndicator: loadingIndicatorProp,
    size: sizeProp = "md",
    slotProps = {},
    slots = {},
    startDecorator,
    variant: variantProp = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded31);
  const buttonGroup = React41.useContext(ButtonGroupContext_default);
  const variant = inProps.variant || buttonGroup.variant || variantProp;
  const size = inProps.size || buttonGroup.size || sizeProp;
  const disabled = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : buttonGroup.disabled || disabledProp || loading;
  const {
    getRootProps,
    open,
    active
  } = useMenuButton({
    rootRef: forwardedRef,
    disabled
  });
  const loadingIndicator = loadingIndicatorProp != null ? loadingIndicatorProp : (0, import_jsx_runtime44.jsx)(CircularProgress_default, {
    color,
    thickness: {
      sm: 2,
      md: 3,
      lg: 4
    }[size] || 3
  });
  const ownerState = _extends({}, props, {
    active,
    color,
    disabled,
    open,
    size,
    variant
  });
  const classes = useUtilityClasses31(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    elementType: MenuButtonRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ref: forwardedRef,
    ownerState,
    className: classes.root
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: MenuButtonStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: MenuButtonEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotLoadingIndicatorCenter, loadingIndicatorCenterProps] = useSlot("loadingIndicatorCenter", {
    className: classes.loadingIndicatorCenter,
    elementType: MenuButtonLoadingCenter,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime45.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [(startDecorator || loading && loadingPosition === "start") && (0, import_jsx_runtime44.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
      children: loading && loadingPosition === "start" ? loadingIndicator : startDecorator
    })), children, loading && loadingPosition === "center" && (0, import_jsx_runtime44.jsx)(SlotLoadingIndicatorCenter, _extends({}, loadingIndicatorCenterProps, {
      children: loadingIndicator
    })), (endDecorator || loading && loadingPosition === "end") && (0, import_jsx_runtime44.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
      children: loading && loadingPosition === "end" ? loadingIndicator : endDecorator
    }))]
  }));
});
true ? MenuButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types34.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types34.default.oneOfType([import_prop_types34.default.oneOf(["danger", "info", "neutral", "primary", "success", "warning"]), import_prop_types34.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types34.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types34.default.bool,
  /**
   * Element placed after the children.
   */
  endDecorator: import_prop_types34.default.node,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: import_prop_types34.default.bool,
  /**
   * If `true`, the loading indicator is shown.
   * @default false
   */
  loading: import_prop_types34.default.bool,
  /**
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default we render a `CircularProgress` that is labelled by the button itself.
   * @default <CircularProgress />
   */
  loadingIndicator: import_prop_types34.default.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: import_prop_types34.default.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types34.default.oneOfType([import_prop_types34.default.oneOf(["sm", "md", "lg"]), import_prop_types34.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types34.default.shape({
    endDecorator: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    loadingIndicatorCenter: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    root: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object]),
    startDecorator: import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types34.default.shape({
    endDecorator: import_prop_types34.default.elementType,
    loadingIndicatorCenter: import_prop_types34.default.elementType,
    root: import_prop_types34.default.elementType,
    startDecorator: import_prop_types34.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: import_prop_types34.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types34.default.oneOfType([import_prop_types34.default.arrayOf(import_prop_types34.default.oneOfType([import_prop_types34.default.func, import_prop_types34.default.object, import_prop_types34.default.bool])), import_prop_types34.default.func, import_prop_types34.default.object]),
  /**
   * @default 0
   */
  tabIndex: import_prop_types34.default.number,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types34.default.oneOfType([import_prop_types34.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types34.default.string])
} : void 0;
var MenuButton_default = MenuButton;

// node_modules/@mui/joy/MenuItem/MenuItem.js
var React42 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());

// node_modules/@mui/joy/MenuItem/menuItemClasses.js
function getMenuItemUtilityClass(slot) {
  return generateUtilityClass2("MuiMenuItem", slot);
}
var menuItemClasses = generateUtilityClasses2("MuiMenuItem", ["root", "focusVisible", "disabled", "selected", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]);
var menuItemClasses_default = menuItemClasses;

// node_modules/@mui/joy/MenuItem/MenuItem.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var _excluded32 = ["children", "disabled", "component", "selected", "color", "orientation", "variant", "slots", "slotProps", "id"];
var useUtilityClasses32 = (ownerState) => {
  const {
    focusVisible,
    disabled,
    selected,
    color,
    variant
  } = ownerState;
  const slots = {
    root: ["root", focusVisible && "focusVisible", disabled && "disabled", selected && "selected", color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`]
  };
  const composedClasses = composeClasses(slots, getMenuItemUtilityClass, {});
  return composedClasses;
};
var MenuItemRoot = styled_default(StyledListItemButton, {
  name: "JoyMenuItem",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var MenuItem = React42.memo(React42.forwardRef(function MenuItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyMenuItem"
  });
  const row = React42.useContext(RowListContext_default);
  const {
    children,
    disabled: disabledProp = false,
    component = "li",
    selected = false,
    color: colorProp = "neutral",
    orientation = "horizontal",
    variant: variantProp = "plain",
    slots = {},
    slotProps = {},
    id
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded32);
  const {
    variant = variantProp,
    color = colorProp
  } = useVariantColor(inProps.variant, inProps.color);
  const {
    getRootProps,
    disabled,
    focusVisible
  } = useMenuItem({
    id,
    disabled: disabledProp,
    rootRef: ref
  });
  const ownerState = _extends({}, props, {
    component,
    color,
    disabled,
    focusVisible,
    orientation,
    selected,
    row,
    variant
  });
  const classes = useUtilityClasses32(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    elementType: MenuItemRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime46.jsx)(ListItemButtonOrientationContext_default.Provider, {
    value: orientation,
    children: (0, import_jsx_runtime46.jsx)(SlotRoot, _extends({}, rootProps, {
      children
    }))
  });
}));
var StableMenuItem = React42.forwardRef(function StableMenuItem2(props, ref) {
  const {
    contextValue,
    id
  } = useMenuItemContextStabilizer(props.id);
  return (0, import_jsx_runtime46.jsx)(ListContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime46.jsx)(MenuItem, _extends({}, props, {
      id,
      ref
    }))
  });
});
true ? StableMenuItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types35.default.node,
  id: import_prop_types35.default.string
} : void 0;
var MenuItem_default = StableMenuItem;

// node_modules/@mui/joy/MenuList/MenuList.js
var React43 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());

// node_modules/@mui/joy/MenuList/menuListClasses.js
function getMenuListUtilityClass(slot) {
  return generateUtilityClass2("MuiMenuList", slot);
}
var menuClasses2 = generateUtilityClasses2("MuiMenuList", ["root", "nested", "sizeSm", "sizeMd", "sizeLg", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var menuListClasses_default = menuClasses2;

// node_modules/@mui/joy/MenuList/MenuList.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var _excluded33 = ["actions", "id", "component", "children", "size", "variant", "color", "onItemsChange", "slots", "slotProps"];
var useUtilityClasses33 = (ownerState) => {
  const {
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getMenuListUtilityClass, {});
};
var MenuListRoot = styled_default(StyledList, {
  name: "JoyMenuList",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  return _extends({
    "--focus-outline-offset": `calc(${theme.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    "--ListItem-stickyBackground": (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.surface,
    "--ListItem-stickyTop": "calc(var(--List-padding, var(--ListDivider-gap)) * -1)"
  }, scopedVariables, {
    borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`,
    overflow: "auto"
  }, !(variantStyle != null && variantStyle.backgroundColor) && {
    backgroundColor: theme.vars.palette.background.surface
  });
});
var MenuList = React43.forwardRef(function MenuList2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyMenuList"
  });
  const {
    actions,
    id: idProp,
    component,
    children,
    size = "md",
    variant = "outlined",
    color = "neutral",
    onItemsChange,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded33);
  const {
    contextValue: menuContextValue,
    getListboxProps,
    dispatch
  } = useMenu({
    listboxRef: ref,
    id: idProp,
    onItemsChange
  });
  React43.useImperativeHandle(actions, () => ({
    dispatch,
    resetHighlight: () => dispatch({
      type: ListActionTypes.resetHighlight,
      event: null
    })
  }), [dispatch]);
  const ownerState = _extends({}, props, {
    variant,
    color,
    size,
    nesting: false,
    row: false
  });
  const classes = useUtilityClasses33(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    elementType: MenuListRoot,
    getSlotProps: getListboxProps,
    externalForwardedProps,
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime47.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime47.jsx)(MenuProvider, {
      value: menuContextValue,
      children: (0, import_jsx_runtime47.jsx)(GroupListContext_default.Provider, {
        value: "menu",
        children: (0, import_jsx_runtime47.jsx)(ListProvider_default, {
          nested: true,
          children
        })
      })
    })
  }));
});
true ? MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref with imperative actions.
   * It allows to select the first or last menu item.
   */
  actions: refType_default,
  /**
   * @ignore
   */
  children: import_prop_types36.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types36.default.oneOfType([import_prop_types36.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types36.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types36.default.elementType,
  /**
   * @ignore
   */
  id: import_prop_types36.default.string,
  /**
   * Function called when the items displayed in the menu change.
   */
  onItemsChange: import_prop_types36.default.func,
  /**
   * The size of the component (affect other nested list* components because the `Menu` inherits `List`).
   * @default 'md'
   */
  size: import_prop_types36.default.oneOfType([import_prop_types36.default.oneOf(["sm", "md", "lg"]), import_prop_types36.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types36.default.shape({
    root: import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types36.default.shape({
    root: import_prop_types36.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types36.default.oneOfType([import_prop_types36.default.arrayOf(import_prop_types36.default.oneOfType([import_prop_types36.default.func, import_prop_types36.default.object, import_prop_types36.default.bool])), import_prop_types36.default.func, import_prop_types36.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types36.default.oneOfType([import_prop_types36.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types36.default.string])
} : void 0;
var MenuList_default = MenuList;

// node_modules/@mui/joy/ModalClose/ModalClose.js
var React44 = __toESM(require_react());
var import_prop_types37 = __toESM(require_prop_types());

// node_modules/@mui/joy/ModalClose/modalCloseClasses.js
function getModalCloseUtilityClass(slot) {
  return generateUtilityClass2("MuiModalClose", slot);
}
var modalCloseClasses = generateUtilityClasses2("MuiModalClose", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg"]);
var modalCloseClasses_default = modalCloseClasses;

// node_modules/@mui/joy/ModalClose/ModalClose.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var _CloseIcon;
var _excluded34 = ["component", "color", "variant", "size", "onClick", "slots", "slotProps"];
var useUtilityClasses34 = (ownerState) => {
  const {
    variant,
    color,
    disabled,
    focusVisible,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getModalCloseUtilityClass, {});
};
var ModalCloseRoot = styled_default(StyledIconButton, {
  name: "JoyModalClose",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants;
  return _extends({}, ownerState.size === "sm" && {
    "--IconButton-size": "1.75rem"
  }, ownerState.size === "md" && {
    "--IconButton-size": "2rem"
  }, ownerState.size === "lg" && {
    "--IconButton-size": "2.25rem"
  }, {
    position: "absolute",
    zIndex: 1,
    // stay on top of the title in case it is positioned relatively
    top: `var(--ModalClose-inset, 0.625rem)`,
    right: `var(--ModalClose-inset, 0.625rem)`,
    borderRadius: `var(--ModalClose-radius, ${theme.vars.radius.sm})`
  }, !((_theme$variants = theme.variants[ownerState.variant]) != null && (_theme$variants = _theme$variants[ownerState.color]) != null && _theme$variants.backgroundColor) && {
    color: theme.vars.palette.text.secondary
  });
});
var modalDialogVariantMapping = {
  plain: "plain",
  outlined: "plain",
  soft: "soft",
  solid: "solid"
};
var ModalClose = React44.forwardRef(function ModalClose2(inProps, ref) {
  var _ref, _inProps$variant, _ref2, _inProps$color, _ref3, _inProps$size;
  const props = useThemeProps({
    props: inProps,
    name: "JoyModalClose"
  });
  const {
    component = "button",
    color: colorProp = "neutral",
    variant: variantProp = "plain",
    size: sizeProp = "md",
    onClick,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded34);
  const closeModalContext = React44.useContext(CloseModalContext_default);
  const modalDialogVariantColor = React44.useContext(ModalDialogVariantColorContext_default);
  const variant = (_ref = (_inProps$variant = inProps.variant) != null ? _inProps$variant : modalDialogVariantMapping[modalDialogVariantColor == null ? void 0 : modalDialogVariantColor.variant]) != null ? _ref : variantProp;
  const color = (_ref2 = (_inProps$color = inProps.color) != null ? _inProps$color : modalDialogVariantColor == null ? void 0 : modalDialogVariantColor.color) != null ? _ref2 : colorProp;
  const modalDialogSize = React44.useContext(ModalDialogSizeContext_default);
  const size = (_ref3 = (_inProps$size = inProps.size) != null ? _inProps$size : modalDialogSize) != null ? _ref3 : sizeProp;
  const {
    focusVisible,
    getRootProps
  } = useButton(_extends({}, props, {
    rootRef: ref
  }));
  const ownerState = _extends({}, props, {
    color,
    component,
    variant,
    size,
    focusVisible
  });
  const classes = useUtilityClasses34(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    elementType: ModalCloseRoot,
    getSlotProps: getRootProps,
    externalForwardedProps: _extends({
      onClick: (event) => {
        closeModalContext == null || closeModalContext(event, "closeClick");
        onClick == null || onClick(event);
      }
    }, other, {
      component,
      slots,
      slotProps
    }),
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime48.jsx)(SlotRoot, _extends({}, rootProps, {
    children: _CloseIcon || (_CloseIcon = (0, import_jsx_runtime48.jsx)(Close_default, {}))
  }));
});
true ? ModalClose.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types37.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types37.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types37.default.elementType,
  /**
   * @ignore
   */
  onClick: import_prop_types37.default.func,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["sm", "md", "lg"]), import_prop_types37.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types37.default.shape({
    root: import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types37.default.shape({
    root: import_prop_types37.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types37.default.oneOfType([import_prop_types37.default.arrayOf(import_prop_types37.default.oneOfType([import_prop_types37.default.func, import_prop_types37.default.object, import_prop_types37.default.bool])), import_prop_types37.default.func, import_prop_types37.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types37.default.oneOfType([import_prop_types37.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types37.default.string])
} : void 0;
var ModalClose_default = ModalClose;

// node_modules/@mui/joy/ModalDialog/ModalDialog.js
var React45 = __toESM(require_react());
var import_prop_types38 = __toESM(require_prop_types());
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var _excluded35 = ["className", "children", "invertedColors", "orientation", "color", "component", "variant", "size", "layout", "maxWidth", "minWidth", "slots", "slotProps"];
var useUtilityClasses35 = (ownerState) => {
  const {
    variant,
    color,
    size,
    layout
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`, layout && `layout${capitalize(layout)}`]
  };
  return composeClasses(slots, getModalDialogUtilityClass, {});
};
function getBreakpointValue(theme, breakpoint) {
  var _theme$breakpoints, _theme$breakpoints2;
  return breakpoint && (_theme$breakpoints = theme.breakpoints) != null && _theme$breakpoints.values[breakpoint] ? `${(_theme$breakpoints2 = theme.breakpoints) == null ? void 0 : _theme$breakpoints2.values[breakpoint]}px` : breakpoint;
}
var ModalDialogRoot = styled_default(StyledCardRoot, {
  name: "JoyModalDialog",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => _extends({
  "--ModalDialog-minWidth": typeof ownerState.minWidth === "number" ? `${ownerState.minWidth}px` : getBreakpointValue(theme, ownerState.minWidth),
  "--ModalDialog-maxWidth": typeof ownerState.maxWidth === "number" ? `${ownerState.maxWidth}px` : getBreakpointValue(theme, ownerState.maxWidth),
  "--ModalClose-radius": "max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--ModalClose-inset), min(var(--ModalClose-inset) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))"
}, ownerState.variant === "solid" && {
  "--DialogContent-color": "currentColor"
}, ownerState.size === "sm" && {
  "--Card-padding": "1rem",
  "--ModalDialog-titleOffset": theme.spacing(0.25),
  "--ModalDialog-descriptionOffset": theme.spacing(0.25),
  "--ModalClose-inset": "0.375rem"
}, ownerState.size === "md" && {
  "--Card-padding": "1.25rem",
  "--ModalDialog-titleOffset": theme.spacing(0.25),
  "--ModalDialog-descriptionOffset": theme.spacing(0.75),
  "--ModalClose-inset": "0.5rem"
}, ownerState.size === "lg" && {
  "--Card-padding": "1.5rem",
  "--ModalDialog-titleOffset": theme.spacing(0.5),
  "--ModalDialog-descriptionOffset": theme.spacing(1),
  "--ModalClose-inset": "0.625rem"
}, {
  boxSizing: "border-box",
  boxShadow: theme.shadow.md,
  minWidth: "min(calc(100vw - 2 * var(--Card-padding)), var(--ModalDialog-minWidth, 300px))",
  outline: 0,
  position: "absolute"
}, ownerState.layout === "fullscreen" && {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  border: 0,
  borderRadius: 0
}, ownerState.layout === "center" && {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "min(calc(100vw - 2 * var(--Card-padding)), var(--ModalDialog-maxWidth, 100vw))",
  maxHeight: "calc(100% - 2 * var(--Card-padding))"
}, {
  [`& [id="${ownerState["aria-labelledby"]}"]`]: {
    "--Typography-margin": "calc(-1 * var(--ModalDialog-titleOffset)) 0 var(--ModalDialog-gap) 0",
    "--Typography-fontSize": "1.125em",
    [`& + [id="${ownerState["aria-describedby"]}"]`]: {
      "--unstable_ModalDialog-descriptionOffset": "calc(-1 * var(--ModalDialog-descriptionOffset))"
    }
  },
  [`& [id="${ownerState["aria-describedby"]}"]`]: {
    "--Typography-fontSize": "1em",
    "--Typography-margin": "var(--unstable_ModalDialog-descriptionOffset, var(--ModalDialog-gap)) 0 0 0",
    "&:not(:last-child)": {
      // create spacing between description and the next element.
      "--Typography-margin": "var(--unstable_ModalDialog-descriptionOffset, var(--ModalDialog-gap)) 0 var(--ModalDialog-gap) 0"
    }
  }
}));
var ModalDialog = React45.forwardRef(function ModalDialog2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyModalDialog"
  });
  const {
    className,
    children,
    invertedColors = false,
    orientation = "vertical",
    color = "neutral",
    component = "div",
    variant = "outlined",
    size = "md",
    layout = "center",
    maxWidth,
    minWidth,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded35);
  const ownerState = _extends({}, props, {
    color,
    component,
    maxWidth,
    minWidth,
    layout,
    size,
    variant,
    invertedColors
  });
  const classes = useUtilityClasses35(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const labelledBy = useId();
  const describedBy = useId();
  const contextValue = React45.useMemo(() => ({
    variant,
    color,
    labelledBy,
    describedBy
  }), [color, variant, labelledBy, describedBy]);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ModalDialogRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      as: component,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": labelledBy,
      "aria-describedby": describedBy
    }
  });
  return (0, import_jsx_runtime49.jsx)(ModalDialogSizeContext_default.Provider, {
    value: size,
    children: (0, import_jsx_runtime49.jsx)(ModalDialogVariantColorContext_default.Provider, {
      value: contextValue,
      children: (0, import_jsx_runtime49.jsx)(SlotRoot, _extends({}, rootProps, {
        children: React45.Children.map(children, (child, index) => {
          if (!React45.isValidElement(child)) {
            return child;
          }
          const extraProps = {};
          if (isMuiElement(child, ["Divider"])) {
            extraProps.inset = "inset" in child.props ? child.props.inset : "context";
            const dividerOrientation = orientation === "vertical" ? "horizontal" : "vertical";
            extraProps.orientation = "orientation" in child.props ? child.props.orientation : dividerOrientation;
          }
          if (index === 0) {
            extraProps["data-first-child"] = "";
          }
          if (index === React45.Children.count(children) - 1) {
            extraProps["data-last-child"] = "";
          }
          return React45.cloneElement(child, extraProps);
        })
      }))
    })
  });
});
true ? ModalDialog.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types38.default.node,
  /**
   * @ignore
   */
  className: import_prop_types38.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types38.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types38.default.elementType,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types38.default.bool,
  /**
   * The layout of the dialog
   * @default 'center'
   */
  layout: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["center", "fullscreen"]), import_prop_types38.default.string]),
  /**
   * The maximum width of the component.
   * @example 'md' will use the theme's `md` breakpoint value
   * @example 360 is the number of pixels
   * @example '60ch' can be any valid CSS max-width unit
   */
  maxWidth: import_prop_types38.default.oneOfType([import_prop_types38.default.number, import_prop_types38.default.string]),
  /**
   * The minimum width of the component.
   * @example 'md' will use the theme's `md` breakpoint value
   * @example 360 is the number of pixels
   * @example '60ch' can be any valid CSS min-width unit
   */
  minWidth: import_prop_types38.default.oneOfType([import_prop_types38.default.number, import_prop_types38.default.string]),
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types38.default.oneOf(["horizontal", "vertical"]),
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["sm", "md", "lg"]), import_prop_types38.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types38.default.shape({
    root: import_prop_types38.default.oneOfType([import_prop_types38.default.func, import_prop_types38.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types38.default.shape({
    root: import_prop_types38.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types38.default.oneOfType([import_prop_types38.default.arrayOf(import_prop_types38.default.oneOfType([import_prop_types38.default.func, import_prop_types38.default.object, import_prop_types38.default.bool])), import_prop_types38.default.func, import_prop_types38.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types38.default.oneOfType([import_prop_types38.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types38.default.string])
} : void 0;
var ModalDialog_default = ModalDialog;

// node_modules/@mui/joy/ModalOverflow/ModalOverflow.js
var React46 = __toESM(require_react());
var import_prop_types39 = __toESM(require_prop_types());

// node_modules/@mui/joy/ModalOverflow/modalOverflowClasses.js
function getModalOverflowUtilityClass(slot) {
  return generateUtilityClass2("MuiModalOverflow", slot);
}
var modalOverflowClasses = generateUtilityClasses2("MuiModalOverflow", ["root"]);
var modalOverflowClasses_default = modalOverflowClasses;

// node_modules/@mui/joy/ModalOverflow/ModalOverflow.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var _excluded36 = ["children", "onClick"];
var useUtilityClasses36 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getModalOverflowUtilityClass, {});
};
var ModalOverflowRoot = styled_default("div", {
  name: "JoyModalOverflow",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  "--ModalOverflow-paddingY": "1.5rem",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  height: "100%",
  overflow: "hidden auto",
  outline: "none",
  display: "flex",
  flexDirection: "column",
  // required for fullscreen ModalDialog, using `row` cannot be achieved.
  padding: "var(--ModalOverflow-paddingY) 0",
  // let's not create `size` prop to only control the `padding`.
  [`& .${modalDialogClasses_default.layoutCenter}`]: {
    position: "relative",
    margin: "auto",
    // to make the dialog stay at center when content does not overflow the screen.
    height: "max-content",
    // height is based on content, otherwise `margin: auto` will take place.
    maxHeight: "unset",
    transform: "none",
    top: "unset",
    left: "unset"
  },
  [`& .${modalDialogClasses_default.layoutFullscreen}`]: {
    position: "relative",
    width: "100%",
    margin: "calc(-1 * var(--ModalOverflow-paddingY)) 0",
    flex: 1
  }
});
var ModalOverflow = React46.forwardRef(function ModalOverflow2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyModalOverflow"
  });
  const {
    children,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded36);
  const onClose = React46.useContext(CloseModalContext_default);
  const ownerState = props;
  const classes = useUtilityClasses36();
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: ModalOverflowRoot,
    externalForwardedProps: other,
    ownerState,
    additionalProps: {
      role: "presentation",
      tabIndex: -1,
      onClick: (event) => {
        if (event.target === event.currentTarget) {
          onClose == null || onClose(event, "backdropClick");
        }
        onClick == null || onClick(event);
      }
    }
  });
  return (0, import_jsx_runtime50.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
});
true ? ModalOverflow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types39.default.node,
  /**
   * @ignore
   */
  onClick: import_prop_types39.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types39.default.oneOfType([import_prop_types39.default.arrayOf(import_prop_types39.default.oneOfType([import_prop_types39.default.func, import_prop_types39.default.object, import_prop_types39.default.bool])), import_prop_types39.default.func, import_prop_types39.default.object])
} : void 0;
var ModalOverflow_default = ModalOverflow;

// node_modules/@mui/joy/Option/Option.js
var React47 = __toESM(require_react());
var import_prop_types40 = __toESM(require_prop_types());

// node_modules/@mui/joy/Option/optionClasses.js
function getOptionUtilityClass(slot) {
  return generateUtilityClass2("MuiOption", slot);
}
var optionClasses = generateUtilityClasses2("MuiOption", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "focusVisible", "disabled", "selected", "highlighted", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]);
var optionClasses_default = optionClasses;

// node_modules/@mui/joy/Option/Option.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var _excluded37 = ["component", "children", "disabled", "value", "label", "variant", "color", "slots", "slotProps"];
var useUtilityClasses37 = (ownerState) => {
  const {
    disabled,
    highlighted,
    selected
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", highlighted && "highlighted", selected && "selected"]
  };
  return composeClasses(slots, getOptionUtilityClass, {});
};
var OptionRoot = styled_default(StyledListItemButton, {
  name: "JoyOption",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const variantStyle = (_theme$variants = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants[ownerState.color];
  return {
    [`&.${optionClasses_default.highlighted}:not([aria-selected="true"])`]: {
      backgroundColor: variantStyle == null ? void 0 : variantStyle.backgroundColor
    }
  };
});
var Option = React47.memo(React47.forwardRef(function Option2(inProps, ref) {
  var _optionRef$current;
  const props = useThemeProps({
    props: inProps,
    name: "JoyOption"
  });
  const {
    component = "li",
    children,
    disabled = false,
    value,
    label,
    variant: variantProp = "plain",
    color: colorProp = "neutral",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded37);
  const row = React47.useContext(RowListContext_default);
  const {
    variant = variantProp,
    color = colorProp
  } = useVariantColor(inProps.variant, inProps.color);
  const optionRef = React47.useRef(null);
  const combinedRef = useForkRef(optionRef, ref);
  const computedLabel = label != null ? label : typeof children === "string" ? children : (_optionRef$current = optionRef.current) == null ? void 0 : _optionRef$current.innerText;
  const {
    getRootProps,
    selected,
    highlighted,
    index
  } = useOption({
    disabled,
    label: computedLabel,
    value,
    rootRef: combinedRef
  });
  const ownerState = _extends({}, props, {
    disabled,
    selected,
    highlighted,
    index,
    component,
    variant,
    color,
    row
  });
  const classes = useUtilityClasses37(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    getSlotProps: getRootProps,
    elementType: OptionRoot,
    externalForwardedProps,
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime51.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  }));
}));
var StableOption = React47.forwardRef(function StableOption2(props, ref) {
  const {
    contextValue
  } = useOptionContextStabilizer(props.value);
  return (0, import_jsx_runtime51.jsx)(ListContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime51.jsx)(Option, _extends({}, props, {
      ref
    }))
  });
});
true ? StableOption.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types40.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types40.default.oneOfType([import_prop_types40.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types40.default.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types40.default.bool,
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label: import_prop_types40.default.oneOfType([import_prop_types40.default.element, import_prop_types40.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types40.default.oneOfType([import_prop_types40.default.arrayOf(import_prop_types40.default.oneOfType([import_prop_types40.default.func, import_prop_types40.default.object, import_prop_types40.default.bool])), import_prop_types40.default.func, import_prop_types40.default.object]),
  /**
   * The option value.
   */
  value: import_prop_types40.default.any.isRequired,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types40.default.oneOfType([import_prop_types40.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types40.default.string])
} : void 0;
var Option_default = StableOption;

// node_modules/@mui/joy/Radio/Radio.js
var React48 = __toESM(require_react());
var import_prop_types41 = __toESM(require_prop_types());

// node_modules/@mui/joy/Radio/radioClasses.js
function getRadioUtilityClass(slot) {
  return generateUtilityClass2("MuiRadio", slot);
}
var radioClasses = generateUtilityClasses2("MuiRadio", ["root", "radio", "icon", "action", "input", "label", "checked", "disabled", "focusVisible", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid"]);
var radioClasses_default = radioClasses;

// node_modules/@mui/joy/Radio/Radio.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var _excluded38 = ["checked", "checkedIcon", "defaultChecked", "disabled", "disableIcon", "overlay", "label", "id", "name", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "color", "variant", "size", "uncheckedIcon", "value", "component", "slots", "slotProps"];
var useUtilityClasses38 = (ownerState) => {
  const {
    checked,
    disabled,
    disableIcon,
    focusVisible,
    color,
    variant,
    size
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    radio: ["radio", checked && "checked", disabled && "disabled"],
    // disabled class is necessary for displaying global variant
    icon: ["icon"],
    action: [
      "action",
      checked && "checked",
      disableIcon && disabled && "disabled",
      // add disabled class to action element for displaying global variant
      focusVisible && "focusVisible"
    ],
    input: ["input"],
    label: ["label"]
  };
  return composeClasses(slots, getRadioUtilityClass, {});
};
function areEqualValues(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
var RadioRoot = styled_default("span", {
  name: "JoyRadio",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants$plain, _theme$variants, _theme$variants2;
  return [_extends({
    "--Icon-fontSize": "var(--Radio-size)",
    "--Icon-color": "currentColor"
  }, ownerState.size === "sm" && {
    "--Radio-size": "1rem",
    // --FormHelperText-margin is equal to --Radio-size + --Radio-gap but we can't use calc() with CSS variables because the FormHelperText is a sibling element
    "& ~ *": {
      "--FormHelperText-margin": "0 0 0 1.5rem"
    },
    fontSize: theme.vars.fontSize.sm,
    gap: "var(--Radio-gap, 0.5rem)"
  }, ownerState.size === "md" && {
    "--Radio-size": "1.25rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.25rem 0 0 1.875rem"
    },
    fontSize: theme.vars.fontSize.md,
    gap: "var(--Radio-gap, 0.625rem)"
  }, ownerState.size === "lg" && {
    "--Radio-size": "1.5rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.375rem 0 0 2.25rem"
    },
    fontSize: theme.vars.fontSize.lg,
    gap: "var(--Radio-gap, 0.75rem)"
  }, {
    position: ownerState.overlay ? "initial" : "relative",
    display: "inline-flex",
    boxSizing: "border-box",
    minWidth: 0,
    fontFamily: theme.vars.fontFamily.body,
    lineHeight: "var(--Radio-size)",
    // prevent label from having larger height than the checkbox
    color: theme.vars.palette.text.primary,
    [`&.${radioClasses_default.disabled}`]: {
      color: (_theme$variants$plain = theme.variants.plainDisabled) == null || (_theme$variants$plain = _theme$variants$plain[ownerState.color]) == null ? void 0 : _theme$variants$plain.color
    }
  }, ownerState.disableIcon && {
    color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color,
    [`&.${radioClasses_default.disabled}`]: {
      color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
    }
  }, ownerState["data-parent"] === "RadioGroup" && ownerState["data-first-child"] === void 0 && {
    marginInlineStart: ownerState.orientation === "horizontal" ? "var(--RadioGroup-gap)" : void 0,
    marginBlockStart: ownerState.orientation === "horizontal" ? void 0 : "var(--RadioGroup-gap)"
  })];
});
var RadioRadio = styled_default("span", {
  name: "JoyRadio",
  slot: "Radio",
  overridesResolver: (props, styles) => styles.radio
})(({
  ownerState,
  theme
}) => {
  var _theme$variants3, _variantStyle$backgro, _theme$variants4, _theme$variants5, _theme$variants6;
  const variantStyle = (_theme$variants3 = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants3[ownerState.color];
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    margin: 0,
    boxSizing: "border-box",
    width: "var(--Radio-size)",
    height: "var(--Radio-size)",
    borderRadius: "var(--Radio-size)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0
  }, ownerState.disableIcon && {
    display: "contents"
  }, {
    [`&.${radioClasses_default.checked}`]: {
      "--Icon-color": "currentColor"
    }
  }), ...!ownerState.disableIcon ? [_extends({}, variantStyle, {
    backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface
  }), {
    "&:hover": {
      "@media (hover: hover)": (_theme$variants4 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants4[ownerState.color]
    }
  }, {
    "&:active": (_theme$variants5 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants5[ownerState.color]
  }, {
    [`&.${radioClasses_default.disabled}`]: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color]
  }] : []];
});
var RadioAction = styled_default("span", {
  name: "JoyRadio",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})(({
  theme,
  ownerState
}) => {
  var _theme$variants7, _theme$variants8, _theme$variants9, _theme$variants10;
  return [{
    position: "absolute",
    textAlign: "left",
    // prevent text-align inheritance
    borderRadius: `var(--Radio-actionRadius, ${// Automatic radius adjustment when composing with ListItem or Sheet
    ownerState.overlay ? "var(--unstable_actionRadius, inherit)" : "inherit"})`,
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    // clickable on the border and focus outline does not move when checked/unchecked
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    zIndex: 1,
    // The action element usually cover the area of nearest positioned parent
    [theme.focus.selector]: theme.focus.default
  }, ...ownerState.disableIcon ? [(_theme$variants7 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants7[ownerState.color], {
    "&:hover": {
      "@media (hover: hover)": (_theme$variants8 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants8[ownerState.color]
    }
  }, {
    "&:active": (_theme$variants9 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants9[ownerState.color]
  }, {
    [`&.${radioClasses_default.disabled}`]: (_theme$variants10 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants10[ownerState.color]
  }] : []];
});
var RadioInput = styled_default("input", {
  name: "JoyRadio",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input
})(() => ({
  margin: 0,
  opacity: 0,
  position: "absolute",
  height: "100%",
  width: "100%",
  cursor: "pointer"
}));
var RadioLabel = styled_default("label", {
  name: "JoyRadio",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label
})(({
  ownerState
}) => _extends({
  flex: 1,
  minWidth: 0
}, ownerState.disableIcon && {
  zIndex: 1,
  // label should stay on top of the action.
  pointerEvents: "none"
  // makes hover ineffect.
}));
var RadioIcon = styled_default("span", {
  name: "JoyRadio",
  slot: "Icon",
  overridesResolver: (props, styles) => styles.icon
})(({
  ownerState
}) => ({
  width: "calc(var(--Radio-size) / 2)",
  height: "calc(var(--Radio-size) / 2)",
  borderRadius: "inherit",
  color: "inherit",
  backgroundColor: "currentColor",
  transform: ownerState.checked ? "scale(1)" : "scale(0)"
}));
var Radio = React48.forwardRef(function Radio2(inProps, ref) {
  var _ref, _ref2, _inProps$color, _ref3, _ref4, _inProps$color2, _inProps$color3;
  const props = useThemeProps({
    props: inProps,
    name: "JoyRadio"
  });
  const {
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    disabled: disabledProp,
    disableIcon: disableIconProp = false,
    overlay: overlayProp = false,
    label,
    id: idOverride,
    name: nameProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required,
    color: colorProp,
    variant = "outlined",
    size: sizeProp = "md",
    uncheckedIcon,
    value,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const formControl = React48.useContext(FormControlContext_default);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React48.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const id = useId(idOverride != null ? idOverride : formControl == null ? void 0 : formControl.htmlFor);
  const radioGroup = React48.useContext(RadioGroupContext_default);
  const activeColor = formControl != null && formControl.error ? "danger" : (_ref = (_ref2 = (_inProps$color = inProps.color) != null ? _inProps$color : formControl == null ? void 0 : formControl.color) != null ? _ref2 : colorProp) != null ? _ref : "primary";
  const inactiveColor = formControl != null && formControl.error ? "danger" : (_ref3 = (_ref4 = (_inProps$color2 = inProps.color) != null ? _inProps$color2 : formControl == null ? void 0 : formControl.color) != null ? _ref4 : colorProp) != null ? _ref3 : "neutral";
  const size = inProps.size || (formControl == null ? void 0 : formControl.size) || (radioGroup == null ? void 0 : radioGroup.size) || sizeProp;
  const name = inProps.name || (radioGroup == null ? void 0 : radioGroup.name) || nameProp;
  const disableIcon = inProps.disableIcon || (radioGroup == null ? void 0 : radioGroup.disableIcon) || disableIconProp;
  const overlay = inProps.overlay || (radioGroup == null ? void 0 : radioGroup.overlay) || overlayProp;
  const radioChecked = typeof checkedProp === "undefined" && !!value ? areEqualValues(radioGroup == null ? void 0 : radioGroup.value, value) : checkedProp;
  const useRadioProps = {
    checked: radioChecked,
    defaultChecked,
    disabled: disabledProp != null ? disabledProp : formControl == null ? void 0 : formControl.disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible
  } = useSwitch(useRadioProps);
  const color = (_inProps$color3 = inProps.color) != null ? _inProps$color3 : checked ? activeColor : inactiveColor;
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    color,
    variant,
    size,
    disableIcon,
    overlay,
    orientation: radioGroup == null ? void 0 : radioGroup.orientation
  });
  const classes = useUtilityClasses38(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: RadioRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotRadio, radioProps] = useSlot("radio", {
    className: classes.radio,
    elementType: RadioRadio,
    externalForwardedProps,
    ownerState
  });
  const [SlotIcon, iconProps] = useSlot("icon", {
    className: classes.icon,
    elementType: RadioIcon,
    externalForwardedProps,
    ownerState
  });
  const [SlotAction, actionProps] = useSlot("action", {
    className: classes.action,
    elementType: RadioAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotInput, inputProps] = useSlot("input", {
    additionalProps: {
      type: "radio",
      id,
      name,
      readOnly,
      required: required != null ? required : formControl == null ? void 0 : formControl.required,
      value: String(value),
      "aria-describedby": formControl == null ? void 0 : formControl["aria-describedby"]
    },
    className: classes.input,
    elementType: RadioInput,
    externalForwardedProps,
    getSlotProps: () => getInputProps({
      onChange: radioGroup == null ? void 0 : radioGroup.onChange
    }),
    ownerState
  });
  const [SlotLabel, labelProps] = useSlot("label", {
    additionalProps: {
      htmlFor: id
    },
    className: classes.label,
    elementType: RadioLabel,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime53.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime53.jsxs)(SlotRadio, _extends({}, radioProps, {
      children: [checked && !disableIcon && checkedIcon, !checked && !disableIcon && uncheckedIcon, !checkedIcon && !uncheckedIcon && !disableIcon && (0, import_jsx_runtime52.jsx)(SlotIcon, _extends({}, iconProps)), (0, import_jsx_runtime52.jsx)(SlotAction, _extends({}, actionProps, {
        children: (0, import_jsx_runtime52.jsx)(SlotInput, _extends({}, inputProps))
      }))]
    })), label && (0, import_jsx_runtime52.jsx)(SlotLabel, _extends({}, labelProps, {
      children: (0, import_jsx_runtime52.jsx)(TypographyNestedContext.Provider, {
        value: true,
        children: label
      })
    }))]
  }));
});
true ? Radio.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types41.default.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: import_prop_types41.default.node,
  /**
   * @ignore
   */
  children: import_prop_types41.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types41.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types41.default.oneOfType([import_prop_types41.default.oneOf(["danger", "primary", "success", "warning"]), import_prop_types41.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types41.default.elementType,
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types41.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types41.default.bool,
  /**
   * If `true`, the checked icon is removed and the selected variant is applied on the `action` element instead.
   * @default false
   */
  disableIcon: import_prop_types41.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types41.default.string,
  /**
   * The label element at the end the radio.
   */
  label: import_prop_types41.default.node,
  /**
   * The `name` attribute of the input.
   */
  name: import_prop_types41.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types41.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types41.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types41.default.func,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types41.default.func,
  /**
   * If `true`, the root element's position is set to initial which allows the action area to fill the nearest positioned parent.
   * This prop is useful for composing Radio with ListItem component.
   * @default false
   */
  overlay: import_prop_types41.default.bool,
  /**
   * If `true`, the component is read only.
   */
  readOnly: import_prop_types41.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types41.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types41.default.oneOfType([import_prop_types41.default.oneOf(["sm", "md", "lg"]), import_prop_types41.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types41.default.shape({
    action: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object]),
    icon: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object]),
    input: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object]),
    label: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object]),
    radio: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object]),
    root: import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types41.default.shape({
    action: import_prop_types41.default.elementType,
    icon: import_prop_types41.default.elementType,
    input: import_prop_types41.default.elementType,
    label: import_prop_types41.default.elementType,
    radio: import_prop_types41.default.elementType,
    root: import_prop_types41.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types41.default.oneOfType([import_prop_types41.default.arrayOf(import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object, import_prop_types41.default.bool])), import_prop_types41.default.func, import_prop_types41.default.object]),
  /**
   * The icon to display when the component is not checked.
   */
  uncheckedIcon: import_prop_types41.default.node,
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: import_prop_types41.default.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types41.default.oneOfType([import_prop_types41.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types41.default.string])
} : void 0;
var Radio_default = Radio;

// node_modules/@mui/joy/RadioGroup/RadioGroup.js
var React49 = __toESM(require_react());
var import_prop_types42 = __toESM(require_prop_types());

// node_modules/@mui/joy/RadioGroup/radioGroupClasses.js
function getRadioGroupUtilityClass(slot) {
  return generateUtilityClass2("MuiRadioGroup", slot);
}
var radioGroupClasses = generateUtilityClasses2("MuiRadioGroup", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
var radioGroupClasses_default = radioGroupClasses;

// node_modules/@mui/joy/RadioGroup/RadioGroup.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var _excluded39 = ["className", "component", "children", "name", "defaultValue", "disableIcon", "overlay", "value", "onChange", "color", "variant", "size", "orientation", "role", "slots", "slotProps"];
var useUtilityClasses39 = (ownerState) => {
  const {
    orientation,
    size,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getRadioGroupUtilityClass, {});
};
var RadioGroupRoot = styled_default("div", {
  name: "JoyRadioGroup",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants;
  return _extends({}, ownerState.size === "sm" && {
    "--RadioGroup-gap": "0.625rem"
  }, ownerState.size === "md" && {
    "--RadioGroup-gap": "0.875rem"
  }, ownerState.size === "lg" && {
    "--RadioGroup-gap": "1.25rem"
  }, {
    display: "flex",
    margin: "var(--unstable_RadioGroup-margin)",
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column",
    borderRadius: theme.vars.radius.sm
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var RadioGroup = React49.forwardRef(function RadioGroup2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyRadioGroup"
  });
  const {
    className,
    component,
    children,
    name: nameProp,
    defaultValue,
    disableIcon = false,
    overlay,
    value: valueProp,
    onChange,
    color = "neutral",
    variant = "plain",
    size: sizeProp = "md",
    orientation = "vertical",
    role = "radiogroup",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded39);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "RadioGroup"
  });
  const formControl = React49.useContext(FormControlContext_default);
  const size = inProps.size || (formControl == null ? void 0 : formControl.size) || sizeProp;
  const ownerState = _extends({
    orientation,
    size,
    variant,
    color,
    role
  }, props);
  const classes = useUtilityClasses39(ownerState);
  const name = useId(nameProp);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React49.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const contextValue = React49.useMemo(() => ({
    disableIcon,
    overlay,
    orientation,
    size,
    name,
    value,
    onChange: (event) => {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event);
      }
    }
  }), [disableIcon, name, onChange, overlay, orientation, setValueState, size, value]);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: RadioGroupRoot,
    externalForwardedProps: _extends({}, other, {
      component,
      slots,
      slotProps
    }),
    ownerState,
    additionalProps: {
      as: component,
      role,
      // The `id` is just for the completeness, it does not have any effect because RadioGroup (div) is non-labelable element
      // MDN: "If it is not a labelable element, then the for attribute has no effect"
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
      id: formControl == null ? void 0 : formControl.htmlFor,
      "aria-labelledby": formControl == null ? void 0 : formControl.labelId,
      "aria-describedby": formControl == null ? void 0 : formControl["aria-describedby"]
    }
  });
  return (0, import_jsx_runtime54.jsx)(RadioGroupContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime54.jsx)(SlotRoot, _extends({}, rootProps, {
      children: (0, import_jsx_runtime54.jsx)(FormControlContext_default.Provider, {
        value: void 0,
        children: React49.Children.map(children, (child, index) => React49.isValidElement(child) ? React49.cloneElement(child, _extends({}, index === 0 && {
          "data-first-child": ""
        }, index === React49.Children.count(children) - 1 && {
          "data-last-child": ""
        }, {
          "data-parent": "RadioGroup"
        })) : child)
      })
    }))
  });
});
true ? RadioGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types42.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types42.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(["danger", "primary", "success", "warning"]), import_prop_types42.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types42.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types42.default.any,
  /**
   * The radio's `disabledIcon` prop. If specified, the value is passed down to every radios under this element.
   * @default false
   */
  disableIcon: import_prop_types42.default.bool,
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: import_prop_types42.default.string,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types42.default.func,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types42.default.oneOf(["horizontal", "vertical"]),
  /**
   * The radio's `overlay` prop. If specified, the value is passed down to every radios under this element.
   * @default false
   */
  overlay: import_prop_types42.default.bool,
  /**
   * @ignore
   */
  role: import_prop_types42.default.string,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(["sm", "md", "lg"]), import_prop_types42.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types42.default.shape({
    root: import_prop_types42.default.oneOfType([import_prop_types42.default.func, import_prop_types42.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types42.default.shape({
    root: import_prop_types42.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types42.default.oneOfType([import_prop_types42.default.arrayOf(import_prop_types42.default.oneOfType([import_prop_types42.default.func, import_prop_types42.default.object, import_prop_types42.default.bool])), import_prop_types42.default.func, import_prop_types42.default.object]),
  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: import_prop_types42.default.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types42.default.oneOfType([import_prop_types42.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types42.default.string])
} : void 0;
var RadioGroup_default = RadioGroup;

// node_modules/@mui/joy/ScopedCssBaseline/ScopedCssBaseline.js
var React50 = __toESM(require_react());
var import_prop_types43 = __toESM(require_prop_types());

// node_modules/@mui/joy/ScopedCssBaseline/scopedCssBaselineClasses.js
function getScopedCssBaselineUtilityClass(slot) {
  return generateUtilityClass2("MuiScopedCssBaseline", slot);
}
var scopedCssBaselineClasses = generateUtilityClasses2("MuiScopedCssBaseline", ["root"]);
var scopedCssBaselineClasses_default = scopedCssBaselineClasses;

// node_modules/@mui/joy/ScopedCssBaseline/ScopedCssBaseline.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var _excluded40 = ["className", "component", "disableColorScheme", "slots", "slotProps"];
var useUtilityClasses40 = () => {
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getScopedCssBaselineUtilityClass, {});
};
var ScopedCssBaselineRoot = styled_default("div", {
  name: "JoyScopedCssBaseline",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const colorSchemeStyles = {};
  if (!ownerState.disableColorScheme && theme.colorSchemes) {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      var _scheme$palette;
      colorSchemeStyles[`&${theme.getColorSchemeSelector(key).replace(/\s*&/, "")}`] = {
        colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
      };
    });
  }
  return _extends({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    // Change from `box-sizing: content-box` so that `width`
    // is not affected by `padding` or `border`.
    boxSizing: "border-box",
    // Fix font resize problem in iOS
    WebkitTextSizeAdjust: "100%",
    color: theme.vars.palette.text.primary
  }, theme.typography["body-md"], {
    backgroundColor: theme.vars.palette.background.body,
    "@media print": {
      // Save printer ink.
      backgroundColor: "#fff"
    },
    "& *, & *::before, & *::after": {
      boxSizing: "inherit"
    },
    "& strong, & b": {
      fontWeight: "bold"
    }
  }, colorSchemeStyles);
});
var ScopedCssBaseline = React50.forwardRef(function ScopedCssBaseline2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyScopedCssBaseline"
  });
  const {
    className,
    component = "div",
    disableColorScheme = false,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded40);
  const ownerState = _extends({}, props, {
    component,
    disableColorScheme
  });
  const classes = useUtilityClasses40();
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ScopedCssBaselineRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime55.jsx)(SlotRoot, _extends({}, rootProps));
});
true ? ScopedCssBaseline.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * You can wrap a node.
   */
  children: import_prop_types43.default.node,
  /**
   * @ignore
   */
  className: import_prop_types43.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types43.default.elementType,
  /**
   * Disable `color-scheme` CSS property.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  disableColorScheme: import_prop_types43.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types43.default.shape({
    root: import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types43.default.shape({
    root: import_prop_types43.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types43.default.oneOfType([import_prop_types43.default.arrayOf(import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object, import_prop_types43.default.bool])), import_prop_types43.default.func, import_prop_types43.default.object])
} : void 0;
var ScopedCssBaseline_default = ScopedCssBaseline;

// node_modules/@mui/joy/Select/Select.js
var React52 = __toESM(require_react());
var import_prop_types44 = __toESM(require_prop_types());

// node_modules/@mui/joy/internal/svg-icons/Unfold.js
var React51 = __toESM(require_react());
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var Unfold_default = createSvgIcon((0, import_jsx_runtime56.jsx)("path", {
  d: "m12 5.83 2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7a.9959.9959 0 0 0-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34-2.46-2.46a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L12 18.17z"
}), "Unfold");

// node_modules/@mui/joy/Select/selectClasses.js
function getSelectUtilityClass(slot) {
  return generateUtilityClass2("MuiSelect", slot);
}
var selectClasses = generateUtilityClasses2("MuiSelect", ["root", "button", "indicator", "startDecorator", "endDecorator", "popper", "listbox", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "focusVisible", "disabled", "expanded", "multiple"]);
var selectClasses_default = selectClasses;

// node_modules/@mui/joy/Select/Select.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var _Unfold;
var _excluded41 = ["action", "autoFocus", "children", "defaultValue", "defaultListboxOpen", "disabled", "getSerializedValue", "placeholder", "listboxId", "listboxOpen", "onChange", "onListboxOpenChange", "onClose", "renderValue", "required", "value", "size", "variant", "color", "startDecorator", "endDecorator", "indicator", "aria-describedby", "aria-label", "aria-labelledby", "id", "name", "multiple", "slots", "slotProps"];
function defaultRenderValue(selectedOptions) {
  var _selectedOptions$labe;
  if (Array.isArray(selectedOptions)) {
    return (0, import_jsx_runtime57.jsx)(React52.Fragment, {
      children: selectedOptions.map((o) => o.label).join(", ")
    });
  }
  return (_selectedOptions$labe = selectedOptions == null ? void 0 : selectedOptions.label) != null ? _selectedOptions$labe : "";
}
var defaultModifiers = [{
  name: "offset",
  options: {
    offset: [0, 4]
  }
}, {
  // popper will have the same width as root element when open
  name: "equalWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({
    state
  }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  }
}];
var useUtilityClasses41 = (ownerState) => {
  const {
    color,
    disabled,
    focusVisible,
    size,
    variant,
    open,
    multiple
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible", open && "expanded", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`, multiple && "multiple"],
    button: ["button"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"],
    indicator: ["indicator", open && "expanded"],
    listbox: ["listbox", open && "expanded", disabled && "disabled"]
  };
  return composeClasses(slots, getSelectUtilityClass, {});
};
var SelectRoot = styled_default("div", {
  name: "JoySelect",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$vars$palette, _theme$vars$palette2, _theme$variants2, _theme$variants3;
  const variantStyle = (_theme$variants = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants[ownerState.color];
  const {
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["borderRadius"]);
  return [_extends({
    "--Select-radius": theme.vars.radius.sm,
    "--Select-gap": "0.5rem",
    "--Select-placeholderOpacity": 0.64,
    "--Select-decoratorColor": theme.vars.palette.text.icon,
    "--Select-focusedThickness": theme.vars.focus.thickness,
    "--Select-focusedHighlight": (_theme$vars$palette = theme.vars.palette[ownerState.color === "neutral" ? "primary" : ownerState.color]) == null ? void 0 : _theme$vars$palette[500],
    '&:not([data-inverted-colors="false"])': _extends({}, ownerState.instanceColor && {
      "--_Select-focusedHighlight": (_theme$vars$palette2 = theme.vars.palette[ownerState.instanceColor === "neutral" ? "primary" : ownerState.instanceColor]) == null ? void 0 : _theme$vars$palette2[500]
    }, {
      "--Select-focusedHighlight": theme.vars.palette.focusVisible
    }),
    "--Select-indicatorColor": variantStyle != null && variantStyle.backgroundColor ? variantStyle == null ? void 0 : variantStyle.color : theme.vars.palette.text.tertiary
  }, ownerState.size === "sm" && {
    "--Select-minHeight": "2rem",
    "--Select-paddingInline": "0.5rem",
    "--Select-decoratorChildHeight": "min(1.5rem, var(--Select-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl
  }, ownerState.size === "md" && {
    "--Select-minHeight": "2.25rem",
    "--Select-paddingInline": "0.75rem",
    "--Select-decoratorChildHeight": "min(1.75rem, var(--Select-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, ownerState.size === "lg" && {
    "--Select-minHeight": "2.75rem",
    "--Select-paddingInline": "1rem",
    "--Select-decoratorChildHeight": "min(2.375rem, var(--Select-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--Select-decoratorChildOffset": "min(calc(var(--Select-paddingInline) - (var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2), var(--Select-paddingInline))",
    "--_Select-paddingBlock": "max((var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2, 0px)",
    "--Select-decoratorChildRadius": "max(var(--Select-radius) - var(--variant-borderWidth, 0px) - var(--_Select-paddingBlock), min(var(--_Select-paddingBlock) + var(--variant-borderWidth, 0px), var(--Select-radius) / 2))",
    "--Button-minHeight": "var(--Select-decoratorChildHeight)",
    "--Button-paddingBlock": "0px",
    // to ensure that the height of the button is equal to --Button-minHeight
    "--IconButton-size": "var(--Select-decoratorChildHeight)",
    "--Button-radius": "var(--Select-decoratorChildRadius)",
    "--IconButton-radius": "var(--Select-decoratorChildRadius)",
    boxSizing: "border-box"
  }, ownerState.variant !== "plain" && {
    boxShadow: theme.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Select-minHeight)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "var(--Select-radius)",
    cursor: "pointer"
  }, !(variantStyle != null && variantStyle.backgroundColor) && {
    backgroundColor: theme.vars.palette.background.surface
  }, ownerState.size && {
    paddingBlock: {
      sm: 2,
      md: 3,
      lg: 4
    }[ownerState.size]
    // the padding-block act as a minimum spacing between content and root element
  }, {
    paddingInline: `var(--Select-paddingInline)`
  }, theme.typography[`body-${ownerState.size}`], variantStyle, {
    "&::before": {
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
      margin: "calc(var(--variant-borderWidth, 0px) * -1)"
      // for outlined variant
    },
    [`&.${selectClasses_default.focusVisible}`]: {
      "--Select-indicatorColor": variantStyle == null ? void 0 : variantStyle.color,
      "&::before": {
        boxShadow: `inset 0 0 0 var(--Select-focusedThickness) var(--Select-focusedHighlight)`
      }
    },
    [`&.${selectClasses_default.disabled}`]: {
      "--Select-indicatorColor": "inherit"
    }
  }), {
    "&:hover": (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color],
    [`&.${selectClasses_default.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color]
  }, borderRadius !== void 0 && {
    "--Select-radius": borderRadius
  }];
});
var SelectButton = styled_default("button", {
  name: "JoySelect",
  slot: "Button",
  overridesResolver: (props, styles) => styles.button
})(({
  ownerState
}) => _extends({
  // reset user-agent button style
  border: 0,
  outline: 0,
  background: "none",
  padding: 0,
  fontSize: "inherit",
  color: "inherit",
  alignSelf: "stretch",
  // make children horizontally aligned
  display: "flex",
  alignItems: "center",
  flex: 1,
  fontFamily: "inherit",
  cursor: "pointer",
  whiteSpace: "nowrap",
  overflow: "hidden"
}, (ownerState.value === null || ownerState.value === void 0) && {
  opacity: "var(--Select-placeholderOpacity)"
}, {
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    // TODO: use https://caniuse.com/?search=inset when ~94%
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    borderRadius: "var(--Select-radius)"
  }
}));
var SelectListbox = styled_default(StyledList, {
  name: "JoySelect",
  slot: "Listbox",
  overridesResolver: (props, styles) => styles.listbox
})(({
  theme,
  ownerState
}) => {
  var _theme$variants4;
  const variantStyle = (_theme$variants4 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants4[ownerState.color];
  return _extends({
    "--focus-outline-offset": `calc(${theme.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    "--ListItem-stickyBackground": (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.popup,
    "--ListItem-stickyTop": "calc(var(--List-padding, var(--ListDivider-gap)) * -1)"
  }, scopedVariables, {
    minWidth: "max-content",
    // prevent options from shrinking if some of them is wider than the Select's root.
    maxHeight: "44vh",
    // the best value from what I tried so far which does not cause screen flicker when listbox is open.
    overflow: "auto",
    outline: 0,
    boxShadow: theme.shadow.md,
    borderRadius: `var(--List-radius, ${theme.vars.radius.sm})`,
    // `unstable_popup-zIndex` is a private variable that lets other component, e.g. Modal, to override the z-index so that the listbox can be displayed above the Modal.
    zIndex: `var(--unstable_popup-zIndex, ${theme.vars.zIndex.popup})`
  }, !(variantStyle != null && variantStyle.backgroundColor) && {
    backgroundColor: theme.vars.palette.background.popup
  });
});
var SelectStartDecorator = styled_default("span", {
  name: "JoySelect",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  "--Button-margin": "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Select-paddingInline) / -4)",
  display: "inherit",
  alignItems: "center",
  color: "var(--Select-decoratorColor)",
  marginInlineEnd: "var(--Select-gap)"
});
var SelectEndDecorator = styled_default("span", {
  name: "JoySelect",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  "--Button-margin": "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
  "--IconButton-margin": "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
  "--Icon-margin": "0 calc(var(--Select-paddingInline) / -4) 0 0",
  display: "inherit",
  alignItems: "center",
  color: "var(--Select-decoratorColor)",
  marginInlineStart: "var(--Select-gap)"
});
var SelectIndicator = styled_default("span", {
  name: "JoySelect",
  slot: "Indicator"
})(({
  ownerState,
  theme
}) => _extends({}, ownerState.size === "sm" && {
  "--Icon-fontSize": theme.vars.fontSize.lg
}, ownerState.size === "md" && {
  "--Icon-fontSize": theme.vars.fontSize.xl
}, ownerState.size === "lg" && {
  "--Icon-fontSize": theme.vars.fontSize.xl2
}, {
  "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
  display: "inherit",
  alignItems: "center",
  marginInlineStart: "var(--Select-gap)",
  marginInlineEnd: "calc(var(--Select-paddingInline) / -4)",
  [`.${selectClasses_default.endDecorator} + &`]: {
    marginInlineStart: "calc(var(--Select-gap) / 2)"
  },
  [`&.${selectClasses_default.expanded}, .${selectClasses_default.disabled} > &`]: {
    "--Icon-color": "currentColor"
  }
}));
var Select = React52.forwardRef(function Select2(inProps, ref) {
  var _ref2, _inProps$disabled, _ref3, _inProps$size, _inProps$color, _formControl$color, _props$slots;
  const props = useThemeProps({
    props: inProps,
    name: "JoySelect"
  });
  const _ref = props, {
    action,
    autoFocus,
    children,
    defaultValue,
    defaultListboxOpen = false,
    disabled: disabledExternalProp,
    getSerializedValue,
    placeholder,
    listboxId,
    listboxOpen: listboxOpenProp,
    onChange,
    onListboxOpenChange,
    onClose,
    renderValue: renderValueProp,
    required = false,
    value: valueProp,
    size: sizeProp = "md",
    variant = "outlined",
    color: colorProp = "neutral",
    startDecorator,
    endDecorator,
    indicator = _Unfold || (_Unfold = (0, import_jsx_runtime57.jsx)(Unfold_default, {})),
    // props to forward to the button (all handlers should go through slotProps.button)
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    id,
    name,
    multiple = false,
    slots = {},
    slotProps = {}
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded41);
  const formControl = React52.useContext(FormControlContext_default);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React52.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const disabledProp = (_ref2 = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref2 : disabledExternalProp;
  const size = (_ref3 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref3 : sizeProp;
  const color = (_inProps$color = inProps.color) != null ? _inProps$color : formControl != null && formControl.error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
  const renderValue = renderValueProp != null ? renderValueProp : defaultRenderValue;
  const [anchorEl, setAnchorEl] = React52.useState(null);
  const rootRef = React52.useRef(null);
  const buttonRef = React52.useRef(null);
  const listboxRef = React52.useRef(null);
  const handleRef = useForkRef(ref, rootRef);
  React52.useImperativeHandle(action, () => ({
    focusVisible: () => {
      var _buttonRef$current;
      (_buttonRef$current = buttonRef.current) == null || _buttonRef$current.focus();
    }
  }), []);
  React52.useEffect(() => {
    setAnchorEl(rootRef.current);
  }, []);
  React52.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);
  const handleOpenChange = React52.useCallback((isOpen) => {
    onListboxOpenChange == null || onListboxOpenChange(isOpen);
    if (!isOpen) {
      onClose == null || onClose();
    }
  }, [onClose, onListboxOpenChange]);
  const {
    buttonActive,
    buttonFocusVisible,
    contextValue,
    disabled,
    getButtonProps,
    getListboxProps,
    getHiddenInputProps,
    getOptionMetadata,
    open: listboxOpen,
    value
  } = useSelect({
    buttonRef,
    defaultOpen: defaultListboxOpen,
    defaultValue,
    disabled: disabledProp,
    getSerializedValue,
    listboxId,
    multiple,
    name,
    required,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpenProp,
    value: valueProp
  });
  const ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value,
    size,
    variant,
    color
  });
  const classes = useUtilityClasses41(ownerState);
  const externalForwardedProps = _extends({}, other, {
    slots,
    slotProps
  });
  const selectedOption = React52.useMemo(() => {
    let selectedOptionsMetadata;
    if (multiple) {
      selectedOptionsMetadata = value.map((v) => getOptionMetadata(v)).filter((o) => o !== void 0);
    } else {
      var _getOptionMetadata;
      selectedOptionsMetadata = (_getOptionMetadata = getOptionMetadata(value)) != null ? _getOptionMetadata : null;
    }
    return selectedOptionsMetadata;
  }, [getOptionMetadata, value, multiple]);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref: handleRef,
    className: classes.root,
    elementType: SelectRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotButton, buttonProps] = useSlot("button", {
    additionalProps: {
      "aria-describedby": ariaDescribedby != null ? ariaDescribedby : formControl == null ? void 0 : formControl["aria-describedby"],
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby != null ? ariaLabelledby : formControl == null ? void 0 : formControl.labelId,
      "aria-required": required ? "true" : void 0,
      id: id != null ? id : formControl == null ? void 0 : formControl.htmlFor,
      name
    },
    className: classes.button,
    elementType: SelectButton,
    externalForwardedProps,
    getSlotProps: getButtonProps,
    ownerState
  });
  const [SlotListbox, listboxProps] = useSlot("listbox", {
    additionalProps: {
      ref: listboxRef,
      anchorEl,
      open: listboxOpen,
      placement: "bottom",
      keepMounted: true
    },
    className: classes.listbox,
    elementType: SelectListbox,
    externalForwardedProps,
    getSlotProps: getListboxProps,
    ownerState: _extends({}, ownerState, {
      nesting: false,
      row: false,
      wrap: false
    }),
    getSlotOwnerState: (mergedProps) => ({
      size: mergedProps.size || size,
      variant: mergedProps.variant || variant,
      color: mergedProps.color || (!mergedProps.disablePortal ? colorProp : color),
      disableColorInversion: !mergedProps.disablePortal
    })
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: SelectStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: SelectEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotIndicator, indicatorProps] = useSlot("indicator", {
    className: classes.indicator,
    elementType: SelectIndicator,
    externalForwardedProps,
    ownerState
  });
  const modifiers = React52.useMemo(() => [...defaultModifiers, ...listboxProps.modifiers || []], [listboxProps.modifiers]);
  return (0, import_jsx_runtime58.jsxs)(React52.Fragment, {
    children: [(0, import_jsx_runtime58.jsxs)(SlotRoot, _extends({}, rootProps, {
      children: [startDecorator && (0, import_jsx_runtime57.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
        children: startDecorator
      })), (0, import_jsx_runtime57.jsx)(SlotButton, _extends({}, buttonProps, {
        children: selectedOption ? renderValue(selectedOption) : placeholder
      })), endDecorator && (0, import_jsx_runtime57.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
        children: endDecorator
      })), indicator && (0, import_jsx_runtime57.jsx)(SlotIndicator, _extends({}, indicatorProps, {
        children: indicator
      })), (0, import_jsx_runtime57.jsx)("input", _extends({}, getHiddenInputProps()))]
    })), anchorEl && (0, import_jsx_runtime57.jsx)(SlotListbox, _extends({}, listboxProps, {
      className: clsx_default(listboxProps.className),
      modifiers
    }, !((_props$slots = props.slots) != null && _props$slots.listbox) && {
      as: Popper,
      slots: {
        root: listboxProps.as || "ul"
      }
    }, {
      children: (0, import_jsx_runtime57.jsx)(SelectProvider, {
        value: contextValue,
        children: (0, import_jsx_runtime57.jsx)(VariantColorProvider, {
          variant,
          color: colorProp,
          children: (0, import_jsx_runtime57.jsx)(GroupListContext_default.Provider, {
            value: "select",
            children: (0, import_jsx_runtime57.jsx)(ListProvider_default, {
              nested: true,
              children
            })
          })
        })
      })
    }))]
  });
});
true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types44.default.oneOfType([import_prop_types44.default.func, import_prop_types44.default.shape({
    current: import_prop_types44.default.shape({
      focusVisible: import_prop_types44.default.func.isRequired
    })
  })]),
  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: import_prop_types44.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types44.default.node,
  /**
   * @ignore
   */
  className: import_prop_types44.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types44.default.oneOfType([import_prop_types44.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types44.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types44.default.elementType,
  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: import_prop_types44.default.bool,
  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types44.default.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types44.default.bool,
  /**
   * Trailing adornment for the select.
   */
  endDecorator: import_prop_types44.default.node,
  /**
   * A function to convert the currently selected value to a string.
   * Used to set a value of a hidden input associated with the select,
   * so that the selected value can be posted with a form.
   */
  getSerializedValue: import_prop_types44.default.func,
  /**
   * The indicator(*) for the select.
   *    ________________
   *   [ value        * ]
   *    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
   */
  indicator: import_prop_types44.default.node,
  /**
   * `id` attribute of the listbox element.
   * Also used to derive the `id` attributes of options.
   */
  listboxId: import_prop_types44.default.string,
  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: import_prop_types44.default.bool,
  /**
   * If `true`, selecting multiple values is allowed.
   * This affects the type of the `value`, `defaultValue`, and `onChange` props.
   */
  multiple: import_prop_types44.default.bool,
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   * If the name is provided, the component will render a hidden input element that can be submitted to a server.
   */
  name: import_prop_types44.default.string,
  /**
   * Callback fired when an option is selected.
   */
  onChange: import_prop_types44.default.func,
  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onClose: import_prop_types44.default.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: import_prop_types44.default.func,
  /**
   * Text to show when there is no selected value.
   */
  placeholder: import_prop_types44.default.node,
  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: import_prop_types44.default.func,
  /**
   * If `true`, the Select cannot be empty when submitting form.
   * @default false
   */
  required: import_prop_types44.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types44.default.oneOfType([import_prop_types44.default.oneOf(["sm", "md", "lg"]), import_prop_types44.default.string]),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types44.default.shape({
    button: import_prop_types44.default.elementType,
    endDecorator: import_prop_types44.default.elementType,
    indicator: import_prop_types44.default.elementType,
    listbox: import_prop_types44.default.elementType,
    root: import_prop_types44.default.elementType,
    startDecorator: import_prop_types44.default.elementType
  }),
  /**
   * Leading adornment for the select.
   */
  startDecorator: import_prop_types44.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types44.default.oneOfType([import_prop_types44.default.arrayOf(import_prop_types44.default.oneOfType([import_prop_types44.default.func, import_prop_types44.default.object, import_prop_types44.default.bool])), import_prop_types44.default.func, import_prop_types44.default.object]),
  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: import_prop_types44.default.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types44.default.oneOfType([import_prop_types44.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types44.default.string])
} : void 0;
var Select_default = Select;

// node_modules/@mui/joy/Sheet/Sheet.js
var React53 = __toESM(require_react());
var import_prop_types45 = __toESM(require_prop_types());

// node_modules/@mui/joy/Sheet/sheetClasses.js
function getSheetUtilityClass(slot) {
  return generateUtilityClass2("MuiSheet", slot);
}
var sheetClasses = generateUtilityClasses2("MuiSheet", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var sheetClasses_default = sheetClasses;

// node_modules/@mui/joy/Sheet/Sheet.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var _excluded42 = ["className", "color", "component", "variant", "invertedColors", "slots", "slotProps"];
var useUtilityClasses42 = (ownerState) => {
  const {
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getSheetUtilityClass, {});
};
var SheetRoot = styled_default("div", {
  name: "JoySheet",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$variants2;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  const {
    borderRadius: childRadius,
    bgcolor,
    backgroundColor,
    background
  } = resolveSxValue({
    theme,
    ownerState
  }, ["borderRadius", "bgcolor", "backgroundColor", "background"]);
  const resolvedBg = getPath(theme, `palette.${bgcolor}`) || bgcolor || getPath(theme, `palette.${backgroundColor}`) || backgroundColor || background || (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.surface;
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    "--ListItem-stickyBackground": resolvedBg === "transparent" ? "initial" : resolvedBg,
    // for sticky List
    "--Sheet-background": resolvedBg === "transparent" ? "initial" : resolvedBg
  }, childRadius !== void 0 && {
    "--List-radius": `calc(${childRadius} - var(--variant-borderWidth, 0px))`,
    "--unstable_actionRadius": `calc(${childRadius} - var(--variant-borderWidth, 0px))`
  }, {
    backgroundColor: theme.vars.palette.background.surface,
    position: "relative"
  }), _extends({}, theme.typography["body-md"], ownerState.variant === "solid" && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === "soft" && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants2 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants2[ownerState.color], variantStyle)];
});
var Sheet = React53.forwardRef(function Sheet2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySheet"
  });
  const {
    className,
    color = "neutral",
    component = "div",
    variant = "plain",
    invertedColors = false,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded42);
  const ownerState = _extends({}, props, {
    color,
    component,
    invertedColors,
    variant
  });
  const classes = useUtilityClasses42(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: SheetRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime59.jsx)(SlotRoot, _extends({}, rootProps));
});
true ? Sheet.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types45.default.node,
  /**
   * @ignore
   */
  className: import_prop_types45.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types45.default.oneOfType([import_prop_types45.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types45.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types45.default.elementType,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types45.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types45.default.shape({
    root: import_prop_types45.default.oneOfType([import_prop_types45.default.func, import_prop_types45.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types45.default.shape({
    root: import_prop_types45.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types45.default.oneOfType([import_prop_types45.default.arrayOf(import_prop_types45.default.oneOfType([import_prop_types45.default.func, import_prop_types45.default.object, import_prop_types45.default.bool])), import_prop_types45.default.func, import_prop_types45.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types45.default.oneOfType([import_prop_types45.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types45.default.string])
} : void 0;
var Sheet_default = Sheet;

// node_modules/@mui/joy/Skeleton/Skeleton.js
var React54 = __toESM(require_react());
var import_prop_types46 = __toESM(require_prop_types());

// node_modules/@mui/joy/Skeleton/skeletonClasses.js
function getSkeletonUtilityClass(slot) {
  return generateUtilityClass2("MuiSkeleton", slot);
}
var skeletonClasses = generateUtilityClasses2("MuiSkeleton", ["root", "variantOverlay", "variantCircular", "variantRectangular", "variantText", "variantInline", "h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs"]);
var skeletonClasses_default = skeletonClasses;

// node_modules/@mui/joy/Skeleton/Skeleton.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var _excluded43 = ["className", "component", "children", "animation", "overlay", "loading", "variant", "level", "height", "width", "sx", "slots", "slotProps"];
var _2 = (t) => t;
var _t3;
var _t22;
var _t32;
var _t4;
var _t5;
var useUtilityClasses43 = (ownerState) => {
  const {
    variant,
    level
  } = ownerState;
  const slots = {
    root: ["root", variant && `variant${capitalize(variant)}`, level && `level${capitalize(level)}`]
  };
  return composeClasses(slots, getSkeletonUtilityClass, {});
};
var pulseKeyframe = keyframes(_t3 || (_t3 = _2`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
    background: var(--unstable_pulse-bg);
  }

  100% {
    opacity: 1;
  }
`));
var waveKeyframe = keyframes(_t22 || (_t22 = _2`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`));
var SkeletonRoot = styled_default("span", {
  name: "JoySkeleton",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(
  /**
   * Animations
   */
  ({
    ownerState,
    theme
  }) => ownerState.animation === "pulse" && ownerState.variant !== "inline" && css(_t32 || (_t32 = _2`
      &::before {
        animation: ${0} 2s ease-in-out 0.5s infinite;
        background: ${0};
      }
    `), pulseKeyframe, theme.vars.palette.background.level3),
  ({
    ownerState,
    theme
  }) => ownerState.animation === "pulse" && ownerState.variant === "inline" && css(_t4 || (_t4 = _2`
      &::after {
        animation: ${0} 2s ease-in-out 0.5s infinite;
        background: ${0};
      }
    `), pulseKeyframe, theme.vars.palette.background.level3),
  ({
    ownerState,
    theme
  }) => ownerState.animation === "wave" && css(_t5 || (_t5 = _2`
      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);
      background: ${0};

      &::after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: var(--unstable_pseudo-zIndex);
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          var(--unstable_wave-bg, rgba(0 0 0 / 0.08)),
          transparent
        );
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
      }
    `), theme.vars.palette.background.level3, waveKeyframe),
  /**
   * Implementation notes:
   * 1. The `Skeleton` has 3 parts:
   *  - the root (span) element as a container
   *  - the ::before pseudo-element for covering the content
   *  - the ::after pseudo-element for animation on top of the ::before pseudo-element
   *
   * 2. The root element and ::before will change to absolute position when shape="overlay" to cover the parent's content.
   *
   * 3. For geometry shape (rectangular, circular), the typography styles are applied to the root element so that width, height can be customized based on the font-size.
   */
  ({
    ownerState,
    theme
  }) => {
    var _components, _theme$typography, _theme$typography2, _theme$typography3;
    const defaultLevel = ((_components = theme.components) == null || (_components = _components.JoyTypography) == null || (_components = _components.defaultProps) == null ? void 0 : _components.level) || "body1";
    return [{
      display: "block",
      position: "relative",
      "--unstable_pseudo-zIndex": 9,
      "--unstable_pulse-bg": theme.vars.palette.background.level1,
      overflow: "hidden",
      cursor: "default",
      color: "transparent",
      "& *": {
        visibility: "hidden"
      },
      "&::before": {
        display: "block",
        content: '" "',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: "var(--unstable_pseudo-zIndex)",
        borderRadius: "inherit"
      },
      [theme.getColorSchemeSelector("dark")]: {
        "--unstable_wave-bg": "rgba(255 255 255 / 0.1)"
      }
    }, ownerState.variant === "rectangular" && _extends({
      borderRadius: "min(0.15em, 6px)",
      height: "auto",
      width: "100%",
      "&::before": {
        position: "absolute"
      }
    }, !ownerState.animation && {
      backgroundColor: theme.vars.palette.background.level3
    }, ownerState.level !== "inherit" && _extends({}, theme.typography[ownerState.level])), ownerState.variant === "circular" && _extends({
      borderRadius: "50%",
      width: "100%",
      height: "100%",
      "&::before": {
        position: "absolute"
      }
    }, !ownerState.animation && {
      backgroundColor: theme.vars.palette.background.level3
    }, ownerState.level !== "inherit" && _extends({}, theme.typography[ownerState.level])), ownerState.variant === "text" && _extends({
      borderRadius: "min(0.15em, 6px)",
      background: "transparent",
      width: "100%"
    }, ownerState.level !== "inherit" && _extends({}, theme.typography[ownerState.level || defaultLevel], {
      paddingBlockStart: `calc((${((_theme$typography = theme.typography[ownerState.level || defaultLevel]) == null ? void 0 : _theme$typography.lineHeight) || 1} - 1) * 0.56em)`,
      paddingBlockEnd: `calc((${((_theme$typography2 = theme.typography[ownerState.level || defaultLevel]) == null ? void 0 : _theme$typography2.lineHeight) || 1} - 1) * 0.44em)`,
      "&::before": _extends({
        height: "1em"
      }, theme.typography[ownerState.level || defaultLevel], ownerState.animation === "wave" && {
        backgroundColor: theme.vars.palette.background.level3
      }, !ownerState.animation && {
        backgroundColor: theme.vars.palette.background.level3
      }),
      "&::after": _extends({
        height: "1em",
        top: `calc((${((_theme$typography3 = theme.typography[ownerState.level || defaultLevel]) == null ? void 0 : _theme$typography3.lineHeight) || 1} - 1) * 0.56em)`
      }, theme.typography[ownerState.level || defaultLevel])
    })), ownerState.variant === "inline" && _extends({
      display: "inline",
      position: "initial",
      borderRadius: "min(0.15em, 6px)"
    }, !ownerState.animation && {
      backgroundColor: theme.vars.palette.background.level3
    }, ownerState.level !== "inherit" && _extends({}, theme.typography[ownerState.level]), {
      WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      "&::before": {
        position: "absolute",
        zIndex: "var(--unstable_pseudo-zIndex)",
        backgroundColor: theme.vars.palette.background.level3
      }
    }, ownerState.animation === "pulse" && {
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: "var(--unstable_pseudo-zIndex)",
        backgroundColor: theme.vars.palette.background.level3
      }
    }), ownerState.variant === "overlay" && _extends({
      borderRadius: theme.vars.radius.xs,
      position: "absolute",
      width: "100%",
      height: "100%",
      zIndex: "var(--unstable_pseudo-zIndex)"
    }, ownerState.animation === "pulse" && {
      backgroundColor: theme.vars.palette.background.surface
    }, ownerState.level !== "inherit" && _extends({}, theme.typography[ownerState.level]), {
      "&::before": {
        position: "absolute"
      }
    })];
  }
);
var Skeleton = React54.forwardRef(function Skeleton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySkeleton"
  });
  const {
    className,
    component = "span",
    children,
    animation = "pulse",
    overlay = false,
    loading = true,
    variant = "overlay",
    level = variant === "text" ? "body-md" : "inherit",
    height,
    width,
    sx,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded43);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps,
    sx: [{
      width,
      height
    }, ...Array.isArray(sx) ? sx : [sx]]
  });
  const ownerState = _extends({}, props, {
    animation,
    component,
    level,
    loading,
    overlay,
    variant,
    width,
    height
  });
  const classes = useUtilityClasses43(ownerState);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: SkeletonRoot,
    externalForwardedProps,
    ownerState
  });
  return loading ? (0, import_jsx_runtime60.jsx)(SlotRoot, _extends({}, rootProps, {
    children
  })) : (0, import_jsx_runtime60.jsx)(React54.Fragment, {
    children: React54.Children.map(children, (child, index) => index === 0 && React54.isValidElement(child) ? React54.cloneElement(child, {
      "data-first-child": ""
    }) : child)
  });
});
true ? Skeleton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: import_prop_types46.default.oneOf(["pulse", "wave", false]),
  /**
   * Used to render icon or text elements inside the Skeleton if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types46.default.node,
  /**
   * @ignore
   */
  className: import_prop_types46.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types46.default.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: import_prop_types46.default.oneOfType([import_prop_types46.default.arrayOf(import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string])), import_prop_types46.default.number, import_prop_types46.default.shape({
    lg: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string]),
    md: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string]),
    sm: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string]),
    xl: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string]),
    xs: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string])
  }), import_prop_types46.default.string]),
  /**
   * Applies the theme typography styles.
   * @default variant === 'text' ? 'body-md' : 'inherit'
   */
  level: import_prop_types46.default.oneOfType([import_prop_types46.default.oneOf(["h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs", "inherit"]), import_prop_types46.default.string]),
  /**
   * If `true`, the skeleton appears.
   * @default true
   */
  loading: import_prop_types46.default.bool,
  /**
   * If `true`, the skeleton's position will change to `absolute` to fill the available space of the nearest parent.
   * This prop is useful to create a placeholder that has the element's dimensions.
   * @default false
   */
  overlay: import_prop_types46.default.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types46.default.shape({
    root: import_prop_types46.default.oneOfType([import_prop_types46.default.func, import_prop_types46.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types46.default.shape({
    root: import_prop_types46.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types46.default.oneOfType([import_prop_types46.default.arrayOf(import_prop_types46.default.oneOfType([import_prop_types46.default.func, import_prop_types46.default.object, import_prop_types46.default.bool])), import_prop_types46.default.func, import_prop_types46.default.object]),
  /**
   * The type of content that will be rendered.
   * @default 'overlay'
   */
  variant: import_prop_types46.default.oneOfType([import_prop_types46.default.oneOf(["circular", "inline", "overlay", "rectangular", "text"]), import_prop_types46.default.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: import_prop_types46.default.oneOfType([import_prop_types46.default.arrayOf(import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string])), import_prop_types46.default.number, import_prop_types46.default.shape({
    lg: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string]),
    md: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string]),
    sm: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string]),
    xl: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string]),
    xs: import_prop_types46.default.oneOfType([import_prop_types46.default.number, import_prop_types46.default.string])
  }), import_prop_types46.default.string])
} : void 0;
Skeleton.muiName = "Skeleton";
var Skeleton_default = Skeleton;

// node_modules/@mui/joy/Slider/Slider.js
var React55 = __toESM(require_react());
var import_prop_types47 = __toESM(require_prop_types());

// node_modules/@mui/joy/Slider/sliderClasses.js
function getSliderUtilityClass(slot) {
  return generateUtilityClass2("MuiSlider", slot);
}
var sliderClasses = generateUtilityClasses2("MuiSlider", ["root", "disabled", "dragging", "focusVisible", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "thumb", "thumbStart", "thumbEnd", "valueLabel", "valueLabelOpen", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "disabled", "sizeSm", "sizeMd", "sizeLg", "input"]);
var sliderClasses_default = sliderClasses;

// node_modules/@mui/joy/Slider/Slider.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var _excluded44 = ["aria-label", "aria-valuetext", "className", "classes", "disableSwap", "disabled", "defaultValue", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "color", "size", "variant", "component", "slots", "slotProps"];
function Identity(x) {
  return x;
}
var useUtilityClasses44 = (ownerState) => {
  const {
    disabled,
    dragging,
    marked,
    orientation,
    track,
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    rail: ["rail"],
    track: ["track"],
    thumb: ["thumb", disabled && "disabled"],
    input: ["input"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    valueLabelOpen: ["valueLabelOpen"],
    active: ["active"],
    focusVisible: ["focusVisible"]
  };
  return composeClasses(slots, getSliderUtilityClass, {});
};
var sliderColorVariables = ({
  theme,
  ownerState
}) => (data = {}) => {
  var _theme$variants, _styles$VariantBor;
  const styles = ((_theme$variants = theme.variants[`${ownerState.variant}${data.state || ""}`]) == null ? void 0 : _theme$variants[ownerState.color]) || {};
  return _extends({}, !data.state && {
    "--variant-borderWidth": (_styles$VariantBor = styles["--variant-borderWidth"]) != null ? _styles$VariantBor : "0px"
  }, {
    "--Slider-trackColor": styles.color,
    "--Slider-thumbBackground": styles.color,
    "--Slider-thumbColor": styles.backgroundColor || theme.vars.palette.background.surface,
    "--Slider-trackBackground": styles.backgroundColor || theme.vars.palette.background.surface,
    "--Slider-trackBorderColor": styles.borderColor,
    "--Slider-railBackground": theme.vars.palette.background.level2
  });
};
var SliderRoot = styled_default("span", {
  name: "JoySlider",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  const getColorVariables = sliderColorVariables({
    theme,
    ownerState
  });
  return [_extends({
    "--Slider-size": "max(42px, max(var(--Slider-thumbSize), var(--Slider-trackSize)))",
    // Reach 42px touch target, about ~8mm on screen.
    "--Slider-trackRadius": "var(--Slider-size)",
    "--Slider-markBackground": theme.vars.palette.text.tertiary,
    [`& .${sliderClasses_default.markActive}`]: {
      "--Slider-markBackground": "var(--Slider-trackColor)"
    }
  }, ownerState.size === "sm" && {
    "--Slider-markSize": "2px",
    "--Slider-trackSize": "4px",
    "--Slider-thumbSize": "14px",
    "--Slider-valueLabelArrowSize": "6px"
  }, ownerState.size === "md" && {
    "--Slider-markSize": "2px",
    "--Slider-trackSize": "6px",
    "--Slider-thumbSize": "18px",
    "--Slider-valueLabelArrowSize": "8px"
  }, ownerState.size === "lg" && {
    "--Slider-markSize": "3px",
    "--Slider-trackSize": "8px",
    "--Slider-thumbSize": "24px",
    "--Slider-valueLabelArrowSize": "10px"
  }, {
    "--Slider-thumbRadius": "calc(var(--Slider-thumbSize) / 2)",
    "--Slider-thumbWidth": "var(--Slider-thumbSize)"
  }, getColorVariables(), {
    "&:hover": {
      "@media (hover: hover)": _extends({}, getColorVariables({
        state: "Hover"
      }))
    },
    "&:active": _extends({}, getColorVariables({
      state: "Active"
    })),
    [`&.${sliderClasses_default.disabled}`]: _extends({
      pointerEvents: "none",
      color: theme.vars.palette.text.tertiary
    }, getColorVariables({
      state: "Disabled"
    })),
    boxSizing: "border-box",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    touchAction: "none",
    WebkitTapHighlightColor: "transparent"
  }, ownerState.orientation === "horizontal" && {
    padding: "calc(var(--Slider-size) / 2) 0",
    width: "100%"
  }, ownerState.orientation === "vertical" && {
    padding: "0 calc(var(--Slider-size) / 2)",
    height: "100%"
  }, {
    "@media print": {
      colorAdjust: "exact"
    }
  })];
});
var SliderRail = styled_default("span", {
  name: "JoySlider",
  slot: "Rail",
  overridesResolver: (props, styles) => styles.rail
})(({
  ownerState
}) => [_extends({
  display: "block",
  position: "absolute",
  backgroundColor: ownerState.track === "inverted" ? "var(--Slider-trackBackground)" : "var(--Slider-railBackground)",
  border: ownerState.track === "inverted" ? "var(--variant-borderWidth, 0px) solid var(--Slider-trackBorderColor)" : "initial",
  borderRadius: "var(--Slider-trackRadius)"
}, ownerState.orientation === "horizontal" && {
  height: "var(--Slider-trackSize)",
  top: "50%",
  left: 0,
  right: 0,
  transform: "translateY(-50%)"
}, ownerState.orientation === "vertical" && {
  width: "var(--Slider-trackSize)",
  top: 0,
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)"
}, ownerState.track === "inverted" && {
  opacity: 1
})]);
var SliderTrack = styled_default("span", {
  name: "JoySlider",
  slot: "Track",
  overridesResolver: (props, styles) => styles.track
})(({
  ownerState
}) => {
  return [_extends({
    display: "block",
    position: "absolute",
    color: "var(--Slider-trackColor)",
    border: ownerState.track === "inverted" ? "initial" : "var(--variant-borderWidth, 0px) solid var(--Slider-trackBorderColor)",
    backgroundColor: ownerState.track === "inverted" ? "var(--Slider-railBackground)" : "var(--Slider-trackBackground)"
  }, ownerState.orientation === "horizontal" && {
    height: "var(--Slider-trackSize)",
    top: "50%",
    transform: "translateY(-50%)",
    borderRadius: "var(--Slider-trackRadius) 0 0 var(--Slider-trackRadius)"
  }, ownerState.orientation === "vertical" && {
    width: "var(--Slider-trackSize)",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "0 0 var(--Slider-trackRadius) var(--Slider-trackRadius)"
  }, ownerState.track === false && {
    display: "none"
  })];
});
var SliderThumb = styled_default("span", {
  name: "JoySlider",
  slot: "Thumb",
  overridesResolver: (props, styles) => styles.thumb
})(({
  ownerState,
  theme
}) => {
  var _theme$vars$palette;
  return _extends({
    position: "absolute",
    boxSizing: "border-box",
    outline: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "var(--Slider-thumbWidth)",
    height: "var(--Slider-thumbSize)",
    border: "var(--variant-borderWidth, 0px) solid var(--Slider-trackBorderColor)",
    borderRadius: "var(--Slider-thumbRadius)",
    boxShadow: "var(--Slider-thumbShadow)",
    color: "var(--Slider-thumbColor)",
    backgroundColor: "var(--Slider-thumbBackground)",
    [theme.focus.selector]: _extends({}, theme.focus.default, {
      outlineOffset: 0,
      outlineWidth: "max(4px, var(--Slider-thumbSize) / 3.6)",
      outlineColor: `rgba(${(_theme$vars$palette = theme.vars.palette) == null || (_theme$vars$palette = _theme$vars$palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / 0.32)`
    })
  }, ownerState.orientation === "horizontal" && {
    top: "50%",
    transform: "translate(-50%, -50%)"
  }, ownerState.orientation === "vertical" && {
    left: "50%",
    transform: "translate(-50%, 50%)"
  }, {
    "&::before": {
      // use pseudo element to create thumb's ring
      boxSizing: "border-box",
      content: '""',
      display: "block",
      position: "absolute",
      background: "transparent",
      // to not block the thumb's child
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "2px solid",
      borderColor: "var(--Slider-thumbColor)",
      borderRadius: "inherit"
    }
  });
});
var SliderMark = styled_default("span", {
  name: "JoySlider",
  slot: "Mark",
  overridesResolver: (props, styles) => styles.mark
})(({
  ownerState
}) => {
  return _extends({
    position: "absolute",
    width: "var(--Slider-markSize)",
    height: "var(--Slider-markSize)",
    borderRadius: "var(--Slider-markSize)",
    backgroundColor: "var(--Slider-markBackground)"
  }, ownerState.orientation === "horizontal" && _extends({
    top: "50%",
    transform: `translate(calc(var(--Slider-markSize) / -2), -50%)`
  }, ownerState.percent === 0 && {
    transform: `translate(min(var(--Slider-markSize), 3px), -50%)`
  }, ownerState.percent === 100 && {
    transform: `translate(calc(var(--Slider-markSize) * -1 - min(var(--Slider-markSize), 3px)), -50%)`
  }), ownerState.orientation === "vertical" && _extends({
    left: "50%",
    transform: "translate(-50%, calc(var(--Slider-markSize) / 2))"
  }, ownerState.percent === 0 && {
    transform: `translate(-50%, calc(min(var(--Slider-markSize), 3px) * -1))`
  }, ownerState.percent === 100 && {
    transform: `translate(-50%, calc(var(--Slider-markSize) * 1 + min(var(--Slider-markSize), 3px)))`
  }));
});
var SliderValueLabel = styled_default("span", {
  name: "JoySlider",
  slot: "ValueLabel",
  overridesResolver: (props, styles) => styles.valueLabel
})(({
  theme,
  ownerState
}) => _extends({}, ownerState.size === "sm" && {
  fontSize: theme.fontSize.xs,
  lineHeight: theme.lineHeight.md,
  paddingInline: "0.25rem",
  minWidth: "20px"
}, ownerState.size === "md" && {
  fontSize: theme.fontSize.sm,
  lineHeight: theme.lineHeight.md,
  paddingInline: "0.375rem",
  minWidth: "24px"
}, ownerState.size === "lg" && {
  fontSize: theme.fontSize.md,
  lineHeight: theme.lineHeight.md,
  paddingInline: "0.5rem",
  minWidth: "28px"
}, {
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap",
  fontFamily: theme.vars.fontFamily.body,
  fontWeight: theme.vars.fontWeight.md,
  bottom: 0,
  transformOrigin: "bottom center",
  transform: "translateY(calc((var(--Slider-thumbSize) + var(--Slider-valueLabelArrowSize)) * -1)) scale(0)",
  position: "absolute",
  backgroundColor: theme.vars.palette.background.tooltip,
  boxShadow: theme.shadow.sm,
  borderRadius: theme.vars.radius.xs,
  color: "#fff",
  "&::before": {
    display: "var(--Slider-valueLabelArrowDisplay)",
    position: "absolute",
    content: '""',
    color: theme.vars.palette.background.tooltip,
    bottom: 0,
    border: "calc(var(--Slider-valueLabelArrowSize) / 2) solid",
    borderColor: "currentColor",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    left: "50%",
    transform: "translate(-50%, 100%)",
    backgroundColor: "transparent"
  },
  [`&.${sliderClasses_default.valueLabelOpen}`]: {
    transform: "translateY(calc((var(--Slider-thumbSize) + var(--Slider-valueLabelArrowSize)) * -1)) scale(1)"
  }
}));
var SliderMarkLabel = styled_default("span", {
  name: "JoySlider",
  slot: "MarkLabel",
  overridesResolver: (props, styles) => styles.markLabel
})(({
  theme,
  ownerState
}) => _extends({
  fontFamily: theme.vars.fontFamily.body
}, ownerState.size === "sm" && {
  fontSize: theme.vars.fontSize.xs
}, ownerState.size === "md" && {
  fontSize: theme.vars.fontSize.sm
}, ownerState.size === "lg" && {
  fontSize: theme.vars.fontSize.md
}, {
  color: theme.palette.text.tertiary,
  position: "absolute",
  whiteSpace: "nowrap"
}, ownerState.orientation === "horizontal" && {
  top: "calc(50% + 4px + (max(var(--Slider-trackSize), var(--Slider-thumbSize)) / 2))",
  transform: "translateX(-50%)"
}, ownerState.orientation === "vertical" && {
  left: "calc(50% + 8px + (max(var(--Slider-trackSize), var(--Slider-thumbSize)) / 2))",
  transform: "translateY(50%)"
}));
var SliderInput = styled_default("input", {
  name: "JoySlider",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input
})({});
var Slider = React55.forwardRef(function Slider2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySlider"
  });
  const {
    "aria-label": ariaLabel,
    "aria-valuetext": ariaValuetext,
    className,
    classes: classesProp,
    disableSwap = false,
    disabled = false,
    defaultValue,
    getAriaLabel,
    getAriaValueText,
    marks: marksProp = false,
    max = 100,
    min = 0,
    orientation = "horizontal",
    scale = Identity,
    step = 1,
    track = "normal",
    valueLabelDisplay = "off",
    valueLabelFormat = Identity,
    isRtl = false,
    color = "primary",
    size = "md",
    variant = "solid",
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded44);
  const ownerState = _extends({}, props, {
    marks: marksProp,
    classes: classesProp,
    disabled,
    defaultValue,
    disableSwap,
    isRtl,
    max,
    min,
    orientation,
    scale,
    step,
    track,
    valueLabelDisplay,
    valueLabelFormat,
    color,
    size,
    variant
  });
  const {
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    focusedThumbIndex,
    range,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
    getThumbStyle
  } = useSlider(_extends({}, ownerState, {
    rootRef: ref
  }));
  ownerState.marked = marks.length > 0 && marks.some((mark) => mark.label);
  ownerState.dragging = dragging;
  const trackStyle = _extends({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));
  const classes = useUtilityClasses44(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: SliderRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState
  });
  const [SlotRail, railProps] = useSlot("rail", {
    className: classes.rail,
    elementType: SliderRail,
    externalForwardedProps,
    ownerState
  });
  const [SlotTrack, trackProps] = useSlot("track", {
    additionalProps: {
      style: trackStyle
    },
    className: classes.track,
    elementType: SliderTrack,
    externalForwardedProps,
    ownerState
  });
  const [SlotMark, markProps] = useSlot("mark", {
    className: classes.mark,
    elementType: SliderMark,
    externalForwardedProps,
    ownerState
  });
  const [SlotMarkLabel, markLabelProps] = useSlot("markLabel", {
    className: classes.markLabel,
    elementType: SliderMarkLabel,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      "aria-hidden": true
    }
  });
  const [SlotThumb, thumbProps] = useSlot("thumb", {
    className: classes.thumb,
    elementType: SliderThumb,
    externalForwardedProps,
    getSlotProps: getThumbProps,
    ownerState
  });
  const [SlotInput, inputProps] = useSlot("input", {
    className: classes.input,
    elementType: SliderInput,
    externalForwardedProps,
    getSlotProps: getHiddenInputProps,
    ownerState
  });
  const [SlotValueLabel, valueLabelProps] = useSlot("valueLabel", {
    className: classes.valueLabel,
    elementType: SliderValueLabel,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime62.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime61.jsx)(SlotRail, _extends({}, railProps)), (0, import_jsx_runtime61.jsx)(SlotTrack, _extends({}, trackProps)), marks.filter((mark) => mark.value >= min && mark.value <= max).map((mark, index) => {
      const percent = valueToPercent(mark.value, min, max);
      const style = axisProps[axis].offset(percent);
      let markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return (0, import_jsx_runtime62.jsxs)(React55.Fragment, {
        children: [(0, import_jsx_runtime61.jsx)(SlotMark, _extends({
          "data-index": index
        }, markProps, !isHostComponent(SlotMark) && {
          ownerState: _extends({}, markProps.ownerState, {
            percent
          })
        }, {
          style: _extends({}, style, markProps.style),
          className: clsx_default(markProps.className, markActive && classes.markActive)
        })), mark.label != null ? (0, import_jsx_runtime61.jsx)(SlotMarkLabel, _extends({
          "data-index": index
        }, markLabelProps, {
          style: _extends({}, style, markLabelProps.style),
          className: clsx_default(classes.markLabel, markLabelProps.className, markActive && classes.markLabelActive),
          children: mark.label
        })) : null]
      }, mark.value);
    }), values.map((value, index) => {
      const percent = valueToPercent(value, min, max);
      const style = axisProps[axis].offset(percent);
      return (0, import_jsx_runtime62.jsxs)(SlotThumb, _extends({
        "data-index": index
      }, thumbProps, {
        className: clsx_default(thumbProps.className, active === index && classes.active, focusedThumbIndex === index && classes.focusVisible),
        style: _extends({}, style, getThumbStyle(index), thumbProps.style),
        children: [(0, import_jsx_runtime61.jsx)(SlotInput, _extends({
          "data-index": index,
          "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
          "aria-valuenow": scale(value),
          "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
          value: values[index]
        }, inputProps)), valueLabelDisplay !== "off" ? (0, import_jsx_runtime61.jsx)(SlotValueLabel, _extends({}, valueLabelProps, {
          className: clsx_default(valueLabelProps.className, (open === index || active === index || valueLabelDisplay === "on") && classes.valueLabelOpen),
          children: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat
        })) : null]
      }), index);
    })]
  }));
});
true ? Slider.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The label of the slider.
   */
  "aria-label": import_prop_types47.default.string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": import_prop_types47.default.string,
  /**
   * @ignore
   */
  children: import_prop_types47.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types47.default.object,
  /**
   * @ignore
   */
  className: import_prop_types47.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'primary'
   */
  color: import_prop_types47.default.oneOfType([import_prop_types47.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types47.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types47.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types47.default.oneOfType([import_prop_types47.default.arrayOf(import_prop_types47.default.number), import_prop_types47.default.number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types47.default.bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: import_prop_types47.default.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: import_prop_types47.default.func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: import_prop_types47.default.func,
  /**
   * If `true` the Slider will be rendered right-to-left (with the lowest value on the right-hand side).
   * @default false
   */
  isRtl: import_prop_types47.default.bool,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: import_prop_types47.default.oneOfType([import_prop_types47.default.arrayOf(import_prop_types47.default.shape({
    label: import_prop_types47.default.node,
    value: import_prop_types47.default.number.isRequired
  })), import_prop_types47.default.bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: import_prop_types47.default.number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: import_prop_types47.default.number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: import_prop_types47.default.string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: import_prop_types47.default.func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: import_prop_types47.default.func,
  /**
   * @ignore
   */
  onMouseDown: import_prop_types47.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types47.default.oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  scale: import_prop_types47.default.func,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types47.default.oneOfType([import_prop_types47.default.oneOf(["sm", "md", "lg"]), import_prop_types47.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types47.default.shape({
    input: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object]),
    mark: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object]),
    markLabel: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object]),
    rail: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object]),
    root: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object]),
    thumb: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object]),
    track: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object]),
    valueLabel: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types47.default.shape({
    input: import_prop_types47.default.elementType,
    mark: import_prop_types47.default.elementType,
    markLabel: import_prop_types47.default.elementType,
    rail: import_prop_types47.default.elementType,
    root: import_prop_types47.default.elementType,
    thumb: import_prop_types47.default.elementType,
    track: import_prop_types47.default.elementType,
    valueLabel: import_prop_types47.default.elementType
  }),
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: import_prop_types47.default.number,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types47.default.oneOfType([import_prop_types47.default.arrayOf(import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.object, import_prop_types47.default.bool])), import_prop_types47.default.func, import_prop_types47.default.object]),
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: import_prop_types47.default.number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: import_prop_types47.default.oneOf(["inverted", "normal", false]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: import_prop_types47.default.oneOfType([import_prop_types47.default.arrayOf(import_prop_types47.default.number), import_prop_types47.default.number]),
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay: import_prop_types47.default.oneOf(["auto", "off", "on"]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @param {any} x
   * @returns {any}
   * @default function Identity(x) {
   *   return x;
   * }
   */
  valueLabelFormat: import_prop_types47.default.oneOfType([import_prop_types47.default.func, import_prop_types47.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'solid'
   */
  variant: import_prop_types47.default.oneOfType([import_prop_types47.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types47.default.string])
} : void 0;
var Slider_default = Slider;

// node_modules/@mui/joy/Snackbar/Snackbar.js
var React56 = __toESM(require_react());
var import_prop_types48 = __toESM(require_prop_types());

// node_modules/@mui/joy/Snackbar/snackbarClasses.js
function getSnackbarUtilityClass(slot) {
  return generateUtilityClass2("MuiSnackbar", slot);
}
var snackbarClasses = generateUtilityClasses2("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "endDecorator", "sizeSm", "sizeMd", "sizeLg", "startDecorator", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var snackbarClasses_default = snackbarClasses;

// node_modules/@mui/joy/Snackbar/Snackbar.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var _excluded45 = ["anchorOrigin", "animationDuration", "autoHideDuration", "color", "children", "className", "component", "disableWindowBlurListener", "endDecorator", "invertedColors", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "onUnmount", "open", "resumeHideDuration", "size", "slots", "slotProps", "startDecorator", "variant"];
var _3 = (t) => t;
var _t6;
var _t23;
var useUtilityClasses45 = (ownerState) => {
  const {
    variant,
    color,
    size,
    anchorOrigin
  } = ownerState;
  const slots = {
    root: ["root", size && `size${capitalize(size)}`, color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`, `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}`],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getSnackbarUtilityClass, {});
};
var enterAnimation = keyframes(_t6 || (_t6 = _3`
  0% {
    transform: translateX(var(--Snackbar-translateX, 0px)) translateY(calc(var(--_Snackbar-anchorBottom, 1) * 100%));
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(var(--Snackbar-translateX, 0px)) translateY(0);
  }
`));
var exitAnimation = keyframes(_t23 || (_t23 = _3`
  0% {
    transform: translateX(var(--Snackbar-translateX, 0px)) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(var(--Snackbar-translateX, 0px)) translateY(calc(var(--_Snackbar-anchorBottom, 1) * 100%));
    opacity: 0;
  }
`));
var SnackbarRoot = styled_default("div", {
  name: "JoySnackbar",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _ownerState$anchorOri, _ownerState$anchorOri2, _ownerState$anchorOri3, _ownerState$anchorOri4, _ownerState$anchorOri5, _ownerState$anchorOri6, _theme$variants;
  const {
    p,
    padding,
    borderRadius
  } = resolveSxValue({
    theme,
    ownerState
  }, ["p", "padding", "borderRadius"]);
  return [_extends({
    "--Snackbar-radius": theme.vars.radius.sm,
    "--Snackbar-decoratorChildRadius": "max((var(--Snackbar-radius) - var(--variant-borderWidth, 0px)) - var(--Snackbar-padding), min(var(--Snackbar-padding) + var(--variant-borderWidth, 0px), var(--Snackbar-radius) / 2))",
    "--Button-minHeight": "var(--Snackbar-decoratorChildHeight)",
    "--IconButton-size": "var(--Snackbar-decoratorChildHeight)",
    "--Button-radius": "var(--Snackbar-decoratorChildRadius)",
    "--IconButton-radius": "var(--Snackbar-decoratorChildRadius)",
    "--Icon-color": "currentColor"
  }, ownerState.size === "sm" && {
    "--Snackbar-padding": "0.75rem",
    "--Snackbar-inset": "0.5rem",
    "--Snackbar-decoratorChildHeight": "1.5rem",
    "--Icon-fontSize": theme.vars.fontSize.xl,
    gap: "0.5rem"
  }, ownerState.size === "md" && {
    "--Snackbar-padding": "1rem",
    "--Snackbar-inset": "0.75rem",
    // the spacing between Snackbar and the viewport
    "--Snackbar-decoratorChildHeight": "2rem",
    "--Icon-fontSize": theme.vars.fontSize.xl,
    gap: "0.625rem"
  }, ownerState.size === "lg" && {
    "--Snackbar-padding": "1.25rem",
    "--Snackbar-inset": "1rem",
    "--Snackbar-decoratorChildHeight": "2.375rem",
    "--Icon-fontSize": theme.vars.fontSize.xl2,
    gap: "0.875rem"
  }, {
    zIndex: theme.vars.zIndex.snackbar,
    position: "fixed",
    display: "flex",
    alignItems: "center",
    minWidth: 300,
    top: ((_ownerState$anchorOri = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri.vertical) === "top" ? "var(--Snackbar-inset)" : void 0,
    left: ((_ownerState$anchorOri2 = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri2.horizontal) === "left" ? "var(--Snackbar-inset)" : void 0,
    bottom: ((_ownerState$anchorOri3 = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri3.vertical) === "bottom" ? "var(--Snackbar-inset)" : void 0,
    right: ((_ownerState$anchorOri4 = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri4.horizontal) === "right" ? "var(--Snackbar-inset)" : void 0
  }, ((_ownerState$anchorOri5 = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri5.horizontal) === "center" && {
    "--Snackbar-translateX": "-50%",
    left: "50%",
    transform: "translateX(var(--Snackbar-translateX))"
  }, ((_ownerState$anchorOri6 = ownerState.anchorOrigin) == null ? void 0 : _ownerState$anchorOri6.vertical) === "top" && {
    "--_Snackbar-anchorBottom": "-1"
  }, {
    animation: `${enterAnimation} ${ownerState.animationDuration}ms forwards`
  }, !ownerState.open && {
    animationName: exitAnimation
  }, {
    boxShadow: theme.vars.shadow.lg,
    backgroundColor: theme.vars.palette.background.surface,
    padding: `var(--Snackbar-padding)`,
    borderRadius: "var(--Snackbar-radius)"
  }, theme.typography[`body-${{
    sm: "xs",
    md: "sm",
    lg: "md"
  }[ownerState.size]}`], ownerState.variant === "solid" && ownerState.color && ownerState.invertedColors && applySolidInversion(ownerState.color)(theme), ownerState.variant === "soft" && ownerState.color && ownerState.invertedColors && applySoftInversion(ownerState.color)(theme), (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]), p !== void 0 && {
    "--Snackbar-padding": p
  }, padding !== void 0 && {
    "--Snackbar-padding": padding
  }, borderRadius !== void 0 && {
    "--Snackbar-radius": borderRadius
  }];
});
var SnackbarStartDecorator = styled_default("span", {
  name: "JoySnackbar",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  display: "inherit",
  flex: "none"
});
var SnackbarEndDecorator = styled_default("span", {
  name: "JoySnackbar",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  display: "inherit",
  flex: "none",
  marginLeft: "auto"
});
var defaultAnchorOrigin = {
  vertical: "bottom",
  horizontal: "right"
};
var Snackbar = React56.forwardRef(function Snackbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySnackbar"
  });
  const {
    anchorOrigin = defaultAnchorOrigin,
    animationDuration = 300,
    autoHideDuration = null,
    color = "neutral",
    children,
    className,
    component,
    disableWindowBlurListener = false,
    endDecorator,
    invertedColors = false,
    onUnmount,
    open,
    size = "md",
    slots = {},
    slotProps,
    startDecorator,
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded45);
  const [exited, setExited] = React56.useState(true);
  const [exiting, setExiting] = React56.useState(false);
  const unmountRef = React56.useRef(onUnmount);
  unmountRef.current = onUnmount;
  React56.useEffect(() => {
    if (open) {
      setExiting(false);
      setExited(false);
    } else {
      setExiting(true);
      const timer = setTimeout(() => {
        var _unmountRef$current;
        setExited(true);
        setExiting(false);
        (_unmountRef$current = unmountRef.current) == null || _unmountRef$current.call(unmountRef);
      }, animationDuration);
      return () => {
        clearTimeout(timer);
      };
    }
    return void 0;
  }, [open, animationDuration]);
  const ownerState = _extends({}, props, {
    anchorOrigin,
    autoHideDuration,
    color,
    animationDuration,
    disableWindowBlurListener,
    invertedColors,
    size,
    variant
  });
  delete ownerState.onUnmount;
  const classes = useUtilityClasses45(ownerState);
  const {
    getRootProps,
    onClickAway
  } = useSnackbar(ownerState);
  const handleClickAway = (event) => {
    if (!exiting) {
      onClickAway(event);
    }
  };
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: SnackbarRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: SnackbarStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: SnackbarEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const SlotClickAway = slots.clickAway || ClickAwayListener;
  if (!open && exited) {
    return null;
  }
  return (0, import_jsx_runtime63.jsx)(SlotClickAway, _extends({
    onClickAway: handleClickAway
  }, typeof (slotProps == null ? void 0 : slotProps.clickAway) === "function" ? slotProps.clickAway(ownerState) : slotProps == null ? void 0 : slotProps.clickAway, {
    children: (0, import_jsx_runtime64.jsxs)(SlotRoot, _extends({}, rootProps, {
      children: [startDecorator && (0, import_jsx_runtime63.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
        children: startDecorator
      })), children, endDecorator && (0, import_jsx_runtime63.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
        children: endDecorator
      }))]
    }))
  }));
});
true ? Snackbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The anchor of the `Snackbar`.
   * On smaller screens, the component grows to occupy all the available width,
   * the horizontal alignment is ignored.
   * @default { vertical: 'bottom', horizontal: 'right' }
   */
  anchorOrigin: import_prop_types48.default.shape({
    horizontal: import_prop_types48.default.oneOf(["center", "left", "right"]).isRequired,
    vertical: import_prop_types48.default.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The duration of the animation in milliseconds. This value is used to control
   * the length of time it takes for an animation to complete one cycle. It is also
   * utilized for delaying the unmount of the component.
   * Provide this value if you have your own animation so that we can precisely
   * time the component's unmount to match your custom animation.
   * @default 300
   */
  animationDuration: import_prop_types48.default.number,
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: import_prop_types48.default.number,
  /**
   * @ignore
   */
  children: import_prop_types48.default.node,
  /**
   * @ignore
   */
  className: import_prop_types48.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types48.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types48.default.elementType,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: import_prop_types48.default.bool,
  /**
   * Element placed after the children.
   */
  endDecorator: import_prop_types48.default.node,
  /**
   * If `true`, the children with an implicit color prop invert their colors to match the component's variant and color.
   * @default false
   */
  invertedColors: import_prop_types48.default.bool,
  /**
   * When displaying multiple consecutive snackbars using a single parent-rendered
   * `<Snackbar/>`, add the `key` prop to ensure independent treatment of each message.
   * For instance, use `<Snackbar key={message} />`. Otherwise, messages might update
   * in place, and features like `autoHideDuration` could be affected.
   */
  key: () => null,
  /**
   * @ignore
   */
  onBlur: import_prop_types48.default.func,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: import_prop_types48.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types48.default.func,
  /**
   * @ignore
   */
  onMouseEnter: import_prop_types48.default.func,
  /**
   * @ignore
   */
  onMouseLeave: import_prop_types48.default.func,
  /**
   * A callback fired when the component is about to be unmounted.
   */
  onUnmount: import_prop_types48.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types48.default.bool.isRequired,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: import_prop_types48.default.number,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types48.default.oneOf(["sm", "md", "lg"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types48.default.shape({
    clickAway: import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.shape({
      children: import_prop_types48.default.element.isRequired,
      disableReactTree: import_prop_types48.default.bool,
      mouseEvent: import_prop_types48.default.oneOf(["onClick", "onMouseDown", "onMouseUp", "onPointerDown", "onPointerUp", false]),
      onClickAway: import_prop_types48.default.func.isRequired,
      touchEvent: import_prop_types48.default.oneOf(["onTouchEnd", "onTouchStart", false])
    })]),
    endDecorator: import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.object]),
    root: import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.object]),
    startDecorator: import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types48.default.shape({
    clickAway: import_prop_types48.default.elementType,
    endDecorator: import_prop_types48.default.elementType,
    root: import_prop_types48.default.elementType,
    startDecorator: import_prop_types48.default.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: import_prop_types48.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types48.default.oneOfType([import_prop_types48.default.arrayOf(import_prop_types48.default.oneOfType([import_prop_types48.default.func, import_prop_types48.default.object, import_prop_types48.default.bool])), import_prop_types48.default.func, import_prop_types48.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types48.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var Snackbar_default = Snackbar;

// node_modules/@mui/joy/Stack/Stack.js
var import_prop_types49 = __toESM(require_prop_types());
var Stack = createStack({
  createStyledComponent: styled_default("div", {
    name: "JoyStack",
    slot: "Root",
    overridesResolver: (props, styles) => styles.root
  }),
  useThemeProps: (inProps) => useThemeProps({
    props: inProps,
    name: "JoyStack"
  })
});
true ? Stack.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types49.default.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types49.default.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: import_prop_types49.default.oneOfType([import_prop_types49.default.oneOf(["column-reverse", "column", "row-reverse", "row"]), import_prop_types49.default.arrayOf(import_prop_types49.default.oneOf(["column-reverse", "column", "row-reverse", "row"])), import_prop_types49.default.object]),
  /**
   * Add an element between each child.
   */
  divider: import_prop_types49.default.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: import_prop_types49.default.oneOfType([import_prop_types49.default.arrayOf(import_prop_types49.default.oneOfType([import_prop_types49.default.number, import_prop_types49.default.string])), import_prop_types49.default.number, import_prop_types49.default.object, import_prop_types49.default.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types49.default.oneOfType([import_prop_types49.default.arrayOf(import_prop_types49.default.oneOfType([import_prop_types49.default.func, import_prop_types49.default.object, import_prop_types49.default.bool])), import_prop_types49.default.func, import_prop_types49.default.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/joy-ui/customization/themed-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: import_prop_types49.default.bool
} : void 0;
var Stack_default = Stack;

// node_modules/@mui/joy/Stack/stackClasses.js
function getStackUtilityClass(slot) {
  return generateUtilityClass2("MuiStack", slot);
}
var stackClasses = generateUtilityClasses2("MuiStack", ["root"]);
var stackClasses_default = stackClasses;

// node_modules/@mui/joy/Switch/Switch.js
var React57 = __toESM(require_react());
var import_prop_types50 = __toESM(require_prop_types());
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var _excluded46 = ["checked", "defaultChecked", "disabled", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "id", "color", "variant", "size", "startDecorator", "endDecorator", "component", "slots", "slotProps"];
var useUtilityClasses46 = (ownerState) => {
  const {
    checked,
    disabled,
    focusVisible,
    readOnly,
    color,
    variant,
    size
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", readOnly && "readOnly", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    thumb: ["thumb", checked && "checked"],
    track: ["track", checked && "checked"],
    action: ["action", focusVisible && "focusVisible"],
    input: ["input"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getSwitchUtilityClass, {});
};
var switchColorVariables = ({
  theme,
  ownerState
}) => (data = {}) => {
  var _theme$variants, _styles$backgroundCol, _styles$backgroundCol2;
  const styles = ((_theme$variants = theme.variants[`${ownerState.variant}${data.state || ""}`]) == null ? void 0 : _theme$variants[ownerState.color]) || {};
  return {
    "--Switch-trackBackground": (_styles$backgroundCol = styles.backgroundColor) != null ? _styles$backgroundCol : theme.vars.palette.background.surface,
    "--Switch-trackColor": styles.color,
    "--Switch-trackBorderColor": ownerState.variant === "outlined" ? styles.borderColor : "currentColor",
    "--Switch-thumbBackground": styles.color,
    "--Switch-thumbColor": (_styles$backgroundCol2 = styles.backgroundColor) != null ? _styles$backgroundCol2 : theme.vars.palette.background.surface
  };
};
var SwitchRoot = styled_default("div", {
  name: "JoySwitch",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants2;
  const getColorVariables = switchColorVariables({
    theme,
    ownerState
  });
  return _extends({
    "--Icon-color": "currentColor",
    "--variant-borderWidth": (_theme$variants2 = theme.variants[ownerState.variant]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2["--variant-borderWidth"],
    "--Switch-trackRadius": theme.vars.radius.xl,
    "--Switch-thumbShadow": ownerState.variant === "soft" ? "none" : "0 0 0 1px var(--Switch-trackBackground)"
  }, ownerState.size === "sm" && {
    "--Switch-trackWidth": "26px",
    "--Switch-trackHeight": "16px",
    "--Switch-thumbSize": "10px",
    fontSize: theme.vars.fontSize.sm,
    gap: "var(--Switch-gap, 6px)"
  }, ownerState.size === "md" && {
    "--Switch-trackWidth": "32px",
    "--Switch-trackHeight": "20px",
    "--Switch-thumbSize": "14px",
    fontSize: theme.vars.fontSize.md,
    gap: "var(--Switch-gap, 8px)"
  }, ownerState.size === "lg" && {
    "--Switch-trackWidth": "40px",
    "--Switch-trackHeight": "24px",
    "--Switch-thumbSize": "18px",
    gap: "var(--Switch-gap, 12px)"
  }, {
    "--unstable_paddingBlock": `max((var(--Switch-trackHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Switch-thumbSize)) / 2, 0px)`,
    "--Switch-thumbRadius": `max(var(--Switch-trackRadius) - var(--unstable_paddingBlock), min(var(--unstable_paddingBlock) / 2, var(--Switch-trackRadius) / 2))`,
    "--Switch-thumbWidth": "var(--Switch-thumbSize)",
    "--Switch-thumbOffset": `max((var(--Switch-trackHeight) - var(--Switch-thumbSize)) / 2, 0px)`
  }, getColorVariables(), {
    "&:hover": {
      "@media (hover: hover)": _extends({}, getColorVariables({
        state: "Hover"
      }))
    },
    [`&.${switchClasses_default.checked}`]: _extends({}, getColorVariables(), {
      "&:hover": {
        "@media (hover: hover)": _extends({}, getColorVariables({
          state: "Hover"
        }))
      }
    }),
    [`&.${switchClasses_default.disabled}`]: _extends({
      pointerEvents: "none",
      color: theme.vars.palette.text.tertiary
    }, getColorVariables({
      state: "Disabled"
    })),
    display: "inline-flex",
    alignItems: "center",
    alignSelf: "center",
    fontFamily: theme.vars.fontFamily.body,
    position: "relative",
    padding: "calc((var(--Switch-thumbSize) / 2) - (var(--Switch-trackHeight) / 2)) calc(-1 * var(--Switch-thumbOffset))",
    backgroundColor: "initial",
    // clear background in case `outlined` variant contain background.
    border: "none",
    margin: "var(--unstable_Switch-margin)"
  });
});
var SwitchAction = styled_default("div", {
  name: "JoySwitch",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})(({
  theme
}) => ({
  borderRadius: "var(--Switch-trackRadius)",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  [theme.focus.selector]: theme.focus.default
}));
var SwitchInput = styled_default("input", {
  name: "JoySwitch",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input
})({
  margin: 0,
  height: "100%",
  width: "100%",
  opacity: 0,
  position: "absolute",
  cursor: "pointer"
});
var SwitchTrack = styled_default("span", {
  name: "JoySwitch",
  slot: "Track",
  overridesResolver: (props, styles) => styles.track
})(({
  theme,
  ownerState
}) => _extends({
  position: "relative",
  color: "var(--Switch-trackColor)",
  height: "var(--Switch-trackHeight)",
  width: "var(--Switch-trackWidth)",
  display: "flex",
  flexShrink: 0,
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  border: "var(--variant-borderWidth, 0px) solid",
  borderColor: "var(--Switch-trackBorderColor)",
  backgroundColor: "var(--Switch-trackBackground)",
  borderRadius: "var(--Switch-trackRadius)",
  fontFamily: theme.vars.fontFamily.body
}, ownerState.size === "sm" && {
  fontSize: theme.vars.fontSize.xs
}, ownerState.size === "md" && {
  fontSize: theme.vars.fontSize.sm
}, ownerState.size === "lg" && {
  fontSize: theme.vars.fontSize.md
}));
var SwitchThumb = styled_default("span", {
  name: "JoySwitch",
  slot: "Thumb",
  overridesResolver: (props, styles) => styles.thumb
})({
  "--Icon-fontSize": "calc(var(--Switch-thumbSize) * 0.75)",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "calc(50% - var(--Switch-trackWidth) / 2 + var(--Switch-thumbWidth) / 2 + var(--Switch-thumbOffset))",
  transform: "translate(-50%, -50%)",
  width: "var(--Switch-thumbWidth)",
  height: "var(--Switch-thumbSize)",
  borderRadius: "var(--Switch-thumbRadius)",
  boxShadow: "var(--Switch-thumbShadow)",
  color: "var(--Switch-thumbColor)",
  backgroundColor: "var(--Switch-thumbBackground)",
  [`&.${switchClasses_default.checked}`]: {
    left: "calc(50% + var(--Switch-trackWidth) / 2 - var(--Switch-thumbWidth) / 2 - var(--Switch-thumbOffset))"
  }
});
var SwitchStartDecorator = styled_default("span", {
  name: "JoySwitch",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  display: "inline-flex"
});
var SwitchEndDecorator = styled_default("span", {
  name: "JoySwitch",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  display: "inline-flex"
});
var Switch = React57.forwardRef(function Switch2(inProps, ref) {
  var _ref, _inProps$size, _inProps$color, _formControl$color, _ref2, _inProps$disabled;
  const props = useThemeProps({
    props: inProps,
    name: "JoySwitch"
  });
  const {
    disabled: disabledExternalProp,
    id,
    color: colorProp,
    variant = "solid",
    size: sizeProp = "md",
    startDecorator,
    endDecorator,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded46);
  const formControl = React57.useContext(FormControlContext_default);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React57.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const size = (_ref = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref : sizeProp;
  const color = (_inProps$color = inProps.color) != null ? _inProps$color : formControl != null && formControl.error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
  const useSwitchProps = _extends({
    disabled: (_ref2 = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref2 : disabledExternalProp
  }, props);
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible,
    readOnly
  } = useSwitch(useSwitchProps);
  const ownerState = _extends({}, props, {
    id,
    checked,
    disabled,
    focusVisible,
    readOnly,
    color: checked ? color || "primary" : color || "neutral",
    variant,
    size
  });
  const classes = useUtilityClasses46(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: SwitchRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    additionalProps: {
      "aria-hidden": true
      // hide the decorator from assistive technology
    },
    className: classes.startDecorator,
    elementType: SwitchStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    additionalProps: {
      "aria-hidden": true
      // hide the decorator from assistive technology
    },
    className: classes.endDecorator,
    elementType: SwitchEndDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotTrack, trackProps] = useSlot("track", {
    className: classes.track,
    elementType: SwitchTrack,
    externalForwardedProps,
    ownerState
  });
  const [SlotThumb, thumbProps] = useSlot("thumb", {
    className: classes.thumb,
    elementType: SwitchThumb,
    externalForwardedProps,
    ownerState
  });
  const [SlotAction, actionProps] = useSlot("action", {
    className: classes.action,
    elementType: SwitchAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotInput, inputProps] = useSlot("input", {
    additionalProps: {
      id: id != null ? id : formControl == null ? void 0 : formControl.htmlFor,
      "aria-describedby": formControl == null ? void 0 : formControl["aria-describedby"]
    },
    className: classes.input,
    elementType: SwitchInput,
    externalForwardedProps,
    getSlotProps: getInputProps,
    ownerState
  });
  return (0, import_jsx_runtime66.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [startDecorator && (0, import_jsx_runtime65.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
      children: typeof startDecorator === "function" ? startDecorator(ownerState) : startDecorator
    })), (0, import_jsx_runtime66.jsxs)(SlotTrack, _extends({}, trackProps, {
      children: [trackProps == null ? void 0 : trackProps.children, (0, import_jsx_runtime65.jsx)(SlotThumb, _extends({}, thumbProps))]
    })), (0, import_jsx_runtime65.jsx)(SlotAction, _extends({}, actionProps, {
      children: (0, import_jsx_runtime65.jsx)(SlotInput, _extends({}, inputProps))
    })), endDecorator && (0, import_jsx_runtime65.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
      children: typeof endDecorator === "function" ? endDecorator(ownerState) : endDecorator
    }))]
  }));
});
true ? Switch.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types50.default.bool,
  /**
   * @ignore
   */
  children: import_prop_types50.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types50.default.oneOfType([import_prop_types50.default.oneOf(["danger", "primary", "success", "warning"]), import_prop_types50.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types50.default.elementType,
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types50.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types50.default.bool,
  /**
   * The element that appears at the end of the switch.
   */
  endDecorator: import_prop_types50.default.oneOfType([import_prop_types50.default.node, import_prop_types50.default.func]),
  /**
   * @ignore
   */
  id: import_prop_types50.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types50.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types50.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types50.default.func,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types50.default.func,
  /**
   * If `true`, the component is read only.
   */
  readOnly: import_prop_types50.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types50.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types50.default.oneOfType([import_prop_types50.default.oneOf(["sm", "md", "lg"]), import_prop_types50.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types50.default.shape({
    action: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object]),
    endDecorator: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object]),
    input: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object]),
    root: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object]),
    startDecorator: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object]),
    thumb: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object]),
    track: import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types50.default.shape({
    action: import_prop_types50.default.elementType,
    endDecorator: import_prop_types50.default.elementType,
    input: import_prop_types50.default.elementType,
    root: import_prop_types50.default.elementType,
    startDecorator: import_prop_types50.default.elementType,
    thumb: import_prop_types50.default.elementType,
    track: import_prop_types50.default.elementType
  }),
  /**
   * The element that appears at the end of the switch.
   */
  startDecorator: import_prop_types50.default.oneOfType([import_prop_types50.default.node, import_prop_types50.default.func]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types50.default.oneOfType([import_prop_types50.default.arrayOf(import_prop_types50.default.oneOfType([import_prop_types50.default.func, import_prop_types50.default.object, import_prop_types50.default.bool])), import_prop_types50.default.func, import_prop_types50.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'solid'
   */
  variant: import_prop_types50.default.oneOfType([import_prop_types50.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types50.default.string])
} : void 0;
var Switch_default = Switch;

// node_modules/@mui/joy/Tab/Tab.js
var React58 = __toESM(require_react());
var import_prop_types51 = __toESM(require_prop_types());

// node_modules/@mui/joy/Tab/tabClasses.js
function getTabUtilityClass(slot) {
  return generateUtilityClass2("MuiTab", slot);
}
var tabListClasses = generateUtilityClasses2("MuiTab", ["root", "disabled", "focusVisible", "selected", "horizontal", "vertical", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var tabClasses_default = tabListClasses;

// node_modules/@mui/joy/Tab/Tab.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var _excluded47 = ["action", "children", "value", "disabled", "onChange", "onClick", "onFocus", "component", "orientation", "variant", "color", "disableIndicator", "indicatorPlacement", "indicatorInset", "slots", "slotProps"];
var useUtilityClasses47 = (ownerState) => {
  const {
    selected,
    disabled,
    focusVisible,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation, disabled && "disabled", focusVisible && "focusVisible", selected && "selected", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`]
  };
  return composeClasses(slots, getTabUtilityClass, {});
};
var TabRoot = styled_default(StyledListItemButton, {
  name: "JoyTab",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState
}) => [
  {
    flex: "initial",
    justifyContent: ownerState.row ? "center" : "initial",
    "--unstable_ListItemDecorator-alignItems": "center",
    "--unstable_offset": "min(calc(-1 * var(--variant-borderWidth, 0px)), -1px)"
  },
  !ownerState.disableIndicator && {
    '&[aria-selected="true"]': {
      "--Tab-indicatorColor": "currentColor",
      zIndex: 1
      // to stay above other tab elements
    },
    // using pseudo element for showing active indicator is best for controlling the size and customization.
    // for example, developers can customize the radius, width or background.
    // (border and box-shadow are not flexible when it comes to customization).
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      margin: "auto",
      background: "var(--Tab-indicatorColor)",
      borderRadius: "var(--Tab-indicatorRadius)"
    }
  },
  // the padding is to account for the indicator's thickness to make the text proportional.
  !ownerState.disableIndicator && ownerState.indicatorPlacement === "bottom" && {
    paddingBottom: "calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px) + var(--Tab-indicatorThickness) - 1px)",
    "&::after": {
      height: "var(--Tab-indicatorThickness)",
      width: "var(--Tab-indicatorSize)",
      left: ownerState.indicatorInset ? "var(--ListItem-paddingLeft)" : "var(--unstable_offset)",
      right: ownerState.indicatorInset ? "var(--ListItem-paddingRight)" : "var(--unstable_offset)",
      bottom: "calc(-1px - var(--unstable_TabList-underlineBottom, 0px))"
    }
  },
  !ownerState.disableIndicator && ownerState.indicatorPlacement === "top" && {
    paddingTop: "calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px) + var(--Tab-indicatorThickness) - 1px)",
    "&::after": {
      height: "var(--Tab-indicatorThickness)",
      width: "var(--Tab-indicatorSize)",
      left: ownerState.indicatorInset ? "var(--ListItem-paddingLeft)" : "var(--unstable_offset)",
      right: ownerState.indicatorInset ? "var(--ListItem-paddingRight)" : "var(--unstable_offset)",
      top: "calc(-1px - var(--unstable_TabList-underlineTop, 0px))"
    }
  },
  !ownerState.disableIndicator && ownerState.indicatorPlacement === "right" && {
    paddingRight: "calc(var(--ListItem-paddingRight) + var(--Tab-indicatorThickness) - 1px)",
    "&::after": {
      height: "var(--Tab-indicatorSize)",
      width: "var(--Tab-indicatorThickness)",
      top: ownerState.indicatorInset ? "var(--ListItem-paddingY)" : "var(--unstable_offset)",
      bottom: ownerState.indicatorInset ? "var(--ListItem-paddingY)" : "var(--unstable_offset)",
      right: "calc(-1px - var(--unstable_TabList-underlineRight, 0px))"
    }
  },
  !ownerState.disableIndicator && ownerState.indicatorPlacement === "left" && {
    paddingLeft: "calc(var(--ListItem-paddingLeft) + var(--Tab-indicatorThickness) - 1px)",
    "&::after": {
      height: "var(--Tab-indicatorSize)",
      width: "var(--Tab-indicatorThickness)",
      top: ownerState.indicatorInset ? "var(--ListItem-paddingY)" : "var(--unstable_offset)",
      bottom: ownerState.indicatorInset ? "var(--ListItem-paddingY)" : "var(--unstable_offset)",
      left: "calc(-1px - var(--unstable_TabList-underlineLeft, 0px))"
    }
  }
]);
var Tab = React58.forwardRef(function Tab2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyTab"
  });
  const row = React58.useContext(RowListContext_default);
  const {
    action,
    children,
    disabled = false,
    component = "button",
    orientation = "horizontal",
    variant = "plain",
    color = "neutral",
    disableIndicator = false,
    indicatorPlacement = row ? "bottom" : "right",
    indicatorInset = false,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded47);
  const tabRef = React58.useRef();
  const handleRef = useForkRef(tabRef, ref);
  const {
    active,
    focusVisible,
    setFocusVisible,
    selected,
    getRootProps
  } = useTab(_extends({}, props, {
    rootRef: handleRef
  }));
  React58.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      tabRef.current.focus();
    }
  }), [setFocusVisible]);
  const ownerState = _extends({}, props, {
    disableIndicator,
    indicatorPlacement,
    indicatorInset,
    orientation,
    row,
    active,
    focusVisible,
    disabled,
    selected,
    variant,
    color
  });
  const classes = useUtilityClasses47(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    elementType: TabRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ownerState,
    className: classes.root
  });
  return (0, import_jsx_runtime67.jsx)(ListItemButtonOrientationContext_default.Provider, {
    value: orientation,
    children: (0, import_jsx_runtime67.jsx)(SlotRoot, _extends({}, rootProps, {
      children
    }))
  });
});
true ? Tab.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.shape({
    current: import_prop_types51.default.shape({
      focusVisible: import_prop_types51.default.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: import_prop_types51.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types51.default.oneOfType([import_prop_types51.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types51.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types51.default.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: import_prop_types51.default.bool,
  /**
   * If `true`, the pseudo element indicator is hidden.
   * @default false
   */
  disableIndicator: import_prop_types51.default.bool,
  /**
   * If `true`, the indicator stay within the padding based on the `Tabs` orientation.
   * @default false
   */
  indicatorInset: import_prop_types51.default.bool,
  /**
   * The indicator's position when the Tab is selected.
   * @default row ? 'bottom' : 'right'
   */
  indicatorPlacement: import_prop_types51.default.oneOf(["bottom", "left", "right", "top"]),
  /**
   * Callback invoked when new value is being set.
   */
  onChange: import_prop_types51.default.func,
  /**
   * @ignore
   */
  onClick: import_prop_types51.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types51.default.func,
  /**
   * The content direction flow.
   * @default 'horizontal'
   */
  orientation: import_prop_types51.default.oneOf(["horizontal", "vertical"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types51.default.shape({
    root: import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types51.default.shape({
    root: import_prop_types51.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types51.default.oneOfType([import_prop_types51.default.arrayOf(import_prop_types51.default.oneOfType([import_prop_types51.default.func, import_prop_types51.default.object, import_prop_types51.default.bool])), import_prop_types51.default.func, import_prop_types51.default.object]),
  /**
   * You can provide your own value. Otherwise, it falls back to the child position index.
   */
  value: import_prop_types51.default.oneOfType([import_prop_types51.default.number, import_prop_types51.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types51.default.oneOfType([import_prop_types51.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types51.default.string])
} : void 0;
var Tab_default = Tab;

// node_modules/@mui/joy/Table/Table.js
var React59 = __toESM(require_react());
var import_prop_types52 = __toESM(require_prop_types());

// node_modules/@mui/joy/Table/tableClasses.js
function getTableUtilityClass(slot) {
  return generateUtilityClass2("MuiTable", slot);
}
var tableClasses = generateUtilityClasses2("MuiTable", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "stickyHeader", "stickyFooter", "noWrap", "hoverRow", "borderAxisNone", "borderAxisX", "borderAxisXBetween", "borderAxisY", "borderAxisYBetween", "borderAxisBoth", "borderAxisBothBetween"]);
var tableClasses_default = tableClasses;

// node_modules/@mui/joy/Table/Table.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var _excluded48 = ["className", "component", "children", "borderAxis", "hoverRow", "noWrap", "size", "variant", "color", "stripe", "stickyHeader", "stickyFooter", "slots", "slotProps"];
var useUtilityClasses48 = (ownerState) => {
  const {
    size,
    variant,
    color,
    borderAxis,
    stickyHeader,
    stickyFooter,
    noWrap,
    hoverRow
  } = ownerState;
  const slots = {
    root: ["root", stickyHeader && "stickyHeader", stickyFooter && "stickyFooter", noWrap && "noWrap", hoverRow && "hoverRow", borderAxis && `borderAxis${capitalize(borderAxis)}`, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTableUtilityClass, {});
};
var tableSelector = {
  /**
   * According to https://www.w3.org/TR/2014/REC-html5-20141028/tabular-data.html#the-tr-element,
   * `tr` can only have `td | th` as children, so using :first-of-type is better than :first-child to prevent emotion SSR warning
   */
  getColumnExceptFirst() {
    return "& tr > *:not(:first-of-type), & tr > th + td, & tr > td + th";
  },
  /**
   * Every cell in the table
   */
  getCell() {
    return "& th, & td";
  },
  /**
   * `th` cell of the table (could exist in the body)
   */
  getHeadCell() {
    return "& th";
  },
  /**
   * Only the cell of `thead`
   */
  getHeaderCell() {
    return "& thead th";
  },
  getHeaderCellOfRow(row) {
    return `& thead tr:nth-of-type(${row}) th`;
  },
  getBottomHeaderCell() {
    return "& thead th:not([colspan])";
  },
  getHeaderNestedFirstColumn() {
    return "& thead tr:not(:first-of-type) th:not([colspan]):first-of-type";
  },
  /**
   * The body cell that contains data
   */
  getDataCell() {
    return "& td";
  },
  getDataCellExceptLastRow() {
    return "& tr:not(:last-of-type) > td";
  },
  /**
   * The body cell either `td` or `th`
   */
  getBodyCellExceptLastRow() {
    return `${this.getDataCellExceptLastRow()}, & tr:not(:last-of-type) > th[scope="row"]`;
  },
  getBodyCellOfRow(row) {
    if (typeof row === "number" && row < 0) {
      return `& tbody tr:nth-last-of-type(${Math.abs(row)}) td, & tbody tr:nth-last-of-type(${Math.abs(row)}) th[scope="row"]`;
    }
    return `& tbody tr:nth-of-type(${row}) td, & tbody tr:nth-of-type(${row}) th[scope="row"]`;
  },
  getBodyRow(row) {
    if (row === void 0) {
      return `& tbody tr`;
    }
    return `& tbody tr:nth-of-type(${row})`;
  },
  getFooterCell() {
    return "& tfoot th, & tfoot td";
  },
  getFooterFirstRowCell() {
    return `& tfoot tr:not(:last-of-type) th, & tfoot tr:not(:last-of-type) td`;
  }
};
var TableRoot = styled_default("table", {
  name: "JoyTable",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _variantStyle$borderC, _theme$variants2, _ownerState$borderAxi, _ownerState$borderAxi2, _ownerState$borderAxi3, _ownerState$borderAxi4;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  return [_extends({
    "--Table-headerUnderlineThickness": "2px",
    "--TableCell-borderColor": (_variantStyle$borderC = variantStyle == null ? void 0 : variantStyle.borderColor) != null ? _variantStyle$borderC : theme.vars.palette.divider,
    "--TableCell-headBackground": `var(--Sheet-background, ${theme.vars.palette.background.surface})`
  }, ownerState.size === "sm" && {
    "--unstable_TableCell-height": "var(--TableCell-height, 32px)",
    "--TableCell-paddingX": "0.25rem",
    "--TableCell-paddingY": "0.25rem"
  }, ownerState.size === "md" && {
    "--unstable_TableCell-height": "var(--TableCell-height, 40px)",
    "--TableCell-paddingX": "0.5rem",
    "--TableCell-paddingY": "0.375rem"
  }, ownerState.size === "lg" && {
    "--unstable_TableCell-height": "var(--TableCell-height, 48px)",
    "--TableCell-paddingX": "0.75rem",
    "--TableCell-paddingY": "0.5rem"
  }, {
    tableLayout: "fixed",
    width: "100%",
    borderSpacing: "0px",
    borderCollapse: "separate",
    borderRadius: "var(--TableCell-cornerRadius, var(--unstable_actionRadius))"
  }, theme.typography[`body-${{
    sm: "xs",
    md: "sm",
    lg: "md"
  }[ownerState.size]}`], (_theme$variants2 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants2[ownerState.color], {
    "& caption": {
      color: theme.vars.palette.text.tertiary,
      padding: "calc(2 * var(--TableCell-paddingY)) var(--TableCell-paddingX)"
    },
    [tableSelector.getDataCell()]: _extends({
      padding: "var(--TableCell-paddingY) var(--TableCell-paddingX)",
      height: "var(--unstable_TableCell-height)",
      borderColor: "var(--TableCell-borderColor)",
      // must come after border bottom
      backgroundColor: "var(--TableCell-dataBackground)"
    }, ownerState.noWrap && {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }),
    [tableSelector.getHeadCell()]: {
      textAlign: "left",
      padding: "var(--TableCell-paddingY) var(--TableCell-paddingX)",
      backgroundColor: "var(--TableCell-headBackground)",
      // use `background-color` in case the Sheet has gradient background
      height: "var(--unstable_TableCell-height)",
      fontWeight: theme.vars.fontWeight.lg,
      borderColor: "var(--TableCell-borderColor)",
      color: theme.vars.palette.text.secondary,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    [tableSelector.getHeaderCell()]: {
      verticalAlign: "bottom",
      // Automatic radius adjustment with Sheet
      "&:first-of-type": {
        borderTopLeftRadius: "var(--TableCell-cornerRadius, var(--unstable_actionRadius))"
      },
      "&:last-of-type": {
        borderTopRightRadius: "var(--TableCell-cornerRadius, var(--unstable_actionRadius))"
      }
    },
    "& tfoot tr > *": {
      backgroundColor: `var(--TableCell-footBackground, ${theme.vars.palette.background.level1})`,
      // Automatic radius adjustment with Sheet
      "&:first-of-type": {
        borderBottomLeftRadius: "var(--TableCell-cornerRadius, var(--unstable_actionRadius))"
      },
      "&:last-of-type": {
        borderBottomRightRadius: "var(--TableCell-cornerRadius, var(--unstable_actionRadius))"
      }
    }
  }), (((_ownerState$borderAxi = ownerState.borderAxis) == null ? void 0 : _ownerState$borderAxi.startsWith("x")) || ((_ownerState$borderAxi2 = ownerState.borderAxis) == null ? void 0 : _ownerState$borderAxi2.startsWith("both"))) && {
    // insert border between rows
    [tableSelector.getHeaderCell()]: {
      borderBottomWidth: 1,
      borderBottomStyle: "solid"
    },
    [tableSelector.getBottomHeaderCell()]: {
      borderBottomWidth: "var(--Table-headerUnderlineThickness)",
      borderBottomStyle: "solid"
    },
    [tableSelector.getBodyCellExceptLastRow()]: {
      borderBottomWidth: 1,
      borderBottomStyle: "solid"
    },
    [tableSelector.getFooterCell()]: {
      borderTopWidth: 1,
      borderTopStyle: "solid"
    }
  }, (((_ownerState$borderAxi3 = ownerState.borderAxis) == null ? void 0 : _ownerState$borderAxi3.startsWith("y")) || ((_ownerState$borderAxi4 = ownerState.borderAxis) == null ? void 0 : _ownerState$borderAxi4.startsWith("both"))) && {
    // insert border between columns
    [`${tableSelector.getColumnExceptFirst()}, ${tableSelector.getHeaderNestedFirstColumn()}`]: {
      borderLeftWidth: 1,
      borderLeftStyle: "solid"
    }
  }, (ownerState.borderAxis === "x" || ownerState.borderAxis === "both") && {
    // insert border at the top of header and bottom of body
    [tableSelector.getHeaderCellOfRow(1)]: {
      borderTopWidth: 1,
      borderTopStyle: "solid"
    },
    [tableSelector.getBodyCellOfRow(-1)]: {
      borderBottomWidth: 1,
      borderBottomStyle: "solid"
    },
    [tableSelector.getFooterCell()]: {
      borderBottomWidth: 1,
      borderBottomStyle: "solid"
    }
  }, (ownerState.borderAxis === "y" || ownerState.borderAxis === "both") && {
    // insert border on the left of first column and right of the last column
    "& tr > *:first-of-type": {
      borderLeftWidth: 1,
      borderLeftStyle: "solid"
    },
    "& tr > *:last-of-type:not(:first-of-type)": {
      borderRightWidth: 1,
      borderRightStyle: "solid"
    }
  }, ownerState.stripe && {
    [tableSelector.getBodyRow(ownerState.stripe)]: {
      // For customization, a table cell can look for this variable with a fallback value.
      background: `var(--TableRow-stripeBackground, ${theme.vars.palette.background.level2})`,
      color: theme.vars.palette.text.primary
    }
  }, ownerState.hoverRow && {
    [tableSelector.getBodyRow()]: {
      "&:hover": {
        background: `var(--TableRow-hoverBackground, ${theme.vars.palette.background.level3})`
      }
    }
  }, ownerState.stickyHeader && {
    // The column header
    [tableSelector.getHeaderCell()]: {
      position: "sticky",
      top: 0,
      zIndex: theme.vars.zIndex.table
    },
    [tableSelector.getHeaderCellOfRow(2)]: {
      // support upto 2 rows for the sticky header
      top: "var(--unstable_TableCell-height)"
    }
  }, ownerState.stickyFooter && {
    // The column header
    [tableSelector.getFooterCell()]: {
      position: "sticky",
      bottom: 0,
      zIndex: theme.vars.zIndex.table,
      color: theme.vars.palette.text.secondary,
      fontWeight: theme.vars.fontWeight.lg
    },
    [tableSelector.getFooterFirstRowCell()]: {
      // support upto 2 rows for the sticky footer
      bottom: "var(--unstable_TableCell-height)"
    }
  }];
});
var Table = React59.forwardRef(function Table2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyTable"
  });
  const {
    className,
    component,
    children,
    borderAxis = "xBetween",
    hoverRow = false,
    noWrap = false,
    size = "md",
    variant = "plain",
    color = "neutral",
    stripe,
    stickyHeader = false,
    stickyFooter = false,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded48);
  const ownerState = _extends({}, props, {
    borderAxis,
    hoverRow,
    noWrap,
    component,
    size,
    color,
    variant,
    stripe,
    stickyHeader,
    stickyFooter
  });
  const classes = useUtilityClasses48(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: TableRoot,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime68.jsx)(TypographyInheritContext.Provider, {
    value: true,
    children: (0, import_jsx_runtime68.jsx)(SlotRoot, _extends({}, rootProps, {
      children
    }))
  });
});
true ? Table.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The axis to display a border on the table cell.
   * @default 'xBetween'
   */
  borderAxis: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["both", "bothBetween", "none", "x", "xBetween", "y", "yBetween"]), import_prop_types52.default.string]),
  /**
   * Children of the table
   */
  children: import_prop_types52.default.node,
  /**
   * @ignore
   */
  className: import_prop_types52.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types52.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types52.default.elementType,
  /**
   * If `true`, the table row will shade on hover.
   * @default false
   */
  hoverRow: import_prop_types52.default.bool,
  /**
   * If `true`, the body cells will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note: Header cells are always truncated with overflow ellipsis.
   *
   * @default false
   */
  noWrap: import_prop_types52.default.bool,
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["sm", "md", "lg"]), import_prop_types52.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types52.default.shape({
    root: import_prop_types52.default.oneOfType([import_prop_types52.default.func, import_prop_types52.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types52.default.shape({
    root: import_prop_types52.default.elementType
  }),
  /**
   * If `true`, the footer always appear at the bottom of the overflow table.
   *
   * ⚠️ It doesn't work with IE11.
   * @default false
   */
  stickyFooter: import_prop_types52.default.bool,
  /**
   * If `true`, the header always appear at the top of the overflow table.
   *
   * ⚠️ It doesn't work with IE11.
   * @default false
   */
  stickyHeader: import_prop_types52.default.bool,
  /**
   * The odd or even row of the table body will have subtle background color.
   */
  stripe: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["odd", "even"]), import_prop_types52.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types52.default.oneOfType([import_prop_types52.default.arrayOf(import_prop_types52.default.oneOfType([import_prop_types52.default.func, import_prop_types52.default.object, import_prop_types52.default.bool])), import_prop_types52.default.func, import_prop_types52.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types52.default.oneOfType([import_prop_types52.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types52.default.string])
} : void 0;
var Table_default = Table;

// node_modules/@mui/joy/TabList/TabList.js
var React61 = __toESM(require_react());
var import_prop_types53 = __toESM(require_prop_types());

// node_modules/@mui/joy/Tabs/SizeTabsContext.js
var React60 = __toESM(require_react());
var SizeTabsContext = React60.createContext("md");
var SizeTabsContext_default = SizeTabsContext;

// node_modules/@mui/joy/TabList/tabListClasses.js
function getTabListUtilityClass(slot) {
  return generateUtilityClass2("MuiTabList", slot);
}
var tabListClasses2 = generateUtilityClasses2("MuiTabList", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg"]);
var tabListClasses_default = tabListClasses2;

// node_modules/@mui/joy/TabList/TabList.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var _excluded49 = ["component", "children", "variant", "color", "size", "disableUnderline", "underlinePlacement", "tabFlex", "sticky", "slots", "slotProps"];
var useUtilityClasses49 = (ownerState) => {
  const {
    orientation,
    size,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTabListUtilityClass, {});
};
var TabListRoot = styled_default(StyledList, {
  name: "JoyTabList",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  return _extends({
    "--List-gap": "0px",
    "--ListDivider-gap": "0px",
    "--ListItem-paddingX": "var(--Tabs-spacing)",
    "--ListItem-gap": "0.375rem",
    // the `var(--unknown,)` is a workaround because emotion does not support space toggle.
    "--unstable_TabList-hasUnderline": ownerState.disableUnderline ? "var(--unknown,)" : "initial"
  }, scopedVariables, {
    flexGrow: "initial",
    flexDirection: ownerState.orientation === "vertical" ? "column" : "row",
    borderRadius: `var(--List-radius, 0px)`,
    padding: `var(--List-padding, 0px)`,
    zIndex: 1
  }, ownerState.sticky && {
    // sticky in list item can be found in grouped options
    position: "sticky",
    top: ownerState.sticky === "top" ? "calc(-1 * var(--Tabs-padding, 0px))" : "initial",
    bottom: ownerState.sticky === "bottom" ? "calc(-1 * var(--Tabs-padding, 0px))" : "initial",
    backgroundColor: (variantStyle == null ? void 0 : variantStyle.backgroundColor) || `var(--TabList-stickyBackground, ${theme.vars.palette.background.body})`
  }, !ownerState.disableUnderline && _extends({}, ownerState.underlinePlacement === "bottom" && {
    "--unstable_TabList-underlineBottom": "1px",
    paddingBottom: 1,
    boxShadow: `inset 0 -1px ${theme.vars.palette.divider}`
  }, ownerState.underlinePlacement === "top" && {
    "--unstable_TabList-underlineTop": "1px",
    paddingTop: 1,
    boxShadow: `inset 0 1px ${theme.vars.palette.divider}`
  }, ownerState.underlinePlacement === "right" && {
    "--unstable_TabList-underlineRight": "1px",
    paddingRight: 1,
    boxShadow: `inset -1px 0 ${theme.vars.palette.divider}`
  }, ownerState.underlinePlacement === "left" && {
    "--unstable_TabList-underlineLeft": "1px",
    paddingLeft: 1,
    boxShadow: `inset 1px 0 ${theme.vars.palette.divider}`
  }), ownerState.tabFlex && {
    [`& .${tabClasses_default.root}`]: {
      flex: ownerState.tabFlex
    }
  });
});
var TabList = React61.forwardRef(function TabList2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyTabList"
  });
  const tabsSize = React61.useContext(SizeTabsContext_default);
  const {
    isRtl,
    orientation,
    getRootProps,
    contextValue
  } = useTabsList({
    rootRef: ref
  });
  const {
    component = "div",
    children,
    variant = "plain",
    color = "neutral",
    size: sizeProp,
    disableUnderline = false,
    underlinePlacement = orientation === "horizontal" ? "bottom" : "right",
    tabFlex,
    sticky,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded49);
  const size = sizeProp != null ? sizeProp : tabsSize;
  const ownerState = _extends({}, props, {
    isRtl,
    orientation,
    variant,
    color,
    size,
    sticky,
    tabFlex,
    nesting: false,
    disableUnderline,
    underlinePlacement
  });
  const classes = useUtilityClasses49(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    elementType: TabListRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    ownerState,
    className: classes.root
  });
  return (
    // @ts-ignore conflicted ref types
    (0, import_jsx_runtime69.jsx)(SlotRoot, _extends({}, rootProps, {
      children: (0, import_jsx_runtime69.jsx)(TabsListProvider, {
        value: contextValue,
        children: (0, import_jsx_runtime69.jsx)(ListProvider_default, {
          row: orientation === "horizontal",
          nested: true,
          children
        })
      })
    }))
  );
});
true ? TabList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Used to render icon or text elements inside the TabList if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types53.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types53.default.oneOfType([import_prop_types53.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types53.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types53.default.elementType,
  /**
   * If `true`, the TabList's underline will disappear.
   * @default false
   */
  disableUnderline: import_prop_types53.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types53.default.oneOfType([import_prop_types53.default.oneOf(["sm", "md", "lg"]), import_prop_types53.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types53.default.shape({
    root: import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types53.default.shape({
    root: import_prop_types53.default.elementType
  }),
  /**
   * If provided, the TabList will have postion `sticky`.
   */
  sticky: import_prop_types53.default.oneOf(["bottom", "top"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types53.default.oneOfType([import_prop_types53.default.arrayOf(import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object, import_prop_types53.default.bool])), import_prop_types53.default.func, import_prop_types53.default.object]),
  /**
   * The flex value of the Tab.
   * @example tabFlex={1} will set flex: '1 1 auto' on each tab (stretch the tab to equally fill the available space).
   */
  tabFlex: import_prop_types53.default.oneOfType([import_prop_types53.default.number, import_prop_types53.default.string]),
  /**
   * The placement of the TabList's underline.
   * @default orientation === 'horizontal' ? 'bottom' : 'right'
   */
  underlinePlacement: import_prop_types53.default.oneOf(["bottom", "left", "right", "top"]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types53.default.oneOfType([import_prop_types53.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types53.default.string])
} : void 0;
var TabList_default = TabList;

// node_modules/@mui/joy/TabPanel/TabPanel.js
var React62 = __toESM(require_react());
var import_prop_types54 = __toESM(require_prop_types());

// node_modules/@mui/joy/TabPanel/tabPanelClasses.js
function getTabPanelUtilityClass(slot) {
  return generateUtilityClass2("MuiTabPanel", slot);
}
var tabListClasses3 = generateUtilityClasses2("MuiTabPanel", ["root", "hidden", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var tabPanelClasses_default = tabListClasses3;

// node_modules/@mui/joy/TabPanel/TabPanel.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var _excluded50 = ["children", "value", "component", "color", "variant", "size", "slots", "slotProps", "keepMounted"];
var useUtilityClasses50 = (ownerState) => {
  const {
    hidden,
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", hidden && "hidden", size && `size${capitalize(size)}`, orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTabPanelUtilityClass, {});
};
var TabPanelRoot = styled_default("div", {
  name: "JoyTabPanel",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants;
  return _extends({
    display: ownerState.hidden ? "none" : "block",
    padding: "var(--Tabs-spacing)",
    flexGrow: 1,
    fontFamily: theme.vars.fontFamily.body
  }, theme.typography[`body-${ownerState.size}`], (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var TabPanel = React62.forwardRef(function TabPanel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyTabPanel"
  });
  const {
    orientation
  } = useTabsContext() || {
    orientation: "horizontal"
  };
  const tabsSize = React62.useContext(SizeTabsContext_default);
  const {
    children,
    value = 0,
    component,
    color = "neutral",
    variant = "plain",
    size: sizeProp,
    slots = {},
    slotProps = {},
    keepMounted = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded50);
  const {
    hidden,
    getRootProps
  } = useTabPanel(_extends({}, props, {
    value
  }));
  const size = sizeProp != null ? sizeProp : tabsSize;
  const ownerState = _extends({}, props, {
    orientation,
    hidden,
    size,
    color,
    variant
  });
  const classes = useUtilityClasses50(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    elementType: TabPanelRoot,
    getSlotProps: getRootProps,
    externalForwardedProps,
    additionalProps: {
      role: "tabpanel",
      ref,
      as: component
    },
    ownerState,
    className: classes.root
  });
  if (keepMounted) {
    return (0, import_jsx_runtime70.jsx)(SlotRoot, _extends({}, rootProps, {
      children
    }));
  }
  return (0, import_jsx_runtime70.jsx)(SlotRoot, _extends({}, rootProps, {
    children: !hidden && children
  }));
});
true ? TabPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types54.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types54.default.oneOfType([import_prop_types54.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types54.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types54.default.elementType,
  /**
   * Always keep the children in the DOM.
   * @default false
   */
  keepMounted: import_prop_types54.default.bool,
  /**
   * The size of the component.
   */
  size: import_prop_types54.default.oneOfType([import_prop_types54.default.oneOf(["sm", "md", "lg"]), import_prop_types54.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types54.default.shape({
    root: import_prop_types54.default.oneOfType([import_prop_types54.default.func, import_prop_types54.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types54.default.shape({
    root: import_prop_types54.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types54.default.oneOfType([import_prop_types54.default.arrayOf(import_prop_types54.default.oneOfType([import_prop_types54.default.func, import_prop_types54.default.object, import_prop_types54.default.bool])), import_prop_types54.default.func, import_prop_types54.default.object]),
  /**
   * The value of the TabPanel. It will be shown when the Tab with the corresponding value is selected.
   * @default 0
   */
  value: import_prop_types54.default.oneOfType([import_prop_types54.default.number, import_prop_types54.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types54.default.oneOfType([import_prop_types54.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types54.default.string])
} : void 0;
var TabPanel_default = TabPanel;

// node_modules/@mui/joy/Tabs/Tabs.js
var React63 = __toESM(require_react());
var import_prop_types55 = __toESM(require_prop_types());

// node_modules/@mui/joy/Tabs/tabsClasses.js
function getTabsUtilityClass(slot) {
  return generateUtilityClass2("MuiTabs", slot);
}
var tabListClasses4 = generateUtilityClasses2("MuiTabs", ["root", "horizontal", "vertical", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg"]);
var tabsClasses_default = tabListClasses4;

// node_modules/@mui/joy/Tabs/Tabs.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var _excluded51 = ["children", "value", "defaultValue", "orientation", "direction", "component", "onChange", "selectionFollowsFocus", "variant", "color", "size", "slots", "slotProps"];
var useUtilityClasses51 = (ownerState) => {
  const {
    orientation,
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTabsUtilityClass, {});
};
var TabsRoot = styled_default("div", {
  name: "JoyTabs",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants, _theme$variants2;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  const {
    bgcolor,
    backgroundColor,
    background,
    p,
    padding
  } = resolveSxValue({
    theme,
    ownerState
  }, ["bgcolor", "backgroundColor", "background", "p", "padding"]);
  const resolvedBg = getPath(theme, `palette.${bgcolor}`) || bgcolor || getPath(theme, `palette.${backgroundColor}`) || backgroundColor || background || (variantStyle == null ? void 0 : variantStyle.backgroundColor) || (variantStyle == null ? void 0 : variantStyle.background) || theme.vars.palette.background.surface;
  return _extends({}, ownerState.size === "sm" && {
    "--Tabs-spacing": "0.75rem"
  }, ownerState.size === "md" && {
    "--Tabs-spacing": "1rem"
  }, ownerState.size === "lg" && {
    "--Tabs-spacing": "1.25rem"
  }, {
    "--Tab-indicatorThickness": "2px",
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    "--TabList-stickyBackground": resolvedBg === "transparent" ? "initial" : resolvedBg,
    // for sticky TabList
    display: "flex",
    flexDirection: "column"
  }, ownerState.orientation === "vertical" && {
    flexDirection: "row"
  }, {
    backgroundColor: theme.vars.palette.background.surface,
    position: "relative"
  }, theme.typography[`body-${ownerState.size}`], (_theme$variants2 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants2[ownerState.color], p !== void 0 && {
    "--Tabs-padding": p
  }, padding !== void 0 && {
    "--Tabs-padding": padding
  });
});
var Tabs = React63.forwardRef(function Tabs2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyTabs"
  });
  const {
    children,
    value: valueProp,
    defaultValue: defaultValueProp,
    orientation = "horizontal",
    direction = "ltr",
    component,
    variant = "plain",
    color = "neutral",
    size = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded51);
  const defaultValue = defaultValueProp || (valueProp === void 0 ? 0 : void 0);
  const {
    contextValue
  } = useTabs(_extends({}, props, {
    orientation,
    defaultValue
  }));
  const ownerState = _extends({}, props, {
    orientation,
    direction,
    variant,
    color,
    size
  });
  const classes = useUtilityClasses51(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    elementType: TabsRoot,
    externalForwardedProps,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: classes.root
  });
  return (
    // @ts-ignore `defaultValue` between HTMLDiv and TabsProps is conflicted.
    (0, import_jsx_runtime71.jsx)(SlotRoot, _extends({}, rootProps, {
      children: (0, import_jsx_runtime71.jsx)(TabsProvider, {
        value: contextValue,
        children: (0, import_jsx_runtime71.jsx)(SizeTabsContext_default.Provider, {
          value: size,
          children
        })
      })
    }))
  );
});
true ? Tabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: import_prop_types55.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types55.default.oneOfType([import_prop_types55.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types55.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types55.default.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * The direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types55.default.oneOf(["ltr", "rtl"]),
  /**
   * Callback invoked when new value is being set.
   */
  onChange: import_prop_types55.default.func,
  /**
   * The component orientation (layout flow direction).
   * @default 'horizontal'
   */
  orientation: import_prop_types55.default.oneOf(["horizontal", "vertical"]),
  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: import_prop_types55.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types55.default.oneOfType([import_prop_types55.default.oneOf(["sm", "md", "lg"]), import_prop_types55.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types55.default.shape({
    root: import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types55.default.shape({
    root: import_prop_types55.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types55.default.oneOfType([import_prop_types55.default.arrayOf(import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object, import_prop_types55.default.bool])), import_prop_types55.default.func, import_prop_types55.default.object]),
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this prop to `null`.
   */
  value: import_prop_types55.default.oneOfType([import_prop_types55.default.number, import_prop_types55.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types55.default.oneOfType([import_prop_types55.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types55.default.string])
} : void 0;
var Tabs_default = Tabs;

// node_modules/@mui/joy/Textarea/Textarea.js
var React64 = __toESM(require_react());
var import_prop_types56 = __toESM(require_prop_types());

// node_modules/@mui/joy/Textarea/textareaClasses.js
function getTextareaUtilityClass(slot) {
  return generateUtilityClass2("MuiTextarea", slot);
}
var textareaClasses = generateUtilityClasses2("MuiTextarea", ["root", "textarea", "startDecorator", "endDecorator", "formControl", "disabled", "error", "focused", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft"]);
var textareaClasses_default = textareaClasses;

// node_modules/@mui/joy/Textarea/Textarea.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var _excluded52 = ["propsToForward", "rootStateClasses", "inputStateClasses", "getRootProps", "getInputProps", "formControl", "focused", "error", "disabled", "size", "color", "variant", "startDecorator", "endDecorator", "minRows", "maxRows", "component", "slots", "slotProps"];
var useUtilityClasses52 = (ownerState) => {
  const {
    disabled,
    variant,
    color,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    textarea: ["textarea"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return composeClasses(slots, getTextareaUtilityClass, {});
};
var TextareaRoot = styled_default("div", {
  name: "JoyTextarea",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$variants, _theme$vars$palette, _theme$vars$palette2, _variantStyle$backgro, _theme$variants2, _theme$variants3;
  const variantStyle = (_theme$variants = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants[ownerState.color];
  return [_extends({
    "--Textarea-radius": theme.vars.radius.sm,
    "--Textarea-gap": "0.5rem",
    "--Textarea-placeholderColor": "inherit",
    "--Textarea-placeholderOpacity": 0.64,
    "--Textarea-decoratorColor": theme.vars.palette.text.icon,
    "--Textarea-focused": "0",
    "--Textarea-focusedThickness": theme.vars.focus.thickness,
    "--Textarea-focusedHighlight": (_theme$vars$palette = theme.vars.palette[ownerState.color === "neutral" ? "primary" : ownerState.color]) == null ? void 0 : _theme$vars$palette[500],
    '&:not([data-inverted-colors="false"])': _extends({}, ownerState.instanceColor && {
      "--_Textarea-focusedHighlight": (_theme$vars$palette2 = theme.vars.palette[ownerState.instanceColor === "neutral" ? "primary" : ownerState.instanceColor]) == null ? void 0 : _theme$vars$palette2[500]
    }, {
      "--Textarea-focusedHighlight": `var(--_Textarea-focusedHighlight, ${theme.vars.palette.focusVisible})`
    })
  }, ownerState.size === "sm" && {
    "--Textarea-minHeight": "2rem",
    "--Textarea-paddingBlock": "calc(0.375rem - 0.5px - var(--variant-borderWidth, 0px))",
    // to match Input because <textarea> does not center the text at the middle like <input>
    "--Textarea-paddingInline": "0.5rem",
    "--Textarea-decoratorChildHeight": "min(1.5rem, var(--Textarea-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl
  }, ownerState.size === "md" && {
    "--Textarea-minHeight": "2.25rem",
    "--Textarea-paddingBlock": "calc(0.375rem - var(--variant-borderWidth, 0px))",
    "--Textarea-paddingInline": "0.75rem",
    "--Textarea-decoratorChildHeight": "min(1.75rem, var(--Textarea-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, ownerState.size === "lg" && {
    "--Textarea-minHeight": "3rem",
    "--Textarea-paddingBlock": "calc(0.75rem - var(--variant-borderWidth, 0px))",
    "--Textarea-paddingInline": "1rem",
    "--Textarea-gap": "0.75rem",
    "--Textarea-decoratorChildHeight": "min(2.375rem, var(--Textarea-minHeight))",
    "--Icon-fontSize": theme.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--_Textarea-paddingBlock": "max((var(--Textarea-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Textarea-decoratorChildHeight)) / 2, 0px)",
    "--Textarea-decoratorChildRadius": "max(var(--Textarea-radius) - var(--variant-borderWidth, 0px) - var(--_Textarea-paddingBlock), min(var(--_Textarea-paddingBlock) + var(--variant-borderWidth, 0px), var(--Textarea-radius) / 2))",
    "--Button-minHeight": "var(--Textarea-decoratorChildHeight)",
    "--Button-paddingBlock": "0px",
    // to ensure that the height of the button is equal to --Button-minHeight
    "--IconButton-size": "var(--Textarea-decoratorChildHeight)",
    "--Button-radius": "var(--Textarea-decoratorChildRadius)",
    "--IconButton-radius": "var(--Textarea-decoratorChildRadius)",
    boxSizing: "border-box"
  }, ownerState.variant !== "plain" && {
    boxShadow: theme.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Textarea-minHeight)",
    cursor: "text",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    paddingInlineStart: `var(--Textarea-paddingInline)`,
    // the paddingInlineEnd is added to the textarea. It looks better when the scrollbar appears.
    paddingBlock: "var(--Textarea-paddingBlock)",
    borderRadius: "var(--Textarea-radius)"
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
      boxShadow: `var(--Textarea-focusedInset, inset) 0 0 0 calc(var(--Textarea-focused) * var(--Textarea-focusedThickness)) var(--Textarea-focusedHighlight)`
    }
  }), {
    "&:hover": _extends({}, (_theme$variants2 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants2[ownerState.color], {
      backgroundColor: null,
      // it is not common to change background on hover for Textarea
      cursor: "text"
    }),
    [`&.${textareaClasses_default.disabled}`]: (_theme$variants3 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants3[ownerState.color],
    "&:focus-within::before": {
      "--Textarea-focused": "1"
    }
  }];
});
var TextareaInput = styled_default(TextareaAutosize, {
  name: "JoyTextarea",
  slot: "Textarea",
  overridesResolver: (props, styles) => styles.textarea
})({
  resize: "none",
  border: "none",
  // remove the native textarea width
  minWidth: 0,
  // remove the native textarea width
  outline: 0,
  // remove the native textarea outline
  padding: 0,
  // remove the native textarea padding
  paddingInlineEnd: `var(--Textarea-paddingInline)`,
  flex: "auto",
  alignSelf: "stretch",
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  "&::-webkit-input-placeholder": {
    color: "var(--Textarea-placeholderColor)",
    opacity: "var(--Textarea-placeholderOpacity)"
  },
  "&::-moz-placeholder": {
    // Firefox 19+
    color: "var(--Textarea-placeholderColor)",
    opacity: "var(--Textarea-placeholderOpacity)"
  },
  "&:-ms-input-placeholder": {
    // IE11
    color: "var(--Textarea-placeholderColor)",
    opacity: "var(--Textarea-placeholderOpacity)"
  },
  "&::-ms-input-placeholder": {
    // Edge
    color: "var(--Textarea-placeholderColor)",
    opacity: "var(--Textarea-placeholderOpacity)"
  }
});
var TextareaStartDecorator = styled_default("div", {
  name: "JoyTextarea",
  slot: "StartDecorator",
  overridesResolver: (props, styles) => styles.startDecorator
})({
  display: "flex",
  marginInlineStart: "calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))",
  marginInlineEnd: "var(--Textarea-paddingBlock)",
  marginBlockEnd: "var(--Textarea-gap)",
  color: "var(--Textarea-decoratorColor)",
  cursor: "initial"
});
var TextareaEndDecorator = styled_default("div", {
  name: "JoyTextarea",
  slot: "EndDecorator",
  overridesResolver: (props, styles) => styles.endDecorator
})({
  display: "flex",
  marginInlineStart: "calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))",
  marginInlineEnd: "var(--Textarea-paddingBlock)",
  marginBlockStart: "var(--Textarea-gap)",
  color: "var(--Textarea-decoratorColor)",
  cursor: "initial"
});
var Textarea = React64.forwardRef(function Textarea2(inProps, ref) {
  var _ref, _inProps$disabled, _ref2, _inProps$error, _ref3, _inProps$size, _inProps$color, _formControl$color;
  const props = useThemeProps({
    props: inProps,
    name: "JoyTextarea"
  });
  const _useForwardedInput = useForwardedInput(props, textareaClasses_default), {
    propsToForward,
    rootStateClasses,
    inputStateClasses,
    getRootProps,
    getInputProps,
    formControl,
    focused,
    error: errorProp = false,
    disabled: disabledProp = false,
    size: sizeProp = "md",
    color: colorProp = "neutral",
    variant = "outlined",
    startDecorator,
    endDecorator,
    minRows,
    maxRows,
    component,
    slots = {},
    slotProps = {}
  } = _useForwardedInput, other = _objectWithoutPropertiesLoose(_useForwardedInput, _excluded52);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React64.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const disabled = (_ref = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref : disabledProp;
  const error = (_ref2 = (_inProps$error = inProps.error) != null ? _inProps$error : formControl == null ? void 0 : formControl.error) != null ? _ref2 : errorProp;
  const size = (_ref3 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref3 : sizeProp;
  const color = (_inProps$color = inProps.color) != null ? _inProps$color : error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp;
  const ownerState = _extends({
    instanceColor: error ? "danger" : inProps.color
  }, props, {
    color,
    disabled,
    error,
    focused,
    size,
    variant
  });
  const classes = useUtilityClasses52(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: [classes.root, rootStateClasses],
    elementType: TextareaRoot,
    externalForwardedProps,
    getSlotProps: getRootProps,
    ownerState
  });
  const [SlotTextarea, textareaProps] = useSlot("textarea", {
    additionalProps: {
      id: formControl == null ? void 0 : formControl.htmlFor,
      "aria-describedby": formControl == null ? void 0 : formControl["aria-describedby"]
    },
    className: [classes.textarea, inputStateClasses],
    elementType: TextareaInput,
    internalForwardedProps: _extends({}, propsToForward, {
      minRows,
      maxRows
    }),
    externalForwardedProps,
    getSlotProps: getInputProps,
    ownerState
  });
  const [SlotStartDecorator, startDecoratorProps] = useSlot("startDecorator", {
    className: classes.startDecorator,
    elementType: TextareaStartDecorator,
    externalForwardedProps,
    ownerState
  });
  const [SlotEndDecorator, endDecoratorProps] = useSlot("endDecorator", {
    className: classes.endDecorator,
    elementType: TextareaEndDecorator,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime73.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [startDecorator && (0, import_jsx_runtime72.jsx)(SlotStartDecorator, _extends({}, startDecoratorProps, {
      children: startDecorator
    })), (0, import_jsx_runtime72.jsx)(SlotTextarea, _extends({}, textareaProps)), endDecorator && (0, import_jsx_runtime72.jsx)(SlotEndDecorator, _extends({}, endDecoratorProps, {
      children: endDecorator
    }))]
  }));
});
true ? Textarea.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: import_prop_types56.default.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types56.default.oneOfType([import_prop_types56.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types56.default.string]),
  /**
   * @ignore
   */
  disabled: import_prop_types56.default.bool,
  /**
   * Trailing adornment for this input.
   */
  endDecorator: import_prop_types56.default.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   * @default false
   */
  error: import_prop_types56.default.bool,
  /**
   * Maximum number of rows to display.
   */
  maxRows: import_prop_types56.default.oneOfType([import_prop_types56.default.number, import_prop_types56.default.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: import_prop_types56.default.oneOfType([import_prop_types56.default.number, import_prop_types56.default.string]),
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types56.default.oneOfType([import_prop_types56.default.oneOf(["sm", "md", "lg"]), import_prop_types56.default.string]),
  /**
   * Leading adornment for this input.
   */
  startDecorator: import_prop_types56.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types56.default.oneOfType([import_prop_types56.default.arrayOf(import_prop_types56.default.oneOfType([import_prop_types56.default.func, import_prop_types56.default.object, import_prop_types56.default.bool])), import_prop_types56.default.func, import_prop_types56.default.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types56.default.oneOfType([import_prop_types56.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types56.default.string])
} : void 0;
var Textarea_default = Textarea;

// node_modules/@mui/joy/TextField/TextField.js
var TextField_default = function DeletedTextField() {
  throw new Error(["MUI: `TextField` component has been removed in favor of Input composition.", "", "To migrate, run `npx @mui/codemod v5.0.0/joy-text-field-to-input <path>`.", "For the codemod detail, visit https://github.com/mui/material-ui/blob/master/packages/mui-codemod/README.md#joy-text-field-to-input\n\nTo learn more why it has been removed, visit the RFC https://github.com/mui/material-ui/issues/34176"].join("\n"));
};

// node_modules/@mui/joy/ToggleButtonGroup/ToggleButtonGroup.js
var React65 = __toESM(require_react());
var import_prop_types57 = __toESM(require_prop_types());

// node_modules/@mui/joy/ToggleButtonGroup/toggleButtonGroupClasses.js
function getToggleButtonGroupUtilityClass(slot) {
  return generateUtilityClass2("MuiToggleButtonGroup", slot);
}
var toggleButtonGroupClasses = generateUtilityClasses2("MuiToggleButtonGroup", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
var toggleButtonGroupClasses_default = toggleButtonGroupClasses;

// node_modules/@mui/joy/ToggleButtonGroup/ToggleButtonGroup.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var _excluded53 = ["buttonFlex", "className", "component", "disabled", "size", "color", "variant", "children", "onChange", "orientation", "slots", "slotProps", "spacing", "value"];
var useUtilityClasses53 = (ownerState) => {
  const {
    size,
    variant,
    color,
    orientation
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getToggleButtonGroupUtilityClass, {});
};
var ToggleButtonGroupRoot = styled_default(StyledButtonGroup, {
  name: "JoyToggleButtonGroup",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({});
var ToggleButtonGroup = React65.forwardRef(function ToggleButtonGroup2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyToggleButtonGroup"
  });
  const {
    buttonFlex,
    className,
    component = "div",
    disabled = false,
    size = "md",
    color = "neutral",
    variant = "outlined",
    children,
    onChange,
    orientation = "horizontal",
    slots = {},
    slotProps = {},
    spacing = 0,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded53);
  const ownerState = _extends({}, props, {
    buttonFlex,
    color,
    component,
    orientation,
    spacing,
    size,
    variant
  });
  const classes = useUtilityClasses53(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: ToggleButtonGroupRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: {
      role: "group"
    }
  });
  const buttonGroupContext = React65.useMemo(() => ({
    variant,
    color,
    size,
    disabled
  }), [variant, color, size, disabled]);
  const handleChange = React65.useCallback((event, buttonValue) => {
    if (!onChange || buttonValue === void 0) {
      return;
    }
    if (Array.isArray(value)) {
      const set = new Set(value);
      if (set.has(buttonValue)) {
        set.delete(buttonValue);
      } else {
        set.add(buttonValue);
      }
      onChange(event, Array.from(set));
    } else {
      onChange(event, value === buttonValue ? null : buttonValue);
    }
  }, [value, onChange]);
  const toggleButtonGroupContext = React65.useMemo(() => ({
    onClick: (event, childValue) => {
      if (!event.defaultPrevented) {
        handleChange(event, childValue);
      }
    },
    value
  }), [handleChange, value]);
  return (0, import_jsx_runtime74.jsx)(SlotRoot, _extends({}, rootProps, {
    children: (0, import_jsx_runtime74.jsx)(ToggleButtonGroupContext_default.Provider, {
      value: toggleButtonGroupContext,
      children: (0, import_jsx_runtime74.jsx)(ButtonGroupContext_default.Provider, {
        value: buttonGroupContext,
        children: React65.Children.map(children, (child, index) => {
          if (!React65.isValidElement(child)) {
            return child;
          }
          const extraProps = {};
          if (isMuiElement(child, ["Divider"])) {
            extraProps.inset = "inset" in child.props ? child.props.inset : "context";
            const dividerOrientation = orientation === "vertical" ? "horizontal" : "vertical";
            extraProps.orientation = "orientation" in child.props ? child.props.orientation : dividerOrientation;
            extraProps.role = "presentation";
            extraProps.component = "span";
          }
          if (index === 0) {
            extraProps["data-first-child"] = "";
          }
          if (index === React65.Children.count(children) - 1) {
            extraProps["data-last-child"] = "";
          }
          return React65.cloneElement(child, extraProps);
        })
      })
    })
  }));
});
true ? ToggleButtonGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The flex value of the button.
   * @example buttonFlex={1} will set flex: '1 1 auto' on each button (stretch the button to equally fill the available space).
   */
  buttonFlex: import_prop_types57.default.oneOfType([import_prop_types57.default.number, import_prop_types57.default.string]),
  /**
   * Used to render icon or text elements inside the ButtonGroup if `src` is not set.
   * This can be an element, or just a string.
   */
  children: import_prop_types57.default.node,
  /**
   * @ignore
   */
  className: import_prop_types57.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types57.default.oneOfType([import_prop_types57.default.oneOf(["danger", "info", "neutral", "primary", "success", "warning"]), import_prop_types57.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types57.default.elementType,
  /**
   * If `true`, all the buttons will be disabled.
   * @default false
   */
  disabled: import_prop_types57.default.bool,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.MouseEvent<HTMLElement>} event The event source of the callback.
   * @param {any} value of the selected buttons. When `exclusive` is true
   * this is a single value; when false an array of selected values. If no value
   * is selected and `exclusive` is true the value is null; when false an empty array.
   */
  onChange: import_prop_types57.default.func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: import_prop_types57.default.oneOf(["horizontal", "vertical"]),
  /**
   * The size of the component.
   * It accepts theme values between 'sm' and 'lg'.
   * @default 'md'
   */
  size: import_prop_types57.default.oneOf(["sm", "md", "lg"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types57.default.shape({
    root: import_prop_types57.default.oneOfType([import_prop_types57.default.func, import_prop_types57.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types57.default.shape({
    root: import_prop_types57.default.elementType
  }),
  /**
   * Defines the space between the type `item` components.
   * It can only be used on a type `container` component.
   * @default 0
   */
  spacing: import_prop_types57.default.oneOfType([import_prop_types57.default.arrayOf(import_prop_types57.default.oneOfType([import_prop_types57.default.number, import_prop_types57.default.string])), import_prop_types57.default.number, import_prop_types57.default.shape({
    lg: import_prop_types57.default.oneOfType([import_prop_types57.default.number, import_prop_types57.default.string]),
    md: import_prop_types57.default.oneOfType([import_prop_types57.default.number, import_prop_types57.default.string]),
    sm: import_prop_types57.default.oneOfType([import_prop_types57.default.number, import_prop_types57.default.string]),
    xl: import_prop_types57.default.oneOfType([import_prop_types57.default.number, import_prop_types57.default.string]),
    xs: import_prop_types57.default.oneOfType([import_prop_types57.default.number, import_prop_types57.default.string])
  }), import_prop_types57.default.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types57.default.oneOfType([import_prop_types57.default.arrayOf(import_prop_types57.default.oneOfType([import_prop_types57.default.func, import_prop_types57.default.object, import_prop_types57.default.bool])), import_prop_types57.default.func, import_prop_types57.default.object]),
  /**
   * The currently selected value within the group or an array of selected values.
   *
   * The value must have reference equality with the option in order to be selected.
   */
  value: import_prop_types57.default.oneOfType([import_prop_types57.default.arrayOf(import_prop_types57.default.string), import_prop_types57.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types57.default.oneOfType([import_prop_types57.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types57.default.string])
} : void 0;
var ToggleButtonGroup_default = ToggleButtonGroup;

// node_modules/@mui/joy/Tooltip/Tooltip.js
var React66 = __toESM(require_react());
var import_prop_types58 = __toESM(require_prop_types());

// node_modules/@mui/joy/Tooltip/tooltipClasses.js
function getTooltipUtilityClass(slot) {
  return generateUtilityClass2("MuiTooltip", slot);
}
var tooltipClasses = generateUtilityClasses2("MuiTooltip", ["root", "tooltipArrow", "arrow", "touch", "placementLeft", "placementRight", "placementTop", "placementBottom", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
var tooltipClasses_default = tooltipClasses;

// node_modules/@mui/joy/Tooltip/Tooltip.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime());
var import_jsx_runtime76 = __toESM(require_jsx_runtime());
var _excluded54 = ["children", "className", "component", "arrow", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "disablePortal", "direction", "keepMounted", "modifiers", "placement", "title", "color", "variant", "size", "slots", "slotProps"];
var useUtilityClasses54 = (ownerState) => {
  const {
    arrow,
    variant,
    color,
    size,
    placement,
    touch
  } = ownerState;
  const slots = {
    root: ["root", arrow && "tooltipArrow", touch && "touch", size && `size${capitalize(size)}`, color && `color${capitalize(color)}`, variant && `variant${capitalize(variant)}`, `tooltipPlacement${capitalize(placement.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return composeClasses(slots, getTooltipUtilityClass, {});
};
var TooltipRoot = styled_default("div", {
  name: "JoyTooltip",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants, _ownerState$placement, _ownerState$placement2;
  const variantStyle = (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color];
  return _extends({}, ownerState.size === "sm" && {
    "--Icon-fontSize": theme.vars.fontSize.md,
    "--Tooltip-arrowSize": "8px",
    padding: theme.spacing(0.25, 0.625)
  }, ownerState.size === "md" && {
    "--Icon-fontSize": theme.vars.fontSize.lg,
    "--Tooltip-arrowSize": "10px",
    padding: theme.spacing(0.5, 0.75)
  }, ownerState.size === "lg" && {
    "--Icon-fontSize": theme.vars.fontSize.xl,
    "--Tooltip-arrowSize": "12px",
    padding: theme.spacing(0.75, 1)
  }, {
    zIndex: theme.vars.zIndex.tooltip,
    borderRadius: theme.vars.radius.sm,
    boxShadow: theme.shadow.sm,
    wordWrap: "break-word",
    position: "relative"
  }, ownerState.disableInteractive && {
    pointerEvents: "none"
  }, theme.typography[`body-${{
    sm: "xs",
    md: "sm",
    lg: "md"
  }[ownerState.size]}`], variantStyle, !variantStyle.backgroundColor && {
    backgroundColor: theme.vars.palette.background.surface
  }, {
    "&::before": {
      // acts as a invisible connector between the element and the tooltip
      // so that the cursor can move to the tooltip without losing focus.
      content: '""',
      display: "block",
      position: "absolute",
      width: (_ownerState$placement = ownerState.placement) != null && _ownerState$placement.match(/(top|bottom)/) ? "100%" : (
        // 10px equals the default offset popper config
        "calc(10px + var(--variant-borderWidth, 0px))"
      ),
      height: (_ownerState$placement2 = ownerState.placement) != null && _ownerState$placement2.match(/(top|bottom)/) ? "calc(10px + var(--variant-borderWidth, 0px))" : "100%"
    },
    '&[data-popper-placement*="bottom"]::before': {
      top: 0,
      left: 0,
      transform: "translateY(-100%)"
    },
    '&[data-popper-placement*="left"]::before': {
      top: 0,
      right: 0,
      transform: "translateX(100%)"
    },
    '&[data-popper-placement*="right"]::before': {
      top: 0,
      left: 0,
      transform: "translateX(-100%)"
    },
    '&[data-popper-placement*="top"]::before': {
      bottom: 0,
      left: 0,
      transform: "translateY(100%)"
    }
  });
});
var TooltipArrow = styled_default("span", {
  name: "JoyTooltip",
  slot: "Arrow",
  overridesResolver: (props, styles) => styles.arrow
})(({
  theme,
  ownerState
}) => {
  var _theme$variants2, _variantStyle$backgro, _variantStyle$backgro2;
  const variantStyle = (_theme$variants2 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants2[ownerState.color];
  return {
    "--unstable_Tooltip-arrowRotation": 0,
    width: "var(--Tooltip-arrowSize)",
    height: "var(--Tooltip-arrowSize)",
    boxSizing: "border-box",
    // use pseudo element because Popper controls the `transform` property of the arrow.
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      width: 0,
      height: 0,
      border: "calc(var(--Tooltip-arrowSize) / 2) solid",
      borderLeftColor: "transparent",
      borderBottomColor: "transparent",
      borderTopColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface,
      borderRightColor: (_variantStyle$backgro2 = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro2 : theme.vars.palette.background.surface,
      borderRadius: `0px 2px 0px 0px`,
      boxShadow: `var(--variant-borderWidth, 0px) calc(-1 * var(--variant-borderWidth, 0px)) 0px 0px ${variantStyle.borderColor}`,
      transformOrigin: "center center",
      transform: "rotate(calc(-45deg + 90deg * var(--unstable_Tooltip-arrowRotation)))"
    },
    '[data-popper-placement*="bottom"] &': {
      top: "calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"
      // 0.5px is for perfect overlap with the Tooltip
    },
    '[data-popper-placement*="top"] &': {
      "--unstable_Tooltip-arrowRotation": 2,
      bottom: "calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"
    },
    '[data-popper-placement*="left"] &': {
      "--unstable_Tooltip-arrowRotation": 1,
      right: "calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"
    },
    '[data-popper-placement*="right"] &': {
      "--unstable_Tooltip-arrowRotation": 3,
      left: "calc(0.5px + var(--Tooltip-arrowSize) * -1 / 2)"
    }
  };
});
var hystersisOpen = false;
var hystersisTimer = null;
var cursorPosition = {
  x: 0,
  y: 0
};
function composeMouseEventHandler(handler, eventHandler) {
  return (event) => {
    if (eventHandler) {
      eventHandler(event);
    }
    handler(event);
  };
}
function composeFocusEventHandler(handler, eventHandler) {
  return (event) => {
    if (eventHandler) {
      eventHandler(event);
    }
    handler(event);
  };
}
var Tooltip = React66.forwardRef(function Tooltip2(inProps, ref) {
  var _props$slots;
  const props = useThemeProps({
    props: inProps,
    name: "JoyTooltip"
  });
  const {
    children,
    className,
    component,
    arrow = false,
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = false,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    disablePortal,
    direction,
    keepMounted,
    modifiers: modifiersProp,
    placement = "bottom",
    title,
    color = "neutral",
    variant = "solid",
    size = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded54);
  const [childNode, setChildNode] = React66.useState();
  const [arrowRef, setArrowRef] = React66.useState(null);
  const ignoreNonTouchEvents = React66.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = React66.useRef();
  const enterTimer = React66.useRef();
  const leaveTimer = React66.useRef();
  const touchTimer = React66.useRef();
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: "Tooltip",
    state: "open"
  });
  let open = openState;
  const id = useId(idProp);
  const prevUserSelect = React66.useRef();
  const stopTouchInteraction = React66.useCallback(() => {
    if (prevUserSelect.current !== void 0) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = void 0;
    }
    clearTimeout(touchTimer.current);
  }, []);
  React66.useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      stopTouchInteraction();
    };
  }, [stopTouchInteraction]);
  const handleOpen = (event) => {
    if (hystersisTimer) {
      clearTimeout(hystersisTimer);
    }
    hystersisOpen = true;
    setOpenState(true);
    if (onOpen && !open) {
      onOpen(event);
    }
  };
  const handleClose = useEventCallback_default((event) => {
    if (hystersisTimer) {
      clearTimeout(hystersisTimer);
    }
    hystersisTimer = setTimeout(() => {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);
    if (onClose && open) {
      onClose(event);
    }
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false;
    }, 150);
  });
  const handleEnter = (event) => {
    if (ignoreNonTouchEvents.current && event.type !== "touchstart") {
      return;
    }
    if (childNode) {
      childNode.removeAttribute("title");
    }
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.current = setTimeout(() => {
        handleOpen(event);
      }, hystersisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };
  const handleLeave = (event) => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [, setChildIsFocusVisible] = React66.useState(false);
  const handleBlur = (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleLeave(event);
    }
  };
  const handleFocus = (event) => {
    if (!childNode) {
      setChildNode(event.currentTarget);
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }
  };
  const detectTouchStart = (event) => {
    ignoreNonTouchEvents.current = true;
    const childrenProps2 = children.props;
    if (childrenProps2.onTouchStart) {
      childrenProps2.onTouchStart(event);
    }
  };
  const handleMouseOver = handleEnter;
  const handleMouseLeave = handleLeave;
  const handleTouchStart = (event) => {
    detectTouchStart(event);
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect;
    document.body.style.WebkitUserSelect = "none";
    touchTimer.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleEnter(event);
    }, enterTouchDelay);
  };
  const handleTouchEnd = (event) => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    stopTouchInteraction();
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveTouchDelay);
  };
  React66.useEffect(() => {
    if (!open) {
      return void 0;
    }
    function handleKeyDown(nativeEvent) {
      if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
        handleClose(nativeEvent);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, open]);
  const handleUseRef = useForkRef(setChildNode, ref);
  const handleFocusRef = useForkRef(focusVisibleRef, handleUseRef);
  const handleRef = useForkRef(children.ref, handleFocusRef);
  if (typeof title !== "number" && !title) {
    open = false;
  }
  const popperRef = React66.useRef(null);
  const handleMouseMove = (event) => {
    const childrenProps2 = children.props;
    if (childrenProps2.onMouseMove) {
      childrenProps2.onMouseMove(event);
    }
    cursorPosition = {
      x: event.clientX,
      y: event.clientY
    };
    if (popperRef.current) {
      popperRef.current.update();
    }
  };
  const nameOrDescProps = {};
  const titleIsString = typeof title === "string";
  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps["aria-describedby"] = open ? id : null;
  } else {
    nameOrDescProps["aria-label"] = titleIsString ? title : null;
    nameOrDescProps["aria-labelledby"] = open && !titleIsString ? id : null;
  }
  const childrenProps = _extends({}, nameOrDescProps, other, {
    component
  }, children.props, {
    className: clsx_default(className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  }, followCursor ? {
    onMouseMove: handleMouseMove
  } : {});
  const interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeMouseEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeMouseEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = composeFocusEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeFocusEventHandler(handleBlur, childrenProps.onBlur);
    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }
  const ownerState = _extends({}, props, {
    arrow,
    disableInteractive,
    placement,
    touch: ignoreNonTouchEvents.current,
    color,
    variant,
    size
  });
  const classes = useUtilityClasses54(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const modifiers = React66.useMemo(() => [{
    name: "arrow",
    enabled: Boolean(arrowRef),
    options: {
      element: arrowRef,
      // https://popper.js.org/docs/v2/modifiers/arrow/#padding
      // make the arrow looks nice with the Tooltip's border radius
      padding: 6
    }
  }, {
    name: "offset",
    options: {
      offset: [0, 10]
    }
  }, ...modifiersProp || []], [arrowRef, modifiersProp]);
  const [SlotRoot, rootProps] = useSlot("root", {
    additionalProps: _extends({
      id,
      popperRef,
      placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: cursorPosition.y,
          left: cursorPosition.x,
          right: cursorPosition.x,
          bottom: cursorPosition.y,
          width: 0,
          height: 0
        })
      } : childNode,
      open: childNode ? open : false,
      disablePortal,
      keepMounted,
      direction,
      modifiers
    }, interactiveWrapperListeners),
    ref: null,
    className: classes.root,
    elementType: TooltipRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotArrow, arrowProps] = useSlot("arrow", {
    ref: setArrowRef,
    className: classes.arrow,
    elementType: TooltipArrow,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime76.jsxs)(React66.Fragment, {
    children: [React66.isValidElement(children) && React66.cloneElement(children, childrenProps), (0, import_jsx_runtime76.jsxs)(SlotRoot, _extends({}, rootProps, !((_props$slots = props.slots) != null && _props$slots.root) && {
      as: Popper,
      slots: {
        root: component || "div"
      }
    }, {
      children: [title, arrow ? (0, import_jsx_runtime75.jsx)(SlotArrow, _extends({}, arrowProps)) : null]
    }))]
  });
});
true ? Tooltip.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: import_prop_types58.default.bool,
  /**
   * Tooltip reference element.
   */
  children: import_prop_types58.default.element.isRequired,
  /**
   * @ignore
   */
  className: import_prop_types58.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types58.default.oneOf(["danger", "neutral", "primary", "success", "warning"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types58.default.elementType,
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: import_prop_types58.default.bool,
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: import_prop_types58.default.oneOf(["ltr", "rtl"]),
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: import_prop_types58.default.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: import_prop_types58.default.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: import_prop_types58.default.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types58.default.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: import_prop_types58.default.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: import_prop_types58.default.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: import_prop_types58.default.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: import_prop_types58.default.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: import_prop_types58.default.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: import_prop_types58.default.string,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: import_prop_types58.default.bool,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: import_prop_types58.default.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: import_prop_types58.default.number,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: import_prop_types58.default.arrayOf(import_prop_types58.default.shape({
    data: import_prop_types58.default.object,
    effect: import_prop_types58.default.func,
    enabled: import_prop_types58.default.bool,
    fn: import_prop_types58.default.func,
    name: import_prop_types58.default.any,
    options: import_prop_types58.default.object,
    phase: import_prop_types58.default.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: import_prop_types58.default.arrayOf(import_prop_types58.default.string),
    requiresIfExists: import_prop_types58.default.arrayOf(import_prop_types58.default.string)
  })),
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: import_prop_types58.default.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: import_prop_types58.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types58.default.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: import_prop_types58.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types58.default.oneOf(["sm", "md", "lg"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types58.default.shape({
    arrow: import_prop_types58.default.oneOfType([import_prop_types58.default.func, import_prop_types58.default.object]),
    root: import_prop_types58.default.oneOfType([import_prop_types58.default.func, import_prop_types58.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types58.default.shape({
    arrow: import_prop_types58.default.elementType,
    root: import_prop_types58.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types58.default.oneOfType([import_prop_types58.default.arrayOf(import_prop_types58.default.oneOfType([import_prop_types58.default.func, import_prop_types58.default.object, import_prop_types58.default.bool])), import_prop_types58.default.func, import_prop_types58.default.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: import_prop_types58.default.node,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'solid'
   */
  variant: import_prop_types58.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var Tooltip_default = Tooltip;
export {
  Accordion_default as Accordion,
  AccordionDetails_default as AccordionDetails,
  AccordionGroup_default as AccordionGroup,
  AccordionSummary_default as AccordionSummary,
  Alert_default as Alert,
  AspectRatio_default as AspectRatio,
  Autocomplete_default as Autocomplete,
  AutocompleteListbox_default as AutocompleteListbox,
  AutocompleteOption_default as AutocompleteOption,
  Avatar_default as Avatar,
  AvatarGroup_default as AvatarGroup,
  Badge_default as Badge,
  Box_default as Box,
  Breadcrumbs_default as Breadcrumbs,
  Button_default as Button,
  ButtonGroup_default as ButtonGroup,
  Card_default as Card,
  CardActions_default as CardActions,
  CardContent_default as CardContent,
  CardCover_default as CardCover,
  CardOverflow_default as CardOverflow,
  Checkbox_default as Checkbox,
  Chip_default as Chip,
  ChipDelete_default as ChipDelete,
  CircularProgress_default as CircularProgress,
  Container_default as Container,
  CssBaseline_default as CssBaseline,
  CssVarsProvider,
  DialogActions_default as DialogActions,
  DialogContent_default as DialogContent,
  DialogTitle_default as DialogTitle,
  Divider_default as Divider,
  Drawer_default as Drawer,
  Dropdown,
  FormControl_default as FormControl,
  FormHelperText_default as FormHelperText,
  FormLabel_default as FormLabel,
  GlobalStyles_default2 as GlobalStyles,
  Grid_default as Grid,
  IconButton_default as IconButton,
  Input_default as Input,
  LinearProgress_default as LinearProgress,
  Link_default as Link,
  List_default as List,
  ListDivider_default as ListDivider,
  ListItem_default as ListItem,
  ListItemButton_default as ListItemButton,
  ListItemContent_default as ListItemContent,
  ListItemDecorator_default as ListItemDecorator,
  ListSubheader_default as ListSubheader,
  Menu_default as Menu,
  MenuButton_default as MenuButton,
  MenuItem_default as MenuItem,
  MenuList_default as MenuList,
  Modal_default as Modal,
  ModalClose_default as ModalClose,
  ModalDialog_default as ModalDialog,
  ModalOverflow_default as ModalOverflow,
  Option_default as Option,
  Radio_default as Radio,
  RadioGroup_default as RadioGroup,
  ScopedCssBaseline_default as ScopedCssBaseline,
  Select_default as Select,
  Sheet_default as Sheet,
  Skeleton_default as Skeleton,
  Slider_default as Slider,
  Snackbar_default as Snackbar,
  Stack_default as Stack,
  StyledEngineProvider,
  SvgIcon_default as SvgIcon,
  Switch_default as Switch,
  identifier_default as THEME_ID,
  Tab_default as Tab,
  TabList_default as TabList,
  TabPanel_default as TabPanel,
  Table_default as Table,
  Tabs_default as Tabs,
  TextField_default as TextField,
  Textarea_default as Textarea,
  ThemeProvider,
  ToggleButtonGroup_default as ToggleButtonGroup,
  Tooltip_default as Tooltip,
  Typography_default as Typography,
  accordionClasses_default as accordionClasses,
  accordionDetailsClasses_default as accordionDetailsClasses,
  accordionGroupClasses_default as accordionGroupClasses,
  accordionSummaryClasses_default as accordionSummaryClasses,
  alertClasses_default as alertClasses,
  aspectRatioClasses_default as aspectRatioClasses,
  autocompleteClasses_default as autocompleteClasses,
  autocompleteListboxClasses_default as autocompleteListboxClasses,
  autocompleteOptionClasses_default as autocompleteOptionClasses,
  avatarClasses_default as avatarClasses,
  avatarGroupClasses_default as avatarGroupClasses,
  badgeClasses_default as badgeClasses,
  breadcrumbsClasses_default as breadcrumbsClasses,
  buttonClasses_default as buttonClasses,
  buttonGroupClasses_default as buttonGroupClasses,
  cardActionsClasses_default as cardActionsClasses,
  cardClasses_default as cardClasses,
  cardContentClasses_default as cardContentClasses,
  cardCoverClasses_default as cardCoverClasses,
  cardOverflowClasses_default as cardOverflowClasses,
  checkboxClasses_default as checkboxClasses,
  chipClasses_default as chipClasses,
  chipDeleteClasses_default as chipDeleteClasses,
  circularProgressClasses_default as circularProgressClasses,
  colors_default as colors,
  containerClasses_default as containerClasses,
  createFilterOptions,
  createGetCssVar,
  dialogActionsClasses_default as dialogActionsClasses,
  dialogContentClasses_default as dialogContentClasses,
  dialogTitleClasses_default as dialogTitleClasses,
  dividerClasses_default as dividerClasses,
  drawerClasses_default as drawerClasses,
  extendTheme,
  formControlClasses_default as formControlClasses,
  formHelperTextClasses_default as formHelperTextClasses,
  formLabelClasses_default as formLabelClasses,
  getAccordionDetailsUtilityClass,
  getAccordionGroupUtilityClass,
  getAccordionSummaryUtilityClass,
  getAccordionUtilityClass,
  getAlertUtilityClass,
  getAspectRatioUtilityClass,
  getAutocompleteListboxUtilityClass,
  getAutocompleteOptionUtilityClass,
  getAutocompleteUtilityClass,
  getAvatarGroupUtilityClass,
  getAvatarUtilityClass,
  getBadgeUtilityClass,
  getBreadcrumbsUtilityClass,
  getButtonGroupUtilityClass,
  getButtonUtilityClass,
  getCardActionsUtilityClass,
  getCardContentUtilityClass,
  getCardCoverUtilityClass,
  getCardOverflowUtilityClass,
  getCardUtilityClass,
  getCheckboxUtilityClass,
  getChipDeleteUtilityClass,
  getChipUtilityClass,
  getCircularProgressUtilityClass,
  getContainerUtilityClass,
  getDialogActionsUtilityClass,
  getDialogContentUtilityClass,
  getDialogTitleUtilityClass,
  getDividerUtilityClass,
  getDrawerUtilityClass,
  getFormControlUtilityClass,
  getFormHelperTextUtilityClass,
  getFormLabelUtilityClass,
  getGridUtilityClass,
  getIconButtonUtilityClass,
  getInitColorSchemeScript,
  getInputUtilityClass,
  getLinearProgressUtilityClass,
  getLinkUtilityClass,
  getListDividerUtilityClass,
  getListItemButtonUtilityClass,
  getListItemContentUtilityClass,
  getListItemDecoratorUtilityClass,
  getListItemUtilityClass,
  getListSubheaderUtilityClass,
  getListUtilityClass,
  getMenuButtonUtilityClass,
  getMenuItemUtilityClass,
  getMenuListUtilityClass,
  getMenuUtilityClass,
  getModalCloseUtilityClass,
  getModalDialogUtilityClass,
  getModalOverflowUtilityClass,
  getModalUtilityClass,
  getOptionUtilityClass,
  getRadioGroupUtilityClass,
  getRadioUtilityClass,
  getScopedCssBaselineUtilityClass,
  getSelectUtilityClass,
  getSheetUtilityClass,
  getSkeletonUtilityClass,
  getSliderUtilityClass,
  getSnackbarUtilityClass,
  getStackUtilityClass,
  getSvgIconUtilityClass,
  getSwitchUtilityClass,
  getTabListUtilityClass,
  getTabPanelUtilityClass,
  getTabUtilityClass,
  getTableUtilityClass,
  getTabsUtilityClass,
  getTextareaUtilityClass,
  getToggleButtonGroupUtilityClass,
  getTooltipUtilityClass,
  getTypographyUtilityClass,
  gridClasses_default as gridClasses,
  iconButtonClasses_default as iconButtonClasses,
  inputClasses_default as inputClasses,
  linearProgressClasses_default as linearProgressClasses,
  linkClasses_default as linkClasses,
  listClasses_default as listClasses,
  listDividerClasses_default as listDividerClasses,
  listItemButtonClasses_default as listItemButtonClasses,
  listItemClasses_default as listItemClasses,
  listItemContentClasses_default as listItemContentClasses,
  listItemDecoratorClasses_default as listItemDecoratorClasses,
  listSubheaderClasses_default as listSubheaderClasses,
  menuButtonClasses_default as menuButtonClasses,
  menuClasses_default as menuClasses,
  menuItemClasses_default as menuItemClasses,
  menuListClasses_default as menuListClasses,
  modalClasses_default as modalClasses,
  modalCloseClasses_default as modalCloseClasses,
  modalDialogClasses_default as modalDialogClasses,
  modalOverflowClasses_default as modalOverflowClasses,
  optionClasses_default as optionClasses,
  radioClasses_default as radioClasses,
  radioGroupClasses_default as radioGroupClasses,
  scopedCssBaselineClasses_default as scopedCssBaselineClasses,
  selectClasses_default as selectClasses,
  sheetClasses_default as sheetClasses,
  shouldSkipGeneratingVar,
  skeletonClasses_default as skeletonClasses,
  sliderClasses_default as sliderClasses,
  snackbarClasses_default as snackbarClasses,
  stackClasses_default as stackClasses,
  styled_default as styled,
  svgIconClasses_default as svgIconClasses,
  switchClasses_default as switchClasses,
  tabClasses_default as tabClasses,
  tabListClasses_default as tabListClasses,
  tabPanelClasses_default as tabPanelClasses,
  tableClasses_default as tableClasses,
  tabsClasses_default as tabsClasses,
  textareaClasses_default as textareaClasses,
  toggleButtonGroupClasses_default as toggleButtonGroupClasses,
  tooltipClasses_default as tooltipClasses,
  typographyClasses_default as typographyClasses,
  useColorScheme,
  useTheme,
  useThemeProps
};
/*! Bundled license information:

@mui/joy/index.js:
  (**
   * @mui/joy v5.0.0-beta.14
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@mui_joy.js.map
