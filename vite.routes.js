import res from 'express/lib/response';
import { resolve } from 'path';

const routes = {
	main: resolve('/index.html'),
	sudoku: resolve('/sudoku.html'),
	quizbuilder: resolve('/quizbuilder.html'),
	soon: resolve('/soon.html')
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
	'/soon': {
		title: 'Soon'
	}
};

export { routes, pageData };
