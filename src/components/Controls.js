import React from 'react';

const Controls = (props) => {
    let alert = null;
    let isButtonClickable = true;

    if(!props.isValidNumber) {
        alert = (
            <div className="ssts-controls__alert">
                The number of paragraphs must be a number between 1 and 30.
            </div>
        );

        isButtonClickable = false;
    } 

    return (
        <div className="ssts-controls">
            <form className="ssts-controls__form" onSubmit={ props.handleSubmit }>
                { alert }
                <label className="ssts-controls__label" htmlFor="numberOfParagraphs">Paragraphs (1-30): </label>
                <input 
                    type="number"
                    className="ssts-controls__text-field"
                    value={ props.numberOfParagraphs } 
                    onChange={ props.changeNumberOfParagraphs }
                    onBlur={ props.validateNumberOfParagraphs }
                    name="numberOfParagraphs"
                />
                <button className="ssts-controls__submit-button" type="submit" disabled={ !isButtonClickable }>Generate</button>
            </form>
            <hr className="ssts-controls__divider" />
            <h3>What is this?</h3>
            <p>
                This is a text generator that creates transcripts of business meetings using a 
                mad-libs like algorithm.
            </p>
            <h3>Why does this exist?</h3>
            <p>
                I don't know, I find the over-use of buzzwords in marketing pitches funny for some reason.
                This is a completely pointless app, but sometimes it gives funny results.
            </p>
        </div>
    );
}

export default Controls;