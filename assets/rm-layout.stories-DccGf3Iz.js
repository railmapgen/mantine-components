import{n as j,f as B,u as C,a as P,j as e,B as g,c as A,r as d,o as H,p as z,d as T,q as p,s as q,t as W,v as k,w as I,G as $,b as m,x as _,y as N,z as E,D as F,A as V}from"./iframe-CgbMc-h_.js";import{T as G}from"./TextInput-D5Z3jXsh.js";import"./preload-helper-PPVm8Dsz.js";const L=["h1","h2","h3","h4","h5","h6"],D=["xs","sm","md","lg","xl"];function O(n,a){const t=a!==void 0?a:`h${n}`;return L.includes(t)?{fontSize:`var(--mantine-${t}-font-size)`,fontWeight:`var(--mantine-${t}-font-weight)`,lineHeight:`var(--mantine-${t}-line-height)`}:D.includes(t)?{fontSize:`var(--mantine-font-size-${t})`,fontWeight:`var(--mantine-h${n}-font-weight)`,lineHeight:`var(--mantine-h${n}-line-height)`}:{fontSize:j(t),fontWeight:`var(--mantine-h${n}-font-weight)`,lineHeight:`var(--mantine-h${n}-line-height)`}}var h={root:"m_8a5d1357"};const K={order:1},Q=A((n,{order:a,size:t,lineClamp:o,textWrap:s})=>{const i=O(a||1,t);return{root:{"--title-fw":i.fontWeight,"--title-lh":i.lineHeight,"--title-fz":i.fontSize,"--title-line-clamp":typeof o=="number"?o.toString():void 0,"--title-text-wrap":s}}}),u=B((n,a)=>{const t=C("Title",K,n),{classNames:o,className:s,style:i,styles:l,unstyled:y,order:c,vars:f,size:v,variant:x,lineClamp:S,textWrap:U,mod:b,attributes:R,...w}=t,M=P({name:"Title",props:t,classes:h,className:s,style:i,classNames:o,styles:l,unstyled:y,attributes:R,vars:f,varsResolver:Q});return[1,2,3,4,5,6].includes(c)?e.jsx(g,{...M("root"),component:`h${c}`,variant:x,ref:a,mod:[{order:c,"data-line-clamp":typeof S=="number"},b],size:v,...w}):null});u.classes=h;u.displayName="@mantine/core/Title";const Z={title:"RMLayout"},r=()=>{const[n,a]=d.useState(),[t,o]=d.useState(!1),s=i=>n===i?{border:"1px dashed"}:void 0;return e.jsx(g,{w:500,h:500,style:{border:"2px solid darkred"},children:e.jsxs(H,{isAppClip:t,style:s("window"),children:[e.jsxs(z,{style:s("window-header"),children:[e.jsx(u,{children:"App Title"}),e.jsx(T,{env:p.getEnv(),ver:p.getAppVersion()})]}),e.jsxs(q,{style:s("page"),children:[e.jsxs(W,{style:s("page-header"),children:[e.jsx(G,{label:"Filter"}),e.jsx(k,{label:"is AppClip?",checked:t,onChange:({currentTarget:{checked:i}})=>o(i),ml:"xs"})]}),e.jsxs(I,{direction:"column",m:"xs",style:{overflowY:"auto",...s("page-body")},children:[e.jsx($,{gap:"xs",children:["window","window-header","page","page-header","page-body","page-footer","section","section-header","section-body"].map(i=>e.jsx(m,{size:"xs",onClick:()=>a(i),children:i},i))}),Array.from({length:3}).map((i,l)=>e.jsxs(_,{style:s("section"),children:[e.jsxs(N,{style:s("section-header"),children:["Section ",l+1]}),e.jsx(E,{style:s("section-body"),children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan."})]},l))]}),e.jsx(F,{}),e.jsx(V,{style:s("page-footer"),children:e.jsx(m,{ml:"auto",children:"OK"})})]})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Basic"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};const ee=["Basic"];export{r as Basic,ee as __namedExportsOrder,Z as default};
