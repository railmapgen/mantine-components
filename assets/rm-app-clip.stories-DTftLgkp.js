import{j as e}from"./jsx-runtime-CLpGMVip.js";import{R as h}from"./rm-app-clip-D8WLOhPg.js";import{r as p}from"./index-B-SYruCi.js";import{S as i}from"./Stack-DZ7rhZUb.js";import{T as d}from"./Text-BohgbvsN.js";import{f as R,u as A,a as O,B as v,b as F,e as _}from"./polymorphic-factory-Cr1cWWvZ.js";import{G as b}from"./Group-XxZegxkp.js";import{B as a}from"./Button-DuFAFXpy.js";import"./Modal-DnUJtLvS.js";import"./index-_1MEbZZW.js";import"./index-C-aVi5AG.js";import"./use-id-CRWUMBvp.js";var x={root:"m_b183c0a2"};const G={},N=F((t,{color:s})=>({root:{"--code-bg":s?_(s,t):void 0}})),l=R((t,s)=>{const n=A("Code",G,t),{classNames:r,className:C,style:S,styles:j,unstyled:B,vars:k,color:E,block:c,variant:T,mod:M,...g}=n,y=O({name:"Code",props:n,classes:x,className:C,style:S,classNames:r,styles:j,unstyled:B,vars:k,varsResolver:N});return e.jsx(v,{component:c?"pre":"code",variant:T,ref:s,mod:[{block:c},M],...y("root"),...g,dir:"ltr"})});l.classes=x;l.displayName="@mantine/core/Code";const U={title:"RMAppClip",component:h},o=()=>{const[t,s]=p.useState(!1),[n,r]=p.useState(!1);return e.jsxs(i,{p:"sm",children:[e.jsxs(d,{children:["This component wraps a ",e.jsx(l,{children:"Modal"})," component. To change the size, please refer to the Mantine Modal's documentation."]}),e.jsxs(b,{children:[e.jsx(a,{onClick:()=>{s(!0),r(!1)},children:"Default"}),e.jsx(a,{onClick:()=>{s(!0),r(!0)},children:"Fullscreen"})]}),e.jsx(h,{opened:t,onClose:()=>s(!1),fullScreen:n,children:e.jsxs(i,{children:[e.jsx(d,{children:"App clip content goes here"}),e.jsx(a,{onClick:()=>s(!1),children:"Close"})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Basic"};var u,m,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [opened, setOpened] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  return <Stack p="sm">
            <Text>
                This component wraps a <Code>Modal</Code> component. To change the size, please refer to the Mantine
                Modal&apos;s documentation.
            </Text>
            <Group>
                <Button onClick={() => {
        setOpened(true);
        setFullscreen(false);
      }}>
                    Default
                </Button>
                <Button onClick={() => {
        setOpened(true);
        setFullscreen(true);
      }}>
                    Fullscreen
                </Button>
            </Group>

            <RMAppClip opened={opened} onClose={() => setOpened(false)} fullScreen={fullscreen}>
                <Stack>
                    <Text>App clip content goes here</Text>
                    <Button onClick={() => setOpened(false)}>Close</Button>
                </Stack>
            </RMAppClip>
        </Stack>;
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const W=["Basic"];export{o as Basic,W as __namedExportsOrder,U as default};
