(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{292:function(t,e,s){"use strict";s.d(e,"a",(function(){return b}));var n=s(4),a=s(33),o=s(34),r=s(36),i=s(35),c=s(0),u=s.n(c),p=s(15),j=s(10),l=s(1),f=function(t){return{isAuth:t.auth.isAuth}},b=function(t){var e=function(e){Object(r.a)(c,e);var s=Object(i.a)(c);function c(){return Object(a.a)(this,c),s.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(t,Object(n.a)({},this.props)):Object(l.jsx)(j.a,{to:"/login"})}}]),c}(u.a.Component);return Object(p.b)(f)(e)}},294:function(t,e,s){t.exports={posts:"MyPosts_posts__3tZ1c",formPost:"MyPosts_formPost__3MaxQ"}},295:function(t,e,s){t.exports={post:"Post_post__A0EJd"}},296:function(t,e,s){t.exports={profilePage:"ProfileInfo_profilePage__8Apdk",profileInfo:"ProfileInfo_profileInfo__2IJgv",profileName:"ProfileInfo_profileName__52BYI",contacts:"ProfileInfo_contacts__3y62P"}},298:function(t,e,s){"use strict";s.r(e);var n=s(4),a=s(33),o=s(34),r=s(36),i=s(35),c=s(0),u=s.n(c),p=s(15),j=s(96),l=s(128),f=s(129),b=s(294),d=s.n(b),h=s(295),O=s.n(h),m=s(1),x=function(t){return Object(m.jsxs)("div",{className:O.a.post,children:[Object(m.jsx)("p",{children:t.message}),Object(m.jsx)("span",{children:t.publishedTime})]})},v=s(66),P=s(65),_=Object(v.a)(10),C=Object(f.a)({form:"myPosts"})((function(t){return Object(m.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(m.jsx)(l.a,{placeholder:"What happens?",name:"newPostText",component:P.b,validate:[v.b,_]}),Object(m.jsx)("button",{type:"submit",children:"Add post"})]})})),g=function(t){Object(r.a)(s,t);var e=Object(i.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"shouldComponentUpdate",value:function(t,e){return t!==this.props||e!==this.state}},{key:"render",value:function(){var t=this,e=this.props.PostsData.map((function(t){return Object(m.jsx)(x,{message:t.message,publishedTime:t.publishedTime},t.id)}));return Object(m.jsxs)("div",{className:d.a.posts,children:[Object(m.jsx)("div",{className:d.a.formPost,children:Object(m.jsx)(C,{onSubmit:function(e){t.props.addPostAC(e.newPostText)}})}),e]})}}]),s}(u.a.Component),T=Object(p.b)((function(t){return{PostsData:t.profilePage.PostsData}}),(function(t){return{addPostAC:function(e){t(Object(j.a)(e))}}}))(g),y=s(296),S=s.n(y),I=s(39),k=s(106),N=s(130),A=function(t){var e=Object(c.useState)(!1),s=Object(N.a)(e,2),n=s[0],a=s[1],o=Object(c.useState)(t.status),r=Object(N.a)(o,2),i=r[0],u=r[1];Object(c.useEffect)((function(){u(t.status)}),[t.status]);return Object(m.jsx)("div",{children:n?Object(m.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},onBlur:function(){a(!1),t.updateStatusTC(i)},autoFocus:!0,value:i}):Object(m.jsx)("span",{onDoubleClick:function(){a(!0)},children:t.status||"======"})})},D=function(t){return t.profile?Object(m.jsx)("div",{className:S.a.profilePage,children:Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:null!=t.profile.photos.small?t.profile.photos.small:k.a}),Object(m.jsxs)("div",{className:S.a.profileInfo,children:[Object(m.jsx)("div",{className:S.a.profileName,children:t.profile.fullName}),Object(m.jsx)("div",{style:{marginTop:"-20px"},children:Object(m.jsx)(A,{status:t.status,updateStatusTC:t.updateStatusTC})})]})]})}):Object(m.jsx)(I.a,{})},w=function(t){return Object(m.jsxs)("div",{children:[Object(m.jsx)(D,{profile:t.profile,status:t.status,updateStatusTC:t.updateStatusTC}),Object(m.jsx)(T,{})]})},J=s(10),M=s(11),U=s(292),z=function(t){Object(r.a)(s,t);var e=Object(i.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.myUserId),this.props.getProfileTC(t),this.props.getStatusTC(t)}},{key:"render",value:function(){return Object(m.jsx)(w,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatusTC:this.props.updateStatusTC}))}}]),s}(u.a.Component);e.default=Object(M.compose)(Object(p.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,myUserId:t.auth.userId}}),{getProfileTC:j.c,getStatusTC:j.d,updateStatusTC:j.e}),J.f,U.a)(z)}}]);
//# sourceMappingURL=3.ffab79fc.chunk.js.map