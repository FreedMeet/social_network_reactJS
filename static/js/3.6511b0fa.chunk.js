(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{294:function(e,t,s){"use strict";s.d(t,"a",(function(){return f}));var n=s(3),o=s(54),a=s(55),i=s(57),c=s(56),r=s(0),l=s.n(r),j=s(15),u=s(10),p=s(1),b=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(i.a)(r,t);var s=Object(c.a)(r);function r(){return Object(o.a)(this,r),s.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(n.a)({},this.props)):Object(p.jsx)(u.a,{to:"/login"})}}]),r}(l.a.Component);return Object(j.b)(b)(t)}},296:function(e,t,s){e.exports={profilePage:"ProfileInfo_profilePage__8Apdk",profileInfo:"ProfileInfo_profileInfo__2IJgv",profileName:"ProfileInfo_profileName__52BYI",profile:"ProfileInfo_profile__2LHtf",file_upload:"ProfileInfo_file_upload__2OfPh",profileFormFields:"ProfileInfo_profileFormFields__1DjQL"}},297:function(e,t,s){e.exports={posts:"MyPosts_posts__3tZ1c",formPost:"MyPosts_formPost__3MaxQ"}},298:function(e,t,s){e.exports={post:"Post_post__A0EJd"}},299:function(e,t,s){e.exports={profile:"Profile_profile__3dzvr"}},301:function(e,t,s){"use strict";s.r(t);var n=s(3),o=s(97),a=s(0),i=s.n(a),c=s(15),r=s(98),l=s(54),j=s(55),u=s(57),p=s(56),b=s(130),f=s(131),d=s(297),h=s.n(d),O=s(298),x=s.n(O),m=s(1),v=function(e){return Object(m.jsxs)("div",{className:x.a.post,children:[Object(m.jsx)("p",{children:e.message}),Object(m.jsx)("span",{children:e.publishedTime})]})},g=s(45),P=s(43),_=s(22),y=Object(g.a)(10),C=Object(f.a)({form:"myPosts"})((function(e){return Object(m.jsxs)("form",{className:h.a.form,onSubmit:e.handleSubmit,children:[Object(m.jsx)(b.a,{placeholder:"What happens?",name:"newPostText",component:P.b,validate:[g.b,y]}),Object(m.jsx)(_.a,{width:"20%",height:"40px",type:"submit",children:"Add post"})]})})),T=function(e){Object(u.a)(s,e);var t=Object(p.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"shouldComponentUpdate",value:function(e,t){return e!==this.props||t!==this.state}},{key:"render",value:function(){var e=this,t=this.props.PostsData.map((function(e){return Object(m.jsx)(v,{message:e.message,publishedTime:e.publishedTime},e.id)}));return Object(m.jsxs)("div",{className:h.a.posts,children:[Object(m.jsx)("div",{className:h.a.formPost,children:Object(m.jsx)(C,{onSubmit:function(t){e.props.addPostAC(t.newPostText)}})}),t]})}}]),s}(i.a.Component),k=Object(c.b)((function(e){return{PostsData:e.profilePage.PostsData}}),(function(e){return{addPostAC:function(t){e(Object(r.a)(t))}}}))(T),S=s(296),N=s.n(S),w=s(36),A=s(108),I=function(e){var t=e.status,s=e.updateStatusTC,n=Object(a.useState)(!1),i=Object(o.a)(n,2),c=i[0],r=i[1],l=Object(a.useState)(t),j=Object(o.a)(l,2),u=j[0],p=j[1];Object(a.useEffect)((function(){p(t)}),[t]);return Object(m.jsx)("div",{children:c?Object(m.jsx)("input",{onChange:function(e){p(e.currentTarget.value)},onBlur:function(){r(!1),s(u)},autoFocus:!0,value:u}):Object(m.jsx)("span",{onDoubleClick:function(){r(!0)},children:t||"======"})})},F=Object(f.a)({form:"profileData"})((function(e){var t=e.handleSubmit,s=e.profile;e.error;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsxs)("div",{className:N.a.profileFormFields,children:[Object(m.jsx)(b.a,{component:P.a,name:"fullName",placeholder:"full name",validate:[]}),Object(m.jsx)(b.a,{component:P.b,name:"lookingForAJobDescription",placeholder:"professional skills",validate:[]}),Object(m.jsx)(b.a,{component:P.b,name:"aboutMe",placeholder:"about me",validate:[]}),Object(m.jsxs)("div",{style:{display:"flex",alignSelf:"flex-start",marginTop:"10px"},children:[Object(m.jsx)("span",{style:{opacity:".7",width:"300px"},children:"Looking for a job:"}),Object(m.jsx)(b.a,{component:P.a,type:"checkbox",name:"lookingForAJob",validate:[]})]}),Object(m.jsxs)("div",{style:{alignSelf:"flex-start"},children:[Object(m.jsx)("h3",{children:"Contacts"}),Object.keys(s.contacts).map((function(e){return Object(m.jsx)(b.a,{style:{marginBottom:"5px"},component:P.a,name:"contacts."+e,placeholder:e,validate:[]},e)}))]})]}),Object(m.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:Object(m.jsx)(_.a,{width:"160px",height:"31px",type:"submit",children:"Save Change"})})]})})),D=function(e){var t=e.contactTitle,s=e.contactValue;return Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:[t,": ",Object(m.jsx)("b",{children:s})]})})},J=function(e){var t=e.profile;return Object(m.jsxs)("div",{className:N.a.contacts,children:[Object(m.jsxs)("p",{children:["Looking for a job: ",Object(m.jsx)("b",{style:{textTransform:"uppercase"},children:t.lookingForAJob?"Yes":"No"})]}),t.lookingForAJob&&Object(m.jsxs)("p",{children:["Professional skills: ",Object(m.jsx)("b",{children:t.lookingForAJobDescription})]}),Object(m.jsxs)("p",{children:["About me: ",Object(m.jsx)("b",{children:t.aboutMe})]}),Object(m.jsxs)("div",{style:{marginBottom:"-10px"},children:[Object(m.jsx)("h3",{children:"Contacts"}),Object.keys(t.contacts).map((function(e){return Object(m.jsx)(D,{contactTitle:e,contactValue:t.contacts[e]?t.contacts[e]:"==="},e)}))]})]})},M=function(e){var t=e.profile,s=e.savePhotoTC,n=e.updateStatusTC,i=e.status,c=e.isOwner,r=e.saveProfileTC,l=Object(a.useState)(!1),j=Object(o.a)(l,2),u=j[0],p=j[1];if(!t)return Object(m.jsx)(w.a,{});return Object(m.jsxs)("div",{className:N.a.profilePage,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{alt:"mainPhoto",src:null!=t.photos.small?t.photos.small:A.a}),Object(m.jsxs)("div",{className:N.a.profileInfo,children:[Object(m.jsx)("div",{className:N.a.profileName,children:t.fullName}),Object(m.jsx)("div",{style:{marginTop:"-20px"},children:Object(m.jsx)(I,{status:i,updateStatusTC:n})})]})]}),c&&Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsxs)("div",{style:{marginRight:"10px"},className:N.a.file_upload,children:[Object(m.jsx)(_.a,{width:"150px",height:"30px",children:"Change photo"}),Object(m.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}})]}),!u&&Object(m.jsx)(_.a,{onClick:function(){p(!0)},width:"160px",height:"31px",children:"Edit profile"})]}),u?Object(m.jsx)(F,{onSubmit:function(e){r(e).then(p(!1))},initialValues:t,profile:t}):Object(m.jsx)(J,{profile:t})]})},B=s(299),E=s.n(B),L=function(e){return Object(m.jsxs)("div",{className:E.a.profile,children:[Object(m.jsx)(M,{savePhotoTC:e.savePhotoTC,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatusTC:e.updateStatusTC,saveProfileTC:e.saveProfileTC}),e.isOwner&&e.profile&&Object(m.jsx)(k,{})]})},z=s(10),V=s(11),Q=s(294);t.default=Object(V.compose)(z.g,Q.a)((function(e){var t=e.match.params.userId,s=e.props,i=Object(c.d)((function(e){return[e.profilePage.profile,e.profilePage.status,e.auth.userId]})),l=Object(o.a)(i,3),j=l[0],u=l[1],p=l[2],b=Object(c.c)(),f=Object(a.useCallback)((function(){var e=t;e||(e=p),b(Object(r.c)(e)),b(Object(r.d)(e))}),[t,b]);return Object(a.useEffect)((function(){f()}),[t,f]),Object(m.jsx)(L,Object(n.a)(Object(n.a)({},s),{},{isOwner:!t,profile:j,status:u,updateStatusTC:b(r.g),savePhotoTC:b(r.e),saveProfileTC:b(r.f)}))}))}}]);
//# sourceMappingURL=3.6511b0fa.chunk.js.map