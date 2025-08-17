import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as D,d as K,R as Q,a as U,b as Y,e as J,f as X,g as Z,h as ee}from"./rm-section-Bwh_3tFv.js";import{R as te}from"./rm-env-badge-uaqF6Fdx.js";import{r as I}from"./index-zC88jLnc.js";import{r as ie}from"./index-0yr9KlQE.js";import{u as w,t as se,f as q,s as re,a as oe,B as N,b as ne}from"./factory-DBu1aocQ.js";import{p as ae}from"./polymorphic-factory-Cvo93ihN.js";import{I as g}from"./Input-kGnlTb5g.js";import{G as le}from"./Group-BytV6m82.js";import{B as H}from"./Button-Yx7TU9Wg.js";import{D as ce}from"./Divider-DsFbu6T7.js";import"./Flex-Cq6OJ826.js";import"./create-optional-context-CKgXOEcT.js";import"./CloseButton-BLoVBDfI.js";import"./UnstyledButton-qbCLZWTS.js";import"./use-id-Bbj4jMpb.js";import"./Loader-d2fvkdys.js";import"./Transition-B7jYxShf.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";function ue(s,r,e){const i=w(s,r,e),{label:o,description:n,error:p,required:d,classNames:a,styles:l,className:y,unstyled:c,__staticSelector:m,__stylesApiProps:f,errorProps:v,labelProps:x,descriptionProps:S,wrapperProps:b,id:M,size:j,style:$,inputContainer:C,inputWrapperOrder:F,withAsterisk:k,variant:B,vars:fe,mod:E,attributes:_,...V}=i,{styleProps:G,rest:L}=se(V),O={label:o,description:n,error:p,required:d,classNames:a,className:y,__staticSelector:m,__stylesApiProps:f||i,errorProps:v,labelProps:x,descriptionProps:S,unstyled:c,styles:l,size:j,style:$,inputContainer:C,inputWrapperOrder:F,withAsterisk:k,variant:B,id:M,mod:E,attributes:_,...b};return{...L,classNames:a,styles:l,unstyled:c,wrapperProps:{...O,...G},inputProps:{required:d,classNames:a,styles:l,unstyled:c,size:j,__staticSelector:m,__stylesApiProps:f||i,error:p,variant:B,id:M,attributes:_}}}const pe={__staticSelector:"InputBase",withAria:!0},h=ae((s,r)=>{const{inputProps:e,wrapperProps:i,...o}=ue("InputBase",pe,s);return t.jsx(g.Wrapper,{...i,children:t.jsx(g,{...e,...o,ref:r})})});h.classes={...g.classes,...g.Wrapper.classes};h.displayName="@mantine/core/InputBase";const R=q((s,r)=>{const e=w("TextInput",null,s);return t.jsx(h,{component:"input",ref:r,...e,__staticSelector:"TextInput"})});R.classes=h.classes;R.displayName="@mantine/core/TextInput";const de=["h1","h2","h3","h4","h5","h6"],me=["xs","sm","md","lg","xl"];function ge(s,r){const e=r!==void 0?r:`h${s}`;return de.includes(e)?{fontSize:`var(--mantine-${e}-font-size)`,fontWeight:`var(--mantine-${e}-font-weight)`,lineHeight:`var(--mantine-${e}-line-height)`}:me.includes(e)?{fontSize:`var(--mantine-font-size-${e})`,fontWeight:`var(--mantine-h${s}-font-weight)`,lineHeight:`var(--mantine-h${s}-line-height)`}:{fontSize:re(e),fontWeight:`var(--mantine-h${s}-font-weight)`,lineHeight:`var(--mantine-h${s}-line-height)`}}var A={root:"m_8a5d1357"};const he={order:1},ye=ne((s,{order:r,size:e,lineClamp:i,textWrap:o})=>{const n=ge(r||1,e);return{root:{"--title-fw":n.fontWeight,"--title-lh":n.lineHeight,"--title-fz":n.fontSize,"--title-line-clamp":typeof i=="number"?i.toString():void 0,"--title-text-wrap":o}}}),P=q((s,r)=>{const e=w("Title",he,s),{classNames:i,className:o,style:n,styles:p,unstyled:d,order:a,vars:l,size:y,variant:c,lineClamp:m,textWrap:f,mod:v,attributes:x,...S}=e,b=oe({name:"Title",props:e,classes:A,className:o,style:n,classNames:i,styles:p,unstyled:d,attributes:x,vars:l,varsResolver:ye});return[1,2,3,4,5,6].includes(a)?t.jsx(N,{...b("root"),component:`h${a}`,variant:c,ref:r,mod:[{order:a,"data-line-clamp":typeof m=="number"},v],size:y,...S}):null});P.classes=A;P.displayName="@mantine/core/Title";const Ce={title:"RMLayout"},u=()=>{const[s,r]=ie.useState(),e=i=>s===i?{border:"1px dashed"}:void 0;return t.jsx(N,{w:500,h:500,style:{border:"2px solid darkred"},children:t.jsxs(D,{style:e("window"),children:[t.jsxs(K,{style:e("window-header"),children:[t.jsx(P,{children:"App Title"}),t.jsx(te,{env:I.getEnv(),ver:I.getAppVersion()})]}),t.jsxs(Q,{style:e("page"),children:[t.jsx(U,{style:e("page-header"),children:t.jsx(R,{label:"Filter"})}),t.jsxs(Y,{direction:"column",m:"xs",style:{overflowY:"auto",...e("page-body")},children:[t.jsx(le,{gap:"xs",children:["window","window-header","page","page-header","page-body","page-footer","section","section-header","section-body"].map(i=>t.jsx(H,{size:"xs",onClick:()=>r(i),children:i},i))}),Array.from({length:3}).map((i,o)=>t.jsxs(J,{style:e("section"),children:[t.jsxs(X,{style:e("section-header"),children:["Section ",o+1]}),t.jsx(Z,{style:e("section-body"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan."})]},o))]}),t.jsx(ce,{}),t.jsx(ee,{style:e("page-footer"),children:t.jsx(H,{ml:"auto",children:"OK"})})]})]})})};u.__docgenInfo={description:"",methods:[],displayName:"Basic"};var z,T,W;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(W=(T=u.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const Fe=["Basic"];export{u as Basic,Fe as __namedExportsOrder,Ce as default};
