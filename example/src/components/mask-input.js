import React, { Component, PropTypes } from 'react';

import {BehavioursContainer} from 'reactBehaviours';
import {MaskBehaviour} from '../app-module';
import {MaxLengthBehaviour} from '../app-module';

export default class MaskInput extends BehavioursContainer {
    constructor(props) {
        super(props);
        this.initBehaviours([
            new MaskBehaviour(props.MaskBehaviour, this),
            new MaxLengthBehaviour(props.MaxLengthBehaviour, this)
        ]);

        this.state = {
            inputValue: ''
        };
    }

    changeHandler(event) {
        super.changeHandler(event);
        this.setState({inputValue: event.target.value});
    }

    render() {
        return (
            <input type="text" ref="targetInput" value={this.state.inputValue}
                   onChange={this.changeHandler}
                   onKeyDown={this.keyDownHandler}
            />
        )
    }
}
