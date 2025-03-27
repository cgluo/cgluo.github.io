System.register("chunks:///cosmos.js", ['./relative-camera-3771b670.js', './rollupPluginModLoBabelHelpers-7ebc65e7.js', 'cc', './env-0392683e.js', './index.mjs_cjs=&original=-19763392.js'], function () {
  var attenuate, ui, setLabelStyle, CelestialLabel, CosmosProxy, GizmosProxy, SceneGraph, LabelI18n, cosmos, UI, toThousands, KM_OF_LY, visit, VisitProxy, Res, solar, planetary, LBL_UI_NAMES, LBL_GRAY, View, CultureQuad, Task, TaskNames, StarLevel, timer, constStars, gizmos, updateSwitcherLayout, CelestialIcon, FIXED_ICONS, SolarSystem, TransformEnum, user, changeFrame, LogProxy, deepGalaxy, createNodeAt, LAYER_GIZMOS, calcTransformParams, PlanetarySystem, StellarGouldBelt, SpecificSystem, RelativeCamera, TRANS_INTER, TRANS_2_SUN, TRANS_2_PLN, TRANS_2_SAT, Blackhole, SkyboxCube, interstellar, smoothstep, LAYER_MAIN_3D, DEG_PERIGON, DeepSkyFixed, LAYER_BG_3D, setLayer, LAYER_UI_2D, LAYER_UI_BG, AxisRotation, Orbiter, I8, Coordinates, loadUnitAndColorI18n, UIProxy, MilkyWay, LOCAL_TO_SOLAR, MILKY_TO_SOLAR, M31_TO_SOLAR, M33_TO_SOLAR, VIRGO_TO_SOLAR, ConstStarsProxy, DeepGalaxiesProxy, _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _createClass, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, MeshRenderer, Color, Vec4, Component, Label, Node, Slider, BlockInputEvents, Sprite, Toggle, Vec3, Layout, Button, UITransform, ToggleContainer, Tween, tween, profiler, Widget, Vec2, Camera, gfx, UIOpacity, screen, geometry, PhysicsSystem, view, Animation, sys, ScrollView, Prefab, JsonAsset, instantiate, RenderTexture, Material, ParticleSystem, macro, resources, Texture2D, GeometryRenderer, Mat4, game, findCamera, findNode$1, Mediator, group$5, TweenSwitcher, core, findComp$4, ItemList, Notifications, tip$1, serialize$1, Controller, setBottom$1;
  return {
    setters: [function (module) {
      attenuate = module.a;
      ui = module.u;
      setLabelStyle = module.s;
      CelestialLabel = module.C;
      CosmosProxy = module.b;
      GizmosProxy = module.G;
      SceneGraph = module.S;
      LabelI18n = module.L;
      cosmos = module.c;
      UI = module.U;
      toThousands = module.t;
      KM_OF_LY = module.K;
      visit = module.v;
      VisitProxy = module.V;
      Res = module.R;
      solar = module.d;
      planetary = module.p;
      LBL_UI_NAMES = module.e;
      LBL_GRAY = module.f;
      View = module.g;
      CultureQuad = module.h;
      Task = module.T;
      TaskNames = module.i;
      StarLevel = module.j;
      timer = module.k;
      constStars = module.l;
      gizmos = module.m;
      updateSwitcherLayout = module.n;
      CelestialIcon = module.o;
      FIXED_ICONS = module.F;
      SolarSystem = module.q;
      TransformEnum = module.r;
      user = module.w;
      changeFrame = module.x;
      LogProxy = module.y;
      deepGalaxy = module.z;
      createNodeAt = module.A;
      LAYER_GIZMOS = module.B;
      calcTransformParams = module.D;
      PlanetarySystem = module.P;
      StellarGouldBelt = module.E;
      SpecificSystem = module.H;
      RelativeCamera = module.I;
      TRANS_INTER = module.J;
      TRANS_2_SUN = module.M;
      TRANS_2_PLN = module.N;
      TRANS_2_SAT = module.O;
      Blackhole = module.Q;
      SkyboxCube = module.W;
      interstellar = module.X;
      smoothstep = module.Y;
      LAYER_MAIN_3D = module.Z;
      DEG_PERIGON = module._;
      DeepSkyFixed = module.$;
      LAYER_BG_3D = module.a0;
      setLayer = module.a1;
      LAYER_UI_2D = module.a2;
      LAYER_UI_BG = module.a3;
      AxisRotation = module.a4;
      Orbiter = module.a5;
      I8 = module.a6;
      Coordinates = module.a7;
      loadUnitAndColorI18n = module.a8;
      UIProxy = module.a9;
      MilkyWay = module.aa;
      LOCAL_TO_SOLAR = module.ab;
      MILKY_TO_SOLAR = module.ac;
      M31_TO_SOLAR = module.ad;
      M33_TO_SOLAR = module.ae;
      VIRGO_TO_SOLAR = module.af;
      ConstStarsProxy = module.ag;
      DeepGalaxiesProxy = module.ah;
    }, function (module) {
      _inheritsLoose = module.a;
      _applyDecoratedDescriptor = module._;
      _initializerDefineProperty = module.b;
      _assertThisInitialized = module.c;
      _createClass = module.h;
      _createForOfIteratorHelperLoose = module.f;
      _asyncToGenerator = module.d;
      _regeneratorRuntime = module.e;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      MeshRenderer = module.MeshRenderer;
      Color = module.Color;
      Vec4 = module.Vec4;
      Component = module.Component;
      Label = module.Label;
      Node = module.Node;
      Slider = module.Slider;
      BlockInputEvents = module.BlockInputEvents;
      Sprite = module.Sprite;
      Toggle = module.Toggle;
      Vec3 = module.Vec3;
      Layout = module.Layout;
      Button = module.Button;
      UITransform = module.UITransform;
      ToggleContainer = module.ToggleContainer;
      Tween = module.Tween;
      tween = module.tween;
      profiler = module.profiler;
      Widget = module.Widget;
      Vec2 = module.Vec2;
      Camera = module.Camera;
      gfx = module.gfx;
      UIOpacity = module.UIOpacity;
      screen = module.screen;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      view = module.view;
      Animation = module.Animation;
      sys = module.sys;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      JsonAsset = module.JsonAsset;
      instantiate = module.instantiate;
      RenderTexture = module.RenderTexture;
      Material = module.Material;
      ParticleSystem = module.ParticleSystem;
      macro = module.macro;
      resources = module.resources;
      Texture2D = module.Texture2D;
      GeometryRenderer = module.GeometryRenderer;
      Mat4 = module.Mat4;
      game = module.game;
    }, function (module) {
      findCamera = module.f;
      findNode$1 = module.a;
      Mediator = module.M;
      group$5 = module.g;
      TweenSwitcher = module.T;
      core = module.c;
      findComp$4 = module.b;
      ItemList = module.I;
      Notifications = module.N;
      tip$1 = module.t;
      serialize$1 = module.s;
      Controller = module.C;
      setBottom$1 = module.d;
    }, null],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bb51306QqFC2p/BV9HW/3my", "cylinder-scope", undefined);
      var ccclass = _decorator.ccclass;
      var CylinderScope = (_dec = ccclass('cocosmos.CylinderScope'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CylinderScope, _Component);
        function CylinderScope() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mat = void 0;
          _this._mat_line = void 0;
          _this._handle_line = void 0;
          _this._title = void 0;
          _this._desc = void 0;
          _this._color = new Color();
          return _this;
        }
        var _proto = CylinderScope.prototype;
        _proto.onLoad = function onLoad() {
          this._init()._loadParams();
        };
        _proto.lateUpdate = function lateUpdate() {
          var _this$node$worldScale = this.node.worldScale,
            x = _this$node$worldScale.x,
            y = _this$node$worldScale.y,
            z = _this$node$worldScale.z;
          var scale = (x + y + z) / 3;
          var att = attenuate(scale, ScopeAtt);
          this._lineStrength(att);
          if (ui.showNotes && att > 0 && scale < 1.2) {
            this._title.target = this._desc.target = this.node;
            this._title.alpha = this._desc.alpha = att;
          } else {
            this._title.target = this._desc.target = null;
          }
        };
        _proto.onDisable = function onDisable() {
          this._title.target = this._desc.target = null;
        };
        _proto._init = function _init() {
          this._mat = this.getComponent(MeshRenderer).material;
          this._mat_line = this.node.getChildByName('lines').getComponent(MeshRenderer).material;
          this._handle_line = this._mat_line.passes[0].getHandle('mainColor');
          this._title = setLabelStyle(CelestialLabel.claim('ruler', 'scope.title'), 'ruler', 'title');
          this._desc = setLabelStyle(CelestialLabel.claim('ruler', 'scope.desc'), 'ruler');
          var cam = findCamera(COSMOS, MAIN);
          [this._title, this._desc].forEach(function (label) {
            return label.camera = cam;
          });
          this._title.setOffset(0, this.node.scale.y * 0.65, 0);
          this._desc.setOffset(0, this.node.scale.y * 0.55, 0);
          return this;
        };
        _proto._loadParams = function _loadParams() {
          var _Scalar$, _ScopeColor$name;
          var name = this.node.parent.name;
          var Scalar = CosmosProxy.Scopes[name];
          var _ref = (_Scalar$ = Scalar[3]) != null ? _Scalar$ : [1, 1, 1],
            sx = _ref[0],
            sy = _ref[1],
            sz = _ref[2];
          this.node.setScale(sx, sy, sz);
          if (Scalar != null && Scalar[4]) {
            var _Scalar$2 = Scalar[4],
              x = _Scalar$2.x,
              y = _Scalar$2.y,
              z = _Scalar$2.z;
            this.node.setPosition(x, y, z);
          }
          this.node.name = 'Scope of ' + name;
          this._color.set((_ScopeColor$name = ScopeColor[name]) != null ? _ScopeColor$name : Color.WHITE);
          this._mat.setProperty('mainColor', this._setAlpha(SCOPE_ALPHA));
          this._mat.setProperty('scaleAtte', v4a.set.apply(v4a, ScopeAtt));
          this._lineStrength(0);
          // const [TITLE, DESC] = ScopeTips[name];
          // this._title.string = TITLE;
          // this._desc.string = DESC;
          this._title.key = "scopes@" + name + "-title";
          this._desc.key = "scopes@" + name + "-desc";
        };
        _proto._lineStrength = function _lineStrength(alpha) {
          this._mat_line.passes[0].setUniform(this._handle_line, this._setAlpha(alpha));
        };
        _proto._setAlpha = function _setAlpha(ratio) {
          color.set(this._color);
          color.r *= ratio;
          color.g *= ratio;
          color.b *= ratio;
          return color;
        };
        return CylinderScope;
      }(Component)) || _class);
      var COSMOS = SceneGraph.COSMOS,
        MAIN = SceneGraph.Cameras.MAIN;
      var color = new Color();
      var v4a = new Vec4();
      var SCOPE_ALPHA = 0.3;
      var ScopeColor = GizmosProxy.ScopeColor,
        ScopeAtt = GizmosProxy.ScopeAtt;
      cclegacy._RF.pop();
      var _dec$1, _dec2, _dec3, _class$1, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "18388yY1EJEmItjmwXkbDe3", "foot-bar", undefined);
      var ccclass$1 = _decorator.ccclass,
        property = _decorator.property;
      var FootBar = (_dec$1 = ccclass$1('cocosmos.foot-bar'), _dec2 = property(Label), _dec3 = property(LabelI18n), _dec$1(_class$1 = (_class2 = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(FootBar, _Mediator);
        function FootBar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lensVel", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "escVel", _descriptor2, _assertThisInitialized(_this));
          _this._rc = void 0;
          return _this;
        }
        var _proto = FootBar.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
          this._listen();
        };
        _proto.start = function start() {
          this._updateStates();
        };
        _proto.update = function update(dt) {
          var pow10 = cosmos.pow10;
          if (this.lensVel.node.activeInHierarchy) {
            this.lensVel.string = this._cameraAbsoluteVelocity;
          }
          if (this.escVel.node.activeInHierarchy) {
            var idx = CosmicVelocityValves.findIndex(function (value) {
              return pow10 < value;
            });
            this.escVel.string = "bars@cv-" + idx; // TODO 优化为针对每个center设置逃逸速度
            this.escVel.getComponent(Label).color = CosmicVelocityColors[idx];
          }
        };
        _proto.onLensPanelParams = function onLensPanelParams() {
          this._updateStates();
        };
        _proto._init = function _init() {
          this._rc = findNode$1(MAIN$1, COSMOS$1).getComponent('cocosmos.relative-camera');
        };
        _proto._listen = function _listen() {
          this.on(UI.LENS_PARAMS, this.onLensPanelParams);
        };
        _proto._updateStates = function _updateStates() {
          this.lensVel.node.parent.active = ui.showLensVel;
          this.escVel.node.parent.active = ui.showEscVel;
        };
        _createClass(FootBar, [{
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
        return FootBar;
      }(Mediator), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lensVel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "escVel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class$1);
      var COSMOS$1 = SceneGraph.COSMOS,
        MAIN$1 = SceneGraph.Cameras.MAIN;
      var CosmicVelocityValves = [-99, -8, -6.5, -4, -1, 4, 7, 99];
      var CosmicVelocityColors = [Color.GRAY, new Color(197, 197, 197, 255), new Color(132, 233, 186, 255), new Color(0, 255, 32, 255), new Color(255, 162, 0, 255), new Color(255, 102, 102, 255), new Color(255, 105, 236, 255), new Color(136, 161, 255, 255)];
      cclegacy._RF.pop();
      var _dec$2, _dec2$1, _dec3$1, _dec4, _dec5, _dec6, _dec7, _class$2, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "aa7ecVAk9tB/6qro99UtAc6", "left-menu", undefined);
      var group = group$5,
        findComp = findComp$4;
      var ccclass$2 = _decorator.ccclass;
      var LeftMenu = (_dec$2 = ccclass$2('cocosmos.left-menu'), _dec2$1 = group('Scale', '', Node), _dec3$1 = group('Scale', '', Slider), _dec4 = group('Scale', '', Node), _dec5 = group('Scale', '', BlockInputEvents), _dec6 = group('Intro', '', Node), _dec7 = group('Intro', '', LabelI18n), _dec$2(_class$2 = (_class2$1 = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(LeftMenu, _Mediator);
        function LeftMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scaleGroup", _descriptor$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scalar", _descriptor2$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "visibleList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blocker", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "introGroup", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "introName", _descriptor6, _assertThisInitialized(_this));
          _this._scaleBar = null;
          _this._twsScale = void 0;
          _this._twsIntro = void 0;
          _this._should_intro = false;
          _this._map = new Map();
          _this._reducing = false;
          _this._lang = null;
          _this._prefix = void 0;
          _this._actual = void 0;
          return _this;
        }
        var _proto = LeftMenu.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
          this._listen();
        };
        _proto.start = function start() {
          this.scaleGroup.active = this.introGroup.active = false;
          this._initToggleStates();
        };
        _proto.update = function update(dt) {
          var _visit$center;
          if (this._reducing) {
            this.scalar.progress -= dt / REDUCING_SEC;
            if (this.scalar.progress <= 0) {
              this.scalar.progress = 0;
              this._reducing = false;
            }
            this.notify(Solar.RATIO, this.scalar.progress);
          }
          if (!visit.transforming) {
            this.scaleGroup.active = cosmos.underSolar && visit.inSolar;
          }
          if (this._should_intro && isNum((_visit$center = visit.center) == null ? void 0 : _visit$center.suggest)) {
            var _visit$center2;
            this.introGroup.active = ((_visit$center2 = visit.center) == null ? void 0 : _visit$center2.suggest) + VisitProxy.DETAIL_TOLERANCE > cosmos.pow10;
          }
        };
        _proto._init = function _init() {
          var _core$res$getConfigIt,
            _core$res$getConfigIt2,
            _this2 = this;
          this._scaleBar = findComp(Sprite, this.scalar, 'Bar');
          this._twsScale = this.scaleGroup.getComponent(TweenSwitcher);
          this._twsIntro = this.introGroup.getComponent(TweenSwitcher);
          this._prefix = (_core$res$getConfigIt = core.res.getConfigItem(Res.Configs.I18N, 'diameter')) != null ? _core$res$getConfigIt : {};
          this._actual = (_core$res$getConfigIt2 = core.res.getConfigItem(Res.Configs.I18N, 'actual')) != null ? _core$res$getConfigIt2 : {};
          this.visibleList.children.forEach(function (child, i) {
            _this2._map.set(child.name, {
              toggle: child.getComponent(Toggle),
              disable: child.getComponent(Sprite),
              ratio: findComp(Label, child, 'Ratio'),
              title: findComp(Label, child, 'Title'),
              hidden: findComp(Label, child, 'Hidden'),
              type: types[i]
            });
          });
        };
        _proto._initToggleStates = function _initToggleStates() {
          var _this3 = this;
          this.visibleList.children.forEach(function (child) {
            var _this3$_map$get = _this3._map.get(child.name),
              toggle = _this3$_map$get.toggle;
            var state = !!solar.getStateByName(child.name);
            toggle.setIsCheckedWithoutNotify(state);
            _this3.toggleVisibility(toggle, false);
          });
          this.scalar.progress = solar.magnifyRatio;
        };
        _proto._listen = function _listen() {
          this.on(Transform.ZOOM_START, this.onVisitStart);
          this.on(Transform.VISIT_OVER, this.onVisitOver);
          this.on(Scale.RATIO_CHANGE, this.onRatioChanged);
          this.on(Panels.CLOSE, this.onPanelClosed);
          this.on(UI.VISIBLE, this.onVisibleChanged);
        };
        _proto.onVisitStart = function onVisitStart() {
          if (this.scaleGroup.activeInHierarchy) {
            this.blocker.enabled = true;
            this._twsScale.hideDelay = this.scalar.progress * REDUCING_SEC;
            this._twsScale.hide(true);
          }
          this._reducing = true; // 每次都要reducing, 因为此刻可能在星际范围
          if (this.introGroup.activeInHierarchy) this._twsIntro.hide(true);
          this._should_intro = false;
        };
        _proto.onVisitOver = function onVisitOver() {
          var inSolar = visit.inSolar,
            inPlanetary = visit.inPlanetary,
            inSatellite = visit.inSatellite,
            inStellar = visit.inStellar,
            centerName = visit.centerName;
          if (inSolar) {
            this.blocker.enabled = false;
            this._twsScale.show(true);
          }
          if (inPlanetary || inSatellite) {
            var name = planetary.unbelt ? centerName : planetary.centerName;
            this._twsIntro.show(true);
            this.introName.string = 'celestial@' + name;
            this._should_intro = true;
          }
          if (inStellar) {
            this._twsIntro.show(true);
            this.introName.string = 'celestial@' + centerName;
            this._should_intro = true;
          }
        };
        _proto.onVisibleChanged = function onVisibleChanged(into_cn, shown, byPanel) {
          if (byPanel) {
            var child = this.visibleList.getChildByName(into_cn);
            if (!!child) {
              var _this$_map$get = this._map.get(into_cn),
                toggle = _this$_map$get.toggle;
              toggle.setIsCheckedWithoutNotify(shown);
              this.toggleVisibility(toggle, false);
            }
          }
        };
        _proto.toggleVisibility = function toggleVisibility(tgl, notify) {
          if (notify === void 0) {
            notify = true;
          }
          var key = tgl.node.name;
          var shown = tgl.isChecked;
          var _this$_map$get2 = this._map.get(key),
            disable = _this$_map$get2.disable,
            ratio = _this$_map$get2.ratio,
            title = _this$_map$get2.title,
            hidden = _this$_map$get2.hidden;
          disable.enabled = !shown;
          title.color = shown ? LBL_UI_NAMES : LBL_GRAY;
          ratio.node.active = shown;
          hidden.node.active = !shown;
          var ntf = Solar.SUN.split('.').head + '.' + key;
          notify && this.notify(ntf, shown);
          notify && this.notify(VISIBLE, key, shown);
        };
        _proto.openIntroPanel = function openIntroPanel() {
          this._twsIntro.hide(true);
          this.notify(Panels.OPEN, Res.Prefabs.INTRO_PANEL, 'bottom');
        };
        _proto.onPanelClosed = function onPanelClosed(name, isFold) {
          if (name === Res.Prefabs.INTRO_PANEL && isFold) {
            this._twsIntro.show(true);
          }
        };
        _proto.slideScalar = function slideScalar() {
          var pct = this.scalar.progress;
          this.notify(Solar.RATIO, pct);
        };
        _proto.onRatioChanged = function onRatioChanged(arg) {
          var prefix = this._prefix[this._lang],
            actual = this._actual[this._lang];
          var pct = arg != null ? arg : this.scalar.progress;
          for (var _iterator = _createForOfIteratorHelperLoose(this._map), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              _value = _step$value[1];
            _value.ratio.string = pct < 0 ? actual : prefix + " \xD7 " + Math.round(solar.getMagnified(_value.type));
          }
          this._scaleBar.fillRange = pct;
        };
        _proto.lateUpdate = function lateUpdate() {
          if (ui.language != this._lang) {
            this._lang = ui.language;
            this.onRatioChanged();
          }
        };
        return LeftMenu;
      }(Mediator), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "scaleGroup", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "scalar", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2$1.prototype, "visibleList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2$1.prototype, "blocker", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$1.prototype, "introGroup", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$1.prototype, "introName", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$1)) || _class$2);
      var Solar = UI.Solar,
        Panels = UI.Panels,
        VISIBLE = UI.VISIBLE,
        Transform = View.Transform,
        Scale = View.Scale;
      var types = ['star', 'planet', 'dwarf', 'minor', 'comet', 'belts'];
      var REDUCING_SEC = 2;
      cclegacy._RF.pop();
      var _dec$3, _dec2$2, _dec3$2, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8, _dec9, _class$3, _class2$2, _descriptor$2, _descriptor2$2, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "b5c67k7D2BM75u2I9ENZUoY", "right-menu", undefined);
      var ccclass$3 = _decorator.ccclass,
        property$1 = _decorator.property;
      var RightMenu = (_dec$3 = ccclass$3('cocosmos.right-menu'), _dec2$2 = property$1(Node), _dec3$2 = property$1(Node), _dec4$1 = property$1(Node), _dec5$1 = property$1(Node), _dec6$1 = property$1(Node), _dec7$1 = property$1(Node), _dec8 = property$1(Node), _dec9 = property$1(Node), _dec$3(_class$3 = (_class2$2 = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(RightMenu, _Mediator);
        function RightMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "localLine", _descriptor$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnTideLock", _descriptor2$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnLunar", _descriptor3$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnEquatorial", _descriptor4$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnEcliptic", _descriptor5$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnMagnetics", _descriptor6$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnDiameter", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnAxis", _descriptor8, _assertThisInitialized(_this));
          _this._tws = void 0;
          return _this;
        }
        var _proto = RightMenu.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
          this._listen();
        };
        _proto.start = function start() {
          this.localLine.active = false;
          this._initToggleEventAndStates();
        };
        _proto.update = function update() {
          var _visit$center;
          if (isNum((_visit$center = visit.center) == null ? void 0 : _visit$center.suggest)) {
            var _visit$center2;
            this.localLine.active = ((_visit$center2 = visit.center) == null ? void 0 : _visit$center2.suggest) + VisitProxy.DETAIL_TOLERANCE > cosmos.pow10;
          }
        };
        _proto._init = function _init() {
          this._tws = this.localLine.getComponent(TweenSwitcher);
        };
        _proto._listen = function _listen() {
          this.on(Transform$1.ZOOM_START, this.onVisitStart);
          this.on(Transform$1.VISIT_OVER, this.onVisitOver);
        };
        _proto.onVisitStart = function onVisitStart() {
          this._tws.hide(true);
        };
        _proto.onVisitOver = function onVisitOver() {
          this._resetUIByScope();
          this._tws.show(true);
        };
        _proto._resetUIByScope = function _resetUIByScope() {
          var inPlanet = visit.inPlanet,
            inPlanetary = visit.inPlanetary,
            inSatellite = visit.inSatellite,
            centerName = visit.centerName,
            inType = visit.inType;
          this.btnAxis.active = this.btnDiameter.active = inPlanetary && inType !== 'belts' && inType !== 'comet' || inSatellite;
          this.btnMagnetics.active = this.btnEcliptic.active = this.btnEquatorial.active = inPlanet;
          this.btnLunar.active = inPlanet && centerName === 'Earth';
          this.btnTideLock.active = false; // TODO
        };

        _proto.toggleInList = function toggleInList(toggle) {
          var checked = toggle.isChecked;
          toggle.getComponent(Sprite).enabled = !checked;
          var name = toggle.node.name;
          var ntf = Local.AXIS.split('.').head + '.' + name;
          this.notify(ntf, checked);
        };
        _proto._initToggleEventAndStates = function _initToggleEventAndStates() {
          var _this2 = this;
          this.localLine.getComponentsInChildren(Toggle).forEach(function (toggle) {
            var checked = planetary.getStateByName(toggle.node.name);
            toggle.setIsCheckedWithoutNotify(checked);
            toggle.getComponent(Sprite).enabled = !checked;
            toggle.node.on(Toggle.EventType.TOGGLE, _this2.toggleInList, _this2);
          });
        };
        return RightMenu;
      }(Mediator), (_descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "localLine", [_dec2$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "btnTideLock", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$2.prototype, "btnLunar", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$2.prototype, "btnEquatorial", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$2.prototype, "btnEcliptic", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$2.prototype, "btnMagnetics", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$2.prototype, "btnDiameter", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$2.prototype, "btnAxis", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$2)) || _class$3);
      var Transform$1 = View.Transform,
        Local = UI.Local;
      cclegacy._RF.pop();
      var _dec$4, _dec2$3, _class$4, _class2$3, _descriptor$3;
      cclegacy._RF.push({}, "03df6rkHf5JPolu3HaR7nl/", "scale-bar", undefined);
      var ccclass$4 = _decorator.ccclass,
        property$2 = _decorator.property;
      var ScaleBar = (_dec$4 = ccclass$4('cocosmos.scale-bar'), _dec2$3 = property$2(Node), _dec$4(_class$4 = (_class2$3 = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(ScaleBar, _Mediator);
        function ScaleBar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "handle", _descriptor$3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ScaleBar.prototype;
        _proto.start = function start() {
          v3a.set(this.handle.position);
        };
        _proto.update = function update() {
          v3a.y = cosmos.pow10 * UNIT_2_PX + OFFSET_ZERO;
          this.handle.setPosition(v3a);
        };
        return ScaleBar;
      }(Mediator), _descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "handle", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2$3)) || _class$4);
      var UNIT_2_PX = -18.5;
      var OFFSET_ZERO = -41;
      var v3a = new Vec3();
      cclegacy._RF.pop();
      var _dec$5, _dec2$4, _dec3$3, _dec4$2, _dec5$2, _class$5, _class2$4, _descriptor$4, _descriptor2$3, _descriptor3$2, _descriptor4$2;
      cclegacy._RF.push({}, "581d9A7IQlJ4Ys55vjVk5Na", "setting-menu", undefined);
      var ccclass$5 = _decorator.ccclass,
        property$3 = _decorator.property;
      var SettingMenu = (_dec$5 = ccclass$5('cocosmos.setting-menu'), _dec2$4 = property$3(Node), _dec3$3 = property$3(Node), _dec4$2 = property$3(Node), _dec5$2 = property$3(TweenSwitcher), _dec$5(_class$5 = (_class2$4 = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(SettingMenu, _Mediator);
        function SettingMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "settingTgl", _descriptor$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "settingList", _descriptor2$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "subList", _descriptor3$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topLine", _descriptor4$2, _assertThisInitialized(_this));
          _this._twn_list = void 0;
          _this._btn_list = void 0;
          _this._twn_tgl = void 0;
          return _this;
        }
        var _proto = SettingMenu.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
          this._listen();
        };
        _proto.toggleLanguage = function toggleLanguage(lang) {
          this.notify(UI.LANGUAGE, lang.isChecked ? 'en' : 'cn');
        };
        _proto.toggleFullscreen = function toggleFullscreen(fs) {
          var fullscreen = fs.isChecked;
          fs.getComponent(Sprite).enabled = !fullscreen;
          this.notify(UI.FULL_SCREEN, fullscreen);
          core.root.fullScreen = fullscreen;
        };
        _proto.start = function start() {
          this.settingList.active = false;
          this.settingList.getComponent(Layout).enabled = false;
          this._initToggleEventAndStates();
          this._initTimerEventAndStates();
          this._initLabelsEventAndStates();
          this._setToggleDefault(this.settingList.getChildByName('语言').getComponent(Toggle), ui.language === 'en');
        };
        _proto._init = function _init() {
          var _this2 = this;
          this._twn_list = this.settingList.getComponentsInChildren(TweenSwitcher);
          this._btn_list = this.settingList.getComponentsInChildren(Button);
          this._twn_list.forEach(function (twn, i) {
            twn.showDistance = twn.hideDistance = i * DIST_SLIDE;
            twn.showDuration = twn.hideDuration = DURATION;
          });
          this._twn_tgl = this.settingTgl.getComponent(TweenSwitcher);
          this.scheduleOnce(function () {
            return _this2.settingList.getComponent(UITransform).convertToNodeSpaceAR(_this2.settingTgl.worldPosition, subPos);
          });
        };
        _proto._listen = function _listen() {
          var _this3 = this;
          this.settingList.getComponentsInChildren(Toggle).forEach(function (tgl) {
            return tgl.node.on(Toggle.EventType.TOGGLE, _this3.toggleSetting, _this3);
          });
        };
        _proto.toggleList = function toggleList(tgl) {
          var _this4 = this;
          tgl.getComponent(Sprite).enabled = !tgl.isChecked;
          this.unscheduleAllCallbacks();
          if (tgl.isChecked) {
            this.settingList.active = true;
            this._shows(this._twn_list, TweenSwitcher.EffectType.FADE_SLIDE);
          } else {
            this.scheduleOnce(function () {
              return _this4.settingList.active = false;
            }, DURATION);
            this._hides(this._twn_list, TweenSwitcher.EffectType.FADE_SLIDE);
          }
        };
        _proto._checkCultTexTask = function _checkCultTexTask(name) {
          if (name === '星际' && !CultureQuad.LoadTexTaskLaunched) {
            CultureQuad.LoadTexTaskLaunched = true;
            this.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_CONST_NORTH);
            this.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_CONST_SOUTH);
          }
        };
        _proto.toggleSetting = function toggleSetting(tgl) {
          tgl.getComponent(Sprite).enabled = !tgl.isChecked;
          var list = this.subList.children.find(function (list) {
            return list.name === tgl.node.name;
          });
          if (list) {
            var otherTwns = this._twn_list.copy().remove(tgl.getComponent(TweenSwitcher));
            var otherBtns = this._btn_list.copy().remove(tgl.getComponent(Button));
            if (tgl.isChecked) {
              this.subList.children.forEach(function (child) {
                return child.active = false;
              });
              this._twn_tgl.hide();
              this._hides(otherTwns, TweenSwitcher.EffectType.FADE);
              this._interactable(otherBtns, false);
              this._slide(tgl, true);
              list.getComponent(TweenSwitcher).show(true);
              this._checkCultTexTask(tgl.node.name);
            } else {
              this._twn_tgl.show();
              this._interactable(otherBtns, true);
              this._shows(otherTwns, TweenSwitcher.EffectType.FADE);
              this._slide(tgl, false);
              list.getComponent(TweenSwitcher).hide(true);
            }
          }
        };
        _proto.toggleStarNameType = function toggleStarNameType(tgl) {
          tgl.getComponent(Sprite).enabled = !tgl.isChecked;
          var type = +tgl.node.name;
          var ntf = UI.Labels.STAR_NAME_TYPE;
          if (tgl.isChecked) {
            console.log('=>', ntf, type);
            this.notify(ntf, type);
          }
        };
        _proto.toggleStarNameLevel = function toggleStarNameLevel(tgl) {
          tgl.getComponent(Sprite).enabled = !tgl.isChecked;
          var level = +tgl.node.name;
          var ntf = UI.Labels.STAR_NAME_LEVEL;
          if (tgl.isChecked) {
            console.log('=>', ntf, level);
            this.notify(ntf, level);
          } else {
            var any = tgl.node.parent.getComponent(ToggleContainer).anyTogglesChecked();
            if (!any) {
              console.log('=>', ntf, StarLevel.NONE);
              this.notify(ntf, StarLevel.NONE);
            }
          }
        };
        _proto.openLensPanel = function openLensPanel() {
          this.notify(UI.Panels.OPEN, Res.Prefabs.LENS_PANEL);
        };
        _proto.onTimer = function onTimer(tgl) {
          tgl.getComponent(Sprite).enabled = !tgl.isChecked;
          var idx = tgl.node.name;
          timer.accelerate(+idx);
        };
        _proto._interactable = function _interactable(btns, interactable) {
          btns.forEach(function (btn) {
            return btn.interactable = interactable;
          });
        };
        _proto._slide = function _slide(sub, left) {
          Tween.stopAllByTarget(sub.node);
          if (left) {
            lastPos.x = sub.node.position.x;
            tween(sub.node).to(DURATION, {
              position: subPos
            }, {
              easing: 'sineOut'
            }).start();
          } else {
            tween(sub.node).to(DURATION, {
              position: lastPos
            }, {
              easing: 'sineOut'
            }).start();
          }
        };
        _proto._shows = function _shows(tws, type, untouchable) {
          if (!isNullish(type)) tws.forEach(function (twn) {
            return twn.showType = type;
          });
          if (untouchable) tws.forEach(function (twn) {
            var btn = twn.getComponent(Button);
            if (btn) btn.interactable = true;
          });
          tws.forEach(function (twn) {
            return twn.show();
          });
        };
        _proto._hides = function _hides(tws, type, touchable) {
          if (!isNullish(type)) tws.forEach(function (twn) {
            return twn.hideType = type;
          });
          tws.forEach(function (twn) {
            return twn.hide();
          });
        };
        _proto.toggleMusic = function toggleMusic(tgl) {
          var mute = !tgl.isChecked;
          tgl.getComponent(Sprite).enabled = mute;
          core.audio.mute = mute;
        };
        _proto.toggleStats = function toggleStats(tgl) {
          var hide = !tgl.isChecked;
          tgl.getComponent(Sprite).enabled = hide;
          hide ? profiler.hideStats() : profiler.showStats();
        };
        _proto.clickGuide = function clickGuide() {
          this.notify(UI.Panels.OPEN, Res.Prefabs.GUIDE_PANEL);
        };
        _proto.clickBorders = function clickBorders() {
          this.notify(UI.Popups.TIP_LINE, 'todos@dev');
        };
        _proto.clickSync = function clickSync() {
          this.notify(UI.Popups.TIP_LINE, 'todos@dev');
        };
        _proto.clickStory = function clickStory() {
          this.notify(UI.Popups.TIP_LINE, 'todos@stories');
        };
        _proto.toggleInSubList = function toggleInSubList(tgl) {
          tgl.getComponent(Sprite).enabled = !tgl.isChecked;
          var arg = tgl.isChecked;
          var _tgl$node = tgl.node,
            name = _tgl$node.name,
            about = _tgl$node.parent.name;
          if (name === '天球') this._relate(tgl, '时角', false);
          if (name === '时角') this._relate(tgl, '天球', false);
          var ntf = "UI:" + about + "." + name;
          console.log('=>', ntf, arg);
          this.notify(ntf, arg);
        };
        _proto.clickStars = function clickStars(event) {
          var toggle = event.target.getComponent(Toggle);
          // notice: clickEvent before toggleEvent, so toggle is unchecked now!
          var toCheck = !toggle.isChecked;
          if (toCheck && constStars.showConstLines) this._relate(toggle, '连线', true);else if (!toCheck && constStars.showConstLines) this._relate(toggle, '连线', false);
        };
        _proto.clickLines = function clickLines(event) {
          var toggle = event.target.getComponent(Toggle);
          // notice: clickEvent before toggleEvent, so toggle is unchecked now!
          var toCheck = !toggle.isChecked;
          if (toCheck && !constStars.showStars) {
            this.notify(UI.Stellar.STARS, true);
            this._relate(toggle, '恒星', true);
          }
        };
        _proto._initLabelsEventAndStates = function _initLabelsEventAndStates() {
          var _this5 = this;
          var labels = this.subList.getChildByName('名称');
          labels.children.forEach(function (child) {
            var tgl = child.getComponent(Toggle);
            if (tgl) _this5._setToggleDefault(tgl, ui.getStateByName(tgl.node.name), true);
          });
          var types = labels.getChildByName('命名');
          types.getComponentsInChildren(Toggle).forEach(function (tgl) {
            tgl.node.on(Toggle.EventType.TOGGLE, _this5.toggleStarNameType, _this5);
            _this5._setToggleDefault(tgl, +tgl.node.name == ui.starNameType);
          });
          types.getComponent(ToggleContainer).allowSwitchOff = false;
          labels.getChildByName('星等').getComponentsInChildren(Toggle).forEach(function (tgl) {
            tgl.node.on(Toggle.EventType.TOGGLE, _this5.toggleStarNameLevel, _this5);
            _this5._setToggleDefault(tgl, +tgl.node.name == ui.starNameLevel);
          });
        };
        _proto._initTimerEventAndStates = function _initTimerEventAndStates() {
          var _this6 = this;
          var times = this.subList.getChildByName('时间');
          times.getComponentsInChildren(Toggle).forEach(function (toggle) {
            var name = +toggle.node.name;
            _this6._setToggleDefault(toggle.getComponent(Toggle), timer.timer === name);
            toggle.node.on(Toggle.EventType.TOGGLE, _this6.onTimer, _this6);
          });
          times.getComponent(ToggleContainer).allowSwitchOff = false;
        };
        _proto._initToggleEventAndStates = function _initToggleEventAndStates() {
          this._initToggleEventsAndState('标尺', gizmos);
          this._initToggleEventsAndState('坐标', gizmos);
          this._initToggleEventsAndState('星际', constStars);
        };
        _proto._initToggleEventsAndState = function _initToggleEventsAndState(sub, proxy) {
          var _this7 = this;
          this.subList.getChildByName(sub).getComponentsInChildren(Toggle).forEach(function (toggle) {
            _this7._setToggleDefault(toggle, proxy.getStateByName(toggle.node.name), true);
          });
        };
        _proto._relate = function _relate(checker, to, checked) {
          var _checker$node$parent;
          var toggle = (_checker$node$parent = checker.node.parent) == null || (_checker$node$parent = _checker$node$parent.getChildByName(to)) == null ? void 0 : _checker$node$parent.getComponent(Toggle);
          if (toggle) {
            toggle.setIsCheckedWithoutNotify(checked);
            toggle.getComponent(Sprite).enabled = !checked;
          }
        };
        _proto._setToggleDefault = function _setToggleDefault(tgl, checked, handle) {
          if (handle === void 0) {
            handle = false;
          }
          tgl.setIsCheckedWithoutNotify(checked);
          tgl.getComponent(Sprite).enabled = !checked;
          handle && tgl.node.on(Toggle.EventType.TOGGLE, this.toggleInSubList, this);
        };
        return SettingMenu;
      }(Mediator), (_descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "settingTgl", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$4.prototype, "settingList", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$4.prototype, "subList", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$4.prototype, "topLine", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$4)) || _class$5);
      var DIST_SLIDE = 100;
      var DURATION = 0.3;
      var subPos = new Vec3();
      var lastPos = new Vec3();
      cclegacy._RF.pop();
      var _dec$6, _dec2$5, _dec3$4, _dec4$3, _dec5$3, _dec6$2, _class$6, _class2$5, _descriptor$5, _descriptor2$4, _descriptor3$3, _descriptor4$3, _descriptor5$2;
      cclegacy._RF.push({}, "1b31f9mVQJGZqIhr4zHJI4A", "state-bar", undefined);
      var ccclass$6 = _decorator.ccclass,
        property$4 = _decorator.property;
      var StateBar = (_dec$6 = ccclass$6('cocosmos.state-bar'), _dec2$5 = property$4(Node), _dec3$4 = property$4(Node), _dec4$3 = property$4(Node), _dec5$3 = property$4(Node), _dec6$2 = property$4(Node), _dec$6(_class$6 = (_class2$5 = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(StateBar, _Mediator);
        function StateBar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lensHover", _descriptor$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lensPitch", _descriptor2$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lensZoom", _descriptor3$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lensLock", _descriptor4$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listLens", _descriptor5$2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = StateBar.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto._init = function _init() {
          this.on(UI.LENS_PARAMS, this.onLensPanelParams);
          this.listLens.children.forEach(function (child) {
            return child.active = false;
          });
        };
        _proto.start = function start() {
          updateSwitcherLayout(this.listLens);
        };
        _proto.onLensPanelParams = function onLensPanelParams(params) {
          var hover = params.hover,
            pitch = params.pitch,
            zoom = params.zoom,
            lock = params.lock;
          this.lensHover.active = hover;
          this.lensPitch.active = pitch;
          this.lensZoom.active = zoom;
          this.lensLock.active = lock;
          updateSwitcherLayout(this.listLens);
        };
        return StateBar;
      }(Mediator), (_descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "lensHover", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$5.prototype, "lensPitch", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$5.prototype, "lensZoom", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$5.prototype, "lensLock", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$2 = _applyDecoratedDescriptor(_class2$5.prototype, "listLens", [_dec6$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$5)) || _class$6);
      cclegacy._RF.pop();
      var _dec$7, _dec2$6, _dec3$5, _dec4$4, _dec5$4, _dec6$3, _dec7$2, _dec8$1, _dec9$1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class$7, _class2$6, _descriptor$6, _descriptor2$5, _descriptor3$4, _descriptor4$4, _descriptor5$3, _descriptor6$2, _descriptor7$1, _descriptor8$1, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;
      cclegacy._RF.push({}, "7e2dbsv/yZIyYuToaoovapp", "visit-menu", undefined);
      var group$1 = group$5;
      var ccclass$7 = _decorator.ccclass;
      var VisitMenu = (_dec$7 = ccclass$7('cocosmos.visit-menu'), _dec2$6 = group$1("Scope", "", Node), _dec3$5 = group$1('Scope', "", Button), _dec4$4 = group$1("Solar", "", Node), _dec5$4 = group$1('Solar', "", CelestialIcon), _dec6$3 = group$1('Solar', "", CelestialIcon), _dec7$2 = group$1('Solar', "", Toggle), _dec8$1 = group$1('Solar', "", Toggle), _dec9$1 = group$1('Solar', "", Toggle), _dec10 = group$1('Solar', "", Node), _dec11 = group$1('Solar', "", Node), _dec12 = group$1('Solar', "", Node), _dec13 = group$1("Stellar", "", Node), _dec14 = group$1('Stellar', "", CelestialIcon), _dec15 = group$1('Stellar', "", Toggle), _dec16 = group$1('Stellar', "", Toggle), _dec17 = group$1('Stellar', "", Toggle), _dec18 = group$1('Stellar', "", Toggle), _dec19 = group$1('Stellar', "", Node), _dec20 = group$1('Stellar', "", Node), _dec21 = group$1('Stellar', "", Node), _dec22 = group$1('Stellar', "", Node), _dec$7(_class$7 = (_class2$6 = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(VisitMenu, _Mediator);
        function VisitMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scopeGroup", _descriptor$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "visitBtn", _descriptor2$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "solarGroup", _descriptor3$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sunIcon", _descriptor4$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "planetIcon", _descriptor5$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "planetExpander", _descriptor6$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dwarfExpander", _descriptor7$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "satelliteExpander", _descriptor8$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "planetList", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dwarfList", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "satelliteList", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stellarGroup", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sunIconS", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star10Expander", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star20Expander", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star30Expander", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blackhole07Expander", _descriptor17, _assertThisInitialized(_this));
          // @group('Stellar', "", Toggle) public blackhole14Expander: Toggle = null;
          _initializerDefineProperty(_this, "star10List", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star20List", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star30List", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blackhole07List", _descriptor21, _assertThisInitialized(_this));
          _this._validate = false;
          _this._scopes = void 0;
          _this._expanders = [];
          _this._satIcons = void 0;
          _this._twsScope = void 0;
          _this._twsSolar = void 0;
          _this._twsStellar = void 0;
          _this._lists = [];
          return _this;
        }
        var _proto = VisitMenu.prototype;
        // @group('Stellar', "", Node) public blackhole14List: Node = null;
        _proto.onLoad = function onLoad() {
          this._init();
          this._listen();
        };
        _proto.start = function start() {
          this.scopeGroup.active = this.solarGroup.active = this.stellarGroup.active = false;
        };
        _proto.update = function update() {
          var pow10 = cosmos.pow10,
            underSolar = cosmos.underSolar,
            upSolar = cosmos.upSolar,
            underStellar = cosmos.underStellar,
            inSolar = visit.inSolar,
            inPlanetary = visit.inPlanetary,
            inSatellite = visit.inSatellite,
            inStellar = visit.inStellar,
            inStar = visit.inStar;
          this._scopes.forEach(function (btn) {
            var _btn$node;
            var name = btn.node.name;
            var _VisibleRanges$name = VisibleRanges[name],
              head = _VisibleRanges$name[0],
              tail = _VisibleRanges$name[1];
            btn.node.active = head <= pow10 && pow10 <= tail;
            if (name === 'Planetary') (_btn$node = btn.node).active && (_btn$node.active = inPlanetary && planetary.unbelt || inSatellite);
            if (inStellar && ['Planetary', 'Solar', 'Helio'].contains(name)) {
              btn.node.active = false;
            }
          });
          this.sunIcon.node.active = !inSolar || pow10 > -4.5;
          this.sunIconS.node.active = inStar;
          this.planetIcon.node.active = inSatellite;
          var showSolar = this._validate && !inStellar && underSolar;
          var showStellar = this._validate && underStellar && (inStellar || !upSolar);
          this.solarGroup.active = showSolar;
          this.stellarGroup.active = showStellar;
        };
        _proto._init = function _init() {
          this._scopes = this.scopeGroup.getComponentsInChildren(Button).slice(1);
          this._expanders = [this.planetExpander, this.dwarfExpander, this.satelliteExpander, this.star10Expander, this.star20Expander, this.star30Expander, this.blackhole07Expander];
          this._lists = [this.planetList, this.dwarfList, this.satelliteList, this.star10List, this.star20List, this.star30List, this.blackhole07List
          // this.blackhole14List,
          ];

          this.solarGroup.children.forEach(function (child) {
            return records.set(child, {
              last: false,
              from: new Vec3(),
              to: new Vec3()
            });
          });
          this.stellarGroup.children.forEach(function (child) {
            return records.set(child, {
              last: false,
              from: new Vec3(),
              to: new Vec3()
            });
          });
          this._twsScope = this.scopeGroup.getComponent(TweenSwitcher);
          this._twsSolar = this.solarGroup.getComponent(TweenSwitcher);
          this._twsStellar = this.stellarGroup.getComponent(TweenSwitcher);
          this._satIcons = this.satelliteList.getComponent(ItemList);
          this._loadFixedIcons();
        };
        _proto._loadFixedIcons = function _loadFixedIcons() {
          this.sunIcon.onDataUpdated(FIXED_ICONS.SUN);
          this.sunIconS.onDataUpdated(FIXED_ICONS.SUN);
          this.planetList.getComponent(ItemList).updateList(FIXED_ICONS.PLANETS);
          this.dwarfList.getComponent(ItemList).updateList(FIXED_ICONS.DWARFS);
          this.star10List.getComponent(ItemList).updateList(FIXED_ICONS.STARS10);
          this.star20List.getComponent(ItemList).updateList(FIXED_ICONS.STARS20);
          this.star30List.getComponent(ItemList).updateList(FIXED_ICONS.STARS30);
          this.blackhole07List.getComponent(ItemList).updateList(FIXED_ICONS.BH07);
          // this.blackhole14List.getComponent(ItemList).updateList(FIXED_ICONS.BH14);
        };

        _proto._listen = function _listen() {
          this.on(Transform$2.ZOOM_START, this.onVisitStart);
          this.on(Transform$2.VISIT_OVER, this.onVisitOver);
        };
        _proto.clickSearch = function clickSearch() {
          this.notify(UI.Panels.OPEN, Res.Prefabs.VISIT_PANEL);
        };
        _proto.clickScope = function clickScope(event) {
          var name = event.target.name;
          var base = Bases[name];
          cosmos.zoomToBy(base, TRANS_SPEED_SCOPE, Math.randomBool());
          this.notify(View.Lens.ANGLE_ADDED, 0, TRANS_HIGHT);
          this._popHeadingInfo(base, name);
        };
        _proto.onVisitStart = function onVisitStart() {
          this._twsScope.hide(true);
          this._twsSolar.hide();
          this._twsStellar.hide();
        };
        _proto.onVisitOver = function onVisitOver() {
          this._validate = true;
          this._resetUIByScope();
          this._twsScope.show(true);
          this._twsSolar.show();
          this._twsStellar.show();
        };
        _proto.expandList = function expandList(expander, data) {
          if (data === 'hide-left') {
            this.scopeGroup.active = !expander.isChecked;
          }
          expander.getComponent(Sprite).enabled = !expander.isChecked;
          var group = expander.node.parent;
          var list = group.getChildByName(expander.node.name.replace('Expander:expand', 'List'));
          var transf = group.getComponent(UITransform);
          var layout = group.getComponent(Layout);
          var widget = group.getComponent(Widget);
          var former = transf.width;
          this._record(true, group);
          if (expander.isChecked) {
            this._foldOthers(expander, list);
            list.active = true;
            list.getComponent(Layout).updateLayout();
          } else {
            list.active = false;
          }
          layout.updateLayout();
          widget.updateAlignment();
          this._record(false, group);
          var latest = transf.width;
          changed.x = (latest - former) / 2;
          group.children.forEach(function (child) {
            var record = records.get(child);
            if (child.active) {
              if (!record.last) {
                var _child$getComponent;
                (_child$getComponent = child.getComponent(TweenSwitcher)) == null || _child$getComponent.resetOrigin().show(true);
              } else {
                var from = record.from,
                  to = record.to;
                tween(child).set({
                  position: from.add(changed)
                }).to(DURATION$1, {
                  position: to
                }, {
                  easing: 'sineOut'
                }).start();
              }
            }
          });
        };
        _proto._popHeadingInfo = function _popHeadingInfo(dest, name) {
          if (Math.abs(dest - cosmos.pow10) > POP_INFO_TOLERANCE) {
            this.notify(UI.Popups.INFO_LINE, "scopes@goto-" + name);
          }
        };
        _proto.clickSolar = function clickSolar() {
          var dest = solar.systemScope;
          if (visit.inSolar) {
            cosmos.zoomToBy(dest, TRANS_SPEED_SCOPE, Math.randomBool());
            this.notify(View.Lens.ANGLE_CHANGE, 0, 20);
          } else {
            this.notify(UI.VISIT, 'Sun', 'star', dest);
            this.notify(UI.IGNORE_TARGET_ONCE);
          }
          this._popHeadingInfo(dest, 'solar');
        };
        _proto.clickPlanetary = function clickPlanetary() {
          var centerName = planetary.centerName,
            _planetary$center = planetary.center,
            cat = _planetary$center.cat,
            rotator = _planetary$center.rotator,
            systemScope = planetary.systemScope;
          var inPlanetary = visit.inPlanetary,
            inSatellite = visit.inSatellite;
          if (inPlanetary) {
            cosmos.zoomToBy(systemScope, 0.5);
            var _Vec3$normalize = Vec3.normalize(v3a$1, rotator.up),
              x = _Vec3$normalize.x,
              y = _Vec3$normalize.y,
              z = _Vec3$normalize.z;
            var az = Math.parseDegree(Math.atan2(x, z));
            var ha = Math.parseDegree(Math.atan(y));
            this.notify(View.Lens.ANGLE_CHANGE, az, ha);
          } else if (inSatellite) {
            this.notify(UI.VISIT, centerName, cat, systemScope);
          }
          this._popHeadingInfo(systemScope, 'planetary');
        };
        _proto.clickSunIcon = function clickSunIcon() {
          if (visit.inSolar) {
            cosmos.zoomToBy(visit.center.suggest, 0.5);
          } else {
            this.notify(UI.VISIT, 'Sun', 'star');
          }
        };
        _proto.clickPlanetIcon = function clickPlanetIcon() {
          var inPlanetary = visit.inPlanetary,
            inSatellite = visit.inSatellite;
          var centerName = planetary.centerName,
            _planetary$center2 = planetary.center,
            cat = _planetary$center2.cat,
            suggest = _planetary$center2.suggest;
          if (inPlanetary) {
            cosmos.zoomToBy(suggest, 1);
          } else if (inSatellite) {
            this.notify(UI.VISIT, centerName, cat);
          }
        };
        _proto._resetUIByScope = function _resetUIByScope() {
          var inSolar = visit.inSolar,
            inPlanetary = visit.inPlanetary,
            inSatellite = visit.inSatellite;
          this.visitBtn.node.active = inSolar;
          this.satelliteExpander.node.active = false;
          if (inPlanetary || inSatellite) {
            var satellites = planetary.satellites,
              cat = planetary.center.cat,
              unbelt = planetary.unbelt,
              name = planetary.centerName;
            if (satellites.length > 0) {
              this.satelliteExpander.node.active = true;
            }
            if (unbelt) {
              this.planetIcon.onDataUpdated({
                into: cat,
                name: name,
                label: name
              });
            }
            this._reloadSatellitesList();
          }
          this.planetExpander.node.active = this.dwarfExpander.node.active = inSolar || inPlanetary;
          this._lists.forEach(function (list) {
            return list.active = false;
          });
          this._foldOthers(null);
        };
        _proto._reloadSatellitesList = function _reloadSatellitesList() {
          var satellites = planetary.satellites;
          this._satIcons.updateList(satellites.map(function (name) {
            return {
              into: 'satellite',
              name: name
            };
          }));
          this.satelliteList.getComponent(Layout).updateLayout();
        };
        _proto._record = function _record(from, group) {
          group.children.forEach(function (child) {
            var item = records.get(child);
            if (from) {
              item.from.set(child.position);
              item.last = child.active;
            } else item.to.set(child.position);
          });
        };
        _proto._foldOthers = function _foldOthers(expander, list) {
          this._expanders.forEach(function (item) {
            if (item !== expander && item.isChecked) {
              item.getComponent(Sprite).enabled = true;
              item.setIsCheckedWithoutNotify(false);
            }
          });
          if (list) this._lists.forEach(function (item) {
            if (item !== list) item.active = false;
          });
        };
        return VisitMenu;
      }(Mediator), (_descriptor$6 = _applyDecoratedDescriptor(_class2$6.prototype, "scopeGroup", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$6.prototype, "visitBtn", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$6.prototype, "solarGroup", [_dec4$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$4 = _applyDecoratedDescriptor(_class2$6.prototype, "sunIcon", [_dec5$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$3 = _applyDecoratedDescriptor(_class2$6.prototype, "planetIcon", [_dec6$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$2 = _applyDecoratedDescriptor(_class2$6.prototype, "planetExpander", [_dec7$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$6.prototype, "dwarfExpander", [_dec8$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$6.prototype, "satelliteExpander", [_dec9$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2$6.prototype, "planetList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2$6.prototype, "dwarfList", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2$6.prototype, "satelliteList", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2$6.prototype, "stellarGroup", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2$6.prototype, "sunIconS", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2$6.prototype, "star10Expander", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2$6.prototype, "star20Expander", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2$6.prototype, "star30Expander", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2$6.prototype, "blackhole07Expander", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2$6.prototype, "star10List", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2$6.prototype, "star20List", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2$6.prototype, "star30List", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2$6.prototype, "blackhole07List", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$6)) || _class$7);
      var Transform$2 = View.Transform;
      var Bases = CosmosProxy.Bases,
        TRANS_SPEED_SCOPE = CosmosProxy.TRANS_SPEED_SCOPE,
        TRANS_HIGHT = CosmosProxy.TRANS_HIGHT;
      var DURATION$1 = 0.3;
      var changed = new Vec3();
      var records = new Map();
      var v3a$1 = new Vec3();
      var POP_INFO_TOLERANCE = 0.5;
      var VisibleRanges = {
        Planetary: [-99, -3],
        Solar: [-99, 0],
        Helio: [-4, 3],
        Stellar: [-1, 5.3],
        MilkyWay: [1.8, 7.8],
        LocalGG: [3.8, 9.8],
        VirgoSC: [4.9, 10.9],
        Laniakea: [5.6, 11.3],
        Observable: [8, 99]
      };
      cclegacy._RF.pop();
      var _dec$8, _dec2$7, _dec3$6, _dec4$5, _dec5$5, _dec6$4, _dec7$3, _dec8$2, _dec9$2, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _dec15$1, _dec16$1, _dec17$1, _dec18$1, _dec19$1, _class$8, _class2$7, _descriptor$7, _descriptor2$6, _descriptor3$5, _descriptor4$5, _descriptor5$4, _descriptor6$3, _descriptor7$2, _descriptor8$2, _descriptor9$1, _descriptor10$1, _descriptor11$1, _descriptor12$1, _descriptor13$1, _descriptor14$1, _descriptor15$1, _descriptor16$1;
      cclegacy._RF.push({}, "bc154rb6spMiplIEweTcvBS", "sun-flare", undefined);
      var ccclass$8 = _decorator.ccclass,
        requireComponent = _decorator.requireComponent;
      var group$2 = group$5;
      var useOutScreen = function useOutScreen() {
        return this.autoHideOutScreen;
      };
      var useOcclusive = function useOcclusive() {
        return this.autoHideOcclusive;
      };
      var useSpotColor = function useSpotColor() {
        return this.useCustomSpotColor;
      };
      var SunFlare = (_dec$8 = ccclass$8('cocosmos.sun-flare'), _dec2$7 = requireComponent(Sprite), _dec3$6 = requireComponent(Widget), _dec4$5 = group$2("主参数.A", "主相机（3D相机）", Camera), _dec5$5 = group$2("主参数.A", "太阳节点（发光源）", Node), _dec6$4 = group$2("遮挡设置.B", "出屏隐藏"), _dec7$3 = group$2("遮挡设置.B", "出屏容忍度", ['unit', 'pixel'], useOutScreen), _dec8$2 = group$2("遮挡设置.B", "遮挡隐藏"), _dec9$2 = group$2("遮挡设置.B", "触发器遮挡", useOcclusive), _dec10$1 = group$2("发光设置.C", "中心光耀强度", [0, 2, 0.01]), _dec11$1 = group$2("发光设置.C", "周围光晕强度", [0, 2, 0.01]), _dec12$1 = group$2("发光设置.C", "散射光斑强度", [0, 2, 0.01]), _dec13$1 = group$2("发光设置.C", "中心光耀大小", [0]), _dec14$1 = group$2("发光设置.C", "周围光晕大小", [0]), _dec15$1 = group$2("发光设置.C", "光晕旋转角度", [0, 360, 0.1]), _dec16$1 = group$2("发光设置.C", "散射光斑大小", [0, 2, 0.01]), _dec17$1 = group$2("发光设置.C", "指定光斑渐变色"), _dec18$1 = group$2("发光设置.C", "光斑颜色开始", useSpotColor), _dec19$1 = group$2("发光设置.C", "光斑颜色结束", useSpotColor), _dec$8(_class$8 = _dec2$7(_class$8 = _dec3$6(_class$8 = (_class2$7 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SunFlare, _Component);
        function SunFlare() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainCamera", _descriptor$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sun", _descriptor2$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoHideOutScreen", _descriptor3$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tolerance", _descriptor4$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoHideOcclusive", _descriptor5$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "triggerOcclude", _descriptor6$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flareStrength", _descriptor7$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haloStrength", _descriptor8$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spotsStrength", _descriptor9$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "flareSize", _descriptor10$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haloSize", _descriptor11$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haloAngle", _descriptor12$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spotsScale", _descriptor13$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useCustomSpotColor", _descriptor14$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spotColorFrom", _descriptor15$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spotColorTo", _descriptor16$1, _assertThisInitialized(_this));
          _this._consume = false;
          _this._material = void 0;
          _this._pass0 = void 0;
          _this._handleArgs0 = 0;
          _this._handleArgs1zw = 0;
          _this._handleArgs2 = 0;
          _this._handleHAngle = 0;
          _this._handleColorA = 0;
          _this._handleColorB = 0;
          _this._strength = 0;
          _this._starlight = 0;
          _this._star = void 0;
          return _this;
        }
        var _proto = SunFlare.prototype;
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto.onDestroy = function onDestroy() {
          core.unload(this);
        };
        _proto._init = function _init() {
          var _this$mainCamera;
          this.mainCamera = (_this$mainCamera = this.mainCamera) != null ? _this$mainCamera : findCamera();
          this._material = this.getComponent(Sprite).material;
          this._pass0 = this._material.passes[0];
          this._handleArgs0 = this._pass0.getHandle('args0');
          this._handleArgs1zw = this._pass0.getHandle('args1', 2, gfx.Type.FLOAT2);
          this._handleArgs2 = this._pass0.getHandle('args2');
          this._handleHAngle = this._pass0.getHandle('hAngle');
          this._handleColorA = this._pass0.getHandle('spotColorA');
          this._handleColorB = this._pass0.getHandle('spotColorB');
          this._star = this.node.getChildByName('Star').getComponent(UIOpacity);
          return this;
        };
        _proto._listen = function _listen() {
          var _this2 = this;
          updateSize();
          screen.on('window-resize', function () {
            _this2.getComponent(Widget).updateAlignment();
            updateSize();
          });
          core.on(Notifications.Time.POST_TICK, this.onTick, this);
          core.on(View.Transform.FACE_OVER, function () {
            return _this2._consume = true;
          });
        };
        _proto.start = function start() {
          var _solarSys$sun;
          var solarSys = findComp$4(SolarSystem, COSMOS$2, SOLAR);
          this.sun = (_solarSys$sun = solarSys.sun) == null ? void 0 : _solarSys$sun.node;
        };
        _proto._attenuate = function _attenuate(dt) {
          this.sun.inverseTransformPoint(v3a$2, this.mainCamera.node.worldPosition);
          var dist = v3a$2.length();
          var att = attenuate(dist, [3, 20, 2000, 10000], false);
          var light = attenuate(dist, [0, 1, 500, 1000], false);
          this._starlight = Math.lerp(this._starlight, visit.inSolar ? 0 : light, dt);
          this._strength = Math.lerp(this._strength, att, dt);
        };
        _proto._assign = function _assign(x, y) {
          this.flareStrength = this.haloStrength = this.spotsStrength = this._strength;
          this.flareSize = 320 * this._strength + 32;
          this.haloSize = 400 * this._strength + 40;
          this.haloAngle = this.mainCamera.node.eulerAngles.y;
          this._star.node.setPosition(x, y);
          this._star.opacity = 191 * this._starlight;
          // this._star.node.setScale(5 * this._starlight, 5 * this._starlight);
        };

        _proto.onTick = function onTick(dt, tick) {
          if (this.invalid) return this.node.active = this._consume = false;
          if (!cosmos.solar || !solar.showSun) return this.node.active = this._consume = false;
          var sp = this.sun.worldPosition,
            _this$mainCamera$node = this.mainCamera.node,
            forward = _this$mainCamera$node.forward,
            mp = _this$mainCamera$node.worldPosition;
          if (Vec3.dot(forward, Vec3.subtract(v3a$2, sp, mp)) < 0) return this.node.active = this._consume = false;
          this.mainCamera.convertToUINode(sp, this.node.parent, v3a$2);
          var _ref = this._consume ? store : v3a$2,
            x = _ref.x,
            y = _ref.y; // For Hack
          store.set(v3a$2);
          this._consume = false;
          if (this.autoHideOutScreen) {
            var out = Math.abs(x) > Hor + this.tolerance || Math.abs(y) > Ver + this.tolerance;
            if (out) return this.node.active = false;
          }
          v4a$1.z = x;
          v4a$1.w = y;
          this._pass0.setUniform(this._handleArgs0, v4a$1);
          var occ = this.autoHideOcclusive && this._occlusiveCheck();
          if (occ) {
            // this._starlight = Math.lerp(this._starlight, 0, dt * 4);
            this._strength = Math.lerp(this._strength, 0, dt * 2);
          } else {
            this._attenuate(dt);
          }
          this._assign(x, y);
          v2a.set(this.flareSize, this.haloSize);
          this._pass0.setUniform(this._handleArgs1zw, v2a);
          this._pass0.setUniform(this._handleHAngle, this.haloAngle);
          v4b.set(this.flareStrength, this.haloStrength, this.spotsStrength, this.spotsScale);
          this._pass0.setUniform(this._handleArgs2, v4b);
          if (this.useCustomSpotColor) {
            this._pass0.setUniform(this._handleColorA, this.spotColorFrom);
            this._pass0.setUniform(this._handleColorB, this.spotColorTo);
          }
          this.node.active = true;
        };
        _proto._occlusiveCheck = function _occlusiveCheck() {
          var outRay = new geometry.Ray();
          geometry.Ray.fromPoints(outRay, this.mainCamera.node.worldPosition, this.sun.worldPosition);
          var mask = 0xffffffff;
          var maxDistance = 100;
          var queryTrigger = this.triggerOcclude;
          if (PhysicsSystem.instance.raycast(outRay, mask, maxDistance, queryTrigger)) {
            return notEmptyArr(PhysicsSystem.instance.raycastResults);
          } else return false;
        };
        _createClass(SunFlare, [{
          key: "invalid",
          get: function get() {
            return !this.node.parent || !this.mainCamera || !this.sun;
          }
        }]);
        return SunFlare;
      }(Component), (_descriptor$7 = _applyDecoratedDescriptor(_class2$7.prototype, "mainCamera", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$7.prototype, "sun", [_dec5$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$7.prototype, "autoHideOutScreen", [_dec6$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4$5 = _applyDecoratedDescriptor(_class2$7.prototype, "tolerance", [_dec7$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 50;
        }
      }), _descriptor5$4 = _applyDecoratedDescriptor(_class2$7.prototype, "autoHideOcclusive", [_dec8$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor6$3 = _applyDecoratedDescriptor(_class2$7.prototype, "triggerOcclude", [_dec9$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7$2 = _applyDecoratedDescriptor(_class2$7.prototype, "flareStrength", [_dec10$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor8$2 = _applyDecoratedDescriptor(_class2$7.prototype, "haloStrength", [_dec11$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9$1 = _applyDecoratedDescriptor(_class2$7.prototype, "spotsStrength", [_dec12$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor10$1 = _applyDecoratedDescriptor(_class2$7.prototype, "flareSize", [_dec13$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 320;
        }
      }), _descriptor11$1 = _applyDecoratedDescriptor(_class2$7.prototype, "haloSize", [_dec14$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 400;
        }
      }), _descriptor12$1 = _applyDecoratedDescriptor(_class2$7.prototype, "haloAngle", [_dec15$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13$1 = _applyDecoratedDescriptor(_class2$7.prototype, "spotsScale", [_dec16$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor14$1 = _applyDecoratedDescriptor(_class2$7.prototype, "useCustomSpotColor", [_dec17$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor15$1 = _applyDecoratedDescriptor(_class2$7.prototype, "spotColorFrom", [_dec18$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 0, 255);
        }
      }), _descriptor16$1 = _applyDecoratedDescriptor(_class2$7.prototype, "spotColorTo", [_dec19$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 125, 0, 127);
        }
      })), _class2$7)) || _class$8) || _class$8) || _class$8);
      var v2a = new Vec2();
      var v3a$2 = new Vec3();
      var store = new Vec3(); // For Hack
      var v4a$1 = new Vec4();
      var v4b = new Vec4();
      var Hor = 0,
        Ver = 0;
      function updateSize() {
        var _view$getVisibleSize = view.getVisibleSize(),
          width = _view$getVisibleSize.width,
          height = _view$getVisibleSize.height;
        Hor = width / 2;
        Ver = height / 2;
        v4a$1.x = width;
        v4a$1.y = height;
      }
      var COSMOS$2 = SceneGraph.COSMOS,
        SOLAR = SceneGraph.SOLAR;
      // const { Scopes: { Solar } } = CosmosProxy;
      cclegacy._RF.pop();
      var _dec$9, _dec2$8, _dec3$7, _dec4$6, _class$9, _class2$8, _descriptor$8, _descriptor2$7, _descriptor3$6;
      cclegacy._RF.push({}, "58480t3AupG7a7abhO8Dakq", "target-indicator", undefined);
      var ccclass$9 = _decorator.ccclass,
        property$5 = _decorator.property;
      var TargetIndicator = (_dec$9 = ccclass$9('target-indicator'), _dec2$8 = property$5(Camera), _dec3$7 = property$5(Node), _dec4$6 = property$5(Label), _dec$9(_class$9 = (_class2$8 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TargetIndicator, _Component);
        function TargetIndicator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainCamera", _descriptor$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "circles", _descriptor2$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "distance", _descriptor3$6, _assertThisInitialized(_this));
          _this._forgive = false;
          _this._ignore = false;
          _this._anim = void 0;
          _this._playing = false;
          return _this;
        }
        var _proto = TargetIndicator.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto.start = function start() {
          this.circles.active = false;
        };
        _proto._init = function _init() {
          var _this2 = this;
          this._anim = this.circles.getComponent(Animation);
          this._anim.on(Animation.EventType.FINISHED, this._playOver, this);
          core.on(View.Transform.ZOOM_OVER, this._playAnim, this);
          core.on(View.Transform.FACE_OVER, function () {
            return _this2._forgive = true;
          });
          core.on(UI.IGNORE_TARGET_ONCE, function () {
            return _this2._ignore = true;
          });
        };
        _proto.onDestroy = function onDestroy() {
          core.unload(this);
        };
        _proto._playAnim = function _playAnim() {
          var transEnum = visit.transInfo.transEnum;
          if (this._ignore) {
            this._ignore = false;
            return;
          }
          if (SHOW_CIRCLE_ENUMS.contains(transEnum)) {
            this._playing = true;
            this.circles.active = true;
            this._anim.play();
          }
        };
        _proto._playOver = function _playOver() {
          this._playing = false;
          this.circles.active = false;
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          this.distance.node.active = false;
          if (this._playing) {
            var target = visit.transInfo.target,
              showTarget = gizmos.showTarget;
            if (!target || !showTarget) return this.circles.active = false;
            if (this._forgive) {
              this.circles.active = true;
            } else {
              var sp = target.node.worldPosition,
                _this$mainCamera$node = this.mainCamera.node,
                forward = _this$mainCamera$node.forward,
                mp = _this$mainCamera$node.worldPosition;
              if (Vec3.dot(forward, Vec3.subtract(v3a$3, sp, mp)) < 0) return this.circles.active = false;
              var dist = Math.pow(10, cosmos.pow10) * v3a$3.length() * KM_OF_LY;
              this.distance.string = dist.toFixed(0) + ' km';
              this.distance.node.active = true;
              this.circles.active = true;
              this.mainCamera.convertToUINode(sp, this.node.parent, v3a$3);
              this.circles.setPosition(v3a$3);
            }
          }
          this._forgive = false;
        };
        return TargetIndicator;
      }(Component), (_descriptor$8 = _applyDecoratedDescriptor(_class2$8.prototype, "mainCamera", [_dec2$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$8.prototype, "circles", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$6 = _applyDecoratedDescriptor(_class2$8.prototype, "distance", [_dec4$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$8)) || _class$9);
      var v3a$3 = new Vec3();
      var SHOW_CIRCLE_ENUMS = [TransformEnum.SUN_2_PLN, TransformEnum.SUN_2_SAT, TransformEnum.PLN_2_PLN, TransformEnum.PLN_2_SUN, TransformEnum.SAT_2_SUN, TransformEnum.SUN_2_SPC, TransformEnum.SPC_2_SUN];
      cclegacy._RF.pop();
      var _dec$a, _class$a;
      cclegacy._RF.push({}, "662ebfxPh5NTqZdN7woSvur", "welcome", undefined);
      var ccclass$a = _decorator.ccclass,
        property$6 = _decorator.property;
      var Welcome = (_dec$a = ccclass$a('cocosmos.welcome'), _dec$a(_class$a = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Welcome, _Component);
        function Welcome() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = Welcome.prototype;
        _proto.onHide = function onHide() {
          this.node.destroy();
        };
        return Welcome;
      }(Component)) || _class$a);
      cclegacy._RF.pop();
      var _dec$b, _class$b;
      cclegacy._RF.push({}, "0ed87zlcGBP+4hFbVeWdGIH", "intro-line", undefined);
      var ccclass$b = _decorator.ccclass;
      var findComp$1 = findComp$4;
      var IntroLine = (_dec$b = ccclass$b('cocosmos.intro-line'), _dec$b(_class$b = /*#__PURE__*/function (_Component) {
        _inheritsLoose(IntroLine, _Component);
        function IntroLine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._pad = null;
          _this._tag = null;
          _this._description = null;
          _this._tagUit = null;
          _this._descUit = null;
          return _this;
        }
        var _proto = IntroLine.prototype;
        _proto.onLoad = function onLoad() {
          this._pad = this.getComponent(Sprite);
          this._tag = findComp$1(LabelI18n, this, 'Tag');
          this._description = findComp$1(LabelI18n, this, 'Description');
          this._tagUit = this._tag.getComponent(UITransform);
          this._descUit = this._description.getComponent(UITransform);
        };
        _proto.onDataUpdated = function onDataUpdated(data) {
          var tag = data.tag,
            value = data.value;
          var desc = value ? isStr(value) ? value : value.en : null;
          var hasTag = !!tag,
            hasDesc = !!desc;
          this._tag.node.active = hasTag;
          this._tagUit.width = hasDesc ? TAG_WIDTH : LINE_WIDTH;
          this._tag.node.setPosition(hasDesc ? TAG_OFFSET : 0, 0);
          this._description.node.active = hasDesc;
          this._descUit.width = hasTag ? DESC_WIDTH : LINE_WIDTH;
          this._description.node.setPosition(hasTag ? DESC_OFFSET : 0, 0);
          if (hasTag) this._tag.string = (tag.length <= 1 ? 'phys@' : 'tags@') + tag;
          if (hasDesc) {
            if (!isStr(value)) {
              this._description.config = value;
            } else {
              var un_forced = FORCE_I18N_DESC.excludes(desc);
              var un_i18n = un_forced && hasTag && PURE_NUM_TAGS.includes(tag);
              if (un_i18n) {
                this._description.enabled = false;
                this._description.getComponent(Label).string = desc;
              } else {
                this._description.enabled = true;
                this._description.string = (!un_forced ? 'misc@' : '') + desc;
              }
            }
          }
          this._pad.enabled = this.node.parent.children.indexOf(this.node) % 2 === 0;
          this.adjustHeight();
        };
        _proto.adjustHeight = function adjustHeight() {
          var _this2 = this;
          this.scheduleOnce(function () {
            return _this2.node.getComponent(UITransform).height = Math.max(_this2._tag.node.active ? _this2._tagUit.height : 0, _this2._description.node.active ? _this2._descUit.height : 0);
          });
        };
        return IntroLine;
      }(Component)) || _class$b);

      // 纯数值不进行翻译
      var PURE_NUM_TAGS = ['seq', 'diam', 'date', 'ksn', 'aid', 'cid', 'radius', 'lon', 'obl', 'ecc', 'prd', 'agl', 'nra', 'nd', '_obl', '_prd', 'max', 'total', 'weight', 'distances', 'fid', 'hip', 'hd', 'ra', 'dec', 'brc', 'brs', 'mag', 'abs', 'spec', 'mul', 'swz', 'csr', 's', 'v', 'm', 'd', 'g', 'e', 'r', 't', 'a', 'p', 'h', 'x', 'z', 'n', 'c', 'b', 'o', 'l', 'i', 'k'];

      // 虽然是PureNumTag
      var FORCE_I18N_DESC = ['bh', 'sync', 'true', 'false'];
      var TAG_WIDTH = 120;
      var TAG_OFFSET = -115;
      var DESC_WIDTH = 230;
      var DESC_OFFSET = 60;
      var LINE_WIDTH = 340;
      cclegacy._RF.pop();
      var _dec$c, _dec2$9, _dec3$8, _dec4$7, _class$c, _class2$9, _descriptor$9, _descriptor2$8, _descriptor3$7;
      cclegacy._RF.push({}, "d3b2cjrSnVCjIxvzQuF6WhB", "pop-info-line", undefined);
      var ccclass$c = _decorator.ccclass;
      var serialize = serialize$1,
        tip = tip$1;
      var PopInfoLine = (_dec$c = ccclass$c('cocosmos.pop-info-line'), _dec2$9 = tip("内容文本", LabelI18n), _dec3$8 = tip("保持时间", ['unit', 'sec']), _dec4$7 = tip("留边宽高"), _dec$c(_class$c = (_class2$9 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopInfoLine, _Component);
        function PopInfoLine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "i18n", _descriptor$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "duration", _descriptor2$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_margins", _descriptor3$7, _assertThisInitialized(_this));
          _this._tws = void 0;
          _this._label = void 0;
          return _this;
        }
        var _proto = PopInfoLine.prototype;
        _proto.onLoad = function onLoad() {
          var _ref, _this$getComponent;
          this._tws = (_ref = (_this$getComponent = this.getComponent(TweenSwitcher)) != null ? _this$getComponent : this.getComponentInChildren(TweenSwitcher)) != null ? _ref : this.addComponent(TweenSwitcher);
          this._label = this.i18n.getComponent(Label);
          core.on(UI.Popups.INFO_LINE, this.onPopInfo, this);
          core.on(UI.Popups.TIP_LINE, this.onTipInfo, this);
        };
        _proto.start = function start() {
          this._tws.node.active = false;
        };
        _proto.onDestroy = function onDestroy() {
          core.unload(this);
        };
        _proto.onPopInfo = function onPopInfo(chars, dur) {
          this._label.color = Color.WHITE;
          this.show(chars, dur);
        };
        _proto.onTipInfo = function onTipInfo(chars, dur) {
          this._label.color = TIP_COLOR;
          this.show(chars, dur);
        };
        _proto.show = function show(chars, duration) {
          var _this2 = this;
          this.unscheduleAllCallbacks();
          this.i18n.string = chars;
          var dur = duration != null ? duration : this.duration;
          this._tws.show(true);
          this.scheduleOnce(function () {
            return _this2._tws.hide(true);
          }, dur);
        };
        _createClass(PopInfoLine, [{
          key: "margins",
          get: function get() {
            return this._margins;
          },
          set: function set(args) {
            var _this3 = this;
            this._margins = args;
            this.scheduleOnce(function () {
              var _this3$i18n$node;
              var _this3$_margins = _this3._margins,
                x = _this3$_margins.x,
                y = _this3$_margins.y;
              var _this3$i18n$getCompon = _this3.i18n.getComponent(UITransform).contentSize,
                width = _this3$i18n$getCompon.width,
                height = _this3$i18n$getCompon.height;
              (_this3$i18n$node = _this3.i18n.node) == null || (_this3$i18n$node = _this3$i18n$node.parent) == null || _this3$i18n$node.getComponent(UITransform).setContentSize(width + x, height + y);
            });
          }
        }]);
        return PopInfoLine;
      }(Component), (_descriptor$9 = _applyDecoratedDescriptor(_class2$9.prototype, "i18n", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$8 = _applyDecoratedDescriptor(_class2$9.prototype, "duration", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3$7 = _applyDecoratedDescriptor(_class2$9.prototype, "_margins", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(20, 10);
        }
      }), _applyDecoratedDescriptor(_class2$9.prototype, "margins", [_dec4$7], Object.getOwnPropertyDescriptor(_class2$9.prototype, "margins"), _class2$9.prototype)), _class2$9)) || _class$c);
      var TIP_COLOR = new Color(153, 153, 63);
      cclegacy._RF.pop();
      var _dec$d, _dec2$a, _dec3$9, _class$d, _class2$a, _descriptor$a, _descriptor2$9;
      cclegacy._RF.push({}, "e77cenBuGhHboMlW5u17l0g", "tab-card", undefined);
      var ccclass$d = _decorator.ccclass,
        property$7 = _decorator.property;
      var TabCard = (_dec$d = ccclass$d('cocosmos.tab-card'), _dec2$a = property$7(LabelI18n), _dec3$9 = property$7(ItemList), _dec$d(_class$d = (_class2$a = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TabCard, _Component);
        function TabCard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "title", _descriptor$a, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "grids", _descriptor2$9, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = TabCard.prototype;
        _proto.updateData = function updateData(title, list) {
          this.title.string = title;
          this.grids.updateList(list);
          this._updateUI(list.length);
        };
        _proto._updateUI = function _updateUI(num) {
          var row = Math.ceil(num / COL_NUM);
          var height = row * ICON_SIZE + PADDING_TOP + PADDING_BTM;
          this.node.getComponent(UITransform).setContentSize(TAB_WIDTH, height);
          this.title.getComponent(Widget).updateAlignment();
        };
        _proto.clear = function clear() {
          this.grids.freeAll();
        };
        return TabCard;
      }(Component), (_descriptor$a = _applyDecoratedDescriptor(_class2$a.prototype, "title", [_dec2$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$9 = _applyDecoratedDescriptor(_class2$a.prototype, "grids", [_dec3$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$a)) || _class$d);
      var COL_NUM = 8;
      var ICON_SIZE = 90;
      var TAB_WIDTH = COL_NUM * ICON_SIZE + 20;
      var PADDING_TOP = 25;
      var PADDING_BTM = 7;
      cclegacy._RF.pop();
      var _dec$e, _dec2$b, _dec3$a, _dec4$8, _dec5$6, _dec6$5, _dec7$4, _dec8$3, _dec9$3, _dec10$2, _dec11$2, _dec12$2, _class$e, _class2$b, _descriptor$b, _descriptor2$a, _descriptor3$8, _descriptor4$6, _descriptor5$5, _descriptor6$4, _descriptor7$3, _descriptor8$3, _descriptor9$2, _descriptor10$2, _descriptor11$2;
      cclegacy._RF.push({}, "1e9a24k/A5PdY6aOmGqwpxZ", "guide-panel", undefined);
      var ccclass$e = _decorator.ccclass,
        property$8 = _decorator.property;
      var GuidePanel = (_dec$e = ccclass$e('cocosmos.guide-panel'), _dec2$b = property$8(Node), _dec3$a = property$8(Node), _dec4$8 = property$8(Node), _dec5$6 = property$8(Node), _dec6$5 = property$8(Node), _dec7$4 = property$8(Node), _dec8$3 = property$8(Node), _dec9$3 = property$8(Node), _dec10$2 = property$8(Node), _dec11$2 = property$8(Label), _dec12$2 = property$8([Sprite]), _dec$e(_class$e = (_class2$b = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(GuidePanel, _Mediator);
        function GuidePanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "steps", _descriptor$b, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "screenshot", _descriptor2$a, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "overTip", _descriptor3$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor4$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnNext", _descriptor5$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSkip", _descriptor6$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "langChoose", _descriptor7$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skipDialog", _descriptor8$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor9$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelStep", _descriptor10$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "langSprites", _descriptor11$2, _assertThisInitialized(_this));
          _this._idx = -1;
          _this._ss_anim = null;
          return _this;
        }
        var _proto = GuidePanel.prototype;
        _proto.onLoad = function onLoad() {
          this._ss_anim = this.screenshot.getComponent(Animation);
          this._ss_anim.on(FINISHED, this.onStepStart, this);
        };
        _proto.start = function start() {
          this._adapt();
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          this._toggleSkip(false)._toggleNext(false);
          this.langChoose.active = this.steps.active = this.overTip.active = false;
          this.steps.children.forEach(function (child) {
            return child.active = child === _this2.title;
          });
          this.labelStep.string = '_';
          this.screenshot.getComponentsInChildren(UIOpacity).forEach(function (opa) {
            return opa.opacity = 0;
          });
          if (!user.guided) {
            this._darkenMask = false;
            this.langChoose.active = true;
            this.langChoose.getComponent(Animation).play();
          } else {
            this._startSteps();
          }
        };
        _proto.chooseLang = function chooseLang(evt, lang) {
          this.notify(UI.LANGUAGE, lang);
          this.langChoose.active = false;
          this._startSteps();
        };
        _proto._startSteps = function _startSteps() {
          this.changeSpriteLang();
          this.steps.active = this.screenshot.active = true;
          this._darkenMask = true;
          this._idx = 0;
          this._playNextStep();
        };
        _proto.clickNext = function clickNext() {
          if (this._idx >= TOTAL_STEPS) {
            this._playOverTip();
          } else this._playNextStep();
        };
        _proto.clickSkip = function clickSkip() {
          this.skipDialog.active = true;
          this.skipDialog.getComponent(Animation).play();
        };
        _proto.clickConfirm = function clickConfirm() {
          this.skipDialog.active = false;
          this._playOverTip();
        };
        _proto.clickCancel = function clickCancel() {
          this.skipDialog.active = false;
        };
        _proto.changeSpriteLang = function changeSpriteLang() {
          var language = ui.language,
            POPS = Res.Sheets.UI_POPS,
            en = language === 'en';
          this.langSprites.forEach(function (spt) {
            return changeFrame(spt, POPS, 'en', en);
          });
        };
        _proto._playOverTip = function _playOverTip() {
          user.updateGuided();
          this.steps.active = false;
          this.overTip.active = true;
          this._toggleNext(false)._toggleSkip(false);
          this.getComponent(Animation).play('over-tip');
        };
        _proto.onOverTipCompete = function onOverTipCompete() {
          core.audio.bgmVolume = 0.5;
          this.notify(UI.Panels.CLOSE, Res.Prefabs.GUIDE_PANEL);
        };
        _proto._playNextStep = function _playNextStep() {
          // step1: hide last and show this
          this._toggleStep(false);
          this._idx++;
          this._toggleNext(false);
          this.labelStep.string = "\uFF08" + this._idx + "/" + TOTAL_STEPS + "\uFF09";
          // step2: play animations
          var shot_name = 'shot-' + this._idx;
          var shot = this._ss_anim.clips.find(function (clip) {
            return clip.name === shot_name;
          });
          if (shot) this._ss_anim.play(shot_name);else this.onStepStart();
        };
        _proto.onStepStart = function onStepStart() {
          this._toggleStep(true);
          var opa = this._step.getComponent(UIOpacity);
          opa.opacity = 0;
          this.scheduleOnce(function () {
            return opa.opacity = 255;
          });
          var anim = this._step.getComponent(Animation);
          anim.once(FINISHED, this.onStepOver, this);
          anim.play();
        };
        _proto.onStepOver = function onStepOver() {
          if (this._idx === 1) this._toggleSkip(true);
          this._toggleNext(true);
        };
        _proto._toggleNext = function _toggleNext(show) {
          this.btnNext.active = show;
          return this;
        };
        _proto._adapt = function _adapt() {
          var step10 = this.steps.getChildByName("step-10");
          var key = sys.isMobile ? 'mb' : 'pc';
          step10.children.forEach(function (child) {
            var pad = child.getChildByName('pad');
            if (pad) pad.active = child.name.includes(key);
          });
        };
        _proto._toggleSkip = function _toggleSkip(show) {
          this.btnSkip.active = show;
          return this;
        };
        _proto._toggleStep = function _toggleStep(show) {
          var step = this._step;
          if (step) step.active = show;
          return this;
        };
        _createClass(GuidePanel, [{
          key: "_darkenMask",
          set: function set(arg) {
            this.mask.getComponent(UIOpacity).opacity = arg ? 232 : 0;
          }
        }, {
          key: "_step",
          get: function get() {
            return this.steps.getChildByName('step-' + this._idx);
          }
        }]);
        return GuidePanel;
      }(Mediator), (_descriptor$b = _applyDecoratedDescriptor(_class2$b.prototype, "steps", [_dec2$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$a = _applyDecoratedDescriptor(_class2$b.prototype, "screenshot", [_dec3$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$8 = _applyDecoratedDescriptor(_class2$b.prototype, "overTip", [_dec4$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$6 = _applyDecoratedDescriptor(_class2$b.prototype, "mask", [_dec5$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$5 = _applyDecoratedDescriptor(_class2$b.prototype, "btnNext", [_dec6$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$4 = _applyDecoratedDescriptor(_class2$b.prototype, "btnSkip", [_dec7$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$3 = _applyDecoratedDescriptor(_class2$b.prototype, "langChoose", [_dec8$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8$3 = _applyDecoratedDescriptor(_class2$b.prototype, "skipDialog", [_dec9$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9$2 = _applyDecoratedDescriptor(_class2$b.prototype, "title", [_dec10$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10$2 = _applyDecoratedDescriptor(_class2$b.prototype, "labelStep", [_dec11$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11$2 = _applyDecoratedDescriptor(_class2$b.prototype, "langSprites", [_dec12$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2$b)) || _class$e);
      var FINISHED = Animation.EventType.FINISHED;
      var TOTAL_STEPS = 10;
      cclegacy._RF.pop();
      var _dec$f, _dec2$c, _dec3$b, _dec4$9, _dec5$7, _dec6$6, _class$f, _class2$c, _descriptor$c, _descriptor2$b, _descriptor3$9, _descriptor4$7, _descriptor5$6;
      cclegacy._RF.push({}, "14b7eLRw6JJQoNimwvalatR", "intro-panel", undefined);
      var ccclass$f = _decorator.ccclass,
        property$9 = _decorator.property;
      var IntroPanel = (_dec$f = ccclass$f('cocosmos.intro-panel'), _dec2$c = property$9(LabelI18n), _dec3$b = property$9(ItemList), _dec4$9 = property$9(ItemList), _dec5$7 = property$9(Node), _dec6$6 = property$9(Node), _dec$f(_class$f = (_class2$c = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(IntroPanel, _Mediator);
        function IntroPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "title", _descriptor$c, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainList", _descriptor2$b, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardList", _descriptor3$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrowLeft", _descriptor4$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrowRight", _descriptor5$6, _assertThisInitialized(_this));
          _this._lastName = void 0;
          _this._mainData = [];
          _this._descData = [];
          _this._astData = [];
          _this._phyData = [];
          _this._strData = [];
          _this._cards = [];
          _this._showAt = 0;
          _this._assembler = [];
          return _this;
        }
        var _proto = IntroPanel.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
          this._listen();
        };
        _proto.start = function start() {};
        _proto._init = function _init() {
          var _this2 = this;
          this.on(UI.LANGUAGE, function () {
            return _this2._updateListLayout(true);
          });
        };
        _proto._updateListLayout = function _updateListLayout(adjust) {
          var _this3 = this;
          if (adjust) {
            this.mainList.getComponentsInChildren(IntroLine).forEach(function (line) {
              return line.adjustHeight();
            });
            this.cardList.getComponentsInChildren(IntroLine).forEach(function (line) {
              return line.adjustHeight();
            });
          }
          this.scheduleOnce(function () {
            _this3.mainList.getComponent(Layout).updateLayout();
            _this3.cardList.getComponent(Layout).updateLayout();
          }, 0.1);
        };
        _proto._listen = function _listen() {
          this.on(Transform$3.ZOOM_START, this.onVisitStart);
          this.on(UI.FULL_SCREEN, this.onFullScreen);
        };
        _proto.onEnable = function onEnable() {
          this._updateData();
        };
        _proto.onClickLeft = function onClickLeft() {
          this._showDataAt(this._showAt - 1);
        };
        _proto.onClickRight = function onClickRight() {
          this._showDataAt(this._showAt + 1);
        };
        _proto.onVisitStart = function onVisitStart() {
          this.notify(UI.Panels.CLOSE, this.node.name);
        };
        _proto.onFullScreen = function onFullScreen() {
          if (this.node.active) this.notify(UI.Panels.CLOSE, this.node.name, true);
        };
        _proto.clickFold = function clickFold() {
          this.notify(UI.Panels.CLOSE, this.node.name, true);
        };
        _proto._updateData = function _updateData() {
          var _visit$center = visit.center,
            cat = _visit$center.cat,
            config = _visit$center.config,
            inStar = visit.inStar,
            inBlackhole = visit.inBlackhole,
            centerName = planetary.centerName,
            unbelt = planetary.unbelt;
          if (centerName === this._lastName) return;
          // Clear and Reset
          this._lastName = centerName;
          this._cards.length = this._mainData.length = this._descData.length = this._astData.length = this._phyData.length = this._strData.length = 0;
          // Main Parameters
          this._assembler = this._mainData;
          if (inStar || inBlackhole) {
            var _ref = config,
              diam = _ref.diam,
              ab = _ref.ab,
              cst = _ref.cst,
              dist = _ref.dist,
              mag = _ref.mag,
              abs = _ref.abs,
              ra = _ref.ra,
              dec = _ref.dec,
              brc = _ref.brc,
              brs = _ref.brs,
              lon = _ref.lon,
              spec = _ref.spec,
              lum = _ref.lum,
              cls = _ref.cls,
              mul = _ref.mul,
              desc = _ref.desc,
              physical = _ref.physical;
            var _ref2 = config,
              date = _ref2.date,
              orbiter = _ref2.orbiter,
              swz = _ref2.swz,
              csr = _ref2.csr,
              evl = _ref2.evl;
            var _ref3 = visit.center.precise.config,
              fid = _ref3.fid,
              HD = _ref3.HD,
              HIP = _ref3.HIP;
            var _ref4 = visit.center.precise.belong,
              name = _ref4.name,
              cname = _ref4.cname;
            var rat = 1e8;
            this._add('categories@' + cat, 'cat')._add(inStar ? ab : null, 'ab', {
              en: "" + cst + ab,
              cn: "" + cname + ab
            })._add(inStar ? fid : null, 'fid')._add(HD, 'hd')._add(HIP, 'hip')._add(cst, 'cst', {
              en: name,
              cn: cname
            })._add(inStar ? diam : null, 'diam', (diam * 1e8).toFixed(0) + " km")._add(swz, 'swz', swz.toFixed(0) + " km")._add(csr, 'csr', (csr * 1e8).toFixed(0) + " km")._add(dist, 'dist', {
              en: dist + " lightyear",
              cn: dist + " \u5149\u5E74"
            })._add(spec, 'spec')._add(date, 'date')._add(brc, 'brc')._add(brs, 'brs');
            // Other Data
            this._reloadDesc(desc);
            this._reloadAst(orbiter, rat);
            this._reloadAst4Star(mag, abs, ra, dec, lon, lum, cls, mul, evl);
            this._reloadPhy(physical);
            this._reloadStr();
          } else if (unbelt) {
            var nick = config.nick,
              _diam = config.diam,
              _date = config.date,
              _desc = config.desc,
              disc = config.disc,
              _orbiter = config.orbiter,
              _physical = config.physical;
            var _ref5 = config,
              belongs = _ref5.belongs,
              seq = _ref5.seq,
              sphere = _ref5.sphere,
              aid = _ref5.aid;
            var _ref6 = config,
              ksn = _ref6.ksn;
            var _rat = cat === 'satellite' ? 1e6 : 1e8;
            this._add('categories@' + cat, 'cat')._add(nick, 'nick')._add(belongs, 'belongs')._add(seq, 'seq')._add(aid, 'aid')._add(_diam, 'diam', (_diam * _rat).toFixed(0) + " km")._add(sphere, 'sphere')._add(_date, 'date')._add(disc, 'disc')._add(ksn, 'ksn');
            // Other Data
            this._reloadDesc(_desc);
            this._reloadAst(_orbiter, _rat);
            this._reloadPhy(_physical);
            this._reloadStr();
          } else {
            var _configs$centerName, _visit$center2;
            var _ref7 = (_configs$centerName = (_visit$center2 = visit.center) == null ? void 0 : _visit$center2.configs[centerName]) != null ? _configs$centerName : {},
              max = _ref7.max,
              total = _ref7.total,
              weight = _ref7.weight,
              distances = _ref7.distances,
              _desc2 = _ref7.desc;
            this._add('categories@' + cat, 'cat')._add(max, 'max')._add(total, 'total')._add(weight, 'weight')._add(distances, 'distances');
            // Other Data
            this._reloadDesc(_desc2);
            this._reloadStr();
          }
          this._updateRender();
        };
        _proto._reloadDesc = function _reloadDesc(desc) {
          this._descData.push({
            tag: 'overview'
          });
          if (notEmptyArr(desc)) {
            this._assembler = this._descData;
            this._cards.push(this._descData);
            var key = desc[0],
              _num = desc[1];
            for (var i = 0; i < _num; i++) {
              this._descData.push({
                value: key + '_' + i
              });
            }
          }
        };
        _proto._reloadAst = function _reloadAst(orbiter, rat) {
          this._astData.push({
            tag: 'astronomical'
          });
          if (!orbiter) return;
          var orbital = orbiter.orbital,
            rotate = orbiter.rotate;
          this._assembler = this._astData;
          this._cards.push(this._astData);
          if (orbital) {
            var radius = orbital.radius,
              lon = orbital.lon,
              obliquity = orbital.obliquity,
              eccentricity = orbital.eccentricity,
              period = orbital.period;
            this._add(radius, 'radius', (radius * rat).toFixed(0) + " km")._add(lon, 'lon', lon + "\xB0")._add(obliquity, 'obl', obliquity + "\xB0")._add(eccentricity, 'ecc')._add(period, 'prd');
          }
          if (rotate) {
            var nra = rotate.nra,
              nd = rotate.nd,
              _obliquity = rotate.obliquity,
              _period = rotate.period;
            this._add(nra, 'nra', nra + "\xB0")._add(nd, 'nd', nd + "\xB0")._add(_obliquity, '_obl', _obliquity + "\xB0")._add(_period, '_prd');
          }
        };
        _proto._reloadAst4Star = function _reloadAst4Star(mag, abs, ra, dec, lon, lum, cls, mul, evl) {
          this._astData.push({
            tag: 'astronomical'
          });
          this._assembler = this._astData;
          this._cards.push(this._astData);
          this._add(mag, 'mag')._add(isArr(abs) ? abs.join(' + ') : abs, 'abs')._add(ra, 'ra')._add(dec, 'dec')._add(lon, 'lon')._add(evl, 'evl')._add(lum ? 'lumins@' + lum : null, 'lum')._add(cls ? 'specs@' + cls : null, 'cls');
          if (mul) {
            var _mul$split = mul.split('&'),
              en = _mul$split[0],
              cn = _mul$split[1];
            this._add(mul, 'mul', {
              en: en,
              cn: cn
            });
          }
        };
        _proto._reloadPhy = function _reloadPhy(physical) {
          var _this4 = this;
          this._phyData.push({
            tag: 'physical'
          });
          if (physical) {
            this._assembler = this._phyData;
            this._cards.push(this._phyData);
            var arr = physical.split(',');
            arr.forEach(function (pair) {
              var _pair$split = pair.split(':'),
                key = _pair$split[0],
                value = _pair$split[1];
              _this4._add(key, key, value);
            });
          }
        };
        _proto._reloadStr = function _reloadStr() {
          this._assembler = this._strData;
          this._cards.push(this._strData);
          this._strData.push({
            tag: 'structure'
          }, {
            value: 'todos@dev'
          });
        };
        _proto._add = function _add(value, tag, decoValue) {
          if (!isNullish(value)) this._assembler.push({
            tag: tag,
            value: decoValue != null ? decoValue : value + ''
          });
          return this;
        };
        _proto._updateRender = function _updateRender() {
          this.title.string = 'celestial@' + this._lastName;
          this.mainList.updateList(this._mainData);
          this._showDataAt(0);
          this._updateListLayout(false);
        };
        _proto.onHide = function onHide() {
          this.node.removeFromParent();
        };
        _proto._showDataAt = function _showDataAt(idx) {
          this.arrowLeft.active = idx > 0;
          this.arrowRight.active = idx < this._cards.length - 1;
          var data = this._cards[idx];
          this.cardList.updateList(data);
          this._showAt = idx;
        };
        return IntroPanel;
      }(Mediator), (_descriptor$c = _applyDecoratedDescriptor(_class2$c.prototype, "title", [_dec2$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$b = _applyDecoratedDescriptor(_class2$c.prototype, "mainList", [_dec3$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$9 = _applyDecoratedDescriptor(_class2$c.prototype, "cardList", [_dec4$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$7 = _applyDecoratedDescriptor(_class2$c.prototype, "arrowLeft", [_dec5$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$6 = _applyDecoratedDescriptor(_class2$c.prototype, "arrowRight", [_dec6$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$c)) || _class$f);
      var Transform$3 = View.Transform;
      cclegacy._RF.pop();
      var _dec$g, _dec2$d, _dec3$c, _dec4$a, _dec5$8, _dec6$7, _dec7$5, _dec8$4, _dec9$4, _dec10$3, _dec11$3, _dec12$3, _dec13$2, _dec14$2, _dec15$2, _dec16$2, _dec17$2, _class$g, _class2$d, _descriptor$d, _descriptor2$c, _descriptor3$a, _descriptor4$8, _descriptor5$7, _descriptor6$5, _descriptor7$4, _descriptor8$4, _descriptor9$3, _descriptor10$3, _descriptor11$3, _descriptor12$2, _descriptor13$2, _descriptor14$2, _descriptor15$2, _descriptor16$2, _Ranges;
      cclegacy._RF.push({}, "b3adaVu5K5NiLXcoZqhEWsf", "lens-panel", undefined);
      var ccclass$g = _decorator.ccclass,
        property$a = _decorator.property;
      var LensPanel = (_dec$g = ccclass$g('cocosmos.lens-panel'), _dec2$d = property$a(Toggle), _dec3$c = property$a(Toggle), _dec4$a = property$a(Toggle), _dec5$8 = property$a(Toggle), _dec6$7 = property$a(Toggle), _dec7$5 = property$a(Toggle), _dec8$4 = property$a(Toggle), _dec9$4 = property$a(Slider), _dec10$3 = property$a(Slider), _dec11$3 = property$a(Slider), _dec12$3 = property$a(Slider), _dec13$2 = property$a(Slider), _dec14$2 = property$a(Sprite), _dec15$2 = property$a(Sprite), _dec16$2 = property$a(Sprite), _dec17$2 = property$a(Node), _dec$g(_class$g = (_class2$d = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(LensPanel, _Mediator);
        function LensPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "autoHover", _descriptor$d, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoPitch", _descriptor2$c, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoZoom", _descriptor3$a, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lensLock", _descriptor4$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showLensVel", _descriptor5$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showEscVel", _descriptor6$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showCivLvl", _descriptor7$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "azSlider", _descriptor8$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haSlider", _descriptor9$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haMinSlider", _descriptor10$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haMaxSlider", _descriptor11$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomSlider", _descriptor12$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor13$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "confirm", _descriptor14$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cancel", _descriptor15$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor16$2, _assertThisInitialized(_this));
          _this._lines = new Map();
          _this._sliders = new Map();
          return _this;
        }
        var _proto = LensPanel.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto.onEnable = function onEnable() {
          this.changeSpriteLang();
        };
        _proto.start = function start() {
          this._setDefaults();
        };
        _proto._init = function _init() {
          var _this2 = this;
          this.content.children.forEach(function (line) {
            var _line$getComponentInC;
            var toggle = line.getComponentInChildren(Toggle);
            _this2._lines.set(line, {
              toggle: toggle,
              unchecked: toggle.getComponent(Sprite),
              titles: toggle.getComponentsInChildren(Label),
              sliders: line.getComponentsInChildren(Slider),
              block: (_line$getComponentInC = line.getComponentInChildren(BlockInputEvents)) != null ? _line$getComponentInC : null
            });
          });
          this.content.getComponentsInChildren(Slider).forEach(function (slider) {
            _this2._sliders.set(slider, {
              bar: slider.node.getChildByName('Bar').getComponent(Sprite),
              sprites: slider.getComponentsInChildren(Sprite),
              value: slider.getComponentInChildren(Label),
              range: Ranges[slider.node.name]
            });
          });
        };
        _proto._setDefaults = function _setDefaults() {
          var _this3 = this;
          this.content.getComponentsInChildren(Toggle).forEach(function (toggle) {
            if (toggle.node.name !== 'Toggle') {
              toggle.setIsCheckedWithoutNotify(ui.getStateByName(toggle.node.name));
              toggle.node.name += ':check';
            }
          });
          this.content.getComponentsInChildren(Toggle).forEach(function (toggle) {
            return _this3.toggleUsage(toggle);
          });
          this.content.getComponentsInChildren(Slider).forEach(function (slider) {
            slider.progress = _this3._sliders.get(slider).range[3];
            _this3.slideDegree(slider);
          });
          this.changeSpriteLang();
        };
        _proto.changeSpriteLang = function changeSpriteLang() {
          var language = ui.language,
            POPS = Res.Sheets.UI_POPS,
            en = language === 'en';
          changeFrame(this.title, POPS, 'en', en);
          changeFrame(this.confirm, POPS, 'en', en);
          changeFrame(this.cancel, POPS, 'en', en);
        };
        _proto.toggleUsage = function toggleUsage(tgl) {
          var _this4 = this;
          var checked = tgl.isChecked;
          var line = tgl.node.parent;
          var _this$_lines$get = this._lines.get(line),
            unchecked = _this$_lines$get.unchecked,
            titles = _this$_lines$get.titles,
            sliders = _this$_lines$get.sliders,
            block = _this$_lines$get.block;
          unchecked.enabled = !checked;
          titles.forEach(function (title) {
            return title.color = checked ? Color.WHITE : Color.GRAY;
          });
          sliders.forEach(function (slider) {
            var _this4$_sliders$get = _this4._sliders.get(slider),
              sprites = _this4$_sliders$get.sprites,
              value = _this4$_sliders$get.value;
            sprites.forEach(function (sprite) {
              return changeFrame(sprite, Res.Sheets.UI_POPS, 'dis', !checked);
            });
            value.color = checked ? Color.WHITE : Color.GRAY;
          });
          if (block) block.enabled = !checked;
        };
        _proto.slideDegree = function slideDegree(slider) {
          var _this$_sliders$get = this._sliders.get(slider),
            bar = _this$_sliders$get.bar,
            value = _this$_sliders$get.value,
            _this$_sliders$get$ra = _this$_sliders$get.range,
            unit = _this$_sliders$get$ra[2];
          var v = Math.round(this._getValue(slider));
          value.string = (v >= 0 ? '+' : '') + v.toFixed(0) + unit;
          bar.fillRange = slider.progress;
        };
        _proto._getValue = function _getValue(slider) {
          var _Ranges$slider$node$n = Ranges[slider.node.name],
            min = _Ranges$slider$node$n[0],
            max = _Ranges$slider$node$n[1];
          return Math.lerp(min, max, slider.progress);
        };
        _proto.onApply = function onApply() {
          var params = {
            hover: this.autoHover.isChecked,
            pitch: this.autoPitch.isChecked,
            zoom: this.autoZoom.isChecked,
            lock: this.lensLock.isChecked,
            showLensVel: this.showLensVel.isChecked,
            showEscVel: this.showEscVel.isChecked,
            showCivLvl: this.showCivLvl.isChecked
          };
          if (params.hover) params.az = this._getValue(this.azSlider);
          if (params.pitch) {
            params.ha = this._getValue(this.haSlider);
            params.haRange = [this._getValue(this.haMinSlider), this._getValue(this.haMaxSlider)];
          }
          if (params.zoom) params.pow10 = this._getValue(this.zoomSlider) / 100;
          this.notify(UI.LENS_PARAMS, params);
          this.notify(UI.Panels.CLOSE, this.node.name);
        };
        _proto.onClose = function onClose() {
          this.notify(UI.Panels.CLOSE, this.node.name);
        };
        _proto.onHide = function onHide() {
          this.node.removeFromParent();
        };
        return LensPanel;
      }(Mediator), (_descriptor$d = _applyDecoratedDescriptor(_class2$d.prototype, "autoHover", [_dec2$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$c = _applyDecoratedDescriptor(_class2$d.prototype, "autoPitch", [_dec3$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$a = _applyDecoratedDescriptor(_class2$d.prototype, "autoZoom", [_dec4$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$8 = _applyDecoratedDescriptor(_class2$d.prototype, "lensLock", [_dec5$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$7 = _applyDecoratedDescriptor(_class2$d.prototype, "showLensVel", [_dec6$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$5 = _applyDecoratedDescriptor(_class2$d.prototype, "showEscVel", [_dec7$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$4 = _applyDecoratedDescriptor(_class2$d.prototype, "showCivLvl", [_dec8$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8$4 = _applyDecoratedDescriptor(_class2$d.prototype, "azSlider", [_dec9$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9$3 = _applyDecoratedDescriptor(_class2$d.prototype, "haSlider", [_dec10$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10$3 = _applyDecoratedDescriptor(_class2$d.prototype, "haMinSlider", [_dec11$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11$3 = _applyDecoratedDescriptor(_class2$d.prototype, "haMaxSlider", [_dec12$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12$2 = _applyDecoratedDescriptor(_class2$d.prototype, "zoomSlider", [_dec13$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13$2 = _applyDecoratedDescriptor(_class2$d.prototype, "title", [_dec14$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14$2 = _applyDecoratedDescriptor(_class2$d.prototype, "confirm", [_dec15$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15$2 = _applyDecoratedDescriptor(_class2$d.prototype, "cancel", [_dec16$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16$2 = _applyDecoratedDescriptor(_class2$d.prototype, "content", [_dec17$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$d)) || _class$g);
      var Ranges = (_Ranges = {}, _Ranges['旋转'] = [-180, 180, '°/s', 0.5], _Ranges['推拉'] = [-50, 50, 'x0.01/s', 0.5], _Ranges['俯仰'] = [-30, 30, '°/s', 0.5], _Ranges['最高'] = [-80, 80, '°', 0.7], _Ranges['最低'] = [-80, 80, '°', 0.4], _Ranges);
      cclegacy._RF.pop();
      var _dec$h, _dec2$e, _dec3$d, _dec4$b, _dec5$9, _dec6$8, _dec7$6, _dec8$5, _dec9$5, _dec10$4, _dec11$4, _dec12$4, _dec13$3, _dec14$3, _dec15$3, _class$h, _class2$e, _descriptor$e, _descriptor2$d, _descriptor3$b, _descriptor4$9, _descriptor5$8, _descriptor6$6, _descriptor7$5, _descriptor8$5, _descriptor9$4, _descriptor10$4, _descriptor11$4, _descriptor12$3, _descriptor13$3, _descriptor14$3;
      cclegacy._RF.push({}, "c506fZ07INA67VVgp1+o0j6", "visit-panel", undefined);
      var ccclass$h = _decorator.ccclass,
        property$b = _decorator.property;
      var VisitPanel = (_dec$h = ccclass$h('cocosmos.visit-panel'), _dec2$e = property$b({
        group: 'TabSort',
        type: Sprite
      }), _dec3$d = property$b({
        group: 'TabSort',
        type: ScrollView
      }), _dec4$b = property$b({
        group: 'TabSort',
        type: Node
      }), _dec5$9 = property$b({
        group: 'TabSort',
        type: Prefab
      }), _dec6$8 = property$b({
        group: 'TabSort',
        type: Node
      }), _dec7$6 = property$b({
        group: 'Content',
        type: Layout
      }), _dec8$5 = property$b({
        group: 'Content',
        type: ScrollView
      }), _dec9$5 = property$b({
        group: 'Content',
        type: JsonAsset
      }), _dec10$4 = property$b({
        group: 'Content',
        type: Node
      }), _dec11$4 = property$b({
        group: 'Content',
        type: Toggle
      }), _dec12$4 = property$b({
        group: 'Dialog',
        type: Node
      }), _dec13$3 = property$b({
        group: 'Dialog',
        type: LabelI18n
      }), _dec14$3 = property$b({
        group: 'Dialog',
        type: Sprite
      }), _dec15$3 = property$b({
        group: 'Dialog',
        type: Label
      }), _dec$h(_class$h = (_class2$e = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(VisitPanel, _Mediator);
        function VisitPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "title", _descriptor$e, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollTab", _descriptor2$d, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabList", _descriptor3$b, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tabCardTemplate", _descriptor4$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sortList", _descriptor5$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "contentList", _descriptor6$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollContent", _descriptor7$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "json", _descriptor8$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipDev", _descriptor9$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "visible", _descriptor10$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popDialog", _descriptor11$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tipDest", _descriptor12$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cancel", _descriptor13$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cd", _descriptor14$3, _assertThisInitialized(_this));
          _this._notification = null;
          _this._into_cn = null;
          _this._tabs = [];
          _this._configs = {};
          _this._config = null;
          _this._cards_pool = [];
          _this._sorts = void 0;
          _this._tab_checked = void 0;
          _this._sort_checked = void 0;
          _this._cd = 3;
          _this._dest = null;
          _this._anim = null;
          return _this;
        }
        var _proto = VisitPanel.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto.onEnable = function onEnable() {
          this.changeSpriteLang();
          this.scrollTab.scrollToLeft();
          this.popDialog.active = false;
        };
        _proto.start = function start() {
          this._setDefaults();
        };
        _proto._init = function _init() {
          this._tabs = this.tabList.getComponentsInChildren(Toggle);
          this._tab_checked = this._tabs.head;
          this._configs = this.json.json;
          this._sorts = this.sortList.getComponentsInChildren(Toggle);
          this._anim = this.getComponent(Animation);
          this.on(UI.Popups.VISIT_CD, this.onPopVisitCD);
          this.popDialog.active = false;
        };
        _proto.onPopVisitCD = function onPopVisitCD(name, into) {
          var _this2 = this;
          this._dest = {
            name: name,
            into: into
          };
          this.unscheduleAllCallbacks();
          this.popDialog.active = true;
          this._anim.play('visit-pop-out');
          this._cd = COUNT_DOWN;
          this.cd.string = "(" + this._cd + "s)";
          this.tipDest.string = "celestial@" + name;
          this.schedule(function () {
            return _this2._countDown();
          }, 1);
        };
        _proto._countDown = function _countDown() {
          this._cd--;
          this.cd.string = "(" + this._cd + "s)";
          if (this._cd <= 0) {
            this.unscheduleAllCallbacks();
            this.onClose(false);
          }
        };
        _proto.toggleTab = function toggleTab(tab) {
          changeFrame(this._tab_checked.getComponent(Sprite), UI_POPS, 'dis', true);
          changeFrame(tab.getComponent(Sprite), UI_POPS, 'dis', false);
          this._tab_checked = tab;
          this._updateTab();
        };
        _proto.toggleVisible = function toggleVisible(tgl) {
          var visible = tgl.isChecked;
          changeFrame(tgl.getComponent(Sprite), UI_POPS, 'dis', !visible);
          this._updateVisible(visible);
        };
        _proto._setDefaults = function _setDefaults() {
          this._tabs.forEach(function (tab, idx) {
            return changeFrame(tab.getComponent(Sprite), UI_POPS, 'dis', idx !== 0);
          });
          this.scrollTab.scrollToLeft();
          this._updateTab();
        };
        _proto.changeSpriteLang = function changeSpriteLang() {
          var language = ui.language,
            en = language === 'en';
          changeFrame(this.cancel, UI_POPS, 'en', en);
          changeFrame(this.title, UI_POPS, 'en', en);
        };
        _proto.toggleSort = function toggleSort(sort) {
          changeFrame(this._sort_checked.getComponent(Sprite), UI_POPS, 'dis', true);
          changeFrame(sort.getComponent(Sprite), UI_POPS, 'dis', false);
          this._sort_checked = sort;
          this._updateSort();
        };
        _proto.onClose = function onClose(clear) {
          if (clear === void 0) {
            clear = true;
          }
          if (clear) this._dest = null;
          this.notify(UI.Panels.CLOSE, this.node.name);
        };
        _proto.onHide = function onHide() {
          if (notEmpty(this._dest)) {
            var _this$_dest = this._dest,
              name = _this$_dest.name,
              _into2 = _this$_dest.into;
            if (LogProxy.PRINT_VISIT) console.info('=>', UI.VISIT, name, _into2);
            core.notify(UI.VISIT, name, _into2);
          }
          this.node.removeFromParent();
        };
        _proto.onCancel = function onCancel() {
          this.unscheduleAllCallbacks();
          this._anim.play('visit-pop-in');
          this._dest = null;
        };
        _proto.onPopIn = function onPopIn() {
          this.popDialog.active = false;
        };
        _proto._updateTab = function _updateTab() {
          var into = this._into;
          // console.log('tab by:', into);
          var todo = TODO.contains(into);
          this.tipDev.active = todo;
          this.sortList.active = this.visible.node.active = !todo;
          if (todo) return this._freeCards();
          var config = this._configs[into != null ? into : ''];
          if (config) {
            this._config = config;
            this._resetSortToggles();
            this._resetVisible();
            this._updateSort();
          }
        };
        _proto._updateVisible = function _updateVisible(visible) {
          this.notify(this._notification, visible);
          this.notify(UI.VISIBLE, this._into_cn, visible, true);
        };
        _proto._resetSortToggles = function _resetSortToggles() {
          this._sorts.forEach(function (sort) {
            return sort.node.active = false;
          });
          this._sort_checked = this._sorts.head;
          for (var i = 0; i < this._config.sorts.length; i++) {
            var by = this._config.sorts[i].by;
            var _sort = this._sorts[i];
            _sort.node.active = true;
            var sprite = _sort.getComponent(Sprite);
            var head = i === 0;
            sprite.spriteFrame = core.res.getSheetFrame(UI_POPS, "sort_" + by + (head ? '' : '-dis'));
            _sort.setIsCheckedWithoutNotify(head);
            _sort.node.name = by;
          }
        };
        _proto._resetVisible = function _resetVisible() {
          var _Dict$_into, _ref, _ref2, _solar$getStateByName;
          var _into = this._into;
          this._notification = (_Dict$_into = Dict[_into]) != null ? _Dict$_into : '';
          this._into_cn = this._notification.split('.').tail;
          var visible = (_ref = (_ref2 = (_solar$getStateByName = solar.getStateByName(this._into_cn)) != null ? _solar$getStateByName : planetary.getStateByName(this._into_cn)) != null ? _ref2 : constStars.getStateByName(this._into_cn)) != null ? _ref : deepGalaxy.getStateByName(this._into_cn);
          this.visible.setIsCheckedWithoutNotify(visible);
          changeFrame(this.visible.getComponent(Sprite), UI_POPS, 'dis', !visible);
        };
        _proto._updateSort = function _updateSort() {
          // console.info('sort by:', this._sort);
          var _this$_config = this._config,
            icons = _this$_config.icons,
            sorts = _this$_config.sorts,
            _into = this._into;
          var idx = this._sort_checked.node.getSiblingIndex();
          var _sorts$idx = sorts[idx],
            by = _sorts$idx.by,
            cards = _sorts$idx.cards;
          var useRank = cards.length <= 1;
          this._freeCards();
          for (var _iterator = _createForOfIteratorHelperLoose(cards), _step; !(_step = _iterator()).done;) {
            var card = _step.value;
            var indexes = card.indexes,
              title = card.title;
            var tabCard = this._claim();
            var dataList = indexes.map(function (i, idx) {
              return {
                into: _into,
                name: icons[i],
                pop: 'visit-cd',
                tag: useRank && idx <= 4 ? 'rank_' + idx : ''
              };
            });
            this.contentList.node.addChild(tabCard.node);
            var ttl = title ? title.includes('@') ? title : "sorts@" + title : "sorts@" + by;
            tabCard.updateData(ttl, dataList);
          }
          this.scrollContent.scrollToTop();
        };
        _proto._claim = function _claim() {
          var _this$_cards_pool$pop;
          return (_this$_cards_pool$pop = this._cards_pool.pop()) != null ? _this$_cards_pool$pop : instantiate(this.tabCardTemplate).getComponent(TabCard);
        };
        _proto._freeCards = function _freeCards() {
          var _this3 = this;
          this.contentList.getComponentsInChildren(TabCard).forEach(function (card) {
            card.clear();
            card.node.removeFromParent();
            _this3._cards_pool.push(card);
          });
        };
        _createClass(VisitPanel, [{
          key: "_into",
          get: function get() {
            var _this$_tab_checked;
            return (_this$_tab_checked = this._tab_checked) == null || (_this$_tab_checked = _this$_tab_checked.node) == null ? void 0 : _this$_tab_checked.name;
          }
        }, {
          key: "_sort",
          get: function get() {
            var _this$_sort_checked;
            return (_this$_sort_checked = this._sort_checked) == null || (_this$_sort_checked = _this$_sort_checked.node) == null ? void 0 : _this$_sort_checked.name;
          }
        }]);
        return VisitPanel;
      }(Mediator), (_descriptor$e = _applyDecoratedDescriptor(_class2$e.prototype, "title", [_dec2$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$d = _applyDecoratedDescriptor(_class2$e.prototype, "scrollTab", [_dec3$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$b = _applyDecoratedDescriptor(_class2$e.prototype, "tabList", [_dec4$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$9 = _applyDecoratedDescriptor(_class2$e.prototype, "tabCardTemplate", [_dec5$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$8 = _applyDecoratedDescriptor(_class2$e.prototype, "sortList", [_dec6$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$6 = _applyDecoratedDescriptor(_class2$e.prototype, "contentList", [_dec7$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$5 = _applyDecoratedDescriptor(_class2$e.prototype, "scrollContent", [_dec8$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8$5 = _applyDecoratedDescriptor(_class2$e.prototype, "json", [_dec9$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9$4 = _applyDecoratedDescriptor(_class2$e.prototype, "tipDev", [_dec10$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10$4 = _applyDecoratedDescriptor(_class2$e.prototype, "visible", [_dec11$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11$4 = _applyDecoratedDescriptor(_class2$e.prototype, "popDialog", [_dec12$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12$3 = _applyDecoratedDescriptor(_class2$e.prototype, "tipDest", [_dec13$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13$3 = _applyDecoratedDescriptor(_class2$e.prototype, "cancel", [_dec14$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14$3 = _applyDecoratedDescriptor(_class2$e.prototype, "cd", [_dec15$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$e)) || _class$h);
      var UI_POPS = Res.Sheets.UI_POPS;
      var COUNT_DOWN = 3;
      var Solar$1 = UI.Solar,
        Local$1 = UI.Local,
        Stellar = UI.Stellar;
      var TODO = ['constellation', 'artificial', 'nebula', 'cluster', 'galaxy'];
      var Dict = {
        planet: Solar$1.PLANETS,
        satellite: Local$1.SATELLITES,
        dwarf: Solar$1.DWARFS,
        minor: Solar$1.MINORS,
        comet: Solar$1.COMETS,
        belts: Solar$1.BELTS,
        artificial: Local$1.ARTIFICIAL,
        // sun: Solar.SUN,
        star: Stellar.STARS,
        constellation: Stellar.CONSTS,
        nebula: Stellar.NEBULAS,
        cluster: Stellar.CLUSTERS,
        galaxy: Stellar.GALAXIES,
        blackhole: Stellar.BLACKHOLE
      };
      cclegacy._RF.pop();
      var _dec$i, _dec2$f, _class$i;
      cclegacy._RF.push({}, "faf21frv8hJb4tIoV5NV3qr", "relative-scalar", undefined);
      var ccclass$i = _decorator.ccclass,
        disallowMultiple = _decorator.disallowMultiple;
      var RelativeScalar = (_dec$i = ccclass$i('cocosmos.RelativeScalar'), _dec2$f = disallowMultiple(true), _dec$i(_class$i = _dec2$f(_class$i = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RelativeScalar, _Component);
        function RelativeScalar() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._scopeArgs = void 0;
          _this._scope = void 0;
          _this._loadTexTaskLaunched = false;
          _this._stellar = null;
          return _this;
        }
        var _proto = RelativeScalar.prototype;
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto.onDestroy = function onDestroy() {
          core.unload(this);
        };
        _proto.update = function update() {
          if (this._scope) this._scope.active = gizmos.showScopes;
        };
        _proto.onTick = function onTick(dt, tick) {
          this._updateTransform();
          this._checkPreloadTask();
        };
        _proto._init = function _init() {
          var _this$node$parent;
          var key = this.node.name.replace(' ', '');
          this._scopeArgs = CosmosProxy.Scopes[key];
          if (!this._scopeArgs) console.warn("scalar not found:", key);
          if (this._scopeArgs[3]) {
            this._scope = createNodeAt('Scope', LAYER_GIZMOS, this.node, core.res.getPrefab(Res.Prefabs.SCOPE));
          }
          this._stellar = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getChildByName(STELLAR);
          return this;
        };
        _proto._listen = function _listen() {
          core.on(Notifications.Time.TICK, this.onTick, this, -1);
        };
        _proto._checkPreloadTask = function _checkPreloadTask() {
          if (this._loadTexTaskLaunched) return;
          if (cosmos.pow10 + PRELOAD_TOLERANCE > this._scopeArgs[0]) {
            this._loadTexTaskLaunched = true;
            core.notify(Task.Load.APPROACH_SCOPE, this.node.name);
          }
        };
        _proto._updateTransform = function _updateTransform() {
          var _this$_scopeArgs = this._scopeArgs,
            from = _this$_scopeArgs[0],
            to = _this$_scopeArgs[1],
            real = _this$_scopeArgs[2],
            pow10 = cosmos.pow10;
          var activated = this._handleSpecialActive(from < pow10 && pow10 < to);
          // const activated = true; // BLACKHOLE
          this.node.active = activated;
          if (activated) {
            this._updateScale(real - pow10);
            this._updatePosition();
          }
        };
        _proto._handleSpecialScale = function _handleSpecialScale(scale) {
          return this.node.name === STELLAR ? Math.min(1, scale) : scale;
        };
        _proto._handleSpecialActive = function _handleSpecialActive(active) {
          var inSolar = visit.inSolar,
            inStellar = visit.inStellar,
            name = this.node.name;
          if (inSolar && name === SPECIFIC) return false;else if (inStellar && [HELIO, SOLAR$1, PLANETARY].contains(name)) return false;else return active;
        };
        _proto._updateScale = function _updateScale(exp) {
          var scale = this._handleSpecialScale(Math.pow(10, exp));
          this.node.setWorldScale(scale, scale, scale);
        };
        _proto._updatePosition = function _updatePosition() {
          var center = visit.center,
            inPlanetary = visit.inPlanetary,
            inSatellite = visit.inSatellite,
            inSolar = visit.inSolar,
            inStellar = visit.inStellar;
          if (!center) return;
          var _this$node = this.node,
            myScale = _this$node.worldScale.x,
            name = _this$node.name;
          switch (true) {
            case inSatellite:
              {
                if (name === PLANETARY) {
                  Vec3.multiplyScalar(v3a$4, center.node.position, -myScale);
                  this.node.setWorldPosition(v3a$4);
                } else if (name === SOLAR$1) {
                  var _ref = center,
                    belong = _ref.belong;
                  Vec3.multiplyScalar(v3a$4, belong.node.position, -myScale);
                  Vec3.scaleAndAdd(v3a$4, v3a$4, center.node.position, -myScale * POW_FACTOR_PS);
                  this.node.setWorldPosition(v3a$4);
                } else {
                  this.node.setWorldPosition(Vec3.ZERO);
                }
              }
              break;
            case inPlanetary:
              {
                if (name === PLANETARY) {
                  this.node.setWorldPosition(Vec3.ZERO);
                } else if (name === SOLAR$1) {
                  this.node.setWorldPosition(Vec3.multiplyScalar(v3a$4, center.node.position, -myScale));
                } else {
                  this.node.setWorldPosition(Vec3.ZERO);
                }
              }
              break;
            case inSolar:
              {
                this.node.setWorldPosition(Vec3.ZERO);
              }
              break;
            case inStellar:
              {
                var _stellar$refers, _stellar$refers2;
                var stellar = visit.transInfo.stellar;
                var _ref2 = center,
                  refer = _ref2.refer;
                var Ref = refer;
                // Issue:01 Hack temp存在一定是SPC_2_SPC, Facing结束temp=null
                // 则在Facing的1秒钟内保持refer是from
                if (stellar != null && (_stellar$refers = stellar.refers) != null && _stellar$refers.temp && stellar != null && (_stellar$refers2 = stellar.refers) != null && _stellar$refers2.from) {
                  var _stellar$refers3;
                  Ref = stellar == null || (_stellar$refers3 = stellar.refers) == null ? void 0 : _stellar$refers3.from;
                }
                if (!!Ref && name === STELLAR) {
                  var _this$_stellar$worldS, _this$_stellar;
                  // console.log(center.name, Ref.name);
                  var _scale = (_this$_stellar$worldS = (_this$_stellar = this._stellar) == null || (_this$_stellar = _this$_stellar.worldScale) == null ? void 0 : _this$_stellar.x) != null ? _this$_stellar$worldS : 1;
                  this.node.setWorldPosition(Vec3.multiplyScalar(v3a$4, Ref.position, -_scale));
                } else {
                  this.node.setWorldPosition(Vec3.ZERO);
                }
              }
              break;
            default:
              this.node.setWorldPosition(Vec3.ZERO);
          }
          // FORMER RESERVED!
          // if (name === SOLAR || name == PLANETARY) {
          //     if (inPlanetary) {
          //         this.node.setWorldPosition(name === SOLAR ?
          //             Vec3.multiplyScalar(v3a, center.node.position, -scale) : Vec3.ZERO);
          //     } else if (inSatellite) {
          //         if (name === SOLAR) {
          //             const { belong } = center as Dsm;
          //             Vec3.multiplyScalar(v3a, belong.node.position, -scale);
          //             Vec3.scaleAndAdd(v3a, v3a, center.node.position, -scale * POW_FACTOR);
          //         } else {
          //             Vec3.multiplyScalar(v3a, center.node.position, -scale)
          //         }
          //         this.node.setWorldPosition(v3a);
          //     } else {
          //         this.node.setWorldPosition(Vec3.ZERO);
          //     }
          // } else if (name === STELLAR) {
          //     const { stellar } = visit.transInfo;
          //     const { refer, scalar } = center as unknown as ICelestialSpecific;
          //     if (!!refer) {
          //         this.node.setWorldPosition(Vec3.multiplyScalar(v3a, refer.position, -scale));
          //     } else this.node.setWorldPosition(Vec3.ZERO);
          // } else {
          //     this.node.setWorldPosition(Vec3.ZERO);
          // }
        };

        return RelativeScalar;
      }(Component)) || _class$i) || _class$i);
      var STELLAR = SceneGraph.STELLAR,
        SOLAR$1 = SceneGraph.SOLAR,
        PLANETARY = SceneGraph.PLANETARY,
        SPECIFIC = SceneGraph.SPECIFIC,
        HELIO = SceneGraph.HELIO;
      var _CosmosProxy$Scopes = CosmosProxy.Scopes,
        Solar$2 = _CosmosProxy$Scopes.Solar,
        Planetary = _CosmosProxy$Scopes.Planetary,
        Stellar$1 = _CosmosProxy$Scopes.Stellar;
      var POW_FACTOR_PS = Math.pow(10, Planetary[2] - Solar$2[2]);
      var POW_FACTOR_PSS = Math.pow(10, Planetary[2] - Stellar$1[2]);
      var POW_FACTOR_SS = Math.pow(10, Solar$2[2] - Stellar$1[2]);
      var v3a$4 = new Vec3();
      var PRELOAD_TOLERANCE = 0.5;
      cclegacy._RF.pop();
      var _dec$j, _dec2$g, _dec3$e, _class$j, _class2$f, _descriptor$f, _descriptor2$e;
      cclegacy._RF.push({}, "38299FSPflJsp7AXEBjq5ki", "cosmos-controller", undefined);
      var group$3 = group$5,
        findComp$2 = findComp$4;
      var ccclass$j = _decorator.ccclass;
      var CosmosController = (_dec$j = ccclass$j('cocosmos.CosmosController'), _dec2$g = group$3('Views', '深空相机', Camera), _dec3$e = group$3('Views', '相对相机', Camera), _dec$j(_class$j = (_class2$f = /*#__PURE__*/function (_Controller) {
        _inheritsLoose(CosmosController, _Controller);
        function CosmosController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Controller.call.apply(_Controller, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "deepSkyCamera", _descriptor$f, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor2$e, _assertThisInitialized(_this));
          _this._transforming = false;
          _this._looking = false;
          _this._autoPow10 = null;
          _this._locked = false;
          _this._relCam = void 0;
          _this._solar = void 0;
          _this._stellar = void 0;
          _this._planetary = void 0;
          _this._specific = void 0;
          return _this;
        }
        var _proto = CosmosController.prototype;
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto.start = function start() {
          var _this$mainCamera, _this$deepSkyCamera, _this$_solar$sun;
          (_this$mainCamera = this.mainCamera) == null || (_this$mainCamera = _this$mainCamera.camera) == null || _this$mainCamera.initGeometryRenderer();
          (_this$deepSkyCamera = this.deepSkyCamera) == null || (_this$deepSkyCamera = _this$deepSkyCamera.camera) == null || _this$deepSkyCamera.initGeometryRenderer();
          (_this$_solar$sun = this._solar.sun) == null || _this$_solar$sun.loadReference(this._stellar.sun);
        };
        _proto.update = function update(dt) {
          this._relCam.autoAA2nd = cosmos.autoAA2nd;
          if (!this._transforming && isNum(this._autoPow10)) this.notify(UI.Zoom, this._autoPow10 * dt);
          this._relCam.interactable = !this._looking && !this._locked;
        };
        _proto.onZoomStart = function onZoomStart() {
          this._transforming = true;
          this._loadTransMediator();
          this._loadTransTarget();
          var _calcTransformParams = calcTransformParams(visit.transInfo, this._stellar.sun.node),
            bv = _calcTransformParams[0],
            az = _calcTransformParams[1],
            sign = _calcTransformParams[2];
          var pow10 = cosmos.pow10;
          // this._relCam.interactable = false;
          this._looking = true;
          this._relCam.scrollSmoothing = 1;
          this._relCam.azimuthAngle = az;
          this._relCam.heightAngle = sign * TRANS_HIGHT$1;
          cosmos.zoomToBy(Math.max(pow10, bv), TRANS_SPEED_ZOOM_UP, false, Transform$4.ZOOM_OVER);
        };
        _proto.onZoomOver = function onZoomOver() {
          this._checkUniqueSystemReload();
          this._startFacingTo();
        };
        _proto.onAngleChange = function onAngleChange(az, ha) {
          this._relCam.azimuthAngle = az;
          this._relCam.heightAngle = ha;
        };
        _proto.onLensPanelParams = function onLensPanelParams(params) {
          var lock = params.lock,
            az = params.az,
            ha = params.ha,
            pow10 = params.pow10,
            haRange = params.haRange;
          if (isNum(az) || isNum(ha)) {
            this._relCam.startAutoRotating(az != null ? az : 0, ha != null ? ha : 0, null, haRange);
          } else {
            this._relCam.stopAutoRotating();
          }
          this._autoPow10 = pow10 != null ? pow10 : null;
          this._locked = lock;
        };
        _proto._init = function _init() {
          this._planetary = findComp$2(PlanetarySystem, this, PLANETARY$1);
          this._solar = findComp$2(SolarSystem, this, SOLAR$2);
          this._stellar = findComp$2(StellarGouldBelt, this, STELLAR$1);
          this._specific = findComp$2(SpecificSystem, this, SPECIFIC$1);
          this._relCam = this.mainCamera.getComponent(RelativeCamera);
          return this;
        };
        _proto._listen = function _listen() {
          var _this2 = this;
          this.on(Transform$4.ZOOM_START, this.onZoomStart, 99);
          this.on(Transform$4.ZOOM_OVER, this.onZoomOver);
          this.on(Transform$4.VISIT_OVER, function () {
            return _this2._transforming = false;
          });
          this.on(Lens.ANGLE_CHANGE, this.onAngleChange);
          this.on(Lens.ANGLE_ADDED, this.onAngleAdded);
          this.on(UI.LENS_PARAMS, this.onLensPanelParams);
          return this;
        };
        _proto.onAngleAdded = function onAngleAdded(addAz, ha) {
          this._relCam.azimuthAngle += addAz;
          if (isNum(ha)) this._relCam.heightAngle = ha;
        };
        _proto._checkUniqueSystemReload = function _checkUniqueSystemReload() {
          if (visit.transInfo.transEnum === TransformEnum.PLN_2_PLN) {
            this._planetary.freeSystem();
            this._planetary.loadSystem();
          }
          if (visit.transInfo.transEnum === TransformEnum.SPC_2_SPC) {
            this._specific.loadStellarTargetAndSync();
          }
        };
        _proto._startFacingTo = /*#__PURE__*/function () {
          var _startFacingTo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this3 = this;
            var target, dist, add, facingTo;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  target = visit.transInfo.target;
                  dist = Vec3.distance(this.mainCamera.node.worldPosition, target.node.worldPosition);
                  add = Math.log10(dist / this._relCam.fixedSphereRadius);
                  facingTo = target.node;
                  if (visit.transInfo.stellar) {
                    facingTo = target.refer;
                    // facingTo = visit.transInfo.stellar.refers.to; // 好像一致
                  }

                  _context.next = 7;
                  return this._relCam.facingTo(facingTo, 1, function () {
                    var _visit$point;
                    _this3._freeLastSystem();
                    // this._relCam.interactable = true;
                    _this3._looking = false;
                    _this3._relCam.scrollSmoothing = 0.5;
                    cosmos.addPow10(add);
                    visit.visit(target);
                    cosmos.zoomToBy((_visit$point = visit.point) != null ? _visit$point : target.suggest, TRANS_SPEED_ZOOM_IN, Math.randomBool(), Transform$4.VISIT_OVER);
                  });
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function _startFacingTo() {
            return _startFacingTo2.apply(this, arguments);
          }
          return _startFacingTo;
        }();
        _proto._freeLastSystem = function _freeLastSystem() {
          var type = visit.transInfo.transEnum;
          var interstellar = TRANS_INTER.contains(type);
          var toSun = TRANS_2_SUN.contains(type);
          var toPln = TRANS_2_PLN.contains(type);
          var toSat = TRANS_2_SAT.contains(type);
          if (interstellar || toSun) this._planetary.freeSystem();
          if (toPln || toSun || toSat) this._specific.freeSystem();
        };
        _proto._loadTransMediator = function _loadTransMediator() {
          var _visit$transInfo = visit.transInfo,
            name = _visit$transInfo.name,
            transEnum = _visit$transInfo.transEnum;
          if (transEnum === TransformEnum.SUN_2_SAT) {
            var _core$res$getConfigIt, _core$res$getConfigIt2, _this$_solar$getCeles;
            var belongs = (_core$res$getConfigIt = (_core$res$getConfigIt2 = core.res.getConfigItem(PLANETARY_SATELLITES, name)) == null ? void 0 : _core$res$getConfigIt2.belongs) != null ? _core$res$getConfigIt : '';
            var mediator = (_this$_solar$getCeles = this._solar.getCelestial(belongs, 'planet')) != null ? _this$_solar$getCeles : this._solar.getCelestial(belongs, 'dwarf');
            if (!mediator) console.error('[loadTransMediator]', 'sun2sat no mediator!', name);
            visit.transInfo.mediator = mediator;
          }
        };
        _proto._loadTransTarget = function _loadTransTarget() {
          var _visit$transInfo$targ;
          var _visit$transInfo2 = visit.transInfo,
            name = _visit$transInfo2.name,
            transEnum = _visit$transInfo2.transEnum,
            into = _visit$transInfo2.into;
          if (TRANS_INTER.contains(transEnum)) {
            this._specific.loadStellarTargetAndSync(transEnum === TransformEnum.SPC_2_SPC); // 这儿仿照Planet延迟加载
          } else if (TRANS_2_PLN.contains(transEnum)) {
            visit.transInfo.target = this._solar.getCelestial(name, into);
            if (transEnum === TransformEnum.SUN_2_PLN) this._planetary.loadSystem();
          } else if (TRANS_2_SUN.contains(transEnum)) {
            visit.transInfo.target = this._solar.getCelestial(name);
          } else if (TRANS_2_SAT.contains(transEnum)) {
            var sun2sat = transEnum === TransformEnum.SUN_2_SAT;
            sun2sat && this._planetary.loadSystem();
            visit.transInfo.target = this._planetary.getSatellite(name);
            sun2sat && planetary.reloadOrbiterParams(visit.transInfo.target);
          }
          Function.invoke(visit == null || (_visit$transInfo$targ = visit.transInfo.target) == null ? void 0 : _visit$transInfo$targ.preloadRes, visit.transInfo.target);
        };
        _createClass(CosmosController, [{
          key: "deepRenderer",
          get: function get() {
            var _this$deepSkyCamera2;
            return (_this$deepSkyCamera2 = this.deepSkyCamera) == null || (_this$deepSkyCamera2 = _this$deepSkyCamera2.camera) == null ? void 0 : _this$deepSkyCamera2.geometryRenderer;
          }
        }, {
          key: "mainRenderer",
          get: function get() {
            var _this$mainCamera2;
            return (_this$mainCamera2 = this.mainCamera) == null || (_this$mainCamera2 = _this$mainCamera2.camera) == null ? void 0 : _this$mainCamera2.geometryRenderer;
          }
        }, {
          key: "center",
          get: function get() {
            return this.node;
          }
        }, {
          key: "scalars",
          get: function get() {
            return this.getComponentsInChildren(RelativeScalar);
          }
        }]);
        return CosmosController;
      }(Controller), (_descriptor$f = _applyDecoratedDescriptor(_class2$f.prototype, "deepSkyCamera", [_dec2$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$e = _applyDecoratedDescriptor(_class2$f.prototype, "mainCamera", [_dec3$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$f)) || _class$j);
      var TRANS_HIGHT$1 = CosmosProxy.TRANS_HIGHT,
        TRANS_SPEED_ZOOM_UP = CosmosProxy.TRANS_SPEED_ZOOM_UP,
        TRANS_SPEED_ZOOM_IN = CosmosProxy.TRANS_SPEED_ZOOM_IN;
      var SOLAR$2 = SceneGraph.SOLAR,
        PLANETARY$1 = SceneGraph.PLANETARY,
        STELLAR$1 = SceneGraph.STELLAR,
        SPECIFIC$1 = SceneGraph.SPECIFIC;
      var Transform$4 = View.Transform,
        Lens = View.Lens;
      var _Res$Configs = Res.Configs,
        PLANETARY_SATELLITES = _Res$Configs.PLANETARY_SATELLITES;
      cclegacy._RF.pop();
      var _dec$k, _dec2$h, _dec3$f, _dec4$c, _dec5$a, _dec6$9, _class$k, _class2$g, _descriptor$g, _descriptor2$f, _descriptor3$c, _descriptor4$a, _descriptor5$9, _descriptor6$7;
      cclegacy._RF.push({}, "efbe4AfaZdE44runRIyQROj", "gravitational-lens", undefined);
      var ccclass$k = _decorator.ccclass,
        property$c = _decorator.property;
      var findComp$3 = findComp$4;
      var GravitationalLens = (_dec$k = ccclass$k('cocosmos.gravitational-lens'), _dec2$h = property$c(Node), _dec3$f = property$c(Color), _dec4$c = property$c(Color), _dec5$a = property$c(Color), _dec6$9 = property$c(Color), _dec$k(_class$k = (_class2$g = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GravitationalLens, _Component);
        function GravitationalLens() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scaleFactor", _descriptor$g, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hole", _descriptor2$f, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_holeColor", _descriptor3$c, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_photonColor", _descriptor4$a, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_holes", _descriptor5$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_args", _descriptor6$7, _assertThisInitialized(_this));
          _this._pass0 = null;
          _this._handleHColor = 0;
          _this._handlePColor = 0;
          _this._handleHoles = 0;
          _this._handleArgs = 0;
          _this._material = void 0;
          _this._relCam = void 0;
          return _this;
        }
        var _proto = GravitationalLens.prototype;
        _proto.lateUpdate = function lateUpdate() {
          var _this$hole;
          if (this._material && this._pass0 && (_this$hole = this.hole) != null && _this$hole.active) {
            var _this$hole$worldPosit = this.hole.worldPosition,
              x = _this$hole$worldPosit.x,
              y = _this$hole$worldPosit.y,
              z = _this$hole$worldPosit.z;
            this._holes.set(x, y, z, this.hole.worldScale.x * this.scaleFactor);
            this._pass0.setUniform(this._handleHColor, this._holeColor);
            this._pass0.setUniform(this._handlePColor, this._photonColor);
            this._pass0.setUniform(this._handleHoles, this._holes);
            this._args.x = 0.0075;
            this._args.y = Math.cos(Math.parseRadian(this._relCam.heightAngle));
            this._pass0.setUniform(this._handleArgs, this._args);
          }
        };
        _proto.onLoad = function onLoad() {
          this._relCam = findComp$3(RelativeCamera, COSMOS$3, MAIN$2);
          this._material = this.getComponent(Sprite).customMaterial;
          if (this._material) {
            this._pass0 = this._material.passes[0];
            this._handleHColor = this._pass0.getHandle('holeColor');
            this._handlePColor = this._pass0.getHandle('photonColor');
            this._handleHoles = this._pass0.getHandle('holes');
            this._handleArgs = this._pass0.getHandle('args');
          }
        };
        _proto.start = function start() {};
        _createClass(GravitationalLens, [{
          key: "holeColor",
          get: function get() {
            return this._holeColor;
          },
          set: function set(arg) {
            this._holeColor = arg;
          }
        }, {
          key: "photonColor",
          get: function get() {
            return this._photonColor;
          },
          set: function set(arg) {
            this._photonColor = arg;
          }
        }]);
        return GravitationalLens;
      }(Component), (_descriptor$g = _applyDecoratedDescriptor(_class2$g.prototype, "scaleFactor", [property$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10.0;
        }
      }), _descriptor2$f = _applyDecoratedDescriptor(_class2$g.prototype, "hole", [_dec2$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$g.prototype, "holeColor", [_dec3$f], Object.getOwnPropertyDescriptor(_class2$g.prototype, "holeColor"), _class2$g.prototype), _applyDecoratedDescriptor(_class2$g.prototype, "photonColor", [_dec4$c], Object.getOwnPropertyDescriptor(_class2$g.prototype, "photonColor"), _class2$g.prototype), _descriptor3$c = _applyDecoratedDescriptor(_class2$g.prototype, "_holeColor", [_dec5$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor4$a = _applyDecoratedDescriptor(_class2$g.prototype, "_photonColor", [_dec6$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor5$9 = _applyDecoratedDescriptor(_class2$g.prototype, "_holes", [property$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec4(0, 0, 0, 1);
        }
      }), _descriptor6$7 = _applyDecoratedDescriptor(_class2$g.prototype, "_args", [property$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec4(0, 0, 0, 0);
        }
      })), _class2$g)) || _class$k);
      var COSMOS$3 = SceneGraph.COSMOS,
        MAIN$2 = SceneGraph.Cameras.MAIN;
      cclegacy._RF.pop();
      var _dec$l, _dec2$i, _dec3$g, _dec4$d, _dec5$b, _dec6$a, _class$l, _class2$h, _descriptor$h, _descriptor2$g, _descriptor3$d, _descriptor4$b, _descriptor5$a, _descriptor6$8;
      cclegacy._RF.push({}, "65858f6PI5IGJJwDiZnWHZb", "deep-sky-camera", undefined);
      var ccclass$l = _decorator.ccclass,
        property$d = _decorator.property;
      var DeepSkyCamera = (_dec$l = ccclass$l('cocosmos.DeepSkyCamera'), _dec2$i = property$d(GravitationalLens), _dec3$g = property$d(RenderTexture), _dec4$d = property$d(Sprite), _dec5$b = property$d(Blackhole), _dec6$a = property$d(SkyboxCube), _dec$l(_class$l = (_class2$h = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DeepSkyCamera, _Component);
        function DeepSkyCamera() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gravitational", _descriptor$h, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deepSkyRT", _descriptor2$g, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skyBackRenderer", _descriptor3$d, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blackhole", _descriptor4$b, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skybox", _descriptor5$a, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_useRT", _descriptor6$8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DeepSkyCamera.prototype;
        _proto.onLoad = function onLoad() {
          this.useRT = false;
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          var pow10 = cosmos.pow10;
          var _core$getController = core.getController(CosmosController),
            viewer = _core$getController.mainCamera.node;
          var inType = visit.inType,
            centerName = visit.centerName;
          var outer = interstellar.contains(inType) && !!centerName && centerName != 'Sun';
          this.node.setWorldPosition(outer ? viewer.worldPosition : pow10 <= STAY_VALVE ? Vec3.ZERO : pow10 >= SYNC_VALVE ? viewer.worldPosition : Vec3.multiplyScalar(v3a$5, viewer.worldPosition, (pow10 - STAY_VALVE) / SPAN));
          // this.node.setWorldPosition(viewer.worldPosition);
          this.node.setWorldRotation(viewer.worldRotation);
          if (visit.inBlackhole && this.blackhole.node.active) {
            this.useRT = true;
            // console.log(smoothstep(-3, 0, this.blackhole.suggest - pow10) * EXAGGERATE_BOX);
            this.skybox.luminance = Math.max(1, smoothstep(-3, 0, this.blackhole.suggest - pow10) * EXAGGERATE_BOX);
            this.gravitational.photonColor.set(this.blackhole.diskColorStart);
            this.gravitational.photonColor.a = 255;
          } else {
            this.useRT = false;
            this.skybox.luminance = 1;
          }
        };
        _proto.start = function start() {};
        _createClass(DeepSkyCamera, [{
          key: "useRT",
          get: function get() {
            return this._useRT;
          },
          set: function set(arg) {
            if (arg === this._useRT) return;
            this._useRT = arg;
            this.getComponent(Camera).targetTexture = this._useRT ? this.deepSkyRT : null;
            this.skyBackRenderer.node.active = arg;
            if (arg) {
              this.skyBackRenderer.spriteFrame.texture = this.deepSkyRT;
              this.skyBackRenderer.spriteFrame.packable = false;
              this.skyBackRenderer.spriteFrame.flipUVY = !sys.isNative || sys.os !== sys.OS.IOS && sys.os !== sys.OS.OSX;
            }
          }
        }]);
        return DeepSkyCamera;
      }(Component), (_descriptor$h = _applyDecoratedDescriptor(_class2$h.prototype, "gravitational", [_dec2$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$g = _applyDecoratedDescriptor(_class2$h.prototype, "deepSkyRT", [_dec3$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$d = _applyDecoratedDescriptor(_class2$h.prototype, "skyBackRenderer", [_dec4$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$b = _applyDecoratedDescriptor(_class2$h.prototype, "blackhole", [_dec5$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$a = _applyDecoratedDescriptor(_class2$h.prototype, "skybox", [_dec6$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$h.prototype, "useRT", [property$d], Object.getOwnPropertyDescriptor(_class2$h.prototype, "useRT"), _class2$h.prototype), _descriptor6$8 = _applyDecoratedDescriptor(_class2$h.prototype, "_useRT", [property$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2$h)) || _class$l);
      var STAY_VALVE = 0;
      var SYNC_VALVE = 1;
      var SPAN = Math.abs(SYNC_VALVE - STAY_VALVE);
      var v3a$5 = new Vec3();
      var EXAGGERATE_BOX = 10;
      cclegacy._RF.pop();
      var _dec$m, _dec2$j, _dec3$h, _dec4$e, _dec5$c, _class$m, _class2$i, _descriptor$i, _descriptor2$h, _descriptor3$e, _descriptor4$c;
      cclegacy._RF.push({}, "3db43NryTVHircAih4eED6u", "gradient-pervasion", undefined);
      var ccclass$m = _decorator.ccclass,
        property$e = _decorator.property;
      var GradientPervasion = (_dec$m = ccclass$m('cocosmos.GradientPervasion'), _dec2$j = property$e(Prefab), _dec3$h = property$e(Prefab), _dec4$e = property$e(Prefab), _dec5$c = property$e(Material), _dec$m(_class$m = (_class2$i = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GradientPervasion, _Component);
        function GradientPervasion() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "SuperClusters", _descriptor$i, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Stars", _descriptor2$h, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Galaxies", _descriptor3$e, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "TestMat", _descriptor4$c, _assertThisInitialized(_this));
          _this._stars = null;
          _this._galaxies = null;
          _this._clusters = null;
          _this._c_mat = null;
          _this._c_handle = void 0;
          return _this;
        }
        var _proto = GradientPervasion.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto.update = function update() {
          this._updateSuperClusters();
          // this._updateStarClusters();
        };

        _proto._updateSuperClusters = function _updateSuperClusters() {
          if (cosmos["super"]) {
            if (this._clusters.children.length <= 0) this._createSuperClusters();
            var pow10 = cosmos.pow10;
            var FLOOR = CLUSTERS_RANGE[0],
              CEIL = CLUSTERS_RANGE[1];
            var a = pow10 - FLOOR,
              b = CEIL - pow10,
              c = a / (a + b);
            if (b <= 0) {
              var s = Math.pow(10, b);
              this._clusters.setScale(s, s, s);
            } else {
              this._gradient(this._clusters);
              this._clusters.setScale(1, 1, 1);
            }
            clusters.x = clusters.y = c + 1;
            // clusters.x = clusters.y = 1;                     // Tiling
            clusters.z = Math.clamp01(a) * 0.7; // Strength
            clusters.w = Math.lerp(0.5, 0.1, Math.clamp01(c)); // Fading
            this._c_mat.passes[0].setUniform(this._c_handle, clusters);
            this._clusters.active = true;
          } else this._clusters.active = false;
        };
        _proto._updateStarClusters = function _updateStarClusters() {
          if (cosmos.local) {
            if (this._stars.children.length <= 0) this._createStarClusters();
            this._gradient(this._stars, 1);
            this._stars.active = true;
          } else this._stars.active = false;
        };
        _proto._gradient = function _gradient(container, offset) {
          if (offset === void 0) {
            offset = 0;
          }
          var pow10 = cosmos.pow10;
          var pow2 = Math.log2(Math.pow(10, pow10));
          container.children.forEach(function (child, idx) {
            var p = idx - pow2;
            p %= 5;
            var s = Math.pow(2, p + offset);
            child.setScale(s, s, s);
          });
        };
        _proto._createSuperClusters = function _createSuperClusters() {
          var rot = DEG_PERIGON / GRADIENT_NUM;
          for (var i = 0; i < GRADIENT_NUM; i++) {
            var cluster = instantiate(this.SuperClusters);
            cluster.setRotationFromEuler(0, i * rot, i * rot / 2);
            cluster.parent = this._clusters;
            if (i === 0) {
              var _this$_c_mat$passes$;
              this._c_mat = cluster.getComponent(MeshRenderer).sharedMaterial;
              this._c_handle = (_this$_c_mat$passes$ = this._c_mat.passes[0]) == null ? void 0 : _this$_c_mat$passes$.getHandle('clusters');
            }
          }
        };
        _proto._createStarClusters = function _createStarClusters() {
          for (var i = 0; i < GRADIENT_NUM; i++) {
            var stars = instantiate(this.Stars);
            stars.parent = this._stars;
            stars.getComponent(ParticleSystem).setMaterial(this.TestMat, 0);
          }
        };
        _proto._init = function _init() {
          this._stars = createNodeAt("Pervasive Stars", LAYER_MAIN_3D, this.node);
          this._galaxies = createNodeAt("Pervasive Galaxies", LAYER_MAIN_3D, this.node);
          this._clusters = createNodeAt("Pervasive Clusters", LAYER_MAIN_3D, this.node);
        };
        return GradientPervasion;
      }(Component), (_descriptor$i = _applyDecoratedDescriptor(_class2$i.prototype, "SuperClusters", [_dec2$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$h = _applyDecoratedDescriptor(_class2$i.prototype, "Stars", [_dec3$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$e = _applyDecoratedDescriptor(_class2$i.prototype, "Galaxies", [_dec4$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$c = _applyDecoratedDescriptor(_class2$i.prototype, "TestMat", [_dec5$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$i)) || _class$m);
      var CLUSTERS_RANGE = [8.5, 10];
      var GRADIENT_NUM = 5;
      var clusters = new Vec4();
      cclegacy._RF.pop();

      /**
       * @class 引力透镜
       * @author DuskyHuang 圣子
       * @deprecated 使用cocos的后处理管线废弃，统一不不适用后处理关系了，用shader实现。
      */
      cclegacy._RF.push({}, "f32f8KHpbZND4jMngaim1yb", "gravitational-lens.dis", undefined);
      cclegacy._RF.pop();
      var _dec$n, _dec2$k, _class$n, _class2$j, _descriptor$j;
      cclegacy._RF.push({}, "97813pmXeJAFYJr1GuemrJ0", "particle-gradients", undefined);
      var ccclass$n = _decorator.ccclass,
        property$f = _decorator.property;
      var ParticleGradients = (_dec$n = ccclass$n('cocosmos.ParticleGradients'), _dec2$k = property$f(Prefab), _dec$n(_class$n = (_class2$j = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ParticleGradients, _Component);
        function ParticleGradients() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Particles", _descriptor$j, _assertThisInitialized(_this));
          _this._viewer = void 0;
          return _this;
        }
        var _proto = ParticleGradients.prototype;
        _proto.onLoad = function onLoad() {
          this._viewer = findNode$1(MAIN$3, COSMOS$4);
          for (var i = 0; i < 5; i++) {
            instantiate(this.Particles).parent = this.node;
          }
        };
        _proto.update = function update() {
          var pow2 = Math.log2(Math.pow(10, cosmos.pow10));
          this.node.children.forEach(function (star, idx) {
            var p = idx - pow2;
            p %= 5;
            var mag = Math.pow(2, p + 1);
            star.setScale(mag, mag, mag);
          });
        };
        return ParticleGradients;
      }(Component), _descriptor$j = _applyDecoratedDescriptor(_class2$j.prototype, "Particles", [_dec2$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$j)) || _class$n);
      var v3a$6 = new Vec3();
      var MAIN$3 = SceneGraph.Cameras.MAIN,
        COSMOS$4 = SceneGraph.COSMOS;
      cclegacy._RF.pop();
      var _dec$o, _class$o, _class2$k, _descriptor$k;
      cclegacy._RF.push({}, "27b16gkG7FI3Y+O3XmkJC8C", "enter-controller", undefined);
      var ccclass$o = _decorator.ccclass,
        property$g = _decorator.property;
      var EnterController = (_dec$o = ccclass$o('cocosmos.enter-controller'), _dec$o(_class$o = (_class2$k = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(EnterController, _Mediator);
        function EnterController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "useGuide", _descriptor$k, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EnterController.prototype;
        _proto.start = function start() {
          profiler.hideStats();
          this._playBgm();
          this._localize();
          if (this.useGuide) this._tryGuide();
        };
        _proto._tryGuide = function _tryGuide() {
          if (!user.guided) {
            this.notify(UI.Panels.OPEN, Res.Prefabs.GUIDE_PANEL);
          }
        };
        _proto._playBgm = function _playBgm() {
          core.audio.bgmVolume = user.guided ? 0.5 : 0.25;
          core.audio.playBgm();
        };
        _proto._localize = function _localize() {
          if (user.language) ui.localizeLanguage(user.language);
        };
        return EnterController;
      }(Mediator), _descriptor$k = _applyDecoratedDescriptor(_class2$k.prototype, "useGuide", [property$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _class2$k)) || _class$o);
      cclegacy._RF.pop();
      var _dec$p, _dec2$l, _dec3$i, _class$p, _class2$l, _descriptor$l, _descriptor2$i;
      cclegacy._RF.push({}, "5f2c9YVt+tGR7UrXG4bmcZQ", "deep-sky-builder", undefined);
      var ccclass$p = _decorator.ccclass,
        property$h = _decorator.property;
      var DeepSkyBuilder = (_dec$p = ccclass$p('cocosmos.deep-sky-builder'), _dec2$l = property$h(JsonAsset), _dec3$i = property$h(Prefab), _dec$p(_class$p = (_class2$l = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(DeepSkyBuilder, _Mediator);
        function DeepSkyBuilder() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "json", _descriptor$l, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "DeepSkyFixed", _descriptor2$i, _assertThisInitialized(_this));
          _this.deepMap = new Map();
          _this.nebulas = [];
          _this.clusters = [];
          _this.inners = [];
          _this.galaxies = [];
          _this.locals = [];
          _this.virgos = [];
          _this._nebulas = void 0;
          _this._clusters = void 0;
          _this._localGalaxies = void 0;
          _this._virgoGalaxies = void 0;
          _this._csc = void 0;
          return _this;
        }
        var _proto = DeepSkyBuilder.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
        };
        _proto.start = function start() {
          this._buildDeepSkyObjects();
        };
        _proto.lateUpdate = function lateUpdate() {
          if (!DeepSkyFixed.LoadTexTaskLaunched && cosmos.pow10 >= CosmosProxy.Scopes.MilkyWay[0]) {
            DeepSkyFixed.LoadTexTaskLaunched = true;
            this.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_MSR_INNERS);
            this.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_MSR_GALAXIES);
          }
        };
        _proto._buildDeepSkyObjects = function _buildDeepSkyObjects() {
          var viewer = this._csc.mainCamera.node;
          for (var key in this.json.json) {
            var config = this.json.json[key];
            var node = instantiate(this.DeepSkyFixed);
            var fixed = node.getComponent(DeepSkyFixed);
            fixed.viewer = viewer;
            if (fixed.loadConfig(key, config)) {
              switch (true) {
                case fixed.nebular:
                  {
                    this.nebulas.push(fixed);
                    this.inners.push(fixed);
                    fixed.node.parent = this._nebulas;
                  }
                  break;
                case fixed.clustered:
                  {
                    this.clusters.push(fixed);
                    this.inners.push(fixed);
                    fixed.node.parent = this._clusters;
                  }
                  break;
                case fixed.local:
                  {
                    this.locals.push(fixed);
                    this.galaxies.push(fixed);
                    fixed.node.parent = this._localGalaxies;
                  }
                  break;
                default:
                  {
                    this.virgos.push(fixed);
                    this.galaxies.push(fixed);
                    fixed.node.parent = this._virgoGalaxies;
                  }
                  break;
              }
            } else console.error(key);
          }
        };
        _proto._init = function _init() {
          var milky = this.node.parent.getChildByName(MILKY);
          var local = this.node.parent.getChildByName(LOCAL);
          var virgo = this.node.parent.getChildByName(VIRGO);
          this._nebulas = createNodeAt(Milky.NEBULAS, LAYER_BG_3D, milky);
          this._clusters = createNodeAt(Milky.CLUSTERS, LAYER_BG_3D, milky);
          this._localGalaxies = createNodeAt(Local$2.GALAXIES, LAYER_BG_3D, local);
          this._virgoGalaxies = createNodeAt(Virgo.GALAXIES, LAYER_BG_3D, virgo);
          this._csc = core.getController(CosmosController);
        };
        return DeepSkyBuilder;
      }(Mediator), (_descriptor$l = _applyDecoratedDescriptor(_class2$l.prototype, "json", [_dec2$l], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$i = _applyDecoratedDescriptor(_class2$l.prototype, "DeepSkyFixed", [_dec3$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$l)) || _class$p);
      var MILKY = SceneGraph.MILKY,
        LOCAL = SceneGraph.LOCAL,
        VIRGO = SceneGraph.VIRGO,
        Milky = SceneGraph.Milky,
        Local$2 = SceneGraph.Local,
        Virgo = SceneGraph.Virgo;
      cclegacy._RF.pop();
      var _dec$q, _dec2$m, _class$q, _class2$m, _descriptor$m;
      cclegacy._RF.push({}, "144caQIZIFB4YJvWyOK7eMP", "hud-builder", undefined);
      var findNode = findNode$1;
      var ccclass$q = _decorator.ccclass,
        property$i = _decorator.property;
      var HudBuilder = (_dec$q = ccclass$q('cocosmos.hud-builder'), _dec2$m = property$i(Prefab), _dec$q(_class$q = (_class2$m = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(HudBuilder, _Mediator);
        function HudBuilder() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "CelLabel", _descriptor$m, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HudBuilder.prototype;
        _proto.onLoad = function onLoad() {
          CelestialLabel.template = this.CelLabel;
          this._buildLayers();
        };
        _proto._buildLayers = function _buildLayers() {
          this._addLayer('coord', false)._addLayer('const', false)._addLayer('stars', false)._addLayer('planetary', true)._addLayer('solar', true)._addLayer('cluster', true)._addLayer('nebula', true)._addLayer('milky', true)._addLayer('galaxy', true)._addLayer('ruler', true)._addLayer('struct', true);
        };
        _proto._addLayer = function _addLayer(style, front) {
          var layer = new Node(style.charAt(0).toUpperCase() + style.substring(1) + " Layer");
          layer.addComponent(UITransform);
          CelestialLabel.Containers[style] = setLayer(layer, front ? LAYER_UI_2D : LAYER_UI_BG);
          var affix = front ? 'Front' : 'Back';
          layer.parent = findNode(affix + " HUD", "Canvas " + affix);
          return this;
        };
        return HudBuilder;
      }(Mediator), _descriptor$m = _applyDecoratedDescriptor(_class2$m.prototype, "CelLabel", [_dec2$m], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$m)) || _class$q);
      cclegacy._RF.pop();
      var _dec$r, _dec2$n, _dec3$j, _dec4$f, _dec5$d, _dec6$b, _dec7$7, _dec8$6, _dec9$6, _dec10$5, _dec11$5, _class$r, _class2$n, _descriptor$n, _descriptor2$j, _descriptor3$f, _descriptor4$d, _descriptor5$b, _descriptor6$9, _descriptor7$6, _descriptor8$6, _descriptor9$5, _descriptor10$5;
      cclegacy._RF.push({}, "363a1nqHuVOA4yeG3SGIFaE", "layers-mediator", undefined);
      var ccclass$r = _decorator.ccclass,
        property$j = _decorator.property;
      var group$4 = group$5,
        setBottom = setBottom$1;
      function useGB() {
        return this.useGB;
      }
      var LayersMediator = (_dec$r = ccclass$r('cocosmos.layers-mediator'), _dec2$n = property$j(Node), _dec3$j = group$4('Base', '', Node), _dec4$f = group$4('Base', '', [Prefab]), _dec5$d = group$4('Panel', '', Node), _dec6$b = group$4('Panel', '', [Prefab]), _dec7$7 = group$4('Panel', '启用自动回收'), _dec8$6 = group$4('Panel', '', useGB, [0, 100, 0.1]), _dec9$6 = group$4('Panel', '', [Prefab], useGB), _dec10$5 = group$4('Popup', '', Node), _dec11$5 = group$4('Popup', '', [Prefab]), _dec$r(_class$r = (_class2$n = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(LayersMediator, _Mediator);
        function LayersMediator() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "screenMask", _descriptor$n, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseLayer", _descriptor2$j, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "baseTemplates", _descriptor3$f, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelLayer", _descriptor4$d, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "panelTemplates", _descriptor5$b, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useGB", _descriptor6$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "intervalGB", _descriptor7$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "largePanels", _descriptor8$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupLayer", _descriptor9$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "popupTemplates", _descriptor10$5, _assertThisInitialized(_this));
          _this._panels = [];
          _this._popups = [];
          return _this;
        }
        var _proto = LayersMediator.prototype;
        _proto.onLoad = function onLoad() {
          this._init();
          this._listen();
        };
        _proto._init = function _init() {
          var _this2 = this;
          this.baseTemplates.forEach(function (base) {
            return _this2.baseLayer.addChild(instantiate(base));
          });
          this.popupTemplates.forEach(function (popup) {
            return _this2.popupLayer.addChild(instantiate(popup));
          });
        };
        _proto._listen = function _listen() {
          this.on(UI.Panels.OPEN, this.onOpenPanel);
          this.on(UI.Panels.CLOSE, this.onClosePanel);
          this.on(UI.FULL_SCREEN, this.onFullscreen);
        };
        _proto.onOpenPanel = function onOpenPanel(name, layer) {
          var panel = this._panels.find(function (pnl) {
            return pnl.name === name;
          });
          if (!panel) {
            var template = this.panelTemplates.find(function (tmp) {
              return tmp.name === name;
            });
            if (!template) return console.warn("[layers-mediator]", "template not exist for:", name);
            panel = instantiate(template);
            this._panels.push(panel);
          }
          if (panel.activeInHierarchy) return;
          panel.parent = this.panelLayer;
          if (layer === 'bottom') setBottom(panel);
          var anim = panel.getComponent(Animation);
          var show = anim == null ? void 0 : anim.clips.find(function (clip) {
            return clip.name.includes('show');
          });
          anim && show && anim.play(show.name);
        };
        _proto.onClosePanel = function onClosePanel(name) {
          var panel = this.panelLayer.getChildByName(name);
          if (!panel) return;
          var anim = panel.getComponent(Animation);
          var hide = anim == null ? void 0 : anim.clips.find(function (c) {
            return c.name.includes('hide');
          });
          if (anim && hide) anim.play(hide.name);else panel.removeFromParent();
        };
        _proto.onFullscreen = function onFullscreen(isFull) {
          this.screenMask.active = !isFull;
          this.baseLayer.children.forEach(function (child) {
            return child.children.forEach(function (grandchild) {
              var _grandchild$getCompon;
              return (_grandchild$getCompon = grandchild.getComponent(TweenSwitcher)) == null ? void 0 : _grandchild$getCompon.play(!isFull, true);
            });
          });
        };
        _proto._tryGarbageCollection = function _tryGarbageCollection() {
          if (this._panels.length <= 0) return;
          var garbageNames = this.largePanels.map(function (tmp) {
            return tmp.name;
          });
          for (var _iterator = _createForOfIteratorHelperLoose(this._panels), _step; !(_step = _iterator()).done;) {
            var panel = _step.value;
            // 大预制体，每隔一段时间不在场景中就会被销毁，每次垃圾回收销毁一个
            if (garbageNames.contains(panel.name) && !panel.activeInHierarchy) {
              this._panels.remove(panel);
              panel.destroy();
              return;
            }
          }
        };
        _proto.start = function start() {
          var _this3 = this;
          if (this.useGB) {
            this.schedule(function () {
              _this3._tryGarbageCollection();
            }, this.intervalGB);
          }
        };
        return LayersMediator;
      }(Mediator), (_descriptor$n = _applyDecoratedDescriptor(_class2$n.prototype, "screenMask", [_dec2$n], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$j = _applyDecoratedDescriptor(_class2$n.prototype, "baseLayer", [_dec3$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$f = _applyDecoratedDescriptor(_class2$n.prototype, "baseTemplates", [_dec4$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4$d = _applyDecoratedDescriptor(_class2$n.prototype, "panelLayer", [_dec5$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$b = _applyDecoratedDescriptor(_class2$n.prototype, "panelTemplates", [_dec6$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6$9 = _applyDecoratedDescriptor(_class2$n.prototype, "useGB", [_dec7$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7$6 = _applyDecoratedDescriptor(_class2$n.prototype, "intervalGB", [_dec8$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor8$6 = _applyDecoratedDescriptor(_class2$n.prototype, "largePanels", [_dec9$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9$5 = _applyDecoratedDescriptor(_class2$n.prototype, "popupLayer", [_dec10$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10$5 = _applyDecoratedDescriptor(_class2$n.prototype, "popupTemplates", [_dec11$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2$n)) || _class$r);
      cclegacy._RF.pop();
      var _dec$s, _dec2$o, _class$s, _class2$o, _descriptor$o, _descriptor2$k, _descriptor3$g, _descriptor4$e, _descriptor5$c, _dec3$k, _dec4$g, _dec5$e, _dec6$c, _class4, _class5, _descriptor6$a, _descriptor7$7, _descriptor8$7;
      cclegacy._RF.push({}, "eda0eo/KldOcpVDU8HpIJl5", "mute-preloader", undefined);
      var ccclass$s = _decorator.ccclass,
        property$k = _decorator.property,
        type = _decorator.type;
      var PreloadTask = (_dec$s = ccclass$s('cocosmos.preload-task'), _dec2$o = property$k(Material), _dec$s(_class$s = (_class2$o = function PreloadTask() {
        _initializerDefineProperty(this, "taskName", _descriptor$o, this);
        _initializerDefineProperty(this, "dynamicPath", _descriptor2$k, this);
        _initializerDefineProperty(this, "matKey", _descriptor3$g, this);
        _initializerDefineProperty(this, "sharedMaterial", _descriptor4$e, this);
        _initializerDefineProperty(this, "isTex", _descriptor5$c, this);
        this.launched = false;
      }, (_descriptor$o = _applyDecoratedDescriptor(_class2$o.prototype, "taskName", [property$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2$k = _applyDecoratedDescriptor(_class2$o.prototype, "dynamicPath", [property$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3$g = _applyDecoratedDescriptor(_class2$o.prototype, "matKey", [property$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor4$e = _applyDecoratedDescriptor(_class2$o.prototype, "sharedMaterial", [_dec2$o], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$c = _applyDecoratedDescriptor(_class2$o.prototype, "isTex", [property$k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2$o)) || _class$s);
      var MutePreloader = (_dec3$k = ccclass$s('cocosmos.mute-preloader'), _dec4$g = type([PreloadTask]), _dec5$e = property$k({
        slide: true,
        range: [0, 10, 0.1]
      }), _dec6$c = property$k({
        slide: true,
        range: [0, 10, 0.1]
      }), _dec3$k(_class4 = (_class5 = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(MutePreloader, _Mediator);
        function MutePreloader() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "tasks", _descriptor6$a, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "interval", _descriptor7$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "delay", _descriptor8$7, _assertThisInitialized(_this));
          _this._texes = {};
          return _this;
        }
        var _proto = MutePreloader.prototype;
        _proto.resetTimes = function resetTimes(interval, delay) {
          var _this2 = this;
          this.unscheduleAllCallbacks();
          this.interval = interval;
          this.delay = delay;
          this.schedule(function () {
            return _this2.doTaskOnce();
          }, this.interval, macro.REPEAT_FOREVER, this.delay);
        };
        _proto.onLoad = function onLoad() {
          this.on(Task.Load.DYNAMIC_TEX, this.loadDynamicTexImmediately);
        };
        _proto.start = function start() {
          var _this3 = this;
          this._guideDilatory();
          this.schedule(function () {
            return _this3.doTaskOnce();
          }, this.interval, macro.REPEAT_FOREVER, this.delay);
        };
        _proto._guideDilatory = function _guideDilatory() {
          if (!user.guided) {
            this.interval++;
            this.delay += 3;
          }
        };
        _proto.doTaskOnce = function doTaskOnce(task) {
          var _this4 = this;
          var chosen = task;
          if (!chosen) {
            chosen = this.tasks.find(function (task) {
              return !task.launched;
            });
          }
          if (chosen) {
            chosen.launched = true;
            var _chosen = chosen,
              isTex = _chosen.isTex,
              dynamicPath = _chosen.dynamicPath,
              matKey = _chosen.matKey,
              sharedMaterial = _chosen.sharedMaterial;
            var path = (isTex ? 'textures/' : '') + dynamicPath + (isTex ? '/texture' : '');
            resources.load(path, Texture2D, function (err, tex) {
              if (err) {
                console.error("[load tex failed]", path);
                chosen.launched = false;
              } else {
                tex.addRef();
                _this4._texes[dynamicPath] = tex;
                if (sharedMaterial && matKey) {
                  sharedMaterial.setProperty(matKey, tex);
                  LogProxy.PRINT_LOAD_TASK && console.info("[task finished]", "material-tex:", path);
                } else {
                  LogProxy.PRINT_LOAD_TASK && console.info("[task finished]", "fetch-tex:", path);
                }
              }
            });
          } else {
            this.unscheduleAllCallbacks();
          }
        };
        _proto.loadDynamicTexImmediately = function loadDynamicTexImmediately(name) {
          var task = this.tasks.find(function (task) {
            return task.taskName === name;
          });
          if (!task) return console.error("[no task named]", name);
          if (task.launched) return console.warn("[task already launched]", name);
          this.doTaskOnce(task);
        };
        return MutePreloader;
      }(Mediator), (_descriptor6$a = _applyDecoratedDescriptor(_class5.prototype, "tasks", [_dec4$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7$7 = _applyDecoratedDescriptor(_class5.prototype, "interval", [_dec5$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor8$7 = _applyDecoratedDescriptor(_class5.prototype, "delay", [_dec6$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class5)) || _class4);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1be257VbZJIUrBw0sQx2Jfv", "cc", undefined);
      var col = new Color();
      var points = [];

      /**
       * @description Cocos的GeometryRenderer不够用来扩展个曲线轨迹绘制吧
      */
      Object.defineProperty(GeometryRenderer.prototype, 'addTrackCurve', {
        configurable: true,
        enumerable: false,
        value: function value(center, radius, color, segments, depthTest, useTransform, transform, startArc, anticlockwise, arcPercent) {
          if (segments === void 0) {
            segments = 32;
          }
          if (depthTest === void 0) {
            depthTest = true;
          }
          if (useTransform === void 0) {
            useTransform = false;
          }
          if (transform === void 0) {
            transform = new Mat4();
          }
          if (anticlockwise === void 0) {
            anticlockwise = false;
          }
          if (arcPercent === void 0) {
            arcPercent = 1;
          }
          points.length = 0;
          col.set(color);
          var start = Math.parseRadian(startArc) - Math.PI / 2;
          var cx = center.x,
            cy = center.y,
            cz = center.z;
          // let detPhi = Math.PI * 2.0 / segments * arcPercent, num = Math.round(segments * arcPercent);
          var detPhi = Math.PI * 2.0 / segments * arcPercent;
          if (!anticlockwise) detPhi = -detPhi;
          for (var i = 0; i < segments + 1; i++) {
            var rad = i * detPhi - start;
            var x = radius * Math.cos(rad),
              z = radius * Math.sin(rad);
            var p = new Vec3(cx + x, cy, cz + z);
            useTransform && Vec3.transformMat4(p, p, transform);
            points.push(p);
          }
          var dec = col.a / segments;
          for (var _i = 0; _i < segments; _i++) {
            col.a -= dec;
            this.addLine(points[_i], points[_i + 1], col, depthTest);
          }
        }
      });
      var v3a$7 = new Vec3();
      var v3b = new Vec3();
      var seg = new Vec3();

      /**
       * @description Cocos的GeometryRenderer不够用来扩展个渐隐直线绘制吧
      */
      Object.defineProperty(GeometryRenderer.prototype, 'addFadeLine', {
        configurable: true,
        enumerable: false,
        value: function value(from, to, color, segments, depthTest) {
          if (segments === void 0) {
            segments = 32;
          }
          if (depthTest === void 0) {
            depthTest = true;
          }
          points.length = 0;
          col.set(color);
          seg.set(to).subtract(from).multiplyScalar(1 / segments);
          v3a$7.set(from);
          v3b.set(from).add(seg);
          var dec = col.a / segments;
          for (var i = 0; i < segments; i++) {
            this.addLine(v3a$7, v3b, col, depthTest);
            v3a$7.add(seg);
            v3b.add(seg);
            col.a -= dec;
          }
        }
      });

      /**
       * @description Cocos的GeometryRenderer不够用来扩展个流动虚线绘制吧
      */
      Object.defineProperty(GeometryRenderer.prototype, 'addFloatingDashLine', {
        configurable: true,
        enumerable: false,
        value: function value(from, to, color, segments, depthTest, pct, speed) {
          if (segments === void 0) {
            segments = 8;
          }
          if (depthTest === void 0) {
            depthTest = true;
          }
          if (pct === void 0) {
            pct = 0.75;
          }
          if (speed === void 0) {
            speed = 1;
          }
          var frac = timeFrac(speed);
          col.set(color);
          seg.set(to).subtract(from).multiplyScalar(1 / segments);
          this.addLine(v3a$7.set(from), Vec3.scaleAndAdd(v3b, from, seg, frac * pct), col, depthTest);
          Vec3.scaleAndAdd(v3a$7, from, seg, frac);
          Vec3.scaleAndAdd(v3b, v3a$7, seg, pct);
          for (var i = 0; i < segments; i++) {
            if (i === segments - 1 && frac > 1 - pct) {
              this.addLine(v3a$7, to, col, depthTest);
            } else this.addLine(v3a$7, v3b, col, depthTest);
            Vec3.add(v3a$7, v3a$7, seg);
            Vec3.add(v3b, v3b, seg);
          }
        }
      });
      function timeFrac(speed) {
        var sec = game.totalTime * speed / 1000;
        return sec - Math.floor(sec);
      }
      cclegacy._RF.pop();
      var _dec$t, _dec2$p, _class$t, _class2$p, _descriptor$p;
      cclegacy._RF.push({}, "385cayPVaxM/YLw+snWWZWn", "geo-renderer", undefined);
      var ccclass$t = _decorator.ccclass,
        property$l = _decorator.property;
      var GeoRenderer = (_dec$t = ccclass$t('cocosmos.geo-renderer'), _dec2$p = property$l(Prefab), _dec$t(_class$t = (_class2$p = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(GeoRenderer, _Mediator);
        function GeoRenderer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "coordinates", _descriptor$p, _assertThisInitialized(_this));
          _this._csc = void 0;
          _this._equatorial = true;
          _this._celestial = void 0;
          _this._ecliptic = void 0;
          _this._galactic = void 0;
          _this._horizontal = void 0;
          _this._lblAxis = void 0;
          _this._lblDiam = void 0;
          return _this;
        }
        var _proto = GeoRenderer.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this._csc = core.getController(CosmosController);
          this.on(View.Transform.FACE_OVER, function () {
            return _this2._freeDiamLabel()._freeAxisLabel();
          });
        };
        _proto.start = function start() {
          var _this$_csc = this._csc,
            c = _this$_csc.center,
            d = _this$_csc.deepSkyCamera,
            r = _this$_csc.mainRenderer;
          this._celestial = this._createOne('天球坐标系', c, d, r).setKeyPrefix('cel').setDivision(DIV_BY_DEG).setColors(CoordColor.CELESTIAL, EQUATORIAL).setRotation(AxisRotation.EQUATORIAL);
          this._ecliptic = this._createOne('黄道坐标系', c, d, r).setKeyPrefix('sun').setDivision(DIV_BY_DEG).setColors(CoordColor.ECLIPTIC, ECLIPTIC).setRotation(AxisRotation.ECLIPTIC);
          this._galactic = this._createOne('银道坐标系', c, d, r).setKeyPrefix('mlk').setDivision(DIV_BY_DEG).setColors(CoordColor.GALACTIC, GALACTIC).setRotation(AxisRotation.GALACTIC);
          this._horizontal = this._createOne('地平坐标系', c, d, r).setKeyPrefix('hor').setDivision(DIV_BY_DEG).setColors(CoordColor.HORIZONTAL, HORIZONTAL).setRotation(Vec3.UNIT_Y);
        };
        _proto.update = function update(dt) {
          this._drawCoordinates();
          this._drawLocalGeometries();
        };
        _proto._drawCoordinates = function _drawCoordinates() {
          var showEquatorial = gizmos.showEquatorial,
            showHourAngle = gizmos.showHourAngle,
            showEcliptic = gizmos.showEcliptic,
            showGalactic = gizmos.showGalactic,
            showHorizontal = gizmos.showHorizontal;
          if (this._celestial) {
            this._celestial.node.active = showEquatorial || showHourAngle;
            if (showEquatorial && !this._equatorial) {
              this._celestial.freeDegreesLabels();
              this._celestial.setDivision(DIV_BY_DEG);
              this._celestial.node.name = '天球坐标系';
              this._equatorial = true;
            } else if (showHourAngle && this._equatorial) {
              this._celestial.freeDegreesLabels();
              this._celestial.setDivision(DIV_BY_HA);
              this._celestial.node.name = '时角坐标系';
              this._equatorial = false;
            }
          }
          if (this._ecliptic) this._ecliptic.node.active = showEcliptic;
          if (this._galactic) this._galactic.node.active = showGalactic;
          if (this._horizontal) this._horizontal.node.active = showHorizontal;
        };
        _proto._drawLocalGeometries = function _drawLocalGeometries() {
          var inPlanetary = visit.inPlanetary,
            inSatellite = visit.inSatellite,
            center = visit.center;
          if (!center || !(center instanceof Orbiter) || !inPlanetary && !inSatellite) {
            this._freeDiamLabel()._freeAxisLabel();
            return;
          }
          var showAxis = planetary.showAxis,
            showDiameter = planetary.showDiameter;
          var renderer = this._csc.mainRenderer;
          var orbiter = center,
            suggest = orbiter.suggest;
          var alpha = Math.clamp01(suggest + 1.3 - cosmos.pow10);
          // Axis
          if (showAxis) {
            var matrix = orbiter.rotator.worldMatrix;
            color$1.set(LOCAL_AXIS);
            color$1.a = alpha * I8;
            Vec3.transformMat4(v3a$8, N_POLAR, matrix);
            Vec3.transformMat4(v3b$1, S_POLAR, matrix);
            renderer.addLine(v3a$8, v3b$1, color$1, true);
            Vec3.transformMat4(v3a$8, ARW_TIP, matrix);
            Vec3.transformMat4(v3b$1, ARW_A, matrix);
            renderer.addLine(v3a$8, v3b$1, color$1, true);
            Vec3.transformMat4(v3b$1, ARW_B, matrix);
            renderer.addLine(v3a$8, v3b$1, color$1, true);
            renderer.addArc(N_POLAR, 0.15, color$1, 0, 300, ARC, true, true, matrix);
            if (!this._lblAxis) {
              this._lblAxis = setLabelStyle(CelestialLabel.claim('planetary', '天体转轴'), 'planetary', 'axis');
              this._lblAxis.camera = this._csc.mainCamera;
              this._lblAxis.target = orbiter.node;
              var period = orbiter.config.orbiter.rotate.period;
              var day = isNum(period) ? period.toFixed(2) + 'day' : period;
              this._lblAxis.pure = '∠' + orbiter.rotateObliquity.toFixed(1) + '° ' + day;
              this._lblAxis.setOffset(Vec3.normalize(v3a$8, orbiter.rotator.up).multiplyScalar(0.75));
            }
            this._lblAxis.alpha = alpha;
          } else this._freeAxisLabel();
          // Diameter
          if (showDiameter) {
            var z = orbiter.rotator.worldScale.z;
            var r = z / 2;
            color$1.set(LOCAL_DIAM);
            color$1.a = alpha * I8;
            renderer.addLine(Vec3.set(v3a$8, 0, 0, -r), Vec3.set(v3b$1, r * 1.3, 0, -r), color$1, true);
            renderer.addLine(Vec3.set(v3a$8, 0, 0, r), Vec3.set(v3b$1, r * 1.3, 0, r), color$1, true);
            renderer.addLine(Vec3.set(v3a$8, r * 1.2, 0, -r), Vec3.set(v3b$1, r * 1.2, 0, r), color$1, true);
            renderer.addLine(v3a$8, v3c.set(r * 1.15, 0, -r * 0.9), color$1, true);
            renderer.addLine(v3a$8, v3c.add3f(r * 0.1, 0, 0), color$1, true);
            renderer.addLine(v3b$1, v3c.set(r * 1.15, 0, r * 0.9), color$1, true);
            renderer.addLine(v3b$1, v3c.add3f(r * 0.1, 0, 0), color$1, true);
            if (!this._lblDiam) {
              this._lblDiam = setLabelStyle(CelestialLabel.claim('planetary', '天体直径'), 'planetary', 'diameter');
              this._lblDiam.camera = this._csc.mainCamera;
              this._lblDiam.target = orbiter.node;
              this._lblDiam.string = (orbiter.config.diam * (orbiter.cat === 'satellite' ? 1e+6 : 1e+8)).toFixed(1) + ' km';
              this._lblDiam.setOffset(0.6, 0, 0);
            }
            this._lblDiam.alpha = alpha;
          } else this._freeDiamLabel();
        };
        _proto._freeDiamLabel = function _freeDiamLabel() {
          var _this$_lblDiam;
          (_this$_lblDiam = this._lblDiam) == null || _this$_lblDiam.free();
          this._lblDiam = null;
          return this;
        };
        _proto._freeAxisLabel = function _freeAxisLabel() {
          var _this$_lblAxis;
          (_this$_lblAxis = this._lblAxis) == null || _this$_lblAxis.free();
          this._lblAxis = null;
          return this;
        };
        _proto._createOne = function _createOne(name, center, deepSkyCamera, renderer) {
          var created = instantiate(this.coordinates);
          this.node.addChild(created);
          created.name = name;
          return created.getComponent(Coordinates).setView(center, deepSkyCamera, renderer);
        };
        return GeoRenderer;
      }(Mediator), _descriptor$p = _applyDecoratedDescriptor(_class2$p.prototype, "coordinates", [_dec2$p], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$p)) || _class$t);
      var CoordColor = GizmosProxy.CoordColor,
        _GizmosProxy$Segments = GizmosProxy.Segments,
        ARC = _GizmosProxy$Segments.ARC,
        CIRCLE = _GizmosProxy$Segments.CIRCLE,
        _GizmosProxy$LineColo = GizmosProxy.LineColor,
        EQUATORIAL = _GizmosProxy$LineColo.EQUATORIAL,
        ECLIPTIC = _GizmosProxy$LineColo.ECLIPTIC,
        HORIZONTAL = _GizmosProxy$LineColo.HORIZONTAL,
        GALACTIC = _GizmosProxy$LineColo.GALACTIC,
        LOCAL_AXIS = _GizmosProxy$LineColo.LOCAL_AXIS,
        LOCAL_DIAM = _GizmosProxy$LineColo.LOCAL_DIAM;
      var AXIS_LENGTH = 0.7;
      var DIV_BY_HA = new Vec4(24, 18, 3, 2);
      var DIV_BY_DEG = new Vec4(36, 18, 2, 2);
      var N_POLAR = new Vec3(0, AXIS_LENGTH, 0);
      var S_POLAR = new Vec3(0, -AXIS_LENGTH, 0);
      var ARW_TIP = new Vec3(0.15, AXIS_LENGTH, 0);
      var ARW_A = new Vec3(0.12, AXIS_LENGTH, 0.04);
      var ARW_B = new Vec3(0.17, AXIS_LENGTH, 0.04);
      var v3a$8 = new Vec3();
      var v3b$1 = new Vec3();
      var v3c = new Vec3();
      var color$1 = new Color();
      cclegacy._RF.pop();
      var _dec$u, _class$u;
      cclegacy._RF.push({}, "b9d70trOzxD2oUEia5qf2KH", "grids-renderer", undefined);
      var ccclass$u = _decorator.ccclass;
      var GridsRenderer = (_dec$u = ccclass$u('cocosmos.GridsRenderer'), _dec$u(_class$u = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(GridsRenderer, _Mediator);
        function GridsRenderer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _this._csc = void 0;
          _this._pass0 = void 0;
          _this._handlePow10 = void 0;
          _this._handleRatio = void 0;
          _this._handleGridColor = void 0;
          _this._handleCircColor = void 0;
          _this._steps = [];
          _this._alpha = 1;
          _this._dAlpha = 0;
          _this._ratio = 1;
          return _this;
        }
        var _proto = GridsRenderer.prototype;
        // 颜色渐变
        _proto.fade = function fade(out, duration) {
          if (duration === void 0) {
            duration = 1;
          }
          this._dAlpha = (out ? -1 : 1) / (Math.abs(duration) + Number.EPSILON);
        };
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          this._updateAlpha(dt);
          this._updatePosY();
          this._updatePow10();
          this._updateLabels();
        };
        _proto._init = function _init() {
          var _this$getComponent;
          this._csc = core.getController(CosmosController);
          var mat = (_this$getComponent = this.getComponent(MeshRenderer)) == null ? void 0 : _this$getComponent.material;
          this._pass0 = mat.passes[0];
          this._handlePow10 = this._pass0.getHandle('pow10');
          this._handleRatio = this._pass0.getHandle('ratio');
          this._handleGridColor = this._pass0.getHandle('gridColor');
          this._handleCircColor = this._pass0.getHandle('circColor');
          return this;
        };
        _proto._listen = function _listen() {
          this.on(View.Transform.ZOOM_OVER, this._fadeOutIn);
        };
        _proto._fadeOutIn = function _fadeOutIn() {
          var _this2 = this;
          this.unscheduleAllCallbacks();
          this.fade(true, 1);
          this.scheduleOnce(function () {
            return _this2.fade(false, 2);
          }, 1);
        };
        _proto._updateAlpha = function _updateAlpha(dt) {
          this._alpha += this._dAlpha * dt;
          if (this._alpha >= 1) {
            this._alpha = 1;
            this._dAlpha = 0;
          } else if (this._alpha <= 0) {
            this._alpha = this._dAlpha = 0;
          }
        };
        _proto._updatePosY = function _updatePosY() {
          if (cosmos.solar && visit.center && planetary.unbelt) {
            var _visit$center$node$wo, _visit$center;
            var y = (_visit$center$node$wo = (_visit$center = visit.center) == null || (_visit$center = _visit$center.node) == null || (_visit$center = _visit$center.worldScale) == null ? void 0 : _visit$center.y) != null ? _visit$center$node$wo : 0;
          } else this.node.setPosition(Vec3.ZERO);
        };
        _proto._createLabels = function _createLabels() {
          var _this3 = this;
          Array.nature(3).forEach(function () {
            return _this3._steps.push(_this3._createLabel('pow10'));
          });
        };
        _proto._createLabel = function _createLabel(name, str) {
          if (str === void 0) {
            str = '';
          }
          var label = CelestialLabel.claim('ruler', name);
          label.camera = this._csc.mainCamera;
          label.target = this.node;
          label.string = str;
          setLabelStyle(label, 'ruler', 'unit');
          return label;
        };
        _proto._updatePow10 = function _updatePow10() {
          var pow10 = cosmos.pow10,
            showGrids = gizmos.showGrids,
            showRulers = gizmos.showRulers;
          var solar = visit.inSolar,
            satellite = visit.inSatellite;
          if (solar) {
            switch (true) {
              case pow10 > LY_AU:
                // LY
                this._ratio = RAT_LY;
                lines.set(LIGHT_YEAR);
                grids.set(GALACTIC$1);
                break;
              case pow10 > LY_AU - 1:
                // AU-LY
                var t = 1 + pow10;
                this._ratio = Math.lerp(RAT_AU, RAT_LY, t);
                Color.lerp(lines, ASTRO_UNIT, LIGHT_YEAR, t);
                Color.lerp(grids, SOLAR$3, GALACTIC$1, t);
                break;
              default:
                // AU
                this._ratio = RAT_AU;
                lines.set(ASTRO_UNIT);
                grids.set(SOLAR$3);
                break;
            }
          } else {
            if (pow10 > AU_KM - 1) {
              var r = pow10 - (AU_KM - 1);
              this._ratio = Math.lerp(1, RAT_AU, r);
            } else this._ratio = 1;
            lines.set(satellite ? KILO_MT_DK : KILO_METER);
            grids.set(satellite ? SATELLITE : PLANETARY$2);
          }
          this._pass0.setUniform(this._handlePow10, pow10);
          this._pass0.setUniform(this._handleRatio, this._ratio);
          grids.a *= this._alpha;
          lines.a *= this._alpha;
          if (!showGrids) grids.set(Color.BLACK);
          if (!showRulers) lines.set(Color.BLACK);
          this._pass0.setUniform(this._handleGridColor, grids);
          this._pass0.setUniform(this._handleCircColor, lines);
        };
        _proto._updateLabels = function _updateLabels() {
          var _this4 = this;
          var show = gizmos.showRulers && ui.showNotes;
          if (show) {
            var _visit$center$nearest, _visit$center2;
            var inSolar = visit.inSolar,
              inPlanetary = visit.inPlanetary;
            if (this._steps.length <= 0) this._createLabels();
            var pow10 = cosmos.pow10,
              iPow = Math.floor(pow10);
            var frac = pow10 - iPow;
            var nearest = (_visit$center$nearest = (_visit$center2 = visit.center) == null ? void 0 : _visit$center2.nearest) != null ? _visit$center$nearest : -99;
            this._steps.forEach(function (label, i) {
              var ignore = RULER_IGNORES.contains(iPow - i) || iPow - i < nearest - 2;
              if (ignore) return label.alpha = 0;else {
                var r = Math.pow(10, 1 - i - frac) * _this4._ratio;
                // loadUnitAndColor(label, iPow - i + 1, inSolar, inPlanetary);
                loadUnitAndColorI18n(label, iPow - i + 1, inSolar, inPlanetary);
                _this4._relocateLabel(label, r, i - iPow, lines);
              }
            });
          } else {
            this._freeLabels();
          }
        };
        _proto._relocateLabel = function _relocateLabel(label, r, rad, arg) {
          var y = this.node.worldPosition.y;
          var att = attenuate(r, NameLabelAtt, false);
          label.alpha = att * this._alpha;
          Vec3.set(v3a$9, Math.sin(rad) * r, 0, Math.cos(rad) * r);
          label.setOffset(v3a$9);
          v3a$9.y = y;
          Color.copy(color$2, arg);
          color$2.a *= att;
          this._csc.mainRenderer.addFloatingDashLine(v3b$2.set(0, y, 0), v3a$9, color$2, 10, true, 0.75, 0.5);
          return label;
        };
        _proto._freeLabels = function _freeLabels() {
          this._steps.forEach(function (label) {
            return label.free();
          });
          this._steps.length = 0;
        };
        return GridsRenderer;
      }(Mediator)) || _class$u);
      var _GizmosProxy$LineColo$1 = GizmosProxy.LineColor,
        KILO_MT_DK = _GizmosProxy$LineColo$1.KILO_MT_DK,
        KILO_METER = _GizmosProxy$LineColo$1.KILO_METER,
        ASTRO_UNIT = _GizmosProxy$LineColo$1.ASTRO_UNIT,
        LIGHT_YEAR = _GizmosProxy$LineColo$1.LIGHT_YEAR,
        _GizmosProxy$GridsCol = GizmosProxy.GridsColor,
        GALACTIC$1 = _GizmosProxy$GridsCol.GALACTIC,
        SOLAR$3 = _GizmosProxy$GridsCol.SOLAR,
        PLANETARY$2 = _GizmosProxy$GridsCol.PLANETARY,
        SATELLITE = _GizmosProxy$GridsCol.SATELLITE,
        RULER_IGNORES = GizmosProxy.RULER_IGNORES;
      var NameLabelAtt = UIProxy.NameLabelAtt;
      var grids = new Color(); // 网格色
      var lines = new Color(); // 标尺色
      var AU_KM = -5;
      var LY_AU = 0;
      var RAT_AU = 1.496;
      var RAT_LY = 0.946;
      var color$2 = new Color();
      var v3a$9 = new Vec3();
      var v3b$2 = new Vec3();
      cclegacy._RF.pop();
      var _dec$v, _class$v;
      cclegacy._RF.push({}, "c3f814beHFAjJvX2i41XhmY", "indicative-renderer", undefined);
      var ccclass$v = _decorator.ccclass;
      var LineType = /*#__PURE__*/function (LineType) {
        LineType[LineType["PERPENDICULAR"] = 1] = "PERPENDICULAR";
        LineType[LineType["MIDDLE_LINE"] = 2] = "MIDDLE_LINE";
        LineType[LineType["DIRECT_LINE"] = 3] = "DIRECT_LINE";
        return LineType;
      }(LineType || {});
      var IndicativeRenderer = (_dec$v = ccclass$v('cocosmos.IndicativeRenderer'), _dec$v(_class$v = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(IndicativeRenderer, _Mediator);
        function IndicativeRenderer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _this._timer = 0;
          _this._csc = void 0;
          _this._deepSky = void 0;
          _this._stellar = void 0;
          _this._milkyWay = void 0;
          _this._local = void 0;
          _this._virgo = void 0;
          return _this;
        }
        var _proto = IndicativeRenderer.prototype;
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto.start = function start() {};
        _proto.lateUpdate = function lateUpdate(dt) {
          var stellar = cosmos.stellar,
            milky = cosmos.milky,
            local = cosmos.local,
            virgo = cosmos.virgo,
            pow10 = cosmos.pow10,
            showLines = gizmos.showLines,
            showStars = constStars.showStars,
            showConstLines = constStars.showConstLines;
          if (stellar && showStars && showConstLines) this._drawConstellationsLines();
          if (stellar && showLines) this._drawStarsIndicativeLines();
          if (-3 < pow10 && pow10 < 4.5 && showLines) this._drawTargetLine(dt);
          if (milky && showLines) this._drawDeepSkyIndicativeLines();
          if (local && showLines) this._drawLocalIndicativeLines();
          if (virgo && showLines) this._drawVirgoIndicativeLines();
          this._updateMilkyStructures(); // TODO 迁移
        };

        _proto._init = function _init() {
          this._deepSky = core.getMediator(DeepSkyBuilder);
          this._stellar = findNode$1(STELLAR$2, COSMOS$5).getComponent(StellarGouldBelt);
          this._milkyWay = findNode$1(MILKY$1, COSMOS$5).getComponent(MilkyWay);
          this._local = findNode$1(LOCAL$1, COSMOS$5);
          this._virgo = findNode$1(VIRGO$1, COSMOS$5);
          this._csc = core.getController(CosmosController);
          return this;
        }

        // 绘制星座连线
        ;

        _proto._drawConstellationsLines = function _drawConstellationsLines() {
          var _this2 = this;
          var configs = this._stellar.configs,
            renderer = this._csc.deepRenderer;
          var _loop = function _loop() {
            var _step$value = _step.value,
              cst = _step$value[0],
              record = _step$value[1];
            var _ref = configs[cst],
              stars = _ref.stars,
              lines = _ref.lines;
            if (stars.length <= 0) return 1; // continue
            var segments = lines.split(',');
            segments.forEach(function (segment) {
              var abs = segment.split('-');
              var _abs$map = abs.map(function (ab) {
                  var star = record[ab];
                  if (ab.includes("@")) {
                    var _ab$split = ab.split('@'),
                      oab = _ab$split[0],
                      from = _ab$split[1];
                    star = _this2._stellar.constStars.get(from)[oab];
                  }
                  if (!star) console.warn(cst, ab, 'not exist');else return star.node.worldPosition;
                }),
                wps1 = _abs$map[0],
                wps2 = _abs$map[1];
              if (!wps1 || !wps2) return;
              var lenSqr = Math.min(wps1.lengthSqr(), wps2.lengthSqr());
              var att = attenuate(lenSqr, ConstLineAtt, true);
              if (att > 0) {
                color$3.set(CONST_LINES);
                color$3.a *= ConstStarsProxy.instance.consLineStrengthen * att;
                v3a$a.set(wps1);
                v3b$3.set(wps2);
                renderer.addLine(v3a$a, v3b$3, color$3);
              }
            });
          };
          for (var _iterator = _createForOfIteratorHelperLoose(this._stellar.constStars), _step; !(_step = _iterator()).done;) {
            if (_loop()) continue;
          }
        }

        // 绘制恒星指示引线
        ;

        _proto._drawStarsIndicativeLines = function _drawStarsIndicativeLines() {
          var _visit$transInfo$stel, _visit$transInfo$stel2;
          if (!notEmptyArr(this._stellar.stars)) return;
          // too many, only draw mag ∈ 0-4
          var pos = (_visit$transInfo$stel = (_visit$transInfo$stel2 = visit.transInfo.stellar) == null || (_visit$transInfo$stel2 = _visit$transInfo$stel2.refers) == null || (_visit$transInfo$stel2 = _visit$transInfo$stel2.from) == null ? void 0 : _visit$transInfo$stel2.worldPosition) != null ? _visit$transInfo$stel : Vec3.ZERO;
          var above4 = this._stellar.stars.filter(function (start) {
            return start.config.mag <= 4;
          });
          this._drawIndicativeLines(above4, STARS, LineType.PERPENDICULAR, pos);
        }

        // 绘制星云、星团指示引线
        ;

        _proto._drawDeepSkyIndicativeLines = function _drawDeepSkyIndicativeLines() {
          var to = Vec3.ZERO;
          this._drawIndicativeLines(this._deepSky.clusters, CLUSTER, LineType.PERPENDICULAR, to);
          this._drawIndicativeLines(this._deepSky.nebulas, NEBULA, LineType.PERPENDICULAR, to);
        }

        // 绘制本团内星系群引线
        ;

        _proto._drawLocalIndicativeLines = function _drawLocalIndicativeLines() {
          var _this3 = this;
          var FROM = LOCAL_LINES_RANGE[0],
            TO = LOCAL_LINES_RANGE[1],
            pow10 = cosmos.pow10;
          if (pow10 <= FROM || pow10 >= TO) return;
          var locals = this._deepSky.locals,
            ls = this._local.worldScale.x;
          Vec3.multiplyScalar(local, LOCAL_TO_SOLAR, ls);
          Vec3.multiplyScalar(milky, MILKY_TO_SOLAR, ls * 0.01);
          Vec3.multiplyScalar(m31, M31_TO_SOLAR, ls);
          Vec3.multiplyScalar(m33, M33_TO_SOLAR, ls);
          this._drawIndicativeLine(milky, LocalGG, LineType.PERPENDICULAR, local);
          locals.forEach(function (galaxy) {
            var from = galaxy.node.worldPosition;
            switch (galaxy.config.cent) {
              case 'milky':
                _this3._drawIndicativeLine(from, COMPANION, LineType.MIDDLE_LINE, milky);
                break;
              case 'M31':
                _this3._drawIndicativeLine(from, COMPANION, LineType.MIDDLE_LINE, m31);
                break;
              case 'M33':
                _this3._drawIndicativeLine(from, COMPANION, LineType.MIDDLE_LINE, m33);
                break;
              default:
                _this3._drawIndicativeLine(from, LocalGG, LineType.PERPENDICULAR, local);
                break;
            }
          });
          this._drawScopeCenter(local, LocalGG, ls * LOCAL_CIRC_RADIUS);
        }

        // 绘制超团内星系团引线
        ;

        _proto._drawVirgoIndicativeLines = function _drawVirgoIndicativeLines() {
          var _this4 = this;
          var FROM = VIRGO_LINES_RANGE[0],
            TO = VIRGO_LINES_RANGE[1],
            pow10 = cosmos.pow10;
          if (pow10 <= FROM || pow10 >= TO) return;
          var virgos = this._deepSky.virgos,
            ls = this._virgo.worldScale.x;
          Vec3.multiplyScalar(virgo, VIRGO_TO_SOLAR, ls);
          this._drawIndicativeLine(Vec3.ZERO, VirgoSC, LineType.PERPENDICULAR, virgo);
          virgos.forEach(function (galaxy) {
            return _this4._drawIndicativeLine(galaxy.node.worldPosition, VirgoSC, LineType.PERPENDICULAR, virgo);
          });
          this._drawScopeCenter(virgo, VirgoSC, ls * VIRGO_CIRC_RADIUS);
        };
        _proto._drawScopeCenter = function _drawScopeCenter(at, color, radius, fade) {
          if (fade === void 0) {
            fade = 0.5;
          }
          circ.set(color);
          circ.a *= fade;
          var renderer = this._csc.deepRenderer;
          Vec3.copy(v3a$a, at).add3f(0, radius, 0);
          renderer.addLine(v3a$a, at, circ);
          renderer.addDisc(v3a$a, radius, circ, Segments.CIRCLE, false);
          renderer.addDisc(at, radius * 2, circ, Segments.CIRCLE, false);
        };
        _proto._drawIndicativeLine = function _drawIndicativeLine(toPos, arg, type, fromPos, given) {
          var distSqr = Vec3.squaredDistance(toPos, fromPos != null ? fromPos : Vec3.ZERO);
          var att = isNum(given) ? given : attenuate(distSqr, type === LineType.PERPENDICULAR ? IndicativeLineAtt : IndicativeDirectiveLineAtt, true);
          if (att <= 0) return;
          color$3.set(arg);
          var x = toPos.x,
            y = toPos.y,
            z = toPos.z;
          color$3.a *= att;
          var renderer = this._csc.deepRenderer;
          v3a$a.set(fromPos != null ? fromPos : Vec3.ZERO);
          v3b$3.set(x, y, z);
          v3m.set(x, v3a$a.y, z);
          Vec3.subtract(v3v, v3b$3, v3a$a);
          if (type === LineType.PERPENDICULAR) {
            v3b$3.y *= 0.97;
            renderer.addLine(v3a$a, v3m, color$3);
            renderer.addLine(v3m, v3b$3, color$3);
          } else if (type === LineType.MIDDLE_LINE) {
            Vec3.scaleAndAdd(v3a$a, v3a$a, v3v, 0.04);
            Vec3.scaleAndAdd(v3b$3, v3b$3, v3v, -0.02);
            renderer.addLine(v3a$a, v3b$3, color$3);
          } else {
            renderer.addLine(v3a$a, v3b$3, color$3);
          }
        };
        _proto._drawTargetLine = function _drawTargetLine(dt) {
          var _visit$transInfo;
          if ((_visit$transInfo = visit.transInfo) != null && (_visit$transInfo = _visit$transInfo.stellar) != null && _visit$transInfo.refers) {
            this._timer += dt;
            var pow10 = cosmos.pow10;
            var sun = this._stellar.sun.node;
            var _visit$transInfo$stel3 = visit.transInfo.stellar.refers,
              from = _visit$transInfo$stel3.from,
              to = _visit$transInfo$stel3.to,
              temp = _visit$transInfo$stel3.temp;
            var att = attenuate(pow10, [-3, -2, 3.5, 4.5], false);
            var TempTo = temp != null ? temp : to;
            if (!!from && !!TempTo && this._timer % 0.5 > 0.25) {
              this._drawIndicativeLine(TempTo.worldPosition, IND_TARGET, LineType.DIRECT_LINE, from.worldPosition, att);
            }
            // if (from && (from === TempTo) && from !== sun) this._drawIndicativeLine(sun.worldPosition,
            //     IND_SOLAR, LineType.PERPENDICULAR, from.worldPosition, att);
            // if (TempTo && (from !== TempTo) && TempTo !== sun) this._drawIndicativeLine(TempTo.worldPosition,
            //     IND_SOLAR, LineType.PERPENDICULAR, sun.worldPosition, att);
            if (from !== sun && TempTo !== sun) {
              from !== sun && this._drawIndicativeLine(sun.worldPosition, IND_SOLAR, LineType.PERPENDICULAR, from.worldPosition, att);
              TempTo !== sun && this._drawIndicativeLine(sun.worldPosition, IND_SOLAR, LineType.PERPENDICULAR, TempTo.worldPosition, att);
            } else if (from === sun) {
              this._drawIndicativeLine(TempTo.worldPosition, IND_SOLAR, LineType.PERPENDICULAR, sun.worldPosition, att);
            } else {
              this._drawIndicativeLine(sun.worldPosition, IND_SOLAR, LineType.PERPENDICULAR, from.worldPosition, att);
            }
          }
        };
        _proto._drawIndicativeLines = function _drawIndicativeLines(comps, arg, type, pos) {
          var _this5 = this;
          comps.forEach(function (comp) {
            return (comp.node.activeInHierarchy || comp.culling) && !comp.routing && _this5._drawIndicativeLine(comp.node.worldPosition, arg, type, pos);
          });
        };
        _proto._updateMilkyStructures = function _updateMilkyStructures() {
          var FROM = MILKY_STRUCT_RANGE[0],
            TO = MILKY_STRUCT_RANGE[1],
            pow10 = cosmos.pow10;
          if (pow10 > FROM && pow10 < TO) {
            this._milkyWay.claimStructureLabelsIfNotExist(this._csc.deepSkyCamera);
            // const { language } = ui, 
            var sx = this._milkyWay.node.worldScale.x,
              sqr = sx * sx;
            this._milkyWay.structureLabels.forEach(function (label, idx) {
              // label.string = (Structures[idx] as structure)[language == 'cn' ? 0 : 1];
              var lenSqr = Vec3.squaredDistance(Structures[idx][2], Vec3.ZERO) * sqr;
              label.alpha = attenuate(lenSqr, NameLabelAtt$1, true);
            });
          } else this._milkyWay.freeStructureLabels();
        };
        _proto._listen = function _listen() {};
        return IndicativeRenderer;
      }(Mediator)) || _class$v);

      // constants & configs
      var ConstLineAtt = ConstStarsProxy.ConstLineAtt;
      var _GizmosProxy$LineColo$2 = GizmosProxy.LineColor,
        STARS = _GizmosProxy$LineColo$2.STARS,
        NEBULA = _GizmosProxy$LineColo$2.NEBULA,
        CLUSTER = _GizmosProxy$LineColo$2.CLUSTER,
        COMPANION = _GizmosProxy$LineColo$2.COMPANION,
        LocalGG = _GizmosProxy$LineColo$2.LocalGG,
        VirgoSC = _GizmosProxy$LineColo$2.VirgoSC,
        CONST_LINES = _GizmosProxy$LineColo$2.CONST_LINES,
        IND_TARGET = _GizmosProxy$LineColo$2.IND_TARGET,
        IND_SOLAR = _GizmosProxy$LineColo$2.IND_SOLAR,
        Segments = GizmosProxy.Segments;
      var IndicativeLineAtt = UIProxy.IndicativeLineAtt,
        NameLabelAtt$1 = UIProxy.NameLabelAtt;
      var IndicativeDirectiveLineAtt = [0.03, 0.1, 0.8, 1.5];
      var Structures = DeepGalaxiesProxy.MilkyWay.Structures;
      var COSMOS$5 = SceneGraph.COSMOS,
        STELLAR$2 = SceneGraph.STELLAR,
        MILKY$1 = SceneGraph.MILKY,
        LOCAL$1 = SceneGraph.LOCAL,
        VIRGO$1 = SceneGraph.VIRGO;
      var MILKY_STRUCT_RANGE = [3.0, 5.5];
      var LOCAL_LINES_RANGE = [5, 7.8];
      var VIRGO_LINES_RANGE = [7, 9.8];
      var LOCAL_CIRC_RADIUS = 0.1;
      var VIRGO_CIRC_RADIUS = 0.03;

      // temp values
      var v3a$a = new Vec3();
      var v3b$3 = new Vec3();
      var v3m = new Vec3();
      var v3v = new Vec3();
      var milky = new Vec3();
      var local = new Vec3();
      var virgo = new Vec3();
      var m31 = new Vec3();
      var m33 = new Vec3();
      var color$3 = new Color();
      var circ = new Color();
      cclegacy._RF.pop();
      var _dec$w, _class$w;
      cclegacy._RF.push({}, "06f52Gfwt1P7YFAcF2B5bgQ", "tracks-renderer", undefined);
      var ccclass$w = _decorator.ccclass;
      var TracksRenderer = (_dec$w = ccclass$w('cocosmos.TracksRenderer'), _dec$w(_class$w = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(TracksRenderer, _Mediator);
        function TracksRenderer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _this._csc = void 0;
          _this._solarSys = void 0;
          _this._planetSys = void 0;
          return _this;
        }
        var _proto = TracksRenderer.prototype;
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto.start = function start() {};
        _proto.lateUpdate = function lateUpdate(dt) {
          if (!gizmos.showTracks) return;
          var inSolar = cosmos.solar,
            helio = cosmos.helio,
            inPlanetary = cosmos.planetary;
          var showPlanets = solar.showPlanets,
            showDwarfs = solar.showDwarfs,
            showMinors = solar.showMinors,
            showComets = solar.showComets;
          var showSatellites = planetary.showSatellites;
          var inStellar = visit.inStellar;
          if (inPlanetary && showSatellites) this._drawSatellitesTracks();
          if (inSolar && showPlanets) this._drawPlanetsTracks();
          if (inSolar && showDwarfs) this._drawDwarfsTracks();
          if (inSolar && showMinors) this._drawMinorsTracks();
          if (inSolar && showComets) this._drawCometsTracks();
          if (helio && !inStellar) this._drawHelioTracks();
        };
        _proto._drawSatellitesTracks = function _drawSatellitesTracks() {
          var rdr = this._csc.mainRenderer;
          var _this$_planetSys = this._planetSys,
            satellites = _this$_planetSys.satellites,
            worldMatrix = _this$_planetSys.node.worldMatrix;
          var center = visit.center;
          if (!center) return;
          for (var _iterator = _createForOfIteratorHelperLoose(satellites), _step; !(_step = _iterator()).done;) {
            var satellite = _step.value;
            if (!satellite.node.activeInHierarchy) continue;
            var orbitMat = satellite.orbitMat,
              orbitalRadius = satellite.orbitalRadius;
            color$4.set(SATELLITE$1);
            var central = satellite === visit.center;
            // const distSqr = Vec3.squaredDistance(satellite.node.worldPosition, center.node.worldPosition);
            var att = central ? 1 : attenuate(satellite.distSqr, TrackAtt, true);
            if (att <= 0.01) continue;
            color$4.a *= att;
            rdr.addCircle(Vec3.ZERO, orbitalRadius, color$4, (central ? 5 : 1) * CIRCLE$1, true, true, Mat4.multiply(mat4, worldMatrix, orbitMat));
          }
        };
        _proto._drawPlanetsTracks = function _drawPlanetsTracks() {
          var rdr = this._csc.mainRenderer;
          var _this$_solarSys = this._solarSys,
            planets = _this$_solarSys.planets,
            worldMatrix = _this$_solarSys.node.worldMatrix;
          var satellite = visit.inSatellite;
          for (var _iterator2 = _createForOfIteratorHelperLoose(planets), _step2; !(_step2 = _iterator2()).done;) {
            var planet = _step2.value;
            if (!planet.node.activeInHierarchy) continue;
            var orbitMat = planet.orbitMat,
              orbitalRadius = planet.orbitalRadius,
              orbitAngle = planet.orbitAngle;
            var central = planet === visit.center;
            color$4.set(PLANET);
            var visiting = central || satellite && visit.center.belong === planet;
            if (visiting) {
              Mat4.multiply(mat4, worldMatrix, orbitMat);
              var arc = Math.clamp(0.01, 1, 1e-3 / planet.node.worldScale.y);
              rdr.addTrackCurve(Vec3.ZERO, orbitalRadius, color$4, CIRCLE$1, true, true, mat4, orbitAngle, true, arc);
              rdr.addTrackCurve(Vec3.ZERO, orbitalRadius, color$4, CIRCLE$1, true, true, mat4, orbitAngle, false, arc);
            } else {
              var att = attenuate(planet.distSqr, TrackAtt, true);
              if (att <= 0.01) continue;
              color$4.a *= att;
              rdr.addCircle(Vec3.ZERO, orbitalRadius, color$4, CIRCLE$1, true, true, Mat4.multiply(mat4, worldMatrix, orbitMat));
            }
          }
        };
        _proto._drawDwarfsTracks = function _drawDwarfsTracks() {
          var rdr = this._csc.mainRenderer;
          var _this$_solarSys2 = this._solarSys,
            sun = _this$_solarSys2.sun,
            dwarfs = _this$_solarSys2.dwarfs,
            worldMatrix = _this$_solarSys2.node.worldMatrix;
          // const center = sun.node.worldPosition;
          for (var _iterator3 = _createForOfIteratorHelperLoose(dwarfs), _step3; !(_step3 = _iterator3()).done;) {
            var dwarf = _step3.value;
            if (!dwarf.node.activeInHierarchy) continue;
            var orbitMat = dwarf.orbitMat,
              orbitAngle = dwarf.orbitAngle,
              orbitalRadius = dwarf.orbitalRadius,
              orbitalVelocity = dwarf.orbitalVelocity;
            var central = dwarf === visit.center;
            color$4.set(DWARF);
            var att = central ? 1 : attenuate(dwarf.distSqr, TrackAtt, true);
            if (att <= 0.01) continue;
            color$4.a *= att;
            var anticlockwise = orbitalVelocity > 0;
            // rdr.addCircle(center, orbitalRadius, color, CIRCLE, true, true, Mat4.multiply(mat4, worldMatrix, orbitMat));
            rdr.addTrackCurve(Vec3.ZERO, orbitalRadius, color$4, CIRCLE$1, true, anticlockwise, Mat4.multiply(mat4, worldMatrix, orbitMat), orbitAngle, true, 1.0);
          }
        };
        _proto._drawMinorsTracks = function _drawMinorsTracks() {
          var rdr = this._csc.mainRenderer;
          var _this$_solarSys3 = this._solarSys,
            sun = _this$_solarSys3.sun,
            minors = _this$_solarSys3.minors,
            worldMatrix = _this$_solarSys3.node.worldMatrix;
          // const center = sun.node.worldPosition;
          for (var _iterator4 = _createForOfIteratorHelperLoose(minors), _step4; !(_step4 = _iterator4()).done;) {
            var minor = _step4.value;
            if (!minor.node.activeInHierarchy) continue;
            var orbitMat = minor.orbitMat,
              orbitalRadius = minor.orbitalRadius,
              orbitAngle = minor.orbitAngle,
              orbitalVelocity = minor.orbitalVelocity;
            var central = minor === visit.center;
            color$4.set(MINOR);
            // const distSqr = Vec3.squaredDistance(minor.node.worldPosition, center);
            var att = central ? 1 : attenuate(minor.distSqr, TrackAtt, true);
            if (att <= 0.01) continue;
            color$4.a *= att;
            Mat4.multiply(mat4, worldMatrix, orbitMat);
            var anticlockwise = orbitalVelocity > 0;
            rdr.addTrackCurve(Vec3.ZERO, orbitalRadius, color$4, CIRCLE$1, true, anticlockwise, mat4, orbitAngle, true, 0.8);
          }
        };
        _proto._drawCometsTracks = function _drawCometsTracks() {
          var rdr = this._csc.mainRenderer;
          var _this$_solarSys4 = this._solarSys,
            sun = _this$_solarSys4.sun,
            comets = _this$_solarSys4.comets,
            worldMatrix = _this$_solarSys4.node.worldMatrix;
          var center = sun.node.worldPosition;
          for (var _iterator5 = _createForOfIteratorHelperLoose(comets), _step5; !(_step5 = _iterator5()).done;) {
            var comet = _step5.value;
            if (!comet.node.activeInHierarchy) continue;
            var orbitMat = comet.orbitMat,
              orbitalRadius = comet.orbitalRadius,
              orbitAngle = comet.orbitAngle,
              orbitalVelocity = comet.orbitalVelocity;
            color$4.set(COMET);
            // const distSqr = Vec3.squaredDistance(comet.node.worldPosition, center);
            var att = visit.center === comet ? 1 : attenuate(comet.distSqr, TrackAtt, true);
            if (att <= 0.01) continue;
            color$4.a *= att;
            Mat4.multiply(mat4, worldMatrix, orbitMat);
            var anticlockwise = orbitalVelocity > 0;
            rdr.addTrackCurve(Vec3.ZERO, orbitalRadius, color$4, CIRCLE$1, false, anticlockwise, mat4, orbitAngle, true, 0.6);
          }
        };
        _proto._drawHelioTracks = function _drawHelioTracks() {
          var rdr = this._csc.mainRenderer,
            pow10 = cosmos.pow10;
          color$4.set(_SOLAR);
          color$4.a *= attenuate(pow10, SOLAR_TRACK_ATT, false);
          rdr.addFadeLine(Vec3.ZERO, v3a$b.set(SOLAR_DIR).multiplyScalar(SOLAR_TRACK_LENGTH), color$4, LINE, true);
          rdr.addFadeLine(Vec3.ZERO, v3a$b.negative(), color$4, LINE, true);
        };
        _proto._init = function _init() {
          this._csc = core.getController(CosmosController);
          this._solarSys = findComp$4(SolarSystem, COSMOS$6, SOLAR$4);
          this._planetSys = findComp$4(PlanetarySystem, COSMOS$6, PLANETARY$3);
          return this;
        };
        _proto._listen = function _listen() {};
        return TracksRenderer;
      }(Mediator)) || _class$w);
      var COSMOS$6 = SceneGraph.COSMOS,
        SOLAR$4 = SceneGraph.SOLAR,
        PLANETARY$3 = SceneGraph.PLANETARY;
      var _GizmosProxy$TrackCol = GizmosProxy.TrackColors,
        SATELLITE$1 = _GizmosProxy$TrackCol.SATELLITE,
        PLANET = _GizmosProxy$TrackCol.PLANET,
        DWARF = _GizmosProxy$TrackCol.DWARF,
        MINOR = _GizmosProxy$TrackCol.MINOR,
        COMET = _GizmosProxy$TrackCol.COMET,
        _SOLAR = _GizmosProxy$TrackCol.SOLAR,
        TrackAtt = GizmosProxy.TrackAtt,
        _GizmosProxy$Segments$1 = GizmosProxy.Segments,
        CIRCLE$1 = _GizmosProxy$Segments$1.CIRCLE,
        LINE = _GizmosProxy$Segments$1.LINE;
      var SOLAR_DIR = AxisRotation.SOLAR_DIR;
      var SOLAR_TRACK_ATT = [-2.5, -2, -0.5, 0];
      var SOLAR_TRACK_LENGTH = 3;
      var v3a$b = new Vec3();
      var mat4 = new Mat4();
      var color$4 = new Color();
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/cosmos', 'chunks:///cosmos.js'); 
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