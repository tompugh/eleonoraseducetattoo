import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import path from 'path';
import { execSync } from 'node:child_process'
import pkg from './package.json'

function getGitCommitHash() {
    try {
        return execSync('git rev-parse --short HEAD').toString().trim()
    } catch {
        return 'unknown'
    }
}

export default defineConfig({
    plugins: [plugin()],
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
        __APP_COMMIT_HASH__: JSON.stringify(getGitCommitHash()),
        __APP_BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `$assets-path: '@/assets';`
            }
        }
    }
})
