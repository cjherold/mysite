import { TopNav, Footer } from '../components';
import { useState, useEffect } from 'react';
import $ from 'jquery';



export default function Main({ pageName, children }) {
    const [isDark, setIsDark] = useState(false);

	// Set dark/light mode according to the browswer
	useEffect(() => {
		// const usingDarkMode = !(window?.matchMedia('(prefers-color-scheme: dark)').matches);
		const usingDarkMode = false;
		setIsDark(usingDarkMode);
		if (isDark) {
			$('html').addClass('dark-theme');
		}
	}, [isDark]);


    // Wrapper for each page that adds nav and footer
    return (
        <div id={`${pageName}-page`}>
            <TopNav/>
            {children}
            <Footer/>
        </div>
    )
}