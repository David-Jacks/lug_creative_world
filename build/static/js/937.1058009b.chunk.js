"use strict";(self.webpackChunklug_creative_world=self.webpackChunklug_creative_world||[]).push([[937],{6937:(e,s,a)=>{a.r(s),a.d(s,{default:()=>v});a(5884),a(7531);var c=a(9153),l=a(5369),i=a(1434),t=a(7805),n=a(8161),o=a(3216),r=a(5475),d=a(5043),m=(a(3632),a(165)),h=a(9054),x=a(8860),j=a(2127),u=a(6178),p=a.n(u),_=a(579);const N=e=>{let{comment:s,postid:a}=e;const[l,i]=(0,d.useState)(!1);return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{id:"comment_box",children:[(0,_.jsxs)("div",{className:"comment_box_head",children:[(0,_.jsxs)("div",{className:"comment_profile_contain",children:[s.user.profilePicture?(0,_.jsx)("img",{src:"data:image/png;base64,".concat(s.user.profilePicture),alt:""}):(0,_.jsx)("img",{src:c,alt:"profile"}),(0,_.jsxs)("div",{className:"profile_data",children:[(0,_.jsx)("span",{children:s.user.username}),(0,_.jsx)("span",{children:p()(s.createdAt).fromNow()})]})]}),(0,_.jsxs)("div",{className:"drop_down_comment",children:[(0,_.jsx)(j.Ym0,{className:"icon",onClick:()=>{i(!l)}}),(0,_.jsxs)("ul",{className:"drop ".concat(l?"showdrop":""),children:[(0,_.jsx)("li",{children:(0,_.jsx)("span",{children:"Delete"})}),(0,_.jsx)("li",{children:"Edit"})]})]})]}),(0,_.jsx)("div",{className:"comment_box_message",children:(0,_.jsx)("p",{children:s.commentText})}),(0,_.jsx)("div",{className:"comment_box_reactions",children:(0,_.jsx)("div",{className:"comment_icons",children:(0,_.jsx)(t.$qj,{className:"icon"})})})]})})},f=e=>{const s=localStorage.getItem("user"),a=JSON.parse(s),[l,i]=(0,d.useState)(""),[t,n]=(0,d.useState)([]),[o,r]=(0,d.useState)(!1),[m,j]=(0,d.useState)({});(0,d.useEffect)((()=>{!async function(){const e=await(0,h.Sk)(a._id);j(e)}(),async function(){const s=await(0,h.vr)(e.articleid);e.setCommentsCount(s.length),n(s)}()}),[l]),console.log(t.length);const u={commentText:l};return(0,_.jsx)("div",{className:"comment_modal",children:(0,_.jsxs)("div",{className:"modal_content",children:[(0,_.jsxs)("div",{className:"comment_top",children:[(0,_.jsxs)("h4",{children:[m.username," is commenting"]}),(0,_.jsx)("button",{className:"comment_cancel_button",onClick:e.onClose,children:(0,_.jsx)(x.r8o,{})})]}),!o&&(0,_.jsx)("input",{type:"text",onClick:function(){r(!0)},name:"",id:"inputclick",placeholder:"pin down your opinions"}),(0,_.jsxs)("form",{className:"comment_form ".concat(o?"active":""),onSubmit:async s=>{if(s.preventDefault(),l){r(!1);await(0,h.Gy)(e.articleid,u)}},children:[(0,_.jsxs)("div",{className:"comment_owner_profile",children:[m.profilePicture?(0,_.jsx)("img",{src:"data:image/png;base64,".concat(m.profilePicture),alt:"profile"}):(0,_.jsx)("img",{src:c,alt:"default_profile"}),(0,_.jsx)("span",{children:m.username})]}),(0,_.jsx)("textarea",{className:"comment_area",value:l,onChange:e=>{i(e.target.value)},required:!0,placeholder:"pin down your opinions"}),(0,_.jsxs)("div",{className:"comment_bottom_container",children:[(0,_.jsx)("span",{onClick:()=>{r(!1)},children:"Cancel"}),(0,_.jsx)("button",{type:"submit",className:"comment_button",children:"comment"})]})]}),t&&t.map((s=>(0,_.jsx)(N,{comment:s,postid:e.articleid},s._id)))]})})},v=()=>{const e=(0,o.zy)().pathname.split("/")[2],[s,a]=(0,d.useState)({}),[x,j]=(0,d.useState)(!1),[u,N]=(0,d.useState)(0),[v,b]=(0,d.useState)(0),[g,w]=(0,d.useState)(!1),[k,C]=(0,d.useState)("Not Flagged");async function S(){g?(N(u-1),w(!g)):(N(u+1),w(!g));const s={likes:u,liked:g},a=await(0,h.AT)(e,s);w(a.liked),N(a.likes)}return(0,d.useEffect)((()=>{(async()=>{try{const s=await(0,h.Ls)(e);a(s)}catch(s){throw s}})()}),[e]),console.log(),(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{id:"article_view_wrapper",children:[(0,_.jsx)(n.A,{}),(0,_.jsxs)("div",{className:"article_wrapper_container",children:[(0,_.jsxs)("div",{className:"article_view_head",children:[(0,_.jsx)("h2",{children:s.title}),(0,_.jsxs)("div",{className:"div_main",children:[(0,_.jsx)(r.N_,{to:"/profile/".concat(s.authorId),children:s.authorProfile?(0,_.jsx)("img",{src:s.authorProfile,alt:"author_profile"}):(0,_.jsx)("img",{src:c,alt:"default_profile"})}),(0,_.jsxs)("div",{className:"div_p",children:[(0,_.jsx)("div",{className:"div1",children:(0,_.jsx)(r.N_,{to:"/profile/".concat(s.authorId),className:"to_profile",children:(0,_.jsx)("span",{children:s.author})})}),(0,_.jsxs)("div",{className:"div2",children:[(0,_.jsx)("span",{children:p()(s.created_at.toDate()).fromNow()}),(0,_.jsxs)("span",{children:[s.timeTakenToReadPost," min read"]})]})]})]}),(0,_.jsx)("ul",{children:(0,_.jsxs)("li",{children:[(0,_.jsx)("span",{children:k}),(0,_.jsxs)("span",{children:[v," Comments"]}),(0,_.jsxs)("span",{children:[u," Likes"]})]})})]}),x&&(0,_.jsx)(f,{onClose:()=>j(!1),article:s,articleid:e,setCommentsCount:b}),(0,_.jsx)("div",{className:"article_view_main ql-editor ",children:(0,_.jsx)(m.A,{body:s.body})}),(0,_.jsx)("div",{className:"article_controls",children:(0,_.jsxs)("ul",{children:[g?(0,_.jsx)("li",{children:(0,_.jsx)(i.F8A,{onClick:S,className:"article_icons hvr-float-shadow"})}):(0,_.jsx)("li",{children:(0,_.jsx)(t.$qj,{onClick:S,className:"article_icons hvr-float-shadow"})}),(0,_.jsxs)("li",{children:[(0,_.jsx)(l.j1Q,{onClick:()=>{j(!0)},className:"article_icons hvr-float-shadow"})," "]}),(0,_.jsx)(l.ltS,{onClick:function(){(0,h.if)(e)},className:"article_icons hvr-float-shadow"})]})})]})]})})}},165:(e,s,a)=>{a.d(s,{A:()=>t});var c=a(6213),l=a.n(c),i=(a(5884),a(8560),a(579));const t=function(e){let{body:s}=e;const a=l().sanitize(s);return(0,i.jsx)("div",{className:"article_view_para ql-editor",dangerouslySetInnerHTML:{__html:a}})}},8161:(e,s,a)=>{a.d(s,{A:()=>j});var c=a(5043),l=a(5927),i=a(9153),t=a(221),n=a(4966),o=a(5369),r=a(5475),d=a(9054),m=a(8298),h=a(8059),x=a(579);const j=(0,c.memo)((e=>{const[s,a]=(0,c.useState)({}),[j,u]=(0,c.useState)(!1),p=(0,m.wA)(),_=["topbar",e.showBottomBoxShadow?"bottom-box-shadow":""].join(" "),N=localStorage.getItem("user").replace(/"/g,"");(0,c.useEffect)((()=>{(async()=>{const e=await(0,d.Sk)(N);a(e)})()}),[]);const f=()=>{u(!j),p((0,h.V_)(j))};return(0,x.jsxs)("section",{className:_,children:[(0,x.jsxs)("div",{className:"container",children:[(0,x.jsxs)("div",{className:"logo-1",children:[(0,x.jsx)(r.N_,{to:"/dashboard",children:(0,x.jsx)("img",{className:"img1",src:l,alt:"lancaster-logo"})}),e.showText?(0,x.jsx)("span",{className:"logo-text",children:e.logoText}):(0,x.jsx)(r.N_,{to:"/dashboard",className:"home_link",children:(0,x.jsxs)("span",{className:"logo-text other_small",children:["Scholar",(0,x.jsx)("span",{className:"colored_part",children:"Scribe"})]})})]}),(0,x.jsxs)("ul",{className:"navbar",children:[e.showButton?(0,x.jsx)("li",{children:(0,x.jsx)("button",{className:"publish-button hvr-wobble-top",onClick:e.publishClick,children:"Publish"})}):(0,x.jsx)("li",{children:(0,x.jsxs)(r.N_,{to:"/writepage",className:"write",children:[(0,x.jsx)(t.cg8,{className:"write_icon"}),(0,x.jsx)("span",{className:"write_link hvr-wobble-top",children:"Write"})]})}),(0,x.jsx)("li",{children:(0,x.jsxs)("div",{className:"bg__change",children:[(0,x.jsx)("input",{type:"checkbox",id:"checkbox",className:"checkbox",onClick:f}),(0,x.jsxs)("label",{for:"checkbox",className:"checkbox__label",children:[(0,x.jsx)(o.V6H,{className:"fa-moon"}),(0,x.jsx)(o.wQq,{className:"fa-sun"}),(0,x.jsx)("span",{className:"check__ball",onClick:f})]})]})}),e.profile?(0,x.jsx)("li",{children:(0,x.jsx)(r.N_,{to:"/",children:(0,x.jsx)("button",{className:"publish-button hvr-wobble-top",onClick:e.logoutClick,children:"Logout"})})}):(0,x.jsx)("li",{children:(0,x.jsx)(r.N_,{to:"/profile/".concat(N),children:s.profilePicture?(0,x.jsx)("img",{className:"img4",src:s.profilePicture,alt:""}):(0,x.jsx)("img",{className:"img4",src:i,alt:""})})})]})]}),e.sidebar?e.showBottomBoxShadow&&(0,x.jsx)(n.fnX,{className:"topbar_panel",onClick:e.sideBarHandle}):e.showBottomBoxShadow&&(0,x.jsx)(n.Wj,{className:"topbar_panel",onClick:e.sideBarHandle})]})}))},7531:()=>{},9153:(e,s,a)=>{e.exports=a.p+"static/media/profilevactor.4779aeafa6e57abc3cd1.jpg"}}]);
//# sourceMappingURL=937.1058009b.chunk.js.map