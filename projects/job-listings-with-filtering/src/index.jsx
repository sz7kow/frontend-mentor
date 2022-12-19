import React from 'react';
import ReactDOM from 'react-dom/client';

import {Application} from 'components/application';
import {reportWebVitals} from 'utils/report-web-vitals';

import 'assets/css/reset.css';

const rootElement = document.getElementById('react-root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

reportWebVitals();
