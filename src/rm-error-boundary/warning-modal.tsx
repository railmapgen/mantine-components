import { Button, Divider, Group, Modal, Stack, Text } from '@mantine/core';
import { useState } from 'react';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { downloadAs } from './utils';

type WarningModalProps = {
    opened: boolean;
    onClose: () => void;
};

export default function WarningModal({ opened, onClose }: WarningModalProps) {
    const [isConfirmButtonLoading, setIsConfirmButtonLoading] = useState(false);

    const handleConfirm = () => {
        setIsConfirmButtonLoading(true);

        // dump
        const storage = rmgRuntime.storage.getAll();
        const appName = rmgRuntime.getAppName();
        const fileName = `${appName}_BACKUP_${new Date().toISOString()}.json`;
        downloadAs(fileName, 'application/json', JSON.stringify(storage));

        // clear
        rmgRuntime.storage.clear();

        setTimeout(() => {
            window.location.reload();
        }, 2000);
    };

    return (
        <Modal opened={opened} onClose={onClose} title="Warning 警告" centered>
            <Stack gap="sm">
                <Text>
                    Are you sure you want to reset the app? The webpage local storage for this app will be cleared. A
                    copy of the local storage will be downloaded and it may be used for restoration (varies with app).
                </Text>
                <Text>
                    確定重設該應用程式嗎？應用程式的網頁本地儲存將會被清除。本地儲存的副本可供下載及用於復原（因應用程式而異）。
                </Text>
                <Text>
                    确定重置本应用程序吗？应用程序的网页本地存储将会被清除。本地存储的拷贝可供下载以及用于还原（因应用程序而異）。
                </Text>

                <Divider />

                <Group gap="sm">
                    <Button variant="default" ml="auto">
                        Cancel
                    </Button>
                    <Button color="red" onClick={handleConfirm} loading={isConfirmButtonLoading}>
                        Confirm and reload
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
}
