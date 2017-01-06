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
        this.gDelay2 = 1100;
        this.gCurrency = '£';
        this.gCurrencyFormat = '(0,0.00)';
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

            this.gCurrencyFormat = config.gCurrencyFormat;
            this.gCurrency = config.gCurrency;
        }

        CurrencyFormatValueConverter.prototype.toView = function toView(value) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : format ? format : this.gCurrencyFormat;
            var currency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currency ? currency : this.gCurrency;

            return currency + (0, _numeral2.default)(value).format(format);
        };

        return CurrencyFormatValueConverter;
    }()) || _class);
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
  exports.RoundDownValueConverter = exports.NumberFormatValueConverter = undefined;

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

  var RoundDownValueConverter = exports.RoundDownValueConverter = function () {
    function RoundDownValueConverter() {
      _classCallCheck(this, RoundDownValueConverter);
    }

    RoundDownValueConverter.prototype.toView = function toView(number, decimals) {
      decimals = decimals || 0;
      return Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
    };

    return RoundDownValueConverter;
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
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"format/format-cust\"></require>\n  <require from=\"format/format-date\"></require>\n  <require from=\"format/format-currency\"></require>\n  <require from=\"format/format-number\"></require>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h1>${title}</h1>\n      </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n      <div class=\"col-xs-4\">\n        <h2>${throttle_title}:${myDataDelay}</h2>\n        <input id=\"throttleInp\" type=\"text\" value.bind=\"throttle_inp & throttle:myDataDelay\" />\n        <br>\n        <span>update after ${myDataDelay | convertTicks} seconds: ${throttle_inp}</span>\n      </div>\n      <div class=\"col-xs-4\">\n        <h2>${debounce_title}:${myDataDelay2}</h2>\n        <input id=\"debounceInp\" type=\"text\" value.bind=\"debounce_inp & debounce:myDataDelay2\" />\n        <br>\n        <span>update after ${myDataDelay2 | convertTicks} seconds: ${debounce_inp}</span>\n      </div>\n      <div class=\"col-xs-4\">\n        <h2>Binds</h2>\n        <input id=\"debounceInpTwoTime\" type=\"text\" value.bind=\"debounce_inp\" /> (normal)\n        <br>\n        <input id=\"debounceInpOneTime\" type=\"text\" value.bind=\"debounce_inp & oneTime\" /> (& oneTime)\n      </div>\n    </div>\n\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-xs-4\">\n        <h3>currencyFormat</h3>\n        <table class=\"table\">\n          <tr>\n            <td><label>raw</label></td><td>${myCurrencyValue}</td>\n          </tr>\n          <tr>\n            <td><label>default</label></td><td>${myCurrencyValue | currencyFormat}</td>\n          </tr>\n          <tr>\n            <td><label>'0'</label></td><td>${myCurrencyValue | currencyFormat:'0'}</td>\n          </tr>\n          <tr>\n            <td><label>'0,3'</label></td><td>${myCurrencyValue | currencyFormat:'0,3'}</td>\n          </tr>\n        </table>\n\n      </div>\n      <div class=\"col-xs-4\">\n        <h3>numberFormat</h3>\n        <table class=\"table\">\n          <tr>\n            <td><label>raw</label></td><td>${myCurrencyValue}</td>\n          </tr>\n          <tr>\n            <td><label>default</label></td><td>${myCurrencyValue | numberFormat}</td>\n          </tr>\n          <tr>\n            <td><label>'0'</label></td><td>${myCurrencyValue | numberFormat:'0'}</td>\n          </tr>\n          <tr>\n            <td><label>roundDown</label></td><td>${myCurrencyValue | roundDown}</td>\n          </tr>\n          <tr>\n            <td><label>roundDown:2</label></td><td>${myCurrencyValue | roundDown:2}</td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"col-xs-4\">\n        <h3>dateFormat</h3>\n        <table class=\"table\">\n          <tr>\n            <td><label>raw</label></td>\n            <td>${currentDate}</td>\n          </tr>\n          <tr>\n            <td><label>default</label></td>\n            <td>${currentDate | dateFormat}</td>\n          </tr>\n          <tr>\n            <td><label>'MMMM'</label></td>\n            <td>${currentDate | dateFormat:'MMMM'}</td>\n          </tr>\n          <tr>\n            <td><label>'Mo'</label></td>\n            <td>${currentDate | dateFormat:'Mo'}</td>\n          </tr>\n          <tr>\n            <td><label>'YYYY'</label></td>\n            <td>${currentDate | dateFormat:'YYYY'}</td>\n          </tr>\n        </table>\n      </div>\n    </div>\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h3>string formatting</h3>\n        <u>raw:</u>\n        <br>${message}\n        <br>\n        <br>\n        <u>pre:</u>\n        <br><pre>${message}</pre>\n        <br>\n        <br>\n        <u>innerHTML.bind:</u>\n        <br><span innerHTML.bind=\"message\"></span>\n        <br>\n        <br>\n        <u>preserve-breaks.bind:</u>\n        <br><span preserve-breaks.bind=\"message\"></span>\n      </div>\n    </div>\n\n  </div>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map