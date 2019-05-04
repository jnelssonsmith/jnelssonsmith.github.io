"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _rss = _interopRequireDefault(require("rss"));

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _mkdirp = _interopRequireDefault(require("mkdirp"));

var _internals = require("./internals");

var publicPath = "./public"; // A default function to transform query data into feed entries.

var serialize = function serialize(_ref) {
  var _ref$query = _ref.query,
      site = _ref$query.site,
      allMarkdownRemark = _ref$query.allMarkdownRemark;
  return allMarkdownRemark.edges.map(function (edge) {
    return (0, _extends2.default)({}, edge.node.frontmatter, {
      description: edge.node.excerpt,
      url: site.siteMetadata.siteUrl + edge.node.fields.slug,
      guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
      custom_elements: [{
        "content:encoded": edge.node.html
      }]
    });
  });
};

exports.onPostBuild =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(_ref2, pluginOptions) {
    var graphql, options, _loop, _iterator, _isArray, _i, _ref4, _ret;

    return _regenerator.default.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            graphql = _ref2.graphql;
            delete pluginOptions.plugins;
            /*
             * Run the site settings query to gather context, then
             * then run the corresponding feed for each query.
             */

            options = (0, _extends2.default)({}, _internals.defaultOptions, pluginOptions);
            _context2.next = 5;
            return (0, _internals.runQuery)(graphql, options.query);

          case 5:
            options.query = _context2.sent;
            _loop =
            /*#__PURE__*/
            _regenerator.default.mark(function _loop() {
              var f, _options$f, setup, locals, feed, serializer, items, outputPath, outputDir;

              return _regenerator.default.wrap(function _loop$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!_isArray) {
                        _context.next = 6;
                        break;
                      }

                      if (!(_i >= _iterator.length)) {
                        _context.next = 3;
                        break;
                      }

                      return _context.abrupt("return", "break");

                    case 3:
                      _ref4 = _iterator[_i++];
                      _context.next = 10;
                      break;

                    case 6:
                      _i = _iterator.next();

                      if (!_i.done) {
                        _context.next = 9;
                        break;
                      }

                      return _context.abrupt("return", "break");

                    case 9:
                      _ref4 = _i.value;

                    case 10:
                      f = _ref4;

                      if (!f.query) {
                        _context.next = 16;
                        break;
                      }

                      _context.next = 14;
                      return (0, _internals.runQuery)(graphql, f.query);

                    case 14:
                      f.query = _context.sent;

                      if (options.query) {
                        f.query = (0, _lodash.default)(options.query, f.query);
                        delete options.query;
                      }

                    case 16:
                      _options$f = (0, _extends2.default)({}, options, f), setup = _options$f.setup, locals = (0, _objectWithoutPropertiesLoose2.default)(_options$f, ["setup"]);
                      feed = new _rss.default(setup(locals));
                      serializer = f.serialize && typeof f.serialize === "function" ? f.serialize : serialize;
                      items = serializer(locals);
                      items.forEach(function (i) {
                        return feed.item(i);
                      });
                      outputPath = _path.default.join(publicPath, f.output);
                      outputDir = _path.default.dirname(outputPath);

                      if (!_fs.default.existsSync(outputDir)) {
                        _mkdirp.default.sync(outputDir);
                      }

                      _context.next = 26;
                      return (0, _internals.writeFile)(outputPath, feed.xml());

                    case 26:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _loop, this);
            });
            _iterator = options.feeds, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();

          case 8:
            return _context2.delegateYield(_loop(), "t0", 9);

          case 9:
            _ret = _context2.t0;

            if (!(_ret === "break")) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("break", 14);

          case 12:
            _context2.next = 8;
            break;

          case 14:
            return _context2.abrupt("return", Promise.resolve());

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();