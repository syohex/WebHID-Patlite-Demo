(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,r){},17:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(5),i=r.n(o),c=(r(15),r(1)),u=r(2);r(17),r(4);function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(F){u=function(e,t,r){return e[t]=r}}function f(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new P(a||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(F){return{type:"throw",arg:F}}}e.wrap=f;var p={};function h(){}function v(){}function m(){}var d={};u(d,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==t&&r.call(g,o)&&(d=g);var E=m.prototype=h.prototype=Object.create(d);function w(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var u=s(e[a],e,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,c)})}c(u.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=m,n(E,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:v,configurable:!0}),v.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},w(b.prototype),u(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(f(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(E),u(E,c,"Generator"),u(E,o,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function f(e,t){return e<<4|function(e){switch(e){case"stop":return 0;case"on":return 1;case"pattern1":return 2;case"pattern2":return 3;case"pattern3":return 4;case"pattern4":return 5;default:throw new Error("Invalid buzzer pattern: ".concat(e))}}(t)}function s(e){switch(e){case"off":return 0;case"A6":return 1;case"BFlat6":return 2;case"B6":return 3;case"C7":return 4;case"DFlat7":return 5;case"D7":return 6;case"EFlat7":return 7;case"E7":return 8;case"F7":return 9;case"GFlat7":return 10;case"G7":return 11;case"AFlat7":return 12;case"A7":return 13;default:throw new Error("Invalid pitch: ".concat(e))}}function p(e){switch(e){case"off":return 0;case"on":return 1;case"pattern1":return 2;case"pattern2":return 3;case"pattern3":return 4;case"pattern4":return 5;default:throw new Error("Invalid LED pattern: ".concat(e))}}function h(e,t,r){var n=new Array(3);return n[0]=p(e)<<4|p(t),n[1]=p(r)<<4,n[2]=0,n}var v=function(e){var t=e.device,r=Object(n.useRef)(null),o=Object(n.useRef)(null),i=Object(n.useRef)(null),p=Object(n.useRef)(null),v=Object(n.useRef)(null),m=Object(n.useRef)(null),d=Object(n.useRef)(null),y=Object(n.useState)(15),g=Object(u.a)(y,2),E=g[0],w=g[1],b=function(){var e=Object(c.a)(l().mark(function e(){var n,a,c;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Number(r.current.value),a=h(v.current.value,m.current.value,d.current.value),(c=new Int8Array(8))[0]=0,c[1]=0,c[2]=f(n,o.current.value),c[3]=(u=i.current.value,l=p.current.value,s(u)<<4|s(l)),c[4]=a[0],c[5]=a[1],c[6]=a[2],c[7]=0,e.next=13,t.sendReport(0,c);case 13:case"end":return e.stop()}var u,l},e)}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(l().mark(function e(){var r;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Int8Array(8),e.next=3,t.sendReport(0,r);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"LR6-USB"),a.a.createElement("h3",null,"Buzzer Count"),a.a.createElement("input",{ref:r,type:"range",min:"0",max:"15",value:E,onChange:function(e){w(function(t){return Number(e.target.value)})}}),a.a.createElement("input",{type:"text",value:E,maxLength:2,size:2,onChange:function(){}}),a.a.createElement("h3",null,"Buzzer Pattern"),a.a.createElement("select",{ref:o,defaultValue:"pattern1"},a.a.createElement("optgroup",null,a.a.createElement("option",{value:"stop"},"Stop"),a.a.createElement("option",{value:"on"},"On"),a.a.createElement("option",{value:"pattern1"},"Pattern1"),a.a.createElement("option",{value:"pattern2"},"Pattern2"),a.a.createElement("option",{value:"pattern3"},"Pattern3"),a.a.createElement("option",{value:"pattern4"},"Pattern4"))),a.a.createElement("h3",null,"Buzzer PitchA"),a.a.createElement("select",{ref:i,defaultValue:"F7"},a.a.createElement("optgroup",null,a.a.createElement("option",{value:"off"},"off"),a.a.createElement("option",{value:"A6"},"A6"),a.a.createElement("option",{value:"BFlat6"},"B\u266d6"),a.a.createElement("option",{value:"B6"},"B6"),a.a.createElement("option",{value:"C7"},"C7"),a.a.createElement("option",{value:"DFlat7"},"D\u266d7"),a.a.createElement("option",{value:"D7"},"D7"),a.a.createElement("option",{value:"EFlat7"},"E\u266d7"),a.a.createElement("option",{value:"E7"},"E7"),a.a.createElement("option",{value:"F7"},"F7"),a.a.createElement("option",{value:"GFlat7"},"G\u266d7"),a.a.createElement("option",{value:"G7"},"G7"),a.a.createElement("option",{value:"AFlat7"},"A\u266d7"),a.a.createElement("option",{value:"A7"},"A7"))),a.a.createElement("h3",null,"Buzzer PitchB"),a.a.createElement("select",{ref:p,defaultValue:"A7"},a.a.createElement("optgroup",null,a.a.createElement("option",{value:"off"},"off"),a.a.createElement("option",{value:"A6"},"A6"),a.a.createElement("option",{value:"BFlat6"},"B\u266d6"),a.a.createElement("option",{value:"B6"},"B6"),a.a.createElement("option",{value:"C7"},"C7"),a.a.createElement("option",{value:"DFlat7"},"D\u266d7"),a.a.createElement("option",{value:"D7"},"D7"),a.a.createElement("option",{value:"EFlat7"},"E\u266d7"),a.a.createElement("option",{value:"E7"},"E7"),a.a.createElement("option",{value:"F7"},"F7"),a.a.createElement("option",{value:"GFlat7"},"G\u266d7"),a.a.createElement("option",{value:"G7"},"G7"),a.a.createElement("option",{value:"AFlat7"},"A\u266d7"),a.a.createElement("option",{value:"A7"},"A7"))),a.a.createElement("h3",null,"LED Red"),a.a.createElement("select",{ref:v,defaultValue:"on"},a.a.createElement("optgroup",null,a.a.createElement("option",{value:"off"},"off"),a.a.createElement("option",{value:"on"},"on"),a.a.createElement("option",{value:"pattern1"},"Pattern1"),a.a.createElement("option",{value:"pattern2"},"Pattern2"),a.a.createElement("option",{value:"pattern3"},"Pattern3"),a.a.createElement("option",{value:"pattern4"},"Pattern4"))),a.a.createElement("h3",null,"LED Amber"),a.a.createElement("select",{ref:m,defaultValue:"on"},a.a.createElement("optgroup",null,a.a.createElement("option",{value:"off"},"off"),a.a.createElement("option",{value:"on"},"on"),a.a.createElement("option",{value:"pattern1"},"Pattern1"),a.a.createElement("option",{value:"pattern2"},"Pattern2"),a.a.createElement("option",{value:"pattern3"},"Pattern3"),a.a.createElement("option",{value:"pattern4"},"Pattern4"))),a.a.createElement("h3",null,"LED Green"),a.a.createElement("select",{ref:d,defaultValue:"on"},a.a.createElement("optgroup",null,a.a.createElement("option",{value:"off"},"off"),a.a.createElement("option",{value:"on"},"on"),a.a.createElement("option",{value:"pattern1"},"Pattern1"),a.a.createElement("option",{value:"pattern2"},"Pattern2"),a.a.createElement("option",{value:"pattern3"},"Pattern3"),a.a.createElement("option",{value:"pattern4"},"Pattern4"))),a.a.createElement("h3",null,"Send Command"),a.a.createElement("input",{className:"button",type:"button",value:"Send",onClick:b}),a.a.createElement("input",{className:"button",type:"button",value:"Clear",onClick:x}))};function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(F){u=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new P(a||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(F){return{type:"throw",arg:F}}}e.wrap=l;var s={};function p(){}function h(){}function v(){}var d={};u(d,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==t&&r.call(g,o)&&(d=g);var E=v.prototype=p.prototype=Object.create(d);function w(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var u=f(e[a],e,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(s).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,c)})}c(u.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=v,n(E,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},w(b.prototype),u(b.prototype,i,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(E),u(E,c,"Generator"),u(E,o,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function d(e,t){return e<<4|function(e){switch(e){case"off":return 0;case"continuous":return 1;case"sweep":return 2;case"callSign":return 3;case"lowUrgency":return 4;case"highUrgency":return 5;case"twinkleStar":return 6;case"londonBridge":return 7;default:throw Error("invalid pattern ".concat(e))}}(t)}function y(e){return e>=10?10:e}function g(e,t){return function(e){switch(e){case"off":return 0;case"red":return 1;case"green":return 2;case"amber":return 3;case"blue":return 4;case"purple":return 5;case"cyan":return 6;case"white":return 7;default:throw new Error("invalid color value: ".concat(e))}}(e)<<4|function(e){switch(e){case"off":return 0;case"on":return 1;case"pattern1":return 2;case"pattern2":return 3;case"pattern3":return 4;case"pattern4":return 5;case"pattern5":return 6;case"pattern6":return 7;default:throw new Error("invalid pattern value: ".concat(e))}}(t)}var E=function(e){var t=e.device,r=Object(n.useRef)(null),o=Object(n.useRef)(null),i=Object(n.useRef)(null),l=Object(n.useRef)(null),f=Object(n.useRef)(null),s=Object(n.useState)(15),p=Object(u.a)(s,2),h=p[0],v=p[1],E=Object(n.useState)(10),w=Object(u.a)(E,2),b=w[0],x=w[1],L=function(){var e=Object(c.a)(m().mark(function e(){var n,a,c;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=Number(r.current.value),a=Number(i.current.value),(c=new Int8Array(8))[0]=0,c[1]=0,c[2]=d(n,o.current.value),c[3]=y(a),c[4]=g(l.current.value,f.current.value),c[5]=0,c[6]=0,c[7]=0,e.next=13,t.sendReport(0,c);case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(m().mark(function e(){var r;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Int8Array(8),e.next=3,t.sendReport(0,r);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"NE-USB"),a.a.createElement("h3",null,"Alarm Count"),a.a.createElement("input",{ref:r,type:"range",min:"0",max:"15",value:h,onChange:function(e){v(function(t){return Number(e.target.value)})}}),a.a.createElement("input",{type:"text",id:"alarmCountValue",value:h,maxLength:2,size:2,onChange:function(){}}),a.a.createElement("h3",null,"Alarm Pattern"),a.a.createElement("select",{ref:o,defaultValue:"lowUrgency"},a.a.createElement("optgroup",null,a.a.createElement("option",{value:"off"},"Off"),a.a.createElement("option",{value:"continuous"},"Continuous"),a.a.createElement("option",{value:"sweep"},"Sweep"),a.a.createElement("option",{value:"callSign"},"Call Sign"),a.a.createElement("option",{value:"lowUrgency"},"Low Urgency"),a.a.createElement("option",{value:"highUrgency"},"High Urgency"),a.a.createElement("option",{value:"twinkleStar"},"Twinkle Start"),a.a.createElement("option",{value:"londonBridge"},"London Bridge"))),a.a.createElement("h3",null,"Alarm Volume"),a.a.createElement("input",{type:"range",min:"0",max:"10",value:b,id:"alarmVolume",onChange:function(e){x(function(t){return Number(e.target.value)})}}),a.a.createElement("input",{ref:i,type:"text",value:b,maxLength:2,size:2,onChange:function(){}}),a.a.createElement("h3",null,"LED Color"),a.a.createElement("select",{ref:l,defaultValue:"green"},a.a.createElement("optgroup",null,a.a.createElement("option",{value:"off"},"Off"),a.a.createElement("option",{value:"red"},"Red"),a.a.createElement("option",{value:"green"},"Green"),a.a.createElement("option",{value:"amber"},"Amber"),a.a.createElement("option",{value:"blue"},"Blue"),a.a.createElement("option",{value:"purple"},"Purple"),a.a.createElement("option",{value:"cyan"},"Cyan"),a.a.createElement("option",{value:"white"},"White"))),a.a.createElement("h3",null,"LED Pattern"),a.a.createElement("select",{ref:f,defaultValue:"pattern1"},a.a.createElement("optgroup",null,a.a.createElement("option",{value:"off"},"Off"),a.a.createElement("option",{value:"on"},"On"),a.a.createElement("option",{value:"pattern1"},"Pattern1"),a.a.createElement("option",{value:"pattern2"},"Pattern2"),a.a.createElement("option",{value:"pattern3"},"Pattern3"),a.a.createElement("option",{value:"pattern4"},"Pattern4"),a.a.createElement("option",{value:"pattern5"},"Pattern5"),a.a.createElement("option",{value:"pattern6"},"Pattern6"))),a.a.createElement("h3",null,"Send Command"),a.a.createElement("input",{className:"button",type:"button",value:"Send",onClick:L}),a.a.createElement("input",{className:"button",type:"button",value:"Reset",onClick:O}))},w=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Please connect ",a.a.createElement("a",{href:"https://www.patlite.com/product/detail0000000762.html"},"NE-USB")," or ",a.a.createElement("a",{href:"https://www.patlite.com/product/detail0000000689.html"},"LR6-USB")," and press Connect button"))};function b(){b=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(F){u=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new P(a||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(F){return{type:"throw",arg:F}}}e.wrap=l;var s={};function p(){}function h(){}function v(){}var m={};u(m,o,function(){return this});var d=Object.getPrototypeOf,y=d&&d(d(_([])));y&&y!==t&&r.call(y,o)&&(m=y);var g=v.prototype=p.prototype=Object.create(m);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var u=f(e[a],e,o);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(s).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,c)})}c(u.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),u(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(g),u(g,c,"Generator"),u(g,o,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var x=function(e){var t=e.device;return null===t?a.a.createElement(w,null):24577===t.productId?a.a.createElement(E,{device:t}):32771===t.productId?a.a.createElement(v,{device:t}):a.a.createElement("h2",null,"Not implemented Yet")};var L=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),r=t[0],o=t[1],i=function(){var e=Object(c.a)(b().mark(function e(){var t;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.hid.requestDevice({filters:[{vendorId:6426,productId:24577},{vendorId:6426,productId:32771}]});case 3:if(0!==(t=e.sent).length){e.next=6;break}return e.abrupt("return");case 6:return e.prev=6,e.next=9,t[0].open();case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(6),console.error(e.t0),e.abrupt("return");case 15:o(function(e){return t[0]}),e.next=22;break;case 18:return e.prev=18,e.t1=e.catch(0),console.error("Failed to connect device: ".concat(e.t1)),e.abrupt("return");case 22:case"end":return e.stop()}},e,null,[[0,18],[6,11]])}));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(b().mark(function e(){return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.close();case 2:o(function(e){return null});case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Patlite WebUSB Demo"),null===r?a.a.createElement("input",{className:"button",type:"button",id:"connectButton",value:"Connect",onClick:i}):a.a.createElement("input",{className:"button",type:"button",id:"disconnectButton",value:"Disconnect",onClick:l}),a.a.createElement(x,{device:r}))},O=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,21)).then(function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null))),O()},4:function(e,t,r){},6:function(e,t,r){e.exports=r(20)}},[[6,3,2]]]);
//# sourceMappingURL=main.026e5be1.chunk.js.map