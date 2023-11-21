import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PublicClientApplication } from '@azure/msal-browser';

import App from './app';
import { msalConfig } from "./auth/authConfig";

export const msalInstance = new PublicClientApplication(msalConfig);


// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <App msalInstance={msalInstance} />
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
