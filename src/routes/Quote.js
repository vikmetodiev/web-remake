import React, { Component } from 'react'
import axios from 'axios'
import { Container, Alert, Button } from "reactstrap"
import { observer } from "mobx-react"

@observer
class Quote extends Component {
    constructor(props) {
        let storedClicks = 0;

        if (localStorage.getItem('clicks')) {
            storedClicks = parseInt(localStorage.getItem('clicks'));
        }
        super(props)
        this.state = {
            quote: '',
            author: '',
            clicks: storedClicks,
        }

    }

    componentDidMount() {
        this.getQuote()
    }

    click = () => {
        var newclick = this.state.clicks + 1;
        this.setState({ clicks: newclick });
        // Set it
        localStorage.setItem('clicks', newclick);
    }
    getQuote() {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

        axios.get(url)
            .then(res => {
                let data = res.data.quotes
                let quoteNum = Math.floor(Math.random() * data.length) //quote number
                let randomQuote = data[quoteNum] //actual quote

                this.setState({
                    quote: randomQuote['quote'],
                    author: randomQuote['author']
                })
            })
    }

    getNewQuote = () => {
        this.getQuote()
    }

    render() {
        const { quote, author } = this.state
        return (
            <div className="backImg2">
                <Container className="mediaText" style={{ width: "50%" }}>
                    <h1>Generating random positive quote</h1>
                    <br />
                    <Alert color="dark"><div style={{ color: "azure" }}><h4>{quote}</h4></div>
                        <h5>{author}</h5></Alert>
                    <img style={{ width: 300, marginTop: -35 }} src="./image.jpg" alt="world" />
                    <div><Button onClick={this.getNewQuote} style={{ backgroundColor: "azure", width: 300, height: 50, color: "gainsboro", fontSize: 20 }}>Get New Quote</Button></div>
 
                </Container>
            </div>
        )
    }
}

export default Quote