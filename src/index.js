import React from "react";
import ReactDOM from "react-dom/client";

// App routes all the pages, which are made up of components
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);