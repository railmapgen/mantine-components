import{j as o}from"./jsx-runtime-CLpGMVip.js";import{R as i}from"./rm-error-boundary-BO5qeA26.js";import{R as c}from"./index-B-SYruCi.js";import"./index-DQ-rvyql.js";import"./index-CZobqRy_.js";import"./Modal-DnUJtLvS.js";import"./polymorphic-factory-Cr1cWWvZ.js";import"./Button-DuFAFXpy.js";import"./index-_1MEbZZW.js";import"./index-C-aVi5AG.js";import"./Text-BohgbvsN.js";import"./use-id-CRWUMBvp.js";import"./Stack-DZ7rhZUb.js";import"./Divider-BPM27AtZ.js";import"./Group-XxZegxkp.js";class a extends c.Component{constructor(t){super(t),this.state={counter:0},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(({counter:t})=>({counter:t+1}))}render(){if(this.state.counter===5)throw new Error("I crashed!");return o.jsxs("h1",{onClick:this.handleClick,children:["Click me: ",this.state.counter]})}}a.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[],returns:null}],displayName:"BuggyCounter"};const j={title:"RMErrorBoundary",component:i},r=()=>o.jsx(i,{allowReset:!0,children:o.jsx(a,{})});r.__docgenInfo={description:"",methods:[],displayName:"Basic"};var e,s,n;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  return <RMErrorBoundary allowReset>
            <BuggyCounter />
        </RMErrorBoundary>;
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const w=["Basic"];export{r as Basic,w as __namedExportsOrder,j as default};
