import React, { Component, PropTypes } from 'react';
import {Behaviour} from 'reactBehaviours';

export default class MaskBehaviour extends Behaviour {
    constructor(props, owner) {
        super(props, owner);
        this.updateProps(props);
    }

    updateProps(props) {
        super.updateProps(props);
        if (props === undefined)
            return;
        this._regex = new RegExp(props.pattern);
        this._prevValue = null;
    }

    onKeyDown(event) {
        this._prevValue = event.target.value;
    };

    onChange(event) {
        var result = this._regex.test(event.target.value);
        if (!result) {
            event.target.value = this._prevValue;
        }
    }
}
