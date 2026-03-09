import{L as n,r as a,j as e,s as u,t as c,b as d,w as m,T as p,G as v,N as f,O as g,P as h}from"./iframe-BD5WVMZF.js";import"./preload-helper-PPVm8Dsz.js";const M={title:"RMSidePanel",component:n},i=()=>{const[r,s]=a.useState(!1),[t,l]=a.useState(!1);return e.jsxs(u,{h:300,children:[e.jsx(c,{children:e.jsx(d,{onClick:()=>s(!0),children:"Show side panel"})}),e.jsxs(m,{children:[e.jsx(p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan."}),e.jsx(n,{opened:r,onClose:()=>s(!1),overlay:t,title:"My Side Panel",withCloseButton:!0,children:e.jsx(v,{gap:"xs",px:"xs",py:4,children:e.jsx(f,{variant:"default",onClick:()=>l(o=>!o),children:t?e.jsx(g,{}):e.jsx(h,{})})})})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const y=["Basic"];export{i as Basic,y as __namedExportsOrder,M as default};
