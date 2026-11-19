System.register("chunks:///main.js", ['./env-0392683e.js', 'cc', './rollupPluginModLoBabelHelpers-7ebc65e7.js', './index.mjs_cjs=&original=-19763392.js'], function () {
  var USE_OVERSEA, isCN, core, Mediator, cclegacy, _decorator, Graphics, CCInteger, Node, Color, Component, Label, SpriteFrame, assetManager, Sprite, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime;
  return {
    setters: [function (module) {
      USE_OVERSEA = module.U;
      isCN = module.i;
      core = module.c;
      Mediator = module.M;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Graphics = module.Graphics;
      CCInteger = module.CCInteger;
      Node = module.Node;
      Color = module.Color;
      Component = module.Component;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      assetManager = module.assetManager;
      Sprite = module.Sprite;
    }, function (module) {
      _applyDecoratedDescriptor = module._;
      _inheritsLoose = module.a;
      _initializerDefineProperty = module.b;
      _assertThisInitialized = module.c;
      _asyncToGenerator = module.d;
      _regeneratorRuntime = module.e;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "e48c4ky6kxGuq+fZzr1/6ke", "property", undefined);
      cclegacy._RF.pop();
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "ee73680oG1NWr4TUedPccY6", "loading-logo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LoadingLogo = (_dec = ccclass('cocosmos.loading-logo'), _dec2 = property(Graphics), _dec3 = property(CCInteger), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadingLogo, _Component);
        function LoadingLogo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "painter", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineWidth", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "p1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "p2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "p3", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sun", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LoadingLogo.prototype;
        _proto.start = function start() {
          this.painter.lineWidth = this.lineWidth;
          this.p1.active = this.p2.active = this.p3.active = this.sun.active = false;
        };
        _proto.update = function update(dt) {
          this.sun.angle += dt * 30;
        };
        _proto.setProgress = function setProgress(pct) {
          var _this2 = this;
          this.p1.active = this.p2.active = this.p3.active = this.sun.active = true;
          var add = Math.max(pct * Math.PI * 2 - 0.2, 0);
          this.painter.clear();
          [this.p1, this.p2, this.p3].forEach(function (p, i) {
            var _params$i = params[i],
              color = _params$i[0],
              radius = _params$i[1],
              start = _params$i[2];
            var deg = start + add - 0.07 * (5 - i);
            if (deg > 0) {
              _this2.painter.strokeColor = color;
              _this2.painter.arc(0, 0, radius, start, deg, true);
              _this2.painter.stroke();
            }
            p.angle = Math.parseDegree(start + add);
          });
        };
        return LoadingLogo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "painter", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lineWidth", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "p1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "p2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "p3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sun", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class);
      var p1 = [new Color(222, 121, 255, 255), 100, Math.PI * 0.25];
      var p2 = [new Color(255, 121, 175, 255), 150, Math.PI * 0.75];
      var p3 = [new Color(121, 212, 255, 255), 200, Math.PI * 0.5];
      var params = [p1, p2, p3];
      cclegacy._RF.pop();
      var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8, _dec9, _dec10, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "d6caclyhetOGrf3cE0juDeB", "preload-mediator", undefined);
      var ccclass$1 = _decorator.ccclass,
        property$1 = _decorator.property;
      var PreloadMediator = (_dec$1 = ccclass$1('cocosmos.preload-mediator'), _dec2$1 = property$1(Node), _dec3$1 = property$1(Label), _dec4$1 = property$1(LoadingLogo), _dec5$1 = property$1(Node), _dec6$1 = property$1(Node), _dec7$1 = property$1(Node), _dec8 = property$1(Node), _dec9 = property$1(SpriteFrame), _dec10 = property$1(SpriteFrame), _dec$1(_class$1 = (_class2$1 = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(PreloadMediator, _Mediator);
        function PreloadMediator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnEnter", _descriptor$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipLabel", _descriptor2$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "logo", _descriptor3$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ipc", _descriptor4$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aws", _descriptor5$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cocos", _descriptor6$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "updates", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startCN", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startEN", _descriptor9, _assertThisInitialized(_this));
          _this._curr = 0;
          return _this;
        }
        var _proto = PreloadMediator.prototype;
        _proto.onLoad = function onLoad() {
          this.btnEnter.active = false;
          this.ipc.active = this.updates.active = !USE_OVERSEA;
          this.ipc.active = false; // temp add
          this.aws.active = this.cocos.active = USE_OVERSEA;
        };
        _proto.start = /*#__PURE__*/function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var cn;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  cn = isCN();
                  this.btnEnter.getComponent(Sprite).spriteFrame = cn ? this.startCN : this.startEN;
                  this.tipLabel.string = cn ? "\u5B87\u5B99\u52A0\u8F7D\u4E2D0%\u2026\u2026" : 'Cosmic Loading 0%...';
                  this._preloadScene();
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }();
        _proto._preloadScene = function _preloadScene() {
          var _this2 = this;
          var cn = isCN();
          assetManager.loadBundle(MAIN_BUNDLE, function (err, bundle) {
            if (err) console.error("[scene load failed]", MAIN_BUNDLE);else {
              bundle.loadScene(MAIN_SCENE, function (finished, total, item) {
                var progress = finished / total;
                if (progress >= _this2._curr) {
                  var p = (progress * 100).toFixed(1);
                  _this2.tipLabel.string = cn ? "\u5B87\u5B99\u52A0\u8F7D\u4E2D" + p + "%\u2026\u2026" : "Cosmic Loading " + p + "%...";
                  _this2.logo.setProgress(progress);
                  _this2._curr = progress;
                }
              }, function (err) {
                if (err) console.error("[scene load failed]", MAIN_SCENE);else {
                  _this2.btnEnter.active = true;
                  _this2.tipLabel.node.active = false;
                }
              });
            }
          });
        };
        _proto.clickEnter = function clickEnter() {
          this.btnEnter.active = false;
          this.tipLabel.node.active = true;
          this.tipLabel.string = isCN() ? "正在进入宇宙……" : 'Entering the Cosmos...';
          this.scheduleOnce(function () {
            return core.scene["goto"](MAIN_SCENE);
          });
        };
        return PreloadMediator;
      }(Mediator), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "btnEnter", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "tipLabel", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "logo", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$1.prototype, "ipc", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$1.prototype, "aws", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$1.prototype, "cocos", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$1.prototype, "updates", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$1.prototype, "startCN", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2$1.prototype, "startEN", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$1)) || _class$1);
      var MAIN_BUNDLE = 'cosmos';
      var MAIN_SCENE = 'cosmos';
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});