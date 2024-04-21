import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { TicketProvider } from './TicketContext';
import { TimerProvider } from './Timer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TimerProvider>
      <TicketProvider>
        <App />
      </TicketProvider>
    </TimerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
