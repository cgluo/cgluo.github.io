System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///env-0392683e.js", ['cc', './rollupPluginModLoBabelHelpers-7ebc65e7.js'], function (exports, module) {
  var cclegacy, director, Node, find, Camera, Vec3, CCObject, _decorator, Button, Toggle, Rect, Component, Prefab, instantiate, Enum, UITransform, view, Vec2, UI, StencilManager, gfx, math, CCInteger, NodeEventType, Widget, UIOpacity, Tween, tween, v3, Quat, resources, JsonAsset, SpriteFrame, assetManager, Texture2D, AudioClip, game, Game, System, ProgressBar, Label, Canvas, CCString, screen, AudioSource, profiler, js, sys, _createForOfIteratorHelperLoose, _extends, _createClass, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Node = module.Node;
      find = module.find;
      Camera = module.Camera;
      Vec3 = module.Vec3;
      CCObject = module.CCObject;
      _decorator = module._decorator;
      Button = module.Button;
      Toggle = module.Toggle;
      Rect = module.Rect;
      Component = module.Component;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Enum = module.Enum;
      UITransform = module.UITransform;
      view = module.view;
      Vec2 = module.Vec2;
      UI = module.UI;
      StencilManager = module.StencilManager;
      gfx = module.gfx;
      math = module.math;
      CCInteger = module.CCInteger;
      NodeEventType = module.NodeEventType;
      Widget = module.Widget;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Quat = module.Quat;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
      SpriteFrame = module.SpriteFrame;
      assetManager = module.assetManager;
      Texture2D = module.Texture2D;
      AudioClip = module.AudioClip;
      game = module.game;
      Game = module.Game;
      System = module.System;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      Canvas = module.Canvas;
      CCString = module.CCString;
      screen = module.screen;
      AudioSource = module.AudioSource;
      profiler = module.profiler;
      js = module.js;
      sys = module.sys;
    }, function (module) {
      _createForOfIteratorHelperLoose = module.f;
      _extends = module.g;
      _createClass = module.h;
      _applyDecoratedDescriptor = module._;
      _inheritsLoose = module.a;
      _initializerDefineProperty = module.b;
      _assertThisInitialized = module.c;
      _asyncToGenerator = module.d;
      _regeneratorRuntime = module.e;
    }],
    execute: function () {
      exports({
        a: findNode,
        b: findComp,
        d: setBottom,
        f: findCamera,
        g: group,
        i: isCN,
        t: tip
      });
      cclegacy._RF.push({}, "8d7f1aSUZ1AKYeSBIdfQDaU", "notifications", undefined);
      // framework notifications exports
      var Notifications = exports('N', {
        Time: {
          TICK: '__cfw__.Time:TICK',
          POST_TICK: '__cfw__.Time:POST_TICK',
          SECOND: '__cfw__.Time:SECOND',
          MINUTE: '__cfw__.Time:MINUTE',
          SPAN: '__cfw__.Time:SPAN'
        },
        UI: {
          ENABLE_UI_SORTING: '__cfw__.UI:ENABLE_UI_SORTING',
          DISABLE_UI_SORTING: '__cfw__.UI:DISABLE_UI_SORTING'
        }
      });

      // framework inner notifications
      var __cfw_notifications__ = {
        UI: {
          OPEN: '__cfw__.UI:OPEN',
          CLOSE: '__cfw__.UI:CLOSE',
          INFO: '__cfw__.UI:INFO',
          REGISTER: '__cfw__.UI:REGISTER',
          UNREGISTER: '__cfw__.UI:UNREGISTER'
        },
        Audio: {
          DEFAULT_BUTTON: "__cfw__.Audio:DEFAULT_BUTTON",
          DEFAULT_TOGGLE: "__cfw__.Audio:DEFAULT_TOGGLE"
        }
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "92c0bbxljpKSJ9ZME5Ldee1", "constants", undefined);
      var Direction8 = /*#__PURE__*/function (Direction8) {
        Direction8[Direction8["NONE"] = 0] = "NONE";
        Direction8[Direction8["UP"] = 1] = "UP";
        Direction8[Direction8["UP_RIGHT"] = 2] = "UP_RIGHT";
        Direction8[Direction8["RIGHT"] = 3] = "RIGHT";
        Direction8[Direction8["DOWN_RIGHT"] = 4] = "DOWN_RIGHT";
        Direction8[Direction8["DOWN"] = 5] = "DOWN";
        Direction8[Direction8["DOWN_LEFT"] = 6] = "DOWN_LEFT";
        Direction8[Direction8["LEFT"] = 7] = "LEFT";
        Direction8[Direction8["UP_LEFT"] = 8] = "UP_LEFT";
        return Direction8;
      }({});
      var ExecutionOrder = {
        AFTER_WIDGET: 100
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9f828FU/NZM5JLQwsUDCjh9", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3a9f7+qDBpKD6JACL0z4Cse", "notifier", undefined);
      /**
       * @class 通知发送器
       * @author DuskyHuang 圣子
       * @description 用于管理全局通知的监听和发送，支持优先级排序
      */
      var Notifier = /*#__PURE__*/function () {
        function Notifier(name, _map) {
          if (name === void 0) {
            name = "";
          }
          if (_map === void 0) {
            _map = new Map();
          }
          this.name = name;
          this._map = _map;
        }

        /**
         * 添加通知的监听
         * @param type 通知类型
         * @param handler 回调方法
         * @param observer 回调上下文
         * @param once 是否执行一次后删除，默认否
         * @param priority 优先级，越大越先调用，默认=0
         * @return 是否成功添加
         * @explain 当重复添加相同回调方法和上下文的监听时，添加失败
        */
        var _proto = Notifier.prototype;
        _proto.attach = function attach(type, handler, observer, once, priority) {
          if (once === void 0) {
            once = false;
          }
          if (priority === void 0) {
            priority = 0;
          }
          if (isEmpty(type)) console.warn('attach empty type');
          priority = isNum(priority) ? priority : 0;
          if (!Array.isArray(this._map.get(type))) this._map.set(type, []);
          var recs = this._map.get(type);
          for (var _iterator = _createForOfIteratorHelperLoose(recs), _step; !(_step = _iterator()).done;) {
            var _rec = _step.value;
            var h = _rec.handler,
              o = _rec.observer;
            if (handler === h && !!observer && observer === o) {
              console.warn('duplicate attached');
              return false;
            }
          }
          var idx = recs.findIndex(function (rec) {
            return rec.priority < priority;
          });
          var rec = {
            handler: handler,
            observer: observer,
            priority: priority,
            once: once
          };
          idx < 0 ? recs.push(rec) : recs.splice(idx, 0, rec);
          return true;
        }

        /**
         * 移除通知监听
         * @param type 通知类型
         * @param handler 回调方法
         * @param observer 回调上下文
         * @return 移除条数（命中条数）
         * @explain 当指定回调上下文时，只有与该上下文相同的一条通知监听会被移除，否则全部移除
         */;
        _proto.detach = function detach(type, handler, observer) {
          var recs = this._map.get(type),
            removed = 0;
          if (notEmptyArr(recs)) {
            for (var i = 0; i < recs.length; i++) {
              var _recs$i = recs[i],
                h = _recs$i.handler,
                o = _recs$i.observer;
              var bingo2 = !observer && handler === h;
              var bingo1 = !!observer && observer === o && handler === h;
              if (bingo1 || bingo2) {
                recs.splice(i, 1);
                i--;
                removed++;
              }
            }
          }
          return removed;
        }

        /**
         * 移除某上下文相关的所有监听通知
         * @param observer 回调上下文
         * @return 移除条数（命中条数）
         */;
        _proto.unload = function unload(observer) {
          var removed = 0;
          if (!!observer) {
            var values = Array.from(this._map.values());
            for (var _i = 0, _values = values; _i < _values.length; _i++) {
              var recs = _values[_i];
              for (var i = 0; i < recs.length; i++) {
                var o = recs[i].observer;
                if (observer === o) {
                  recs.splice(i, 1);
                  i--;
                  removed++;
                }
              }
            }
          }
          return removed;
        }

        /**
         * 发送通知
         * @param type 通知类型
         * @params args 参数罗列
         * @return 移除条数（命中条数）
         */;
        _proto.dispatch = function dispatch(type) {
          var records = this._map.get(type);
          if (notEmptyArr(records)) {
            var length = records.length;
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            for (var i = 0; i < length; i++) {
              var _records$i = records[i],
                observer = _records$i.observer,
                handler = _records$i.handler,
                once = _records$i.once;
              try {
                Function.invoke.apply(Function, [handler, observer].concat(args));
              } catch (e) {
                console.error(e);
              }
              if (once) {
                records.splice(i, 1);
                i--;
              }
            }
            return length;
          } else return 0;
        }

        /**
         * 是否注册了某类型的通知
         * @param type 通知类型
         * @return 判断结果
         */;
        _proto.hasType = function hasType(type) {
          return notEmptyArr(this._map.get(type));
        }

        /**
         * 是否注册了某监听回调
         * @param handler 回调方法
         * @param observer 回调上下文
         * @return 判断结果
         * @explain 当指定回调上下文时，只有与该上下文相同的通知才被视为相同。
         */;
        _proto.hasHandler = function hasHandler(handler, observer) {
          var values = this._map.values();
          for (var _iterator2 = _createForOfIteratorHelperLoose(values), _step2; !(_step2 = _iterator2()).done;) {
            var recs = _step2.value;
            for (var _iterator3 = _createForOfIteratorHelperLoose(recs), _step3; !(_step3 = _iterator3()).done;) {
              var rec = _step3.value;
              var h = rec.handler,
                o = rec.observer;
              if (!o && handler === h) return true;
              if (!!o && observer === o && handler === h) return true;
            }
          }
          return false;
        }

        /**
         * 清空某类通知
         * @param type 需要移除的通知类型
         * @return 是否有通知被移除
         */;
        _proto.clear = function clear(type) {
          var exist = this._map.has(type);
          if (exist) this._map["delete"](type);
          return exist;
        }

        /**
         * 清空所有通知
         */;
        _proto.clearAll = function clearAll() {
          this._map.clear();
        };
        return Notifier;
      }();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "55ca5J324ZI1agsZ7ME7IeR", "boot", undefined);

      // notifiers
      var notifier = new Notifier('cfw-global');
      var bridge = new Notifier('cfw-bridge');
      var inner = new Notifier('cfw-inner');

      // mvc members
      var controllers = [];
      var mediators = [];
      var proxies = [];

      // ecs members
      var entities = [];

      // managers
      var managers = {};
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3ee87YGAddHU4MhWAG8W9GP", "finder", undefined);

      // 相对路径

      // 祖先节点
      // 子节点（直接后代）
      // 后代节点
      // 自身/兄弟节点
      // 根节点
      /**
       * 寻找指定节点
       * @param name 节点名称
       * @param from 从指定节点或组件开始寻找
       * @param relative 相对路径符
       * @param paths 寻找路径罗列
       * @return 返回搜到的节点
       * @example
       * ```
       * // 场景根节点 [Root]
       * findNode('Root');
       * findNode('Root', this.node, '/');
       * 
       * // 场景指定路径节点 Root->Parent->[Son]
       * findNode('Son', 'Root', 'Parent');
       * 
       * // 兄弟节点 Self->Parent->[Brother]
       * findNode('Brother', this.node, '.'); // = this.node.parent.getChildByName('Brother');
       * 
       * // 儿子节点 Self->['Son']
       * findNode('Son', this.node, '/.'); // = this.node.getChildByName('Son');
       * findNode('Daughter', this.node); // = this.node.getChildByName('Daughter');
       * 
       * // 孙子节点 Self->Son->Grandson->[GreatGrandson]
       * findNode('GreatGrandson', this.node, 'Son', 'Grandson', [...]);
       * 
       * // 子嗣节点 Self->Son->...->['Descendant']
       * findNode('Descendant', this.node, '/..'); // 向下递归直到直到
       * 
       * // 祖先节点 Self->Parent->...->['Ancestor']
       * findNode('Ancestor', this.node, '..'); // 向上回溯直到找到
       * ```
      */
      function findNode(name, arg) {
        var scene = director.getScene();
        for (var _len = arguments.length, rests = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rests[_key - 2] = arguments[_key];
        }
        if (isNullish(arg) || arg === '/') {
          return scene.getChildByName(name);
        } else if (isStr(arg)) {
          return scene.getChildByPath([arg].concat(rests, [name]).join('/'));
        } else {
          var node = arg instanceof Node ? arg : arg.node;
          if (!node) return null;
          var _relative = rests.head;
          if (_relative === '/') {
            return scene.getChildByName(name);
          } else if (_relative === '.') {
            var _node$parent$getChild, _node$parent;
            return (_node$parent$getChild = (_node$parent = node.parent) == null ? void 0 : _node$parent.getChildByName(name)) != null ? _node$parent$getChild : null;
          } else if (_relative === '/.' || _relative === undefined) {
            return node.getChildByName(name);
          } else if (_relative === '/..') {
            return _recurseName(name, [node]);
          } else if (_relative === '..') {
            while (!!node.parent) {
              node = node.parent;
              if (node.name === name) return node;
            }
            return null;
          } else {
            return find([].concat(rests, [name]).join('/'), node);
          }
        }
      }

      /**
       * 寻找指定组件
       * @param Comp 组件类型
       * @param from 从指定节点或组件开始寻找
       * @param relative 相对路径符
       * @param paths 寻找路径罗列
       * @return 返回搜到的组件
       * @example
       * ```
       * // 场景根节点 [Root]
       * findNode('Root');
       * findNode('Root', this.node, '/');
       * 
       * // 场景指定路径节点 Root->Parent->[Son]
       * findNode('Son', 'Root', 'Parent');
       * 
       * // 兄弟节点 Self->Parent->[Brother]
       * findNode('Brother', this.node, '.'); // = this.node.parent.getChildByName('Brother');
       * 
       * // 儿子节点 Self->['Son']
       * findNode('Son', this.node, '/.'); // = this.node.getChildByName('Son');
       * findNode('Daughter', this.node); // = this.node.getChildByName('Daughter');
       * 
       * // 孙子节点 Self->Son->Grandson->[GreatGrandson]
       * findNode('GreatGrandson', this.node, 'Son', 'Grandson', [...]);
       * 
       * // 子嗣节点 Self->Son->...->['Descendant']
       * findNode('Descendant', this.node, '/..'); // 向下递归直到直到
       * 
       * // 祖先节点 Self->Parent->...->['Ancestor']
       * findNode('Ancestor', this.node, '..'); // 向上回溯直到找到
       * ```
      */

      function findComp(Comp, arg) {
        var scene = director.getScene();
        for (var _len2 = arguments.length, rests = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          rests[_key2 - 2] = arguments[_key2];
        }
        if (isNullish(arg) || arg === '/') {
          return scene.getComponentInChildren(Comp);
        } else if (isStr(arg)) {
          var _scene$getChildByPath;
          return (_scene$getChildByPath = scene.getChildByPath([arg].concat(rests).join('/'))) == null ? void 0 : _scene$getChildByPath.getComponent(Comp);
        } else {
          var node = arg instanceof Node ? arg : arg.node;
          if (!node) return null;
          var _relative2 = rests.head;
          if (_relative2 === '/') {
            return scene.getComponentInChildren(Comp);
          } else if (_relative2 === '.') {
            var _node$parent2;
            return (_node$parent2 = node.parent) == null ? void 0 : _node$parent2.getComponentInChildren(Comp);
          } else if (_relative2 === '/.' || _relative2 === undefined) {
            return node.getComponentInChildren(Comp);
          } else if (_relative2 === '/..') {
            return _recurseComp(Comp, [node]);
          } else if (_relative2 === '..') {
            while (!!node.parent) {
              node = node.parent;
              var comp = node.getComponent(Comp);
              if (!!comp) return comp;
            }
            return null;
          } else {
            node = find(rests.join('/'), node);
            return !!node ? node.getComponent(Comp) : null;
          }
        }
      }

      /**
       * 寻找场景中的主摄相机
       * @param paths 主相机所在路径
       * @return 寻找到的主摄像相机
       */
      function findCamera() {
        var _ref, _findComp;
        for (var _len3 = arguments.length, paths = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          paths[_key3] = arguments[_key3];
        }
        if (notEmptyArr(paths)) {
          return findComp.apply(void 0, [Camera].concat(paths));
        }
        return (_ref = (_findComp = findComp(Camera, 'Main Camera')) != null ? _findComp : director.getScene().getComponentInChildren(Camera)) != null ? _ref : null;
      }
      function _recurseName(name, nodes) {
        var update = [];
        for (var _iterator5 = _createForOfIteratorHelperLoose(nodes), _step5; !(_step5 = _iterator5()).done;) {
          var node = _step5.value;
          var _find = node.getChildByName(name);
          if (!_find) return _find;
          update.push.apply(update, node.children);
        }
        return _recurseName(name, update);
      }
      function _recurseComp(Comp, nodes) {
        var update = [];
        for (var _iterator6 = _createForOfIteratorHelperLoose(nodes), _step6; !(_step6 = _iterator6()).done;) {
          var node = _step6.value;
          var _find2 = node.getComponentInChildren(Comp);
          if (!_find2) return _find2;
          update.push.apply(update, node.children);
        }
        return _recurseComp(Comp, update);
      }
      cclegacy._RF.pop();
      var CjsLoader = /*#__PURE__*/function () {
        function CjsLoader() {
          this._registry = {};
          this._moduleCache = {};
        }

        /**
         * Defines a CommonJS module.
         * @param id Module ID.
         * @param factory The factory.
         * @param resolveMap An object or a function returning object which records the module specifier resolve result.
         * The later is called as "deferred resolve map" and would be invocated right before CommonJS code execution.
         */
        var _proto = CjsLoader.prototype;
        _proto.define = function define(id, factory, resolveMap) {
          this._registry[id] = {
            factory: factory,
            resolveMap: resolveMap
          };
        }

        /**
         * Requires a CommonJS module.
         * @param id Module ID.
         * @returns The module's `module.exports`.
         */;
        _proto.require = function require(id) {
          return this._require(id);
        };
        _proto.throwInvalidWrapper = function throwInvalidWrapper(requestTarget, from) {
          throw new Error("Module '" + requestTarget + "' imported from '" + from + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _proto._require = function _require(id, parent) {
          var cachedModule = this._moduleCache[id];
          if (cachedModule) {
            return cachedModule.exports;
          }
          var module = {
            id: id,
            exports: {}
          };
          this._moduleCache[id] = module;
          this._tryModuleLoad(module, id);
          return module.exports;
        };
        _proto._resolve = function _resolve(specifier, parent) {
          return this._resolveFromInfos(specifier, parent) || this._throwUnresolved(specifier, parent);
        };
        _proto._resolveFromInfos = function _resolveFromInfos(specifier, parent) {
          var _cjsInfos$parent$reso, _cjsInfos$parent;
          if (specifier in cjsInfos) {
            return specifier;
          }
          if (!parent) {
            return;
          }
          return (_cjsInfos$parent$reso = (_cjsInfos$parent = cjsInfos[parent]) == null ? void 0 : _cjsInfos$parent.resolveCache[specifier]) != null ? _cjsInfos$parent$reso : undefined;
        };
        _proto._tryModuleLoad = function _tryModuleLoad(module, id) {
          var threw = true;
          try {
            this._load(module, id);
            threw = false;
          } finally {
            if (threw) {
              delete this._moduleCache[id];
            }
          }
        };
        _proto._load = function _load(module, id) {
          var _this$_loadWrapper = this._loadWrapper(id),
            factory = _this$_loadWrapper.factory,
            resolveMap = _this$_loadWrapper.resolveMap;
          var vendorRequire = this._createRequire(module);
          var require = resolveMap ? this._createRequireWithResolveMap(typeof resolveMap === 'function' ? resolveMap() : resolveMap, vendorRequire) : vendorRequire;
          factory(module.exports, require, module);
        };
        _proto._loadWrapper = function _loadWrapper(id) {
          if (id in this._registry) {
            return this._registry[id];
          } else {
            return this._loadHostProvidedModules(id);
          }
        };
        _proto._loadHostProvidedModules = function _loadHostProvidedModules(id) {
          return {
            factory: function factory(_exports, _require, module) {
              if (typeof require === 'undefined') {
                throw new Error("Current environment does not provide a require() for requiring '" + id + "'.");
              }
              try {
                module.exports = require(id);
              } catch (err) {
                throw new Error("Exception thrown when calling host defined require('" + id + "').", {
                  cause: err
                });
              }
            }
          };
        };
        _proto._createRequire = function _createRequire(module) {
          var _this = this;
          return function (specifier) {
            return _this._require(specifier, module);
          };
        };
        _proto._createRequireWithResolveMap = function _createRequireWithResolveMap(requireMap, originalRequire) {
          return function (specifier) {
            var resolved = requireMap[specifier];
            if (resolved) {
              return originalRequire(resolved);
            } else {
              throw new Error('Unresolved specifier ' + specifier);
            }
          };
        };
        _proto._throwUnresolved = function _throwUnresolved(specifier, parentUrl) {
          throw new Error("Unable to resolve " + specifier + " from " + parent + ".");
        };
        return CjsLoader;
      }();
      var loader = exports('l', new CjsLoader());
      var __cjsMetaURL = 'file:///Users/jackie/work/res/xkswz-master-8cba60886f0edaaf30045d45b4281ea799ea3d07/cocos-project/node_modules/@dusky/ts-common/dist/index.js';
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        !function () {
          var t = {
              605: function _() {
                var t = this && this.__spreadArray || function (t, r, n) {
                  if (n || 2 === arguments.length) for (var e, i = 0, o = r.length; i < o; i++) !e && i in r || (e || (e = Array.prototype.slice.call(r, 0, i)), e[i] = r[i]);
                  return t.concat(e || Array.prototype.slice.call(r));
                };
                Array.fill = function (t, r) {
                  return void 0 === r && (r = 1), new Array(r).fill(t);
                }, Array.nature = function (t, r, n) {
                  void 0 === r && (r = 1), void 0 === n && (n = 1);
                  var e = Array.from({
                    length: t - r + 1
                  }, function (t, n) {
                    return n + r;
                  });
                  return 1 === n ? e : e.filter(function (t) {
                    return (t - r) % n == 0;
                  });
                }, Array.flatten = function (t) {
                  if (!notEmptyArr(t)) return [];
                  var r = [];
                  return t.forEach(function (t) {
                    notEmptyArr(t) ? r.push.apply(r, Array.flatten(t)) : r.push(t);
                  }), r;
                }, Object.defineProperties(Array.prototype, {
                  head: {
                    enumerable: !1,
                    configurable: !0,
                    get: function get() {
                      return this[0];
                    }
                  },
                  tail: {
                    enumerable: !1,
                    configurable: !0,
                    get: function get() {
                      return this[this.length - 1];
                    }
                  }
                }), Array.prototype.heads = function (t) {
                  return this.slice(0, t);
                }, Array.prototype.tails = function (r) {
                  return r >= this.length ? t([], this, !0) : this.slice(this.length - r);
                }, Array.prototype.copy = function () {
                  return t([], this, !0);
                }, Array.prototype.loopAt = function (t) {
                  return notEmptyArr(this) ? this[t % this.length] : void 0;
                }, Array.prototype.random = function () {
                  for (var t, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                  var e = notEmptyArr(r) ? (t = this.copy()).remove.apply(t, r) : this;
                  return notEmptyArr(e) ? e[Math.randomInt(0, e.length - 1)] : void 0;
                }, Array.prototype.contains = function () {
                  for (var t = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                  return r.every(function (r) {
                    return t.includes(r);
                  });
                }, Array.prototype.excludes = function () {
                  for (var t = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                  return r.every(function (r) {
                    return !t.includes(r);
                  });
                }, Array.prototype.all = function () {
                  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                  return this.every(function (r) {
                    return t.some(function (t) {
                      return Object.is(r, t);
                    });
                  });
                }, Array.prototype.notAll = function () {
                  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                  return this.some(function (r) {
                    return t.every(function (t) {
                      return !Object.is(r, t);
                    });
                  });
                }, Array.prototype.containsInstance = function () {
                  for (var t = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                  return r.some(function (r) {
                    return t.some(function (t) {
                      return t instanceof r;
                    });
                  });
                }, Array.prototype.allInstance = function () {
                  for (var t = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                  return r.every(function (r) {
                    return t.every(function (t) {
                      return t instanceof r;
                    });
                  });
                }, Array.prototype.unique = function () {
                  var t = new Set(this);
                  return this.length = 0, this.push.apply(this, Array.from(t)), this;
                }, Array.prototype.clean = function () {
                  for (var t = 0; t < this.length; t++) null !== this[t] && void 0 !== this[t] && "" !== this[t] || (this.splice(t, 1), t--);
                  return this;
                }, Array.prototype.insert = function (r) {
                  for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
                  return this.splice.apply(this, t([r, 0], n, !1)), this;
                }, Array.prototype["delete"] = function (t, r) {
                  return void 0 === r && (r = this.length - t), this.splice(t, r), this;
                }, Array.prototype.remove = function () {
                  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                  if (!notEmptyArr(t)) return this;
                  for (var n = 0; n < this.length; n++) t.includes(this[n]) && (this.splice(n, 1), n--);
                  return this;
                }, Array.prototype.exchange = function (t, r) {
                  var n,
                    e = [t >= 0 ? t : this.length + t, r >= 0 ? r : this.length + r],
                    i = e[0],
                    o = e[1];
                  return i !== o && (n = [this[o], this[i]], this[i] = n[0], this[o] = n[1]), this;
                }, Array.prototype.pushUnique = function () {
                  for (var t = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                  return this.push.apply(this, r.copy().unique().filter(function (r) {
                    return t.excludes(r);
                  })), this;
                }, Array.prototype.unshiftUnique = function () {
                  for (var t = this, r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                  return this.unshift.apply(this, r.copy().unique().filter(function (r) {
                    return t.excludes(r);
                  })), this;
                }, Array.prototype.descBy = function () {
                  for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
                  return this.sort(function (n, e) {
                    return Object.deepGet.apply(Object, t([e], r, !1)) - Object.deepGet.apply(Object, t([n], r, !1));
                  });
                }, Array.prototype.shuffle = function () {
                  var t = this;
                  return notEmptyArr(this) && this.forEach(function (r, n) {
                    var e,
                      i = Math.randomInt(0, t.length - 1);
                    n != i && (e = [t[i], t[n]], t[n] = e[0], t[i] = e[1]);
                  }), this;
                }, Array.prototype.swingCut = function (t) {
                  if (notEmptyArr(this)) {
                    var r = this.length,
                      n = isNum(t) ? t % r : Math.randomInt(0, r - 1);
                    this.push.apply(this, this.heads(n)), this["delete"](0, n);
                  }
                  return this;
                }, Object.defineProperties(Array.prototype, {
                  max: {
                    enumerable: !1,
                    configurable: !0,
                    get: function get() {
                      return Math.max.apply(Math, this);
                    }
                  },
                  min: {
                    enumerable: !1,
                    configurable: !0,
                    get: function get() {
                      return Math.min.apply(Math, this);
                    }
                  }
                }), Array.prototype.asc = function () {
                  return this.sort(function (t, r) {
                    return t - r;
                  });
                }, Array.prototype.desc = function () {
                  return this.sort(function (t, r) {
                    return r - t;
                  });
                };
              },
              441: function _() {
                var t = this && this.__spreadArray || function (t, r, n) {
                  if (n || 2 === arguments.length) for (var e, i = 0, o = r.length; i < o; i++) !e && i in r || (e || (e = Array.prototype.slice.call(r, 0, i)), e[i] = r[i]);
                  return t.concat(e || Array.prototype.slice.call(r));
                };
                Function.sleep = function (t, r) {
                  return new Promise(function (n) {
                    return setTimeout(function () {
                      return n(r);
                    }, t);
                  });
                }, Function.invoke = function (t, r) {
                  for (var n = [], e = 2; e < arguments.length; e++) n[e - 2] = arguments[e];
                  if (isFunc(t)) return r ? Reflect.apply(t, r, n) : t.apply(void 0, n);
                }, Function.wait = function (r, n, e) {
                  for (var i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                  return new Promise(function (o) {
                    return setTimeout(function () {
                      return o(Function.invoke.apply(Function, t([n, e], i, !1)));
                    }, r);
                  });
                };
              },
              490: function _() {
                Math.randomRange = function (t, r) {
                  return isNum(t) && isNum(r) ? Math.min(t, r) + Math.random() * Math.abs(r - t) : NaN;
                }, Math.randomInt = function (t, r) {
                  if (!isNum(t) || !isNum(r)) return NaN;
                  var n = [Math.ceil(Math.min(t, r)), Math.floor(Math.max(t, r))],
                    e = n[0],
                    i = n[1];
                  return Math.floor(Math.random() * (i - e + 1)) + e;
                }, Math.randomBool = function (t) {
                  return void 0 === t && (t = .5), !!(Math.random() < t);
                }, Math.parseDegree = function (t, r) {
                  void 0 === r && (r = !1);
                  var n = 180 * t / Math.PI;
                  return r ? (n %= 360) + (n < 0 ? 360 : 0) : n;
                }, Math.parseRadian = function (t, r) {
                  void 0 === r && (r = !1);
                  var n = t * Math.PI / 180;
                  return r ? (n %= 2 * Math.PI) + (n < 0 ? 2 * Math.PI : 0) : n;
                }, Math.sum = function () {
                  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                  return t.reduce(function (t, r) {
                    return t + r;
                  }, 0);
                }, Math.sumSqr = function () {
                  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                  return t.reduce(function (t, r) {
                    return t + r * r;
                  }, 0);
                }, Math.avg = function () {
                  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                  return t.length <= 0 ? 0 : Math.sum.apply(Math, t) / t.length;
                }, Math.percentage = function (t, r, n) {
                  if (void 0 === r && (r = 1), void 0 === n && (n = 0), !isNum(t) || !isNum(r) || 0 === r) return 0;
                  var e = Math.pow(10, n);
                  return Math.round(t / r * 100 * e) / e;
                }, Math.lerp = function (t, r, n) {
                  return t + (r - t) * n;
                }, Math.clamp = function (t, r, n) {
                  var e = Math.min(r, n),
                    i = Math.max(r, n);
                  return t < e ? e : t > i ? i : t;
                }, Math.clamp01 = function (t) {
                  return t < 0 ? 0 : t > 1 ? 1 : t;
                };
              },
              599: function _() {
                Number.fix = function (t, r) {
                  return void 0 === r && (r = 2), Number(t.toFixed(r));
                }, Number.precise = function (t, r) {
                  return isNum(r) ? Number(t.toPrecision(r)) : t;
                };
              },
              146: function _() {
                Object.enumKeys = function (t) {
                  return Object.keys(t).filter(function (t) {
                    return isNaN(parseInt(t));
                  });
                }, Object.enumValues = function (t) {
                  return Object.enumKeys(t).map(function (r) {
                    return t[r];
                  });
                }, Object.deepGet = function (t) {
                  for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
                  if (!isEmpty(t)) {
                    for (var e = t, i = 0, o = r; i < o.length; i++) {
                      var u = o[i];
                      if (isNullish(u) || "" === u) return;
                      if (isEmpty(e[u])) return e[u];
                      e = e[u];
                    }
                    return e;
                  }
                }, Object.clean = function (t) {
                  return isEmpty(t) || Object.keys(t).forEach(function (r) {
                    var n = t[r];
                    null != n && "" !== n || delete t[r];
                  }), t;
                }, Object.clone = function (t) {
                  return isNullish(t) ? t : Object.assign(Object.create(Object.getPrototypeOf(t)), t);
                }, Object.deepClone = function (t) {
                  try {
                    return isArr(t) ? t.map(function (t) {
                      return Object.deepClone(t);
                    }) : isPrimitive(t) || isFunc(t) ? t : Object.keys(t).reduce(function (r, n) {
                      return Reflect.set(r, n, Object.deepClone(Reflect.get(t, n))), r;
                    }, {});
                  } catch (t) {
                    console.error(t);
                  }
                }, Object.set = function (t, r, n) {
                  return Reflect.set(t, r, n), t;
                }, Object.defineProperties(Object.prototype, {
                  hasOwn: {
                    value: function value(t, r) {
                      return Object.prototype.hasOwnProperty.call(this, t) && (!r || typeof this[t] === r);
                    },
                    enumerable: !1,
                    configurable: !0
                  }
                }), globalThis.assign = function (t, r, n) {
                  for (var e = [], i = 3; i < arguments.length; i++) e[i - 3] = arguments[i];
                  return (notEmptyArr(e) ? e : Object.keys(n ? r : t)).forEach(function (n) {
                    void 0 !== r[n] && (t[n] = r[n]);
                  }), t;
                }, globalThis.assignExcept = function (t, r, n) {
                  for (var e, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                  return (e = Object.keys(n ? r : t)).remove.apply(e, i).forEach(function (n) {
                    void 0 !== r[n] && (t[n] = r[n]);
                  }), t;
                };
              },
              241: function _() {
                Array.merge = function () {
                  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                  return t.reduce(function (t, r) {
                    return t.concat(r);
                  }, []);
                }, Array.union = function () {
                  for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                  return Array.from(new Set(Array.merge.apply(Array, t)));
                }, Array.intersection = function (t, r) {
                  return t.reduce(function (t, n) {
                    var e = r.indexOf(n);
                    return e >= 0 && (r.splice(e, 1), t.push(n)), t;
                  }, []);
                }, Array.subtraction = function (t, r) {
                  return t.reduce(function (t, n) {
                    var e = r.indexOf(n);
                    return e >= 0 ? r.splice(e, 1) : t.push(n), t;
                  }, []);
                }, Array.symComplement = function (t, r) {
                  return Array.merge(Array.subtraction(t, r), Array.subtraction(r, t));
                };
              },
              552: function _() {
                var t = {
                  CHN: new RegExp("^[一-龥]{1,}$"),
                  ENG: new RegExp("^[A-Za-z]+$"),
                  NUM: new RegExp("^[0-9]+$")
                };
                String.Length = function (t) {
                  return t.split("").reduce(function (t, r) {
                    return t + (r.charCodeAt(0) >= 0 && r.charCodeAt(0) <= 128 ? 1 : 2);
                  }, 0);
                }, String.ellipsis = function (t, r, n) {
                  void 0 === n && (n = "…");
                  for (var e, i = r - String.Length(n), o = "", u = 0, a = t.split(""); u < a.length; u++) {
                    var c = a[u];
                    if ((i -= (e = c.charCodeAt(0)) >= 0 && e <= 128 ? 1 : 2) < 0) return o + n;
                    o += c;
                  }
                  return t;
                }, String.uuid = function (t, r) {
                  void 0 === r && (r = !1);
                  for (var n = ""; n.length < t;) n += Math.random().toString(r ? 10 : 36).slice(2);
                  return n.substring(0, t);
                }, String.random = function (t, r) {
                  void 0 === r && (r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
                  var n = "",
                    e = r.length;
                  if (t <= 0 || e <= 0 || !r) return n;
                  for (var i = t; i > 0; --i) n += r[Math.floor(Math.random() * e)];
                  return n;
                }, String.reverse = function (t) {
                  return t.split("").reverse().join("");
                }, String.isChinese = function (r) {
                  return isStr(r) && t.CHN.test(r);
                }, String.isLetters = function (r) {
                  return isStr(r) && t.ENG.test(r);
                }, String.isNumeric = function (r) {
                  return isNum(r) || isStr(r) && t.NUM.test(r);
                };
              },
              788: function _() {
                globalThis.isArr = function (t) {
                  return Array.isArray(t);
                }, globalThis.isNum = function (t) {
                  return Number.isFinite(t);
                }, globalThis.isStr = function (t) {
                  return "string" == typeof t;
                }, globalThis.isBool = function (t) {
                  return "boolean" == typeof t;
                }, globalThis.isFunc = function (t) {
                  return "function" == typeof t;
                }, globalThis.isPrimitive = function (t) {
                  if (null == t) return !0;
                  switch (typeof t) {
                    case "string":
                    case "number":
                    case "bigint":
                    case "boolean":
                    case "symbol":
                      return !0;
                  }
                  return !1;
                }, globalThis.isObject = function (t) {
                  return "[object Object]" === Object.prototype.toString.call(t);
                }, globalThis.isNullish = function (t) {
                  return null == t;
                }, globalThis.isEmpty = function (t) {
                  return !!(Object.is(t, null) || Object.is(t, void 0) || Object.is(t, NaN)) || !(!Object.is(t, 0) && !Object.is(t, "")) || !(!Array.isArray(t) || 0 !== t.length) || "object" == typeof t && Object.keys(t).length <= 0;
                }, globalThis.notEmpty = function (t) {
                  return !isEmpty(t);
                }, globalThis.notEmptyArr = function (t) {
                  return Array.isArray(t) && t.length > 0;
                }, globalThis.isEqual = function (t, r) {
                  return t instanceof Object && r instanceof Object ? Object.keys(t).length === Object.keys(r).length && Object.keys(t).every(function (n) {
                    return n in r && isEqual(t[n], r[n]);
                  }) : isNaN(t) && isNaN(r) || t === r;
                }, globalThis.isRGB = function (t) {
                  return Number.isFinite(t) && t >= 0 && t <= 16777215;
                }, globalThis.isRGBA = function (t) {
                  return Number.isFinite(t) && t >= 0 && t <= 4294967295;
                };
              }
            },
            r = {};
          function n(e) {
            var i = r[e];
            if (void 0 !== i) return i.exports;
            var o = r[e] = {
              exports: {}
            };
            return t[e].call(o.exports, o, o.exports, n), o.exports;
          }
          !function () {
            n(788), n(146), n(490), n(605), n(241), n(441), n(552), n(599);
          }();
        }();

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});

      // I am the facade module who provides access to the CommonJS module './index.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./index.js', 'file:///Users/jackie/work/res/xkswz-master-8cba60886f0edaaf30045d45b4281ea799ea3d07/cocos-project/node_modules/@dusky/ts-common/dist/index.mjs?cjs=&original=.js');
      }
      loader.require(__cjsMetaURL);
      cclegacy._RF.push({}, "320d89pRVxAtrqEt852wJVQ", "object", undefined);

      /**
       * 目标是否为类类型
       * @param target 判断目标
       * @return 返回结果（类型约束）
       */
      function isClass(target) {
        return typeof target === 'function' && /^class\s/.test(Function.prototype.toString.call(target));
      }

      /**
       * 判断CC对象是否含有标志位
       * @param target 判断目标
       * @param flag 判断标志位
       * @return 判断结果
       */
      function checkFlags(target, flag) {
        return !!(target._objFlags & flag);
      }

      /**
       * 判断CC对象是否已经加载
       * @param target 判断目标
       * @return 判断结果
       */
      function IsOnLoadCalled(target) {
        return checkFlags(target, CCObject.Flags.IsOnLoadCalled);
      }

      /** 
       * （平移）变换节点到另一个节点下
       * @param node 目标节点
       * @param parent 新的父节点
       * @param offset 并产生平移，默认不偏移
       */
      function traverse(node, parent, offset) {
        node.getWorldPosition(_vec3);
        node.parent = parent;
        node.setWorldPosition(_vec3);
        if (offset) {
          var _node$position = node.position,
            x = _node$position.x,
            y = _node$position.y;
          node.setPosition(x + offset.x, y + offset.y);
        }
      }
      var _vec3 = new Vec3();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ec0b2SQURJInqaZfe00475m", "descriptor", undefined);
      var property = _decorator.property;

      /**
       * 编辑器属性提示装饰
       * @param tooltip 提示内容
       * @param type 类型
       * @param displayName 显示名称
       * @param visible 显示函数
       * @params kvs 其他罗列
       * @example
       * ```
       * @tip("tooltip", Node, "displayName", ()=>true, 0, 1, 0.1], ['unit','deg'], ['override', true]) 
       * public attr: Node = null;
       * ```
       */

      function tip(tooltip) {
        for (var _len = arguments.length, rests = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rests[_key - 1] = arguments[_key];
        }
        return property(_wrap.apply(void 0, [tooltip].concat(rests)));
      }

      /**
       * 编辑器属性成组装饰
       * @param group eg."组名 标签[.组]"
       * @param tooltip 提示内容
       * @param type 类型
       * @param displayName 显示名称
       * @param visible 显示函数
       * @params kvs 其他装饰属性罗列
       * @example
       * ```
       * @group("tab.group", "tooltip", Node, "displayName", ()=>true, [0, 1, 0.1], ['unit','deg'], ['override', true]) 
       * public attr: Node = null;
       * ```
       */

      function group(group, tooltip) {
        if (isStr(group) && group.indexOf('.') > 0) {
          var _group$split = group.split('.'),
            name = _group$split[0],
            id = _group$split[1];
          group = {
            name: name,
            id: id
          };
        }
        for (var _len2 = arguments.length, rests = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          rests[_key2 - 2] = arguments[_key2];
        }
        return property(_extends({
          group: group
        }, _wrap.apply(void 0, [tooltip].concat(rests))));
      }

      /**
       * 编辑器属性序列化装饰
       */
      var serialize = exports('s', property({
        serializable: true
      }));

      /**
       * 编辑器属性可见装饰
       */
      var visible = property({
        visible: true
      });

      /**
       * 编辑器属性不可见装饰
       */
      var invisible = property({
        visible: false
      });

      /**
       * 编辑器属性覆盖父类
       */
      var overrode = property({
        override: true
      });

      // 装饰器实现函数

      function _wrap(tooltip) {
        var props = {
          tooltip: tooltip
        };
        for (var _len3 = arguments.length, rests = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          rests[_key3 - 1] = arguments[_key3];
        }
        for (var _i = 0, _rests = rests; _i < _rests.length; _i++) {
          var rest = _rests[_i];
          if (Array.isArray(rest)) {
            if (rest.length >= 3) {
              props['slide'] = true;
              props['range'] = rest;
            } else if (rest.length >= 2) {
              props[rest[0]] = rest[1];
            } else if (rest.length === 1) {
              props['type'] = rest[0];
            }
          }
        }
        var arg1 = rests[0],
          arg2 = rests[1],
          arg3 = rests[2],
          others = rests.slice(3);
        if (arg1 && !Array.isArray(arg1)) {
          if (isClass(arg1)) props.type = arg1;else if (isStr(arg1)) props.displayName = arg1;else if (isFunc(arg1)) props.visible = arg1;
        }
        if (arg2 && !Array.isArray(arg2)) {
          if (isStr(arg2)) props.displayName = arg2;else if (isFunc(arg2)) props.visible = arg2;
        }
        if (isStr(arg3)) props.displayName = arg3;
        return props;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "b0bb85QyWxK17nUl5CouScs", "audio", undefined);
      var origin = Button.prototype["_onTouchEnded"];
      var _cfw_notifications__ = __cfw_notifications__.Audio,
        DEFAULT_BUTTON = _cfw_notifications__.DEFAULT_BUTTON,
        DEFAULT_TOGGLE = _cfw_notifications__.DEFAULT_TOGGLE;
      Object.defineProperty(Button.prototype, '_onTouchEnded', {
        configurable: true,
        enumerable: false,
        value: function value() {
          var ntf = this instanceof Toggle ? DEFAULT_TOGGLE : DEFAULT_BUTTON;
          // 同时播放特定音效和有默认音效时，先执行的原方法覆盖特定音效。
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          Function.invoke.apply(Function, [origin, this].concat(args));
          var arr = this.node.name.split(':');
          // 指定:none可以移除默认音效
          if (arr.length > 1) {
            inner.dispatch(ntf, arr.tail === '' ? 'none' : arr.tail);
          } else inner.dispatch(ntf);
        }
      });
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "1b6b7vBHMFB7I0g4lUVKi7u", "render", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e2001ZlZLhL6KljqEfsnY2m", "ui", undefined);

      /**
       * 将UI节点置底
       * @param node 目标节点
      */
      function setBottom(node) {
        if (!node.parent) return;
        node.setSiblingIndex(0);
      }
      var _rect = new Rect(0, 0, 1, 1);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e5a7aXB+ytNBbreYlosocDT", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "de77dOeJ/RPyKWZoxBDOofj", "item-pool", undefined);

      /** 对象池 */

      /** 对象池对象 */

      /** 实体对象池类 */
      var ItemPool = /*#__PURE__*/function () {
        function ItemPool(ItemClass, prefab, container) {
          this.template = null;
          this.container = null;
          this._ItemClass = null;
          this.__pool = [];
          this._ItemClass = ItemClass;
          this.template = prefab != null ? prefab : this.template;
          this.container = container != null ? container : this.container;
        }
        var _proto = ItemPool.prototype;
        _proto.claim = function claim() {
          var _this$__pool$pop;
          var item = (_this$__pool$pop = this.__pool.pop()) != null ? _this$__pool$pop : this._create;
          if (item instanceof Component && this.container instanceof Node) {
            item.node.parent = this.container;
          }
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          Function.invoke.apply(Function, [item.claimed, item].concat(args));
          return item;
        };
        _proto.free = function free(item) {
          var _item$node;
          if (!item) return;
          if (item instanceof Component && !!((_item$node = item.node) != null && _item$node.parent)) {
            item.node.removeFromParent();
          }
          Function.invoke(item.freed, item);
          this.__pool.push(item);
        };
        _proto.clear = function clear() {
          this.__pool.forEach(function (item) {
            if (item instanceof Component) {
              var _item$node2;
              ((_item$node2 = item.node) != null ? _item$node2 : item).destroy();
            }
          });
          this.__pool.length = 0;
        };
        _proto.dump = function dump() {
          console.info("EntityPool<" + this._ItemClass.name + ">, size=" + this.size);
        };
        _createClass(ItemPool, [{
          key: "size",
          get: function get() {
            return this.__pool.length;
          }
        }, {
          key: "_create",
          get: function get() {
            var _Item = this._ItemClass,
              template = this.template;
            if (_Item.prototype instanceof Component) {
              var _node$getComponent;
              var node = template instanceof Prefab ? instantiate(template) : new Node();
              var Comp = _Item;
              return (_node$getComponent = node.getComponent(Comp)) != null ? _node$getComponent : node.addComponent(Comp);
            } else return new _Item();
          }
        }]);
        return ItemPool;
      }();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "24326of0FlEDr1GTZPFLprt", "maths", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "2b984Th++1KBKKhmqw3o2Ra", "clipboard", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "e9e1eqShRtEdrBxMbUg5dD0", "url", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "4f440ypKNNA05jqNKTYmRlL", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "27fecwSfStARqf4crhrz4Nh", "swapper", undefined);
      /**
       * @file 装饰器包装器
       * @author DuskyHuang 圣子
      */

      /** 
       * @param decorator 指定的装饰器类型
       * @param handler 包装器处理函数
       * @return 指定类型(D)装饰器的包装器
      */
      function swapper(handler) {
        return function (arg0) {
          for (var _len = arguments.length, rests = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rests[_key - 1] = arguments[_key];
          }
          if (arg0 instanceof Object) {
            return handler([arg0].concat(rests));
          } else {
            return function () {
              for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                params[_key2] = arguments[_key2];
              }
              return handler.apply(void 0, [params].concat([arg0].concat(rests)));
            };
          }
        };
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "a2a71lrfOdILrKX67mH2ZtF", "notify", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "14e55Udj6VMIp7Y+mT0BfmM", "singleton", undefined);

      /** 单例类装饰器 */
      var singleton = exports('e', swapper(function (_ref) {
        var ctor = _ref[0];
        // 为Component类型设置唯一instance
        if (_isSubOf(ctor, Component)) {
          var _ = ctor.prototype;
          var onLoad = _.onLoad;
          Object.defineProperty(_, 'onLoad', {
            configurable: true,
            enumerable: false,
            value: function value() {
              ctor['_instance'] = this;
              Function.invoke(onLoad, this);
            }
          });
        }
        return Object.defineProperty(ctor, 'instance', {
          configurable: true,
          enumerable: true,
          get: function get() {
            if (!this._instance || !(this._instance instanceof this)) {
              this._instance = new this();
            }
            return this._instance;
          }
        });
      }));
      function _isSubOf(sub, base) {
        return Object.getPrototypeOf(sub) === base || sub.prototype instanceof base;
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "3d95dr+OQRPs4cw4cNrVJlI", "toucher", undefined);
      var NE = Node.EventType;
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ccfd2CeQztFxoBZieHFwjo9", "poolify", undefined);
      var poolify = exports('p', swapper(function (_ref, size) {
        var clazz = _ref[0];
        function create(ctor) {
          if (ctor.prototype instanceof Component) {
            var _node$getComponent;
            var node = ctor.template instanceof Prefab ? instantiate(ctor.template) : new Node();
            return (_node$getComponent = node.getComponent(ctor)) != null ? _node$getComponent : node.addComponent(ctor);
          } else return new ctor();
        }
        Object.defineProperties(clazz, {
          __pool: {
            configurable: true,
            enumerable: false,
            writable: false,
            value: []
          },
          prefab: {
            configurable: true,
            enumerable: false,
            writable: true,
            value: null
          },
          size: {
            configurable: true,
            enumerable: false,
            get: function get() {
              var _this$__pool$length, _this$__pool;
              return (_this$__pool$length = (_this$__pool = this.__pool) == null ? void 0 : _this$__pool.length) != null ? _this$__pool$length : 0;
            }
          },
          claim: {
            configurable: true,
            enumerable: false,
            writable: false,
            value: function value() {
              var _this$__pool$pop;
              // use pop() may much faster than shift() in large-size array
              var item = (_this$__pool$pop = this.__pool.pop()) != null ? _this$__pool$pop : create(clazz);
              if (item instanceof Component && this.container instanceof Node) {
                item.node.parent = this.container;
              }
              for (var _len = arguments.length, initParams = new Array(_len), _key = 0; _key < _len; _key++) {
                initParams[_key] = arguments[_key];
              }
              Function.invoke.apply(Function, [item.claimed, item].concat(initParams));
              return item;
            }
          },
          free: {
            configurable: true,
            enumerable: false,
            writable: false,
            value: function value(item) {
              var _item$node;
              if (item instanceof Component && !!((_item$node = item.node) != null && _item$node.parent)) {
                item.node.removeFromParent();
              }
              Function.invoke(item.freed, item);
              this.__pool.push(item);
            }
          },
          clear: {
            configurable: true,
            enumerable: false,
            writable: false,
            value: function value() {
              this.__pool.forEach(function (item) {
                if (item instanceof Component) {
                  var _item$node2;
                  ((_item$node2 = item.node) != null ? _item$node2 : item).destroy();
                }
              });
              this.__pool.length = 0;
            }
          },
          dump: {
            configurable: true,
            enumerable: false,
            writable: false,
            value: function value() {
              console.info(this.name, this.__pool.length, this.__pool);
            }
          }
        });
        Object.defineProperty(clazz.prototype, 'free', {
          configurable: true,
          enumerable: false,
          writable: false,
          value: function value() {
            clazz.free(this);
          }
        });
        if (isNum(size)) {
          if (clazz instanceof Component) console.warn('Init size with Component-class may created empty-node');
          if (size > 1000) return console.warn('Init size too larger');
          for (var i = 0; i < size; i++) {
            clazz.__pool.push(create(clazz));
          }
        }
      }));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f1eaa9l5y1NvoIFi5j0/igk", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "fd6c2QfbytKzL9Tdsr4f0Fo", "index", undefined);
      cclegacy._RF.pop();
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _dec5, _class4, _class5, _descriptor4;
      cclegacy._RF.push({}, "059ccbtLKZOpI3/kXZvoT+t", "limitation", undefined);
      var ccclass = _decorator.ccclass;
      function isLimited() {
        return this.isLimited;
      }

      /** 约束方式 */
      var Type = /*#__PURE__*/function (Type) {
        Type[Type["None"] = 0] = "None";
        Type[Type["Stop"] = 1] = "Stop";
        Type[Type["PingPong"] = 2] = "PingPong";
        Type[Type["Repeat"] = 3] = "Repeat";
        return Type;
      }(Type || {});
      /**
       * @class 范围限制类
       * @author DuskyHuang 圣子
      */
      var Limitation = (_dec = ccclass("cfw.Limitation"), _dec2 = tip('约束方式：\nNone = 无约束\nStop = 抵边界终止\nPingPong = 抵边界来回\nRepeat = 抵边界重复', ['type', Enum(Type)]), _dec3 = tip('最小边界值（≤最大边界值）', isLimited), _dec4 = tip('最大边界值（≥最小边界值）', isLimited), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function () {
        function Limitation(type, min, max) {
          if (type === void 0) {
            type = Type.None;
          }
          if (min === void 0) {
            min = 0;
          }
          if (max === void 0) {
            max = 0;
          }
          /** 约束方式 */
          _initializerDefineProperty(this, "type", _descriptor, this);
          /** 最小边界值 */
          _initializerDefineProperty(this, "_min", _descriptor2, this);
          /** 最大边界值 */
          _initializerDefineProperty(this, "_max", _descriptor3, this);
          this.type = type;
          this._min = min;
          this._max = max;
        }

        /**
         * 重置限制范围
         * @param min 最小值
         * @param max 最大量
         * @param deviation 偏移量
         * @return [合法的更新值, 新的变换量]
         */
        var _proto = Limitation.prototype;
        _proto.set = function set(min, max, deviation) {
          this._min = min + (deviation != null ? deviation : 0);
          this._max = max + (deviation != null ? deviation : 0);
        }

        /**
         * 根据当前类型约束取值
         * @param value 当前值
         * @param delta 变换量
         * @return [合法的更新值, 新的变换量]
         */;
        _proto.limit = function limit(value, delta) {
          var sum = value + delta,
            min = this.min,
            max = this.max;
          var ovt = delta > 0 && sum > max,
            ovb = delta < 0 && sum < min;
          var goon = [sum, delta];
          switch (this.type) {
            case Limitation.Type.None:
              return goon;
            case Limitation.Type.Stop:
              return ovt ? [max, 0] : ovb ? [min, 0] : goon;
            case Limitation.Type.PingPong:
              return ovt ? [2 * max - sum, -delta] : ovb ? [2 * min - sum, -delta] : goon;
            case Limitation.Type.Repeat:
              return ovt ? [min + sum - max, delta] : ovb ? [max + sum - min, delta] : goon;
            default:
              var omit = this.type;
          }
        }

        /**
         * 整体偏移中心值
         * @param value 偏移量
         */;
        _proto.deviate = function deviate(value) {
          this._max += value;
          this._min += value;
        };
        _createClass(Limitation, [{
          key: "isLimited",
          get: /** 是否收到约束 */
          function get() {
            return this.type != Type.None;
          }
        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(arg) {
            this._min = arg > this._max ? this._max : arg;
          }
        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(arg) {
            this._max = arg < this._min ? this._min : arg;
          }
        }]);
        return Limitation;
      }(), _class3.Type = Type, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Type.None;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_min", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "min", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "min"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_max", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "max", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "max"), _class2.prototype)), _class2)) || _class);

      /**
       * @class 两值约束类
       * @author DuskyHuang 圣子
      */
      var Range = (_dec5 = ccclass("cfw.Range"), _dec5(_class4 = (_class5 = /*#__PURE__*/function (_Limitation) {
        _inheritsLoose(Range, _Limitation);
        function Range(min, max) {
          var _this;
          if (min === void 0) {
            min = 0;
          }
          if (max === void 0) {
            max = 0;
          }
          _this = _Limitation.call(this, Type.Stop, min, max) || this;
          _initializerDefineProperty(_this, "type", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        return Range;
      }(Limitation), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "type", [invisible, overrode], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Type.Stop;
        }
      }), _class5)) || _class4);
      cclegacy._RF.pop();
      var _dec$1, _dec2$1, _dec3$1, _dec4$1, _dec5$1, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class$1, _class2$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "ad58b8NmDNFup4Y6jVL042V", "head-up-display", undefined);
      var ccclass$1 = _decorator.ccclass;
      function usePerspective() {
        return this.perspective;
      }
      function showRange() {
        return this.useVisibleRange;
      }
      var HeadUpDisplay = exports('H', (_dec$1 = ccclass$1('cfw.HeadUpDisplay'), _dec2$1 = group("Follow", "跟随目标（3D）", Node), _dec3$1 = group("Follow", "主相机（3D）", Camera), _dec4$1 = group("Offset", "跟随偏移（3D）"), _dec5$1 = group("Offset", "依据绝对缩放"), _dec6 = group("Offset", "UI偏移（2D）"), _dec7 = group("Scale", "启用透视缩放"), _dec8 = group("Scale", "标准距离（透视缩放=1）", usePerspective), _dec9 = group("Scale", "标准大小", usePerspective), _dec10 = group("Scale", "缩放范围", usePerspective), _dec11 = group("Scale", "初始距离作为标准距离", usePerspective), _dec12 = group("Visible", "约束在画布内"), _dec13 = group("Visible", "目标必须激活"), _dec14 = group("Visible", "启用范围可见"), _dec15 = group("Visible", "可见范围", showRange), _dec$1(_class$1 = (_class2$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HeadUpDisplay, _Component);
        function HeadUpDisplay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "target", _descriptor$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor2$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "offset", _descriptor3$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scalable", _descriptor4$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "offsetUI", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "perspective", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "distance", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleRatio", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleRange", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_useInitDistance", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "alwaysInCanvas", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "syncActive", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useVisibleRange", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "visibleRange", _descriptor14, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = HeadUpDisplay.prototype;
        _proto._setInitDistance = function _setInitDistance() {
          if (this.invalid) return;
          if (this.perspective && this.useInitDistance) {
            this.distance = Vec3.distance(this.mainCamera.node.getWorldPosition(v3a), this.target.getWorldPosition(v3b));
          }
        };
        _proto.onLoad = function onLoad() {
          var _this$mainCamera;
          this.mainCamera = (_this$mainCamera = this.mainCamera) != null ? _this$mainCamera : findCamera();
          notifier.attach(Notifications.Time.POST_TICK, this.tick, this);
        };
        _proto.onDestroy = function onDestroy() {
          notifier.unload(this);
        };
        _proto.start = function start() {
          if (this.invalid) return this.node.active = false;
          this._setInitDistance();
        };
        _proto.tick = function tick(dt, _tick) {
          if (this.invalid) return this.node.active = false;
          var offset = this.offset,
            _this$offsetUI = this.offsetUI,
            x = _this$offsetUI.x,
            y = _this$offsetUI.y,
            useVisibleRange = this.useVisibleRange,
            perspective = this.perspective,
            scalable = this.scalable;
          if (useVisibleRange || perspective) {
            dist = Vec3.distance(this.mainCamera.node.getWorldPosition(v3a), this.target.getWorldPosition(v3b));
          }
          if (this.useVisibleRange) {
            var _this$visibleRange = this.visibleRange,
              min = _this$visibleRange.min,
              max = _this$visibleRange.max;
            this.node.active = min <= dist && dist <= max;
            if (!this.node.active) return;
          }
          scalable ? Vec3.multiply(v3b, offset, this.target.getWorldScale(v3b)) : Vec3.copy(v3b, offset);
          this.mainCamera.convertToUINode(Vec3.add(v3a, this.target.getWorldPosition(v3a), v3b), this.node.parent, v3a);
          if (v3a.z > 1) {
            this.node.active = false;
          } else {
            this.node.setPosition(v3a.x + x, v3a.y + y, v3a.z);
            if (this.perspective) {
              var ratio = (dist === 0 ? Number.MAX_VALUE : this.distance / dist) * this.target.worldScale.y;
              var _this$scaleRange = this.scaleRange,
                _min = _this$scaleRange.min,
                _max = _this$scaleRange.max;
              ratio *= this.scaleRatio;
              ratio += 1 - this.scaleRatio;
              ratio = Math.clamp(ratio, _min, _max);
              this.node.setScale(ratio, ratio);
            }
            if (this.alwaysInCanvas) {
              this.node.getWorldPosition(v3a);
              this.node.getScale(v3b);
              var uit = this.node.getComponent(UITransform);
              var _uit$contentSize = uit.contentSize,
                width = _uit$contentSize.width,
                height = _uit$contentSize.height;
              var _uit$getBoundingBoxTo = uit.getBoundingBoxToWorld(),
                _x = _uit$getBoundingBoxTo.x,
                _y = _uit$getBoundingBoxTo.y,
                w = _uit$getBoundingBoxTo.width,
                h = _uit$getBoundingBoxTo.height;
              var _view$getVisibleSize = view.getVisibleSize(),
                W = _view$getVisibleSize.width,
                H = _view$getVisibleSize.height;
              var hw = width * v3b.x / 2,
                hh = height * v3b.y / 2;
              this.node.setWorldPosition(_x < 0 ? hw : _x + w > W ? W - hw : v3a.x, _y < 0 ? hh : _y + h > H ? H - hh : v3a.y, v3a.z);
            }
            this.node.active = true;
          }
        };
        _createClass(HeadUpDisplay, [{
          key: "useInitDistance",
          get: function get() {
            return this._useInitDistance;
          },
          set: function set(arg) {
            this._useInitDistance = arg;
            this._setInitDistance();
          }
        }, {
          key: "invalid",
          get: function get() {
            return !this.node.parent || !this.mainCamera || !this.target || this.syncActive && !this.target.activeInHierarchy;
          }
        }]);
        return HeadUpDisplay;
      }(Component), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "target", [_dec2$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$1.prototype, "mainCamera", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$1.prototype, "offset", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$1.prototype, "scalable", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$1.prototype, "offsetUI", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$1.prototype, "perspective", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$1.prototype, "distance", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$1.prototype, "scaleRatio", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2$1.prototype, "scaleRange", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Range(0, 100);
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2$1.prototype, "_useInitDistance", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$1.prototype, "useInitDistance", [_dec11], Object.getOwnPropertyDescriptor(_class2$1.prototype, "useInitDistance"), _class2$1.prototype), _descriptor11 = _applyDecoratedDescriptor(_class2$1.prototype, "alwaysInCanvas", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2$1.prototype, "syncActive", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2$1.prototype, "useVisibleRange", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2$1.prototype, "visibleRange", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Range(0, 100);
        }
      })), _class2$1)) || _class$1));
      var dist = 0;
      var v3a = new Vec3();
      var v3b = new Vec3();
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "9028aVVKitK3rj1rDo7d/ml", "batch", undefined);
      var __ui_global_sorting__ = true;
      notifier.attach(Notifications.UI.ENABLE_UI_SORTING, function () {
        return __ui_global_sorting__ = true;
      });
      notifier.attach(Notifications.UI.DISABLE_UI_SORTING, function () {
        return __ui_global_sorting__ = false;
      });
      if (!('sortingPriority' in UITransform.prototype)) {
        Object.defineProperties(UITransform.prototype, {
          _sortingPriority: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: 0
          },
          _sortingEnabled: {
            configurable: true,
            enumerable: true,
            writable: true,
            value: false
          }
        });
        Object.defineProperties(UITransform.prototype, {
          sortingPriority: {
            configurable: true,
            enumerable: true,
            get: function get() {
              var _this$_sortingPriorit;
              return (_this$_sortingPriorit = this._sortingPriority) != null ? _this$_sortingPriorit : 0;
            },
            set: function set(value) {
              this._sortingPriority = value;
            }
          },
          sortingEnabled: {
            configurable: true,
            enumerable: true,
            get: function get() {
              return !!this._sortingEnabled;
            },
            set: function set(value) {
              this._sortingEnabled = value;
            }
          }
        });
      }
      function updateOpacity(renderData, opacity) {
        var vfmt = renderData.vertexFormat;
        var vb = renderData.chunk.vb;
        var attr;
        var format;
        var stride;
        // Color component offset
        var offset = 0;
        for (var i = 0; i < vfmt.length; ++i) {
          attr = vfmt[i];
          format = gfx.FormatInfos[attr.format];
          if (format.hasAlpha) {
            stride = renderData.floatStride;
            if (format.size / format.count === 1) {
              var alpha = ~~math.clamp(Math.round(opacity * 255), 0, 255);
              // Uint color RGBA8
              for (var color = offset; color < vb.length; color += stride) {
                vb[color] = (vb[color] & 0xffffff00 | alpha) >>> 0;
              }
            } else if (format.size / format.count === 4) {
              // RGBA32 color, alpha at position 3
              for (var _alpha = offset + 3; _alpha < vb.length; _alpha += stride) {
                vb[_alpha] = opacity;
              }
            }
          }
          offset += format.size >> 2;
        }
      }
      Object.defineProperties(UI.prototype, {
        _rendererCache: {
          configurable: true,
          enumerable: false,
          writable: false,
          value: []
        },
        flushRendererCache: {
          configurable: true,
          enumerable: false,
          value: function value() {
            if (!__ui_global_sorting__) return;
            var cache = this._rendererCache;
            if (cache.length > 0) {
              if (this.rendererOrder) {
                cache.sort(function (a, b) {
                  return a.renderPriority - b.renderPriority;
                });
              }
              for (var _iterator = _createForOfIteratorHelperLoose(cache), _step; !(_step = _iterator()).done;) {
                var render = _step.value;
                render.fillBuffers(this);
                if (render.renderOpacity >= 0) {
                  updateOpacity(render.renderData, render.renderOpacity);
                  var buffer = render.renderData.getMeshBuffer();
                  if (buffer) {
                    buffer.setDirty();
                  }
                }
              }
              cache.length = 0;
            }
            this.rendererOrder = false;
          }
        },
        update: {
          configurable: true,
          enumerable: false,
          value: function value() {
            this.rendererOrder = false;
            var screens = this._screens;
            var offset = 0;
            for (var i = 0; i < screens.length; ++i) {
              var screen = screens[i];
              var scene = screen._getRenderScene();
              if (!screen.enabledInHierarchy || !scene) {
                continue;
              }
              // Reset state and walk
              this._opacityDirty = 0;
              this._pOpacity = 1;
              this.walk(screen.node);
              if (__ui_global_sorting__) this.flushRendererCache();
              this.autoMergeBatches(this._currComponent);
              this.resetRenderStates();
              var batchPriority = 0;
              if (this._batches.length > offset) {
                for (; offset < this._batches.length; ++offset) {
                  var batch = this._batches.array[offset];
                  if (batch.model) {
                    var subModels = batch.model.subModels;
                    for (var j = 0; j < subModels.length; j++) {
                      subModels[j].priority = batchPriority++;
                    }
                  } else {
                    batch.descriptorSet = this._descriptorSetCache.getDescriptorSet(batch);
                  }
                  scene.addBatch(batch);
                }
              }
            }
          }
        },
        walk: {
          configurable: true,
          enumerable: false,
          value: function value(node, level, sortingPriority) {
            if (level === void 0) {
              level = 0;
            }
            if (sortingPriority === void 0) {
              sortingPriority = 0;
            }
            if (!node.activeInHierarchy) {
              return;
            }
            var children = node.children;
            var uiProps = node._uiProps;
            var render = uiProps.uiComp;
            var stencilEnterLevel = render && (render.stencilStage === 2 || render.stencilStage === 6);
            var transform = uiProps.uiTransformComp;
            if (__ui_global_sorting__) {
              sortingPriority = transform && transform.sortingEnabled && transform.enabled ? transform.sortingPriority : sortingPriority;
            }
            // Save opacity
            var parentOpacity = this._pOpacity;
            var opacity = parentOpacity;
            // TODO Always cascade ui property's local opacity before remove it
            var selfOpacity = render && render.color ? render.color.a / 255 : 1;
            this._pOpacity = opacity *= selfOpacity * uiProps.localOpacity;
            // TODO Set opacity to ui property's opacity before remove it
            // @ts-expect-error temporary force set, will be removed with ui property's opacity
            uiProps._opacity = opacity;
            if (uiProps.colorDirty) {
              // Cascade color dirty state
              this._opacityDirty++;
            }

            // Render assembler update logic
            if (render && render.enabledInHierarchy) {
              if (__ui_global_sorting__) {
                if (stencilEnterLevel) {
                  this.flushRendererCache();
                  render.fillBuffers(this); // for rendering

                  // Update cascaded opacity to vertex buffer
                  if (this._opacityDirty && render && !render.useVertexOpacity && render.renderData && render.renderData.vertexCount > 0) {
                    // HARD COUPLING
                    updateOpacity(render.renderData, opacity);
                    var buffer = render.renderData.getMeshBuffer();
                    if (buffer) {
                      buffer.setDirty();
                    }
                  }
                } else {
                  this._rendererCache.push(render);
                  render.renderPriority = sortingPriority;
                  if (sortingPriority != 0) {
                    this.rendererOrder = true;
                  }
                  if (this._opacityDirty && render && !render.useVertexOpacity && render.renderData && render.renderData.vertexCount > 0) {
                    render.renderOpacity = opacity;
                  } else {
                    render.renderOpacity = -1;
                  }
                }
              } else render.fillBuffers(this);
            }
            if (children.length > 0 && !node._static) {
              for (var i = 0; i < children.length; ++i) {
                var child = children[i];
                this.walk(child, level, sortingPriority);
              }
            }
            if (uiProps.colorDirty) {
              // Reduce cascaded color dirty state
              this._opacityDirty--;
              // Reset color dirty
              uiProps.colorDirty = false;
            }
            // Restore opacity
            this._pOpacity = parentOpacity;
            // Post render assembler update logic
            // ATTENTION: Will also reset colorDirty inside postUpdateAssembler
            if (render && render.enabledInHierarchy) {
              render.postUpdateAssembler(this);
              if (stencilEnterLevel && StencilManager.sharedManager.getMaskStackSize() > 0) {
                this.flushRendererCache();
                this.autoMergeBatches(this._currComponent);
                this.resetRenderStates();
                StencilManager.sharedManager.exitMask();
              }
            }
            level += 1;
          }
        }
      });
      cclegacy._RF.pop();
      var _dec$2, _dec2$2, _dec3$2, _dec4$2, _dec5$2, _dec6$1, _class$2, _class2$2, _descriptor$2, _descriptor2$2, _descriptor3$2, _class3$1;
      cclegacy._RF.push({}, "d4143WGCchPX6ZbgpgAGZyz", "sorting-group", undefined);
      var ccclass$2 = _decorator.ccclass,
        property$1 = _decorator.property,
        disallowMultiple = _decorator.disallowMultiple,
        requireComponent = _decorator.requireComponent,
        executeInEditMode = _decorator.executeInEditMode;
      var SortingLayer = /*#__PURE__*/function (SortingLayer) {
        SortingLayer[SortingLayer["LAYER_BACK_MOST"] = -99] = "LAYER_BACK_MOST";
        SortingLayer[SortingLayer["UI_3D_BACK"] = -6] = "UI_3D_BACK";
        SortingLayer[SortingLayer["UI_3D_MID"] = -5] = "UI_3D_MID";
        SortingLayer[SortingLayer["UI_3D_FRONT"] = -4] = "UI_3D_FRONT";
        SortingLayer[SortingLayer["EFFECT_3D_BACK"] = -3] = "EFFECT_3D_BACK";
        SortingLayer[SortingLayer["EFFECT_3D_MID"] = -2] = "EFFECT_3D_MID";
        SortingLayer[SortingLayer["EFFECT_3D_FRONT"] = -1] = "EFFECT_3D_FRONT";
        SortingLayer[SortingLayer["LAYER_DEFAULT"] = 0] = "LAYER_DEFAULT";
        SortingLayer[SortingLayer["LAYER_BASE_BACK"] = 1] = "LAYER_BASE_BACK";
        SortingLayer[SortingLayer["LAYER_BASE_MID"] = 2] = "LAYER_BASE_MID";
        SortingLayer[SortingLayer["LAYER_BASE_FRONT"] = 3] = "LAYER_BASE_FRONT";
        SortingLayer[SortingLayer["LAYER_POPS_BACK"] = 4] = "LAYER_POPS_BACK";
        SortingLayer[SortingLayer["LAYER_POPS_MID"] = 5] = "LAYER_POPS_MID";
        SortingLayer[SortingLayer["LAYER_POPS_FRONT"] = 6] = "LAYER_POPS_FRONT";
        SortingLayer[SortingLayer["LAYER_INFO_BACK"] = 7] = "LAYER_INFO_BACK";
        SortingLayer[SortingLayer["LAYER_INFO_MID"] = 8] = "LAYER_INFO_MID";
        SortingLayer[SortingLayer["LAYER_INFO_FRONT"] = 9] = "LAYER_INFO_FRONT";
        SortingLayer[SortingLayer["LAYER_FRONT_MOST"] = 99] = "LAYER_FRONT_MOST";
        return SortingLayer;
      }(SortingLayer || {});
      var ORDER_IN_LAYER_MAX = 1000;
      function sortingEnabled() {
        return this.sortingEnabled;
      }
      var SortingGroup = (_dec$2 = ccclass$2('cfw.SortingGroup'), _dec2$2 = requireComponent(UITransform), _dec3$2 = disallowMultiple(true), _dec4$2 = executeInEditMode(true), _dec5$2 = tip('排序层', sortingEnabled, ['type', Enum(SortingLayer)]), _dec6$1 = tip('层内序', sortingEnabled, ['type', CCInteger], [0, ORDER_IN_LAYER_MAX, 1]), _dec$2(_class$2 = _dec2$2(_class$2 = _dec3$2(_class$2 = _dec4$2(_class$2 = (_class2$2 = (_class3$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SortingGroup, _Component);
        function SortingGroup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._uit = null;
          _initializerDefineProperty(_this, "_orderInLayer", _descriptor$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_sortingEnabled", _descriptor2$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_sortingLayer", _descriptor3$2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SortingGroup.prototype;
        _proto.onLoad = function onLoad() {
          this._uit = this.getComponent(UITransform);
        };
        _proto.onEnable = function onEnable() {
          this._upload();
        };
        _proto.onDisable = function onDisable() {
          this._clear();
        };
        _proto._upload = function _upload() {
          var sign = this._sortingLayer < 0 ? -1 : 1;
          this._uit.sortingPriority = sign * (Math.abs(this._sortingLayer) * ORDER_IN_LAYER_MAX + this._orderInLayer);
          this._uit.sortingEnabled = this._sortingEnabled;
        };
        _proto._clear = function _clear() {
          this._uit.sortingPriority = 0;
        };
        _createClass(SortingGroup, [{
          key: "sortingLayer",
          get: function get() {
            return this._sortingLayer;
          },
          set: function set(arg) {
            this._sortingLayer = arg;
            this._upload();
          }
        }, {
          key: "orderInLayer",
          get: function get() {
            return this._orderInLayer;
          },
          set: function set(arg) {
            this._orderInLayer = arg;
            this._upload();
          }
        }, {
          key: "sortingEnabled",
          get: function get() {
            return this._sortingEnabled;
          },
          set: function set(arg) {
            this._sortingEnabled = arg;
            this._uit.sortingEnabled = arg;
          }
        }]);
        return SortingGroup;
      }(Component), _class3$1.SortingLayer = SortingLayer, _class3$1.ORDER_IN_LAYER_MAX = ORDER_IN_LAYER_MAX, _class3$1), (_applyDecoratedDescriptor(_class2$2.prototype, "sortingLayer", [_dec5$2], Object.getOwnPropertyDescriptor(_class2$2.prototype, "sortingLayer"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "orderInLayer", [_dec6$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "orderInLayer"), _class2$2.prototype), _applyDecoratedDescriptor(_class2$2.prototype, "sortingEnabled", [property$1], Object.getOwnPropertyDescriptor(_class2$2.prototype, "sortingEnabled"), _class2$2.prototype), _descriptor$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_orderInLayer", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_sortingEnabled", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$2.prototype, "_sortingLayer", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return SortingLayer.LAYER_DEFAULT;
        }
      })), _class2$2)) || _class$2) || _class$2) || _class$2) || _class$2);
      cclegacy._RF.pop();
      var _dec$3, _dec2$3, _dec3$3, _dec4$3, _dec5$3, _dec6$2, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _dec12$1, _dec13$1, _dec14$1, _dec15$1, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class$3, _class2$3, _descriptor$3, _descriptor2$3, _descriptor3$3, _descriptor4$2, _descriptor5$1, _descriptor6$1, _descriptor7$1, _descriptor8$1, _descriptor9$1, _descriptor10$1, _descriptor11$1, _descriptor12$1, _descriptor13$1, _descriptor14$1, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _class3$2;
      cclegacy._RF.push({}, "14caaOij9dHkqgrgomlLtsJ", "tween-switcher", undefined);
      var ccclass$3 = _decorator.ccclass,
        requireComponent$1 = _decorator.requireComponent,
        executionOrder = _decorator.executionOrder;
      var EffectType = /*#__PURE__*/function (EffectType) {
        EffectType[EffectType["NONE"] = 0] = "NONE";
        EffectType[EffectType["FADE"] = 1] = "FADE";
        EffectType[EffectType["SLIDE"] = 2] = "SLIDE";
        EffectType[EffectType["FADE_SLIDE"] = 3] = "FADE_SLIDE";
        EffectType[EffectType["SCALE"] = 4] = "SCALE";
        EffectType[EffectType["FADE_SCALE"] = 5] = "FADE_SCALE";
        EffectType[EffectType["ROTATE_SCALE"] = 6] = "ROTATE_SCALE";
        EffectType[EffectType["FADE_ROTATE"] = 7] = "FADE_ROTATE";
        EffectType[EffectType["FADE_ROTATE_SCALE"] = 8] = "FADE_ROTATE_SCALE";
        return EffectType;
      }({});
      var EasingType = /*#__PURE__*/function (EasingType) {
        EasingType[EasingType["LINEAR"] = 0] = "LINEAR";
        EasingType[EasingType["SMOOTH"] = 1] = "SMOOTH";
        EasingType[EasingType["FADE"] = 2] = "FADE";
        EasingType[EasingType["CONSTANT"] = 3] = "CONSTANT";
        EasingType[EasingType["QUAD"] = 4] = "QUAD";
        EasingType[EasingType["CUBIC"] = 5] = "CUBIC";
        EasingType[EasingType["QUART"] = 6] = "QUART";
        EasingType[EasingType["QUINT"] = 7] = "QUINT";
        EasingType[EasingType["SINE"] = 8] = "SINE";
        EasingType[EasingType["CIRC"] = 9] = "CIRC";
        EasingType[EasingType["EXPO"] = 10] = "EXPO";
        EasingType[EasingType["ELASTIC"] = 11] = "ELASTIC";
        EasingType[EasingType["BACK"] = 12] = "BACK";
        EasingType[EasingType["BOUNCE"] = 13] = "BOUNCE";
        return EasingType;
      }({});
      var EasingTendency = /*#__PURE__*/function (EasingTendency) {
        EasingTendency[EasingTendency["OUT"] = 0] = "OUT";
        EasingTendency[EasingTendency["IN"] = 1] = "IN";
        EasingTendency[EasingTendency["IN_OUT"] = 2] = "IN_OUT";
        EasingTendency[EasingTendency["OUT_IN"] = 3] = "OUT_IN";
        return EasingTendency;
      }({});
      var NoTendency = [EasingType.LINEAR, EasingType.SMOOTH, EasingType.FADE, EasingType.CONSTANT];
      function useShowTween() {
        return this.showType != EffectType.NONE;
      }
      function showTendency() {
        return this.showType != EffectType.NONE && NoTendency.excludes(this.showEasing);
      }
      function useShowSlide() {
        return this.showType === EffectType.FADE_SLIDE || this.showType === EffectType.SLIDE;
      }
      function useShowScale() {
        return this.showType === EffectType.FADE_SCALE || this.showType === EffectType.SCALE;
      }
      function useShowRotate() {
        return this.showType === EffectType.ROTATE_SCALE || this.showType === EffectType.FADE_ROTATE || this.showType === EffectType.FADE_ROTATE_SCALE;
      }
      function useHideTween() {
        return this.hideType != EffectType.NONE;
      }
      function hideTendency() {
        return this.hideType != EffectType.NONE && NoTendency.excludes(this.hideEasing);
      }
      function useHideSlide() {
        return this.hideType === EffectType.FADE_SLIDE || this.hideType === EffectType.SLIDE;
      }
      function useHideScale() {
        return this.hideType === EffectType.FADE_SCALE || this.hideType === EffectType.SCALE;
      }
      function useHideRotate() {
        return this.hideType === EffectType.ROTATE_SCALE || this.hideType === EffectType.FADE_ROTATE || this.hideType === EffectType.FADE_ROTATE_SCALE;
      }
      var TweenStates = /*#__PURE__*/function () {
        function TweenStates(position, scale, opacity, angle) {
          if (position === void 0) {
            position = new Vec3();
          }
          if (scale === void 0) {
            scale = new Vec3();
          }
          if (opacity === void 0) {
            opacity = 0;
          }
          if (angle === void 0) {
            angle = 0;
          }
          this.position = position;
          this.scale = scale;
          this.opacity = opacity;
          this.angle = angle;
          this.scale.z = 1;
        }
        var _proto = TweenStates.prototype;
        _proto.reset = function reset(arg1, arg2, arg3, arg4) {
          if (arg3 === void 0) {
            arg3 = 0;
          }
          if (arg4 === void 0) {
            arg4 = 0;
          }
          if (arg1 instanceof TweenStates) {
            this.position.set(arg1.position);
            this.scale.set(arg1.scale);
            this.opacity = arg1.opacity;
            this.angle = arg1.angle;
          } else {
            this.position.set(arg1);
            this.scale.set(arg2);
            this.opacity = arg3;
            this.angle = arg4;
          }
          return this;
        };
        return TweenStates;
      }();
      var TweenSwitcher = exports('T', (_dec$3 = ccclass$3('cfw.TweenSwitcher'), _dec2$3 = requireComponent$1(UITransform), _dec3$3 = executionOrder(ExecutionOrder.AFTER_WIDGET), _dec4$3 = tip("缓动中不交互"), _dec5$3 = group("Show", "动效类型", "Type", ["type", Enum(EffectType)]), _dec6$2 = group("Show", "缓动方式", useShowTween, "Easing", ["type", Enum(EasingType)]), _dec7$1 = group("Show", "动画时长", useShowTween, "Duration", [0, 10, 0.1], ["unit", "sec"]), _dec8$1 = group("Show", "渐入方式", showTendency, "Tendency", ["type", Enum(EasingTendency)]), _dec9$1 = group("Show", "渐入方向", useShowSlide, "Direction", ["type", Enum(Direction8)]), _dec10$1 = group("Show", "渐入距离", useShowSlide, "Distance", [0, 1000, 1], ["unit", "px"]), _dec11$1 = group("Show", "渐入延迟", useShowTween, "Delay", [0, 10, 0.1], ["unit", "sec"]), _dec12$1 = group("Show", "起始比例", useShowScale, "FromScale", [0, 10, 0.1]), _dec13$1 = group("Show", "旋转角度", useShowRotate, "Angle", [0, 720, 15], ["unit", "deg"]), _dec14$1 = group("Show", "播前就位", useShowTween, "PreReady"), _dec15$1 = group("Hide", "动效类型", "Type", ["type", Enum(EffectType)]), _dec16 = group("Hide", "缓动方式", useHideTween, "Easing", ["type", Enum(EasingType)]), _dec17 = group("Hide", "动画时长", useHideTween, "Duration", [0, 10, 0.1], ["unit", "sec"]), _dec18 = group("Hide", "渐出方式", hideTendency, "Tendency", ["type", Enum(EasingTendency)]), _dec19 = group("Hide", "渐出方向", useHideSlide, "Direction", ["type", Enum(Direction8)]), _dec20 = group("Hide", "渐出距离", useHideSlide, "Distance", [0, 1000, 1], ["unit", "px"]), _dec21 = group("Hide", "渐出延迟", useHideTween, "Delay", [0, 10, 0.1], ["unit", "sec"]), _dec22 = group("Hide", "结束比例", useHideScale, "ToScale", [0, 10, 0.1]), _dec23 = group("Hide", "旋转角度", useHideRotate, "Angle", [0, 720, 15], ["unit", "deg"]), _dec24 = group("Hide", "播完隐藏", useHideTween, "PostRemove"), _dec$3(_class$3 = _dec2$3(_class$3 = _dec3$3(_class$3 = (_class2$3 = (_class3$2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TweenSwitcher, _Component);
        function TweenSwitcher() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "interactableInTween", _descriptor$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showType", _descriptor2$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showEasing", _descriptor3$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showDuration", _descriptor4$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showTendency", _descriptor5$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showDirection", _descriptor6$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showDistance", _descriptor7$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showDelay", _descriptor8$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showFromScale", _descriptor9$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showRotateAngle", _descriptor10$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showPreReady", _descriptor11$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideType", _descriptor12$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideEasing", _descriptor13$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDuration", _descriptor14$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideTendency", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDirection", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDistance", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideDelay", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideToScale", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hideRotateAngle", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hidePostInactive", _descriptor21, _assertThisInitialized(_this));
          _this._origin = new TweenStates();
          _this._from = new TweenStates();
          _this._to = new TweenStates();
          _this._showing = true;
          return _this;
        }
        var _proto2 = TweenSwitcher.prototype;
        // 播放出现或隐藏
        _proto2.play = function play(toShow, withActivate) {
          toShow ? this.show(withActivate) : this.hide(withActivate);
          return this;
        }

        // 状态切换
        ;

        _proto2.toggle = function toggle() {
          this._showing ? this.hide() : this.show();
          return this;
        }

        // 播放出现
        ;

        _proto2.show = function show(activeImmediately) {
          if (activeImmediately) this.node.active = true;
          this._showing = true;
          this._startTween();
          return this;
        }

        // 播放隐藏
        ;

        _proto2.hide = function hide(inactiveWhenCompleted) {
          if (inactiveWhenCompleted) this.hidePostInactive = true;
          this._showing = false;
          this._startTween();
          return this;
        };
        _proto2.onLoad = function onLoad() {
          var widget = this.getComponent(Widget);
          if (widget && widget.enabled) widget.updateAlignment();
          this.resetOrigin();
          if (this.showPreReady && this.showType != EffectType.NONE) this.setReady();
        };
        _proto2.resetOrigin = function resetOrigin() {
          var _this$getComponent$op, _this$getComponent;
          this._origin.reset(this.node.position, this.node.scale, (_this$getComponent$op = (_this$getComponent = this.getComponent(UIOpacity)) == null ? void 0 : _this$getComponent.opacity) != null ? _this$getComponent$op : 255, this.node.angle);
          return this;
        };
        _proto2.resetOriginPosition = function resetOriginPosition() {
          this._origin.position.set(this.node.position);
          return this;
        };
        _proto2.setReady = function setReady() {
          this._reCalculate();
          this._setStatesAs(this._from);
          return this;
        };
        _proto2._reCalculate = function _reCalculate() {
          var type = this._showing ? this.showType : this.hideType;
          this._from.reset(this._origin);
          this._to.reset(this._origin);
          switch (type) {
            case EffectType.FADE:
              this._fade();
              break;
            case EffectType.SLIDE:
              this._slide();
              break;
            case EffectType.SCALE:
              this._scale();
              break;
            case EffectType.FADE_SLIDE:
              this._fade()._slide();
              break;
            case EffectType.FADE_SCALE:
              this._fade()._scale();
              break;
            case EffectType.FADE_ROTATE:
              this._fade()._rotate();
              break;
            case EffectType.ROTATE_SCALE:
              this._rotate()._scale();
              break;
            case EffectType.FADE_ROTATE_SCALE:
              this._fade()._rotate()._scale();
              break;
          }
        };
        _proto2._startTween = function _startTween() {
          var _this2 = this;
          this._reCalculate();
          if (this._showing && this.showType === EffectType.NONE) {
            this._setStatesAs(this._origin);
            return;
          }
          if (!this._showing && this.hideType === EffectType.NONE) {
            this._setStatesAs(this._origin);
            return;
          }
          Tween.stopAllByTarget(this);
          var easType = this._showing ? this.showEasing : this.hideEasing;
          var tend = this._showing ? this.showTendency : this.hideTendency;
          var delay = this._showing ? this.showDelay : this.hideDelay;
          var duration = this._showing ? this.showDuration : this.hideDuration;
          this._setStatesAs(this._from);
          tween(this.node).delay(delay).to(duration, null, {
            easing: this._parseEasing(easType, tend),
            onStart: function onStart() {
              return _this2.interactableInTween && _this2._setInteractable(false);
            },
            onUpdate: function onUpdate(self, ratio) {
              self.setPosition(Vec3.lerp(v3a$1, _this2._from.position, _this2._to.position, ratio));
              self.setScale(Vec3.lerp(v3a$1, _this2._from.scale, _this2._to.scale, ratio));
              var opa = _this2.getComponent(UIOpacity);
              if (opa) opa.opacity = Math.lerp(_this2._from.opacity, _this2._to.opacity, ratio);
              self.angle = Math.lerp(_this2._from.angle, _this2._to.angle, ratio);
            },
            onComplete: function onComplete(self) {
              _this2.interactableInTween && _this2._setInteractable(true);
              if (!_this2._showing && _this2.hidePostInactive) {
                self.active = false;
              }
            }
          }).start();
        }

        // 淡入淡出
        ;

        _proto2._fade = function _fade() {
          var opa = this._origin.opacity;
          this._to.opacity = this._showing ? opa : 0;
          this._from.opacity = this._showing ? 0 : opa;
          return this;
        }

        // 滑入滑出
        ;

        _proto2._slide = function _slide() {
          var widget = this.getComponent(Widget);
          if (widget && widget.enabled && widget.alignMode === Widget.AlignMode.ALWAYS) {
            console.log(this.node.name);
            console.warn("[TweenShift]: 'SLIDE' may not useful course of widget (MODE=ALWAYS)");
          }
          var dir = this._showing ? this.showDirection : this.hideDirection;
          var dist = this._showing ? this.showDistance : this.hideDistance;
          var Dir = Direction8;
          var r = [Dir.RIGHT, Dir.UP_RIGHT, Dir.DOWN_RIGHT].contains(dir);
          var l = [Dir.LEFT, Dir.UP_LEFT, Dir.DOWN_LEFT].contains(dir);
          var u = [Dir.UP, Dir.UP_LEFT, Dir.UP_RIGHT].contains(dir);
          var d = [Dir.DOWN, Dir.DOWN_LEFT, Dir.DOWN_RIGHT].contains(dir);
          var _this$_origin$positio = this._origin.position,
            x = _this$_origin$positio.x,
            y = _this$_origin$positio.y;
          this._from.position.set(x, y);
          this._to.position.set(x, y);
          if (this._showing) {
            this._from.position.x += r ? -dist : l ? dist : 0;
            this._from.position.y += u ? -dist : d ? dist : 0;
          } else {
            this._to.position.x += r ? dist : l ? -dist : 0;
            this._to.position.y += u ? dist : d ? -dist : 0;
          }
          return this;
        }

        // 旋入旋出
        ;

        _proto2._rotate = function _rotate() {
          var add = this._showing ? this.showRotateAngle : this.hideRotateAngle;
          var angle = this._origin.angle;
          this._to.angle = this._showing ? angle : angle + add;
          this._from.angle = this._showing ? angle + add : angle;
          return this;
        }

        // 缩放出入
        ;

        _proto2._scale = function _scale() {
          var _this$_origin$scale = this._origin.scale,
            x = _this$_origin$scale.x,
            y = _this$_origin$scale.y;
          // NOTICE! scale.z = 0 will lost 2D touchable events!
          this._from.scale.set(this._showing ? x * this.showFromScale : x, this._showing ? y * this.showFromScale : y, 1);
          this._to.scale.set(this._showing ? x : x * this.hideToScale, this._showing ? y : y * this.hideToScale, 1);
          return this;
        };
        _proto2._setStatesAs = function _setStatesAs(states) {
          var position = states.position,
            scale = states.scale,
            angle = states.angle,
            opacity = states.opacity;
          this.node.setPosition(position);
          this.node.setScale(scale);
          this.node.angle = angle;
          if (isNum(opacity)) this._opacity.opacity = opacity;
        };
        _proto2._parseEasing = function _parseEasing(easing, tendency) {
          if (easing === EasingType.LINEAR) return 'linear';
          if (easing === EasingType.SMOOTH) return 'smooth';
          if (easing === EasingType.FADE) return 'fade';
          if (easing === EasingType.CONSTANT) return 'constant';
          var prefix, suffix;
          switch (easing) {
            case EasingType.QUAD:
              prefix = 'quad';
              break;
            case EasingType.CUBIC:
              prefix = 'cubic';
              break;
            case EasingType.QUART:
              prefix = 'quart';
              break;
            case EasingType.QUINT:
              prefix = 'quint';
              break;
            case EasingType.SINE:
              prefix = 'sine';
              break;
            case EasingType.CIRC:
              prefix = 'circ';
              break;
            case EasingType.EXPO:
              prefix = 'expo';
              break;
            case EasingType.ELASTIC:
              prefix = 'elastic';
              break;
            case EasingType.BACK:
              prefix = 'back';
              break;
            case EasingType.BOUNCE:
              prefix = 'bounce';
              break;
          }
          switch (tendency) {
            case EasingTendency.IN:
              suffix = 'In';
              break;
            case EasingTendency.OUT:
              suffix = 'Out';
              break;
            case EasingTendency.IN_OUT:
              suffix = 'InOut';
              break;
            case EasingTendency.OUT_IN:
              suffix = 'OutIn';
              break;
          }
          return prefix + suffix;
        };
        _proto2._setInteractable = function _setInteractable(arg) {
          for (var i = 0; i < BlockEvents.length; i++) {
            arg ? this.node.on(BlockEvents[i], stopPropagation, this) : this.node.off(BlockEvents[i], stopPropagation, this);
          }
        };
        _createClass(TweenSwitcher, [{
          key: "showing",
          get: function get() {
            return this._showing;
          }
        }, {
          key: "_opacity",
          get: function get() {
            var _this$getComponent2;
            return (_this$getComponent2 = this.getComponent(UIOpacity)) != null ? _this$getComponent2 : this.addComponent(UIOpacity);
          }
        }]);
        return TweenSwitcher;
      }(Component), _class3$2.EffectType = EffectType, _class3$2.EasingType = EasingType, _class3$2.Direction = Direction8, _class3$2), (_descriptor$3 = _applyDecoratedDescriptor(_class2$3.prototype, "interactableInTween", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$3.prototype, "showType", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EffectType.NONE;
        }
      }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$3.prototype, "showEasing", [_dec6$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EasingType.SINE;
        }
      }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$3.prototype, "showDuration", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$3.prototype, "showTendency", [_dec8$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EasingTendency.OUT;
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$3.prototype, "showDirection", [_dec9$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Direction8.UP;
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$3.prototype, "showDistance", [_dec10$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$3.prototype, "showDelay", [_dec11$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9$1 = _applyDecoratedDescriptor(_class2$3.prototype, "showFromScale", [_dec12$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10$1 = _applyDecoratedDescriptor(_class2$3.prototype, "showRotateAngle", [_dec13$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 360;
        }
      }), _descriptor11$1 = _applyDecoratedDescriptor(_class2$3.prototype, "showPreReady", [_dec14$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12$1 = _applyDecoratedDescriptor(_class2$3.prototype, "hideType", [_dec15$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EffectType.NONE;
        }
      }), _descriptor13$1 = _applyDecoratedDescriptor(_class2$3.prototype, "hideEasing", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EasingType.SINE;
        }
      }), _descriptor14$1 = _applyDecoratedDescriptor(_class2$3.prototype, "hideDuration", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.3;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2$3.prototype, "hideTendency", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return EasingTendency.OUT;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2$3.prototype, "hideDirection", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Direction8.DOWN;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2$3.prototype, "hideDistance", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2$3.prototype, "hideDelay", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2$3.prototype, "hideToScale", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2$3.prototype, "hideRotateAngle", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 360;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2$3.prototype, "hidePostInactive", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2$3)) || _class$3) || _class$3) || _class$3));
      var BlockEvents = [NodeEventType.TOUCH_START, NodeEventType.TOUCH_END, NodeEventType.TOUCH_MOVE, NodeEventType.MOUSE_DOWN, NodeEventType.MOUSE_MOVE, NodeEventType.MOUSE_UP, NodeEventType.MOUSE_ENTER, NodeEventType.MOUSE_LEAVE, NodeEventType.MOUSE_WHEEL];
      function stopPropagation(event) {
        event.propagationStopped = true;
      }
      var v3a$1 = new Vec3();
      cclegacy._RF.pop();
      var _dec$4, _dec2$4, _dec3$4, _dec4$4, _dec5$4, _dec6$3, _dec7$2, _dec8$2, _dec9$2, _dec10$2, _dec11$2, _dec12$2, _dec13$2, _dec14$2, _dec15$2, _dec16$1, _dec17$1, _dec18$1, _dec19$1, _dec20$1, _dec21$1, _dec22$1, _dec23$1, _dec24$1, _dec25, _class$4, _class2$4, _descriptor$4, _descriptor2$4, _descriptor3$4, _descriptor4$3, _descriptor5$2, _descriptor6$2, _descriptor7$2, _descriptor8$2, _descriptor9$2, _descriptor10$2, _descriptor11$2, _descriptor12$2, _descriptor13$2, _descriptor14$2, _descriptor15$1, _descriptor16$1, _descriptor17$1, _descriptor18$1, _descriptor19$1, _descriptor20$1, _descriptor21$1, _descriptor22, _descriptor23, _descriptor24;
      cclegacy._RF.push({}, "012f9uzQ+xBZr1RGKgV+FXp", "transformer", undefined);
      var ccclass$4 = _decorator.ccclass;
      var None = Limitation.Type.None;
      function showTranslate() {
        return this.useTranslate;
      }
      function showPosLimitation() {
        return this.useTranslate && this.positionLimited;
      }
      function showRotate() {
        return this.useRotate;
      }
      function showEulerLimitation() {
        return this.useRotate && this.eulerLimited;
      }
      function showScale() {
        return this.useScale;
      }
      function showScaleLimitation() {
        return this.useScale && this.scaleLimited;
      }
      var Transformer = (_dec$4 = ccclass$4("cfw.Transformer"), _dec2$4 = group("Translate", "启用平移变换"), _dec3$4 = group("Translate", "相对世界变换", showTranslate, "Use World"), _dec4$4 = group("Translate", "初始线速度", showTranslate), _dec5$4 = group("Translate", "线加速度", showTranslate), _dec6$3 = group("Translate", "启用位置约束", showTranslate), _dec7$2 = group("Translate", "X轴范围限制", showPosLimitation), _dec8$2 = group("Translate", "Y轴范围限制", showPosLimitation), _dec9$2 = group("Translate", "Z轴范围限制", showPosLimitation), _dec10$2 = group("Rotate", "启用旋转变换"), _dec11$2 = group("Rotate", "相对世界变换", showRotate, "Use World"), _dec12$2 = group("Rotate", "欧拉角速度", showRotate, ['unit', 'deg/s']), _dec13$2 = group("Rotate", "欧拉角加速度", showRotate, ['unit', 'deg/s^2']), _dec14$2 = group("Rotate", "启用欧拉角约束", showRotate), _dec15$2 = group("Rotate", "X欧拉角范围限制", showEulerLimitation), _dec16$1 = group("Rotate", "Y欧拉角范围限制", showEulerLimitation), _dec17$1 = group("Rotate", "Z欧拉角范围限制", showEulerLimitation), _dec18$1 = group("Scale", "使用缩放"), _dec19$1 = group("Scale", "相对世界变换", showScale, "Use World"), _dec20$1 = group("Scale", "缩放速率", showScale), _dec21$1 = group("Scale", "缩放加速率", showScale), _dec22$1 = group("Scale", "启用缩放约束", showScale), _dec23$1 = group("Scale", "X轴缩放比限制", showScaleLimitation), _dec24$1 = group("Scale", "Y轴缩放比限制", showScaleLimitation), _dec25 = group("Scale", "Z轴缩放比限制", showScaleLimitation), _dec$4(_class$4 = (_class2$4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Transformer, _Component);
        function Transformer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "useTranslate", _descriptor$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "worldTranslate", _descriptor2$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initLinearVelocity", _descriptor3$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "linearAcceleration", _descriptor4$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "positionLimited", _descriptor5$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xPosLimitation", _descriptor6$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yPosLimitation", _descriptor7$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zPosLimitation", _descriptor8$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useRotate", _descriptor9$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "worldRotate", _descriptor10$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initEulerVelocity", _descriptor11$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eulerAcceleration", _descriptor12$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eulerLimited", _descriptor13$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xEulerLimitation", _descriptor14$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yEulerLimitation", _descriptor15$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zEulerLimitation", _descriptor16$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useScale", _descriptor17$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "worldScale", _descriptor18$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initScaleVelocity", _descriptor19$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleAcceleration", _descriptor20$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scaleLimited", _descriptor21$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xScaleLimitation", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yScaleLimitation", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zScaleLimitation", _descriptor24, _assertThisInitialized(_this));
          /** 当前瞬时线速度 */
          _this.linearVelocity = v3();
          /** 当前瞬时角速度 */
          _this.eulerVelocity = v3();
          /** 当前瞬时缩放速度 */
          _this.scaleVelocity = v3();
          _this._euler = v3();
          _this._quat = new Quat();
          _this._last = {
            position: v3(),
            euler: v3(),
            scale: v3()
          };
          return _this;
        }
        var _proto = Transformer.prototype;
        _proto.onEnable = function onEnable() {
          this.linearVelocity.set(this.initLinearVelocity);
          this.eulerVelocity.set(this.initEulerVelocity);
          this.scaleVelocity.set(this.initScaleVelocity);
        };
        _proto.start = function start() {
          var worldTranslate = this.worldTranslate,
            worldRotate = this.worldRotate,
            worldScale = this.worldScale;
          this._last.position.set(worldTranslate ? this.node.worldPosition : this.node.position);
          this._last.euler.set(worldRotate ? this.node.getWorldRotation(this._quat).getEulerAngles(this._euler) : this.node.eulerAngles);
          this._last.scale.set(worldScale ? this.node.worldScale : this.node.scale);
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          var useTranslate = this.useTranslate,
            useRotate = this.useRotate,
            useScale = this.useScale;
          if (useTranslate) this._translate(dt);
          if (useRotate) this._rotate(dt);
          if (useScale) this._scale(dt);
        };
        _proto._translate = function _translate(dt) {
          var position = this._last.position,
            world = this.worldTranslate,
            v = this.linearVelocity,
            acc = this.linearAcceleration,
            positionLimited = this.positionLimited;
          var _Vec3$scaleAndAdd = Vec3.scaleAndAdd(v, v, acc, dt),
            vx = _Vec3$scaleAndAdd.x,
            vy = _Vec3$scaleAndAdd.y,
            vz = _Vec3$scaleAndAdd.z;
          var dx = vx * dt,
            dy = vy * dt,
            dz = vz * dt;
          var x = position.x,
            y = position.y,
            z = position.z;
          if (positionLimited) {
            var _this$xPosLimitation$ = this.xPosLimitation.limit(x, dx),
              _x = _this$xPosLimitation$[0],
              _dx = _this$xPosLimitation$[1];
            var _this$yPosLimitation$ = this.yPosLimitation.limit(y, dy),
              _y = _this$yPosLimitation$[0],
              _dy = _this$yPosLimitation$[1];
            var _this$zPosLimitation$ = this.zPosLimitation.limit(z, dz),
              _z = _this$zPosLimitation$[0],
              _dz = _this$zPosLimitation$[1];
            v.set(_dx / dt, _dy / dt, _dz / dt);
            x = _x;
            y = _y;
            z = _z;
          } else {
            x += dx;
            y += dy;
            z += dy;
          }
          position.set(x, y, z);
          world ? this.node.setWorldPosition(position) : this.node.setPosition(position);
        };
        _proto._rotate = function _rotate(dt) {
          var euler = this._last.euler,
            world = this.worldRotate,
            v = this.eulerVelocity,
            eulerAcceleration = this.eulerAcceleration,
            eulerLimited = this.eulerLimited;
          var _Vec3$scaleAndAdd2 = Vec3.scaleAndAdd(v, v, eulerAcceleration, dt),
            vx = _Vec3$scaleAndAdd2.x,
            vy = _Vec3$scaleAndAdd2.y,
            vz = _Vec3$scaleAndAdd2.z;
          var dx = vx * dt,
            dy = vy * dt,
            dz = vz * dt;
          var x = euler.x,
            y = euler.y,
            z = euler.z;
          if (eulerLimited) {
            var _this$xEulerLimitatio = this.xEulerLimitation.limit(x, dx),
              _x = _this$xEulerLimitatio[0],
              _dx = _this$xEulerLimitatio[1];
            var _this$yEulerLimitatio = this.yEulerLimitation.limit(y, dy),
              _y = _this$yEulerLimitatio[0],
              _dy = _this$yEulerLimitatio[1];
            var _this$zEulerLimitatio = this.zEulerLimitation.limit(z, dz),
              _z = _this$zEulerLimitatio[0],
              _dz = _this$zEulerLimitatio[1];
            v.set(_dx / dt, _dy / dt, _dz / dt);
            x = _x;
            y = _y;
            z = _z;
          } else {
            x += dx;
            y += dy;
            z += dz;
          }
          euler.set(x, y, z);
          world ? this.node.setWorldRotationFromEuler(x, y, z) : this.node.setRotationFromEuler(euler);
        };
        _proto._scale = function _scale(dt) {
          var scale = this._last.scale,
            world = this.worldScale,
            v = this.scaleVelocity,
            acc = this.scaleAcceleration,
            scaleLimited = this.scaleLimited;
          var _Vec3$scaleAndAdd3 = Vec3.scaleAndAdd(v, v, acc, dt),
            vx = _Vec3$scaleAndAdd3.x,
            vy = _Vec3$scaleAndAdd3.y,
            vz = _Vec3$scaleAndAdd3.z;
          var dx = vx * dt,
            dy = vy * dt,
            dz = vz * dt;
          var x = scale.x,
            y = scale.y,
            z = scale.z;
          if (scaleLimited) {
            var _this$xScaleLimitatio = this.xScaleLimitation.limit(x, dx),
              _x = _this$xScaleLimitatio[0],
              _dx = _this$xScaleLimitatio[1];
            var _this$yScaleLimitatio = this.yScaleLimitation.limit(y, dy),
              _y = _this$yScaleLimitatio[0],
              _dy = _this$yScaleLimitatio[1];
            var _this$zScaleLimitatio = this.zScaleLimitation.limit(z, dz),
              _z = _this$zScaleLimitatio[0],
              _dz = _this$zScaleLimitatio[1];
            this.scaleVelocity.set(_dx / dt, _dy / dt, _dz / dt);
            x = _x;
            y = _y;
            z = _z;
          } else {
            x += dx;
            y += dy;
            z += dz;
          }
          scale.set(x, y, z);
          world ? this.node.setWorldScale(scale) : this.node.setScale(scale);
        };
        return Transformer;
      }(Component), (_descriptor$4 = _applyDecoratedDescriptor(_class2$4.prototype, "useTranslate", [_dec2$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$4.prototype, "worldTranslate", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$4.prototype, "initLinearVelocity", [_dec4$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$4.prototype, "linearAcceleration", [_dec5$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor5$2 = _applyDecoratedDescriptor(_class2$4.prototype, "positionLimited", [_dec6$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6$2 = _applyDecoratedDescriptor(_class2$4.prototype, "xPosLimitation", [_dec7$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Limitation(None, 0, 100);
        }
      }), _descriptor7$2 = _applyDecoratedDescriptor(_class2$4.prototype, "yPosLimitation", [_dec8$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Limitation(None, 0, 100);
        }
      }), _descriptor8$2 = _applyDecoratedDescriptor(_class2$4.prototype, "zPosLimitation", [_dec9$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Limitation(None, 0, 100);
        }
      }), _descriptor9$2 = _applyDecoratedDescriptor(_class2$4.prototype, "useRotate", [_dec10$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10$2 = _applyDecoratedDescriptor(_class2$4.prototype, "worldRotate", [_dec11$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11$2 = _applyDecoratedDescriptor(_class2$4.prototype, "initEulerVelocity", [_dec12$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor12$2 = _applyDecoratedDescriptor(_class2$4.prototype, "eulerAcceleration", [_dec13$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor13$2 = _applyDecoratedDescriptor(_class2$4.prototype, "eulerLimited", [_dec14$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor14$2 = _applyDecoratedDescriptor(_class2$4.prototype, "xEulerLimitation", [_dec15$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Limitation(None, 0, 360);
        }
      }), _descriptor15$1 = _applyDecoratedDescriptor(_class2$4.prototype, "yEulerLimitation", [_dec16$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Limitation(None, 0, 360);
        }
      }), _descriptor16$1 = _applyDecoratedDescriptor(_class2$4.prototype, "zEulerLimitation", [_dec17$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Limitation(None, 0, 360);
        }
      }), _descriptor17$1 = _applyDecoratedDescriptor(_class2$4.prototype, "useScale", [_dec18$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor18$1 = _applyDecoratedDescriptor(_class2$4.prototype, "worldScale", [_dec19$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor19$1 = _applyDecoratedDescriptor(_class2$4.prototype, "initScaleVelocity", [_dec20$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor20$1 = _applyDecoratedDescriptor(_class2$4.prototype, "scaleAcceleration", [_dec21$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return v3();
        }
      }), _descriptor21$1 = _applyDecoratedDescriptor(_class2$4.prototype, "scaleLimited", [_dec22$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2$4.prototype, "xScaleLimitation", [_dec23$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Limitation(None, 0, 1);
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2$4.prototype, "yScaleLimitation", [_dec24$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Limitation(None, 0, 1);
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2$4.prototype, "zScaleLimitation", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Limitation(None, 0, 1);
        }
      })), _class2$4)) || _class$4);
      cclegacy._RF.pop();
      var _class$5;
      cclegacy._RF.push({}, "427284BxYJO444yvR6nU8eL", "audio-manager", undefined);
      var AudioManager = singleton(_class$5 = /*#__PURE__*/function () {
        function AudioManager() {
          /** 音效资源组 */
          this.sfx = [];
          /** 
           * 按钮默认资源
           * @explain 设置该资源会使得所有按钮启用相同音频。
           * 在层级面板中对指定按钮节点设置名称：`节点:xxx音效`可指定某按钮播放特殊音效。
           * 在层级面板中对指定按钮节点设置名称：`节点:none`可禁用特定节点音效。
           */
          this.sfxButton = null;
          /** 
           * 切换按钮默认资源
           * @explain 当切换按钮有次资源时优先播放sfxToggle，否则若有sfxButton则播放后者。
           */
          this.sfxToggle = null;
          this._muted = false;
          this._wasBgmPlaying = false;
          this._bgmClip = null;
          this._bgmAutoPlay = false;
          this._bgmAds = null;
          this._sfxAds = null;
        }
        var _proto = AudioManager.prototype;
        /** 播放背景音乐 */
        _proto.playBgm = function playBgm() {
          this._checkAds(function (ads) {
            return !ads.playing && ads.play();
          });
        }

        /** 暂停背景音乐 */;
        _proto.pauseBgm = function pauseBgm() {
          this._checkAds(function (ads) {
            return ads.playing && ads.pause();
          });
        }

        /** 切换背景音乐播放状态 */;
        _proto.toggleBgm = function toggleBgm() {
          this._checkAds(function (ads) {
            ads.playing ? ads.pause() : ads.play();
          });
        }

        /** 添加音效资源 */;
        _proto.addSfx = function addSfx() {
          var _this$sfx;
          (_this$sfx = this.sfx).unshiftUnique.apply(_this$sfx, arguments);
          return this;
        }

        /** 
         * 播放音效资源
         * @param name 音效名称
         * @explain 如果你添加的资源名称为`Fight`、`sfx_fight`，你可以使用playSfx('fight')来播放它。 
         */;
        _proto.playSfx = function playSfx(name) {
          var _this = this;
          if (this._muted) return;
          this._checkSfx(function () {
            var name_low = name.toLowerCase();
            _this.sfx.forEach(function (clip) {
              var clip_low = clip.name.toLowerCase();
              if (clip_low === name_low || clip_low === "sfx_" + name_low) {
                _this._sfxAds.clip = clip;
                _this._sfxAds.play();
              }
            });
          });
        };
        _proto.init = function init(bgmAds, sfxAds) {
          this._bgmAds = bgmAds;
          this._sfxAds = sfxAds;
          // notice:cocos ads default playOnAwake, on Root will auto-play every scene's entry
          this._bgmAds.playOnAwake = this._sfxAds.playOnAwake = false;
          inner.attach(__cfw_notifications__.Audio.DEFAULT_BUTTON, this.onSfxButton, this);
          inner.attach(__cfw_notifications__.Audio.DEFAULT_TOGGLE, this.onSfxToggle, this);
        };
        _proto.onSfxButton = function onSfxButton(sfx) {
          if (this._muted) return;
          if (sfx === 'none') return;else if (!!sfx) this.playSfx(sfx);else if (this.sfxButton) {
            this._sfxAds.clip = this.sfxButton;
            this._sfxAds.play();
          }
        };
        _proto.onSfxToggle = function onSfxToggle(sfx) {
          if (this._muted) return;
          if (sfx === 'none') return;else if (!!sfx) this.playSfx(sfx);else if (this.sfxToggle) {
            this._sfxAds.clip = this.sfxToggle;
            this._sfxAds.play();
          } else this.onSfxButton(sfx);
        };
        _proto._checkAds = function _checkAds(next) {
          var ads = this._bgmAds,
            clip = this.bgm;
          if (!ads) return console.warn("[audio]", "no bgm audio-source");
          if (!clip) return console.warn("[audio]", "no bgm audio-clip");
          if (isFunc(next)) next(ads);
        };
        _proto._checkSfx = function _checkSfx(next) {
          var ads = this._sfxAds,
            clips = this.sfx;
          if (!ads) return console.warn("[audio]", "no sfx audio-source");
          if (!notEmptyArr(clips)) return console.warn("[audio]", "no sfx audio-clips");
          if (isFunc(next)) next(ads);
        };
        _proto._tryAutoPlay = function _tryAutoPlay() {
          var _this$_bgmAds;
          if (this._bgmAutoPlay && (_this$_bgmAds = this._bgmAds) != null && _this$_bgmAds.clip) this._bgmAds.play();
        };
        _createClass(AudioManager, [{
          key: "bgm",
          get: /** 背景音乐资源 */
          function get() {
            var _this$_bgmAds$clip, _this$_bgmAds2;
            return (_this$_bgmAds$clip = (_this$_bgmAds2 = this._bgmAds) == null ? void 0 : _this$_bgmAds2.clip) != null ? _this$_bgmAds$clip : this._bgmClip;
          },
          set: function set(arg) {
            this._bgmClip = arg;
            if (this._bgmAds) {
              this._bgmAds.clip = arg;
              this._tryAutoPlay();
            }
          }

          /** 背景音乐音量 */
        }, {
          key: "bgmVolume",
          get: function get() {
            var _this$_bgmAds3;
            return (_this$_bgmAds3 = this._bgmAds) == null ? void 0 : _this$_bgmAds3.volume;
          },
          set: function set(arg) {
            if (this._bgmAds) this._bgmAds.volume = arg;
          }

          /** 背景音乐循环播放 */
        }, {
          key: "bgmLoop",
          get: function get() {
            var _this$_bgmAds4;
            return (_this$_bgmAds4 = this._bgmAds) == null ? void 0 : _this$_bgmAds4.loop;
          },
          set: function set(arg) {
            if (this._bgmAds) this._bgmAds.loop = arg;
          }

          /** 背景音乐自动播放 [TODO.APPLE强制播放] */
        }, {
          key: "bgmPlayOnAwake",
          get: function get() {
            return this._bgmAutoPlay;
          },
          set: function set(arg) {
            this._bgmAutoPlay = arg;
            this._tryAutoPlay();
          }
        }, {
          key: "sfxVolume",
          get: /** 音效音量 */
          function get() {
            var _this$_sfxAds;
            return (_this$_sfxAds = this._sfxAds) == null ? void 0 : _this$_sfxAds.volume;
          },
          set: function set(arg) {
            if (this._sfxAds) this._sfxAds.volume = arg;
          }
        }, {
          key: "mute",
          get: function get() {
            return this._muted;
          },
          set: function set(arg) {
            this._muted = arg;
            if (arg) {
              if (this._bgmAds) {
                this._wasBgmPlaying = this._bgmAds.playing;
                this._bgmAds.pause();
              }
            } else {
              if (this._bgmAds && this._wasBgmPlaying) {
                this._bgmAds.play();
              }
            }
          }
        }]);
        return AudioManager;
      }()) || _class$5;
      cclegacy._RF.pop();
      var _class$6;
      cclegacy._RF.push({}, "70f13nJUq9MKr+XemmfQP42", "res-manager", undefined);
      var ResManager = singleton(_class$6 = /*#__PURE__*/function () {
        function ResManager() {
          this._configs = new Map();
          this._sheets = new Map();
          this._config_dirs = [];
          this._remoteBundleName = void 0;
          this._remoteBaseUrl = void 0;
          this._prefabs = new Map();
        }
        var _proto = ResManager.prototype;
        /** 
         * 获取图集
         * @param name 图集名称
         * @return 图集
         */
        _proto.getSheet = function getSheet(name) {
          return this._sheets.get(name);
        }

        /** 
         * 判断是否含有图集
         * @param name 图集名称
         * @return 判断结果
         */;
        _proto.hasSheet = function hasSheet(name) {
          return this._sheets.has(name);
        }

        /** 
         * 增加图集
         * @param name 图集名称
         * @param sheet 图集内容
         * @param override 是否覆盖现有同名内容，默认覆盖
         * @return 自身
         */;
        _proto.addSheet = function addSheet(name, sheet, override) {
          if (override === void 0) {
            override = true;
          }
          if (this.hasSheet(name) && !override) return this;
          this._sheets.set(name, sheet);
          return this;
        }

        /** 
         * 移除图集
         * @param name 图集名称
         * @return 是否存在移除内容
         */;
        _proto.removeSheet = function removeSheet(name) {
          if (this._sheets.has(name)) {
            this._sheets["delete"](name);
            return true;
          } else return false;
        }

        /** 清空所有图集 */;
        _proto.clearSheets = function clearSheets() {
          this._sheets.clear();
          return this;
        }

        /** 
         * 为图集增加图片
         * @param name 图集名称
         * @param frames 图片罗列
         * @return 自身
         */;
        _proto.addSheetFrames = function addSheetFrames(name) {
          var exist = this._sheets.has(name);
          if (!exist) this._sheets.set(name, []);
          var sheet = this._sheets.get(name);
          for (var _len = arguments.length, frames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            frames[_key - 1] = arguments[_key];
          }
          sheet.pushUnique.apply(sheet, frames);
          return this;
        }

        /** 
         * 从图集获取图片
         * @param name 图集名称
         * @param key 图片名称
         * @return 图片
         */;
        _proto.getSheetFrame = function getSheetFrame(name, key) {
          var sheet = this._sheets.get(name);
          if (sheet) {
            for (var _iterator = _createForOfIteratorHelperLoose(sheet), _step; !(_step = _iterator()).done;) {
              var frame = _step.value;
              if (frame.name === key) return frame;
            }
          }
          return null;
        }

        /** 
         * 获取配置
         * @param name 配置名称
         * @return 配置对象
         */;
        _proto.getConfig = function getConfig(name) {
          return this._configs.get(name);
        }

        /** 
         * 判断是否含有配置
         * @param name 配置名称
         * @return 判断结果
         */;
        _proto.hasConfig = function hasConfig(name) {
          return this._configs.has(name);
        }

        /** 
         * 增加配置
         * @param name 配置名称
         * @param config 配置对象
         * @param override 是否覆盖现有同名内容，默认覆盖
         * @return 自身
         */;
        _proto.addConfig = function addConfig(name, config, override) {
          if (override === void 0) {
            override = true;
          }
          if (this._configs.has(name) && !override) return this;
          this._configs.set(name, config);
          return this;
        }

        /** 
         * 移除配置
         * @param name 配置名称
         * @return 是否存在移除内容
         */;
        _proto.removeConfig = function removeConfig(name) {
          if (this._configs.has(name)) {
            this._configs["delete"](name);
            return true;
          } else return false;
        }

        /** 清空所有配置 */;
        _proto.clearConfigs = function clearConfigs() {
          this._configs.clear();
          return this;
        }

        /** 
         * 获取预制体
         * @param name 预制体名称
         * @return 预制体对象
         */;
        _proto.getPrefab = function getPrefab(name) {
          return this._prefabs.get(name);
        }

        /** 
         * 判断是否含有预制体
         * @param name 预制体名称
         * @return 判断结果
         */;
        _proto.hasPrefab = function hasPrefab(name) {
          return this._prefabs.has(name);
        }

        /** 
         * 增加预制体
         * @param name 预制体名称
         * @param prefab 预制体对象
         * @param override 是否覆盖现有同名内容，默认覆盖
         * @return 自身
         */;
        _proto.addPrefab = function addPrefab(name, prefab, override) {
          if (override === void 0) {
            override = true;
          }
          if (this._prefabs.has(name) && !override) return this;
          this._prefabs.set(name, prefab);
          return this;
        }

        /** 
         * 移除预制体
         * @param name 预制体名称
         * @param destroy 是否销毁，默认是
         * @return 是否存在移除内容
         */;
        _proto.removePrefab = function removePrefab(name, destroy) {
          if (destroy === void 0) {
            destroy = true;
          }
          if (this._prefabs.has(name)) {
            var prefab = this._prefabs.get(name);
            this._prefabs["delete"](name);
            if (destroy) prefab.destroy();
            return true;
          } else return false;
        }

        /** 清空所有预制体 */;
        _proto.clearPrefabs = function clearPrefabs() {
          this._prefabs.forEach(function (prefab) {
            return prefab.destroy();
          });
          this._prefabs.clear();
          return this;
        }

        /** 
         * 为配置增加条目
         * @param name 配置名称
         * @param key 条目名称
         * @param value 条目内容
         * @param override 是否覆盖已有同名内容，默认覆盖
         * @return 自身
         */;
        _proto.addConfigItem = function addConfigItem(name, key, value, override) {
          if (override === void 0) {
            override = true;
          }
          var config = this._configs.get(name);
          if (config) {
            var _exist = !!config[key];
            if (_exist && !override) return this;
            config[key] = value;
          }
          return this;
        }

        /** 
         * 从配置获取条目
         * @param name 配置名称
         * @param key 条目名称
         * @return 配置条目
         */;
        _proto.getConfigItem = function getConfigItem(name, key) {
          var config = this._configs.get(name);
          return config ? config[key] : null;
        }

        /** 
         * 加载动态资源目录下图集资源
         * @param dir resource路径下目录
         * @param name 为图集设置名称
         * @param override 是否覆盖已有同名资源，默认覆盖
         * @return 图集资源内容
         */;
        _proto.loadResSheetByDir = /*#__PURE__*/
        function () {
          var _loadResSheetByDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dir, name, override) {
            var _this = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (override === void 0) {
                    override = true;
                  }
                  if (!(this.hasSheet(name) && !override)) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return", null);
                case 3:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    resources.loadDir(dir, SpriteFrame, function (err, frames) {
                      if (err) {
                        console.warn(err);
                        return resolve(null);
                      } else {
                        _this._sheets.set(name, frames);
                        return resolve(frames);
                      }
                    });
                  }));
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadResSheetByDir(_x, _x2, _x3) {
            return _loadResSheetByDir.apply(this, arguments);
          }
          return loadResSheetByDir;
        }()
        /** 
         * 加载动态资源目录下所有配置资源
         * @param dir resource路径下目录
         * @param override 是否覆盖已有同名资源，默认覆盖
         * @return 所有配置资源
         */;

        _proto.loadResConfigsByDir = /*#__PURE__*/
        function () {
          var _loadResConfigsByDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dir, override) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (override === void 0) {
                    override = true;
                  }
                  if (!(this._config_dirs.contains(dir) && !override)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return", null);
                case 3:
                  this._config_dirs.pushUnique(dir);
                  return _context2.abrupt("return", new Promise(function (resolve) {
                    resources.loadDir(dir, JsonAsset, function (err, jsons) {
                      if (err) {
                        console.warn(err);
                        return resolve(null);
                      } else {
                        jsons.forEach(function (json) {
                          return _this2._configs.set(json.name, json.json);
                        });
                        return resolve(jsons);
                      }
                    });
                  }));
                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadResConfigsByDir(_x4, _x5) {
            return _loadResConfigsByDir.apply(this, arguments);
          }
          return loadResConfigsByDir;
        }()
        /** 
         * 加载动态资源目录下指定图片帧资源
         * @param path resource路径下路径
         * @param sprite 设置为指定图片的帧
         * @return 图片帧
         */;

        _proto.loadResImage = /*#__PURE__*/
        function () {
          var _loadResImage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(path, sprite) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", new Promise(function (resolve) {
                    resources.load(path + "/spriteFrame", SpriteFrame, function (err, frame) {
                      if (err) {
                        console.warn(err);
                        return resolve(null);
                      } else {
                        if (sprite) sprite.spriteFrame = frame;
                        return resolve(frame);
                      }
                    });
                  }));
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function loadResImage(_x6, _x7) {
            return _loadResImage.apply(this, arguments);
          }
          return loadResImage;
        }()
        /** 
         * 设置远程BaseUrl
         * @param base BaseUrl eg.`https://xxx-cloud1-xxxx-xxxxx.tcb.qcloud.la/xxx`
         */;

        _proto.setRemoteBaseUrl = function setRemoteBaseUrl(base) {
          this._remoteBaseUrl = base;
          return this;
        }

        /** 
         * 设置远程Bundle名称
         * @param name 远程包名称
         */;
        _proto.setRemoteBundleName = function setRemoteBundleName(name) {
          this._remoteBundleName = name;
          return this;
        }

        /** 
         * 获取远程纹理
         * @param url 资源路径
         * @param type 资源类型，默认`jpg`
         * @return 远程纹理
         * @explain 小游戏环境中优先尝试从BaseUrl下获取纹理，否则从远程远程包下获取纹理，否则从动态图集目录下获取纹理
         */;
        _proto.loadRemoteTexture = /*#__PURE__*/
        function () {
          var _loadRemoteTexture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(url, type) {
            var name;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  name = this._remoteBundleName, this._remoteBaseUrl;
                  return _context4.abrupt("return", new Promise(function (resolve, reject) {
                    if (!!name) {
                      var bundle = assetManager.getBundle(name);
                      if (!bundle) {
                        console.warn("[loadRemoteTexture]: bundle \"" + url + "\" not found");
                        reject(null);
                      } else bundle.load(url + "/texture", Texture2D, function (err, tex) {
                        if (err) {
                          console.warn("[loadRemoteTexture]: bundle.url=\"" + url + "\" failed", err);
                          reject(null);
                        } else resolve(tex);
                      });
                    } else {
                      resources.load(url + "/texture", Texture2D, function (err, tex) {
                        if (err) {
                          console.warn("[loadRemoteTexture]: res.url=\"" + url + "\" failed", err);
                          reject(null);
                        } else resolve(tex);
                      });
                    }
                  }));
                case 3:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function loadRemoteTexture(_x8, _x9) {
            return _loadRemoteTexture.apply(this, arguments);
          }
          return loadRemoteTexture;
        }();
        return ResManager;
      }()) || _class$6;
      cclegacy._RF.pop();
      var _dec$5, _dec2$5, _dec3$5, _dec4$5, _dec5$5, _dec6$4, _dec7$3, _dec8$3, _dec9$3, _dec10$3, _dec11$3, _dec12$3, _dec13$3, _dec14$3, _class$7, _class2$5, _descriptor$5, _descriptor2$5, _descriptor3$5, _descriptor4$4, _descriptor5$3, _descriptor6$3, _descriptor7$3, _descriptor8$3, _descriptor9$3, _descriptor10$3, _descriptor11$3, _descriptor12$3, _descriptor13$3, _class3$3, _dec15$3, _dec16$2, _class4$1, _class5$1, _descriptor14$3;
      cclegacy._RF.push({}, "8ac0eXBFftPNbpoEt/RKq61", "res-collector", undefined);
      var ccclass$5 = _decorator.ccclass;
      var res = ResManager.instance;
      var aud = AudioManager.instance;

      /** 资源类型 */
      var Type$1 = /*#__PURE__*/function (Type) {
        Type[Type["NONE"] = 0] = "NONE";
        Type[Type["SHEET"] = 1] = "SHEET";
        Type[Type["CONFIG"] = 2] = "CONFIG";
        Type[Type["BGM"] = 3] = "BGM";
        Type[Type["SFX"] = 4] = "SFX";
        Type[Type["PREFAB"] = 5] = "PREFAB";
        return Type;
      }(Type$1 || {});
      function showPersist() {
        return this.type != Type$1.NONE && this.type != Type$1.BGM;
      }
      function showOverride() {
        return this.type == Type$1.BGM || this.type != Type$1.NONE && this.persist;
      }
      function showDynamic() {
        return this.type != Type$1.NONE && this.type != Type$1.PREFAB;
      } // TODO 远程加载Prefab
      function showAutoLoad() {
        return this.type != Type$1.NONE && this.dynamic;
      }
      function showResDir() {
        return this.type != Type$1.NONE && this.type != Type$1.BGM && this.dynamic;
      }
      function showPathRes() {
        return this.type === Type$1.BGM && this.dynamic;
      }
      function showFrames() {
        return this.type === Type$1.SHEET;
      }
      function showJsons() {
        return this.type === Type$1.CONFIG;
      }
      function showPrefabs() {
        return this.type === Type$1.PREFAB;
      }
      function showBgm() {
        return this.type === Type$1.BGM;
      }
      function showSfx() {
        return this.type === Type$1.SFX;
      }
      var ResItem = (_dec$5 = ccclass$5('cfw.ResItem'), _dec2$5 = tip("资源类型", ["type", Enum(Type$1)]), _dec3$5 = tip("图集名称", showFrames), _dec4$5 = tip("本地碎图", showFrames, ["type", [SpriteFrame]]), _dec5$5 = tip("本地配置", showJsons, ["type", [JsonAsset]]), _dec6$4 = tip("背景音乐", AudioClip, showBgm), _dec7$3 = tip("本地音效", showSfx, ["type", [AudioClip]]), _dec8$3 = tip("本地预制", showPrefabs, ["type", [Prefab]]), _dec9$3 = tip("场景共享（加入资源管理）", showPersist), _dec10$3 = tip("覆盖已有", showOverride), _dec11$3 = tip("动态加载", showDynamic), _dec12$3 = tip("自动加载", showAutoLoad), _dec13$3 = tip("目录路径", showResDir), _dec14$3 = tip("资源路径", showPathRes), _dec$5(_class$7 = (_class2$5 = (_class3$3 = function ResItem() {
        _initializerDefineProperty(this, "type", _descriptor$5, this);
        _initializerDefineProperty(this, "sheetName", _descriptor2$5, this);
        _initializerDefineProperty(this, "frames", _descriptor3$5, this);
        _initializerDefineProperty(this, "jsons", _descriptor4$4, this);
        _initializerDefineProperty(this, "bgm", _descriptor5$3, this);
        _initializerDefineProperty(this, "sfx", _descriptor6$3, this);
        _initializerDefineProperty(this, "prefabs", _descriptor7$3, this);
        _initializerDefineProperty(this, "persist", _descriptor8$3, this);
        _initializerDefineProperty(this, "override", _descriptor9$3, this);
        _initializerDefineProperty(this, "dynamic", _descriptor10$3, this);
        _initializerDefineProperty(this, "autoLoad", _descriptor11$3, this);
        _initializerDefineProperty(this, "resDir", _descriptor12$3, this);
        _initializerDefineProperty(this, "resPath", _descriptor13$3, this);
      }, _class3$3.Type = Type$1, _class3$3), (_descriptor$5 = _applyDecoratedDescriptor(_class2$5.prototype, "type", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Type$1.NONE;
        }
      }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$5.prototype, "sheetName", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$5.prototype, "frames", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4$4 = _applyDecoratedDescriptor(_class2$5.prototype, "jsons", [_dec5$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5$3 = _applyDecoratedDescriptor(_class2$5.prototype, "bgm", [_dec6$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$3 = _applyDecoratedDescriptor(_class2$5.prototype, "sfx", [_dec7$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7$3 = _applyDecoratedDescriptor(_class2$5.prototype, "prefabs", [_dec8$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8$3 = _applyDecoratedDescriptor(_class2$5.prototype, "persist", [_dec9$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9$3 = _applyDecoratedDescriptor(_class2$5.prototype, "override", [_dec10$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor10$3 = _applyDecoratedDescriptor(_class2$5.prototype, "dynamic", [_dec11$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11$3 = _applyDecoratedDescriptor(_class2$5.prototype, "autoLoad", [_dec12$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor12$3 = _applyDecoratedDescriptor(_class2$5.prototype, "resDir", [_dec13$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor13$3 = _applyDecoratedDescriptor(_class2$5.prototype, "resPath", [_dec14$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2$5)) || _class$7);
      var ResCollector = (_dec15$3 = ccclass$5('cfw.ResCollector'), _dec16$2 = tip("资源项", ["type", [ResItem]]), _dec15$3(_class4$1 = (_class5$1 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ResCollector, _Component);
        function ResCollector() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "items", _descriptor14$3, _assertThisInitialized(_this));
          _this._configs = new Map();
          _this._prefabs = new Map();
          _this._sheets = new Map();
          return _this;
        }
        var _proto = ResCollector.prototype;
        _proto.hasSheet = function hasSheet(name) {
          return this._sheets.has(name);
        };
        _proto.setSheet = function setSheet(name, sheet) {
          this._sheets.set(name, sheet);
        };
        _proto.getSheet = function getSheet(name) {
          return this._sheets.get(name);
        };
        _proto.getSheetFrame = function getSheetFrame(name, key) {
          var sheet = this._sheets.get(name);
          if (sheet) {
            for (var _iterator = _createForOfIteratorHelperLoose(sheet), _step; !(_step = _iterator()).done;) {
              var frame = _step.value;
              if (frame.name === key) return frame;
            }
          }
          return null;
        };
        _proto.hasConfig = function hasConfig(name) {
          return this._configs.has(name);
        };
        _proto.getConfig = function getConfig(name) {
          return this._configs.get(name);
        };
        _proto.setConfig = function setConfig(name, config) {
          this._configs.set(name, config);
        };
        _proto.getConfigItem = function getConfigItem(name, key) {
          var config = this._configs.get(name);
          return config ? config[key] : null;
        };
        _proto.hasPrefab = function hasPrefab(name) {
          return this._prefabs.has(name);
        };
        _proto.getPrefab = function getPrefab(name) {
          return this._prefabs.get(name);
        };
        _proto.setPrefab = function setPrefab(name, prefab) {
          this._prefabs.set(name, prefab);
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          if (!this.enabled) return;
          this.items.forEach(function (item) {
            var type = item.type,
              persist = item.persist,
              dynamic = item.dynamic;
            if (type === Type$1.NONE) return;
            var autoLoad = item.autoLoad,
              override = item.override;
            switch (type) {
              case Type$1.SHEET:
                {
                  var frames = item.frames,
                    resDir = item.resDir,
                    sheetName = item.sheetName,
                    loadRes = dynamic && autoLoad && !!resDir;
                  frames.clean();
                  _this2.setSheet(sheetName, [].concat(frames));
                  if (persist) res.addSheetFrames.apply(res, [sheetName].concat(frames));
                  if (!loadRes) return;
                  resources.loadDir(resDir, SpriteFrame, function (err, frames) {
                    var _this2$getSheet;
                    if (err) console.warn(err);else (_this2$getSheet = _this2.getSheet(sheetName)).push.apply(_this2$getSheet, frames);
                  });
                  if (persist) res.loadResSheetByDir(resDir, sheetName, override);
                }
                break;
              case Type$1.CONFIG:
                {
                  var jsons = item.jsons,
                    _resDir = item.resDir,
                    _loadRes = dynamic && autoLoad && !!_resDir;
                  jsons.clean();
                  jsons.forEach(function (json) {
                    return _this2.setConfig(json.name, json.json);
                  });
                  if (persist) jsons.forEach(function (json) {
                    return res.addConfig(json.name, json.json, override);
                  });
                  if (!_loadRes) return;
                  resources.loadDir(_resDir, JsonAsset, function (err, jsons) {
                    if (err) console.warn(err);else jsons.forEach(function (json) {
                      return _this2.setConfig(json.name, json.json);
                    });
                  });
                  if (persist) _loadRes && res.loadResConfigsByDir(_resDir, override);
                }
                break;
              case Type$1.BGM:
                {
                  var bgm = item.bgm,
                    resPath = item.resPath,
                    _loadRes2 = dynamic && autoLoad && !!resPath;
                  if (bgm) {
                    if (!aud.bgm || override) aud.bgm = bgm;
                  } else if (_loadRes2) resources.load(resPath, AudioClip, function (err, clip) {
                    if (err) console.warn(err);else if (!aud.bgm || override) aud.bgm = clip;
                  });
                }
                break;
              case Type$1.SFX:
                {
                  var sfx = item.sfx,
                    _resDir2 = item.resDir,
                    _loadRes3 = dynamic && autoLoad && !!_resDir2;
                  sfx.clean();
                  if (persist) {
                    if (notEmptyArr(sfx)) aud.addSfx.apply(aud, sfx);
                    _loadRes3 && resources.loadDir(_resDir2, AudioClip, function (err, clips) {
                      if (err) console.warn(err);else aud.addSfx.apply(aud, sfx);
                    });
                  } else {
                    _loadRes3 && resources.loadDir(_resDir2, AudioClip);
                  }
                }
                break;
              case Type$1.PREFAB:
                {
                  var prefabs = item.prefabs,
                    _persist = item.persist,
                    _override = item.override;
                  prefabs.clean();
                  prefabs.forEach(function (pfb) {
                    return _this2.setPrefab(pfb.name, pfb);
                  });
                  if (_persist) prefabs.forEach(function (pfb) {
                    return res.addPrefab(pfb.name, pfb, _override);
                  });
                }
                break;
            }
          });
        };
        return ResCollector;
      }(Component), _descriptor14$3 = _applyDecoratedDescriptor(_class5$1.prototype, "items", [_dec16$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class5$1)) || _class4$1);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5d15cbevXxJZ4bfxBNLwnUq", "index", undefined);
      cclegacy._RF.pop();
      var _class$8, _class2$6;
      cclegacy._RF.push({}, "68387fcZLFKYLu6UERkwEYd", "TimerSystem", undefined);
      var _Notifications$Time = Notifications.Time,
        TICK = _Notifications$Time.TICK,
        SECOND = _Notifications$Time.SECOND,
        MINUTE = _Notifications$Time.MINUTE,
        SPAN = _Notifications$Time.SPAN,
        POST_TICK = _Notifications$Time.POST_TICK;
      var TimerSystem = singleton(_class$8 = (_class2$6 = /*#__PURE__*/function (_System) {
        _inheritsLoose(TimerSystem, _System);
        function TimerSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _System.call.apply(_System, [this].concat(args)) || this;
          /** 
           * 时间段
           * @explain 时段长短的设置：TimerSystem.span = num
           * @explain 监听时间段事件：core.on(Notifications.Time.SPAN, handler, observer);
           */
          _this.span = 0;
          _this._tick = 0;
          _this._elapse = 0;
          _this._seconds = 0;
          _this._minutes = 0;
          _this._past = 0;
          _this._num = 0;
          return _this;
        }
        var _proto = TimerSystem.prototype;
        _proto.update = function update(dt) {
          notifier.dispatch(TICK, dt, ++this._tick);
          this._elapse += dt;
          if (this._elapse >= 1) {
            this._elapse -= 1;
            notifier.dispatch(SECOND, dt, ++this._seconds);
            if (this._seconds >= 60) {
              notifier.dispatch(MINUTE, this._minutes += 1);
            }
          }
          if (this.span > 0) {
            this._past += dt;
            if (this._past >= this.span) {
              this._past -= this.span;
              notifier.dispatch(SPAN, dt, ++this._num);
            }
          }
        };
        _proto.postUpdate = function postUpdate(dt) {
          notifier.dispatch(POST_TICK, dt, this._tick);
        };
        return TimerSystem;
      }(System), _class2$6.ID = 'Timer', _class2$6)) || _class$8;
      {
        game.on(Game.EVENT_GAME_INITED, function () {
          return director.registerSystem(TimerSystem.ID, TimerSystem.instance, 0);
        });
      }
      cclegacy._RF.pop();
      var _dec$6, _class$9;
      cclegacy._RF.push({}, "60a9eUtfjZKkqpcm8SePIIF", "base", undefined);
      var ccclass$6 = _decorator.ccclass,
        disallowMultiple$1 = _decorator.disallowMultiple;
      var BaseUI = (_dec$6 = ccclass$6('cfw.BaseUI'), _dec$6(_class$9 = disallowMultiple$1(_class$9 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseUI, _Component);
        function BaseUI() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = BaseUI.prototype;
        _proto.show = function show() {
          var _this = this;
          this.node.active = true;
          this.scheduleOnce(function () {
            return _this.onShow();
          });
        };
        _proto.hide = function hide() {
          var _this2 = this;
          this.node.active = false;
          this.scheduleOnce(function () {
            return _this2.onHide();
          });
        };
        _proto.onShow = function onShow() {};
        _proto.onHide = function onHide() {};
        _createClass(BaseUI, [{
          key: "visible",
          get: function get() {
            var _this$node, _this$node2;
            return ((_this$node = this.node) == null ? void 0 : _this$node.parent) && ((_this$node2 = this.node) == null ? void 0 : _this$node2.active);
          }
        }, {
          key: "alpha",
          get: function get() {
            var _this$getComponent;
            return ((_this$getComponent = this.getComponent(UIOpacity)) != null ? _this$getComponent : this.addComponent(UIOpacity)).opacity / 255;
          },
          set: function set(arg) {
            var _this$getComponent2;
            ((_this$getComponent2 = this.getComponent(UIOpacity)) != null ? _this$getComponent2 : this.addComponent(UIOpacity)).opacity = 255 * arg;
          }
        }]);
        return BaseUI;
      }(Component)) || _class$9) || _class$9);
      cclegacy._RF.pop();
      var _dec$7, _dec2$6, _dec3$6, _dec4$6, _dec5$6, _dec6$5, _dec7$4, _dec8$4, _class$a, _class2$7, _descriptor$6, _descriptor2$6, _descriptor3$6, _descriptor4$5, _descriptor5$4, _descriptor6$4, _descriptor7$4;
      cclegacy._RF.push({}, "a0699821epE2LvH7VDENpNG", "net-cover", undefined);
      var ccclass$7 = _decorator.ccclass;
      function showTimeout() {
        return this.timeoutClear;
      }
      function autoRotate() {
        return this.autoRotateSign;
      }
      var NetCover = (_dec$7 = ccclass$7('cfw.NetCover'), _dec2$6 = tip("出现延迟", [0, 5, 0.1], ["unit", "sec"]), _dec3$6 = tip("超时移除"), _dec4$6 = tip("超时时长", showTimeout, [1, 30, 1], ["unit", "sec"]), _dec5$6 = tip("自动旋转"), _dec6$5 = tip("旋转图标", Node, autoRotate), _dec7$4 = tip("旋转图标", autoRotate), _dec8$4 = tip("旋转周期", autoRotate, [1, 30, 0.1], ["unit", "sec"]), _dec$7(_class$a = (_class2$7 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(NetCover, _BaseUI);
        function NetCover() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "delay", _descriptor$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timeoutClear", _descriptor2$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timeout", _descriptor3$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoRotateSign", _descriptor4$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sign", _descriptor5$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "antiClockwise", _descriptor6$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "period", _descriptor7$4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = NetCover.prototype;
        _proto.onLoad = function onLoad() {
          inner.dispatch(__cfw_notifications__.UI.REGISTER, this);
        };
        _proto.onDestroy = function onDestroy() {
          inner.dispatch(__cfw_notifications__.UI.UNREGISTER, this);
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          if (this.autoRotateSign && this.sign && this.period > 0) {
            this.sign.angle += (this.antiClockwise ? 360 : -360) * (dt / this.period);
          }
        };
        _proto.start = function start() {
          this.node.active = false;
        };
        _proto.show = function show() {
          var _this2 = this;
          this.unscheduleAllCallbacks();
          _BaseUI.prototype.show.call(this);
          if (this.delay >= 0) {
            this.activateChildren = false;
            this.scheduleOnce(function () {
              return _this2.activateChildren = true;
            }, this.delay);
          } else this.activateChildren = true;
          if (this.timeoutClear) {
            this.scheduleOnce(function () {
              return _this2.hide();
            }, this.timeout);
          }
        };
        _proto.hide = function hide() {
          this.unscheduleAllCallbacks();
          _BaseUI.prototype.hide.call(this);
        };
        _createClass(NetCover, [{
          key: "activateChildren",
          set: function set(show) {
            this.node.children.forEach(function (child) {
              return child.active = show;
            });
          }
        }]);
        return NetCover;
      }(BaseUI), (_descriptor$6 = _applyDecoratedDescriptor(_class2$7.prototype, "delay", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$7.prototype, "timeoutClear", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3$6 = _applyDecoratedDescriptor(_class2$7.prototype, "timeout", [_dec4$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor4$5 = _applyDecoratedDescriptor(_class2$7.prototype, "autoRotateSign", [_dec5$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5$4 = _applyDecoratedDescriptor(_class2$7.prototype, "sign", [_dec6$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$4 = _applyDecoratedDescriptor(_class2$7.prototype, "antiClockwise", [_dec7$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7$4 = _applyDecoratedDescriptor(_class2$7.prototype, "period", [_dec8$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2$7)) || _class$a);
      cclegacy._RF.pop();
      var _dec$8, _dec2$7, _dec3$7, _dec4$7, _dec5$7, _dec6$6, _dec7$5, _dec8$5, _class$b, _class2$8, _descriptor$7, _descriptor2$7, _descriptor3$7, _descriptor4$6, _descriptor5$5, _descriptor6$5, _descriptor7$5;
      cclegacy._RF.push({}, "656c5BJ6plBXbomFVJ1iJv2", "loading-page", undefined);
      var ccclass$8 = _decorator.ccclass;
      var LoadingPage = (_dec$8 = ccclass$8('cfw.LoadingPage'), _dec2$7 = group("UI", "进度条", ProgressBar), _dec3$7 = group("UI", "进度文本", Label), _dec4$7 = group("UI", "文本模板（%为百分比）"), _dec5$7 = group("UI", "进度游标", Node), _dec6$6 = group("Logic", "加载完毕通知"), _dec7$5 = group("Logic", "加载过程通知"), _dec8$5 = group("Logic", "完毕自动隐藏"), _dec$8(_class$b = (_class2$8 = /*#__PURE__*/function (_BaseUI) {
        _inheritsLoose(LoadingPage, _BaseUI);
        function LoadingPage() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseUI.call.apply(_BaseUI, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bar", _descriptor$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor2$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chars", _descriptor3$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cruiser", _descriptor4$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "completeNotification", _descriptor5$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressNotification", _descriptor6$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoHide", _descriptor7$5, _assertThisInitialized(_this));
          _this._group = 0;
          _this._groupsNum = 1;
          return _this;
        }
        var _proto = LoadingPage.prototype;
        _proto.onLoad = function onLoad() {
          inner.dispatch(__cfw_notifications__.UI.REGISTER, this);
        };
        _proto.onDestroy = function onDestroy() {
          inner.dispatch(__cfw_notifications__.UI.UNREGISTER, this);
        };
        _proto.loadEnter = /*#__PURE__*/function () {
          var _loadEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _len2,
              scenes,
              _key2,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  for (_len2 = _args.length, scenes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    scenes[_key2] = _args[_key2];
                  }
                  if (notEmptyArr(scenes)) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return", true);
                case 3:
                  _context.next = 5;
                  return this._loadOneByOne(scenes, true);
                case 5:
                  return _context.abrupt("return", _context.sent);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadEnter() {
            return _loadEnter.apply(this, arguments);
          }
          return loadEnter;
        }();
        _proto.loadReady = /*#__PURE__*/function () {
          var _loadReady = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _len3,
              scenes,
              _key3,
              _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  for (_len3 = _args2.length, scenes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    scenes[_key3] = _args2[_key3];
                  }
                  if (notEmptyArr(scenes)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return", true);
                case 3:
                  _context2.next = 5;
                  return this._loadOneByOne(scenes, false);
                case 5:
                  return _context2.abrupt("return", _context2.sent);
                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadReady() {
            return _loadReady.apply(this, arguments);
          }
          return loadReady;
        }();
        _proto._loadOneByOne = /*#__PURE__*/function () {
          var _loadOneByOne2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(scenes, autoEnter) {
            var _iterator, _step, scene;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this._group = 0;
                  this._groupsNum = scenes.length;
                  _iterator = _createForOfIteratorHelperLoose(scenes);
                case 3:
                  if ((_step = _iterator()).done) {
                    _context3.next = 23;
                    break;
                  }
                  scene = _step.value;
                  if (scene) {
                    _context3.next = 8;
                    break;
                  }
                  console.warn("[LoadingPage.load]", "try to load scene empty name");
                  return _context3.abrupt("return", false);
                case 8:
                  if (!managers.scene.hasLoaded(scene)) {
                    _context3.next = 14;
                    break;
                  }
                  if (this._isLast) {
                    _context3.next = 11;
                    break;
                  }
                  return _context3.abrupt("continue", 21);
                case 11:
                  return _context3.abrupt("return", this._lastFinished(autoEnter ? scenes.head : null));
                case 14:
                  this.show();
                  _context3.next = 17;
                  return this._preloadOneScene(scene);
                case 17:
                  managers.scene.addLoaded(scene);
                  if (!this._isLast) {
                    _context3.next = 20;
                    break;
                  }
                  return _context3.abrupt("return", this._lastFinished(autoEnter ? scenes.head : null));
                case 20:
                  this._group++;
                case 21:
                  _context3.next = 3;
                  break;
                case 23:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function _loadOneByOne(_x, _x2) {
            return _loadOneByOne2.apply(this, arguments);
          }
          return _loadOneByOne;
        }();
        _proto._preloadOneScene = /*#__PURE__*/function () {
          var _preloadOneScene2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(name) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", new Promise(function (resolve) {
                    var floor = _this2._group / _this2._groupsNum;
                    director.preloadScene(name, function (count, total) {
                      var pct = count / total / _this2._groupsNum;
                      pct += floor;
                      // 避免cocos的回参totalCount发生变化出现回溯
                      if (pct > _this2.bar.progress) _this2.setProgress(pct);
                    }, function () {
                      return resolve(name);
                    });
                  }));
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function _preloadOneScene(_x3) {
            return _preloadOneScene2.apply(this, arguments);
          }
          return _preloadOneScene;
        }();
        _proto.setProgress = function setProgress(pct) {
          var _this$bar$getComponen, _this$bar;
          var bar = this.bar,
            label = this.label,
            chars = this.chars,
            cruiser = this.cruiser;
          var width = (_this$bar$getComponen = (_this$bar = this.bar) == null || (_this$bar = _this$bar.getComponent(UITransform)) == null ? void 0 : _this$bar.width) != null ? _this$bar$getComponen : 0;
          if (!!bar) bar.progress = pct;
          if (!!label) label.string = chars.replace('%', Math.round(pct * 100) + "%");
          if (!!cruiser) cruiser.setPosition((pct - 0.5) * width, cruiser.position.y);
          if (!!this.progressNotification) notifier.dispatch(this.progressNotification, pct);
          return this;
        };
        _proto._lastFinished = function _lastFinished(enterScene) {
          var _this3 = this;
          if (!enterScene) {
            if (!!this.completeNotification) notifier.dispatch(this.completeNotification);
            if (!!this.autoHide && this.node) this.hide();
          } else {
            director.loadScene(enterScene, function () {
              managers.scene.pushRecord(enterScene);
              if (!!_this3.completeNotification) notifier.dispatch(_this3.completeNotification);
              if (!!_this3.autoHide && _this3.node) _this3.hide();
            });
          }
          return true;
        };
        _createClass(LoadingPage, [{
          key: "_isLast",
          get: function get() {
            return this._group >= this._groupsNum - 1;
          }
        }]);
        return LoadingPage;
      }(BaseUI), (_descriptor$7 = _applyDecoratedDescriptor(_class2$8.prototype, "bar", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$8.prototype, "label", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3$7 = _applyDecoratedDescriptor(_class2$8.prototype, "chars", [_dec4$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "%";
        }
      }), _descriptor4$6 = _applyDecoratedDescriptor(_class2$8.prototype, "cruiser", [_dec5$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5$5 = _applyDecoratedDescriptor(_class2$8.prototype, "completeNotification", [_dec6$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "scene loaded";
        }
      }), _descriptor6$5 = _applyDecoratedDescriptor(_class2$8.prototype, "progressNotification", [_dec7$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "scene progress";
        }
      }), _descriptor7$5 = _applyDecoratedDescriptor(_class2$8.prototype, "autoHide", [_dec8$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2$8)) || _class$b);
      cclegacy._RF.pop();
      var _class$c;
      cclegacy._RF.push({}, "5a84b/VnR5Fq45KtwLTeB5Y", "ui-manager", undefined);
      var UIManager = singleton(_class$c = /*#__PURE__*/function () {
        function UIManager() {
          this._netCover = null;
          this._loadingPage = null;
        }
        var _proto = UIManager.prototype;
        _proto.register = function register(arg, autoHide) {
          if (autoHide === void 0) {
            autoHide = true;
          }
          if (autoHide) arg.hide();
          if (arg instanceof NetCover) return this._netCover = arg;else if (arg instanceof LoadingPage) return this._loadingPage = arg;
        };
        _proto.unregister = function unregister(arg) {
          if (arg instanceof NetCover && this._netCover === arg) return !(this._netCover = null);
          if (arg instanceof LoadingPage && this._loadingPage === arg) return !(this._loadingPage = null);
          if (arg === NetCover) return !(this._netCover = null);
          if (arg === LoadingPage) return !(this._loadingPage = null);
          return false;
        };
        _createClass(UIManager, [{
          key: "netCover",
          get: function get() {
            return this._netCover;
          }
        }, {
          key: "loadingPage",
          get: function get() {
            return this._loadingPage;
          }
        }]);
        return UIManager;
      }()) || _class$c;
      var ui = UIManager.instance;
      inner.attach(__cfw_notifications__.UI.REGISTER, ui.register, ui);
      inner.attach(__cfw_notifications__.UI.UNREGISTER, ui.unregister, ui);
      cclegacy._RF.pop();
      var _class$d, _class2$9;
      cclegacy._RF.push({}, "44616vI+a1JFpNFrPX5eVQ2", "net-manager", undefined);
      var Domain = /*#__PURE__*/function (Domain) {
        Domain[Domain["PROD"] = 0] = "PROD";
        Domain[Domain["DEV"] = 1] = "DEV";
        Domain[Domain["TEST"] = 2] = "TEST";
        Domain[Domain["LOCAL"] = 3] = "LOCAL";
        return Domain;
      }({});
      var NetManager = singleton(_class$d = (_class2$9 = /*#__PURE__*/function () {
        function NetManager() {
          this.useReport = false;
          this.useCover = true;
          this.simulateLatency = false;
          this.latency = 0.2;
          this.logReq = false;
          this.logResp = true;
          this.domain = Domain.PROD;
          this.uncovers = [];
          this._apis = {
            prod: {},
            test: {},
            local: {},
            dev: {}
          };
        }
        var _proto = NetManager.prototype;
        _proto.setApis = function setApis(apis) {
          this._apis.prod = apis != null ? apis : this._apis.prod;
          return this;
        };
        _proto.setDevApis = function setDevApis(apis) {
          this._apis.dev = apis != null ? apis : this._apis.dev;
          return this;
        };
        _proto.setTestApis = function setTestApis(apis) {
          this._apis.test = apis != null ? apis : this._apis.test;
          return this;
        };
        _proto.setLocalApis = function setLocalApis(apis) {
          this._apis.local = apis != null ? apis : this._apis.local;
          return this;
        };
        _proto.showCover = function showCover(api) {
          if (!!api && this.uncovers.contains(api)) return;
          var cover = UIManager.instance.netCover;
          if (!!cover) cover.show();
        };
        _proto.hideCover = function hideCover(api) {
          if (!!api && this.uncovers.contains(api)) return;
          var cover = UIManager.instance.netCover;
          if (!!cover) cover.hide();
        };
        _createClass(NetManager, [{
          key: "apis",
          get: function get() {
            switch (this.domain) {
              case Domain.PROD:
                return this._apis.prod;
              case Domain.DEV:
                return this._apis.dev;
              case Domain.TEST:
                return this._apis.test;
              case Domain.LOCAL:
                return this._apis.local;
            }
          }
        }, {
          key: "isProduce",
          get: function get() {
            return this.domain === Domain.PROD;
          }
        }]);
        return NetManager;
      }(), _class2$9.Domain = Domain, _class2$9)) || _class$d;
      cclegacy._RF.pop();
      var _class$e;
      cclegacy._RF.push({}, "0f5c9IhWC9N87CR43gnyzLa", "scene-manager", undefined);
      var SceneManager = singleton(_class$e = /*#__PURE__*/function () {
        function SceneManager() {
          this.useLoadingPage = true;
          this.homeName = null;
          this._chain = [];
          this._loaded = [];
          this._record = [];
        }
        var _proto = SceneManager.prototype;
        _proto.hasLoaded = function hasLoaded(scene) {
          return this._loaded.contains(scene);
        };
        _proto.addLoaded = function addLoaded(scene) {
          this._loaded.pushUnique(scene);
          return this;
        };
        _proto.pushRecord = function pushRecord(scene) {
          this._record.push(scene);
          return this;
        };
        _proto.clearChain = function clearChain() {
          this._chain.length = 0;
          return this;
        };
        _proto.addChain = function addChain() {
          var _this$_chain;
          (_this$_chain = this._chain).pushUnique.apply(_this$_chain, arguments);
          return this;
        };
        _proto._loadScene = function _loadScene(scene) {
          var _this = this;
          var useLoadingPage = this.useLoadingPage,
            page = this._loadingPage;
          if (useLoadingPage && !!page) {
            page.loadEnter(scene);
          } else {
            director.loadScene(scene, function () {
              return _this._record.push(scene);
            });
          }
        };
        _proto.loadEnter = /*#__PURE__*/function () {
          var _loadEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            var _len,
              scenes,
              _key,
              useLoadingPage,
              page,
              ok,
              _args = arguments;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  for (_len = _args.length, scenes = new Array(_len), _key = 0; _key < _len; _key++) {
                    scenes[_key] = _args[_key];
                  }
                  if (notEmptyArr(scenes)) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return", true);
                case 3:
                  useLoadingPage = this.useLoadingPage, page = this._loadingPage;
                  if (!(useLoadingPage && !!page)) {
                    _context.next = 10;
                    break;
                  }
                  _context.next = 7;
                  return page.loadEnter.apply(page, scenes);
                case 7:
                  return _context.abrupt("return", _context.sent);
                case 10:
                  ok = 0;
                  return _context.abrupt("return", new Promise(function (resolve) {
                    var _loop = function _loop() {
                      var scene = _step.value;
                      director.preloadScene(scene, function () {
                        _this2._record.push(scene);
                        if (++ok >= scenes.length) {
                          director.loadScene(scenes.head);
                          resolve(true);
                        }
                      });
                    };
                    for (var _iterator = _createForOfIteratorHelperLoose(scenes), _step; !(_step = _iterator()).done;) {
                      _loop();
                    }
                  }));
                case 12:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function loadEnter() {
            return _loadEnter.apply(this, arguments);
          }
          return loadEnter;
        }();
        _proto.loadReady = /*#__PURE__*/function () {
          var _loadReady = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            var _len2,
              scenes,
              _key2,
              useLoadingPage,
              page,
              ok,
              _args2 = arguments;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  for (_len2 = _args2.length, scenes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    scenes[_key2] = _args2[_key2];
                  }
                  if (notEmptyArr(scenes)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return", true);
                case 3:
                  useLoadingPage = this.useLoadingPage, page = this._loadingPage;
                  if (!(useLoadingPage && !!page)) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.next = 7;
                  return page.loadReady.apply(page, scenes);
                case 7:
                  return _context2.abrupt("return", _context2.sent);
                case 10:
                  ok = 0;
                  return _context2.abrupt("return", new Promise(function (resolve) {
                    var _loop2 = function _loop2() {
                      var scene = _step2.value;
                      director.preloadScene(scene, function () {
                        _this3._record.push(scene);
                        if (++ok >= scenes.length) resolve(true);
                      });
                    };
                    for (var _iterator2 = _createForOfIteratorHelperLoose(scenes), _step2; !(_step2 = _iterator2()).done;) {
                      _loop2();
                    }
                  }));
                case 12:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function loadReady() {
            return _loadReady.apply(this, arguments);
          }
          return loadReady;
        }();
        _proto.preload = function preload() {
          var _this4 = this;
          for (var _len3 = arguments.length, scenes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            scenes[_key3] = arguments[_key3];
          }
          var _loop3 = function _loop3() {
            var scene = _scenes[_i];
            director.preloadScene(scene, function () {
              _this4._loaded.pushUnique(scene);
            });
          };
          for (var _i = 0, _scenes = scenes; _i < _scenes.length; _i++) {
            _loop3();
          }
        };
        _proto["goto"] = function goto(scene) {
          this._loadScene(scene);
        };
        _proto.back = function back() {
          var name = this._record.pop();
          if (name) this._loadScene(name);
        };
        _proto.head = function head() {
          var name = this._chain.head;
          if (name) this._loadScene(name);
        };
        _proto.next = function next() {
          var name = this.nextInChain;
          if (name) this._loadScene(name);
        };
        _proto.last = function last() {
          var name = this.lastInChain;
          if (name) this._loadScene(name);
        };
        _proto.home = function home() {
          var name = this.homeName;
          if (name) this._loadScene(name);
        };
        _createClass(SceneManager, [{
          key: "thisName",
          get: function get() {
            return director.getScene().name;
          }
        }, {
          key: "nextInChain",
          get: function get() {
            var _this$_chain2;
            return (_this$_chain2 = this._chain[this._chain.indexOf(this.thisName) + 1]) != null ? _this$_chain2 : null;
          }
        }, {
          key: "lastInChain",
          get: function get() {
            var _this$_chain3;
            return (_this$_chain3 = this._chain[this._chain.indexOf(this.thisName) - 1]) != null ? _this$_chain3 : null;
          }
        }, {
          key: "_loadingPage",
          get: function get() {
            return UIManager.instance.loadingPage;
          }
        }]);
        return SceneManager;
      }()) || _class$e;
      managers.scene = SceneManager.instance;
      cclegacy._RF.pop();
      var _dec$9, _class$f;
      cclegacy._RF.push({}, "3f195yBmwlFxZ3csqel4v7e", "Mediator", undefined);
      var ccclass$9 = _decorator.ccclass;
      var Mediator = exports('M', (_dec$9 = ccclass$9('cfw.Mediator'), _dec$9(_class$f = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mediator, _Component);
        function Mediator() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = Mediator.prototype;
        _proto.__preload = function __preload() {
          if (isFunc(_Component.prototype.__preload)) _Component.prototype.__preload.call(this);
          mediators.unshiftUnique(this);
        };
        _proto.on = function on(type, handler, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          notifier.attach(type, handler, this, false, priority);
        };
        _proto.once = function once(type, handler, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          notifier.attach(type, handler, this, true, priority);
        };
        _proto.off = function off(type, handler) {
          notifier.detach(type, handler, this);
        };
        _proto.notify = function notify(type) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          notifier.dispatch.apply(notifier, [type].concat(args));
        };
        _proto.onDestroy = function onDestroy() {
          notifier.unload(this);
          bridge.unload(this);
          mediators.remove(this);
        }

        /**
          * 当前场景
         */;
        _createClass(Mediator, [{
          key: "scene",
          get: function get() {
            return director.getScene();
          }
        }]);
        return Mediator;
      }(Component)) || _class$f));
      cclegacy._RF.pop();
      var _dec$a, _dec2$8, _dec3$8, _dec4$8, _dec5$8, _dec6$7, _dec7$6, _dec8$6, _dec9$4, _dec10$4, _dec11$4, _dec12$4, _dec13$4, _dec14$4, _dec15$4, _dec16$3, _dec17$2, _dec18$2, _dec19$2, _dec20$2, _dec21$2, _dec22$2, _class$g, _class2$a, _descriptor$8, _descriptor2$8, _descriptor3$8, _descriptor4$7, _descriptor5$6, _descriptor6$6, _descriptor7$6, _descriptor8$4, _descriptor9$4, _descriptor10$4, _descriptor11$4, _descriptor12$4, _descriptor13$4, _descriptor14$4, _descriptor15$2, _descriptor16$2, _descriptor17$2, _descriptor18$2, _descriptor19$2;
      cclegacy._RF.push({}, "ab8c6NqmPNH/oR0ZH/yfmrV", "root", undefined);
      var ccclass$a = _decorator.ccclass,
        disallowMultiple$2 = _decorator.disallowMultiple,
        requireComponent$2 = _decorator.requireComponent;
      var net = NetManager.instance;
      var aud$1 = AudioManager.instance;
      var res$1 = ResManager.instance;
      var NetKeys = ['useCover', 'simulateLatency', 'latency', 'logReq', 'logResp', 'domain', 'useReport'];
      var AudKeys = ['bgmVolume', 'bgmLoop', 'bgmPlayOnAwake', 'sfxVolume', 'sfxButton', 'sfxToggle'];
      function showLatency() {
        return this.simulateLatency;
      }
      function showDefaultSfx() {
        return this.useDefaultSfxs;
      }
      var Root = (_dec$a = ccclass$a('cfw.Root'), _dec2$8 = disallowMultiple$2(true), _dec3$8 = requireComponent$2(Canvas), _dec4$8 = group("UI", "启用全屏显示"), _dec5$8 = group("UI", "显示性能面板"), _dec6$7 = group("Net", "使用网络遮罩"), _dec7$6 = group("Net", "启用模拟延迟"), _dec8$6 = group("Net", "模拟延迟时长", showLatency, [0, 5, 0.1]), _dec9$4 = group("Net", "输出请求日志"), _dec10$4 = group("Net", "输出返回日志"), _dec11$4 = group("Net", "数据上报开关"), _dec12$4 = group("Net", "请求域设置", ["type", Enum(Domain)]), _dec13$4 = group("Net", "无遮罩API", ["type", [CCString]]), _dec14$4 = group("Aud", "背景音乐音量", [0, 1, 0.01]), _dec15$4 = group("Aud", "是否循环播放"), _dec16$3 = group("Aud", "是否自动播放"), _dec17$2 = group("Aud", "音效音量", [0, 1, 0.01]), _dec18$2 = group("Aud", "启用默认音效"), _dec19$2 = group("Aud", "默认按钮音效", AudioClip, showDefaultSfx), _dec20$2 = group("Aud", "默认切换音效", AudioClip, showDefaultSfx), _dec21$2 = group("Res", "远程基址"), _dec22$2 = group("Res", "远程包名"), _dec$a(_class$g = _dec2$8(_class$g = _dec3$8(_class$g = singleton(_class$g = (_class2$a = /*#__PURE__*/function (_Mediator) {
        _inheritsLoose(Root, _Mediator);
        function Root() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Mediator.call.apply(_Mediator, [this].concat(args)) || this;
          _this.bgm = void 0;
          /** ----------------- UI ------------------- **/
          _initializerDefineProperty(_this, "_fullScreen", _descriptor$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_showStats", _descriptor2$8, _assertThisInitialized(_this));
          /** ----------------- Net ------------------- **/
          _initializerDefineProperty(_this, "_useCover", _descriptor3$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_simulateLatency", _descriptor4$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_latency", _descriptor5$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_logReq", _descriptor6$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_logResp", _descriptor7$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_useReport", _descriptor8$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_domain", _descriptor9$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uncovers", _descriptor10$4, _assertThisInitialized(_this));
          /** ----------------- Audio ------------------- **/
          _initializerDefineProperty(_this, "_bgmVolume", _descriptor11$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_bgmLoop", _descriptor12$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_bgmPlayOnAwake", _descriptor13$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_sfxVolume", _descriptor14$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useDefaultSfxs", _descriptor15$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_sfxButton", _descriptor16$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_sfxToggle", _descriptor17$2, _assertThisInitialized(_this));
          /** ----------------- Res ------------------- **/
          _initializerDefineProperty(_this, "_baseUrl", _descriptor18$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_bundle", _descriptor19$2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Root.prototype;
        _proto.onLoad = function onLoad() {
          director.addPersistRootNode(this.node);
          if (this._fullScreen && !screen.fullScreen()) this.fullScreen = true;
          this.showStats = this._showStats;
          {
            var _net$uncovers;
            aud$1.init(this.addComponent(AudioSource), this.addComponent(AudioSource));
            assign.apply(void 0, [net, this, false].concat(NetKeys));
            (_net$uncovers = net.uncovers).push.apply(_net$uncovers, this.uncovers);
            assign.apply(void 0, [aud$1, this, false].concat(AudKeys));
            if (this._baseUrl) res$1.setRemoteBaseUrl(this._baseUrl);
            if (this._bundle) res$1.setRemoteBundleName(this._bundle);
          }
        };
        _proto.onEnable = function onEnable() {
          // this.readjustCamera();
        }

        // 修正非Canvas下的2DCamera，TODO 含有targetRender的逻辑分支未修正
        ;

        _proto.readjustCamera = function readjustCamera() {
          var alignCamera = this.getComponent(Canvas).cameraComponent;
          var layerCameras = this.getComponentsInChildren(Camera).remove(alignCamera);
          if (notEmptyArr(layerCameras)) {
            var height = screen.windowSize.height / view.getScaleY() / 2;
            var _this$node$getWorldPo = this.node.getWorldPosition(),
              x = _this$node$getWorldPo.x,
              y = _this$node$getWorldPo.y;
            layerCameras.forEach(function (cam) {
              cam.orthoHeight = height;
              cam.node.setWorldPosition(x, y, 1000);
            });
          }
        };
        _proto.toggleFullScreen = function toggleFullScreen() {
          this.fullScreen = !this.fullScreen;
        };
        _proto.toggleShowStats = function toggleShowStats() {
          this.showStats = !this.showStats;
        };
        _createClass(Root, [{
          key: "fullScreen",
          get: function get() {
            return this._fullScreen;
          },
          set: function set(arg) {
            !!arg ? screen.requestFullScreen() : screen.exitFullScreen();
            this._fullScreen = arg;
          }
        }, {
          key: "showStats",
          get: function get() {
            return this._showStats;
          },
          set: function set(arg) {
            !!profiler && (!!arg ? profiler.showStats() : profiler.hideStats());
            this._showStats = arg;
          }
        }, {
          key: "useCover",
          get: function get() {
            return this._useCover;
          },
          set: function set(arg) {
            this._useCover = arg;
            net.useCover = arg;
          }
        }, {
          key: "simulateLatency",
          get: function get() {
            return this._simulateLatency;
          },
          set: function set(arg) {
            this._simulateLatency = arg;
            net.simulateLatency = arg;
          }
        }, {
          key: "latency",
          get: function get() {
            return this._latency;
          },
          set: function set(arg) {
            this._latency = arg;
            net.latency = arg;
          }
        }, {
          key: "logReq",
          get: function get() {
            return this._logReq;
          },
          set: function set(arg) {
            this._logReq = arg;
            net.logReq = arg;
          }
        }, {
          key: "logResp",
          get: function get() {
            return this._logResp;
          },
          set: function set(arg) {
            this._logResp = arg;
            net.logResp = arg;
          }
        }, {
          key: "useReport",
          get: function get() {
            return this._useReport;
          },
          set: function set(arg) {
            this._useReport = arg;
            net.useReport = arg;
          }
        }, {
          key: "domain",
          get: function get() {
            return this._domain;
          },
          set: function set(arg) {
            this._domain = arg;
            net.domain = arg;
          }
        }, {
          key: "bgmVolume",
          get: function get() {
            return this._bgmVolume;
          },
          set: function set(arg) {
            this._bgmVolume = arg;
            aud$1.bgmVolume = arg;
          }
        }, {
          key: "bgmLoop",
          get: function get() {
            return this._bgmLoop;
          },
          set: function set(arg) {
            this._bgmLoop = arg;
            aud$1.bgmLoop = arg;
          }
        }, {
          key: "bgmPlayOnAwake",
          get: function get() {
            return this._bgmPlayOnAwake;
          },
          set: function set(arg) {
            this._bgmPlayOnAwake = arg;
            aud$1.bgmPlayOnAwake = arg;
          }
        }, {
          key: "sfxVolume",
          get: function get() {
            return this._sfxVolume;
          },
          set: function set(arg) {
            this._sfxVolume = arg;
            aud$1.sfxVolume = arg;
          }
        }, {
          key: "sfxButton",
          get: function get() {
            return this._sfxButton;
          },
          set: function set(arg) {
            this._sfxButton = arg;
            aud$1.sfxButton = arg;
          }
        }, {
          key: "sfxToggle",
          get: function get() {
            return this._sfxToggle;
          },
          set: function set(arg) {
            this._sfxToggle = arg;
            aud$1.sfxToggle = arg;
          }
        }, {
          key: "remoteBaseUrl",
          get: function get() {
            return this._baseUrl;
          },
          set: function set(arg) {
            this._baseUrl = arg;
            res$1.setRemoteBaseUrl(arg);
          }
        }, {
          key: "remoteBundleName",
          get: function get() {
            return this._bundle;
          },
          set: function set(arg) {
            this._bundle = arg;
            res$1.setRemoteBundleName(arg);
          }
        }]);
        return Root;
      }(Mediator), (_descriptor$8 = _applyDecoratedDescriptor(_class2$a.prototype, "_fullScreen", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "fullScreen", [_dec4$8], Object.getOwnPropertyDescriptor(_class2$a.prototype, "fullScreen"), _class2$a.prototype), _descriptor2$8 = _applyDecoratedDescriptor(_class2$a.prototype, "_showStats", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "showStats", [_dec5$8], Object.getOwnPropertyDescriptor(_class2$a.prototype, "showStats"), _class2$a.prototype), _descriptor3$8 = _applyDecoratedDescriptor(_class2$a.prototype, "_useCover", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "useCover", [_dec6$7], Object.getOwnPropertyDescriptor(_class2$a.prototype, "useCover"), _class2$a.prototype), _descriptor4$7 = _applyDecoratedDescriptor(_class2$a.prototype, "_simulateLatency", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "simulateLatency", [_dec7$6], Object.getOwnPropertyDescriptor(_class2$a.prototype, "simulateLatency"), _class2$a.prototype), _descriptor5$6 = _applyDecoratedDescriptor(_class2$a.prototype, "_latency", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "latency", [_dec8$6], Object.getOwnPropertyDescriptor(_class2$a.prototype, "latency"), _class2$a.prototype), _descriptor6$6 = _applyDecoratedDescriptor(_class2$a.prototype, "_logReq", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "logReq", [_dec9$4], Object.getOwnPropertyDescriptor(_class2$a.prototype, "logReq"), _class2$a.prototype), _descriptor7$6 = _applyDecoratedDescriptor(_class2$a.prototype, "_logResp", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "logResp", [_dec10$4], Object.getOwnPropertyDescriptor(_class2$a.prototype, "logResp"), _class2$a.prototype), _descriptor8$4 = _applyDecoratedDescriptor(_class2$a.prototype, "_useReport", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "useReport", [_dec11$4], Object.getOwnPropertyDescriptor(_class2$a.prototype, "useReport"), _class2$a.prototype), _descriptor9$4 = _applyDecoratedDescriptor(_class2$a.prototype, "_domain", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Domain.PROD;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "domain", [_dec12$4], Object.getOwnPropertyDescriptor(_class2$a.prototype, "domain"), _class2$a.prototype), _descriptor10$4 = _applyDecoratedDescriptor(_class2$a.prototype, "uncovers", [_dec13$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11$4 = _applyDecoratedDescriptor(_class2$a.prototype, "_bgmVolume", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "bgmVolume", [_dec14$4], Object.getOwnPropertyDescriptor(_class2$a.prototype, "bgmVolume"), _class2$a.prototype), _descriptor12$4 = _applyDecoratedDescriptor(_class2$a.prototype, "_bgmLoop", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "bgmLoop", [_dec15$4], Object.getOwnPropertyDescriptor(_class2$a.prototype, "bgmLoop"), _class2$a.prototype), _descriptor13$4 = _applyDecoratedDescriptor(_class2$a.prototype, "_bgmPlayOnAwake", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "bgmPlayOnAwake", [_dec16$3], Object.getOwnPropertyDescriptor(_class2$a.prototype, "bgmPlayOnAwake"), _class2$a.prototype), _descriptor14$4 = _applyDecoratedDescriptor(_class2$a.prototype, "_sfxVolume", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "sfxVolume", [_dec17$2], Object.getOwnPropertyDescriptor(_class2$a.prototype, "sfxVolume"), _class2$a.prototype), _descriptor15$2 = _applyDecoratedDescriptor(_class2$a.prototype, "useDefaultSfxs", [_dec18$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16$2 = _applyDecoratedDescriptor(_class2$a.prototype, "_sfxButton", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "sfxButton", [_dec19$2], Object.getOwnPropertyDescriptor(_class2$a.prototype, "sfxButton"), _class2$a.prototype), _descriptor17$2 = _applyDecoratedDescriptor(_class2$a.prototype, "_sfxToggle", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "sfxToggle", [_dec20$2], Object.getOwnPropertyDescriptor(_class2$a.prototype, "sfxToggle"), _class2$a.prototype), _descriptor18$2 = _applyDecoratedDescriptor(_class2$a.prototype, "_baseUrl", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "remoteBaseUrl", [_dec21$2], Object.getOwnPropertyDescriptor(_class2$a.prototype, "remoteBaseUrl"), _class2$a.prototype), _descriptor19$2 = _applyDecoratedDescriptor(_class2$a.prototype, "_bundle", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2$a.prototype, "remoteBundleName", [_dec22$2], Object.getOwnPropertyDescriptor(_class2$a.prototype, "remoteBundleName"), _class2$a.prototype)), _class2$a)) || _class$g) || _class$g) || _class$g) || _class$g);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d603bdOvjpEdKBAgjKDaU5d", "core", undefined);
      var core = exports('c', /*#__PURE__*/function () {
        function core() {}
        /**
         * 注册通知
         * @param type 通知名
         * @param handler 回调函数
         * @param observer 回调上下文
         * @param priority 回调优先级，越大越先调用，默认=0
         * @return 是否成功注册
        */
        core.on = function on(type, handler, observer, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          return this.notifier.attach(type, handler, observer, false, priority);
        }

        /**
         * 单次注册通知
         * @param type 通知名
         * @param handler 回调函数
         * @param observer 回调上下文
         * @param priority 回调优先级，越大越先调用，默认=0
         * @return 是否成功注册
        */;
        core.once = function once(type, handler, observer, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          return this.notifier.attach(type, handler, observer, true, priority);
        }

        /**
         * 注销通知
         * @param type 通知名
         * @param handler 回调函数
         * @param observer 回调上下文
         * @return 移除条数（命中条数）
         * @explain 当指定回调上下文时，只有与该上下文相同的一条通知监听会被移除，否则全部移除
        */;
        core.off = function off(type, handler, observer) {
          return this.notifier.detach(type, handler, observer);
        }

        /**
         * 发送通知
         * @param type 通知类型
         * @params args 参数罗列
         * @return 移除条数（命中条数）
         */;
        core.notify = function notify(type) {
          var _this$notifier;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return (_this$notifier = this.notifier).dispatch.apply(_this$notifier, [type].concat(args));
        }

        /**
         * 移除某上下文相关的所有监听通知
         * @param observer 回调上下文
         * @return 移除条数（命中条数）
         */;
        core.unload = function unload(observer) {
          return this.notifier.unload(observer);
        }

        /**
         * 清空某类通知
         * @param type 需要移除的通知类型
         * @return 是否有通知被移除
         */;
        core.clear = function clear(type) {
          return this.notifier.clear(type);
        }

        /** ———————————————————— 核心成员 ———————————————————— **/

        /** 数据代理成员 */;
        /** 
         * 获取指定类型数据代理实例
         * @param Controller 数据代理的类型
         * @return 数据代理实例
         */
        core.getProxy = function getProxy(Proxy) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.proxies), _step; !(_step = _iterator()).done;) {
            var p = _step.value;
            if (p instanceof Proxy) return p;
          }
          return null;
        }

        /** 
         * 获取所有指定类型数据代理实例
         * @param Controller 数据代理的类型
         * @return 所有数据代理实例
         */;
        core.getProxies = function getProxies(Proxy) {
          return this.proxies.filter(function (p) {
            return p instanceof Proxy;
          });
        }

        /** 
         * 获取指定类型中介实例
         * @param Controller 中介者的类型
         * @return 中介者实例
         */;
        core.getMediator = function getMediator(Mediator) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.mediators), _step2; !(_step2 = _iterator2()).done;) {
            var m = _step2.value;
            if (m instanceof Mediator) return m;
          }
          return null;
        }

        /** 
         * 获取所有指定类型中介者实例
         * @param Controller 中介者的类型
         * @return 所有中介者实例
         */;
        core.getMediators = function getMediators(Mediator) {
          return this.mediators.filter(function (m) {
            return m instanceof Mediator;
          });
        }

        /** 
         * 获取指定类型控制器实例
         * @param Controller 控制器的类型
         * @return 控制器实例
         */;
        core.getController = function getController(Controller) {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.controllers), _step3; !(_step3 = _iterator3()).done;) {
            var c = _step3.value;
            if (c instanceof Controller) return c;
          }
          return null;
        }

        /** 
         * 获取所有指定类型控制器实例
         * @param Controller 控制器的类型
         * @return 所有控制器实例
         */;
        core.getControllers = function getControllers(Controller) {
          return this.controllers.filter(function (c) {
            return c instanceof Controller;
          });
        };
        _createClass(core, null, [{
          key: "audio",
          get: /** 音频管理器 */function get() {
            return AudioManager.instance;
          }

          /** 网络管理器 */
        }, {
          key: "net",
          get: function get() {
            return NetManager.instance;
          }

          /** ———————————————————— 事件/通知 ———————————————————— **/

          /** 通知发送器 */
        }, {
          key: "root",
          get: function get() {
            if (IsOnLoadCalled(Root.instance)) return Root.instance;
            return director.getScene().getComponentInChildren(Root);
          }
        }]);
        return core;
      }());
      /** ———————————————————— 管理器/系统 ———————————————————— **/
      /** 时间管理器 */
      core.timer = TimerSystem.instance;
      /** 资源管理器 */
      core.res = ResManager.instance;
      /** UI管理器 */
      core.ui = UIManager.instance;
      /** 场景管理器 */
      core.scene = SceneManager.instance;
      core.notifier = notifier;
      /** 通知桥接器 */
      core.bridge = bridge;
      core.proxies = proxies;
      /** 中介者成员 */
      core.mediators = mediators;
      /** 控制器成员 */
      core.controllers = controllers;
      cclegacy._RF.pop();
      var _dec$b, _class$h;
      cclegacy._RF.push({}, "aa235BPcpxFQo1Sb4+9nmeB", "Entity", undefined);
      var ccclass$b = _decorator.ccclass;
      var Entity = (_dec$b = ccclass$b('cfw.Entity'), _dec$b(_class$h = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Entity, _Component);
        function Entity() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = Entity.prototype;
        _proto.__preload = function __preload() {
          if (isFunc(_Component.prototype.__preload)) _Component.prototype.__preload.call(this);
          entities.unshiftUnique(this);
        };
        _proto.on = function on(type, handler, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          notifier.attach(type, handler, this, false, priority);
        };
        _proto.once = function once(type, handler, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          notifier.attach(type, handler, this, true, priority);
        };
        _proto.off = function off(type, handler) {
          notifier.detach(type, handler, this);
        };
        _proto.notify = function notify(type) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          notifier.dispatch.apply(notifier, [type].concat(args));
        };
        _proto.onDestroy = function onDestroy() {
          notifier.unload(this);
          entities.remove(this);
        }

        /** 本地x坐标 */;
        /** 
         * 变换实体到另一个节点下
         * @param offset 并产生平移，默认不偏移
         */
        _proto.traverse = function traverse(parent, offset) {
          if (parent instanceof Node && this.node.parent !== parent) {
            var pos = Vec3.copy(v3a$2, offset ? offset : Vec3.ZERO);
            this.node.setWorldPosition(this.node.getWorldPosition(pos));
            this.node.parent = parent;
          }
        }

        /** 
         * 将实体面向
         * @param target 面向另一个实体
         * @param to 面向某节点
         * @param point 面向位置点
         * @param x 面向坐标x
         * @param y 面向坐标y
         * @param z 面向坐标z
         * @explain 实体-Z方向为面向
         */;
        _proto.face = function face(arg, y, z) {
          Entity.face(this, arg, y, z);
        }

        /** 
         * 实体到目标距离
         * @param target 目标实体
         * @param to 目标节点
         * @param point 目标位置点
         * @param x 目标坐标x
         * @param y 目标坐标y
         * @param z 目标坐标z
         * @return 距离值
         */;
        _proto.distance = function distance(arg, y, z) {
          return Entity.distance(this, arg, y, z);
        };
        Entity.face = function face(from, arg, y, z) {
          Vec3.copy(v3a$2, arg instanceof Entity ? arg.node.worldPosition : arg instanceof Node ? arg.worldPosition : isObject(arg) && 'x' in arg ? arg : v3a$2.set(arg, y, z));
          Vec3.subtract(v3a$2, v3a$2, from.node.worldPosition);
          from.node.forward = v3a$2;
        };
        Entity.distance = function distance(from, arg, y, z) {
          Vec3.copy(v3a$2, arg instanceof Entity ? arg.node.worldPosition : arg instanceof Node ? arg.worldPosition : isObject(arg) && 'x' in arg ? arg : v3a$2.set(arg, y, z));
          return Vec3.distance(from.node.worldPosition, v3a$2);
        };
        _createClass(Entity, [{
          key: "x",
          get: function get() {
            return this.node.position.x;
          },
          set: function set(arg) {
            var _this$node$position = this.node.position,
              y = _this$node$position.y,
              z = _this$node$position.z;
            this.node.setPosition(arg, y, z);
          }

          /** 本地y坐标 */
        }, {
          key: "y",
          get: function get() {
            return this.node.position.y;
          },
          set: function set(arg) {
            var _this$node$position2 = this.node.position,
              x = _this$node$position2.x,
              z = _this$node$position2.z;
            this.node.setPosition(x, arg, z);
          }

          /** 本地z坐标 */
        }, {
          key: "z",
          get: function get() {
            return this.node.position.z;
          },
          set: function set(arg) {
            var _this$node$position3 = this.node.position,
              x = _this$node$position3.x,
              y = _this$node$position3.y;
            this.node.setPosition(x, y, arg);
          }

          /** 世界x坐标 */
        }, {
          key: "wx",
          get: function get() {
            return this.node.worldPosition.x;
          },
          set: function set(arg) {
            var _this$node$worldPosit = this.node.worldPosition,
              y = _this$node$worldPosit.y,
              z = _this$node$worldPosit.z;
            this.node.setWorldPosition(arg, y, z);
          }

          /** 世界y坐标 */
        }, {
          key: "wy",
          get: function get() {
            return this.node.worldPosition.y;
          },
          set: function set(arg) {
            var _this$node$worldPosit2 = this.node.worldPosition,
              x = _this$node$worldPosit2.x,
              z = _this$node$worldPosit2.z;
            this.node.setWorldPosition(x, arg, z);
          }

          /** 世界z坐标 */
        }, {
          key: "wz",
          get: function get() {
            return this.node.worldPosition.z;
          },
          set: function set(arg) {
            var _this$node$worldPosit3 = this.node.worldPosition,
              x = _this$node$worldPosit3.x,
              y = _this$node$worldPosit3.y;
            this.node.setWorldPosition(x, y, arg);
          }

          /** 实体节点是否激活 */
        }, {
          key: "activated",
          get: function get() {
            var _this$node;
            return (_this$node = this.node) == null ? void 0 : _this$node.active;
          },
          set: function set(arg) {
            this.node.active = arg;
          }
        }]);
        return Entity;
      }(Component)) || _class$h);
      var v3a$2 = new Vec3();
      cclegacy._RF.pop();
      var _dec$c, _class$i;
      cclegacy._RF.push({}, "a8ad7cMg+ZAvbJ2C88jquAG", "Entity2D", undefined);
      var ccclass$c = _decorator.ccclass;
      var Entity2D = (_dec$c = ccclass$c('cfw.Entity2D'), _dec$c(_class$i = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Entity2D, _Component);
        function Entity2D() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = Entity2D.prototype;
        /** 
         * 变换2D实体到另一个节点下
         * @param parent 新的父节点
         * @param offset 并产生平移，默认不偏移
         */
        _proto.traverse = function traverse$1(parent, offset) {
          if (parent instanceof Node && this.node.parent !== parent) {
            traverse(this.node, parent, offset);
          }
        }

        /** 
         * 2D实体到目标距离
         * @param target 目标2D实体
         * @param to 目标节点
         * @param point 目标位置点
         * @param x 目标坐标x
         * @param y 目标坐标y
         * @return 距离值
         */;
        _proto.distance = function distance(arg, y) {
          return Entity2D.distance(this, arg, y);
        };
        Entity2D.distance = function distance(from, arg, y) {
          Vec2.copy(v2a, arg instanceof Entity2D ? arg.node.worldPosition : arg instanceof Node ? arg.worldPosition : isObject(arg) && 'x' in arg ? arg : v2a.set(arg, y));
          return Vec2.distance(v2a, Vec2.set(v2b, from.node.worldPosition.x, from.node.worldPosition.y));
        };
        _createClass(Entity2D, [{
          key: "x",
          get: /** x坐标 */
          function get() {
            return this.node.position.x;
          },
          set: function set(arg) {
            var _this$node$position = this.node.position,
              y = _this$node$position.y,
              z = _this$node$position.z;
            this.node.setPosition(arg, y, z);
          }

          /** y坐标 */
        }, {
          key: "y",
          get: function get() {
            return this.node.position.y;
          },
          set: function set(arg) {
            var _this$node$position2 = this.node.position,
              x = _this$node$position2.x,
              z = _this$node$position2.z;
            this.node.setPosition(x, arg, z);
          }

          /** 宽度 */
        }, {
          key: "w",
          get: function get() {
            var _this$getComponent;
            return (_this$getComponent = this.getComponent(UITransform)) == null ? void 0 : _this$getComponent.width;
          },
          set: function set(arg) {
            this.getComponent(UITransform).width = arg;
          }

          /** 高度 */
        }, {
          key: "h",
          get: function get() {
            var _this$getComponent2;
            return (_this$getComponent2 = this.getComponent(UITransform)) == null ? void 0 : _this$getComponent2.height;
          },
          set: function set(arg) {
            this.getComponent(UITransform).height = arg;
          }

          /** 尺寸 */
        }, {
          key: "size",
          get: function get() {
            var _this$getComponent3;
            return (_this$getComponent3 = this.getComponent(UITransform)) == null ? void 0 : _this$getComponent3.contentSize;
          },
          set: function set(args) {
            this.getComponent(UITransform).setContentSize(args.width, args.height);
          }

          /** 透明度 */
        }, {
          key: "alpha",
          get: function get() {
            var _this$getComponent$op, _this$getComponent4;
            return (_this$getComponent$op = (_this$getComponent4 = this.getComponent(UIOpacity)) == null ? void 0 : _this$getComponent4.opacity) != null ? _this$getComponent$op : 1;
          },
          set: function set(arg) {
            var _this$getComponent5;
            ((_this$getComponent5 = this.getComponent(UIOpacity)) != null ? _this$getComponent5 : this.addComponent(UIOpacity)).opacity = arg * 255;
          }
        }]);
        return Entity2D;
      }(Component)) || _class$i);
      var v2a = new Vec2();
      var v2b = new Vec2();
      var v3a$3 = new Vec3();
      cclegacy._RF.pop();
      var _dec$d, _class$j;
      cclegacy._RF.push({}, "309d57B9ZRMrpAOGk9T5how", "Controller", undefined);
      var _Notifications$Time$1 = Notifications.Time,
        SECOND$1 = _Notifications$Time$1.SECOND,
        SPAN$1 = _Notifications$Time$1.SPAN;
      var ccclass$d = _decorator.ccclass;
      var Controller = exports('C', (_dec$d = ccclass$d('cfw.Controller'), _dec$d(_class$j = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Controller, _Component);
        function Controller() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = Controller.prototype;
        _proto.__preload = function __preload() {
          if (isFunc(_Component.prototype.__preload)) _Component.prototype.__preload.call(this);
          controllers.unshiftUnique(this);
        };
        _proto.on = function on(type, handler, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          notifier.attach(type, handler, this, false, priority);
        };
        _proto.once = function once(type, handler, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          notifier.attach(type, handler, this, true, priority);
        };
        _proto.off = function off(type, handler) {
          notifier.detach(type, handler, this);
        };
        _proto.notify = function notify(type) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          notifier.dispatch.apply(notifier, [type].concat(args));
        };
        _proto.onDestroy = function onDestroy() {
          notifier.unload(this);
          bridge.unload(this);
          controllers.remove(this);
        };
        _proto.onSecond = function onSecond(dt, sec) {};
        _proto.onSpan = function onSpan(dt, span) {}

        /**
          * 当前场景
         */;
        _createClass(Controller, [{
          key: "listenSecond",
          get:
          /**
            * 是否监听每秒回调
            * @description 设置为true时onSecond每秒触发
           */
          function get() {
            return inner.hasHandler(this.onSecond, this);
          },
          set: function set(arg) {
            if (arg && !this.listenSecond) inner.attach(SECOND$1, this.onSecond, this);else if (!arg && this.listenSecond) inner.detach(SECOND$1, this.onSecond, this);
          }

          /**
            * 是否监听每时段回调
            * @description 设置为true时onSpan每时间段触发
            * @explain 时段长短的设置：TimerSystem.span = num
           */
        }, {
          key: "listenSpan",
          get: function get() {
            return inner.hasHandler(this.onSecond, this);
          },
          set: function set(arg) {
            if (arg && !this.listenSpan) inner.attach(SPAN$1, this.onSpan, this);else if (!arg && this.listenSpan) inner.detach(SPAN$1, this.onSpan, this);
          }
        }, {
          key: "scene",
          get: function get() {
            return director.getScene();
          }
        }]);
        return Controller;
      }(Component)) || _class$j));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5f990Fha2dPN7FWfdhOV626", "Proxy", undefined);
      var Proxy = exports('P', /*#__PURE__*/function () {
        function Proxy() {
          this._inited = void 0;
          this._inited = true;
          proxies.unshiftUnique(this);
          this.init();
        }
        var _proto = Proxy.prototype;
        _proto.init = function init() {};
        _proto.update = function update() {};
        _proto.on = function on(type, handler, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          notifier.attach(type, handler, this, false, priority);
        };
        _proto.once = function once(type, handler, priority) {
          if (priority === void 0) {
            priority = 0;
          }
          notifier.attach(type, handler, this, true, priority);
        };
        _proto.off = function off(type, handler) {
          notifier.detach(type, handler, this);
        };
        _proto.notify = function notify(type) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          notifier.dispatch.apply(notifier, [type].concat(args));
        };
        _proto.destroy = function destroy() {
          notifier.unload(this);
          bridge.unload(this);
          proxies.remove(this);
        };
        _createClass(Proxy, [{
          key: "inited",
          get:
          /**
            * 是否被初始化过
            * @return 判断结果
           */
          function get() {
            return this._inited;
          }
        }]);
        return Proxy;
      }());
      cclegacy._RF.pop();
      var _dec$e, _dec2$9, _dec3$9, _dec4$9, _dec5$9, _class$k, _class2$b, _descriptor$9, _descriptor2$9, _descriptor3$9, _descriptor4$8, _class3$4;
      cclegacy._RF.push({}, "22874mQ8YVBfJ8zm638JCNV", "item-list", undefined);
      var ccclass$e = _decorator.ccclass;
      var ReduceType = /*#__PURE__*/function (ReduceType) {
        ReduceType[ReduceType["Free"] = 0] = "Free";
        ReduceType[ReduceType["Inactive"] = 1] = "Inactive";
        return ReduceType;
      }(ReduceType || {});
      var ItemList = exports('I', (_dec$e = ccclass$e('cfw.ItemList'), _dec2$9 = tip("缩减方式", ["type", Enum(ReduceType)]), _dec3$9 = tip("容器节点（默认自身）", Node), _dec4$9 = tip("预制模板（Item类）", Prefab), _dec5$9 = tip("预制类名（Item类）"), _dec$e(_class$k = (_class2$b = (_class3$4 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ItemList, _Component);
        function ItemList() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "reduceType", _descriptor$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_container", _descriptor2$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_prefab", _descriptor3$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemClassName", _descriptor4$8, _assertThisInitialized(_this));
          _this._pool = void 0;
          _this._ItemClass = void 0;
          return _this;
        }
        var _proto = ItemList.prototype;
        _proto.__preload = function __preload() {
          if (!this.itemPrefab) return console.error('[ItemList.onLoad]', 'item prefab not defined');
          this._ItemClass = js.getClassByName(this.itemClassName);
          if (!this._ItemClass) return console.error('[ItemList.onLoad]:', "Item class \"" + this.itemClassName + "\" not found");
          this._pool = new ItemPool(this._ItemClass, this.itemPrefab, this.container);
        };
        _proto.onDestroy = function onDestroy() {
          this._pool.clear();
        };
        _proto.updateList = function updateList(dataList) {
          if (!this._pool) return;
          var list = this.node.children;
          if (isEmpty(dataList)) {
            if (this.reduceType === ReduceType.Free) this.freeAll();else list.forEach(function (child) {
              return child.active = false;
            });
            return;
          }
          var length = list.length,
            size = dataList.length;
          var max = Math.max(length, size);
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          for (var i = 0; i < max; i++) {
            var node = list[i],
              _data = dataList[i];
            if (node && _data) {
              var _this$_getItemOn;
              (_this$_getItemOn = this._getItemOn(node)).onDataUpdated.apply(_this$_getItemOn, [_data].concat(args));
              node.active = true;
            } else if (!node) {
              var _this$_pool$claim;
              (_this$_pool$claim = this._pool.claim(this._ItemClass)).onDataUpdated.apply(_this$_pool$claim, [_data].concat(args));
            } else if (this.reduceType === ReduceType.Free) {
              this._pool.free(this._getItemOn(node));
            } else {
              node.active = false;
            }
          }
        };
        _proto.freeAll = function freeAll() {
          var _this2 = this;
          if (this.container.children.length <= 0) return;
          [].concat(this.container.children).forEach(function (node) {
            return _this2._pool.free(_this2._getItemOn(node));
          });
        };
        _proto._getItemOn = function _getItemOn(node) {
          return node.getComponent(this._ItemClass);
        };
        _createClass(ItemList, [{
          key: "container",
          get: function get() {
            var _this$_container;
            return (_this$_container = this._container) != null ? _this$_container : this.node;
          },
          set: function set(arg) {
            this._container = arg;
          }
        }, {
          key: "itemPrefab",
          get: function get() {
            return this._prefab;
          },
          set: function set(arg) {
            this._prefab = arg;
            if (!this.itemClassName) this.itemClassName = arg.data._name;
          }
        }, {
          key: "items",
          get: function get() {
            var _this3 = this;
            return this.container.children.map(function (child) {
              return _this3._getItemOn(child);
            });
          }
        }]);
        return ItemList;
      }(Component), _class3$4.ReduceType = ReduceType, _class3$4), (_descriptor$9 = _applyDecoratedDescriptor(_class2$b.prototype, "reduceType", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ReduceType.Free;
        }
      }), _descriptor2$9 = _applyDecoratedDescriptor(_class2$b.prototype, "_container", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$b.prototype, "container", [_dec3$9], Object.getOwnPropertyDescriptor(_class2$b.prototype, "container"), _class2$b.prototype), _descriptor3$9 = _applyDecoratedDescriptor(_class2$b.prototype, "_prefab", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$b.prototype, "itemPrefab", [_dec4$9], Object.getOwnPropertyDescriptor(_class2$b.prototype, "itemPrefab"), _class2$b.prototype), _descriptor4$8 = _applyDecoratedDescriptor(_class2$b.prototype, "itemClassName", [_dec5$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      })), _class2$b)) || _class$k));
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "12849E8wJFJureZuPkGnuZ/", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "af0c0nFW+BBCr5VCUpu5y+V", "index", undefined);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "ae531RYKdpBk6VgD+dC1Qrj", "env", undefined);
      var USE_OVERSEA = exports('U', false);
      function isCN() {
        if (sys.isNative) {
          var _sys$language;
          return ((_sys$language = sys.language) != null ? _sys$language : '').toLowerCase() === 'zh-cn';
        } else {
          var _navigator$language, _navigator;
          return ((_navigator$language = (_navigator = navigator) == null ? void 0 : _navigator.language) != null ? _navigator$language : '').toLowerCase() === 'zh-cn';
        }
      }
      if (sys.isNative) {
        console.info("dawn frame rate on open-harmony");
        game.frameRate = 30;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///index.mjs_cjs=&original=-19763392.js", ['./env-0392683e.js'], function (exports, module) {
  var loader;
  return {
    setters: [function (module) {
      loader = module.l;
    }],
    execute: function () {
      var __cjsMetaURL = 'file:///Users/jackie/work/res/xkswz-master-8cba60886f0edaaf30045d45b4281ea799ea3d07/cocos-project/node_modules/default-passive-events/dist/index.js';
      loader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        var e,
          t = ["scroll", "wheel", "touchstart", "touchmove", "touchenter", "touchend", "touchleave", "mouseout", "mouseleave", "mouseup", "mousedown", "mousemove", "mouseenter", "mousewheel", "mouseover"];
        if (function () {
          var e = !1;
          try {
            var t = Object.defineProperty({}, "passive", {
              get: function get() {
                e = !0;
              }
            });
            window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
          } catch (e) {}
          return e;
        }()) {
          var o = EventTarget.prototype.addEventListener;
          e = o, EventTarget.prototype.addEventListener = function (o, r, n) {
            var s,
              a = "object" == typeof n && null !== n,
              i = a ? n.capture : n;
            (n = a ? function (e) {
              var t = Object.getOwnPropertyDescriptor(e, "passive");
              return t && !0 !== t.writable && void 0 === t.set ? Object.assign({}, e) : e;
            }(n) : {}).passive = void 0 !== (s = n.passive) ? s : -1 !== t.indexOf(o) && !0, n.capture = void 0 !== i && i, e.call(this, o, r, n);
          }, EventTarget.prototype.addEventListener._original = e;
        }

        // #endregion ORIGINAL CODE

        module.exports;
      }, {});

      // I am the facade module who provides access to the CommonJS module './index.js'~
      if (!__cjsMetaURL) {
        loader.throwInvalidWrapper('./index.js', 'file:///Users/jackie/work/res/xkswz-master-8cba60886f0edaaf30045d45b4281ea799ea3d07/cocos-project/node_modules/default-passive-events/dist/index.mjs?cjs=&original=.js');
      }
      loader.require(__cjsMetaURL);
    }
  };
});

System.register("chunks:///relative-camera-3771b670.js", ['cc', './rollupPluginModLoBabelHelpers-7ebc65e7.js', './env-0392683e.js'], function (exports) {
  var cclegacy, DynamicAtlasManager, Vec3, Layers, view, Color, Mat4, instantiate, Node, ParticleSystem, CurveRange, GradientRange, Layout, Widget, _decorator, Label, Component, UITransform, Material, MeshRenderer, gfx, Prefab, Vec4, Mesh, resources, Texture2D, easing, Vec2, Camera, Quat, Mat3, Sprite, Button, Animation, KeyCode, EventMouse, input, sys, Input, Rect, _inheritsLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, isCN, singleton$b, Proxy, core, TweenSwitcher, Notifications, poolify, HeadUpDisplay, findCamera, group$5, serialize$3, Controller, findNode$1, findComp$1, tip$1;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      DynamicAtlasManager = module.DynamicAtlasManager;
      Vec3 = module.Vec3;
      Layers = module.Layers;
      view = module.view;
      Color = module.Color;
      Mat4 = module.Mat4;
      instantiate = module.instantiate;
      Node = module.Node;
      ParticleSystem = module.ParticleSystem;
      CurveRange = module.CurveRange;
      GradientRange = module.GradientRange;
      Layout = module.Layout;
      Widget = module.Widget;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
      UITransform = module.UITransform;
      Material = module.Material;
      MeshRenderer = module.MeshRenderer;
      gfx = module.gfx;
      Prefab = module.Prefab;
      Vec4 = module.Vec4;
      Mesh = module.Mesh;
      resources = module.resources;
      Texture2D = module.Texture2D;
      easing = module.easing;
      Vec2 = module.Vec2;
      Camera = module.Camera;
      Quat = module.Quat;
      Mat3 = module.Mat3;
      Sprite = module.Sprite;
      Button = module.Button;
      Animation = module.Animation;
      KeyCode = module.KeyCode;
      EventMouse = module.EventMouse;
      input = module.input;
      sys = module.sys;
      Input = module.Input;
      Rect = module.Rect;
    }, function (module) {
      _inheritsLoose = module.a;
      _createClass = module.h;
      _asyncToGenerator = module.d;
      _regeneratorRuntime = module.e;
      _applyDecoratedDescriptor = module._;
      _initializerDefineProperty = module.b;
      _assertThisInitialized = module.c;
      _createForOfIteratorHelperLoose = module.f;
    }, function (module) {
      isCN = module.i;
      singleton$b = module.e;
      Proxy = module.P;
      core = module.c;
      TweenSwitcher = module.T;
      Notifications = module.N;
      poolify = module.p;
      HeadUpDisplay = module.H;
      findCamera = module.f;
      group$5 = module.g;
      serialize$3 = module.s;
      Controller = module.C;
      findNode$1 = module.a;
      findComp$1 = module.b;
      tip$1 = module.t;
    }],
    execute: function () {
      exports({
        A: createNodeAt,
        D: calcTransformParams,
        Y: smoothstep,
        a: attenuate,
        a1: setLayer,
        a8: loadUnitAndColorI18n,
        n: updateSwitcherLayout,
        s: setLabelStyle,
        t: toThousands,
        x: changeFrame
      });
      cclegacy._RF.push({}, "5ca31EqJWBNi7D43HSeNZtC", "const", undefined);
      /** ——————————— 环境设置 ——————————— **/
      // 动态图集，在不同平台打包下改变下面的参数
      // macro.CLEANUP_IMAGE_CACHE = false;
      // DynamicAtlasManager.instance.enabled = true;
      // DynamicAtlasManager.instance.maxAtlasCount = 3;
      // DynamicAtlasManager.instance.textureSize = 2048;
      DynamicAtlasManager.instance.enabled = false;

      // 天文单位公里数      
      var KM_OF_LY = exports('K', 9.4607e+12);

      // 光年刻度的世界尺寸差
      var POW_OFS = -0.0241;

      // 地轴倾角
      var INCLINE = -23.5;

      // 坐标系相对极轴偏移
      var AxisRotation = exports('a4', {
        HORIZONTAL: new Vec3(0, 0, 0),
        // 地平
        EQUATORIAL: new Vec3(0, 0, INCLINE),
        // 赤道
        ECLIPTIC: new Vec3(0, 0, 0),
        // 黄道
        GALACTIC: new Vec3(82.6, 120.8, 12.5),
        // 银道
        SOLAR_DIR: new Vec3(0.407, -0.86, -0.305) // 太阳绕银河系方向
      });

      // 距离地球最近的恒星距离：比邻星（南门二，半人马座α）
      var NEAREST_STAR = 4.2;

      // 星座族
      var ConstGroup = /*#__PURE__*/function (ConstGroup) {
        ConstGroup[ConstGroup["NONE"] = 0] = "NONE";
        ConstGroup[ConstGroup["ZODIAC"] = 1] = "ZODIAC";
        ConstGroup[ConstGroup["URSA"] = 2] = "URSA";
        ConstGroup[ConstGroup["PERSEUS"] = 4] = "PERSEUS";
        ConstGroup[ConstGroup["HERCULES"] = 8] = "HERCULES";
        ConstGroup[ConstGroup["ORION"] = 16] = "ORION";
        ConstGroup[ConstGroup["OCEANIC"] = 32] = "OCEANIC";
        ConstGroup[ConstGroup["BAYER"] = 64] = "BAYER";
        ConstGroup[ConstGroup["LACAILLE"] = 128] = "LACAILLE";
        ConstGroup[ConstGroup["ALL"] = 255] = "ALL";
        return ConstGroup;
      }({}); // 全天星座：现代88星座

      // 恒星光谱特征，参见赫罗图
      var StarSpectrum = /*#__PURE__*/function (StarSpectrum) {
        StarSpectrum[StarSpectrum["O"] = 0] = "O";
        StarSpectrum[StarSpectrum["B"] = 1] = "B";
        StarSpectrum[StarSpectrum["A"] = 2] = "A";
        StarSpectrum[StarSpectrum["F"] = 3] = "F";
        StarSpectrum[StarSpectrum["G"] = 4] = "G";
        StarSpectrum[StarSpectrum["K"] = 5] = "K";
        StarSpectrum[StarSpectrum["M"] = 6] = "M";
        StarSpectrum[StarSpectrum["C"] = 7] = "C";
        StarSpectrum[StarSpectrum["W"] = 8] = "W";
        StarSpectrum[StarSpectrum["L"] = 9] = "L";
        StarSpectrum[StarSpectrum["T"] = 10] = "T";
        StarSpectrum[StarSpectrum["Y"] = 11] = "Y";
        StarSpectrum[StarSpectrum["R"] = 12] = "R";
        StarSpectrum[StarSpectrum["N"] = 13] = "N";
        StarSpectrum[StarSpectrum["S"] = 14] = "S";
        StarSpectrum[StarSpectrum["D"] = 15] = "D";
        StarSpectrum[StarSpectrum["Q"] = 16] = "Q";
        StarSpectrum[StarSpectrum["X"] = 17] = "X";
        return StarSpectrum;
      }({}); // 黑洞。例如，天鹅座X-1。

      // 深空天体类型（梅西耶天体+命名星系）
      var DeepSkyObjectType = /*#__PURE__*/function (DeepSkyObjectType) {
        DeepSkyObjectType[DeepSkyObjectType["GlobularCluster"] = 1] = "GlobularCluster";
        DeepSkyObjectType[DeepSkyObjectType["OpenCluster"] = 2] = "OpenCluster";
        DeepSkyObjectType[DeepSkyObjectType["DoubleStars"] = 3] = "DoubleStars";
        DeepSkyObjectType[DeepSkyObjectType["GroupedStars"] = 4] = "GroupedStars";
        DeepSkyObjectType[DeepSkyObjectType["EmissiveNebula"] = 11] = "EmissiveNebula";
        DeepSkyObjectType[DeepSkyObjectType["ReflectiveNebula"] = 12] = "ReflectiveNebula";
        DeepSkyObjectType[DeepSkyObjectType["PlanetaryNebula"] = 13] = "PlanetaryNebula";
        DeepSkyObjectType[DeepSkyObjectType["MilkyWayStarCloud"] = 14] = "MilkyWayStarCloud";
        DeepSkyObjectType[DeepSkyObjectType["SupernovaRemnant"] = 15] = "SupernovaRemnant";
        DeepSkyObjectType[DeepSkyObjectType["EllipticalGalaxy"] = 20] = "EllipticalGalaxy";
        DeepSkyObjectType[DeepSkyObjectType["SpiralsGalaxy"] = 21] = "SpiralsGalaxy";
        DeepSkyObjectType[DeepSkyObjectType["BarredSpiralGalaxy"] = 22] = "BarredSpiralGalaxy";
        DeepSkyObjectType[DeepSkyObjectType["IrregularGalaxy"] = 23] = "IrregularGalaxy";
        DeepSkyObjectType[DeepSkyObjectType["StarBurstGalaxy"] = 24] = "StarBurstGalaxy";
        DeepSkyObjectType[DeepSkyObjectType["LenticularGalaxy"] = 25] = "LenticularGalaxy";
        DeepSkyObjectType[DeepSkyObjectType["DwarfGalaxy"] = 29] = "DwarfGalaxy";
        return DeepSkyObjectType;
      }({}); // 矮星系/卫星星系
      var SOLAR_IN_MILKY = new Vec3(-0.235, 0, 2.265); // 太阳系相对银河坐标（光年）
      var MILKY_TO_SOLAR = exports('ac', new Vec3(0.119, -2.244, -0.37)); // 银河中心相对太阳系坐标（光年）
      var LOCAL_TO_SOLAR = exports('ab', new Vec3(0.496, 0.697, 0.937)); // 本群中心相对太阳系坐标（光年）
      var M31_TO_SOLAR = exports('ad', new Vec3(0.991, 1.394, 1.874)); // 仙女座星系相对太阳系坐标（百万光年）
      var M33_TO_SOLAR = exports('ae', new Vec3(1.409, 0.902, 2.149)); // 三角座星系相对太阳系坐标（百万光年）
      var VIRGO_TO_SOLAR = exports('af', new Vec3(-0.019, 0.133, -0.534)); // 本超群中心相对太阳系坐标（亿光年）

      // 主范围直径描述
      var Diameters = {
        SOLAR: 1.496 * 79,
        // 狭义太阳系（亿公里）
        HELIO: 1.496 * 500,
        // 广义太阳系（百亿公里）
        MILKY: 10,
        // 银河系（万光年）
        LOCAL: 10,
        // 本星系群（百万光年）
        VIRGO: 1.1,
        // 室女座超星系团（亿光年）
        LANIAKEA: 5.2,
        // 拉尼亚凯亚超星系团（亿光年）
        HUBBLE: 930 // 哈勃尺度（亿光年）
      };

      /** ——————————— 时间常量 ——————————— **/

      var SEC_PER_MIN = 60; // 分秒
      var MIN_PER_HOUR = 60; // 时分
      var HOUR_PER_DAY = 24; // 时秒
      var DEG_PERIGON = exports('_', 360); // 周角
      var DEG_PI = 180; // PI角
      var DEG_RIGHT = 90; // 直角
      var DEG_RIGHT_2 = 45; // 半角
      var SEC_PER_HOUR = SEC_PER_MIN * MIN_PER_HOUR; // 时秒
      var DEG_PER_HOUR = DEG_PERIGON / HOUR_PER_DAY; // 时角

      var Timer = /*#__PURE__*/function (Timer) {
        Timer[Timer["STOP"] = 0] = "STOP";
        Timer[Timer["SECOND"] = 1] = "SECOND";
        Timer[Timer["MINUTE"] = 2] = "MINUTE";
        Timer[Timer["HOUR"] = 3] = "HOUR";
        Timer[Timer["DAY"] = 4] = "DAY";
        Timer[Timer["WEEK"] = 5] = "WEEK";
        Timer[Timer["MONTH"] = 6] = "MONTH";
        Timer[Timer["YEAR"] = 7] = "YEAR";
        return Timer;
      }({});

      /** ——————————— 视图常量 ——————————— **/

      // 绝对星等=0的半径
      var STAR_R0 = 1;

      // 恒星命名方式
      var StarNameType = /*#__PURE__*/function (StarNameType) {
        StarNameType[StarNameType["ALPHABET"] = 1] = "ALPHABET";
        StarNameType[StarNameType["NAMED"] = 2] = "NAMED";
        StarNameType[StarNameType["HD"] = 3] = "HD";
        StarNameType[StarNameType["HIP"] = 4] = "HIP";
        return StarNameType;
      }({}); // 依巴谷星表和第谷星表

      // 恒星显示等级
      var StarLevel = exports('j', /*#__PURE__*/function (StarLevel) {
        StarLevel[StarLevel["NONE"] = 0] = "NONE";
        StarLevel[StarLevel["LEVEL_1"] = 2] = "LEVEL_1";
        StarLevel[StarLevel["LEVEL_2"] = 3] = "LEVEL_2";
        StarLevel[StarLevel["LEVEL_3"] = 4] = "LEVEL_3";
        StarLevel[StarLevel["LEVEL_4"] = 5] = "LEVEL_4";
        StarLevel[StarLevel["LEVEL_5"] = 6] = "LEVEL_5";
        return StarLevel;
      }({})); // 五等星以上

      // 深空天体命名方式
      var DeepNameType = /*#__PURE__*/function (DeepNameType) {
        DeepNameType[DeepNameType["NONE"] = 0] = "NONE";
        DeepNameType[DeepNameType["NAMED"] = 1] = "NAMED";
        DeepNameType[DeepNameType["MESSIER"] = 2] = "MESSIER";
        DeepNameType[DeepNameType["NGC_IC"] = 3] = "NGC_IC";
        return DeepNameType;
      }({}); // NGC天体表/索引天体表编号
      var LAYER_UI_BG = exports('a3', Layers.nameToLayer('UI_BG')); // 背景UI层
      var LAYER_UI_2D = exports('a2', Layers.nameToLayer('UI_2D')); // 前景UI层
      var LAYER_BG_3D = exports('a0', Layers.nameToLayer('CONS_3D')); // 深空3D层
      var LAYER_MAIN_3D = exports('Z', Layers.nameToLayer('MAIN_3D')); // 主3D层
      var LAYER_GIZMOS = exports('B', Layers.nameToLayer('GIZMOS')); // 指示层

      /** ——————————— 资源常量 ——————————— **/
      // 资源引用和数据
      var Res = exports('R', {
        Sheets: {
          CULTURE: '星座文化',
          MESSIER_CELL_NUM: 16,
          MESSIER_DEFAULT: [156, 2],
          MESSIER_DEFAULT_BIG: [176, 2],
          CULTURE_CELL_NUM: 8,
          PLANETS_LOD_GIRDS: {
            ROW: 8,
            COL: 4
          },
          DSM01_LOD_GIRDS: {
            ROW: 4,
            COL: 2
          },
          DSM2_LOD_GIRDS: {
            ROW: 8,
            COL: 4
          },
          PRESET: 'preset',
          UI_BORDER: 'ui-border',
          UI_ICON: 'ui-icon',
          UI_POPS: 'ui-pops',
          UI_ICON_DEFAULT: 'icon_default'
        },
        Textures: {
          MILKY_WAY: 'textures/milky-way',
          CELESTIAL: 'textures/celestial',
          AST_PLANES: 'textures/planetary/astronomical-planes/texture',
          CELESTIAL_4K: 'textures/celestial-4k',
          CONST_COMBINE: 'textures/stellar/constellations-key/texture'
        },
        Prefabs: {
          STAR_PRECISE: 'star-precise',
          CULTURE_QUAD: 'culture-quad',
          SUBSTRUCTURE: 'sphere-substructure',
          ACANTHO: 'sphere-acantho',
          STARS_GPU: 'stars-gpu',
          GALAXIES_GPU: 'galaxies-gpu',
          COMPANIONS_GPU: 'companions-gpu',
          MILKY_CLOUD: 'milky-cloud',
          SUN: 'sun',
          PLANET: 'planet',
          DSM: 'dsm',
          COMET: 'comet',
          ASTEROID: 'asteroid',
          SATELLITE: 'satellite',
          SCOPE: 'cylinder-scope',
          SUPER_CLUSTERS: 'super-clusters',
          LENS_PANEL: 'lens-panel',
          INTRO_PANEL: 'intro-panel',
          VISIT_PANEL: 'visit-panel',
          GUIDE_PANEL: 'guide-panel'
        },
        Configs: {
          SOLAR_PLANETS: 'solar-planets',
          SOLAR_DWARFS: 'solar-dwarfs',
          SOLAR_MINORS: 'solar-minors',
          SOLAR_COMETS: 'solar-comets',
          ASTEROID_BELTS: 'asteroid-belts',
          PLANETARY_SATELLITES: 'planetary-satellites',
          SUBSTRUCTURES: 'substructures',
          DEEP_SKY_OBJECTS: 'deep-sky-objects',
          CONSTELLATION_STARS: 'constellation-stars',
          VISITABLE_STARS: 'visitable-stars',
          VISITABLE_BLACK_HOLES: 'visitable-blackholes',
          I18N: 'i18n'
        },
        Materials: {
          PlanetPresets: {
            EARTH: 'earth',
            WINDY: 'windy',
            TERRESTRIAL: 'terrestrial',
            GIANT: 'giant'
          }
        }
      });
      var SceneGraph = exports('S', {
        COSMOS: 'Cosmos',
        Cameras: {
          MAIN: 'Main Camera',
          DEEP: 'Deep Sky Camera'
        },
        MAIN_LIGHT: 'Main Light',
        MILKY: 'MilkyWay',
        Milky: {
          CLUSTERS: 'Milky.CLusters',
          NEBULAS: 'Milky.Nebulas'
        },
        STELLAR: 'Stellar',
        LOCAL: 'LocalGG',
        Local: {
          GALAXIES: 'Local.Galaxies'
        },
        VIRGO: 'VirgoSC',
        Virgo: {
          GALAXIES: 'Virgo.Galaxies'
        },
        SOLAR: 'Solar',
        Solar: {},
        HELIO: 'Helio',
        PLANETARY: 'Planetary',
        Planetary: {
          SATELLITES: 'Satellites'
        },
        SPECIFIC: 'Specific'
      });
      var NOTFOUND_SHEET_ID = -99;

      /** ——————————— UI常量 ——————————— **/

      var INIT_LANG = isCN() ? 'cn' : 'en';
      var LANGUAGES = ['cn', 'en'];
      var ASPECT_RATIO = view.getVisibleSize().height / view.getVisibleSize().width;
      var I8 = exports('a6', 255);
      var TransformEnum = exports('r', /*#__PURE__*/function (TransformEnum) {
        TransformEnum[TransformEnum["NONE"] = 0] = "NONE";
        TransformEnum[TransformEnum["SUN_2_PLN"] = 1] = "SUN_2_PLN";
        TransformEnum[TransformEnum["SUN_2_SAT"] = 2] = "SUN_2_SAT";
        TransformEnum[TransformEnum["PLN_2_SAT"] = 3] = "PLN_2_SAT";
        TransformEnum[TransformEnum["PLN_2_PLN"] = 4] = "PLN_2_PLN";
        TransformEnum[TransformEnum["SAT_2_SAT"] = 5] = "SAT_2_SAT";
        TransformEnum[TransformEnum["PLN_2_SUN"] = 6] = "PLN_2_SUN";
        TransformEnum[TransformEnum["SAT_2_PLN"] = 7] = "SAT_2_PLN";
        TransformEnum[TransformEnum["SAT_2_SUN"] = 8] = "SAT_2_SUN";
        TransformEnum[TransformEnum["SUN_2_SPC"] = 9] = "SUN_2_SPC";
        TransformEnum[TransformEnum["SPC_2_SUN"] = 10] = "SPC_2_SUN";
        TransformEnum[TransformEnum["SPC_2_SPC"] = 11] = "SPC_2_SPC";
        return TransformEnum;
      }({}));
      var TRANS_2_PLN = exports('N', [TransformEnum.SUN_2_PLN, TransformEnum.SAT_2_PLN, TransformEnum.PLN_2_PLN]);
      var TRANS_2_SAT = exports('O', [TransformEnum.SUN_2_SAT, TransformEnum.PLN_2_SAT, TransformEnum.SAT_2_SAT]);
      var TRANS_2_SUN = exports('M', [TransformEnum.PLN_2_SUN, TransformEnum.SAT_2_SUN, TransformEnum.SPC_2_SUN]);
      var TRANS_INTER = exports('J', [TransformEnum.SUN_2_SPC, TransformEnum.SPC_2_SUN, TransformEnum.SPC_2_SPC]);
      var interstellar = exports('X', ['star', 'constellation', 'nebula', 'cluster', 'galaxy', 'blackhole']);
      var FIXED_ICONS = exports('F', {
        SUN: {
          into: 'star',
          name: 'Sun'
        },
        PLANETS: [{
          into: 'planet',
          name: 'Mercury'
        }, {
          into: 'planet',
          name: 'Venus'
        }, {
          into: 'planet',
          name: 'Earth'
        }, {
          into: 'planet',
          name: 'Mars'
        }, {
          into: 'planet',
          name: 'Jupiter'
        }, {
          into: 'planet',
          name: 'Saturn'
        }, {
          into: 'planet',
          name: 'Uranus'
        }, {
          into: 'planet',
          name: 'Neptune'
        }],
        DWARFS: [{
          into: 'dwarf',
          name: 'Ceres'
        }, {
          into: 'dwarf',
          name: 'Pluto'
        }, {
          into: 'dwarf',
          name: 'Haumea'
        }, {
          into: 'dwarf',
          name: 'Makemake'
        }, {
          into: 'dwarf',
          name: 'Eris'
        }, {
          into: 'belts',
          name: 'Main Belt'
        }, {
          into: 'belts',
          name: 'Kuiper Belt'
        }, {
          into: 'comet',
          name: 'Halley'
        }],
        STARS10: [{
          into: 'star',
          name: 'Sirius'
        }, {
          into: 'star',
          name: 'Canopus'
        }, {
          into: 'star',
          name: 'Rigil Kentaurus'
        }, {
          into: 'star',
          name: 'Arcturus'
        }, {
          into: 'star',
          name: 'Vega'
        }, {
          into: 'star',
          name: 'Capella'
        }, {
          into: 'star',
          name: 'Rigel'
        }, {
          into: 'star',
          name: 'Procyon'
        }, {
          into: 'star',
          name: 'Achernar'
        }, {
          into: 'star',
          name: 'Betelgeuse'
        }],
        STARS20: [{
          into: 'star',
          name: "Hadar"
        }, {
          into: 'star',
          name: "Altair"
        }, {
          into: 'star',
          name: "Acrux"
        }, {
          into: 'star',
          name: "Aldebaran"
        }, {
          into: 'star',
          name: "Antares"
        }, {
          into: 'star',
          name: "Spica"
        }, {
          into: 'star',
          name: "Pollux"
        }, {
          into: 'star',
          name: "Fomalhaut"
        }, {
          into: 'star',
          name: "Deneb"
        }, {
          into: 'star',
          name: "Mimosa"
        }],
        STARS30: [{
          into: 'star',
          name: "Regulus"
        }, {
          into: 'star',
          name: "Adhara"
        }, {
          into: 'star',
          name: "Castor"
        }, {
          into: 'star',
          name: "Shaula"
        }, {
          into: 'star',
          name: "Gacrux"
        }, {
          into: 'star',
          name: "Bellatrix"
        }, {
          into: 'star',
          name: "Elnath"
        }, {
          into: 'star',
          name: "Miaplacidus"
        }, {
          into: 'star',
          name: "Alnilam"
        }, {
          into: 'star',
          name: "Alnair"
        }],
        BH07: [{
          into: 'blackhole',
          name: "Gaia-BH1"
        }, {
          into: 'blackhole',
          name: "Gaia-BH3"
        }, {
          into: 'blackhole',
          name: "Gaia-BH2"
        }, {
          into: 'blackhole',
          name: "A0620-00"
        }, {
          into: 'blackhole',
          name: "O2011B0462"
        }, {
          into: 'blackhole',
          name: "J1118+480"
        }, {
          into: 'blackhole',
          name: "Cyg-X1"
        }],
        // TO ADD
        BH14: [{
          into: 'blackhole',
          name: "Cyg-V404"
        }, {
          into: 'blackhole',
          name: "GRO-J0422+32"
        }, {
          into: 'blackhole',
          name: "GS-2000+25"
        }, {
          into: 'blackhole',
          name: "Cyg-X3"
        }, {
          into: 'blackhole',
          name: "GRO-J1655-40"
        }, {
          into: 'blackhole',
          name: "Sgr-A"
        }, {
          into: 'blackhole',
          name: "IL-Lupi"
        }]
      });

      /** @tips 使用较为统一的颜色和字号有助于节省系统字体的CHAR模式的纹理占用 */
      var FONT_BIG = 24;
      var FONT_MID = 20;
      var FONT_SML = 16;
      var LBL_PURPLE = new Color(158, 158, 255, 255);
      var LBL_MAGENTA = new Color(255, 127, 255, 255);
      var LBL_YELLOW = new Color(255, 255, 31, 255);
      var LBL_GREEN = new Color(31, 255, 127, 255);
      var LBL_BROWN = new Color(191, 127, 63, 255);
      var LBL_GRAY = exports('f', new Color(143, 143, 143, 255));
      var LBL_WHITE = new Color(255, 255, 255, 255);
      var LBL_ORANGE = new Color(255, 191, 127, 255);
      var LBL_CANT = new Color(255, 191, 127, 255);
      var LBL_CYAN = new Color(127, 255, 255, 255);
      var LBL_ROSE = new Color(255, 63, 31, 255);
      var LBL_BLUE = new Color(63, 153, 255, 255);
      var LBL_NAVY = new Color(63, 153, 153, 255);
      var LBL_UI_NAMES = exports('e', new Color(63, 153, 153, 255));

      /** ——————————— 存储常量 ——————————— **/
      var LocalStorageKeys = {
        GUIDED: 'cocosmos.guided',
        LANG: 'cocosmos.language'
      };
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "5171fYmXmVIAJkHJrG9ry6z", "algorithms", undefined);

      /**
       * 3D时角坐标系转笛卡尔系
       * @param ra 时角（世界坐标+Z逆时针角）
       * @param ha 高度角
       * @param radius 极半径
       * @param out 输出坐标
      */
      function hour2cartesian(ra, ha, radius, out) {
        if (radius === void 0) {
          radius = 1;
        }
        return polar2cartesian(ra * DEG_PER_HOUR, ha, radius, out);
      }

      /**
       * 3D极坐标系转笛卡尔系
       * @param aa 方位角（世界坐标+Z逆时针角）
       * @param ha 高度角
       * @param radius 极半径
       * @param out 输出坐标
      */
      function polar2cartesian(aa, ha, radius, out) {
        if (radius === void 0) {
          radius = 1;
        }
        var ra = Math.parseRadian(aa),
          dec = Math.parseRadian(ha);
        var res = out != null ? out : {};
        res.y = Math.sin(dec) * radius;
        var rxz = Math.cos(dec) * radius;
        res.x = Math.sin(ra) * rxz;
        res.z = Math.cos(ra) * rxz;
        return res;
      }

      /**
       * 天球坐标系转黄道坐标系
       * @param point 天球坐标
       * @param out 输出坐标
       * @param angle 地轴倾斜角
      */
      function equator2ecliptic(point, out, angle) {
        var res = out != null ? out : new Vec3();
        var rad = Math.parseRadian(angle != null ? angle : INCLINE);
        return Vec3.rotateZ(res, point, Vec3.ZERO, rad);
      }

      /**
       * 利用普森公式计算尺度
       * @param abs 恒星绝对星等
       * @return 3D尺度
       * @explain 不使用视星等的原因是恒星在3D场景中会被放置在绝对坐标上。
      */
      function absoluteToRadius(abs) {
        return Math.pow(10, -abs / 5) * STAR_R0;
      }

      /**
       * 利用深空尺寸数据估算世界尺度
       * @param distance 天体距离
       * @param diameter 天体直径
       * @param appDimension 视场秒度
       * @return [3D尺度, 3D视角]
       * @explain 不使用直接视大小的原因是深空天体在3D场景中会被放置在绝对坐标上。
      */
      function appearanceToRadiusFov(distance, diameter, appD, pow10) {
        var absFov = diameter / distance / 1000 * (60 * 180 / Math.PI); // 绝对视角
        var _ref = notEmptyArr(appD) ? [Math.max.apply(Math, appD), Math.min.apply(Math, appD)] : [appD, appD],
          w = _ref[0],
          h = _ref[1];
        var appFov = Math.avg(w, w, h);
        var avgFov = Math.avg(absFov, appFov);
        var adjust = avgFov / absFov;
        var relative = diameter * Math.pow(10, pow10) * adjust;
        return [relative * AVG_SLOP + AVG_ADD, absFov * adjust];
      }
      var AVG_SLOP = 0.3;
      var AVG_ADD = 0.01;

      /**
       * 四棱锥形视锥裁剪
       * @param camera 相机节点
       * @param target 观测节点
       * @param allowance 容忍度
       * @return 是否被裁剪
       * @explain 当近裁面足够近，远裁面足够远，物体足够小时的高效率视锥体裁剪
      */
      function pyramidCulling(camera, target, allowance) {
        if (allowance === void 0) {
          allowance = 0;
        }
        var _camera$node = camera.node,
          right = _camera$node.right,
          up = _camera$node.up,
          forward = _camera$node.forward,
          worldPosition = _camera$node.worldPosition;
        Vec3.subtract(_v3a, target.worldPosition, worldPosition);
        if (Vec3.dot(_v3a, forward) < -allowance) return true;
        var verMax = camera.fov / 2 * (1 + allowance),
          horMax = verMax / ASPECT_RATIO * (1 + allowance);
        var model = _v3a.length();
        var hor = DEG_RIGHT - Math.parseDegree(Math.acos(Vec3.dot(_v3a, right) / model));
        var ver = DEG_RIGHT - Math.parseDegree(Math.acos(Vec3.dot(_v3a, up) / model));
        return Math.abs(ver) > verMax || Math.abs(hor) > horMax;
      }
      var _v3a = new Vec3();

      /**
       * 双范围减弱
       * @param attenuation 渐进范围
       * @param value 当前值
       * @param useSqr 使用平方距离
       * @return 减弱到比例
      */
      function attenuate(value, attenuation, useSqr) {
        if (useSqr === void 0) {
          useSqr = false;
        }
        var params = useSqr ? attenuation.map(function (v) {
          return v * v;
        }) : attenuation;
        var inFrom = params[0],
          inTo = params[1],
          outFrom = params[2],
          outTo = params[3];
        if (params.length === 2) {
          if (value <= inFrom) return 0;
          if (value >= inTo) return 1;
          return (value - inFrom) / (inTo - inFrom);
        } else if (params.length === 4) {
          if (value <= inFrom) return 0;
          if (value >= outTo) return 0;
          if (value < inTo) return (value - inFrom) / (inTo - inFrom);
          if (value > outFrom) return (outTo - value) / (outTo - outFrom);
          return 1;
        }
      }

      /**
       * 计算纹理集UV
       * @param idx id号码
       * @param span 占用宽度
       * @param CELL_NUM 纹理集细分尺度
       * @return uv tilling
      */

      function calcTiling(idx, arg1, arg2) {
        if (isNum(arg1)) {
          var CELL = 256 / arg2;
          var xy = arg1 * CELL;
          var z = idx % arg2 * CELL;
          var w = Math.floor(idx / arg2) * CELL;
          return [xy, xy, z, w];
        } else {
          var COL = arg1.COL,
            ROW = arg1.ROW;
          var CELL_W = 256 / COL;
          var CELL_H = 256 / ROW;
          return [CELL_W, CELL_H, idx % COL * CELL_W, Math.floor(idx / COL) * CELL_H];
        }
      }

      /**
       * 计算球体所占屏幕比 
       * @param sphere 球体节点
       * @param viewer 观察相机
       * @return 百分比（0-100）
      */
      function calcSphereScreenPercent(sphere, viewer) {
        if (sphere.activeInHierarchy) {
          var viewDist = Vec3.distance(sphere.worldPosition, viewer.node.worldPosition);
          return sphere.worldScale.x * viewer.camera.matProj.m05 / (viewDist * 2.0) * 100;
        } else return 0;
      }

      /**
       * 光滑步进函数
       * @param t1 0阈值
       * @param t2 1阈值
       * @param x 步进参数
      */
      function smoothstep(t1, t2, x) {
        var v = Math.clamp01((x - t1) / (t2 - t1));
        return v * v * (3 - 2 * v);
      }

      /**
       * 计算天体的合适尽头偏移量 
       * @param diam 直径（百万km）
       * @param smallest 最小直径
       * @param biggest 最大直径
       * @param nearest 最近焦距
       * @param farthest 最远焦距
      */
      function calcLensBias(diam, smallest, biggest, nearest, farthest) {
        return Math.lerp(farthest, nearest, Math.clamp01((diam - smallest) / (biggest - smallest)));
      }
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "c6b844VSoRDZ6jGdHhB5KJ8", "notifications", undefined);
      /**
       * @file 全局通知
       * @author DuskyHuang 圣子
      */

      var View = exports('g', {
        Transform: {
          ZOOM_START: 'View:变换.推拉开始',
          // step1
          ZOOM_OVER: 'View:变换.推拉完成',
          // step2
          FACE_OVER: 'View:变换.面向完成',
          // step3
          VISIT_OVER: 'View:变换.访问抵达' // step4
        },

        Lens: {
          ANGLE_CHANGE: 'View:镜头.改变角度',
          // args: az(deg),ha(deg)
          ANGLE_ADDED: 'View:镜头.增加角度' // args: +az(deg),ha?(deg)
        },

        Scale: {
          RATIO_CHANGE: 'View:尺寸.缩放比例'
        }
      });
      var UI = exports('U', {
        Zoom: 'UI:Zoom',
        LANGUAGE: 'UI:语言',
        // args: 'en'|'cn'|…(string)
        Labels: {
          CELESTIAL: 'UI:名称.天体名',
          CONSTELLATION: 'UI:名称.星座名',
          NEBULAR: 'UI:名称.星云名',
          GALAXY: 'UI:名称.星系名',
          NOTE: 'UI:名称.标注名',
          STAR_NAME_LEVEL: 'UI:名称.星等',
          // args: level(StarLevel)
          STAR_NAME_TYPE: 'UI:名称.命名'
        },
        // args: show(boolean)
        Gizmos: {
          GRIDS: 'UI:标尺.网格',
          RULERS: 'UI:标尺.尺度',
          TRACKS: 'UI:标尺.星轨',
          SCOPES: 'UI:标尺.范围',
          STRUCTS: 'UI:标尺.结构',
          LINES: 'UI:标尺.引线',
          TARGET: 'UI:标尺.目标'
        },
        // args: show(boolean)
        Solar: {
          SUN: 'UI:太阳系.太阳',
          PLANETS: 'UI:太阳系.行星',
          DWARFS: 'UI:太阳系.矮行星',
          MINORS: 'UI:太阳系.小行星',
          COMETS: 'UI:太阳系.彗星',
          BELTS: 'UI:太阳系.小行星带',
          RATIO: 'UI:太阳系.比例' // args: ratio(0-1)
        },

        // args: show(boolean)
        Local: {
          SATELLITES: 'UI:本地.卫星',
          MAGNETICS: 'UI:本地.磁场',
          AXIS: 'UI:本地.地轴',
          DIAMETER: 'UI:本地.直径',
          LUNAR: 'UI:本地.白道面',
          EQUATORIAL: 'UI:本地.赤道面',
          ECLIPTIC: 'UI:本地.黄道面',
          TIDE_LOCK: 'UI:本地.潮汐锁定',
          CONSTITUTE: 'UI:本地.构成',
          ARTIFICIAL: 'UI:本地.人造物'
        },
        // args: show(boolean)
        Stellar: {
          STARS: 'UI:星际.恒星',
          NEBULAS: 'UI:星际.星云',
          CLUSTERS: 'UI:星际.星团',
          GALAXIES: 'UI:星际.星系',
          LINES: 'UI:星际.连线',
          CULTURES: 'UI:星际.形象',
          CONSTS: 'UI:星际.星座',
          BLACKHOLE: 'UI:星际.黑洞'
        },
        DeepSky: {
          NAMED: 'UI:DeepSky.命名' // args: type(enum)
        },

        Consts: {
          GROUP: 'UI:Consts.星族',
          // args: bit(enum), show(boolean)
          HEMISPHERE: 'UI:Consts.南北' // args: 'N' | 'S'
        },

        VISIT: 'UI:访问',
        // args: name, into
        VISIBLE: 'UI:可见性',
        // args: into(cn), visible(boolean), byPanel?(boolean)
        FULL_SCREEN: 'UI:全屏幕',
        // args: full(boolean)
        LENS_PARAMS: 'UI:镜头参数',
        // 
        IGNORE_TARGET_ONCE: 'UI:忽略目标一次',
        Coord: {
          EQUATORIAL: 'UI:坐标.天球',
          // args: show(boolean)
          HOUR_ANGLE: 'UI:坐标.时角',
          // args: show(boolean)
          ECLIPTIC: 'UI:坐标.黄道',
          // args: show(boolean)
          GALACTIC: 'UI:坐标.银道',
          // args: show(boolean)
          HORIZONTAL: 'UI:坐标.地平',
          // args: show(boolean)
          EQUATOR: 'UI:坐标.道线',
          // args: show(boolean)
          AXIS: 'UI:坐标.轴线',
          // args: show(boolean)
          POLAR: 'UI:坐标.极点',
          // args: show(boolean)
          STRENGTH: 'UI:坐标.强度'
        },
        Panels: {
          OPEN: 'UI.面板.开启',
          CLOSE: 'UI.面板.关闭'
        },
        Popups: {
          INFO_LINE: 'UI:弹出.信息行',
          TIP_LINE: 'UI:弹出.提示行',
          VISIT_CD: 'UI:弹出.访问倒计时'
        }
      });
      var Task = exports('T', {
        Load: {
          DYNAMIC_TEX: 'Task.加载.动态纹理',
          APPROACH_SCOPE: 'Task.加载.范围逼近'
        }
      });
      var TaskNames = exports('i', {
        TEX_CONST_NORTH: 'const-north',
        TEX_CONST_SOUTH: 'const-south',
        TEX_MILKY_HOR: 'milky-hor',
        TEX_MILKY_VER: 'milky-ver',
        TEX_DSM_ALB: 'dwarfs-idx-albedo',
        TEX_DSM_NRM: 'dwarfs-idx-normal',
        TEX_MSR_INNERS: 'msr-inners',
        TEX_MSR_GALAXIES: 'msr-galaxies',
        TEX_SPR_CLUSTERS: 'spr-clusters'
        // GPU Particle Texture Seems Not Support Dynamic Loading
        // TEX_CMP_GALAXIES: 'cmp-galaxies',
        // TEX_RDM_GALAXIES: 'rdm-galaxies',
      });

      cclegacy._RF.pop();
      var _class;
      cclegacy._RF.push({}, "a1d85bO1BlJ0ocKA+vqE9TM", "user-proxy", undefined);
      var singleton = singleton$b;
      var UserProxy = singleton(_class = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(UserProxy, _Proxy);
        function UserProxy() {
          return _Proxy.call(this) || this;
        }
        var _proto = UserProxy.prototype;
        _proto.updateGuided = function updateGuided() {
          localStorage.setItem(GUIDED, 'guided');
        };
        _proto.updateLanguage = function updateLanguage(lang) {
          localStorage.setItem(LANG, lang);
        };
        _createClass(UserProxy, [{
          key: "guided",
          get: function get() {
            return localStorage.getItem(GUIDED) === 'guided';
          }
        }, {
          key: "language",
          get: function get() {
            var value = localStorage.getItem(LANG);
            if (LANGUAGES.contains(value)) return value;else return null;
          }
        }]);
        return UserProxy;
      }(Proxy)) || _class;
      var GUIDED = LocalStorageKeys.GUIDED,
        LANG = LocalStorageKeys.LANG;
      var user = exports('w', UserProxy.instance);
      cclegacy._RF.pop();
      var _class$1, _class2;
      cclegacy._RF.push({}, "5b467VzhNpE4J6FK9PfYwDY", "ui-proxy", undefined);
      var singleton$1 = singleton$b;
      var UIProxy = exports('a9', singleton$1(_class$1 = (_class2 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(UIProxy, _Proxy);
        function UIProxy() {
          var _this;
          _this = _Proxy.call(this) || this;
          _this._fullscreen = false;
          _this._show_cel_names = true;
          _this._show_const_names = false;
          _this._show_nebular_names = true;
          _this._show_galaxy_names = true;
          _this._show_notes = true;
          _this._star_name_level = StarLevel.LEVEL_2;
          // LEVEL_2|3|4
          _this._star_name_type = StarNameType.NAMED;
          _this._deep_name_type = DeepNameType.NAMED;
          // TO OPT (和恒星命名法一起做成单一按钮)
          _this._language = INIT_LANG;
          _this._lens_locked = false;
          _this._show_lens_vel = true;
          _this._show_esc_vel = true;
          _this._show_civ_lvl = false;
          return _this;
        }
        var _proto = UIProxy.prototype;
        // 是否显示宇宙文明等级
        _proto.localizeLanguage = function localizeLanguage(arg) {
          this._language = arg;
        };
        _proto.getStateByName = function getStateByName(name) {
          switch (name) {
            case '锁定镜头':
              return this.lensLocked;
            case '镜头速度':
              return this.showLensVel;
            case '逃逸速度':
              return this.showEscVel;
            case '文明等级':
              return this.showCivLvl;
            case '天体名':
              return this.showCelNames;
            case '星座名':
              return this.showConstNames;
            case '星云名':
              return this.showNebularNames;
            case '星系名':
              return this.showGalaxyNames;
            case '标注名':
              return this.showNotes;
            default:
              return false;
          }
        };
        _proto.init = function init() {
          var _this2 = this;
          this.on(FULL_SCREEN, function (arg) {
            return _this2._fullscreen = arg;
          }, 99);
          this.on(Labels.CELESTIAL, function (show) {
            return _this2._show_cel_names = show;
          });
          this.on(Labels.CONSTELLATION, function (show) {
            return _this2._show_const_names = show;
          });
          this.on(Labels.NEBULAR, function (show) {
            return _this2._show_nebular_names = show;
          });
          this.on(Labels.GALAXY, function (show) {
            return _this2._show_galaxy_names = show;
          });
          this.on(Labels.NOTE, function (show) {
            return _this2._show_notes = show;
          });
          this.on(Labels.STAR_NAME_LEVEL, function (level) {
            return _this2._star_name_level = level;
          });
          this.on(Labels.STAR_NAME_TYPE, function (type) {
            return _this2._star_name_type = type;
          });
          this.on(LANGUAGE, function (arg) {
            _this2._language = arg;
            user.updateLanguage(arg);
          });
          this.on(LENS_PARAMS, function (params) {
            var lock = params.lock,
              showLensVel = params.showLensVel,
              showEscVel = params.showEscVel,
              showCivLvl = params.showCivLvl;
            _this2._lens_locked = !!lock;
            _this2._show_lens_vel = !!showLensVel;
            _this2._show_esc_vel = !!showEscVel;
            _this2._show_civ_lvl = !!showCivLvl;
          }, 99);
        };
        _createClass(UIProxy, [{
          key: "fullscreen",
          get: function get() {
            return this._fullscreen;
          } // 是否进入全屏
        }, {
          key: "showCelNames",
          get: function get() {
            return this._show_cel_names;
          }
        }, {
          key: "showConstNames",
          get: function get() {
            return this._show_const_names;
          }
        }, {
          key: "showNebularNames",
          get: function get() {
            return this._show_nebular_names;
          }
        }, {
          key: "showGalaxyNames",
          get: function get() {
            return this._show_galaxy_names;
          }
        }, {
          key: "showNotes",
          get: function get() {
            return this._show_notes;
          }
        }, {
          key: "starNameLevel",
          get: function get() {
            return this._star_name_level;
          }
        }, {
          key: "starNameType",
          get: function get() {
            return this._star_name_type;
          }
        }, {
          key: "deepNameType",
          get: function get() {
            return this._deep_name_type;
          }
        }, {
          key: "language",
          get: function get() {
            return this._language;
          } // i18n当前语言
        }, {
          key: "lensLocked",
          get: function get() {
            return this._lens_locked;
          } // 是否锁定镜头
        }, {
          key: "showLensVel",
          get: function get() {
            return this._show_lens_vel;
          } // 是否显示镜头绝对速度
        }, {
          key: "showEscVel",
          get: function get() {
            return this._show_esc_vel;
          } // 是否显示当前逃逸速度
        }, {
          key: "showCivLvl",
          get: function get() {
            return this._show_civ_lvl;
          }
        }, {
          key: "showScopeCylinders",
          get: /** @deprecated */function get() {
            return false;
          }
          /** @deprecated */
        }, {
          key: "showIndicativeLines",
          get: function get() {
            return false;
          }
          /** @deprecated */
        }, {
          key: "showSubStructures",
          get: function get() {
            return false;
          }
        }], [{
          key: "use4KTex",
          get: function get() {
            return false;
          }
        }]);
        return UIProxy;
      }(Proxy), _class2.DEEP_DIST = 1000, _class2.WPS_CULLING_VALVE = 0.01, _class2.FOV_CULLING_VALVE = 0.1, _class2.NameLabelAtt = [0.02, 0.2, 5, 10], _class2.IndicativeLineAtt = [0.1, 0.2, 0.8, 1.5], _class2.GroupLineStrength = 63 / 255, _class2.LabelColor = {
        // NAME:new Color(54)
        DEFAULT: LBL_WHITE,
        // 默认颜色
        SUN: LBL_ORANGE,
        // 太阳颜色
        PLANET: LBL_GREEN,
        // 行星名称颜色
        SATELLITE: LBL_GRAY,
        // 卫星名称颜色
        DWARF: LBL_BROWN,
        // 矮行星名称颜色
        MINOR: LBL_GRAY,
        // 小行星名称颜色
        BELTS: LBL_BROWN,
        // 小行星带名称颜色
        COMET: LBL_PURPLE,
        // 彗星名称颜色
        STAR: LBL_CYAN,
        // 恒星名称颜色
        STARS: LBL_WHITE,
        // 星群名称颜色
        CONST: LBL_BLUE,
        // 星座名称颜色
        CLUSTER: LBL_PURPLE,
        // 星团名称颜色
        NEBULA: LBL_MAGENTA,
        // 星云名称颜色
        GALAXY: LBL_CANT,
        // 星系名称颜色
        COMPANION: LBL_GRAY,
        // 伴星系名称颜色
        LY: LBL_YELLOW,
        // 光年圈颜色
        AU: LBL_ROSE,
        // 天文单位圈颜色
        MILKY: LBL_CYAN,
        // 银河结构颜色
        AXIS: LBL_YELLOW,
        // 天体转轴颜色
        DIAMETER: LBL_WHITE,
        // 天体直径颜色
        BLACKHOLE: LBL_ROSE // 黑洞的名称颜色
      }, _class2.FontSize = {
        MAIN: FONT_BIG,
        // 主要大小
        DEFAULT: FONT_MID,
        // 默认大小
        SECONDARY: FONT_SML,
        // 次要大小
        TITLE: FONT_BIG,
        // 标题大小
        STARS: FONT_SML,
        // 恒星名称
        CLUSTER: FONT_SML,
        // 星团名称
        NEBULA: FONT_SML,
        // 星云名称
        GALAXY: FONT_MID,
        // 星系名称（主）
        DWARF: FONT_SML,
        // 星系名称（矮）
        COORD: FONT_SML,
        // 坐标提示
        EQUATOR: FONT_MID,
        // 赤道提示
        POLAR: FONT_BIG,
        // 极点提示
        RULER: FONT_SML,
        // 尺度提示
        CONST: FONT_BIG,
        // 星座名称（大）
        CONST_SML: FONT_MID,
        // 星座名称（小）
        CONST_SML_AREA_VALUE: 800,
        // 星座名称大小区分阈值
        GROUP: FONT_MID // 群集大小
      }, _class2)) || _class$1);
      var Labels = UI.Labels,
        FULL_SCREEN = UI.FULL_SCREEN,
        LENS_PARAMS = UI.LENS_PARAMS,
        LANGUAGE = UI.LANGUAGE;
      var ui = exports('u', UIProxy.instance);
      cclegacy._RF.pop();
      var _class$2, _class2$1;
      cclegacy._RF.push({}, "009b6JIHkJBZ5Agt31wjDBK", "gizmos-proxy", undefined);
      var singleton$2 = singleton$b;
      var GizmosProxy = exports('G', singleton$2(_class$2 = (_class2$1 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(GizmosProxy, _Proxy);
        function GizmosProxy() {
          var _this;
          _this = _Proxy.call(this) || this;
          _this._show_grids = true;
          _this._show_rulers = true;
          _this._show_tracks = true;
          _this._show_scopes = true;
          _this._show_structs = true;
          _this._show_lines = true;
          _this._show_target = true;
          _this._show_celestial = false;
          _this._use_equatorial = false;
          _this._show_ecliptic = false;
          _this._show_galactic = false;
          _this._show_horizontal = false;
          _this._coord_grids = true;
          _this._coord_equator = false;
          _this._coord_axis = true;
          _this._coord_polar = true;
          _this._line_strength = 1;
          return _this;
        }

        // 指示相关
        var _proto = GizmosProxy.prototype;
        // 网格和道线强度
        _proto.getStateByName = function getStateByName(name) {
          switch (name) {
            case '网格':
              return this.showGrids;
            case '尺度':
              return this.showRulers;
            case '星轨':
              return this.showTracks;
            case '范围':
              return this.showScopes;
            case '结构':
              return this.showStructs;
            case '引线':
              return this.showLines;
            case '目标':
              return this.showTarget;
            case '天球':
              return this.showEquatorial;
            case '时角':
              return this.showHourAngle;
            case '黄道':
              return this.showEcliptic;
            case '银道':
              return this.showGalactic;
            case '地平':
              return this.showHorizontal;
            case '道线':
              return this.showCoordEquator;
            case '轴线':
              return this.showCoordAxis;
            case '极点':
              return this.showCoordPolar;
            default:
              return false;
          }
        }

        // 网格颜色
        ;

        _proto.init = function init() {
          var _this2 = this;
          this.on(Gizmos.GRIDS, function (arg) {
            return _this2._show_grids = arg;
          });
          this.on(Gizmos.RULERS, function (arg) {
            return _this2._show_rulers = arg;
          });
          this.on(Gizmos.TRACKS, function (arg) {
            return _this2._show_tracks = arg;
          });
          this.on(Gizmos.SCOPES, function (arg) {
            return _this2._show_scopes = arg;
          });
          this.on(Gizmos.STRUCTS, function (arg) {
            return _this2._show_structs = arg;
          });
          this.on(Gizmos.LINES, function (arg) {
            return _this2._show_lines = arg;
          });
          this.on(Gizmos.TARGET, function (arg) {
            return _this2._show_target = arg;
          });
          this.on(Coord.EQUATORIAL, function (arg) {
            _this2._show_celestial = arg;
            _this2._use_equatorial = true;
          });
          this.on(Coord.HOUR_ANGLE, function (arg) {
            _this2._show_celestial = arg;
            _this2._use_equatorial = false;
          });
          this.on(Coord.ECLIPTIC, function (arg) {
            return _this2._show_ecliptic = arg;
          });
          this.on(Coord.GALACTIC, function (arg) {
            return _this2._show_galactic = arg;
          });
          this.on(Coord.HORIZONTAL, function (arg) {
            return _this2._show_horizontal = arg;
          });
          this.on(Coord.EQUATOR, function (arg) {
            _this2._coord_equator = arg;
            _this2._coord_grids = !arg;
          });
          this.on(Coord.AXIS, function (arg) {
            return _this2._coord_axis = arg;
          });
          this.on(Coord.POLAR, function (arg) {
            return _this2._coord_polar = arg;
          });
          this.on(Coord.STRENGTH, function (deg) {
            return _this2._line_strength = deg * 2;
          });
        };
        _createClass(GizmosProxy, [{
          key: "showGrids",
          get: function get() {
            return this._show_grids;
          } // 显示网格（渐变、无限缩放的等距网格等）
        }, {
          key: "showRulers",
          get: function get() {
            return this._show_rulers;
          } // 显示尺度（公里、天文单位、光年刻度圈等）
        }, {
          key: "showTracks",
          get: function get() {
            return this._show_tracks;
          } // 显示星轨（行星、卫星、彗星、太阳系轨迹）
        }, {
          key: "showScopes",
          get: function get() {
            return this._show_scopes;
          } // 显示范围（太阳系、银河系、星系群范围等）
        }, {
          key: "showStructs",
          get: function get() {
            return this._show_structs;
          } // 显示结构（转轴、旋臂、星系群、星系团等）
        }, {
          key: "showLines",
          get: function get() {
            return this._show_lines;
          } // 显示引线（恒星、星云、星团、星系等）
        }, {
          key: "showTarget",
          get: function get() {
            return this._show_target;
          } // 显示目标（靶圈、距离等）

          // 坐标类型
        }, {
          key: "showEquatorial",
          get: function get() {
            return this._show_celestial && this._use_equatorial;
          } // 天球坐标系
        }, {
          key: "showHourAngle",
          get: function get() {
            return this._show_celestial && !this._use_equatorial;
          } // 时角坐标系
        }, {
          key: "showEcliptic",
          get: function get() {
            return this._show_ecliptic;
          } // 黄道坐标系
        }, {
          key: "showGalactic",
          get: function get() {
            return this._show_galactic;
          } // 银道坐标系
        }, {
          key: "showHorizontal",
          get: function get() {
            return this._show_horizontal;
          } // 地平坐标系

          // 坐标细节
        }, {
          key: "showCoordGrids",
          get: function get() {
            return this._coord_grids;
          } // 坐标网格
        }, {
          key: "showCoordEquator",
          get: function get() {
            return this._coord_equator;
          } // 天赤道/黄道/银道/地平线
        }, {
          key: "showCoordAxis",
          get: function get() {
            return this._coord_axis;
          } // 天轴/黄轴/银轴
        }, {
          key: "showCoordPolar",
          get: function get() {
            return this._coord_polar;
          } // 天/黄道/银道南北极/天顶
        }, {
          key: "lineStrength",
          get: function get() {
            return this._line_strength;
          }
        }]);
        return GizmosProxy;
      }(Proxy), _class2$1.GridsColor = {
        SATELLITE: new Color(127, 127, 127, 191),
        // 卫星系统
        PLANETARY: new Color(0, 255, 127, 191),
        // 行星系统
        SOLAR: new Color(255, 127, 0, 191),
        // 恒星系统
        GALACTIC: new Color(0, 255, 255, 191) // 星际系统
      }, _class2$1.TrackColors = {
        PLANET: new Color(0, 255, 127, 127),
        // 行星轨迹
        SATELLITE: new Color(191, 191, 191, 127),
        // 卫星轨迹
        DWARF: new Color(191, 127, 63, 191),
        // 矮行星轨迹
        MINOR: new Color(127, 127, 127, 191),
        // 小行星轨迹
        COMET: new Color(191, 127, 255, 191),
        // 彗星轨迹
        SOLAR: new Color(255, 255, 0, 191) // 太阳系轨迹
      }, _class2$1.LineColor = {
        KILO_MT_DK: new Color(0, 127, 255, 127),
        // 公里数圈（卫星）
        KILO_METER: new Color(63, 153, 153, 127),
        // 公里数圈（行星）
        ASTRO_UNIT: new Color(255, 127, 127, 127),
        // 天文单位圈
        LIGHT_YEAR: new Color(255, 255, 127, 127),
        // 光年圈
        CONST_LINES: new Color(0, 191, 255, 255),
        // 星座连线
        EQUATORIAL: new Color(63, 63, 255, 191),
        // 天赤道
        ECLIPTIC: new Color(255, 63, 0, 191),
        // 黄道线
        GALACTIC: new Color(0, 255, 255, 191),
        // 银道线
        HORIZONTAL: new Color(0, 255, 127, 191),
        // 地平线
        STARS: new Color(0, 255, 255, 127),
        // 恒星指示线（Level1）
        IND_TARGET: new Color(255, 32, 32, 255),
        // 目标指示线
        IND_SOLAR: new Color(255, 191, 0, 255),
        // 太阳系指示线
        CLUSTER: new Color(158, 158, 255, 111),
        // 星团指示线
        NEBULA: new Color(255, 127, 255, 111),
        // 星云指示线
        COMPANION: new Color(127, 127, 127, 191),
        // 陪伴群星系指示线（都是矮星系）
        LocalGG: new Color(159, 255, 159, 127),
        // 本星系群
        VirgoSC: new Color(255, 159, 255, 127),
        // 室女座超星系团
        Laniakea: new Color(255, 191, 159, 127),
        // 拉尼亚凯亚超星系团
        Observable: new Color(159, 159, 255, 127),
        // 可观测宇宙
        LOCAL_AXIS: new Color(255, 255, 0, 255),
        // 地轴和箭头 
        LOCAL_DIAM: new Color(255, 255, 255, 255) // 天体直径
      }, _class2$1.TrackAtt = [0.01, 0.05, 20, 30], _class2$1.CoordColor = {
        CELESTIAL: new Color(127, 127, 255, 127),
        // 天球坐标
        ECLIPTIC: new Color(255, 127, 0, 127),
        // 黄道坐标
        GALACTIC: new Color(0, 255, 255, 127),
        // 银道坐标
        HORIZONTAL: new Color(0, 255, 127, 127) // 地平坐标
      }, _class2$1.RULER_IGNORES = [-7, 11], _class2$1.ScopeColor = {
        Solar: new Color(255, 255, 0, 255),
        // 狭义太阳系
        Helio: new Color(255, 127, 0, 255),
        // 广义太阳系
        MilkyWay: new Color(63, 255, 255, 255),
        // 银河系
        LocalGG: new Color(63, 255, 63, 255),
        // 本星系群
        VirgoSC: new Color(255, 63, 255, 255),
        // 室女座超星系团
        Laniakea: new Color(255, 127, 63, 255),
        // 拉尼亚凯亚超星系团
        Observable: new Color(63, 63, 255, 255) // 可观测宇宙
      }, _class2$1.ScopeAtt = [0.17, 0.3, 0.8, 1], _class2$1.Segments = {
        CIRCLE: 128,
        // 圆环段数
        ELLIPSE: 256,
        // 椭圆段数
        CYLINDER: 32,
        // 圆柱段数
        LINE: 8,
        // 渐线段数
        ARC: 64 // 圆弧段数
      }, _class2$1)) || _class$2);
      var Gizmos = UI.Gizmos,
        Coord = UI.Coord;
      var gizmos = exports('m', GizmosProxy.instance);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "d4077MhivBEiLFvOdHR7yTu", "helpers", undefined);
      function setLayer(node, layer) {
        node.layer = 1 << (isNum(layer) ? layer : Layers.nameToLayer(layer));
        return node;
      }
      function setLabelStyle(label, style, add1, add2) {
        label.alwaysInCanvas = false;
        label.locate = '中心';
        label.scalable = false;
        label.color = LabelColor.DEFAULT;
        label.fontSize = FontSize.DEFAULT;
        setLayer(label.node, LAYER_UI_2D);
        label.bold = label.italic = false;
        label["char"] = true;
        label.perspective = false;
        label.setUIOffset(0, 0);
        label.setOffset(0, 0, 0);
        label.node.setScale(Vec3.ONE);
        switch (style) {
          case 'stars':
          case 'cluster':
          case 'nebula':
            {
              label.color = LabelColor[style.toUpperCase()];
              label.fontSize = FontSize[style.toUpperCase()];
              label.locate = add1 ? '上标' : '下标';
              label.setOffset(0, add1 ? 0.6 : -0.6, 0);
              label.scalable = true;
              setLayer(label.node, LAYER_UI_BG);
            }
            break;
          case 'planetary':
          case 'solar':
            {
              var _type = add1;
              label.color = LabelColor[_type.toUpperCase()];
              label.fontSize = FontSize.DEFAULT;
              if (['sun', 'planet', 'satellite'].contains(_type)) {
                label.alwaysInCanvas = true;
              }
              if (_type !== 'belts') {
                label.setOffset(0, 0.55, 0);
              }
              if (['sun', 'star', 'planet'].excludes(_type)) {
                label.fontSize = FontSize.SECONDARY;
              }
              label.locate = add1 === 'comet' ? '上右' : '上标';
              label.scalable = true;
            }
            break;
          case 'const':
            {
              label.color = LabelColor.CONST;
              label.fontSize = add1 ? FontSize.CONST : FontSize.CONST_SML;
              setLayer(label.node, LAYER_UI_BG);
            }
            break;
          case 'milky':
            {
              label.color = LabelColor.MILKY;
              label.fontSize = add1 ? FontSize.MAIN : FontSize.DEFAULT;
              label.scalable = true;
              label.perspective = true;
            }
            break;
          case 'struct':
            {
              switch (add1) {
                // case 'arms': label.color = LineColor.Observable; break; // TODO
                case 'subgroups':
                  label.color = LineColor.LocalGG;
                  break;
                case 'groups':
                  label.color = LineColor.VirgoSC;
                  break;
                case 'clusters':
                  label.color = LineColor.Laniakea;
                  label.fontSize = FontSize.MAIN;
                  break;
                case 'great-walls':
                  label.color = LineColor.Observable;
                  label.fontSize = FontSize.MAIN;
                  break;
              }
              label.fontSize = add1 === 'helios' ? FontSize.DEFAULT : FontSize.MAIN;
              label.scalable = label.perspective = true;
            }
            break;
          case 'coord':
            {
              label.fontSize = FontSize.COORD;
              setLayer(label.node, LAYER_UI_BG);
            }
            break;
          case 'galaxy':
            {
              label.color = add1 === 'companion' ? LabelColor.COMPANION : LabelColor.GALAXY;
              label.fontSize = add1 === 'center' ? FontSize.GALAXY : FontSize.DWARF;
              label.locate = add2 ? '上标' : '下标';
              label.setOffset(0, add2 ? 0.7 : -0.7, 0);
              label.scalable = true;
            }
            break;
          case 'ruler':
            {
              switch (add1) {
                case 'equator':
                  {
                    label.fontSize = FontSize.EQUATOR;
                    label.bold = true;
                    setLayer(label.node, LAYER_UI_BG);
                  }
                  break;
                case 'polar':
                  {
                    label.fontSize = FontSize.POLAR;
                    label.bold = true;
                    setLayer(label.node, LAYER_UI_BG);
                  }
                  break;
                case 'unit':
                  {
                    label.fontSize = FontSize.RULER;
                    label.color = LineColor.LIGHT_YEAR;
                  }
                  break;
                case 'title':
                  {
                    label.fontSize = FontSize.TITLE;
                    label.scalable = label.perspective = true;
                  }
                  break;
                default:
                  {
                    label.fontSize = FontSize.DEFAULT;
                    label.scalable = label.perspective = true;
                  }
                  break;
              }
            }
            break;
        }
        return label;
      }

      // 单位显示
      function loadUnitAndColorI18n(label, bit, solar, planetary) {
        label.key = 'units@b' + bit;
        label.color = bit >= 0 ? LBL_YELLOW : solar ? LBL_ROSE : planetary ? LBL_NAVY : LBL_BLUE;
        return label;
      }

      /**
       * 恒星光谱类型转星表颜色
       * @explain 参见赫罗图
      */
      function setColorBySpectrum(out, arg, name) {
        var res = out != null ? out : new Color();
        var spectrum = isStr(arg) ? StarSpectrum[arg.charAt(0).toUpperCase()] : arg;
        if (!isNum(spectrum)) {
          console.warn('undefined spectrum:', arg, name);
          res.set(Color.WHITE);
          return A;
        }
        spectrum2color(res, spectrum);
        return spectrum;
      }
      function spectrum2color(out, spectrum) {
        var res = out != null ? out : new Color();
        switch (spectrum) {
          case O:
            res.set(63, 127, 255, 255);
            break;
          // 蓝
          case B:
            res.set(127, 191, 255, 255);
            break;
          // 蓝白
          case A:
            res.set(191, 233, 255, 255);
            break;
          // 白偏蓝
          case F:
            res.set(255, 255, 223, 255);
            break;
          // 白偏黄
          case G:
            res.set(255, 239, 127, 255);
            break;
          // 橙黄
          case K:
            res.set(255, 191, 111, 255);
            break;
          // 橙
          case M:
            res.set(255, 127, 111, 255);
            break;
          // 红
          case R:
            res.set(255, 127, 47, 255);
            break;
          case C:
          case S:
            res.set(255, 47, 47, 255);
            break;
        }
        return res;
      }

      /**
       * 新建指定名称/父节点和层的新节点
      */
      function createNodeAt(name, layer, at, template) {
        var created = template ? instantiate(template) : new Node();
        created.name = name;
        if (at) created.parent = at;
        return setLayer(created, layer);
      }

      /**
       * 粒子参数化
      */
      function setParticles(target, args, container) {
        var num = args.num,
          sizes = args.sizes,
          colors = args.colors,
          color = args.color,
          radius = args.radius,
          thickness = args.thickness,
          random = args.random,
          position = args.position,
          scale = args.scale,
          euler = args.euler;
        var particles = target.getComponent(ParticleSystem);
        particles.capacity = particles.rateOverTime.constant = num != null ? num : 1000;
        /** @notice 部分移动平台此值过大会导致粒子无法显示 */
        // particles.startLifetime.constant = 99999;
        if (notEmpty(sizes)) {
          particles.startSize3D = false;
          particles.startSizeX.mode = CurveRange.Mode.TwoConstants;
          var min = sizes[0],
            max = sizes[1];
          particles.startSizeX.constantMin = min;
          particles.startSizeX.constantMax = max;
        }
        if (notEmpty(colors)) {
          particles.startColor.mode = GradientRange.Mode.TwoColors;
          var from = colors[0],
            to = colors[1];
          particles.startColor.colorMin = from;
          particles.startColor.colorMax = to;
        } else {
          particles.startColor.mode = GradientRange.Mode.Color;
          particles.startColor.color = color != null ? color : Color.WHITE;
        }
        var shape = particles.shapeModule;
        shape.radius = radius != null ? radius : 1;
        shape.radiusThickness = thickness != null ? thickness : 0.5;
        shape.randomPositionAmount = random != null ? random : 0;
        shape.position.set(Vec3.copy(v3a, position != null ? position : Vec3.ZERO));
        shape.scale.set(Vec3.copy(v3a, scale != null ? scale : Vec3.ONE));
        shape.rotation.set(Vec3.copy(v3a, euler != null ? euler : Vec3.ZERO));
        if (container) target.parent = container;
        if (!particles.isPlaying) particles.play();
        return target;
      }

      /**
       * 模型参数化
      */
      function setClouds(target, args, container) {
        var _ref = args,
          position = _ref.position,
          scale = _ref.scale,
          euler = _ref.euler,
          worldPosition = _ref.worldPosition;
        target.setPosition(Vec3.copy(v3a, position != null ? position : Vec3.ZERO));
        target.setScale(Vec3.copy(v3a, scale != null ? scale : Vec3.ONE));
        target.setRotationFromEuler(Vec3.copy(v3a, euler != null ? euler : Vec3.ZERO));
        if (container) target.parent = container;
        if (worldPosition) target.setWorldPosition(Vec3.copy(v3a, worldPosition));
        return target;
      }
      function preloadCelTexture(name, key, duplex, type) {
        if (duplex === void 0) {
          duplex = false;
        }
        if (type === void 0) {
          type = 'jpg';
        }
        var low = name.toLowerCase();
        var base = UIProxy.use4KTex ? Res.Textures.CELESTIAL_4K : Res.Textures.CELESTIAL;
        var prefix = base + "/" + low + "-" + key;
        if (duplex) {
          core.res.loadRemoteTexture(prefix + '-0', type);
          core.res.loadRemoteTexture(prefix + '-1', type);
        } else {
          core.res.loadRemoteTexture(prefix, type);
        }
      }
      function loadCelTexture(_x, _x2, _x3, _x4, _x5, _x6) {
        return _loadCelTexture.apply(this, arguments);
      }
      function _loadCelTexture() {
        _loadCelTexture = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(mat, name, prop, key, duplex, type) {
          var low, base, prefix;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (duplex === void 0) {
                  duplex = false;
                }
                if (type === void 0) {
                  type = 'jpg';
                }
                low = name.toLowerCase();
                base = UIProxy.use4KTex ? Res.Textures.CELESTIAL_4K : Res.Textures.CELESTIAL;
                prefix = base + "/" + low + "-" + key;
                if (!duplex) {
                  _context.next = 20;
                  break;
                }
                _context.t0 = mat;
                _context.t1 = prop + '0';
                _context.next = 10;
                return core.res.loadRemoteTexture(prefix + '-0', type);
              case 10:
                _context.t2 = _context.sent;
                _context.t0.setProperty.call(_context.t0, _context.t1, _context.t2);
                _context.t3 = mat;
                _context.t4 = prop + '1';
                _context.next = 16;
                return core.res.loadRemoteTexture(prefix + '-1', type);
              case 16:
                _context.t5 = _context.sent;
                _context.t3.setProperty.call(_context.t3, _context.t4, _context.t5);
                _context.next = 26;
                break;
              case 20:
                _context.t6 = mat;
                _context.t7 = prop;
                _context.next = 24;
                return core.res.loadRemoteTexture(prefix, type);
              case 24:
                _context.t8 = _context.sent;
                _context.t6.setProperty.call(_context.t6, _context.t7, _context.t8);
              case 26:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return _loadCelTexture.apply(this, arguments);
      }
      function setMatScaleVec3(mat, prop, num) {
        mat.setProperty(prop, v3a.set(num, num, num));
      }
      function setMatColor(mat, prop, color, alpha) {
        var _alpha;
        if (alpha === void 0) {
          alpha = 1;
        }
        Color.fromHEX(col, color != null ? color : white);
        col.a = ((_alpha = alpha) != null ? _alpha : 1) * 255;
        mat.setProperty(prop, col);
      }

      // 数字文字每三位加逗号
      function toThousands(nstr) {
        var res = '';
        while (nstr.length > 3) {
          res = ',' + nstr.slice(-3) + res;
          nstr = nstr.slice(0, nstr.length - 3);
        }
        if (nstr) {
          res = nstr + res;
        }
        return res;
      }
      function loadTransformType(info) {
        var into = info.into,
          _info$from = info.from,
          fromName = _info$from.node.name,
          cat = _info$from.cat,
          intoName = info.name;
        var toStellar = interstellar.contains(into) && intoName != 'Sun';
        var fromStellar = interstellar.contains(cat) && fromName != 'Sun';
        if (toStellar || fromStellar) {
          info.transEnum = toStellar ? fromStellar ? TransformEnum.SPC_2_SPC : TransformEnum.SUN_2_SPC : TransformEnum.SPC_2_SUN;
          // const lastRefer = (info.from as ICelestialSpecific).refer ?? null;
          info.stellar = {
            cat: into,
            name: fromName,
            farthest: info.from.farthest,
            refers: {
              from: null,
              to: null,
              temp: null
            }
          };
          return;
        }
        if (fromName === 'Sun') {
          info.transEnum = into === 'satellite' ? TransformEnum.SUN_2_SAT : TransformEnum.SUN_2_PLN;
        } else if (cat === 'satellite') {
          if (info.name === 'Sun') info.transEnum = TransformEnum.SAT_2_SUN;else if (into === 'satellite') info.transEnum = TransformEnum.SAT_2_SAT;else info.transEnum = TransformEnum.SAT_2_PLN;
        } else {
          if (info.name === 'Sun') info.transEnum = TransformEnum.PLN_2_SUN;else if (into === 'satellite') info.transEnum = TransformEnum.PLN_2_SAT;else info.transEnum = TransformEnum.PLN_2_PLN;
        }
      }
      function calcTransformParams(info, sunRefer) {
        var transEnum = info.transEnum,
          target = info.target,
          mediator = info.mediator,
          from = info.from,
          stellar = info.stellar;
        var to = mediator != null ? mediator : target;
        Vec3.subtract(v3a, from.node.worldPosition, to.node.worldPosition);
        var _v3a$normalize = v3a.normalize(),
          x = _v3a$normalize.x,
          y = _v3a$normalize.y,
          z = _v3a$normalize.z;
        var az = Math.parseDegree(Math.atan2(x, z));
        var sign = y >= -0.1 ? 1 : -1;
        if (TRANS_INTER.contains(transEnum)) {
          switch (transEnum) {
            case TransformEnum.SUN_2_SPC:
              {
                stellar.refers.from = sunRefer;
                stellar.refers.to = to == null ? void 0 : to.refer;
                return [to.farthest, az, sign];
              }
            case TransformEnum.SPC_2_SUN:
              {
                stellar.refers.from = from == null ? void 0 : from.refer;
                stellar.refers.to = sunRefer;
                return [from.farthest, az, sign];
              }
            case TransformEnum.SPC_2_SPC:
              {
                stellar.refers.from = info.from.refer;
                stellar.refers.to = stellar.refers.temp;
                // try this will be better?
                // Vec3.subtract(v3a, stellar.refers.from.worldPosition, stellar.refers.to.worldPosition);
                // const { x, y, z } = v3a.normalize();
                // const az = Math.parseDegree(Math.atan2(x, z));
                // const sign = y >= -0.1 ? 1 : -1;
                // end try
                return [Math.max(to.farthest, stellar.farthest), az, sign];
              }
            default:
              console.error("unhandled transEnum", transEnum);
          }
        } else {
          switch (transEnum) {
            case TransformEnum.SUN_2_PLN:
              return [to.panorama, az, sign];
            case TransformEnum.SUN_2_SAT:
              return [to.belong.panorama, az, sign];
            case TransformEnum.PLN_2_SUN:
              return [from.panorama + LN1_3, az, sign];
            case TransformEnum.SAT_2_SUN:
              return [from.belong.panorama + LN1_3, az, sign];
            case TransformEnum.PLN_2_SAT:
              return [to.panorama, az, sign];
            case TransformEnum.SAT_2_PLN:
              return [from.panorama + LN1_3, az, sign];
            case TransformEnum.SAT_2_SAT:
              return [Math.max(from.panorama, to.panorama), az, sign];
            case TransformEnum.PLN_2_PLN:
              return [Math.max(from.panorama, to.panorama), az, sign];
            default:
              console.error("unhandled transEnum", transEnum);
          }
        }
      }
      function changeFrame(sprite, sheet, key, use, separator) {
        if (separator === void 0) {
          separator = '-';
        }
        var tag = separator + key;
        var name = sprite.spriteFrame.name.replace(tag, '') + (use ? tag : '');
        if (name === sprite.spriteFrame.name) return sprite;
        sprite.spriteFrame = core.res.getSheetFrame(sheet, name);
        return sprite;
      }
      function updateSwitcherLayout(node) {
        var _node$getComponent, _node$getComponent2, _node$getComponent3;
        (_node$getComponent = node.getComponent(Layout)) == null || _node$getComponent.updateLayout();
        (_node$getComponent2 = node.getComponent(Widget)) == null || _node$getComponent2.updateAlignment();
        (_node$getComponent3 = node.getComponent(TweenSwitcher)) == null || _node$getComponent3.resetOriginPosition();
      }
      function getI18nConfig(key) {
        var lower = key.toLowerCase();
        if (lower.includes('@')) {
          var _lower$split = lower.split('@'),
            about = _lower$split[0],
            item = _lower$split[1];
          var configs = core.res.getConfigItem(Res.Configs.I18N, about);
          return (configs != null ? configs : {})[item];
        } else {
          return core.res.getConfigItem(Res.Configs.I18N, lower);
        }
      }
      function getPresetPlanetMatInst(name) {
        switch (name) {
          case 'Mercury':
            return PlanetPresets.TERRESTRIAL;
          case 'Venus':
            return PlanetPresets.TERRESTRIAL;
          case 'Earth':
            return PlanetPresets.EARTH;
          case 'Mars':
            return PlanetPresets.TERRESTRIAL;
          case 'Jupiter':
            return PlanetPresets.WINDY;
          case 'Saturn':
            return PlanetPresets.GIANT;
          case 'Neptune':
            return PlanetPresets.WINDY;
          case 'Uranus':
            return PlanetPresets.GIANT;
        }
      }
      function setStarAppearance(star) {
        var _star$config = star.config,
          color = _star$config.color,
          noisy = _star$config.noisy,
          halo = _star$config.halo,
          prom = _star$config.prom,
          corona = _star$config.corona,
          disk = _star$config.disk,
          diskAtt = _star$config.diskAtt;
        var _color$split = color.split(','),
          _main = _color$split[0],
          _spots = _color$split[1],
          _rim = _color$split[2];
        var _noisy$split = noisy.split(','),
          _strong = _noisy$split[0],
          _density = _noisy$split[1],
          _spot = _noisy$split[2],
          _speed = _noisy$split[3];
        var _halo$split = halo.split(','),
          _halo = _halo$split[0],
          _hScale = _halo$split[1],
          _hDensity = _halo$split[2],
          _hSpeed = _halo$split[3];
        var _prom$split = prom.split(','),
          _prom = _prom$split[0],
          _pScale = _prom$split[1];
        var _corona$split = corona.split(','),
          _corona = _corona$split[0],
          _cScale = _corona$split[1];
        star.setSurfaceColors(Color.fromHEX(Main, _main != null ? _main : white), Color.fromHEX(Spots, _spots != null ? _spots : white), Color.fromHEX(Rim, _rim != null ? _rim : white));
        star.setSurfaceNoisySpeeds(+_strong, +_density, +_spot, +_speed);
        star.setHalo(Color.fromHEX(Halo, _halo != null ? _halo : white), +_hScale, +_hDensity, +_hSpeed);
        star.setProminence(Color.fromHEX(Prom, _prom != null ? _prom : white), +_pScale);
        star.setCoronas(Color.fromHEX(Corona, _corona != null ? _corona : white), +_cScale);
        if (!!disk) {
          var _disk$split = disk.split(','),
            _disk = _disk$split[0],
            _dScale = _disk$split[1],
            _dAlpha = _disk$split[2];
          Color.fromHEX(Start, _disk != null ? _disk : white);
          if (isNum(+_dAlpha)) Start.a = +_dAlpha * 255;
          star.useDiskParticles(true, Start, +_dScale, diskAtt);
        } else star.useDiskParticles(false);
      }
      function setBlackholeAppearance(bkh) {
        var _bkh$config = bkh.config,
          _disk = _bkh$config.disk,
          _jet = _bkh$config.jet,
          _star = _bkh$config.star,
          _vtx = _bkh$config.vortex;
        var jets = bkh.jets,
          star = bkh.star,
          vortex = bkh.vortex;
        var colors = _disk.colors,
          att = _disk.att,
          bri = _disk.bri,
          cst = _disk.cst,
          dens = _disk.dens,
          flow = _disk.flow;
        var _ref2 = colors != null ? colors : [white, white],
          dcs = _ref2[0],
          dcf = _ref2[1];
        var _ref3 = att != null ? att : [0, 0.15, 0.5, 1],
          ai0 = _ref3[0],
          ai1 = _ref3[1],
          ao1 = _ref3[2],
          ao0 = _ref3[3];
        var _ref4 = dens != null ? dens : [1, 1],
          dT = _ref4[0],
          dR = _ref4[1];
        var _ref5 = flow != null ? flow : [4, 10],
          fT = _ref5[0],
          fR = _ref5[1];
        bkh.diskColorStart = Color.fromHEX(Start, dcs != null ? dcs : white);
        bkh.diskColorFade = Color.fromHEX(Fade, dcf != null ? dcf : white);
        bkh.diskAttenuation.set(ai0, ai1, ao1, ao0);
        bkh.diskBrightness = Math.clamp(bri, 0, 3);
        bkh.diskContrast = Math.clamp01(cst);
        bkh.diskDensity.set(dT, dR);
        bkh.diskFlowSpeed.set(fT, fR);
        bkh.updateDisks();
        if (_jet) {
          jets.active = true;
          var _colors = _jet.colors,
            _flow = _jet.flow,
            scale = _jet.scale;
          var _ref6 = _colors != null ? _colors : [white, white],
            jcs = _ref6[0],
            jcf = _ref6[1];
          var _ref7 = _flow != null ? _flow : [2, 5],
            fjT = _ref7[0],
            fjR = _ref7[1];
          var _ref8 = scale != null ? scale : [1, 1],
            sjx = _ref8[0],
            sjy = _ref8[1];
          bkh.jetColorStart = Color.fromHEX(Start, jcs != null ? jcs : white);
          bkh.jetColorFade = Color.fromHEX(Fade, jcf != null ? jcf : white);
          bkh.jetCylinderScale.set(sjx, sjy);
          bkh.jetFlowSpeed.set(fjT, fjR);
        } else jets.active = false;
        bkh.updateJets();
        if (_star) {
          star.node.active = true;
          var color = _star.color,
            noisy = _star.noisy,
            halo = _star.halo,
            prom = _star.prom,
            corona = _star.corona,
            diam = _star.diam;
          var _color$split2 = color.split(','),
            _main = _color$split2[0],
            _spots = _color$split2[1],
            _rim = _color$split2[2];
          var _noisy$split2 = noisy.split(','),
            _strong = _noisy$split2[0],
            _density = _noisy$split2[1],
            _spot = _noisy$split2[2],
            _speed = _noisy$split2[3];
          var _halo$split2 = halo.split(','),
            _halo = _halo$split2[0],
            _hScale = _halo$split2[1],
            _hDensity = _halo$split2[2],
            _hSpeed = _halo$split2[3];
          var _prom$split2 = prom.split(','),
            _prom = _prom$split2[0],
            _pScale = _prom$split2[1];
          var _corona$split2 = corona.split(','),
            _corona = _corona$split2[0],
            _cScale = _corona$split2[1];
          star.setSurfaceColors(Color.fromHEX(Main, _main != null ? _main : white), Color.fromHEX(Spots, _spots != null ? _spots : white), Color.fromHEX(Rim, _rim != null ? _rim : white));
          star.setSurfaceNoisySpeeds(+_strong, +_density, +_spot, +_speed);
          star.setHalo(Color.fromHEX(Halo, _halo != null ? _halo : white), +_hScale, +_hDensity, +_hSpeed);
          star.setProminence(Color.fromHEX(Prom, _prom != null ? _prom : white), +_pScale);
          star.setCoronas(Color.fromHEX(Corona, _corona != null ? _corona : white), +_cScale);
          star.loadAsCompanion(bkh.viewer, diam);
          star.node.setPosition(0, 0, 0.85 * diam);
        } else star.node.active = false;
        if (_vtx) {
          vortex.active = true;
          var _colors2 = _vtx.colors,
            _att = _vtx.att,
            _bri = _vtx.bri,
            _cst = _vtx.cst,
            speed = _vtx.speed;
          var _ref9 = _colors2 != null ? _colors2 : [white, white],
            vcs = _ref9[0],
            vcf = _ref9[1];
          var _ref10 = _att != null ? _att : [0, 0.15, 0.5, 1],
            bi0 = _ref10[0],
            bi1 = _ref10[1],
            bo1 = _ref10[2],
            bo0 = _ref10[3];
          bkh.vortexColorStar = Color.fromHEX(Start, vcs != null ? vcs : white);
          bkh.vortexColorDisk = Color.fromHEX(Fade, vcf != null ? vcf : white);
          bkh.vortexAttenuation.set(bi0, bi1, bo1, bo0);
          bkh.vortexBrightness = _bri;
          bkh.vortexContrast = Math.clamp01(_cst);
          bkh.vortexFlowSpeed = speed;
        } else vortex.active = false;
        bkh.updateVortexStar();
      }
      var PlanetPresets = Res.Materials.PlanetPresets;
      var LN1_3 = -0.477;
      var FontSize = UIProxy.FontSize,
        LabelColor = UIProxy.LabelColor;
      var LineColor = GizmosProxy.LineColor;
      var O = StarSpectrum.O,
        B = StarSpectrum.B,
        A = StarSpectrum.A,
        F = StarSpectrum.F,
        G = StarSpectrum.G,
        K = StarSpectrum.K,
        M = StarSpectrum.M,
        C = StarSpectrum.C,
        S = StarSpectrum.S,
        R = StarSpectrum.R;
      var col = new Color();
      var v3a = new Vec3();
      var mat4 = new Mat4();
      var white = "#FFFFFF";
      var Main = new Color();
      var Halo = new Color();
      var Prom = new Color();
      var Corona = new Color();
      var Spots = new Color();
      var Rim = new Color();
      var Start = new Color();
      var Fade = new Color();
      var _FF = 255;
      var _7F = 127;
      var _3F = 63;
      var BLK = Color.BLACK.clone();
      var WHT = Color.WHITE.clone();
      var RED = Color.RED.clone();
      var YLW = Color.YELLOW.clone();
      var GRY = Color.GRAY.clone();
      var ORG = new Color(_FF, _7F, 0, _FF);
      var RED_ORG = new Color(_FF, _3F, 0, _FF);
      var LIT_YLW = new Color(_FF, _FF, _7F, _FF);
      cclegacy._RF.pop();
      var _class$3, _class2$2;
      cclegacy._RF.push({}, "9ed9bE5EPRB7r/O7ydDeCBJ", "log-proxy", undefined);
      var singleton$3 = singleton$b;
      var LogProxy = exports('y', singleton$3(_class$3 = (_class2$2 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(LogProxy, _Proxy);
        function LogProxy() {
          return _Proxy.call(this) || this;
        }
        return LogProxy;
      }(Proxy), _class2$2.PRINT_POW10 = false, _class2$2.PRINT_TRANS = false, _class2$2.PRINT_LOAD_TASK = false, _class2$2.PRINT_VISIT = false, _class2$2)) || _class$3);
      var log = LogProxy.instance;
      cclegacy._RF.pop();
      var _class$4, _class2$3;
      cclegacy._RF.push({}, "c6c8bvbTb5HTazfxjPQi6v4", "visit-proxy", undefined);
      var singleton$4 = singleton$b;
      var VisitProxy = exports('V', singleton$4(_class$4 = (_class2$3 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(VisitProxy, _Proxy);
        function VisitProxy() {
          var _this;
          _this = _Proxy.call(this) || this;
          _this._center = null;
          _this._transInfo = {};
          _this._transforming = false;
          _this._point = null;
          return _this;
        }
        var _proto = VisitProxy.prototype;
        _proto.visit = function visit(center) {
          var _this$_transInfo$stel;
          this._center = center;
          // Issue:01 Hack temp存在一定是SPC_2_SPC, Facing结束temp=null
          // 则在Facing的1秒钟内保持refer是from
          if ((_this$_transInfo$stel = this._transInfo.stellar) != null && _this$_transInfo$stel.refers) {
            this._transInfo.stellar.refers.temp = null;
          }
          this.notify(Transform.FACE_OVER);
        };
        _proto.onClickVisit = function onClickVisit(name, into, point) {
          var _this$_center;
          if (point === void 0) {
            point = null;
          }
          if (name === ((_this$_center = this._center) == null || (_this$_center = _this$_center.node) == null ? void 0 : _this$_center.name)) return;else {
            this._point = point;
            this._transforming = true;
            this._transInfo.name = name;
            this._transInfo.into = into;
            this._transInfo.from = this._center;
            this._transInfo.target = this._transInfo.mediator = null;
            this._transInfo.stellar = null;
            loadTransformType(this._transInfo);
            if (LogProxy.PRINT_TRANS) {
              console.info('[Trans]:', TransformEnum[this._transInfo.transEnum], into, name);
            }
            this.notify(Transform.ZOOM_START);
          }
        };
        _proto.init = function init() {
          this.on(UI.VISIT, this.onClickVisit);
          this.on(Transform.VISIT_OVER, this._onVisitOver, 99);
        };
        _proto._onVisitOver = function _onVisitOver() {
          this._transforming = false;
          if (this._transInfo.stellar) {
            this._transInfo.stellar.refers.from = this._transInfo.stellar.refers.to;
          }
        };
        _createClass(VisitProxy, [{
          key: "center",
          get: function get() {
            return this._center;
          }
        }, {
          key: "centerName",
          get: function get() {
            var _ref, _this$_center2;
            return (_ref = (_this$_center2 = this._center) == null || (_this$_center2 = _this$_center2.node) == null ? void 0 : _this$_center2.name) != null ? _ref : null;
          }
        }, {
          key: "inType",
          get: function get() {
            var _ref2, _this$_center3;
            return (_ref2 = (_this$_center3 = this._center) == null ? void 0 : _this$_center3.cat) != null ? _ref2 : null;
          }
        }, {
          key: "transInfo",
          get: function get() {
            return this._transInfo;
          }
        }, {
          key: "transforming",
          get: function get() {
            return this._transforming;
          }
        }, {
          key: "point",
          get: function get() {
            return this._point;
          }
        }, {
          key: "inSolar",
          get: function get() {
            return this.centerName === 'Sun';
          }
        }, {
          key: "inPlanetary",
          get: function get() {
            return ['planet', 'dwarf', 'minor', 'comet', 'belts'].contains(this.inType);
          }
        }, {
          key: "inPlanet",
          get: function get() {
            return this.inType === 'planet';
          }
        }, {
          key: "inComet",
          get: function get() {
            return this.inType === 'comet';
          }
        }, {
          key: "inSatellite",
          get: function get() {
            return this.inType === 'satellite';
          }
        }, {
          key: "inStellar",
          get: function get() {
            return interstellar.contains(this.inType) && this.centerName !== 'Sun';
          }
        }, {
          key: "inStar",
          get: function get() {
            return this.inType === 'star' && this.centerName !== 'Sun';
          }
        }, {
          key: "inCluster",
          get: function get() {
            return this.inType === 'cluster';
          }
        }, {
          key: "inNebula",
          get: function get() {
            return this.inType === 'nebula';
          }
        }, {
          key: "inLocalGalactic",
          get: function get() {
            var _this$center;
            return this.inType === 'galaxy' && ((_this$center = this.center) == null || (_this$center = _this$center.node) == null || (_this$center = _this$center.parent) == null ? void 0 : _this$center.name) === Local.GALAXIES;
          }
        }, {
          key: "inVirgoGalactic",
          get: function get() {
            var _this$center2;
            return this.inType === 'galaxy' && ((_this$center2 = this.center) == null || (_this$center2 = _this$center2.node) == null || (_this$center2 = _this$center2.parent) == null ? void 0 : _this$center2.name) === Virgo.GALAXIES;
          }
        }, {
          key: "inBlackhole",
          get: function get() {
            return this.inType === 'blackhole';
          }
        }]);
        return VisitProxy;
      }(Proxy), _class2$3.LensOffsets = {
        BASE: 0.2,
        SUGGEST: 0.3,
        PLANET_SCOPE: 0.6
      }, _class2$3.DETAIL_TOLERANCE = 3, _class2$3)) || _class$4);
      var Transform = View.Transform;
      var Local = SceneGraph.Local,
        Virgo = SceneGraph.Virgo;
      var visit = exports('v', VisitProxy.instance);
      cclegacy._RF.pop();
      var _class$5, _class2$4;
      cclegacy._RF.push({}, "14ce9Ve3vtGD61QBqUfKczW", "cosmos-proxy", undefined);
      var singleton$5 = singleton$b;
      var S$1 = Diameters.SOLAR,
        H = Diameters.HELIO,
        M$1 = Diameters.MILKY,
        L = Diameters.LOCAL,
        V = Diameters.VIRGO,
        A$1 = Diameters.LANIAKEA,
        B$1 = Diameters.HUBBLE;
      var CosmosProxy = exports('b', singleton$5(_class$5 = (_class2$4 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(CosmosProxy, _Proxy);
        function CosmosProxy() {
          var _this;
          _this = _Proxy.call(this) || this;
          _this._scale = 1;
          _this._fov = 1;
          _this._dest10 = CosmosProxy.INIT_POW;
          _this._pow10 = CosmosProxy.INIT_POW;
          _this._autoAA2nd = 0;
          _this._delta = 0;
          _this._step = 0;
          _this._ntfComp = null;
          return _this;
        }
        var _proto = CosmosProxy.prototype;
        // 当前变化（pow10/s）
        _proto.init = function init() {
          this.on(Notifications.Time.TICK, this.onTick);
          this.on(UI.Zoom, this.onZoom);
          this.on(View.Scale.RATIO_CHANGE, this.onRatioChanged);
        };
        _proto.addPow10 = function addPow10(delta) {
          this._dest10 += delta;
          this._pow10 += delta;
          this._syncByDest();
        };
        _proto.zoomToDur = function zoomToDur(dest, duration, rotate, notifyCompleted) {
          if (rotate === void 0) {
            rotate = null;
          }
          if (notifyCompleted === void 0) {
            notifyCompleted = null;
          }
          this._dest10 = dest;
          this._step = (dest - this._pow10) / (Math.abs(duration) + Number.EPSILON);
          this._ntfComp = notifyCompleted;
          this._syncByDest();
          if (isBool(rotate)) this._autoAA2nd = (rotate ? 1 : -1) * CosmosProxy.ROTATE_SPEED;
        };
        _proto.zoomToBy = function zoomToBy(dest, step, rotate, notifyCompleted) {
          if (rotate === void 0) {
            rotate = null;
          }
          if (notifyCompleted === void 0) {
            notifyCompleted = null;
          }
          this._dest10 = dest;
          this._step = dest - this._pow10 > 0 ? step : -step;
          this._ntfComp = notifyCompleted;
          this._syncByDest();
          if (isBool(rotate)) this._autoAA2nd = (rotate ? 1 : -1) * CosmosProxy.ROTATE_SPEED;
        };
        _proto.onTick = function onTick(dt, tick) {
          this._delta = this._pow10;
          if (this._step == 0) {
            this._pow10 = Math.lerp(this._pow10, this._dest10, dt);
          } else {
            this._pow10 += this._step * dt * TRANS_ACC;
            if (this._step > 0 && this._pow10 >= this._dest10 || this._step < 0 && this._pow10 <= this._dest10) {
              this._pow10 = this._dest10;
              this._step = 0;
              this._ntfComp && this.notify(this._ntfComp);
              this._autoAA2nd = 0;
            }
          }
          this._delta = (this._pow10 - this._delta) / dt;
          if (LogProxy.PRINT_POW10) {
            console.info('[pow10]:', this._pow10);
          }
        };
        _proto._syncByDest = function _syncByDest() {
          this._fov = Math.pow(10, this._dest10 - CosmosProxy.INIT_POW);
          this._scale = 1 / this._fov;
        };
        _proto.onZoom = function onZoom(delta) {
          var _visit$center$nearest, _visit$center;
          var _CosmosProxy$COSMOS_P = CosmosProxy.COSMOS_POWS,
            FLOOR = _CosmosProxy$COSMOS_P[0],
            CEIL = _CosmosProxy$COSMOS_P[1];
          var floor = (_visit$center$nearest = (_visit$center = visit.center) == null ? void 0 : _visit$center.nearest) != null ? _visit$center$nearest : FLOOR;
          var scale = this._scale * (1 + delta);
          var fov = 1 / scale;
          var dest10 = Math.log10(fov) + CosmosProxy.INIT_POW;
          if (dest10 <= floor || dest10 >= CEIL) return;
          this._scale = scale;
          this._fov = fov;
          this._dest10 = dest10;
        };
        _proto.onRatioChanged = function onRatioChanged() {
          var _visit$center$nearest2, _visit$center2;
          var floor = (_visit$center$nearest2 = (_visit$center2 = visit.center) == null ? void 0 : _visit$center2.nearest) != null ? _visit$center$nearest2 : CosmosProxy.COSMOS_POWS[0];
          if (floor > this._dest10) {
            this._dest10 = floor;
            this._syncByDest();
          }
        };
        _proto._between = function _between(scope) {
          var F = scope[0],
            T = scope[1];
          return F <= this._pow10 && this._pow10 <= T;
        };
        _createClass(CosmosProxy, [{
          key: "planetary",
          get: function get() {
            return this._between(CosmosProxy.Scopes.Planetary);
          }
        }, {
          key: "solar",
          get: function get() {
            return this._between(CosmosProxy.Scopes.Solar);
          }
        }, {
          key: "helio",
          get: function get() {
            return this._between(CosmosProxy.Scopes.Helio);
          }
        }, {
          key: "stellar",
          get: function get() {
            return this._between(CosmosProxy.Scopes.Stellar);
          }
        }, {
          key: "milky",
          get: function get() {
            return this._between(CosmosProxy.Scopes.MilkyWay);
          }
        }, {
          key: "local",
          get: function get() {
            return this._between(CosmosProxy.Scopes.LocalGG);
          }
        }, {
          key: "virgo",
          get: function get() {
            return this._between(CosmosProxy.Scopes.VirgoSC);
          }
        }, {
          key: "super",
          get: function get() {
            return this._between(CosmosProxy.Scopes.Observable);
          }
        }, {
          key: "underSolar",
          get: function get() {
            return this._pow10 <= CosmosProxy.Scopes.Solar[1] - 0.5;
          }
        }, {
          key: "upSolar",
          get: function get() {
            return this._pow10 <= CosmosProxy.Scopes.Solar[1] + 0.5;
          }
        }, {
          key: "underStellar",
          get: function get() {
            return this._pow10 <= CosmosProxy.Scopes.Stellar[1] - 0.5;
          }
        }, {
          key: "scale",
          get: function get() {
            return this._scale;
          }
        }, {
          key: "fov",
          get: function get() {
            return this._fov;
          }
        }, {
          key: "pow10",
          get: function get() {
            return this._pow10;
          }
        }, {
          key: "autoAA2nd",
          get: function get() {
            return this._autoAA2nd;
          }
        }, {
          key: "delta",
          get: function get() {
            return this._delta;
          }
        }]);
        return CosmosProxy;
      }(Proxy), _class2$4.INIT_POW = -4, _class2$4.COSMOS_POWS = [-9, 11.3], _class2$4.Scopes = {
        Planetary: [-99, -3, -7],
        Specific: [-99, -1, -5],
        Solar: [-99, -1.4, -5, [S$1 / 2, S$1 / 1.6, S$1 / 2]],
        Helio: [-3, 0.7, -3, [H / 2, H / 1.8, H / 2]],
        Stellar: [-99, 4.5, POW_OFS],
        MilkyWay: [1.5, 7, 4 + POW_OFS, [M$1 / 2, M$1, M$1 / 2], MILKY_TO_SOLAR],
        LocalGG: [4.5, 8, 6 + POW_OFS, [L / 2, L * 0.8, L / 2], LOCAL_TO_SOLAR],
        VirgoSC: [6, 9.2, 8 + POW_OFS, [V / 2, V / 1.8, V / 1.2], VIRGO_TO_SOLAR],
        Laniakea: [6, 11, 8 + POW_OFS, [A$1 / 2, A$1 / 2, A$1 / 2]],
        Observable: [7.5, 12 + POW_OFS, 8, [B$1 / 2, B$1, B$1 / 2]]
      }, _class2$4.Bases = {
        Planetary: -7,
        Specific: -3.0,
        Solar: -3.0,
        Helio: -0.3,
        Stellar: 2.3,
        MilkyWay: 4.9,
        LocalGG: 6.8,
        VirgoSC: 7.9,
        Laniakea: 8.6,
        Observable: 11.25
      }, _class2$4.TRANS_SPEED_ZOOM_UP = 1, _class2$4.TRANS_SPEED_ZOOM_IN = 0.5, _class2$4.TRANS_SPEED_SCOPE = 0.55, _class2$4.TRANS_HIGHT = 27, _class2$4.ROTATE_SPEED = 15, _class2$4)) || _class$5);
      var cosmos = exports('c', CosmosProxy.instance);
      var TRANS_ACC = 1;
      cclegacy._RF.pop();
      var _class$6, _class2$5;
      cclegacy._RF.push({}, "dce60P8kTNEFo1r9Z+sssJT", "const-stars-proxy", undefined);
      var singleton$6 = singleton$b;
      var ConstStarsProxy = exports('ag', singleton$6(_class$6 = (_class2$5 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(ConstStarsProxy, _Proxy);
        function ConstStarsProxy() {
          var _this;
          _this = _Proxy.call(this) || this;
          _this._show_stars = true;
          _this._star_show_level = StarLevel.LEVEL_5;
          // 暂时显示所有星等且不接受通知
          _this._show_const_lines = false;
          _this._show_const_cults = false;
          _this._show_const_groups = ConstGroup.ALL;
          _this._show_const_hemisphere = null;
          _this._const_line_strength = 0.5;
          _this._const_cult_strength = 0.5;
          _this._lineFadeIn = false;
          _this._cultFadeIn = false;
          return _this;
        }
        var _proto = ConstStarsProxy.prototype;
        _proto.getStateByName = function getStateByName(name) {
          switch (name) {
            case '恒星':
              return this.showStars;
            case '连线':
              return this.showConstLines;
            case '形象':
              return this.showConstCults;
            case '星区':
              return false;
            // TODO
            case '星座':
              return this.showConsts;
            default:
              return null;
          }
        };
        _proto.lineFadeIn = function lineFadeIn() {
          this._const_line_strength = 0;
          this._lineFadeIn = true;
        };
        _proto.cultFadeIn = function cultFadeIn() {
          this._const_cult_strength = 0;
          this._cultFadeIn = true;
        };
        _proto.init = function init() {
          var _this2 = this;
          this.on(STARS, function (show) {
            return _this2._show_stars = show;
          });
          this.on(LINES, function (show) {
            return _this2._show_const_lines = show;
          });
          this.on(CULTURES, function (show) {
            return _this2._show_const_cults = show;
          });
          this.on(CONSTS, function (show) {
            return _this2._show_const_lines = _this2._show_const_cults = show;
          });
          this.on(GROUP, function (gid, show) {
            show ? _this2._show_const_groups |= gid : _this2._show_const_groups &= ~gid;
            _this2._show_const_hemisphere = null;
          });
          this.on(HEMISPHERE, function (ns) {
            return _this2._show_const_hemisphere = ns;
          });
          this.on(Notifications.Time.TICK, this.onTick);
        };
        _proto.onTick = function onTick(dt, tick) {
          if (this._lineFadeIn) {
            this._const_line_strength += dt * 0.25;
            if (this._const_line_strength >= 0.85) this._lineFadeIn = false;
          }
          if (this._cultFadeIn) {
            this._const_cult_strength += dt * 0.25;
            if (this._const_cult_strength >= 0.5) this._cultFadeIn = false;
          }
        };
        _createClass(ConstStarsProxy, [{
          key: "showStars",
          get: function get() {
            return this._show_stars;
          }
        }, {
          key: "showStarLevel",
          get: function get() {
            return this._star_show_level;
          }
        }, {
          key: "showConstLines",
          get: function get() {
            return this._show_const_lines;
          }
        }, {
          key: "showConstCults",
          get: function get() {
            return this._show_const_cults;
          }
        }, {
          key: "showConsts",
          get: function get() {
            return this.showConstLines || this.showConstCults;
          }
        }, {
          key: "showConstGroups",
          get: function get() {
            return this._show_const_groups;
          }
        }, {
          key: "showConstHemisphere",
          get: function get() {
            return this._show_const_hemisphere;
          }
        }, {
          key: "cultureStrengthen",
          get: function get() {
            return this._const_cult_strength;
          }
        }, {
          key: "consLineStrengthen",
          get: function get() {
            return this._const_line_strength;
          }
        }]);
        return ConstStarsProxy;
      }(Proxy), _class2$5.CultureAtt = [2, 4.2], _class2$5.ConstLineAtt = [0.1, 1.5], _class2$5.StarParticles = {
        TOTAL: 1000,
        // 随机恒星总数量
        Window: [-2, 1],
        // 窗口指数空间
        Distance: [0.5, 4.5],
        // 恒星的光年指数范围
        Scale: [1, 2] // 恒星的大小范围
      }, _class2$5)) || _class$6);
      var _UI$Stellar = UI.Stellar,
        STARS = _UI$Stellar.STARS,
        LINES = _UI$Stellar.LINES,
        CULTURES = _UI$Stellar.CULTURES,
        CONSTS = _UI$Stellar.CONSTS,
        _UI$Consts = UI.Consts,
        GROUP = _UI$Consts.GROUP,
        HEMISPHERE = _UI$Consts.HEMISPHERE;
      var constStars = exports('l', ConstStarsProxy.instance);
      cclegacy._RF.pop();
      var _class$7, _class2$6;
      cclegacy._RF.push({}, "f0caeEmZjBJ5aPv6guhysuN", "deep-galaxies-proxy", undefined);
      var singleton$7 = singleton$b;
      var O$1 = StarSpectrum.O,
        A$2 = StarSpectrum.A,
        G$1 = StarSpectrum.G,
        R$1 = StarSpectrum.R,
        S$2 = StarSpectrum.S;
      var DeepGalaxiesProxy = exports('ah', singleton$7(_class$7 = (_class2$6 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(DeepGalaxiesProxy, _Proxy);
        function DeepGalaxiesProxy() {
          var _this;
          _this = _Proxy.call(this) || this;
          _this._show_clusters = true;
          _this._show_nebulas = true;
          _this._show_galaxies = true;
          _this._show_black_holes = true;
          return _this;
        }
        var _proto = DeepGalaxiesProxy.prototype;
        _proto.getStateByName = function getStateByName(name) {
          switch (name) {
            case '星团':
              return this.showClusters;
            case '星云':
              return this.showNebulas;
            case '星系':
              return this.showGalaxies;
            case '黑洞':
              return this.showBlackHoles;
            default:
              return null;
          }
        };
        _proto.init = function init() {
          var _this2 = this;
          this.on(CLUSTERS, function (show) {
            return _this2._show_clusters = show;
          });
          this.on(NEBULAS, function (show) {
            return _this2._show_nebulas = show;
          });
          this.on(GALAXIES, function (show) {
            return _this2._show_galaxies = show;
          });
          this.on(BLACKHOLE, function (show) {
            return _this2._show_black_holes = show;
          });
        };
        _createClass(DeepGalaxiesProxy, [{
          key: "showClusters",
          get: function get() {
            return this._show_clusters;
          }
        }, {
          key: "showNebulas",
          get: function get() {
            return this._show_nebulas;
          }
        }, {
          key: "showGalaxies",
          get: function get() {
            return this._show_galaxies;
          }
        }, {
          key: "showBlackHoles",
          get: function get() {
            return this._show_black_holes;
          }
        }]);
        return DeepGalaxiesProxy;
      }(Proxy), _class2$6.MilkyWay = {
        THICKNESS: 0.05,
        GPUStars: {
          PARTICLE_NUM: 18000,
          SizesRange: [0.1, 0.15],
          ColorGradients: [[O$1, A$2],
          // 蓝白
          [S$2, A$2],
          // 红白
          [R$1, A$2],
          // 橙白
          [A$2, A$2],
          // 白白
          [S$2, G$1] // 红橙
          ]
        },

        CLouds: {
          LAYERS: 7,
          HIGHT: 0.2
        },
        /** @deprecated 考虑性能不再使用CPU-Instancing粒子改用GPU粒子 */
        InstancingStars: {
          TOTAL_NUM: 3000,
          DistRange: [1.0, 9.5],
          ScaleRange: [0.02, 0.03],
          ClampRange: [0.5, 2.5]
        },
        Structures: [["银心黑洞", "Galactic Center Black Hole", new Vec3(0.0942, -2.33, -0.437), true], ["银核棒旋", "Galactic Bar", new Vec3(-0.180, -2.94, -1.09), false], ["银核棒旋", "Galactic Bar", new Vec3(0.444, -1.90, 0.300), false], ["猎户臂", "Orion Arm", new Vec3(-0.250, 0.399, -0.344), false], ["猎户臂", "Orion Arm", new Vec3(0.250, -0.253, 0.382), false], ["远三千秒差距臂", "Far 3kpc Arm", new Vec3(0.452, -2.81, 0.078), false], ["近三千秒差距臂", "Near 3kpc Arm", new Vec3(-0.273, -2.06, -1.02), false], ["人马臂", "Sagittarius Arm", new Vec3(0.877, -2.80, 0.842), true], ["船底臂", "Carina Arm", new Vec3(-1.40, -1.38, -2.86), true], ["英仙臂", "Perseus Arm", new Vec3(1.25, -1.80, 1.77), true], ["英仙臂", "Perseus Arm", new Vec3(-1.13, 0.971, -1.76), true], ["盾牌-南十字臂", "Scutum Arm", new Vec3(-0.749, -1.13, -1.63), true], ["半人马臂", "Centaurus Arm", new Vec3(-0.171, -5.49, -1.73), true], ["矩尺臂", "Norma Arm", new Vec3(-0.498, -1.77, -1.35), true], ["天鹅臂", "Cygnus Arm", new Vec3(1.70, -1.90, 2.55), false], ["新外臂", "New Outer Arm", new Vec3(-0.626, 1.92, -0.623), false]]
      }, _class2$6.CommonDescriptions = {
        S: "属于本星系群的矮球状星系",
        I: "属于本星系群的矮不规则星系",
        E: "属于本星系群的矮椭球星系",
        SatE: "属于本星系群的矮椭圆状星系，也是银河系的一个卫星星系，主要由老年恒星组成。",
        SatI: "属于本星系群的矮不规则星系，也是银河系的一个卫星星系。",
        SatS: "属于本星系群的矮球状星系，也是银河系的一个卫星星系。",
        MSatS: "属于本星系群的矮球状星系，也是仙女座星系的一个卫星星系。",
        MSatE: "属于本星系群的矮椭球星系，也是仙女座星系的一个卫星星系。"
      }, _class2$6)) || _class$7);
      var _UI$Stellar$1 = UI.Stellar,
        CLUSTERS = _UI$Stellar$1.CLUSTERS,
        NEBULAS = _UI$Stellar$1.NEBULAS,
        GALAXIES = _UI$Stellar$1.GALAXIES,
        BLACKHOLE = _UI$Stellar$1.BLACKHOLE;
      var deepGalaxy = exports('z', DeepGalaxiesProxy.instance);
      cclegacy._RF.pop();
      var _class$8;
      cclegacy._RF.push({}, "15c38vmS7tB05E3I/DbF85z", "timer-proxy", undefined);
      var singleton$8 = singleton$b;
      var TimerProxy = singleton$8(_class$8 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(TimerProxy, _Proxy);
        function TimerProxy() {
          var _this;
          _this = _Proxy.call(this) || this;
          _this._timer = 3;
          _this._timescale = 15;
          return _this;
        }
        var _proto = TimerProxy.prototype;
        _proto.accelerate = function accelerate(timer) {
          this._timer = timer;
          switch (this._timer) {
            case Timer.STOP:
              this._timescale = 0;
              break;
            case Timer.SECOND:
              this._timescale = 0.004167;
              break;
            case Timer.MINUTE:
              this._timescale = 0.25;
              break;
            case Timer.HOUR:
              this._timescale = 15;
              break;
            case Timer.DAY:
              this._timescale = 360;
              break;
            case Timer.WEEK:
              this._timescale = 2520;
              break;
            case Timer.MONTH:
              this._timescale = 10980;
              break;
            case Timer.YEAR:
              this._timescale = 131400;
              break;
          }
        };
        _proto.stop = function stop() {
          this._timescale = 0;
        };
        _proto.init = function init() {
          this.accelerate(Timer.HOUR);
        };
        _createClass(TimerProxy, [{
          key: "timer",
          get: function get() {
            return this._timer;
          }
        }, {
          key: "timescale",
          get: function get() {
            return this._timescale;
          }
        }, {
          key: "desc",
          get: function get() {
            switch (this._timer) {
              case Timer.STOP:
                return '停止';
              case Timer.SECOND:
                return '1秒钟';
              case Timer.MINUTE:
                return '1分钟';
              case Timer.HOUR:
                return '1小时';
              case Timer.DAY:
                return '1天';
              case Timer.WEEK:
                return '1周';
              case Timer.MONTH:
                return '1月';
              case Timer.YEAR:
                return '1年';
            }
          }
        }]);
        return TimerProxy;
      }(Proxy)) || _class$8;
      var timer = exports('k', TimerProxy.instance);
      cclegacy._RF.pop();
      var _class$9, _class2$7;
      cclegacy._RF.push({}, "522c5db4OdA05eum30WvXsr", "solar-proxy", undefined);
      var singleton$9 = singleton$b;
      var SolarProxy = singleton$9(_class$9 = (_class2$7 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(SolarProxy, _Proxy);
        function SolarProxy() {
          var _this;
          _this = _Proxy.call(this) || this;
          _this._show_planets = true;
          _this._show_dwarfs = true;
          _this._show_minors = false;
          _this._show_comets = false;
          _this._show_belts = false;
          _this._show_sun = true;
          _this._magnify_ratio = 0.179;
          _this._planets = [];
          _this._systemScope = 0;
          _this._center = null;
          return _this;
        }
        var _proto = SolarProxy.prototype;
        // 当前中心恒星名称
        _proto.getStateByName = function getStateByName(name) {
          switch (name) {
            case '太阳':
              return this.showSun;
            case '行星':
              return this.showPlanets;
            case '矮行星':
              return this.showDwarfs;
            case '小行星':
              return this.showMinors;
            case '彗星':
              return this.showComets;
            case '小行星带':
              return this.showBelts;
            default:
              return null;
          }
        };
        _proto.getMagnified = function getMagnified(type) {
          return Math.lerp(1, SolarProxy.MaxRatios[type], this._magnify_ratio);
        };
        _proto.reloadParams = function reloadParams(center, planets, systemScope) {
          this._center = center;
          this._planets.length = this._systemScope = 0;
          if (planets) {
            var _this$_planets;
            (_this$_planets = this._planets).push.apply(_this$_planets, planets);
            this._systemScope = systemScope;
          }
        };
        _proto.init = function init() {
          var _this2 = this;
          this.on(PLANETS, function (arg) {
            return _this2._show_planets = arg;
          });
          this.on(DWARFS, function (arg) {
            return _this2._show_dwarfs = arg;
          });
          this.on(MINORS, function (arg) {
            return _this2._show_minors = arg;
          });
          this.on(COMETS, function (arg) {
            return _this2._show_comets = arg;
          });
          this.on(BELTS, function (arg) {
            return _this2._show_belts = arg;
          });
          this.on(FLARE, function (arg) {
            return _this2._show_sun = arg;
          });
          this.on(RATIO, function (arg) {
            _this2._magnify_ratio = arg;
            _this2.notify(View.Scale.RATIO_CHANGE);
          });
        };
        _createClass(SolarProxy, [{
          key: "showSun",
          get: function get() {
            return this._show_sun;
          } // 显示太阳和光晕
        }, {
          key: "showPlanets",
          get: function get() {
            return this._show_planets;
          } // 显示8大行星（冥王星已被降级为矮行星）
        }, {
          key: "showDwarfs",
          get: function get() {
            return this._show_dwarfs;
          } // 显示矮行星（国际公认共5颗）
        }, {
          key: "showMinors",
          get: function get() {
            return this._show_minors;
          } // 显示小行星（约20颗著名小行星）
        }, {
          key: "showComets",
          get: function get() {
            return this._show_comets;
          } // 显示彗星（前20颗著名彗星）
        }, {
          key: "showBelts",
          get: function get() {
            return this._show_belts;
          } // 显示小行星带（主带+柯伊伯带）
        }, {
          key: "magnifyRatio",
          get: function get() {
            return this._magnify_ratio;
          } // 放大比例
        }, {
          key: "systemScope",
          get: function get() {
            return this._systemScope;
          } // 当前恒星系统范围
        }, {
          key: "center",
          get: function get() {
            return this._center;
          } // 当前中心恒星
        }, {
          key: "centerName",
          get: function get() {
            var _this$_center;
            return (_this$_center = this._center) == null || (_this$_center = _this$_center.config) == null ? void 0 : _this$_center.name;
          }
        }]);
        return SolarProxy;
      }(Proxy), _class2$7.BeltColor = new Color(153, 127, 63, 127), _class2$7.MaxRatios = {
        star: 5e+1,
        blackhole: 5e+1,
        planet: 2e+3,
        dwarf: 1e+4,
        satellite: 1,
        minor: 2e+4,
        comet: 4e+5,
        belts: 2e+6,
        asteroid: 2e+6
      }, _class2$7)) || _class$9;
      var _UI$Solar = UI.Solar,
        PLANETS = _UI$Solar.PLANETS,
        DWARFS = _UI$Solar.DWARFS,
        MINORS = _UI$Solar.MINORS,
        COMETS = _UI$Solar.COMETS,
        BELTS = _UI$Solar.BELTS,
        FLARE = _UI$Solar.SUN,
        RATIO = _UI$Solar.RATIO;
      var solar = exports('d', SolarProxy.instance);
      cclegacy._RF.pop();
      var _class$a, _class2$8;
      cclegacy._RF.push({}, "bca22HJU4xIHoPPg56jcMuM", "planetary-proxy", undefined);
      var singleton$a = singleton$b;
      var PlanetaryProxy = singleton$a(_class$a = (_class2$8 = /*#__PURE__*/function (_Proxy) {
        _inheritsLoose(PlanetaryProxy, _Proxy);
        function PlanetaryProxy() {
          var _this;
          _this = _Proxy.call(this) || this;
          _this._show_satellites = true;
          _this._show_axis = false;
          _this._show_diameter = false;
          _this._show_magnetics = false;
          _this._show_equatorial = false;
          _this._show_ecliptic = false;
          _this._show_lunar = false;
          _this._show_tide_lock = false;
          _this._show_constitute = false;
          _this._show_artificial = false;
          _this._satellites = [];
          _this._systemScope = 0;
          _this._center = null;
          return _this;
        }
        var _proto = PlanetaryProxy.prototype;
        _proto.getStateByName = function getStateByName(name) {
          switch (name) {
            case '卫星':
              return this.showSatellites;
            case '地轴':
              return this.showAxis;
            case '直径':
              return this.showDiameter;
            case '磁场':
              return this.showMagnetics;
            case '赤道面':
              return this.showEquatorialPlane;
            case '黄道面':
              return this.showEclipticPlane;
            case '白道面':
              return this.showLunarPlaneUI;
            case '潮汐锁定':
              return this.showTideLockUI;
            case '人造物':
              return this.showArtificial;
            default:
              return null;
          }
        };
        _proto.reloadOrbiterParams = function reloadOrbiterParams(center, satellites, systemScope) {
          this._center = center;
          this._satellites.length = this._systemScope = 0;
          if (notEmptyArr(satellites)) {
            var _this$_satellites;
            (_this$_satellites = this._satellites).push.apply(_this$_satellites, satellites);
          }
          this._systemScope = systemScope;
        };
        _proto.init = function init() {
          var _this2 = this;
          this.on(SATELLITES, function (arg) {
            return _this2._show_satellites = arg;
          });
          this.on(AXIS, function (arg) {
            return _this2._show_axis = arg;
          });
          this.on(DIAMETER, function (arg) {
            return _this2._show_diameter = arg;
          });
          this.on(MAGNETICS, function (arg) {
            return _this2._show_magnetics = arg;
          });
          this.on(ECLIPTIC, function (arg) {
            return _this2._show_ecliptic = arg;
          });
          this.on(EQUATORIAL, function (arg) {
            return _this2._show_equatorial = arg;
          });
          this.on(LUNAR, function (arg) {
            return _this2._show_lunar = arg;
          });
          this.on(TIDE_LOCK, function (arg) {
            return _this2._show_tide_lock = arg;
          });
          this.on(CONSTITUTE, function (arg) {
            return _this2._show_constitute = arg;
          });
          this.on(ARTIFICIAL, function (arg) {
            return _this2._show_artificial = arg;
          });
        };
        _createClass(PlanetaryProxy, [{
          key: "showSatellites",
          get: function get() {
            return this._show_satellites;
          } // 显示卫星（行星|矮星）
        }, {
          key: "showAxis",
          get: function get() {
            return this._show_axis;
          } // 显示轴向
        }, {
          key: "showDiameter",
          get: function get() {
            return this._show_diameter;
          } // 显示直径
        }, {
          key: "showMagnetics",
          get: function get() {
            return this._show_magnetics;
          } // 显示磁场（行星）
        }, {
          key: "showEquatorialPlane",
          get: function get() {
            return this._show_equatorial;
          } // 显示赤道面
        }, {
          key: "showEclipticPlane",
          get: function get() {
            return this._show_ecliptic;
          } // 显示黄道面
        }, {
          key: "showLunarPlane",
          get: function get() {
            return this._show_lunar && this.centerName === 'Earth';
          } // 显示白道面
        }, {
          key: "showLunarPlaneUI",
          get: function get() {
            return this._show_lunar;
          } // 显示白道面UI
        }, {
          key: "showTideLock",
          get: function get() {
            return this._show_tide_lock;
          } // 显示潮汐锁定
        }, {
          key: "showTideLockUI",
          get: function get() {
            return this._show_tide_lock && this._center.cat === 'satellite';
          } // 显示潮汐锁定UI
        }, {
          key: "showConstitute",
          get: function get() {
            return this._show_constitute;
          } // 显示内部构成（行星）
        }, {
          key: "showArtificial",
          get: function get() {
            return this._show_artificial;
          } // 显示人造物体
        }, {
          key: "satellites",
          get: function get() {
            return this._satellites;
          } // 当前系统内的卫星
        }, {
          key: "systemScope",
          get: function get() {
            return this._systemScope;
          } // 当前行星系统范围
        }, {
          key: "center",
          get: function get() {
            return this._center;
          } // 当前中心行星（矮星/小行星/带/彗星）
        }, {
          key: "centerName",
          get: function get() {
            var _this$_center;
            // 当前中心行星（矮星/小行星/带/彗星）名称
            if (this.unbelt) return (_this$_center = this._center) == null || (_this$_center = _this$_center.config) == null ? void 0 : _this$_center.name;else return visit.transInfo.name;
          }
        }, {
          key: "unbelt",
          get: function get() {
            return this._center && this.center.cat !== 'belts';
          }
        }]);
        return PlanetaryProxy;
      }(Proxy), _class2$8.AsteroidRectangular = {
        BASE_SIZE: 2e-8,
        SIZE_RANGE: [0.8, 3],
        SCALE_RANGE: [1, 2],
        POS_RANGE: [1e-5, 1e-6, 1e-5]
      }, _class2$8)) || _class$a;
      var _UI$Local = UI.Local,
        SATELLITES = _UI$Local.SATELLITES,
        DIAMETER = _UI$Local.DIAMETER,
        AXIS = _UI$Local.AXIS,
        MAGNETICS = _UI$Local.MAGNETICS,
        LUNAR = _UI$Local.LUNAR,
        EQUATORIAL = _UI$Local.EQUATORIAL,
        ECLIPTIC = _UI$Local.ECLIPTIC,
        TIDE_LOCK = _UI$Local.TIDE_LOCK,
        CONSTITUTE = _UI$Local.CONSTITUTE,
        ARTIFICIAL = _UI$Local.ARTIFICIAL;
      var planetary = exports('p', PlanetaryProxy.instance);
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "f5383qTUElJfIiqxzDW7JBc", "index", undefined);
      cclegacy._RF.pop();
      var _dec, _dec2, _dec3, _class$b;
      cclegacy._RF.push({}, "8fec3hShz1CDYrk3R7epFGd", "label-i18n-adv", undefined);
      var ccclass = _decorator.ccclass,
        disallowMultiple = _decorator.disallowMultiple,
        requireComponent = _decorator.requireComponent,
        executeInEditMode = _decorator.executeInEditMode;
      var CelestialNameType = /*#__PURE__*/function (CelestialNameType) {
        CelestialNameType[CelestialNameType["Pure"] = 1] = "Pure";
        CelestialNameType[CelestialNameType["ConfigKey"] = 2] = "ConfigKey";
        CelestialNameType[CelestialNameType["Config"] = 3] = "Config";
        CelestialNameType[CelestialNameType["Star"] = 4] = "Star";
        CelestialNameType[CelestialNameType["Deep"] = 5] = "Deep";
        return CelestialNameType;
      }({});
      var LabelI18nAdvanced = (_dec = ccclass('cocosmos.label-18n-adv'), _dec2 = executeInEditMode(true), _dec3 = requireComponent(Label), _dec(_class$b = disallowMultiple(_class$b = _dec2(_class$b = _dec3(_class$b = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LabelI18nAdvanced, _Component);
        function LabelI18nAdvanced() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._label = void 0;
          _this._type = CelestialNameType.Pure;
          _this._key = null;
          _this._lang = null;
          _this._config = void 0;
          _this._enum = void 0;
          _this._map = {};
          return _this;
        }
        var _proto = LabelI18nAdvanced.prototype;
        _proto.setMapType = function setMapType(map, type) {
          this._type = type;
          this._map = map != null ? map : {};
          this._lang = null;
        };
        _proto.onLoad = function onLoad() {
          this._label = this.getComponent(Label);
        };
        _proto.lateUpdate = function lateUpdate() {
          if (this._type === CelestialNameType.Pure) return;
          if (!this._label) return;
          if (ui.language != this._lang) {
            this._lang = ui.language;
            this._updateString();
            return;
          }
          if (this._type === CelestialNameType.Star) {
            if (this._enum != ui.starNameType) {
              this._enum = ui.starNameType;
              this._updateString();
            }
            return;
          }
          if (this._type === CelestialNameType.Deep) {
            if (this._enum != ui.deepNameType) {
              this._enum = ui.deepNameType;
              this._updateString();
            }
            return;
          }
        };
        _proto._updateString = function _updateString() {
          if (this._type === CelestialNameType.ConfigKey || this._type === CelestialNameType.Config) {
            if (this._config) this._label.string = this._config[this._lang];
          } else if (this._type === CelestialNameType.Star || this._type === CelestialNameType.Deep) {
            var item = this._map[this._enum];
            if (item) {
              this._label.string = isStr(item) ? item : item[this._lang];
            }
          }
        };
        _createClass(LabelI18nAdvanced, [{
          key: "type",
          get: function get() {
            return this._type;
          },
          set: function set(arg) {
            this._type = arg;
          }
        }, {
          key: "string",
          get: function get() {
            var _this$_label;
            return (_this$_label = this._label) == null ? void 0 : _this$_label.string;
          }
        }, {
          key: "pure",
          set: function set(arg) {
            this._type = CelestialNameType.Pure;
            if (this._label) this._label.string = arg;
          }
        }, {
          key: "key",
          set: function set(en) {
            this._type = CelestialNameType.ConfigKey;
            this._key = en;
            this._config = getI18nConfig(en);
            if (!this._config) {
              console.warn('i18n-adv lost config for:', en);
              if (this._label) this._label.string = en;
              return;
            }
            this._lang = null;
          }
        }, {
          key: "config",
          set: function set(config) {
            this._type = CelestialNameType.Config;
            this._config = config;
            this._lang = null;
          }
        }]);
        return LabelI18nAdvanced;
      }(Component)) || _class$b) || _class$b) || _class$b) || _class$b);
      cclegacy._RF.pop();
      var _dec$1, _dec2$1, _class$c, _class2$9;
      cclegacy._RF.push({}, "73b07WCfFZN8azetRIReABV", "celestial-label", undefined);
      var ccclass$1 = _decorator.ccclass;
      var CelestialLabel = exports('C', (_dec$1 = ccclass$1('cocosmos.celestial-label'), _dec2$1 = poolify, _dec$1(_class$c = _dec2$1(_class$c = (_class2$9 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CelestialLabel, _Component);
        function CelestialLabel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._lbl = null;
          _this._hud = null;
          _this._adv = null;
          return _this;
        }
        var _proto = CelestialLabel.prototype;
        _proto.claimed = function claimed(type, name) {
          this.node.parent = CelestialLabel.Containers[type];
          this._adv.type = CelestialNameType.Pure;
          this.syncActive = false;
          if (name) this.node.name = name;
          return this;
        };
        _proto.freed = function freed() {
          this._hud.target = null;
        };
        _proto.onLoad = function onLoad() {
          this._hud = this.getComponent(HeadUpDisplay);
          this._lbl = this.getComponent(Label);
          this._adv = this.getComponent(LabelI18nAdvanced);
        }

        // set i18n strings
        ;

        _proto.setMap = function setMap(map, type) {
          this._adv.setMapType(map, type);
        };
        _proto.setOffset = function setOffset(arg0, y, z) {
          if (isObject(arg0)) this._hud.offset.set(arg0);else this._hud.offset.set(arg0, y, z);
          return this;
        };
        _proto.setUIOffset = function setUIOffset(x, y) {
          this._hud.offsetUI.set(x, y);
          return this;
        };
        _createClass(CelestialLabel, [{
          key: "key",
          set: function set(key) {
            this._adv.key = key;
          }
        }, {
          key: "config",
          set: function set(config) {
            this._adv.config = config;
          }
        }, {
          key: "pure",
          set: function set(str) {
            this._adv.pure = str;
          }
        }, {
          key: "string",
          get: function get() {
            var _this$_lbl;
            return (_this$_lbl = this._lbl) == null ? void 0 : _this$_lbl.string;
          },
          set: function set(arg) {
            if (this._lbl) this._lbl.string = arg;
          }
        }, {
          key: "color",
          set: function set(arg) {
            this._lbl.color = arg;
          }
        }, {
          key: "camera",
          set: function set(arg) {
            this._hud.mainCamera = arg;
          }
        }, {
          key: "target",
          get: function get() {
            return this._hud.target;
          },
          set: function set(arg) {
            this._hud.target = arg;
          }
        }, {
          key: "fontSize",
          set: function set(arg) {
            if (this._lbl) this._lbl.fontSize = this._lbl.lineHeight = arg;
          }
        }, {
          key: "alpha",
          set: function set(arg) {
            if (this._lbl) {
              color.set(this._lbl.color);
              if (this._lbl.cacheMode === Label.CacheMode.BITMAP) {
                color.a = Math.floor(arg * 5) / 5 * 255;
              } else color.a = arg * 255;
              this._lbl.color = color;
            }
          }
        }, {
          key: "char",
          set: function set(arg) {
            if (this._lbl) this._lbl.cacheMode = arg ? Label.CacheMode.CHAR : Label.CacheMode.NONE;
          }
        }, {
          key: "bitmap",
          set: function set(arg) {
            if (this._lbl) this._lbl.cacheMode = arg ? Label.CacheMode.BITMAP : Label.CacheMode.NONE;
          }
        }, {
          key: "scalable",
          set: function set(arg) {
            this._hud.scalable = arg;
          }
        }, {
          key: "bold",
          set: function set(arg) {
            if (this._lbl) this._lbl.isBold = arg;
          }
        }, {
          key: "italic",
          set: function set(arg) {
            if (this._lbl) this._lbl.isItalic = arg;
          }
        }, {
          key: "alwaysInCanvas",
          set: function set(arg) {
            this._hud.alwaysInCanvas = arg;
          }
        }, {
          key: "locate",
          set: function set(arg) {
            this.getComponent(UITransform).setAnchorPoint(arg.includes('右') ? 0 : arg.includes('左') ? 1 : 0.5, arg.includes('上') ? 0 : arg.includes('下') ? 1 : 0.5);
          }
        }, {
          key: "perspective",
          set: function set(arg) {
            this._hud.perspective = arg;
            this._hud.distance = 2;
            this._hud.scaleRatio = arg ? SCALE_RATIO : 1;
            this._hud.scaleRange.set(0.7, 1.5);
          }
        }, {
          key: "worldOffset",
          get: function get() {
            return Vec3.add(v3a$1, this._hud.target.worldPosition, Vec3.multiply(v3a$1, this._hud.target.worldScale, this._hud.offset));
          }
        }, {
          key: "syncActive",
          set: function set(arg) {
            this._hud.syncActive = arg;
          }
        }]);
        return CelestialLabel;
      }(Component), _class2$9.Containers = {}, _class2$9)) || _class$c) || _class$c));
      var v3a$1 = new Vec3();
      var color = new Color();
      var SCALE_RATIO = 0.5;
      cclegacy._RF.pop();
      var _dec$2, _dec2$2, _dec3$1, _class$d, _class2$a, _descriptor;
      cclegacy._RF.push({}, "f4c68ZS5CBHZY5XLmR4/B8y", "cosmic-scope", undefined);
      var ccclass$2 = _decorator.ccclass,
        property = _decorator.property,
        disallowMultiple$1 = _decorator.disallowMultiple;
      var CosmicScope = (_dec$2 = ccclass$2('cocosmos.ComicScope'), _dec2$2 = disallowMultiple$1(true), _dec3$1 = property(Material), _dec$2(_class$d = _dec2$2(_class$d = (_class2$a = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CosmicScope, _Component);
        function CosmicScope() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "matLine", _descriptor, _assertThisInitialized(_this));
          _this.PrefabKey = null;
          _this.offsetY = null;
          _this._subparts = void 0;
          _this._substructures = void 0;
          _this._labels = [];
          _this._configs = void 0;
          _this._handle = void 0;
          return _this;
        }
        var _proto = CosmicScope.prototype;
        _proto.update = function update(dt) {
          var _this$_attenuation = this._attenuation,
            head = _this$_attenuation.head,
            tail = _this$_attenuation.tail,
            pow10 = cosmos.pow10;
          var showStructs = gizmos.showStructs,
            showNotes = ui.showNotes;
          if (pow10 > head && pow10 < tail) {
            this._subparts.active = true;
            this._substructures.active = showStructs;
            var att = attenuate(pow10, this._attenuation);
            this.matLine.passes[0].setUniform(this._handle, GroupLineStrength * att);
            if (showStructs && showNotes) {
              this._claimLabels();
              for (var _iterator = _createForOfIteratorHelperLoose(this._labels), _step; !(_step = _iterator()).done;) {
                var label = _step.value;
                if (!label.target) continue;
                if (label === this._labels.head) {
                  label.alpha = att;
                } else {
                  var lenSqr = Vec3.squaredDistance(label.target.worldPosition, Vec3.ZERO);
                  label.alpha = attenuate(lenSqr, NameLabelAtt, true);
                }
              }
            } else this._freeLabels();
          } else {
            this._substructures.active = this._subparts.active = false;
            this._freeLabels();
          }
        };
        _proto.onDisable = function onDisable() {
          this._freeLabels();
        };
        _proto.onLoad = function onLoad() {
          var _core$res$getConfigIt;
          this._configs = (_core$res$getConfigIt = core.res.getConfigItem(Res.Configs.SUBSTRUCTURES, this._substructure_key)) != null ? _core$res$getConfigIt : {};
          this.createSubstructures();
          this.createSubParticles();
          this.init();
          core.on(Task.Load.APPROACH_SCOPE, this._onApproachScope, this);
        };
        _proto._onApproachScope = function _onApproachScope(name) {
          if (name === this.node.name) this.approachScope1stTime();
        };
        _proto.init = function init() {};
        _proto.createSubstructures = function createSubstructures() {
          var _this$PrefabKey, _this$matLine$passes$;
          var Capital = this._substructure_key.charAt(0).toUpperCase() + this._substructure_key.substring(1);
          this._substructures = createNodeAt(Capital, LAYER_MAIN_3D, this.node);
          var Substructure = core.res.getPrefab((_this$PrefabKey = this.PrefabKey) != null ? _this$PrefabKey : SUBSTRUCTURE);
          for (var key in this._configs) {
            var _this$_configs$key = this._configs[key],
              _this$_configs$key$po = _this$_configs$key.pos,
              _this$_configs$key$po2 = _this$_configs$key$po[0],
              x = _this$_configs$key$po2 === void 0 ? 0 : _this$_configs$key$po2,
              _this$_configs$key$po3 = _this$_configs$key$po[1],
              y = _this$_configs$key$po3 === void 0 ? 0 : _this$_configs$key$po3,
              _this$_configs$key$po4 = _this$_configs$key$po[2],
              z = _this$_configs$key$po4 === void 0 ? 0 : _this$_configs$key$po4,
              _this$_configs$key$sc = _this$_configs$key.scale,
              _this$_configs$key$sc2 = _this$_configs$key$sc[0],
              sx = _this$_configs$key$sc2 === void 0 ? 1 : _this$_configs$key$sc2,
              _this$_configs$key$sc3 = _this$_configs$key$sc[1],
              sy = _this$_configs$key$sc3 === void 0 ? 1 : _this$_configs$key$sc3,
              _this$_configs$key$sc4 = _this$_configs$key$sc[2],
              sz = _this$_configs$key$sc4 === void 0 ? 1 : _this$_configs$key$sc4,
              _this$_configs$key$ro = _this$_configs$key.rotate,
              _this$_configs$key$ro2 = _this$_configs$key$ro[0],
              rx = _this$_configs$key$ro2 === void 0 ? 0 : _this$_configs$key$ro2,
              _this$_configs$key$ro3 = _this$_configs$key$ro[1],
              ry = _this$_configs$key$ro3 === void 0 ? 0 : _this$_configs$key$ro3,
              _this$_configs$key$ro4 = _this$_configs$key$ro[2],
              rz = _this$_configs$key$ro4 === void 0 ? 0 : _this$_configs$key$ro4;
            var subgroup = createNodeAt(key, LAYER_MAIN_3D, this._substructures);
            subgroup.setScale(sx, sy, sz);
            subgroup.setPosition(x, y, z);
            subgroup.setRotationFromEuler(rx, ry, rz);
            var substructure = createNodeAt('struct-box', LAYER_MAIN_3D, subgroup, Substructure);
            substructure.getComponent(MeshRenderer).setSharedMaterial(this.matLine, 0);
          }
          this._handle = (_this$matLine$passes$ = this.matLine.passes[0]) == null ? void 0 : _this$matLine$passes$.getHandle('mainColor', 3, gfx.Type.FLOAT);
        }

        /**
         * @deprecated
         * 只用于配置数据时计算，正式加载不再使用天球坐标
        */;
        _proto._createByHms = function _createByHms(key, Substructure) {
          var _this$_configs$key$ro5 = this._configs[key].rotate,
            rx = _this$_configs$key$ro5[0],
            ry = _this$_configs$key$ro5[1],
            rz = _this$_configs$key$ro5[2];
          var _this$_configs$key2 = this._configs[key],
            ra_hms = _this$_configs$key2.ra_hms,
            dec_hms = _this$_configs$key2.dec_hms,
            dist = _this$_configs$key2.dist;
          var _ra_hms$split = ra_hms.split(':'),
            H = _ra_hms$split[0],
            M = _ra_hms$split[1],
            S = _ra_hms$split[2];
          var RA = (+H + +M / 60 + +S / 60) * 15;
          var _dec_hms$split = dec_hms.split(':'),
            h = _dec_hms$split[0],
            m = _dec_hms$split[1],
            s = _dec_hms$split[2];
          var Dec = +h + +m / 60 + +s / 60;
          polar2cartesian(RA, Dec, dist / 100, v3a$2);
          equator2ecliptic(v3a$2, v3a$2);
          var subgroup = createNodeAt(key, LAYER_MAIN_3D, this._substructures);
          subgroup.setScale(1, 1, 1);
          subgroup.setPosition(v3a$2);
          subgroup.setRotationFromEuler(rx, ry, rz);
          var substructure = createNodeAt('struct-box', LAYER_MAIN_3D, subgroup, Substructure);
          substructure.getComponent(MeshRenderer).setSharedMaterial(this.matLine, 0);
        };
        _proto._freeLabels = function _freeLabels() {
          if (notEmptyArr(this._labels)) this._labels.forEach(function (label) {
            return label.free();
          });
          this._labels.length = 0;
        };
        _proto._claimLabels = function _claimLabels() {
          var _this2 = this;
          if (notEmptyArr(this._labels)) return;
          var camera = findCamera(COSMOS, DEEP);
          this._substructures.children.forEach(function (subgroup) {
            var _this2$offsetY;
            var label = CelestialLabel.claim('struct', _this2._substructure_key);
            label.target = subgroup;
            label.camera = camera;
            setLabelStyle(label, 'struct', _this2._substructure_key);
            label.setOffset(v3a$2.set(0, (_this2$offsetY = _this2.offsetY) != null ? _this2$offsetY : 1.2, 0));
            // label.string = this._configs[subgroup.name].cname;
            var _this2$_configs$subgr = _this2._configs[subgroup.name],
              name = _this2$_configs$subgr.name,
              cname = _this2$_configs$subgr.cname;
            label.config = {
              en: name,
              cn: cname
            };
            _this2._labels.push(label);
          });
        };
        _createClass(CosmicScope, [{
          key: "substructures",
          get: function get() {
            return this._substructures.children;
          }
        }]);
        return CosmicScope;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2$a.prototype, "matLine", [_dec3$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$a)) || _class$d) || _class$d);
      var COSMOS = SceneGraph.COSMOS,
        DEEP = SceneGraph.Cameras.DEEP;
      var NameLabelAtt = UIProxy.NameLabelAtt,
        GroupLineStrength = UIProxy.GroupLineStrength;
      var SUBSTRUCTURE = Res.Prefabs.SUBSTRUCTURE;
      var v3a$2 = new Vec3();
      cclegacy._RF.pop();
      var _dec$3, _class$e, _LabelArgs;
      cclegacy._RF.push({}, "f97ddIImaROIYfQ4coOKn0u", "helio-local-bubble", undefined);
      var ccclass$3 = _decorator.ccclass;
      var HelioLocalBubble = (_dec$3 = ccclass$3('cocosmos.HelioLocalBubble'), _dec$3(_class$e = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HelioLocalBubble, _Component);
        function HelioLocalBubble() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._substructures = void 0;
          _this._solarDirection = void 0;
          _this._labels = [];
          _this._configs = void 0;
          return _this;
        }
        var _proto = HelioLocalBubble.prototype;
        _proto.onLoad = function onLoad() {
          this._init()._configure();
        };
        _proto.onDisable = function onDisable() {
          this._freeLabels();
        };
        _proto.update = function update(dt) {
          var showStructs = gizmos.showStructs,
            showTracks = gizmos.showTracks,
            showCelNames = ui.showCelNames;
          this._substructures.active = showStructs;
          this._solarDirection.active = showTracks;
          if (showCelNames && (showStructs || showTracks)) {
            this._claimLabels();
            for (var _iterator = _createForOfIteratorHelperLoose(this._labels), _step; !(_step = _iterator()).done;) {
              var label = _step.value;
              if (!label.target) continue;
              if (!label.target.activeInHierarchy) {
                label.alpha = 0;
                continue;
              }
              var name = label.target.name;
              var _LabelArgs$name = LabelArgs[name],
                _offset = _LabelArgs$name[1],
                mag = _LabelArgs$name[2];
              var _ratio = label.target.worldScale.y * mag;
              var dist = _ratio * _offset.y;
              label.alpha = attenuate(dist, NameLabelAtt$1, false);
            }
          } else {
            this._freeLabels();
          }
        };
        _proto._init = function _init() {
          var _core$res$getConfigIt;
          this._configs = (_core$res$getConfigIt = core.res.getConfigItem(Res.Configs.SUBSTRUCTURES, "helios")) != null ? _core$res$getConfigIt : {};
          this._substructures = this.node.getChildByName('Substructures');
          this._solarDirection = this.node.getChildByName('Solar Direction');
          return this;
        };
        _proto._configure = function _configure() {
          var _this2 = this;
          this._substructures.children.forEach(function (sub) {
            var config = _this2._configs[sub.name];
            if (notEmpty(config)) {
              var _config$pos = config.pos,
                _config$pos$ = _config$pos[0],
                x = _config$pos$ === void 0 ? 0 : _config$pos$,
                _config$pos$2 = _config$pos[1],
                y = _config$pos$2 === void 0 ? 0 : _config$pos$2,
                _config$pos$3 = _config$pos[2],
                z = _config$pos$3 === void 0 ? 0 : _config$pos$3,
                _config$scale = config.scale,
                _config$scale$ = _config$scale[0],
                sx = _config$scale$ === void 0 ? 1 : _config$scale$,
                _config$scale$2 = _config$scale[1],
                sy = _config$scale$2 === void 0 ? 1 : _config$scale$2,
                _config$scale$3 = _config$scale[2],
                sz = _config$scale$3 === void 0 ? 1 : _config$scale$3,
                _config$rotate = config.rotate,
                _config$rotate$ = _config$rotate[0],
                rx = _config$rotate$ === void 0 ? 0 : _config$rotate$,
                _config$rotate$2 = _config$rotate[1],
                ry = _config$rotate$2 === void 0 ? 0 : _config$rotate$2,
                _config$rotate$3 = _config$rotate[2],
                rz = _config$rotate$3 === void 0 ? 0 : _config$rotate$3;
              sub.setScale(sx, sy, sz);
              sub.setPosition(x, y, z);
              sub.setRotationFromEuler(rx, ry, rz);
            }
          });
          this._substructures.forward = SOLAR_DIR;
          this._solarDirection.setPosition(v3a$3.set(SOLAR_DIR).multiplyScalar(-3.8));
          this._solarDirection.forward = SOLAR_DIR;
        };
        _proto._freeLabels = function _freeLabels() {
          if (notEmptyArr(this._labels)) this._labels.forEach(function (label) {
            return label.free();
          });
          this._labels.length = 0;
        };
        _proto._claimLabels = function _claimLabels() {
          var _this3 = this;
          if (this._labels.length > 0) return;
          var camera = findCamera(COSMOS$1, MAIN);
          this._substructures.children.forEach(function (sub) {
            _this3._claimLabel(sub.name, _this3._configs[sub.name].cname, sub, camera);
          });
          this._claimLabel('Solar Direction', '太阳系绕银心方向', this._solarDirection, camera);
        };
        _proto._claimLabel = function _claimLabel(name, cname, target, camera) {
          var _LabelArgs$name2 = LabelArgs[name],
            color = _LabelArgs$name2[0],
            offset = _LabelArgs$name2[1];
          var label = setLabelStyle(CelestialLabel.claim('struct', name.toLowerCase()), 'struct', 'helios');
          label.target = target;
          label.camera = camera;
          label.color = color;
          label.setOffset(offset);
          // label.string = cname;
          label.config = {
            en: name,
            cn: cname
          };
          this._labels.push(label);
        };
        return HelioLocalBubble;
      }(Component)) || _class$e);
      var COSMOS$1 = SceneGraph.COSMOS,
        MAIN = SceneGraph.Cameras.MAIN;
      var NameLabelAtt$1 = UIProxy.NameLabelAtt;
      var SOLAR_DIR = AxisRotation.SOLAR_DIR;
      var v3a$3 = new Vec3();
      var LabelArgs = (_LabelArgs = {}, _LabelArgs['Terminal Shock'] = [new Color(255, 191, 0, 255), new Vec3(0, 0.5, 0), 1], _LabelArgs['Helio Pause'] = [new Color(255, 127, 0, 255), new Vec3(-0.1, 0.6, 0.075), 1], _LabelArgs['Bow Shock'] = [new Color(63, 63, 255, 255), new Vec3(-0.2, 0.5, 0.15), 1], _LabelArgs['Hills Cloud'] = [new Color(127, 191, 127, 255), new Vec3(0, 0.1, 0), 1], _LabelArgs['Oort Cloud'] = [new Color(127, 127, 191, 255), new Vec3(0, 0.1, 0), 1], _LabelArgs['Solar Direction'] = [new Color(255, 255, 0, 255), new Vec3(0, 0.08, 0), 10], _LabelArgs);
      cclegacy._RF.pop();
      var _dec$4, _class$f;
      cclegacy._RF.push({}, "c7e4dbI9A1AaadzJUtzXN6x", "laniakea-complex", undefined);
      var ccclass$4 = _decorator.ccclass;
      var LaniakeaComplex = (_dec$4 = ccclass$4('cocosmos.LaniakeaComplex'), _dec$4(_class$f = /*#__PURE__*/function (_CosmicScope) {
        _inheritsLoose(LaniakeaComplex, _CosmicScope);
        function LaniakeaComplex() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CosmicScope.call.apply(_CosmicScope, [this].concat(args)) || this;
          _this._substructure_key = 'clusters';
          _this._attenuation = [8.5, 8.8, 9.5, 10];
          return _this;
        }
        var _proto = LaniakeaComplex.prototype;
        _proto.createSubParticles = function createSubParticles() {
          var _this2 = this;
          this._subparts = createNodeAt("Perversive Galaxies-SCs", LAYER_MAIN_3D, this.node);
          var GalaxiesGUP = core.res.getPrefab(GALAXIES_GPU);
          [NearSC, FarSC
          // VeryFarSC
          ].forEach(function (args) {
            return setParticles(instantiate(GalaxiesGUP), args, _this2._subparts);
          });
        };
        _proto.approachScope1stTime = function approachScope1stTime() {
          console.log("DO TASK", this.node.name);
        };
        return LaniakeaComplex;
      }(CosmicScope)) || _class$f);
      var GALAXIES_GPU = Res.Prefabs.GALAXIES_GPU;
      var NearSC = {
        num: 3000,
        sizes: [0.036, 0.06],
        radius: 10,
        thickness: 0.6,
        random: 0.3
      };
      var FarSC = {
        num: 6000,
        sizes: [0.06, 0.12],
        radius: 20,
        thickness: 0.5,
        random: 0.4
      };

      // const VeryFarSC: IParticleLike = {
      //     num: 12000,
      //     sizes: [0.2, 0.5],
      //     radius: 80,
      //     thickness: 0.3,
      //     random: 0.5,
      // };
      cclegacy._RF.pop();
      var _dec$5, _class$g;
      cclegacy._RF.push({}, "ff1358uJLNBtrILBLQAfOH4", "local-group-galaxy", undefined);
      var ccclass$5 = _decorator.ccclass;
      var LocalGroupGalaxy = (_dec$5 = ccclass$5('cocosmos.LocalGroupGalaxy'), _dec$5(_class$g = /*#__PURE__*/function (_CosmicScope) {
        _inheritsLoose(LocalGroupGalaxy, _CosmicScope);
        function LocalGroupGalaxy() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CosmicScope.call.apply(_CosmicScope, [this].concat(args)) || this;
          _this._substructure_key = 'subgroups';
          _this._attenuation = [5.4, 6.3, 7.5, 7.8];
          return _this;
        }
        var _proto = LocalGroupGalaxy.prototype;
        _proto.createSubParticles = function createSubParticles() {
          var _this2 = this;
          this._subparts = createNodeAt("Perversive Companions", LAYER_MAIN_3D, this.node);
          var CompanionsGPU = core.res.getPrefab(COMPANIONS_GPU);
          [MilkyCompanions, M31Companions, PerversiveCompanions].forEach(function (args) {
            return setParticles(instantiate(CompanionsGPU), args, _this2._subparts);
          });
        };
        _proto.approachScope1stTime = function approachScope1stTime() {
          // GPU Particle Texture Seems Not Support Dynamic Loading
          // core.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_CMP_GALAXIES);
        };
        return LocalGroupGalaxy;
      }(CosmicScope)) || _class$g);
      var COMPANIONS_GPU = Res.Prefabs.COMPANIONS_GPU;
      var MilkyCompanions = {
        num: 700,
        sizes: [0.006, 0.012],
        radius: 0.8,
        thickness: 0.7,
        random: 0.2
      };
      var M31Companions = {
        num: 700,
        sizes: [0.012, 0.024],
        position: M31_TO_SOLAR,
        radius: 1.5,
        thickness: 0.7,
        random: 0.3
      };
      var PerversiveCompanions = {
        num: 3600,
        sizes: [0.036, 0.06],
        radius: 7,
        position: LOCAL_TO_SOLAR,
        thickness: 0.5,
        random: 0.6
      };
      cclegacy._RF.pop();
      var _dec$6, _dec2$3, _class$h, _class2$b, _descriptor$1, _class3;
      cclegacy._RF.push({}, "d5d6fKgnlVKQpHc0ptNI5eD", "milky-way", undefined);
      var ccclass$6 = _decorator.ccclass,
        property$1 = _decorator.property;
      var MilkyWay = exports('aa', (_dec$6 = ccclass$6('cocosmos.MilkyWay'), _dec2$3 = property$1(Prefab), _dec$6(_class$h = (_class2$b = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MilkyWay, _Component);
        function MilkyWay() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "MilkyDisk", _descriptor$1, _assertThisInitialized(_this));
          _this._cMats = [];
          _this._cHandles = [];
          _this._disks = void 0;
          _this._stars = void 0;
          _this._clouds = void 0;
          _this._core = void 0;
          _this._labels = [];
          return _this;
        }
        var _proto = MilkyWay.prototype;
        _proto.claimStructureLabelsIfNotExist = function claimStructureLabelsIfNotExist(viewer) {
          var _this2 = this;
          if (notEmptyArr(this._labels)) return;
          Structures.forEach(function (structure) {
            var _ref = structure,
              cn = _ref[0],
              en = _ref[1],
              ofs = _ref[2],
              main = _ref[3];
            var label = CelestialLabel.claim('milky', 'milky-structure');
            label.target = _this2.node;
            label.camera = viewer;
            setLabelStyle(label, 'milky', main);
            label.setOffset(ofs);
            // label.string = cn;
            label.config = {
              en: en,
              cn: cn
            };
            _this2._labels.push(label);
          });
        };
        _proto.freeStructureLabels = function freeStructureLabels() {
          if (notEmptyArr(this._labels)) this._labels.forEach(function (label) {
            return label.free();
          });
          this._labels.length = 0;
        };
        _proto.update = function update(dt) {
          var pow10 = cosmos.pow10;
          this._updateClouds(pow10);
          this._updateStars(pow10);
          this._updateDisks(pow10);
        };
        _proto.lateUpdate = function lateUpdate() {
          if (!MilkyWay.LoadTexTaskLaunched && cosmos.pow10 - 0.5 >= CosmosProxy.Scopes.MilkyWay[0]) {
            MilkyWay.LoadTexTaskLaunched = true;
            core.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_MILKY_HOR);
            core.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_MILKY_VER);
          }
        };
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto._init = function _init() {
          var _this3 = this;
          this._disks = this.node.getChildByName('Disks');
          this._clouds = this.node.getChildByName('Clouds');
          this._stars = this.node.getChildByName('Stars');
          this._core = this.node.getChildByName('Core');
          [this._disks, this._clouds, this._core].forEach(function (child) {
            child.setPosition(MILKY_TO_SOLAR);
            if (child != _this3._core) child.setRotationFromEuler(GALACTIC);
          });
          return this;
        };
        _proto._updateStars = function _updateStars(pow10) {
          var FROM = STARS_RANGE[0],
            TO = STARS_RANGE[1];
          if (pow10 > FROM && pow10 < TO) {
            var s = Math.clamp(Math.pow(3, pow10 - 4), 0, 1);
            this._stars.setScale(s, s, s);
            if (this._stars.children.length <= 0) {
              this._claimStars(this.node.scale.x < 1 ? 2 : 0.01);
            }
            this._stars.active = this._core.active = true;
          } else {
            // this._freeStars();
            this._stars.active = this._core.active = false;
          }
        };
        _proto._claimStars = function _claimStars(ratio) {
          var _this4 = this;
          var args = {
            num: PARTICLE_NUM,
            sizes: [MIN * ratio, MAX * ratio],
            radius: MILKY * 0.6,
            thickness: 0.85,
            position: MILKY_TO_SOLAR,
            euler: GALACTIC,
            scale: v3a$4.set(Vec3.ONE)
          };
          // core.notify(Renderer.CLAIM, RendererType.STARS_GPU, this._stars, args);
          setParticles(instantiate(core.res.getPrefab(STARS_GPU)), args, this._stars);
          v3a$4.set(1, THICKNESS, 1);
          ColorGradients.forEach(function (_ref2) {
            var from = _ref2[0],
              to = _ref2[1];
            var c1 = new Color(),
              c2 = new Color();
            setColorBySpectrum(c1, from);
            setColorBySpectrum(c2, to);
            args.colors = [c1, c2];
            // core.notify(Renderer.CLAIM, RendererType.STARS_GPU, this._stars, args);
            setParticles(instantiate(core.res.getPrefab(STARS_GPU)), args, _this4._stars);
          });
        }

        // private _freeStars(): void {
        //     this._stars.children.forEach(child =>
        //         core.notify(Renderer.FREE, RendererType.STARS_GPU, child));
        // }

        /**
         * @deprecated 
         * @description 原先使用了四张4K高清图片拼接成超高清大图，
         * 但银盘在拉进视野时本身就会淡化，提升效果并不明显所以弃用。
         */;
        _proto._createHighSolutionDisks = /*#__PURE__*/
        function () {
          var _createHighSolutionDisks2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var HRadius, _iterator, _step, idx, disk, mat;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  HRadius = MILKY / 4;
                  _iterator = _createForOfIteratorHelperLoose(Array.nature(3, 0).reverse());
                case 2:
                  if ((_step = _iterator()).done) {
                    _context.next = 17;
                    break;
                  }
                  idx = _step.value;
                  disk = instantiate(this.MilkyDisk);
                  disk.setPosition(idx % 2 == 0 ? -HRadius : HRadius, 0, idx < 2 ? HRadius : -HRadius);
                  disk.parent = this._disks;
                  mat = disk.getComponent(MeshRenderer).material;
                  this._cMats.push(mat);
                  this._cHandles.push(mat.passes[0].getHandle('attenuation'));
                  _context.t0 = mat;
                  _context.next = 13;
                  return core.res.loadRemoteTexture(MILKY_WAY + "/disk-" + idx, 'jpg');
                case 13:
                  _context.t1 = _context.sent;
                  _context.t0.setProperty.call(_context.t0, 'mainTexture', _context.t1);
                case 15:
                  _context.next = 2;
                  break;
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function _createHighSolutionDisks() {
            return _createHighSolutionDisks2.apply(this, arguments);
          }
          return _createHighSolutionDisks;
        }();
        _proto._createDisks = /*#__PURE__*/function () {
          var _createDisks2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var disk, mat, _iterator2, _step2, idx, vert, _mat;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  disk = instantiate(this.MilkyDisk);
                  disk.parent = this._disks;
                  mat = disk.getComponent(MeshRenderer).material;
                  this._cMats.push(mat);
                  this._cHandles.push(mat.passes[0].getHandle('attenuation'));
                  _context2.t0 = mat;
                  _context2.next = 9;
                  return core.res.loadRemoteTexture(MILKY_WAY + "/disk-horizontal", 'jpg');
                case 9:
                  _context2.t1 = _context2.sent;
                  _context2.t0.setProperty.call(_context2.t0, 'mainTexture', _context2.t1);
                  _context2.next = 14;
                  break;
                case 13:
                  this._createHighSolutionDisks();
                case 14:
                  _iterator2 = _createForOfIteratorHelperLoose(Array.nature(2).reverse());
                case 15:
                  if ((_step2 = _iterator2()).done) {
                    _context2.next = 32;
                    break;
                  }
                  idx = _step2.value;
                  vert = instantiate(this.MilkyDisk);
                  vert.setPosition(0, 0.05, 0);
                  vert.setScale(10, 2, 1);
                  vert.setRotationFromEuler(0, idx * 60, 0);
                  vert.parent = this._disks;
                  _mat = vert.getComponent(MeshRenderer).material;
                  this._cMats.push(_mat);
                  this._cHandles.push(_mat.passes[0].getHandle('attenuation'));
                  _context2.t2 = _mat;
                  _context2.next = 28;
                  return core.res.loadRemoteTexture(MILKY_WAY + "/disk-vertical", 'jpg');
                case 28:
                  _context2.t3 = _context2.sent;
                  _context2.t2.setProperty.call(_context2.t2, 'mainTexture', _context2.t3);
                case 30:
                  _context2.next = 15;
                  break;
                case 32:
                case 33:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function _createDisks() {
            return _createDisks2.apply(this, arguments);
          }
          return _createDisks;
        }();
        _proto._updateDisks = function _updateDisks(pow10) {
          var _this5 = this;
          if (pow10 > DISKS_RANGE.head) {
            this._disks.active = true;
            if (this._disks.children.length <= 0) this._createDisks();
            var near = Math.pow(10, 2.5 - pow10);
            v4a.set(near, near * 5, 10, 20);
            this._cMats.forEach(function (mat, idx) {
              mat.passes[0].setUniform(_this5._cHandles[idx], v4a);
            });
          } else this._disks.active = false;
        };
        _proto._updateClouds = function _updateClouds(pow10) {
          var FROM = CLOUDS_RANGE[0],
            TO = CLOUDS_RANGE[1];
          if (pow10 > FROM && pow10 < TO) {
            if (this._clouds.children.length <= 0) this._claimClouds();
            this._clouds.active = true;
          } else this._clouds.active = false;
          // this._freeClouds();
        };

        _proto._claimClouds = function _claimClouds() {
          var farArgs = {
            euler: v3a$4.set(Vec3.ZERO),
            scale: v3b.set(Vec3.ONE)
          };
          var STEP = MILKY / LAYERS;
          for (var i = 1; i <= LAYERS; i++) {
            var s = STEP * i;
            farArgs.scale.x = farArgs.scale.z = s;
            farArgs.scale.y = s * HIGHT;
            farArgs.euler.y = Math.randomInt(0, 360);
            // core.notify(Renderer.CLAIM, RendererType.CLOUDS_INST, this._clouds, args);
            setClouds(instantiate(core.res.getPrefab(MILKY_CLOUD)), farArgs, this._clouds);
          }
          var nearArgs = {
            worldPosition: v3a$4.set(Vec3.ZERO),
            euler: v3b.set(Vec3.ZERO),
            scale: v3c.set(Vec3.ONE)
          };
          for (var _i = 1; _i <= LAYERS; _i++) {
            var _s = STEP * _i / 5;
            nearArgs.scale.x = nearArgs.scale.z = _s;
            nearArgs.scale.y = _s * HIGHT * 2;
            nearArgs.euler.y = Math.randomInt(0, 360);
            // core.notify(Renderer.CLAIM, RendererType.CLOUDS_INST, this._clouds, argsSolar);
            setClouds(instantiate(core.res.getPrefab(MILKY_CLOUD)), nearArgs, this._clouds);
          }
        }

        // private _freeClouds(): void {
        //     this._clouds.children.forEach(child =>
        //         core.notify(Renderer.FREE, RendererType.CLOUDS_INST, child));
        // }
        ;

        _proto._listen = function _listen() {
          return this;
        };
        _createClass(MilkyWay, [{
          key: "structureLabels",
          get: function get() {
            return this._labels;
          }
        }]);
        return MilkyWay;
      }(Component), _class3.LoadTexTaskLaunched = false, _class3), _descriptor$1 = _applyDecoratedDescriptor(_class2$b.prototype, "MilkyDisk", [_dec2$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2$b)) || _class$h));
      var MILKY_WAY = Res.Textures.MILKY_WAY;
      var MILKY = Diameters.MILKY;
      var GALACTIC = AxisRotation.GALACTIC;
      var _DeepGalaxiesProxy$Mi = DeepGalaxiesProxy.MilkyWay,
        THICKNESS = _DeepGalaxiesProxy$Mi.THICKNESS,
        _DeepGalaxiesProxy$Mi2 = _DeepGalaxiesProxy$Mi.GPUStars,
        _DeepGalaxiesProxy$Mi3 = _DeepGalaxiesProxy$Mi2.SizesRange,
        MIN = _DeepGalaxiesProxy$Mi3[0],
        MAX = _DeepGalaxiesProxy$Mi3[1],
        PARTICLE_NUM = _DeepGalaxiesProxy$Mi2.PARTICLE_NUM,
        ColorGradients = _DeepGalaxiesProxy$Mi2.ColorGradients,
        _DeepGalaxiesProxy$Mi4 = _DeepGalaxiesProxy$Mi.CLouds,
        HIGHT = _DeepGalaxiesProxy$Mi4.HIGHT,
        LAYERS = _DeepGalaxiesProxy$Mi4.LAYERS,
        Structures = _DeepGalaxiesProxy$Mi.Structures;
      var _Res$Prefabs = Res.Prefabs,
        STARS_GPU = _Res$Prefabs.STARS_GPU,
        MILKY_CLOUD = _Res$Prefabs.MILKY_CLOUD;
      var DISKS_RANGE = [2.5, Number.MAX_VALUE];
      var STARS_RANGE = [2, 5.3];
      var CLOUDS_RANGE = [1.5, 5.8];
      var v3a$4 = new Vec3();
      var v3b = new Vec3();
      var v3c = new Vec3();
      var v4a = new Vec4();
      cclegacy._RF.pop();
      var _dec$7, _class$i;
      cclegacy._RF.push({}, "20346QAzoxDU5whoLpUi9ol", "observable-cosmos", undefined);
      var ccclass$7 = _decorator.ccclass;
      var ObservableCosmos = (_dec$7 = ccclass$7('cocosmos.ObservableCosmos'), _dec$7(_class$i = /*#__PURE__*/function (_CosmicScope) {
        _inheritsLoose(ObservableCosmos, _CosmicScope);
        function ObservableCosmos() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CosmicScope.call.apply(_CosmicScope, [this].concat(args)) || this;
          _this._substructure_key = 'great-walls';
          _this._attenuation = [9, 9.5, 10.5, 11.2];
          _this.PrefabKey = Res.Prefabs.ACANTHO;
          _this.offsetY = 0.45;
          _this._farWalls = void 0;
          _this._pervWalls = void 0;
          _this._c_mat = null;
          _this._c_handle = void 0;
          return _this;
        }
        var _proto = ObservableCosmos.prototype;
        _proto.update = function update(dt) {
          _CosmicScope.prototype.update.call(this, dt);
          this._updateGreatWalls();
        };
        _proto.approachScope1stTime = function approachScope1stTime() {
          core.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_SPR_CLUSTERS);
        };
        _proto._updateGreatWalls = function _updateGreatWalls() {
          var pow10 = cosmos.pow10;
          if (cosmos["super"]) {
            if (this._pervWalls.children.length <= 0) this._createPerversiveGreatWalls();
            var FLOOR = CLUSTERS_RANGE[0],
              CEIL = CLUSTERS_RANGE[1];
            var a = pow10 - FLOOR,
              b = CEIL - pow10,
              c = a / (a + b);
            if (b <= 0) {
              var s = Math.pow(10, b);
              this._pervWalls.setWorldScale(s, s, s);
            } else {
              this._gradient(this._pervWalls, pow10);
              this._pervWalls.setWorldScale(1, 1, 1);
            }
            clusters.x = clusters.y = c + 1;
            // clusters.x = clusters.y = 1;                     // Tiling
            clusters.z = Math.clamp01(a) * 0.8; // Strength
            clusters.w = Math.lerp(0.5, 0.1, Math.clamp01(c)); // Fading
            this._c_mat.passes[0].setUniform(this._c_handle, clusters);
            this._pervWalls.active = true;
            if (pow10 >= FAR_GW_START) {
              if (this._farWalls.children.length <= 0) this._createFarGreatWalls();
              this._farWalls.active = true;
            } else this._farWalls.active = false;
          }
        };
        _proto.createSubParticles = function createSubParticles() {
          var _this2 = this;
          this._subparts = createNodeAt("Perversive  Galaxy-Clusters", LAYER_MAIN_3D, this.node);
          var GalaxiesGUP = core.res.getPrefab(GALAXIES_GPU$1);
          [FarSC$1, VeryFarSC].forEach(function (args) {
            return setParticles(instantiate(GalaxiesGUP), args, _this2._subparts);
          });
        };
        _proto.init = function init() {
          this._farWalls = createNodeAt("Far Great-Walls", LAYER_MAIN_3D, this.node);
          this._pervWalls = createNodeAt("Perversive Great-Walls", LAYER_MAIN_3D, this.node);
        };
        _proto._createFarGreatWalls = function _createFarGreatWalls() {
          var ANGLE = DEG_PERIGON / RANDOM_NUM;
          var FROM = DIST_RANGE[0],
            TO = DIST_RANGE[1];
          var SuperClusters = core.res.getPrefab(SUPER_CLUSTERS);
          for (var i = 0; i < RANDOM_NUM; i++) {
            var dist = Math.randomRange(FROM, TO);
            var radius = dist * RADIUS_RAT;
            var cluster = instantiate(SuperClusters);
            var rad = Math.parseRadian(i * ANGLE);
            cluster.setPosition(dist * Math.sin(rad), Math.randomRange(-dist / 2, dist / 2), dist * Math.cos(rad));
            cluster.setScale(radius, radius + Math.randomRange(0.2, 0.5), radius * 1.4);
            cluster.setRotationFromEuler(Math.randomRange(0, 360), 0, 90);
            cluster.parent = this._farWalls;
          }
          for (var _i = 0; _i < 2; _i++) {
            var _cluster = instantiate(SuperClusters);
            _cluster.setPosition(0, (_i === 0 ? 1 : -1) * TO, 0);
            var _radius = FROM * RADIUS_RAT;
            _cluster.setScale(_radius, _radius, _radius * 1.5);
            _cluster.setRotationFromEuler(0, Math.randomRange(0, 360), 0);
            _cluster.parent = this._farWalls;
          }
        };
        _proto._createPerversiveGreatWalls = function _createPerversiveGreatWalls() {
          var rot = DEG_PERIGON / GRADIENT_NUM;
          var SuperClusters = core.res.getPrefab(SUPER_CLUSTERS);
          for (var i = 0; i < GRADIENT_NUM; i++) {
            var cluster = instantiate(SuperClusters);
            cluster.setRotationFromEuler(0, i * rot, i * rot / 2);
            cluster.parent = this._pervWalls;
            if (i === 0) {
              var _this$_c_mat$passes$;
              this._c_mat = cluster.getComponent(MeshRenderer).sharedMaterial;
              this._c_handle = (_this$_c_mat$passes$ = this._c_mat.passes[0]) == null ? void 0 : _this$_c_mat$passes$.getHandle('clusters');
            }
          }
        };
        _proto._gradient = function _gradient(container, pow10, offset) {
          if (offset === void 0) {
            offset = 0;
          }
          var pow2 = Math.log2(Math.pow(10, pow10));
          container.children.forEach(function (child, idx) {
            var p = idx - pow2;
            p %= 5;
            var s = Math.pow(2, p + offset);
            child.setScale(s, s, s);
          });
        };
        return ObservableCosmos;
      }(CosmicScope)) || _class$i);
      var DIST_RANGE = [220, 350];
      var RADIUS_RAT = 0.2;
      var RANDOM_NUM = 8;
      var _Res$Prefabs$1 = Res.Prefabs,
        GALAXIES_GPU$1 = _Res$Prefabs$1.GALAXIES_GPU,
        SUPER_CLUSTERS = _Res$Prefabs$1.SUPER_CLUSTERS;
      var GRADIENT_NUM = 5;
      var CLUSTERS_RANGE = [8.5, 10];
      var FAR_GW_START = 9;
      var clusters = new Vec4();
      var FarSC$1 = {
        num: 20000,
        sizes: [0.15, 0.3],
        radius: 100,
        thickness: 0.7,
        random: 0.5
      };
      var VeryFarSC = {
        num: 30000,
        sizes: [0.3, 0.6],
        radius: 400,
        thickness: 0.8,
        random: 0.5
      };
      cclegacy._RF.pop();
      var _dec$8, _class$j;
      cclegacy._RF.push({}, "a8f7c6d/ddG+5Y/nIg/tWM3", "customized-lod", undefined);
      var ccclass$8 = _decorator.ccclass;
      var CustomizedLOD = (_dec$8 = ccclass$8('cocosmos.CustomizedLOD'), _dec$8(_class$j = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CustomizedLOD, _Component);
        function CustomizedLOD() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._lod0 = void 0;
          _this._lod1 = void 0;
          _this._lod2 = void 0;
          _this._lod3 = void 0;
          _this._viewer = void 0;
          _this._lods = void 0;
          _this._lod0Inited = false;
          _this._real = new Vec3(1, 1, 1);
          return _this;
        }
        var _proto = CustomizedLOD.prototype;
        _proto.onLoad = function onLoad() {
          var _ref, _this$node$getChildBy, _ref2, _this$node$getChildBy2, _this$node$getChildBy3, _this$node$getChildBy4;
          var rotator = this.node.getChildByName('Rotator');
          this._lod0 = (_ref = (_this$node$getChildBy = this.node.getChildByName('LOD0')) != null ? _this$node$getChildBy : rotator == null ? void 0 : rotator.getChildByName('LOD0')) != null ? _ref : null;
          this._lod1 = (_ref2 = (_this$node$getChildBy2 = this.node.getChildByName('LOD1')) != null ? _this$node$getChildBy2 : rotator == null ? void 0 : rotator.getChildByName('LOD1')) != null ? _ref2 : null;
          this._lod2 = (_this$node$getChildBy3 = this.node.getChildByName('LOD2')) != null ? _this$node$getChildBy3 : null;
          this._lod3 = (_this$node$getChildBy4 = this.node.getChildByName('LOD3')) != null ? _this$node$getChildBy4 : null;
          this._lods = [this._lod0, this._lod1, this._lod2, this._lod3];
          this._lods.clean();
          this._lods.forEach(function (lod) {
            return lod.active = false;
          });
          core.on(Notifications.Time.TICK, this._tick, this);
          core.on(Notifications.Time.TICK, this.syncLODChoosing, this, -99); // 最后更新否则上级系统稍有变化此处屏占比计算将有较大误差
          core.on(View.Scale.RATIO_CHANGE, this.updateScale, this);
          this.init();
        };
        _proto.onDestroy = function onDestroy() {
          core.unload(this);
        };
        _proto.onEnable = function onEnable() {
          this.updateScale();
        };
        _proto._tick = function _tick(dt, tick) {
          this.onTick(dt, tick);
        };
        _proto.syncLODChoosing = function syncLODChoosing() {
          if (!this.node.activeInHierarchy) return;
          var pct = calcSphereScreenPercent(this.node, this._viewer);
          var chosen = null;
          for (var idx = 0; idx < this.LODValves.length; idx++) {
            var valve = this.LODValves[idx];
            if (pct >= valve) {
              chosen = this._lods[idx];
              if (idx === 0 && !this._lod0Inited) {
                this._lod0Inited = true;
                this.onLod0Initiated();
              }
              break;
            }
          }
          this._lods.forEach(function (lod) {
            return lod.active = lod === chosen;
          });
        };
        _proto.updateScale = function updateScale(magnified) {
          this.node.setScale(Vec3.multiplyScalar(v3a$5, this._real, magnified != null ? magnified : solar.getMagnified(this.cat)));
        };
        return CustomizedLOD;
      }(Component)) || _class$j);
      var v3a$5 = new Vec3();
      cclegacy._RF.pop();
      var _dec$9, _dec2$4, _dec3$2, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class$k, _class2$c, _descriptor$2, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "f8d14mq2s1MMZh9yaqEG7m/", "orbiter", undefined);
      var group = group$5,
        serialize = serialize$3;
      var ccclass$9 = _decorator.ccclass;
      var rotatable = function rotatable() {
        return this.rotatable;
      };
      var Orbiter = exports('a5', (_dec$9 = ccclass$9('cocosmos.Orbiter'), _dec2$4 = group("公转参数.A", "轨道半径", ["unit", "au"]), _dec3$2 = group("公转参数.A", "公转角速度", ["unit", "deg/s"]), _dec4 = group("公转参数.A", "升交点黄经", ["unit", "deg"]), _dec5 = group("公转参数.A", "初始春分角", ["unit", "deg"]), _dec6 = group("公转参数.A", "轨道离心率", [0, 1, 0.01]), _dec7 = group("公转参数.A", "轨道倾斜角", ["unit", "deg"]), _dec8 = group("自转参数.A", "自转角速度", rotatable, ["unit", "deg/s"]), _dec9 = group("自转参数.A", "北极赤经", rotatable, ["unit", "deg"]), _dec10 = group("自转参数.A", "初始黎明角", rotatable, ["unit", "deg"]), _dec11 = group("自转参数.A", "转轴倾斜角", rotatable, ["unit", "deg"]), _dec12 = group("体积参数.A", "赤道半径", ["unit", "au"]), _dec$9(_class$k = (_class2$c = /*#__PURE__*/function (_CustomizedLOD) {
        _inheritsLoose(Orbiter, _CustomizedLOD);
        function Orbiter() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CustomizedLOD.call.apply(_CustomizedLOD, [this].concat(args)) || this;
          // 天体类型
          _this.alpha = 0;
          _initializerDefineProperty(_this, "orbitalVelocity", _descriptor$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateVelocity", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "equatorialRadius", _descriptor3, _assertThisInitialized(_this));
          _this._rotator = void 0;
          _this._orbitalAngle = 0;
          _this._rotateAngle = 0;
          _initializerDefineProperty(_this, "_r", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lon", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_oia", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_e", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_obo", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_nra", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_rto", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_ria", _descriptor11, _assertThisInitialized(_this));
          _this._a = 1;
          _this._b = 1;
          _this._c = 0;
          _this._ba = 1;
          _this._orbitMat = new Mat4();
          _this._belong = void 0;
          _this._sun = void 0;
          _this._config = void 0;
          _this._bias = 0;
          _this._label = null;
          _this._nearest = 0;
          _this._panorama = 0;
          return _this;
        }
        var _proto = Orbiter.prototype;
        _proto.loadConfig = function loadConfig(config, viewer, base, belong) {
          this.node.name = config.name;
          this._config = config;
          this._belong = belong;
          this._sun = belong.cat === 'star' ? belong : belong.belong;
          this._viewer = viewer;
          this.configure();
          this.initPhysicsParams(base);
          return this;
        };
        _proto.init = function init() {
          var _this$node$getChildBy;
          if (this.rotatable) this._rotator = (_this$node$getChildBy = this.node.getChildByName('Rotator')) != null ? _this$node$getChildBy : null;
        };
        _proto.onDisable = function onDisable() {
          this._freeLabel();
        };
        _proto.start = function start() {
          this._updateOrbitData();
          this.rotatable && this._updateRotateData();
        };
        _proto.onTick = function onTick(dt, tick) {
          var span = dt * timer.timescale;
          this.step(span);
          this.rotatable && this.rotate(span);
          this.revolve(span);
          this.syncActivating();
          // this.syncLODChoosing();
          this.syncInstancing();
          this.syncNameLabel();
        };
        _proto.step = function step(span) {
          // 开普勒第二定律（面积定律）velocity为正 => 逆时针旋转
          var rat = this._r / Vec3.distance(this.node.position, Vec3.ZERO);
          this._orbitalAngle += this.orbitalVelocity * rat * span;
          this._rotateAngle += this.rotateVelocity * span;
          if (this._orbitalAngle > DEG_PERIGON) this._orbitalAngle -= DEG_PERIGON;
          if (this._rotateAngle > DEG_PERIGON) this._rotateAngle -= DEG_PERIGON;
        };
        _proto.rotate = function rotate(span) {
          var _this$_rotator,
            _this2 = this;
          ((_this$_rotator = this._rotator) == null ? void 0 : _this$_rotator.active) && this._rotator.children.forEach(function (child) {
            child.active && child.setRotationFromEuler(0, _this2._rotateAngle, 0);
          });
        };
        _proto.revolve = function revolve(span) {
          var _r = this._r,
            rad = Math.parseRadian(this._orbitalAngle);
          var _ref = [Math.cos(rad), Math.sin(rad)],
            cosA = _ref[0],
            sinA = _ref[1];
          v3a$6.set(_r * sinA, 0, _r * cosA);
          this.node.setPosition(Vec3.transformMat4(v3a$6, v3a$6, this._orbitMat));
        };
        _proto.syncActivating = function syncActivating() {
          if (!this.node.parent || !this.node.parent.activeInHierarchy) return;
          if (this.cat === 'satellite') return; // TEMP TODO
          var activated = this.distSqr > (this.important ? CUL_VAV_SQR : NOT_IMP_CUL_VAV_SQR);
          this.node.active = activated;
        };
        _proto.syncInstancing = function syncInstancing() {};
        _proto.syncNameLabel = function syncNameLabel() {
          var showCelNames = ui.showCelNames;
          if (this.node.activeInHierarchy && showCelNames) {
            if (!this._label) {
              if (visit.inSolar) {
                this._label = setLabelStyle(CelestialLabel.claim('solar', this.node.name), 'solar', this.cat);
              } else {
                this._label = setLabelStyle(CelestialLabel.claim('planetary', this.node.name), 'planetary', this.cat);
              }
              this._label.camera = this._viewer;
              this._label.target = this.node;
              this._label.key = "celestial@" + this._config.name;
            }
            this._label.alpha = attenuate(this.distSqr, NameLabelAtt$2.heads(2), true);
          } else this._freeLabel();
        };
        _proto._freeLabel = function _freeLabel() {
          if (this._label) {
            this._label.free();
            this._label = null;
          }
        };
        _proto.initPhysicsParams = function initPhysicsParams(base) {
          var diam = this._config.diam;
          this._real.set(diam, diam, diam);
          this.updateScale();
          var _ref2 = this._config.orbiter,
            orbital = _ref2.orbital,
            rotate = _ref2.rotate;
          var _ref3 = orbital,
            _ref3$radius = _ref3.radius,
            R = _ref3$radius === void 0 ? 1 : _ref3$radius,
            _ref3$lon = _ref3.lon,
            L = _ref3$lon === void 0 ? 0 : _ref3$lon,
            _ref3$eccentricity = _ref3.eccentricity,
            E = _ref3$eccentricity === void 0 ? 0 : _ref3$eccentricity,
            _ref3$obliquity = _ref3.obliquity,
            O = _ref3$obliquity === void 0 ? 0 : _ref3$obliquity,
            _ref3$period = _ref3.period,
            P = _ref3$period === void 0 ? 365.25 : _ref3$period,
            _ref3$angle = _ref3.angle,
            I = _ref3$angle === void 0 ? 0 : _ref3$angle;
          this.orbitalRadius = R;
          this.orbitalVelocity = 1 / P;
          this.longitudeOfNode = L;
          this.eccentricity = E;
          this.orbitalObliquity = O;
          this.orbitalInitAngle = I;
          var _ref4 = rotate != null ? rotate : {
              nra: 0,
              obliquity: 0,
              period: 1,
              angle: 0
            },
            _ref4$nra = _ref4.nra,
            n = _ref4$nra === void 0 ? 0 : _ref4$nra,
            _ref4$obliquity = _ref4.obliquity,
            o = _ref4$obliquity === void 0 ? 0 : _ref4$obliquity,
            _ref4$period = _ref4.period,
            p = _ref4$period === void 0 ? 1 : _ref4$period,
            _ref4$angle = _ref4.angle,
            a = _ref4$angle === void 0 ? 0 : _ref4$angle;
          this.northPoleRightAscension = n;
          this.rotateInitAngle = a;
          if (p === 'sync') this.rotateVelocity = this.orbitalVelocity;else this.rotateVelocity = 1 / p;
          this.rotateObliquity = o;
          this._nearest = Math.log10(diam / 2) + base + BASE;
          this._panorama = Math.log10(R * 0.8) + base;
        };
        _proto._updateRotateData = function _updateRotateData() {
          this._rotator && this._rotator.setRotationFromEuler(v3a$6.set(0, this._nra, -this._rto));
          this._rotateAngle = this._ria;
        };
        _proto._updateOrbitData = function _updateOrbitData() {
          this._orbitalAngle = this._oia;
          this._ba = Math.sqrt(1 - this._e * this._e) + Number.EPSILON;
          this._a = 2 * this._r / (1 + this._ba);
          this._b = this._a * this._ba;
          this._c = this._a * this._e;
          // 开普勒第一定律（轨道定律）
          Mat4.fromYRotation(this._orbitMat, Math.parseRadian(this._lon));
          Mat4.rotateZ(this._orbitMat, this._orbitMat, Math.parseRadian(this._obo)).transform(v3a$6.set(this._c, 0, 0)).scale(v3a$6.set(this._a / this._r, 1, this._b / this._r));
          this.revolve();
        };
        _proto.faceToSun = function faceToSun(child) {
          child.forward = Vec3.subtract(v3a$6, this.node.worldPosition, this._sun.node.worldPosition);
        };
        _createClass(Orbiter, [{
          key: "nearest",
          get: function get() {
            return this._nearest + this.bias;
          }
        }, {
          key: "suggest",
          get: function get() {
            return this.nearest + SUGGEST + this.bias;
          }
        }, {
          key: "panorama",
          get: function get() {
            return this._panorama;
          }
        }, {
          key: "bias",
          get: function get() {
            return this._bias;
          }
        }, {
          key: "rotator",
          get: function get() {
            return this._rotator;
          }
        }, {
          key: "orbitalRadius",
          get: function get() {
            return this._r;
          },
          set: function set(arg) {
            this._r = arg;
            this._updateOrbitData();
          }
        }, {
          key: "longitudeOfNode",
          get: function get() {
            return this._lon;
          },
          set: function set(arg) {
            this._lon = arg;
            this._updateOrbitData();
          }
        }, {
          key: "orbitalInitAngle",
          get: function get() {
            return this._oia;
          },
          set: function set(arg) {
            this._oia = arg;
            this._updateOrbitData();
          }
        }, {
          key: "eccentricity",
          get: function get() {
            return this._e;
          },
          set: function set(arg) {
            this._e = arg;
            this._updateOrbitData();
          }
        }, {
          key: "orbitalObliquity",
          get: function get() {
            return this._obo;
          },
          set: function set(arg) {
            this._obo = arg;
            this._updateOrbitData();
          }
        }, {
          key: "ba",
          get: function get() {
            return this._ba;
          }
        }, {
          key: "a",
          get: function get() {
            return 2 * this.orbitalRadius / (1 + this._ba);
          }
        }, {
          key: "b",
          get: function get() {
            return this.a * this._ba;
          }
        }, {
          key: "c",
          get: function get() {
            return this.a * this._e;
          }
        }, {
          key: "orbitMat",
          get: function get() {
            return this._orbitMat;
          }
        }, {
          key: "orbitAngle",
          get: function get() {
            return this._orbitalAngle;
          }
        }, {
          key: "northPoleRightAscension",
          get: function get() {
            return this._nra;
          },
          set: function set(arg) {
            this._nra = arg;
            this._updateRotateData();
          }
        }, {
          key: "rotateInitAngle",
          get: function get() {
            return this._ria;
          },
          set: function set(arg) {
            this._ria = arg;
            this._updateRotateData();
          }
        }, {
          key: "rotateObliquity",
          get: function get() {
            return this._rto;
          },
          set: function set(arg) {
            this._rto = arg;
            this._updateRotateData();
          }
        }, {
          key: "far",
          get: function get() {
            return Vec3.distance(this.node.worldPosition, this._viewer.node.worldPosition);
          }
        }, {
          key: "dist",
          get: function get() {
            return Vec3.distance(this.node.worldPosition, this._belong.node.worldPosition);
          }
        }, {
          key: "distSqr",
          get: function get() {
            return Vec3.squaredDistance(this.node.worldPosition, this._belong.node.worldPosition);
          }
        }, {
          key: "belong",
          get: function get() {
            return this._belong;
          }
        }]);
        return Orbiter;
      }(CustomizedLOD), (_applyDecoratedDescriptor(_class2$c.prototype, "orbitalRadius", [_dec2$4], Object.getOwnPropertyDescriptor(_class2$c.prototype, "orbitalRadius"), _class2$c.prototype), _descriptor$2 = _applyDecoratedDescriptor(_class2$c.prototype, "orbitalVelocity", [_dec3$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2$c.prototype, "longitudeOfNode", [_dec4], Object.getOwnPropertyDescriptor(_class2$c.prototype, "longitudeOfNode"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "orbitalInitAngle", [_dec5], Object.getOwnPropertyDescriptor(_class2$c.prototype, "orbitalInitAngle"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "eccentricity", [_dec6], Object.getOwnPropertyDescriptor(_class2$c.prototype, "eccentricity"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "orbitalObliquity", [_dec7], Object.getOwnPropertyDescriptor(_class2$c.prototype, "orbitalObliquity"), _class2$c.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2$c.prototype, "rotateVelocity", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2$c.prototype, "northPoleRightAscension", [_dec9], Object.getOwnPropertyDescriptor(_class2$c.prototype, "northPoleRightAscension"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "rotateInitAngle", [_dec10], Object.getOwnPropertyDescriptor(_class2$c.prototype, "rotateInitAngle"), _class2$c.prototype), _applyDecoratedDescriptor(_class2$c.prototype, "rotateObliquity", [_dec11], Object.getOwnPropertyDescriptor(_class2$c.prototype, "rotateObliquity"), _class2$c.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2$c.prototype, "equatorialRadius", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2$c.prototype, "_r", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2$c.prototype, "_lon", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2$c.prototype, "_oia", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2$c.prototype, "_e", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2$c.prototype, "_obo", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2$c.prototype, "_nra", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2$c.prototype, "_rto", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2$c.prototype, "_ria", [serialize], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2$c)) || _class$k));
      var WPS_CULLING_VALVE = UIProxy.WPS_CULLING_VALVE,
        NameLabelAtt$2 = UIProxy.NameLabelAtt;
      var _VisitProxy$LensOffse = VisitProxy.LensOffsets,
        BASE = _VisitProxy$LensOffse.BASE,
        SUGGEST = _VisitProxy$LensOffse.SUGGEST;
      var CUL_VAV_SQR = WPS_CULLING_VALVE * WPS_CULLING_VALVE;
      var NOT_IMP_CUL_VAV_SQR = CUL_VAV_SQR * 10;
      var v3a$6 = new Vec3();
      cclegacy._RF.pop();
      var _dec$a, _dec2$5, _dec3$3, _dec4$1, _dec5$1, _dec6$1, _dec7$1, _dec8$1, _dec9$1, _dec10$1, _dec11$1, _class$l, _class2$d, _descriptor$3, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7$1, _descriptor8$1, _descriptor9$1, _descriptor10$1, _class3$1;
      cclegacy._RF.push({}, "b5214FX48pB47zjpEfMmbkt", "dsm", undefined);
      var ccclass$a = _decorator.ccclass,
        property$2 = _decorator.property;
      var Dsm = (_dec$a = ccclass$a('cocosmos.DwarfSatelliteMinor'), _dec2$5 = property$2([Material]), _dec3$3 = property$2([Material]), _dec4$1 = property$2([Material]), _dec5$1 = property$2(Mesh), _dec6$1 = property$2(Mesh), _dec7$1 = property$2(Mesh), _dec8$1 = property$2(Mesh), _dec9$1 = property$2(MeshRenderer), _dec10$1 = property$2(MeshRenderer), _dec11$1 = property$2(MeshRenderer), _dec$a(_class$l = (_class2$d = (_class3$1 = /*#__PURE__*/function (_Orbiter) {
        _inheritsLoose(Dsm, _Orbiter);
        function Dsm() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Orbiter.call.apply(_Orbiter, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "LOD0SharedMats", _descriptor$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LOD1SharedMats", _descriptor2$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LOD2SharedMats", _descriptor3$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LOD0MeshIrr", _descriptor4$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LOD1MeshIrr", _descriptor5$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LOD0MeshSph", _descriptor6$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "LOD1MeshSph", _descriptor7$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mesh0", _descriptor8$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mesh1", _descriptor9$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mesh2", _descriptor10$1, _assertThisInitialized(_this));
          _this.rotatable = true;
          _this.important = false;
          _this._tiling = void 0;
          _this._type = void 0;
          return _this;
        }
        var _proto = Dsm.prototype;
        _proto.setType = function setType(type) {
          this._type = type;
        };
        _proto.init = function init() {
          _Orbiter.prototype.init.call(this);
        };
        _proto.step = function step(span) {
          _Orbiter.prototype.step.call(this, span);
          if (this._lod2) this.faceToSun(this._lod2);
        };
        _proto.configure = function configure() {
          this._loadMeshParams();
          this._loadLODParams();
          this._bias = calcLensBias(this.config.diam, SMALLEST, BIGGEST, NEAREST, FARTHEST);
        };
        _proto.onEnable = function onEnable() {
          this.mesh0.mesh = this.mesh0.mesh;
          this.mesh1.mesh = this.mesh1.mesh;
        };
        _proto._loadMeshParams = function _loadMeshParams() {
          var _this$_config$sphere = this._config.sphere,
            sphere = _this$_config$sphere === void 0 ? true : _this$_config$sphere;
          if (sphere) {
            this.mesh0.mesh = this.LOD0MeshSph;
            this.mesh1.mesh = this.LOD1MeshSph;
          } else {
            this.mesh0.mesh = this.LOD0MeshIrr;
            this.mesh1.mesh = this.LOD1MeshIrr;
          }
        };
        _proto._loadLODParams = function _loadLODParams() {
          var _this$_config = this._config,
            sheet = _this$_config.sheet,
            lod = _this$_config.lod;
          if (sheet == NOTFOUND_SHEET_ID) {
            this._tiling = null;
            this.mesh0.setSharedMaterial(this.LOD0SharedMats.tail, 0);
            this.mesh1.setSharedMaterial(this.LOD1SharedMats.tail, 0);
            this.mesh2.setSharedMaterial(this.LOD2SharedMats.tail, 0);
          } else {
            this._tiling = calcTiling(lod, sheet <= 1 ? DSM01_LOD_GIRDS : DSM2_LOD_GIRDS);
            this.mesh0.setSharedMaterial(this.LOD0SharedMats[sheet], 0);
            this.mesh1.setSharedMaterial(this.LOD1SharedMats[sheet], 0);
            this.mesh2.setSharedMaterial(this.LOD2SharedMats[sheet], 0);
          }
        };
        _proto.syncInstancing = function syncInstancing() {
          if (this._tiling) {
            this.mesh0.setInstancedAttribute('instanced_uv', this._tiling);
            this.mesh1.setInstancedAttribute('instanced_uv', this._tiling);
            this.mesh2.setInstancedAttribute('instanced_uv', this._tiling);
          }
        };
        _proto.initPhysicsParams = function initPhysicsParams(base) {
          _Orbiter.prototype.initPhysicsParams.call(this, base);
          if (this.cat === 'satellite') {
            var _ref = this._belong,
              northPoleRightAscension = _ref.northPoleRightAscension,
              rotateObliquity = _ref.rotateObliquity;
            this.longitudeOfNode += northPoleRightAscension;
            this.orbitalObliquity -= rotateObliquity;
          }
          if (notEmptyArr(this._config.xyz)) {
            var _this$_config$xyz = this._config.xyz,
              rx = _this$_config$xyz[0],
              ry = _this$_config$xyz[1],
              rz = _this$_config$xyz[2];
            this._real.multiply3f(rx, ry, rz);
          }
        };
        _proto.onLod0Initiated = function onLod0Initiated() {
          var sheet = this._config.sheet;
          if (sheet != NOTFOUND_SHEET_ID) {
            if (!Dsm.LoadTexTaskLaunched[sheet]) {
              Dsm.LoadTexTaskLaunched[sheet] = true;
              var sharedMat = this.mesh0.getSharedMaterial(0);
              loadCelTexture(sharedMat, "dwarfs-" + sheet + "-high", 'mainTexture', 'albedo', false);
              loadCelTexture(sharedMat, "dwarfs-" + sheet + "-high", 'normalMap', 'normal', false);
            }
          }
        };
        _proto.preloadRes = function preloadRes() {
          var sheet = this._config.sheet;
          if (sheet != NOTFOUND_SHEET_ID) {
            if (!Dsm.LoadTexTaskLaunched[sheet]) {
              Dsm.LoadTexTaskLaunched[sheet] = true;
              core.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_DSM_ALB.replace('idx', sheet + ''));
              core.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_DSM_NRM.replace('idx', sheet + ''));
            }
          }
        };
        _createClass(Dsm, [{
          key: "config",
          get: function get() {
            return this._config;
          }
        }, {
          key: "cat",
          get: function get() {
            return this._type;
          }
        }, {
          key: "sphere",
          get: function get() {
            var _this$_config$sphere2;
            return (_this$_config$sphere2 = this._config.sphere) != null ? _this$_config$sphere2 : true;
          }
        }, {
          key: "LODValves",
          get: function get() {
            return LOD_VALUES[this.cat];
          }
        }]);
        return Dsm;
      }(Orbiter), _class3$1.LoadTexTaskLaunched = [false, false, false], _class3$1), (_descriptor$3 = _applyDecoratedDescriptor(_class2$d.prototype, "LOD0SharedMats", [_dec2$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2$1 = _applyDecoratedDescriptor(_class2$d.prototype, "LOD1SharedMats", [_dec3$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3$1 = _applyDecoratedDescriptor(_class2$d.prototype, "LOD2SharedMats", [_dec4$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4$1 = _applyDecoratedDescriptor(_class2$d.prototype, "LOD0MeshIrr", [_dec5$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$1 = _applyDecoratedDescriptor(_class2$d.prototype, "LOD1MeshIrr", [_dec6$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$1 = _applyDecoratedDescriptor(_class2$d.prototype, "LOD0MeshSph", [_dec7$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$1 = _applyDecoratedDescriptor(_class2$d.prototype, "LOD1MeshSph", [_dec8$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8$1 = _applyDecoratedDescriptor(_class2$d.prototype, "mesh0", [_dec9$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9$1 = _applyDecoratedDescriptor(_class2$d.prototype, "mesh1", [_dec10$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10$1 = _applyDecoratedDescriptor(_class2$d.prototype, "mesh2", [_dec11$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$d)) || _class$l);
      var _Res$Sheets = Res.Sheets,
        DSM01_LOD_GIRDS = _Res$Sheets.DSM01_LOD_GIRDS,
        DSM2_LOD_GIRDS = _Res$Sheets.DSM2_LOD_GIRDS;
      var LOD_VALUES = {
        dwarf: [3, 1.5, 0.5, 0.2],
        satellite: [3, 1.5, 0.5, 0.2],
        minor: [3, 1.5, 0.5, 0.2]
      };
      var SMALLEST = 12.4e-6; // diameter of Deimos (mkm) TO CHECK
      var BIGGEST = 5.2682e-3; // diameter of Ganymede (mkm)
      var NEAREST = 0.2;
      var FARTHEST = 0.5;
      cclegacy._RF.pop();
      var _dec$b, _dec2$6, _dec3$4, _dec4$2, _dec5$2, _class$m, _class2$e, _descriptor$4, _descriptor2$2, _descriptor3$2, _descriptor4$2;
      cclegacy._RF.push({}, "add0awF/bJJyat60x8F/HrP", "asteroid", undefined);
      var ccclass$b = _decorator.ccclass,
        property$3 = _decorator.property;
      var Asteroid = (_dec$b = ccclass$b('cocosmos.Asteroid'), _dec2$6 = property$3([Mesh]), _dec3$4 = property$3([Mesh]), _dec4$2 = property$3(MeshRenderer), _dec5$2 = property$3(MeshRenderer), _dec$b(_class$m = (_class2$e = /*#__PURE__*/function (_CustomizedLOD) {
        _inheritsLoose(Asteroid, _CustomizedLOD);
        function Asteroid() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CustomizedLOD.call.apply(_CustomizedLOD, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "meshTypeA", _descriptor$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "meshTypeB", _descriptor2$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mesh0", _descriptor3$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mesh1", _descriptor4$2, _assertThisInitialized(_this));
          _this.cat = 'asteroid';
          _this.activating = true;
          _this._dist = 1;
          _this._orbitalVelocity = 0;
          _this._rotateVelocity = 0;
          _this._orbitalAngle = 0;
          _this._rotateAngle = 0;
          _this._config = void 0;
          _this._rotator = void 0;
          _this._center = void 0;
          _this._rectangular = false;
          _this._rectParams = {
            size: new Vec3(),
            pos: new Vec3()
          };
          return _this;
        }
        var _proto = Asteroid.prototype;
        _proto.loadConfig = function loadConfig(config, viewer, base, sun) {
          this.node.name = 'Asteroid';
          this._config = config;
          this._center = sun.node;
          this._viewer = viewer;
          this.initPhysicsParams();
          return this;
        };
        _proto.init = function init() {
          this._rotator = this.node.getChildByName('Rotator');
          this._randomMesh();
        };
        _proto._randomMesh = function _randomMesh() {
          var type = Math.randomBool() ? this.meshTypeA : this.meshTypeB;
          this.mesh0.mesh = type[0];
          this.mesh1.mesh = type[1];
        };
        _proto.onTick = function onTick(dt, tick) {
          var span = dt * timer.timescale;
          this.step(span);
          this.rotate(span);
          this.revolve(span);
          this.syncActivating();
        };
        _proto.step = function step(span) {
          this._orbitalAngle += this._orbitalVelocity * span;
          this._rotateAngle += this._rotateVelocity * span;
          if (this._orbitalAngle > DEG_PERIGON) this._orbitalAngle -= DEG_PERIGON;
          if (this._rotateAngle > DEG_PERIGON) this._rotateAngle -= DEG_PERIGON;
        };
        _proto.rotate = function rotate(span) {
          var _this2 = this;
          this._rotator.activeInHierarchy && this._rotator.children.forEach(function (child) {
            child.active && child.setRotationFromEuler(0, _this2._rotateAngle, 0);
          });
          this._lod2.forward = Vec3.subtract(v3a$7, this.node.worldPosition, this._center.worldPosition);
        };
        _proto.revolve = function revolve(span) {
          if (!this._rectangular) {
            var _dist = this._dist,
              rad = Math.parseRadian(this._orbitalAngle);
            var _ref = [Math.cos(rad), Math.sin(rad)],
              cosA = _ref[0],
              sinA = _ref[1];
            this.node.setPosition(_dist * sinA, 0, _dist * cosA);
          }
        };
        _proto.syncActivating = function syncActivating() {
          if (!this.node.parent || !this.node.parent.activeInHierarchy) return;
          if (!this.activating) {
            this.node.active = false;
            return;
          }
          this.node.active = this.activating && Vec3.squaredDistance(this.node.worldPosition, this._center.worldPosition) > NOT_IMP_CUL_VAV_SQR$1;
        };
        _proto.initPhysicsParams = function initPhysicsParams() {
          var _this$_config$ranges = this._config.ranges,
            diam = _this$_config$ranges.diam,
            dist = _this$_config$ranges.dist,
            angular = _this$_config$ranges.angular,
            scale = _this$_config$ranges.scale;
          var min = diam[0],
            max = diam[1];
          var from = dist[0],
            to = dist[1];
          var mid = Math.avg(from, to),
            w = mid / 8;
          var dec = scale[0],
            acc = scale[1];
          var ant = angular[0],
            clk = angular[1];
          this._dist = mid + Math.randomRange(-w, w);
          this._orbitalAngle = Math.randomRange(0, 360);
          this._orbitalVelocity = VelFactor / Math.sqrt(Math.pow(this._dist, 3));
          // 随机三维大小
          var s = Math.randomRange(min, max);
          this._real.set(Math.randomRange(dec, acc) * s, Math.randomRange(dec, acc) * s, Math.randomRange(dec, acc) * s);
          this.updateScale();
          // 自转信息
          this._rotateVelocity = Math.randomRange(ant, clk);
          this._rotateAngle = Math.randomRange(0, 360);
          this._rotator.setRotationFromEuler(Math.randomRange(-90, 90), 0, Math.randomRange(-90, 90));
          // 局部数据
          this._initRectangularParams();
        };
        _proto._initRectangularParams = function _initRectangularParams() {
          var BASE_SIZE = AsteroidRectangular.BASE_SIZE,
            _AsteroidRectangular$ = AsteroidRectangular.SIZE_RANGE,
            from = _AsteroidRectangular$[0],
            to = _AsteroidRectangular$[1],
            _AsteroidRectangular$2 = AsteroidRectangular.SCALE_RANGE,
            min = _AsteroidRectangular$2[0],
            max = _AsteroidRectangular$2[1],
            _AsteroidRectangular$3 = AsteroidRectangular.POS_RANGE,
            X = _AsteroidRectangular$3[0],
            Y = _AsteroidRectangular$3[1],
            Z = _AsteroidRectangular$3[2];
          var avg = BASE_SIZE * Math.randomRange(from, to);
          var _ref2 = [Math.randomRange(min, max), Math.randomRange(min, max), Math.randomRange(min, max)],
            x = _ref2[0],
            y = _ref2[1],
            z = _ref2[2];
          this._rectParams.size.set(avg * x, avg * y, avg * z);
          this._rectParams.pos.set(Math.randomRange(-X, X), Math.randomRange(-Y, Y), Math.randomRange(-Z, Z));
        };
        _proto.updateScale = function updateScale(magnified) {
          if (!this._rectangular) _CustomizedLOD.prototype.updateScale.call(this, magnified);
        };
        _proto.onLod0Initiated = function onLod0Initiated() {};
        _createClass(Asteroid, [{
          key: "LODValves",
          get: function get() {
            return ASTEROID_LOD_VALVES;
          }
        }, {
          key: "rectangular",
          set: function set(arg) {
            if (this._rectangular === arg) return;
            this._rectangular = arg;
            if (arg) {
              this.node.setScale(this._rectParams.size);
              this.node.setPosition(this._rectParams.pos);
            } else {
              this.node.setScale(this._real);
            }
          }
        }]);
        return Asteroid;
      }(CustomizedLOD), (_descriptor$4 = _applyDecoratedDescriptor(_class2$e.prototype, "meshTypeA", [_dec2$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2$2 = _applyDecoratedDescriptor(_class2$e.prototype, "meshTypeB", [_dec3$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3$2 = _applyDecoratedDescriptor(_class2$e.prototype, "mesh0", [_dec4$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4$2 = _applyDecoratedDescriptor(_class2$e.prototype, "mesh1", [_dec5$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$e)) || _class$m);
      var ASTEROID_LOD_VALVES = [3, 1, 0.3];
      var WPS_CULLING_VALVE$1 = UIProxy.WPS_CULLING_VALVE;
      var AsteroidRectangular = PlanetaryProxy.AsteroidRectangular;
      var CUL_VAV_SQR$1 = WPS_CULLING_VALVE$1 * WPS_CULLING_VALVE$1;
      var NOT_IMP_CUL_VAV_SQR$1 = CUL_VAV_SQR$1 * 10;
      var v3a$7 = new Vec3();
      var VelFactor = Math.sqrt(Math.pow(1.4959, 3)) / 365.25; // ω = sqrt(R^3/r^3)/P
      cclegacy._RF.pop();
      var _dec$c, _class$n;
      cclegacy._RF.push({}, "837advL04lK0K/IRGKXv3Tx", "belts", undefined);
      var ccclass$c = _decorator.ccclass;
      var Belts = (_dec$c = ccclass$c('cocosmos.Belts'), _dec$c(_class$n = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Belts, _Component);
        function Belts() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.cat = 'belts';
          _this.nearest = -12;
          _this.suggest = -11.2;
          _this._configs = void 0;
          _this._belts = [];
          _this._sun = void 0;
          _this._placeInPlanetary = false;
          _this._labels = [];
          _this._belong = null;
          _this._batches = [];
          return _this;
        }
        var _proto = Belts.prototype;
        _proto.placeInSolar = function placeInSolar() {
          this.node.setPosition(Vec3.ZERO);
          this._placeInPlanetary = false;
        };
        _proto.placeInPlanetary = function placeInPlanetary(name) {
          var _this$_belts$find = this._belts.find(function (_ref) {
              var belt = _ref[0];
              return belt.name === name;
            }),
            dist = _this$_belts$find[1];
          this.node.setPosition(dist, 0, 0);
          this._placeInPlanetary = true;
        };
        _proto.update = function update() {
          var _this2 = this;
          var inPlanetary = visit.inPlanetary,
            center = visit.center;
          var inactive = inPlanetary && center !== this;
          this._activeBelts = !inactive;
          if (inactive) return;
          for (var _iterator = _createForOfIteratorHelperLoose(this._batches), _step; !(_step = _iterator()).done;) {
            var batch = _step.value;
            if (!batch.instances) {
              var config = batch.config,
                belt = batch.belt;
              var template = core.res.getPrefab(Prefabs.ASTEROID);
              var viewer = findCamera(COSMOS$2, MAIN$1);
              batch.activating = true;
              batch.instances = [];
              for (var i = 0; i < NUM_IN_BATCH; i++) {
                var asteroid = createNodeAt('Asteroid', LAYER_MAIN_3D, belt, template).getComponent(Asteroid);
                asteroid.loadConfig(config, viewer, null, this._sun);
                batch.instances.push(asteroid);
              }
              break;
            } else if (!batch.activating) {
              batch.activating = true;
              batch.instances.forEach(function (ast) {
                return ast.activating = true;
              });
              break;
            } else if (this._placeInPlanetary !== batch.inPlanetary) {
              batch.inPlanetary = this._placeInPlanetary;
              this._batches.forEach(function (batch) {
                var _batch$instances;
                return (_batch$instances = batch.instances) == null ? void 0 : _batch$instances.forEach(function (aster) {
                  return aster.rectangular = _this2._placeInPlanetary;
                });
              });
              break;
            }
          }
        };
        _proto.lateUpdate = function lateUpdate() {
          if (ui.showCelNames) {
            this._claimLabels();
            for (var _iterator2 = _createForOfIteratorHelperLoose(this._labels), _step2; !(_step2 = _iterator2()).done;) {
              var label = _step2.value;
              var _label$worldOffset = label.worldOffset,
                x = _label$worldOffset.x,
                z = _label$worldOffset.z;
              if (this._hackHide(label)) {
                label.alpha = 0;
              } else {
                label.alpha = attenuate(Math.sumSqr(x, z), NameLabelAtt$3, true);
              }
            }
          } else this._freeLabels();
        };
        _proto._hackHide = function _hackHide(label) {
          return this._placeInPlanetary && (label.string === 'Main Belt' || label.string === '主小行星带');
        };
        _proto.onDisable = function onDisable() {
          this._freeLabels();
          this._batches.forEach(function (batch) {
            batch.activating = false;
            if (batch.instances) batch.instances.forEach(function (ast) {
              return ast.activating = false;
            });
          });
        };
        _proto.loadAsteroids = function loadAsteroids(sun) {
          this._sun = sun;
          this._configs = core.res.getConfig(ASTEROID_BELTS);
          for (var key in this._configs) {
            var config = this._configs[key];
            var belt = createNodeAt(key, LAYER_MAIN_3D, this.node);
            this._belts.push([belt, Math.avg.apply(Math, config.ranges.dist)]);
            var num = config.num;
            var batches = Math.round(num / NUM_IN_BATCH);
            for (var i = 0; i < batches; i++) {
              this._batches.push({
                instances: null,
                activating: false,
                belt: belt,
                config: config,
                inPlanetary: false
              });
            }
          }
          this.placeInSolar();
        };
        _proto._freeLabels = function _freeLabels() {
          if (notEmptyArr(this._labels)) this._labels.forEach(function (label) {
            return label.free();
          });
          this._labels.length = 0;
        };
        _proto._claimLabels = function _claimLabels() {
          var _this3 = this;
          if (notEmptyArr(this._labels)) return;
          var camera = findCamera(COSMOS$2, MAIN$1);
          this._belts.forEach(function (_ref2) {
            var belt = _ref2[0],
              dist = _ref2[1];
            var _this3$_configs$belt$ = _this3._configs[belt.name],
              name = _this3$_configs$belt$.name,
              cname = _this3$_configs$belt$.cname;
            for (var i = 0; i < 3; i++) {
              var label = setLabelStyle(CelestialLabel.claim('solar', belt.name), 'solar', 'belts');
              label.target = belt;
              label.camera = camera;
              var rad = i * Math.PI * 2 / 3;
              var x = Math.sin(rad) * dist,
                z = Math.cos(rad) * dist;
              label.setOffset(v3a$8.set(x, 0, z));
              label.config = {
                cn: cname,
                en: name
              };
              _this3._labels.push(label);
            }
          });
        };
        _createClass(Belts, [{
          key: "configs",
          get: function get() {
            return this._configs;
          }
        }, {
          key: "panorama",
          get: function get() {
            return -3.5;
          }
        }, {
          key: "belong",
          get: function get() {
            return this._belong;
          }
        }, {
          key: "_activeBelts",
          set: function set(arg) {
            this._belts.forEach(function (_ref3) {
              var belt = _ref3[0];
              return belt.active = arg;
            });
          }
        }]);
        return Belts;
      }(Component)) || _class$n);
      var NameLabelAtt$3 = UIProxy.NameLabelAtt;
      var Prefabs = Res.Prefabs,
        ASTEROID_BELTS = Res.Configs.ASTEROID_BELTS;
      var COSMOS$2 = SceneGraph.COSMOS,
        MAIN$1 = SceneGraph.Cameras.MAIN;
      var v3a$8 = new Vec3();
      var NUM_IN_BATCH = 20;
      cclegacy._RF.pop();
      var _dec$d, _dec2$7, _dec3$5, _dec4$3, _dec5$3, _dec6$2, _dec7$2, _class$o, _class2$f, _descriptor$5, _descriptor2$3, _descriptor3$3, _descriptor4$3, _descriptor5$2, _descriptor6$2;
      cclegacy._RF.push({}, "6913cJ7nCdA/qxRV5MDc6G9", "magnetics", undefined);
      var ccclass$d = _decorator.ccclass,
        property$4 = _decorator.property;
      var Magnetics = (_dec$d = ccclass$d('cocosmos.magnetics'), _dec2$7 = property$4(MeshRenderer), _dec3$5 = property$4(MeshRenderer), _dec4$3 = property$4(MeshRenderer), _dec5$3 = property$4(MeshRenderer), _dec6$2 = property$4(MeshRenderer), _dec7$2 = property$4(MeshRenderer), _dec$d(_class$o = (_class2$f = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Magnetics, _Component);
        function Magnetics() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spindle", _descriptor$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeInner", _descriptor2$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeMiddle", _descriptor3$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "closeOuter", _descriptor4$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openInner", _descriptor5$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "openOuter", _descriptor6$2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Magnetics.prototype;
        _proto.onEnable = function onEnable() {
          this._syncToCenter();
        };
        _proto.update = function update() {
          this._syncToCenter();
        };
        _proto.reloadConfig = function reloadConfig(config) {
          this.node.children.forEach(function (child) {
            return child.active = false;
          });
          if (!config || !config.magnetics) return;
          var _config$magnetics = config.magnetics,
            spindle = _config$magnetics.spindle,
            closes = _config$magnetics.closes,
            opens = _config$magnetics.opens;
          this._reloadOneMaterial(this.spindle, spindle);
          if (closes) {
            var inner = closes.inner,
              middle = closes.middle,
              outer = closes.outer;
            this._reloadOneMaterial(this.closeInner, inner);
            this._reloadOneMaterial(this.closeMiddle, middle);
            this._reloadOneMaterial(this.closeOuter, outer);
          }
          if (opens) {
            var _inner = opens.inner,
              _outer = opens.outer;
            this._reloadOneMaterial(this.openInner, _inner);
            this._reloadOneMaterial(this.openOuter, _outer);
          }
        };
        _proto._reloadOneMaterial = function _reloadOneMaterial(mesh, config) {
          if (!config) return;
          mesh.node.active = true;
          var scale = config[0],
            mainColor = config[1],
            lineColor = config[2],
            lineStrength = config[3],
            lineDensity = config[4],
            lineSpeed = config[5],
            noiseStrength = config[6];
          var s = scale != null ? scale : 1;
          mesh.node.setScale(s, s, s);
          var mat = mesh.material;
          mat.setProperty('mainColor', this._setColor(mainColor));
          mat.setProperty('lineColor', this._setColor(lineColor));
          mat.setProperty('args', v4a$1.set(lineStrength != null ? lineStrength : 0.5, lineDensity != null ? lineDensity : 24, lineSpeed != null ? lineSpeed : 0, noiseStrength != null ? noiseStrength : 0));
        };
        _proto._syncToCenter = function _syncToCenter() {
          var center = planetary.center,
            unbelt = planetary.unbelt;
          this.node.setWorldScale(center.node.worldScale);
          this.node.setWorldPosition(center.node.worldPosition);
          if (unbelt) {
            center.faceToSun(this.node);
          }
        };
        _proto._setColor = function _setColor(arr) {
          var _arr$, _arr$2, _arr$3, _arr$4;
          color$1.set((_arr$ = arr[0]) != null ? _arr$ : 0, (_arr$2 = arr[1]) != null ? _arr$2 : 0, (_arr$3 = arr[2]) != null ? _arr$3 : 0, (_arr$4 = arr[3]) != null ? _arr$4 : 0);
          return color$1;
        };
        return Magnetics;
      }(Component), (_descriptor$5 = _applyDecoratedDescriptor(_class2$f.prototype, "spindle", [_dec2$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$3 = _applyDecoratedDescriptor(_class2$f.prototype, "closeInner", [_dec3$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$3 = _applyDecoratedDescriptor(_class2$f.prototype, "closeMiddle", [_dec4$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$3 = _applyDecoratedDescriptor(_class2$f.prototype, "closeOuter", [_dec5$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$2 = _applyDecoratedDescriptor(_class2$f.prototype, "openInner", [_dec6$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$2 = _applyDecoratedDescriptor(_class2$f.prototype, "openOuter", [_dec7$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$f)) || _class$o);
      var color$1 = new Color();
      var v4a$1 = new Vec4();
      cclegacy._RF.pop();
      var _dec$e, _class$p;
      cclegacy._RF.push({}, "8d5e72RbKhAeqeC3DyULdRS", "comet", undefined);
      var ccclass$e = _decorator.ccclass;
      var Comet = (_dec$e = ccclass$e('cocosmos.Comet'), _dec$e(_class$p = /*#__PURE__*/function (_Orbiter) {
        _inheritsLoose(Comet, _Orbiter);
        function Comet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Orbiter.call.apply(_Orbiter, [this].concat(args)) || this;
          _this.rotatable = false;
          _this.important = false;
          _this.named = true;
          _this.cat = 'comet';
          return _this;
        }
        var _proto = Comet.prototype;
        _proto.step = function step(span) {
          _Orbiter.prototype.step.call(this, span);
          this.faceToSun(this._lod0);
          this.faceToSun(this._lod1);
        };
        _proto.init = function init() {
          _Orbiter.prototype.init.call(this);
        };
        _proto.onLod0Initiated = function onLod0Initiated() {};
        _proto.configure = function configure() {
          this._bias = calcLensBias(this.config.diam, SMALLEST$1, BIGGEST$1, NEAREST$1, FARTHEST$1);
        };
        _proto.syncLODChoosing = function syncLODChoosing() {
          _Orbiter.prototype.syncLODChoosing.call(this);
          if (planetary.center === this) {
            this._lod0.active = false;
          }
        };
        _createClass(Comet, [{
          key: "config",
          get: function get() {
            return this._config;
          }
        }, {
          key: "LODValves",
          get: function get() {
            return COMET_LOD_VALVES;
          }
        }]);
        return Comet;
      }(Orbiter)) || _class$p);
      var COMET_LOD_VALVES = [0.5, 0.1];
      var SMALLEST$1 = 5e-8; // TO CHECK
      var BIGGEST$1 = 20e-8; // TO CHECK
      var NEAREST$1 = 0.2;
      var FARTHEST$1 = 0.7;
      cclegacy._RF.pop();
      var _dec$f, _dec2$8, _class$q, _class2$g, _descriptor$6;
      cclegacy._RF.push({}, "72596YjpSpI4o532xcmTrDK", "comet-hd", undefined);
      var ccclass$f = _decorator.ccclass,
        property$5 = _decorator.property;
      var CometHightDefinition = (_dec$f = ccclass$f('cocosmos.comet-hd'), _dec2$8 = property$5(Material), _dec$f(_class$q = (_class2$g = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CometHightDefinition, _Component);
        function CometHightDefinition() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sharedInstMaterial", _descriptor$6, _assertThisInitialized(_this));
          _this._strength = 1;
          _this._sharedPass0 = void 0;
          _this._sharedHandle = void 0;
          return _this;
        }
        var _proto = CometHightDefinition.prototype;
        _proto.onLoad = function onLoad() {
          this._sharedPass0 = this.sharedInstMaterial.passes[0];
          this._sharedHandle = this._sharedPass0.getHandle("nearStrength");
        };
        _proto.onEnable = function onEnable() {
          var centerName = planetary.centerName;
          var config = core.res.getConfigItem(Res.Configs.SOLAR_COMETS, centerName);
          if (config != null && config.tint) Color.fromHEX(color$2, config == null ? void 0 : config.tint);else Color.copy(color$2, DFT_COL);
          this.sharedInstMaterial.setProperty('baseColor', color$2);
        };
        _proto.update = function update() {
          this._syncToCenter();
          this._sharedPass0.setUniform(this._sharedHandle, this._strength);
        };
        _proto._syncToCenter = function _syncToCenter() {
          var center = planetary.center;
          if (center && center instanceof Comet) {
            var comet = center;
            this.node.setWorldScale(comet.node.worldScale);
            this.node.setWorldPosition(comet.node.worldPosition);
            this._strength = smoothstep(0.5, 0.1, comet.node.worldScale.x);
            comet.faceToSun(this.node);
          }
        };
        return CometHightDefinition;
      }(Component), _descriptor$6 = _applyDecoratedDescriptor(_class2$g.prototype, "sharedInstMaterial", [_dec2$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2$g)) || _class$q);
      var color$2 = new Color(255, 255, 255, 255);
      var DFT_COL = new Color(0, 97, 191, 255);

      // ,"tint": "#6199ff"
      // ,"tint": "#3e6ffc"
      //
      // ,"tint": "#8d2be7"
      //
      // ,"tint": "#1ecbea"
      // ,"tint": "#2c6dff"
      //
      // ,"tint": "#2dc1ff"
      //
      // ,"tint": "#4efff0"
      //
      //
      // ,"tint": "#703df0"
      // ,"tint": "#52e6a6"
      //
      // ,"tint": "#3a92ff"
      // ,"tint": "#3ab3ff"
      // ,"tint": "#35ff5b"
      // ,"tint": "#4bdd4b"
      //
      //
      // ,"tint": "#a8ff5b"
      //
      // ,"tint": "#a6ff3c"
      // ,"tint": "#ecf55a"
      cclegacy._RF.pop();
      var _dec$g, _dec2$9, _dec3$6, _dec4$4, _class$r, _class2$h, _descriptor$7, _descriptor2$4, _descriptor3$4, _class3$2;
      cclegacy._RF.push({}, "2ad409YqJ1M/qOtcWpxG1Fp", "astronomical", undefined);
      var ccclass$g = _decorator.ccclass,
        property$6 = _decorator.property;
      var Astronomical = (_dec$g = ccclass$g('cocosmos.astronomical'), _dec2$9 = property$6(MeshRenderer), _dec3$6 = property$6(MeshRenderer), _dec4$4 = property$6(MeshRenderer), _dec$g(_class$r = (_class2$h = (_class3$2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Astronomical, _Component);
        function Astronomical() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "lunarPlane", _descriptor$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "equatorialPlane", _descriptor2$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eclipticPlane", _descriptor3$4, _assertThisInitialized(_this));
          _this._moon = null;
          _this._lunarInited = false;
          _this._planes = new Map();
          return _this;
        }
        var _proto = Astronomical.prototype;
        _proto.reorientate = function reorientate(moon) {
          this._moon = moon != null ? moon : null;
          this.equatorialPlane.node.forward = planetary.center.rotator.right;
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          [this.lunarPlane, this.equatorialPlane, this.eclipticPlane].forEach(function (plane) {
            var pass0 = plane.material.passes[0];
            var handle = pass0.getHandle('rolling');
            _this2._planes.set(plane.node, {
              pass0: pass0,
              handle: handle,
              rolling: 0
            });
          });
        };
        _proto.checkLoadTex = function checkLoadTex() {
          var _this3 = this;
          if (!Astronomical.LoadTexTaskLaunched) {
            Astronomical.LoadTexTaskLaunched = true;
            resources.load(Res.Textures.AST_PLANES, Texture2D, function (err, tex) {
              if (err) console.error('planes texture', err);else {
                [_this3.lunarPlane, _this3.equatorialPlane, _this3.eclipticPlane].forEach(function (plane) {
                  return plane.material.setProperty('mainTexture', tex);
                });
              }
            });
          }
        };
        _proto.onEnable = function onEnable() {
          this._syncToCenter();
        };
        _proto.update = function update(dt) {
          this._syncToCenter();
          this._syncLunar();
          this._record();
          for (var _iterator = _createForOfIteratorHelperLoose(this._planes), _step; !(_step = _iterator()).done;) {
            var _step$value = _step.value,
              plane = _step$value[0];
            plane.active = planetary['show' + plane.name];
            if (plane.active && !records.get(plane)) this._planes.get(plane).rolling = 1;
          }
        };
        _proto._syncToCenter = function _syncToCenter() {
          var center = planetary.center;
          if (center) {
            this.node.setWorldScale(Vec3.multiplyScalar(v3a$9, center.node.worldScale, PLANE_RATIO));
            this.node.setWorldPosition(center.node.worldPosition);
          }
        };
        _proto._syncLunar = function _syncLunar() {
          if (this._moon && planetary.showLunarPlane) {
            if (timer.timescale < 1 && this._lunarInited) return;
            var planet = planetary.center,
              sun = planetary.center.belong,
              moon = this._moon;
            var rad = Math.parseRadian(moon.longitudeOfNode);
            v3a$9.set(Math.sin(rad), 0, Math.cos(rad));
            Vec3.subtract(v3b$1, moon.node.worldPosition, planet.node.worldPosition);
            Vec3.cross(v3a$9, v3a$9, v3b$1); // v3a = normal(up)
            if (v3a$9.y < 0) v3a$9.negative();
            Vec3.subtract(v3b$1, sun.node.worldPosition, planet.node.worldPosition);
            Vec3.cross(v3b$1, v3a$9, v3b$1); // v3b = right
            // Vec3.cross(v3b, v3b, v3a);  // v3b = forward
            this.lunarPlane.node.lookAt(v3b$1, v3a$9);
            this._lunarInited = true;
          }
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this._planes), _step2; !(_step2 = _iterator2()).done;) {
            var _step2$value = _step2.value,
              plane = _step2$value[0],
              rolling = _step2$value[1].rolling;
            var rec = this._planes.get(plane);
            if (rolling > 0) rec.rolling -= dt;else rec.rolling = 0;
            plane.active && rec.pass0.setUniform(rec.handle, easing.sineIn(rec.rolling));
          }
        };
        _proto._record = function _record() {
          this.node.children.forEach(function (child) {
            records.set(child, child.active);
          });
        };
        return Astronomical;
      }(Component), _class3$2.LoadTexTaskLaunched = false, _class3$2), (_descriptor$7 = _applyDecoratedDescriptor(_class2$h.prototype, "lunarPlane", [_dec2$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$4 = _applyDecoratedDescriptor(_class2$h.prototype, "equatorialPlane", [_dec3$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$4 = _applyDecoratedDescriptor(_class2$h.prototype, "eclipticPlane", [_dec4$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$h)) || _class$r);
      var records = new Map();
      var v3a$9 = new Vec3();
      var v3b$1 = new Vec3();
      var PLANE_RATIO = 2;
      cclegacy._RF.pop();
      var _dec$h, _dec2$a, _dec3$7, _dec4$5, _class$s, _class2$i, _descriptor$8, _descriptor2$5, _descriptor3$5;
      cclegacy._RF.push({}, "6e19fywE0JHvo05eIe1TApG", "planetary-system", undefined);
      var ccclass$h = _decorator.ccclass,
        property$7 = _decorator.property;
      var PlanetarySystem = exports('P', (_dec$h = ccclass$h('cocosmos.PlanetarySystem'), _dec2$a = property$7(Magnetics), _dec3$7 = property$7(Astronomical), _dec4$5 = property$7(CometHightDefinition), _dec$h(_class$s = (_class2$i = /*#__PURE__*/function (_Controller) {
        _inheritsLoose(PlanetarySystem, _Controller);
        function PlanetarySystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Controller.call.apply(_Controller, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gmt", _descriptor$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ast", _descriptor2$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chd", _descriptor3$5, _assertThisInitialized(_this));
          _this._satellites = [];
          _this._pool = [];
          _this._container = void 0;
          _this._hidingContents = false;
          _this._loaded = false;
          return _this;
        }
        var _proto = PlanetarySystem.prototype;
        _proto.getSatellite = function getSatellite(name) {
          return this._satellites.find(function (sat) {
            return sat.node.name === name;
          });
        };
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto.update = function update() {
          var showSatellites = planetary.showSatellites,
            showMagnetics = planetary.showMagnetics,
            inPlanet = visit.inPlanet,
            inComet = visit.inComet;
          this._container.active = showSatellites && !this._hidingContents;
          this.gmt.node.active = inPlanet && showMagnetics && !this._hidingContents;
          this.ast.node.active = inPlanet && !this._hidingContents;
          this.chd.node.active = inComet;
        };
        _proto._init = function _init() {
          this._container = createNodeAt('Satellites', LAYER_MAIN_3D, this.node);
          this.gmt.node.active = this.ast.node.active = this.chd.node.active = false;
          return this;
        };
        _proto._listen = function _listen() {
          var _this2 = this;
          this.on(Transform$1.FACE_OVER, function () {
            return _this2._hidingContents = false;
          });
        };
        _proto.loadSystem = function loadSystem() {
          if (this._loaded) return console.warn('[planetary-system]', 'reload error!');
          var _visit$transInfo = visit.transInfo,
            target = _visit$transInfo.target,
            name = _visit$transInfo.name,
            mediator = _visit$transInfo.mediator;
          var to = mediator != null ? mediator : target;
          var into = to.cat;
          planetary.reloadOrbiterParams(to, null, to.suggest + PLANET_SCOPE);
          var pluto = to.node.name === 'Pluto';
          if (into === 'planet' || pluto) {
            var planet = to;
            var pname = planet.node.name;
            var config = core.res.getConfigItem(pluto ? SOLAR_DWARFS : SOLAR_PLANETS, pname);
            var satellites = config == null ? void 0 : config.satellites;
            var radius = this._reloadSatellites(satellites, planet);
            planetary.reloadOrbiterParams(planet, satellites, radius);
            this.gmt.reloadConfig(planet.config);
            this.ast.reorientate(this.getSatellite('Moon'));
            this.ast.checkLoadTex();
          } else if (into === 'comet') ;else if (into === 'belts') {
            console.log("Here into belts");
            var belts = to;
            belts.placeInPlanetary(name);
          }
          this._loaded = true;
        };
        _proto._reloadSatellites = function _reloadSatellites(satellites, belongs) {
          var _this3 = this;
          var farthest = 0;
          if (notEmptyArr(satellites)) {
            var viewer = findCamera(COSMOS$3, MAIN$2);
            satellites.forEach(function (sat) {
              var config = core.res.getConfigItem(PLANETARY_SATELLITES, sat);
              var satellite = _this3._claim(config, viewer, belongs);
              _this3.satellites.push(satellite);
              var scope = satellite.orbitalRadius;
              if (scope > farthest) farthest = scope;
            });
          }
          this._hidingContents = true; // Here Planetary System changed
          return farthest === 0 ? 0 : Math.log10(farthest * 2) + BASE_POW10;
        };
        _proto.freeSystem = function freeSystem() {
          var _this4 = this;
          this._satellites.forEach(function (sat) {
            return _this4._free(sat);
          });
          this._satellites.length = 0;
          this._loaded = false;
          planetary.reloadOrbiterParams(null);
          this.unscheduleAllCallbacks();
          // if (visit.transInfo.from instanceof Belts) {
          //     this.scheduleOnce(() => (visit.transInfo.from as Belts).placeInSolar(), 0.5);
          // }
          if (visit.transInfo.from instanceof Belts) {
            visit.transInfo.from.placeInSolar();
          }
        };
        _proto._claim = function _claim(config, viewer, belongs) {
          var _this$_pool$pop;
          var satellite = (_this$_pool$pop = this._pool.pop()) != null ? _this$_pool$pop : instantiate(core.res.getPrefab(Prefabs$1.DSM)).getComponent(Dsm);
          satellite.setType('satellite');
          satellite.node.parent = this._container;
          satellite.loadConfig(config, viewer, BASE_POW10, belongs);
          return satellite;
        };
        _proto._free = function _free(satellite) {
          this._pool.push(satellite);
          satellite.node.removeFromParent();
        };
        _createClass(PlanetarySystem, [{
          key: "satellites",
          get: function get() {
            return this._satellites;
          }
        }]);
        return PlanetarySystem;
      }(Controller), (_descriptor$8 = _applyDecoratedDescriptor(_class2$i.prototype, "gmt", [_dec2$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$5 = _applyDecoratedDescriptor(_class2$i.prototype, "ast", [_dec3$7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$5 = _applyDecoratedDescriptor(_class2$i.prototype, "chd", [_dec4$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$i)) || _class$s));
      var Prefabs$1 = Res.Prefabs,
        _Res$Configs = Res.Configs,
        SOLAR_PLANETS = _Res$Configs.SOLAR_PLANETS,
        SOLAR_DWARFS = _Res$Configs.SOLAR_DWARFS,
        PLANETARY_SATELLITES = _Res$Configs.PLANETARY_SATELLITES;
      var COSMOS$3 = SceneGraph.COSMOS,
        MAIN$2 = SceneGraph.Cameras.MAIN;
      var Transform$1 = View.Transform;
      var BASE_POW10 = CosmosProxy.Scopes.Planetary[2];
      var PLANET_SCOPE = VisitProxy.LensOffsets.PLANET_SCOPE;
      cclegacy._RF.pop();
      var _dec$i, _dec2$b, _dec3$8, _class$t, _class2$j, _descriptor$9, _descriptor2$6;
      cclegacy._RF.push({}, "851382nxJZB14Mz460ig8Wi", "planet", undefined);
      var ccclass$i = _decorator.ccclass,
        type = _decorator.type;
      var group$1 = group$5;
      var Planet = (_dec$i = ccclass$i('cocosmos.Planet'), _dec2$b = group$1("自转参数.A", "表面风速", ["unit", "deg/s"]), _dec3$8 = type([Material]), _dec$i(_class$t = (_class2$j = /*#__PURE__*/function (_Orbiter) {
        _inheritsLoose(Planet, _Orbiter);
        function Planet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Orbiter.call.apply(_Orbiter, [this].concat(args)) || this;
          _this.rotatable = true;
          _this.important = true;
          _this.cat = 'planet';
          _initializerDefineProperty(_this, "windVelocity", _descriptor$9, _assertThisInitialized(_this));
          _this.cloudAngle = 0;
          _initializerDefineProperty(_this, "presetMaterials", _descriptor2$6, _assertThisInitialized(_this));
          _this._sourcePreloaded = false;
          _this._atmosphere = void 0;
          _this._clouds = void 0;
          _this._ring = void 0;
          _this._mat0 = void 0;
          _this._pass0 = void 0;
          _this._solarPos = void 0;
          _this._pass0Cloud = void 0;
          _this._solarPosCloud = void 0;
          _this._meshAtm = void 0;
          _this._mesh1 = void 0;
          _this._mesh2 = void 0;
          _this._mesh3 = void 0;
          _this._tiling = void 0;
          _this._atmColor = void 0;
          _this._tint = [255, 255, 255, 255];
          return _this;
        }
        var _proto = Planet.prototype;
        _proto.init = function init() {
          _Orbiter.prototype.init.call(this);
          this._atmosphere = this._lod0.getChildByName('Atmosphere');
          this._clouds = this._lod0.getChildByName('Clouds');
          this._ring = this._lod0.getChildByName('Ring');
          this._meshAtm = this._atmosphere.getComponent(MeshRenderer);
          this._mesh1 = this._lod1.getComponent(MeshRenderer);
          this._mesh2 = this._lod2.getComponent(MeshRenderer);
          this._mesh3 = this._lod3.getComponent(MeshRenderer);
        };
        _proto.step = function step(span) {
          _Orbiter.prototype.step.call(this, span);
          this.cloudAngle += this.windVelocity * span;
          this.faceToSun(this._lod2);
        };
        _proto.rotate = function rotate(span) {
          _Orbiter.prototype.rotate.call(this, span);
          if (this._clouds.active) this._clouds.setRotationFromEuler(0, this.cloudAngle, 0);
        };
        _proto.configure = function configure() {
          this._loadSurfaceParams();
          this._loadLODParams();
          this._bias = calcLensBias(this.config.diam, SMALLEST$2, BIGGEST$2, NEAREST$2, FARTHEST$2);
        };
        _proto.preloadRes = function preloadRes() {
          if (this._sourcePreloaded) return;
          this._sourcePreloaded = true;
          var name = this._config.name;
          preloadCelTexture(name, 'albedo', true);
          var _ref = this._config.surface,
            land = _ref.land,
            atmosphere = _ref.atmosphere,
            reflect = _ref.reflect;
          if (land != null && land.mountains) preloadCelTexture(name, 'normal', true);
          if (reflect != null && reflect.night) preloadCelTexture(name, 'emissive', true);
          if (atmosphere != null && atmosphere.clouds) preloadCelTexture(name, 'clouds', true);
        };
        _proto._loadSurfaceParams = function _loadSurfaceParams() {
          this._loadPresetMaterialInst();
          this._mat0 = this._lod0.getComponent(MeshRenderer).getMaterialInstance(0);
          this._pass0 = this._mat0.passes[0];
          this._solarPos = this._pass0.getHandle('solarPos');
          var _this$_config$surface = this._config.surface,
            land = _this$_config$surface.land,
            ring = _this$_config$surface.ring;
          if (land.tint) {
            var _land$tint;
            var _Color$fromHEX = Color.fromHEX(col$1, (_land$tint = land.tint) != null ? _land$tint : '#FFFFFF'),
              r = _Color$fromHEX.r,
              g = _Color$fromHEX.g,
              b = _Color$fromHEX.b,
              a = _Color$fromHEX.a;
            this._tint = [r, g, b, a];
          }
          if (ring) this._lod1.getChildByName('Ring').active = true;
        };
        _proto._loadLODParams = function _loadLODParams() {
          var lod = this._config.lod;
          this._tiling = calcTiling(lod, CELESTIAL_GRIDS);
        };
        _proto.syncInstancing = function syncInstancing() {
          this._pass0.setUniform(this._solarPos, this._belong.node.worldPosition);
          this._atmosphere.active && this._meshAtm.setInstancedAttribute('instanced_color', this._atmColor);
          this._clouds.active && this._pass0Cloud && this._pass0Cloud.setUniform(this._solarPosCloud, this._belong.node.worldPosition);
          this._mesh1.setInstancedAttribute('instanced_uv', this._tiling);
          this._mesh2.setInstancedAttribute('instanced_uv', this._tiling);
          this._mesh3.setInstancedAttribute('instanced_color', this._tint);
        };
        _proto.onLod0Initiated = function onLod0Initiated() {
          var name = this._config.name;
          var low = name.toLocaleLowerCase();
          // surface land map
          loadCelTexture(this._mat0, name, 'mainTexture', 'albedo', true);
          var _ref2 = this._config.surface,
            land = _ref2.land,
            atmosphere = _ref2.atmosphere,
            reflect = _ref2.reflect,
            ring = _ref2.ring;
          var _land$brightness = land.brightness,
            brightness = _land$brightness === void 0 ? 1 : _land$brightness,
            mountains = land.mountains,
            wind = land.wind;
          setMatScaleVec3(this._mat0, 'albedoScale', brightness * 1.5);
          if (mountains) {
            var _mountains$strength;
            loadCelTexture(this._mat0, name, 'normalMap', 'normal', true);
            this._mat0.setProperty('normalStrength', Math.clamp((_mountains$strength = mountains.strength) != null ? _mountains$strength : 1, 0, 5));
          }
          if (wind) {
            var tex = core.res.getSheetFrame(Res.Sheets.PRESET, low + "-wind");
            this._mat0.setProperty("windMap", tex.texture);
          }
          if (notEmpty(atmosphere)) {
            this._atmosphere.active = true;
            var scale = atmosphere.scale,
              color = atmosphere.color,
              thickness = atmosphere.thickness,
              clouds = atmosphere.clouds;
            var s = scale != null ? scale : DEFAULT_ATM_SCALE;
            this._atmosphere.setScale(s, s, s);
            var _Color$fromHEX2 = Color.fromHEX(col$1, color != null ? color : '#FFFFFF'),
              r = _Color$fromHEX2.r,
              g = _Color$fromHEX2.g,
              b = _Color$fromHEX2.b,
              a = _Color$fromHEX2.a;
            this._atmColor = [r, g, b, a];
            /** @notice don't get instance material like next line, atmosphere is setup by 'instanced_color' and unified set params by shared material */
            // setMatColor(this._atmosphere.getComponent(MeshRenderer)?.material!, 'atmColor', color, thickness);
            if (notEmpty(clouds)) {
              var _this$_clouds$getComp;
              var _color = clouds.color,
                _clouds$strength = clouds.strength,
                strength = _clouds$strength === void 0 ? 1 : _clouds$strength,
                _clouds$speed = clouds.speed,
                speed = _clouds$speed === void 0 ? 0 : _clouds$speed;
              var matC = (_this$_clouds$getComp = this._clouds.getComponent(MeshRenderer)) == null ? void 0 : _this$_clouds$getComp.material;
              this._pass0Cloud = matC.passes[0];
              this._solarPosCloud = this._pass0Cloud.getHandle('solarPos');
              loadCelTexture(matC, name, 'mainTexture', 'clouds', true);
              setMatColor(matC, 'cloudColor', _color, thickness);
              setMatScaleVec3(matC, 'albedoScale', strength);
              this.windVelocity = speed;
              this._clouds.active = true;
            } else this._clouds.active = false;
          } else this._atmosphere.active = false;
          if (notEmpty(reflect)) {
            var _color2 = reflect.color,
              _strength = reflect.strength,
              night = reflect.night;
            setMatColor(this._mat0, 'fresnelColor', _color2, _strength);
            if (night) {
              loadCelTexture(this._mat0, name, 'emissiveMap', 'emissive', true);
              setMatScaleVec3(this._mat0, 'emissiveScale', night.strength);
            }
          }
          if (ring) {
            var _this$_ring$getCompon;
            var matR = (_this$_ring$getCompon = this._ring.getComponent(MeshRenderer)) == null ? void 0 : _this$_ring$getCompon.material;
            var _tex = core.res.getSheetFrame(Res.Sheets.PRESET, low + "-ring");
            if (matR && _tex) matR.setProperty("mainTexture", _tex.texture);else console.warn('lost ring texture for:', name);
            this._ring.active = true;
          } else this._ring.active = false;
        };
        _proto._loadPresetMaterialInst = function _loadPresetMaterialInst() {
          /** use presets to decrease shader compiling time **/
          var preset = getPresetPlanetMatInst(this._config.name);
          var mat = this.presetMaterials.find(function (mat) {
            return mat.name === preset;
          });
          var mesh = this._lod0.getComponent(MeshRenderer);
          mesh.setMaterialInstance(mat, 0);
        };
        _createClass(Planet, [{
          key: "config",
          get: function get() {
            return this._config;
          }
        }, {
          key: "LODValves",
          get: function get() {
            return PLANET_LOD_VALVES;
          }
        }]);
        return Planet;
      }(Orbiter), (_descriptor$9 = _applyDecoratedDescriptor(_class2$j.prototype, "windVelocity", [_dec2$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2$6 = _applyDecoratedDescriptor(_class2$j.prototype, "presetMaterials", [_dec3$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2$j)) || _class$t);
      var CELESTIAL_GRIDS = Res.Sheets.PLANETS_LOD_GIRDS;
      var col$1 = new Color();
      var DEFAULT_ATM_SCALE = 1.2;
      var PLANET_LOD_VALVES = [3, 1.5, 0.5, 0.2];
      var SMALLEST$2 = 4.878e-5; // diameter of Mercury (ykm)
      var BIGGEST$2 = 139.822e-5; // diameter of Jupiter (ykm)
      var NEAREST$2 = 0.0;
      var FARTHEST$2 = 0.2;
      cclegacy._RF.pop();
      var _dec$j, _class$u;
      cclegacy._RF.push({}, "ba8d3eGZtlDRICD7JxuKiMU", "sun", undefined);
      var ccclass$j = _decorator.ccclass;
      var Sun = (_dec$j = ccclass$j('cocosmos.Sun'), _dec$j(_class$u = /*#__PURE__*/function (_CustomizedLOD) {
        _inheritsLoose(Sun, _CustomizedLOD);
        function Sun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CustomizedLOD.call.apply(_CustomizedLOD, [this].concat(args)) || this;
          _this.cat = 'star';
          _this._config = void 0;
          _this._visible = false;
          _this._nearest = 0;
          _this._magnified = 0;
          _this._label = null;
          _this._coronas = void 0;
          _this._prominences = void 0;
          _this._precise = null;
          return _this;
        }
        var _proto = Sun.prototype;
        _proto.loadReference = function loadReference(precise) {
          this._precise = precise;
        };
        _proto.update = function update(dt) {
          if (this._coronas) {
            this.faceToView(this._coronas);
            this._coronas.children.forEach(function (child, i) {
              child.angle += dt * 10 * (0.5 - i);
            });
          }
        };
        _proto.faceToView = function faceToView(child) {
          child.forward = Vec3.subtract(v3a$a, this.node.worldPosition, this._viewer.node.worldPosition);
        };
        _proto.loadConfig = function loadConfig(config, viewer, base) {
          this._config = config;
          this._viewer = viewer;
          var diam = config.diam;
          this._real.set(diam, diam, diam);
          this.updateScale();
          this._nearest = Math.log10(diam) + base;
        };
        _proto.init = function init() {
          this._coronas = this._lod0.getChildByName('Coronas');
          this._prominences = this._lod0.getChildByName('Prominences');
        };
        _proto.onLod0Initiated = function onLod0Initiated() {};
        _proto.onTick = function onTick() {
          if (visit.inSolar && this.node.name === "Sun") {
            this._magnified = Math.log10(solar.getMagnified('star'));
          }
          this.syncNameLabel();
        };
        _proto.syncNameLabel = function syncNameLabel() {
          if (this.node.activeInHierarchy && ui.showCelNames) {
            if (!this._label) {
              this._label = setLabelStyle(CelestialLabel.claim('solar', this.node.name), 'solar', 'sun');
              this._label.camera = this._viewer;
              this._label.target = this.node;
              this._label.key = "celestial@" + this._config.name;
            }
            this._label.alpha = attenuate(cosmos.pow10, SUN_LABEL_ATT, false);
          } else this._freeLabel();
        };
        _proto._freeLabel = function _freeLabel() {
          if (this._label) {
            this._label.free();
            this._label = null;
          }
        };
        _createClass(Sun, [{
          key: "LODValves",
          get: function get() {
            return SUN_LOD_VALVES;
          }
        }, {
          key: "config",
          get: function get() {
            return this._config;
          }
        }, {
          key: "nearest",
          get: function get() {
            return this._nearest + this._magnified;
          }
        }, {
          key: "suggest",
          get: function get() {
            return this.nearest + SUGGEST$1;
          }
        }, {
          key: "panorama",
          get: function get() {
            return this.nearest + 2;
          }
        }, {
          key: "refer",
          get: function get() {
            var _this$_precise$node;
            return (_this$_precise$node = this._precise.node) != null ? _this$_precise$node : null;
          }
        }, {
          key: "visible",
          get: function get() {
            return this._visible;
          },
          set: function set(arg) {
            if (arg === this._visible) return;
            this.getComponentsInChildren(MeshRenderer).forEach(function (mesh) {
              return mesh.enabled = arg;
            });
            this._visible = arg;
          }
        }]);
        return Sun;
      }(CustomizedLOD)) || _class$u);
      var SUN_LABEL_ATT = [-6.5, -5.5, -2.5, -1.5];
      var SUGGEST$1 = VisitProxy.LensOffsets.SUGGEST;
      var SUN_LOD_VALVES = [3, 0.9, 0.3];
      var v3a$a = new Vec3();
      cclegacy._RF.pop();
      var _dec$k, _dec2$c, _dec3$9, _class$v, _class2$k, _descriptor$a, _descriptor2$7;
      cclegacy._RF.push({}, "817540rhyJMU4WWW3K8boMP", "solar-system", undefined);
      var findNode = findNode$1;
      var ccclass$k = _decorator.ccclass,
        property$8 = _decorator.property;
      var SolarSystem = exports('q', (_dec$k = ccclass$k('cocosmos.SolarSystem'), _dec2$c = property$8([Material]), _dec3$9 = property$8(MeshRenderer), _dec$k(_class$v = (_class2$k = /*#__PURE__*/function (_Controller) {
        _inheritsLoose(SolarSystem, _Controller);
        function SolarSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Controller.call.apply(_Controller, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sharedInstMaterials", _descriptor$a, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dust", _descriptor2$7, _assertThisInitialized(_this));
          _this._pass0 = void 0;
          _this._handleDust = void 0;
          _this._sun = null;
          _this._light = null;
          _this._planets = [];
          _this._dwarfs = [];
          _this._minors = [];
          _this._comets = [];
          _this._belts = null;
          _this._sharedPasses = [];
          _this._sharedHandles = [];
          _this._containers = {};
          return _this;
        }
        var _proto = SolarSystem.prototype;
        _proto.getCelestial = function getCelestial(name, type) {
          if (name === 'Sun') return this._sun;
          switch (type) {
            case 'planet':
              return this._planets.find(function (p) {
                return p.node.name === name;
              });
            case 'dwarf':
              return this._dwarfs.find(function (p) {
                return p.node.name === name;
              });
            case 'minor':
              return this._minors.find(function (p) {
                return p.node.name === name;
              });
            case 'comet':
              return this._comets.find(function (p) {
                return p.node.name === name;
              });
            case 'belts':
              return this._belts;
          }
        };
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto.update = function update() {
          this._sycSolarPos();
          this._updateVisible();
        };
        _proto._updateVisible = function _updateVisible() {
          var showSun = solar.showSun,
            showPlanets = solar.showPlanets,
            showDwarfs = solar.showDwarfs,
            showMinors = solar.showMinors,
            showComets = solar.showComets,
            showBelts = solar.showBelts;
          this._sun.visible = showSun;
          if (this._containers.planet) this._containers.planet.active = showPlanets;
          if (this._containers.dwarf) this._containers.dwarf.active = showDwarfs;
          this._checkBuilds();
          if (this._containers.minor) this._containers.minor.active = showMinors;
          if (this._containers.comet) this._containers.comet.active = showComets;
          if (this._containers.belts) {
            this._containers.belts.active = showBelts;
            this.dust.node.active = showBelts;
          }
        };
        _proto.lateUpdate = function lateUpdate() {
          color$3.set(SolarProxy.BeltColor);
          color$3.a = 127 * attenuate(cosmos.pow10, BeltAtt, false);
          this._pass0.setUniform(this._handleDust, color$3);
        };
        _proto._checkBuilds = function _checkBuilds() {
          var showMinors = solar.showMinors,
            showComets = solar.showComets,
            showBelts = solar.showBelts;
          if (showMinors && !this._containers.minor) this._buildMinors();
          if (showComets && !this._containers.comet) this._buildComets();
          if (showBelts && !this._containers.belts) this._buildBelts();
        };
        _proto._init = function _init() {
          this._pass0 = this.dust.sharedMaterial.passes[0];
          this._handleDust = this._pass0.getHandle('beltColor');
          this.dust.node.active = false;
          this._buildSun();
          this._buildLight();
          this._buildPlanets();
          this._buildDwarfs();
          // this._buildMinors();
          // this._buildComets();
          // this._buildBelts();
          return this;
        };
        _proto._buildSun = function _buildSun() {
          var name = 'Sun';
          var Template = core.res.getPrefab(Prefabs$2.SUN);
          var config = core.res.getConfigItem(SOLAR_PLANETS$1, name);
          var viewer = findCamera(COSMOS$4, MAIN$3);
          this._sun = createNodeAt(name, LAYER_MAIN_3D, this.node, Template).getComponent(Sun);
          this._sun.loadConfig(config, viewer, BASE_POW10$1);
          visit.visit(this._sun);
          cosmos.zoomToDur(this._sun.panorama, 1, null, View.Transform.VISIT_OVER);
        };
        _proto._buildLight = function _buildLight() {
          var _this2 = this;
          this._light = findNode(MAIN_LIGHT);
          this._light.parent = this._sun.node;
          this._light.setPosition(Vec3.ZERO);
          this.sharedInstMaterials.forEach(function (mat) {
            var pass0 = mat.passes[0];
            _this2._sharedPasses.push(pass0);
            _this2._sharedHandles.push(pass0.getHandle('solarPos'));
          });
        };
        _proto._buildPlanets = function _buildPlanets() {
          this._containers.planet = createNodeAt('Planets', LAYER_MAIN_3D, this.node);
          var Template = core.res.getPrefab(Prefabs$2.PLANET);
          var configs = core.res.getConfig(SOLAR_PLANETS$1);
          var viewer = findCamera(COSMOS$4, MAIN$3);
          var farthest = 0,
            names = [];
          for (var key in configs) {
            if (key === 'Sun') continue;
            var config = configs[key];
            names.push(key);
            var planet = createNodeAt(key, LAYER_MAIN_3D, this._containers.planet, Template).getComponent(Planet);
            planet.loadConfig(config, viewer, BASE_POW10$1, this._sun);
            this._planets.push(planet);
            var scope = planet.orbitalRadius;
            if (scope > farthest) farthest = scope;
          }
          solar.reloadParams(this._sun, names, Math.log10(farthest * 2) + BASE_POW10$1);
        };
        _proto._buildDwarfs = function _buildDwarfs() {
          this._containers.dwarf = createNodeAt('Dwarfs', LAYER_MAIN_3D, this.node);
          var Template = core.res.getPrefab(Prefabs$2.DSM);
          var configs = core.res.getConfig(SOLAR_DWARFS$1);
          var viewer = findCamera(COSMOS$4, MAIN$3);
          for (var key in configs) {
            var config = configs[key];
            var dwarf = createNodeAt(key, LAYER_MAIN_3D, this._containers.dwarf, Template).getComponent(Dsm);
            dwarf.setType('dwarf');
            dwarf.loadConfig(config, viewer, BASE_POW10$1, this._sun);
            this._dwarfs.push(dwarf);
          }
        };
        _proto._buildMinors = function _buildMinors() {
          this._containers.minor = createNodeAt('Minors', LAYER_MAIN_3D, this.node);
          var Template = core.res.getPrefab(Prefabs$2.DSM);
          var configs = core.res.getConfig(SOLAR_MINORS);
          var viewer = findCamera(COSMOS$4, MAIN$3);
          for (var key in configs) {
            var config = configs[key];
            var minor = createNodeAt(key, LAYER_MAIN_3D, this._containers.minor, Template).getComponent(Dsm);
            minor.setType('minor');
            minor.loadConfig(config, viewer, BASE_POW10$1, this._sun);
            this._minors.push(minor);
          }
        };
        _proto._buildComets = function _buildComets() {
          this._containers.comet = createNodeAt('Comets', LAYER_MAIN_3D, this.node);
          var Template = core.res.getPrefab(Prefabs$2.COMET);
          var configs = core.res.getConfig(SOLAR_COMETS);
          var viewer = findCamera(COSMOS$4, MAIN$3);
          for (var key in configs) {
            var config = configs[key];
            var comet = createNodeAt(key, LAYER_MAIN_3D, this._containers.comet, Template).getComponent(Comet);
            comet.loadConfig(config, viewer, BASE_POW10$1, this._sun);
            this._comets.push(comet);
          }
        };
        _proto._buildBelts = function _buildBelts() {
          this._containers.belts = this.node.getChildByName('Belts');
          this._belts = this._containers.belts.getComponent(Belts);
          this._belts.loadAsteroids(this._sun);
        };
        _proto._sycSolarPos = function _sycSolarPos() {
          var _this3 = this;
          this._sharedPasses.forEach(function (pass, idx) {
            return pass.setUniform(_this3._sharedHandles[idx], _this3._sun.node.worldPosition);
          });
        };
        _proto._listen = function _listen() {
          this.on(UI.VISIBLE, this._updateVisible, -99);
          return this;
        };
        _createClass(SolarSystem, [{
          key: "sun",
          get: function get() {
            return this._sun;
          }
        }, {
          key: "planets",
          get: function get() {
            return this._planets;
          }
        }, {
          key: "earth",
          get: function get() {
            return this._planets.find(function (p) {
              return p.node.name === 'Earth';
            });
          }
        }, {
          key: "dwarfs",
          get: function get() {
            return this._dwarfs;
          }
        }, {
          key: "minors",
          get: function get() {
            return this._minors;
          }
        }, {
          key: "comets",
          get: function get() {
            return this._comets;
          }
        }]);
        return SolarSystem;
      }(Controller), (_descriptor$a = _applyDecoratedDescriptor(_class2$k.prototype, "sharedInstMaterials", [_dec2$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2$7 = _applyDecoratedDescriptor(_class2$k.prototype, "dust", [_dec3$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$k)) || _class$v));
      var Prefabs$2 = Res.Prefabs,
        _Res$Configs$1 = Res.Configs,
        SOLAR_PLANETS$1 = _Res$Configs$1.SOLAR_PLANETS,
        SOLAR_DWARFS$1 = _Res$Configs$1.SOLAR_DWARFS,
        SOLAR_MINORS = _Res$Configs$1.SOLAR_MINORS,
        SOLAR_COMETS = _Res$Configs$1.SOLAR_COMETS;
      var COSMOS$4 = SceneGraph.COSMOS,
        MAIN$3 = SceneGraph.Cameras.MAIN,
        MAIN_LIGHT = SceneGraph.MAIN_LIGHT;
      var BASE_POW10$1 = CosmosProxy.Scopes.Solar[2];
      var color$3 = new Color();
      var BeltAtt = [-6.5, -5.5];
      cclegacy._RF.pop();
      var _dec$l, _dec2$d, _class$w, _class2$l, _descriptor$b;
      cclegacy._RF.push({}, "7ef8ecznMlPwKOXZfeMuuVG", "star-companion", undefined);
      var ccclass$l = _decorator.ccclass,
        property$9 = _decorator.property;
      var StarCompanion = (_dec$l = ccclass$l('cocosmos.star-companion'), _dec2$d = property$9(Node), _dec$l(_class$w = (_class2$l = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StarCompanion, _Component);
        function StarCompanion() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prominence", _descriptor$b, _assertThisInitialized(_this));
          _this._proPass0 = null;
          _this._proHandle = 0;
          _this._base10 = void 0;
          return _this;
        }
        var _proto = StarCompanion.prototype;
        _proto.onLoad = function onLoad() {
          this._proPass0 = this.prominence.getComponent(MeshRenderer).material.passes[0];
          this._proHandle = this._proPass0.getHandle('mainColor');
        };
        _proto.setParams = function setParams(base10, avg) {
          this._base10 = base10;
          this.getComponent(MeshRenderer).material.setProperty('mainColor', avg);
          prom.set(avg);
        };
        _proto.update = function update() {
          var pow10 = cosmos.pow10;
          var alpha = attenuate(pow10, [this._base10 + 1, this._base10 + 2, -3, -1], false);
          this.prominence.setWorldScale(0.35, 0.35, 0.35);
          prom.a = alpha * 255;
          this._proPass0.setUniform(this._proHandle, prom);
        };
        return StarCompanion;
      }(Component), _descriptor$b = _applyDecoratedDescriptor(_class2$l.prototype, "prominence", [_dec2$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$l)) || _class$w);
      var prom = new Color();
      cclegacy._RF.pop();
      var _dec$m, _dec2$e, _dec3$a, _dec4$6, _dec5$4, _dec6$3, _class$x, _class2$m, _descriptor$c, _descriptor2$8, _descriptor3$6, _descriptor4$4, _descriptor5$3;
      cclegacy._RF.push({}, "4b669/eX0BF1bhy61/dLhnz", "star", undefined);
      var ccclass$m = _decorator.ccclass,
        property$a = _decorator.property;
      var Star = (_dec$m = ccclass$m('cocosmos.star'), _dec2$e = property$a(Material), _dec3$a = property$a(Material), _dec4$6 = property$a(Material), _dec5$4 = property$a(Material), _dec6$3 = property$a(ParticleSystem), _dec$m(_class$x = (_class2$m = /*#__PURE__*/function (_CustomizedLOD) {
        _inheritsLoose(Star, _CustomizedLOD);
        function Star() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CustomizedLOD.call.apply(_CustomizedLOD, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "material", _descriptor$c, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haloMaterial", _descriptor2$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prominenceMaterial", _descriptor3$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "coronasMaterial", _descriptor4$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particles", _descriptor5$3, _assertThisInitialized(_this));
          _this.cat = 'star';
          _this._config = void 0;
          _this._visible = false;
          _this._nearest = 0;
          _this._farthest = 0;
          _this._precise = null;
          _this._scalar = 'Stellar';
          _this._magnified = 0;
          _this._spectrum = StarSpectrum.G;
          _this._diskMaterial = null;
          _this._label = null;
          _this._halo = void 0;
          _this._prominences = void 0;
          _this._coronas = void 0;
          _this._disk = void 0;
          _this._disk_angular = BaseAngular.DISK;
          _this._coronas_angular = BaseAngular.CORONA;
          _this._farsee = void 0;
          return _this;
        }
        var _proto = Star.prototype;
        _proto.setSurfaceColors = function setSurfaceColors(main, spots, rimLight) {
          this.material.setProperty('mainColor', main);
          this._farsee.setParams(this.suggest, Color.lerp(color$4, main, spots, 0.3));
          this.material.setProperty('spotColor', spots);
          this.material.setProperty('rimLightColor', rimLight);
          return this;
        };
        _proto.setSurfaceNoisySpeeds = function setSurfaceNoisySpeeds(noisy, density, spot, speed) {
          if (noisy === void 0) {
            noisy = 0.5;
          }
          if (density === void 0) {
            density = 0.5;
          }
          if (spot === void 0) {
            spot = 0.5;
          }
          if (speed === void 0) {
            speed = 0.5;
          }
          v4a$2.set(speed, noisy, speed, density);
          this._disk_angular = BaseAngular.DISK * speed;
          this.material.setProperty('args', v4a$2);
          this.material.setProperty('spotStrong', spot);
          return this;
        };
        _proto.setHalo = function setHalo(halo, scale, density, speed) {
          if (scale === void 0) {
            scale = 1;
          }
          if (density === void 0) {
            density = 1;
          }
          if (speed === void 0) {
            speed = 1;
          }
          this.haloMaterial.setProperty('haloColor', halo);
          v4b.set(density, density, speed, speed);
          this.haloMaterial.setProperty('args', v4b);
          var s = BaseScales.HALO * scale;
          this._halo.setScale(s, s, s);
          return this;
        };
        _proto.setProminence = function setProminence(prom, scale) {
          if (scale === void 0) {
            scale = 1;
          }
          this.prominenceMaterial.setProperty('mainColor', prom);
          var s = BaseScales.PROMINENCE * scale;
          this._prominences.setScale(s, s, s);
          return this;
        };
        _proto.setCoronas = function setCoronas(corona, speed) {
          if (speed === void 0) {
            speed = 1;
          }
          this.coronasMaterial.setProperty('mainColor', corona);
          this._coronas_angular = BaseAngular.CORONA * speed;
          return this;
        };
        _proto.useDiskParticles = function useDiskParticles(use, disk, scale, attenuation) {
          if (scale === void 0) {
            scale = 1;
          }
          if (!this._disk) return;
          this._disk.active = use;
          if (use) {
            if (disk) {
              this._diskMaterial.setProperty('startColor', disk);
              this._diskMaterial.setProperty('fadeColor', disk);
              this.particles.clear();
              this.particles.startColor.colorMin = disk;
              this.particles.startColor.colorMax = Color.WHITE;
              this.particles.play();
            }
            if (isNum(scale)) {
              var s = BaseScales.DISK * scale;
              this._disk.setScale(s, s, s);
            } else this._disk.setScale(1, 1, 1);
            if (notEmptyArr(attenuation)) {
              var x = attenuation[0],
                y = attenuation[1],
                z = attenuation[2],
                w = attenuation[3];
              this._diskMaterial.setProperty('attenuation', v4c.set(x, y, z, w));
            } else this._diskMaterial.setProperty('attenuation', ACCRETION_DISK);
          }
          return this;
        };
        _proto.update = function update(dt) {
          var _this2 = this,
            _this$_farsee;
          if (this._coronas) {
            this.faceToView(this._coronas);
            this._coronas.children.forEach(function (child, i) {
              return child.angle += dt * _this2._coronas_angular * (0.5 - i);
            });
          }
          if ((_this$_farsee = this._farsee) != null && _this$_farsee.prominence) {
            var _this$_farsee2;
            this.faceToView((_this$_farsee2 = this._farsee) == null ? void 0 : _this$_farsee2.prominence);
          }
          if (this._disk && this._disk.activeInHierarchy) {
            var y = this._disk.eulerAngles.y;
            this._disk.setRotationFromEuler(0, dt * this._disk_angular + y, 0);
          }
        };
        _proto.faceToView = function faceToView(child) {
          child.forward = Vec3.subtract(v3a$b, this.node.worldPosition, this._viewer.node.worldPosition);
        };
        _proto.loadConfig = function loadConfig(config, viewer, base) {
          this._config = config;
          this._viewer = viewer;
          var diam = config.diam,
            dist = config.dist,
            xyz = config.xyz;
          var _ref = xyz != null ? xyz : [1, 1, 1],
            x = _ref[0],
            y = _ref[1],
            z = _ref[2];
          this._real.set(diam * x, diam * y, diam * z);
          this.updateScale();
          this._nearest = Math.log10(diam) + base;
          this._farthest = Math.log10(dist * STAR_FAR_RATIO);
          this._spectrum = StarSpectrum[config.spec.charAt(0).toUpperCase()];
          setStarAppearance(this);
        };
        _proto.loadAsCompanion = function loadAsCompanion(viewer, diam) {
          this._viewer = viewer;
          this._real.set(diam, diam, diam);
          this.node.setScale(this._real);
        };
        _proto.loadReference = function loadReference(precise) {
          this._precise = precise;
        };
        _proto.init = function init() {
          var _this$_disk;
          this._halo = this._lod0.getChildByName('Halo');
          this._coronas = this._lod0.getChildByName('Coronas');
          this._prominences = this._lod0.getChildByName('Prominences');
          this._disk = this._lod0.getChildByName('Disk');
          this._diskMaterial = (_this$_disk = this._disk) == null ? void 0 : _this$_disk.getComponent(MeshRenderer).getMaterialInstance(0);
          this._farsee = this.node.getChildByName('Farsee').getComponent(StarCompanion);
        };
        _proto.onLod0Initiated = function onLod0Initiated() {};
        _proto.onTick = function onTick() {
          if (visit.inSolar && this.node.name === "Sun") {
            this._magnified = Math.log10(solar.getMagnified(this.cat));
          }
          if (this._config) this.syncNameLabel();
        };
        _proto.syncNameLabel = function syncNameLabel() {
          if (this.node.activeInHierarchy && ui.showCelNames) {
            if (!this._label) {
              this._label = setLabelStyle(CelestialLabel.claim('solar', this.node.name), 'solar', 'star');
              this._label.camera = this._viewer;
              this._label.target = this.node;
              var _this$_config = this._config,
                name = _this$_config.name,
                cname = _this$_config.cname,
                post = _this$_config.post;
              var _post = post ? ' ' + post : '';
              this._label.config = {
                en: name + _post,
                cn: cname + _post
              };
              this._label.setUIOffset(0, 30);
            }
            this._label.alpha = attenuate(cosmos.pow10, STAR_LABEL_ATT, false);
          } else this._freeLabel();
        };
        _proto._freeLabel = function _freeLabel() {
          if (this._label) {
            this._label.free();
            this._label = null;
          }
        };
        _proto.updateScale = function updateScale(magnified) {
          if (this.node.name === 'Sun') _CustomizedLOD.prototype.updateScale.call(this, magnified);else this.node.setScale(this._real);
        };
        _createClass(Star, [{
          key: "LODValves",
          get: function get() {
            return STAR_LOD_VALVES;
          }
        }, {
          key: "config",
          get: function get() {
            return this._config;
          }
        }, {
          key: "nearest",
          get: function get() {
            return this._nearest + this._magnified;
          }
        }, {
          key: "suggest",
          get: function get() {
            return this.nearest + SUGGEST$2;
          }
        }, {
          key: "panorama",
          get: function get() {
            return this.nearest + 2;
          }
        }, {
          key: "farthest",
          get: function get() {
            return this._farthest;
          }
        }, {
          key: "refer",
          get: function get() {
            var _this$_precise$node, _this$_precise;
            return (_this$_precise$node = (_this$_precise = this._precise) == null ? void 0 : _this$_precise.node) != null ? _this$_precise$node : null;
          }
        }, {
          key: "precise",
          get: function get() {
            return this._precise;
          }
        }, {
          key: "scalar",
          get: function get() {
            return this._scalar;
          }
        }, {
          key: "spectrum",
          get: function get() {
            return this._spectrum;
          }
        }, {
          key: "visible",
          get: function get() {
            return this._visible;
          },
          set: function set(arg) {
            if (arg === this._visible) return;
            this.getComponentsInChildren(MeshRenderer).forEach(function (mesh) {
              return mesh.enabled = arg;
            });
            this._visible = arg;
          }
        }]);
        return Star;
      }(CustomizedLOD), (_descriptor$c = _applyDecoratedDescriptor(_class2$m.prototype, "material", [_dec2$e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$8 = _applyDecoratedDescriptor(_class2$m.prototype, "haloMaterial", [_dec3$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$6 = _applyDecoratedDescriptor(_class2$m.prototype, "prominenceMaterial", [_dec4$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$4 = _applyDecoratedDescriptor(_class2$m.prototype, "coronasMaterial", [_dec5$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$3 = _applyDecoratedDescriptor(_class2$m.prototype, "particles", [_dec6$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$m)) || _class$x);
      var STAR_LABEL_ATT = [-6.5, -5.5, -2.5, -1.5];
      var SUGGEST$2 = VisitProxy.LensOffsets.SUGGEST;
      var STAR_LOD_VALVES = [1];
      var STAR_FAR_RATIO = 2.2;
      var BaseScales = {
        HALO: 1.8,
        PROMINENCE: 5,
        CORONA: 1.56,
        DISK: 0.5
      };
      var BaseAngular = {
        CORONA: 10,
        DISK: 5
      };
      var v3a$b = new Vec3();
      var v4a$2 = new Vec4();
      var v4b = new Vec4();
      var v4c = new Vec4();
      var color$4 = new Color();
      var ACCRETION_DISK = new Vec4(0.2, 0.7, 0.7, 1);
      cclegacy._RF.pop();
      var _dec$n, _dec2$f, _dec3$b, _dec4$7, _dec5$5, _dec6$4, _dec7$3, _dec8$2, _dec9$2, _dec10$2, _dec11$2, _dec12$1, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class$y, _class2$n, _descriptor$d, _descriptor2$9, _descriptor3$7, _descriptor4$5, _descriptor5$4, _descriptor6$3, _descriptor7$2, _descriptor8$2, _descriptor9$2, _descriptor10$2, _descriptor11$1, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "f3f4cZl/NRCdYb/sGq7W3yv", "black-hole", undefined);
      var ccclass$n = _decorator.ccclass,
        property$b = _decorator.property,
        executeInEditMode$1 = _decorator.executeInEditMode;
      var serialize$1 = serialize$3,
        group$2 = group$5;
      var Blackhole = exports('Q', (_dec$n = ccclass$n('cocosmos.black-hole'), _dec2$f = executeInEditMode$1(true), _dec3$b = group$2("吸积盘设置", "盘面内侧颜色", Color), _dec4$7 = group$2("吸积盘设置", "盘面外侧颜色", Color), _dec5$5 = group$2("吸积盘设置", "盘面宽度", Vec4), _dec6$4 = group$2("吸积盘设置", "盘面亮度", [0, 5, 0.1]), _dec7$3 = group$2("吸积盘设置", "盘面对比度", [0, 1, 0.1]), _dec8$2 = group$2("吸积盘设置", "盘面尘埃密度", [0, 5, 0.1]), _dec9$2 = group$2("吸积盘设置", "盘面环绕流速", [0, 10, 0.1]), _dec10$2 = group$2("相对论喷流设置", "喷流内侧颜色", Color), _dec11$2 = group$2("相对论喷流设置", "喷流外侧颜色", Color), _dec12$1 = group$2("相对论喷流设置", "喷流速度", Vec2), _dec13 = group$2("相对论喷流设置", "喷流宽高", [0.1, 5, 0.1]), _dec14 = group$2("撕裂伴星设置", "卷吸恒星侧颜色", Color), _dec15 = group$2("撕裂伴星设置", "卷吸吸积侧颜色", Color), _dec16 = group$2("撕裂伴星设置", "卷吸形态", Vec4), _dec17 = group$2("撕裂伴星设置", "卷吸流速"), _dec18 = group$2("撕裂伴星设置", "卷吸亮度", [0, 1, 0.1]), _dec19 = group$2("撕裂伴星设置", "卷吸对比度", [0, 1, 0.1]), _dec$n(_class$y = _dec2$f(_class$y = (_class2$n = /*#__PURE__*/function (_CustomizedLOD) {
        _inheritsLoose(Blackhole, _CustomizedLOD);
        function Blackhole() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CustomizedLOD.call.apply(_CustomizedLOD, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_dc_start", _descriptor$d, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_dc_fade", _descriptor2$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_d_attr", _descriptor3$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_d_bright", _descriptor4$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_d_contr", _descriptor5$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_d_dens", _descriptor6$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_d_flow", _descriptor7$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_jc_start", _descriptor8$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_jc_fade", _descriptor9$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_j_flow", _descriptor10$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_j_scale", _descriptor11$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_vc_star", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_vc_disk", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_v_attr", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_v_speed", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_v_brt", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_v_contr", _descriptor17, _assertThisInitialized(_this));
          _this.cat = 'blackhole';
          _this._label = null;
          _this._config = void 0;
          _this._visible = false;
          _this._nearest = 0;
          _this._farthest = 0;
          _this._magnified = 0;
          _this._disks_mats = [];
          _this._disks_passes0 = [];
          _this._disks_vert_handlers = [];
          _this._jets_mats = [];
          _this._vtx_mat = null;
          _this._jets = void 0;
          _this._star = void 0;
          _this._vortex = void 0;
          _this._disks = void 0;
          _this._precise = null;
          _this._scalar = 'Stellar';
          return _this;
        }
        var _proto = Blackhole.prototype;
        _proto.update = function update(dt) {
          var _this2 = this;
          var ws = this.node.worldScale.x;
          this._disks_passes0.forEach(function (pass0, idx) {
            pass0.setUniform(_this2._disks_vert_handlers[idx], ws);
          });
        };
        _proto.loadConfig = function loadConfig(config, viewer, base) {
          this._config = config;
          this._viewer = viewer;
          var diam = config.diam,
            dist = config.dist,
            star = config.star;
          this._real.set(diam, diam, diam);
          this.updateScale();
          this._nearest = Math.log10(diam) + base;
          this._farthest = Math.log10(dist * BLACKHOLE_FAR_RATIO);
          this._nearest = Math.log10(diam) + base;
          setBlackholeAppearance(this);
        };
        _proto.loadReference = function loadReference(precise) {
          this._precise = precise;
        };
        _proto.init = function init() {
          this._magnified = Math.log10(solar.getMagnified(this.cat));
          var disks = this.node.getChildByName("Disks");
          this._jets = this.node.getChildByName("Jets");
          this._disks = disks.children;
          this._disks_mats = disks.getComponentsInChildren(MeshRenderer).map(function (mesh) {
            return mesh.getMaterialInstance(0);
          });
          this._disks_passes0 = this._disks_mats.map(function (mat) {
            return mat.passes[0];
          });
          this._disks_vert_handlers = this._disks_passes0.map(function (pass) {
            return pass.getHandle('vertArgs', 0, gfx.Type.FLOAT);
          });
          this._jets_mats = this._jets.getComponentsInChildren(MeshRenderer).map(function (mesh) {
            return mesh.getMaterialInstance(0);
          });
          this._vortex = this.node.getChildByName("Vortex");
          this._vtx_mat = this._vortex.getComponent(MeshRenderer).getMaterialInstance(0);
          this._star = findComp$1(Star, this, 'Star');
        };
        _proto.onLod0Initiated = function onLod0Initiated() {};
        _proto.onTick = function onTick() {
          this.syncNameLabel();
        };
        _proto.syncNameLabel = function syncNameLabel() {
          if (this.node.activeInHierarchy && ui.showCelNames) {
            if (!this._label) {
              this._label = setLabelStyle(CelestialLabel.claim('solar', this.node.name), 'solar', 'blackhole');
              this._label.camera = this._viewer;
              this._label.target = this.node;
              var _this$_config = this._config,
                en = _this$_config.name,
                cn = _this$_config.cname;
              this._label.config = {
                en: en,
                cn: cn
              };
              this._label.setUIOffset(0, 30);
            }
            this._label.alpha = attenuate(cosmos.pow10, BLACKHOLE_LABEL_ATT, false);
          } else this._freeLabel();
        };
        _proto._freeLabel = function _freeLabel() {
          if (this._label) {
            this._label.free();
            this._label = null;
          }
        };
        _proto.updateScale = function updateScale() {
          this.node.setScale(this._real);
        };
        _proto.updateDisks = function updateDisks() {
          var _this3 = this;
          this._disks_mats.forEach(function (mat) {
            return mat.setProperty('startColor', _this3._dc_start);
          });
          this._disks_mats.forEach(function (mat) {
            return mat.setProperty('fadeColor', _this3._dc_fade);
          });
          this._disks_mats.forEach(function (mat) {
            return mat.setProperty('attenuation', _this3._d_attr);
          });
          v4a$3.set(this._d_bright, this._d_contr, this._d_dens.x, this._d_dens.y);
          this._disks_mats.forEach(function (mat) {
            return mat.setProperty('args1', v4a$3);
          });
          v4b$1.x = this._d_flow.x;
          v4b$1.y = this._d_flow.y;
          this._disks_mats.forEach(function (mat) {
            return mat.setProperty('args0', v4b$1);
          });
        };
        _proto.updateJets = function updateJets() {
          var _this4 = this;
          this._jets_mats.forEach(function (mat) {
            return mat.setProperty('startColor', _this4._jc_start);
          });
          this._jets_mats.forEach(function (mat) {
            return mat.setProperty('fadeColor', _this4._jc_fade);
          });
          v4c$1.x = this._j_flow.x;
          v4c$1.y = this._j_flow.y;
          this._jets_mats.forEach(function (mat) {
            return mat.setProperty('args', v4c$1);
          });
          this._jets.scale.set(this._j_scale.x, this._j_scale.y, this._j_scale.x);
        };
        _proto.updateVortexStar = function updateVortexStar() {
          this._vtx_mat.setProperty('startColor', this._vc_star);
          this._vtx_mat.setProperty('fadeColor', this._vc_disk);
          this._vtx_mat.setProperty('attenuation', this._v_attr);
          var pass0 = this._vtx_mat.passes[0];
          var brt = pass0.getHandle('args1', 0, gfx.Type.FLOAT);
          var cst = pass0.getHandle('args1', 1, gfx.Type.FLOAT);
          var spd = pass0.getHandle('args0', 0, gfx.Type.FLOAT);
          pass0.setUniform(brt, this._v_brt);
          pass0.setUniform(cst, this._v_contr);
          pass0.setUniform(spd, this._v_speed);
        };
        _createClass(Blackhole, [{
          key: "diskColorStart",
          get: function get() {
            return this._dc_start;
          },
          set: function set(arg) {
            this._dc_start.set(arg);
          }
        }, {
          key: "diskColorFade",
          get: function get() {
            return this._dc_fade;
          },
          set: function set(arg) {
            this._dc_fade.set(arg);
          }
        }, {
          key: "diskAttenuation",
          get: function get() {
            return this._d_attr;
          },
          set: function set(arg) {
            this._d_attr.set(arg);
          }
        }, {
          key: "diskBrightness",
          get: function get() {
            return this._d_bright;
          },
          set: function set(arg) {
            this._d_bright = arg;
          }
        }, {
          key: "diskContrast",
          get: function get() {
            return this._d_contr;
          },
          set: function set(arg) {
            this._d_contr = arg;
          }
        }, {
          key: "diskDensity",
          get: function get() {
            return this._d_dens;
          },
          set: function set(arg) {
            this._d_dens.set(arg);
          }
        }, {
          key: "diskFlowSpeed",
          get: function get() {
            return this._d_flow;
          },
          set: function set(arg) {
            this._d_flow.set(arg);
          }
        }, {
          key: "jetColorStart",
          get: function get() {
            return this._jc_start;
          },
          set: function set(arg) {
            this._jc_start.set(arg);
          }
        }, {
          key: "jetColorFade",
          get: function get() {
            return this._jc_fade;
          },
          set: function set(arg) {
            this._jc_fade.set(arg);
          }
        }, {
          key: "jetFlowSpeed",
          get: function get() {
            return this._j_flow;
          },
          set: function set(arg) {
            this._j_flow.set(arg);
          }
        }, {
          key: "jetCylinderScale",
          get: function get() {
            return this._j_scale;
          },
          set: function set(arg) {
            this._j_scale.set(arg);
          }
        }, {
          key: "vortexColorStar",
          get: function get() {
            return this._vc_star;
          },
          set: function set(arg) {
            this._vc_star.set(arg);
          }
        }, {
          key: "vortexColorDisk",
          get: function get() {
            return this._vc_disk;
          },
          set: function set(arg) {
            this._vc_disk.set(arg);
          }
        }, {
          key: "vortexAttenuation",
          get: function get() {
            return this._v_attr;
          },
          set: function set(arg) {
            this._v_attr.set(arg);
          }
        }, {
          key: "vortexFlowSpeed",
          get: function get() {
            return this._v_speed;
          },
          set: function set(arg) {
            this._v_speed = arg;
          }
        }, {
          key: "vortexBrightness",
          get: function get() {
            return this._v_brt;
          },
          set: function set(arg) {
            this._v_brt = arg;
          }
        }, {
          key: "vortexContrast",
          get: function get() {
            return this._v_contr;
          },
          set: function set(arg) {
            this._v_contr = arg;
          }
        }, {
          key: "LODValves",
          get: function get() {
            return BLACKHOLE_LOD_VALVES;
          }
        }, {
          key: "config",
          get: function get() {
            return this._config;
          }
        }, {
          key: "nearest",
          get: function get() {
            return this._nearest + this._magnified;
          }
        }, {
          key: "suggest",
          get: function get() {
            return this.nearest + SUGGEST$3;
          }
        }, {
          key: "panorama",
          get: function get() {
            return this.nearest + 2;
          }
        }, {
          key: "farthest",
          get: function get() {
            return this._farthest;
          }
        }, {
          key: "star",
          get: function get() {
            return this._star;
          }
        }, {
          key: "vortex",
          get: function get() {
            return this._vortex;
          }
        }, {
          key: "jets",
          get: function get() {
            return this._jets;
          }
        }, {
          key: "viewer",
          get: function get() {
            return this._viewer;
          }
        }, {
          key: "refer",
          get: function get() {
            var _this$_precise$node, _this$_precise;
            return (_this$_precise$node = (_this$_precise = this._precise) == null ? void 0 : _this$_precise.node) != null ? _this$_precise$node : null;
          }
        }, {
          key: "precise",
          get: function get() {
            return this._precise;
          }
        }, {
          key: "scalar",
          get: function get() {
            return this._scalar;
          }
        }, {
          key: "visible",
          get: function get() {
            return this._visible;
          },
          set: function set(arg) {
            if (arg === this._visible) return;
            this.getComponentsInChildren(MeshRenderer).forEach(function (mesh) {
              return mesh.enabled = arg;
            });
            this._visible = arg;
          }
        }]);
        return Blackhole;
      }(CustomizedLOD), (_applyDecoratedDescriptor(_class2$n.prototype, "diskColorStart", [_dec3$b], Object.getOwnPropertyDescriptor(_class2$n.prototype, "diskColorStart"), _class2$n.prototype), _descriptor$d = _applyDecoratedDescriptor(_class2$n.prototype, "_dc_start", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "diskColorFade", [_dec4$7], Object.getOwnPropertyDescriptor(_class2$n.prototype, "diskColorFade"), _class2$n.prototype), _descriptor2$9 = _applyDecoratedDescriptor(_class2$n.prototype, "_dc_fade", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "diskAttenuation", [_dec5$5], Object.getOwnPropertyDescriptor(_class2$n.prototype, "diskAttenuation"), _class2$n.prototype), _descriptor3$7 = _applyDecoratedDescriptor(_class2$n.prototype, "_d_attr", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec4(0, 0.15, 0.5, 1);
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "diskBrightness", [_dec6$4], Object.getOwnPropertyDescriptor(_class2$n.prototype, "diskBrightness"), _class2$n.prototype), _descriptor4$5 = _applyDecoratedDescriptor(_class2$n.prototype, "_d_bright", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "diskContrast", [_dec7$3], Object.getOwnPropertyDescriptor(_class2$n.prototype, "diskContrast"), _class2$n.prototype), _descriptor5$4 = _applyDecoratedDescriptor(_class2$n.prototype, "_d_contr", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "diskDensity", [_dec8$2], Object.getOwnPropertyDescriptor(_class2$n.prototype, "diskDensity"), _class2$n.prototype), _descriptor6$3 = _applyDecoratedDescriptor(_class2$n.prototype, "_d_dens", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(1, 1);
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "diskFlowSpeed", [_dec9$2], Object.getOwnPropertyDescriptor(_class2$n.prototype, "diskFlowSpeed"), _class2$n.prototype), _descriptor7$2 = _applyDecoratedDescriptor(_class2$n.prototype, "_d_flow", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(4, 10);
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "jetColorStart", [_dec10$2], Object.getOwnPropertyDescriptor(_class2$n.prototype, "jetColorStart"), _class2$n.prototype), _descriptor8$2 = _applyDecoratedDescriptor(_class2$n.prototype, "_jc_start", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "jetColorFade", [_dec11$2], Object.getOwnPropertyDescriptor(_class2$n.prototype, "jetColorFade"), _class2$n.prototype), _descriptor9$2 = _applyDecoratedDescriptor(_class2$n.prototype, "_jc_fade", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "jetFlowSpeed", [_dec12$1], Object.getOwnPropertyDescriptor(_class2$n.prototype, "jetFlowSpeed"), _class2$n.prototype), _descriptor10$2 = _applyDecoratedDescriptor(_class2$n.prototype, "_j_flow", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(2, 5);
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "jetCylinderScale", [_dec13], Object.getOwnPropertyDescriptor(_class2$n.prototype, "jetCylinderScale"), _class2$n.prototype), _descriptor11$1 = _applyDecoratedDescriptor(_class2$n.prototype, "_j_scale", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(2, 5);
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "vortexColorStar", [_dec14], Object.getOwnPropertyDescriptor(_class2$n.prototype, "vortexColorStar"), _class2$n.prototype), _descriptor12 = _applyDecoratedDescriptor(_class2$n.prototype, "_vc_star", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "vortexColorDisk", [_dec15], Object.getOwnPropertyDescriptor(_class2$n.prototype, "vortexColorDisk"), _class2$n.prototype), _descriptor13 = _applyDecoratedDescriptor(_class2$n.prototype, "_vc_disk", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "vortexAttenuation", [_dec16], Object.getOwnPropertyDescriptor(_class2$n.prototype, "vortexAttenuation"), _class2$n.prototype), _descriptor14 = _applyDecoratedDescriptor(_class2$n.prototype, "_v_attr", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec4(0, 0.15, 0.5, 1);
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "vortexFlowSpeed", [_dec17], Object.getOwnPropertyDescriptor(_class2$n.prototype, "vortexFlowSpeed"), _class2$n.prototype), _descriptor15 = _applyDecoratedDescriptor(_class2$n.prototype, "_v_speed", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "vortexBrightness", [_dec18], Object.getOwnPropertyDescriptor(_class2$n.prototype, "vortexBrightness"), _class2$n.prototype), _descriptor16 = _applyDecoratedDescriptor(_class2$n.prototype, "_v_brt", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2$n.prototype, "vortexContrast", [_dec19], Object.getOwnPropertyDescriptor(_class2$n.prototype, "vortexContrast"), _class2$n.prototype), _descriptor17 = _applyDecoratedDescriptor(_class2$n.prototype, "_v_contr", [serialize$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2$n)) || _class$y) || _class$y));
      var BLACKHOLE_LABEL_ATT = [-6.5, -5.5, -2.5, -1.5];
      var SUGGEST$3 = VisitProxy.LensOffsets.SUGGEST;
      var BLACKHOLE_LOD_VALVES = [0.1];
      var BLACKHOLE_FAR_RATIO = 2.2;
      var v4a$3 = new Vec4();
      var v4b$1 = new Vec4(0, 0, 0, 0.1);
      var v4c$1 = new Vec4(0, 0, 0, 0.1);
      cclegacy._RF.pop();
      var _dec$o, _class$z;
      cclegacy._RF.push({}, "8384fmxE+BDiYFz2Brwqd5M", "star-precise", undefined);
      var ccclass$o = _decorator.ccclass;
      var StarPrecise = (_dec$o = ccclass$o('cocosmos.StarPrecise'), _dec$o(_class$z = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StarPrecise, _Component);
        function StarPrecise() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._label = null;
          _this._viewer = void 0;
          _this._config = void 0;
          _this._belongConfig = void 0;
          _this._group = void 0;
          _this._important = void 0;
          _this._mesh = void 0;
          _this._spectrum = void 0;
          _this._culling = void 0;
          _this._color = new Color();
          _this._cArr = void 0;
          _this._ab = void 0;
          _this._placeholder = false;
          return _this;
        }
        var _proto = StarPrecise.prototype;
        _proto.loadConfigLine = function loadConfigLine(args, config) {
          this._belongConfig = config;
          var _this$_belongConfig = this._belongConfig,
            cst = _this$_belongConfig.cst,
            group = _this$_belongConfig.group,
            gd = _this$_belongConfig.gd;
          this._group = group;
          var chars = args.split(',');
          var ab = chars[0],
            cname = chars[1],
            fid = chars[2],
            hd = chars[3],
            hip = chars[4],
            ra_hms = chars[5],
            dec_hms = chars[6],
            mag = chars[7],
            abs = chars[8],
            dist = chars[9],
            spec = chars[10],
            bias = chars[11];
          this._placeholder = ab.startsWith('&');
          this._ab = ab;
          this._config = {
            ab: ab,
            cname: cname,
            fid: fid,
            HD: hd ? +hd : null,
            HIP: hip ? +hip : null,
            mag: +mag,
            abs: +abs,
            dist: +dist,
            spec: spec,
            bias: bias
          };
          this._config.ra_hms = ra_hms;
          this._config.dec_hms = dec_hms;
          var _ra_hms$split = ra_hms.split(':'),
            H = _ra_hms$split[0],
            M = _ra_hms$split[1],
            S = _ra_hms$split[2];
          this._config.RA = (+H + +M / SEC_PER_MIN + +S / SEC_PER_HOUR) * DEG_PER_HOUR;
          var _dec_hms$split = dec_hms.split(':'),
            h = _dec_hms$split[0],
            m = _dec_hms$split[1],
            s = _dec_hms$split[2];
          this._config.Dec = +h + +m / SEC_PER_MIN + +s / SEC_PER_HOUR;
          this.node.name = cst + "-" + ab;
          if (gd && isNum(+ab)) this.node.name += ' G.';
          return this._initAccurate();
        };
        _proto.onLoad = function onLoad() {
          this._mesh = this.getComponent(MeshRenderer);
          this._viewer = findNode$1(MAIN$4, COSMOS$5);
          core.on(Notifications.Time.TICK, this.onTick, this);
        };
        _proto.onDestroy = function onDestroy() {
          core.unload(this);
        };
        _proto.onTick = function onTick(dt, tick) {
          if (this._placeholder) return;
          this._syncActivating();
          this._syncInstancing();
          this._syncNameLabel();
        };
        _proto._syncActivating = function _syncActivating() {
          this._culling = false;
          if (!this.node.parent || !this.node.parent.activeInHierarchy) return;
          if (this.routing) {
            this.node.active = true;
            return;
          }
          var activated = Vec3.squaredDistance(this.node.worldPosition, Vec3.ZERO) > WPS_VLV_SQR && (this.important || this._config.mag <= constStars.showStarLevel);
          if (activated) {
            this._culling = pyramidCulling(this._viewer.getComponent(Camera), this.node, FOV_CULLING_VALVE);
            this.node.active = !this._culling;
          } else this.node.active = false;
        };
        _proto._syncInstancing = function _syncInstancing() {
          this._cArr[3] = this.routing ? 0 : 1;
          this.node.activeInHierarchy && this._mesh.setInstancedAttribute('instanced_color', this._cArr);
        };
        _proto._syncNameLabel = function _syncNameLabel() {
          var lvl = ui.starNameLevel;
          var premise = lvl !== StarLevel.NONE && this.node.activeInHierarchy;
          var bingo = premise && (this._important || this._config.mag <= lvl);
          var show = bingo && this.node.activeInHierarchy;
          if (!show && this._label) {
            this._label.free();
            this._label = null;
          } else if (show) {
            if (!this._label) {
              var _this$_label$setMap;
              var north = this.node.worldPosition.y > 0;
              var label = CelestialLabel.claim('stars', this.node.name);
              label.camera = findCamera(COSMOS$5, DEEP$1);
              label.target = this.node;
              this._label = setLabelStyle(label, 'stars', north);
              var _this$_config = this._config,
                bias = _this$_config.bias,
                cname = _this$_config.cname,
                HD = _this$_config.HD,
                HIP = _this$_config.HIP;
              this._label.setMap((_this$_label$setMap = {}, _this$_label$setMap[StarNameType.ALPHABET] = {
                en: this.node.name,
                cn: this._belongConfig.cname + '-' + this._ab
              }, _this$_label$setMap[StarNameType.NAMED] = {
                en: bias,
                cn: cname
              }, _this$_label$setMap[StarNameType.HD] = HD ? 'HD-' + HD : '', _this$_label$setMap[StarNameType.HIP] = HIP ? 'HIP-' + HIP : '', _this$_label$setMap), CelestialNameType.Star);
            }
            this._attenuateLabel();
          }
        };
        _proto._attenuateLabel = function _attenuateLabel() {
          if (!this._label) return;
          var north = this.node.worldPosition.y > 0;
          if (this.routing) {
            this._label.setOffset(0, 0, 0);
            this._label.setUIOffset(0, north ? 30 : -30);
            this._label.alpha = Math.clamp01(cosmos.pow10 + 1);
            return;
          } else {
            this._label.setOffset(0, north ? 0.6 : -0.6, 0);
          }
          var lenSqr = Vec3.squaredDistance(this.node.worldPosition, Vec3.ZERO);
          this._label.alpha = attenuate(lenSqr, NameLabelAtt$4.heads(2), true);
        };
        _proto._initAccurate = function _initAccurate() {
          var _this$_config2 = this._config,
            ab = _this$_config2.ab,
            RA = _this$_config2.RA,
            Dec = _this$_config2.Dec,
            dist = _this$_config2.dist,
            abs = _this$_config2.abs;
          if (isNaN(RA)) return console.warn("[" + this.node.name + "]:ra", RA);
          if (isNaN(Dec)) return console.warn("[" + this.node.name + "]:dec", Dec);
          if (isNaN(dist)) return console.warn("[" + this.node.name + "]:dist", dist);
          polar2cartesian(RA, Dec, dist, v3a$c);
          if (isNaN(v3a$c.x) || isNaN(v3a$c.y) || isNaN(v3a$c.z)) return console.warn("[" + this.node.name + "]:pos", v3a$c);
          if (dist < 1) return console.warn("[" + this.node.name + "]:too-near,dist=", dist);
          equator2ecliptic(v3a$c, v3a$c);
          this.node.setPosition(v3a$c);
          var radius = absoluteToRadius(abs);
          this.node.setScale(Vec3.copy(v3a$c, Vec3.ONE).multiplyScalar(radius));
          if (this._placeholder) {
            this.node.active = false;
            return true;
          }
          this._important = ab.startsWith('α') || this._group === ConstGroup.ZODIAC && (ab.startsWith('β') || ab.startsWith('γ') || ab.startsWith('δ'));
          this._spectrum = setColorBySpectrum(this._color, this._config.spec, this.node.name);
          var _this$_color = this._color,
            r = _this$_color.r,
            g = _this$_color.g,
            b = _this$_color.b,
            a = _this$_color.a;
          this._cArr = [r, g, b, a];
          return true;
        };
        _createClass(StarPrecise, [{
          key: "spectrum",
          get: function get() {
            return this._spectrum;
          }
        }, {
          key: "config",
          get: function get() {
            return this._config;
          }
        }, {
          key: "important",
          get: function get() {
            return this._important;
          }
        }, {
          key: "belong",
          get: function get() {
            return this._belongConfig;
          }
        }, {
          key: "culling",
          get: function get() {
            return this._culling;
          }
        }, {
          key: "placeholder",
          get: function get() {
            return this._placeholder;
          }
        }, {
          key: "routing",
          get: function get() {
            var _visit$transInfo$stel, _visit$transInfo$stel2;
            var _ref = (_visit$transInfo$stel = (_visit$transInfo$stel2 = visit.transInfo.stellar) == null ? void 0 : _visit$transInfo$stel2.refers) != null ? _visit$transInfo$stel : {},
              from = _ref.from,
              to = _ref.to;
            return this.node === from || this.node === to;
          }
        }]);
        return StarPrecise;
      }(Component)) || _class$z);
      var COSMOS$5 = SceneGraph.COSMOS,
        _SceneGraph$Cameras = SceneGraph.Cameras,
        DEEP$1 = _SceneGraph$Cameras.DEEP,
        MAIN$4 = _SceneGraph$Cameras.MAIN;
      var NameLabelAtt$4 = UIProxy.NameLabelAtt,
        WPS_CULLING_VALVE$2 = UIProxy.WPS_CULLING_VALVE,
        FOV_CULLING_VALVE = UIProxy.FOV_CULLING_VALVE;
      var WPS_VLV_SQR = WPS_CULLING_VALVE$2 * WPS_CULLING_VALVE$2;
      var v3a$c = new Vec3();
      cclegacy._RF.pop();
      var _dec$p, _class$A;
      cclegacy._RF.push({}, "d08ac/uhsJDNrqU6k3k7AvA", "sun-precise", undefined);
      var ccclass$p = _decorator.ccclass;
      var SunPrecise = (_dec$p = ccclass$p('cocosmos.sun-precise'), _dec$p(_class$A = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SunPrecise, _Component);
        function SunPrecise() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._pass0 = void 0;
          _this._handle = void 0;
          _this._label = null;
          return _this;
        }
        var _proto = SunPrecise.prototype;
        _proto.onLoad = function onLoad() {
          var mat = this.getComponent(MeshRenderer).material;
          this._pass0 = mat.passes[0];
          this._handle = this._pass0.getHandle('mainColor');
          this._createLabel();
        };
        _proto.setSpectrum = function setSpectrum(spec, to, lerp) {
          if (lerp === void 0) {
            lerp = 0.5;
          }
          setColorBySpectrum(color$5, spec, this.node.name);
          if (to) {
            spectrum2color(color_to, to);
            Color.lerp(color$5, color$5, color_to, lerp);
          }
          this._pass0.setUniform(this._handle, color$5);
          return this;
        };
        _proto.setAlpha = function setAlpha(alpha, alpha2) {
          color$5.a = alpha * 255;
          this._pass0.setUniform(this._handle, color$5);
          this._label.alpha = alpha2;
          return this;
        };
        _proto.setScale = function setScale(s) {
          this.node.setWorldScale(s, s, s);
          return this;
        };
        _proto.setNames = function setNames(cn, en) {
          this._label.config = {
            cn: cn,
            en: en
          };
          return this;
        };
        _proto._createLabel = function _createLabel() {
          var label = CelestialLabel.claim('stars', 'Sun');
          label.camera = findCamera(COSMOS$6, MAIN$5);
          label.target = this.node;
          this._label = setLabelStyle(label, 'solar', 'sun');
          label.setOffset(0, 0.15, 0);
          label.fontSize = FontSize$1.SECONDARY;
          this._label.syncActive = true;
        };
        _createClass(SunPrecise, [{
          key: "visible",
          set: function set(arg) {
            this.node.active = arg;
          }
        }]);
        return SunPrecise;
      }(Component)) || _class$A);
      var COSMOS$6 = SceneGraph.COSMOS,
        MAIN$5 = SceneGraph.Cameras.MAIN;
      var FontSize$1 = UIProxy.FontSize;
      var color$5 = Color.WHITE.clone();
      var color_to = Color.WHITE.clone();
      cclegacy._RF.pop();
      var _dec$q, _class$B, _class2$o;
      cclegacy._RF.push({}, "2442e9c5uxNNIJNYfLJbCSO", "culture-quad", undefined);
      var ccclass$q = _decorator.ccclass;
      var CultureQuad = exports('h', (_dec$q = ccclass$q('cocosmos.CultureQuad'), _dec$q(_class$B = (_class2$o = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CultureQuad, _Component);
        function CultureQuad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._config = void 0;
          _this._label = null;
          _this._mesh = void 0;
          _this._uvArr = [255, 255, 0, 0];
          _this._chArr = [0, 0, 0, 255];
          _this._texId = [0];
          _this._main = false;
          return _this;
        }
        var _proto = CultureQuad.prototype;
        _proto.loadConfig = function loadConfig(config, nearest) {
          this._config = config;
          var _this$_config = this._config,
            name = _this$_config.name,
            center = _this$_config.center,
            _this$_config$culture = _this$_config.culture,
            scale = _this$_config$culture.scale,
            angle = _this$_config$culture.angle,
            offset = _this$_config$culture.offset,
            tex = _this$_config$culture.tex,
            group = _this$_config.group,
            area = _this$_config.area;
          this.node.name = name;
          var dist = nearest;
          var size = dist * scale;
          var ra = center[0],
            dec = center[1];
          if (notEmptyArr(offset)) {
            ra -= offset[0] / DEG_PER_HOUR;
            dec += offset[1];
          }
          equator2ecliptic(v3a$d, hour2cartesian(ra, dec, dist, v3a$d));
          this.node.setWorldScale(size, size, 1);
          this.node.setWorldPosition(v3a$d);
          this.node.forward = v3a$d;
          this._main = group === ConstGroup.ZODIAC || area > FontSize$2.CONST_SML_AREA_VALUE;
          if (isNum(angle)) {
            // const { x, y, z } = this.node.eulerAngles;
            // this.node.setRotationFromEuler(x, y, z + angle);
            /**
             * TO ADJUST THIS (RECOVER DO THE OPPOSITE):
             * CLOSE: gizmos-proxy.struct&scope
             * OPEN: const-star-proxy._show_const_cults&lines&star_names
             * APPOINT: stellar-gould-belt.group&only
             * APPOINT: cosmos-proxy.INIT_POW=0
            */
            this.node.rotate(Quat.fromAngleZ(quat, angle));
          }
          if (tex) {
            var _tex$split = tex.split('-'),
              polar = _tex$split[0],
              channel = _tex$split[1],
              span = _tex$split[2],
              idx = _tex$split[3];
            this._uvArr = calcTiling(+idx, +span, CULTURE_CELL_NUM);
            this._texId[0] = polar === 'N' ? 0 : 255;
            this._chArr[0] = channel === 'R' ? 255 : 0;
            this._chArr[1] = channel === 'G' ? 255 : 0;
            this._chArr[2] = channel === 'B' ? 255 : 0;
          }
          return this;
        };
        _proto._syncInstancing = function _syncInstancing() {
          if (!this.node.activeInHierarchy) return;
          this._chArr[3] = constStars.cultureStrengthen * 255;
          this._mesh.setInstancedAttribute('instanced_uv', this._uvArr);
          this._mesh.setInstancedAttribute('instanced_channels', this._chArr);
          this._mesh.setInstancedAttribute('instanced_texid', this._texId);
        };
        _proto._syncActivating = function _syncActivating() {
          if (!this.node.parent || !this.node.parent.activeInHierarchy) return;
          if (!constStars.showConstCults) {
            this.node.active = false;
          } else {
            var dist = Vec3.distance(this.node.worldPosition, Vec3.ZERO);
            if (this.node.active && dist <= Min) {
              this.node.active = false;
            } else if (!this.node.active && dist > Min) {
              this.node.active = true;
            }
          }
        };
        _proto.onTick = function onTick(dt, tick) {
          this._syncActivating();
          this._syncInstancing();
          this._syncNameLabel();
        };
        _proto._syncNameLabel = function _syncNameLabel() {
          var lenSqr = Vec3.squaredDistance(this.node.worldPosition, Vec3.ZERO);
          var show = ui.showConstNames && lenSqr > 2;
          if (!show) {
            if (this._label) {
              this._label.free();
              this._label = null;
            }
          } else {
            var _this$_config2 = this._config,
              name = _this$_config2.name,
              cname = _this$_config2.cname;
            if (!this._label) {
              this._label = setLabelStyle(CelestialLabel.claim('const', name), 'const', this._main);
              this._label.camera = findCamera(COSMOS$7, DEEP$2);
              this._label.target = this.node;
              // this._label.string = ui.language === 'cn' ? cname : name;
              this._label.config = {
                en: name,
                cn: cname
              };
            }
            this._attenuateLabel(lenSqr);
          }
        };
        _proto._attenuateLabel = function _attenuateLabel(lenSqr) {
          if (!this._label) return;
          // const lenSqr = Vec3.squaredDistance(this.node.worldPosition, Vec3.ZERO);
          this._label.alpha = attenuate(lenSqr, [2, 4.2], true);
        };
        _proto.onLoad = function onLoad() {
          this._mesh = this.getComponent(MeshRenderer);
          core.on(Notifications.Time.TICK, this.onTick, this);
        };
        _proto.start = function start() {
          if (!CultureQuad.LoadTexTaskLaunched) {
            CultureQuad.LoadTexTaskLaunched = true;
            core.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_CONST_NORTH);
            core.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_CONST_SOUTH);
          }
        };
        return CultureQuad;
      }(Component), _class2$o.LoadTexTaskLaunched = false, _class2$o)) || _class$B));
      var v3a$d = new Vec3();
      var quat = new Quat();
      var _ConstStarsProxy$Cult = ConstStarsProxy.CultureAtt,
        Min = _ConstStarsProxy$Cult[0];
      var CULTURE_CELL_NUM = Res.Sheets.CULTURE_CELL_NUM;
      var NameLabelAtt$5 = UIProxy.NameLabelAtt,
        FontSize$2 = UIProxy.FontSize;
      var COSMOS$7 = SceneGraph.COSMOS,
        DEEP$2 = SceneGraph.Cameras.DEEP;
      cclegacy._RF.pop();
      var _dec$r, _dec2$g, _class$C, _class2$p, _descriptor$e;
      cclegacy._RF.push({}, "765d0BOoHZN0Li65l5arZsz", "stellar-gould-belt", undefined);
      var ccclass$r = _decorator.ccclass,
        property$c = _decorator.property;
      var StellarGouldBelt = exports('E', (_dec$r = ccclass$r('cocosmos.StellarGouldBelt'), _dec2$g = property$c(SunPrecise), _dec$r(_class$C = (_class2$p = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StellarGouldBelt, _Component);
        function StellarGouldBelt() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sun", _descriptor$e, _assertThisInitialized(_this));
          _this._configs = void 0;
          _this._constStars = new Map();
          _this._stars = void 0;
          _this._cultures = void 0;
          _this._preciseStars = void 0;
          return _this;
        }
        var _proto = StellarGouldBelt.prototype;
        _proto.getStar = function getStar(cst, ab) {
          if (this._constStars.has(cst)) {
            var _ref, _this$_constStars$get;
            return (_ref = (_this$_constStars$get = this._constStars.get(cst)[ab]) != null ? _this$_constStars$get : this._stars.getChildByName(cst + '-' + ab).getComponent(StarPrecise)) != null ? _ref : null;
          } else return null;
        };
        _proto.onLoad = function onLoad() {
          this._init()._buildConstStars();
        };
        _proto.update = function update() {
          this._stars.active = constStars.showStars;
          this._cultures.active = constStars.showConstCults;
        };
        _proto._init = function _init() {
          this._configs = core.res.getConfig(Res.Configs.CONSTELLATION_STARS);
          this._stars = createNodeAt("Stars", LAYER_BG_3D, this.node);
          this._cultures = createNodeAt("Cultures", LAYER_BG_3D, this.node);
          return this;
        };
        _proto.start = function start() {
          this.sun.setSpectrum(StarSpectrum.G, StarSpectrum.K, 0.4);
          this.sun.setNames('太阳', 'Sun');
          this.sun.visible = false;
        };
        _proto.lateUpdate = function lateUpdate() {
          this._attenuateSun();
        };
        _proto._buildConstStars = function _buildConstStars() {
          var _this2 = this;
          var Star = core.res.getPrefab(Res.Prefabs.STAR_PRECISE);
          var Culture = core.res.getPrefab(Res.Prefabs.CULTURE_QUAD);
          var _loop = function _loop() {
            var cst = key;
            var config = _this2._configs[cst];
            // if (this._checkSkip(config)) continue;
            var record = {};
            // 星座恒星
            _this2._constStars.set(cst, record);
            var stars = config.stars;
            var nearest = DEEP_DIST / 10;
            stars.forEach(function (line) {
              var node = setLayer(instantiate(Star), LAYER_BG_3D);
              var star = node.getComponent(StarPrecise);
              try {
                if (star.loadConfigLine(line, config)) {
                  node.parent = _this2._stars;
                  if (!!record[star.config.ab]) console.warn("dupli star", cst + '-' + star.config.ab);
                  record[star.config.ab] = star;
                  if (!star.placeholder) {
                    nearest = Math.min(nearest, star.config.dist);
                  }
                } else console.warn("star load failed for:", line);
              } catch (e) {
                console.warn("star load error for:", line);
              }
            });
            // 星座形象
            var culture = config.culture;
            if (culture) {
              var node = setLayer(instantiate(Culture), LAYER_BG_3D);
              node.parent = _this2._cultures;
              var _culture = node.getComponent(CultureQuad).loadConfig(config, nearest);
              _culture.node.active = false;
            }
          };
          for (var key in this._configs) {
            _loop();
          }
          this._preciseStars = this._stars.getComponentsInChildren(StarPrecise);
        };
        _proto._attenuateSun = function _attenuateSun() {
          var pow10 = cosmos.pow10;
          if (pow10 >= FROM && pow10 <= TO) {
            this.sun.visible = true;
            this.sun.setAlpha(attenuate(pow10, SUN_PRECISE_ATT), attenuate(pow10, SUN_LABEL_ATT$1));
            this.sun.setScale(Math.lerp(NEAR, FAR, (pow10 - FROM) / SPAN));
          } else this.sun.visible = false;
        }

        /**
         * @deprecated
         * 只用于配置数据时分布检查，正式发布不适用
        */;
        _proto._checkSkip = function _checkSkip(config) {
          // if (BUILD) return false;
          if (group$3 >= 0 && !(config.group & group$3)) return true;
          if (notEmptyArr(only) && !only.contains(config.cst)) return true;
          return false;
        };
        _createClass(StellarGouldBelt, [{
          key: "configs",
          get: function get() {
            return this._configs;
          }
        }, {
          key: "constStars",
          get: function get() {
            return this._constStars;
          }
        }, {
          key: "stars",
          get: function get() {
            return this._preciseStars;
          }
        }]);
        return StellarGouldBelt;
      }(Component), _descriptor$e = _applyDecoratedDescriptor(_class2$p.prototype, "sun", [_dec2$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$p)) || _class$C));
      var FROM = -3,
        TO = 3.5,
        SPAN = TO - FROM;
      var FAR = 0.02,
        NEAR = 0.2;
      var SUN_PRECISE_ATT = [FROM, FROM + 1, TO - 1, TO];
      var SUN_LABEL_ATT$1 = [FROM + 1.5, FROM + 2, TO - 1, TO];
      var DEEP_DIST = UIProxy.DEEP_DIST;
      var group$3 = ConstGroup.ALL;
      var only = [];

      // ZODIAC(1)
      // const only: cst[] = ['Ari', 'Tau', 'Gem', 'Cnc', 'Leo', 'Vir', 'Lib', 'Sco', 'Sgr', 'Cap', 'Aqr', 'Psc', 'Oph'];

      // URSA(2)
      // const only: cst[] = ['Boo', 'Cam', 'CVn', 'Com', 'CrB', 'Dra', 'LMi', 'Lyn', 'UMa', 'UMi'];

      // HERCULES
      // const only: cst[] = ['Aql', 'Ara', 'Cen', 'Crv', 'Crt', 'Cru', 'Cyg', 'Her', 'Hya', 'Lup', 'Lyr', 'Sge', 'Sct', 'Ser', 'Sex', 'TrA', 'Vul'].concat(['Tau', 'Oph']) as cst[];

      // PERSEUS
      // const only: cst[] = ['And', 'Aur', 'Cas', 'Cep', 'Cet', 'Lac', 'Peg', 'Per', 'Tri'].concat(['Tau']) as cst[];

      // ORION
      // const only: cst[] = ['CMa', 'CMi', 'Lep', 'Mon', 'Ori'];

      // OCEANIC
      // const only: cst[] = ['Car', 'Col', 'Del', 'Equ', 'Eri', 'PsA', 'Pup', 'Pyx', 'Vel'].concat(['Cet']) as cst[];

      // BAYER
      // const only: cst[] = ['Aps', 'Cha', 'Dor', 'Gru', 'Hyi', 'Mus', 'Pav', 'Phe', 'Tuc', 'Vol'].concat([]) as cst[];

      // LACAILLE
      // const only: cst[] = ['Ant', 'Cae', 'Cir', 'For', 'Nor', 'Hor', 'Men', 'Mic', 'Oct', 'Pic', 'Ret', 'Scl', 'Tel'];
      cclegacy._RF.pop();
      var _dec$s, _dec2$h, _dec3$c, _dec4$8, _class$D, _class2$q, _descriptor$f, _descriptor2$a, _descriptor3$8;
      cclegacy._RF.push({}, "0452dGwHHZJIZ1eAzc6blVh", "specific-system", undefined);
      var findComp = findComp$1;
      var ccclass$s = _decorator.ccclass,
        property$d = _decorator.property;
      var SpecificSystem = exports('H', (_dec$s = ccclass$s('cocosmos.specific-system'), _dec2$h = property$d(Node), _dec3$c = property$d(Blackhole), _dec4$8 = property$d(Star), _dec$s(_class$D = (_class2$q = /*#__PURE__*/function (_Controller) {
        _inheritsLoose(SpecificSystem, _Controller);
        function SpecificSystem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Controller.call.apply(_Controller, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "binaryStars", _descriptor$f, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "blackhole", _descriptor2$a, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "centerStar", _descriptor3$8, _assertThisInitialized(_this));
          _this._stellar = void 0;
          _this._solar = void 0;
          return _this;
        }
        var _proto = SpecificSystem.prototype;
        _proto.onLoad = function onLoad() {
          this._init()._listen();
        };
        _proto.start = function start() {
          this._hideAll();
        };
        _proto.update = function update() {};
        _proto.loadStellarTargetAndSync = function loadStellarTargetAndSync(onlyTargetAndTemp) {
          if (onlyTargetAndTemp === void 0) {
            onlyTargetAndTemp = false;
          }
          this._hideAll();
          var _visit$transInfo = visit.transInfo,
            name = _visit$transInfo.name,
            into = _visit$transInfo.into;
          var viewer = findCamera(COSMOS$8, MAIN$6);
          // console.debug("loadStellarTargetAndSync", onlyTargetAndTemp, visit.transInfo.transEnum, into);
          switch (into) {
            case "star":
              {
                this.binaryStars.active = !onlyTargetAndTemp;
                if (name === 'Sun') {
                  visit.transInfo.target = this._solar.sun;
                } else {
                  var config = core.res.getConfigItem(VISITABLE_STARS, name);
                  if (!config) return console.error('[specific.loadSystem]', 'cant find star config:', name);
                  var ab = config.ab,
                    cst = config.cst;
                  var star = this._stellar.getStar(cst, ab);
                  if (!star) return console.error('[specific.loadSystem]', 'cant find star obj:', name);
                  visit.transInfo.target = this.centerStar;
                  if (onlyTargetAndTemp) {
                    // 不能loadReference(star) => relative-scalar false in pre-half
                    // 不能什么都不做 => target.refer(refers.to) not set
                    visit.transInfo.stellar.refers.temp = star.node;
                    return;
                  } else {
                    this.centerStar.loadReference(star);
                    this.centerStar.node.name = name;
                    this.centerStar.loadConfig(config, viewer, BASE_POW10$2);
                  }
                }
              }
              break;
            case "blackhole":
              {
                this.blackhole.node.active = !onlyTargetAndTemp;
                if (name === 'Sun') {
                  visit.transInfo.target = this._solar.sun;
                } else {
                  var _config = core.res.getConfigItem(VISITABLE_BLACK_HOLES, name);
                  if (!_config) return console.error('[specific.loadSystem]', 'cant find blackhole config:', name);
                  var _ab = _config.ab,
                    _cst = _config.cst;
                  var blackhole = this._stellar.getStar(_cst, _ab);
                  if (!blackhole) return console.error('[specific.loadSystem]', 'cant find blackhole obj:', name);
                  visit.transInfo.target = this.blackhole;
                  if (onlyTargetAndTemp) {
                    // 不能loadReference(star) => relative-scalar false in pre-half
                    // 不能什么都不做 => target.refer(refers.to) not set
                    visit.transInfo.stellar.refers.temp = blackhole.node;
                    return;
                  } else {
                    this.blackhole.loadReference(blackhole);
                    this.blackhole.node.name = name;
                    this.blackhole.loadConfig(_config, viewer, BASE_POW10$2);
                  }
                }
              }
              break;
            default:
              console.warn('[specific.loadSystem]', 'undefined into:', into);
          }
        };
        _proto.lateUpdate = function lateUpdate() {
          // de
        };
        _proto._init = function _init() {
          this._stellar = findComp(StellarGouldBelt, this.node.parent, STELLAR);
          this._solar = findComp(SolarSystem, this.node.parent, SOLAR);
          return this;
        };
        _proto._listen = function _listen() {};
        _proto.freeSystem = function freeSystem() {
          this._hideAll();
        };
        _proto._hideAll = function _hideAll() {
          this.node.children.forEach(function (child) {
            return child.active = false;
          });
        };
        return SpecificSystem;
      }(Controller), (_descriptor$f = _applyDecoratedDescriptor(_class2$q.prototype, "binaryStars", [_dec2$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$a = _applyDecoratedDescriptor(_class2$q.prototype, "blackhole", [_dec3$c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$8 = _applyDecoratedDescriptor(_class2$q.prototype, "centerStar", [_dec4$8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$q)) || _class$D));
      var STELLAR = SceneGraph.STELLAR,
        SOLAR = SceneGraph.SOLAR,
        COSMOS$8 = SceneGraph.COSMOS,
        MAIN$6 = SceneGraph.Cameras.MAIN;
      var BASE_POW10$2 = CosmosProxy.Scopes.Specific[2];
      var _Res$Configs$2 = Res.Configs,
        VISITABLE_STARS = _Res$Configs$2.VISITABLE_STARS,
        VISITABLE_BLACK_HOLES = _Res$Configs$2.VISITABLE_BLACK_HOLES;
      cclegacy._RF.pop();
      var _dec$t, _class$E;
      cclegacy._RF.push({}, "7a8b0MD1WpLhL+/ofCUilv5", "virgo-super-cluster", undefined);
      var ccclass$t = _decorator.ccclass;
      var VirgoSuperCluster = (_dec$t = ccclass$t('cocosmos.VirgoSuperCluster'), _dec$t(_class$E = /*#__PURE__*/function (_CosmicScope) {
        _inheritsLoose(VirgoSuperCluster, _CosmicScope);
        function VirgoSuperCluster() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _CosmicScope.call.apply(_CosmicScope, [this].concat(args)) || this;
          _this._substructure_key = 'groups';
          _this._attenuation = [7.0, 7.7, 8.7, 9.15];
          return _this;
        }
        var _proto = VirgoSuperCluster.prototype;
        _proto.createSubParticles = function createSubParticles() {
          var _this2 = this;
          this._subparts = createNodeAt("Perversive Galaxy-Groups", LAYER_MAIN_3D, this.node);
          var GalaxiesGUP = core.res.getPrefab(GALAXIES_GPU$2);
          [NearGroups, SouthernGroups, WesternGroups, NorthGroups].forEach(function (args) {
            return setParticles(instantiate(GalaxiesGUP), args, _this2._subparts);
          });
        };
        _proto.approachScope1stTime = function approachScope1stTime() {
          // GPU Particle Texture Seems Not Support Dynamic Loading
          // core.notify(Task.Load.DYNAMIC_TEX, TaskNames.TEX_RDM_GALAXIES);
        };
        return VirgoSuperCluster;
      }(CosmicScope)) || _class$E);
      var GALAXIES_GPU$2 = Res.Prefabs.GALAXIES_GPU;
      var NearGroups = {
        num: 1200,
        sizes: [0.0024, 0.0036],
        radius: 0.15,
        position: {
          x: 0.05,
          y: 0.15,
          z: -0.4
        },
        scale: {
          x: 1,
          y: 1,
          z: 3
        },
        thickness: 0.5,
        random: 0.1
      };
      var SouthernGroups = {
        num: 1500,
        sizes: [0.004, 0.006],
        radius: 0.4,
        position: {
          x: 0,
          y: -0.25,
          z: 0.5
        },
        scale: {
          x: 2.5,
          y: 1.5,
          z: 1.2
        },
        thickness: 0.5,
        random: 0.2
      };
      var WesternGroups = {
        num: 2200,
        sizes: [0.006, 0.01],
        radius: 0.6,
        position: {
          x: 0,
          y: -0.8,
          z: -2.
        },
        scale: {
          x: 3,
          y: 1.5,
          z: 2.2
        },
        thickness: 0.5,
        random: 0.2
      };
      var NorthGroups = {
        num: 2000,
        sizes: [0.005, 0.008],
        radius: 0.6,
        position: {
          x: 0.5,
          y: 1,
          z: -0.5
        },
        scale: {
          x: 4,
          y: 1,
          z: 4
        },
        thickness: 0.5,
        random: 0.2
      };
      cclegacy._RF.pop();
      var _dec$u, _dec2$i, _dec3$d, _class$F, _class2$r, _descriptor$g, _descriptor2$b, _class3$3;
      cclegacy._RF.push({}, "57a06S8hUpJKoGQt9HybZ6x", "deep-sky-fixed", undefined);
      var ccclass$u = _decorator.ccclass,
        property$e = _decorator.property;
      var DeepSkyFixed = exports('$', (_dec$u = ccclass$u('cocosmos.DeepSkyFixed'), _dec2$i = property$e(Material), _dec3$d = property$e(Material), _dec$u(_class$F = (_class2$r = (_class3$3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DeepSkyFixed, _Component);
        function DeepSkyFixed() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "messierInners", _descriptor$g, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "messierGalaxies", _descriptor2$b, _assertThisInitialized(_this));
          _this._label = null;
          _this._viewer = void 0;
          _this._config = void 0;
          _this._fov = void 0;
          _this._mesh = void 0;
          _this._culling = void 0;
          _this._milky = false;
          _this._local = false;
          _this._clustered = false;
          _this._nebular = false;
          _this._extragalactic = false;
          _this._uvArr = [1, 1, 0, 0];
          _this._nstr = '';
          return _this;
        }
        var _proto = DeepSkyFixed.prototype;
        _proto.loadConfig = function loadConfig(key, config) {
          this._config = config;
          var _this$_config = this._config,
            ra_hms = _this$_config.ra_hms,
            dec_hms = _this$_config.dec_hms,
            dist = _this$_config.dist,
            dso = _this$_config.dso;
          var _ra_hms$split = ra_hms.split(':'),
            H = _ra_hms$split[0],
            M = _ra_hms$split[1],
            S = _ra_hms$split[2];
          this._config.RA = (+H + +M / SEC_PER_MIN + +S / SEC_PER_HOUR) * DEG_PER_HOUR;
          var _dec_hms$split = dec_hms.split(':'),
            h = _dec_hms$split[0],
            m = _dec_hms$split[1],
            s = _dec_hms$split[2];
          this._config.Dec = +h + +m / SEC_PER_MIN + +s / SEC_PER_HOUR;
          this.node.name = key;
          this._milky = dist > NEAR_STAR_KLY && dist < MILKY_KLY;
          this._clustered = dso < EmissiveNebula;
          this._nebular = !this.clustered && dso < EllipticalGalaxy;
          this._extragalactic = !this.clustered && !this.nebular;
          this._local = this._extragalactic && dist < LOCAL_KLY;
          return this._initAccurate();
        };
        _proto.onLoad = function onLoad() {
          this._mesh = this.getComponent(MeshRenderer);
          core.on(Notifications.Time.TICK, this.onTick, this);
        };
        _proto.onDestroy = function onDestroy() {
          this.viewer = null;
          core.unload(this);
        };
        _proto.onTick = function onTick(dt, tick) {
          this._syncActivating();
          this._syncInstancing();
          this._syncNameLabel();
        };
        _proto._syncActivating = function _syncActivating() {
          this._culling = false;
          if (!this.node.parent || !this.node.parent.activeInHierarchy) return;
          var showNebulas = deepGalaxy.showNebulas,
            showClusters = deepGalaxy.showClusters,
            showGalaxies = deepGalaxy.showGalaxies;
          var activated = Vec3.squaredDistance(this.node.worldPosition, Vec3.ZERO) > WPS_VLV_SQR$1 && (this._nebular && showNebulas || this._clustered && showClusters || this._extragalactic && showGalaxies);
          if (activated) {
            this._culling = pyramidCulling(this._viewer.getComponent(Camera), this.node, FOV_CULLING_VALVE$1);
            this.node.active = !this._culling;
          } else this.node.active = false;
        };
        _proto._syncInstancing = function _syncInstancing() {
          this.node.activeInHierarchy && this._mesh.setInstancedAttribute('instanced_uv', this._uvArr);
        };
        _proto._syncNameLabel = function _syncNameLabel() {
          var style = this._clustered ? 'cluster' : this._nebular ? 'nebula' : 'galaxy';
          var bingo = style === 'galaxy' ? ui.showGalaxyNames : ui.showNebularNames;
          var show = this.node.activeInHierarchy && bingo;
          if (!show && this._label) {
            this._label.free();
            this._label = null;
          } else if (show) {
            if (!this._label) {
              var _this$_label$setMap;
              var label = CelestialLabel.claim(style, this.node.name);
              label.camera = findCamera(COSMOS$9, DEEP$3);
              label.target = this.node;
              var north = this.node.worldPosition.y > 0;
              if (style === 'galaxy') {
                var _this$_config2 = this._config,
                  dso = _this$_config2.dso,
                  cent = _this$_config2.cent;
                var sub = dso == DwarfGalaxy ? !!cent ? 'companion' : 'dwarf' : 'center';
                if (sub != 'companion') north = this.node.position.y > (this.local ? LOCAL_TO_SOLAR.y : VIRGO_TO_SOLAR.y);
                this._label = setLabelStyle(label, style, sub, north);
              } else {
                this._label = setLabelStyle(label, style, north);
              }
              var _this$_config3 = this._config,
                bias = _this$_config3.bias,
                NGC = _this$_config3.NGC,
                IC = _this$_config3.IC,
                nick = _this$_config3.nick;
              this._label.setMap((_this$_label$setMap = {}, _this$_label$setMap[DeepNameType.NAMED] = {
                en: bias,
                cn: nick
              }, _this$_label$setMap[DeepNameType.MESSIER] = this.node.name, _this$_label$setMap[DeepNameType.NGC_IC] = NGC ? 'NGC-' + NGC : IC ? 'IC-' + IC : '', _this$_label$setMap), CelestialNameType.Deep);
            }
            this._attenuateLabel();
          }
        };
        _proto._attenuateLabel = function _attenuateLabel() {
          if (!this._label) return;
          var lenSqr = Vec3.squaredDistance(this.node.worldPosition, Vec3.ZERO);
          this._label.alpha = attenuate(lenSqr, NameLabelAtt$6, true);
        };
        _proto._initAccurate = function _initAccurate() {
          var _this$_config4 = this._config,
            RA = _this$_config4.RA,
            Dec = _this$_config4.Dec,
            dist = _this$_config4.dist,
            diam = _this$_config4.diam,
            appD = _this$_config4.appD,
            tex = _this$_config4.tex;
          if (isNaN(RA)) return console.warn("[" + this.node.name + "]:ra", RA);
          if (isNaN(Dec)) return console.warn("[" + this.node.name + "]:dec", Dec);
          if (isNaN(dist)) return console.warn("[" + this.node.name + "]:dist", dist);
          polar2cartesian(RA, Dec, dist, v3a$e);
          if (isNaN(v3a$e.x) || isNaN(v3a$e.y) || isNaN(v3a$e.z)) return console.warn("[" + this.node.name + "]:pos", v3a$e);
          equator2ecliptic(v3a$e, v3a$e);
          var pow10 = !this.extragalactic ? RAT_MILKY : this.local ? RAT_LOCAL : RAT_VIRGO;
          v3a$e.multiplyScalar(Math.pow(10, pow10 + POW_KILO));
          var _appearanceToRadiusFo = appearanceToRadiusFov(dist, diam, appD, pow10),
            radius = _appearanceToRadiusFo[0],
            fov = _appearanceToRadiusFo[1];
          var magnify = this.extragalactic ? this.local ? 1.3 : 2.5 : 1;
          v3b$2.set(radius, radius, radius).multiplyScalar(magnify);
          this._fov = +fov.toFixed(1);
          this.node.setPosition(v3a$e);
          this.node.setScale(v3b$2);
          this.getComponent(MeshRenderer).setSharedMaterial(this._extragalactic ? this.messierGalaxies : this.messierInners, 0);
          var _ref = tex != null ? tex : this._fov > 10 ? MESSIER_DEFAULT_BIG : MESSIER_DEFAULT,
            idx = _ref[0],
            span = _ref[1];
          var xy = span * CELL;
          var z = idx % MESSIER_CELL_NUM * CELL;
          var w = Math.floor(idx / MESSIER_CELL_NUM) * CELL;
          this._uvArr = [xy, xy, z, w];
          return true;
        };
        _createClass(DeepSkyFixed, [{
          key: "routing",
          get: function get() {
            return false;
          } // TODO
        }, {
          key: "fov",
          get: function get() {
            return this._fov;
          }
        }, {
          key: "config",
          get: function get() {
            return this._config;
          }
        }, {
          key: "viewer",
          set: function set(target) {
            this._viewer = target;
          }
        }, {
          key: "milky",
          get: function get() {
            return this._milky;
          }
        }, {
          key: "clustered",
          get: function get() {
            return this._clustered;
          }
        }, {
          key: "nebular",
          get: function get() {
            return this._nebular;
          }
        }, {
          key: "local",
          get: function get() {
            return this._local;
          }
        }, {
          key: "extragalactic",
          get: function get() {
            return this._extragalactic;
          }
        }, {
          key: "label",
          get: function get() {
            return this._label;
          },
          set: function set(arg) {
            this._label = arg;
          }
        }, {
          key: "culling",
          get: function get() {
            return this._culling;
          }
        }]);
        return DeepSkyFixed;
      }(Component), _class3$3.LoadTexTaskLaunched = false, _class3$3), (_descriptor$g = _applyDecoratedDescriptor(_class2$r.prototype, "messierInners", [_dec2$i], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$b = _applyDecoratedDescriptor(_class2$r.prototype, "messierGalaxies", [_dec3$d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$r)) || _class$F));
      var COSMOS$9 = SceneGraph.COSMOS,
        DEEP$3 = SceneGraph.Cameras.DEEP;
      var NEAR_STAR_KLY = NEAREST_STAR / 1000;
      var MILKY_KLY = 100;
      var LOCAL_KLY = 10000;
      var POW_KILO = 3;
      var _CosmosProxy$Scopes = CosmosProxy.Scopes,
        MilkyWay$1 = _CosmosProxy$Scopes.MilkyWay,
        LocalGG = _CosmosProxy$Scopes.LocalGG,
        VirgoSC = _CosmosProxy$Scopes.VirgoSC;
      var RAT_MILKY = -MilkyWay$1[2];
      var RAT_LOCAL = -LocalGG[2];
      var RAT_VIRGO = -VirgoSC[2];
      var EmissiveNebula = DeepSkyObjectType.EmissiveNebula,
        EllipticalGalaxy = DeepSkyObjectType.EllipticalGalaxy,
        DwarfGalaxy = DeepSkyObjectType.DwarfGalaxy;
      // const { MESSIER, NGC_IC, CHINESE, WEST_BIAS } = DeepNameType;
      var NameLabelAtt$6 = UIProxy.NameLabelAtt,
        WPS_NEAREST_VALVE = UIProxy.WPS_CULLING_VALVE,
        FOV_CULLING_VALVE$1 = UIProxy.FOV_CULLING_VALVE;
      var WPS_VLV_SQR$1 = WPS_NEAREST_VALVE * WPS_NEAREST_VALVE;
      var _Res$Sheets$1 = Res.Sheets,
        MESSIER_CELL_NUM = _Res$Sheets$1.MESSIER_CELL_NUM,
        MESSIER_DEFAULT = _Res$Sheets$1.MESSIER_DEFAULT,
        MESSIER_DEFAULT_BIG = _Res$Sheets$1.MESSIER_DEFAULT_BIG;
      var v3a$e = new Vec3();
      var v3b$2 = new Vec3();
      var CELL = 255 / MESSIER_CELL_NUM;
      cclegacy._RF.pop();
      var _dec$v, _dec2$j, _class$G, _class2$s, _descriptor$h;
      cclegacy._RF.push({}, "6a0118Zh0lHkqUEZtq1yv5D", "coordinates", undefined);
      var ccclass$v = _decorator.ccclass,
        property$f = _decorator.property;
      var Coordinates = exports('a7', (_dec$v = ccclass$v('cocosmos.Coordinates'), _dec2$j = property$f(MeshRenderer), _dec$v(_class$G = (_class2$s = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coordinates, _Component);
        function Coordinates() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "grids", _descriptor$h, _assertThisInitialized(_this));
          // private _polarPostfix: string = '';
          // private _equatorKey: string = '';
          _this._prefix = '';
          _this._pass = void 0;
          _this._handleGC = void 0;
          _this._handleGD = void 0;
          _this._handleEC = void 0;
          _this._grid_c = new Vec4(1, 1, 1, 1);
          _this._grid_d = new Vec4(36, 18, 2, 2);
          _this._equator_c = new Vec4(1, 1, 1, 1);
          _this._gridsLabels = [];
          _this._polarLabels = [];
          _this._equatorLabels = [];
          _this._transform = new Mat3();
          _this._center = void 0;
          _this._camera = void 0;
          _this._renderer = void 0;
          return _this;
        }
        var _proto = Coordinates.prototype;
        _proto.onLoad = function onLoad() {
          var _this$grids;
          this._pass = (_this$grids = this.grids) == null || (_this$grids = _this$grids.material) == null ? void 0 : _this$grids.passes[0];
          this._handleGC = this._pass.getHandle('gridColor');
          this._handleGD = this._pass.getHandle('gridDivision');
          this._handleEC = this._pass.getHandle('equatorColor');
          var SCALE = DEEP_DIST$1 / 10;
          this.node.setWorldScale(SCALE, SCALE, SCALE);
          setLayer(this.node, LAYER_BG_3D);
        };
        _proto.setKeyPrefix = function setKeyPrefix(prefix) {
          this._prefix = prefix;
          return this;
        }

        // public setNames(equator: i18nKey, postfix: string): this {
        //     this._equatorKey = 'coords@' + equator;
        //     this._polarPostfix = postfix;
        //     return this;
        // }
        ;

        _proto.setView = function setView(center, camera, renderer) {
          this._center = center;
          this._camera = camera;
          this._renderer = renderer;
          return this;
        };
        _proto.setRotation = function setRotation(euler) {
          this.node.setWorldRotationFromEuler(euler.x, euler.y, euler.z);
          Mat3.fromMat4(this._transform, this.node.worldMatrix);
          return this;
        };
        _proto.setColors = function setColors(grids, equator) {
          this._pass.setUniform(this._handleGC, this._grid_c.set(grids.r, grids.g, grids.b, grids.a).multiplyScalar(1 / 255));
          this._pass.setUniform(this._handleEC, this._equator_c.set(equator.r, equator.g, equator.b, equator.a).multiplyScalar(1 / 255));
          return this;
        };
        _proto.setDivision = function setDivision(div) {
          this._pass.setUniform(this._handleGD, this._grid_d.set(div));
          return this;
        };
        _proto.onDisable = function onDisable() {
          this.freeDegreesLabels();
          this.freeEquatorLabels();
          this.freePolarLabels();
        };
        _proto.lateUpdate = function lateUpdate() {
          var showCoordGrids = gizmos.showCoordGrids,
            showCoordEquator = gizmos.showCoordEquator,
            showCoordPolar = gizmos.showCoordPolar,
            showCoordAxis = gizmos.showCoordAxis,
            lineStrength = gizmos.lineStrength;
          if (showCoordGrids) {
            this.createDegreesLabels(this._grid_d.x === 24);
            this.gridAlpha = lineStrength;
          } else {
            this.freeDegreesLabels();
            this.gridAlpha = 0;
          }
          if (showCoordEquator) {
            this.createEquatorLabels();
            this.equatorAlpha = lineStrength;
          } else {
            this.freeEquatorLabels();
            this.equatorAlpha = 0;
          }
          if (showCoordPolar) this.createPolarLabels();else this.freePolarLabels();
          if (showCoordAxis) {
            this._renderer.addLine(Vec3.multiplyScalar(v3a$f, this.node.up, DEEP_DIST$1), Vec3.negate(v3b$3, v3a$f), Color.WHITE, false);
          }
        };
        _proto.createDegreesLabels = function createDegreesLabels(hourAngle) {
          if (this._gridsLabels.length > 0) return;
          this._v4_color();
          // horizontal
          var hcc = Math.round(DEG_PERIGON / this._grid_d.x);
          for (var deg = 0; deg < DEG_PERIGON; deg += hcc) {
            var str = hourAngle ? "+" + deg / DEG_PER_HOUR + "h" : "+" + deg + "\xB0";
            var label = setLabelStyle(CelestialLabel.claim('coord', str), 'coord');
            label.target = this._center;
            label.camera = this._camera;
            // label.string = str;
            label.pure = str;
            label.color = color$6;
            this._gridsLabels.push(label);
            var rad = Math.parseRadian(deg);
            v3a$f.set(Math.sin(rad), 0, Math.cos(rad));
            Vec3.transformMat3(v3a$f, v3a$f, this._transform);
            label.setOffset(v3a$f);
          }
          // vertical
          var vcc = Math.round(DEG_PI / this._grid_d.y);
          for (var _deg = 0; _deg <= DEG_RIGHT; _deg += vcc) {
            var _num = _deg === DEG_RIGHT ? 2 : 8;
            for (var i = 0; i < _num; i++) {
              var nth = i % 2 === 0;
              var _str = "" + (nth ? '+' : '-') + _deg + "\xB0";
              if (_str === '-0°' || _str === '+0°') continue;
              var _label = setLabelStyle(CelestialLabel.claim('coord', _str), 'coord');
              _label.target = this._center;
              _label.camera = this._camera;
              // label.string = str;
              _label.pure = _str;
              _label.color = color$6;
              var _rad = Math.parseRadian(_deg);
              var hor = Math.cos(_rad),
                ver = Math.sin(_rad);
              var x = i < 2 ? hor : i < 4 ? -hor : 0;
              var y = nth ? ver : -ver;
              var z = i > 5 ? hor : i > 3 ? -hor : 0;
              v3a$f.set(x, y, z);
              this._gridsLabels.push(_label);
              Vec3.transformMat3(v3a$f, v3a$f, this._transform);
              _label.setOffset(v3a$f);
            }
          }
          return this;
        };
        _proto.createEquatorLabels = function createEquatorLabels() {
          if (this._equatorLabels.length > 0) return;
          this._v4_color();
          for (var deg = 0; deg < DEG_PERIGON; deg += DEG_RIGHT_2) {
            var label = CelestialLabel.claim('coord', this._prefix + '-equator');
            label.target = this._center;
            label.camera = this._camera;
            // label.string = this._equatorName;
            label.key = "coords@" + this._prefix + "-eq";
            setLabelStyle(label, 'ruler', 'equator');
            label.color = color$6;
            var rad = Math.parseRadian(deg);
            v3a$f.set(Math.sin(rad), 0, Math.cos(rad));
            Vec3.transformMat3(v3a$f, v3a$f, this._transform);
            label.setOffset(v3a$f);
            this._equatorLabels.push(label);
          }
          return this;
        };
        _proto.createPolarLabels = function createPolarLabels() {
          var _this2 = this;
          if (this._polarLabels.length > 0) return;
          this._v4_color();
          ['s', 'n'].forEach(function (dir) {
            // let key: i18nKey = pre + this._polarPostfix;
            // if (key === '北天顶') key = '天顶';
            // if (key === '南天顶') key = '天底';
            var label = CelestialLabel.claim('coord', _this2._prefix + '-' + dir + '-pole');
            label.target = _this2._center;
            label.camera = _this2._camera;
            // label.string = key;
            label.key = "coords@" + _this2._prefix + "-" + dir;
            setLabelStyle(label, 'ruler', 'polar');
            label.color = color$6;
            v3a$f.set(0, dir === 'n' ? 1 : -1, 0);
            Vec3.transformMat3(v3a$f, v3a$f, _this2._transform);
            label.setOffset(v3a$f);
            _this2._polarLabels.push(label);
          });
          return this;
        };
        _proto.freeEquatorLabels = function freeEquatorLabels() {
          return this._free(this._equatorLabels);
        };
        _proto.freeDegreesLabels = function freeDegreesLabels() {
          return this._free(this._gridsLabels);
        };
        _proto.freePolarLabels = function freePolarLabels() {
          return this._free(this._polarLabels);
        };
        _proto._v4_color = function _v4_color() {
          var _v4a$set$multiplyScal = v4a$4.set(this._grid_c).multiplyScalar(255),
            x = _v4a$set$multiplyScal.x,
            y = _v4a$set$multiplyScal.y,
            z = _v4a$set$multiplyScal.z;
          color$6.set(x, y, z, 255);
        };
        _proto._free = function _free(labels) {
          labels.forEach(function (label) {
            return label == null ? void 0 : label.free();
          });
          labels.length = 0;
          return this;
        };
        _createClass(Coordinates, [{
          key: "gridAlpha",
          set: function set(arg) {
            if (this._grid_c.w === arg) return;
            this._grid_c.w = arg;
            this._pass.setUniform(this._handleGC, this._grid_c);
          }
        }, {
          key: "equatorAlpha",
          set: function set(arg) {
            if (this._equator_c.w === arg) return;
            this._equator_c.w = arg;
            this._pass.setUniform(this._handleEC, this._equator_c);
          }
        }]);
        return Coordinates;
      }(Component), _descriptor$h = _applyDecoratedDescriptor(_class2$s.prototype, "grids", [_dec2$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2$s)) || _class$G));
      var DEEP_DIST$1 = UIProxy.DEEP_DIST;
      var color$6 = new Color();
      var v4a$4 = new Vec4();
      var v3a$f = new Vec3();
      var v3b$3 = new Vec3();
      cclegacy._RF.pop();
      var _dec$w, _dec2$k, _dec3$e, _class$H, _class2$t, _descriptor$i;
      cclegacy._RF.push({}, "f8e89jlKeROQJU+7ek2ZYDX", "label-i18n", undefined);
      var ccclass$w = _decorator.ccclass,
        disallowMultiple$2 = _decorator.disallowMultiple,
        requireComponent$1 = _decorator.requireComponent,
        property$g = _decorator.property,
        executeInEditMode$2 = _decorator.executeInEditMode;
      var LabelI18n = exports('L', (_dec$w = ccclass$w('cocosmos.label-i18n'), _dec2$k = executeInEditMode$2(true), _dec3$e = requireComponent$1(Label), _dec$w(_class$H = disallowMultiple$2(_class$H = _dec2$k(_class$H = _dec3$e(_class$H = (_class2$t = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LabelI18n, _Component);
        function LabelI18n() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_key", _descriptor$i, _assertThisInitialized(_this));
          _this._label = void 0;
          _this._lang = void 0;
          _this._config = void 0;
          return _this;
        }
        var _proto = LabelI18n.prototype;
        _proto.onLoad = function onLoad() {
          this._label = this.getComponent(Label);
        };
        _proto.start = function start() {
          if (this._key && !this._config) {
            this.string = this._key;
          }
        };
        _proto.lateUpdate = function lateUpdate() {
          if (this._key) {
            ui.language != this._lang && this._updateString();
          }
        };
        _proto._updateString = function _updateString() {
          this._lang = ui.language;
          if (this._config) {
            this._label.string = this._config[this._lang];
          }
        };
        _createClass(LabelI18n, [{
          key: "string",
          get: function get() {
            var _this$_label$string, _this$_label;
            return (_this$_label$string = (_this$_label = this._label) == null ? void 0 : _this$_label.string) != null ? _this$_label$string : '';
          },
          set: function set(en) {
            var key = en.toLowerCase();
            {
              this._config = getI18nConfig(en);
              if (!this._config) {
                console.warn('i18n lost config for:', en);
                this._label.string = en;
                return;
              }
            }
            this._key = key;
            this._lang = null;
          }
        }, {
          key: "config",
          set: function set(arg) {
            this._config = arg;
            this._key = arg.en.toLowerCase();
            this._lang = null;
          }
        }]);
        return LabelI18n;
      }(Component), (_descriptor$i = _applyDecoratedDescriptor(_class2$t.prototype, "_key", [property$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2$t.prototype, "string", [property$g], Object.getOwnPropertyDescriptor(_class2$t.prototype, "string"), _class2$t.prototype)), _class2$t)) || _class$H) || _class$H) || _class$H) || _class$H));
      cclegacy._RF.pop();
      var _dec$x, _dec2$l, _dec3$f, _dec4$9, _dec5$6, _dec6$5, _dec7$4, _dec8$3, _class$I, _class2$u, _descriptor$j, _descriptor2$c, _descriptor3$9, _descriptor4$6, _descriptor5$5, _descriptor6$4, _descriptor7$3;
      cclegacy._RF.push({}, "07c65DY4glNsqsOosQEI5OV", "celestial-icon", undefined);
      var ccclass$x = _decorator.ccclass,
        property$h = _decorator.property;
      var CelestialIcon = exports('o', (_dec$x = ccclass$x('cocosmos.celestial-icon'), _dec2$l = property$h(Sprite), _dec3$f = property$h(Sprite), _dec4$9 = property$h(Sprite), _dec5$6 = property$h(Sprite), _dec6$5 = property$h(LabelI18n), _dec7$4 = property$h(Button), _dec8$3 = property$h(Node), _dec$x(_class$I = (_class2$u = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CelestialIcon, _Component);
        function CelestialIcon() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "border", _descriptor$j, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor2$c, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "invisible", _descriptor3$9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rank", _descriptor4$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor5$5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "button", _descriptor6$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrived", _descriptor7$3, _assertThisInitialized(_this));
          _this._data = {};
          return _this;
        }
        var _proto = CelestialIcon.prototype;
        _proto.onLoad = function onLoad() {
          core.on(UI.VISIBLE, this.resetVisible, this);
          core.on(View.Transform.VISIT_OVER, this.onVisitOver, this);
        };
        _proto.onDestroy = function onDestroy() {
          core.unload(this);
        };
        _proto.onDataUpdated = function onDataUpdated(data) {
          var into = data.into,
            name = data.name,
            _data$label = data.label,
            en = _data$label === void 0 ? name : _data$label,
            tag = data.tag;
          if (this._data.into !== into) {
            var postfix = into === 'minor' ? 'satellite' : into === 'belts' ? 'dwarf' : into;
            this.border.spriteFrame = core.res.getSheetFrame(UI_BORDER, 'bdr_icon_' + postfix);
          }
          if (this._data.name !== name) {
            var icon = core.res.getSheetFrame(UI_ICON, 'icon_' + name);
            this.icon.spriteFrame = icon != null ? icon : core.res.getSheetFrame(UI_ICON, UI_ICON_DEFAULT);
          }
          this.label.string = 'celestial@' + en;
          this._data = data;
          this.node.name = name;
          this.resetTag(tag);
          this.resetVisible();
          this.resetArrived();
        };
        _proto.onVisitOver = function onVisitOver() {
          this.resetArrived();
        };
        _proto.resetArrived = function resetArrived() {
          var isMe = this._data.name === visit.centerName && this._data.name != 'Sun';
          this.arrived.active = isMe;
        };
        _proto.resetTag = function resetTag(tag) {
          if (!tag) {
            this.rank.node.active = false;
          } else {
            this.rank.spriteFrame = core.res.getSheetFrame(Res.Sheets.UI_ICON, tag);
            this.rank.node.active = true;
          }
        };
        _proto.resetVisible = function resetVisible(into_cn, shown) {
          var visible = true;
          switch (this._data.into) {
            // case 'sun': visible = solar.showSun; break;
            case 'planet':
              visible = solar.showPlanets;
              break;
            case 'dwarf':
              visible = solar.showDwarfs;
              break;
            case 'minor':
              visible = solar.showMinors;
              break;
            case 'belts':
              visible = solar.showBelts;
              break;
            case 'comet':
              visible = solar.showComets;
              break;
            case 'satellite':
              visible = planetary.showSatellites;
              break;
            case 'artificial':
              visible = planetary.showArtificial;
              break;
            case 'star':
              {
                if (this._name === 'Sun') visible = solar.showSun;else visible = constStars.showStars;
              }
              break;
            case 'constellation':
              visible = constStars.showConsts;
              break;
            case 'nebula':
              visible = deepGalaxy.showNebulas;
              break;
            case 'cluster':
              visible = deepGalaxy.showClusters;
              break;
            case 'galaxy':
              visible = deepGalaxy.showGalaxies;
              break;
            case 'blackhole':
              visible = deepGalaxy.showBlackHoles;
              break;
          }
          this.button.interactable = visible;
          this.invisible.enabled = !visible;
        };
        _proto.onClick = function onClick() {
          var _this$_data = this._data,
            into = _this$_data.into,
            name = _this$_data.name,
            pop = _this$_data.pop;
          if (pop === 'visit-cd') {
            core.notify(UI.Popups.VISIT_CD, name, into);
          } else {
            if (LogProxy.PRINT_VISIT) console.info('=>', UI.VISIT, name, into);
            core.notify(UI.VISIT, name, into);
          }
        };
        return CelestialIcon;
      }(Component), (_descriptor$j = _applyDecoratedDescriptor(_class2$u.prototype, "border", [_dec2$l], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$c = _applyDecoratedDescriptor(_class2$u.prototype, "icon", [_dec3$f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3$9 = _applyDecoratedDescriptor(_class2$u.prototype, "invisible", [_dec4$9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4$6 = _applyDecoratedDescriptor(_class2$u.prototype, "rank", [_dec5$6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5$5 = _applyDecoratedDescriptor(_class2$u.prototype, "label", [_dec6$5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6$4 = _applyDecoratedDescriptor(_class2$u.prototype, "button", [_dec7$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7$3 = _applyDecoratedDescriptor(_class2$u.prototype, "arrived", [_dec8$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2$u)) || _class$I));
      var _Res$Sheets$2 = Res.Sheets,
        UI_BORDER = _Res$Sheets$2.UI_BORDER,
        UI_ICON = _Res$Sheets$2.UI_ICON,
        UI_ICON_DEFAULT = _Res$Sheets$2.UI_ICON_DEFAULT;
      cclegacy._RF.pop();
      var _dec$y, _dec2$m, _dec3$g, _dec4$a, _class$J, _class2$v, _descriptor$k, _descriptor2$d;
      cclegacy._RF.push({}, "6b2e2S4dfVFOaiD/POveydM", "tip-line", undefined);
      var ccclass$y = _decorator.ccclass,
        requireComponent$2 = _decorator.requireComponent,
        property$i = _decorator.property;
      var TipLine = exports('ai', (_dec$y = ccclass$y('cocosmos.TipLine'), _dec2$m = requireComponent$2(Animation), _dec3$g = property$i(Label), _dec4$a = property$i(Label), _dec$y(_class$J = _dec2$m(_class$J = (_class2$v = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TipLine, _Component);
        function TipLine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "show", _descriptor$k, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hide", _descriptor2$d, _assertThisInitialized(_this));
          _this._anim = void 0;
          _this._cw = void 0;
          return _this;
        }
        var _proto = TipLine.prototype;
        _proto.onLoad = function onLoad() {
          this._anim = this.getComponent(Animation);
          this._cw = this.show.fontSize;
        };
        _createClass(TipLine, [{
          key: "string",
          set: function set(content) {
            var _this$getComponent;
            var uit = this.getComponent(UITransform);
            uit.setContentSize(String.Length(content) * this._cw * 0.5, uit.height);
            (_this$getComponent = this.getComponent(Widget)) == null || _this$getComponent.updateAlignment();
            this.hide.string = this.show.string;
            this.show.string = content;
            this._anim.play();
          }
        }]);
        return TipLine;
      }(Component), (_descriptor$k = _applyDecoratedDescriptor(_class2$v.prototype, "show", [_dec3$g], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2$d = _applyDecoratedDescriptor(_class2$v.prototype, "hide", [_dec4$a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2$v)) || _class$J) || _class$J));
      cclegacy._RF.pop();
      var _dec$z, _class$K, _class2$w, _descriptor$l, _descriptor2$e, _descriptor3$a, _descriptor4$7, _descriptor5$6, _descriptor6$5;
      cclegacy._RF.push({}, "47a9dw+GSNIq6jtwlUnvAb4", "skybox-cube", undefined);
      var ccclass$z = _decorator.ccclass,
        property$j = _decorator.property;
      var SkyboxCube = exports('W', (_dec$z = ccclass$z('cocosmos.skybox-cube'), _dec$z(_class$K = (_class2$w = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SkyboxCube, _Component);
        function SkyboxCube() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._materials = [];
          _this._passes0 = [];
          _this._handles = [];
          _initializerDefineProperty(_this, "_luminance", _descriptor$l, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_color", _descriptor2$e, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_scale", _descriptor3$a, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_r", _descriptor4$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_g", _descriptor5$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_b", _descriptor6$5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SkyboxCube.prototype;
        _proto.onLoad = function onLoad() {
          core.on(Notifications.Time.TICK, this.onTick, this);
          this._materials = this.getComponentsInChildren(MeshRenderer).map(function (mesh) {
            return mesh.getMaterialInstance(0);
          });
          this._passes0 = this._materials.map(function (mat) {
            return mat.passes[0];
          });
          /** discard color to change skybox, use color-scale */
          // this._handles = this._passes0.map(pass => pass.getHandle('mainColor'));
          this._handles = this._passes0.map(function (pass) {
            return pass.getHandle('colorScaleAndCutoff');
          });
        };
        _proto.setRotation = function setRotation(euler) {
          this.node.setWorldRotationFromEuler(euler.x, euler.y, euler.z);
          return this;
        };
        _proto.addRotY = function addRotY(add) {
          var _this$node$eulerAngle = this.node.eulerAngles,
            x = _this$node$eulerAngle.x,
            y = _this$node$eulerAngle.y,
            z = _this$node$eulerAngle.z;
          this.node.setRotationFromEuler(x, y + add, z);
          return this;
        };
        _proto.update = function update() {
          var _this2 = this;
          var _r = this._r,
            _g = this._g,
            _b = this._b,
            l = this._luminance;
          /** discard color to change skybox, use color-scale */
          // const alpha = _luminance * 255;
          // this._color.set(_r * alpha, _g * alpha, _b * alpha, 255);
          this._scale.set(_r * l, _g * l, _b * l);
          this._passes0.forEach(function (pass0, idx) {
            pass0.setUniform(_this2._handles[idx], _this2._scale);
          });
        };
        _proto.onTick = function onTick() {
          var showStars = constStars.showStars,
            pow10 = cosmos.pow10;
          var FROM = STARS_BOX_RANG[0],
            TO = STARS_BOX_RANG[1];
          var illum = showStars ? smoothstep(TO, FROM, pow10) : 0;
          if (illum > 0) {
            this.node.active = true;
            this.luminance = illum;
          } else this.node.active = false;
          /** discard cocos skybox background, use custom skybox */
          // this.scene.globals.ambient.skyIllum = illum;
          // const disabled = illum <= 0;
          // this.deepSkyCamera.clearFlags = disabled ? Camera.ClearFlag.SOLID_COLOR : Camera.ClearFlag.SKYBOX;
          // this.scene.globals.skybox.enabled = !disabled;
        };

        _createClass(SkyboxCube, [{
          key: "luminance",
          get: function get() {
            return this._luminance;
          },
          set: function set(arg) {
            this._luminance = arg;
          }
        }, {
          key: "r",
          get: function get() {
            return this._r;
          },
          set: function set(arg) {
            this._r = arg;
          }
        }, {
          key: "b",
          get: function get() {
            return this._b;
          },
          set: function set(arg) {
            this._b = arg;
          }
        }, {
          key: "g",
          get: function get() {
            return this._g;
          },
          set: function set(arg) {
            this._g = arg;
          }
        }, {
          key: "rotY",
          get: function get() {
            return this.node.eulerAngles.y;
          },
          set: function set(arg) {
            var _this$node$eulerAngle2 = this.node.eulerAngles,
              x = _this$node$eulerAngle2.x,
              y = _this$node$eulerAngle2.y,
              z = _this$node$eulerAngle2.z;
            this.node.setRotationFromEuler(x, arg, z);
          }
        }]);
        return SkyboxCube;
      }(Component), (_descriptor$l = _applyDecoratedDescriptor(_class2$w.prototype, "_luminance", [property$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2$w.prototype, "luminance", [property$j], Object.getOwnPropertyDescriptor(_class2$w.prototype, "luminance"), _class2$w.prototype), _descriptor2$e = _applyDecoratedDescriptor(_class2$w.prototype, "_color", [property$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor3$a = _applyDecoratedDescriptor(_class2$w.prototype, "_scale", [property$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec4();
        }
      }), _descriptor4$7 = _applyDecoratedDescriptor(_class2$w.prototype, "_r", [property$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5$6 = _applyDecoratedDescriptor(_class2$w.prototype, "_g", [property$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor6$5 = _applyDecoratedDescriptor(_class2$w.prototype, "_b", [property$j], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2$w.prototype, "r", [property$j], Object.getOwnPropertyDescriptor(_class2$w.prototype, "r"), _class2$w.prototype), _applyDecoratedDescriptor(_class2$w.prototype, "b", [property$j], Object.getOwnPropertyDescriptor(_class2$w.prototype, "b"), _class2$w.prototype), _applyDecoratedDescriptor(_class2$w.prototype, "g", [property$j], Object.getOwnPropertyDescriptor(_class2$w.prototype, "g"), _class2$w.prototype)), _class2$w)) || _class$K));
      var STARS_BOX_RANG = [-3, 0];
      cclegacy._RF.pop();
      cclegacy._RF.push({}, "05579IMdbxFPq+VBuy2gYXs", "index", undefined);
      cclegacy._RF.pop();
      var _dec$A, _dec2$n, _dec3$h, _dec4$b, _dec5$7, _dec6$6, _dec7$5, _dec8$4, _dec9$3, _dec10$3, _dec11$3, _dec12$2, _dec13$1, _dec14$1, _dec15$1, _dec16$1, _dec17$1, _dec18$1, _class$L, _class2$x, _descriptor$m, _descriptor2$f, _descriptor3$b, _descriptor4$8, _descriptor5$7, _descriptor6$6, _descriptor7$4, _descriptor8$3, _descriptor9$3, _descriptor10$3, _descriptor11$2, _descriptor12$1, _descriptor13$1, _descriptor14$1, _descriptor15$1, _descriptor16$1;
      cclegacy._RF.push({}, "3ed3a6TzXVDwJnFlr0o7AH+", "relative-camera", undefined);
      var serialize$2 = serialize$3,
        group$4 = group$5,
        tip = tip$1;
      var ccclass$A = _decorator.ccclass;
      var showUseArea = function showUseArea() {
        return !this.toucher;
      };
      var showHotArea = function showHotArea() {
        return !this.toucher && this.useHotArea;
      };
      var noScrollingStick = function noScrollingStick() {
        return this.noScrollingStick;
      };
      var RelativeCamera = exports('I', (_dec$A = ccclass$A('cocosmos.relative-camera'), _dec2$n = tip("使用节点对象", UITransform), _dec3$h = tip("使用热区", showUseArea), _dec4$b = tip('热区范围', showHotArea), _dec5$7 = group$4("Geometry", "球半径", [0, 100, 0.01]), _dec6$6 = group$4("Geometry", "高度角（°）", [-89, 89, 0.01]), _dec7$5 = group$4("Geometry", "方向角（°/+Z）", [-180, 180, 0.01]), _dec8$4 = group$4("Interactive", "是否可交互"), _dec9$3 = group$4("Interactive", "PC端启用键盘"), _dec10$3 = group$4("Interactive", "水平灵敏率", [0, 1, 0.01]), _dec11$3 = group$4("Interactive", "竖直灵敏率", [0, 1, 0.01]), _dec12$2 = group$4("Interactive", "滚动缓动率", [0, 1, 0.01]), _dec13$1 = group$4("Interactive", "缩放灵敏度", [0, 1, 0.01]), _dec14$1 = group$4("Interactive", "滚轮灵敏度", [0, 1, 0.01]), _dec15$1 = group$4("Interactive", "反向缩放操作"), _dec16$1 = group$4("Interactive", "截停滚动粘滞"), _dec17$1 = group$4("Interactive", "截停粘滞阈值（°/s）", noScrollingStick, [0.1, 10, 0.1]), _dec18$1 = group$4("Interactive", "缩放通知", [0, 1, 0.01]), _dec$A(_class$L = (_class2$x = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RelativeCamera, _Component);
        function RelativeCamera() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "toucher", _descriptor$m, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useHotArea", _descriptor2$f, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "hotArea", _descriptor3$b, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_faceAngles", _descriptor4$8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_R", _descriptor5$7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "interactable", _descriptor6$6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "keyEnabled", _descriptor7$4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "horSensitivity", _descriptor8$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "verSensitivity", _descriptor9$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_ss", _descriptor10$3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomSensitivity", _descriptor11$2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wheelSensitivity", _descriptor12$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zoomReversed", _descriptor13$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noScrollingStick", _descriptor14$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noScrollingValveAngle", _descriptor15$1, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_zoomNotify", _descriptor16$1, _assertThisInitialized(_this));
          _this._facing = false;
          _this._angular = 0;
          // 角度变化
          _this._duration = 0;
          // 转向目标总共时间
          _this._reset = 0;
          // 转向目标剩余时间
          _this._from = new Quat();
          // 转向目标起始方位 
          _this._to = new Quat();
          // 转向目标目标方位
          _this._autoAccAz = 0;
          // 自动旋转方向角速度
          _this._autoAA2nd = 0;
          // 自动旋转方向角速度（第二套独立）
          _this._autoAccHa = 0;
          // 自动旋转高度角速度
          _this._autoAzRange = null;
          // 自动旋转方向角范围（产生左右摆动）
          _this._autoHaRange = null;
          // 自动旋转高度角范围（产生上下浮动）
          _this._pressingKeys = [];
          return _this;
        }
        var _proto = RelativeCamera.prototype;
        /**
         * 开始镜头自动旋转
         * @param azPs 每秒钟方向角旋转的度数，设置为负值为反向旋转 eg.180=每秒半圈
         * @param haPs 每秒钟高度角抬升的度数，设置为负值为降低角度
         * @param rangeAz 水平方向角来回摆动的幅度范围
         * @param rangeHa 垂直高度角上下浮动的幅度范围 
         * @notice 自动旋转镜头时亦能交互，如果你希望自旋时镜头被锁定交互，同时设置.interactable = false 即可
         */
        _proto.startAutoRotating = function startAutoRotating(azPs, haPs, rangeAz, rangeHa) {
          this._autoAccAz = azPs;
          this._autoAccHa = haPs;
          this._autoAzRange = rangeAz != null ? rangeAz : null;
          this._autoHaRange = rangeHa != null ? rangeHa : null;
        };
        /**
          * 停止镜头自动旋转
          */
        _proto.stopAutoRotating = function stopAutoRotating() {
          this._autoAccHa = this._autoAccAz = 0;
          this._autoAzRange = this._autoHaRange = null;
        }

        /**
         * 迫使镜头开始转向目标
         * @param faceTarget 面向的目标节点（方式1）
         * @param worldPosition 面向的世界坐标（方式2）
         * @param duration 此过程花费的时间，默认1秒
         * @notice 在此过程结束前，交互和自旋无效。
         */;
        _proto.facingTo = /*#__PURE__*/function () {
          var _facingTo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(arg, duration, cb) {
            var _this2 = this;
            var x, y, z;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (duration === void 0) {
                    duration = 1;
                  }
                  Quat.copy(this._from, this.node.worldRotation);
                  Vec3.subtract(v3a$g, this.node.worldPosition, arg instanceof Node ? arg.worldPosition : arg);
                  Quat.fromViewUp(this._to, Vec3.normalize(v3a$g, v3a$g));
                  x = v3a$g.x, y = v3a$g.y, z = v3a$g.z;
                  this._faceAngles.ha = Math.parseDegree(Math.asin(y));
                  this._faceAngles.az = Math.parseDegree(Math.atan2(x, z));
                  this._duration = this._reset = Math.abs(duration);
                  this._facing = true;
                  this._angular = Quat.angle(this._from, this._to) / this._duration;
                  return _context.abrupt("return", new Promise(function (resolve) {
                    return _this2.scheduleOnce(function () {
                      _this2.setFaceAngles(_this2._faceAngles);
                      Function.invoke(cb);
                      resolve();
                      _this2._facing = false;
                    }, duration);
                  }));
                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function facingTo(_x, _x2, _x3) {
            return _facingTo.apply(this, arguments);
          }
          return facingTo;
        }();
        _proto.setFaceAngles = function setFaceAngles(args) {
          if (args instanceof Node) {
            Vec3.subtract(v3a$g, this.node.worldPosition, args.worldPosition).normalize();
            var _Vec3$normalize = Vec3.normalize(v3a$g, v3a$g),
              x = _Vec3$normalize.x,
              y = _Vec3$normalize.y,
              z = _Vec3$normalize.z;
            this._faceAngles.ha = Math.parseDegree(Math.atan(y));
            this._faceAngles.az = Math.parseDegree(Math.atan2(x, z));
          } else {
            if (isNum(args.az)) this._faceAngles.az = args.az;
            if (isNum(args.ha)) this._faceAngles.ha = args.ha;
          }
          this._adjustFaceAngles();
        };
        _proto.onLoad = function onLoad() {
          this._listen(true);
        };
        _proto.onDestroy = function onDestroy() {
          this._listen(false);
          core.unload(this);
        };
        _proto.onEnable = function onEnable() {
          this._adjustFaceAngles();
        };
        _proto.update = function update(dt) {
          if (this._facing) {
            this._reset -= dt;
            var t = Math.clamp01(1 - this._reset / this._duration);
            Quat.slerp(quat$1, this._from, this._to, t);
            this.node.setWorldRotation(quat$1);
          } else {
            this._autoRotate(dt);
            var _ratio = Math.lerp(1, dt, this._ss),
              _this$_faceAngles = this._faceAngles,
              az = _this$_faceAngles.az,
              ha = _this$_faceAngles.ha;
            Quat.slerp(quat$1, this.node.worldRotation, Quat.fromEuler(quat$1, -ha, az, 0), _ratio);
            Quat.toEuler(v3a$g, quat$1);
            this._angular = Quat.angle(this.node.worldRotation, Quat.fromEuler(quat$1, -ha, az, 0)) / dt;
            if (this.noScrollingStick && this._angular > this.noScrollingValveAngle) {
              Quat.slerp(quat$1, this.node.worldRotation, quat$1, _ratio);
              Quat.toEuler(v3a$g, quat$1);
              this._adjustFaceAngles({
                az: v3a$g.y,
                ha: -v3a$g.x
              });
            } else this._adjustFaceAngles({
              az: v3a$g.y,
              ha: -v3a$g.x
            });
          }
        };
        _proto._autoRotate = function _autoRotate(dt) {
          this._faceAngles.az += (this._autoAccAz + this._autoAA2nd) * dt;
          this._faceAngles.ha += this._autoAccHa * dt;
          if (notEmpty(this._autoAzRange)) {
            var _this$_autoAzRange = this._autoAzRange,
              min = _this$_autoAzRange[0],
              max = _this$_autoAzRange[1];
            if (this._faceAngles.az <= min) this._autoAccAz = Math.abs(this._autoAccAz);
            if (this._faceAngles.az >= max) this._autoAccAz = -Math.abs(this._autoAccAz);
          }
          if (notEmpty(this._autoHaRange)) {
            var _this$_autoHaRange = this._autoHaRange,
              _min = _this$_autoHaRange[0],
              _max = _this$_autoHaRange[1];
            if (this._faceAngles.ha <= _min) this._autoAccHa = Math.abs(this._autoAccHa);
            if (this._faceAngles.ha >= _max) this._autoAccHa = -Math.abs(this._autoAccHa);
          }
        };
        _proto.onTouchStart = function onTouchStart(touch) {
          this._checkInteractive(touch, function () {
            var touches = touch.getAllTouches();
            if (touches.length === 2) {
              var t1 = touches[0],
                t2 = touches[1];
              dist = Vec2.distance(t1.getLocation(v2a), t2.getLocation(v2b));
            }
          });
        };
        _proto.onTouchMove = function onTouchMove(touch) {
          var _this3 = this;
          this._checkInteractive(touch, function () {
            var touches = touch.getAllTouches();
            if (touches.length === 1) {
              _this3.scrolling(touch.getDeltaX(), touch.getDeltaY());
            } else if (touches.length === 2) {
              var t1 = touches[0],
                t2 = touches[1];
              var zoomSensitivity = _this3.zoomSensitivity,
                zoomReversed = _this3.zoomReversed,
                _zoomNotify = _this3._zoomNotify;
              var _dist = Vec2.distance(t1.getLocation(v2a), t2.getLocation(v2b)) + 0.0001;
              var delta = (_dist - dist) * zoomSensitivity * (zoomReversed ? -1 : 1) * 0.001;
              if (delta != 0.0001 && _zoomNotify) {
                dist = _dist;
                core.notify(_zoomNotify, delta);
              }
            }
          });
        };
        _proto.onMouseWheel = function onMouseWheel(mouse) {
          var _this4 = this;
          this._checkInteractive(mouse, function () {
            var wheelSensitivity = _this4.wheelSensitivity,
              _zoomNotify = _this4._zoomNotify;
            var delta = Math.sign(-mouse.getScrollY()) * wheelSensitivity * 0.1;
            if (delta != 0 && _zoomNotify) {
              core.notify(_zoomNotify, delta);
            }
          });
        };
        _proto.onMouseMove = function onMouseMove(mouse) {
          var _this5 = this;
          this._checkInteractive(mouse, function () {
            var btn = mouse.getButton();
            if (btn === EventMouse.BUTTON_LEFT) {
              _this5.scrolling(mouse.getDeltaX(), mouse.getDeltaY());
            }
          });
        };
        _proto.scrolling = function scrolling(dx, dy) {
          var verSensitivity = this.verSensitivity,
            horSensitivity = this.horSensitivity;
          this._faceAngles.az -= dx * Math.lerp(0, 0.2, horSensitivity);
          this._faceAngles.ha -= dy * Math.lerp(0, 0.1, verSensitivity);
          this._faceAngles.ha = Math.clamp(this._faceAngles.ha, -89, 89);
        }

        // 事件监听的注册和注销
        ;

        _proto._listen = function _listen(arg) {
          var host = this.toucher ? this.toucher.node : input;
          var callee = arg ? host.on : host.off;
          if (sys.isMobile) {
            Function.invoke(callee, host, Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
            Function.invoke(callee, host, Input.EventType.TOUCH_START, this.onTouchStart, this);
          } else {
            Function.invoke(callee, host, Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
            Function.invoke(callee, host, Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
            if (this.keyEnabled) {
              callee = arg ? input.on : input.off;
              Function.invoke(callee, input, Input.EventType.KEY_DOWN, this.onKeyDown, this);
              Function.invoke(callee, input, Input.EventType.KEY_UP, this.onKeyUp, this);
            }
          }
        };
        _proto.onKeyDown = function onKeyDown(kb) {
          this._pressingKeys.pushUnique(kb.keyCode);
        };
        _proto.onKeyUp = function onKeyUp(kb) {
          this._pressingKeys.remove(kb.keyCode);
        };
        _proto.lateUpdate = function lateUpdate() {
          var pk = this._pressingKeys;
          var dx = 0,
            dy = 0,
            zm = 0;
          if (this.keyEnabled) {
            if (pk.contains(KEY_W) || pk.contains(ARROW_UP)) dy--;
            if (pk.contains(KEY_S) || pk.contains(ARROW_DOWN)) dy++;
            if (pk.contains(KEY_D) || pk.contains(ARROW_RIGHT)) dx--;
            if (pk.contains(KEY_A) || pk.contains(ARROW_LEFT)) dx++;
            if (pk.contains(KEY_E) || pk.contains(NUM_PLUS)) zm--;
            if (pk.contains(KEY_Q) || pk.contains(NUM_SUBTRACT)) zm++;
            if (dx + 0 || dy != 0) this.scrolling(dx * KEY_SCROLL_VS_TOUCH, dy * KEY_SCROLL_VS_TOUCH);
            var wheelSensitivity = this.wheelSensitivity,
              _zoomNotify = this._zoomNotify;
            if (zm != 0 && _zoomNotify) {
              core.notify(_zoomNotify, zm * wheelSensitivity * 0.1 * KEY_ZOOM_VS_TOUCH);
            }
          }
        }

        // 检测是否可交互（当前是交互状态且触点在热区内）
        ;

        _proto._checkInteractive = function _checkInteractive(evt, next) {
          if (this.interactable) {
            if (!this.toucher && this.useHotArea) {
              var _evt$getUILocation = evt.getUILocation(v2a),
                px = _evt$getUILocation.x,
                py = _evt$getUILocation.y;
              var _view$getVisibleSize = view.getVisibleSize(),
                W = _view$getVisibleSize.width,
                H = _view$getVisibleSize.height;
              var _this$hotArea = this.hotArea,
                x = _this$hotArea.x,
                y = _this$hotArea.y,
                w = _this$hotArea.width,
                h = _this$hotArea.height;
              var l = x * W,
                r = (x + w) * W,
                t = (1 - y) * H,
                b = (1 - y - h) * H;
              if (px >= l && px <= r && py <= t && py >= b) next();
            } else next();
          }
        }

        // 立刻在R球上调整面向角
        ;

        _proto._adjustFaceAngles = function _adjustFaceAngles(args) {
          var _ref = args != null ? args : this._faceAngles,
            ha = _ref.ha,
            az = _ref.az;
          var _ref2 = [Math.parseRadian(ha), Math.parseRadian(az)],
            Ha = _ref2[0],
            Az = _ref2[1];
          var _ref3 = [Math.cos(Ha), Math.sin(Ha)],
            uHor = _ref3[0],
            uVer = _ref3[1];
          v3a$g.set(Math.sin(Az) * uHor, uVer, Math.cos(Az) * uHor);
          this.node.setWorldPosition(v3a$g.multiplyScalar(this._R));
          this.node.forward = Vec3.negate(v3a$g, v3a$g);
          /**
           * @reserved 以下代码是效果完全相同的另一种数学计算方式
           * const { ha, az } = args ?? this._stepAngles;
           * this.node.setWorldRotationFromEuler(-ha, az, 0);
           * const dir = Vec3.multiplyScalar(v3a, Vec3.UNIT_Z, this._R);
           * Vec3.rotateX(v3a, dir, Vec3.ZERO, Math.parseRadian(-ha));
           * Vec3.rotateY(v3a, v3a, Vec3.ZERO, Math.parseRadian(az));
           * this.node.setWorldPosition(v3a);
          */
        }

        // 按下键位
        ;

        _createClass(RelativeCamera, [{
          key: "fixedSphereRadius",
          get: function get() {
            return this._R;
          },
          set: function set(arg) {
            this._R = arg;
            this._adjustFaceAngles();
          }
        }, {
          key: "heightAngle",
          get: function get() {
            return this._faceAngles.ha;
          },
          set: function set(arg) {
            this._faceAngles.ha = arg;
          }
        }, {
          key: "azimuthAngle",
          get: function get() {
            return this._faceAngles.az;
          },
          set: function set(arg) {
            this._faceAngles.az = arg;
          }
        }, {
          key: "scrollSmoothing",
          get: function get() {
            return Math.pow(this._ss, 10);
          },
          set: function set(arg) {
            this._ss = Math.pow(arg, 0.1);
          }
        }, {
          key: "zoomNotify",
          get: function get() {
            return this._zoomNotify;
          },
          set: function set(arg) {
            if (arg) this._zoomNotify = arg;
          }

          /**
           * 获取当前的镜头旋转角速度（单位：角度/秒）
           * @notice 这个值是球面角，每帧lateUpdate时均会被更新
           */
        }, {
          key: "angularVelocity",
          get: function get() {
            return this._angular;
          }
        }, {
          key: "autoAA2nd",
          get: function get() {
            return this._autoAA2nd;
          },
          set: function set(arg) {
            this._autoAA2nd = arg;
          }
        }]);
        return RelativeCamera;
      }(Component), (_descriptor$m = _applyDecoratedDescriptor(_class2$x.prototype, "toucher", [_dec2$n], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2$f = _applyDecoratedDescriptor(_class2$x.prototype, "useHotArea", [_dec3$h], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3$b = _applyDecoratedDescriptor(_class2$x.prototype, "hotArea", [_dec4$b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Rect(0, 0, 1, 1);
        }
      }), _descriptor4$8 = _applyDecoratedDescriptor(_class2$x.prototype, "_faceAngles", [serialize$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return {
            az: 0,
            ha: 0
          };
        }
      }), _descriptor5$7 = _applyDecoratedDescriptor(_class2$x.prototype, "_R", [serialize$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2$x.prototype, "fixedSphereRadius", [_dec5$7], Object.getOwnPropertyDescriptor(_class2$x.prototype, "fixedSphereRadius"), _class2$x.prototype), _applyDecoratedDescriptor(_class2$x.prototype, "heightAngle", [_dec6$6], Object.getOwnPropertyDescriptor(_class2$x.prototype, "heightAngle"), _class2$x.prototype), _applyDecoratedDescriptor(_class2$x.prototype, "azimuthAngle", [_dec7$5], Object.getOwnPropertyDescriptor(_class2$x.prototype, "azimuthAngle"), _class2$x.prototype), _descriptor6$6 = _applyDecoratedDescriptor(_class2$x.prototype, "interactable", [_dec8$4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7$4 = _applyDecoratedDescriptor(_class2$x.prototype, "keyEnabled", [_dec9$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8$3 = _applyDecoratedDescriptor(_class2$x.prototype, "horSensitivity", [_dec10$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor9$3 = _applyDecoratedDescriptor(_class2$x.prototype, "verSensitivity", [_dec11$3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor10$3 = _applyDecoratedDescriptor(_class2$x.prototype, "_ss", [serialize$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.93303299;
        }
      }), _applyDecoratedDescriptor(_class2$x.prototype, "scrollSmoothing", [_dec12$2], Object.getOwnPropertyDescriptor(_class2$x.prototype, "scrollSmoothing"), _class2$x.prototype), _descriptor11$2 = _applyDecoratedDescriptor(_class2$x.prototype, "zoomSensitivity", [_dec13$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor12$1 = _applyDecoratedDescriptor(_class2$x.prototype, "wheelSensitivity", [_dec14$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor13$1 = _applyDecoratedDescriptor(_class2$x.prototype, "zoomReversed", [_dec15$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor14$1 = _applyDecoratedDescriptor(_class2$x.prototype, "noScrollingStick", [_dec16$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor15$1 = _applyDecoratedDescriptor(_class2$x.prototype, "noScrollingValveAngle", [_dec17$1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor16$1 = _applyDecoratedDescriptor(_class2$x.prototype, "_zoomNotify", [serialize$2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'Relative.Zooming';
        }
      }), _applyDecoratedDescriptor(_class2$x.prototype, "zoomNotify", [_dec18$1], Object.getOwnPropertyDescriptor(_class2$x.prototype, "zoomNotify"), _class2$x.prototype)), _class2$x)) || _class$L));
      var dist = 0;
      var v2a = new Vec2();
      var v2b = new Vec2();
      var v3a$g = new Vec3();
      var quat$1 = new Quat();
      var KEY_W = KeyCode.KEY_W,
        KEY_S = KeyCode.KEY_S,
        KEY_A = KeyCode.KEY_A,
        KEY_D = KeyCode.KEY_D,
        ARROW_UP = KeyCode.ARROW_UP,
        ARROW_DOWN = KeyCode.ARROW_DOWN,
        ARROW_LEFT = KeyCode.ARROW_LEFT,
        ARROW_RIGHT = KeyCode.ARROW_RIGHT,
        KEY_Q = KeyCode.KEY_Q,
        KEY_E = KeyCode.KEY_E,
        NUM_PLUS = KeyCode.NUM_PLUS,
        NUM_SUBTRACT = KeyCode.NUM_SUBTRACT;
      var KEY_SCROLL_VS_TOUCH = 5;
      var KEY_ZOOM_VS_TOUCH = 0.2;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///rollupPluginModLoBabelHelpers-7ebc65e7.js", [], function (exports) {
  return {
    execute: function () {
      exports({
        _: _applyDecoratedDescriptor,
        a: _inheritsLoose,
        b: _initializerDefineProperty,
        c: _assertThisInitialized,
        d: _asyncToGenerator,
        e: _regeneratorRuntime,
        f: _createForOfIteratorHelperLoose,
        g: _extends,
        h: _createClass
      });
      function _regeneratorRuntime() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        _regeneratorRuntime = exports('e', function () {
          return e;
        });
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = Object.defineProperty || function (t, e, r) {
            t[e] = r.value;
          },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          u = i.toStringTag || "@@toStringTag";
        function define(t, e, r) {
          return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e];
        }
        try {
          define({}, "");
        } catch (t) {
          define = function (t, e, r) {
            return t[e] = r;
          };
        }
        function wrap(t, e, r, n) {
          var i = e && e.prototype instanceof Generator ? e : Generator,
            a = Object.create(i.prototype),
            c = new Context(n || []);
          return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
          }), a;
        }
        function tryCatch(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t.call(e, r)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }
        e.wrap = wrap;
        var h = "suspendedStart",
          l = "suspendedYield",
          f = "executing",
          s = "completed",
          y = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var p = {};
        define(p, a, function () {
          return this;
        });
        var d = Object.getPrototypeOf,
          v = d && d(d(values([])));
        v && v !== r && n.call(v, a) && (p = v);
        var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
        function defineIteratorMethods(t) {
          ["next", "throw", "return"].forEach(function (e) {
            define(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function AsyncIterator(t, e) {
          function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
              var u = c.arg,
                h = u.value;
              return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                invoke("next", t, i, a);
              }, function (t) {
                invoke("throw", t, i, a);
              }) : e.resolve(h).then(function (t) {
                u.value = t, i(u);
              }, function (t) {
                return invoke("throw", t, i, a);
              });
            }
            a(c.arg);
          }
          var r;
          o(this, "_invoke", {
            value: function (t, n) {
              function callInvokeWithMethodAndArg() {
                return new e(function (e, r) {
                  invoke(t, n, e, r);
                });
              }
              return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
          });
        }
        function makeInvokeMethod(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === f) throw new Error("Generator is already running");
            if (o === s) {
              if ("throw" === i) throw a;
              return {
                value: t,
                done: !0
              };
            }
            for (n.method = i, n.arg = a;;) {
              var c = n.delegate;
              if (c) {
                var u = maybeInvokeDelegate(c, n);
                if (u) {
                  if (u === y) continue;
                  return u;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if (o === h) throw o = s, n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              o = f;
              var p = tryCatch(e, r, n);
              if ("normal" === p.type) {
                if (o = n.done ? s : l, p.arg === y) continue;
                return {
                  value: p.arg,
                  done: n.done
                };
              }
              "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
          };
        }
        function maybeInvokeDelegate(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
          var i = tryCatch(o, e.iterator, r.arg);
          if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
          var a = i.arg;
          return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
        }
        function pushTryEntry(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
        }
        function resetTryEntry(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e;
        }
        function Context(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(pushTryEntry, this), this.reset(!0);
        }
        function values(e) {
          if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function next() {
                  for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                  return next.value = t, next.done = !0, next;
                };
              return i.next = i;
            }
          }
          throw new TypeError(typeof e + " is not iterable");
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
          value: GeneratorFunctionPrototype,
          configurable: !0
        }), o(GeneratorFunctionPrototype, "constructor", {
          value: GeneratorFunction,
          configurable: !0
        }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
        }, e.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
        }, e.awrap = function (t) {
          return {
            __await: t
          };
        }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
          return this;
        }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new AsyncIterator(wrap(t, r, n, o), i);
          return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
        }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
          return this;
        }), define(g, "toString", function () {
          return "[object Generator]";
        }), e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return r.reverse(), function next() {
            for (; r.length;) {
              var t = r.pop();
              if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
          };
        }, e.values = values, Context.prototype = {
          constructor: Context,
          reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
              return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion;
              if ("root" === i.tryLoc) return handle("end");
              if (i.tryLoc <= this.prev) {
                var c = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");
                if (c && u) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  resetTryEntry(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, r, n) {
            return this.delegate = {
              iterator: values(e),
              resultName: r,
              nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
          }
        }, e;
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
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      function _extends() {
        _extends = exports('g', Object.assign ? Object.assign.bind() : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        });
        return _extends.apply(this, arguments);
      }
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
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
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it) return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;
          var i = 0;
          return function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];
        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (hint === "string" ? String : Number)(input);
      }
      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");
        return typeof key === "symbol" ? key : String(key);
      }
      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }
      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }
        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);
        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }
        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }
        return desc;
      }
    }
  };
});

} }; });