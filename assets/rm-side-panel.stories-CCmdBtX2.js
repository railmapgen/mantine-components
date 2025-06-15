import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./rm-side-panel-CkMwzYoy.js";import{R as x,a as h,b as P}from"./rm-section-ig896WJ-.js";import{r as s}from"./index-DatCARk7.js";import{b as g,c as M,d as b,e as O}from"./index-DC8G45Dd.js";import{B as I}from"./Button-CHHP3YRE.js";import{T as r}from"./Text-CN9iupiY.js";import{G as j}from"./Group-DoWaM-bj.js";import{A as t}from"./ActionIcon-BT1RidIz.js";import{D as C}from"./Divider-C4B8xHPf.js";import"./polymorphic-factory-BdIovDLJ.js";import"./Flex-uLnUA3Mm.js";import"./Loader-Bt0wSaWu.js";import"./index-RHVwCB2K.js";import"./index-C9zM6nuj.js";const H={title:"RMSidePanel",component:c},i=()=>{const[d,n]=s.useState(!1),[m,p]=s.useState(!1),[a,f]=s.useState(!1);return e.jsxs(x,{h:300,children:[e.jsx(h,{children:e.jsx(I,{onClick:()=>n(!0),children:"Show side panel"})}),e.jsxs(P,{children:[e.jsx(r,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan."}),e.jsxs(c,{opened:d,onClose:()=>n(!1),pinned:m,overlay:a,children:[e.jsxs(j,{gap:"xs",px:"xs",py:4,children:[e.jsx(r,{fw:500,children:"Side Panel"}),e.jsx(t,{variant:"default",ml:"auto",onClick:()=>p(!0),children:e.jsx(g,{})}),e.jsx(t,{variant:"default",onClick:()=>f(v=>!v),children:a?e.jsx(M,{}):e.jsx(b,{})}),e.jsx(t,{variant:"default",onClick:()=>n(!1),children:e.jsx(O,{})})]}),e.jsx(C,{})]})]})]})};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};var o,l,u;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const F=["Basic"];export{i as Basic,F as __namedExportsOrder,H as default};
