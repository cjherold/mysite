import { resolve } from 'path';

const routes = {
	main: resolve('/index.html'),
	sudoku: resolve('/sudoku.html'),
	quizbuilder: resolve('/quizbuilder.html'),
};

const pageData = {
	'/index': {
		title: 'Christopher Herold',
	},
	'/sudoku': {
		title: 'Sudoku',
	},
	'/quizbuilder': {
		title: 'Quizbuilder'
	},
};

export { routes, pageData };
