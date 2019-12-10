import React from "react"
import axios from "axios"
import swal from 'sweetalert'
import { Button, ButtonGroup, Progress, Container, Card, CardBody } from 'reactstrap';
const FIFTY_HELP = "FIFTYFIFTY";
const CALL_FRIEND = "CALLFRIEND";
const AUDIENCE_HELP = "AUDIENCEHELP"

const Levels = [100, 200, 300, 400, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 12800, 25000, 100000]
class Trivia extends React.Component {
    constructor() {

        super()
        this.state = {
            questions: [],
            current: 0,
            indexes: [],
            jokers: [{
                ID: FIFTY_HELP,
                disabled: false
            },
            {
                ID: AUDIENCE_HELP,
                disabled: false
            },
            {
                ID: CALL_FRIEND,
                disabled: false
            }]
        }
    }
    componentDidMount() {
        axios.get("https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=multiple")
            .then(response => {
                console.log(response.data.results);
                this.setState({ questions: response.data.results });
            })
    }

    decodeHTMLEntities = (str) => {
        let element = document.createElement('div');
        if (str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }

        return str;
    }
    handleClick = () => {
        let current = this.state.current;
        current = current + 1;
        this.setState({
            current: current,
        })
        console.log(this.state.colorGreen)
        if (current > 14) {
            swal("AMAZInG!", "You've Won! Wanna try Again?", "success").then(function () {
                document.location.reload();
            });
        }
    }

    audience_helper = () => {
        let questions = this.state.questions;
        let current = questions[this.state.current];
        let answer = current.correct_answer
        let wa1 = current.incorrect_answers[0]
        let wa2 = current.incorrect_answers[1]
        let wa3 = current.incorrect_answers[2]
        let jokers = this.state.jokers;
        let currentJoker = jokers.find((joker) => joker.ID === AUDIENCE_HELP);
        currentJoker.disabled = true;
        let rand_num = Math.floor((Math.random() * 40) + 1);
        let third_num = 40 - rand_num
        this.setState({
            jokers: jokers
        })
        return (
            swal(wa1 + ": " + rand_num + "% \n " + answer + ": 60% \n " + wa2 + ": " + third_num + "% \n " + wa3 + ": 0%")
        )
    }
    call_helper = () => {
        let questions = this.state.questions;
        let current = questions[this.state.current];
        let answer = current.correct_answer
        let jokers = this.state.jokers;
        let currentJoker = jokers.find((joker) => joker.ID === CALL_FRIEND);
        currentJoker.disabled = true;
        this.setState({
            jokers: jokers
        })
        return (
            swal("I think that the " + answer + " answer is the correct one!")
        )
    }
    fifty_helper = () => {
        let questions = this.state.questions;
        let current = questions[this.state.current];
        current.incorrect_answers.pop();
        current.incorrect_answers.pop();
        let jokers = this.state.jokers;
        let currentJoker = jokers.find((joker) => joker.ID === FIFTY_HELP);
        currentJoker.disabled = true;
        this.setState({
            jokers: jokers
        })
    }
    shuffle(answers) {
        let counter = answers.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = answers[counter];
            answers[counter] = answers[index];
            answers[index] = temp;
        }

        return answers;
    }
    wrongClick = () => {
        let current = this.state.current;
        current = 0;
        this.setState({
            current: current,
        })

        swal("Good job!", "You LOST, Try Again!", "success").then(function () {
            document.location.reload();
        });

    }


    render() {
        let current = this.state.current
        let currentQuestion = this.state.questions[current];
        let answers = []
        let tester = this.state.questions.map(question => {
            return question.question
        })

        if (currentQuestion) {
            answers = [...currentQuestion.incorrect_answers.map((inc_answ) => {
                return {
                    answer: inc_answ,
                    correct: false
                }
            }), {
                answer: currentQuestion.correct_answer,
                correct: true
            }];
            answers = this.shuffle(answers);

        }
        const levels_test = Levels.map((ar, index) => {
            let isPast = this.state.current > index;
            let isCurrent = this.state.current === index;
            return (<p style={{ padding: "0 10px", textAlign: "center", backgroundColor: "#3c3c3c", borderRadius: 15, color: isPast || isCurrent ? "greenyellow" : "inherit", textDecoration: isPast ? "line-through" : "inherit" }} key={index}>${ar}</p>)
        }).reverse();
        let answersJSX = answers.map((answer, i) => {
            let clickHandler = () => { };
            if (answer.correct) {
                clickHandler = this.handleClick;

            } else {
                clickHandler = this.wrongClick;
            }
            return <div>
                <Button className="button" style={{ color: "GoldenRod", backgroundColor: "azure ", cursor: "pointer", borderRadius: 15, height: "auto", width: "100%", fontSize: 18, margin: 5 }} color="secondary" onClick={clickHandler} id="curs"> {this.decodeHTMLEntities(answer.answer)}</Button>
            </div>
        })
        let jokers = this.state.jokers.map((joker) => {
            let jokerClickHandler = () => { };
            let btnId = "";
            switch (joker.ID) {
                case FIFTY_HELP:
                    jokerClickHandler = this.fifty_helper;
                    btnId = "Fifty Fifty"
                    break;
                case AUDIENCE_HELP:
                    jokerClickHandler = this.audience_helper;
                    btnId = "Audience Help"
                    break;
                case CALL_FRIEND:
                    jokerClickHandler = this.call_helper;
                    btnId = "Call a friend"
                    break;
                default:

            }
            let cursorStyle = joker.disabled ? { color: "#856404", backgroundColor: "Khaki", borderRadius: 15 } : { cursor: "pointer", marginRight: 5, color: "#856404 ", backgroundColor: "Khaki ", borderRadius: 15 };
            let theClass = []
            let classes = joker.disabled ? theClass = ["onePieceButtons", "custom", "completed"] : theClass = ["onePieceButtons" ,"custom"]
            return <Button className={theClass.join(' ')} style={cursorStyle} disabled={joker.disabled} onClick={jokerClickHandler} id={btnId} key={btnId}>{btnId}</Button>

        })
        return (
            <div>
                <section>
                    <Card className="ClassicBackground">
                        <CardBody className="backImg1">
                            <Container>
                                <br />


                                <div className="stage" >
                                    {levels_test}
                                </div>
                            </Container>
                            <Container>
                                <h2 className="levels">Question{current + 1}</h2>
                                <Container style={{ fontFamily: "Times New Roman Times serif", fontSize: 25 }} >
                                    <Container>
                                        <h5 className="question" >
                                            {this.decodeHTMLEntities(tester[current])}
                                        </h5>
                                    </Container>
                                </Container>
                                <div className="text-center triviaButtons" style={{ marginRight: 25 }}><ButtonGroup size="sm">{answersJSX[0]} {answersJSX[1]}  </ButtonGroup><br />
                                    <ButtonGroup size="sm" >{answersJSX[2]}{answersJSX[3]}  </ButtonGroup>
                                    <br /><br />
                                    <ButtonGroup >{jokers}</ButtonGroup></div>
                                <br /><br />

                                <h3 className="levels" style={{ fontSize: 30 }}>Progress</h3>

                                <Progress color="warning" value={this.state.current * 100 / 15} />
                            </Container>
                        </CardBody>
                    </Card>
                </section>
            </div>
        );
    }

}

export default Trivia