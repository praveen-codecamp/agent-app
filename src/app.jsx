/* eslint-disable perfectionist/sort-imports */
import { MsalProvider } from '@azure/msal-react';
import PropTypes from 'prop-types';
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import "./i18n";
// import { useTranslation } from 'react-i18next';
// ----------------------------------------------------------------------

export default function App({ msalInstance }) {
  useScrollToTop();
  // const { i18n, t } = useTranslation();

  return (
    <ThemeProvider>
      <MsalProvider instance={msalInstance}>
        <Router />
      </MsalProvider>
    </ThemeProvider>
  );
}

App.propTypes = {
  msalInstance: PropTypes.object
};

