import { TopNav, Footer } from '../components';
import { useEffect } from 'react';
import $ from 'jquery';


export default function Main({ pageName, children }) {
	// Set dark/light mode according to the browswer
	useEffect(() => {
		// const usingDarkMode = !(window?.matchMedia('(prefers-color-scheme: dark)').matches);
		const usingDarkMode = false;
		if (usingDarkMode) return $('html').addClass('dark-theme');
	}, []);

	// Wrapper for each page that adds nav and footer
	return (
		<div id={`${pageName}-page`}>
			<TopNav/>
			{children}
			<Footer/>
		</div>
	)
}