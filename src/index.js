import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./util/theme.js";

import App from "components/App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
            <App data-testid="appComponent" />

            </Router>
            
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
