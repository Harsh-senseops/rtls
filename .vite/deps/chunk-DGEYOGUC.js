// node_modules/wonka/dist/wonka.mjs
var teardownPlaceholder = () => {
};
var e = teardownPlaceholder;
function start(e2) {
  return {
    tag: 0,
    0: e2
  };
}
function push(e2) {
  return {
    tag: 1,
    0: e2
  };
}
var asyncIteratorSymbol = () => "function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator";
var identity = (e2) => e2;
function filter(r2) {
  return (t) => (i) => {
    var a = e;
    t((e2) => {
      if (0 === e2) {
        i(0);
      } else if (0 === e2.tag) {
        a = e2[0];
        i(e2);
      } else if (!r2(e2[0])) {
        a(0);
      } else {
        i(e2);
      }
    });
  };
}
function map(e2) {
  return (r2) => (t) => r2((r3) => {
    if (0 === r3 || 0 === r3.tag) {
      t(r3);
    } else {
      t(push(e2(r3[0])));
    }
  });
}
function mergeMap(r2) {
  return (t) => (i) => {
    var a = [];
    var f = e;
    var n = false;
    var s = false;
    t((t2) => {
      if (s) {
      } else if (0 === t2) {
        s = true;
        if (!a.length) {
          i(0);
        }
      } else if (0 === t2.tag) {
        f = t2[0];
      } else {
        n = false;
        !function applyInnerSource(r3) {
          var t3 = e;
          r3((e2) => {
            if (0 === e2) {
              if (a.length) {
                var r4 = a.indexOf(t3);
                if (r4 > -1) {
                  (a = a.slice()).splice(r4, 1);
                }
                if (!a.length) {
                  if (s) {
                    i(0);
                  } else if (!n) {
                    n = true;
                    f(0);
                  }
                }
              }
            } else if (0 === e2.tag) {
              a.push(t3 = e2[0]);
              t3(0);
            } else if (a.length) {
              i(e2);
              t3(0);
            }
          });
        }(r2(t2[0]));
        if (!n) {
          n = true;
          f(0);
        }
      }
    });
    i(start((e2) => {
      if (1 === e2) {
        if (!s) {
          s = true;
          f(1);
        }
        for (var r3 = 0, t2 = a, i2 = a.length; r3 < i2; r3++) {
          t2[r3](1);
        }
        a.length = 0;
      } else {
        if (!s && !n) {
          n = true;
          f(0);
        } else {
          n = false;
        }
        for (var l = 0, u = a, o = a.length; l < o; l++) {
          u[l](0);
        }
      }
    }));
  };
}
function mergeAll(e2) {
  return mergeMap(identity)(e2);
}
function merge(e2) {
  return mergeAll(r(e2));
}
function onEnd(e2) {
  return (r2) => (t) => {
    var i = false;
    r2((r3) => {
      if (i) {
      } else if (0 === r3) {
        i = true;
        t(0);
        e2();
      } else if (0 === r3.tag) {
        var a = r3[0];
        t(start((r4) => {
          if (1 === r4) {
            i = true;
            a(1);
            e2();
          } else {
            a(r4);
          }
        }));
      } else {
        t(r3);
      }
    });
  };
}
function onPush(e2) {
  return (r2) => (t) => {
    var i = false;
    r2((r3) => {
      if (i) {
      } else if (0 === r3) {
        i = true;
        t(0);
      } else if (0 === r3.tag) {
        var a = r3[0];
        t(start((e3) => {
          if (1 === e3) {
            i = true;
          }
          a(e3);
        }));
      } else {
        e2(r3[0]);
        t(r3);
      }
    });
  };
}
function onStart(e2) {
  return (r2) => (t) => r2((r3) => {
    if (0 === r3) {
      t(0);
    } else if (0 === r3.tag) {
      t(r3);
      e2();
    } else {
      t(r3);
    }
  });
}
function share(r2) {
  var t = [];
  var i = e;
  var a = false;
  return (e2) => {
    t.push(e2);
    if (1 === t.length) {
      r2((e3) => {
        if (0 === e3) {
          for (var r3 = 0, f = t, n = t.length; r3 < n; r3++) {
            f[r3](0);
          }
          t.length = 0;
        } else if (0 === e3.tag) {
          i = e3[0];
        } else {
          a = false;
          for (var s = 0, l = t, u = t.length; s < u; s++) {
            l[s](e3);
          }
        }
      });
    }
    e2(start((r3) => {
      if (1 === r3) {
        var f = t.indexOf(e2);
        if (f > -1) {
          (t = t.slice()).splice(f, 1);
        }
        if (!t.length) {
          i(1);
        }
      } else if (!a) {
        a = true;
        i(0);
      }
    }));
  };
}
function switchMap(r2) {
  return (t) => (i) => {
    var a = e;
    var f = e;
    var n = false;
    var s = false;
    var l = false;
    var u = false;
    t((t2) => {
      if (u) {
      } else if (0 === t2) {
        u = true;
        if (!l) {
          i(0);
        }
      } else if (0 === t2.tag) {
        a = t2[0];
      } else {
        if (l) {
          f(1);
          f = e;
        }
        if (!n) {
          n = true;
          a(0);
        } else {
          n = false;
        }
        !function applyInnerSource(e2) {
          l = true;
          e2((e3) => {
            if (!l) {
            } else if (0 === e3) {
              l = false;
              if (u) {
                i(0);
              } else if (!n) {
                n = true;
                a(0);
              }
            } else if (0 === e3.tag) {
              s = false;
              (f = e3[0])(0);
            } else {
              i(e3);
              if (!s) {
                f(0);
              } else {
                s = false;
              }
            }
          });
        }(r2(t2[0]));
      }
    });
    i(start((e2) => {
      if (1 === e2) {
        if (!u) {
          u = true;
          a(1);
        }
        if (l) {
          l = false;
          f(1);
        }
      } else {
        if (!u && !n) {
          n = true;
          a(0);
        }
        if (l && !s) {
          s = true;
          f(0);
        }
      }
    }));
  };
}
function take(r2) {
  return (t) => (i) => {
    var a = e;
    var f = false;
    var n = 0;
    t((e2) => {
      if (f) {
      } else if (0 === e2) {
        f = true;
        i(0);
      } else if (0 === e2.tag) {
        if (r2 <= 0) {
          f = true;
          i(0);
          e2[0](1);
        } else {
          a = e2[0];
        }
      } else if (n++ < r2) {
        i(e2);
        if (!f && n >= r2) {
          f = true;
          i(0);
          a(1);
        }
      } else {
        i(e2);
      }
    });
    i(start((e2) => {
      if (1 === e2 && !f) {
        f = true;
        a(1);
      } else if (0 === e2 && !f && n < r2) {
        a(0);
      }
    }));
  };
}
function takeUntil(r2) {
  return (t) => (i) => {
    var a = e;
    var f = e;
    var n = false;
    t((e2) => {
      if (n) {
      } else if (0 === e2) {
        n = true;
        f(1);
        i(0);
      } else if (0 === e2.tag) {
        a = e2[0];
        r2((e3) => {
          if (0 === e3) {
          } else if (0 === e3.tag) {
            (f = e3[0])(0);
          } else {
            n = true;
            f(1);
            a(1);
            i(0);
          }
        });
      } else {
        i(e2);
      }
    });
    i(start((e2) => {
      if (1 === e2 && !n) {
        n = true;
        a(1);
        f(1);
      } else if (!n) {
        a(0);
      }
    }));
  };
}
function takeWhile(r2, t) {
  return (i) => (a) => {
    var f = e;
    var n = false;
    i((e2) => {
      if (n) {
      } else if (0 === e2) {
        n = true;
        a(0);
      } else if (0 === e2.tag) {
        f = e2[0];
        a(e2);
      } else if (!r2(e2[0])) {
        n = true;
        if (t) {
          a(e2);
        }
        a(0);
        f(1);
      } else {
        a(e2);
      }
    });
  };
}
function lazy(e2) {
  return (r2) => e2()(r2);
}
function fromAsyncIterable(e2) {
  return (r2) => {
    var t = e2[asyncIteratorSymbol()] && e2[asyncIteratorSymbol()]() || e2;
    var i = false;
    var a = false;
    var f = false;
    var n;
    r2(start(async (e3) => {
      if (1 === e3) {
        i = true;
        if (t.return) {
          t.return();
        }
      } else if (a) {
        f = true;
      } else {
        for (f = a = true; f && !i; ) {
          if ((n = await t.next()).done) {
            i = true;
            if (t.return) {
              await t.return();
            }
            r2(0);
          } else {
            try {
              f = false;
              r2(push(n.value));
            } catch (e4) {
              if (t.throw) {
                if (i = !!(await t.throw(e4)).done) {
                  r2(0);
                }
              } else {
                throw e4;
              }
            }
          }
        }
        a = false;
      }
    }));
  };
}
function fromIterable(e2) {
  if (e2[Symbol.asyncIterator]) {
    return fromAsyncIterable(e2);
  }
  return (r2) => {
    var t = e2[Symbol.iterator]();
    var i = false;
    var a = false;
    var f = false;
    var n;
    r2(start((e3) => {
      if (1 === e3) {
        i = true;
        if (t.return) {
          t.return();
        }
      } else if (a) {
        f = true;
      } else {
        for (f = a = true; f && !i; ) {
          if ((n = t.next()).done) {
            i = true;
            if (t.return) {
              t.return();
            }
            r2(0);
          } else {
            try {
              f = false;
              r2(push(n.value));
            } catch (e4) {
              if (t.throw) {
                if (i = !!t.throw(e4).done) {
                  r2(0);
                }
              } else {
                throw e4;
              }
            }
          }
        }
        a = false;
      }
    }));
  };
}
var r = fromIterable;
function fromValue(e2) {
  return (r2) => {
    var t = false;
    r2(start((i) => {
      if (1 === i) {
        t = true;
      } else if (!t) {
        t = true;
        r2(push(e2));
        r2(0);
      }
    }));
  };
}
function make(e2) {
  return (r2) => {
    var t = false;
    var i = e2({
      next(e3) {
        if (!t) {
          r2(push(e3));
        }
      },
      complete() {
        if (!t) {
          t = true;
          r2(0);
        }
      }
    });
    r2(start((e3) => {
      if (1 === e3 && !t) {
        t = true;
        i();
      }
    }));
  };
}
function makeSubject() {
  var e2;
  var r2;
  return {
    source: share(make((t) => {
      e2 = t.next;
      r2 = t.complete;
      return teardownPlaceholder;
    })),
    next(r3) {
      if (e2) {
        e2(r3);
      }
    },
    complete() {
      if (r2) {
        r2();
      }
    }
  };
}
function fromPromise(e2) {
  return make((r2) => {
    e2.then((e3) => {
      Promise.resolve(e3).then(() => {
        r2.next(e3);
        r2.complete();
      });
    });
    return teardownPlaceholder;
  });
}
function subscribe(r2) {
  return (t) => {
    var i = e;
    var a = false;
    t((e2) => {
      if (0 === e2) {
        a = true;
      } else if (0 === e2.tag) {
        (i = e2[0])(0);
      } else if (!a) {
        r2(e2[0]);
        i(0);
      }
    });
    return {
      unsubscribe() {
        if (!a) {
          a = true;
          i(1);
        }
      }
    };
  };
}
function publish(e2) {
  subscribe((e3) => {
  })(e2);
}
function toPromise(r2) {
  return new Promise((t) => {
    var i = e;
    var a;
    r2((e2) => {
      if (0 === e2) {
        Promise.resolve(a).then(t);
      } else if (0 === e2.tag) {
        (i = e2[0])(0);
      } else {
        a = e2[0];
        i(0);
      }
    });
  });
}
var pipe = (...e2) => {
  var r2 = e2[0];
  for (var t = 1, i = e2.length; t < i; t++) {
    r2 = e2[t](r2);
  }
  return r2;
};

export {
  filter,
  map,
  mergeMap,
  merge,
  onEnd,
  onPush,
  onStart,
  share,
  switchMap,
  take,
  takeUntil,
  takeWhile,
  lazy,
  fromAsyncIterable,
  fromValue,
  make,
  makeSubject,
  fromPromise,
  subscribe,
  publish,
  toPromise,
  pipe
};
//# sourceMappingURL=chunk-DGEYOGUC.js.map
