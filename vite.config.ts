import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        global: {}
    },
    resolve: {
        alias: {
            '@shared': path.resolve(__dirname, './src/shared'),
            '@widgets': path.resolve(__dirname, './src/widgets'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@features': path.resolve(__dirname, './src/features')
        }
    }
});
