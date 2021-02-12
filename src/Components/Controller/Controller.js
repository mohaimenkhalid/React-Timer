import React, {Component} from 'react';

class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: true,
            pause: false,
            lap: false,
            reset: false
        }
    }

    startHandler() {
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true
        })
        this.props.start();
    }

    pauseHandler() {
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            reset: true
        })
        this.props.pause();
    }

    lapHandler() {
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true
        })
        this.props.lap();
    }

    resetHandler() {
        this.setState({
            ...this.state,
            start: true,
            reset: false,
        })
        this.props.reset();
    }


    getController() {
        let output = null;

        if (this.state.start && !this.state.reset) {
            output = (
                <div>
                    <button className="btn btn-success px-5"
                        onClick={ ()=> this.startHandler() }
                        >start
                    </button>
                </div>
            );
        } else if (this.state.pause && this.state.lap) {
            output = (
                <div>
                    <button className="btn btn-primary px-5 mr-3"
                            onClick={ ()=> this.pauseHandler() }
                    >pause
                    </button>

                    <button className="btn btn-warning px-5"
                            onClick={ ()=> this.lapHandler() }
                    >Lap
                    </button>
                </div>
            )
        }

        else if (this.state.start && this.state.reset) {
            output = (
                <div>
                    <button className="btn btn-success px-5 mr-3"
                            onClick={ ()=> this.startHandler() }
                    >start
                    </button>

                    <button className="btn btn-danger px-5"
                            onClick={ ()=> this.resetHandler() }
                    >Reset
                    </button>
                </div>
            )
        }
        return output;
    }

    render() {
        return (
            <div className="mt-5">
                {this.getController()}
            </div>
        );
    }
}

export default Controller;
