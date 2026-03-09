import{f as M,u as y,a as R,j as e,B as v,c as A,g as O,R as u,r as p,S as d,T as i,G as F,b as a}from"./iframe-BD5WVMZF.js";import"./preload-helper-PPVm8Dsz.js";var m={root:"m_b183c0a2"};const _=A((n,{color:s})=>({root:{"--code-bg":s?O(s,n):void 0}})),l=M((n,s)=>{const o=y("Code",null,n),{classNames:r,className:f,style:h,styles:x,unstyled:C,vars:S,color:b,block:c,variant:j,mod:k,attributes:B,...T}=o,g=R({name:"Code",props:o,classes:m,className:f,style:h,classNames:r,styles:x,unstyled:C,attributes:B,vars:S,varsResolver:_});return e.jsx(v,{component:c?"pre":"code",variant:j,ref:s,mod:[{block:c},k],...g("root"),...T,dir:"ltr"})});l.classes=m;l.displayName="@mantine/core/Code";const E={title:"RMAppClip",component:u},t=()=>{const[n,s]=p.useState(!1),[o,r]=p.useState(!1);return e.jsxs(d,{p:"sm",children:[e.jsxs(i,{children:["This component wraps a ",e.jsx(l,{children:"Modal"})," component. To change the size, please refer to the Mantine Modal's documentation."]}),e.jsxs(F,{children:[e.jsx(a,{onClick:()=>{s(!0),r(!1)},children:"Default"}),e.jsx(a,{onClick:()=>{s(!0),r(!0)},children:"Fullscreen"})]}),e.jsx(u,{opened:n,onClose:()=>s(!1),fullScreen:o,children:e.jsxs(d,{children:[e.jsx(i,{children:"App clip content goes here"}),e.jsx(a,{onClick:()=>s(!1),children:"Close"})]})})]})};t.__docgenInfo={description:"",methods:[],displayName:"Basic"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const w=["Basic"];export{t as Basic,w as __namedExportsOrder,E as default};
