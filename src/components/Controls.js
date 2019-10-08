import React from 'react';

const Controls = (props) => {
    let alert = null;

    if(!props.isValidNumber) {
        alert = (
            <div className="ssts-controls__alert">
                The number of paragraphs must be a number between 1 and 30.
            </div>
        );
    } 

    return (
        <div className="ssts-controls">
            Controls
            { alert }
            <form className="ssts-controls__form" onSubmit={ props.handleSubmit }>
                <label className="ssts-controls__label" htmlFor="numberOfParagraphs">Number of Paragraphs</label>
                <input 
                    className="sstc-controls__text-field"
                    value={ props.numberOfParagraphs } 
                    onChange={ props.changeNumberOfParagraphs }
                    onBlur={ props.validateNumberOfParagraphs }
                    name="numberOfParagraphs"
                />
                <button className="ssts-controls__submit-button" type="submit">Generate Text</button>
            </form>
        </div>
    );
}

export default Controls;