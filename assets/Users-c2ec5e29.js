import{_ as T,K as c,a as i,r as j,j as k,g as Q,b as w,$ as X,a0 as Y,N as Z,l as aa,a1 as ta,a2 as oa,a3 as ea}from"./index-e5df6940.js";import{g as E,a as G,q as sa,n as F,s as U,B as na,f as z,h as H,o as ia,c as S,j as O,e as q}from"./ButtonBase-9e46b151.js";function ra(a){return E("MuiPagination",a)}G("MuiPagination",["root","ul","outlined","text"]);const la=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function ca(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:v=1,disabled:b=!1,hideNextButton:f=!1,hidePrevButton:l=!1,onChange:p,page:x,showFirstButton:e=!1,showLastButton:C=!1,siblingCount:u=1}=a,d=T(a,la),[r,B]=sa({controlled:x,default:v,name:o,state:"page"}),N=(n,m)=>{x||B(m),p&&p(n,m)},y=(n,m)=>{const K=m-n+1;return Array.from({length:K},(Ma,J)=>n+J)},I=y(1,Math.min(t,s)),P=y(Math.max(s-t+1,t+1),s),L=Math.max(Math.min(r-u,s-t-u*2-1),t+2),h=Math.min(Math.max(r+u,t+u*2+2),P.length>0?P[0]-2:s-1),M=[...e?["first"]:[],...l?[]:["previous"],...I,...L>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...y(L,h),...h<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...P,...f?[]:["next"],...C?["last"]:[]],R=n=>{switch(n){case"first":return 1;case"previous":return r-1;case"next":return r+1;case"last":return s;default:return null}},$=M.map(n=>typeof n=="number"?{onClick:m=>{N(m,n)},type:"page",page:n,selected:n===r,disabled:b,"aria-current":n===r?"true":void 0}:{onClick:m=>{N(m,R(n))},type:n,page:R(n),selected:!1,disabled:b||n.indexOf("ellipsis")===-1&&(n==="next"||n==="last"?r>=s:r<=1)});return c({items:$},d)}function da(a){return E("MuiPaginationItem",a)}const pa=G("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),g=pa,A=F(i("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),W=F(i("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),_=F(i("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),V=F(i("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),ua=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],D=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${O(o.size)}`],o.variant==="text"&&t[`text${O(o.color)}`],o.variant==="outlined"&&t[`outlined${O(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},ga=a=>{const{classes:t,color:o,disabled:s,selected:v,size:b,shape:f,type:l,variant:p}=a,x={root:["root",`size${O(b)}`,p,f,o!=="standard"&&`${p}${O(o)}`,s&&"disabled",v&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return q(x,da,t)},va=U("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:D})(({theme:a,ownerState:t})=>c({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${g.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),ba=U(na,{name:"MuiPaginationItem",slot:"Root",overridesResolver:D})(({theme:a,ownerState:t})=>c({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${g.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${g.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${g.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${g.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>c({},t.variant==="text"&&{[`&.${g.selected}`]:c({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${g.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${g.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${g.selected}`]:c({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:z(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:z(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:z(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${g.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),fa=U("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>c({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),xa=j.forwardRef(function(t,o){const s=H({props:t,name:"MuiPaginationItem"}),{className:v,color:b="standard",component:f,components:l={},disabled:p=!1,page:x,selected:e=!1,shape:C="circular",size:u="medium",slots:d={},type:r="page",variant:B="text"}=s,N=T(s,ua),y=c({},s,{color:b,disabled:p,selected:e,shape:C,size:u,type:r,variant:B}),I=ia(),P=ga(y),h=(I.direction==="rtl"?{previous:d.next||l.next||V,next:d.previous||l.previous||_,last:d.first||l.first||A,first:d.last||l.last||W}:{previous:d.previous||l.previous||_,next:d.next||l.next||V,first:d.first||l.first||A,last:d.last||l.last||W})[r];return r==="start-ellipsis"||r==="end-ellipsis"?i(va,{ref:o,ownerState:y,className:S(P.root,v),children:"…"}):k(ba,c({ref:o,ownerState:y,component:f,disabled:p,className:S(P.root,v)},N,{children:[r==="page"&&x,h?i(fa,{as:h,ownerState:y,className:P.icon}):null]}))}),ya=xa,Pa=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Ca=a=>{const{classes:t,variant:o}=a;return q({root:["root",o],ul:["ul"]},ra,t)},$a=U("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),ma=U("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function ha(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const Na=j.forwardRef(function(t,o){const s=H({props:t,name:"MuiPagination"}),{boundaryCount:v=1,className:b,color:f="standard",count:l=1,defaultPage:p=1,disabled:x=!1,getItemAriaLabel:e=ha,hideNextButton:C=!1,hidePrevButton:u=!1,renderItem:d=$=>i(ya,c({},$)),shape:r="circular",showFirstButton:B=!1,showLastButton:N=!1,siblingCount:y=1,size:I="medium",variant:P="text"}=s,L=T(s,Pa),{items:h}=ca(c({},s,{componentName:"Pagination"})),M=c({},s,{boundaryCount:v,color:f,count:l,defaultPage:p,disabled:x,getItemAriaLabel:e,hideNextButton:C,hidePrevButton:u,renderItem:d,shape:r,showFirstButton:B,showLastButton:N,siblingCount:y,size:I,variant:P}),R=Ca(M);return i($a,c({"aria-label":"pagination navigation",className:S(R.root,b),ownerState:M,ref:o},L,{children:i(ma,{className:R.ul,ownerState:M,children:h.map(($,n)=>i("li",{children:d(c({},$,{color:f,"aria-label":e($.type,$.page,$.selected),shape:r,size:I,variant:P}))},n))})}))}),Ia=Na,za=a=>a.users.usersPage,ka=a=>a.users.usersPage.currentPage,Ba=a=>a.users.usersPage.totalCount,La=a=>a.users.followingInProgress,Ua=()=>{const a=Q(),t=w(za),o=w(ka),s=w(Ba),v=w(La),b=10;j.useEffect(()=>{a(X({currentPage:String(o),pageSize:b}))},[o,a]);const f=e=>{a(ta({userId:e}))},l=e=>{a(oa({userId:e}))},p=e=>{a(ea(e))},x=Math.round(s/10);return i("div",{children:t.isFetching?i(Y,{}):k("div",{children:[t.items.map(e=>{const C=e.status&&typeof e.status=="string"?e.status.length>25?e.status.slice(0,25)+"...":e.status:"";return k("div",{className:"flex justify-between items-center mb-2",children:[i(Z,{to:`/profileUser/${e.id}`,children:k("div",{className:"flex items-center",children:[i("img",{className:"w-60 h-60 rounded-full",src:e.photos.small?e.photos.small:aa,alt:"avatar"}),k("div",{className:"text-black text-lg ml-1",children:[i("div",{children:e.name}),k("div",{children:["Status: ",C]})]})]})}),i("div",{className:"pr-5",children:i("div",{className:"w-24 flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-active",children:e.followed?i("button",{disabled:v.some(u=>u===e.id),onClick:()=>l(e.id),children:"Unfollow"}):i("button",{disabled:v.some(u=>u===e.id),onClick:()=>f(e.id),children:"Follow"})})})]},e.id)}),i(Ia,{className:"flex justify-around mt-10",count:x,variant:"outlined",shape:"rounded",page:o,onChange:(e,C)=>p(C)})]})})};export{Ua as Users};
