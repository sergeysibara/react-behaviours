import React, { Component, PropTypes } from 'react';

/**
 * Базовый класс для всех реакт компонентов, использующих behaviours.
 * Содержит логику вызова функций в behaviours. Если BehaviourX.enabled=true, то его методы будут вызваны.
 */
export default class BehavioursContainer extends React.Component {
    constructor(props) {
        super(props);
        this.behaviours = [];

        this.bindMethods = (methods)=> {
            methods.forEach((method) => this[method] = this[method].bind(this));
        };

        //для обработчиков событий нужно делать так, иначе this будет undefined
        this.bindMethods(['changeHandler', 'keyDownHandler']);
    }

    initBehaviours(behaviours) {
        this.behaviours = behaviours;

        behaviours.forEach((behaviour) => {
            let name = firstToLowerCase(behaviour.name);
            this[name] = behaviour;
        });
    }

    /**
     * Вызывает метод с указанным именем во всех Behaviours c enabled=true.
     */
    callMethodInAllBehaviours(funcName, args) {
        let behaviours = this.behaviours;
        for (let i = 0; i < behaviours.length; i++) {
            if (behaviours[i].enabled == true && behaviours[i][funcName]!==undefined) {
                behaviours[i][funcName](args[0], args[1], args[2], args[3]);
            }
        }
    }

    _getBehaviour(behaviourName) {
        for (let i = 0; i < this.behaviours.length; i++) {
            let behaviour = this.behaviours[i];
            if (behaviour.name == behaviourName)
                return behaviour;
        }
        return null;
    }

    componentWillReceiveProps(nextProps) {
        for (let propKey in nextProps) {
            let behaviour = this._getBehaviour(propKey);
            if (behaviour != null) {
                behaviour.updateProps(nextProps[propKey]);
            }
        }
    }

    //Ниже перечень функций, вызываемый в поведениях
    //shouldComponentUpdate отсутсвует, т.к. в нем нет необходимости

    componentWillMount() {
        this.callMethodInAllBehaviours('componentWillMount', arguments);
    }

    componentDidMount() {
        this.callMethodInAllBehaviours('componentDidMount', arguments);
    }

    componentWillUpdate(nextProps, nextState) {
        this.callMethodInAllBehaviours('componentWillUpdate', arguments);
    }

    componentDidUpdate(prevProps, prevState) {
        this.callMethodInAllBehaviours('componentDidUpdate', arguments);
    }

    componentWillUnmount() {
        this.callMethodInAllBehaviours('componentWillUnmount', arguments);
    }

    //здесь перечень обработчиков стандартных событий - https://facebook.github.io/react/docs/events.html
    //перечень далеко не полный, поэтому при необходимости нужно дописать сюда нужные обработчики
    changeHandler(event) {
        this.callMethodInAllBehaviours('onChange', arguments);
    }

    keyDownHandler(event) {
        this.callMethodInAllBehaviours('onKeyDown', arguments);
    }
}

function firstToLowerCase( str ) {
    return str.substr(0, 1).toLowerCase() + str.substr(1);
}