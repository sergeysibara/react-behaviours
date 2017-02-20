import React, { Component, PropTypes } from 'react';

import {BehavioursContainer} from 'reactBehaviours';
import {MaskInput} from 'appmodule';

export default class TunableInput extends BehavioursContainer {
    constructor(props) {
        super(props);

        this.state = {
            maxLengthBehaviourEnabled: true,
            maskBehaviourEnabled: true
        };

        this.bindMethods(['onMaxLengthStateChangeHandler', 'onMaskStateChangeHandler']);
    }

    onMaxLengthStateChangeHandler(event) {
        this.setState({maxLengthBehaviourEnabled: event.target.checked});
    }

    onMaskStateChangeHandler(event) {
        this.setState({maskBehaviourEnabled: event.target.checked});
    }

    render() {
        let maskInputHtml =
            <MaskInput
                MaxLengthBehaviour={{enabled: this.state.maxLengthBehaviourEnabled, maxLength:5}}
                MaskBehaviour={{ enabled: this.state.maskBehaviourEnabled, pattern:'^[0-9]*$'}}
                />;

        return (
            <div>
                <input type="checkbox" onChange={this.onMaskStateChangeHandler } defaultChecked/> Enable/Disable Digits MaskBehaviour
                <br/>
                <input type="checkbox" onChange={this.onMaxLengthStateChangeHandler} defaultChecked/> Enable/Disable MaxLengthBehaviour
                <br/>
                { maskInputHtml }
            </div>
        )
    }
}