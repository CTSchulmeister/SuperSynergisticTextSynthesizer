import React from 'react';

const TextView = (props) => {
    let transcript = null;

    if(props.businessText) {
        let businessText = props.businessText.split('\n').map(paragraph => {
            return (
                <p className="ssts-textview__paragraph">{ paragraph }</p>
            );
        });

        let language = window.navigator.userLanguage || window.navigator.language;

        transcript = (
            <div className="ssts-textview__transcript">
                <h2 className="ssts-textview__header">
                Company Co. Headquarters - { new Date(Date.now()).toLocaleString(language) }
                </h2>
                <span className="ssts-textview__speaker-name">
                    CEO Boss McSynergy
                </span>
                { businessText }
            </div>
        );
    }

    return (
        <div className="ssts-textview">
            { transcript }
        </div>
    );
}

export default TextView;