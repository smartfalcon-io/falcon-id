import React from "react";
import App from "./App";
import Modal from "react-modal";

import  ReactDOM  from "react-dom";

Modal.setAppElement("#root");

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)

