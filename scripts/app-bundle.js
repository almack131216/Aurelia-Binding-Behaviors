define('app',['exports', 'aurelia-framework', './globals'], function (exports, _aureliaFramework, _globals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_globals.Configuration), _dec(_class = function App(config) {
    _classCallCheck(this, App);

    this.title = 'Aurelia - Binding Behavior';

    this.currentDate = new Date();

    this.myCurrencyValue = 999.99;

    this.throttle_title = 'throttle';
    this.throttle_inp = 'Test Throttle';

    this.debounce_title = 'debounce';
    this.debounce_inp = 'Test Debounce';

    this.myDataDelay = config.gDelay;
    this.myDataDelay2 = config.gDelay2;

    this.message = 'this is my text\nit has some line breaks\nand some <script>evil javascript</script>\nthe line breaks were replaced with <br/> tags';
  }) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('globals',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Configuration = exports.Configuration = function Configuration() {
        _classCallCheck(this, Configuration);

        this.gDelay = 2000;
        this.gDelay2 = 2500;
        this.gCurrency = '£';
        this.gDateFormat = 'MMMM Mo YYYY';
    };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('format/format-currency',['exports', 'numeral', 'aurelia-framework', '../globals'], function (exports, _numeral, _aureliaFramework, _globals) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CurrencyFormatValueConverter = undefined;

    var _numeral2 = _interopRequireDefault(_numeral);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var CurrencyFormatValueConverter = exports.CurrencyFormatValueConverter = (_dec = (0, _aureliaFramework.inject)(_globals.Configuration), _dec(_class = function () {
        function CurrencyFormatValueConverter(config) {
            _classCallCheck(this, CurrencyFormatValueConverter);

            this.gCurrency = config.gCurrency;
        }

        CurrencyFormatValueConverter.prototype.toView = function toView(value, format) {
            var currency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currency ? currency : this.gCurrency;

            return currency + (0, _numeral2.default)(value).format(format);
        };

        return CurrencyFormatValueConverter;
    }()) || _class);
});
define('format/format-date',['exports', 'moment', 'aurelia-framework', '../globals'], function (exports, _moment, _aureliaFramework, _globals) {
   'use strict';

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.DateFormatValueConverter = undefined;

   var _moment2 = _interopRequireDefault(_moment);

   function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
         default: obj
      };
   }

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var _dec, _class;

   var DateFormatValueConverter = exports.DateFormatValueConverter = (_dec = (0, _aureliaFramework.inject)(_globals.Configuration), _dec(_class = function () {
      function DateFormatValueConverter(config) {
         _classCallCheck(this, DateFormatValueConverter);

         this.gDateFormat = config.gDateFormat;
      }

      DateFormatValueConverter.prototype.toView = function toView(value, format) {
         return (0, _moment2.default)(value).format(format ? format : this.gDateFormat);
      };

      return DateFormatValueConverter;
   }()) || _class);
});
define('format/format-number',['exports', 'numeral'], function (exports, _numeral) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NumberFormatValueConverter = undefined;

  var _numeral2 = _interopRequireDefault(_numeral);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NumberFormatValueConverter = exports.NumberFormatValueConverter = function () {
    function NumberFormatValueConverter() {
      _classCallCheck(this, NumberFormatValueConverter);
    }

    NumberFormatValueConverter.prototype.toView = function toView(value, format) {
      return (0, _numeral2.default)(value).format(format ? format : '');
    };

    return NumberFormatValueConverter;
  }();
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('format/format-cust',['exports', 'aurelia-framework', 'numeral'], function (exports, _aureliaFramework, _numeral) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ConvertTicksValueConverter = exports.PreserveBreaksCustomAttribute = undefined;

  var _numeral2 = _interopRequireDefault(_numeral);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  function htmlEncode(html) {
    return document.createElement('a').appendChild(document.createTextNode(html)).parentNode.innerHTML;
  }

  var PreserveBreaksCustomAttribute = exports.PreserveBreaksCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
    function PreserveBreaksCustomAttribute(element) {
      _classCallCheck(this, PreserveBreaksCustomAttribute);

      this.element = element;
    }

    PreserveBreaksCustomAttribute.prototype.valueChanged = function valueChanged() {
      var html = htmlEncode(this.value);
      html = html.replace(/\r/g, '').replace(/\n/g, '<br/>');
      this.element.innerHTML = html;
    };

    return PreserveBreaksCustomAttribute;
  }()) || _class);

  var ConvertTicksValueConverter = exports.ConvertTicksValueConverter = function () {
    function ConvertTicksValueConverter() {
      _classCallCheck(this, ConvertTicksValueConverter);
    }

    ConvertTicksValueConverter.prototype.toView = function toView(value) {
      return (0, _numeral2.default)(value / 1000).format('0[.][0]');
    };

    return ConvertTicksValueConverter;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"format/format-cust\"></require>\n  <require from=\"format/format-date\"></require>\n  <require from=\"format/format-currency\"></require>\n  <require from=\"format/format-number\"></require>  \n\n  <h1>${title}</h1>\n\n  <hr>\n  <h2>${throttle_title}:${myDataDelay}</h2>\n  <input id=\"throttleInp\" type=\"text\" value.bind=\"throttle_inp & throttle:myDataDelay\" />\n  <br>\n  <span>update after ${myDataDelay | convertTicks} seconds: ${throttle_inp}</span>\n\n  <hr>\n  <h2>${debounce_title}:${myDataDelay2}</h2>\n  <input id=\"debounceInp\" type=\"text\" value.bind=\"debounce_inp & debounce:myDataDelay2\" />\n  , oneTime: <input id=\"debounceInpOneTime\" type=\"text\" value.bind=\"debounce_inp & oneTime\" />\n  <br>\n  <span>update after ${myDataDelay2 | convertTicks} seconds: ${debounce_inp}</span>\n\n  <hr>\n  <h3>currencyFormat</h3>\n  <span>${myCurrencyValue | currencyFormat:'(0,0.00)'}</span>\n  \n  <hr>\n  <h3>dateFormat</h3>\n  <span>default = ${currentDate | dateFormat}</span>\n  <br><span>'MMMM' = ${currentDate | dateFormat:'MMMM'}</span>\n\n  <hr>\n  <h3>string formatting</h3>\n  <u>pre:</u>\n  <br><pre>${message}</pre>\n  <br>\n  <u>innerHTML.bind:</u>\n  <br><span innerHTML.bind=\"message\"></span>\n  <br>\n  <br>\n  <u>normal:</u>\n  <br>${message}\n  <br>\n  <br>\n  <u>preserve-breaks.bind:</u>\n  <br><div preserve-breaks.bind=\"message\"></div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map