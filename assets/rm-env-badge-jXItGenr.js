import{j as r}from"./jsx-runtime-CLpGMVip.js";import{p as B,u as _,a as j,B as E,c as C,b as N,d as P,e as p,R as S}from"./polymorphic-factory-DgUxDfmn.js";import"./index-B-SYruCi.js";var b={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const T={},w=C((e,{radius:o,color:s,gradient:i,variant:d,size:t,autoContrast:l})=>{const a=e.variantColorResolver({color:s||e.primaryColor,theme:e,gradient:i,variant:d||"filled",autoContrast:l});return{root:{"--badge-height":p(t,"badge-height"),"--badge-padding-x":p(t,"badge-padding-x"),"--badge-fz":p(t,"badge-fz"),"--badge-radius":o===void 0?void 0:P(o),"--badge-bg":s||d?a.background:void 0,"--badge-color":s||d?a.color:void 0,"--badge-bd":s||d?a.border:void 0,"--badge-dot-color":d==="dot"?N(s,e):void 0}}}),m=B((e,o)=>{const s=_("Badge",T,e),{classNames:i,className:d,style:t,styles:l,unstyled:a,vars:f,radius:V,color:k,gradient:q,leftSection:c,rightSection:g,children:h,variant:u,fullWidth:R,autoContrast:A,circle:y,mod:x,...v}=s,n=j({name:"Badge",props:s,classes:b,className:d,style:t,classNames:i,styles:l,unstyled:a,vars:f,varsResolver:w});return r.jsxs(E,{variant:u,mod:[{block:R,circle:y,"with-right-section":!!g,"with-left-section":!!c},x],...n("root",{variant:u}),ref:o,...v,children:[c&&r.jsx("span",{...n("section"),"data-position":"left",children:c}),r.jsx("span",{...n("label"),children:h}),g&&r.jsx("span",{...n("section"),"data-position":"right",children:g})]})});m.classes=b;m.displayName="@mantine/core/Badge";const D={PRD:"green",UAT:"yellow",DEV:"red"},M=({env:e,ver:o,...s})=>r.jsx(m,{variant:"light",color:D[e],radius:"sm",title:`${e}: ${o}`,mx:5,...s,children:e===S.PRD?o:e});M.__docgenInfo={description:"",methods:[],displayName:"RMEnvBadge",props:{env:{required:!0,tsType:{name:"RmgEnv"},description:""},ver:{required:!0,tsType:{name:"string"},description:""}}};export{M as R};
