import { Suspense } from 'react';

import { Navbar } from '@widgets/Navbar';

import { RouteProvider } from './provider/RouteProvider/RouteProvider';

import './styles/global.css';

export const App = () => (
    <div>
        <Suspense fallback=''>
            <div className='content-page'>
                <RouteProvider />
            </div>
        </Suspense>
    </div>
);
