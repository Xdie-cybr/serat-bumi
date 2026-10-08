import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    webServer: {
        command: 'python3 -m http.server 8000',
        url: 'http://127.0.0.1:8000',
        reuseExistingServer: true,
    },
});
