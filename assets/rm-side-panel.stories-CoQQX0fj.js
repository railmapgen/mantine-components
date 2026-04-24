import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{$ as n,B as r,D as i,O as a,Q as o,Y as s,Z as c,g as l,h as u,i as d,j as f,r as p,s as m,tt as h,v as g,wt as _}from"./iframe-C0bvZa1t.js";var v,y,b,x,S;t((()=>{d(),m(),r(),v=e(_(),1),f(),y=h(),b={title:`RMSidePanel`,component:p},x=()=>{let[e,t]=(0,v.useState)(!1),[r,d]=(0,v.useState)(!1);return(0,y.jsxs)(u,{h:300,children:[(0,y.jsx)(g,{children:(0,y.jsx)(s,{onClick:()=>t(!0),children:`Show side panel`})}),(0,y.jsxs)(l,{children:[(0,y.jsx)(c,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan.`}),(0,y.jsx)(p,{opened:e,onClose:()=>t(!1),overlay:r,title:`My Side Panel`,withCloseButton:!0,children:(0,y.jsx)(o,{gap:`xs`,px:`xs`,py:4,children:(0,y.jsx)(n,{variant:`default`,onClick:()=>d(e=>!e),children:r?(0,y.jsx)(a,{}):(0,y.jsx)(i,{})})})})]})]})},x.__docgenInfo={description:``,methods:[],displayName:`Basic`},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);
  return <RMPage h={300}>
            <RMPageHeader>
                <Button onClick={() => setIsOpen(true)}>Show side panel</Button>
            </RMPageHeader>
            <RMPageBody>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit.
                    Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium
                    urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit.
                    Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa
                    vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor
                    blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl.
                    Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris,
                    sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend
                    ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat
                    nibh eu cursus accumsan.
                </Text>
                <RMSidePanel opened={isOpen} onClose={() => setIsOpen(false)} overlay={isOverlay} title="My Side Panel" withCloseButton>
                    <Group gap="xs" px="xs" py={4}>
                        <ActionIcon variant="default" onClick={() => setIsOverlay(prevState => !prevState)}>
                            {isOverlay ? <MdOutlineLayersClear /> : <MdOutlineLayers />}
                        </ActionIcon>
                    </Group>
                </RMSidePanel>
            </RMPageBody>
        </RMPage>;
}`,...x.parameters?.docs?.source}}},S=[`Basic`]}))();export{x as Basic,S as __namedExportsOrder,b as default};