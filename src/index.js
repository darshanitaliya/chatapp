import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvide } from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthContextProvider>
    <ChatContextProvide>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvide>
  </AuthContextProvider>
);
