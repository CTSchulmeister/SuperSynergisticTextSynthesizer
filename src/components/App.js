import React, { Component } from 'react';
import Controls from './Controls';
import TextView from './TextView';

import generateText from '../synth';

class App extends Component {
    constructor(props) { 
        super(props);

        this.state = {
            businessText: null,
            numberOfParagraphs: 1,
            isValidNumber: true
        };

        this.changeNumberOfParagraphs = this.changeNumberOfParagraphs.bind(this);
        this.validateNumberOfParagraphs = this.validateNumberOfParagraphs.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeNumberOfParagraphs(e) {
        let newNumberOfParagraphs = e.target.value;

        this.setState({
            numberOfParagraphs: newNumberOfParagraphs
        });
    }

    validateNumberOfParagraphs() {
        if(this.state.numberOfParagraphs < 1 || this.state.numberOfParagraphs > 30 || isNaN(this.state.numberOfParagraphs)) {
            this.setState({
                isValidNumber: false
            });
        } else {
            this.setState({
                isValidNumber: true
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.isValidNumber) {
            let newBusinessText = generateText(this.state.numberOfParagraphs);

            this.setState({
                businessText: newBusinessText
            });
        }
    }

    render() {
        return (
            <div className="ssts-container">
                <Controls 
                    changeNumberOfParagraphs={ this.changeNumberOfParagraphs }
                    validateNumberOfParagraphs={ this.validateNumberOfParagraphs }
                    handleSubmit={ this.handleSubmit }
                    isValidNumber={ this.state.isValidNumber }
                    numberOfParagraphs={ this.state.numberOfParagraphs }
                />
                <TextView
                    businessText={ this.state.businessText }
                />
            </div>  
        );
    }
}

export default App;
