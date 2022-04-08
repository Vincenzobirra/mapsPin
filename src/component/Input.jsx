import React from "react";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <label htmlFor={this.props.id} className="form-label">{this.props.labelName} </label>
                <input type={this.props.type} name={this.props.name} id={this.props.id} onChange={this.props.change} className="form-control"/>
            </div>
        )
    }
}