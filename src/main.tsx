import React from 'react';
import ReactDOM from 'react-dom/client';

import '@shared/config/i18n/i18n';

import { App } from './app/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
