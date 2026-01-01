import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as l}from"./rm-side-panel-BhyeYu32.js";import{R as p,a as d,b as f}from"./rm-section-7zC2I60q.js";import{r as a}from"./index-DhY--VwN.js";import{b as v,c as g}from"./index-C_sD7bKi.js";import{B as h}from"./Button-CT1i5DW6.js";import{T as x}from"./Text-BtUhYwqd.js";import{G as b}from"./Group-CsXTGfGU.js";import{A as M}from"./ActionIcon-DwJjFqnR.js";import"./factory-Dz5zdfK1.js";import"./CloseButton-BDRHaCxo.js";import"./polymorphic-factory-DHAvRJ8Q.js";import"./UnstyledButton-DLyQ_Te6.js";import"./Divider-paZDgB4Y.js";import"./Flex-DKBKjG43.js";import"./Loader-4rWs1S7X.js";import"./Transition-BoxEj6Uc.js";import"./index-CE4oAmmT.js";import"./index-BoxsY6nR.js";const H={title:"RMSidePanel",component:l},i=()=>{const[u,t]=a.useState(!1),[s,c]=a.useState(!1);return e.jsxs(p,{h:300,children:[e.jsx(d,{children:e.jsx(h,{onClick:()=>t(!0),children:"Show side panel"})}),e.jsxs(f,{children:[e.jsx(x,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan."}),e.jsx(l,{opened:u,onClose:()=>t(!1),overlay:s,title:"My Side Panel",withCloseButton:!0,children:e.jsx(b,{gap:"xs",px:"xs",py:4,children:e.jsx(M,{variant:"default",onClick:()=>c(m=>!m),children:s?e.jsx(v,{}):e.jsx(g,{})})})})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};var n,r,o;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(o=(r=i.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const F=["Basic"];export{i as Basic,F as __namedExportsOrder,H as default};
