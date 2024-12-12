function _0x4bdd(_0x5446a8, _0x36d125) {
  const _0x4f52f4 = _0x4f52();
  return (
    (_0x4bdd = function (_0x4bdd1d, _0x667744) {
      _0x4bdd1d = _0x4bdd1d - 0x75;
      let _0x4317c1 = _0x4f52f4[_0x4bdd1d];
      return _0x4317c1;
    }),
    _0x4bdd(_0x5446a8, _0x36d125)
  );
}
const _0x4d98ed = _0x4bdd;
(function (_0x2fa916, _0x5daea9) {
  const _0x71518e = _0x4bdd,
    _0x5d3acc = _0x2fa916();
  while (!![]) {
    try {
      const _0x1b04a0 =
        parseInt(_0x71518e(0xa7)) / 0x1 +
        (-parseInt(_0x71518e(0xa6)) / 0x2) *
          (-parseInt(_0x71518e(0x82)) / 0x3) +
        parseInt(_0x71518e(0xb8)) / 0x4 +
        (-parseInt(_0x71518e(0xae)) / 0x5) * (parseInt(_0x71518e(0x77)) / 0x6) +
        parseInt(_0x71518e(0x9c)) / 0x7 +
        (-parseInt(_0x71518e(0x8c)) / 0x8) *
          (-parseInt(_0x71518e(0x9b)) / 0x9) +
        (-parseInt(_0x71518e(0x7f)) / 0xa) * (parseInt(_0x71518e(0x7b)) / 0xb);
      if (_0x1b04a0 === _0x5daea9) break;
      else _0x5d3acc["push"](_0x5d3acc["shift"]());
    } catch (_0xd5a2d3) {
      _0x5d3acc["push"](_0x5d3acc["shift"]());
    }
  }
})(_0x4f52, 0x8a49c),
  document[_0x4d98ed(0x9e)](_0x4d98ed(0x8e), () => {
    const _0x214f46 = _0x4d98ed;
    try {
      addAccordionStyles(), initAccordion();
    } catch (_0x1b5f42) {
      console[_0x214f46(0x97)](_0x214f46(0xa1), _0x1b5f42);
    }
    try {
      addTabStyles(), initTabs();
    } catch (_0x317d9a) {
      console["error"](_0x214f46(0xa4), _0x317d9a);
    }
  });
