import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as h}from"./rm-app-clip-CsTzg6Iu.js";import{r as p}from"./index-DatCARk7.js";import{S as i}from"./Stack-GLoFTc4X.js";import{T as d}from"./Text-MJQKALvJ.js";import{f as R,u as v,a as A,B as O,b as F,e as _}from"./polymorphic-factory-CIUISfKh.js";import{G as b}from"./Group-CSgIay0s.js";import{B as a}from"./Button-Dr4LTevx.js";import"./Modal-Db6DXfF4.js";import"./index-JDkdBrmE.js";import"./index-C9zM6nuj.js";import"./use-id-DSaWsqrk.js";var x={root:"m_b183c0a2"};const G={},N=F((o,{color:s})=>({root:{"--code-bg":s?_(s,o):void 0}})),l=R((o,s)=>{const n=v("Code",G,o),{classNames:r,className:C,style:S,styles:j,unstyled:B,vars:k,color:E,block:c,variant:T,mod:M,...g}=n,y=A({name:"Code",props:n,classes:x,className:C,style:S,classNames:r,styles:j,unstyled:B,vars:k,varsResolver:N});return e.jsx(O,{component:c?"pre":"code",variant:T,ref:s,mod:[{block:c},M],...y("root"),...g,dir:"ltr"})});l.classes=x;l.displayName="@mantine/core/Code";const U={title:"RMAppClip",component:h},t=()=>{const[o,s]=p.useState(!1),[n,r]=p.useState(!1);return e.jsxs(i,{p:"sm",children:[e.jsxs(d,{children:["This component wraps a ",e.jsx(l,{children:"Modal"})," component. To change the size, please refer to the Mantine Modal's documentation."]}),e.jsxs(b,{children:[e.jsx(a,{onClick:()=>{s(!0),r(!1)},children:"Default"}),e.jsx(a,{onClick:()=>{s(!0),r(!0)},children:"Fullscreen"})]}),e.jsx(h,{opened:o,onClose:()=>s(!1),fullScreen:n,children:e.jsxs(i,{children:[e.jsx(d,{children:"App clip content goes here"}),e.jsx(a,{onClick:()=>s(!1),children:"Close"})]})})]})};t.__docgenInfo={description:"",methods:[],displayName:"Basic"};var m,u,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const W=["Basic"];export{t as Basic,W as __namedExportsOrder,U as default};
