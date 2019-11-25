import React from "react"
import { Button, Row } from "reactstrap"
import CharactersInfo from "./CharactersInfo.js"

import Data from "./Data"
class OPCharacters extends React.Component {
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
        this.setState({
            data: this.state.data.push({ id:13,name:"Vivi", description:"girl",url:"",info:"princess from Alabasta"})
        })
    }

    render() {
        const Characters = this.state.data.map(item => <CharactersInfo key={item.id} item={item} />)
        console.log(this.state.data)
        return (
            <ul className="text-center" style={{ color: "azure" }}>

                <h1>One Piece Characters <Button href="/Animes">Back</Button></h1>
                <aside className="sortinButtons" style={{ position: "inherit" }}>
                    <ul>
                        <li><Button onClick={this.getItems}>Get all the Items Back</Button></li>
                        <li><Button onClick={this.removeLastItem}>Remove last Item</Button></li>
                        <li><Button onClick={this.removeFirstItem}>Remove first Item</Button></li>
                        <li><Button onClick={this.backwardsSortByID}>Sort Reversed</Button></li>
                        <li><Button onClick={this.sortByID}>Sort Back</Button></li>
                        <li><Button onClick={this.sortByName}>Sort by Name</Button></li>
                        <li><Button onClick={this.backwardsSortByName}>Sort by Name backwards</Button></li>
                        <li><Button onClick={() => this.addItem(this.state.data)}>Adding Item in a list</Button></li>
                    </ul>
                </aside>
                <Row>
                    {Characters}

                </Row>

            </ul>
        )
    }
}

export default OPCharacters