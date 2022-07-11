


function QuizApp() {
    return (
        <div id="comp-quizapp">
            <div id="quiz-container" class="container rounded border mb-5 shadow">
                <h3 id="question-text" class="row border-bottom  p-3">Question Here</h3>


                <div id="multiple-choice-answers" class="row p-3 d-none content-container">

                    <div id="option1" class="d-flex col-12 p-3 mb-3 border-bottom">
                        <input class="mr-3 my-auto" type="radio" name="answer" checked="checked" value="" />
                        <p class="my-auto">Answer text here</p>
                    </div>
                    <div id="option2" class="d-flex col-12 p-3 mb-3 border-bottom">
                        <input class="mr-3 my-auto" type="radio" name="answer" value="" />
                        <p class="my-auto">Answer text here</p>
                    </div>
                    <div id="option3" class="d-flex col-12 p-3 mb-3 border-bottom">
                        <input class="mr-3 my-auto" type="radio" name="answer" value="" />
                        <p class="my-auto">Answer text here</p>
                    </div>
                    <div id="option4" class="d-flex col-12 p-3 mb-3 border-bottom">
                        <input class="mr-3 my-auto" type="radio" name="answer" value="" />
                        <p class="my-auto">Answer text here</p>
                    </div>


                    <div class="col-12 d-flex justify-content-center">
                        <button id="next" class="btn btn-success m-2 mt-auto ml-auto next-button">Next</button>
                    </div>

                </div>


                <div id="true-false-answers" class="row p-3 content-container">
                    <p class="message-area"></p>
                    <div class="col-12 d-flex justify-content-center">
                        <button class="btn btn-success m-2 ml-auto mt-auto true-false-button" data-tfvalue="true">True</button>
                        <button class="btn btn-danger m-2 mt-auto true-false-button" data-tfvalue="false">False</button>
                    </div>
                </div>


                <div id="finished-container" class="row p-3 d-none content-container">

                    <p id="finished-message" class="message-area"></p>

                    <div class="col-12 d-flex justify-content-center">
                        <button id="new-game-btn" class="btn btn-primary m-2 mt-auto ml-auto">Try Again</button>
                    </div>
                </div>


                <div id="response-container" class="row p-3 d-none content-container">
                    <p id="question-answer" class="message-area"></p>

                    <div class="col-12 d-flex justify-content-center">
                        <button id="response-btn" class="btn btn-primary m-2 mt-auto ml-auto">Continue</button>
                    </div>
                </div>


                <div class="progress my-3">
                    <div id="progress-bar" class="progress-bar" role="progressbar"></div>
                </div>

            </div>

            <script src="./quizbuilder.js"></script>
        </div>
    )
}

export default QuizApp;