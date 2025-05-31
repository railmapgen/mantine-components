import { RMSidePanel } from './rm-side-panel';
import { RMPage, RMPageBody, RMPageHeader } from '../rm-layout';
import { ActionIcon, Button, Divider, Group, Text } from '@mantine/core';
import { useState } from 'react';
import { MdOutlineClose, MdOutlineLayers, MdOutlineLayersClear, MdOutlinePushPin } from 'react-icons/md';

export default {
    title: 'RMSidePanel',
    component: RMSidePanel,
};

export const Basic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false);

    return (
        <RMPage h={300}>
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
        </RMPage>
    );
};
