import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { route } from '@shared/config/route/route';

export const RouteProvider = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(route).map(({ element, path }) => (
                <Route key={path} element={element} path={path} />
            ))}
        </Routes>
    </Suspense>
);
