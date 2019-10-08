import React from 'react';

const TextView = (props) => {
    let businessText;

    if(props.businessText) {
        businessText = props.businessText.split('\n').map(paragraph => {
            return (
                <p className="ssts-textview__paragraph">{ paragraph }</p>
            );
        });
    } else {
        businessText = null;
    }

    return (
        <div className="ssts-textview">
            { businessText }
        </div>
    );
}

export default TextView;