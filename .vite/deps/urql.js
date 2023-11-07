import {
  filter,
  fromAsyncIterable,
  fromPromise,
  fromValue,
  lazy,
  make,
  makeSubject,
  map,
  merge,
  mergeMap,
  onEnd,
  onPush,
  onStart,
  publish,
  share,
  subscribe,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  toPromise
} from "./chunk-DGEYOGUC.js";
import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __toESM
} from "./chunk-ROME4SDB.js";

// node_modules/@0no-co/graphql.web/dist/graphql.web.mjs
var e = {
  NAME: "Name",
  DOCUMENT: "Document",
  OPERATION_DEFINITION: "OperationDefinition",
  VARIABLE_DEFINITION: "VariableDefinition",
  SELECTION_SET: "SelectionSet",
  FIELD: "Field",
  ARGUMENT: "Argument",
  FRAGMENT_SPREAD: "FragmentSpread",
  INLINE_FRAGMENT: "InlineFragment",
  FRAGMENT_DEFINITION: "FragmentDefinition",
  VARIABLE: "Variable",
  INT: "IntValue",
  FLOAT: "FloatValue",
  STRING: "StringValue",
  BOOLEAN: "BooleanValue",
  NULL: "NullValue",
  ENUM: "EnumValue",
  LIST: "ListValue",
  OBJECT: "ObjectValue",
  OBJECT_FIELD: "ObjectField",
  DIRECTIVE: "Directive",
  NAMED_TYPE: "NamedType",
  LIST_TYPE: "ListType",
  NON_NULL_TYPE: "NonNullType"
};
var GraphQLError = class extends Error {
  constructor(e2, r2, i3, n2, a2, t2, o2) {
    super(e2);
    this.name = "GraphQLError";
    this.message = e2;
    if (a2) {
      this.path = a2;
    }
    if (r2) {
      this.nodes = Array.isArray(r2) ? r2 : [r2];
    }
    if (i3) {
      this.source = i3;
    }
    if (n2) {
      this.positions = n2;
    }
    if (t2) {
      this.originalError = t2;
    }
    var l4 = o2;
    if (!l4 && t2) {
      var u3 = t2.extensions;
      if (u3 && "object" == typeof u3) {
        l4 = u3;
      }
    }
    this.extensions = l4 || {};
  }
  toJSON() {
    return {
      ...this,
      message: this.message
    };
  }
  toString() {
    return this.message;
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
};
var i;
var n;
function error(e2) {
  return new GraphQLError(`Syntax Error: Unexpected token at ${n} in ${e2}`);
}
function advance(e2) {
  e2.lastIndex = n;
  if (e2.test(i)) {
    return i.slice(n, n = e2.lastIndex);
  }
}
var a = / +(?=[^\s])/y;
function blockString(e2) {
  var r2 = e2.split("\n");
  var i3 = "";
  var n2 = 0;
  var t2 = 0;
  var o2 = r2.length - 1;
  for (var l4 = 0; l4 < r2.length; l4++) {
    a.lastIndex = 0;
    if (a.test(r2[l4])) {
      if (l4 && (!n2 || a.lastIndex < n2)) {
        n2 = a.lastIndex;
      }
      t2 = t2 || l4;
      o2 = l4;
    }
  }
  for (var u3 = t2; u3 <= o2; u3++) {
    if (u3 !== t2) {
      i3 += "\n";
    }
    i3 += r2[u3].slice(n2).replace(/\\"""/g, '"""');
  }
  return i3;
}
function ignored() {
  for (var e2 = 0 | i.charCodeAt(n++); 9 === e2 || 10 === e2 || 13 === e2 || 32 === e2 || 35 === e2 || 44 === e2 || 65279 === e2; e2 = 0 | i.charCodeAt(n++)) {
    if (35 === e2) {
      while (10 !== (e2 = i.charCodeAt(n++)) && 13 !== e2) {
      }
    }
  }
  n--;
}
var t = /[_A-Za-z]\w*/y;
function name() {
  var e2;
  if (e2 = advance(t)) {
    return {
      kind: "Name",
      value: e2
    };
  }
}
var o = /(?:null|true|false)/y;
var l = /\$[_A-Za-z]\w*/y;
var u = /-?\d+/y;
var v = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y;
var d = /\\/g;
var s = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y;
var c = /"(?:"|[^\r\n]*?[^\\]")/y;
function value(e2) {
  var r2;
  var a2;
  if (a2 = advance(o)) {
    r2 = "null" === a2 ? {
      kind: "NullValue"
    } : {
      kind: "BooleanValue",
      value: "true" === a2
    };
  } else if (!e2 && (a2 = advance(l))) {
    r2 = {
      kind: "Variable",
      name: {
        kind: "Name",
        value: a2.slice(1)
      }
    };
  } else if (a2 = advance(u)) {
    var f4 = a2;
    if (a2 = advance(v)) {
      r2 = {
        kind: "FloatValue",
        value: f4 + a2
      };
    } else {
      r2 = {
        kind: "IntValue",
        value: f4
      };
    }
  } else if (a2 = advance(t)) {
    r2 = {
      kind: "EnumValue",
      value: a2
    };
  } else if (a2 = advance(s)) {
    r2 = {
      kind: "StringValue",
      value: blockString(a2.slice(3, -3)),
      block: true
    };
  } else if (a2 = advance(c)) {
    r2 = {
      kind: "StringValue",
      value: d.test(a2) ? JSON.parse(a2) : a2.slice(1, -1),
      block: false
    };
  } else if (r2 = function list(e3) {
    var r3;
    if (91 === i.charCodeAt(n)) {
      n++;
      ignored();
      var a3 = [];
      while (r3 = value(e3)) {
        a3.push(r3);
      }
      if (93 !== i.charCodeAt(n++)) {
        throw error("ListValue");
      }
      ignored();
      return {
        kind: "ListValue",
        values: a3
      };
    }
  }(e2) || function object(e3) {
    if (123 === i.charCodeAt(n)) {
      n++;
      ignored();
      var r3 = [];
      var a3;
      while (a3 = name()) {
        ignored();
        if (58 !== i.charCodeAt(n++)) {
          throw error("ObjectField");
        }
        ignored();
        var t2 = value(e3);
        if (!t2) {
          throw error("ObjectField");
        }
        r3.push({
          kind: "ObjectField",
          name: a3,
          value: t2
        });
      }
      if (125 !== i.charCodeAt(n++)) {
        throw error("ObjectValue");
      }
      ignored();
      return {
        kind: "ObjectValue",
        fields: r3
      };
    }
  }(e2)) {
    return r2;
  }
  ignored();
  return r2;
}
function arguments_(e2) {
  var r2 = [];
  ignored();
  if (40 === i.charCodeAt(n)) {
    n++;
    ignored();
    var a2;
    while (a2 = name()) {
      ignored();
      if (58 !== i.charCodeAt(n++)) {
        throw error("Argument");
      }
      ignored();
      var t2 = value(e2);
      if (!t2) {
        throw error("Argument");
      }
      r2.push({
        kind: "Argument",
        name: a2,
        value: t2
      });
    }
    if (!r2.length || 41 !== i.charCodeAt(n++)) {
      throw error("Argument");
    }
    ignored();
  }
  return r2;
}
function directives(e2) {
  var r2 = [];
  ignored();
  while (64 === i.charCodeAt(n)) {
    n++;
    var a2 = name();
    if (!a2) {
      throw error("Directive");
    }
    ignored();
    r2.push({
      kind: "Directive",
      name: a2,
      arguments: arguments_(e2)
    });
  }
  return r2;
}
function field() {
  var e2 = name();
  if (e2) {
    ignored();
    var r2;
    if (58 === i.charCodeAt(n)) {
      n++;
      ignored();
      r2 = e2;
      if (!(e2 = name())) {
        throw error("Field");
      }
      ignored();
    }
    return {
      kind: "Field",
      alias: r2,
      name: e2,
      arguments: arguments_(false),
      directives: directives(false),
      selectionSet: selectionSet()
    };
  }
}
function type() {
  var e2;
  ignored();
  if (91 === i.charCodeAt(n)) {
    n++;
    ignored();
    var r2 = type();
    if (!r2 || 93 !== i.charCodeAt(n++)) {
      throw error("ListType");
    }
    e2 = {
      kind: "ListType",
      type: r2
    };
  } else if (e2 = name()) {
    e2 = {
      kind: "NamedType",
      name: e2
    };
  } else {
    throw error("NamedType");
  }
  ignored();
  if (33 === i.charCodeAt(n)) {
    n++;
    ignored();
    return {
      kind: "NonNullType",
      type: e2
    };
  } else {
    return e2;
  }
}
var f = /on/y;
function typeCondition() {
  if (advance(f)) {
    ignored();
    var e2 = name();
    if (!e2) {
      throw error("NamedType");
    }
    ignored();
    return {
      kind: "NamedType",
      name: e2
    };
  }
}
var p = /\.\.\./y;
function fragmentSpread() {
  if (advance(p)) {
    ignored();
    var e2 = n;
    var r2;
    if ((r2 = name()) && "on" !== r2.value) {
      return {
        kind: "FragmentSpread",
        name: r2,
        directives: directives(false)
      };
    } else {
      n = e2;
      var i3 = typeCondition();
      var a2 = directives(false);
      var t2 = selectionSet();
      if (!t2) {
        throw error("InlineFragment");
      }
      return {
        kind: "InlineFragment",
        typeCondition: i3,
        directives: a2,
        selectionSet: t2
      };
    }
  }
}
function selectionSet() {
  var e2;
  ignored();
  if (123 === i.charCodeAt(n)) {
    n++;
    ignored();
    var r2 = [];
    while (e2 = fragmentSpread() || field()) {
      r2.push(e2);
    }
    if (!r2.length || 125 !== i.charCodeAt(n++)) {
      throw error("SelectionSet");
    }
    ignored();
    return {
      kind: "SelectionSet",
      selections: r2
    };
  }
}
var m = /fragment/y;
function fragmentDefinition() {
  if (advance(m)) {
    ignored();
    var e2 = name();
    if (!e2) {
      throw error("FragmentDefinition");
    }
    ignored();
    var r2 = typeCondition();
    if (!r2) {
      throw error("FragmentDefinition");
    }
    var i3 = directives(false);
    var n2 = selectionSet();
    if (!n2) {
      throw error("FragmentDefinition");
    }
    return {
      kind: "FragmentDefinition",
      name: e2,
      typeCondition: r2,
      directives: i3,
      selectionSet: n2
    };
  }
}
var g = /(?:query|mutation|subscription)/y;
function operationDefinition() {
  var e2;
  var r2;
  var a2 = [];
  var t2 = [];
  if (e2 = advance(g)) {
    ignored();
    r2 = name();
    a2 = function variableDefinitions() {
      var e3;
      var r3 = [];
      ignored();
      if (40 === i.charCodeAt(n)) {
        n++;
        ignored();
        while (e3 = advance(l)) {
          ignored();
          if (58 !== i.charCodeAt(n++)) {
            throw error("VariableDefinition");
          }
          var a3 = type();
          var t3 = void 0;
          if (61 === i.charCodeAt(n)) {
            n++;
            ignored();
            if (!(t3 = value(true))) {
              throw error("VariableDefinition");
            }
          }
          ignored();
          r3.push({
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: e3.slice(1)
              }
            },
            type: a3,
            defaultValue: t3,
            directives: directives(true)
          });
        }
        if (41 !== i.charCodeAt(n++)) {
          throw error("VariableDefinition");
        }
        ignored();
      }
      return r3;
    }();
    t2 = directives(false);
  }
  var o2 = selectionSet();
  if (o2) {
    return {
      kind: "OperationDefinition",
      operation: e2 || "query",
      name: r2,
      variableDefinitions: a2,
      directives: t2,
      selectionSet: o2
    };
  }
}
function parse(e2, r2) {
  i = "string" == typeof e2.body ? e2.body : e2;
  n = 0;
  return function document() {
    var e3;
    ignored();
    var r3 = [];
    while (e3 = fragmentDefinition() || operationDefinition()) {
      r3.push(e3);
    }
    return {
      kind: "Document",
      definitions: r3
    };
  }();
}
function printString(e2) {
  return JSON.stringify(e2);
}
function printBlockString(e2) {
  return '"""\n' + e2.replace(/"""/g, '\\"""') + '\n"""';
}
var hasItems = (e2) => !(!e2 || !e2.length);
var y = {
  OperationDefinition(e2) {
    if ("query" === e2.operation && !e2.name && !hasItems(e2.variableDefinitions) && !hasItems(e2.directives)) {
      return y.SelectionSet(e2.selectionSet);
    }
    var r2 = e2.operation;
    if (e2.name) {
      r2 += " " + e2.name.value;
    }
    if (hasItems(e2.variableDefinitions)) {
      if (!e2.name) {
        r2 += " ";
      }
      r2 += "(" + e2.variableDefinitions.map(y.VariableDefinition).join(", ") + ")";
    }
    if (hasItems(e2.directives)) {
      r2 += " " + e2.directives.map(y.Directive).join(" ");
    }
    return r2 + " " + y.SelectionSet(e2.selectionSet);
  },
  VariableDefinition(e2) {
    var r2 = y.Variable(e2.variable) + ": " + print(e2.type);
    if (e2.defaultValue) {
      r2 += " = " + print(e2.defaultValue);
    }
    if (hasItems(e2.directives)) {
      r2 += " " + e2.directives.map(y.Directive).join(" ");
    }
    return r2;
  },
  Field(e2) {
    var r2 = (e2.alias ? e2.alias.value + ": " : "") + e2.name.value;
    if (hasItems(e2.arguments)) {
      var i3 = e2.arguments.map(y.Argument);
      var n2 = r2 + "(" + i3.join(", ") + ")";
      r2 = n2.length > 80 ? r2 + "(\n  " + i3.join("\n").replace(/\n/g, "\n  ") + "\n)" : n2;
    }
    if (hasItems(e2.directives)) {
      r2 += " " + e2.directives.map(y.Directive).join(" ");
    }
    return e2.selectionSet ? r2 + " " + y.SelectionSet(e2.selectionSet) : r2;
  },
  StringValue: (e2) => e2.block ? printBlockString(e2.value) : printString(e2.value),
  BooleanValue: (e2) => "" + e2.value,
  NullValue: (e2) => "null",
  IntValue: (e2) => e2.value,
  FloatValue: (e2) => e2.value,
  EnumValue: (e2) => e2.value,
  Name: (e2) => e2.value,
  Variable: (e2) => "$" + e2.name.value,
  ListValue: (e2) => "[" + e2.values.map(print).join(", ") + "]",
  ObjectValue: (e2) => "{" + e2.fields.map(y.ObjectField).join(", ") + "}",
  ObjectField: (e2) => e2.name.value + ": " + print(e2.value),
  Document: (e2) => hasItems(e2.definitions) ? e2.definitions.map(print).join("\n\n") : "",
  SelectionSet: (e2) => "{\n  " + e2.selections.map(print).join("\n").replace(/\n/g, "\n  ") + "\n}",
  Argument: (e2) => e2.name.value + ": " + print(e2.value),
  FragmentSpread(e2) {
    var r2 = "..." + e2.name.value;
    if (hasItems(e2.directives)) {
      r2 += " " + e2.directives.map(y.Directive).join(" ");
    }
    return r2;
  },
  InlineFragment(e2) {
    var r2 = "...";
    if (e2.typeCondition) {
      r2 += " on " + e2.typeCondition.name.value;
    }
    if (hasItems(e2.directives)) {
      r2 += " " + e2.directives.map(y.Directive).join(" ");
    }
    return r2 + " " + print(e2.selectionSet);
  },
  FragmentDefinition(e2) {
    var r2 = "fragment " + e2.name.value;
    r2 += " on " + e2.typeCondition.name.value;
    if (hasItems(e2.directives)) {
      r2 += " " + e2.directives.map(y.Directive).join(" ");
    }
    return r2 + " " + print(e2.selectionSet);
  },
  Directive(e2) {
    var r2 = "@" + e2.name.value;
    if (hasItems(e2.arguments)) {
      r2 += "(" + e2.arguments.map(y.Argument).join(", ") + ")";
    }
    return r2;
  },
  NamedType: (e2) => e2.name.value,
  ListType: (e2) => "[" + print(e2.type) + "]",
  NonNullType: (e2) => print(e2.type) + "!"
};
function print(e2) {
  return y[e2.kind] ? y[e2.kind](e2) : "";
}

// node_modules/@urql/core/dist/urql-core-chunk.mjs
var rehydrateGraphQlError = (e2) => {
  if (e2 && e2.message && (e2.extensions || "GraphQLError" === e2.name)) {
    return e2;
  } else if ("object" == typeof e2 && e2.message) {
    return new GraphQLError(e2.message, e2.nodes, e2.source, e2.positions, e2.path, e2, e2.extensions || {});
  } else {
    return new GraphQLError(e2);
  }
};
var CombinedError = class extends Error {
  constructor(r2) {
    var e2 = (r2.graphQLErrors || []).map(rehydrateGraphQlError);
    var t2 = ((r3, e3) => {
      var t3 = "";
      if (r3) {
        return `[Network] ${r3.message}`;
      }
      if (e3) {
        for (var a2 of e3) {
          if (t3) {
            t3 += "\n";
          }
          t3 += `[GraphQL] ${a2.message}`;
        }
      }
      return t3;
    })(r2.networkError, e2);
    super(t2);
    this.name = "CombinedError";
    this.message = t2;
    this.graphQLErrors = e2;
    this.networkError = r2.networkError;
    this.response = r2.response;
  }
  toString() {
    return this.message;
  }
};
var phash = (r2, e2) => {
  var t2 = 0 | (e2 || 5381);
  for (var a2 = 0, o2 = 0 | r2.length; a2 < o2; a2++) {
    t2 = (t2 << 5) + t2 + r2.charCodeAt(a2);
  }
  return t2;
};
var i2 = /* @__PURE__ */ new Set();
var f2 = /* @__PURE__ */ new WeakMap();
var stringify = (r2) => {
  if (null === r2 || i2.has(r2)) {
    return "null";
  } else if ("object" != typeof r2) {
    return JSON.stringify(r2) || "";
  } else if (r2.toJSON) {
    return stringify(r2.toJSON());
  } else if (Array.isArray(r2)) {
    var e2 = "[";
    for (var t2 of r2) {
      if (e2.length > 1) {
        e2 += ",";
      }
      e2 += stringify(t2) || "null";
    }
    return e2 += "]";
  } else if (v2 !== NoopConstructor && r2 instanceof v2 || l2 !== NoopConstructor && r2 instanceof l2) {
    return "null";
  }
  var a2 = Object.keys(r2).sort();
  if (!a2.length && r2.constructor && r2.constructor !== Object) {
    var o2 = f2.get(r2) || Math.random().toString(36).slice(2);
    f2.set(r2, o2);
    return stringify({
      __key: o2
    });
  }
  i2.add(r2);
  var n2 = "{";
  for (var s2 of a2) {
    var c4 = stringify(r2[s2]);
    if (c4) {
      if (n2.length > 1) {
        n2 += ",";
      }
      n2 += stringify(s2) + ":" + c4;
    }
  }
  i2.delete(r2);
  return n2 += "}";
};
var extract = (r2, e2, t2) => {
  if (null == t2 || "object" != typeof t2 || t2.toJSON || i2.has(t2)) {
  } else if (Array.isArray(t2)) {
    for (var a2 = 0, o2 = t2.length; a2 < o2; a2++) {
      extract(r2, `${e2}.${a2}`, t2[a2]);
    }
  } else if (t2 instanceof v2 || t2 instanceof l2) {
    r2.set(e2, t2);
  } else {
    i2.add(t2);
    for (var n2 of Object.keys(t2)) {
      extract(r2, `${e2}.${n2}`, t2[n2]);
    }
  }
};
var stringifyVariables = (r2) => {
  i2.clear();
  return stringify(r2);
};
var NoopConstructor = class {
};
var v2 = "undefined" != typeof File ? File : NoopConstructor;
var l2 = "undefined" != typeof Blob ? Blob : NoopConstructor;
var c2 = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g;
var d2 = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g;
var replaceOutsideStrings = (r2, e2) => e2 % 2 == 0 ? r2.replace(d2, "\n") : r2;
var sanitizeDocument = (r2) => r2.split(c2).map(replaceOutsideStrings).join("").trim();
var p2 = /* @__PURE__ */ new Map();
var u2 = /* @__PURE__ */ new Map();
var stringifyDocument = (r2) => {
  var t2;
  if ("string" == typeof r2) {
    t2 = sanitizeDocument(r2);
  } else if (r2.loc && u2.get(r2.__key) === r2) {
    t2 = r2.loc.source.body;
  } else {
    t2 = p2.get(r2) || sanitizeDocument(print(r2));
    p2.set(r2, t2);
  }
  if ("string" != typeof r2 && !r2.loc) {
    r2.loc = {
      start: 0,
      end: t2.length,
      source: {
        body: t2,
        name: "gql",
        locationOffset: {
          line: 1,
          column: 1
        }
      }
    };
  }
  return t2;
};
var hashDocument = (r2) => {
  var e2 = phash(stringifyDocument(r2));
  if (r2.definitions) {
    var t2 = getOperationName(r2);
    if (t2) {
      e2 = phash(`
# ${t2}`, e2);
    }
  }
  return e2;
};
var keyDocument = (r2) => {
  var e2;
  var a2;
  if ("string" == typeof r2) {
    e2 = hashDocument(r2);
    a2 = u2.get(e2) || parse(r2, {
      noLocation: true
    });
  } else {
    e2 = r2.__key || hashDocument(r2);
    a2 = u2.get(e2) || r2;
  }
  if (!a2.loc) {
    stringifyDocument(a2);
  }
  a2.__key = e2;
  u2.set(e2, a2);
  return a2;
};
var createRequest = (r2, e2, t2) => {
  var a2 = e2 || {};
  var o2 = keyDocument(r2);
  var n2 = stringifyVariables(a2);
  var s2 = o2.__key;
  if ("{}" !== n2) {
    s2 = phash(n2, s2);
  }
  return {
    key: s2,
    query: o2,
    variables: a2,
    extensions: t2
  };
};
var getOperationName = (r2) => {
  for (var e2 of r2.definitions) {
    if (e2.kind === e.OPERATION_DEFINITION) {
      return e2.name ? e2.name.value : void 0;
    }
  }
};
var getOperationType = (r2) => {
  for (var e2 of r2.definitions) {
    if (e2.kind === e.OPERATION_DEFINITION) {
      return e2.operation;
    }
  }
};
var makeResult = (r2, e2, t2) => {
  if (!("data" in e2 || "errors" in e2 && Array.isArray(e2.errors))) {
    throw new Error("No Content");
  }
  var a2 = "subscription" === r2.kind;
  return {
    operation: r2,
    data: e2.data,
    error: Array.isArray(e2.errors) ? new CombinedError({
      graphQLErrors: e2.errors,
      response: t2
    }) : void 0,
    extensions: e2.extensions ? {
      ...e2.extensions
    } : void 0,
    hasNext: null == e2.hasNext ? a2 : e2.hasNext,
    stale: false
  };
};
var deepMerge = (r2, e2) => {
  if ("object" == typeof r2 && null != r2) {
    if (!r2.constructor || r2.constructor === Object || Array.isArray(r2)) {
      r2 = Array.isArray(r2) ? [...r2] : {
        ...r2
      };
      for (var t2 of Object.keys(e2)) {
        r2[t2] = deepMerge(r2[t2], e2[t2]);
      }
      return r2;
    }
  }
  return e2;
};
var mergeResultPatch = (r2, e2, t2, a2) => {
  var o2 = r2.error ? r2.error.graphQLErrors : [];
  var n2 = !!r2.extensions || !!e2.extensions;
  var s2 = {
    ...r2.extensions,
    ...e2.extensions
  };
  var i3 = e2.incremental;
  if ("path" in e2) {
    i3 = [e2];
  }
  var f4 = {
    data: r2.data
  };
  if (i3) {
    var _loop = function(r3) {
      if (Array.isArray(r3.errors)) {
        o2.push(...r3.errors);
      }
      if (r3.extensions) {
        Object.assign(s2, r3.extensions);
        n2 = true;
      }
      var e3 = "data";
      var t3 = f4;
      var i4 = [];
      if (r3.path) {
        i4 = r3.path;
      } else if (a2) {
        var v5 = a2.find((e4) => e4.id === r3.id);
        if (r3.subPath) {
          i4 = [...v5.path, ...r3.subPath];
        } else {
          i4 = v5.path;
        }
      }
      for (var l4 = 0, c4 = i4.length; l4 < c4; e3 = i4[l4++]) {
        t3 = t3[e3] = Array.isArray(t3[e3]) ? [...t3[e3]] : {
          ...t3[e3]
        };
      }
      if (r3.items) {
        var d4 = +e3 >= 0 ? e3 : 0;
        for (var p4 = 0, u3 = r3.items.length; p4 < u3; p4++) {
          t3[d4 + p4] = deepMerge(t3[d4 + p4], r3.items[p4]);
        }
      } else if (void 0 !== r3.data) {
        t3[e3] = deepMerge(t3[e3], r3.data);
      }
    };
    for (var v4 of i3) {
      _loop(v4);
    }
  } else {
    f4.data = e2.data || r2.data;
    o2 = e2.errors || o2;
  }
  return {
    operation: r2.operation,
    data: f4.data,
    error: o2.length ? new CombinedError({
      graphQLErrors: o2,
      response: t2
    }) : void 0,
    extensions: n2 ? s2 : void 0,
    hasNext: null != e2.hasNext ? e2.hasNext : r2.hasNext,
    stale: false
  };
};
var makeErrorResult = (r2, e2, t2) => ({
  operation: r2,
  data: void 0,
  error: new CombinedError({
    networkError: e2,
    response: t2
  }),
  extensions: void 0,
  hasNext: false,
  stale: false
});
function makeFetchBody(r2) {
  return {
    query: r2.extensions && r2.extensions.persistedQuery && !r2.extensions.persistedQuery.miss ? void 0 : stringifyDocument(r2.query),
    operationName: getOperationName(r2.query),
    variables: r2.variables || void 0,
    extensions: r2.extensions
  };
}
var makeFetchURL = (r2, e2) => {
  var t2 = "query" === r2.kind && r2.context.preferGetMethod;
  if (!t2 || !e2) {
    return r2.context.url;
  }
  var a2 = new URL(r2.context.url);
  for (var o2 in e2) {
    var n2 = e2[o2];
    if (n2) {
      a2.searchParams.set(o2, "object" == typeof n2 ? stringifyVariables(n2) : n2);
    }
  }
  var s2 = a2.toString();
  if (s2.length > 2047 && "force" !== t2) {
    r2.context.preferGetMethod = false;
    return r2.context.url;
  }
  return s2;
};
var serializeBody = (r2, e2) => {
  if (e2 && !("query" === r2.kind && !!r2.context.preferGetMethod)) {
    var t2 = stringifyVariables(e2);
    var a2 = ((r3) => {
      var e3 = /* @__PURE__ */ new Map();
      if (v2 !== NoopConstructor || l2 !== NoopConstructor) {
        i2.clear();
        extract(e3, "variables", r3);
      }
      return e3;
    })(e2.variables);
    if (a2.size) {
      var o2 = new FormData();
      o2.append("operations", t2);
      o2.append("map", stringifyVariables({
        ...[...a2.keys()].map((r3) => [r3])
      }));
      var n2 = 0;
      for (var s2 of a2.values()) {
        o2.append("" + n2++, s2);
      }
      return o2;
    }
    return t2;
  }
};
var makeFetchOptions = (r2, e2) => {
  var t2 = {
    accept: "subscription" === r2.kind ? "text/event-stream, multipart/mixed" : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed"
  };
  var a2 = ("function" == typeof r2.context.fetchOptions ? r2.context.fetchOptions() : r2.context.fetchOptions) || {};
  if (a2.headers) {
    for (var o2 in a2.headers) {
      t2[o2.toLowerCase()] = a2.headers[o2];
    }
  }
  var n2 = serializeBody(r2, e2);
  if ("string" == typeof n2 && !t2["content-type"]) {
    t2["content-type"] = "application/json";
  }
  return {
    ...a2,
    method: n2 ? "POST" : "GET",
    body: n2,
    headers: t2
  };
};
var h = "undefined" != typeof TextDecoder ? new TextDecoder() : null;
var y2 = /boundary="?([^=";]+)"?/i;
var x = /data: ?([^\n]+)/;
var toString = (r2) => "Buffer" === r2.constructor.name ? r2.toString() : h.decode(r2);
async function* streamBody(r2) {
  if (r2.body[Symbol.asyncIterator]) {
    for await (var e2 of r2.body) {
      yield toString(e2);
    }
  } else {
    var t2 = r2.body.getReader();
    var a2;
    try {
      while (!(a2 = await t2.read()).done) {
        yield toString(a2.value);
      }
    } finally {
      t2.cancel();
    }
  }
}
async function* split(r2, e2) {
  var t2 = "";
  var a2;
  for await (var o2 of r2) {
    t2 += o2;
    while ((a2 = t2.indexOf(e2)) > -1) {
      yield t2.slice(0, a2);
      t2 = t2.slice(a2 + e2.length);
    }
  }
}
async function* fetchOperation(r2, e2, t2) {
  var a2 = true;
  var o2 = null;
  var n2;
  try {
    yield await Promise.resolve();
    var s2 = (n2 = await (r2.context.fetch || fetch)(e2, t2)).headers.get("Content-Type") || "";
    var i3;
    if (/multipart\/mixed/i.test(s2)) {
      i3 = async function* parseMultipartMixed(r3, e3) {
        var t3 = r3.match(y2);
        var a3 = "--" + (t3 ? t3[1] : "-");
        var o3 = true;
        var n3;
        for await (var s3 of split(streamBody(e3), "\r\n" + a3)) {
          if (o3) {
            o3 = false;
            var i4 = s3.indexOf(a3);
            if (i4 > -1) {
              s3 = s3.slice(i4 + a3.length);
            } else {
              continue;
            }
          }
          try {
            yield n3 = JSON.parse(s3.slice(s3.indexOf("\r\n\r\n") + 4));
          } catch (r4) {
            if (!n3) {
              throw r4;
            }
          }
          if (n3 && false === n3.hasNext) {
            break;
          }
        }
        if (n3 && false !== n3.hasNext) {
          yield {
            hasNext: false
          };
        }
      }(s2, n2);
    } else if (/text\/event-stream/i.test(s2)) {
      i3 = async function* parseEventStream(r3) {
        var e3;
        for await (var t3 of split(streamBody(r3), "\n\n")) {
          var a3 = t3.match(x);
          if (a3) {
            var o3 = a3[1];
            try {
              yield e3 = JSON.parse(o3);
            } catch (r4) {
              if (!e3) {
                throw r4;
              }
            }
            if (e3 && false === e3.hasNext) {
              break;
            }
          }
        }
        if (e3 && false !== e3.hasNext) {
          yield {
            hasNext: false
          };
        }
      }(n2);
    } else if (!/text\//i.test(s2)) {
      i3 = async function* parseJSON(r3) {
        yield JSON.parse(await r3.text());
      }(n2);
    } else {
      throw new Error(await n2.text());
    }
    var f4;
    for await (var v4 of i3) {
      if (v4.pending && !o2) {
        f4 = v4.pending;
      } else if (v4.pending) {
        f4 = [...f4, ...v4.pending];
      }
      o2 = o2 ? mergeResultPatch(o2, v4, n2, f4) : makeResult(r2, v4, n2);
      a2 = false;
      yield o2;
      a2 = true;
    }
    if (!o2) {
      yield o2 = makeResult(r2, {}, n2);
    }
  } catch (e3) {
    if (!a2) {
      throw e3;
    }
    yield makeErrorResult(r2, n2 && (n2.status < 200 || n2.status >= 300) && n2.statusText ? new Error(n2.statusText) : e3, n2);
  }
}
function makeFetchSource(r2, e2, t2) {
  var a2;
  if ("undefined" != typeof AbortController) {
    t2.signal = (a2 = new AbortController()).signal;
  }
  return onEnd(() => {
    if (a2) {
      a2.abort();
    }
  })(filter((r3) => !!r3)(fromAsyncIterable(fetchOperation(r2, e2, t2))));
}

// node_modules/@urql/core/dist/urql-core.mjs
var collectTypes = (e2, r2) => {
  if (Array.isArray(e2)) {
    for (var t2 of e2) {
      collectTypes(t2, r2);
    }
  } else if ("object" == typeof e2 && null !== e2) {
    for (var n2 in e2) {
      if ("__typename" === n2 && "string" == typeof e2[n2]) {
        r2.add(e2[n2]);
      } else {
        collectTypes(e2[n2], r2);
      }
    }
  }
  return r2;
};
var formatNode = (r2) => {
  if ("definitions" in r2) {
    var t2 = [];
    for (var n2 of r2.definitions) {
      var a2 = formatNode(n2);
      t2.push(a2);
    }
    return {
      ...r2,
      definitions: t2
    };
  }
  if ("directives" in r2 && r2.directives && r2.directives.length) {
    var o2 = [];
    var i3 = {};
    for (var s2 of r2.directives) {
      var c4 = s2.name.value;
      if ("_" !== c4[0]) {
        o2.push(s2);
      } else {
        c4 = c4.slice(1);
      }
      i3[c4] = s2;
    }
    r2 = {
      ...r2,
      directives: o2,
      _directives: i3
    };
  }
  if ("selectionSet" in r2) {
    var u3 = [];
    var p4 = r2.kind === e.OPERATION_DEFINITION;
    if (r2.selectionSet) {
      for (var d4 of r2.selectionSet.selections || []) {
        p4 = p4 || d4.kind === e.FIELD && "__typename" === d4.name.value && !d4.alias;
        var v4 = formatNode(d4);
        u3.push(v4);
      }
      if (!p4) {
        u3.push({
          kind: e.FIELD,
          name: {
            kind: e.NAME,
            value: "__typename"
          },
          _generated: true
        });
      }
      return {
        ...r2,
        selectionSet: {
          ...r2.selectionSet,
          selections: u3
        }
      };
    }
  }
  return r2;
};
var I = /* @__PURE__ */ new Map();
var formatDocument = (e2) => {
  var t2 = keyDocument(e2);
  var n2 = I.get(t2.__key);
  if (!n2) {
    I.set(t2.__key, n2 = formatNode(t2));
    Object.defineProperty(n2, "__key", {
      value: t2.__key,
      enumerable: false
    });
  }
  return n2;
};
var maskTypename = (e2, r2) => {
  if (!e2 || "object" != typeof e2) {
    return e2;
  } else if (Array.isArray(e2)) {
    return e2.map((e3) => maskTypename(e3));
  } else if (e2 && "object" == typeof e2 && (r2 || "__typename" in e2)) {
    var t2 = {};
    for (var n2 in e2) {
      if ("__typename" === n2) {
        Object.defineProperty(t2, "__typename", {
          enumerable: false,
          value: e2.__typename
        });
      } else {
        t2[n2] = maskTypename(e2[n2]);
      }
    }
    return t2;
  } else {
    return e2;
  }
};
function withPromise(e2) {
  var source$ = (r2) => e2(r2);
  source$.toPromise = () => toPromise(take(1)(filter((e3) => !e3.stale && !e3.hasNext)(source$)));
  source$.then = (e3, r2) => source$.toPromise().then(e3, r2);
  source$.subscribe = (e3) => subscribe(e3)(source$);
  return source$;
}
function makeOperation(e2, r2, t2) {
  return {
    ...r2,
    kind: e2,
    context: r2.context ? {
      ...r2.context,
      ...t2
    } : t2 || r2.context
  };
}
var addMetadata = (e2, r2) => makeOperation(e2.kind, e2, {
  meta: {
    ...e2.context.meta,
    ...r2
  }
});
var noop = () => {
};
function gql(n2) {
  var a2 = /* @__PURE__ */ new Map();
  var o2 = [];
  var i3 = [];
  var s2 = Array.isArray(n2) ? n2[0] : n2 || "";
  for (var c4 = 1; c4 < arguments.length; c4++) {
    var u3 = arguments[c4];
    if (u3 && u3.definitions) {
      i3.push(u3);
    } else {
      s2 += u3;
    }
    s2 += arguments[0][c4];
  }
  i3.unshift(keyDocument(s2));
  for (var p4 of i3) {
    for (var d4 of p4.definitions) {
      if (d4.kind === e.FRAGMENT_DEFINITION) {
        var v4 = d4.name.value;
        var f4 = stringifyDocument(d4);
        if (!a2.has(v4)) {
          a2.set(v4, f4);
          o2.push(d4);
        } else if (a2.get(v4) !== f4) {
          console.warn("[WARNING: Duplicate Fragment] A fragment with name `" + v4 + "` already exists in this document.\nWhile fragment names may not be unique across your source, each name must be unique per document.");
        }
      } else {
        o2.push(d4);
      }
    }
  }
  return keyDocument({
    kind: e.DOCUMENT,
    definitions: o2
  });
}
var shouldSkip = ({ kind: e2 }) => "mutation" !== e2 && "query" !== e2;
var mapTypeNames = (e2) => {
  var r2 = formatDocument(e2.query);
  if (r2 !== e2.query) {
    var t2 = makeOperation(e2.kind, e2);
    t2.query = r2;
    return t2;
  } else {
    return e2;
  }
};
var cacheExchange = ({ forward: e2, client: r2, dispatchDebug: t2 }) => {
  var n2 = /* @__PURE__ */ new Map();
  var a2 = /* @__PURE__ */ new Map();
  var isOperationCached = (e3) => "query" === e3.kind && "network-only" !== e3.context.requestPolicy && ("cache-only" === e3.context.requestPolicy || n2.has(e3.key));
  return (o2) => {
    var i3 = map((e3) => {
      var a3 = n2.get(e3.key);
      t2({
        operation: e3,
        ...a3 ? {
          type: "cacheHit",
          message: "The result was successfully retried from the cache"
        } : {
          type: "cacheMiss",
          message: "The result could not be retrieved from the cache"
        },
        source: "cacheExchange"
      });
      var o3 = a3;
      if (true) {
        o3 = {
          ...o3,
          operation: true ? addMetadata(e3, {
            cacheOutcome: a3 ? "hit" : "miss"
          }) : e3
        };
      }
      if ("cache-and-network" === e3.context.requestPolicy) {
        o3.stale = true;
        reexecuteOperation(r2, e3);
      }
      return o3;
    })(filter((e3) => !shouldSkip(e3) && isOperationCached(e3))(o2));
    var s2 = onPush((e3) => {
      var { operation: o3 } = e3;
      if (!o3) {
        return;
      }
      var i4 = o3.context.additionalTypenames || [];
      if ("subscription" !== e3.operation.kind) {
        i4 = ((e4) => [...collectTypes(e4, /* @__PURE__ */ new Set())])(e3.data).concat(i4);
      }
      if ("mutation" === e3.operation.kind || "subscription" === e3.operation.kind) {
        var s3 = /* @__PURE__ */ new Set();
        t2({
          type: "cacheInvalidation",
          message: `The following typenames have been invalidated: ${i4}`,
          operation: o3,
          data: {
            typenames: i4,
            response: e3
          },
          source: "cacheExchange"
        });
        for (var c4 = 0; c4 < i4.length; c4++) {
          var u3 = i4[c4];
          var p4 = a2.get(u3);
          if (!p4) {
            a2.set(u3, p4 = /* @__PURE__ */ new Set());
          }
          for (var d4 of p4.values()) {
            s3.add(d4);
          }
          p4.clear();
        }
        for (var v4 of s3.values()) {
          if (n2.has(v4)) {
            o3 = n2.get(v4).operation;
            n2.delete(v4);
            reexecuteOperation(r2, o3);
          }
        }
      } else if ("query" === o3.kind && e3.data) {
        n2.set(o3.key, e3);
        for (var f4 = 0; f4 < i4.length; f4++) {
          var l4 = i4[f4];
          var h2 = a2.get(l4);
          if (!h2) {
            a2.set(l4, h2 = /* @__PURE__ */ new Set());
          }
          h2.add(o3.key);
        }
      }
    })(e2(filter((e3) => "query" !== e3.kind || "cache-only" !== e3.context.requestPolicy)(map((e3) => true ? addMetadata(e3, {
      cacheOutcome: "miss"
    }) : e3)(merge([map(mapTypeNames)(filter((e3) => !shouldSkip(e3) && !isOperationCached(e3))(o2)), filter((e3) => shouldSkip(e3))(o2)])))));
    return merge([i3, s2]);
  };
};
var reexecuteOperation = (e2, r2) => e2.reexecuteOperation(makeOperation(r2.kind, r2, {
  requestPolicy: "network-only"
}));
var T = /* @__PURE__ */ new Set();
var ssrExchange = (e2 = {}) => {
  var r2 = !!e2.staleWhileRevalidate;
  var t2 = !!e2.includeExtensions;
  var a2 = {};
  var o2 = [];
  var invalidate = (e3) => {
    o2.push(e3.operation.key);
    if (1 === o2.length) {
      Promise.resolve().then(() => {
        var e4;
        while (e4 = o2.shift()) {
          a2[e4] = null;
        }
      });
    }
  };
  var ssr = ({ client: o3, forward: i3 }) => (s2) => {
    var c4 = e2 && "boolean" == typeof e2.isClient ? !!e2.isClient : !o3.suspense;
    var u3 = i3(map(mapTypeNames)(filter((e3) => "teardown" === e3.kind || !a2[e3.key] || !!a2[e3.key].hasNext || "network-only" === e3.context.requestPolicy)(s2)));
    var p4 = map((e3) => {
      var i4 = ((e4, r3, t3) => ({
        operation: e4,
        data: r3.data ? JSON.parse(r3.data) : void 0,
        extensions: t3 && r3.extensions ? JSON.parse(r3.extensions) : void 0,
        error: r3.error ? new CombinedError({
          networkError: r3.error.networkError ? new Error(r3.error.networkError) : void 0,
          graphQLErrors: r3.error.graphQLErrors
        }) : void 0,
        stale: false,
        hasNext: !!r3.hasNext
      }))(e3, a2[e3.key], t2);
      if (r2 && !T.has(e3.key)) {
        i4.stale = true;
        T.add(e3.key);
        reexecuteOperation(o3, e3);
      }
      return {
        ...i4,
        operation: true ? addMetadata(e3, {
          cacheOutcome: "hit"
        }) : e3
      };
    })(filter((e3) => "teardown" !== e3.kind && !!a2[e3.key] && "network-only" !== e3.context.requestPolicy)(s2));
    if (!c4) {
      u3 = onPush((e3) => {
        var { operation: r3 } = e3;
        if ("mutation" !== r3.kind) {
          var n2 = ((e4, r4) => {
            var t3 = {
              data: JSON.stringify(e4.data),
              hasNext: e4.hasNext
            };
            if (void 0 !== e4.data) {
              t3.data = JSON.stringify(e4.data);
            }
            if (r4 && void 0 !== e4.extensions) {
              t3.extensions = JSON.stringify(e4.extensions);
            }
            if (e4.error) {
              t3.error = {
                graphQLErrors: e4.error.graphQLErrors.map((e5) => {
                  if (!e5.path && !e5.extensions) {
                    return e5.message;
                  }
                  return {
                    message: e5.message,
                    path: e5.path,
                    extensions: e5.extensions
                  };
                })
              };
              if (e4.error.networkError) {
                t3.error.networkError = "" + e4.error.networkError;
              }
            }
            return t3;
          })(e3, t2);
          a2[r3.key] = n2;
        }
      })(u3);
    } else {
      p4 = onPush(invalidate)(p4);
    }
    return merge([u3, p4]);
  };
  ssr.restoreData = (e3) => {
    for (var r3 in e3) {
      if (null !== a2[r3]) {
        a2[r3] = e3[r3];
      }
    }
  };
  ssr.extractData = () => {
    var e3 = {};
    for (var r3 in a2) {
      if (null != a2[r3]) {
        e3[r3] = a2[r3];
      }
    }
    return e3;
  };
  if (e2 && e2.initialState) {
    ssr.restoreData(e2.initialState);
  }
  return ssr;
};
var subscriptionExchange = ({ forwardSubscription: e2, enableAllOperations: r2, isSubscriptionOperation: t2 }) => ({ client: n2, forward: i3 }) => {
  var u3 = t2 || ((e3) => "subscription" === e3.kind || !!r2 && ("query" === e3.kind || "mutation" === e3.kind));
  return (r3) => {
    var t3 = mergeMap((t4) => {
      var { key: i4 } = t4;
      var u4 = filter((e3) => "teardown" === e3.kind && e3.key === i4)(r3);
      return takeUntil(u4)(((r4) => {
        var t5 = e2(makeFetchBody(r4), r4);
        return make((e3) => {
          var a2 = false;
          var i5;
          var u5;
          function nextResult(t6) {
            e3.next(u5 = u5 ? mergeResultPatch(u5, t6) : makeResult(r4, t6));
          }
          Promise.resolve().then(() => {
            if (a2) {
              return;
            }
            i5 = t5.subscribe({
              next: nextResult,
              error(t6) {
                if (Array.isArray(t6)) {
                  nextResult({
                    errors: t6
                  });
                } else {
                  e3.next(makeErrorResult(r4, t6));
                }
                e3.complete();
              },
              complete() {
                if (!a2) {
                  a2 = true;
                  if ("subscription" === r4.kind) {
                    n2.reexecuteOperation(makeOperation("teardown", r4, r4.context));
                  }
                  if (u5 && u5.hasNext) {
                    nextResult({
                      hasNext: false
                    });
                  }
                  e3.complete();
                }
              }
            });
          });
          return () => {
            a2 = true;
            if (i5) {
              i5.unsubscribe();
            }
          };
        });
      })(t4));
    })(filter((e3) => "teardown" !== e3.kind && u3(e3))(r3));
    var p4 = i3(filter((e3) => "teardown" === e3.kind || !u3(e3))(r3));
    return merge([t3, p4]);
  };
};
var debugExchange = ({ forward: e2 }) => {
  if (false) {
    return (r2) => e2(r2);
  } else {
    return (r2) => onPush((e3) => console.log("[Exchange debug]: Completed operation: ", e3))(e2(onPush((e3) => console.log("[Exchange debug]: Incoming operation: ", e3))(r2)));
  }
};
var dedupExchange = ({ forward: e2 }) => (r2) => e2(r2);
var fetchExchange = ({ forward: e2, dispatchDebug: r2 }) => (t2) => {
  var n2 = mergeMap((e3) => {
    var n3 = makeFetchBody(e3);
    var o3 = makeFetchURL(e3, n3);
    var i3 = makeFetchOptions(e3, n3);
    r2({
      type: "fetchRequest",
      message: "A fetch request is being executed.",
      operation: e3,
      data: {
        url: o3,
        fetchOptions: i3
      },
      source: "fetchExchange"
    });
    var s2 = takeUntil(filter((r3) => "teardown" === r3.kind && r3.key === e3.key)(t2))(makeFetchSource(e3, o3, i3));
    if (true) {
      return onPush((t3) => {
        var n4 = !t3.data ? t3.error : void 0;
        r2({
          type: n4 ? "fetchError" : "fetchSuccess",
          message: `A ${n4 ? "failed" : "successful"} fetch response has been returned.`,
          operation: e3,
          data: {
            url: o3,
            fetchOptions: i3,
            value: n4 || t3
          },
          source: "fetchExchange"
        });
      })(s2);
    }
    return s2;
  })(filter((e3) => "teardown" !== e3.kind && ("subscription" !== e3.kind || !!e3.context.fetchSubscriptions))(t2));
  var o2 = e2(filter((e3) => "teardown" === e3.kind || "subscription" === e3.kind && !e3.context.fetchSubscriptions)(t2));
  return merge([n2, o2]);
};
var composeExchanges = (e2) => ({ client: r2, forward: t2, dispatchDebug: n2 }) => e2.reduceRight((e3, t3) => {
  var a2 = false;
  return t3({
    client: r2,
    forward(r3) {
      if (true) {
        if (a2) {
          throw new Error("forward() must only be called once in each Exchange.");
        }
        a2 = true;
      }
      return share(e3(share(r3)));
    },
    dispatchDebug(e4) {
      n2({
        timestamp: Date.now(),
        source: t3.name,
        ...e4
      });
    }
  });
}, t2);
var mapExchange = ({ onOperation: e2, onResult: r2, onError: t2 }) => ({ forward: n2 }) => (a2) => mergeMap((e3) => {
  if (t2 && e3.error) {
    t2(e3.error, e3.operation);
  }
  var n3 = r2 && r2(e3) || e3;
  return "then" in n3 ? fromPromise(n3) : fromValue(n3);
})(n2(mergeMap((r3) => {
  var t3 = e2 && e2(r3) || r3;
  return "then" in t3 ? fromPromise(t3) : fromValue(t3);
})(a2)));
var fallbackExchange = ({ dispatchDebug: e2 }) => (r2) => {
  if (true) {
    r2 = onPush((r3) => {
      if ("teardown" !== r3.kind && true) {
        var t2 = `No exchange has handled operations of kind "${r3.kind}". Check whether you've added an exchange responsible for these operations.`;
        e2({
          type: "fallbackCatch",
          message: t2,
          operation: r3,
          source: "fallbackExchange"
        });
        console.warn(t2);
      }
    })(r2);
  }
  return filter((e3) => false)(r2);
};
var C = function Client(e2) {
  if (!e2.url) {
    throw new Error("You are creating an urql-client without a url.");
  }
  var r2 = 0;
  var t2 = /* @__PURE__ */ new Map();
  var n2 = /* @__PURE__ */ new Map();
  var a2 = /* @__PURE__ */ new Set();
  var o2 = [];
  var i3 = {
    url: e2.url,
    fetchSubscriptions: e2.fetchSubscriptions,
    fetchOptions: e2.fetchOptions,
    fetch: e2.fetch,
    preferGetMethod: e2.preferGetMethod,
    requestPolicy: e2.requestPolicy || "cache-first"
  };
  var s2 = makeSubject();
  function nextOperation(e3) {
    if ("mutation" === e3.kind || "teardown" === e3.kind || !a2.has(e3.key)) {
      if ("teardown" === e3.kind) {
        a2.delete(e3.key);
      } else if ("mutation" !== e3.kind) {
        a2.add(e3.key);
      }
      s2.next(e3);
    }
  }
  var c4 = false;
  function dispatchOperation(e3) {
    if (e3) {
      nextOperation(e3);
    }
    if (!c4) {
      c4 = true;
      while (c4 && (e3 = o2.shift())) {
        nextOperation(e3);
      }
      c4 = false;
    }
  }
  var makeResultSource = (r3) => {
    var i4 = takeUntil(filter((e3) => "teardown" === e3.kind && e3.key === r3.key)(s2.source))(filter((e3) => e3.operation.kind === r3.kind && e3.operation.key === r3.key && (!e3.operation.context._instance || e3.operation.context._instance === r3.context._instance))(O));
    if (e2.maskTypename) {
      i4 = map((e3) => ({
        ...e3,
        data: maskTypename(e3.data, true)
      }))(i4);
    }
    if ("query" !== r3.kind) {
      i4 = takeWhile((e3) => !!e3.hasNext, true)(i4);
    } else {
      i4 = switchMap((e3) => {
        var t3 = fromValue(e3);
        return e3.stale || e3.hasNext ? t3 : merge([t3, map(() => {
          e3.stale = true;
          return e3;
        })(take(1)(filter((e4) => e4.key === r3.key)(s2.source)))]);
      })(i4);
    }
    if ("mutation" !== r3.kind) {
      i4 = onEnd(() => {
        a2.delete(r3.key);
        t2.delete(r3.key);
        n2.delete(r3.key);
        c4 = false;
        for (var e3 = o2.length - 1; e3 >= 0; e3--) {
          if (o2[e3].key === r3.key) {
            o2.splice(e3, 1);
          }
        }
        nextOperation(makeOperation("teardown", r3, r3.context));
      })(onPush((e3) => {
        if (e3.stale) {
          for (var n3 of o2) {
            if (n3.key === e3.operation.key) {
              a2.delete(n3.key);
              break;
            }
          }
        } else if (!e3.hasNext) {
          a2.delete(r3.key);
        }
        t2.set(r3.key, e3);
      })(i4));
    } else {
      i4 = onStart(() => {
        nextOperation(r3);
      })(i4);
    }
    return share(i4);
  };
  var u3 = this instanceof Client ? this : Object.create(Client.prototype);
  var p4 = Object.assign(u3, {
    suspense: !!e2.suspense,
    operations$: s2.source,
    reexecuteOperation(e3) {
      if ("teardown" === e3.kind) {
        dispatchOperation(e3);
      } else if ("mutation" === e3.kind || n2.has(e3.key)) {
        var r3 = false;
        for (var t3 = 0; t3 < o2.length; t3++) {
          r3 = r3 || o2[t3].key === e3.key;
        }
        if (!r3) {
          a2.delete(e3.key);
        }
        o2.push(e3);
        Promise.resolve().then(dispatchOperation);
      }
    },
    createRequestOperation(e3, t3, n3) {
      if (!n3) {
        n3 = {};
      }
      var a3;
      if ("teardown" !== e3 && (a3 = getOperationType(t3.query)) !== e3) {
        throw new Error(`Expected operation of type "${e3}" but found "${a3}"`);
      }
      return makeOperation(e3, t3, {
        _instance: "mutation" === e3 ? r2 = r2 + 1 | 0 : void 0,
        ...i3,
        ...n3,
        requestPolicy: n3.requestPolicy || i3.requestPolicy,
        suspense: n3.suspense || false !== n3.suspense && p4.suspense
      });
    },
    executeRequestOperation(e3) {
      if ("mutation" === e3.kind) {
        return withPromise(makeResultSource(e3));
      }
      return withPromise(lazy(() => {
        var r3 = n2.get(e3.key);
        if (!r3) {
          n2.set(e3.key, r3 = makeResultSource(e3));
        }
        r3 = onStart(() => {
          dispatchOperation(e3);
        })(r3);
        var a3 = t2.get(e3.key);
        if ("query" === e3.kind && a3 && (a3.stale || a3.hasNext)) {
          return switchMap(fromValue)(merge([r3, filter((r4) => r4 === t2.get(e3.key))(fromValue(a3))]));
        } else {
          return r3;
        }
      }));
    },
    executeQuery(e3, r3) {
      var t3 = p4.createRequestOperation("query", e3, r3);
      return p4.executeRequestOperation(t3);
    },
    executeSubscription(e3, r3) {
      var t3 = p4.createRequestOperation("subscription", e3, r3);
      return p4.executeRequestOperation(t3);
    },
    executeMutation(e3, r3) {
      var t3 = p4.createRequestOperation("mutation", e3, r3);
      return p4.executeRequestOperation(t3);
    },
    readQuery(e3, r3, t3) {
      var n3 = null;
      subscribe((e4) => {
        n3 = e4;
      })(p4.query(e3, r3, t3)).unsubscribe();
      return n3;
    },
    query: (e3, r3, t3) => p4.executeQuery(createRequest(e3, r3), t3),
    subscription: (e3, r3, t3) => p4.executeSubscription(createRequest(e3, r3), t3),
    mutation: (e3, r3, t3) => p4.executeMutation(createRequest(e3, r3), t3)
  });
  var d4 = noop;
  if (true) {
    var { next: l4, source: x2 } = makeSubject();
    p4.subscribeToDebugTarget = (e3) => subscribe(e3)(x2);
    d4 = l4;
  }
  var g2 = composeExchanges(e2.exchanges);
  var O = share(g2({
    client: p4,
    dispatchDebug: d4,
    forward: fallbackExchange({
      dispatchDebug: d4
    })
  })(s2.source));
  publish(O);
  return p4;
};
var j = C;

// node_modules/urql/dist/urql.es.js
var r = __toESM(require_react());
var c3 = {};
var v3 = r.createContext(c3);
var f3 = v3.Provider;
var l3 = v3.Consumer;
v3.displayName = "UrqlContext";
var useClient = () => {
  var e2 = r.useContext(v3);
  if (e2 === c3 && true) {
    var t2 = "No client has been specified using urql's Provider. please create a client and add a Provider.";
    console.error(t2);
    throw new Error(t2);
  }
  return e2;
};
var d3 = {
  fetching: false,
  stale: false,
  error: void 0,
  data: void 0,
  extensions: void 0,
  operation: void 0
};
var areOperationsEqual = (e2, r2) => e2 === r2 || !(!e2 || !r2 || e2.key !== r2.key);
var computeNextState = (e2, r2) => {
  var t2 = {
    ...e2,
    ...r2,
    data: void 0 !== r2.data || r2.error ? r2.data : e2.data,
    fetching: !!r2.fetching,
    stale: !!r2.stale
  };
  return ((e3, r3) => {
    for (var t3 in e3) {
      if (!(t3 in r3)) {
        return true;
      }
    }
    for (var a2 in r3) {
      if ("operation" === a2 ? !areOperationsEqual(e3[a2], r3[a2]) : e3[a2] !== r3[a2]) {
        return true;
      }
    }
    return false;
  })(e2, t2) ? t2 : e2;
};
var hasDepsChanged = (e2, r2) => {
  for (var t2 = 0, a2 = r2.length; t2 < a2; t2++) {
    if (e2[t2] !== r2[t2]) {
      return true;
    }
  }
  return false;
};
var p3 = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
function deferDispatch(e2, r2) {
  if (p3 && p3.ReactCurrentOwner && p3.ReactCurrentOwner.current) {
    Promise.resolve(r2).then(e2);
  } else {
    e2(r2);
  }
}
function useMutation(i3) {
  var s2 = r.useRef(true);
  var o2 = useClient();
  var [c4, v4] = r.useState(d3);
  var f4 = r.useCallback((r2, c5) => {
    deferDispatch(v4, {
      ...d3,
      fetching: true
    });
    return toPromise(take(1)(filter((e2) => !e2.hasNext)(onPush((e2) => {
      if (s2.current) {
        deferDispatch(v4, {
          fetching: false,
          stale: e2.stale,
          data: e2.data,
          error: e2.error,
          extensions: e2.extensions,
          operation: e2.operation
        });
      }
    })(o2.executeMutation(createRequest(i3, r2), c5 || {})))));
  }, [o2, i3, v4]);
  r.useEffect(() => {
    s2.current = true;
    return () => {
      s2.current = false;
    };
  }, []);
  return [c4, f4];
}
function useRequest(t2, a2) {
  var n2 = r.useRef(void 0);
  return r.useMemo(() => {
    var r2 = createRequest(t2, a2);
    if (void 0 !== n2.current && n2.current.key === r2.key) {
      return n2.current;
    } else {
      n2.current = r2;
      return r2;
    }
  }, [t2, a2]);
}
var getCacheForClient = (e2) => {
  if (!e2._react) {
    var r2 = /* @__PURE__ */ new Set();
    var t2 = /* @__PURE__ */ new Map();
    if (e2.operations$) {
      subscribe((e3) => {
        if ("teardown" === e3.kind && r2.has(e3.key)) {
          r2.delete(e3.key);
          t2.delete(e3.key);
        }
      })(e2.operations$);
    }
    e2._react = {
      get: (e3) => t2.get(e3),
      set(e3, a2) {
        r2.delete(e3);
        t2.set(e3, a2);
      },
      dispose(e3) {
        r2.add(e3);
      }
    };
  }
  return e2._react;
};
var isSuspense = (e2, r2) => e2.suspense && (!r2 || false !== r2.suspense);
function useQuery(e2) {
  var t2 = useClient();
  var a2 = getCacheForClient(t2);
  var n2 = isSuspense(t2, e2.context);
  var c4 = useRequest(e2.query, e2.variables);
  var v4 = r.useMemo(() => {
    if (e2.pause) {
      return null;
    }
    var r2 = t2.executeQuery(c4, {
      requestPolicy: e2.requestPolicy,
      ...e2.context
    });
    return n2 ? onPush((e3) => {
      a2.set(c4.key, e3);
    })(r2) : r2;
  }, [a2, t2, c4, n2, e2.pause, e2.requestPolicy, e2.context]);
  var f4 = r.useCallback((e3, r2) => {
    if (!e3) {
      return {
        fetching: false
      };
    }
    var t3 = a2.get(c4.key);
    if (!t3) {
      var n3;
      var u3 = subscribe((e4) => {
        t3 = e4;
        if (n3) {
          n3(t3);
        }
      })(takeWhile(() => r2 && !n3 || !t3)(e3));
      if (null == t3 && r2) {
        var o2 = new Promise((e4) => {
          n3 = e4;
        });
        a2.set(c4.key, o2);
        throw o2;
      } else {
        u3.unsubscribe();
      }
    } else if (r2 && null != t3 && "then" in t3) {
      throw t3;
    }
    return t3 || {
      fetching: true
    };
  }, [a2, c4]);
  var l4 = [t2, c4, e2.requestPolicy, e2.context, e2.pause];
  var [p4, h2] = r.useState(() => [v4, computeNextState(d3, f4(v4, n2)), l4]);
  var y3 = p4[1];
  if (v4 !== p4[0] && hasDepsChanged(p4[2], l4)) {
    h2([v4, y3 = computeNextState(p4[1], f4(v4, n2)), l4]);
  }
  r.useEffect(() => {
    var e3 = p4[0];
    var r2 = p4[2][1];
    var t3 = false;
    var updateResult = (e4) => {
      t3 = true;
      deferDispatch(h2, (r3) => {
        var t4 = computeNextState(r3[1], e4);
        return r3[1] !== t4 ? [r3[0], t4, r3[2]] : r3;
      });
    };
    if (e3) {
      var n3 = subscribe(updateResult)(onEnd(() => {
        updateResult({
          fetching: false
        });
      })(e3));
      if (!t3) {
        updateResult({
          fetching: true
        });
      }
      return () => {
        a2.dispose(r2.key);
        n3.unsubscribe();
      };
    } else {
      updateResult({
        fetching: false
      });
    }
  }, [a2, p4[0], p4[2][1]]);
  var x2 = r.useCallback((r2) => {
    var i3 = {
      requestPolicy: e2.requestPolicy,
      ...e2.context,
      ...r2
    };
    deferDispatch(h2, (e3) => [n2 ? onPush((e4) => {
      a2.set(c4.key, e4);
    })(t2.executeQuery(c4, i3)) : t2.executeQuery(c4, i3), e3[1], l4]);
  }, [t2, a2, c4, n2, e2.requestPolicy, e2.context, e2.pause]);
  return [y3, x2];
}
function useSubscription(e2, t2) {
  var a2 = useClient();
  var n2 = useRequest(e2.query, e2.variables);
  var u3 = r.useRef(t2);
  u3.current = t2;
  var s2 = r.useMemo(() => !e2.pause ? a2.executeSubscription(n2, e2.context) : null, [a2, n2, e2.pause, e2.context]);
  var c4 = [a2, n2, e2.context, e2.pause];
  var [v4, f4] = r.useState(() => [s2, {
    ...d3,
    fetching: !!s2
  }, c4]);
  var l4 = v4[1];
  if (s2 !== v4[0] && hasDepsChanged(v4[2], c4)) {
    f4([s2, l4 = computeNextState(v4[1], {
      fetching: !!s2
    }), c4]);
  }
  r.useEffect(() => {
    var updateResult = (e3) => {
      deferDispatch(f4, (r2) => {
        var t3 = computeNextState(r2[1], e3);
        if (r2[1] === t3) {
          return r2;
        }
        if (u3.current && r2[1].data !== t3.data) {
          t3.data = u3.current(r2[1].data, t3.data);
        }
        return [r2[0], t3, r2[2]];
      });
    };
    if (v4[0]) {
      return subscribe(updateResult)(onEnd(() => {
        updateResult({
          fetching: !!s2
        });
      })(v4[0])).unsubscribe;
    } else {
      updateResult({
        fetching: false
      });
    }
  }, [v4[0]]);
  var p4 = r.useCallback((r2) => {
    var t3 = a2.executeSubscription(n2, {
      ...e2.context,
      ...r2
    });
    deferDispatch(f4, (e3) => [t3, e3[1], c4]);
  }, [a2, n2, e2.context, e2.pause]);
  return [l4, p4];
}
function Mutation(e2) {
  var r2 = useMutation(e2.query);
  return e2.children({
    ...r2[0],
    executeMutation: r2[1]
  });
}
function Query(e2) {
  var r2 = useQuery(e2);
  return e2.children({
    ...r2[0],
    executeQuery: r2[1]
  });
}
function Subscription(e2) {
  var r2 = useSubscription(e2, e2.handler);
  return e2.children({
    ...r2[0],
    executeSubscription: r2[1]
  });
}
export {
  C as Client,
  CombinedError,
  l3 as Consumer,
  v3 as Context,
  Mutation,
  f3 as Provider,
  Query,
  Subscription,
  cacheExchange,
  composeExchanges,
  j as createClient,
  createRequest,
  debugExchange,
  dedupExchange,
  mapExchange as errorExchange,
  fetchExchange,
  formatDocument,
  gql,
  makeErrorResult,
  makeOperation,
  makeResult,
  mapExchange,
  maskTypename,
  mergeResultPatch,
  ssrExchange,
  stringifyDocument,
  stringifyVariables,
  subscriptionExchange,
  useClient,
  useMutation,
  useQuery,
  useSubscription
};
//# sourceMappingURL=urql.js.map
