import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));

const onRedirectCallback = (appState) => {
  window.location.replace(appState?.returnTo || "/dashboard");
};

const isMock = import.meta.env.VITE_USE_MOCK_AUTH === "true";

root.render(
  isMock ? (
    <App />
  ) : (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  )
);
