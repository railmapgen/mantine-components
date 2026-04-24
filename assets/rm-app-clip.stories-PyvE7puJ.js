import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{B as n,J as r,Q as i,R as a,W as o,Y as s,Z as c,tt as l,wt as u,z as d}from"./iframe-C0bvZa1t.js";var f,p,m,h,g;t((()=>{d(),n(),f=e(u(),1),p=l(),m={title:`RMAppClip`,component:a},h=()=>{let[e,t]=(0,f.useState)(!1),[n,l]=(0,f.useState)(!1);return(0,p.jsxs)(o,{p:`sm`,children:[(0,p.jsxs)(c,{children:[`This component wraps a `,(0,p.jsx)(r,{children:`Modal`}),` component. To change the size, please refer to the Mantine Modal's documentation.`]}),(0,p.jsxs)(i,{children:[(0,p.jsx)(s,{onClick:()=>{t(!0),l(!1)},children:`Default`}),(0,p.jsx)(s,{onClick:()=>{t(!0),l(!0)},children:`Fullscreen`})]}),(0,p.jsx)(a,{opened:e,onClose:()=>t(!1),fullScreen:n,children:(0,p.jsxs)(o,{children:[(0,p.jsx)(c,{children:`App clip content goes here`}),(0,p.jsx)(s,{onClick:()=>t(!1),children:`Close`})]})})]})},h.__docgenInfo={description:``,methods:[],displayName:`Basic`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g=[`Basic`]}))();export{h as Basic,g as __namedExportsOrder,m as default};