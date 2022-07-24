# This is the repo for my personal website.

###### I'm currently rebuilding my site in React so you may find some bugs. I previously built it using my Spark website builder. The docs folder is basically React's build folder but Github pages expects a certain format.
#### Home
* The main splash page that just has a little info about myself.
#### Sudoku
* A sudoku game made using javascript.
#### Quizbuilder
* A simple page that uses a json object to build a quiz.

#### Mailcall
* A tool for building mailto links.


# TODO
* Move all the code into this project and get all pages working
* Once things work, convert them to react-style
* Clean up code and organize things more
* Style dark/light mode and toggle switch?


### Icons
* 'react-icons'
* 'bootstrap-icons'

### Github Pages Fix
###### For some reason React Routes don't play nice with Github Pages (something about acessing the browser's history). To get around this you can use HashRouter in place of BrowserRouter. I also tried setting the homepage in the package.json but that didn't seem to work.
```jsx
// here is an example of App.jsx using HashRouter
import { Routes, Route, HashRouter } from 'react-router-dom';

export default function App() {
    return (
        // using HashRouter where BrowserRouter would be
        <HashRouter basename='/'>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="*" element={<Error404 />} />
            </Routes>
        </HashRouter>
    )
}
```


### My .vscode/extensions.json
```json
{
    "recommendations": [
        "bierner.markdown-preview-github-styles",
        "christian-kohler.path-intellisense",
        "dbaeumer.vscode-eslint",
        "eamodio.gitlens",
        "esbenp.prettier-vscode",
        "formulahendry.code-runner",
        "GrapeCity.gc-excelviewer",
        "rangav.vscode-thunder-client",
        "tomoki1207.pdf",
        "dsznajder.es7-react-js-snippets",
        "kisstkondoros.vscode-gutter-preview",
        "ms-python.python",
        "ms-python.vscode-pylance",
        "ms-toolsai.jupyter",
        "ms-toolsai.jupyter-keymap",
        "ms-toolsai.jupyter-renderers",
        "aaron-bond.better-comments",
        "oderwat.indent-rainbow",
    ],
}
```