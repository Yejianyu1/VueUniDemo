(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_phone-index"],{"0af0":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.shading[data-v-548c9bec]{display:flex;align-items:center;justify-content:center;width:100%;margin-top:%?200?%}.shading uni-image[data-v-548c9bec]{width:%?180?%;height:%?180?%}uni-page-body[data-v-548c9bec]{background-color:#fff!important}body.?%PAGE?%[data-v-548c9bec]{background-color:#fff!important}.ChangePassword .phone[data-v-548c9bec]{font-size:%?32?%;font-weight:700;text-align:center;margin-top:%?55?%}.ChangePassword .list[data-v-548c9bec]{width:%?580?%;margin:%?53?% auto 0 auto}.ChangePassword .list .item[data-v-548c9bec]{width:100%;height:%?110?%;border-bottom:%?2?% solid #f0f0f0}.ChangePassword .list .item uni-input[data-v-548c9bec]{width:100%;height:100%;font-size:%?32?%}.ChangePassword .list .item .placeholder[data-v-548c9bec]{color:#b9b9bc}.ChangePassword .list .item uni-input.codeIput[data-v-548c9bec]{width:%?340?%}.ChangePassword .list .item .code[data-v-548c9bec]{font-size:%?32?%}.ChangePassword .list .item .code.on[data-v-548c9bec]{color:#b9b9bc!important}.ChangePassword .confirmBnt[data-v-548c9bec]{font-size:%?32?%;width:%?580?%;height:%?90?%;border-radius:%?45?%;color:#fff;margin:%?92?% auto 0 auto;text-align:center;line-height:%?90?%}',""]),t.exports=e},"2d04":function(t,e,n){var i=n("0af0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("59e5e70a",i,!0,{sourceMap:!1,shadowMode:!1})},"3b6e":function(t,e,n){"use strict";n.r(e);var i=n("c422"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"58af":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"ChangePassword"},[n("v-uni-view",{staticClass:"list"},[t.isNew?n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"number",disabled:"true",placeholder:"填写手机号码1","placeholder-class":"placeholder"},model:{value:t.userInfo.phone,callback:function(e){t.$set(t.userInfo,"phone",e)},expression:"userInfo.phone"}})],1):t._e(),t.isNew?t._e():n("v-uni-view",{staticClass:"item"},[n("v-uni-input",{attrs:{type:"number",placeholder:"填写手机号码","placeholder-class":"placeholder"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[n("v-uni-input",{staticClass:"codeIput",attrs:{type:"number",placeholder:"填写验证码","placeholder-class":"placeholder"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code font-color",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)],1),t.isNew?n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next.apply(void 0,arguments)}}},[t._v("下一步")]):t._e(),t.isNew?t._e():n("v-uni-button",{staticClass:"confirmBnt bg-color",attrs:{"form-type":"submit"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.editPwd.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)},o=[]},"762d":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.bindingPhone=function(t){return o.default.post("update/binding",t)},e.bindingVerify=function(t){return o.default.post("update/binding/verify",t)},e.getArticleBannerList=function(){return o.default.get("article/banner/list",{},{noAuth:!0})},e.getArticleCategoryList=function(){return o.default.get("article/category/list",{},{noAuth:!0})},e.getArticleDetails=function(t){return o.default.get("article/info",t,{noAuth:!0})},e.getArticleHotList=function(){return o.default.get("article/hot/list",{},{noAuth:!0})},e.getArticleList=function(t,e){return o.default.get("article/list/"+t,e,{noAuth:!0})},e.getCity=function(){return o.default.get("city/list",{},{noAuth:!0})},e.getCoupons=function(t){return o.default.get("coupons",t,{noAuth:!0})},e.getIndexData=function(){return o.default.get("index",{},{noAuth:!0})},e.getLiveList=function(t,e){return o.default.get("wechat/live",{page:t,limit:e},{noAuth:!0})},e.getLogo=function(){return o.default.get("wechat/getLogo",{},{noAuth:!0})},e.getQrcode=function(t){return o.default.post("qrcode/get",t,{noAuth:!0})},e.getTemlIds=function(t){return o.default.get("wechat/program/my/temp/list",t,{noAuth:!0})},e.getUserCoupons=function(t){return o.default.get("coupon/list",t)},e.loginMobile=function(t){return o.default.post("login/mobile",t,{noAuth:!0})},e.logout=function(){return o.default.get("logout")},e.phoneLogin=function(t){return o.default.post("login",t,{noAuth:!0})},e.phoneRegister=function(t){return o.default.post("register",t,{noAuth:!0})},e.phoneRegisterReset=function(t){return o.default.post("register/reset",t,{noAuth:!0})},e.pink=function(){return o.default.get("pink",{},{noAuth:!0})},e.registerVerify=function(t){return o.default.post("sendCode",{phone:t},{noAuth:!0},1)},e.setCouponReceive=function(t){return o.default.post("coupon/receive",{couponId:t})},e.setFormId=function(t){return o.default.post("wechat/set_form_id",{formId:t})},e.switchH5Login=function(){return o.default.post("switch_h5",{from:"wechat"})},e.verifyCode=function(){return o.default.get("verify_code",{},{noAuth:!0})};var o=i(n("8ddc"))},"8ee3":function(t,e,n){"use strict";n.r(e);var i=n("58af"),o=n("3b6e");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("e958");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"548c9bec",null,!1,i["a"],void 0);e["default"]=s.exports},c422:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("c7eb")),a=i(n("1da1"));n("ac1f"),n("00b4");var r=i(n("e404")),s=n("762d"),u=n("5392"),c=n("26cb"),l={mixins:[r.default],components:{},data:function(){return{phone:"",captcha:"",isAuto:!1,isShowAuth:!1,key:"",isNew:!0,timer:"",text:"获取验证码",nums:60}},mounted:function(){},computed:(0,c.mapGetters)(["isLogin","userInfo"]),onLoad:function(){this.isLogin||(0,u.toLogin)()},methods:{getTimes:function(){this.nums=this.nums-1,this.text="剩余 "+this.nums+"s",this.nums<0&&clearInterval(this.timer),this.text="剩余 "+this.nums+"s",this.text<"剩余 0s"&&(this.disabled=!1,this.text="重新获取")},onLoadFun:function(){},authColse:function(t){this.isShowAuth=t},next:function(){var t=this;if(uni.hideLoading(),this.isNew=!1,this.captcha="",clearInterval(this.timer),this.disabled=!1,this.text="获取验证码",uni.showLoading({title:"加载中",mask:!0}),!this.captcha)return this.$util.Tips({title:"请填写验证码"});(0,s.bindingVerify)({phone:this.userInfo.phone,captcha:this.captcha}).then((function(e){uni.hideLoading(),t.isNew=!1,t.captcha="",clearInterval(t.timer),t.disabled=!1,t.text="获取验证码"})).catch((function(e){return t.$util.Tips({title:e})}))},editPwd:function(){var t=this;return t.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(t.phone)?t.captcha?void uni.showModal({title:"是否更换绑定账号",confirmText:"绑定",success:function(e){if(e.confirm)(0,s.bindingPhone)({phone:t.phone,captcha:t.captcha}).then((function(e){return t.$util.Tips({title:e.message,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(e){return t.$util.Tips({title:e})}));else if(e.cancel)return t.$util.Tips({title:"您已取消更换绑定！"},{tab:5,url:"/pages/users/user_info/index"})}}):t.$util.Tips({title:"请填写验证码"}):t.$util.Tips({title:"请输入正确的手机号码！"}):t.$util.Tips({title:"请填写手机号码！"})},code:function(){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var n;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.nums=60,uni.showLoading({title:"加载中",mask:!0}),n=t,n.isNew){e.next=8;break}if(n.phone){e.next=6;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码！"}));case 6:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.phone)){e.next=8;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码！"}));case 8:return e.next=10,(0,s.registerVerify)(n.isNew?n.userInfo.phone:n.phone).then((function(t){n.$util.Tips({title:t.message}),n.timer=setInterval(n.getTimes,1e3),n.disabled=!0,uni.hideLoading()})).catch((function(t){return n.$util.Tips({title:t})}));case 10:case"end":return e.stop()}}),e)})))()}}};e.default=l},e404:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i},e958:function(t,e,n){"use strict";var i=n("2d04"),o=n.n(i);o.a}}]);