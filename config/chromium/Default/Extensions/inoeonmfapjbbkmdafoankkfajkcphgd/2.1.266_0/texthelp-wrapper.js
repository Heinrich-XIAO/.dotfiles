(function () {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  /**
   * Internal `postMessage` Actions used by the texthelp-wrapper to communicate
   * between Content Script & in-page script
   */
  var Action;

  (function (Action) {
    Action["GetTextAtCursor"] = "GET_TEXT_AT_CURSOR";
    Action["InsertText"] = "INSERT_TEXT";
    Action["GetSelection"] = "GET_SELECTION";
    Action["GetSelectionRange"] = "GET_SELECTION_RANGE";
    Action["GetCursor"] = "GET_CURSOR";
    Action["GetRenderedRanges"] = "GET_RENDERED_RANGES";
    Action["GetRangeText"] = "GET_RANGE_TEXT";
    Action["GetAllText"] = "GET_ALL_TEXT";
    Action["SetHighlights"] = "SET_HIGHLIGHTS";
    Action["ClearHighlights"] = "CLEAR_HIGHLIGHTS";
    Action["SetSelection"] = "SET_SELECTION";
    Action["KeyboardEvent"] = "TRIGGER_KEY_EVENT";
    Action["GetParagraphStarts"] = "GET_PARAGRAPH_STARTS";
    Action["RemoveHighlightsById"] = "REMOVE_HIGHLIGHTS_BY_ID";
    Action["SetSpellCheckVisibility"] = "SET_SPELL_CHECK_VISIBILITY";
    Action["GetSpellCheckErrors"] = "GET_SPELL_CHECK_ERRORS";
    Action["GetStyle"] = "GET_STYLE";
    Action["GetRectsByRange"] = "GET_RECTS_BY_RANGE";
  })(Action || (Action = {}));

  var Action$1 = Action;

  var StringType;

  (function (StringType) {
    StringType["TEXT"] = "\x01";
    StringType["HTML_ELEMENT"] = "\x02";
  })(StringType || (StringType = {}));

  function replacer(key, value) {
    if (typeof value === "string") {
      return StringType.TEXT + value;
    } else {
      return value;
    }
  }
  function reviver(key, value) {
    if (typeof value !== "string") {
      return value;
    }

    const firstByte = value.substring(0, 1);
    const arg = value.substring(1);

    switch (firstByte) {
      case StringType.TEXT:
        return arg;

      case StringType.HTML_ELEMENT:
        {
          // No need to support HTML elements
          return null;
        }

      default:
        throw new Error("Unknown identifier in beginning of text");
    }
  }

  // Browser support: https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues

  /* eslint-disable */
  // @ts-ignore
  var uuid = (() => ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)));
  /* eslint-enable */

  var keys = {
    'ctrl': 17,
    'control': 17,
    'alt': 18,
    'option': 18,
    'shift': 16,
    'windows': 91,
    'command': 91,
    'esc': 27,
    'escape': 27,
    '`': 192,
    '-': 189,
    '=': 187,
    'backspace': 8,
    'tab': 9,
    '\\': 220,
    '[': 219,
    ']': 221,
    ';': 186,
    '\'': 222,
    'enter': 13,
    'return': 13,
    ',': 188,
    '.': 190,
    '/': 191,
    'space': 32,
    'pause': 19,
    'break': 19,
    'insert': 45,
    'delete': 46,
    'home': 36,
    'end': 35,
    'pageup': 33,
    'pagedown': 34,
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40,
    'capslock': 20,
    'numlock': 144,
    'scrolllock': 145
  };

  for (var f = 1; f < 20; f++) {
    keys['f' + f] = 111 + f;
  }

  var keycodes = function (input) {
    if (typeof input === 'string') return code$1(input);
    if (typeof input === 'number') return key(input);
  };

  function code$1 (input) {
    var code = keys[input.toLowerCase()];
    if (code !== undefined) {
      return code;
    }

    if (input.length === 1) {
      return input.toUpperCase().charCodeAt(0);
    }

    return undefined;
  }


  function key(input) {
    for (var k in keys) {
      if (keys.hasOwnProperty(k)) {
        if (keys[k] === input) return k;
      }
    }

    return String.fromCharCode(input).toLowerCase();
  }

  var keycode = keycodes;

  var keycomb = function(input) {
    if (typeof input === 'string') input = input.replace(/\s/g, '').split('+');
    if (typeof input !== 'object') return;
    if (input.length) return code(input);
    return combination(input);
  };


  function code(input) {
    var obj = {};
    obj.keyCode = [];
    obj.altKey = false;
    obj.ctrlKey = false;
    obj.shiftKey = false;
    var key;

    for (var k = 0, len = input.length; k < len; k++) {
      key = keycode(input[k]);
      if (key === 18) obj.altKey = true;
      if (key === 17) obj.ctrlKey = true;
      if (key === 16) obj.shiftKey = true;
      if (key < 16 || key > 18) obj.keyCode.push(key);
    }

    return obj;
  }

  function combination(input) {
    var keys = input.keyCode.length ? input.keyCode : [input.keyCode];
    var arr = [];
    if (input.altKey) arr.push('alt');
    if (input.ctrlKey) arr.push('ctrl');
    if (input.shiftKey) arr.push('shift');

    for (var k = 0, len = keys.length; k < len; k++) {
      arr.push(keycode(keys[k]));
    }

    return arr;
  }

  var isObject = function isObject(val) {
    return val !== null && !Array.isArray(val) && typeof val === 'object'
  };

  var codes = {
    // ----------------------------------------
    // By Code
    // ----------------------------------------
    3: 'Cancel',
    6: 'Help',
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    28: 'Convert',
    29: 'NonConvert',
    30: 'Accept',
    31: 'ModeChange',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    41: 'Select',
    42: 'Print',
    43: 'Execute',
    44: 'PrintScreen',
    45: 'Insert',
    46: 'Delete',
    48: ['0', ')'],
    49: ['1', '!'],
    50: ['2', '@'],
    51: ['3', '#'],
    52: ['4', '$'],
    53: ['5', '%'],
    54: ['6', '^'],
    55: ['7', '&'],
    56: ['8', '*'],
    57: ['9', '('],
    91: 'OS',
    93: 'ContextMenu',
    144: 'NumLock',
    145: 'ScrollLock',
    181: 'VolumeMute',
    182: 'VolumeDown',
    183: 'VolumeUp',
    186: [';', ':'],
    187: ['=', '+'],
    188: [',', '<'],
    189: ['-', '_'],
    190: ['.', '>'],
    191: ['/', '?'],
    192: ['`', '~'],
    219: ['[', '{'],
    220: ['\\', '|'],
    221: [']', '}'],
    222: ["'", '"'],
    224: 'Meta',
    225: 'AltGraph',
    246: 'Attn',
    247: 'CrSel',
    248: 'ExSel',
    249: 'EraseEof',
    250: 'Play',
    251: 'ZoomOut',
  };

  // Function Keys (F1-24)
  for (var i = 0; i < 24; i += 1) {
    codes[112 + i] = 'F' + (i + 1);
  }

  // Alphabet (a-Z)
  for (var j = 0; j < 26; j += 1) {
    var n = j + 65;
    codes[n] = [String.fromCharCode(n + 32), String.fromCharCode(n)];
  }

  var keyboardKey = {
    codes: codes,

    /**
     * Get the `keyCode` or `which` value from a keyboard event or `key` name.
     * @param {string|object} eventOrKey A keyboard event-like object or `key` name.
     * @param {string} [eventOrKey.key] If object, it must have one of these keys.
     * @param {number} [eventOrKey.keyCode] If object, it must have one of these keys.
     * @param {number} [eventOrKey.which] If object, it must have one of these keys.
     * @returns {number|undefined}
     */
    getCode: function getCode(eventOrKey) {
      if (isObject(eventOrKey)) {
        return eventOrKey.keyCode || eventOrKey.which || this[eventOrKey.key]
      }
      return this[eventOrKey]
    },

    /**
     * Get the key name from a keyboard event, `keyCode`, or `which` value.
     * @param {number|object} eventOrCode A keyboard event-like object or key code.
     * @param {string} [eventOrCode.key] If object with a `key` name, it will be returned.
     * @param {number} [eventOrCode.keyCode] If object, it must have one of these keys.
     * @param {number} [eventOrCode.which] If object, it must have one of these keys.
     * @param {boolean} [eventOrCode.shiftKey] If object, it must have one of these keys.
     * @returns {string|undefined}
     */
    getKey: function getKey(eventOrCode) {
      var isEvent = isObject(eventOrCode);

      // handle events with a `key` already defined
      if (isEvent && eventOrCode.key) {
        return eventOrCode.key
      }

      var name = codes[isEvent ? eventOrCode.keyCode || eventOrCode.which : eventOrCode];

      if (Array.isArray(name)) {
        if (isEvent) {
          name = name[eventOrCode.shiftKey ? 1 : 0];
        } else {
          name = name[0];
        }
      }

      return name
    },

    // ----------------------------------------
    // By Name
    // ----------------------------------------
    // declare these manually for static analysis
    Cancel: 3,
    Help: 6,
    Backspace: 8,
    Tab: 9,
    Clear: 12,
    Enter: 13,
    Shift: 16,
    Control: 17,
    Alt: 18,
    Pause: 19,
    CapsLock: 20,
    Escape: 27,
    Convert: 28,
    NonConvert: 29,
    Accept: 30,
    ModeChange: 31,
    ' ': 32,
    PageUp: 33,
    PageDown: 34,
    End: 35,
    Home: 36,
    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40,
    Select: 41,
    Print: 42,
    Execute: 43,
    PrintScreen: 44,
    Insert: 45,
    Delete: 46,
    0: 48,
    ')': 48,
    1: 49,
    '!': 49,
    2: 50,
    '@': 50,
    3: 51,
    '#': 51,
    4: 52,
    $: 52,
    5: 53,
    '%': 53,
    6: 54,
    '^': 54,
    7: 55,
    '&': 55,
    8: 56,
    '*': 56,
    9: 57,
    '(': 57,
    a: 65,
    A: 65,
    b: 66,
    B: 66,
    c: 67,
    C: 67,
    d: 68,
    D: 68,
    e: 69,
    E: 69,
    f: 70,
    F: 70,
    g: 71,
    G: 71,
    h: 72,
    H: 72,
    i: 73,
    I: 73,
    j: 74,
    J: 74,
    k: 75,
    K: 75,
    l: 76,
    L: 76,
    m: 77,
    M: 77,
    n: 78,
    N: 78,
    o: 79,
    O: 79,
    p: 80,
    P: 80,
    q: 81,
    Q: 81,
    r: 82,
    R: 82,
    s: 83,
    S: 83,
    t: 84,
    T: 84,
    u: 85,
    U: 85,
    v: 86,
    V: 86,
    w: 87,
    W: 87,
    x: 88,
    X: 88,
    y: 89,
    Y: 89,
    z: 90,
    Z: 90,
    OS: 91,
    ContextMenu: 93,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    F13: 124,
    F14: 125,
    F15: 126,
    F16: 127,
    F17: 128,
    F18: 129,
    F19: 130,
    F20: 131,
    F21: 132,
    F22: 133,
    F23: 134,
    F24: 135,
    NumLock: 144,
    ScrollLock: 145,
    VolumeMute: 181,
    VolumeDown: 182,
    VolumeUp: 183,
    ';': 186,
    ':': 186,
    '=': 187,
    '+': 187,
    ',': 188,
    '<': 188,
    '-': 189,
    _: 189,
    '.': 190,
    '>': 190,
    '/': 191,
    '?': 191,
    '`': 192,
    '~': 192,
    '[': 219,
    '{': 219,
    '\\': 220,
    '|': 220,
    ']': 221,
    '}': 221,
    "'": 222,
    '"': 222,
    Meta: 224,
    AltGraph: 225,
    Attn: 246,
    CrSel: 247,
    ExSel: 248,
    EraseEof: 249,
    Play: 250,
    ZoomOut: 251,
  };

  // ----------------------------------------
  // By Alias
  // ----------------------------------------
  // provide dot-notation accessible keys for all key names
  keyboardKey.Spacebar = keyboardKey[' '];
  keyboardKey.Digit0 = keyboardKey['0'];
  keyboardKey.Digit1 = keyboardKey['1'];
  keyboardKey.Digit2 = keyboardKey['2'];
  keyboardKey.Digit3 = keyboardKey['3'];
  keyboardKey.Digit4 = keyboardKey['4'];
  keyboardKey.Digit5 = keyboardKey['5'];
  keyboardKey.Digit6 = keyboardKey['6'];
  keyboardKey.Digit7 = keyboardKey['7'];
  keyboardKey.Digit8 = keyboardKey['8'];
  keyboardKey.Digit9 = keyboardKey['9'];
  keyboardKey.Tilde = keyboardKey['~'];
  keyboardKey.GraveAccent = keyboardKey['`'];
  keyboardKey.ExclamationPoint = keyboardKey['!'];
  keyboardKey.AtSign = keyboardKey['@'];
  keyboardKey.PoundSign = keyboardKey['#'];
  keyboardKey.PercentSign = keyboardKey['%'];
  keyboardKey.Caret = keyboardKey['^'];
  keyboardKey.Ampersand = keyboardKey['&'];
  keyboardKey.PlusSign = keyboardKey['+'];
  keyboardKey.MinusSign = keyboardKey['-'];
  keyboardKey.EqualsSign = keyboardKey['='];
  keyboardKey.DivisionSign = keyboardKey['/'];
  keyboardKey.MultiplicationSign = keyboardKey['*'];
  keyboardKey.Comma = keyboardKey[','];
  keyboardKey.Decimal = keyboardKey['.'];
  keyboardKey.Colon = keyboardKey[':'];
  keyboardKey.Semicolon = keyboardKey[';'];
  keyboardKey.Pipe = keyboardKey['|'];
  keyboardKey.BackSlash = keyboardKey['\\'];
  keyboardKey.QuestionMark = keyboardKey['?'];
  keyboardKey.SingleQuote = keyboardKey["'"];
  keyboardKey.DoubleQuote = keyboardKey['"'];
  keyboardKey.LeftCurlyBrace = keyboardKey['{'];
  keyboardKey.RightCurlyBrace = keyboardKey['}'];
  keyboardKey.LeftParenthesis = keyboardKey['('];
  keyboardKey.RightParenthesis = keyboardKey[')'];
  keyboardKey.LeftAngleBracket = keyboardKey['<'];
  keyboardKey.RightAngleBracket = keyboardKey['>'];
  keyboardKey.LeftSquareBracket = keyboardKey['['];
  keyboardKey.RightSquareBracket = keyboardKey[']'];

  var keyboardKey_1 = keyboardKey;

  // eslint-disable-next-line no-shadow
  let AppNames;

  (function (AppNames) {
    AppNames["GoogleDocs"] = "Google Docs";
    AppNames["GoogleForms"] = "Google Forms";
    AppNames["GoogleSlides"] = "Google Slides";
    AppNames["GoogleDrawings"] = "Google Drawings";
    AppNames["GoogleSheets"] = "Google Sheets";
  })(AppNames || (AppNames = {}));

  const urlFragments = {
    document: AppNames.GoogleDocs,
    forms: AppNames.GoogleForms,
    presentation: AppNames.GoogleSlides,
    drawings: AppNames.GoogleDrawings,
    spreadsheets: AppNames.GoogleSheets
  };
  const getGoogleAppName = (url = window.location) => {
    const host = url.host,
          pathname = url.pathname;
    if (host !== "docs.google.com") return undefined;
    let appName;
    const pathParts = pathname.split("/").filter(part => !!part);

    if (pathname.startsWith("/a/")) {
      // eslint-disable-next-line prefer-destructuring
      appName = pathParts[2];
    } else {
      // eslint-disable-next-line prefer-destructuring
      appName = pathParts[0];
    }

    return urlFragments[appName];
  };

  // Taken from this Repository. Seems to be the only one that actually
  // adheres to the spec, but isn't exported as a module :(
  // https://github.com/inexorabletash/polyfill/blob/master/keyboard.js
  // Licensed under 'Unlicense' - This is free and unencumbered software released into the public domain
  var KeyCodeMappings = {
    // 0x01 - VK_LBUTTON
    // 0x02 - VK_RBUTTON
    0x03: {
      code: "Cancel"
    },
    // [USB: 0x9b] char \x0018 ??? (Not in D3E)
    // 0x04 - VK_MBUTTON
    // 0x05 - VK_XBUTTON1
    // 0x06 - VK_XBUTTON2
    0x06: {
      code: "Help"
    },
    // [USB: 0x75] ???
    // 0x07 - undefined
    0x08: {
      code: "Backspace"
    },
    // [USB: 0x2a] Labelled Delete on Macintosh keyboards.
    0x09: {
      code: "Tab"
    },
    // [USB: 0x2b]
    // 0x0A-0x0B - reserved
    0X0C: {
      code: "Clear"
    },
    // [USB: 0x9c] NumPad Center (Not in D3E)
    0X0D: {
      code: "Enter"
    },
    // [USB: 0x28]
    // 0x0E-0x0F - undefined
    0x10: {
      code: "Shift"
    },
    0x11: {
      code: "Control"
    },
    0x12: {
      code: "Alt"
    },
    0x13: {
      code: "Pause"
    },
    // [USB: 0x48]
    0x14: {
      code: "CapsLock"
    },
    // [USB: 0x39]
    0x15: {
      code: "KanaMode"
    },
    // [USB: 0x88]
    0x16: {
      code: "Lang1"
    },
    // [USB: 0x90]
    // 0x17: VK_JUNJA
    // 0x18: VK_FINAL
    0x19: {
      code: "Lang2"
    },
    // [USB: 0x91]
    // 0x1A - undefined
    0x1B: {
      code: "Escape"
    },
    // [USB: 0x29]
    0x1C: {
      code: "Convert"
    },
    // [USB: 0x8a]
    0x1D: {
      code: "NonConvert"
    },
    // [USB: 0x8b]
    0x1E: {
      code: "Accept"
    },
    // [USB: ????]
    0x1F: {
      code: "ModeChange"
    },
    // [USB: ????]
    0x20: {
      code: "Space"
    },
    // [USB: 0x2c]
    0x21: {
      code: "PageUp"
    },
    // [USB: 0x4b]
    0x22: {
      code: "PageDown"
    },
    // [USB: 0x4e]
    0x23: {
      code: "End"
    },
    // [USB: 0x4d]
    0x24: {
      code: "Home"
    },
    // [USB: 0x4a]
    0x25: {
      code: "ArrowLeft"
    },
    // [USB: 0x50]
    0x26: {
      code: "ArrowUp"
    },
    // [USB: 0x52]
    0x27: {
      code: "ArrowRight"
    },
    // [USB: 0x4f]
    0x28: {
      code: "ArrowDown"
    },
    // [USB: 0x51]
    0x29: {
      code: "Select"
    },
    // (Not in D3E)
    0x2A: {
      code: "Print"
    },
    // (Not in D3E)
    0x2B: {
      code: "Execute"
    },
    // [USB: 0x74] (Not in D3E)
    0x2C: {
      code: "PrintScreen"
    },
    // [USB: 0x46]
    0x2D: {
      code: "Insert"
    },
    // [USB: 0x49]
    0x2E: {
      code: "Delete"
    },
    // [USB: 0x4c]
    0x2F: {
      code: "Help"
    },
    // [USB: 0x75] ???
    0x30: {
      code: "Digit0",
      keyCap: "0"
    },
    // [USB: 0x27] 0)
    0x31: {
      code: "Digit1",
      keyCap: "1"
    },
    // [USB: 0x1e] 1!
    0x32: {
      code: "Digit2",
      keyCap: "2"
    },
    // [USB: 0x1f] 2@
    0x33: {
      code: "Digit3",
      keyCap: "3"
    },
    // [USB: 0x20] 3#
    0x34: {
      code: "Digit4",
      keyCap: "4"
    },
    // [USB: 0x21] 4$
    0x35: {
      code: "Digit5",
      keyCap: "5"
    },
    // [USB: 0x22] 5%
    0x36: {
      code: "Digit6",
      keyCap: "6"
    },
    // [USB: 0x23] 6^
    0x37: {
      code: "Digit7",
      keyCap: "7"
    },
    // [USB: 0x24] 7&
    0x38: {
      code: "Digit8",
      keyCap: "8"
    },
    // [USB: 0x25] 8*
    0x39: {
      code: "Digit9",
      keyCap: "9"
    },
    // [USB: 0x26] 9(
    // 0x3A-0x40 - undefined
    0x41: {
      code: "KeyA",
      keyCap: "a"
    },
    // [USB: 0x04]
    0x42: {
      code: "KeyB",
      keyCap: "b"
    },
    // [USB: 0x05]
    0x43: {
      code: "KeyC",
      keyCap: "c"
    },
    // [USB: 0x06]
    0x44: {
      code: "KeyD",
      keyCap: "d"
    },
    // [USB: 0x07]
    0x45: {
      code: "KeyE",
      keyCap: "e"
    },
    // [USB: 0x08]
    0x46: {
      code: "KeyF",
      keyCap: "f"
    },
    // [USB: 0x09]
    0x47: {
      code: "KeyG",
      keyCap: "g"
    },
    // [USB: 0x0a]
    0x48: {
      code: "KeyH",
      keyCap: "h"
    },
    // [USB: 0x0b]
    0x49: {
      code: "KeyI",
      keyCap: "i"
    },
    // [USB: 0x0c]
    0x4A: {
      code: "KeyJ",
      keyCap: "j"
    },
    // [USB: 0x0d]
    0x4B: {
      code: "KeyK",
      keyCap: "k"
    },
    // [USB: 0x0e]
    0x4C: {
      code: "KeyL",
      keyCap: "l"
    },
    // [USB: 0x0f]
    0x4D: {
      code: "KeyM",
      keyCap: "m"
    },
    // [USB: 0x10]
    0x4E: {
      code: "KeyN",
      keyCap: "n"
    },
    // [USB: 0x11]
    0x4F: {
      code: "KeyO",
      keyCap: "o"
    },
    // [USB: 0x12]
    0x50: {
      code: "KeyP",
      keyCap: "p"
    },
    // [USB: 0x13]
    0x51: {
      code: "KeyQ",
      keyCap: "q"
    },
    // [USB: 0x14]
    0x52: {
      code: "KeyR",
      keyCap: "r"
    },
    // [USB: 0x15]
    0x53: {
      code: "KeyS",
      keyCap: "s"
    },
    // [USB: 0x16]
    0x54: {
      code: "KeyT",
      keyCap: "t"
    },
    // [USB: 0x17]
    0x55: {
      code: "KeyU",
      keyCap: "u"
    },
    // [USB: 0x18]
    0x56: {
      code: "KeyV",
      keyCap: "v"
    },
    // [USB: 0x19]
    0x57: {
      code: "KeyW",
      keyCap: "w"
    },
    // [USB: 0x1a]
    0x58: {
      code: "KeyX",
      keyCap: "x"
    },
    // [USB: 0x1b]
    0x59: {
      code: "KeyY",
      keyCap: "y"
    },
    // [USB: 0x1c]
    0x5A: {
      code: "KeyZ",
      keyCap: "z"
    },
    // [USB: 0x1d]
    0x5B: {
      code: "MetaLeft"
    },
    // [USB: 0xe3]
    0x5C: {
      code: "MetaRight"
    },
    // [USB: 0xe7]
    0x5D: {
      code: "ContextMenu"
    },
    // [USB: 0x65] Context Menu
    // 0x5E - reserved
    0x5F: {
      code: "Standby"
    },
    // [USB: 0x82] Sleep
    0x60: {
      code: "Numpad0",
      keyCap: "0"
    },
    // [USB: 0x62]
    0x61: {
      code: "Numpad1",
      keyCap: "1"
    },
    // [USB: 0x59]
    0x62: {
      code: "Numpad2",
      keyCap: "2"
    },
    // [USB: 0x5a]
    0x63: {
      code: "Numpad3",
      keyCap: "3"
    },
    // [USB: 0x5b]
    0x64: {
      code: "Numpad4",
      keyCap: "4"
    },
    // [USB: 0x5c]
    0x65: {
      code: "Numpad5",
      keyCap: "5"
    },
    // [USB: 0x5d]
    0x66: {
      code: "Numpad6",
      keyCap: "6"
    },
    // [USB: 0x5e]
    0x67: {
      code: "Numpad7",
      keyCap: "7"
    },
    // [USB: 0x5f]
    0x68: {
      code: "Numpad8",
      keyCap: "8"
    },
    // [USB: 0x60]
    0x69: {
      code: "Numpad9",
      keyCap: "9"
    },
    // [USB: 0x61]
    0x6A: {
      code: "NumpadMultiply",
      keyCap: "*"
    },
    // [USB: 0x55]
    0x6B: {
      code: "NumpadAdd",
      keyCap: "+"
    },
    // [USB: 0x57]
    0x6C: {
      code: "NumpadComma",
      keyCap: ","
    },
    // [USB: 0x85]
    0x6D: {
      code: "NumpadSubtract",
      keyCap: "-"
    },
    // [USB: 0x56]
    0x6E: {
      code: "NumpadDecimal",
      keyCap: "."
    },
    // [USB: 0x63]
    0x6F: {
      code: "NumpadDivide",
      keyCap: "/"
    },
    // [USB: 0x54]
    0x70: {
      code: "F1"
    },
    // [USB: 0x3a]
    0x71: {
      code: "F2"
    },
    // [USB: 0x3b]
    0x72: {
      code: "F3"
    },
    // [USB: 0x3c]
    0x73: {
      code: "F4"
    },
    // [USB: 0x3d]
    0x74: {
      code: "F5"
    },
    // [USB: 0x3e]
    0x75: {
      code: "F6"
    },
    // [USB: 0x3f]
    0x76: {
      code: "F7"
    },
    // [USB: 0x40]
    0x77: {
      code: "F8"
    },
    // [USB: 0x41]
    0x78: {
      code: "F9"
    },
    // [USB: 0x42]
    0x79: {
      code: "F10"
    },
    // [USB: 0x43]
    0x7A: {
      code: "F11"
    },
    // [USB: 0x44]
    0x7B: {
      code: "F12"
    },
    // [USB: 0x45]
    0x7C: {
      code: "F13"
    },
    // [USB: 0x68]
    0x7D: {
      code: "F14"
    },
    // [USB: 0x69]
    0x7E: {
      code: "F15"
    },
    // [USB: 0x6a]
    0x7F: {
      code: "F16"
    },
    // [USB: 0x6b]
    0x80: {
      code: "F17"
    },
    // [USB: 0x6c]
    0x81: {
      code: "F18"
    },
    // [USB: 0x6d]
    0x82: {
      code: "F19"
    },
    // [USB: 0x6e]
    0x83: {
      code: "F20"
    },
    // [USB: 0x6f]
    0x84: {
      code: "F21"
    },
    // [USB: 0x70]
    0x85: {
      code: "F22"
    },
    // [USB: 0x71]
    0x86: {
      code: "F23"
    },
    // [USB: 0x72]
    0x87: {
      code: "F24"
    },
    // [USB: 0x73]
    // 0x88-0x8F - unassigned
    0x90: {
      code: "NumLock"
    },
    // [USB: 0x53]
    0x91: {
      code: "ScrollLock"
    },
    // [USB: 0x47]
    // 0x92-0x96 - OEM specific
    // 0x97-0x9F - unassigned
    // NOTE: 0xA0-0xA5 usually mapped to 0x10-0x12 in browsers
    0xA0: {
      code: "ShiftLeft"
    },
    // [USB: 0xe1]
    0xA1: {
      code: "ShiftRight"
    },
    // [USB: 0xe5]
    0xA2: {
      code: "ControlLeft"
    },
    // [USB: 0xe0]
    0xA3: {
      code: "ControlRight"
    },
    // [USB: 0xe4]
    0xA4: {
      code: "AltLeft"
    },
    // [USB: 0xe2]
    0xA5: {
      code: "AltRight"
    },
    // [USB: 0xe6]
    0xA6: {
      code: "BrowserBack"
    },
    // [USB: 0x0c/0x0224]
    0xA7: {
      code: "BrowserForward"
    },
    // [USB: 0x0c/0x0225]
    0xA8: {
      code: "BrowserRefresh"
    },
    // [USB: 0x0c/0x0227]
    0xA9: {
      code: "BrowserStop"
    },
    // [USB: 0x0c/0x0226]
    0xAA: {
      code: "BrowserSearch"
    },
    // [USB: 0x0c/0x0221]
    0xAB: {
      code: "BrowserFavorites"
    },
    // [USB: 0x0c/0x0228]
    0xAC: {
      code: "BrowserHome"
    },
    // [USB: 0x0c/0x0222]
    0xAD: {
      code: "AudioVolumeMute"
    },
    // [USB: 0x7f]
    0xAE: {
      code: "AudioVolumeDown"
    },
    // [USB: 0x81]
    0xAF: {
      code: "AudioVolumeUp"
    },
    // [USB: 0x80]
    0xB0: {
      code: "MediaTrackNext"
    },
    // [USB: 0x0c/0x00b5]
    0xB1: {
      code: "MediaTrackPrevious"
    },
    // [USB: 0x0c/0x00b6]
    0xB2: {
      code: "MediaStop"
    },
    // [USB: 0x0c/0x00b7]
    0xB3: {
      code: "MediaPlayPause"
    },
    // [USB: 0x0c/0x00cd]
    0xB4: {
      code: "LaunchMail"
    },
    // [USB: 0x0c/0x018a]
    0xB5: {
      code: "MediaSelect"
    },
    0xB6: {
      code: "LaunchApp1"
    },
    0xB7: {
      code: "LaunchApp2"
    },
    // 0xB8-0xB9 - reserved
    0xBA: {
      code: "Semicolon",
      keyCap: ";"
    },
    // [USB: 0x33] ;: (US Standard 101)
    0xBB: {
      code: "Equal",
      keyCap: "="
    },
    // [USB: 0x2e] =+
    0xBC: {
      code: "Comma",
      keyCap: ","
    },
    // [USB: 0x36] ,<
    0xBD: {
      code: "Minus",
      keyCap: "-"
    },
    // [USB: 0x2d] -_
    0xBE: {
      code: "Period",
      keyCap: "."
    },
    // [USB: 0x37] .>
    0xBF: {
      code: "Slash",
      keyCap: "/"
    },
    // [USB: 0x38] /? (US Standard 101)
    0xC0: {
      code: "Backquote",
      keyCap: "`"
    },
    // [USB: 0x35] `~ (US Standard 101)
    // 0xC1-0xCF - reserved
    // 0xD0-0xD7 - reserved
    // 0xD8-0xDA - unassigned
    0xDB: {
      code: "BracketLeft",
      keyCap: "["
    },
    // [USB: 0x2f] [{ (US Standard 101)
    0xDC: {
      code: "Backslash",
      keyCap: "\\"
    },
    // [USB: 0x31] \| (US Standard 101)
    0xDD: {
      code: "BracketRight",
      keyCap: "]"
    },
    // [USB: 0x30] ]} (US Standard 101)
    0xDE: {
      code: "Quote",
      keyCap: "'"
    },
    // [USB: 0x34] '" (US Standard 101)
    // 0xDF - miscellaneous/varies
    // 0xE0 - reserved
    // 0xE1 - OEM specific
    0xE2: {
      code: "IntlBackslash",
      keyCap: "\\"
    },
    // [USB: 0x64] \| (UK Standard 102)
    // 0xE3-0xE4 - OEM specific
    0xE5: {
      code: "Process"
    },
    // (Not in D3E)
    // 0xE6 - OEM specific
    // 0xE7 - VK_PACKET
    // 0xE8 - unassigned
    // 0xE9-0xEF - OEM specific
    // 0xF0-0xF5 - OEM specific
    0xF6: {
      code: "Attn"
    },
    // [USB: 0x9a] (Not in D3E)
    0xF7: {
      code: "CrSel"
    },
    // [USB: 0xa3] (Not in D3E)
    0xF8: {
      code: "ExSel"
    },
    // [USB: 0xa4] (Not in D3E)
    0xF9: {
      code: "EraseEof"
    },
    // (Not in D3E)
    0xFA: {
      code: "Play"
    },
    // (Not in D3E)
    0xFB: {
      code: "ZoomToggle"
    },
    // (Not in D3E)
    // 0xFC - VK_NONAME - reserved
    // 0xFD - VK_PA1
    0xFE: {
      code: "Clear"
    } // [USB: 0x9c] (Not in D3E)

  };

  /* eslint-disable */
  // Copied this from RW4GC, so disabling ESLint for a block of code I don't have the stones to modify.
  // @ts-ignore

  const getEventHandlersFor = (type, src = document.querySelector(".docs-texteventtarget-iframe").contentDocument) => {
    try {
      const eventHandlers = [];
      let eventListKeyName = null;
      let eventHandlerKeyName = null;

      for (var srcKey in src) {
        // Find the closure object
        if (srcKey.match(/^closure/) && typeof src[srcKey] !== "number") {
          var closure = src[srcKey];
          if (!closure) continue; // Find the property name of the event list

          if (!eventListKeyName) {
            for (var closureKey in closure) {
              var eventList = closure[closureKey];
              if (!eventList) continue;
              if (eventList == src) continue;

              for (var eventListKey in eventList) {
                var eventTypeArray = eventList[eventListKey];
                if (!eventTypeArray) continue;

                if (eventTypeArray.length != undefined && eventTypeArray[0].src == src) {
                  eventListKeyName = closureKey;
                  eventHandlers.concat(eventTypeArray);
                }
              }
            }
          } // Find the array of events with correct type


          for (var eventTypeName in closure[eventListKeyName]) {
            if (eventTypeName == type) {
              var eventArray = closure[eventListKeyName][eventTypeName];

              for (var i = 0; i < eventArray.length; i++) {
                // Find the handler property name
                if (!eventHandlerKeyName) {
                  if (eventArray[i].src == src) {
                    for (var eventPropertyName in eventArray[i]) {
                      if (eventArray[i][eventPropertyName].src == src) {
                        eventHandlerKeyName = eventPropertyName;
                        break;
                      }
                    }
                  }
                } // Push the event object and event handler to return object


                eventHandlers.push({
                  eventObject: eventArray[i],
                  eventHandler: eventArray[i][eventHandlerKeyName]
                });
              }
            }
          }
        }
      }

      return eventHandlers;
    } catch (err) {
      console.warn(err);
    }
  };
  /* eslint-enable */


  const getIframeDetails = () => {
    const iframe = document.querySelector(".docs-texteventtarget-iframe");
    const win = iframe.contentWindow,
          doc = iframe.contentDocument;
    return {
      win,
      doc
    };
  };

  const getKeyboardEvent = (combo, eventType) => {
    const _getIframeDetails = getIframeDetails(),
          doc = _getIframeDetails.doc,
          win = _getIframeDetails.win;

    const parsedKeyCombo = keycomb(combo);
    const altKey = parsedKeyCombo.altKey,
          shiftKey = parsedKeyCombo.shiftKey,
          keyCodeValue = parsedKeyCombo.keyCode;
    let ctrlKey = parsedKeyCombo.ctrlKey;
    const metaKey = combo.toLowerCase().startsWith("cmd+") || combo.startsWith("⌘+");

    if (metaKey && !combo.toLowerCase().includes("control") && !combo.toLowerCase().includes("ctrl")) {
      ctrlKey = false;
    }

    const keyCode = Array.isArray(keyCodeValue) ? keyCodeValue[0] : keyCodeValue;
    const key = keyboardKey_1.getKey(keyCode);

    const _ref = KeyCodeMappings[keyCode] || {
      code: String.fromCharCode(keyCode)
    },
          code = _ref.code;

    const keyboardEvent = {
      // Custom keyboard event, because real keyboard event has read-only keybode/which propertise
      altGraphKey: false,
      bubbles: true,
      cancelBubble: false,
      cancelable: true,
      clipboardData: undefined,
      currentTarget: doc,
      defaultPrevented: false,
      detail: 0,
      eventPhase: 0,
      keyLocation: 0,
      layerX: 0,
      layerY: 0,
      pageX: undefined,
      pageY: undefined,
      returnValue: true,
      srcElement: doc.body,
      target: doc.body,
      timeStamp: new Date().getTime(),
      type: eventType,
      view: win,
      charCode: 0,
      altKey,
      ctrlKey,
      shiftKey,
      metaKey,
      keyCode,
      key,
      code
    };
    return keyboardEvent;
  };

  const googleAppsEvent = (combo, type = "keydown") => {
    const _getIframeDetails2 = getIframeDetails(),
          doc = _getIframeDetails2.doc,
          win = _getIframeDetails2.win;

    const div = doc.body.querySelector("div[tabindex]");

    const _getKeyboardEvent = getKeyboardEvent(combo, type),
          key = _getKeyboardEvent.key,
          code = _getKeyboardEvent.code,
          keyCode = _getKeyboardEvent.keyCode,
          altKey = _getKeyboardEvent.altKey,
          ctrlKey = _getKeyboardEvent.ctrlKey,
          shiftKey = _getKeyboardEvent.shiftKey,
          metaKey = _getKeyboardEvent.metaKey;

    const evt = new KeyboardEvent(type, {
      bubbles: true,
      cancelable: true,
      view: win,
      key,
      code,
      keyCode,
      altKey,
      ctrlKey,
      shiftKey,
      metaKey
    });
    div.dispatchEvent(evt);
  };

  const googleDocsEvent = (combo, type = "keydown") => {
    // eslint-disable-next-line no-restricted-syntax
    var _iterator = _createForOfIteratorHelper(getEventHandlersFor(type)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const evt = _step.value;
        const kbd = getKeyboardEvent(combo, type);

        try {
          evt.eventHandler(kbd);
        } catch (e) {
          console.error("Couldn't execute event", e);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var keyboardEvent = ((combo, type = "keydown") => {
    if (getGoogleAppName() === AppNames.GoogleDocs) {
      googleDocsEvent(combo, type);
      return;
    }

    googleAppsEvent(combo, type);
  });

  const _excluded = ["start", "end", "backgroundColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderBottomColor", "id"];
  /**
   * Watch for selection changes in the document. Update the local cursor singleton
   * when the cursor moves
   */

  let cursor = {
    start: 0,
    end: 0
  };
  document.addEventListener("wizkids-google-docs-outbound", e => {
    const data = JSON.parse(e.detail, reviver);

    if (data.id === "__onSelectionChange") {
      const result = JSON.parse(data.result, reviver);

      if (!result) {
        return;
      }

      if (result.type === "InlineLocation") {
        cursor = result.range;
      }
    } else if (data.id === "__onSpellCheckChange") ;
  });
  const getCurrentCursor = () => cursor;
  /**
   * Helper functions for integrating into Wizkids code
   */

  /**
   * Send an Event to the Wizkids module, then wait for the response
   * @param param0 The CustomEvent to send to the Wizkids module
   * @returns A string with the response of the CustomEvent
   */
  const eventWithResponse = ({
    type,
    args = []
  }) => new Promise((resolve, reject) => {
    const id = uuid();

    const textListener = e => {
      const data = JSON.parse(e.detail, reviver);

      if (data.id === id) {
        resolve(JSON.parse(data.result, reviver));
        document.removeEventListener("wizkids-google-docs-outbound", textListener);
      }
    };

    document.addEventListener("wizkids-google-docs-outbound", textListener);
    document.dispatchEvent(new CustomEvent("wizkids-google-docs-inbound", {
      cancelable: !0,
      bubbles: !0,
      detail: JSON.stringify({
        id,
        type,
        args
      }, replacer)
    }));
  });
  /**
   * Send an Event to the Wizkids module, without waiting for a response
   * @param param0 The CustomEvent to send to the Wizkids module
   */


  const eventOnly = ({
    type,
    args = []
  }) => {
    const id = uuid();
    document.dispatchEvent(new CustomEvent("wizkids-google-docs-inbound", {
      cancelable: !0,
      bubbles: !0,
      detail: JSON.stringify({
        id,
        type,
        args
      }, replacer)
    }));
  };
  /**
   * Temporary. An enum of the mappings between minified/unminifed Event names
   */


  var Events;
  /**
   * Implementation of the necessary Events
   */

  /**
   * Get the selection range from the document
   * @returns String
   */

  (function (Events) {
    Events["getSelection"] = "HvW5";
    Events["getTextContent"] = "wnZK";
    Events["getRenderedRanges"] = "ppV+";
    Events["setOverlays"] = "zvZQ";
    Events["removeAllOverlays"] = "OThW";
    Events["setSelection"] = "gO78";
    Events["insertData"] = "fXY1";
    Events["getParagraphStarts"] = "N+aV";
    Events["removeOverlays"] = "L81W";
    Events["setSpellCheckVisibility"] = "149D";
    Events["getSpellCheckErrors"] = "2SZD";
    Events["getStyle"] = "AurK";
    Events["getRectsByRange"] = "kQIP";
  })(Events || (Events = {}));

  const getSelection = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      return eventWithResponse({
        type: Events.getSelection
      });
    });

    return function getSelection() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Get the body text from the document
   * @returns String
   */

  const getBodyText = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      return eventWithResponse({
        type: Events.getTextContent
      });
    });

    return function getBodyText() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Get the list of rendered ranges from the document
   * @returns Array[Cursor]
   */

  const getRenderedRanges = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      return eventWithResponse({
        type: Events.getRenderedRanges
      });
    });

    return function getRenderedRanges() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Clear all highlights from the current doc
   * @returns void
   */

  const clearHighlights = () => eventOnly({
    type: Events.removeAllOverlays
  });
  /**
   * Remove a set of highlights by specifying their ID
   * @param ids An array of IDs to remove
   * @returns void
   */

  const removeHighlightsById = ids => eventOnly({
    type: Events.removeOverlays,
    args: [ids]
  });
  /**
   * Get the text represented by the Cursor range
   * @param param0 Cursor
   * @returns String
   */

  const getRangeText = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* ({
      start,
      end
    }) {
      const body = yield getBodyText();
      return body.substring(start, end);
    });

    return function getRangeText(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Get the text for the current Google Docs selection
   * @returns String
   */

  const getDocsSelection = () => getRangeText(cursor);
  /**
   * Set all highlights in the current document
   * @param highlights An array of highlights to make
   */

  const setHighlights = highlights => {
    const args = highlights.map(_ref5 => {
      let start = _ref5.start,
          end = _ref5.end,
          backgroundColor = _ref5.backgroundColor,
          borderLeftColor = _ref5.borderLeftColor,
          borderRightColor = _ref5.borderRightColor,
          borderTopColor = _ref5.borderTopColor,
          borderBottomColor = _ref5.borderBottomColor,
          id = _ref5.id,
          theRest = _objectWithoutProperties(_ref5, _excluded);

      return [id, _objectSpread2({
        range: {
          start,
          end
        },
        backgroundColor,
        borderLeftColor,
        borderRightColor,
        borderTopColor,
        borderBottomColor,
        id
      }, theRest)];
    });
    eventOnly({
      type: Events.setOverlays,
      args: [args]
    }); // Re-render

    document.dispatchEvent(new CustomEvent("webkitvisibilitychange", {
      cancelable: false,
      bubbles: true
    }));
  };
  const setSelection = range => eventOnly({
    type: Events.setSelection,
    args: [{
      range,
      type: "InlineLocation"
    }]
  });
  const insertData = (mimeType, data) => eventOnly({
    type: Events.insertData,
    args: [mimeType, data]
  });
  const getParagraphStarts = () => eventWithResponse({
    type: Events.getParagraphStarts
  });
  /**
   * Get the text around the cursor
   * @param param0 Cursor side & length of text
   * @returns String
   */

  const getTextAtCursor = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* ({
      side = "left",
      length = 1
    } = {}) {
      const _cursor = cursor,
            start = _cursor.start,
            end = _cursor.end;
      const textBlock = yield getBodyText();

      if (side === "left") {
        return textBlock.substring(start - length, end);
      }

      return textBlock.substring(start, end + length);
    });

    return function getTextAtCursor() {
      return _ref6.apply(this, arguments);
    };
  }();
  const setSpellCheckVisibility = visible => eventOnly({
    type: Events.setSpellCheckVisibility,
    args: [visible]
  });
  const getSpellCheckErrors = () => eventWithResponse({
    type: Events.getSpellCheckErrors
  });
  const getStyle = (type, index) => eventWithResponse({
    type: Events.getStyle,
    args: [type, index]
  });
  const getRectsByRange = range => eventWithResponse({
    type: Events.getRectsByRange,
    args: [range]
  });

  // Listen for events from the Texthelp Content Script
  window.addEventListener("message", e => {
    // Ignore anything that doesn't come from the current window, or
    // doesn't have the TH_DOCS_PARSER_ACTION `action`
    if (e.source !== window || e.data.action !== "TH_DOCS_PARSER_ACTION") {
      return;
    }

    const _e$data = e.data,
          type = _e$data.type,
          id = _e$data.id,
          options = _e$data.options; // Helper function to send a success/failure response back through the postMessage
    // channel.
    // Probably a cleaner way to do this? 🤔
    // eslint-disable-next-line @typescript-eslint/ban-types

    const tryOrReturn = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (func) {
        try {
          window.postMessage({
            action: "TH_DOCS_PARSER_RESPONSE",
            id,
            responseType: "success",
            responseValue: yield func()
          }, e.origin);
        } catch (ex) {
          window.postMessage({
            action: "TH_DOCS_PARSER_RESPONSE",
            id,
            responseType: "success",
            responseValue: ex
          }, e.origin);
        }
      });

      return function tryOrReturn(_x) {
        return _ref.apply(this, arguments);
      };
    }(); // Big switch statement which handles all the mappings between Actions & implementations...


    switch (type) {
      case Action$1.InsertText:
        {
          const text = options.text,
                mimeType = options.mimeType;
          tryOrReturn(() => insertData(mimeType, text));
          break;
        }

      case Action$1.KeyboardEvent:
        {
          const actions = Array.isArray(options) ? options : [options];
          tryOrReturn(() => {
            var _iterator = _createForOfIteratorHelper(actions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                const _step$value = _step.value,
                      combo = _step$value.combo,
                      eventType = _step$value.type;
                keyboardEvent(combo, eventType);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
          break;
        }

      case Action$1.SetSelection:
        {
          const cursor = options.cursor;
          tryOrReturn(() => setSelection(cursor));
          break;
        }

      case Action$1.GetAllText:
        {
          tryOrReturn(() => getBodyText());
          break;
        }

      case Action$1.GetRangeText:
        {
          const _ref2 = options,
                start = _ref2.start,
                end = _ref2.end;
          tryOrReturn(() => getRangeText({
            start,
            end
          }));
          break;
        }

      case Action$1.GetTextAtCursor:
        {
          const side = options.side,
                length = options.length;
          tryOrReturn(() => getTextAtCursor({
            side,
            length
          }));
          break;
        }

      case Action$1.GetSelection:
        {
          tryOrReturn(() => getDocsSelection());
          break;
        }

      case Action$1.GetSelectionRange:
        {
          tryOrReturn(() => getSelection());
          break;
        }

      case Action$1.GetCursor:
        {
          tryOrReturn(() => getCurrentCursor());
          break;
        }

      case Action$1.SetHighlights:
        {
          const highlights = options.highlights;
          tryOrReturn(() => setHighlights(highlights));
          break;
        }

      case Action$1.ClearHighlights:
        {
          tryOrReturn(() => clearHighlights());
          break;
        }

      case Action$1.GetRenderedRanges:
        {
          tryOrReturn(() => getRenderedRanges());
          break;
        }

      case Action$1.GetParagraphStarts:
        {
          tryOrReturn(() => getParagraphStarts());
          break;
        }

      case Action$1.RemoveHighlightsById:
        {
          const ids = options.ids;
          tryOrReturn(() => removeHighlightsById(ids));
          break;
        }

      case Action$1.SetSpellCheckVisibility:
        {
          const visible = options.visible;
          tryOrReturn(() => setSpellCheckVisibility(visible));
          break;
        }

      case Action$1.GetSpellCheckErrors:
        {
          tryOrReturn(() => getSpellCheckErrors());
          break;
        }

      case Action$1.GetStyle:
        {
          const type = options.type,
                index = options.index;
          tryOrReturn(() => getStyle(type, index));
          break;
        }

      case Action$1.GetRectsByRange:
        {
          const range = options.range;
          tryOrReturn(() => getRectsByRange(range));
          break;
        }
    }
  });

})();
