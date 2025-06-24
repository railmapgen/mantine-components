import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./rm-side-panel-B3VDKtqk.js";import{R as x,a as h,b as P}from"./rm-section-WBTC80wu.js";import{r as s}from"./index-D4lIrffr.js";import{b as g,c as M,d as b,e as O}from"./index-OZ_Xqj2h.js";import{B as I}from"./Button-D9RIaE8o.js";import{T as r}from"./Text-N-H0bAlP.js";import{G as j}from"./Group-Dks2HCIT.js";import{A as t}from"./ActionIcon-Di4PO6Dg.js";import{D as C}from"./Divider-Y_UVNrCQ.js";import"./factory-b8CrjD1V.js";import"./Flex-DOP4woUU.js";import"./polymorphic-factory-C_UCKN0F.js";import"./Loader-CJeIIMKk.js";import"./Transition-tPwwHQ-V.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./UnstyledButton-M9A3OJud.js";const U={title:"RMSidePanel",component:c},i=()=>{const[d,n]=s.useState(!1),[m,p]=s.useState(!1),[a,f]=s.useState(!1);return e.jsxs(x,{h:300,children:[e.jsx(h,{children:e.jsx(I,{onClick:()=>n(!0),children:"Show side panel"})}),e.jsxs(P,{children:[e.jsx(r,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan."}),e.jsxs(c,{opened:d,onClose:()=>n(!1),pinned:m,overlay:a,children:[e.jsxs(j,{gap:"xs",px:"xs",py:4,children:[e.jsx(r,{fw:500,children:"Side Panel"}),e.jsx(t,{variant:"default",ml:"auto",onClick:()=>p(!0),children:e.jsx(g,{})}),e.jsx(t,{variant:"default",onClick:()=>f(v=>!v),children:a?e.jsx(M,{}):e.jsx(b,{})}),e.jsx(t,{variant:"default",onClick:()=>n(!1),children:e.jsx(O,{})})]}),e.jsx(C,{})]})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};var o,l,u;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
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
                <RMSidePanel opened={isOpen} onClose={() => setIsOpen(false)} pinned={isPinned} overlay={isOverlay}>
                    <Group gap="xs" px="xs" py={4}>
                        <Text fw={500}>Side Panel</Text>
                        <ActionIcon variant="default" ml="auto" onClick={() => setIsPinned(true)}>
                            <MdOutlinePushPin />
                        </ActionIcon>
                        <ActionIcon variant="default" onClick={() => setIsOverlay(prevState => !prevState)}>
                            {isOverlay ? <MdOutlineLayersClear /> : <MdOutlineLayers />}
                        </ActionIcon>
                        <ActionIcon variant="default" onClick={() => setIsOpen(false)}>
                            <MdOutlineClose />
                        </ActionIcon>
                    </Group>
                    <Divider />
                </RMSidePanel>
            </RMPageBody>
        </RMPage>;
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const V=["Basic"];export{i as Basic,V as __namedExportsOrder,U as default};
