import { RMWindow, RMWindowHeader } from './rm-window';
import { Box, Button, Divider, Group, TextInput, Title } from '@mantine/core';
import { RMEnvBadge } from '../rm-env-badge';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { RMPage, RMPageBody, RMPageFooter, RMPageHeader } from './rm-page';
import { useState } from 'react';
import { RMSection, RMSectionBody, RMSectionHeader } from './rm-section';

export default {
    title: 'RMLayout',
};

export const Basic = () => {
    const [highlightSection, setHighlightSection] = useState<string>();

    const getStyle = (section: string) => {
        return highlightSection === section ? { border: '1px dashed' } : undefined;
    };

    return (
        <Box w={500} h={500} style={{ border: '2px solid darkred' }}>
            <RMWindow style={getStyle('window')}>
                <RMWindowHeader style={getStyle('window-header')}>
                    <Title>App Title</Title>
                    <RMEnvBadge env={rmgRuntime.getEnv()} ver={rmgRuntime.getAppVersion()} />
                </RMWindowHeader>
                <RMPage style={getStyle('page')}>
                    <RMPageHeader style={getStyle('page-header')}>
                        <TextInput label="Filter" />
                    </RMPageHeader>
                    <RMPageBody direction="column" m="xs" style={{ overflowY: 'auto', ...getStyle('page-body') }}>
                        <Group gap="xs">
                            {[
                                'window',
                                'window-header',
                                'page',
                                'page-header',
                                'page-body',
                                'page-footer',
                                'section',
                                'section-header',
                                'section-body',
                            ].map(section => (
                                <Button key={section} size="xs" onClick={() => setHighlightSection(section)}>
                                    {section}
                                </Button>
                            ))}
                        </Group>

                        {Array.from({ length: 3 }).map((_, i) => (
                            <RMSection key={i} style={getStyle('section')}>
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
                            </RMSection>
                        ))}
                    </RMPageBody>
                    <Divider />
                    <RMPageFooter style={getStyle('page-footer')}>
                        <Button ml="auto">OK</Button>
                    </RMPageFooter>
                </RMPage>
            </RMWindow>
        </Box>
    );
};
