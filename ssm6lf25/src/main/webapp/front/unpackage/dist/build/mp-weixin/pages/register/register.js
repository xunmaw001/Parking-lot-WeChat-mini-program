(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{1563:function(e,t,n){"use strict";(function(e){n("8e6e");r(n("66fd"));var t=r(n("aa29"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"1d28":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var u=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"313c":function(e,t,n){},4643:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,a,i){try{var c=e[a](i),o=c.value}catch(s){return void n(s)}c.done?t(o):Promise.resolve(o).then(r,u)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function c(e){a(i,r,u,c,o,"next",e)}function o(e){a(i,r,u,c,o,"throw",e)}c(void 0)}))}}var c={data:function(){return{chezhuxingbieOptions:[],chezhuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var t=this;return i(r.default.mark((function n(){var u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],u=e.getStorageSync("loginTable"),t.tableName=u,"chezhu"==t.tableName&&(t.chezhuxingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.chezhuxingbieOptions[0]),t.styleChange();case 5:case"end":return n.stop()}}),n)})))()},methods:{chezhuxingbieChange:function(e){this.chezhuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.chezhuxingbieOptions[this.chezhuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.zhanghao||"chezhu"!=e.tableName){t.next=3;break}return e.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(e.ruleForm.mima||"chezhu"!=e.tableName){t.next=6;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("chezhu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){t.next=9;break}return e.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 9:if(e.ruleForm.shangjiazhanghao||"shangjia"!=e.tableName){t.next=12;break}return e.$utils.msg("商家账号不能为空"),t.abrupt("return");case 12:if(e.ruleForm.mima||"shangjia"!=e.tableName){t.next=15;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 15:return t.next=17,e.$api.register("".concat(e.tableName),e.ruleForm);case 17:e.$utils.msgBack("注册成功");case 19:case"end":return t.stop()}}),t)})))()}}};t.default=c}).call(this,n("543d")["default"])},"7b45":function(e,t,n){"use strict";var r=n("313c"),u=n.n(r);u.a},"7bd8":function(e,t,n){"use strict";n.r(t);var r=n("4643"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},aa29:function(e,t,n){"use strict";n.r(t);var r=n("1d28"),u=n("7bd8");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("7b45");var i,c=n("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"d686c35e",null,!1,r["a"],i);t["default"]=o.exports}},[["1563","common/runtime","common/vendor"]]]);