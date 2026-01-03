import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as P,d as A,R as H,a as T,b as z,e as q,f as W,g as k,h as I}from"./rm-section-BLfagGcR.js";import{R as $}from"./rm-env-badge-NaquzPbg.js";import{r as d}from"./index-DOoHdXAc.js";import{r as p}from"./index-CtNveh2g.js";import{t as _,f as N,u as E,a as F,B as y,b as V}from"./factory-D3GP0lqX.js";import{T as G}from"./TextInput-CTHvOt5o.js";import{S as L}from"./Switch-DH60EKvS.js";import{G as D}from"./Group-CU2TVMzi.js";import{B as m}from"./Button-TbJPQxKQ.js";import{D as O}from"./Divider-7Pj2GAjI.js";import"./Flex-DY9nctI2.js";import"./polymorphic-factory-HSwuqV91.js";import"./InputsGroupFieldset-CTyB2uRw.js";import"./create-optional-context-D4-ce1vg.js";import"./CloseButton-B_Ajl2k1.js";import"./UnstyledButton-mlruabYp.js";import"./use-id-CaNofXUC.js";import"./use-uncontrolled-dMZSVc2D.js";import"./Loader-CnhYwJ1F.js";import"./Transition-DPNlU8_1.js";import"./index-C8fqpVMD.js";import"./index-LwkqeIug.js";const K=["h1","h2","h3","h4","h5","h6"],Q=["xs","sm","md","lg","xl"];function U(o,r){const t=r!==void 0?r:`h${o}`;return K.includes(t)?{fontSize:`var(--mantine-${t}-font-size)`,fontWeight:`var(--mantine-${t}-font-weight)`,lineHeight:`var(--mantine-${t}-line-height)`}:Q.includes(t)?{fontSize:`var(--mantine-font-size-${t})`,fontWeight:`var(--mantine-h${o}-font-weight)`,lineHeight:`var(--mantine-h${o}-line-height)`}:{fontSize:_(t),fontWeight:`var(--mantine-h${o}-font-weight)`,lineHeight:`var(--mantine-h${o}-line-height)`}}var v={root:"m_8a5d1357"};const Y={order:1},J=V((o,{order:r,size:t,lineClamp:n,textWrap:s})=>{const i=U(r||1,t);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":typeof n=="number"?n.toString():void 0,"--title-text-wrap":s}}}),u=N((o,r)=>{const t=E("Title",Y,o),{classNames:n,className:s,style:i,styles:l,unstyled:x,order:c,vars:S,size:b,variant:R,lineClamp:M,textWrap:X,mod:w,attributes:j,...B}=t,C=F({name:"Title",props:t,classes:v,className:s,style:i,classNames:n,styles:l,unstyled:x,attributes:j,vars:S,varsResolver:J});return[1,2,3,4,5,6].includes(c)?e.jsx(y,{...C("root"),component:`h${c}`,variant:R,ref:r,mod:[{order:c,"data-line-clamp":typeof M=="number"},w],size:b,...B}):null});u.classes=v;u.displayName="@mantine/core/Title";const Re={title:"RMLayout"},a=()=>{const[o,r]=p.useState(),[t,n]=p.useState(!1),s=i=>o===i?{border:"1px dashed"}:void 0;return e.jsx(y,{w:500,h:500,style:{border:"2px solid darkred"},children:e.jsxs(P,{isAppClip:t,style:s("window"),children:[e.jsxs(A,{style:s("window-header"),children:[e.jsx(u,{children:"App Title"}),e.jsx($,{env:d.getEnv(),ver:d.getAppVersion()})]}),e.jsxs(H,{style:s("page"),children:[e.jsxs(T,{style:s("page-header"),children:[e.jsx(G,{label:"Filter"}),e.jsx(L,{label:"is AppClip?",checked:t,onChange:({currentTarget:{checked:i}})=>n(i),ml:"xs"})]}),e.jsxs(z,{direction:"column",m:"xs",style:{overflowY:"auto",...s("page-body")},children:[e.jsx(D,{gap:"xs",children:["window","window-header","page","page-header","page-body","page-footer","section","section-header","section-body"].map(i=>e.jsx(m,{size:"xs",onClick:()=>r(i),children:i},i))}),Array.from({length:3}).map((i,l)=>e.jsxs(q,{style:s("section"),children:[e.jsxs(W,{style:s("section-header"),children:["Section ",l+1]}),e.jsx(k,{style:s("section-body"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan."})]},l))]}),e.jsx(O,{}),e.jsx(I,{style:s("page-footer"),children:e.jsx(m,{ml:"auto",children:"OK"})})]})]})})};a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [highlightSection, setHighlightSection] = useState<string>();
  const [isAppClip, setIsAppClip] = useState(false);
  const getStyle = (section: string) => {
    return highlightSection === section ? {
      border: '1px dashed'
    } : undefined;
  };
  return <Box w={500} h={500} style={{
    border: '2px solid darkred'
  }}>
            <RMWindow isAppClip={isAppClip} style={getStyle('window')}>
                <RMWindowHeader style={getStyle('window-header')}>
                    <Title>App Title</Title>
                    <RMEnvBadge env={rmgRuntime.getEnv()} ver={rmgRuntime.getAppVersion()} />
                </RMWindowHeader>
                <RMPage style={getStyle('page')}>
                    <RMPageHeader style={getStyle('page-header')}>
                        <TextInput label="Filter" />
                        <Switch label="is AppClip?" checked={isAppClip} onChange={({
            currentTarget: {
              checked
            }
          }) => setIsAppClip(checked)} ml="xs" />
                    </RMPageHeader>
                    <RMPageBody direction="column" m="xs" style={{
          overflowY: 'auto',
          ...getStyle('page-body')
        }}>
                        <Group gap="xs">
                            {['window', 'window-header', 'page', 'page-header', 'page-body', 'page-footer', 'section', 'section-header', 'section-body'].map(section => <Button key={section} size="xs" onClick={() => setHighlightSection(section)}>
                                    {section}
                                </Button>)}
                        </Group>

                        {Array.from({
            length: 3
          }).map((_, i) => <RMSection key={i} style={getStyle('section')}>
                                <RMSectionHeader style={getStyle('section-header')}>Section {i + 1}</RMSectionHeader>
                                <RMSectionBody style={getStyle('section-body')}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis
                                    convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus
                                    sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id
                                    consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit,
                                    vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate
                                    convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor
                                    dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur
                                    tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce
                                    euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at
                                    scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi.
                                    Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque
                                    feugiat nibh eu cursus accumsan.
                                </RMSectionBody>
                            </RMSection>)}
                    </RMPageBody>
                    <Divider />
                    <RMPageFooter style={getStyle('page-footer')}>
                        <Button ml="auto">OK</Button>
                    </RMPageFooter>
                </RMPage>
            </RMWindow>
        </Box>;
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Me=["Basic"];export{a as Basic,Me as __namedExportsOrder,Re as default};
