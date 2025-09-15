import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import * as serviceworker from './serviceWorker'
import "./translate/i18n";

import App from "./App";

ReactDOM.render(
	<CssBaseline>
		<App />
	</CssBaseline>,
	document.getElementById("root"),
	() => {
		window.finishProgress();
	}
);

serviceworker.register()