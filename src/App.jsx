
import './scss/main.scss';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Home, Sudoku, Mailcall, Error404 } from './pages';


export default function App() {
	return (
		<HashRouter basename='/'>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/mailcall" element={<Mailcall  />} />
				<Route exact path="/sudoku" element={<Sudoku  />} />
				<Route exact path="*" element={<Error404 />} />
			</Routes>
		</HashRouter>
	)
}
