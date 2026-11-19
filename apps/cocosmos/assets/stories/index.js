System.register("chunks:///stories.js", ['./rollupPluginModLoBabelHelpers-7ebc65e7.js', 'cc', './env-0392683e.js', './relative-camera-3771b670.js'], function () {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Layout, Prefab, Color, Label, instantiate, Widget, Component, Node, Animation, JsonAsset, tip$1, findComp, core, findNode, TipLine, CosmosProxy, RelativeCamera, UI, cosmos, constStars, timer, toThousands, SceneGraph, KM_OF_LY;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module._;
      _inheritsLoose = module.a;
      _initializerDefineProperty = module.b;
      _assertThisInitialized = module.c;
      _createClass = module.h;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Layout = module.Layout;
      Prefab = module.Prefab;
      Color = module.Color;
      Label = module.Label;
      instantiate = module.instantiate;
      Widget = module.Widget;
      Component = module.Component;
      Node = module.Node;
      Animation = module.Animation;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      tip$1 = module.t;
      findComp = module.b;
      core = module.c;
      findNode = module.a;
    }, function (module) {
      TipLine = module.ai;
      CosmosProxy = module.b;
      RelativeCamera = module.I;
      UI = module.U;
      cosmos = module.c;
      constStars = module.l;
      timer = module.k;
      toThousands = module.t;
      SceneGraph = module.S;
      KM_OF_LY = module.K;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "4251f2RMrFFdZLBZ4MPhQLr", "poetry-line", undefined);
      var tip = tip$1;
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        disallowMultiple = _decorator.disallowMultiple,
        requireComponent = _decorator.requireComponent;
      var PoetryLine = (_dec = ccclass('cocosmos.PoetryLine'), _dec2 = requireComponent(Layout), _dec3 = disallowMultiple(true), _dec4 = property(Prefab), _dec5 = tip("出现间隔", [0, 2, 0.01]), _dec6 = tip("出现速度", [0, 10, 0.01]), _dec7 = tip("放大倍数"), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PoetryLine, _Component);
        function PoetryLine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "charTemplate", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "interval", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "appearance", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "magnify", _descriptor4, _assertThisInitialized(_this));
          _this._delta = 0;
          _this._fading = null;
          _this._content = '';
          _this._pool = [];
          return _this;
        }
        var _proto = PoetryLine.prototype;
        _proto.onLoad = function onLoad() {
          this.clear();
        };
        _proto.fade = function fade(duration) {
          if (duration === void 0) {
            duration = 1;
          }
          this.unscheduleAllCallbacks();
          this._resetAll(1, 1);
          this._fading = 1;
          this._delta = -1 / duration;
        };
        _proto.show = function show(duration) {
          if (duration === void 0) {
            duration = 1;
          }
          this.unscheduleAllCallbacks();
          this._resetAll(0, 1);
          this._fading = 0;
          this._delta = 1 / duration;
        };
        _proto.clear = function clear() {
          var _this2 = this;
          this._content = '';
          this._fading = null;
          this.unscheduleAllCallbacks();
          this.node.getComponentsInChildren(Label).forEach(function (lbl) {
            return _this2._free(lbl);
          });
        };
        _proto.update = function update(dt) {
          var _this3 = this;
          if (isNum(this._fading)) {
            if (this._fading > 1 || this._fading < 0) {
              this._fading = null;
              return;
            }
            this._fading += this._delta * dt;
            this._resetAll(this._fading);
          } else {
            var _ratio = 1 - dt * this.appearance,
              sub = Math.abs(this.magnify - 1) + Number.EPSILON;
            if (this.node.children.length > 1) {
              var children = this.node.children.copy();
              children.forEach(function (child) {
                var lbl = child.getComponent(Label);
                var now = lbl.node.scale.x;
                if (now > _this3.magnify) return;
                var des = lbl.node.scale.x * _ratio;
                if (des > 1) {
                  _this3._reset(lbl, (_this3.magnify - des) / sub, des);
                }
              });
            }
          }
        };
        _proto._claim = function _claim(name) {
          var _this$_pool$pop;
          var created = (_this$_pool$pop = this._pool.pop()) != null ? _this$_pool$pop : instantiate(this.charTemplate).getComponent(Label);
          created.node.name = name;
          return this._reset(created, 0, this.magnify + 0.01);
        };
        _proto._resetAll = function _resetAll(a, s) {
          var _this4 = this;
          this.node.getComponentsInChildren(Label).forEach(function (lbl) {
            return _this4._reset(lbl, a, s);
          });
          return this;
        };
        _proto._reset = function _reset(lbl, a, s) {
          color.set(lbl.color);
          if (isNum(s)) lbl.node.setScale(s, s);
          color.a = 255 * a * a;
          lbl.color = color;
          return lbl;
        };
        _proto._free = function _free(_char) {
          _char.node.removeFromParent();
          this._pool.push(_char);
        };
        _createClass(PoetryLine, [{
          key: "content",
          get: function get() {
            return this._content;
          },
          set: function set(arg) {
            var _this5 = this,
              _this$getComponent;
            if (isEmpty(arg) || !isStr(arg) || !this.charTemplate) return;
            this.clear();
            this._content = arg;
            var _loop = function _loop() {
              var str = _this5._content.charAt(i);
              var _char2 = _this5._claim(str);
              _char2.string = str;
              _char2.node.parent = _this5.node;
              _this5.scheduleOnce(function () {
                return _char2.node.setScale(_this5.magnify, _this5.magnify);
              }, i * _this5.interval);
            };
            for (var i = 0; i < this._content.length; i++) {
              _loop();
            }
            this.getComponent(Layout).updateLayout();
            (_this$getComponent = this.getComponent(Widget)) == null || _this$getComponent.updateAlignment();
          }
        }]);
        return PoetryLine;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "charTemplate", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "appearance", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "magnify", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class2)) || _class) || _class) || _class);
      var color = new Color();
      cclegacy._RF.pop();
      var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6$1, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5;
      cclegacy._RF.push({}, "56bdbLBhr5L16J0NHt7NeLR", "patroller", undefined);
      var ccclass$1 = _decorator.ccclass,
        property$1 = _decorator.property;
      var AstroPatroller = (_dec$1 = ccclass$1('cocosmos.AstroPatroller'), _dec2$1 = property$1(Label), _dec3$1 = property$1(TipLine), _dec4$1 = property$1(Node), _dec5$1 = property$1(Animation), _dec6$1 = property$1(JsonAsset), _dec$1(_class$1 = (_class2$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AstroPatroller, _Component);
        function AstroPatroller() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "velocity", _descriptor$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tips", _descriptor2$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "poetries", _descriptor3$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animCover", _descriptor4$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "json", _descriptor5, _assertThisInitialized(_this));
          _this._patrolling = false;
          _this._rotateSpeed = [12, 0];
          _this._escapeSpeed = 0.1;
          _this._rc = void 0;
          _this._animPoetries = void 0;
          _this._lines = void 0;
          _this._tasks = [];
          _this._vPass0 = void 0;
          _this._handleColorStart = void 0;
          _this._handleColorEnd = void 0;
          return _this;
        }
        var _proto = AstroPatroller.prototype;
        _proto.onLoad = function onLoad() {
          this._init()._reloadTasks();
        };
        _proto._init = function _init() {
          this._rc = findComp(RelativeCamera, COSMOS, MAIN);
          this._animPoetries = this.poetries.getComponent(Animation);
          this._lines = this.poetries.getComponentsInChildren(PoetryLine);
          this._lines.forEach(function (line) {
            return line.interval = INTERVAL;
          });
          var mat = this.velocity.customMaterial;
          this._vPass0 = mat.passes[0];
          this._handleColorStart = this._vPass0.getHandle('startColor');
          this._handleColorEnd = this._vPass0.getHandle('endColor');
          return this;
        };
        _proto._reloadTasks = function _reloadTasks() {
          this._tasks.length = 0;
          // const configs = core.res.getConfigItem<PatrolTask[]>(Res.Configs.ASTRO_PATROL_TASKS, 'tasks');
          var configs = this.json.json;
          this._tasks = configs.copy();
        };
        _proto.update = function update(dt) {
          if (this._patrolling) {
            core.notify(UI.Zoom, -this._escapeSpeed * dt);
            this.velocity.string = this._cameraAbsoluteVelocity;
            var _pow = cosmos.pow10;
            if (_pow < MID) {
              var ratio = (_pow - FLOOR) / SPAN01;
              Color.lerp(cStart, START0, START1, ratio);
              Color.lerp(cEnd, END0, END1, ratio);
            } else {
              var _ratio = (CEIL - _pow) / SPAN12;
              Color.lerp(cStart, START1, START2, _ratio);
              Color.lerp(cEnd, END1, END2, _ratio);
            }
          }
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          var _this2 = this;
          if (this._patrolling) {
            var _this$_tasks;
            var _pow2 = cosmos.pow10,
              delta = cosmos.delta;
            var last = _pow2 - delta;
            var _ref = [Math.min(last), Math.max(_pow2)],
              min = _ref[0],
              max = _ref[1];
            var chosen = [];
            this._tasks.forEach(function (task) {
              if (task.type === 'above-switch') {
                if (_pow2 > task.pow) chosen.push(task);
              } else if (min <= task.pow && task.pow <= max) {
                chosen.push(task);
              }
            });
            chosen.forEach(function (task) {
              return _this2._launch(task);
            });
            (_this$_tasks = this._tasks).remove.apply(_this$_tasks, chosen);
            this._vPass0.setUniform(this._handleColorStart, cStart);
            this._vPass0.setUniform(this._handleColorEnd, cEnd);
          }
        };
        _proto.startPatrol = function startPatrol() {
          var _this3 = this;
          this.unscheduleAllCallbacks();
          findNode('UI Layer', 'Canvas Front').active = false;
          this.animCover.play('start');
          this.scheduleOnce(function () {
            var _this3$_rc;
            _this3._patrolling = true;
            _this3.tips.string = '脱离预制：第一宇宙速度。';
            (_this3$_rc = _this3._rc).startAutoRotating.apply(_this3$_rc, _this3._rotateSpeed);
          }, 12);
        }

        // 计算当前相对摄像机在绝对世界中的移动速度（这可能是个巨大的天文数字，返回其字符串描述）
        ;

        _proto._launch = function _launch(task) {
          var _this4 = this,
            _this$_rc;
          switch (task.type) {
            case 'poetry':
              var lines = task.lines;
              var delay = 0;
              var _loop = function _loop(i) {
                var line = lines[i];
                _this4.scheduleOnce(function () {
                  _this4._lines[i].content = line;
                  _this4.scheduleOnce(function () {
                    return _this4._lines[i].fade(2.5);
                  }, 6.5);
                }, delay);
                delay = line.length * INTERVAL;
              };
              for (var i = 0; i < lines.length; i++) {
                _loop(i);
              }
              this._animPoetries.play();
              break;
            case 'tips':
              var chars = task.chars;
              this.tips.string = chars;
              break;
            case 'timer':
              var scale = task.scale;
              timer.accelerate(scale);
              this.tips.string = '时间流逝：1秒 = ' + timer.desc + '  ';
              break;
            case 'over':
              this.scheduleOnce(function () {
                return _this4.animCover.play('over');
              }, 10);
              break;
            case 'cam-esp':
              break;
            case 'cam-rot':
              var powPs = task.powPs;
              (_this$_rc = this._rc).startAutoRotating.apply(_this$_rc, powPs);
              break;
            case 'above-switch':
              {
                switch (task.detail) {
                  // case 'names': core.notify(UI.Stars.NAMES, true); break;
                  case 'lines':
                    core.notify(UI.Stellar.LINES, true);
                    constStars.lineFadeIn();
                    break;
                  case 'cultures':
                    core.notify(UI.Stellar.CULTURES, true);
                    constStars.cultFadeIn();
                    break;
                  default:
                    console.warn('unknown above detail', task);
                    break;
                }
              }
              break;
            default:
              console.warn('unknown type task:', task);
              break;
          }
        };
        _createClass(AstroPatroller, [{
          key: "_cameraAbsoluteVelocity",
          get: function get() {
            var pow10 = cosmos.pow10,
              delta = cosmos.delta,
              angularVelocity = this._rc.angularVelocity;
            var tangent = Math.parseRadian(angularVelocity); // 切向速度
            var radial = Math.abs(delta * 10); // 径向速度
            var arc = Math.sqrt(Math.sumSqr(tangent, radial)); // 球面微分
            var dist = Math.pow(10, pow10) * arc * KM_OF_LY; // 光年转公里
            var speed = dist.toExponential();
            var _speed$split = speed.split('e'),
              n = _speed$split[0],
              e = _speed$split[1];
            var nstr = n.replace('.', ''),
              len = nstr.length,
              ne = +e;
            var res;
            if (ne < 3) return '0km/s';
            if (len > ne) {
              res = nstr.substring(0, ne + 1);
            } else {
              var tail = (Math.random() + '').replace('.', '');
              var lack = ne + 1 - len;
              res = nstr + tail.substring(0, lack);
            }
            return toThousands(res) + ' km/s';
          }
        }]);
        return AstroPatroller;
      }(Component), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "velocity", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "tips", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "poetries", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$1.prototype, "animCover", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$1.prototype, "json", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$1)) || _class$1);
      var COSMOS = SceneGraph.COSMOS,
        MAIN = SceneGraph.Cameras.MAIN;
      var _CosmosProxy$COSMOS_P = CosmosProxy.COSMOS_POWS,
        FLOOR = _CosmosProxy$COSMOS_P[0],
        CEIL = _CosmosProxy$COSMOS_P[1];
      var MID = 6;
      var INTERVAL = 0.15;
      var SPAN01 = MID - FLOOR;
      var SPAN12 = CEIL - MID;
      var START0 = Color.WHITE.clone();
      var START1 = Color.RED.clone();
      var START2 = Color.MAGENTA.clone();
      var END0 = Color.GRAY.clone();
      var END1 = Color.WHITE.clone();
      var END2 = new Color(255, 127, 127, 255);
      var cStart = new Color();
      var cEnd = new Color();
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/stories', 'chunks:///stories.js'); 
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