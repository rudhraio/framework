import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './assets/css/styles.css';
import router from './pages/router';

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
