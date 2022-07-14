import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

// App routes all the pages, which are made up of components
import App from './App';


ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);
