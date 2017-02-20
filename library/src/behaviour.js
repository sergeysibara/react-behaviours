/**
 * Базовый класс для поведений, добавляемых к реакт компонентам
 */
export default class Behaviour {
    /**
     * @param {{enabled: boolean, ...}} props
     * @param {React.Component} owner
     */
    constructor(owner, props) {
        this.owner = owner;
        this.name = Object.getPrototypeOf(this).constructor.name;
        this.enabled = true;
    }

    //вызывается в конструкторе и в componentWillReceiveProps.
    updateProps(props) {
        this.enabled = ( !(props instanceof Object) || props.enabled === undefined) ? true : props.enabled;
    }
}

