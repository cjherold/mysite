


export default function QuizApp() {
    return (
        <div id="comp-quizapp">
            <div id="quiz-container" className="container rounded border mb-5 shadow">
                <h3 id="question-text" className="row border-bottom  p-3">Question Here</h3>


                <div id="multiple-choice-answers" className="row p-3 d-none content-container">

                    <div id="option1" className="d-flex col-12 p-3 mb-3 border-bottom">
                        <input className="mr-3 my-auto" type="radio" name="answer" checked="checked" value="" />
                        <p className="my-auto">Answer text here</p>
                    </div>
                    <div id="option2" className="d-flex col-12 p-3 mb-3 border-bottom">
                        <input className="mr-3 my-auto" type="radio" name="answer" value="" />
                        <p className="my-auto">Answer text here</p>
                    </div>
                    <div id="option3" className="d-flex col-12 p-3 mb-3 border-bottom">
                        <input className="mr-3 my-auto" type="radio" name="answer" value="" />
                        <p className="my-auto">Answer text here</p>
                    </div>
                    <div id="option4" className="d-flex col-12 p-3 mb-3 border-bottom">
                        <input className="mr-3 my-auto" type="radio" name="answer" value="" />
                        <p className="my-auto">Answer text here</p>
                    </div>


                    <div className="col-12 d-flex justify-content-center">
                        <button id="next" className="btn btn-success m-2 mt-auto ml-auto next-button">Next</button>
                    </div>

                </div>


                <div id="true-false-answers" className="row p-3 content-container">
                    <p className="message-area"></p>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-success m-2 ml-auto mt-auto true-false-button" data-tfvalue="true">True</button>
                        <button className="btn btn-danger m-2 mt-auto true-false-button" data-tfvalue="false">False</button>
                    </div>
                </div>


                <div id="finished-container" className="row p-3 d-none content-container">

                    <p id="finished-message" className="message-area"></p>

                    <div className="col-12 d-flex justify-content-center">
                        <button id="new-game-btn" className="btn btn-primary m-2 mt-auto ml-auto">Try Again</button>
                    </div>
                </div>


                <div id="response-container" className="row p-3 d-none content-container">
                    <p id="question-answer" className="message-area"></p>

                    <div className="col-12 d-flex justify-content-center">
                        <button id="response-btn" className="btn btn-primary m-2 mt-auto ml-auto">Continue</button>
                    </div>
                </div>


                <div className="progress my-3">
                    <div id="progress-bar" className="progress-bar" role="progressbar"></div>
                </div>

            </div>

            <script defer src="./quizbuilder.js"></script>
        </div>
    )
}
