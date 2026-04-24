import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{B as n,H as r,I as i,L as a,M as o,N as s,Q as c,U as l,V as u,Y as d,_ as f,c as p,d as m,et as h,f as g,g as _,h as v,l as y,m as b,p as x,q as S,tt as C,u as w,v as T,wt as E,y as D}from"./iframe-C0bvZa1t.js";var O,k,A,j,M;t((()=>{w(),n(),o(),i(),D(),O=e(E(),1),b(),k=C(),A={title:`RMLayout`},j=()=>{let[e,t]=(0,O.useState)(),[n,i]=(0,O.useState)(!1),o=t=>e===t?{border:`1px dashed`}:void 0;return(0,k.jsx)(h,{w:500,h:500,style:{border:`2px solid darkred`},children:(0,k.jsxs)(p,{isAppClip:n,style:o(`window`),children:[(0,k.jsxs)(y,{style:o(`window-header`),children:[(0,k.jsx)(u,{children:`App Title`}),(0,k.jsx)(s,{env:a.getEnv(),ver:a.getAppVersion()})]}),(0,k.jsxs)(v,{style:o(`page`),children:[(0,k.jsxs)(T,{style:o(`page-header`),children:[(0,k.jsx)(r,{label:`Filter`}),(0,k.jsx)(l,{label:`is AppClip?`,checked:n,onChange:({currentTarget:{checked:e}})=>i(e),ml:`xs`})]}),(0,k.jsxs)(_,{direction:`column`,m:`xs`,style:{overflowY:`auto`,...o(`page-body`)},children:[(0,k.jsx)(c,{gap:`xs`,children:[`window`,`window-header`,`page`,`page-header`,`page-body`,`page-footer`,`section`,`section-header`,`section-body`].map(e=>(0,k.jsx)(d,{size:`xs`,onClick:()=>t(e),children:e},e))}),Array.from({length:3}).map((e,t)=>(0,k.jsxs)(m,{style:o(`section`),children:[(0,k.jsxs)(x,{style:o(`section-header`),children:[`Section `,t+1]}),(0,k.jsx)(g,{style:o(`section-body`),children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis convallis hendrerit. Morbi pulvinar at justo eu sollicitudin. Morbi a massa rhoncus sapien fringilla facilisis ac pretium urna. Quisque feugiat risus nulla, id consequat eros pretium in. Vestibulum vel vestibulum elit. Nulla justo velit, vehicula nec hendrerit vitae, eleifend ut mi. Ut a elit condimentum massa vulputate convallis imperdiet eget urna. Integer suscipit, arcu non porta malesuada, tortor dolor blandit ex, a finibus felis nisl in enim. In in quam pretium, consectetur tortor non, placerat nisl. Sed tincidunt porttitor velit vitae lobortis. Fusce euismod lacinia porta. Proin sed porta mauris, sed rhoncus lorem. Nulla at scelerisque massa. Cras lorem enim, congue non felis nec, eleifend ornare mi. Curabitur sagittis lectus diam, quis lobortis urna imperdiet et. Pellentesque feugiat nibh eu cursus accumsan.`})]},t))]}),(0,k.jsx)(S,{}),(0,k.jsx)(f,{style:o(`page-footer`),children:(0,k.jsx)(d,{ml:`auto`,children:`OK`})})]})]})})},j.__docgenInfo={description:``,methods:[],displayName:`Basic`},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}},M=[`Basic`]}))();export{j as Basic,M as __namedExportsOrder,A as default};