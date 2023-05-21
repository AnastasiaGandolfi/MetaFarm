import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Root";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/font/roboto/Roboto-Regular.ttf';
import './assets/style/css/common.css';
import i18n from '../src/languages/i18n'; 

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
i18n.init();