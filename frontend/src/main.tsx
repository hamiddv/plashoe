import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const BaseUrl = "http://127.0.0.1:8000/"

createRoot(document.getElementById('root')!).render(
    <App />
)