function addAccordionStyles() {
  const _0x3af137 = _0x4d98ed;
  try {
    const _0x3db8e9 = document[_0x3af137(0xa0)]("style");
    (_0x3db8e9[_0x3af137(0x93)] = _0x3af137(0xa3)),
      document[_0x3af137(0xb2)][_0x3af137(0x7e)](_0x3db8e9);
  } catch (_0x2f27a3) {
    console[_0x3af137(0x97)](_0x3af137(0x88), _0x2f27a3);
  }
}
function _0x4f52() {
  const _0x586776 = [
    "tab-nav-container-top",
    "Accordion-header",
    "2442LPauar",
    "bottom",
    "Tab-nav-container",
    "appendChild",
    "72490BGCPQT",
    "No\x20Accordion-item\x20elements\x20found\x20within\x20an\x20Accordion.",
    "Error\x20toggling\x20Tab\x20content\x20visibility:",
    "57aEVJgk",
    "Error\x20adding\x20Tab\x20styles:",
    "tab-nav-container-left",
    "click",
    "length",
    "top",
    "Error\x20adding\x20Accordion\x20styles:",
    "toLowerCase",
    "Error\x20initializing\x20Accordions:",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20General\x20Tab\x20Styles\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20tab-nav-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-sizing:\x20border-box;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20tab-nav\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f0f0f0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20tab-nav:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#e8e8e8;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20tab-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x20/*\x20Hidden\x20by\x20default\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fafafa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-grow:\x201;\x20/*\x20Take\x20available\x20space\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Layout\x20Classes\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tab-layout-top\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tab-layout-bottom\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column-reverse;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tab-layout-left\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20row;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tab-layout-right\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20row-reverse;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20tab-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20/*\x20Active\x20Tab\x20Classes\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tab-active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgb(84\x2084\x2084);\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x202px\x20solid\x20rgb(84\x2084\x2084);\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tab-content-active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tab-nav-container-right,\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tab-nav-container-left\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20",
    "4135072FptpQv",
    "querySelectorAll",
    "DOMContentLoaded",
    "layout",
    "No\x20Tab-item\x20elements\x20found\x20within\x20a\x20Tab.",
    "div",
    "querySelector",
    "textContent",
    "left",
    "forEach",
    "No\x20Tab\x20elements\x20found\x20on\x20the\x20page.",
    "error",
    "warn",
    "classList",
    "Error\x20initializing\x20Tabs:",
    "18YlzMYr",
    "3635716VaZcVT",
    "0px",
    "addEventListener",
    "tab-content-active",
    "createElement",
    "Error\x20initializing\x20Accordion\x20plugin:",
    "Tab-content",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20Accordion-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#f0f0f0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#ddd;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20Accordion-header:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#e0e0e0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20Accordion-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#fafafa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#eee;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-top:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20height:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20height\x200.3s\x20ease-out;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20",
    "Error\x20initializing\x20Tabs\x20plugin:",
    "Tab-item\x20is\x20missing\x20a\x20nav\x20or\x20content\x20element:",
    "12278wUpmKN",
    "544330tLiKzx",
    "Error\x20toggling\x20Accordion\x20content\x20visibility:",
    "tab-nav-container-right",
    "tab-layout-bottom",
    "tab-nav-container-bottom",
    "tab-layout-top",
    "Tab-nav",
    "754150BtxocR",
    "No\x20Accordion\x20elements\x20found\x20on\x20the\x20page.",
    "add",
    "remove",
    "head",
    "tab-layout-left",
    "tab-layout-right",
    "push",
    "Accordion-item\x20is\x20missing\x20a\x20header\x20or\x20content\x20element:",
    "tab-active",
    "449636MxmZfQ",
    "prepend",
    "Accordion-content",
    "tab-content-container",
    "height",
    "style",
    "6IrHPue",
    "Tab",
  ];
  _0x4f52 = function () {
    return _0x586776;
  };
  return _0x4f52();
}
function initAccordion() {
  const _0x18398d = _0x4d98ed;
  try {
    const _0x32aaba = document["querySelectorAll"]("Accordion");
    if (_0x32aaba[_0x18398d(0x86)] === 0x0) {
      console[_0x18398d(0x98)](_0x18398d(0xaf));
      return;
    }
    _0x32aaba[_0x18398d(0x95)]((_0x55a6a8) => {
      const _0x21cbc6 = _0x18398d,
        _0x53ab28 = _0x55a6a8[_0x21cbc6(0x8d)]("Accordion-item");
      if (_0x53ab28[_0x21cbc6(0x86)] === 0x0) {
        console[_0x21cbc6(0x98)](_0x21cbc6(0x80));
        return;
      }
      _0x53ab28[_0x21cbc6(0x95)]((_0x268601) => {
        const _0x58e9d7 = _0x21cbc6,
          _0x323097 = _0x268601[_0x58e9d7(0x92)](_0x58e9d7(0x7a)),
          _0x1ded30 = _0x268601[_0x58e9d7(0x92)]("Accordion-content");
        if (!_0x323097 || !_0x1ded30) {
          console[_0x58e9d7(0x98)](_0x58e9d7(0xb6), _0x268601);
          return;
        }
        (_0x1ded30[_0x58e9d7(0x76)][_0x58e9d7(0x75)] = "0"),
          _0x323097[_0x58e9d7(0x9e)](_0x58e9d7(0x85), () => {
            const _0x297503 = _0x58e9d7;
            try {
              const _0x17d7ed =
                _0x1ded30[_0x297503(0x76)][_0x297503(0x75)] !== _0x297503(0x9d);
              _0x53ab28[_0x297503(0x95)]((_0x22f371) => {
                const _0x43c6b1 = _0x297503,
                  _0x2920be = _0x22f371["querySelector"](_0x43c6b1(0xba));
                _0x2920be &&
                  (_0x2920be[_0x43c6b1(0x76)][_0x43c6b1(0x75)] = "0");
              });
              if (!_0x17d7ed) {
                const _0x172ee5 = _0x1ded30["scrollHeight"];
                _0x1ded30[_0x297503(0x76)][_0x297503(0x75)] = _0x172ee5 + "px";
              } else _0x1ded30[_0x297503(0x76)]["height"] = "0";
            } catch (_0x64123a) {
              console[_0x297503(0x97)](_0x297503(0xa8), _0x64123a);
            }
          });
      });
    });
  } catch (_0x15b4dc) {
    console["error"](_0x18398d(0x8a), _0x15b4dc);
  }
}
function addTabStyles() {
  const _0x3fd49b = _0x4d98ed;
  try {
    const _0x932e79 = document[_0x3fd49b(0xa0)]("style");
    (_0x932e79["textContent"] = _0x3fd49b(0x8b)),
      document["head"][_0x3fd49b(0x7e)](_0x932e79);
  } catch (_0x17243d) {
    console[_0x3fd49b(0x97)](_0x3fd49b(0x83), _0x17243d);
  }
}
function initTabs() {
  const _0x5b2724 = _0x4d98ed;
  try {
    const _0x41b7e2 = document[_0x5b2724(0x8d)](_0x5b2724(0x78));
    if (_0x41b7e2[_0x5b2724(0x86)] === 0x0) {
      console[_0x5b2724(0x98)](_0x5b2724(0x96));
      return;
    }
    _0x41b7e2[_0x5b2724(0x95)]((_0x42c453) => {
      const _0x9746a9 = _0x5b2724,
        _0x4658d3 = document["createElement"](_0x9746a9(0x7d)),
        _0x563de3 = _0x42c453[_0x9746a9(0x8d)]("Tab-item"),
        _0x2d7a24 = [];
      if (_0x563de3[_0x9746a9(0x86)] === 0x0) {
        console[_0x9746a9(0x98)](_0x9746a9(0x90));
        return;
      }
      const _0x23dd07 =
        _0x42c453["getAttribute"](_0x9746a9(0x8f)) || _0x9746a9(0x87);
      applyLayout(_0x42c453, _0x4658d3, _0x23dd07),
        _0x563de3[_0x9746a9(0x95)]((_0x10bea9, _0x49ab0a) => {
          const _0x3dc366 = _0x9746a9,
            _0x20b477 = _0x10bea9[_0x3dc366(0x92)]("Tab-nav"),
            _0x1ee8f4 = _0x10bea9["querySelector"](_0x3dc366(0xa2));
          if (!_0x20b477 || !_0x1ee8f4) {
            console["warn"](_0x3dc366(0xa5), _0x10bea9);
            return;
          }
          _0x4658d3[_0x3dc366(0x7e)](_0x20b477),
            _0x2d7a24[_0x3dc366(0xb5)](_0x1ee8f4),
            _0x49ab0a === 0x0 && setTabActive(_0x20b477, _0x1ee8f4, !![]),
            _0x20b477[_0x3dc366(0x9e)](_0x3dc366(0x85), () => {
              const _0x5ccb32 = _0x3dc366;
              try {
                _0x4658d3[_0x5ccb32(0x8d)](_0x5ccb32(0xad))[_0x5ccb32(0x95)](
                  (_0x3301c1, _0x32d3b6) =>
                    setTabActive(_0x3301c1, _0x2d7a24[_0x32d3b6], ![])
                ),
                  setTabActive(_0x20b477, _0x1ee8f4, !![]);
              } catch (_0x1e854b) {
                console[_0x5ccb32(0x97)](_0x5ccb32(0x81), _0x1e854b);
              }
            });
        }),
        _0x42c453[_0x9746a9(0xb9)](_0x4658d3);
    });
  } catch (_0x27b3d9) {
    console[_0x5b2724(0x97)](_0x5b2724(0x9a), _0x27b3d9);
  }
}
function applyLayout(_0x3c0634, _0x19c531, _0x4e641c) {
  const _0x43b45b = _0x4d98ed,
    _0x243b7b = document[_0x43b45b(0xa0)](_0x43b45b(0x91));
  _0x243b7b[_0x43b45b(0x99)][_0x43b45b(0xb0)](_0x43b45b(0xbb));
  switch (_0x4e641c[_0x43b45b(0x89)]()) {
    case _0x43b45b(0x94):
      _0x3c0634[_0x43b45b(0x99)][_0x43b45b(0xb0)](_0x43b45b(0xb3)),
        _0x19c531["classList"][_0x43b45b(0xb0)](_0x43b45b(0x84));
      break;
    case "right":
      _0x3c0634[_0x43b45b(0x99)][_0x43b45b(0xb0)](_0x43b45b(0xb4)),
        _0x19c531[_0x43b45b(0x99)][_0x43b45b(0xb0)](_0x43b45b(0xa9));
      break;
    case _0x43b45b(0x7c):
      _0x3c0634[_0x43b45b(0x99)][_0x43b45b(0xb0)](_0x43b45b(0xaa)),
        _0x19c531[_0x43b45b(0x99)]["add"](_0x43b45b(0xab));
      break;
    case "top":
    default:
      _0x3c0634[_0x43b45b(0x99)][_0x43b45b(0xb0)](_0x43b45b(0xac)),
        _0x19c531["classList"][_0x43b45b(0xb0)](_0x43b45b(0x79));
      break;
  }
  _0x3c0634[_0x43b45b(0x7e)](_0x243b7b);
}
function setTabActive(_0x1f0d38, _0x266a9a, _0x3ae986) {
  const _0x2261f0 = _0x4d98ed;
  _0x3ae986
    ? (_0x1f0d38[_0x2261f0(0x99)][_0x2261f0(0xb0)](_0x2261f0(0xb7)),
      _0x266a9a["classList"][_0x2261f0(0xb0)](_0x2261f0(0x9f)))
    : (_0x1f0d38[_0x2261f0(0x99)][_0x2261f0(0xb1)](_0x2261f0(0xb7)),
      _0x266a9a[_0x2261f0(0x99)][_0x2261f0(0xb1)]("tab-content-active"));
}
