'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartPolar = function (_React$Component) {
  _inherits(ChartPolar, _React$Component);

  function ChartPolar(props) {
    _classCallCheck(this, ChartPolar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChartPolar).call(this, props));

    _this.state = { chr: "init" };
    return _this;
  }

  _createClass(ChartPolar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ChartPolar' },
        _react2.default.createElement('canvas', { id: 'canvas' })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var ChartData = {};

      ChartData.datasets = [];
      ChartData.datasets[0] = {};
      ChartData.datasets[0].data = [];
      ChartData.datasets[0].backgroundColor = [];
      ChartData.labels = [];

      ChartData.datasets[0].label = this.props.data.msg || "";

      var items = this.props.data.osY.length;
      for (var i = 0; i < items; i++) {
        var color = Math.round(i * (360 / items));
        ChartData.datasets[0].data[i] = this.props.data.osY[i];
        ChartData.datasets[0].backgroundColor[i] = "hsl(" + color + ",100%,50%)";
        ChartData.labels[i] = this.props.data.osX[i] || "";
      }
      var GlobalOptions = {};
      var nde = _reactDom2.default.findDOMNode(this);
      var ctx = nde.getElementsByTagName("canvas")[0].getContext('2d');
      this.state.chr = new Chart(ctx, { type: 'polarArea', data: ChartData, options: GlobalOptions });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      for (var i = 0; i < this.props.data.osY.length; i++) {
        this.state.chr.data.datasets[0].data[i] = this.props.data.osY[i];
      }
      this.state.chr.update();
    }
  }]);

  return ChartPolar;
}(_react2.default.Component);

module.exports = { ChartPolar: ChartPolar };
