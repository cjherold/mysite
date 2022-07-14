
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Sudoku, Mailcall, Error404 } from './pages';




function App() {
    // const basename = 'https://www.cjherold.com';
    const basename = 'https://cjherold.github.io/mysite';
    return (
        <Router basename={basename}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mailcall" element={<Mailcall  />} />
                <Route path="/sudoku" element={<Sudoku  />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    )
}



export default App;