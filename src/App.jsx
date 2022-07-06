
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Sudoku, Mailcall, Quizbuilder, Error404 } from './pages';
import { TopNav, Footer } from './components';
import $ from 'jquery';



function App() {
    const [isDark, setIsDark] = useState(false);

    // Effect that checks if the browser is using dark mode
    useEffect(() => {
        // const usingDarkMode = !(window?.matchMedia('(prefers-color-scheme: dark)').matches);
        const usingDarkMode = false;
        setIsDark(usingDarkMode);
        if (usingDarkMode) {
            $('html').addClass('dark-theme');
        } else {
            $('html').removeClass('dark-theme');
        }
    }, [isDark])

    return (
        <>
            <TopNav/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home isDark={isDark}/>} />
                    <Route path="/mailcall" element={<Mailcall isDark={isDark} />} />
                    <Route path="/quizbuilder" element={<Quizbuilder isDark={isDark} />} />
                    <Route path="/sudoku" element={<Sudoku isDark={isDark} />} />
                    <Route path="*" element={<Error404 isDark={isDark}/>} />
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}



export default App;