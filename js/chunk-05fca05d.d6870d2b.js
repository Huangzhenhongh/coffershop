(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05fca05d"],{"305b":function(t,o,a){"use strict";a.r(o);var e=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"secure"},[a("van-nav-bar",{attrs:{title:"安全中心","left-text":"返回","left-arrow":""},on:{"click-left":t.back}}),a("div",{staticClass:"logout"},[a("van-button",{attrs:{round:!0,block:!0,type:"danger"},on:{click:t.openPopup}},[t._v("修改密码")])],1),a("div",{staticClass:"logout"},[a("van-button",{attrs:{round:!0,block:!0,type:"danger"},on:{click:t.destroy}},[t._v("注销账号")])],1),a("div",{staticClass:"logout"},[a("van-button",{attrs:{round:!0,block:!0,type:"danger"},on:{click:t.logout}},[t._v("退出登录")])],1),a("van-popup",{attrs:{position:"bottom"},model:{value:t.isOpen,callback:function(o){t.isOpen=o},expression:"isOpen"}},[a("div",{staticClass:"v-popup"},[a("van-form",{on:{submit:t.commit}},[a("van-field",{attrs:{label:"旧密码",placeholder:"旧密码"},model:{value:t.pwds.oldPassword,callback:function(o){t.$set(t.pwds,"oldPassword",o)},expression:"pwds.oldPassword"}}),a("van-field",{attrs:{type:"text",label:"新密码",placeholder:"新密码"},model:{value:t.pwds.password,callback:function(o){t.$set(t.pwds,"password",o)},expression:"pwds.password"}}),a("div",{staticClass:"btn-box"},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1)])],1)},s=[],n=(a("6d93"),a("cdaf")),r={data:function(){return{isOpen:!1,pwds:{oldPassword:"",password:""}}},methods:{back:function(){this.$router.go(-1)},openPopup:function(){this.isOpen=!0},commit:function(){var t=this;if(n["a"].validUserFrom(this.pwds)){var o=localStorage.getItem("GK");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/updatePassword",data:{appkey:this.appkey,tokenString:o,password:this.pwds.password,oldPassword:this.pwds.oldPassword}}).then((function(o){t.$toast.clear(),t.isOpen=!1,"E001"==o.data.code?(localStorage.removeItem("GK"),t.$router.push({name:"Login"})):t.$toast(o.data.msg)})).catch((function(o){t.$toast.clear()}))}},logout:function(){var t=this;this.$dialog.confirm({title:"是否退出登录"}).then((function(){localStorage.removeItem("GK"),t.$router.push({name:"Login"})}))},destroy:function(){var t=this;this.$dialog.confirm({title:"注销账号",message:"一旦注销，数据无法恢复"}).then((function(){var o=localStorage.getItem("GK");t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),t.axios({method:"POST",url:"/destroyAccount",data:{appkey:t.appkey,tokenString:o}}).then((function(o){t.$toast.clear(),"G001"==o.data.code?(localStorage.removeItem("GK"),t.$router.push({name:"Login"})):t.$toast(o.data.msg)})).catch((function(o){t.$toast.clear()}))})).catch((function(t){}))}}},i=r,l=a("2877"),c=Object(l["a"])(i,e,s,!1,null,null,null);o["default"]=c.exports},"6d93":function(t,o,a){},cdaf:function(t,o,a){"use strict";a("a4f5");var e=a("5fa4");function s(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function n(t,o){for(var a=0;a<o.length;a++){var e=o[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function r(t,o,a){return o&&n(t.prototype,o),a&&n(t,a),t}var i=function(){function t(){s(this,t),this.validUserFromReg={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,10}$/,msg:"昵称格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机号格式不正确"},password:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码格式不正确且以字母开头"},oldPassword:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"旧密码格式不正确且以字母开头"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"验证格式正确"}}}return r(t,[{key:"validUserFrom",value:function(t){for(var o in t)if(!this.validUserFromReg[o].reg.test(t[o]))return Object(e["a"])(this.validUserFromReg[o].msg),!1;return!0}}]),t}();o["a"]=new i}}]);
//# sourceMappingURL=chunk-05fca05d.d6870d2b.js.map