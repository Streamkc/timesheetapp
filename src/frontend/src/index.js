import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from "antd";
import App from 'app.js';
import 'app.css';

const container= document.getElementById("root");
const client= ReactDom.createRoot(root);
client.render(
    <ConfigProvider
        theme={
            {
                primaryColor: "#1DA57A",
            }
        } 
    >
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ConfigProvider>
);

