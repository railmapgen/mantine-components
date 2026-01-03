import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as P,d as H,R as z,a as q,b as T,e as W,f as $,g as _,h as C}from"./rm-section-D1ZQNkzq.js";import{R as N}from"./rm-env-badge-NaquzPbg.js";import{r as c}from"./index-DOoHdXAc.js";import{r as E}from"./index-CtNveh2g.js";import{t as F,f as I,u as k,a as A,B as h,b as V}from"./factory-D3GP0lqX.js";import{T as G}from"./TextInput-CuRzFiym.js";import{G as L}from"./Group-CU2TVMzi.js";import{B as d}from"./Button-TbJPQxKQ.js";import{D}from"./Divider-7Pj2GAjI.js";import"./Flex-DY9nctI2.js";import"./polymorphic-factory-HSwuqV91.js";import"./Input-CAWFm2Wq.js";import"./create-optional-context-D4-ce1vg.js";import"./CloseButton-B_Ajl2k1.js";import"./UnstyledButton-mlruabYp.js";import"./use-id-CaNofXUC.js";import"./Loader-CnhYwJ1F.js";import"./Transition-DPNlU8_1.js";import"./index-C8fqpVMD.js";import"./index-LwkqeIug.js";const O=["h1","h2","h3","h4","h5","h6"],K=["xs","sm","md","lg","xl"];function Q(s,o){const e=o!==void 0?o:`h${s}`;return O.includes(e)?{fontSize:`var(--mantine-${e}-font-size)`,fontWeight:`var(--mantine-${e}-font-weight)`,lineHeight:`var(--mantine-${e}-line-height)`}:K.includes(e)?{fontSize:`var(--mantine-font-size-${e})`,fontWeight:`var(--mantine-h${s}-font-weight)`,lineHeight:`var(--mantine-h${s}-line-height)`}:{fontSize:F(e),fontWeight:`var(--mantine-h${s}-font-weight)`,lineHeight:`var(--mantine-h${s}-line-height)`}}var f={root:"m_8a5d1357"};const U={order:1},Y=V((s,{order:o,size:e,lineClamp:i,textWrap:r})=>{const n=Q(o||1,e);return{root:{"--title-fw":n.fontWeight,"--title-lh":n.lineHeight,"--title-fz":n.fontSize,"--title-line-clamp":typeof i=="number"?i.toString():void 0,"--title-text-wrap":r}}}),u=I((s,o)=>{const e=k("Title",U,s),{classNames:i,className:r,style:n,styles:y,unstyled:v,order:l,vars:x,size:b,variant:S,lineClamp:R,textWrap:J,mod:M,attributes:w,...j}=e,B=A({name:"Title",props:e,classes:f,className:r,style:n,classNames:i,styles:y,unstyled:v,attributes:w,vars:x,varsResolver:Y});return[1,2,3,4,5,6].includes(l)?t.jsx(h,{...B("root"),component:`h${l}`,variant:S,ref:o,mod:[{order:l,"data-line-clamp":typeof R=="number"},M],size:b,...j}):null});u.classes=f;u.displayName="@mantine/core/Title";const xe={title:"RMLayout"},a=()=>{const[s,o]=E.useState(),e=i=>s===i?{border:"1px dashed"}:void 0;return t.jsx(h,{w:500,h:500,style:{border:"2px solid darkred"},children:t.jsxs(P,{style:e("window"),children:[t.jsxs(H,{style:e("window-header"),children:[t.jsx(u,{children:"App Title"}),t.jsx(N,{env:c.getEnv(),ver:c.getAppVersion()})]}),t.jsxs(z,{style:e("page"),children:[t.jsx(q,{style:e("page-header"),children:t.jsx(G,{label:"Filter"})}),t.jsxs(T,{direction:"column",m:"xs",style:{overflowY:"auto",...e("page-body")},children:[t.jsx(L,{gap:"xs",children:["window","window-header","page","page-header","page-body","page-footer","section","section-header","section-body"].map(i=>t.jsx(d,{size:"xs",onClick:()=>o(i),children:i},i))}),Array.from({length:3}).map((i,r)=>t.jsxs(W,{style:e("section"),children:[t.jsxs($,{style:e("section-header"),children:["Section ",r+1]}),t.jsx(_,{style:e("section-body"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan."})]},r))]}),t.jsx(D,{}),t.jsx(C,{style:e("page-footer"),children:t.jsx(d,{ml:"auto",children:"OK"})})]})]})})};a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [highlightSection, setHighlightSection] = useState<string>();
  const getStyle = (section: string) => {
    return highlightSection === section ? {
      border: '1px dashed'
    } : undefined;
  };
  return <Box w={500} h={500} style={{
    border: '2px solid darkred'
  }}>
            <RMWindow style={getStyle('window')}>
                <RMWindowHeader style={getStyle('window-header')}>
                    <Title>App Title</Title>
                    <RMEnvBadge env={rmgRuntime.getEnv()} ver={rmgRuntime.getAppVersion()} />
                </RMWindowHeader>
                <RMPage style={getStyle('page')}>
                    <RMPageHeader style={getStyle('page-header')}>
                        <TextInput label="Filter" />
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const be=["Basic"];export{a as Basic,be as __namedExportsOrder,xe as default};
