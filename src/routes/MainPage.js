import React from "react"

import Galery from "./Galery.js"

import axios from "axios";
import swal from "sweetalert";
import { Redirect } from 'react-router-dom'

let levels = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 640000, 128000, 250000, 500000, 1000000]
class MainPage extends React.Component {
    constructor() {
        super()
        this.state = {
            TriviaData: [],
            current: 0
        }
    }

    componentDidMount() {
        axios.get("https://opentdb.com/api.php?amount=15&category=23&type=multiple")
            .then(response => {
                console.log(response.data.results)
                this.setState({ TriviaData: response.data.results })
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
    correctClick = () => {
        let current = this.state.current
        current++
        console.log(current)
        this.setState({
            current: current
        })
    }
    wrongClick = () => {
        let current = 0
        this.setState({ current: current })
        swal("Good job!", "You LOST, Try Again!", "success").then(function () {
            document.location.reload();
        });
    }


    render() {
        let current = this.state.current;
        if (current === 2) {
            return <Redirect to="/Animes" />
        }
        let AllTriviaData = this.state.TriviaData[this.state.current]
        let question = this.state.TriviaData.map(item => {
            return item.question
        })
        question = question[this.state.current]

        let answers = []
        const TriviaLevels = levels.map((ar, index) => {
            let isPast = this.state.current > index;
            let isCurrent = this.state.current === index;
            return (<p style={{ padding: "0 10px", textAlign: "center", backgroundColor: "#3c3c3c", borderRadius: 15, color: isPast || isCurrent ? "greenyellow" : "inherit", textDecoration: isPast ? "line-through" : "inherit" }} key={index}>${ar}</p>)
        }).reverse();
        if (AllTriviaData) {
            answers = [...AllTriviaData.incorrect_answers.map(inc_ans => {
                return {
                    answer: inc_ans,
                    correct: false
                }
            }), {
                answer: AllTriviaData.correct_answer,
                correct: true
            }]
            answers = this.shuffle(answers)
        }

        let all_answers = answers.map((item, i) => {
            let clickHandler = {}
            if (item.correct) {
                clickHandler = this.correctClick
            }
            else if (!item.correct) {
                clickHandler = this.wrongClick
            }
            return <div key={i}><button onClick={clickHandler}>{item.answer}</button></div>
        })
        return (
            <div style={{ color: "azure" }}>
                <h4 className="stage">{TriviaLevels}</h4>
                <h1>This is the Main Page or smf like that</h1>
                <h2>QuestioN: {question}</h2>
                <h3>{all_answers}</h3>
            </div>
        )
    }
}
export default MainPage