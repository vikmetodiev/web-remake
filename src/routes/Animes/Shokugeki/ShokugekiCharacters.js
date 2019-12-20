import React from "react"
import { Button, Row, Col } from "reactstrap"
import CharactersInfo from "./CharactersInfo.js"

import Data from "./Data"
class ShokugekiCharacters extends React.Component {
    constructor() {
        super()
        this.state = {
            data: Data,
            allItems: Data
        }
    }

    sortByProperty(a, b, prop) {
        if (a[prop] < b[prop]) {
            return -1
        }
        if (a[prop] > b[prop]) {
            return 1
        }
        return 0
    }

    sortByName = () => {
        let products = this.state.data.sort((a, b) => this.sortByProperty(a, b, "name"))
        this.setState({
            data: products
        })
    }

    backwardsSortByName = () => {
        let products = this.state.data.sort((a, b) => this.sortByProperty(b, a, "name"))
        this.setState({
            data: products
        })
    }

    sortByID = () => {
        let products = this.state.data.sort((a, b) => this.sortByProperty(a, b, "id"))
        this.setState({
            data: products
        })
    }
    removeFirstItem = () => {
        this.setState({
            data: this.state.data.slice(1)
        })
    }

    removeLastItem = () => {
        this.setState({
            data: this.state.data.slice(0, this.state.data.length - 1)
        })
    }
    backwardsSortByID = () => {
        let products = this.state.data.sort((a, b) => this.sortByProperty(b, a, "id"))
        this.setState({
            data: products
        })
    }

    getItems = () => {
        let items = this.state.allItems
        this.setState({
            data: items
        })
    }
    addItem = () => {
        let item = []
        item.push({ id: 13, name: "Vivi", description: "girl", url: "", info: "princess from Alabasta" })
        this.setState({
            data: this.state.data.push(item)
        })
    }

    shuffle = (answers) => {
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

    render() {
        let Characters = this.state.data.map(item => <CharactersInfo key={item.id} item={item} />)
        Characters = this.shuffle(Characters);
        return (
            <ul className="text-center" style={{ color: "azure" }}>
                <h1>Shokugeki no Soma Characters </h1>
                <Row>
                    
                    <Col>
                        <aside className="sortinButtons" style={{ position: "inherit" }}>
                            <ul style={{ listStyle: "none" }}>
                                <li><Button className="onePieceButtons" onClick={this.getItems}>Get all the Items Back</Button></li>
                                <li><Button className="onePieceButtons" onClick={this.removeLastItem}>Remove last Item</Button></li>
                                <li><Button className="onePieceButtons" onClick={this.removeFirstItem}>Remove first Item</Button></li>
                                <li><Button className="onePieceButtons" onClick={this.backwardsSortByID}>Sort Reversed</Button></li>
                                <li><Button className="onePieceButtons" onClick={this.sortByID}>Sort Back</Button></li>
                                <li><Button className="onePieceButtons" onClick={this.sortByName}>Sort by Name</Button></li>
                                <li><Button className="onePieceButtons" onClick={this.backwardsSortByName}>Sort by Name backwards</Button></li>
                            </ul>
                        </aside>
                    </Col>

                    {Characters}

                </Row>

            </ul>
        )
    }
}

export default ShokugekiCharacters