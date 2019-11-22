import React, { Component } from 'react';
import Snake from './Snakey';
import Food from './Food';
import { Button } from "reactstrap"

const getRandomCoordinates = () => {
    let min = 1;
    let max = 98;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y]
}

const initialState = {
    food: getRandomCoordinates(),
    speed: 200,
    direction: 'RIGHT',
    snakeDots: [
        [0, 0],
        [2, 0]
    ],
    points: 0,
    startStop: true
}

class Snakey extends Component {
    state = initialState;
    startGame = () => {
        let test = setInterval(this.moveSnake, this.state.speed);
        let speed = this.state.speed
        this.setState({speed:speed})
        let startGame = this.state.startStop
        if(startGame) {startGame = false
            this.setState({startStop:startGame}) 
            return test}
    }


    componentDidUpdate() {
        this.checkIfOutOfBorders();
        this.checkIfCollapsed();
        this.checkIfEat();
    }

    onKeyDown = (e) => {
        e = e || window.event;
        switch (e.keyCode) {
            case 38:
                this.setState({ direction: 'UP' });
                break;
            case 40:
                this.setState({ direction: 'DOWN' });
                break;
            case 37:
                this.setState({ direction: 'LEFT' });
                break;
            case 39:
                this.setState({ direction: 'RIGHT' });
                break;
            default:
        }
    }

    moveSnake = () => {
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length - 1];

        switch (this.state.direction) {
            case 'RIGHT':
                head = [head[0] + 2, head[1]];
                break;
            case 'LEFT':
                head = [head[0] - 2, head[1]];
                break;
            case 'DOWN':
                head = [head[0], head[1] + 2];
                break;
            case 'UP':
                head = [head[0], head[1] - 2];
                break;
            default:
        }
        dots.push(head);
        dots.shift();
        this.setState({
            snakeDots: dots
        })
    }

    checkIfOutOfBorders() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            this.onGameOver();
        }
    }

    checkIfCollapsed() {
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                this.onGameOver();
            }
        })
    }

    checkIfEat() {
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        let food = this.state.food;
        if (head[0] === food[0] && head[1] === food[1]) {
            this.setState({
                food: getRandomCoordinates()
            })
            this.enlargeSnake();
            this.increaseSpeed();
        }
    }

    enlargeSnake() {
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([])
        let points = this.state.points
        console.log(newSnake.length)
        if (newSnake.length > 2) {
            points += 200
        }
        console.log(points)
        this.setState({
            snakeDots: newSnake,
            points: points,
        })
    }

    increaseSpeed() {
        if (this.state.speed > 10) {
            this.setState({
                speed: this.state.speed - 10
            })
        }
    }

    onGameOver() {
        alert(`Game Over. Snake length is ${this.state.snakeDots.length}`);
        this.setState(initialState)
    }

    render() {
        document.onkeydown = this.onKeyDown;
        return (
            <div className="snakeBack">
                   <h2 className="text-center" style={{marginBot:-25}}>Snake  <Button onClick={this.startGame}>Start Game</Button></h2>

                <div className="game-area">
                    <Snake snakeDots={this.state.snakeDots} />
                    <Food dot={this.state.food} />

                </div>
                <h2 className="text-center" style={{ marginTop: -45 }}>Points: {this.state.points}</h2>
            </div>
        );
    }
}

export default Snakey;