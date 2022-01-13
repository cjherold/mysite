// Loads navbar from here. All changes here affect all navbars.
const content = () => {
    return `
    <a class="navbar-brand cust-font link-text" href="./index.html">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item cust-font">
                <a class="nav-link link-text" href="./sudoku.html">Sudoku</a>
            </li>
            <!-- <li class="nav-item cust-font">
                <a class="nav-link link-text" href="./soon.html">Soon</a>
            </li> -->
        </ul>
    </div>
`}

$('#navbar').append(content);

