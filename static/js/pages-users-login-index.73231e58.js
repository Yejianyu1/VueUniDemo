(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-login-index"],{"006c":function(t,e,n){var i,a,r=n("7037").default;n("a9e3"),n("ac1f"),n("5319"),n("00b4"),n("466d"),n("d401"),n("d3b7"),n("25f0"),n("fb6a"),n("f4b3"),n("bf19"),function(s,o){"object"==r(e)&&"undefined"!=typeof t?t.exports=o():(i=o,a="function"===typeof i?i.call(e,n,e,t):i,void 0===a||(t.exports=a))}(0,(function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",a="day",s="week",o="month",u="quarter",c="year",d=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(a,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(n,o),a=e-i<0,r=t.clone().add(n+(a?-1:1),o);return Number(-(n+(e-i)/(a?i-r:r-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(r){return{M:o,y:c,w:s,d:a,D:"date",h:i,m:n,s:e,ms:t,Q:u}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g="en",v={};v[g]=h;var m=function(t){return t instanceof y},b=function(t,e,n){var i;if(!t)return g;if("string"==typeof t)v[t]&&(i=t),e&&(v[t]=e,i=t);else{var a=t.name;v[a]=t,i=a}return!n&&i&&(g=i),i||!n&&g},w=function(t,e){if(m(t))return t.clone();var n="object"==r(e)?e:{};return n.date=t,n.args=arguments,new y(n)},$=p;$.l=b,$.i=m,$.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var y=function(){function r(t){this.$L=this.$L||b(t.locale,null,!0),this.parse(t)}var f=r.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(d);if(i)return n?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return $},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return w(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<w(t)},f.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},f.year=function(t){return this.$g(t,"$y",c)},f.month=function(t){return this.$g(t,"$M",o)},f.day=function(t){return this.$g(t,"$W",a)},f.date=function(t){return this.$g(t,"$D","date")},f.hour=function(t){return this.$g(t,"$H",i)},f.minute=function(t){return this.$g(t,"$m",n)},f.second=function(t){return this.$g(t,"$s",e)},f.millisecond=function(e){return this.$g(e,"$ms",t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,r){var u=this,d=!!$.u(r)||r,l=$.p(t),f=function(t,e){var n=$.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return d?n:n.endOf(a)},p=function(t,e){return $.w(u.toDate()[t].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},h=this.$W,g=this.$M,v=this.$D,m="set"+(this.$u?"UTC":"");switch(l){case c:return d?f(1,0):f(31,11);case o:return d?f(1,g):f(0,g+1);case s:var b=this.$locale().weekStart||0,w=(h<b?h+7:h)-b;return f(d?v-w:v+(6-w),g);case a:case"date":return p(m+"Hours",0);case i:return p(m+"Minutes",1);case n:return p(m+"Seconds",2);case e:return p(m+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,s){var u,d=$.p(r),l="set"+(this.$u?"UTC":""),f=(u={},u[a]=l+"Date",u.date=l+"Date",u[o]=l+"Month",u[c]=l+"FullYear",u[i]=l+"Hours",u[n]=l+"Minutes",u[e]=l+"Seconds",u[t]=l+"Milliseconds",u)[d],p=d===a?this.$D+(s-this.$W):s;if(d===o||d===c){var h=this.clone().set("date",1);h.$d[f](p),h.init(),this.$d=h.set("date",Math.min(this.$D,h.daysInMonth())).toDate()}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[$.p(t)]()},f.add=function(t,r){var u,d=this;t=Number(t);var l=$.p(r),f=function(e){var n=w(d);return $.w(n.date(n.date()+Math.round(e*t)),d)};if(l===o)return this.set(o,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===a)return f(1);if(l===s)return f(7);var p=(u={},u[n]=6e4,u[i]=36e5,u[e]=1e3,u)[l]||1,h=this.$d.getTime()+t*p;return $.w(h,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),a=this.$locale(),r=this.$H,s=this.$m,o=this.$M,u=a.weekdays,c=a.months,d=function(t,i,a,r){return t&&(t[i]||t(e,n))||a[i].substr(0,r)},f=function(t){return $.s(r%12||12,t,"0")},p=a.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:d(a.monthsShort,o,c,3),MMMM:c[o]||c(this,n),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,u,2),ddd:d(a.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:$.s(r,2,"0"),h:f(1),hh:f(2),a:p(r,s,!0),A:p(r,s,!1),m:String(s),mm:$.s(s,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return n.replace(l,(function(t,e){return e||h[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,r,d){var l,f=$.p(r),p=w(t),h=6e4*(p.utcOffset()-this.utcOffset()),g=this-p,v=$.m(this,p);return v=(l={},l[c]=v/12,l[o]=v,l[u]=v/3,l[s]=(g-h)/6048e5,l[a]=(g-h)/864e5,l[i]=g/36e5,l[n]=g/6e4,l[e]=g/1e3,l)[f]||g,d?v:$.a(v)},f.daysInMonth=function(){return this.endOf(o).$D},f.$locale=function(){return v[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=b(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return $.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},r}();return w.prototype=y.prototype,w.extend=function(t,e){return t(e,y,w),w},w.locale=b,w.isDayjs=m,w.unix=function(t){return w(1e3*t)},w.en=v[g],w.Ls=v,w}))},"3ca2":function(t,e,n){"use strict";var i=n("48ef"),a=n.n(i);a.a},"3d74":function(t,e){},"48ef":function(t,e,n){var i=n("a67d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("78e178fe",i,!0,{sourceMap:!1,shadowMode:!1})},a67d:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-168b66e6]{background:#fff}body.?%PAGE?%[data-v-168b66e6]{background:#fff}.appLogin[data-v-168b66e6]{margin-top:%?60?%}.appLogin .hds[data-v-168b66e6]{display:flex;justify-content:center;align-items:center;font-size:%?24?%;color:#b4b4b4}.appLogin .hds .line[data-v-168b66e6]{width:%?68?%;height:%?1?%;background:#ccc}.appLogin .hds p[data-v-168b66e6]{margin:0 %?20?%}.appLogin .btn-wrapper[data-v-168b66e6]{display:flex;align-items:center;justify-content:center;margin-top:%?30?%}.appLogin .btn-wrapper .btn[data-v-168b66e6]{display:flex;align-items:center;justify-content:center;width:%?68?%;height:%?68?%;border-radius:50%}.appLogin .btn-wrapper .apple-btn[data-v-168b66e6]{display:flex;align-items:center;justify-content:center;margin-left:%?30?%;background:#000;border-radius:%?34?%;font-size:%?40?%}.appLogin .btn-wrapper .apple-btn .icon-s-pingguo[data-v-168b66e6]{color:#fff;font-size:%?40?%}.appLogin .btn-wrapper .iconfont[data-v-168b66e6]{font-size:%?40?%;color:#fff}.appLogin .btn-wrapper .wx[data-v-168b66e6]{margin-right:%?30?%;background-color:#61c64f}.appLogin .btn-wrapper .mima[data-v-168b66e6]{background-color:#28b3e9}.appLogin .btn-wrapper .yanzheng[data-v-168b66e6]{background-color:#f89c23}.code img[data-v-168b66e6]{width:100%;height:100%}.acea-row.row-middle uni-input[data-v-168b66e6]{margin-left:%?20?%;display:block}.login-wrapper[data-v-168b66e6]{padding:%?30?%}.login-wrapper .shading[data-v-168b66e6]{display:flex;align-items:center;justify-content:center;width:100%;margin-top:%?200?%}.login-wrapper .shading uni-image[data-v-168b66e6]{width:%?180?%;height:%?180?%}.login-wrapper .whiteBg[data-v-168b66e6]{margin-top:%?100?%}.login-wrapper .whiteBg .list[data-v-168b66e6]{border-radius:%?16?%;overflow:hidden}.login-wrapper .whiteBg .list .item[data-v-168b66e6]{border-bottom:1px solid #f0f0f0;background:#fff}.login-wrapper .whiteBg .list .item .row-middle[data-v-168b66e6]{position:relative;padding:%?16?% %?45?%}.login-wrapper .whiteBg .list .item .row-middle .texts[data-v-168b66e6]{flex:1;font-size:%?28?%;height:%?80?%;line-height:%?80?%;display:flex;justify-content:center;align-items:center}.login-wrapper .whiteBg .list .item .row-middle uni-input[data-v-168b66e6]{flex:1;font-size:%?28?%;height:%?80?%;line-height:%?80?%;display:flex;justify-content:center;align-items:center}.login-wrapper .whiteBg .list .item .row-middle .code[data-v-168b66e6]{position:absolute;right:%?30?%;top:50%;color:#e93323;font-size:%?26?%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.login-wrapper .whiteBg .logon[data-v-168b66e6]{display:flex;align-items:center;justify-content:center;width:100%;height:%?86?%;margin-top:%?80?%;background-color:#e93323;border-radius:%?120?%;color:#fff;font-size:%?30?%}.login-wrapper .whiteBg .tips[data-v-168b66e6]{margin:%?30?%;text-align:center;color:#999}',""]),t.exports=e},b294:function(t,e,n){"use strict";(function(t){n("7a82");var i=n("dbce").default,a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4"),n("c975");var r=a(n("c7eb")),s=a(n("1da1")),o=(a(n("006c")),a(n("e404"))),u=n("099b"),c=(i(n("3a4b")),n("3d74"),n("c305")),d=n("1022"),l={name:"Login",mixins:[o.default],data:function(){return{navList:["快速登录","账号登录"],current:1,account:"",password:"",captcha:"",formItem:1,type:"login",logoUrl:"",keyCode:"",codeUrl:"",codeVal:"",isShowCode:!1,platform:"",appLoginStatus:!1,appUserInfo:null,appleLoginStatus:!1,appleUserInfo:null,appleShow:!1}},watch:{formItem:function(t,e){this.type=1==t?"login":"register"}},mounted:function(){this.getCode(),this.getLogoImage()},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){"ios"==e.platform.toLowerCase()&&e.system.split(" ")[1]>=13&&(t.appleShow=!0)}})},methods:{appleLogin:function(){var e=this;this.account="",this.captcha="",uni.showLoading({title:"登录中"}),uni.login({provider:"apple",timeout:1e4,success:function(t){uni.getUserInfo({provider:"apple",success:function(t){e.appleUserInfo=t.userInfo,e.appleLoginApi()},fail:function(){uni.hideLoading(),uni.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){uni.hideLoading()}})},fail:function(e){uni.hideLoading(),t.log(e)}})},appleLoginApi:function(){var e=this;(0,c.appleLogin)({openId:this.appleUserInfo.openId,email:void 0==this.appleUserInfo.email?"":this.appleUserInfo.email,identityToken:this.appleUserInfo.identityToken||""}).then((function(t){e.$store.commit("LOGIN",{token:t.data.token}),e.getUserInfo(t.data)})).catch((function(e){uni.hideLoading(),uni.showModal({title:"提示",content:"错误信息".concat(e),success:function(e){e.confirm?t.log("用户点击确定"):e.cancel&&t.log("用户点击取消")}})}))},wxLogin:function(){var t=this;this.account="",this.captcha="",uni.showLoading({title:"登录中"}),uni.login({provider:"weixin",success:function(e){uni.getUserInfo({provider:"weixin",success:function(e){uni.hideLoading(),t.appUserInfo=e.userInfo,t.appUserInfo.type="ios"===t.platform?"iosWx":"androidWx",t.wxLoginGo(t.appUserInfo)},fail:function(){uni.hideLoading(),uni.showToast({title:"获取用户信息失败",icon:"none",duration:2e3})},complete:function(){uni.hideLoading()}})},fail:function(){uni.hideLoading(),uni.showToast({title:"登录失败",icon:"none",duration:2e3})}})},wxLoginGo:function(t){var e=this;(0,c.appAuth)(t).then((function(t){"register"===t.data.type&&uni.navigateTo({url:"/pages/users/app_login/index?authKey="+t.data.key}),"login"===t.data.type&&(e.$store.commit("LOGIN",{token:t.data.token}),e.getUserInfo(t.data))})).catch((function(t){that.$util.Tips({title:t})}))},again:function(){this.codeUrl=d.VUE_APP_API_URL+"/sms_captcha?key="+this.keyCode+Date.parse(new Date)},getCode:function(){},getLogoImage:function(){var t=this;return(0,s.default)((0,r.default)().mark((function e(){var n;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,(0,c.getLogo)().then((function(t){n.logoUrl=t.data.logoUrl?t.data.logoUrl:"/static/images/logo2.png"}));case 2:case"end":return e.stop()}}),e)})))()},loginMobile:function(){var t=this;return(0,s.default)((0,r.default)().mark((function e(){var n;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:if(n.captcha){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"请填写验证码"}));case 7:if(/^[\w\d]+$/i.test(n.captcha)){e.next=9;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的验证码"}));case 9:(0,u.loginMobile)({phone:n.account,captcha:n.captcha,spread_spid:n.$Cache.get("spread")}).then((function(e){var i=e.data;Math.round(new Date/1e3);t.$store.commit("LOGIN",{token:e.data.token}),n.getUserInfo(i)})).catch((function(t){n.$util.Tips({title:t})}));case 10:case"end":return e.stop()}}),e)})))()},register:function(){var t=this;return(0,s.default)((0,r.default)().mark((function e(){var n;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:if(n.captcha){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"请填写验证码"}));case 7:if(/^[\w\d]+$/i.test(n.captcha)){e.next=9;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的验证码"}));case 9:if(n.password){e.next=11;break}return e.abrupt("return",n.$util.Tips({title:"请填写密码"}));case 11:if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/i.test(n.password)){e.next=13;break}return e.abrupt("return",n.$util.Tips({title:"您输入的密码过于简单"}));case 13:(0,u.register)({account:n.account,captcha:n.captcha,password:n.password,spread:n.$Cache.get("spread")}).then((function(t){n.$util.Tips({title:t}),n.formItem=1})).catch((function(t){n.$util.Tips({title:t})}));case 14:case"end":return e.stop()}}),e)})))()},code:function(){var t=this;return(0,s.default)((0,r.default)().mark((function e(){var n;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码"}));case 5:return 2==n.formItem&&(n.type="register"),e.next=8,(0,u.registerVerify)(n.account).then((function(t){n.$util.Tips({title:t.message}),n.sendCode()})).catch((function(t){return n.$util.Tips({title:t})}));case 8:case"end":return e.stop()}}),e)})))()},navTap:function(t){this.current=t},submit:function(){var t=this;return(0,s.default)((0,r.default)().mark((function e(){var n;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.account){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写账号"}));case 3:if(/^[\w\d]{5,16}$/i.test(n.account)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的账号"}));case 5:if(n.password){e.next=7;break}return e.abrupt("return",n.$util.Tips({title:"请填写密码"}));case 7:(0,u.loginH5)({account:n.account,password:n.password,spread:n.$Cache.get("spread")}).then((function(e){var i=e.data;t.$store.commit("LOGIN",{token:i.token}),n.getUserInfo(i)})).catch((function(t){n.$util.Tips({title:t})}));case 8:case"end":return e.stop()}}),e)})))()},getUserInfo:function(t){var e=this;this.$store.commit("SETUID",t.uid),(0,u.getUserInfo)().then((function(t){e.$store.commit("UPDATE_USERINFO",t.data);var n=e.$Cache.get("login_back_url")||"/pages/index/index";-1!==n.indexOf("/pages/users/login/index")&&(n="/pages/index/index"),uni.reLaunch({url:n})}))}}};e.default=l}).call(this,n("5a52")["default"])},bf19:function(t,e,n){"use strict";var i=n("23e7"),a=n("c65b");i({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return a(URL.prototype.toString,this)}})},c811:function(t,e,n){"use strict";n.r(e);var i=n("b294"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},d9d4:function(t,e,n){"use strict";n.r(e);var i=n("ed05"),a=n("c811");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("3ca2");var s=n("f0c5"),o=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"168b66e6",null,!1,i["a"],void 0);e["default"]=o.exports},e404:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{disabled:!1,text:"获取验证码"}},methods:{sendCode:function(){var t=this;if(!this.disabled){this.disabled=!0;var e=60;this.text="剩余 "+e+"s";var n=setInterval((function(){e-=1,e<0&&clearInterval(n),t.text="剩余 "+e+"s",t.text<"剩余 0s"&&(t.disabled=!1,t.text="重新获取")}),1e3)}}}};e.default=i},ed05:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-wrapper"},[n("div",{staticClass:"shading"},[n("v-uni-image",{attrs:{src:t.logoUrl}})],1),1===t.formItem?n("div",{staticClass:"whiteBg"},[1!==t.current?n("div",{staticClass:"list"},[n("v-uni-form",{on:{submit:function(e){e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"24rpx",height:"34rpx"},attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{staticClass:"texts",attrs:{type:"text",placeholder:"输入手机号码",required:!0},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"texts",attrs:{type:"password",placeholder:"填写登录密码",required:!0},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)])])],1):t._e(),0!==t.current||t.appLoginStatus||t.appleLoginStatus?n("div",{staticClass:"list"},[n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"24rpx",height:"34rpx"},attrs:{src:"/static/images/phone_1.png"}}),n("v-uni-input",{staticClass:"texts",attrs:{type:"text",placeholder:"输入手机号码"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1)]),n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码"},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),n("v-uni-button",{staticClass:"code",class:!0===t.disabled?"on":"",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.code.apply(void 0,arguments)}}},[t._v(t._s(t.text))])],1)]),t.isShowCode?n("div",{staticClass:"item"},[n("div",{staticClass:"acea-row row-middle"},[n("v-uni-image",{staticStyle:{width:"28rpx",height:"32rpx"},attrs:{src:"/static/images/code_2.png"}}),n("v-uni-input",{staticClass:"codeIput",attrs:{type:"text",placeholder:"填写验证码"},model:{value:t.codeVal,callback:function(e){t.codeVal=e},expression:"codeVal"}}),n("div",{staticClass:"code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.again.apply(void 0,arguments)}}},[n("img",{attrs:{src:t.codeUrl}})])],1)]):t._e()]):t._e(),0!==t.current?n("div",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loginMobile.apply(void 0,arguments)}}},[t._v("登录")]):t._e(),0===t.current?n("div",{staticClass:"logon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("登录")]):t._e(),n("div",{staticClass:"tips"},[0==t.current?n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=1}}},[t._v("快速登录")]):t._e(),1==t.current?n("div",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.current=0}}},[t._v("账号登录")]):t._e()])]):t._e(),n("div",{staticClass:"bottom"})])},a=[]},f4b3:function(t,e,n){"use strict";var i=n("23e7"),a=n("d039"),r=n("7b0b"),s=n("c04e"),o=a((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}));i({target:"Date",proto:!0,arity:1,forced:o},{toJSON:function(t){var e=r(this),n=s(e,"number");return"number"!=typeof n||isFinite(n)?e.toISOString():null}})}}]);