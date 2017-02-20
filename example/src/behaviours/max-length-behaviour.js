import React, { Component, PropTypes } from 'react';
import {Behaviour} from 'reactBehaviours';

export default class MaxLengthBehaviour extends Behaviour {
    constructor(props, owner) {
        super(props, owner);
        this.updateProps(props);
    }

    updateProps(props) {
        super.updateProps(props);
        if (props === undefined)
            return;
        this._maxLength = props.maxLength;
        this._prevValue = null;
    }

    onKeyDown(event) {
        this._prevValue = event.target.value;
    };

    onChange(event) {
        if (event.target.value.length > this._maxLength) {
            event.target.value = this._prevValue;
        }
    }
}
