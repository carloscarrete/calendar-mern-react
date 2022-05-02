import React from 'react';
import {createRoot} from 'react-dom/client'
import {CalendarApp} from './CalendarApp';

import './styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<CalendarApp />);

