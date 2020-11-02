(function(e){function t(t){for(var o,r,a=t[0],d=t[1],i=t[2],s=0,p=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(e[o]=d[o]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),_()}function _(){for(var e,t=0;t<c.length;t++){for(var _=c[t],o=!0,a=1;a<_.length;a++){var d=_[a];0!==n[d]&&(o=!1)}o&&(c.splice(t--,1),e=r(r.s=_[0]))}return e}var o={},n={app:0},c=[];function r(t){if(o[t])return o[t].exports;var _=o[t]={i:t,l:!1,exports:{}};return e[t].call(_.exports,_,_.exports,r),_.l=!0,_.exports}r.m=e,r.c=o,r.d=function(e,t,_){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var _=Object.create(null);if(r.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(_,o,function(t){return e[t]}.bind(null,o));return _},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/OHouEmoji/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=d;c.push([0,"chunk-vendors"]),_()})({0:function(e,t,_){e.exports=_("cd49")},"0f8a":function(e,t,_){"use strict";_("b890")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},2:function(e,t){},"2ac5":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Codebook}));var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("466d"),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__),crypto_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("3452"),crypto_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__),graphemer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("990e"),graphemer__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(graphemer__WEBPACK_IMPORTED_MODULE_5__),_codebooks_CodebookType__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("cc0d"),_codebooks_SmileysCodebook__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("7670"),_codebooks_HandInHandCodebook__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("df50"),_codebooks_GestureCodebook__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("53b8"),_codebooks_FlagCodebook__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("816a"),_codebooks_FoodCodebook__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("5719");function Codebook(){var smileysCodebook=Object(_codebooks_SmileysCodebook__WEBPACK_IMPORTED_MODULE_7__["a"])(),handInHandCodebook=Object(_codebooks_HandInHandCodebook__WEBPACK_IMPORTED_MODULE_8__["a"])(),gestureCodebook=Object(_codebooks_GestureCodebook__WEBPACK_IMPORTED_MODULE_9__["a"])(),glagCodebook=Object(_codebooks_FlagCodebook__WEBPACK_IMPORTED_MODULE_10__["a"])(),foodCodebook=Object(_codebooks_FoodCodebook__WEBPACK_IMPORTED_MODULE_11__["a"])(),codebook=smileysCodebook;function changeCodebookType(e){e==smileysCodebook.tag?codebook=smileysCodebook:e==handInHandCodebook.tag?codebook=handInHandCodebook:e==gestureCodebook.tag?codebook=gestureCodebook:e==glagCodebook.tag?codebook=glagCodebook:e==foodCodebook.tag&&(codebook=foodCodebook)}function spotType(cnt){for(var index in _codebooks_CodebookType__WEBPACK_IMPORTED_MODULE_6__["a"])if(Object.prototype.hasOwnProperty.call(_codebooks_CodebookType__WEBPACK_IMPORTED_MODULE_6__["a"],index)){var element=_codebooks_CodebookType__WEBPACK_IMPORTED_MODULE_6__["a"][index],matchReg="/"+element+"(\\S*)"+element+"/g",matchResult=cnt.match(eval(matchReg));if(null!=matchResult)return element}return null}var splitter=new graphemer__WEBPACK_IMPORTED_MODULE_5___default.a;function encryptTranslate(e){for(var t="",_=0,o=e;_<o.length;_++){var n=o[_],c=codebook.encryptCodebook.get(n);if(void 0!=c){var r=Math.floor(Math.random()*codebook.scale),a=c[r];t+=a}}return t}function decryptTranslate(e){for(var t="",_=0,o=splitter.splitGraphemes(e);_<o.length;_++){var n=o[_],c=codebook.decryptCodebook.get(n);void 0!=c&&(t+=c)}return t}var key=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Utf8.parse("ohouohouohouohou"),iv=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Utf8.parse("ohouohouohouohou");function decrypt(e){var t=decryptTranslate(e),_=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Hex.parse(t),o=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Base64.stringify(_),n=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.AES.decrypt(o,key,{iv:iv,mode:crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.mode.CBC,padding:crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.pad.Pkcs7}),c=n.toString(crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Utf8);return c.toString()}function encrypt(e){if(0==e.length)return"";var t=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.enc.Utf8.parse(e),_=crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.AES.encrypt(t,key,{iv:iv,mode:crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.mode.CBC,padding:crypto_js__WEBPACK_IMPORTED_MODULE_4___default.a.pad.Pkcs7}),o=_.ciphertext.toString().toUpperCase(),n=encryptTranslate(o);return codebook.tag+n+codebook.tag}return{encrypt:encrypt,decrypt:decrypt,changeCodebookType:changeCodebookType,spotType:spotType}}},3:function(e,t){},4:function(e,t){},5:function(e,t){},"53b8":function(e,t,_){"use strict";_.d(t,"a",(function(){return o}));_("4ec9"),_("d3b7"),_("3ca3"),_("ddb0");function o(){var e="🤝",t=12,_=new Map([["0",["🤲","🤲🏻","🤲🏼","🤲🏽","🤲🏾","🤲🏿","👐","👐🏻","👐🏼","👐🏽","👐🏾","👐🏿"]],["1",["🙌","🙌🏻","🙌🏼","🙌🏽","🙌🏾","🙌🏿","👏","👏🏻","👏🏼","👏🏽","👏🏾","👏🏿"]],["2",["👍","👍🏻","👍🏼","👍🏽","👍🏾","👍🏿","👎","👎🏻","👎🏼","👎🏽","👎🏾","👎🏿"]],["3",["👊","👊🏻","👊🏼","👊🏽","👊🏾","👊🏿","✊","✊🏻","✊🏼","✊🏽","✊🏾","✊🏿"]],["4",["🤛","🤛🏻","🤛🏼","🤛🏽","🤛🏾","🤛🏿","🤜","🤜🏻","🤜🏼","🤜🏽","🤜🏾","🤜🏿"]],["5",["🤞","🤞🏻","🤞🏼","🤞🏽","🤞🏾","🤞🏿","✌️","✌🏻","✌🏼","✌🏽","✌🏾","✌🏿"]],["6",["🤟","🤟🏻","🤟🏼","🤟🏽","🤟🏾","🤟🏿","🤘","🤘🏻","🤘🏼","🤘🏽","🤘🏾","🤘🏿"]],["7",["👌","👌🏻","👌🏼","👌🏽","👌🏾","👌🏿","🤏","🤏🏻","🤏🏼","🤏🏽","🤏🏾","🤏🏿"]],["8",["👈","👈🏻","👈🏼","👈🏽","👈🏾","👈🏿","👉","👉🏻","👉🏼","👉🏽","👉🏾","👉🏿"]],["9",["👆","👆🏻","👆🏼","👆🏽","👆🏾","👆🏿","👇","👇🏻","👇🏼","👇🏽","👇🏾","👇🏿"]],["A",["☝️","☝🏻","☝🏼","☝🏽","☝🏾","☝🏿","✋","✋🏻","✋🏼","✋🏽","✋🏾","✋🏿"]],["B",["🤚","🤚🏻","🤚🏼","🤚🏽","🤚🏾","🤚🏿","🖐","🖐🏻","🖐🏼","🖐🏽","🖐🏾","🖐🏿"]],["C",["🖖","🖖🏻","🖖🏼","🖖🏽","🖖🏾","🖖🏿","👋","👋🏻","👋🏼","👋🏽","👋🏾","👋🏿"]],["D",["🤙","🤙🏻","🤙🏼","🤙🏽","🤙🏾","🤙🏿","💪","💪🏻","💪🏼","💪🏽","💪🏾","💪🏿"]],["E",["🖕","🖕🏻","🖕🏼","🖕🏽","🖕🏾","🖕🏿","🙏","🙏🏻","🙏🏼","🙏🏽","🙏🏾","🙏🏿"]],["F",["✍️","✍🏻","✍🏼","✍🏽","✍🏾","✍🏿","🦶","🦶🏻","🦶🏼","🦶🏽","🦶🏾","🦶🏿"]]]),o=new Map([["👐🏿","0"],["👏🏿","1"],["👎🏿","2"],["✊🏿","3"],["🤜🏿","4"],["✌🏿","5"],["🤘🏿","6"],["🤏🏿","7"],["👉🏿","8"],["👇🏿","9"],["✋🏿","A"],["🖐🏿","B"],["👋🏿","C"],["💪🏿","D"],["🙏🏿","E"],["🦶🏿","F"],["👐🏾","0"],["👏🏾","1"],["👎🏾","2"],["✊🏾","3"],["🤜🏾","4"],["✌🏾","5"],["🤘🏾","6"],["🤏🏾","7"],["👉🏾","8"],["👇🏾","9"],["✋🏾","A"],["🖐🏾","B"],["👋🏾","C"],["💪🏾","D"],["🙏🏾","E"],["🦶🏾","F"],["👐🏽","0"],["👏🏽","1"],["👎🏽","2"],["✊🏽","3"],["🤜🏽","4"],["✌🏽","5"],["🤘🏽","6"],["🤏🏽","7"],["👉🏽","8"],["👇🏽","9"],["✋🏽","A"],["🖐🏽","B"],["👋🏽","C"],["💪🏽","D"],["🙏🏽","E"],["🦶🏽","F"],["👐🏼","0"],["👏🏼","1"],["👎🏼","2"],["✊🏼","3"],["🤜🏼","4"],["✌🏼","5"],["🤘🏼","6"],["🤏🏼","7"],["👉🏼","8"],["👇🏼","9"],["✋🏼","A"],["🖐🏼","B"],["👋🏼","C"],["💪🏼","D"],["🙏🏼","E"],["🦶🏼","F"],["👐🏻","0"],["👏🏻","1"],["👎🏻","2"],["✊🏻","3"],["🤜🏻","4"],["✌🏻","5"],["🤘🏻","6"],["🤏🏻","7"],["👉🏻","8"],["👇🏻","9"],["✋🏻","A"],["🖐🏻","B"],["👋🏻","C"],["💪🏻","D"],["🙏🏻","E"],["🦶🏻","F"],["👐","0"],["👏","1"],["👎","2"],["✊","3"],["🤜","4"],["✌️","5"],["🤘","6"],["🤏","7"],["👉","8"],["👇","9"],["✋","A"],["🖐","B"],["👋","C"],["💪","D"],["🙏","E"],["🦶","F"],["🤲🏿","0"],["🙌🏿","1"],["👍🏿","2"],["👊🏿","3"],["🤛🏿","4"],["🤞🏿","5"],["🤟🏿","6"],["👌🏿","7"],["👈🏿","8"],["👆🏿","9"],["☝🏿","A"],["🤚🏿","B"],["🖖🏿","C"],["🤙🏿","D"],["🖕🏿","E"],["✍🏿","F"],["🤲🏾","0"],["🙌🏾","1"],["👍🏾","2"],["👊🏾","3"],["🤛🏾","4"],["🤞🏾","5"],["🤟🏾","6"],["👌🏾","7"],["👈🏾","8"],["👆🏾","9"],["☝🏾","A"],["🤚🏾","B"],["🖖🏾","C"],["🤙🏾","D"],["🖕🏾","E"],["✍🏾","F"],["🤲🏽","0"],["🙌🏽","1"],["👍🏽","2"],["👊🏽","3"],["🤛🏽","4"],["🤞🏽","5"],["🤟🏽","6"],["👌🏽","7"],["👈🏽","8"],["👆🏽","9"],["☝🏽","A"],["🤚🏽","B"],["🖖🏽","C"],["🤙🏽","D"],["🖕🏽","E"],["✍🏽","F"],["🤲🏼","0"],["🙌🏼","1"],["👍🏼","2"],["👊🏼","3"],["🤛🏼","4"],["🤞🏼","5"],["🤟🏼","6"],["👌🏼","7"],["👈🏼","8"],["👆🏼","9"],["☝🏼","A"],["🤚🏼","B"],["🖖🏼","C"],["🤙🏼","D"],["🖕🏼","E"],["✍🏼","F"],["🤲🏻","0"],["🙌🏻","1"],["👍🏻","2"],["👊🏻","3"],["🤛🏻","4"],["🤞🏻","5"],["🤟🏻","6"],["👌🏻","7"],["👈🏻","8"],["👆🏻","9"],["☝🏻","A"],["🤚🏻","B"],["🖖🏻","C"],["🤙🏻","D"],["🖕🏻","E"],["✍🏻","F"],["🤲","0"],["🙌","1"],["👍","2"],["👊","3"],["🤛","4"],["🤞","5"],["🤟","6"],["👌","7"],["👈","8"],["👆","9"],["☝️","A"],["🤚","B"],["🖖","C"],["🤙","D"],["🖕","E"],["✍️","F"]]);return{tag:e,scale:t,encryptCodebook:_,decryptCodebook:o}}},5719:function(e,t,_){"use strict";_.d(t,"a",(function(){return o}));_("4ec9"),_("d3b7"),_("3ca3"),_("ddb0");function o(){var e="🍋",t=7,_=new Map([["0",["🍏","🍎","🍐","🍊","🍌","🍉","🍇"]],["1",["🍓","🍈","🍒","🍑","🥭","🍍","🥥"]],["2",["🥝","🍅","🍆","🥑","🥦","🥬","🥒"]],["3",["🌶","🌽","🥕","🧄","🧅","🥔","🍠"]],["4",["🥐","🥯","🍞","🥖","🥨","🧀","🥚"]],["5",["🍳","🧈","🥞","🧇","🥓","🥩","🍗"]],["6",["🍖","🦴","🌭","🍔","🍟","🍕","🥪"]],["7",["🥙","🧆","🌮","🌯","🥗","🥘","🥫"]],["8",["🍝","🍜","🍲","🍛","🍣","🍱","🥟"]],["9",["🦪","🍤","🍙","🍚","🍘","🍥","🥠"]],["A",["🥮","🍢","🍡","🍧","🍨","🍦","🥧"]],["B",["🧁","🍰","🎂","🍮","🍭","🍬","🍫"]],["C",["🍿","🍩","🍪","🌰","🥜","🍯","🥛"]],["D",["🍼","☕️","🍵","🧃","🥤","🍶","🍺"]],["E",["🍻","🥂","🍷","🥃","🍸","🍹","🧉"]],["F",["🍾","🧊","🍴","🍽","🥣","🥢","🧂"]]]),o=new Map([["🍇","0"],["🥥","1"],["🥒","2"],["🍠","3"],["🥚","4"],["🍗","5"],["🥪","6"],["🥫","7"],["🥟","8"],["🥠","9"],["🥧","A"],["🍫","B"],["🥛","C"],["🍺","D"],["🧉","E"],["🧂","F"],["🍉","0"],["🍍","1"],["🥬","2"],["🥔","3"],["🧀","4"],["🥩","5"],["🍕","6"],["🥘","7"],["🍱","8"],["🍥","9"],["🍦","A"],["🍬","B"],["🍯","C"],["🍶","D"],["🍹","E"],["🥢","F"],["🍌","0"],["🥭","1"],["🥦","2"],["🧅","3"],["🥨","4"],["🥓","5"],["🍟","6"],["🥗","7"],["🍣","8"],["🍘","9"],["🍨","A"],["🍭","B"],["🥜","C"],["🥤","D"],["🍸","E"],["🥣","F"],["🍊","0"],["🍑","1"],["🥑","2"],["🧄","3"],["🥖","4"],["🧇","5"],["🍔","6"],["🌯","7"],["🍛","8"],["🍚","9"],["🍧","A"],["🍮","B"],["🌰","C"],["🧃","D"],["🥃","E"],["🍽","F"],["🍐","0"],["🍒","1"],["🍆","2"],["🥕","3"],["🍞","4"],["🥞","5"],["🌭","6"],["🌮","7"],["🍲","8"],["🍙","9"],["🍡","A"],["🎂","B"],["🍪","C"],["🍵","D"],["🍷","E"],["🍴","F"],["🍎","0"],["🍈","1"],["🍅","2"],["🌽","3"],["🥯","4"],["🧈","5"],["🦴","6"],["🧆","7"],["🍜","8"],["🍤","9"],["🍢","A"],["🍰","B"],["🍩","C"],["☕️","D"],["🥂","E"],["🧊","F"],["🍏","0"],["🍓","1"],["🥝","2"],["🌶","3"],["🥐","4"],["🍳","5"],["🍖","6"],["🥙","7"],["🍝","8"],["🦪","9"],["🥮","A"],["🧁","B"],["🍿","C"],["🍼","D"],["🍻","E"],["🍾","F"]]);return{tag:e,scale:t,encryptCodebook:_,decryptCodebook:o}}},6:function(e,t){},"64be":function(e,t,_){"use strict";_("c894")},7:function(e,t){},7670:function(e,t,_){"use strict";_.d(t,"a",(function(){return o}));_("4ec9"),_("d3b7"),_("3ca3"),_("ddb0");function o(){var e="🥳",t=6,_=new Map([["0",["😀","😃","😄","😁","😆","😅"]],["1",["😂","🤣","☺️","😊","😇","🙂"]],["2",["🙃","😉","😌","😍","🥰","😘"]],["3",["😗","😙","😚","😋","😛","😝"]],["4",["😜","🤪","🤨","🧐","🤓","😎"]],["5",["🤩","😏","😒","😞","😔","😟"]],["6",["😕","🙁","☹️","😣","😖","😫"]],["7",["😩","🥺","😢","😭","😤","😠"]],["8",["😡","🤬","🤯","😳","🥵","🥶"]],["9",["😱","😨","😰","😥","😓","🤗"]],["A",["🤔","🤭","🤫","🤥","😶","😐"]],["B",["😑","😬","🙄","😯","😦","😧"]],["C",["😮","😲","🥱","😴","🤤","😪"]],["D",["😵","🤐","🥴","🤢","🤮","🤧"]],["E",["😷","🤒","🤕","🤑","🤠","😈"]],["F",["👿","👹","🤡","💩","💀","☠️"]]]),o=new Map([["😅","0"],["🙂","1"],["😘","2"],["😝","3"],["😎","4"],["😟","5"],["😫","6"],["😠","7"],["🥶","8"],["🤗","9"],["😐","A"],["😧","B"],["😪","C"],["🤧","D"],["😈","E"],["☠️","F"],["😆","0"],["😇","1"],["🥰","2"],["😛","3"],["🤓","4"],["😔","5"],["😖","6"],["😤","7"],["🥵","8"],["😓","9"],["😶","A"],["😦","B"],["🤤","C"],["🤮","D"],["🤠","E"],["💀","F"],["😁","0"],["😊","1"],["😍","2"],["😋","3"],["🧐","4"],["😞","5"],["😣","6"],["😭","7"],["😳","8"],["😥","9"],["🤥","A"],["😯","B"],["😴","C"],["🤢","D"],["🤑","E"],["💩","F"],["😄","0"],["☺️","1"],["😌","2"],["😚","3"],["🤨","4"],["😒","5"],["☹️","6"],["😢","7"],["🤯","8"],["😰","9"],["🤫","A"],["🙄","B"],["🥱","C"],["🥴","D"],["🤕","E"],["🤡","F"],["😃","0"],["🤣","1"],["😉","2"],["😙","3"],["🤪","4"],["😏","5"],["🙁","6"],["🥺","7"],["🤬","8"],["😨","9"],["🤭","A"],["😬","B"],["😲","C"],["🤐","D"],["🤒","E"],["👹","F"],["😀","0"],["😂","1"],["🙃","2"],["😗","3"],["😜","4"],["🤩","5"],["😕","6"],["😩","7"],["😡","8"],["😱","9"],["🤔","A"],["😑","B"],["😮","C"],["😵","D"],["😷","E"],["👿","F"]]);return{tag:e,scale:t,encryptCodebook:_,decryptCodebook:o}}},8:function(e,t){},"816a":function(e,t,_){"use strict";_.d(t,"a",(function(){return o}));_("4ec9"),_("d3b7"),_("3ca3"),_("ddb0");function o(){var e="🏳️‍🌈",t=16,_=new Map([["0",["🇿🇼","🇦🇫","🇦🇽","🇦🇱","🇩🇿","🇦🇸","🇦🇩","🇦🇴","🇦🇮","🇦🇶","🇦🇬","🇦🇷","🇦🇲","🇦🇼","🇦🇺","🇦🇹"]],["1",["🇦🇿","🇧🇸","🇧🇭","🇧🇩","🇧🇧","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇲","🇧🇹","🇧🇴","🇧🇦","🇧🇼","🇧🇷","🇮🇴"]],["2",["🇻🇬","🇧🇳","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇮🇨","🇨🇻","🇧🇶","🇰🇾","🇨🇫","🇹🇩","🇨🇱","🇨🇳"]],["3",["🇨🇽","🇨🇨","🇨🇴","🇰🇲","🇨🇬","🇨🇩","🇨🇰","🇨🇷","🇨🇮","🇭🇷","🇨🇺","🇨🇼","🇨🇾","🇨🇿","🇩🇰","🇩🇯"]],["4",["🇩🇲","🇩🇴","🇪🇨","🇪🇬","🇸🇻","🇬🇶","🇪🇷","🇪🇪","🇪🇹","🇪🇺","🇫🇰","🇫🇴","🇫🇯","🇫🇮","🇫🇷","🇬🇫"]],["5",["🇵🇫","🇹🇫","🇬🇦","🇬🇲","🇬🇪","🇩🇪","🇬🇭","🇬🇮","🇬🇷","🇬🇱","🇬🇩","🇬🇵","🇬🇺","🇬🇹","🇬🇬","🇬🇳"]],["6",["🇬🇼","🇬🇾","🇭🇹","🇭🇳","🇭🇰","🇭🇺","🇮🇸","🇮🇳","🇮🇩","🇮🇷","🇮🇶","🇮🇪","🇮🇲","🇮🇱","🇮🇹","🇯🇲"]],["7",["🇯🇵","🇯🇪","🇯🇴","🇰🇿","🇰🇪","🇰🇮","🇽🇰","🇰🇼","🇰🇬","🇱🇦","🇱🇻","🇱🇧","🇱🇸","🇱🇷","🇱🇾","🇱🇮"]],["8",["🇱🇹","🇱🇺","🇲🇴","🇲🇰","🇲🇬","🇲🇼","🇲🇾","🇲🇻","🇲🇱","🇲🇹","🇲🇭","🇲🇶","🇲🇷","🇲🇺","🇾🇹","🇲🇽"]],["9",["🇫🇲","🇲🇩","🇲🇨","🇲🇳","🇲🇪","🇲🇸","🇲🇦","🇲🇿","🇲🇲","🇳🇦","🇳🇷","🇳🇵","🇳🇱","🇳🇨","🇳🇿","🇳🇮"]],["A",["🇳🇪","🇳🇬","🇳🇺","🇳🇫","🇰🇵","🇲🇵","🇳🇴","🇴🇲","🇵🇰","🇵🇼","🇵🇸","🇵🇦","🇵🇬","🇵🇾","🇵🇪","🇵🇭"]],["B",["🇵🇳","🇵🇱","🇵🇹","🇵🇷","🇶🇦","🇷🇪","🇷🇴","🇷🇺","🇷🇼","🇼🇸","🇸🇲","🇸🇦","🇸🇳","🇷🇸","🇸🇨","🇸🇱"]],["C",["🇸🇬","🇸🇽","🇸🇰","🇸🇮","🇬🇸","🇸🇧","🇸🇴","🇿🇦","🇰🇷","🇸🇸","🇪🇸","🇱🇰","🇧🇱","🇸🇭","🇰🇳","🇱🇨"]],["D",["🇵🇲","🇻🇨","🇸🇩","🇸🇷","🇸🇿","🇸🇪","🇨🇭","🇸🇾","🇹🇯","🇹🇿","🇹🇭","🇹🇱","🇹🇬","🇹🇰","🇹🇴","🇹🇹"]],["E",["🇹🇳","🇹🇷","🇹🇲","🇹🇨","🇹🇻","🇻🇮","🇺🇬","🇺🇦","🇦🇪","🇬🇧","🏴󠁧󠁢󠁥󠁮󠁧󠁿","🏴󠁧󠁢󠁳󠁣󠁴󠁿","🏴󠁧󠁢󠁷󠁬󠁳󠁿","🇿🇲","🇺🇸","🇺🇾"]],["F",["🇺🇿","🇻🇺","🇻🇦","🇻🇪","🇻🇳","🇼🇫","🇪🇭","🇾🇪","🇺🇳","🇺🇳","🇺🇳","🇺🇳","🇺🇳","🇺🇳","🇺🇳","🇺🇳"]]]),o=new Map([["🇦🇹","0"],["🇮🇴","1"],["🇨🇳","2"],["🇩🇯","3"],["🇬🇫","4"],["🇬🇳","5"],["🇯🇲","6"],["🇱🇮","7"],["🇲🇽","8"],["🇳🇮","9"],["🇵🇭","A"],["🇸🇱","B"],["🇱🇨","C"],["🇹🇹","D"],["🇺🇾","E"],["🇺🇳","F"],["🇦🇺","0"],["🇧🇷","1"],["🇨🇱","2"],["🇩🇰","3"],["🇫🇷","4"],["🇬🇬","5"],["🇮🇹","6"],["🇱🇾","7"],["🇾🇹","8"],["🇳🇿","9"],["🇵🇪","A"],["🇸🇨","B"],["🇰🇳","C"],["🇹🇴","D"],["🇺🇸","E"],["🇦🇼","0"],["🇧🇼","1"],["🇹🇩","2"],["🇨🇿","3"],["🇫🇮","4"],["🇬🇹","5"],["🇮🇱","6"],["🇱🇷","7"],["🇲🇺","8"],["🇳🇨","9"],["🇵🇾","A"],["🇷🇸","B"],["🇸🇭","C"],["🇹🇰","D"],["🇿🇲","E"],["🇦🇲","0"],["🇧🇦","1"],["🇨🇫","2"],["🇨🇾","3"],["🇫🇯","4"],["🇬🇺","5"],["🇮🇲","6"],["🇱🇸","7"],["🇲🇷","8"],["🇳🇱","9"],["🇵🇬","A"],["🇸🇳","B"],["🇧🇱","C"],["🇹🇬","D"],["🏴󠁧󠁢󠁷󠁬󠁳󠁿","E"],["🇦🇷","0"],["🇧🇴","1"],["🇰🇾","2"],["🇨🇼","3"],["🇫🇴","4"],["🇬🇵","5"],["🇮🇪","6"],["🇱🇧","7"],["🇲🇶","8"],["🇳🇵","9"],["🇵🇦","A"],["🇸🇦","B"],["🇱🇰","C"],["🇹🇱","D"],["🏴󠁧󠁢󠁳󠁣󠁴󠁿","E"],["🇦🇬","0"],["🇧🇹","1"],["🇧🇶","2"],["🇨🇺","3"],["🇫🇰","4"],["🇬🇩","5"],["🇮🇶","6"],["🇱🇻","7"],["🇲🇭","8"],["🇳🇷","9"],["🇵🇸","A"],["🇸🇲","B"],["🇪🇸","C"],["🇹🇭","D"],["🏴󠁧󠁢󠁥󠁮󠁧󠁿","E"],["🇦🇶","0"],["🇧🇲","1"],["🇨🇻","2"],["🇭🇷","3"],["🇪🇺","4"],["🇬🇱","5"],["🇮🇷","6"],["🇱🇦","7"],["🇲🇹","8"],["🇳🇦","9"],["🇵🇼","A"],["🇼🇸","B"],["🇸🇸","C"],["🇹🇿","D"],["🇬🇧","E"],["🇦🇮","0"],["🇧🇯","1"],["🇮🇨","2"],["🇨🇮","3"],["🇪🇹","4"],["🇬🇷","5"],["🇮🇩","6"],["🇰🇬","7"],["🇲🇱","8"],["🇲🇲","9"],["🇵🇰","A"],["🇷🇼","B"],["🇰🇷","C"],["🇹🇯","D"],["🇦🇪","E"],["🇦🇴","0"],["🇧🇿","1"],["🇨🇦","2"],["🇨🇷","3"],["🇪🇪","4"],["🇬🇮","5"],["🇮🇳","6"],["🇰🇼","7"],["🇲🇻","8"],["🇲🇿","9"],["🇴🇲","A"],["🇷🇺","B"],["🇿🇦","C"],["🇸🇾","D"],["🇺🇦","E"],["🇾🇪","F"],["🇦🇩","0"],["🇧🇪","1"],["🇨🇲","2"],["🇨🇰","3"],["🇪🇷","4"],["🇬🇭","5"],["🇮🇸","6"],["🇽🇰","7"],["🇲🇾","8"],["🇲🇦","9"],["🇳🇴","A"],["🇷🇴","B"],["🇸🇴","C"],["🇨🇭","D"],["🇺🇬","E"],["🇪🇭","F"],["🇦🇸","0"],["🇧🇾","1"],["🇰🇭","2"],["🇨🇩","3"],["🇬🇶","4"],["🇩🇪","5"],["🇭🇺","6"],["🇰🇮","7"],["🇲🇼","8"],["🇲🇸","9"],["🇲🇵","A"],["🇷🇪","B"],["🇸🇧","C"],["🇸🇪","D"],["🇻🇮","E"],["🇼🇫","F"],["🇩🇿","0"],["🇧🇧","1"],["🇧🇮","2"],["🇨🇬","3"],["🇸🇻","4"],["🇬🇪","5"],["🇭🇰","6"],["🇰🇪","7"],["🇲🇬","8"],["🇲🇪","9"],["🇰🇵","A"],["🇶🇦","B"],["🇬🇸","C"],["🇸🇿","D"],["🇹🇻","E"],["🇻🇳","F"],["🇦🇱","0"],["🇧🇩","1"],["🇧🇫","2"],["🇰🇲","3"],["🇪🇬","4"],["🇬🇲","5"],["🇭🇳","6"],["🇰🇿","7"],["🇲🇰","8"],["🇲🇳","9"],["🇳🇫","A"],["🇵🇷","B"],["🇸🇮","C"],["🇸🇷","D"],["🇹🇨","E"],["🇻🇪","F"],["🇦🇽","0"],["🇧🇭","1"],["🇧🇬","2"],["🇨🇴","3"],["🇪🇨","4"],["🇬🇦","5"],["🇭🇹","6"],["🇯🇴","7"],["🇲🇴","8"],["🇲🇨","9"],["🇳🇺","A"],["🇵🇹","B"],["🇸🇰","C"],["🇸🇩","D"],["🇹🇲","E"],["🇻🇦","F"],["🇦🇫","0"],["🇧🇸","1"],["🇧🇳","2"],["🇨🇨","3"],["🇩🇴","4"],["🇹🇫","5"],["🇬🇾","6"],["🇯🇪","7"],["🇱🇺","8"],["🇲🇩","9"],["🇳🇬","A"],["🇵🇱","B"],["🇸🇽","C"],["🇻🇨","D"],["🇹🇷","E"],["🇻🇺","F"],["🇿🇼","0"],["🇦🇿","1"],["🇻🇬","2"],["🇨🇽","3"],["🇩🇲","4"],["🇵🇫","5"],["🇬🇼","6"],["🇯🇵","7"],["🇱🇹","8"],["🇫🇲","9"],["🇳🇪","A"],["🇵🇳","B"],["🇸🇬","C"],["🇵🇲","D"],["🇹🇳","E"],["🇺🇿","F"]]);return{tag:e,scale:t,encryptCodebook:_,decryptCodebook:o}}},9:function(e,t){},b890:function(e,t,_){},c894:function(e,t,_){},cc0d:function(e,t,_){"use strict";var o=["🥳","👬","🤝","🏳️‍🌈","🍋"];t["a"]=o},cd49:function(e,t,_){"use strict";_.r(t);_("e260"),_("e6cf"),_("cca6"),_("a79d");var o=_("7a23");function n(e,t,_,n,c,r){var a=Object(o["k"])("OHou");return Object(o["f"])(),Object(o["c"])(a)}var c=_("9ab4"),r=_("ce1f"),a={id:"ohou"},d={class:"content"},i={class:"content_item input_box"},u={class:"content_item center_btns"},s={class:"content_item input_box"},p=Object(o["d"])("h6",{style:{margin:"1rem 1rem 0rem 1rem"}}," 使用本工具进行非法活动，后果自负! ",-1),l=Object(o["d"])("h6",{style:{margin:"1rem 1rem 1rem 1rem"}}," 🥳😞😃😂😶😝😡😖😇🤩🥱😕🤡🥱😷😎🤑😝😫😑😚😓🧐😡😲😷🤑🤣😁😊😨🙄😰😛😠🤮🤤😃😆😥🤭😖🤭😷😚☺️😗😈😁😢😶🙃🤗😊🤯😜🤮💩😰🤭😉😲😵😱🥴🥳 ",-1);function b(e,t,_,n,c,r){var b=Object(o["k"])("TypeSelect");return Object(o["f"])(),Object(o["c"])("div",a,[Object(o["d"])("h1",null,Object(o["l"])(e.state.codebooksType)+"噢吼 Emoji"+Object(o["l"])(e.state.codebooksType),1),Object(o["d"])("div",d,[Object(o["d"])("div",i,[Object(o["n"])(Object(o["d"])("textarea",{class:"text_input","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.state.leftContent=t}),placeholder:"输入需要加密的内容",autofocus:"true"},null,512),[[o["m"],e.state.leftContent]])]),Object(o["d"])("div",u,[Object(o["d"])("div",{class:"btn",role:"button",onClick:t[2]||(t[2]=function(){return e.encryptText.apply(e,arguments)}),onMouseenter:t[3]||(t[3]=function(t){return e.state.encryptBtnText=e.state.isSmallDevice?e.btnTextSmall.encryptHoverText:e.btnText.encryptHoverText}),onMouseleave:t[4]||(t[4]=function(t){return e.state.encryptBtnText=e.state.isSmallDevice?e.btnTextSmall.encryptText:e.btnText.encryptText})},Object(o["l"])(e.state.encryptBtnText),33),Object(o["d"])("div",{class:"btn",role:"button",onClick:t[5]||(t[5]=function(){return e.decryptText.apply(e,arguments)}),onMouseenter:t[6]||(t[6]=function(t){return e.state.decryptBtnText=e.state.isSmallDevice?e.btnTextSmall.decryptHoverText:e.btnText.decryptHoverText}),onMouseleave:t[7]||(t[7]=function(t){return e.state.decryptBtnText=e.state.isSmallDevice?e.btnTextSmall.decryptText:e.btnText.decryptText})},Object(o["l"])(e.state.decryptBtnText),33),Object(o["d"])("div",{class:"btn",role:"button",onClick:t[8]||(t[8]=function(t){return e.state.selectingType=!0})}," 加密方式 ")]),Object(o["d"])("div",s,[Object(o["n"])(Object(o["d"])("textarea",{class:"text_input","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.state.rightContent=t}),placeholder:"输入需要解密的Emoji"},null,512),[[o["m"],e.state.rightContent]])])]),p,l,Object(o["d"])(b,{style:{display:e.state.selectingType?"block":"none"},type:e.state.codebooksType,"onUpdate:type":t[10]||(t[10]=function(t){return e.codebooksTypeChanged(t)})},null,8,["style","type"])])}var E=_("2ac5"),y=Object(o["d"])("div",{class:"type_sel_title"},"选择加密方式",-1);function C(e,t,_,n,c,r){var a=this;return Object(o["f"])(),Object(o["c"])("div",{id:"type_select",onClick:t[1]||(t[1]=function(e){return a.$emit("update:type",null)})},[Object(o["d"])("div",{class:"type_select_cnt",style:{height:e.state.height+"rem"}},[Object(o["d"])("div",null,[y,(Object(o["f"])(!0),Object(o["c"])(o["a"],null,Object(o["j"])(e.codebooksType,(function(t,_){return Object(o["f"])(),Object(o["c"])("div",{key:t,onClick:function(e){return a.$emit("update:type",t)},class:["type_sel_cnt",{last_type_cnt:_==e.codebooksType.length-1,type_selected:e.type==e.codebooksType[_]}],style:{height:e.itemHeight+"rem","line-height":e.itemHeight+"rem"}},[Object(o["d"])("div",null,Object(o["l"])(t+e.codebooksTypeTitle[_]+t),1)],14,["onClick"])})),128))])],4)])}var f=_("cc0d"),O=Object(o["e"])({props:{type:String},setup:function(){var e=f["a"],t=["表情","手拉手","手势","旗帜","食物"],_=3,n=Object(o["h"])({title:"title",height:t.length*_+3.5});return{state:n,codebooksType:e,codebooksTypeTitle:t,itemHeight:_}}});_("fa9e");O.render=C;var D=O,T=Object(o["e"])({components:{TypeSelect:D},setup:function(){var e={encryptText:"> 加密 >",encryptHoverText:"> > > >",decryptText:"< 解密 <",decryptHoverText:"< < < <"},t={encryptText:"∨ 加密 ∨",encryptHoverText:"∨ ∨ ∨ ∨",decryptText:"∧ 解密 ∧",decryptHoverText:"∧ ∧ ∧ ∧"},_=Object(o["h"])({encryptBtnText:e.encryptText,decryptBtnText:e.decryptText,leftContent:"",rightContent:"",isSmallDevice:!1,selectingType:!1,codebooksType:"🥳"}),n=Object(E["a"])(),c=n.encrypt,r=n.decrypt,a=n.changeCodebookType,d=n.spotType;function i(e){_.selectingType=!1,null!=e&&(_.codebooksType=e,a(e))}function u(){var e=d(_.rightContent);null!=e&&(_.codebooksType=e,a(e)),_.leftContent=r(_.rightContent)}function s(){0!=_.leftContent.length&&(_.rightContent=c(_.leftContent))}return window.onresize=function(){document.body.clientWidth<=500?_.isSmallDevice=!0:_.isSmallDevice=!1,_.encryptBtnText=_.isSmallDevice?t.encryptHoverText:e.encryptHoverText,_.encryptBtnText=_.isSmallDevice?t.encryptText:e.encryptText,_.decryptBtnText=_.isSmallDevice?t.decryptHoverText:e.decryptHoverText,_.decryptBtnText=_.isSmallDevice?t.decryptText:e.decryptText},{btnText:e,btnTextSmall:t,state:_,encryptText:s,decryptText:u,codebooksTypeChanged:i}}});_("0f8a");T.render=b;var k=T,B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(c["b"])(t,e),t=Object(c["a"])([Object(r["a"])({components:{OHou:k}})],t),t}(r["b"]),M=B;_("64be");M.render=n;var P=M;Object(o["b"])(P).mount("#app")},d916:function(e,t,_){},df50:function(e,t,_){"use strict";_.d(t,"a",(function(){return o}));_("4ec9"),_("d3b7"),_("3ca3"),_("ddb0");function o(){var e="👬",t=5,_=new Map([["0",["👬🏻","👨🏻‍🤝‍👨🏼","👨🏻‍🤝‍👨🏽","👨🏻‍🤝‍👨🏾","👨🏻‍🤝‍👨🏿"]],["1",["👨🏼‍🤝‍👨🏻","👬🏼","👨🏼‍🤝‍👨🏽","👨🏼‍🤝‍👨🏾","👨🏼‍🤝‍👨🏿"]],["2",["👨🏽‍🤝‍👨🏻","👨🏽‍🤝‍👨🏼","👬🏽","👨🏽‍🤝‍👨🏾","👨🏽‍🤝‍👨🏿"]],["3",["👨🏾‍🤝‍👨🏻","👨🏾‍🤝‍👨🏼","👨🏾‍🤝‍👨🏽","👬🏾","👨🏾‍🤝‍👨🏿"]],["4",["👨🏿‍🤝‍👨🏻","👨🏿‍🤝‍👨🏼","👨🏿‍🤝‍👨🏽","👨🏿‍🤝‍👨🏾","👬🏿"]],["5",["👭🏻","👩🏻‍🤝‍👩🏼","👩🏻‍🤝‍👩🏽","👩🏻‍🤝‍👩🏾","👩🏻‍🤝‍👩🏿"]],["6",["👩🏼‍🤝‍👩🏻","👭🏼","👩🏼‍🤝‍👩🏽","👩🏼‍🤝‍👩🏾","👩🏼‍🤝‍👩🏿"]],["7",["👩🏽‍🤝‍👩🏻","👩🏽‍🤝‍👩🏼","👭🏽","👩🏽‍🤝‍👩🏾","👩🏽‍🤝‍👩🏿"]],["8",["👩🏾‍🤝‍👩🏻","👩🏾‍🤝‍👩🏼","👩🏾‍🤝‍👩🏽","👭🏾","👩🏾‍🤝‍👩🏿"]],["9",["👩🏿‍🤝‍👩🏻","👩🏿‍🤝‍👩🏼","👩🏿‍🤝‍👩🏽","👩🏿‍🤝‍👩🏾","👭🏿"]],["A",["👫🏻","👩🏻‍🤝‍👨🏼","👩🏻‍🤝‍👨🏽","👩🏻‍🤝‍👨🏾","👩🏻‍🤝‍👨🏿"]],["B",["👩🏼‍🤝‍👨🏻","👫🏼","👩🏼‍🤝‍👨🏽","👩🏼‍🤝‍👨🏾","👩🏼‍🤝‍👨🏿"]],["C",["👩🏽‍🤝‍👨🏻","👩🏽‍🤝‍👨🏼","👫🏽","👩🏽‍🤝‍👨🏾","👩🏽‍🤝‍👨🏿"]],["D",["👩🏾‍🤝‍👨🏻","👩🏾‍🤝‍👨🏼","👩🏾‍🤝‍👨🏽","👫🏾","👩🏾‍🤝‍👨🏿"]],["E",["👩🏿‍🤝‍👨🏻","👩🏿‍🤝‍👨🏼","👩🏿‍🤝‍👨🏽","👩🏿‍🤝‍👨🏾","👫🏿"]],["F",["🧑‍🤝‍🧑","👭","👭","👫","👫"]]]),o=new Map([["👨🏻‍🤝‍👨🏿","0"],["👨🏼‍🤝‍👨🏿","1"],["👨🏽‍🤝‍👨🏿","2"],["👨🏾‍🤝‍👨🏿","3"],["👬🏿","4"],["👩🏻‍🤝‍👩🏿","5"],["👩🏼‍🤝‍👩🏿","6"],["👩🏽‍🤝‍👩🏿","7"],["👩🏾‍🤝‍👩🏿","8"],["👭🏿","9"],["👩🏻‍🤝‍👨🏿","A"],["👩🏼‍🤝‍👨🏿","B"],["👩🏽‍🤝‍👨🏿","C"],["👩🏾‍🤝‍👨🏿","D"],["👫🏿","E"],["👫","F"],["👨🏻‍🤝‍👨🏾","0"],["👨🏼‍🤝‍👨🏾","1"],["👨🏽‍🤝‍👨🏾","2"],["👬🏾","3"],["👨🏿‍🤝‍👨🏾","4"],["👩🏻‍🤝‍👩🏾","5"],["👩🏼‍🤝‍👩🏾","6"],["👩🏽‍🤝‍👩🏾","7"],["👭🏾","8"],["👩🏿‍🤝‍👩🏾","9"],["👩🏻‍🤝‍👨🏾","A"],["👩🏼‍🤝‍👨🏾","B"],["👩🏽‍🤝‍👨🏾","C"],["👫🏾","D"],["👩🏿‍🤝‍👨🏾","E"],["👨🏻‍🤝‍👨🏽","0"],["👨🏼‍🤝‍👨🏽","1"],["👬🏽","2"],["👨🏾‍🤝‍👨🏽","3"],["👨🏿‍🤝‍👨🏽","4"],["👩🏻‍🤝‍👩🏽","5"],["👩🏼‍🤝‍👩🏽","6"],["👭🏽","7"],["👩🏾‍🤝‍👩🏽","8"],["👩🏿‍🤝‍👩🏽","9"],["👩🏻‍🤝‍👨🏽","A"],["👩🏼‍🤝‍👨🏽","B"],["👫🏽","C"],["👩🏾‍🤝‍👨🏽","D"],["👩🏿‍🤝‍👨🏽","E"],["👭","F"],["👨🏻‍🤝‍👨🏼","0"],["👬🏼","1"],["👨🏽‍🤝‍👨🏼","2"],["👨🏾‍🤝‍👨🏼","3"],["👨🏿‍🤝‍👨🏼","4"],["👩🏻‍🤝‍👩🏼","5"],["👭🏼","6"],["👩🏽‍🤝‍👩🏼","7"],["👩🏾‍🤝‍👩🏼","8"],["👩🏿‍🤝‍👩🏼","9"],["👩🏻‍🤝‍👨🏼","A"],["👫🏼","B"],["👩🏽‍🤝‍👨🏼","C"],["👩🏾‍🤝‍👨🏼","D"],["👩🏿‍🤝‍👨🏼","E"],["👬🏻","0"],["👨🏼‍🤝‍👨🏻","1"],["👨🏽‍🤝‍👨🏻","2"],["👨🏾‍🤝‍👨🏻","3"],["👨🏿‍🤝‍👨🏻","4"],["👭🏻","5"],["👩🏼‍🤝‍👩🏻","6"],["👩🏽‍🤝‍👩🏻","7"],["👩🏾‍🤝‍👩🏻","8"],["👩🏿‍🤝‍👩🏻","9"],["👫🏻","A"],["👩🏼‍🤝‍👨🏻","B"],["👩🏽‍🤝‍👨🏻","C"],["👩🏾‍🤝‍👨🏻","D"],["👩🏿‍🤝‍👨🏻","E"],["🧑‍🤝‍🧑","F"]]);return{tag:e,scale:t,encryptCodebook:_,decryptCodebook:o}}},fa9e:function(e,t,_){"use strict";_("d916")}});
//# sourceMappingURL=app.e3031f9a.js.map