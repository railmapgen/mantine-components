import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as h}from"./rm-app-clip-DMZUEmaM.js";import{r as c}from"./index-0yr9KlQE.js";import{S as i}from"./Stack-Cznp45fG.js";import{T as m}from"./Text-CSOluYSb.js";import{f as v,u as A,a as O,B as F,b as _,e as b}from"./factory-DBu1aocQ.js";import{G}from"./Group-BytV6m82.js";import{B as a}from"./Button-Yx7TU9Wg.js";import"./Modal-CTU-Lmnf.js";import"./DirectionProvider-Dl1fQI0L.js";import"./CloseButton-BLoVBDfI.js";import"./polymorphic-factory-Cvo93ihN.js";import"./UnstyledButton-qbCLZWTS.js";import"./use-merged-ref-VFbqHomq.js";import"./Transition-B7jYxShf.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./use-id-Bbj4jMpb.js";import"./to-int-PQE0s6ay.js";import"./create-optional-context-CKgXOEcT.js";import"./Loader-d2fvkdys.js";var x={root:"m_b183c0a2"};const N=_((t,{color:s})=>({root:{"--code-bg":s?b(s,t):void 0}})),l=v((t,s)=>{const n=A("Code",null,t),{classNames:r,className:C,style:S,styles:j,unstyled:B,vars:k,color:E,block:p,variant:T,mod:M,attributes:g,...y}=n,R=O({name:"Code",props:n,classes:x,className:C,style:S,classNames:r,styles:j,unstyled:B,attributes:g,vars:k,varsResolver:N});return e.jsx(F,{component:p?"pre":"code",variant:T,ref:s,mod:[{block:p},M],...R("root"),...y,dir:"ltr"})});l.classes=x;l.displayName="@mantine/core/Code";const oe={title:"RMAppClip",component:h},o=()=>{const[t,s]=c.useState(!1),[n,r]=c.useState(!1);return e.jsxs(i,{p:"sm",children:[e.jsxs(m,{children:["This component wraps a ",e.jsx(l,{children:"Modal"})," component. To change the size, please refer to the Mantine Modal's documentation."]}),e.jsxs(G,{children:[e.jsx(a,{onClick:()=>{s(!0),r(!1)},children:"Default"}),e.jsx(a,{onClick:()=>{s(!0),r(!0)},children:"Fullscreen"})]}),e.jsx(h,{opened:t,onClose:()=>s(!1),fullScreen:n,children:e.jsxs(i,{children:[e.jsx(m,{children:"App clip content goes here"}),e.jsx(a,{onClick:()=>s(!1),children:"Close"})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Basic"};var d,u,f;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const ne=["Basic"];export{o as Basic,ne as __namedExportsOrder,oe as default};
