import {
  ThemeProvider_default,
  createCssVarsProvider,
  defaultTheme_default,
  extendTheme,
  identifier_default,
  require_jsx_runtime,
  useTheme_default
} from "./chunk-TY2NYQZJ.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@mui/joy/styles/CssVarsProvider.js
var {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript
} = createCssVarsProvider({
  themeId: identifier_default,
  theme: defaultTheme_default,
  attribute: "data-joy-color-scheme",
  modeStorageKey: "joy-mode",
  colorSchemeStorageKey: "joy-color-scheme",
  defaultColorScheme: {
    light: "light",
    dark: "dark"
  }
});

// node_modules/@mui/joy/styles/ThemeProvider.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var useTheme = () => {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
};
function ThemeProvider({
  children,
  theme: themeInput
}) {
  let theme = defaultTheme_default;
  if (themeInput) {
    theme = extendTheme(identifier_default in themeInput ? themeInput[identifier_default] : themeInput);
  }
  return (0, import_jsx_runtime.jsx)(ThemeProvider_default, {
    theme,
    themeId: themeInput && identifier_default in themeInput ? identifier_default : void 0,
    children
  });
}

export {
  CssVarsProvider,
  useColorScheme,
  getInitColorSchemeScript,
  useTheme,
  ThemeProvider
};
//# sourceMappingURL=chunk-F2X67MIP.js.map
