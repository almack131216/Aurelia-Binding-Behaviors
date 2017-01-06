define('app',['exports', './main'], function (exports, _main) {
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

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.title = 'Aurelia - Binding Behavior';

    this.currentDate = new Date();
    this.myCurrency = '£';
    this.myCurrencyValue = 999.99;

    this.throttle_title = 'Throttle';
    this.myData = 'Enter some text!';
    this.myDataDelay = 2000;
  };
});
define('converters',['exports', 'moment', 'numeral', 'aurelia-framework', './main'], function (exports, _moment, _numeral, _aureliaFramework, _main) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.CurrencyFormatValueConverter = exports.NumberFormatValueConverter = exports.DateFormatValueConverter = undefined;

    var _moment2 = _interopRequireDefault(_moment);

    var _numeral2 = _interopRequireDefault(_numeral);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _dec, _class;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var DateFormatValueConverter = exports.DateFormatValueConverter = function () {
        function DateFormatValueConverter() {
            _classCallCheck(this, DateFormatValueConverter);
        }

        DateFormatValueConverter.prototype.toView = function toView(value, format) {
            return (0, _moment2.default)(value).format(format ? format : 'MMMM Mo YYYY');
        };

        return DateFormatValueConverter;
    }();

    var NumberFormatValueConverter = exports.NumberFormatValueConverter = function () {
        function NumberFormatValueConverter() {
            _classCallCheck(this, NumberFormatValueConverter);
        }

        NumberFormatValueConverter.prototype.toView = function toView(value, format) {
            return (0, _numeral2.default)(value).format(format ? format : '');
        };

        return NumberFormatValueConverter;
    }();

    var CurrencyFormatValueConverter = exports.CurrencyFormatValueConverter = (_dec = (0, _aureliaFramework.inject)(_main.Configuration), _dec(_class = function () {
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
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Configuration = undefined;
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

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

  var Configuration = exports.Configuration = function Configuration() {
    _classCallCheck(this, Configuration);

    this.gCurrency = '£';
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./converters\"></require>\n\n  <h1>${title}</h1>\n\n  <h2>${throttle_title}</h2>\n  <input id=\"name\" type=\"text\" value.bind=\"myData & throttle:myDataDelay\" />\n  <br>\n  <span>update after ${myDataDelay | numberFormat} seconds: ${myData}</span>\n\n  <hr>\n  <h3>currencyFormat</h3>\n  <span>${myCurrencyValue | currencyFormat:'(0,0.00)'}</span>\n  <hr>\n  <h3>dateFormat</h3>\n  <span>${currentDate | dateFormat}</span>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map