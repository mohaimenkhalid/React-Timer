import React, {Component} from 'react';
import './Title.css';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "This is a demo title",
            isInput: false
        }
    }

    editHandler() {
        this.setState({
            ...this.state,
            isInput: true
        })
    }

    inputChange(event) {
        this.setState({
            ...this.state,
            title : event.target.value
        })
    }
    keyPressHandler(event) {
        if (event.key !== 'Enter') return event.defaultPrevented;
        this.setState({
            ...this.state,
            isInput: false
        })
    }

    blurHandler(event) {
        this.setState({
            ...this.state,
            isInput: false
        })
    }

    render() {
        let output = null;
        if(this.state.isInput) {
            output = (
                <div className="title">
                    <input className="form-control"
                           type="text"
                           value={ this.state.title }
                           onChange={(event)=> this.inputChange(event)}
                           onKeyPress={(event)=> this.keyPressHandler(event)}
                           onBlur={(event) => { this.blurHandler(event)}}
                    />
                </div>
            );
        } else {
            output = (
                <div className="d-flex title">
                    <h1>{ this.state.title }</h1>
                    <span className="ml-auto edit-icon" onClick={ ()=> this.editHandler() }>
                        <i className="fas fa-pencil-alt"/>
                    </span>
                </div>
            );
        }
        return (
            <div className="mt-5">
                { output }
            </div>
        );
    }
}

export default Title;
