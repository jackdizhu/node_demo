/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function () {

	    // import Vue for 'vue';

	    __webpack_require__(1);
	    __webpack_require__(5);

	    __webpack_require__(7);

	    // var log = require('./html/log.js');
	    // log('log');

	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./base.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./base.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset 'utf-8';head,img[src=\"\"],script{display:none}html{font-size:62.5%;background:#f5f5f5;word-break:break-all}body,button,input,select,textarea{font-size:12px;font-family:Futura,PingHei,\"PingFang SC\",\"Helvetica Neue\",Helvetica,Arial,Tahoma,Microsoft YaHei;line-height:1.5;max-width:1200px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-o-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box}a,area,body,button,cite,dd,dl,dt,em,form,h1,h2,h3,h4,h5,h6,img,input,li,ol,p,select,strong,table,td,textarea,th,ul{outline:0;padding:0;margin:0}h1,h2,h3,h4,h5,h6{font-size:14px}small{font-size:12px}img,table,td,th{border-collapse:collapse;border:none}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #fff inset!important}input{outline:0;border:0;-webkit-appearance:none!important;-webkit-tap-highlight-color:#fff;border-radius:0}button,input[type=checkbox],input[type=radio],input[type=button]{cursor:pointer}dd,dl,dt,li,ol,ul{list-style:none}a,a:active,a:hover,a:visited{font-size:inherit;color:inherit;text-decoration:none}head,script{height:0}html.overflowHidden{height:100%}html.overflowHidden body{height:100%;overflow:hidden}.bootclearfix:after,.bootclearfix:before{display:table;line-height:0;content:\"\";clear:both}@-webkit-keyframes pageFromTopToCenter{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:.9}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes pageFromTopToCenter{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:.9}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes pageFromCenterToTop{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:.9}}@keyframes pageFromCenterToTop{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:.9}}@-webkit-keyframes pageFromBotToCenter{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:.9}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes pageFromBotToCenter{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:.9}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes pageFromCenterToBot{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:.9}}@keyframes pageFromCenterToBot{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);opacity:.9}}@-webkit-keyframes pageFromCenToCenter{from{left:50%;top:50%;width:10%;height:10%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);opacity:0}to{left:0;top:0;width:100%;height:100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@keyframes pageFromCenToCenter{from{left:50%;top:50%;width:10%;height:10%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);opacity:0}to{left:0;top:0;width:100%;height:100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes pageFromCenterToCen{from{left:0;top:0;width:100%;height:100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}to{left:50%;top:50%;width:10%;height:10%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);opacity:0}}@keyframes pageFromCenterToCen{from{left:0;top:0;width:100%;height:100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}to{left:50%;top:50%;width:10%;height:10%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);opacity:0}}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./IM.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./IM.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".IM>.con .L:after,.IM>.con .R .B:after{content:\" \";top:0;display:block;right:0}.footer p,.header p{text-align:center;font-size:18px}.header p{line-height:3rem}.IM>.con{background-color:#fff;height:500px}.IM>.con .L{position:relative;float:left;width:20%;height:100%;padding:10px}.IM>.con .L li{cursor:pointer}.IM>.con .L li p{padding:5px}.IM>.con .L li.selected{background-color:#eee}.IM>.con .L:after{position:absolute;width:1px;height:100%;background-color:#ebebeb}.IM>.con .R{position:relative;float:left;width:80%;height:100%}.IM>.con .R .B,.IM>.con .R .B:after,.IM>.con .R .T{position:absolute;width:100%}.IM>.con .R .T{left:0;top:0;bottom:80px;overflow:auto;padding:0 10px}.IM>.con .R .T li pre{padding:5px;margin:1em 0;background-color:#b4e4fc;border-radius:4px}.IM>.con .R .T li pre.left{float:left}.IM>.con .R .T li pre.right{float:right}.IM>.con .R .B{left:0;bottom:0;height:80px}.IM>.con .R .B:after{bottom:auto;height:1px;background-color:#ebebeb}.IM>.con .R .B textarea{display:block;width:100%;height:100%;border:0;padding:4px 6px;resize:none}.IM>.con .R .B button{position:absolute;right:0;bottom:0;width:84px;height:30px;line-height:30px;text-align:center;border:0;margin-right:5px;margin-bottom:5px}.footer p{line-height:3rem}", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function () {

	    var WS = __webpack_require__(8);

	    var IM = {
	        vm: null,
	        addMsg: function addMsg(_data) {
	            var username = _data.userKey;

	            if (!IM.vm.$data.me) {
	                IM.vm.$data.me = username;
	            }
	            // this.$data.username = _data.data.to == username ? _data.data.from : _data.data.to;

	            // console.log(_data);
	            var _vm = IM.vm;
	            var u = _vm.$data.username;
	            var T = _data.data;
	            _vm.$data.texts[u].push(T);
	            _vm.$data.text = _vm.$data.texts[u];
	            _vm.$refs.textarea.value = '';
	            _vm.$refs.textarea.blur();
	            _vm.$refs.textarea.focus();

	            _vm.$nextTick(function () {
	                // console.log('log: dom已更新');
	                _vm.TscrollTop();
	            });
	        },
	        init: function init() {

	            // require.ensure(["../js/jquery.min.js","../js/vue.js"], function(require) {
	            // require('../js/jquery.min.js');
	            // var $ = jQuery;
	            // 定义

	            var HM = __webpack_require__(9);
	            Vue.component('HM', HM);

	            var FM = __webpack_require__(10);
	            Vue.component('FM', FM);

	            var _data = {
	                pageCls: 'IM',
	                usernames: [{
	                    user: 'user01'
	                }, {
	                    user: 'user02'
	                }],
	                me: '',
	                // username: 'user01',
	                username: 'user01',
	                text: [{
	                    txt: '撒旦法user01师号大是大非',
	                    pull: 'left'
	                }, {
	                    txt: '阿斯顿user01发水电费',
	                    pull: 'right'
	                }, {
	                    txt: '撒旦阿user01斯顿发水电费法撒旦发送到',
	                    pull: 'left'
	                }],
	                texts: {
	                    user01: [{
	                        txt: '撒旦法user01师号大是大非',
	                        pull: 'left'
	                    }, {
	                        txt: '阿斯顿user01发水电费',
	                        pull: 'right'
	                    }, {
	                        txt: '撒旦阿user01斯顿发水电费法撒旦发送到',
	                        pull: 'left'
	                    }],
	                    user02: [{
	                        txt: '撒旦法user02师撒旦法师号大是大非号大是大非',
	                        pull: 'left'
	                    }, {
	                        txt: '阿斯顿user02撒旦大非发水电费',
	                        pull: 'right'
	                    }, {
	                        txt: '撒旦阿user02斯顿发水电费法撒旦发送到',
	                        pull: 'left'
	                    }]
	                }
	            };

	            this.vm = new Vue({
	                el: '#app',
	                template: '\n                                <div :class="pageCls">\n                                  <HM></HM>\n                                  <div class="con bootclearfix">\n                                    <div class="L" ref="L">\n                                        <ul>\n                                            <li v-for="item in usernames" @click="selectUser($event);" v-if="username == item.user" class="selected">\n                                                <p :data-username="item.user">{{item.user}}</p>\n                                            </li>\n                                            <li @click="selectUser($event);" v-else>\n                                                <p :data-username="item.user">{{item.user}}</p>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                    <div class="R">\n                                        <div class="T" ref="T">\n                                            <ul>\n                                                <li v-for="item in text" class="bootclearfix">\n                                                    <pre :class="item.pull">{{item.txt}}</pre>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                        <div class="B">\n                                            <textarea ref="textarea" @keyup="keyCode($event);"></textarea>\n                                            <button @click="add($event);">\u53D1\u9001</button>\n                                        </div>\n                                    </div>\n                                  </div>\n                                  <FM></FM>\n                                </div>\n                                ',
	                data: function data() {
	                    return _data;
	                },
	                methods: {
	                    TscrollTop: function TscrollTop() {
	                        var T = this.$refs.T;
	                        var TH = T.clientHeight;
	                        var ulH = T.querySelector('ul').clientHeight;
	                        if (ulH > TH) {
	                            T.scrollTop = ulH;
	                        }
	                    },
	                    selectUser: function selectUser(e) {
	                        var li = e.currentTarget;
	                        var p = li.querySelector('p');
	                        var username = p.getAttribute('data-username');
	                        this.$data.username = username;
	                        this.$data.text = this.$data.texts[username];

	                        this.$refs.textarea.blur();
	                        this.$refs.textarea.focus();

	                        this.$nextTick(function () {
	                            // console.log('log: dom已更新');
	                            this.TscrollTop();
	                        });
	                    },
	                    add: function add() {

	                        var _data = {
	                            clientsL: null,
	                            userKey: this.$refs.textarea.value,
	                            data: {
	                                form: this.$data.me || '',
	                                to: this.$data.username,
	                                txt: this.$refs.textarea.value,
	                                pull: 'right'
	                            }
	                        };
	                        var str = JSON.stringify(_data);

	                        WS.sendMsg(str);

	                        IM.addMsg(_data);

	                        this.$refs.textarea.value = '';
	                        this.$refs.textarea.blur();
	                        this.$refs.textarea.focus();
	                    },
	                    keyCode: function keyCode(e) {
	                        var Code = e.keyCode;
	                        // e.ctrlKey e.shiftKey
	                        if (e.ctrlKey && Code == 13) {
	                            e.stopPropagation();
	                            this.add();
	                            return false;
	                        }
	                    }
	                }
	            });

	            WS.open({
	                onmessage: function onmessage(data) {
	                    // console.log(data);
	                    IM.addMsg(data);
	                },
	                onopen: function onopen() {
	                    console.log('IM: open');
	                },
	                onclose: function onclose() {
	                    console.log('IM: close');
	                },
	                onerror: function onerror(arg) {
	                    var _arg = arg[0];
	                    console.log('IM: error');
	                }
	            });

	            // });
	        }
	    };

	    IM.init();

	    module.exports = IM;
	})();

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	(function () {
	    var W;
	    var WS = {
	        open: function open(O) {
	            var _onOpen = O.onopen || null,
	                _onClose = O.onclose || null,
	                _onMsg = O.onmessage || null,
	                _onError = O.onerror || null;

	            if ("WebSocket" in window) {
	                // 打开一个 web socket
	                W = new WebSocket('ws://127.0.0.1:8000?key=132456&');

	                W.onopen = function () {
	                    // console.log("WebSocket: 连接已打开...");
	                    if (_onOpen) {
	                        _onOpen();
	                    }
	                };
	                W.onmessage = function (e) {
	                    var msg = e.data;
	                    var _data = JSON.parse(msg);
	                    // console.log("WebSocket: 数据已接收...");
	                    if (_onMsg) {
	                        _onMsg(_data);
	                    }
	                };
	                W.onerror = function () {
	                    // console.log(arguments);
	                    var _arg = arguments;
	                    if (_onError) {
	                        _onError(_arg);
	                    }
	                };
	                W.onclose = function () {
	                    // console.log("WebSocket: 连接已关闭...");
	                    if (_onClose) {
	                        _onClose();
	                    }
	                };
	            } else {
	                console.log("WebSocket: 不支持");
	            }
	        },
	        sendMsg: function sendMsg(data) {
	            W.send(data);
	            // console.log("WebSocket: 数据发送中...");
	        }
	    };

	    // WS.init();

	    module.exports = WS;
	})();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	(function () {

	    var headerModule = Vue.extend({
	        template: '\n              <div class="header">\n                  <p>header</p>\n              </div>\n                ',
	        props: ['Pdata'],
	        data: function data() {
	            var _data = {};
	            return _data;
	        },
	        methods: {}
	    });

	    module.exports = headerModule;
	})();

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	(function () {

	    var footerModule = Vue.extend({
	        template: '\n              <div class="footer">\n                  <p>footer</p>\n              </div>\n                ',
	        props: ['Pdata'],
	        data: function data() {
	            var _data = {};
	            return _data;
	        },
	        methods: {}
	    });

	    module.exports = footerModule;
	})();

/***/ }
/******/ ]);