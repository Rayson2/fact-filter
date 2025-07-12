import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: { port: 3000 },
    define: {
      'import.meta.env.REACT_APP_EMAILJS_SERVICE_ID': JSON.stringify(env.REACT_APP_EMAILJS_SERVICE_ID),
      'import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(env.REACT_APP_EMAILJS_TEMPLATE_ID),
      'import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY': JSON.stringify(env.REACT_APP_EMAILJS_PUBLIC_KEY),
    },
  };
});
