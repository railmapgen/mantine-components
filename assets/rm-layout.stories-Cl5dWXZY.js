import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as O,d as D,R as K,a as Q,b as U,e as Y,f as J,g as X,h as Z}from"./rm-section-WBTC80wu.js";import{R as ee}from"./rm-env-badge-CrCy_dBT.js";import{r as B}from"./index-zC88jLnc.js";import{r as te}from"./index-D4lIrffr.js";import{u as b,t as ie,f as T,s as se,a as re,B as W,b as oe}from"./factory-b8CrjD1V.js";import{p as ne}from"./polymorphic-factory-C_UCKN0F.js";import{I as g}from"./Input-DHSZe3FX.js";import{G as ae}from"./Group-Dks2HCIT.js";import{B as _}from"./Button-D9RIaE8o.js";import{D as le}from"./Divider-Y_UVNrCQ.js";import"./Flex-DOP4woUU.js";import"./CloseButton-BbY6H65y.js";import"./UnstyledButton-M9A3OJud.js";import"./use-id-B8WzDov0.js";import"./Loader-CJeIIMKk.js";import"./Transition-tPwwHQ-V.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";function ce(s,r,e){const i=b(s,r,e),{label:o,description:n,error:p,required:d,classNames:a,styles:l,className:y,unstyled:c,__staticSelector:m,__stylesApiProps:f,errorProps:v,labelProps:x,descriptionProps:S,wrapperProps:N,id:P,size:M,style:$,inputContainer:A,inputWrapperOrder:C,withAsterisk:F,variant:j,vars:fe,mod:k,...E}=i,{styleProps:V,rest:G}=ie(E),L={label:o,description:n,error:p,required:d,classNames:a,className:y,__staticSelector:m,__stylesApiProps:f||i,errorProps:v,labelProps:x,descriptionProps:S,unstyled:c,styles:l,size:M,style:$,inputContainer:A,inputWrapperOrder:C,withAsterisk:F,variant:j,id:P,mod:k,...N};return{...G,classNames:a,styles:l,unstyled:c,wrapperProps:{...L,...V},inputProps:{required:d,classNames:a,styles:l,unstyled:c,size:M,__staticSelector:m,__stylesApiProps:f||i,error:p,variant:j,id:P}}}const ue={__staticSelector:"InputBase",withAria:!0},h=ne((s,r)=>{const{inputProps:e,wrapperProps:i,...o}=ce("InputBase",ue,s);return t.jsx(g.Wrapper,{...i,children:t.jsx(g,{...e,...o,ref:r})})});h.classes={...g.classes,...g.Wrapper.classes};h.displayName="@mantine/core/InputBase";const pe={},w=T((s,r)=>{const e=b("TextInput",pe,s);return t.jsx(h,{component:"input",ref:r,...e,__staticSelector:"TextInput"})});w.classes=h.classes;w.displayName="@mantine/core/TextInput";const de=["h1","h2","h3","h4","h5","h6"],me=["xs","sm","md","lg","xl"];function ge(s,r){const e=r!==void 0?r:`h${s}`;return de.includes(e)?{fontSize:`var(--mantine-${e}-font-size)`,fontWeight:`var(--mantine-${e}-font-weight)`,lineHeight:`var(--mantine-${e}-line-height)`}:me.includes(e)?{fontSize:`var(--mantine-font-size-${e})`,fontWeight:`var(--mantine-h${s}-font-weight)`,lineHeight:`var(--mantine-h${s}-line-height)`}:{fontSize:se(e),fontWeight:`var(--mantine-h${s}-font-weight)`,lineHeight:`var(--mantine-h${s}-line-height)`}}var q={root:"m_8a5d1357"};const he={order:1},ye=oe((s,{order:r,size:e,lineClamp:i,textWrap:o})=>{const n=ge(r,e);return{root:{"--title-fw":n.fontWeight,"--title-lh":n.lineHeight,"--title-fz":n.fontSize,"--title-line-clamp":typeof i=="number"?i.toString():void 0,"--title-text-wrap":o}}}),R=T((s,r)=>{const e=b("Title",he,s),{classNames:i,className:o,style:n,styles:p,unstyled:d,order:a,vars:l,size:y,variant:c,lineClamp:m,textWrap:f,mod:v,...x}=e,S=re({name:"Title",props:e,classes:q,className:o,style:n,classNames:i,styles:p,unstyled:d,vars:l,varsResolver:ye});return[1,2,3,4,5,6].includes(a)?t.jsx(W,{...S("root"),component:`h${a}`,variant:c,ref:r,mod:[{order:a,"data-line-clamp":typeof m=="number"},v],size:y,...x}):null});R.classes=q;R.displayName="@mantine/core/Title";const Ae={title:"RMLayout"},u=()=>{const[s,r]=te.useState(),e=i=>s===i?{border:"1px dashed"}:void 0;return t.jsx(W,{w:500,h:500,style:{border:"2px solid darkred"},children:t.jsxs(O,{style:e("window"),children:[t.jsxs(D,{style:e("window-header"),children:[t.jsx(R,{children:"App Title"}),t.jsx(ee,{env:B.getEnv(),ver:B.getAppVersion()})]}),t.jsxs(K,{style:e("page"),children:[t.jsx(Q,{style:e("page-header"),children:t.jsx(w,{label:"Filter"})}),t.jsxs(U,{direction:"column",m:"xs",style:{overflowY:"auto",...e("page-body")},children:[t.jsx(ae,{gap:"xs",children:["window","window-header","page","page-header","page-body","page-footer","section","section-header","section-body"].map(i=>t.jsx(_,{size:"xs",onClick:()=>r(i),children:i},i))}),Array.from({length:3}).map((i,o)=>t.jsxs(Y,{style:e("section"),children:[t.jsxs(J,{style:e("section-header"),children:["Section ",o+1]}),t.jsx(X,{style:e("section-body"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan."})]},o))]}),t.jsx(le,{}),t.jsx(Z,{style:e("page-footer"),children:t.jsx(_,{ml:"auto",children:"OK"})})]})]})})};u.__docgenInfo={description:"",methods:[],displayName:"Basic"};var I,H,z;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(z=(H=u.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};const Ce=["Basic"];export{u as Basic,Ce as __namedExportsOrder,Ae as default};
