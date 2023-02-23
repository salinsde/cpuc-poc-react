import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
        }),
    ],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src/'),
        },
    },
});
