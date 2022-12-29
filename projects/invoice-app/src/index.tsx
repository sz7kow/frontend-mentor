import React from 'react';
import ReactDOM from 'react-dom/client';
import {Application} from 'components/application';
import {reportWebVitals} from 'utils/report-web-vitals';

import 'css/tailwind.css';

const rootElement = document.getElementById('react-root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);

reportWebVitals();
